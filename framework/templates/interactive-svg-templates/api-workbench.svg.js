/**
 * Reusable Interactive SVG Template for API Testing Workbench / Client.
 * Displays Method badge, URL bar, status pill, latency, and response JSON.
 */

export function renderApiWorkbenchSvg({
  method = 'GET',
  url = 'http://localhost:3000/books',
  status = '200 OK',
  time = '18 ms',
  responseJson = '[]',
  width = 720
}) {
  const jsonLines = typeof responseJson === 'string' ? responseJson.split('\n') : JSON.stringify(responseJson, null, 2).split('\n');
  const bodyHeight = jsonLines.length * 20;
  const height = 130 + bodyHeight + 25;

  const verbColors = {
    GET: { bg: '#0284c7', text: '#ffffff' },
    POST: { bg: '#16a34a', text: '#ffffff' },
    PUT: { bg: '#d97706', text: '#ffffff' },
    PATCH: { bg: '#8b5cf6', text: '#ffffff' },
    DELETE: { bg: '#dc2626', text: '#ffffff' }
  };
  const verbColor = verbColors[method.toUpperCase()] || verbColors.GET;

  const is2xx = status.startsWith('2');
  const statusColor = is2xx ? { bg: 'rgba(16, 185, 129, 0.15)', text: '#065f46' } : { bg: 'rgba(239, 68, 68, 0.15)', text: '#991b1b' };

  const renderedJson = jsonLines.map((line, idx) => {
    const y = 145 + (idx * 20);
    return `<text x="24" y="${y}" fill="#0f172a" font-family="monospace" font-size="12">${escapeXml(line)}</text>`;
  }).join('');

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" class="svg-api-workbench">
  <!-- Outer Window Frame -->
  <rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
  
  <!-- Titlebar Header -->
  <path d="M 0 10 Q 0 0 10 0 L ${width - 10} 0 Q ${width} 0 ${width} 10 L ${width} 38 L 0 38 Z" fill="#f8fafc"/>
  <line x1="0" y1="38" x2="${width}" y2="38" stroke="#e2e8f0" stroke-width="1"/>
  
  <!-- Traffic Light Window Controls -->
  <circle cx="22" cy="19" r="5" fill="#ef4444"/>
  <circle cx="36" cy="19" r="5" fill="#f59e0b"/>
  <circle cx="50" cy="19" r="5" fill="#10b981"/>
  <text x="70" y="23" fill="#64748b" font-family="sans-serif" font-size="11" font-weight="700">API TESTING WORKBENCH</text>

  <!-- Request Address Bar Box -->
  <rect x="15" y="48" width="${width - 30}" height="36" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
  
  <!-- HTTP Method Badge -->
  <rect x="22" y="54" width="56" height="24" rx="4" fill="${verbColor.bg}"/>
  <text x="50" y="70" fill="${verbColor.text}" font-family="sans-serif" font-size="11" font-weight="800" text-anchor="middle">${escapeXml(method)}</text>
  
  <!-- Target URL String -->
  <text x="88" y="71" fill="#0f172a" font-family="monospace" font-size="12" font-weight="600">${escapeXml(url)}</text>
  
  <!-- Response Meta Banner -->
  <rect x="15" y="92" width="${width - 30}" height="30" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
  <text x="25" y="112" fill="#64748b" font-family="sans-serif" font-size="10.5" font-weight="800" letter-spacing="0.05em">RESPONSE BODY</text>
  
  <!-- Status Badge -->
  <rect x="${width - 170}" y="97" width="90" height="20" rx="4" fill="${statusColor.bg}"/>
  <text x="${width - 125}" y="111" fill="${statusColor.text}" font-family="monospace" font-size="11" font-weight="800" text-anchor="middle">${escapeXml(status)}</text>
  
  <!-- Latency Badge -->
  <text x="${width - 30}" y="111" fill="#64748b" font-family="monospace" font-size="11" text-anchor="end">${escapeXml(time)}</text>
  
  <!-- Response JSON Stream -->
  <g class="response-json-body">
    ${renderedJson}
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
