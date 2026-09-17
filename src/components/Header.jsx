export default function Header({
  theme,
  onToggleTheme,
  lessons,
  active,
  onSelect,
  onSavePdf,
  onSaveWord,
  exporting,
}) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <span className="brand-badge" aria-hidden>
            📚
          </span>
          <div className="brand-text">
            <strong>Akshat EBooks</strong>
            <span>Interactive course notes</span>
          </div>
        </div>

        <nav className="lesson-chips" aria-label="Lessons">
          {lessons.map((l, i) => (
            <button
              key={l.id}
              className={i === active ? 'chip active' : 'chip'}
              onClick={() => onSelect(i)}
              title={l.title}
            >
              <span className="chip-num">{String(i + 1).padStart(2, '0')}</span>
              {l.shortTitle}
            </button>
          ))}
        </nav>

        <div className="actions">
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="btn" onClick={onSaveWord} disabled={exporting}>
            {exporting ? 'Preparing…' : '📄 Word'}
          </button>
          <button className="btn primary" onClick={onSavePdf}>
            🖨 Save all as PDF
          </button>
        </div>
      </div>
    </header>
  )
}
