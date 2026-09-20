import { useState } from 'react'
import { BRAND } from '../publishing/publisher.js'
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
      <div className="catalog-output-actions">
        <button className="btn primary" disabled={!book.readable} onClick={() => onOpenBook(book)}>{book.readable ? 'Open Web View →' : 'Reader coming soon'}</button>
        <button className="btn" disabled={!book.readable} onClick={() => onOpenBook(book, book.currentEdition, { preview: true })}>Book / PDF Preview</button>
        {book.readable ? <a className="btn" href={book.downloads.offlineHtml} target="_blank" rel="noreferrer">Offline HTML</a> : <span className="btn disabled-link">Offline HTML</span>}
        {book.readable ? <a className="btn" href={book.downloads.docx} download>Editable Word</a> : <span className="btn disabled-link">Editable Word</span>}
      </div>
    </div>

    <div className="catalog-detail-grid">
      <div><h3>Registered chapters</h3>{book.lessons.length ? <ol>{book.lessons.map((lesson, index) => <li key={lesson.id}><strong>{index + 1}. {lesson.title}</strong><span>{lesson.subtitle}</span></li>)}</ol> : <p className="catalog-empty">Chapter blueprint pending.</p>}</div>
      <div><h3>Publishing outputs</h3><ul className="catalog-checks">{book.formats.map(item => <li key={item.label}><span>✓</span><div><strong>{item.label}</strong><small>{item.state}</small></div></li>)}</ul></div>
      <div><h3>Branding readiness</h3><ul className="catalog-readiness">{book.branding.map(item => <li key={item.label}><strong>{item.label}</strong><span>{item.state}</span></li>)}</ul></div>
    </div>

    <div className="catalog-editions"><h3>Edition history</h3><div>{book.editions.map(edition => <article key={edition.id}><span><strong>{edition.label}</strong><small>{edition.id} · v{edition.contentVersion} · {edition.status}</small></span><span><small>{edition.chapterCount} chapters · {edition.releaseCount} releases</small><button className="btn" disabled={!edition.readable} onClick={() => onOpenBook(book, edition.id)}>{edition.id === book.currentEdition ? 'Open current' : edition.readable ? 'Open edition' : 'Not readable'}</button></span></article>)}</div></div>
    <div className="catalog-next"><strong>Next milestone</strong><p>{book.nextMilestone}</p></div>
  </section>
}

export default function LibraryHome({ theme, onToggleTheme, onOpenBook }) {
  const [selectedId, setSelectedId] = useState(BOOK_CATALOG[0]?.id)
  const [query, setQuery] = useState('')
  const [domain, setDomain] = useState('all')
  const [status, setStatus] = useState('all')
  const selectedBook = BOOK_CATALOG.find(book => book.id === selectedId)
  const domains = [...new Set(BOOK_CATALOG.map(book => book.domain))].sort()
  const statuses = [...new Set(BOOK_CATALOG.map(book => book.status))].sort()
  const normalizedQuery = query.trim().toLowerCase()
  const visibleBooks = BOOK_CATALOG.filter(book => (domain === 'all' || book.domain === domain) && (status === 'all' || book.status === status) && (!normalizedQuery || `${book.title} ${book.subtitle} ${book.author} ${book.series} ${book.domain} ${book.subdomain}`.toLowerCase().includes(normalizedQuery)))

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
        <div className="library-summary"><strong>{BOOK_CATALOG.length}</strong><span>{BOOK_CATALOG.length === 1 ? 'book' : 'books'} in the library</span><small>{BOOK_CATALOG.filter(book => book.status === 'In progress').length} currently in progress</small></div>
      </section>

      <section className="catalog-section" aria-labelledby="books-title">
        <div className="catalog-section-head"><div><p className="catalog-eyebrow">Library</p><h2 id="books-title">Book status</h2></div><p>Select a title to inspect its chapters, editions, formats and next milestone.</p></div>
        <div className="catalog-filters">
          <label><span>Search books</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Title, author, series or subject"/></label>
          <label><span>Domain</span><select value={domain} onChange={event => setDomain(event.target.value)}><option value="all">All domains</option>{domains.map(value => <option value={value} key={value}>{value}</option>)}</select></label>
          <label><span>Status</span><select value={status} onChange={event => setStatus(event.target.value)}><option value="all">All statuses</option>{statuses.map(value => <option value={value} key={value}>{value}</option>)}</select></label>
          <strong>{visibleBooks.length} shown</strong>
        </div>
        <div className="book-catalog">
          {!visibleBooks.length && <p className="catalog-no-results">No books match these filters.</p>}
          {visibleBooks.map(book => <article className={`catalog-card ${selectedId === book.id ? 'selected' : ''}`} key={book.id}>
            <div className="catalog-cover" aria-hidden="true"><span>{book.series}</span><strong>{book.title}</strong><small>{book.author}</small></div>
            <div className="catalog-card-body">
              <div className="catalog-card-meta"><Status tone={book.statusTone}>{book.status}</Status><span>{book.completedLessons} {book.completedLessons === 1 ? 'chapter' : 'chapters'} registered</span></div>
              <h3>{book.title}</h3><p>{book.subtitle}</p><p className="catalog-version">{book.editionLabel} · v{book.contentVersion} · verified through {book.verifiedThrough} · {book.latestRelease ? `latest release ${book.latestRelease}` : 'not yet released'}</p>
              <div className="catalog-progress"><span><i style={{ width: `${book.progress}%` }}/></span><strong>{book.progress}%</strong></div>
              <div className="catalog-card-actions"><button className="btn" onClick={() => setSelectedId(book.id)}>View details</button><button className="btn primary" disabled={!book.readable} onClick={() => onOpenBook(book)}>{book.readable ? 'Open book' : 'Planned'}</button></div>
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
