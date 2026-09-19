export default function LessonShell({ lesson, index, total, children }) {
  return <article className="lesson lesson-enter"><header className="lesson-hero"><div className="lesson-hero-meta"><span className="pill accent">LESSON {String(index+1).padStart(2,'0')} / {String(total).padStart(2,'0')}</span>{lesson.tags.map(t=><span className="pill" key={t}>{t}</span>)}</div><h1 className="lesson-title"><span>{lesson.icon}</span> {lesson.title}</h1><p className="lesson-subtitle">{lesson.subtitle}</p></header>{children}</article>
}
