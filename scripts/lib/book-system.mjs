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

    const editionFile = path.join(directory, 'editions', manifest.currentEdition, 'edition.manifest.json')
    const edition = await readJson(editionFile)
    if (!validateEdition(edition)) throw new Error(`${path.relative(ROOT, editionFile)}: ${humanErrors(validateEdition.errors)}`)
    if (edition.bookId !== manifest.id || edition.id !== manifest.currentEdition) throw new Error(`${manifest.id}: current edition identity does not match its book manifest`)

    const contentFile = edition.contentModule ? path.join(directory, edition.contentModule) : null
    if (manifest.readable && !contentFile) throw new Error(`${manifest.id}: readable books require an edition contentModule`)
    if (contentFile) await fs.access(contentFile)
    for (const instruction of manifest.instructionFiles || []) await fs.access(path.join(ROOT, instruction))

    const chapterIds = manifest.chapters.map(chapter => chapter.id)
    if (new Set(chapterIds).size !== chapterIds.length) throw new Error(`${manifest.id}: duplicate chapter id in manifest`)

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

    books.push({ manifest, edition, releases, directory, manifestFile, editionFile, contentFile })
  }

  if (!books.length) throw new Error('No book manifests found under src/books')
  return books
}

export const toPosix = value => value.split(path.sep).join('/')
export const projectRelative = value => toPosix(path.relative(ROOT, value))
