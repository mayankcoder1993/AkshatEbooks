export default function LessonShell({ lesson, index, total, unitLabel = 'Chapter', children }) {
  const chapterNumber = index + 1
  const chapterLabel = unitLabel || 'Chapter'
  return (
    <article className="lesson lesson-enter">
      <header className="lesson-hero">
        <div className="lesson-hero-meta">
          <span className="pill accent">{chapterLabel} {chapterNumber} of {total}</span>
          {lesson.tags.map(t => <span className="pill" key={t}>{t}</span>)}
        </div>
        <p className="lesson-eyebrow">{chapterLabel} {String(chapterNumber).padStart(2, '0')}</p>
        <h1 className="lesson-title">{lesson.title}</h1>
        <p className="lesson-subtitle">{lesson.subtitle}</p>
      </header>
      {children}
    </article>
  )
}
