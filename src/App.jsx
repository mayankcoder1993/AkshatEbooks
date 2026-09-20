import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import LibraryHome from './components/LibraryHome.jsx'
import LessonShell from './components/LessonShell.jsx'
import PrintBook from './components/PrintBook.jsx'
import Blocks from './components/Blocks.jsx'
import { DEFAULT_BOOK_ID, loadBookPackage } from './catalog/generated/registry.js'

const BUILD_BOOK_ID = import.meta.env.VITE_BOOK_ID || DEFAULT_BOOK_ID
const BUILD_EDITION_ID = import.meta.env.VITE_EDITION_ID || null
const routeBookLocation = () => {
  const match = window.location.pathname.match(/^\/books\/([^/]+)(?:\/editions\/([^/]+))?/)
  return match ? { bookId: match[1], editionId: match[2] || null } : null
}
const initialLocation = () => {
  const preview = new URLSearchParams(window.location.search).get('view') === 'book'
  if (window.location.protocol === 'file:') return { view: 'book', bookId: BUILD_BOOK_ID, editionId: BUILD_EDITION_ID, preview: false }
  const location = routeBookLocation()
  return location ? { view: 'book', ...location, preview } : { view: 'library', bookId: null, editionId: null, preview: false }
}

export default function App() {
  const initial = initialLocation()
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('sgk-theme') || 'light' } catch { return 'light' } })
  const [view, setView] = useState(initial.view)
  const [bookId, setBookId] = useState(initial.bookId)
  const [editionId, setEditionId] = useState(initial.editionId)
  const [publication, setPublication] = useState(null)
  const [loadError, setLoadError] = useState(null)
  const [active, setActive] = useState(0)
  const [preview, setPreview] = useState(initial.preview)
  const [exporting, setExporting] = useState(false)

  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('sgk-theme', theme) } catch { /* optional preference storage may be blocked */ } }, [theme])
  useEffect(() => {
    const onPopState = () => {
      const location = initialLocation()
      setPreview(location.preview)
      setView(location.view)
      setBookId(location.bookId)
      setEditionId(location.editionId)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])
  useEffect(() => {
    if (view !== 'book' || !bookId) return
    let current = true
    setPublication(null)
    setLoadError(null)
    setActive(0)
    loadBookPackage(bookId, editionId || undefined)
      .then(book => { if (current) setPublication(book) })
      .catch(error => { if (current) setLoadError(error) })
    return () => { current = false }
  }, [view, bookId, editionId])
  useEffect(() => window.scrollTo({ top: 0 }), [active, view, bookId, editionId])

  const navigate = (nextView, path, nextBookId = null, nextEditionId = null, nextPreview = false) => {
    if (window.location.protocol !== 'file:') window.history.pushState({}, '', path)
    setPreview(nextPreview)
    if (nextView === 'book') setPublication(null)
    setView(nextView)
    setBookId(nextBookId)
    setEditionId(nextEditionId)
  }
  const openBook = (book, requestedEdition = null, options = {}) => {
    const basePath = requestedEdition ? `${book.route}/editions/${requestedEdition}` : book.route
    const path = options.preview ? `${basePath}?view=book` : basePath
    navigate('book', path, book.id, requestedEdition, Boolean(options.preview))
  }
  const openLibrary = () => navigate('library', '/')
  const toggleTheme = () => setTheme(value => value === 'light' ? 'dark' : 'light')

  if (view === 'library') return <LibraryHome theme={theme} onToggleTheme={toggleTheme} onOpenBook={openBook}/>
  if (loadError) return <main className="load-state"><h1>Book unavailable</h1><p>{loadError.message}</p><button className="btn" onClick={openLibrary}>Back to library</button></main>
  if (!publication) return <main className="load-state"><span className="loading-mark">SGK</span><h1>Opening book…</h1><p>Loading this edition’s structured content and teaching assets.</p></main>

  const { lessons, BOOK, BRAND } = publication
  const lesson = lessons[active]
  const savePdf = () => { setPreview(true); setTimeout(() => window.print(), 700) }
  const saveWord = async () => { setExporting(true); try { const { exportBookToWord } = await import('./export/docx.js'); await exportBookToWord(publication) } catch (error) { console.error(error); alert(`Word export failed: ${error.message}`) } finally { setExporting(false) } }

  if (preview) return <div className="book-view-screen force-light">
    <div className="preview-toolbar no-print"><span>📖 Book View · every interactive answer is expanded for reading and print.</span><div className="preview-actions"><button className="btn" onClick={openLibrary}>⌂ Library</button><button className="btn primary" onClick={() => window.print()}>🖨 Save as PDF</button><button className="btn" onClick={() => setPreview(false)}>✕ Back to Web View</button></div></div>
    <div className="preview-paper"><PrintBook publication={publication}/></div>
  </div>

  return <>
    <div className="screen-only"><Header brand={BRAND} theme={theme} onToggleTheme={toggleTheme} onHome={openLibrary} lessons={lessons} active={active} onSelect={setActive} onBookPreview={() => setPreview(true)} onSavePdf={savePdf} onSaveWord={saveWord} exporting={exporting}/>
      <main className="page"><div key={lesson.id}><LessonShell lesson={lesson} index={active} total={lessons.length}><Blocks blocks={lesson.blocks}/></LessonShell></div>
      <nav className="lesson-nav"><button className="btn" disabled={!active} onClick={() => setActive(value => value - 1)}>← Previous</button><span>{BOOK.unitLabel} {active + 1} of {lessons.length}</span><button className="btn primary" disabled={active === lessons.length - 1} onClick={() => setActive(value => value + 1)}>Next →</button></nav>
      <footer className="site-footer"><strong>{BRAND.imprint}</strong> · {BRAND.tagline}</footer></main>
      {exporting && <div className="toast">Preparing the editable Word book…</div>}
    </div>
    <div className="print-only"><PrintBook publication={publication}/></div>
  </>
}
