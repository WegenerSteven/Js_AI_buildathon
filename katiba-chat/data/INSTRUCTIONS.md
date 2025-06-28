# Instructions for Adding Legal Documents

## Adding the Constitution of Kenya

1. **Obtain the official PDF**: Download the official Constitution of Kenya (2010) PDF from an authoritative source such as:

   - Kenya Law Reports (kenyalaw.org)
   - Government of Kenya official website
   - National Council for Law Reporting

2. **Place the PDF file**: Save the PDF file in this `data/` folder with a clear name like:

   - `constitution-of-kenya-2010.pdf`
   - `kenya-constitution.pdf`

3. **Upload the documents**: After placing your PDF files here, run:
   ```bash
   npm run upload:docs
   ```

## Adding Other Kenyan Legal Documents

You can add other important Kenyan legal documents such as:

- **Acts of Parliament**: Employment Act, Land Act, etc.
- **Legal Codes**: Penal Code, Civil Procedure Code, etc.
- **Regulations**: Various legal regulations and statutory instruments
- **Court Rules**: Rules of various courts in Kenya

## File Naming Convention

Use descriptive names for your PDF files:

- `constitution-of-kenya-2010.pdf`
- `employment-act-2007.pdf`
- `land-act-2012.pdf`
- `penal-code.pdf`

## Important Notes

- Only use official or authoritative legal documents
- Ensure PDFs are text-searchable (not just scanned images)
- Large files will take longer to process
- The AI will reference these documents when answering legal questions

## Processing Status

After uploading documents, the system will:

1. Extract text from the PDFs
2. Create vector embeddings for semantic search
3. Store the processed data for the AI to use
4. Make the documents available for querying

Your documents will then be ready to power JuaKatiba's responses!
