export default function Header({
  brand,
  theme,
  onToggleTheme,
  onHome,
  lessons,
  active,
  onSelect,
  onBookPreview,
  onOpenFullscreenBook,
  onSavePdf,
  onSaveWord,
  exporting,
  onOpenBlueprint,
  isWide = false,
  onToggleWideMode = () => {},
  isFullscreen = false,
  onToggleFullscreen = () => {}
}) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="brand brand-button" onClick={onHome} title="Back to book library">
          <span className="brand-text">
            <strong>{brand.imprint}</strong>
            <span>{brand.tagline}</span>
          </span>
        </button>

        <nav className="lesson-chips" aria-label="Lessons">
          {lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              className={index === active ? 'chip active' : 'chip'}
              onClick={() => onSelect(index)}
            >
              <span className="chip-num">{String(index + 1).padStart(2, '0')}</span>
              {lesson.shortTitle}
            </button>
          ))}
        </nav>

        <div className="actions">
          <button className="icon-btn" onClick={onToggleTheme} title="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button
            type="button"
            className="btn highlight-fullscreen-btn"
            onClick={onOpenFullscreenBook}
            title="Read complete book in true full screen (Shortcut: F)"
          >
            ⛶ Fullscreen Book
          </button>
          <button
            type="button"
            className="btn"
            onClick={onBookPreview}
            title="Open complete multi-chapter book view"
          >
            📖 Book View
          </button>
          <button
            type="button"
            className="btn"
            onClick={onToggleWideMode}
            title="Expand reading view width"
          >
            {isWide ? '⊟ Standard' : '⊞ Full Width'}
          </button>
          <button
            type="button"
            className="btn"
            onClick={onOpenBlueprint}
            title="View Curriculum Architecture & Syllabus Checklist"
          >
            📋 Blueprint
          </button>
          <button type="button" className="btn" onClick={onHome}>
            ⌂ Library
          </button>
          <button type="button" className="btn" onClick={onSaveWord} disabled={exporting}>
            {exporting ? 'Preparing…' : '📄 Word'}
          </button>
          <button type="button" className="btn primary" onClick={onSavePdf}>
            🖨 PDF
          </button>
        </div>
      </div>
    </header>
  )
}
