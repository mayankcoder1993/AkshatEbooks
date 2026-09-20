import fs from 'node:fs/promises'
import { BOOK } from '../src/books/python-absolute-beginners/content/index.js'

const source = 'single-build/index.html'
const output = `${BOOK.outputDir}/${BOOK.offlineFilename}`
await fs.mkdir(BOOK.outputDir, { recursive: true })
await fs.copyFile(source, output)
console.log(`Generated ${output}`)
