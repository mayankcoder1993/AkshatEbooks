import fs from 'node:fs/promises'
import path from 'node:path'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { discoverBooks } from './lib/book-system.mjs'

const bookId = process.env.BOOK_ID || process.argv[2]
if (!bookId) throw new Error('Choose a book with BOOK_ID=<book-id> npm run release:book')
const books = await discoverBooks()
const book = books.find(entry => entry.manifest.id === bookId)
if (!book) throw new Error(`Unknown book id: ${bookId}`)
const editionId = process.env.EDITION_ID || book.manifest.currentEdition
const editionEntry = book.editions.find(item => item.edition.id === editionId)
if (!editionEntry) throw new Error(`Unknown edition: ${bookId}/${editionId}`)
const { edition } = editionEntry
if (!['ready', 'published'].includes(edition.status)) throw new Error(`${bookId}/${edition.id} is ${edition.status}; an edition must be ready before release`)
if (book.manifest.branding.some(item => item.state !== 'ready')) throw new Error(`${bookId}: all required branding must be ready before release`)

const formats = [['docx', edition.outputs.docx], ['offlineHtml', edition.outputs.offlineHtml]]
const artifacts = []
for (const [format, filename] of formats) {
  const file = path.join(process.cwd(), edition.outputDir, filename)
  const data = await fs.readFile(file)
  artifacts.push({ format, filename, bytes: data.length, sha256: createHash('sha256').update(data).digest('hex') })
}

const release = {
  $schema: '../../../../../../../schemas/release-manifest.schema.json',
  schemaVersion: 1,
  bookId,
  editionId: edition.id,
  contentVersion: edition.contentVersion,
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(),
  releasedAt: new Date().toISOString(),
  verifiedThrough: edition.verifiedThrough,
  artifacts,
}
const directory = path.join(book.directory, 'editions', edition.id, 'releases')
const output = path.join(directory, `${edition.contentVersion}.json`)
await fs.mkdir(directory, { recursive: true })
try {
  await fs.writeFile(output, `${JSON.stringify(release, null, 2)}\n`, { flag: 'wx' })
} catch (error) {
  if (error.code === 'EEXIST') throw new Error(`Release ${bookId}/${edition.id} v${edition.contentVersion} already exists and is immutable`)
  throw error
}
console.log(`Created immutable release record ${path.relative(process.cwd(), output)}`)
for (const artifact of artifacts) console.log(`- ${artifact.format}: ${artifact.filename} (${artifact.bytes} bytes) ${artifact.sha256}`)
