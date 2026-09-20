import fs from 'node:fs/promises'
import path from 'node:path'
import { discoverBooks } from './lib/book-system.mjs'

const values = process.argv.slice(2)
const args = Object.fromEntries(values.flatMap((item, index) => item.startsWith('--') ? [[item.slice(2), values[index + 1]]] : []))
for (const key of ['book', 'id', 'label', 'version']) if (!args[key] || args[key].startsWith('--')) throw new Error(`Missing --${key}`)
if (!/^edition-[0-9]{2}$/.test(args.id)) throw new Error('--id must look like edition-02')
if (!/^[0-9]+\.[0-9]+\.[0-9]+$/.test(args.version)) throw new Error('--version must use semantic versioning, for example 2.0.0')

const books = await discoverBooks()
const book = books.find(entry => entry.manifest.id === args.book)
if (!book) throw new Error(`Unknown book id: ${args.book}`)
if (book.editions.some(item => item.edition.id === args.id)) throw new Error(`Edition already exists: ${args.book}/${args.id}`)

const directory = path.join(book.directory, 'editions', args.id)
await Promise.all([
  fs.mkdir(path.join(directory, 'content'), { recursive: true }),
  fs.mkdir(path.join(directory, 'assets'), { recursive: true }),
  fs.mkdir(path.join(directory, 'theme'), { recursive: true }),
])
const date = new Date().toISOString().slice(0, 10)
const titleSlug = book.manifest.id.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join('-')
const edition = {
  $schema: '../../../../../../schemas/edition-manifest.schema.json',
  schemaVersion: 1,
  bookId: book.manifest.id,
  id: args.id,
  label: args.label,
  contentVersion: args.version,
  publicationYear: Number(args.year || date.slice(0, 4)),
  status: 'planned',
  verifiedThrough: date,
  chapters: [],
  outputDir: `public/books/${book.manifest.id}/${args.id}`,
  outputs: {
    docx: `${titleSlug}-${args.id}.docx`,
    offlineHtml: `${titleSlug}-${args.id}.html`,
  },
}
await Promise.all([
  fs.writeFile(path.join(directory, 'edition.manifest.json'), `${JSON.stringify(edition, null, 2)}\n`),
  fs.writeFile(path.join(directory, 'CHANGELOG.md'), `# ${args.label} Changelog\n\n## ${args.version}: ${date}\n\n- Created the planned edition package.\n`),
  fs.writeFile(path.join(directory, 'theme/README.md'), '# Edition Theme Overrides\n\nAdd only differences from publisher and profile styles.\n'),
])
console.log(`Created planned edition: ${book.manifest.id}/${args.id}`)
console.log('Add and validate its content before adding contentModule or making it the current edition.')
