import { mkdirSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs'
import { Resvg } from '@resvg/resvg-js'

const TEMPLATE = 'brand/sinha-crest-template.svg'
const VARIANTS = [
  { name: 'classic', label: 'Classic — gold on warm black', bg: '#070707', metal: '#D4AF37' },
  { name: 'royal-indigo', label: 'Royal Indigo — gold on deep indigo', bg: '#1E1B4B', metal: '#D4AF37' },
  { name: 'maroon', label: 'Heritage Maroon — gold on maroon', bg: '#4A0D1F', metal: '#D4AF37' },
  { name: 'ivory', label: 'Ivory — antique gold on ivory', bg: '#FAF6EC', metal: '#A8842C' },
]

const template = readFileSync(TEMPLATE, 'utf8')
mkdirSync('src/assets/brand', { recursive: true })
mkdirSync('public/brand', { recursive: true })

for (const variant of VARIANTS) {
  let svg = template
    .replaceAll('currentColor', variant.metal)
    .replaceAll('#080707', variant.bg)

  svg = svg.replace(
    /(<svg[^>]*>)/,
    `$1\n  <rect x="0" y="0" width="1000" height="1020" fill="${variant.bg}"/>`,
  )

  const svgName = `sinha-crest-${variant.name}.svg`
  const pngName = `sinha-crest-${variant.name}.png`
  writeFileSync(`src/assets/brand/${svgName}`, svg)
  copyFileSync(`src/assets/brand/${svgName}`, `public/brand/${svgName}`)

  const png = new Resvg(svg, {
    background: variant.bg,
    fitTo: { mode: 'width', value: 1200 },
  }).render().asPng()

  writeFileSync(`src/assets/brand/${pngName}`, png)
  copyFileSync(`src/assets/brand/${pngName}`, `public/brand/${pngName}`)
  console.log(`✓ ${variant.label} -> ${svgName} + ${pngName} (${(png.length / 1024).toFixed(0)} KB)`)
}

console.log('All crest variants generated.')
