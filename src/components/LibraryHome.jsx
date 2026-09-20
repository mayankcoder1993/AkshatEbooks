import { useState } from 'react'
import { BRAND } from '../books/python-absolute-beginners/content/index.js'
import { BOOK_CATALOG, LIVE_FOLDER_TREE, PUBLISHING_LAYERS } from '../catalog/books.js'

function Status({ children, tone = '' }) {
  return <span className={`catalog-status ${tone}`}>{children}</span>
}

function BookDetails({ book, onOpenBook }) {
  return <section className="catalog-detail" aria-labelledby={`${book.id}-details-title`}>
    <div className="catalog-detail-head">
      <div>
        <p className="catalog-eyebrow">{book.series}</p>
        <h2 id={`${book.id}-details-title`}>{book.title}</h2>
        <p>{book.subtitle}</p>
      </div>
      <button className="btn primary" onClick={() => onOpenBook(book)}>Open interactive book →</button>
    </div>

    <div className="catalog-detail-grid">
      <div><h3>Lessons completed</h3><ol>{book.lessons.map((lesson, index) => <li key={lesson.id}><strong>{index + 1}. {lesson.title}</strong><span>{lesson.subtitle}</span></li>)}</ol></div>
      <div><h3>Publishing outputs</h3><ul className="catalog-checks">{book.formats.map(item => <li key={item.label}><span>✓</span><div><strong>{item.label}</strong><small>{item.state}</small></div></li>)}</ul></div>
      <div><h3>Branding readiness</h3><ul className="catalog-readiness">{book.branding.map(item => <li key={item.label}><strong>{item.label}</strong><span>{item.state}</span></li>)}</ul></div>
    </div>

    <div className="catalog-next"><strong>Next milestone</strong><p>{book.nextMilestone}</p></div>
  </section>
}

export default function LibraryHome({ theme, onToggleTheme, onOpenBook }) {
  const [selectedId, setSelectedId] = useState(BOOK_CATALOG[0]?.id)
  const selectedBook = BOOK_CATALOG.find(book => book.id === selectedId)

  return <div className="library-shell screen-only">
    <header className="library-header">
      <a className="brand" href="/" onClick={event => event.preventDefault()} aria-label={`${BRAND.imprint} home`}>
        <span className="brand-badge">SGK</span>
        <span className="brand-text"><strong>{BRAND.imprint}</strong><span>{BRAND.tagline}</span></span>
      </a>
      <button className="icon-btn" onClick={onToggleTheme} title="Toggle theme" aria-label="Toggle light and dark theme">{theme === 'light' ? '🌙' : '☀️'}</button>
    </header>

    <main className="library-main">
      <section className="library-hero">
        <div>
          <p className="catalog-eyebrow">The Sinha Family Group · Publishing library</p>
          <h1>Books that make difficult ideas visible.</h1>
          <p>Track every title from structured lessons to interactive, print, Word and offline editions.</p>
        </div>
        <div className="library-summary"><strong>{BOOK_CATALOG.length}</strong><span>book in the library</span><small>{BOOK_CATALOG.filter(book => book.status === 'In progress').length} currently in progress</small></div>
      </section>

      <section className="catalog-section" aria-labelledby="books-title">
        <div className="catalog-section-head"><div><p className="catalog-eyebrow">Library</p><h2 id="books-title">Book status</h2></div><p>Select a title to inspect its lessons, formats and next milestone.</p></div>
        <div className="book-catalog">
          {BOOK_CATALOG.map(book => <article className={`catalog-card ${selectedId === book.id ? 'selected' : ''}`} key={book.id}>
            <div className="catalog-cover" aria-hidden="true"><span>{book.series}</span><strong>{book.title}</strong><small>{book.author}</small></div>
            <div className="catalog-card-body">
              <div className="catalog-card-meta"><Status tone={book.statusTone}>{book.status}</Status><span>{book.completedLessons} lessons complete</span></div>
              <h3>{book.title}</h3><p>{book.subtitle}</p>
              <div className="catalog-progress"><span><i style={{ width: `${book.progress}%` }}/></span><strong>{book.progress}%</strong></div>
              <div className="catalog-card-actions"><button className="btn" onClick={() => setSelectedId(book.id)}>View details</button><button className="btn primary" onClick={() => onOpenBook(book)}>Open book</button></div>
            </div>
          </article>)}
        </div>
      </section>

      {selectedBook && <BookDetails book={selectedBook} onOpenBook={onOpenBook}/>}

      <section className="architecture-section" aria-labelledby="architecture-title">
        <div className="catalog-section-head"><div><p className="catalog-eyebrow">One engine, many books</p><h2 id="architecture-title">Publishing architecture</h2></div><p>Book content stays separate while every format uses the same tested rendering system.</p></div>
        <div className="architecture-grid">{PUBLISHING_LAYERS.map(([title, text], index) => <article key={title}><span>{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="folder-panel"><div><p className="catalog-eyebrow">Current repository</p><h3>Live folder structure</h3><p>This is the structure used by the running application and generation scripts.</p></div><pre><code>{LIVE_FOLDER_TREE}</code></pre></div>
      </section>
    </main>
    <footer className="library-footer"><strong>{BRAND.imprint}</strong><span>{BRAND.group} · {BRAND.tagline}</span></footer>
  </div>
}
