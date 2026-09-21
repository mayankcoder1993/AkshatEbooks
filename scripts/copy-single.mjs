import fs from 'node:fs/promises'
import { DEFAULT_BOOK_ID, loadBookPackage } from '../src/catalog/generated/registry.js'

const bookId = process.env.BOOK_ID || DEFAULT_BOOK_ID
const editionId = process.env.EDITION_ID
const publication = await loadBookPackage(bookId, editionId)
const source = 'single-build/index.html'
const output = `${publication.BOOK.outputDir}/${publication.BOOK.offlineFilename}`
await fs.mkdir(publication.BOOK.outputDir, { recursive: true })
await fs.copyFile(source, output)
console.log(`Generated ${output} (${bookId} ${publication.BOOK.editionId} v${publication.BOOK.version})`)
