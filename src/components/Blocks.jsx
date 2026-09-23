import { useState } from 'react'
import CodeBlock from './CodeBlock.jsx'
import FlowDiagram from './FlowDiagram.jsx'
import ProgramCard from './ProgramCard.jsx'
import RunVisualizer from './RunVisualizer.jsx'
import TerminalWindow from './TerminalWindow.jsx'
import PipelineVisualizer from './PipelineVisualizer.jsx'
import ApiInspector from './ApiInspector.jsx'

function RichText({ text = '' }) {
  const regex = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g
  const parts = text.split(regex)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i}>{part.slice(1, -1)}</code>
    }
    if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const closingBracket = part.indexOf('](')
      const label = part.slice(1, closingBracket)
      const url = part.slice(closingBracket + 2, -1)
      return <a key={i} href={url} target="_blank" rel="noreferrer" className="inline-link">{label}</a>
    }
    return part
  })
}
function Reveal({ label, children, staticMode }) {
  const [open, setOpen] = useState(false)
  return <div className="reveal-card">{staticMode ? <><strong>{label}</strong><div>{children}</div></> : <><button className="reveal-button" onClick={() => setOpen(v => !v)}>{open ? 'Hide answer' : label}</button>{open && <div className="reveal-answer">{children}</div>}</>}</div>
}
function Heading({ children }) { return <h2 className="section-heading">{children}</h2> }

function MissionHud({ mission, phase, rank, status = 'ACTIVE' }) {
  return (
    <aside className="mission-hud-banner">
      <div className="hud-phase-col">
        <span className="hud-phase-badge">{phase}</span>
        <h4 className="hud-mission-title">{mission}</h4>
      </div>
      <div className="hud-rank-pill">
        <span>★</span>
        <span>{rank}</span>
      </div>
    </aside>
  )
}

function WarRoomTriage({ title, scenario, options, answerIndex, debrief, traps = [], staticMode }) {
  const [selected, setSelected] = useState(staticMode ? answerIndex : null)
  const isAnswered = selected !== null
  const isCorrect = selected === answerIndex

  return (
    <section className="war-room-triage">
      <div className="triage-header-bar">
        <span className="triage-alarm-badge">WAR ROOM INCIDENT TRIAGE</span>
        <span className="triage-mode-tag">DIAGNOSTIC CHALLENGE</span>
      </div>
      <div className="triage-body">
        <h3 className="triage-title">{title}</h3>
        <p className="triage-scenario"><RichText text={scenario} /></p>
        <div className="triage-options-list">
          {options.map((opt, i) => (
            <button
              key={i}
              type="button"
              className={`triage-option-btn ${selected === i ? 'selected' : ''}`}
              onClick={() => setSelected(i)}
            >
              <span className="triage-option-letter">{String.fromCharCode(65 + i)}</span>
              <span><RichText text={opt} /></span>
            </button>
          ))}
        </div>
        {(isAnswered || staticMode) && (
          <div className={`triage-debrief-box ${isCorrect || staticMode ? 'triumph' : 'trap'}`}>
            <div className="triage-debrief-header">
              {isCorrect || staticMode ? '✓ TACTICAL TRIUMPH: THE WINNING MOVE' : '✗ DIAGNOSTIC TRAP: WHY THIS FAILS'}
            </div>
            <p className="triage-debrief-text">
              <RichText text={isCorrect || staticMode ? debrief : (traps[selected] || debrief)} />
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

function BattleScar({ title, context, takeaway, metric = 'PRODUCTION LESSON' }) {
  return (
    <section className="battle-scar-card">
      <div className="battle-scar-header">
        <span>⚡ WAR ROOM BATTLE SCAR</span>
        <span>•</span>
        <span>{metric}</span>
      </div>
      <div className="battle-scar-body">
        <h3 className="battle-scar-title">{title}</h3>
        <p className="battle-scar-context"><RichText text={context} /></p>
        <p className="battle-scar-takeaway">
          <strong>Key Architectural Lesson:</strong> <RichText text={takeaway} />
        </p>
      </div>
    </section>
  )
}

function BattlePlan({ badge = 'TACTICAL MISSION ROADMAP', title = 'The 3 Phase Battle Plan', intro, phases = [] }) {
  return (
    <section className="battle-plan-card">
      <div className="battle-plan-header">
        <span className="battle-plan-badge">{badge}</span>
        <h3 className="battle-plan-title">{title}</h3>
      </div>
      <div className="battle-plan-body">
        {intro && <p className="battle-plan-intro"><RichText text={intro} /></p>}
        <div className="battle-plan-grid">
          {phases.map((ph, idx) => (
            <div key={idx} className={`battle-plan-phase-card ${ph.status === 'active' ? 'active' : ''}`}>
              <div className="phase-card-top">
                <span className="phase-pill">{ph.phase}</span>
                {ph.status === 'active' && <span className="phase-active-tag">CURRENT FOCUS</span>}
              </div>
              {ph.timing && <span className="phase-timing">{ph.timing}</span>}
              <h4 className="phase-card-title">{ph.title}</h4>
              <p className="phase-card-desc"><RichText text={ph.desc} /></p>
              {ph.outcome && (
                <div className="phase-outcome-box">
                  <strong>★ Phase Outcome:</strong>
                  <RichText text={ph.outcome} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ScenarioGrid({ badge = 'REAL WORLD MENTAL MODELS', title = 'Everyday APIs You Already Use', intro, scenarios = [] }) {
  return (
    <section className="scenario-grid-container">
      <div className="scenario-grid-header">
        <span className="scenario-grid-badge">{badge}</span>
        <h3 className="scenario-grid-title">{title}</h3>
      </div>
      {intro && <p className="scenario-grid-intro"><RichText text={intro} /></p>}
      <div className="scenario-cards-row">
        {scenarios.map((sc, idx) => (
          <div key={idx} className="scenario-card">
            <div className="scenario-card-header">
              <span className="scenario-card-icon">{sc.icon}</span>
              <div>
                <span className="scenario-card-kicker">{sc.kicker}</span>
                <h4 className="scenario-card-title">{sc.title}</h4>
              </div>
            </div>
            <div className="scenario-card-body">
              <div className="scenario-block question-block">
                <span className="scenario-label">The Natural Question:</span>
                <p className="scenario-text italic"><RichText text={sc.question} /></p>
              </div>
              <div className="scenario-block reality-block">
                <span className="scenario-label">The Tech Reality Check:</span>
                <p className="scenario-text"><RichText text={sc.reality} /></p>
              </div>
              <div className="scenario-block conversation-block">
                <span className="scenario-label">The API Conversation Over the Wire:</span>
                <div className="conversation-dialogue">
                  <div className="dialogue-line client">
                    <span className="dialogue-speaker">{sc.clientName}:</span>
                    <span className="dialogue-quote">"{sc.clientSays}"</span>
                  </div>
                  <div className="dialogue-line server">
                    <span className="dialogue-speaker">{sc.serverName}:</span>
                    <span className="dialogue-quote">"{sc.serverReplies}"</span>
                  </div>
                </div>
              </div>
              <div className="scenario-block takeaway-block">
                <span className="scenario-label">Why This Matters:</span>
                <p className="scenario-text highlight"><RichText text={sc.takeaway} /></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function StructuredBreakdown({ badge = 'ARCHITECTURAL DECONSTRUCTION', title, intro, categories = [] }) {
  return (
    <section className="structured-breakdown-card">
      <div className="structured-header">
        <span className="structured-badge">{badge}</span>
        <h3 className="structured-title">{title}</h3>
      </div>
      {intro && <p className="structured-intro"><RichText text={intro} /></p>}
      <div className="structured-categories-list">
        {categories.map((cat, idx) => (
          <div key={idx} className="category-shape-box">
            <div className="category-top-bar">
              <span className="category-num-badge">PILLAR {idx + 1}</span>
              <span className="category-name">{cat.category}</span>
              {cat.subCategory && <span className="category-sub">{cat.subCategory}</span>}
            </div>
            <div className="category-content-grid">
              <div className="category-explanation-pane">
                <h4 className="category-card-heading">{cat.title}</h4>
                <p className="category-desc"><RichText text={cat.explanation} /></p>
                {cat.points?.length > 0 && (
                  <ul className="category-bullets">
                    {cat.points.map((pt, pidx) => (
                      <li key={pidx}><RichText text={pt} /></li>
                    ))}
                  </ul>
                )}
              </div>
              {cat.code && (
                <div className="category-code-pane">
                  <div className="pane-code-header">
                    <span>{cat.filename || 'snippet.py'}</span>
                  </div>
                  <pre className="category-code-box"><code>{Array.isArray(cat.code) ? cat.code.join('\n') : cat.code}</code></pre>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ChunkedCode({ badge = 'CODE IN CHUNKS', title, intro, chunks = [] }) {
  return (
    <section className="chunked-code-card">
      <div className="chunked-header">
        <span className="chunked-badge">{badge}</span>
        <h3 className="chunked-title">{title}</h3>
      </div>
      {intro && <p className="chunked-intro"><RichText text={intro} /></p>}
      <div className="chunked-list">
        {chunks.map((chunk, idx) => (
          <div key={idx} className="chunk-shape-card">
            <div className="chunk-top-bar">
              <span className="chunk-num-badge">CHUNK {idx + 1}</span>
              <span className="chunk-label">{chunk.label}</span>
              {chunk.badge && <span className="chunk-sub-badge">{chunk.badge}</span>}
            </div>
            <div className="chunk-grid">
              <div className="chunk-code-pane">
                <div className="chunk-code-head">
                  <span className="dot r" />
                  <span className="dot y" />
                  <span className="dot g" />
                  <span className="chunk-filename">{chunk.filename || 'wire_segment'}</span>
                </div>
                <pre className="chunk-code-body">
                  <code>{Array.isArray(chunk.code) ? chunk.code.join('\n') : chunk.code}</code>
                </pre>
              </div>
              <div className="chunk-explanation-pane">
                <h4 className="chunk-heading">{chunk.title || 'What this chunk does'}</h4>
                <p className="chunk-desc"><RichText text={chunk.explanation} /></p>
                {chunk.keyTakeaway && (
                  <div className="chunk-key-takeaway">
                    <strong>Rule:</strong> <RichText text={chunk.keyTakeaway} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function PredictOutput({ badge = 'IMAGINE & PREDICT', prompt, code, options = [], answerIndex = 0, revealTitle = 'Actual Output & Debrief', explanation, staticMode = false }) {
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(staticMode)

  const handleSelect = (idx) => {
    setSelected(idx)
    setRevealed(true)
  }

  return (
    <section className="predict-output-card">
      <div className="predict-header">
        <span className="predict-badge">{badge}</span>
        <h3 className="predict-prompt">{prompt}</h3>
      </div>
      {code && (
        <div className="predict-code-wrap">
          <pre className="predict-code-block"><code>{Array.isArray(code) ? code.join('\n') : code}</code></pre>
        </div>
      )}
      <div className="predict-options-grid">
        {options.map((opt, idx) => {
          let btnClass = 'predict-option-btn'
          if (revealed) {
            if (idx === answerIndex) btnClass += ' correct'
            else if (selected === idx) btnClass += ' wrong'
          }
          return (
            <button
              key={idx}
              type="button"
              className={btnClass}
              onClick={() => handleSelect(idx)}
              disabled={revealed && !staticMode}
            >
              <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
              <span className="opt-text"><RichText text={opt} /></span>
            </button>
          )
        })}
      </div>
      {!revealed && !staticMode && (
        <button type="button" className="predict-reveal-btn" onClick={() => setRevealed(true)}>
          Skip prediction and reveal wire result ▽
        </button>
      )}
      {(revealed || staticMode) && (
        <div className="predict-reveal-pane">
          <div className="predict-reveal-header">
            <span className="predict-reveal-tag">CONFIRMED WIRE RESULT</span>
            <h4>{revealTitle}</h4>
          </div>
          <p className="predict-explanation"><RichText text={explanation} /></p>
        </div>
      )}
    </section>
  )
}

function MiniApiSandbox({ title = 'Build & Test Your Own 5-Line In-Memory API', staticMode = false }) {
  const [books, setBooks] = useState([
    { id: 1, title: 'Clean Architecture', author: 'Robert Martin' },
    { id: 2, title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann' }
  ])
  const [activeMethod, setActiveMethod] = useState('GET')
  const [lastAction, setLastAction] = useState('Server started. Initialized with 2 books in memory.')
  const [status, setStatus] = useState('200 OK')

  const handleGet = () => {
    setActiveMethod('GET')
    setStatus('200 OK')
    setLastAction(`GET /books returned ${books.length} records from memory.`)
  }

  const handlePost = () => {
    setActiveMethod('POST')
    const nextId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1
    const newBook = { id: nextId, title: 'The Pragmatic Programmer', author: 'David Thomas' }
    setBooks(prev => [...prev, newBook])
    setStatus('201 Created')
    setLastAction(`POST /books added "${newBook.title}" (ID: ${nextId}) to the server memory array!`)
  }

  const handlePut = () => {
    setActiveMethod('PUT')
    if (books.length === 0) {
      setStatus('404 Not Found')
      setLastAction('PUT /books/1 failed: no records exist in server memory to replace.')
      return
    }
    setBooks(prev => prev.map((b, i) => i === 0 ? { ...b, title: 'Clean Code: Refactored Edition' } : b))
    setStatus('200 OK')
    setLastAction('PUT /books/1 completely replaced record ID 1 with new payload attributes.')
  }

  const handleDelete = () => {
    setActiveMethod('DELETE')
    if (books.length === 0) {
      setStatus('404 Not Found')
      setLastAction('DELETE /books/1 failed: array is already empty in server memory.')
      return
    }
    const removed = books[books.length - 1]
    setBooks(prev => prev.slice(0, prev.length - 1))
    setStatus('200 OK')
    setLastAction(`DELETE /books/${removed.id} removed "${removed.title}" from memory.`)
  }

  return (
    <section className="mini-api-card">
      <div className="mini-api-head">
        <span className="mini-api-badge">INTERACTIVE 5-LINE API SERVER</span>
        <h3 className="mini-api-title">{title}</h3>
        <p className="mini-api-intro">
          This is what an API actually is under the hood: a simple server holding data in memory, answering HTTP verbs. Click each method button below to send requests and watch the server memory array update live!
        </p>
      </div>

      <div className="mini-api-controls">
        <button type="button" className={`api-btn get ${activeMethod === 'GET' ? 'active' : ''}`} onClick={handleGet}>
          GET /books (Read)
        </button>
        <button type="button" className={`api-btn post ${activeMethod === 'POST' ? 'active' : ''}`} onClick={handlePost}>
          POST /books (Create)
        </button>
        <button type="button" className={`api-btn put ${activeMethod === 'PUT' ? 'active' : ''}`} onClick={handlePut}>
          PUT /books/1 (Replace)
        </button>
        <button type="button" className={`api-btn delete ${activeMethod === 'DELETE' ? 'active' : ''}`} onClick={handleDelete}>
          DELETE /books/last (Remove)
        </button>
      </div>

      <div className="mini-api-display-grid">
        <div className="mini-api-memory-pane">
          <div className="pane-title-bar">
            <span>Server Memory Array (RAM)</span>
            <span className="count-pill">{books.length} items</span>
          </div>
          <pre className="memory-json"><code>{JSON.stringify(books, null, 2)}</code></pre>
        </div>

        <div className="mini-api-wire-pane">
          <div className="pane-title-bar">
            <span>Wire Response</span>
            <span className={`status-pill ${status.startsWith('2') ? 'ok' : 'err'}`}>{status}</span>
          </div>
          <div className="wire-log-box">
            <p className="wire-log-msg">{lastAction}</p>
            <p className="wire-log-hint">
              Notice how the server returned an HTTP status code alongside the updated memory state. That is the entire foundation of RESTful APIs!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Block({ block: b, staticMode = false }) {
  switch (b.type) {
    case 'heading': return <Heading>{b.text}</Heading>
    case 'paragraph': return <p className="section-intro"><RichText text={b.text}/></p>
    case 'chunked-code': return <ChunkedCode {...b} />
    case 'predict-output': return <PredictOutput {...b} staticMode={staticMode} />
    case 'mini-api': return <MiniApiSandbox {...b} staticMode={staticMode} />
    case 'image':
      return (
        <figure className="modern-ui-box lesson-figure">
          {(b.title || b.badge) && (
            <div className="ui-box-header">
              {b.badge && <span className="ui-box-badge">{b.badge}</span>}
              {b.title && <h3 className="ui-box-title">{b.title}</h3>}
            </div>
          )}
          <div className="ui-box-body">
            {(b.text || b.paragraphs?.length > 0) && (
              <div className="ui-box-intro">
                {b.text && <p className="figure-intro-text"><RichText text={b.text} /></p>}
                {b.paragraphs?.map((p, idx) => (
                  <p key={idx} className="figure-intro-text"><RichText text={p} /></p>
                ))}
              </div>
            )}
            <div className="ui-box-media-wrap">
              <div className="figure-media">
                <img src={b.src} alt={b.alt}/>
              </div>
              {b.caption && (
                <p className="figure-summary">{b.caption}</p>
              )}
            </div>
            {b.points?.length > 0 && (
              <div className="ui-box-breakdown">
                <span className="breakdown-title">Architectural Breakdown:</span>
                <ol className="figure-points">
                  {b.points.map((point, index) => (
                    <li key={point}>
                      <span>{index + 1}</span>
                      <p><RichText text={point} /></p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </figure>
      )
    case 'api-inspector': return <ApiInspector {...b} staticMode={staticMode}/>
    case 'mission-hud': return <MissionHud {...b} />
    case 'triage': return <WarRoomTriage {...b} staticMode={staticMode} />
    case 'battle-scar': return <BattleScar {...b} />
    case 'battle-plan': return <BattlePlan {...b} />
    case 'scenario-grid': return <ScenarioGrid {...b} />
    case 'structured-breakdown': return <StructuredBreakdown {...b} />
    case 'mission':
      return (
        <section className="mission modern-mission-box">
          <div className="mission-header-bar">
            <span className="eyebrow">{b.badge || 'OUR MISSION'}</span>
            <h2>{b.title}</h2>
          </div>
          <div className="mission-content-wrap">
            {b.image && (
              <div className="mission-inner-media-box">
                <div className="mission-image-frame">
                  <img src={b.image.src || b.image} alt={b.image.alt || b.title} />
                </div>
                {b.image.caption && (
                  <p className="mission-image-caption">{b.image.caption}</p>
                )}
                {b.image.points?.length > 0 && (
                  <ul className="mission-image-points">
                    {b.image.points.map((pt, idx) => (
                      <li key={idx}><RichText text={pt} /></li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            <p className="mission-description"><RichText text={b.text} /></p>
            {(b.weKnow?.length > 0 || b.weNeed?.length > 0) && (
              <div className="mission-grid">
                {b.weKnow?.length > 0 && (
                  <div>
                    <strong>What we know</strong>
                    <ul>{b.weKnow.map(x => <li key={x}><RichText text={x} /></li>)}</ul>
                  </div>
                )}
                {b.weNeed?.length > 0 && (
                  <div>
                    <strong>What we need</strong>
                    <ul>{b.weNeed.map(x => <li key={x}><RichText text={x} /></li>)}</ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )
    case 'mission-tracker':
      return (
        <section className="mission-tracker modern-mission-box">
          <div className="mission-header-bar">
            <span className="eyebrow">{b.badge || 'ACTIVE MISSION PROGRESS'}</span>
            <h2>{b.title}</h2>
          </div>
          <div className="mission-content-wrap">
            {b.image && (
              <div className="mission-inner-media-box">
                <div className="mission-image-frame">
                  <img src={b.image.src || b.image} alt={b.image.alt || b.title} />
                </div>
                {b.image.caption && (
                  <p className="mission-image-caption">{b.image.caption}</p>
                )}
                {b.image.points?.length > 0 && (
                  <ul className="mission-image-points">
                    {b.image.points.map((pt, idx) => (
                      <li key={idx}><RichText text={pt} /></li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            <p className="mission-description"><RichText text={b.text} /></p>
          </div>
        </section>
      )
    case 'mission-accomplished': return <section className="mission-accomplished"><span className="eyebrow">★ MISSION ACCOMPLISHED</span><h3>{b.title}</h3><p>{b.text}</p></section>
    case 'victory-milestone':
      return (
        <section className="victory-milestone-card">
          <div className="victory-milestone-header">
            <span className="victory-badge">{b.badge || '⚡ ARCHITECTURAL TRIUMPH UNLOCKED'}</span>
            <span className="victory-rank">{b.rank || 'LEAD API ARCHITECT LEVEL'}</span>
          </div>
          <h2 className="victory-title">{b.title}</h2>
          <p className="victory-summary"><RichText text={b.summary} /></p>
          <div className="victory-grid">
            <div className="victory-col tactical">
              <span className="victory-col-label">⚔️ Tactical Superpowers Mastered</span>
              <ul>
                {b.powers.map(x => (
                  <li key={x}><RichText text={x} /></li>
                ))}
              </ul>
            </div>
            <div className="victory-col prevented">
              <span className="victory-col-label">🛡️ Enterprise Disasters Prevented</span>
              <ul>
                {b.disastersPrevented.map(x => (
                  <li key={x}><RichText text={x} /></li>
                ))}
              </ul>
            </div>
          </div>
          {b.warRoomTakeaway && (
            <div className="victory-war-room-note">
              <strong>War Room Takeaway:</strong> <RichText text={b.warRoomTakeaway} />
            </div>
          )}
        </section>
      )
    case 'think': return <section className="journey-card think"><span>PAUSE & THINK</span><h3>{b.prompt}</h3><Reveal label="Reveal our thinking" staticMode={staticMode}><p>{b.answer}</p></Reveal></section>
    case 'guess': return <section className="journey-card guess"><span>MAKE A GUESS</span><h3>{b.prompt}</h3>{b.code && <pre>{b.code}</pre>}<ol>{b.options.map(x=><li key={x}>{x}</li>)}</ol><Reveal label="Show the answer" staticMode={staticMode}><p><strong>Answer: {b.options[b.answerIndex]}.</strong> {b.explain}</p></Reveal></section>
    case 'bug': return <section className="journey-card bug"><span>BUG HUNT</span><h3>{b.prompt}</h3><CodeBlock filename={b.filename || 'snippet'} lines={b.lines}/><Reveal label="Find the bug" staticMode={staticMode}><p><strong>Line {b.bugLine}.</strong> {b.explain}</p></Reveal></section>
    case 'callout': return <section className={`callout ${b.variant || 'note'}`}>{b.title && <h3>{b.title}</h3>}{b.paragraphs.map(p=><p key={p}><RichText text={p}/></p>)}</section>
    case 'flow': return <><Heading>Input → Process → Output</Heading><FlowDiagram inputLabel={b.input[0]} inputDetail={b.input[1]} processLabel={b.process[0]} processDetail={b.process[1]} outputLabel={b.output[0]} outputDetail={b.output[1]}/></>
    case 'blueprint': return <ProgramCard {...b}/>
    case 'code': return <CodeBlock lines={b.lines} filename={b.filename}/>
    case 'runviz': return <RunVisualizer staticMode={staticMode} file={b.filename} codeLines={b.codeLines} steps={b.steps}/>
    case 'terminal': return <TerminalWindow staticMode={staticMode} command={b.command} lines={b.lines} title="Terminal"/>
    case 'pipeline': return <PipelineVisualizer tracks={b.tracks} staticMode={staticMode}/>
    case 'steps': return <ol className="steps-list">{b.items.map(x=><li key={x}><RichText text={x}/></li>)}</ol>
    case 'mistakes': return <div className="mistakes">{b.items.map(([bad,why])=><div className="mistake" key={bad}><code className="bad">✗ {bad}</code><p>{why}</p></div>)}</div>
    case 'quiz': return <div className="quiz">{b.items.map(([q,a])=><details className="quiz-item" key={q} open={staticMode}><summary>{q}</summary><p><strong>Answer:</strong> {a}</p></details>)}</div>
    case 'takeaways': return <div className="takeaways">{b.items.map(x=><p className="takeaway" key={x}>◆ {x}</p>)}</div>
    case 'aha': return <section className="aha"><span>THE AHA MOMENT</span><p>{b.text}</p></section>
    case 'cliffhanger': return <section className="cliffhanger"><span>NEXT DISCOVERY</span><h3>{b.title}</h3><p>{b.text}</p></section>
    case 'resources': return <div className="resources">{b.items.map(([label,url])=><a href={url} key={url} target="_blank" rel="noreferrer">↗ {label}<small>{url}</small></a>)}</div>
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

