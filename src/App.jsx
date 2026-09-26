import { useEffect, useState, useRef } from 'react'
import Header from './components/Header.jsx'
import LibraryHome from './components/LibraryHome.jsx'
import LessonShell from './components/LessonShell.jsx'
import PrintBook from './components/PrintBook.jsx'
import Blocks from './components/Blocks.jsx'
import CurriculumBlueprint from './components/CurriculumBlueprint.jsx'
import HowToUseGuide from './components/HowToUseGuide.jsx'
import { DEFAULT_BOOK_ID, loadBookPackage } from './catalog/generated/registry.js'

const BUILD_BOOK_ID = import.meta.env.VITE_BOOK_ID || DEFAULT_BOOK_ID
const BUILD_EDITION_ID = import.meta.env.VITE_EDITION_ID || null

const routeBookLocation = () => {
  const match = window.location.pathname.match(/^\/books\/([^/]+)(?:\/editions\/([^/]+))?/)
  return match ? { bookId: match[1], editionId: match[2] || null } : null
}

const requestNativeFullscreen = (element) => {
  try {
    if (element.requestFullscreen) {
      const p = element.requestFullscreen()
      if (p && typeof p.catch === 'function') p.catch(() => {})
      return true
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen()
      return true
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen()
      return true
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
      return true
    }
  } catch {
    // Cross-origin iframe or browser permission exception
  }
  return false
}

const exitNativeFullscreen = () => {
  try {
    if (document.exitFullscreen) {
      const p = document.exitFullscreen()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
  } catch {
    // Ignore
  }
}

const initialLocation = () => {
  const search = new URLSearchParams(window.location.search)
  const isFsParam = search.get('fullscreen') === 'true'
  const preview = search.get('view') === 'book' || isFsParam
  const targetBook = search.get('book') || 'zero-to-agentic-api-testing'
  const sectionParam = search.get('section')
  const chapterParam = search.get('chapter')
  const briefingParam = search.get('briefing')

  let initialActive = 'preface'
  if (sectionParam === 'how-to-use') {
    initialActive = 'how-to-use'
  } else if (briefingParam) {
    const bNum = parseInt(briefingParam, 10)
    if (!isNaN(bNum) && bNum >= 1) {
      initialActive = `briefing-${bNum - 1}`
    }
  } else if (chapterParam) {
    const chNum = parseInt(chapterParam, 10)
    if (!isNaN(chNum) && chNum >= 1) {
      initialActive = chNum - 1
    }
  }

  if (window.location.search.includes('view=blueprint') || window.location.pathname.includes('blueprint')) {
    return { view: 'blueprint', bookId: targetBook, editionId: 'edition-01', preview: false, fullscreen: false, initialActive }
  }
  if (window.location.protocol === 'file:') {
    return { view: 'book', bookId: BUILD_BOOK_ID, editionId: BUILD_EDITION_ID, preview: false, fullscreen: false, initialActive }
  }
  const location = routeBookLocation()
  return location
    ? { view: 'book', ...location, preview, fullscreen: isFsParam, initialActive }
    : { view: 'book', bookId: 'zero-to-agentic-api-testing', editionId: 'edition-01', preview, fullscreen: isFsParam, initialActive }
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
  const [active, setActive] = useState(initial.initialActive || 'preface')
  const [preview, setPreview] = useState(initial.preview)
  const [exporting, setExporting] = useState(false)
  const [isWide, setIsWide] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(initial.fullscreen)
  const isNativeFullscreenRef = useRef(false)

  const enterFullscreen = () => {
    setIsFullscreen(true)
    const url = new URL(window.location.href)
    url.searchParams.set('fullscreen', 'true')
    window.history.replaceState({}, '', url.toString())
    if (requestNativeFullscreen(document.documentElement)) {
      isNativeFullscreenRef.current = true
    }
  }

  const exitFullscreen = () => {
    setIsFullscreen(false)
    exitNativeFullscreen()
    isNativeFullscreenRef.current = false
    const url = new URL(window.location.href)
    url.searchParams.delete('fullscreen')
    window.history.replaceState({}, '', url.toString())
  }

  const toggleFullscreen = () => {
    if (isFullscreen) {
      exitFullscreen()
    } else {
      enterFullscreen()
    }
  }

  const openFullscreenBook = () => {
    setPreview(true)
    setIsFullscreen(true)
    const url = new URL(window.location.href)
    url.searchParams.set('view', 'book')
    url.searchParams.set('fullscreen', 'true')
    window.history.pushState({}, '', url.toString())
    if (requestNativeFullscreen(document.documentElement)) {
      isNativeFullscreenRef.current = true
    }
  }

  const openBookPreview = () => {
    setPreview(true)
    const url = new URL(window.location.href)
    url.searchParams.set('view', 'book')
    url.searchParams.delete('fullscreen')
    window.history.pushState({}, '', url.toString())
  }

  const closeBookPreview = () => {
    exitFullscreen()
    setPreview(false)
    const url = new URL(window.location.href)
    url.searchParams.delete('view')
    url.searchParams.delete('fullscreen')
    window.history.pushState({}, '', url.toString())
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
      if ((e.key === 'f' || e.key === 'F') && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : ''
        if (activeTag !== 'input' && activeTag !== 'textarea' && activeTag !== 'select') {
          e.preventDefault()
          if (isFullscreen) {
            exitFullscreen()
          } else {
            openFullscreenBook()
          }
        }
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
    setActive('preface')
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
  const openBlueprint = (targetBookId = bookId, targetEditionId = editionId) => {
    navigate('blueprint', `/?view=blueprint&book=${targetBookId || 'zero-to-agentic-api-testing'}`, targetBookId, targetEditionId)
  }
  const toggleTheme = () => setTheme(value => (value === 'light' ? 'dark' : 'light'))
  const toggleWideMode = () => setIsWide(value => !value)
  const openInNewTab = () => {
    window.open(window.location.href, '_blank', 'noopener,noreferrer')
  }

  if (view === 'blueprint') {
    return (
      <CurriculumBlueprint
        bookId={bookId || publication?.manifest?.id || 'zero-to-agentic-api-testing'}
        onBack={() => {
          if (publication) {
            setView('book')
          } else {
            navigate('book', '/', bookId || 'zero-to-agentic-api-testing', editionId || 'edition-01', false)
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

  const { lessons, BOOK, BRAND, PREFACE } = publication
  const isPreface = active === 'preface'
  const isHowToUse = active === 'how-to-use'
  const isBriefing = typeof active === 'string' && active.startsWith('briefing-')
  const briefingLessonIndex = isBriefing ? parseInt(active.replace('briefing-', ''), 10) : null
  const briefingLesson = isBriefing && briefingLessonIndex !== null ? lessons[briefingLessonIndex] : null
  const briefingOpener = briefingLesson ? briefingLesson.blocks.find(b => b.type === 'chapter-opener') : null
  const isChapter = typeof active === 'number'
  const lesson = isChapter ? lessons[active] : null
  const lessonOpener = lesson ? lesson.blocks.find(b => b.type === 'chapter-opener') : null
  const chapterBlocks = lesson ? lesson.blocks.filter(b => b.type !== 'chapter-opener') : []

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
              {lessons.map((l, i) => [
                <option key={`briefing-${l.id}`} value={`print-briefing-${l.id}`}>
                  Mission Briefing: Chapter {i + 1}
                </option>,
                <option key={l.id} value={`print-${l.id}`}>
                  Chapter {i + 1}: {l.title}
                </option>
              ])}
              <option value="print-about">About the Author</option>
            </select>
          </div>

          <div className="preview-actions">
            <button
              type="button"
              className={`btn ${isFullscreen ? 'active-fullscreen-btn' : 'highlight-fullscreen-btn'}`}
              onClick={toggleFullscreen}
              title={isFullscreen ? 'Exit fullscreen reading mode (Esc)' : 'Enter true fullscreen reading mode (Shortcut: F)'}
            >
              {isFullscreen ? '✕ Exit Full (Esc)' : '⛶ Fullscreen'}
            </button>
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
              className="btn"
              onClick={openInNewTab}
              title="Open book in a standalone browser window (native F11)"
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
              onClick={closeBookPreview}
              title="Return to single-chapter interactive mode"
            >
              ✕ Web View
            </button>
          </div>
        </div>
        <div className={`preview-paper ${isWide ? 'wide-mode' : ''} ${isFullscreen ? 'fullscreen-mode' : ''}`}>
          <PrintBook publication={publication} />
        </div>
        {isFullscreen && (
          <button
            type="button"
            className="floating-exit-fab no-print"
            onClick={exitFullscreen}
            title="Exit Full Screen (Esc)"
          >
            ✕ Exit Fullscreen (Esc)
          </button>
        )}
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
          onBookPreview={openBookPreview}
          onOpenFullscreenBook={openFullscreenBook}
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
          {isPreface && PREFACE && (
            <article className="lesson lesson-enter">
              <header className="lesson-hero">
                <div className="lesson-hero-meta">
                  <span className="pill accent">Frontmatter · Preface</span>
                  <span className="pill">Foundations</span>
                  <span className="pill">First Principles</span>
                </div>
                <p className="lesson-eyebrow">Frontmatter</p>
                <h1 className="lesson-title">{PREFACE.title}</h1>
                <p className="lesson-subtitle">The invisible nervous system of modern computing, first principles, and the transition from human clicks to automated pipelines.</p>
              </header>
              <Blocks blocks={PREFACE.blocks} />
            </article>
          )}

          {isHowToUse && (
            <article className="lesson lesson-enter">
              <header className="lesson-hero">
                <div className="lesson-hero-meta">
                  <span className="pill accent">Frontmatter · Guide</span>
                  <span className="pill">Active Recall</span>
                  <span className="pill">Mastery Framework</span>
                </div>
                <p className="lesson-eyebrow">Frontmatter</p>
                <h1 className="lesson-title">How to Use This Book for Maximum Mastery</h1>
                <p className="lesson-subtitle">Active prediction, wire level observation, runnable code sandboxes, and defensive recovery habits.</p>
              </header>
              <HowToUseGuide items={BOOK?.howToUse || []} />
            </article>
          )}

          {isBriefing && briefingLesson && briefingOpener && (
            <article className="lesson lesson-enter mission-briefing-view">
              <header className="lesson-hero">
                <div className="lesson-hero-meta">
                  <span className="pill accent">Enterprise Mission Briefing</span>
                  <span className="pill">{briefingOpener.missionBadge || `Mission Phase ${briefingLessonIndex + 1}`}</span>
                </div>
                <p className="lesson-eyebrow">{briefingOpener.missionBadge || 'MISSION BRIEFING'}</p>
                <h1 className="lesson-title">{briefingOpener.missionCrisis || briefingOpener.missionTitle || briefingLesson.title}</h1>
                <p className="lesson-subtitle">{briefingLesson.subtitle}</p>
              </header>
              <Blocks blocks={[briefingOpener]} />
              <div className="briefing-action-bar">
                <button
                  type="button"
                  className="btn primary large-btn"
                  onClick={() => setActive(briefingLessonIndex)}
                >
                  Begin Chapter {briefingLessonIndex + 1} Investigation →
                </button>
              </div>
            </article>
          )}

          {isChapter && lesson && (
            <div key={lesson.id}>
              <LessonShell lesson={lesson} index={active} total={lessons.length} unitLabel={BOOK.unitLabel}>
                {lessonOpener && (
                  <div className="chapter-mission-context-banner">
                    <div className="context-left">
                      <span className="context-badge">{lessonOpener.missionBadge || 'MISSION BRIEFING'}</span>
                      <span className="context-title">{lessonOpener.missionCrisis || lessonOpener.missionTitle}</span>
                    </div>
                    <button
                      type="button"
                      className="btn small"
                      onClick={() => setActive(`briefing-${active}`)}
                    >
                      📋 View Mission Briefing
                    </button>
                  </div>
                )}
                <Blocks blocks={chapterBlocks} />
              </LessonShell>
            </div>
          )}

          <nav className="lesson-nav">
            <button
              className="btn"
              disabled={isPreface}
              onClick={() => {
                if (isHowToUse) setActive('preface')
                else if (isBriefing) {
                  if (briefingLessonIndex === 0) setActive('how-to-use')
                  else setActive(briefingLessonIndex - 1)
                }
                else if (isChapter) {
                  if (lessonOpener) setActive(`briefing-${active}`)
                  else if (active === 0) setActive('how-to-use')
                  else setActive(value => value - 1)
                }
              }}
            >
              ← Previous
            </button>
            <span>
              {isPreface && 'Frontmatter: Preface'}
              {isHowToUse && 'Frontmatter: How to Use This Book'}
              {isBriefing && `Mission Briefing: Chapter ${briefingLessonIndex + 1}`}
              {isChapter && `Chapter ${active + 1} of ${lessons.length}`}
            </span>
            <button
              className="btn primary"
              disabled={isChapter && active === lessons.length - 1}
              onClick={() => {
                if (isPreface) setActive('how-to-use')
                else if (isHowToUse) setActive('briefing-0')
                else if (isBriefing) setActive(briefingLessonIndex)
                else if (isChapter) {
                  const nextIndex = active + 1
                  if (nextIndex < lessons.length) {
                    const nextHasOpener = lessons[nextIndex]?.blocks.some(b => b.type === 'chapter-opener')
                    if (nextHasOpener) setActive(`briefing-${nextIndex}`)
                    else setActive(nextIndex)
                  }
                }
              }}
            >
              Next →
            </button>
          </nav>
          <footer className="site-footer">
            <strong>{BRAND.imprint}</strong> · {BRAND.tagline}
          </footer>
        </main>
        {!preview && (
          <button
            type="button"
            className="floating-fullscreen-fab no-print"
            onClick={openFullscreenBook}
            title="Read complete book in true Full Screen (Shortcut: F)"
          >
            <span className="fab-icon">⛶</span>
            <span className="fab-label">Fullscreen Book (F)</span>
          </button>
        )}
        {exporting && <div className="toast">Preparing the editable Word book…</div>}
      </div>
      <div className="print-only">
        <PrintBook publication={publication} />
      </div>
    </>
  )
}
