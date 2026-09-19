import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header.jsx'
import LessonShell from './components/LessonShell.jsx'
import PrintBook from './components/PrintBook.jsx'
import Blocks from './components/Blocks.jsx'
import lessons, { BOOK } from './content/index.js'
import { exportBookToWord } from './export/docx.js'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('aeb-theme') || 'light')
  const [active, setActive] = useState(0)
  const [preview, setPreview] = useState(false)
  const [exporting, setExporting] = useState(false)
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('aeb-theme', theme) }, [theme])
  useEffect(() => window.scrollTo({ top: 0 }), [active])
  const lesson = lessons[active]
  const savePdf = () => { setPreview(true); setTimeout(() => window.print(), 700) }
  const saveWord = async () => { setExporting(true); try { await exportBookToWord() } catch (e) { console.error(e); alert(`Word export failed: ${e.message}`) } finally { setExporting(false) } }
  return <>
    <div className="screen-only"><Header theme={theme} onToggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')} lessons={lessons} active={active} onSelect={setActive} onSavePdf={savePdf} onSaveWord={saveWord} exporting={exporting}/>
      <main className="page"><AnimatePresence mode="wait"><motion.div key={lesson.id} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}><LessonShell lesson={lesson} index={active} total={lessons.length}><Blocks blocks={lesson.blocks}/></LessonShell></motion.div></AnimatePresence>
      <nav className="lesson-nav"><button className="btn" disabled={!active} onClick={() => setActive(x=>x-1)}>← Previous</button><span>Lesson {active+1} of {lessons.length}</span><button className="btn primary" disabled={active===lessons.length-1} onClick={() => setActive(x=>x+1)}>Next →</button></nav>
      <footer className="site-footer">{BOOK.title} · Designed once, published for web, PDF and Word.</footer></main>
      {exporting && <div className="toast">Preparing the editable Word book…</div>}
    </div>
    <div className="print-only"><PrintBook lessons={lessons}/></div>
    {preview && <div className="preview-overlay force-light"><div className="preview-toolbar no-print"><span>Book View · choose “Save as PDF” in the print dialog.</span><button className="btn" onClick={()=>setPreview(false)}>Close</button></div><div className="preview-paper"><PrintBook lessons={lessons}/></div></div>}
  </>
}
