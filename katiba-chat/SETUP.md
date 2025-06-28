# JuaKatiba Setup Guide

## Quick Setup for Your Kenyan Constitution Assistant

### Prerequisites

- Node.js 18+ installed
- Git installed
- Constitution of Kenya PDF document

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Legal Documents

1. Place your Constitution of Kenya PDF in the `data/` folder
2. Name it something clear like: `constitution-of-kenya-2010.pdf`
3. Add any other Kenyan legal documents (PDFs) to the same folder

### 3. Start the Application

```bash
npm run start
```

This will start both the web app (http://localhost:8000) and the API (http://localhost:7071).

### 4. Upload Legal Documents

In a new terminal, run:

```bash
npm run upload:docs
```

This processes your legal documents and makes them available to the AI.

### 5. Access JuaKatiba

Open your browser to: http://localhost:8000

## Development Environment

### File Structure for Legal Documents

```
data/
├── constitution-of-kenya-2010.pdf
├── employment-act-2007.pdf
├── land-act-2012.pdf
└── other-legal-documents.pdf
```

### Adding New Legal Documents

1. Add PDF files to the `data/` folder
2. Run `npm run upload:docs` to process them
3. The AI will automatically include them in responses

### Customization Tips

- **Prompt Suggestions**: Edit `packages/webapp/src/components/chat.ts` to modify the example questions
- **System Prompts**: Edit `packages/api/src/functions/chats-post.ts` to adjust how the AI responds
- **Styling**: Modify `packages/webapp/index.html` for visual customizations

### Using Local AI (Ollama)

If you don't want to use Azure OpenAI, you can run locally with Ollama:

1. Install Ollama: https://ollama.com/
2. Pull a model: `ollama pull llama3.1`
3. Start the app as normal

The app will automatically detect and use Ollama if Azure OpenAI isn't configured.

### Troubleshooting

- **Documents not uploading**: Check that PDFs are text-searchable (not just scanned images)
- **Port conflicts**: Change ports in package.json scripts if needed
- **Memory issues**: Large legal documents may need more memory allocation

### Next Steps

1. Test with sample questions about the Constitution
2. Add more legal documents as needed
3. Customize the interface for your specific use case
4. Consider deploying to Azure for production use

---

**Ready to help Kenyans understand their constitution!** 🇰🇪
