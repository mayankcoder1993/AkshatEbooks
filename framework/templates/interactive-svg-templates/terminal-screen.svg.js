/**
 * Reusable Interactive SVG Template for Terminal Window Screens.
 */

export function renderTerminalSvg({
  command = 'node server.js',
  outputLines = [],
  width = 720,
  lineHeight = 22
}) {
  const height = 50 + (outputLines.length * lineHeight) + 30;
  const renderedOutput = outputLines.map((line, idx) => {
    const y = 80 + (idx * lineHeight);
    return `<text x="24" y="${y}" fill="#334155" font-family="monospace" font-size="12.5">${escapeXml(line)}</text>`;
  }).join('');

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" class="svg-terminal-screen">
  <!-- Window Container -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Titlebar Header -->
  <path d="M 0 10 Q 0 0 10 0 L ${width - 10} 0 Q ${width} 0 ${width} 10 L ${width} 38 L 0 38 Z" fill="#f8fafc"/>
  <line x1="0" y1="38" x2="${width}" y2="38" stroke="#e2e8f0" stroke-width="1"/>
  
  <!-- Traffic Light Window Controls -->
  <circle cx="22" cy="19" r="5" fill="#ef4444"/>
  <circle cx="36" cy="19" r="5" fill="#f59e0b"/>
  <circle cx="50" cy="19" r="5" fill="#10b981"/>
  <text x="70" y="23" fill="#64748b" font-family="sans-serif" font-size="11" font-weight="700">TERMINAL</text>
  
  <!-- Prompt & Executed Command -->
  <g class="terminal-command">
    <text x="24" y="58" fill="#0284c7" font-family="monospace" font-size="13" font-weight="800">$</text>
    <text x="40" y="58" fill="#0f172a" font-family="monospace" font-size="13" font-weight="700">${escapeXml(command)}</text>
  </g>
  
  <!-- Output Stream -->
  <g class="terminal-stdout">
    ${renderedOutput}
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
