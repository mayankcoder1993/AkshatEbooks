import fs from 'node:fs/promises'
import path from 'node:path'
import Ajv2020 from 'ajv/dist/2020.js'
import addFormats from 'ajv-formats'

const ROOT = process.cwd()
const BOOKS_ROOT = path.join(ROOT, 'src/books')
const readJson = async file => JSON.parse(await fs.readFile(file, 'utf8'))

async function walk(directory, filename, found = []) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name)
    if (entry.isDirectory()) await walk(target, filename, found)
    else if (entry.name === filename) found.push(target)
  }
  return found
}

function humanErrors(errors = []) {
  return errors.map(error => `${error.instancePath || '/'} ${error.message}`).join('; ')
}

async function discoverEdition({ directory, manifest, editionFile, validateEdition, validateRelease }) {
  const edition = await readJson(editionFile)
  if (!validateEdition(edition)) throw new Error(`${path.relative(ROOT, editionFile)}: ${humanErrors(validateEdition.errors)}`)
  if (edition.bookId !== manifest.id) throw new Error(`${path.relative(ROOT, editionFile)}: edition bookId does not match ${manifest.id}`)
  if (path.basename(path.dirname(editionFile)) !== edition.id) throw new Error(`${path.relative(ROOT, editionFile)}: edition folder and id differ`)
  const chapterIds = edition.chapters.map(chapter => chapter.id)
  if (new Set(chapterIds).size !== chapterIds.length) throw new Error(`${manifest.id}/${edition.id}: duplicate chapter id`)

  const contentFile = edition.contentModule ? path.join(directory, edition.contentModule) : null
  if (contentFile) await fs.access(contentFile)

  const releases = []
  const releaseDirectory = path.join(path.dirname(editionFile), 'releases')
  try {
    for (const name of (await fs.readdir(releaseDirectory)).filter(name => name.endsWith('.json')).sort()) {
      const file = path.join(releaseDirectory, name)
      const release = await readJson(file)
      if (!validateRelease(release)) throw new Error(`${path.relative(ROOT, file)}: ${humanErrors(validateRelease.errors)}`)
      if (release.bookId !== manifest.id || release.editionId !== edition.id) throw new Error(`${path.relative(ROOT, file)}: release identity mismatch`)
      releases.push({ file, release })
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
  return { edition, editionFile, contentFile, releases }
}

export async function discoverBooks() {
  const [bookSchema, editionSchema, releaseSchema, manifestFiles] = await Promise.all([
    readJson(path.join(ROOT, 'src/schemas/book-manifest.schema.json')),
    readJson(path.join(ROOT, 'src/schemas/edition-manifest.schema.json')),
    readJson(path.join(ROOT, 'src/schemas/release-manifest.schema.json')),
    walk(BOOKS_ROOT, 'book.manifest.json'),
  ])
  const ajv = new Ajv2020({ allErrors: true, strict: true })
  addFormats(ajv)
  const validateBook = ajv.compile(bookSchema)
  const validateEdition = ajv.compile(editionSchema)
  const validateRelease = ajv.compile(releaseSchema)
  const books = []
  const ids = new Set()

  for (const manifestFile of manifestFiles.sort()) {
    const directory = path.dirname(manifestFile)
    const manifest = await readJson(manifestFile)
    if (!validateBook(manifest)) throw new Error(`${path.relative(ROOT, manifestFile)}: ${humanErrors(validateBook.errors)}`)
    if (ids.has(manifest.id)) throw new Error(`Duplicate book id: ${manifest.id}`)
    ids.add(manifest.id)

    for (const instruction of manifest.instructionFiles || []) await fs.access(path.join(ROOT, instruction))

    const editionFiles = await walk(path.join(directory, 'editions'), 'edition.manifest.json')
    if (!editionFiles.length) throw new Error(`${manifest.id}: no edition manifests found`)
    const editions = []
    const editionIds = new Set()
    for (const editionFile of editionFiles.sort()) {
      const discovered = await discoverEdition({ directory, manifest, editionFile, validateEdition, validateRelease })
      if (editionIds.has(discovered.edition.id)) throw new Error(`${manifest.id}: duplicate edition id ${discovered.edition.id}`)
      editionIds.add(discovered.edition.id)
      editions.push(discovered)
    }

    const current = editions.find(item => item.edition.id === manifest.currentEdition)
    if (!current) throw new Error(`${manifest.id}: current edition ${manifest.currentEdition} was not found`)
    if (manifest.readable && !current.contentFile) throw new Error(`${manifest.id}: readable current edition requires a contentModule`)

    books.push({ manifest, editions, edition: current.edition, releases: current.releases, directory, manifestFile, editionFile: current.editionFile, contentFile: current.contentFile })
  }

  if (!books.length) throw new Error('No book manifests found under src/books')
  return books
}

export const toPosix = value => value.split(path.sep).join('/')
export const projectRelative = value => toPosix(path.relative(ROOT, value))
