export default function ProgramCard({ purpose, input, processing, output, files = [] }) {
  const rows = [
    { icon: '🎯', label: 'Purpose', text: purpose, cls: 'purpose' },
    { icon: '📥', label: 'Input', text: input, cls: 'input' },
    { icon: '⚙️', label: 'Processing', text: processing, cls: 'processing' },
    { icon: '📤', label: 'Output', text: output, cls: 'output' },
  ]
  return (
    <div className="program-card">
      <h4 className="pc-title">🧩 Program Blueprint</h4>
      <div className="pc-grid">
        {rows.map(r => (
          <div key={r.label} className={`pc-cell pc-${r.cls}`}>
            <span className="pc-ico" aria-hidden>
              {r.icon}
            </span>
            <div>
              <strong>{r.label}</strong>
              <p>{r.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pc-files">
        <span className="pc-files-label">📁 External files needed:</span>
        {files.length === 0 ? (
          <em> none: this program is fully self-contained.</em>
        ) : (
          files.map(f => (
            <code key={f} className="file-chip">
              {f}
            </code>
          ))
        )}
      </div>
    </div>
  )
}
