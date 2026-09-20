import Blocks from './Blocks.jsx'

function RichLine({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return <p>{parts.map((part,index)=>part.startsWith('**')?<strong key={index}>{part.slice(2,-2)}</strong>:part)}</p>
}

export default function PrintBook({ publication }) {
  const { lessons, BOOK, BRAND, PREFACE } = publication
  return <main className="book force-light">
    <section className="book-cover book-sheet" data-page-label="Cover"><p className="cover-series">{BOOK.series}</p><div className="cover-mark">SGK</div><p className="cover-imprint">{BRAND.imprint}</p><h1>{BOOK.title}</h1><h2>{BOOK.subtitle}</h2><p className="cover-author">{BOOK.author}</p><p>{BOOK.edition} · {BOOK.year}</p></section>
    <section className="front-page book-sheet copyright-page" data-page-label="Copyright"><div className="cp-brand-mark">SGK</div><h1>{BOOK.title}</h1><p><strong>© {BOOK.year} by {BOOK.author}. All rights reserved.</strong></p><p>Published by {BOOK.publisher}.</p><p>{BOOK.rights}</p><p>{BOOK.disclaimer}</p><blockquote>{BOOK.dedication}</blockquote></section>
    <section className="front-page book-sheet" data-page-label="Acknowledgements"><h1>Acknowledgements</h1>{BOOK.acknowledgements.map(text=><p key={text}>{text}</p>)}</section>
    <section className="front-page toc book-sheet" data-page-label="Contents"><h1>Contents</h1><ol><li><a href="#print-preface">Preface — Why Python?</a></li><li><a href="#print-how-to">How to use this book</a></li>{lessons.map((l,i)=><li key={l.id}><a href={`#print-${l.id}`}>{BOOK.unitLabel} {i+1}: {l.title}</a><span>{l.subtitle}</span></li>)}</ol></section>
    <section className="front-page book-sheet" data-page-label="Preface" id="print-preface"><h1>{PREFACE.title}</h1><Blocks blocks={PREFACE.blocks} staticMode/></section>
    <section className="front-page book-sheet" data-page-label="How to Use" id="print-how-to"><h1>How to use this book</h1>{BOOK.howToUse.map(text=><p key={text}>{text}</p>)}</section>
    {lessons.map((l,i)=><section className="chapter-wrapper book-sheet" data-page-label={`${BOOK.unitLabel} ${String(i+1).padStart(2,'0')}`} id={`print-${l.id}`} key={l.id}><article className="lesson-page"><header className="lesson-page-header"><p className="lesson-page-kicker">{BOOK.unitLabel} {String(i+1).padStart(2,'0')} · {BOOK.title}</p><h1>{l.icon} {l.title}</h1><p className="lesson-page-sub">{l.subtitle}</p></header><Blocks blocks={l.blocks} staticMode/></article></section>)}
    <section className="front-page about book-sheet" data-page-label="About the Author"><h1>About the author</h1>{BOOK.aboutAuthor.map(text=><RichLine text={text} key={text}/>)}<h2>Keep learning</h2><p>Your next useful program begins with one small question. Keep guessing, running and checking.</p><p><strong>{BRAND.imprint}</strong> · {BRAND.tagline}</p></section>
  </main>
}
