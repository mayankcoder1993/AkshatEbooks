import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { Packer } from 'docx'
import { DEFAULT_BOOK_ID, loadBookPackage } from '../src/catalog/generated/registry.js'
import { buildBookDocument, setImageLoader } from '../src/export/docx.js'

const bookId = process.env.BOOK_ID || DEFAULT_BOOK_ID
const editionId = process.env.EDITION_ID
const publication = await loadBookPackage(bookId, editionId)
setImageLoader(async (source, block) => {
  const selected = block?.file || source
  const path = selected.startsWith('file:') ? fileURLToPath(selected) : selected
  return new Uint8Array(await fs.readFile(path))
})
const output = `${publication.BOOK.outputDir}/${publication.BOOK.filename}`
await fs.mkdir(publication.BOOK.outputDir, { recursive: true })
await fs.writeFile(output, await Packer.toBuffer(await buildBookDocument(publication)))
console.log(`Generated ${output} (${bookId} ${publication.BOOK.editionId} v${publication.BOOK.version})`)
