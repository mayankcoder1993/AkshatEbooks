import { motion } from 'framer-motion'

export default function LessonShell({ lesson, index, total, children }) {
  return (
    <section className="lesson">
      <motion.header
        className="lesson-hero"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="lesson-hero-meta">
          <span className="pill accent">
            Lesson {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          {lesson.tags?.map(t => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>
        <h1 className="lesson-title">
          <span className="lesson-emoji" aria-hidden>
            {lesson.icon}
          </span>{' '}
          {lesson.title}
        </h1>
        <p className="lesson-subtitle">{lesson.subtitle}</p>
      </motion.header>
      {children}
    </section>
  )
}
