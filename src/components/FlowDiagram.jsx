/**
 * Animated INPUT → PROCESS → OUTPUT flow diagram.
 * Colors are hard-coded (not CSS variables) so the SVG can be
 * serialized to a PNG for the Word export.
 */
export default function FlowDiagram({
  inputLabel = 'None',
  inputDetail = 'No data is taken from the user',
  processLabel = 'print("Hello, World!")',
  processDetail = 'Python sends the text to standard output',
  outputLabel = '"Hello, World!"',
  outputDetail = 'The text appears on your screen',
}) {
  const boxes = [
    { x: 16, color: '#0ea5e9', fill: '#e0f2fe', title: 'INPUT', label: inputLabel, detail: inputDetail, icon: '⌨️' },
    { x: 308, color: '#7c5cfc', fill: '#ede9fe', title: 'PROCESS', label: processLabel, detail: processDetail, icon: '⚙️' },
    { x: 600, color: '#10b981', fill: '#d1fae5', title: 'OUTPUT', label: outputLabel, detail: outputDetail, icon: '🖥️' },
  ]

  return (
    <div className="flow-wrap">
      <svg viewBox="0 0 860 210" className="flow-svg" role="img" aria-label="Input, process, output diagram">
        <defs>
          <marker id="arrowhead" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
            <polygon points="0 0, 9 3.5, 0 7" fill="#94a3b8" />
          </marker>
        </defs>

        {/* arrows */}
        <line className="flow-line" x1="258" y1="100" x2="302" y2="100" stroke="#94a3b8" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
        <line className="flow-line" x1="550" y1="100" x2="594" y2="100" stroke="#94a3b8" strokeWidth="2.5" markerEnd="url(#arrowhead)" />

        {boxes.map(b => (
          <g key={b.title}>
            <rect x={b.x} y="42" width="244" height="116" rx="18" fill={b.fill} stroke={b.color} strokeWidth="2.5" />
            <text x={b.x + 122} y="70" textAnchor="middle" fontSize="13" fontWeight="700" letterSpacing="2.5" fill={b.color}>
              {b.icon} {b.title}
            </text>
            <text x={b.x + 122} y="102" textAnchor="middle" fontSize="15" fontWeight="600" fill="#0f172a">
              {b.label.length > 28 ? b.label.slice(0, 27) + '…' : b.label}
            </text>
            <foreignObject x={b.x + 10} y="112" width="224" height="44">
              <div style={{ fontSize: 11.5, lineHeight: 1.35, textAlign: 'center', color: '#475569', fontFamily: 'Inter, sans-serif' }}>
                {b.detail}
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>
      <p className="flow-caption">
        Every program in the world follows this same journey: <strong>data comes in</strong>, the
        program <strong>does something</strong> with it, and a <strong>result comes out</strong>.
      </p>
    </div>
  )
}
