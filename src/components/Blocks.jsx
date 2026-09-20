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
    case 'image': return <figure className="lesson-figure"><img src={b.src} alt={b.alt}/>{(b.caption || b.points?.length) && <figcaption>{b.caption && <p className="figure-summary">{b.caption}</p>}{b.points?.length > 0 && <ol className="figure-points">{b.points.map((point,index)=><li key={point}><span>{index+1}</span><p><RichText text={point}/></p></li>)}</ol>}</figcaption>}</figure>
    case 'mission': return <section className={`mission ${b.variant || ''}`}><span className="eyebrow">{b.label || 'OUR MISSION'}</span><h2>{b.title}</h2><p><RichText text={b.text}/></p><div className="mission-grid"><div><strong>{b.weKnowLabel || 'What we know'}</strong><ul>{b.weKnow.map(x=><li key={x}><RichText text={x}/></li>)}</ul></div><div><strong>{b.weNeedLabel || 'What we need'}</strong><ul>{b.weNeed.map(x=><li key={x}><RichText text={x}/></li>)}</ul></div></div></section>
    case 'think': return <section className="journey-card think"><span>PAUSE & THINK</span><h3>{b.prompt}</h3><Reveal label="Reveal our thinking" staticMode={staticMode}><p><RichText text={b.answer}/></p></Reveal></section>
    case 'guess': return <section className="journey-card guess"><span>MAKE A GUESS</span><h3>{b.prompt}</h3>{b.code && <pre>{b.code}</pre>}<ol>{b.options.map(x=><li key={x}>{x}</li>)}</ol><Reveal label="Show the answer" staticMode={staticMode}><p><strong>Answer: {b.options[b.answerIndex]}.</strong> {b.explain}</p></Reveal></section>
    case 'bug': return <section className="journey-card bug"><span>BUG HUNT</span><h3>{b.prompt}</h3><CodeBlock filename="bug_hunt.py" lines={b.lines}/><Reveal label="Find the bug" staticMode={staticMode}><p><strong>Line {b.bugLine}.</strong> {b.explain}</p></Reveal></section>
    case 'callout': return <section className={`callout ${b.variant || 'note'}`}>{b.title && <h3>{b.title}</h3>}{b.paragraphs.map(p=><p key={p}><RichText text={p}/></p>)}</section>
    case 'flow': return <><Heading>{b.title || 'Input → Process → Output'}</Heading><FlowDiagram stages={b.stages} inputLabel={b.input?.[0]} inputDetail={b.input?.[1]} processLabel={b.process?.[0]} processDetail={b.process?.[1]} outputLabel={b.output?.[0]} outputDetail={b.output?.[1]} caption={b.caption}/></>
    case 'bytecode-map': return <section className="bytecode-map" aria-label={b.title || 'Python source code mapped to bytecode actions'}><div className="bytecode-version">{b.version}</div>{b.groups.map((group,groupIndex)=><article className="bytecode-group" key={group.source}><div className="bytecode-source"><span>SOURCE {groupIndex+1}</span><code>{group.source}</code></div><div className="bytecode-down" aria-hidden="true">↓</div><ol className="bytecode-actions">{group.actions.map((action,index)=><li key={`${action.opcode}-${index}`}><span className="bytecode-step">{index+1}</span><div><code>{action.opcode}</code><strong>{action.action}</strong>{action.state && <p>{action.state}</p>}</div></li>)}</ol></article>)}{b.command && <p className="bytecode-command"><span>TRY IT</span><code>{b.command}</code></p>}{b.caption && <p className="bytecode-caption">{b.caption}</p>}</section>
    case 'blueprint': return <>{b.showHeading !== false && <Heading>Plan before we type</Heading>}<ProgramCard {...b}/></>
    case 'code': return <>{b.showHeading !== false && <Heading>The code</Heading>}<CodeBlock lines={b.lines} filename={b.filename}/></>
    case 'runviz': return <>{b.showHeading !== false && <Heading>{staticMode ? 'Program run: every step' : 'Watch the program run'}</Heading>}<RunVisualizer staticMode={staticMode} file={b.filename} codeLines={b.codeLines} steps={b.steps}/></>
    case 'terminal': return <><Heading>Expected output</Heading><TerminalWindow staticMode={staticMode} command={b.command} lines={b.lines} title="Terminal"/></>
    case 'pipeline': return <><Heading>Compare the routes</Heading><PipelineVisualizer tracks={b.tracks} staticMode={staticMode}/></>
    case 'steps': return <>{b.showHeading !== false && <Heading>{b.title || 'Try it yourself'}</Heading>}<ol className="steps-list">{b.items.map(x=><li key={x}><RichText text={x}/></li>)}</ol></>
    case 'mistakes': return <><Heading>Common mistakes and fixes</Heading><div className="mistakes">{b.items.map(([bad,why])=><div className="mistake" key={bad}><code className="bad">✗ {bad}</code><p>{why}</p></div>)}</div></>
    case 'quiz': return <><Heading>Check your understanding</Heading><div className="quiz">{b.items.map(([q,a])=><details className="quiz-item" key={q} open={staticMode}><summary>{q}</summary><p><strong>Answer:</strong> {a}</p></details>)}</div></>
    case 'takeaways': return <><Heading>Key takeaways</Heading><div className="takeaways">{b.items.map(x=><p className="takeaway" key={x}>◆ {x}</p>)}</div></>
    case 'aha': return <section className="aha"><span>THE AHA MOMENT</span><p>{b.text}</p></section>
    case 'cliffhanger': return <section className="cliffhanger"><span>NEXT DISCOVERY</span><h3>{b.title}</h3><p>{b.text}</p></section>
    case 'resources': return <><Heading>Keep exploring</Heading><div className="resources">{b.items.map(([label,url])=><a href={url} key={url} target="_blank" rel="noreferrer">↗ {label}<small>{url}</small></a>)}</div></>
    case 'definition': return <section className="pedagogy-card definition-card"><span className="pedagogy-label">DEFINITION</span><h3>{b.term}</h3><p><RichText text={b.text}/></p>{b.example && <p className="pedagogy-example"><strong>Example:</strong> <RichText text={b.example}/></p>}</section>
    case 'worked-example': return <section className="pedagogy-card worked-example"><span className="pedagogy-label">WORKED EXAMPLE</span><h3>{b.title}</h3><p><strong>Problem:</strong> <RichText text={b.problem}/></p><ol>{b.steps.map(step=><li key={step}><RichText text={step}/></li>)}</ol><p className="worked-result"><strong>Result:</strong> <RichText text={b.result}/></p></section>
    case 'case-study': return <section className="pedagogy-card case-study"><span className="pedagogy-label">{b.kind || 'REAL CASE'}</span><h3>{b.title}</h3><p><RichText text={b.context}/></p>{b.points?.length > 0 && <ul>{b.points.map(point=><li key={point}><RichText text={point}/></li>)}</ul>}{b.source && <p className="case-source"><strong>Source:</strong> {b.source.url ? <a href={b.source.url} target="_blank" rel="noreferrer">{b.source.label}</a> : b.source.label}</p>}</section>
    case 'timeline': return <section className="timeline-block"><h3>{b.title}</h3><ol>{b.items.map(item=><li key={`${item.date}-${item.title}`}><time>{item.date}</time><div><strong>{item.title}</strong><p><RichText text={item.text}/></p></div></li>)}</ol></section>
    case 'comparison': return <section className="comparison-block"><h3>{b.title}</h3><div className="table-scroll"><table><thead><tr>{b.columns.map(column=><th key={column}>{column}</th>)}</tr></thead><tbody>{b.rows.map((row,index)=><tr key={index}>{row.map((cell,cellIndex)=><td key={cellIndex}><RichText text={cell}/></td>)}</tr>)}</tbody></table></div></section>
    case 'source-note': return <aside className="source-note"><strong>{b.label || 'Source note'}</strong><p><RichText text={b.claim}/></p>{b.url && <a href={b.url} target="_blank" rel="noreferrer">{b.url}</a>}{b.verifiedThrough && <small>Verified through {b.verifiedThrough}</small>}</aside>
    case 'question': return <section className={`pedagogy-card question-card ${b.kind || 'practice'}`}><span className="pedagogy-label">{b.kind === 'verified-pyq' ? 'VERIFIED PAST-YEAR QUESTION' : 'PRACTICE QUESTION'}</span><div className="question-meta">{[b.exam,b.year,b.paper,b.marks && `${b.marks} marks`].filter(Boolean).map(item=><span key={item}>{item}</span>)}</div><h3>{b.prompt}</h3><Reveal label="Show model answer" staticMode={staticMode}><p><RichText text={b.answer}/></p>{b.marking?.length > 0 && <ul>{b.marking.map(point=><li key={point}><RichText text={point}/></li>)}</ul>}{b.sourceUrl && <a href={b.sourceUrl} target="_blank" rel="noreferrer">Official source</a>}</Reveal></section>
    case 'activity': return <section className="pedagogy-card activity-card"><span className="pedagogy-label">ACTIVITY</span><h3>{b.title}</h3>{b.materials?.length > 0 && <p><strong>Materials:</strong> {b.materials.join(', ')}</p>}<ol>{b.steps.map(step=><li key={step}><RichText text={step}/></li>)}</ol>{b.safety && <p className="activity-safety"><strong>Safety:</strong> <RichText text={b.safety}/></p>}</section>
    case 'reflection': return <section className="pedagogy-card reflection-card"><span className="pedagogy-label">OPTIONAL REFLECTION</span><h3>{b.prompt}</h3><p>{b.permission || 'You may pause, skip this exercise or return later.'}</p>{b.guidance?.length > 0 && <Reveal label="Show gentle guidance" staticMode={staticMode}><ul>{b.guidance.map(point=><li key={point}><RichText text={point}/></li>)}</ul></Reveal>}</section>
    case 'safety-notice': return <aside className="safety-notice"><strong>{b.title || 'Important support note'}</strong><p><RichText text={b.text}/></p>{b.resources?.map(([label,url])=><a href={url} key={url} target="_blank" rel="noreferrer">{label}</a>)}</aside>
    default: return null
  }
}
export default function Blocks({ blocks, staticMode = false }) { return <div className="lesson-body">{blocks.map((b,i)=><Block key={`${b.type}-${i}`} block={b} staticMode={staticMode}/>)}</div> }
