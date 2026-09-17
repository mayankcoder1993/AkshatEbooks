/**
 * Renders the whole book: cover, table of contents and every lesson
 * in its static, print-friendly form. Used for:
 *   - browser printing (Ctrl+P)          → light mode, content only
 *   - "Save all as PDF" preview overlay
 *   - Word export (server-rendered to HTML)
 */
export default function PrintBook({ lessons }) {
  const today = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="book">
      <section className="book-cover">
        <div className="cover-badge">📚</div>
        <h1>Akshat EBooks</h1>
        <h2>Interactive Course Notes — Book Edition</h2>
        <p className="cover-date">Generated on {today}</p>
        <div className="toc">
          <h3>Contents</h3>
          <ol>
            {lessons.map(l => (
              <li key={l.id}>
                <strong>{l.title}</strong> <span>— {l.subtitle}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {lessons.map((L, idx) => (
        <article key={L.id} className="lesson-page">
          <header className="lesson-page-header">
            <p className="lesson-page-kicker">
              Lesson {String(idx + 1).padStart(2, '0')} · Akshat EBooks
            </p>
            <h1>
              {L.icon} {L.title}
            </h1>
            <p className="lesson-page-sub">{L.subtitle}</p>
          </header>
          <L.Body staticMode />
        </article>
      ))}

      <footer className="book-footer">
        <p>— End of notes · Akshat EBooks · keep learning ✨ —</p>
      </footer>
    </div>
  )
}
