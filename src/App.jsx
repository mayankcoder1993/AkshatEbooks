import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header.jsx'
import LessonShell from './components/LessonShell.jsx'
import PrintBook from './components/PrintBook.jsx'
import lessons from './lessons'
import { exportBookToWord } from './export/word.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('aeb-theme') || 'dark')
  const [active, setActive] = useState(0)
  const [preview, setPreview] = useState(false)
  const [exporting, setExporting] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('aeb-theme', theme)
  }, [theme])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [active])

  const lesson = lessons[active]

  const onSavePdf = () => {
    setPreview(true)
    // Give the preview a moment to paint, then open the browser's
    // print dialog — the user picks "Save as PDF" there.
    setTimeout(() => window.print(), 900)
  }

  const onSaveWord = async () => {
    setExporting(true)
    try {
      await exportBookToWord(lessons)
    } catch (err) {
      console.error(err)
      alert('Sorry, the Word export failed: ' + err.message)
    } finally {
      setExporting(false)
    }
  }

  return (
    <>
      {/* ---------- Interactive screen UI (hidden when printing) ---------- */}
      <div className="screen-only">
        <Header
          theme={theme}
          onToggleTheme={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
          lessons={lessons}
          active={active}
          onSelect={setActive}
          onSavePdf={onSavePdf}
          onSaveWord={onSaveWord}
          exporting={exporting}
        />
        <main className="page">
          <AnimatePresence mode="wait">
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <LessonShell lesson={lesson} index={active} total={lessons.length}>
                <lesson.Body staticMode={false} />
              </LessonShell>
            </motion.div>
          </AnimatePresence>

          <div className="lesson-nav no-print">
            <button
              className="btn"
              disabled={active === 0}
              onClick={() => setActive(a => Math.max(0, a - 1))}
            >
              ← Previous lesson
            </button>
            <span className="lesson-nav-pos">
              Lesson {active + 1} of {lessons.length}
            </span>
            <button
              className="btn primary"
              disabled={active === lessons.length - 1}
              onClick={() => setActive(a => Math.min(lessons.length - 1, a + 1))}
            >
              Next lesson →
            </button>
          </div>

          <footer className="site-footer no-print">
            <p>
              📚 <strong>Akshat EBooks</strong> — notes that you can <em>see</em>. Tip: press{' '}
              <kbd>Ctrl</kbd>+<kbd>P</kbd> any time for a clean, light-mode, content-only print.
            </p>
          </footer>
        </main>

        {exporting && (
          <div className="toast" role="status">
            ⏳ Preparing your Word document… converting diagrams to images
          </div>
        )}
      </div>

      {/* ---------- Book version: used by Ctrl+P / browser printing ---------- */}
      <div className="print-only">
        <PrintBook lessons={lessons} />
      </div>

      {/* ---------- Full-book print preview (Save as PDF flow) ---------- */}
      {preview && (
        <div className="preview-overlay force-light">
          <div className="preview-toolbar no-print">
            <span>
              🖨 Print preview — in the dialog choose <strong>“Save as PDF”</strong>. Every lesson
              starts on a new page.
            </span>
            <button className="btn" onClick={() => setPreview(false)}>
              ✕ Close preview
            </button>
          </div>
          <div className="preview-paper">
            <PrintBook lessons={lessons} />
          </div>
        </div>
      )}
    </>
  )
}
