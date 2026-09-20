import Blocks from './Blocks.jsx'

function RichLine({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return <p>{parts.map((part,index)=>part.startsWith('**')?<strong key={index}>{part.slice(2,-2)}</strong>:part)}</p>
}

export default function PrintBook({ publication }) {
  const { lessons, BOOK, BRAND, PREFACE, HOW_TO_READ, CURRICULUM_ROADMAP } = publication
  return <main className="book force-light">
    <section className="book-cover book-sheet" data-page-label="Cover"><img className="cover-publisher-mark" src={BRAND.imprintMark} alt={`${BRAND.imprint} publisher mark`}/><p className="cover-series">{BOOK.series}</p><p className="cover-imprint">{BRAND.imprint}</p><h1>{BOOK.title}</h1><h2>{BOOK.subtitle}</h2><p className="cover-author">{BOOK.author}</p><p>{BOOK.edition} · {BOOK.year}</p></section>
    <section className="front-page book-sheet copyright-page" data-page-label="Copyright"><h1>{BOOK.title}</h1><p><strong>© {BOOK.year} by {BOOK.author}. All rights reserved.</strong></p><p>Published by {BOOK.publisher}.</p><p>{BOOK.rights}</p><p>{BOOK.disclaimer}</p><blockquote>{BOOK.dedication}</blockquote></section>
    <section className="front-page book-sheet" data-page-label="Acknowledgements"><h1>Acknowledgements</h1>{BOOK.acknowledgements.map(text=><p key={text}>{text}</p>)}</section>
    <section className="front-page toc book-sheet" data-page-label="Contents">
      <div className="toc-header">
        <h1>Contents & Curriculum Roadmap</h1>
        <p className="toc-intro">A structured, mastery-based path from core fundamentals to full software architecture.</p>
      </div>

      <div className="toc-current-chapters">
        <h2>Active Lessons in this Edition</h2>
        <ol className="toc-list">
          <li><a href="#print-preface">{PREFACE.title}</a></li>
          {HOW_TO_READ && <li><a href="#print-how-to-read">{HOW_TO_READ.title}</a></li>}
          {lessons.map((l,i)=><li key={l.id}><a href={`#print-${l.id}`}>{BOOK.unitLabel} {i+1}: {l.title}</a><span>{l.subtitle}</span></li>)}
        </ol>
      </div>

      {CURRICULUM_ROADMAP && (
        <div className="toc-curriculum-roadmap">
          <h2>Master Curriculum Journey</h2>
          <div className="curriculum-phases-grid">
            {CURRICULUM_ROADMAP.map(phase => (
              <div key={phase.phase} className="curriculum-phase-card">
                <div className="phase-card-header">
                  <span className="phase-badge">{phase.phase}</span>
                  <h3>{phase.title}</h3>
                </div>
                <p className="phase-desc">{phase.description}</p>
                <div className="phase-modules">
                  {phase.modules.map(mod => (
                    <div key={mod.id} className="phase-module-item">
                      <div className="module-title-row">
                        <strong>{mod.title}</strong>
                        {mod.assessment && <span className="module-assessment-pill">✓ {mod.assessment}</span>}
                      </div>
                      <div className="module-topics-chips">
                        {mod.topics.map(topic => <span key={topic} className="topic-chip">{topic}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
                {phase.milestone && (
                  <div className="phase-milestone-banner">
                    <span className="milestone-badge">{phase.milestone.badge}</span>
                    <div className="milestone-details">
                      <strong>{phase.milestone.title}</strong>
                      <p>{phase.milestone.summary}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
    <section className="front-page book-sheet" data-page-label="Preface" id="print-preface"><h1>{PREFACE.title}</h1><Blocks blocks={PREFACE.blocks} staticMode/></section>
    {HOW_TO_READ && <section className="front-page book-sheet" data-page-label="How to Read" id="print-how-to-read"><h1>{HOW_TO_READ.title}</h1><Blocks blocks={HOW_TO_READ.blocks} staticMode/></section>}
    {lessons.map((l,i)=><section className="chapter-wrapper book-sheet" data-page-label={`${BOOK.unitLabel} ${String(i+1).padStart(2,'0')}`} id={`print-${l.id}`} key={l.id}><article className="lesson-page"><header className="lesson-page-header"><p className="lesson-page-kicker">{BOOK.unitLabel} {String(i+1).padStart(2,'0')} · {BOOK.title}</p><h1>{l.icon} {l.title}</h1><p className="lesson-page-sub">{l.subtitle}</p></header><Blocks blocks={l.blocks} staticMode/></article></section>)}
    <section className="front-page about book-sheet" data-page-label="About the Author"><h1>About the author</h1>{BOOK.aboutAuthor.map(text=><RichLine text={text} key={text}/>)}<h2>Keep learning</h2><p>Your next useful program begins with one small question. Keep guessing, running and checking.</p><p><strong>{BRAND.imprint}</strong> · {BRAND.tagline}</p></section>
  </main>
}
