import { useEffect, useState, useRef } from 'react'
import Header from './components/Header.jsx'
import LibraryHome from './components/LibraryHome.jsx'
import LessonShell from './components/LessonShell.jsx'
import PrintBook from './components/PrintBook.jsx'
import Blocks from './components/Blocks.jsx'
import CurriculumBlueprint from './components/CurriculumBlueprint.jsx'
import { DEFAULT_BOOK_ID, loadBookPackage } from './catalog/generated/registry.js'

const BUILD_BOOK_ID = import.meta.env.VITE_BOOK_ID || DEFAULT_BOOK_ID
const BUILD_EDITION_ID = import.meta.env.VITE_EDITION_ID || null

const routeBookLocation = () => {
  const match = window.location.pathname.match(/^\/books\/([^/]+)(?:\/editions\/([^/]+))?/)
  return match ? { bookId: match[1], editionId: match[2] || null } : null
}

const initialLocation = () => {
  if (window.location.search.includes('view=blueprint') || window.location.pathname.includes('blueprint')) {
    return { view: 'blueprint', bookId: 'zero-to-agentic-api-testing', editionId: 'edition-01', preview: false }
  }
  const preview = new URLSearchParams(window.location.search).get('view') === 'book'
  if (window.location.protocol === 'file:') {
    return { view: 'book', bookId: BUILD_BOOK_ID, editionId: BUILD_EDITION_ID, preview: false }
  }
  const location = routeBookLocation()
  return location
    ? { view: 'book', ...location, preview }
    : { view: 'book', bookId: 'zero-to-agentic-api-testing', editionId: 'edition-01', preview: false }
}

export default function App() {
  const initial = initialLocation()
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('sgk-theme') || 'light'
    } catch {
      return 'light'
    }
  })
  const [view, setView] = useState(initial.view)
  const [bookId, setBookId] = useState(initial.bookId)
  const [editionId, setEditionId] = useState(initial.editionId)
  const [publication, setPublication] = useState(null)
  const [loadError, setLoadError] = useState(null)
  const [active, setActive] = useState(0)
  const [preview, setPreview] = useState(initial.preview)
  const [exporting, setExporting] = useState(false)
  const [isWide, setIsWide] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const isNativeFullscreenRef = useRef(false)

  const enterFullscreen = () => {
    setIsFullscreen(true)
    try {
      if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
        document.documentElement.requestFullscreen()
          .then(() => {
            isNativeFullscreenRef.current = true
          })
          .catch(() => {
            // Viewport takeover is active via isFullscreen state
          })
      }
    } catch {
      // Ignore iframe restrictions
    }
  }

  const exitFullscreen = () => {
    setIsFullscreen(false)
    try {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {})
      }
    } catch {
      // Ignore
    }
    isNativeFullscreenRef.current = false
  }

  const toggleFullscreen = () => {
    if (isFullscreen) {
      exitFullscreen()
    } else {
      enterFullscreen()
    }
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('sgk-theme', theme)
    } catch {
      /* optional preference storage */
    }
  }, [theme])

  useEffect(() => {
    const onFullscreenChange = () => {
      if (!document.fullscreenElement && isNativeFullscreenRef.current) {
        isNativeFullscreenRef.current = false
        setIsFullscreen(false)
      }
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        exitFullscreen()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isFullscreen])

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
      .then(book => {
        if (current) setPublication(book)
      })
      .catch(error => {
        if (current) setLoadError(error)
      })
    return () => {
      current = false
    }
  }, [view, bookId, editionId])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [active, view, bookId, editionId])

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
  const openBlueprint = () => navigate('blueprint', '/?view=blueprint')
  const toggleTheme = () => setTheme(value => (value === 'light' ? 'dark' : 'light'))
  const toggleWideMode = () => setIsWide(value => !value)
  const openInNewTab = () => {
    window.open(window.location.href, '_blank', 'noopener,noreferrer')
  }

  if (view === 'blueprint') {
    return (
      <CurriculumBlueprint
        onBack={() => {
          if (publication) {
            setView('book')
          } else {
            navigate('book', '/', 'zero-to-agentic-api-testing', 'edition-01', false)
          }
        }}
        onHome={openLibrary}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    )
  }

  if (view === 'library') {
    return (
      <LibraryHome
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenBook={openBook}
        onOpenBlueprint={openBlueprint}
      />
    )
  }

  if (loadError) {
    return (
      <main className="load-state">
        <h1>Book unavailable</h1>
        <p>{loadError.message}</p>
        <button className="btn" onClick={openLibrary}>Back to library</button>
      </main>
    )
  }

  if (!publication) {
    return (
      <main className="load-state">
        <span className="loading-mark" aria-hidden="true" />
        <h1>Opening book…</h1>
        <p>Loading this edition’s structured content and teaching assets.</p>
      </main>
    )
  }

  const { lessons, BOOK, BRAND } = publication
  const lesson = lessons[active]

  const savePdf = () => {
    setPreview(true)
    setTimeout(() => window.print(), 700)
  }

  const saveWord = async () => {
    setExporting(true)
    try {
      const { exportBookToWord } = await import('./export/docx.js')
      await exportBookToWord(publication)
    } catch (error) {
      console.error(error)
      alert(`Word export failed: ${error.message}`)
    } finally {
      setExporting(false)
    }
  }

  if (preview) {
    return (
      <div className={`book-view-screen force-light ${isWide ? 'wide-mode' : ''} ${isFullscreen ? 'fullscreen-mode' : ''}`}>
        <div className="preview-toolbar no-print">
          <div className="preview-toolbar-left">
            <span className="preview-tag">📖 {isFullscreen ? 'Fullscreen Book View' : 'Book View'}</span>
            <select
              className="preview-jump-select"
              aria-label="Jump to chapter or section"
              onChange={(e) => {
                const target = document.getElementById(e.target.value)
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              defaultValue=""
            >
              <option value="" disabled>Jump to section…</option>
              <option value="print-cover">Cover</option>
              <option value="print-toc">Table of Contents</option>
              <option value="print-preface">Preface</option>
              <option value="print-how-to">How to use this book</option>
              {lessons.map((l, i) => (
                <option key={l.id} value={`print-${l.id}`}>
                  Chapter {i + 1}: {l.title}
                </option>
              ))}
              <option value="print-about">About the Author</option>
            </select>
          </div>

          <div className="preview-actions">
            <button
              type="button"
              className="btn"
              onClick={toggleWideMode}
              title={isWide ? 'Switch to centered page width' : 'Expand book across screen width'}
            >
              {isWide ? '⊟ Standard Width' : '⊞ Full Width'}
            </button>
            <button
              type="button"
              className={`btn ${isFullscreen ? 'active-fullscreen-btn' : ''}`}
              onClick={toggleFullscreen}
              title={isFullscreen ? 'Exit fullscreen reading mode (Esc)' : 'Enter true fullscreen reading mode'}
            >
              {isFullscreen ? '✕ Exit Full (Esc)' : '⛶ Fullscreen'}
            </button>
            <button
              type="button"
              className="btn"
              onClick={openInNewTab}
              title="Open book in a standalone browser window"
            >
              ↗ New Tab
            </button>
            <button type="button" className="btn" onClick={openBlueprint} title="Curriculum roadmap">
              📋 Blueprint
            </button>
            <button type="button" className="btn primary" onClick={() => window.print()} title="Print or save as PDF">
              🖨 PDF
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => {
                exitFullscreen()
                setPreview(false)
              }}
              title="Return to single-chapter interactive mode"
            >
              ✕ Web View
            </button>
          </div>
        </div>
        <div className={`preview-paper ${isWide ? 'wide-mode' : ''} ${isFullscreen ? 'fullscreen-mode' : ''}`}>
          <PrintBook publication={publication} />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="screen-only">
        <Header
          brand={BRAND}
          theme={theme}
          onToggleTheme={toggleTheme}
          onHome={openLibrary}
          lessons={lessons}
          active={active}
          onSelect={setActive}
          onBookPreview={() => setPreview(true)}
          onSavePdf={savePdf}
          onSaveWord={saveWord}
          exporting={exporting}
          onOpenBlueprint={openBlueprint}
          isWide={isWide}
          onToggleWideMode={toggleWideMode}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
        />
        <main className={`page ${isWide ? 'wide-mode' : ''} ${isFullscreen ? 'fullscreen-mode' : ''}`}>
          <div key={lesson.id}>
            <LessonShell lesson={lesson} index={active} total={lessons.length} unitLabel={BOOK.unitLabel}>
              <Blocks blocks={lesson.blocks} />
            </LessonShell>
          </div>
          <nav className="lesson-nav">
            <button className="btn" disabled={!active} onClick={() => setActive(value => value - 1)}>
              ← Previous
            </button>
            <span>Chapter {active + 1} of {lessons.length}</span>
            <button
              className="btn primary"
              disabled={active === lessons.length - 1}
              onClick={() => setActive(value => value + 1)}
            >
              Next →
            </button>
          </nav>
          <footer className="site-footer">
            <strong>{BRAND.imprint}</strong> · {BRAND.tagline}
          </footer>
        </main>
        {exporting && <div className="toast">Preparing the editable Word book…</div>}
      </div>
      <div className="print-only">
        <PrintBook publication={publication} />
      </div>
    </>
  )
}
