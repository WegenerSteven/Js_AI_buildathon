import fs from 'node:fs/promises';
import path from 'node:path';

// This script uploads all legal PDF documents from the 'data' folder to the JuaKatiba ingestion API.
// It processes documents like the Constitution of Kenya and other legal documents.
// Node.js equivalent of this bash script:
// ```
// for file in data/*.pdf; do
//   curl -X POST -F "file=@$file" <api_url>/api/documents
// done
// ```
async function uploadDocuments(apiUrl, dataFolder) {
  try {
    const uploadUrl = `${apiUrl}/api/documents`;
    const files = await fs.readdir(dataFolder);
    console.log(`Uploading legal documents to JuaKatiba: ${uploadUrl}`);

    /* eslint-disable no-await-in-loop */
    for (const file of files) {
      if (path.extname(file).toLowerCase() === '.pdf') {
        console.log(`Processing legal document: ${file}`);
        const data = await fs.readFile(path.join(dataFolder, file));
        const blobParts = new Array(data);
        const formData = new FormData();
        formData.append('file', new File(blobParts, file));

        const response = await fetch(uploadUrl, {
          method: 'post',
          body: formData,
        });

        const responseData = await response.json();
        if (response.ok) {
          console.log(`✓ ${file}: ${responseData.message}`);
        } else {
          throw new Error(responseData.error);
        }
      }
    }

    console.log('All legal documents processed successfully!');
    /* eslint-enable no-await-in-loop */
  } catch (error) {
    console.error(`Could not upload legal documents: ${error.message}`);
    process.exitCode = -1;
  }
}

const apiUrl = process.argv[2];
if (apiUrl) {
  await uploadDocuments(apiUrl, 'data');
} else {
  console.log('Usage: node upload-documents.js <api_url>');
  console.log('Example: node upload-documents.js http://localhost:7071');
  console.log('This will upload all PDF documents from the data/ folder to JuaKatiba');
  process.exitCode = -1;
}
