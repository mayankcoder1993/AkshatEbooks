import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { Packer } from 'docx'
import { BOOK } from '../src/content/index.js'
import { buildBookDocument, setImageLoader } from '../src/export/docx.js'
setImageLoader(async (source, block) => {
  const selected = block?.file || source
  const path = selected.startsWith('file:') ? fileURLToPath(selected) : selected
  return new Uint8Array(await fs.readFile(path))
})
const output = `public/${BOOK.filename}`
await fs.mkdir('public', { recursive: true })
await fs.writeFile(output, await Packer.toBuffer(await buildBookDocument()))
console.log(`Generated ${output}`)
