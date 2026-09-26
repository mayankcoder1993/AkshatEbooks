/**
 * Reusable Interactive SVG Template for Code Editor / IDE Screens.
 * Generates crisp, pixel-perfect, light/dark accessible SVG markup.
 */

export function renderIdeSvg({
  filename = 'server.js',
  status = 'Active · Port 3000',
  codeLines = [],
  highlightLine = null,
  width = 720,
  lineHeight = 22
}) {
  const height = 50 + (codeLines.length * lineHeight) + 20;
  const escapedLines = codeLines.map((line, idx) => {
    const isHighlighted = highlightLine === (idx + 1);
    const y = 60 + (idx * lineHeight);
    const lineNum = String(idx + 1).padStart(2, ' ');
    return `
      ${isHighlighted ? `<rect x="10" y="${y - 15}" width="${width - 20}" height="${lineHeight}" fill="rgba(14, 165, 233, 0.12)" rx="4"/>` : ''}
      <text x="24" y="${y}" fill="#94a3b8" font-family="monospace" font-size="12" font-weight="600">${lineNum}</text>
      <text x="56" y="${y}" fill="#1e293b" font-family="monospace" font-size="13">${escapeXml(line)}</text>
    `;
  }).join('');

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" class="svg-ide-screen">
  <!-- Window Container -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Titlebar Header -->
  <path d="M 0 10 Q 0 0 10 0 L ${width - 10} 0 Q ${width} 0 ${width} 10 L ${width} 38 L 0 38 Z" fill="#f8fafc"/>
  <line x1="0" y1="38" x2="${width}" y2="38" stroke="#e2e8f0" stroke-width="1"/>
  
  <!-- Traffic Light Window Controls -->
  <circle cx="22" cy="19" r="5" fill="#ef4444"/>
  <circle cx="36" cy="19" r="5" fill="#f59e0b"/>
  <circle cx="50" cy="19" r="5" fill="#10b981"/>
  
  <!-- Tab / Filename -->
  <rect x="70" y="8" width="130" height="24" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
  <text x="82" y="24" fill="#0f172a" font-family="monospace" font-size="12" font-weight="700">📄 ${escapeXml(filename)}</text>
  
  <!-- Status Indicator Badge -->
  <rect x="${width - 150}" y="9" width="135" height="20" rx="10" fill="rgba(16, 185, 129, 0.15)"/>
  <circle cx="${width - 138}" cy="19" r="3.5" fill="#10b981"/>
  <text x="${width - 126}" y="23" fill="#065f46" font-family="sans-serif" font-size="10.5" font-weight="700">${escapeXml(status)}</text>
  
  <!-- Code Area -->
  <g class="code-stream">
    ${escapedLines}
  </g>
</svg>
  `.trim();
}

function escapeXml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
