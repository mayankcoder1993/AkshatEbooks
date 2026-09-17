import { renderToString } from 'react-dom/server'
import { asBlob } from 'html-docx-js-typescript'
import PrintBook from '../components/PrintBook.jsx'

/** Convert an inline <svg> element to a PNG data URL (Word can't display SVG). */
async function svgToPngDataUrl(svg) {
  const clone = svg.cloneNode(true)
  const vb = svg.viewBox?.baseVal
  const w = vb && vb.width ? vb.width : svg.clientWidth || 800
  const h = vb && vb.height ? vb.height : svg.clientHeight || 300
  clone.setAttribute('width', String(w))
  clone.setAttribute('height', String(h))
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg')

  const xml = new XMLSerializer().serializeToString(clone)
  const svgUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(xml)

  return await new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const scale = 2 // crisp in Word
      const canvas = document.createElement('canvas')
      canvas.width = w * scale
      canvas.height = h * scale
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.scale(scale, scale)
      ctx.drawImage(img, 0, 0, w, h)
      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = reject
    img.src = svgUrl
  })
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 5000)
}

const WORD_CSS = `
  body { font-family: 'Calibri', 'Segoe UI', sans-serif; color: #1a1d27; line-height: 1.55; }
  h1 { color: #4f39d6; font-size: 24pt; margin: 0 0 6pt; }
  h2 { color: #5b48e0; font-size: 15pt; margin: 18pt 0 6pt; border-bottom: 1.5px solid #ddd6fe; padding-bottom: 3pt; }
  h3 { color: #333; font-size: 13pt; }
  h4 { color: #4f39d6; font-size: 12pt; margin: 10pt 0 4pt; }
  h5 { color: #555; font-size: 10pt; margin: 8pt 0 2pt; }
  p { margin: 4pt 0; font-size: 10.5pt; }
  code { font-family: 'Consolas', monospace; background: #f3f0ff; color: #5b21b6; padding: 1pt 3pt; }
  pre { font-family: 'Consolas', monospace; background: #f6f7fb; border: 1px solid #e2e5ee; padding: 8pt; font-size: 9.5pt; white-space: pre-wrap; }
  .book-cover { text-align: center; margin-bottom: 24pt; }
  .cover-badge { font-size: 36pt; }
  .lesson-page { page-break-before: always; }
  .lesson-page-kicker { color: #7c5cfc; font-weight: bold; font-size: 9pt; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 2pt; }
  .lesson-page-sub { color: #5b6270; font-style: italic; }
  .objective, .takeaway { margin: 3pt 0; }
  .check { color: #10b981; font-weight: bold; }
  .pc-grid { border: 1px solid #e2e5ee; }
  .pc-cell { border-bottom: 1px solid #e2e5ee; padding: 6pt; }
  .pc-cell strong { color: #4f39d6; }
  .flow-wrap img { width: 100%; max-width: 620px; }
  .rv-timeline { margin: 8pt 0 8pt 18pt; }
  .rv-timeline li { margin: 6pt 0; }
  .rv-static-console pre { background: #f0fdf4; border-color: #bbf7d0; }
  .term-body { border: 1px solid #cbd5e1; background: #f8fafc; padding: 8pt; font-family: 'Consolas', monospace; font-size: 9.5pt; }
  .term-title { display: none; }
  .quiz-item { border: 1px solid #e2e5ee; padding: 6pt 8pt; margin: 5pt 0; border-radius: 6pt; }
  .quiz-item summary { font-weight: bold; color: #4f39d6; }
  .mistake { border-left: 3px solid #f59e0b; padding: 3pt 8pt; margin: 5pt 0; background: #fffbeb; }
  .bad { color: #b45309; }
  .callout { border: 1px solid #ddd6fe; background: #faf9ff; padding: 8pt 10pt; border-radius: 8pt; margin: 6pt 0; }
  .book-footer { margin-top: 24pt; text-align: center; color: #888; }
`

/**
 * Build the entire book as a formatted .docx file:
 * render the static book to HTML, strip screen-only bits,
 * rasterize SVG diagrams to PNG, then package with html-docx.
 */
export async function exportBookToWord(lessons) {
  const markup = renderToString(<PrintBook lessons={lessons} />)

  const holder = document.createElement('div')
  holder.innerHTML = markup

  holder.querySelectorAll('[data-screen-only], .no-print').forEach(n => n.remove())
  holder.querySelectorAll('details').forEach(d => d.setAttribute('open', ''))

  for (const svg of Array.from(holder.querySelectorAll('svg'))) {
    try {
      const png = await svgToPngDataUrl(svg)
      const img = document.createElement('img')
      img.src = png
      img.style.maxWidth = '100%'
      svg.replaceWith(img)
    } catch (e) {
      console.warn('Could not convert an SVG diagram:', e)
    }
  }

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>${WORD_CSS}</style></head>
<body>${holder.innerHTML}</body>
</html>`

  const blob = await asBlob(html, {
    orientation: 'portrait',
    margins: { top: 1080, right: 1080, bottom: 1080, left: 1080 },
    title: 'Akshat EBooks — Course Notes',
  })

  downloadBlob(blob, 'AkshatEBooks-Course-Notes.docx')
}
