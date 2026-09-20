import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { Packer } from 'docx'
import { BOOK } from '../src/books/python-absolute-beginners/content/index.js'
import { buildBookDocument, setImageLoader } from '../src/export/docx.js'
setImageLoader(async (source, block) => {
  const selected = block?.file || source
  const path = selected.startsWith('file:') ? fileURLToPath(selected) : selected
  return new Uint8Array(await fs.readFile(path))
})
const output = `${BOOK.outputDir}/${BOOK.filename}`
await fs.mkdir(BOOK.outputDir, { recursive: true })
await fs.writeFile(output, await Packer.toBuffer(await buildBookDocument()))
console.log(`Generated ${output}`)
