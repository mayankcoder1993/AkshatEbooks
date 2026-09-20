import fs from 'node:fs/promises'
import { Resvg } from '@resvg/resvg-js'

const sourcePath = 'public/brand/sarva-gyana-koshah-logo.png'
const outputPaths = [
  'src/brand/generated/sarva-gyana-koshah-mark.png',
  'public/brand/sarva-gyana-koshah-mark.png',
]

const source = await fs.readFile(sourcePath)
const embedded = source.toString('base64')
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1024 1024">
  <defs><clipPath id="circle"><circle cx="512" cy="592" r="500"/></clipPath></defs>
  <image href="data:image/png;base64,${embedded}" x="0" y="0" width="1024" height="1536" clip-path="url(#circle)"/>
</svg>`
const png = new Resvg(svg, { fitTo: { mode: 'width', value: 512 } }).render().asPng()

for (const outputPath of outputPaths) {
  await fs.mkdir(outputPath.slice(0, outputPath.lastIndexOf('/')), { recursive: true })
  await fs.writeFile(outputPath, png)
}
console.log(`Generated circular imprint mark from the unchanged PNG master (${png.length} bytes).`)
