import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import LibraryHome from './components/LibraryHome.jsx'
import LessonShell from './components/LessonShell.jsx'
import PrintBook from './components/PrintBook.jsx'
import Blocks from './components/Blocks.jsx'
import lessons, { BOOK, BRAND } from './books/python-absolute-beginners/content/index.js'

function currentView() {
  if (window.location.protocol === 'file:') return 'book'
  return window.location.pathname.startsWith(`/books/${BOOK.id}`) ? 'book' : 'library'
}

export default function App() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('sgk-theme') || 'light' } catch { return 'light' } })
  const [view, setView] = useState(currentView)
  const [active, setActive] = useState(0)
  const [preview, setPreview] = useState(false)
  const [exporting, setExporting] = useState(false)

  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('sgk-theme', theme) } catch { /* storage can be blocked in embedded previews */ } }, [theme])
  useEffect(() => {
    const onPopState = () => { setPreview(false); setView(currentView()) }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])
  useEffect(() => window.scrollTo({ top: 0 }), [active, view])

  const navigate = (nextView, path) => {
    if (window.location.protocol !== 'file:') window.history.pushState({}, '', path)
    setPreview(false)
    setView(nextView)
  }
  const openBook = book => navigate('book', book.route)
  const openLibrary = () => navigate('library', '/')
  const toggleTheme = () => setTheme(value => value === 'light' ? 'dark' : 'light')
  const lesson = lessons[active]
  const savePdf = () => { setPreview(true); setTimeout(() => window.print(), 700) }
  const saveWord = async () => { setExporting(true); try { const { exportBookToWord } = await import('./export/docx.js'); await exportBookToWord() } catch (error) { console.error(error); alert(`Word export failed: ${error.message}`) } finally { setExporting(false) } }

  if (view === 'library') return <LibraryHome theme={theme} onToggleTheme={toggleTheme} onOpenBook={openBook}/>

  if (preview) return <div className="book-view-screen force-light">
    <div className="preview-toolbar no-print"><span>📖 Book View · every interactive answer is expanded for reading and print.</span><div className="preview-actions"><button className="btn primary" onClick={() => window.print()}>🖨 Save as PDF</button><button className="btn" onClick={() => setPreview(false)}>✕ Back to Web View</button></div></div>
    <div className="preview-paper"><PrintBook lessons={lessons}/></div>
  </div>

  return <>
    <div className="screen-only"><Header theme={theme} onToggleTheme={toggleTheme} onHome={openLibrary} lessons={lessons} active={active} onSelect={setActive} onBookPreview={() => setPreview(true)} onSavePdf={savePdf} onSaveWord={saveWord} exporting={exporting}/>
      <main className="page"><div key={lesson.id}><LessonShell lesson={lesson} index={active} total={lessons.length}><Blocks blocks={lesson.blocks}/></LessonShell></div>
      <nav className="lesson-nav"><button className="btn" disabled={!active} onClick={() => setActive(value => value - 1)}>← Previous</button><span>Lesson {active + 1} of {lessons.length}</span><button className="btn primary" disabled={active === lessons.length - 1} onClick={() => setActive(value => value + 1)}>Next →</button></nav>
      <footer className="site-footer"><strong>{BRAND.imprint}</strong> · {BRAND.tagline}</footer></main>
      {exporting && <div className="toast">Preparing the editable Word book…</div>}
    </div>
    <div className="print-only"><PrintBook lessons={lessons}/></div>
  </>
}
