import { isUnexpected } from "@azure-rest/ai-inference";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import pdfParse from "pdf-parse/lib/pdf-parse.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ModelClient from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

// Load environment variables from .env file

dotenv.config();

// Create an Express application and configure middleware
const app = express();
app.use(cors());
app.use(express.json());

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = path.resolve(__dirname, "../..");
const pdfPath = path.join(projectRoot, "data/employee_handbook.pdf");

//client initialization
const client = new ModelClient(
  process.env.AZURE_INFERENCE_SDK_ENDPOINT,
  new AzureKeyCredential(process.env.AZURE_INFERENCE_SDK_KEY)
);

// Endpoint to serve the PDF file
let pdfText = null;
let pdfChunks = [];
const CHUNK_SIZE = 800;

async function loadPDF() {
  if (pdfText) return pdfText;
  if (!fs.existsSync(pdfPath)) {
    console.error("PDF not found at", pdfPath);
    return "PDF not found";
  }
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdfParse(dataBuffer);
  pdfText = data.text;
  let currentChunk = "";
  const words = pdfText.split(/\s+/);

  for (const word of words) {
    if ((currentChunk + "" + word).length <= CHUNK_SIZE) {
      currentChunk += (currentChunk ? "" : "") + word;
    } else {
      pdfChunks.push(currentChunk);
      currentChunk = word;
    }
  }

  if (currentChunk) pdfChunks.push(currentChunk);
  console.log("PDF loaded and chunked:", pdfChunks.length, "chunks");
  return pdfText;
}

function retrieveRelevantContent(query) {
  const queryTerms = query
    .toLowerCase()
    .split(/\s+/) //convert query to relevant search terms
    .filter((term) => term.length > 3)
    .map((term) => term.replace(/[.,?!;:()"']/g, ""));

  if (queryTerms.length === 0) return [];
  const scoredChunks = pdfChunks.map((chunk) => {
    const chunkLower = chunk.toLowerCase();
    let score = 0;
    for (const term of queryTerms) {
      const regex = new RegExp(term, "g");
      const matches = chunkLower.match(regex);
      if (matches) score += matches.length;
    }
    return { chunk, score };
  });

  return scoredChunks
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.chunk);
}

// Endpoint to handle PDF content retrieval
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;
  const useRAG = req.body.useRAG === undefined ? true : req.body.useRAG;
  let messages = [];
  let sources = [];
  if (useRAG) {
    await loadPDF();
    sources = retrieveRelevantContent(userMessage);
    if (sources.length > 0) {
      messages.push({
        role: "system",
        content: `You are a helpful assistant answering questions about the company based on its employee handbook. 
        Use ONLY the following information from the handbook to answer the user's question.
        If you can't find relevant information in the provided context, say so clearly.
        --- EMPLOYEE HANDBOOK EXCERPTS ---
        ${sources.join("")}
        --- END OF EXCERPTS ---`,
      });
    } else {
      messages.push({
        role: "system",
        content: "You are a helpful assistant",
      });
    }
    messages.push({
      role: "user",
      content: userMessage,
    });
  } else {
    // Handle the case when useRAG is false
    messages = [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: userMessage },
    ];
  }

  try {
    const response = await client.path("chat/completions").post({
      body: {
        messages,
        max_tokens: 4096,
        temperature: 1,
        top_p: 1,
        model: "gpt-4.1",
      },
    });
    if (isUnexpected(response))
      throw new Error(response.body.error || "Model API error");
    res.json({
      reply: response.body.choices[0].message.content,
      sources: useRAG ? sources : [],
    });
  } catch (err) {
    let errorMessage =
      typeof err.message === "string"
        ? err.message
        : JSON.stringify(err.message);

    // Fallback if still not a string
    if (errorMessage === "[object Object]") {
      errorMessage = JSON.stringify(err, Object.getOwnPropertyNames(err));
    }

    console.error(
      "Model call failed:",
      errorMessage,
      err?.response?.data || err?.body || ""
    );
    res.status(500).json({
      error: "Model call failed",
      details: err,
      message: errorMessage,
    });
  }
});

app.get("/", (req, res) => {
  res.send("AI API Server is running.");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`AI API server running on port: https://localhost:${PORT}`);
});
