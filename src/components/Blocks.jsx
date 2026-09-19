import { useState } from 'react'
import CodeBlock from './CodeBlock.jsx'
import FlowDiagram from './FlowDiagram.jsx'
import ProgramCard from './ProgramCard.jsx'
import RunVisualizer from './RunVisualizer.jsx'
import TerminalWindow from './TerminalWindow.jsx'
import PipelineVisualizer from './PipelineVisualizer.jsx'

function RichText({ text = '' }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return parts.map((part, i) => part.startsWith('**') ? <strong key={i}>{part.slice(2,-2)}</strong> : part.startsWith('`') ? <code key={i}>{part.slice(1,-1)}</code> : part)
}
function Reveal({ label, children, staticMode }) {
  const [open, setOpen] = useState(false)
  return <div className="reveal-card">{staticMode ? <><strong>{label}</strong><div>{children}</div></> : <><button className="reveal-button" onClick={() => setOpen(v => !v)}>{open ? 'Hide answer' : label}</button>{open && <div className="reveal-answer">{children}</div>}</>}</div>
}
function Heading({ children }) { return <h2 className="section-heading">{children}</h2> }

export function Block({ block: b, staticMode = false }) {
  switch (b.type) {
    case 'heading': return <Heading>{b.text}</Heading>
    case 'paragraph': return <p className="section-intro"><RichText text={b.text}/></p>
    case 'image': return <figure className="lesson-figure"><img src={b.src} alt={b.alt}/><figcaption>{b.caption}</figcaption></figure>
    case 'mission': return <section className="mission"><span className="eyebrow">OUR MISSION</span><h2>{b.title}</h2><p>{b.text}</p><div className="mission-grid"><div><strong>What we know</strong><ul>{b.weKnow.map(x=><li key={x}>{x}</li>)}</ul></div><div><strong>What we need</strong><ul>{b.weNeed.map(x=><li key={x}>{x}</li>)}</ul></div></div></section>
    case 'think': return <section className="journey-card think"><span>PAUSE & THINK</span><h3>{b.prompt}</h3><Reveal label="Reveal our thinking" staticMode={staticMode}><p>{b.answer}</p></Reveal></section>
    case 'guess': return <section className="journey-card guess"><span>MAKE A GUESS</span><h3>{b.prompt}</h3>{b.code && <pre>{b.code}</pre>}<ol>{b.options.map(x=><li key={x}>{x}</li>)}</ol><Reveal label="Show the answer" staticMode={staticMode}><p><strong>Answer: {b.options[b.answerIndex]}.</strong> {b.explain}</p></Reveal></section>
    case 'bug': return <section className="journey-card bug"><span>BUG HUNT</span><h3>{b.prompt}</h3><CodeBlock filename="bug_hunt.py" lines={b.lines}/><Reveal label="Find the bug" staticMode={staticMode}><p><strong>Line {b.bugLine}.</strong> {b.explain}</p></Reveal></section>
    case 'callout': return <section className={`callout ${b.variant || 'note'}`}>{b.title && <h3>{b.title}</h3>}{b.paragraphs.map(p=><p key={p}><RichText text={p}/></p>)}</section>
    case 'flow': return <><Heading>Input → Process → Output</Heading><FlowDiagram inputLabel={b.input[0]} inputDetail={b.input[1]} processLabel={b.process[0]} processDetail={b.process[1]} outputLabel={b.output[0]} outputDetail={b.output[1]}/></>
    case 'blueprint': return <><Heading>Plan before we type</Heading><ProgramCard {...b}/></>
    case 'code': return <><Heading>The code</Heading><CodeBlock lines={b.lines} filename={b.filename}/></>
    case 'runviz': return <><Heading>{staticMode ? 'Program run: every step' : 'Watch the program run'}</Heading><RunVisualizer staticMode={staticMode} file={b.filename} codeLines={b.codeLines} steps={b.steps}/></>
    case 'terminal': return <><Heading>Expected output</Heading><TerminalWindow staticMode={staticMode} command={b.command} lines={b.lines} title="Terminal"/></>
    case 'pipeline': return <><Heading>Compare the routes</Heading><PipelineVisualizer tracks={b.tracks} staticMode={staticMode}/></>
    case 'steps': return <><Heading>Try it yourself</Heading><ol className="steps-list">{b.items.map(x=><li key={x}><RichText text={x}/></li>)}</ol></>
    case 'mistakes': return <><Heading>Common mistakes and fixes</Heading><div className="mistakes">{b.items.map(([bad,why])=><div className="mistake" key={bad}><code className="bad">✗ {bad}</code><p>{why}</p></div>)}</div></>
    case 'quiz': return <><Heading>Check your understanding</Heading><div className="quiz">{b.items.map(([q,a])=><details className="quiz-item" key={q} open={staticMode}><summary>{q}</summary><p><strong>Answer:</strong> {a}</p></details>)}</div></>
    case 'takeaways': return <><Heading>Key takeaways</Heading><div className="takeaways">{b.items.map(x=><p className="takeaway" key={x}>◆ {x}</p>)}</div></>
    case 'aha': return <section className="aha"><span>THE AHA MOMENT</span><p>{b.text}</p></section>
    case 'cliffhanger': return <section className="cliffhanger"><span>NEXT DISCOVERY</span><h3>{b.title}</h3><p>{b.text}</p></section>
    case 'resources': return <><Heading>Keep exploring</Heading><div className="resources">{b.items.map(([label,url])=><a href={url} key={url} target="_blank" rel="noreferrer">↗ {label}<small>{url}</small></a>)}</div></>
    default: return null
  }
}
export default function Blocks({ blocks, staticMode = false }) { return <div className="lesson-body">{blocks.map((b,i)=><Block key={`${b.type}-${i}`} block={b} staticMode={staticMode}/>)}</div> }
