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

function ChapterOpener({
  missionBadge = 'MISSION BRIEFING',
  missionTitle,
  missionCrisis,
  missionContext,
  missionObjective,
  targetSystems,
  missionImage,
  phaseRoadmap,
  achieve,
  how,
  carry,
  staticMode
}) {
  return (
    <section className="mission-chapter-launchpad-card">
      <div className="launchpad-banner">
        <div className="launchpad-badge-row">
          <span className="launchpad-mission-badge">{missionBadge}</span>
          {missionTitle && <span className="launchpad-mission-title">{missionTitle}</span>}
        </div>
        {missionCrisis && <h2 className="launchpad-crisis-heading">{missionCrisis}</h2>}
      </div>

      {missionImage && (
        <div className="launchpad-image-wrap">
          <div className="launchpad-image-frame">
            <img
              src={missionImage.src || missionImage.file || missionImage}
              alt={missionImage.alt || missionCrisis || 'Mission Scenario'}
            />
          </div>
          {missionImage.caption && (
            <p className="launchpad-image-caption">{missionImage.caption}</p>
          )}
        </div>
      )}

      {(missionContext || missionObjective || targetSystems) && (
        <div className="launchpad-mission-detail-box">
          <div className="launchpad-detail-header">
            <span className="launchpad-detail-kicker">THE ENTERPRISE MISSION BRIEFING</span>
            {targetSystems && <span className="launchpad-systems-tag">{targetSystems}</span>}
          </div>
          {missionContext && <p className="launchpad-context-text"><RichText text={missionContext} /></p>}
          {missionObjective && (
            <div className="launchpad-objective-bar">
              <span className="launchpad-objective-tag">OPERATIONAL TARGET</span>
              <p className="launchpad-objective-text"><RichText text={missionObjective} /></p>
            </div>
          )}
        </div>
      )}

      {phaseRoadmap && phaseRoadmap.length > 0 && (
        <div className="launchpad-phases-box">
          <div className="launchpad-phases-header">
            <span className="launchpad-phases-kicker">MISSION TACTICAL ROADMAP</span>
            <span className="launchpad-phases-note">Understanding Where This Chapter Fits</span>
          </div>
          <div className="launchpad-phases-grid">
            {phaseRoadmap.map((p, idx) => (
              <div
                key={idx}
                className={`launchpad-phase-card ${p.status === 'active' ? 'active-phase' : p.status === 'completed' ? 'completed-phase' : 'upcoming-phase'}`}
              >
                <div className="phase-card-top">
                  <span className="phase-badge">{p.phase}</span>
                  <span className="phase-status-pill">
                    {p.status === 'active' ? 'Current Chapter' : p.status === 'completed' ? 'Completed' : 'Upcoming'}
                  </span>
                </div>
                <h4 className="phase-title">{p.title}</h4>
                <p className="phase-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="launchpad-chapter-plan-box">
        <div className="launchpad-plan-header">
          <span className="launchpad-plan-kicker">WHAT WE WILL DO IN THIS CHAPTER</span>
        </div>
        <div className="opener-grid">
          <div className="opener-cell achieve">
            <span className="opener-kicker">WE WILL ACHIEVE</span>
            <p className="opener-text"><RichText text={achieve} /></p>
          </div>
          <div className="opener-cell how">
            <span className="opener-kicker">HOW WE WILL DO IT</span>
            <p className="opener-text"><RichText text={how} /></p>
          </div>
          <div className="opener-cell carry">
            <span className="opener-kicker">WHAT YOU WILL CARRY FORWARD</span>
            <p className="opener-text"><RichText text={carry} /></p>
          </div>
        </div>
      </div>

      <div className="launchpad-transition-banner">
        <span className="transition-dot">•</span>
        <span className="transition-label">MISSION BRIEFING COMPLETE · CHAPTER INVESTIGATION BEGINS BELOW</span>
        <span className="transition-dot">•</span>
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

  if (staticMode) {
    return (
      <section className="predict-output-card static-mode">
        <div className="predict-head">
          <span className="predict-badge">{badge}</span>
          <h3 className="predict-prompt">{prompt}</h3>
        </div>
        {code && (
          <div className="predict-target-code">
            <pre className="code-box"><code>{Array.isArray(code) ? code.join('\n') : code}</code></pre>
          </div>
        )}
        <div className="predict-print-options">
          {options.map((opt, idx) => (
            <div key={idx} className="print-opt-row">
              <span className="print-opt-letter">{String.fromCharCode(65 + idx)}.</span>
              <span className="print-opt-text"><RichText text={opt} /></span>
            </div>
          ))}
        </div>
        <div className="print-write-box">
          <span className="print-write-label">✏️ YOUR PREDICTED OUTCOME (Record your prediction before turning to the verified result):</span>
          <div className="print-prediction-fields">
            <div className="print-field-row"><span className="field-lbl">Predicted Status Code:</span><span className="field-line" /></div>
            <div className="print-field-row"><span className="field-lbl">Predicted Response Body:</span><span className="field-line" /></div>
            <div className="print-field-row"><span className="field-lbl">Predicted Server State:</span><span className="field-line" /></div>
          </div>
        </div>
        <div className="print-divider" />
        <div className="predict-reveal-pane static-reveal">
          <div className="predict-reveal-header">
            <span className="predict-reveal-tag">CONFIRMED WIRE RESULT</span>
            <h4>{revealTitle}</h4>
          </div>
          <p className="predict-correct-callout">
            <strong>Confirmed Answer: Option {String.fromCharCode(65 + answerIndex)}</strong>
          </p>
          <p className="predict-explanation"><RichText text={explanation} /></p>
        </div>
      </section>
    )
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
  const [inputTitle, setInputTitle] = useState('The Pragmatic Programmer')
  const [inputAuthor, setInputAuthor] = useState('David Thomas')
  const [targetId, setTargetId] = useState(1)
  const [activeMethod, setActiveMethod] = useState('GET')
  const [lastAction, setLastAction] = useState('Server started. Initialized with 2 books in memory.')
  const [status, setStatus] = useState('200 OK')
  const [showCode, setShowCode] = useState(false)

  const serverCode = `// Minimal 5-line Express API Server (server.js)
const express = require('express');
const app = express();
app.use(express.json());
let books = [{ id: 1, title: "Clean Architecture", author: "Robert Martin" }];

app.get('/books', (req, res) => res.json(books));
app.post('/books', (req, res) => { const b = { id: books.length + 1, ...req.body }; books.push(b); res.status(201).json(b); });
app.put('/books/:id', (req, res) => { const idx = books.findIndex(b => b.id == req.params.id); books[idx] = { id: Number(req.params.id), ...req.body }; res.json(books[idx]); });
app.patch('/books/:id', (req, res) => { const b = books.find(b => b.id == req.params.id); Object.assign(b, req.body); res.json(b); });
app.delete('/books/:id', (req, res) => { books = books.filter(b => b.id != req.params.id); res.json({ msg: "removed" }); });
app.listen(3000);`

  if (staticMode) {
    return (
      <section className="mini-api-card static-mode">
        <div className="mini-api-head">
          <span className="mini-api-badge">REFERENCE ARCHITECTURE · 5-LINE IN-MEMORY API</span>
          <h3 className="mini-api-title">{title}</h3>
          <p className="mini-api-intro">
            A minimal Node.js and Express web service running in memory. The table below summarizes each method, path, and state transition:
          </p>
        </div>
        <div className="static-api-table-wrapper">
          <table className="static-api-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Endpoint</th>
                <th>Operation</th>
                <th>Status</th>
                <th>State Transition in RAM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="method-badge get">GET</span></td>
                <td><code>/books</code></td>
                <td>Read all records</td>
                <td>200 OK</td>
                <td>Unchanged (Safe and Idempotent)</td>
              </tr>
              <tr>
                <td><span className="method-badge post">POST</span></td>
                <td><code>/books</code></td>
                <td>Create new record</td>
                <td>201 Created</td>
                <td>Appends book object to array (Non idempotent)</td>
              </tr>
              <tr>
                <td><span className="method-badge put">PUT</span></td>
                <td><code>/books/:id</code></td>
                <td>Full record replacement</td>
                <td>200 OK</td>
                <td>Overwrites target record (Idempotent)</td>
              </tr>
              <tr>
                <td><span className="method-badge patch">PATCH</span></td>
                <td><code>/books/:id</code></td>
                <td>Partial delta update</td>
                <td>200 OK</td>
                <td>Modifies specified fields, preserves others</td>
              </tr>
              <tr>
                <td><span className="method-badge delete">DELETE</span></td>
                <td><code>/books/:id</code></td>
                <td>Remove record</td>
                <td>200 OK</td>
                <td>Purges target record from array (Idempotent)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    )
  }

  const handleGet = () => {
    setActiveMethod('GET')
    setStatus('200 OK')
    setLastAction(`GET /books returned ${books.length} records from memory.`)
  }

  const handlePost = () => {
    setActiveMethod('POST')
    const nextId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1
    const newBook = { id: nextId, title: inputTitle.trim() || 'Untitled Book', author: inputAuthor.trim() || 'Anonymous' }
    setBooks(prev => [...prev, newBook])
    setStatus('201 Created')
    setLastAction(`POST /books added "${newBook.title}" (ID: ${nextId}) to server memory!`)
  }

  const handlePut = () => {
    setActiveMethod('PUT')
    const target = books.find(b => b.id === Number(targetId))
    if (!target) {
      setStatus('404 Not Found')
      setLastAction(`PUT /books/${targetId} failed: ID ${targetId} does not exist in memory.`)
      return
    }
    setBooks(prev => prev.map(b => b.id === Number(targetId) ? { id: Number(targetId), title: inputTitle.trim() || 'Replaced Title', author: inputAuthor.trim() || 'Replaced Author' } : b))
    setStatus('200 OK')
    setLastAction(`PUT /books/${targetId} completely replaced record ID ${targetId} with new payload.`)
  }

  const handlePatch = () => {
    setActiveMethod('PATCH')
    const target = books.find(b => b.id === Number(targetId))
    if (!target) {
      setStatus('404 Not Found')
      setLastAction(`PATCH /books/${targetId} failed: ID ${targetId} does not exist in memory.`)
      return
    }
    setBooks(prev => prev.map(b => b.id === Number(targetId) ? { ...b, title: inputTitle.trim() || b.title } : b))
    setStatus('200 OK')
    setLastAction(`PATCH /books/${targetId} partially modified only the title of ID ${targetId}, leaving author unchanged.`)
  }

  const handleDelete = () => {
    setActiveMethod('DELETE')
    const target = books.find(b => b.id === Number(targetId))
    if (!target) {
      setStatus('404 Not Found')
      setLastAction(`DELETE /books/${targetId} failed: ID ${targetId} does not exist in memory.`)
      return
    }
    setBooks(prev => prev.filter(b => b.id !== Number(targetId)))
    setStatus('200 OK')
    setLastAction(`DELETE /books/${targetId} permanently removed record from memory.`)
  }

  return (
    <section className="mini-api-card">
      <div className="mini-api-head">
        <span className="mini-api-badge">INTERACTIVE 5-LINE API SERVER</span>
        <h3 className="mini-api-title">{title}</h3>
        <p className="mini-api-intro">
          This is what an API actually is under the hood: a simple server holding data in memory, answering HTTP verbs. Type custom fields below and click each method to see the server memory array and wire response update live!
        </p>
      </div>

      <div className="mini-api-input-bar">
        <div className="input-group">
          <label>Book Title:</label>
          <input
            type="text"
            value={inputTitle}
            onChange={e => setInputTitle(e.target.value)}
            placeholder="Type book title"
          />
        </div>
        <div className="input-group">
          <label>Author:</label>
          <input
            type="text"
            value={inputAuthor}
            onChange={e => setInputAuthor(e.target.value)}
            placeholder="Type author name"
          />
        </div>
        <div className="input-group small">
          <label>Target ID:</label>
          <input
            type="number"
            min="1"
            value={targetId}
            onChange={e => setTargetId(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="code-toggle-btn"
          onClick={() => setShowCode(v => !v)}
        >
          {showCode ? 'Hide Server Code ✕' : 'View Server Code (server.js) ⚙'}
        </button>
      </div>

      {showCode && (
        <div className="mini-api-code-view">
          <div className="code-view-head">
            <span>server.js (Node.js & Express)</span>
            <small>Actual backend code listening on port 3000</small>
          </div>
          <pre className="code-view-body"><code>{serverCode}</code></pre>
        </div>
      )}

      <div className="mini-api-controls">
        <button type="button" className={`api-btn get ${activeMethod === 'GET' ? 'active' : ''}`} onClick={handleGet}>
          GET /books (Read All)
        </button>
        <button type="button" className={`api-btn post ${activeMethod === 'POST' ? 'active' : ''}`} onClick={handlePost}>
          POST /books (Create New)
        </button>
        <button type="button" className={`api-btn put ${activeMethod === 'PUT' ? 'active' : ''}`} onClick={handlePut}>
          PUT /books/{targetId} (Full Replace)
        </button>
        <button type="button" className={`api-btn patch ${activeMethod === 'PATCH' ? 'active' : ''}`} onClick={handlePatch}>
          PATCH /books/{targetId} (Partial Modify)
        </button>
        <button type="button" className={`api-btn delete ${activeMethod === 'DELETE' ? 'active' : ''}`} onClick={handleDelete}>
          DELETE /books/{targetId} (Remove)
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

function LibraryApiWorkbench({ staticMode = false }) {
  const [catalog, setCatalog] = useState([
    { ID: 'LIB101', name: 'Learning HTTP Wire Basics', isbn: 'LIB', aisle: '101', author: 'Dr. Sarah Chen' }
  ])
  const [addName, setAddName] = useState('Zero to Agentic API Testing')
  const [addAuthor, setAddAuthor] = useState('Alex Mercer')
  const [addIsbn, setAddIsbn] = useState('9781')
  const [addAisle, setAddAisle] = useState('227')

  const [addResponse, setAddResponse] = useState(null)
  const [getQueryId, setGetQueryId] = useState('')
  const [getResponse, setGetResponse] = useState(null)
  const [deleteId, setDeleteId] = useState('')
  const [deleteResponse, setDeleteResponse] = useState(null)

  if (staticMode) {
    return (
      <section className="library-workbench-card static-mode">
        <div className="workbench-head">
          <span className="workbench-badge">MANUAL WORKFLOW REFERENCE · FEEL THE COPY PASTE FRICTION</span>
          <h3 className="workbench-title">Manual College Library CRUD Lifecycle</h3>
          <p className="workbench-desc">
            In manual testing, a tester must manually copy the generated ID from Action 1 and paste it into Action 2 and Action 3:
          </p>
        </div>
        <div className="static-lifecycle-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', padding: '1.25rem' }}>
          <div className="static-step-box" style={{ background: 'var(--panel-soft)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <strong>Action 1: AddBook (POST /v1/books)</strong>
            <p style={{ margin: '0.4rem 0', fontSize: '0.82rem' }}>Payload: <code>{JSON.stringify({ name: "Zero to Agentic API Testing", isbn: "9781", aisle: "227", author: "Alex Mercer" })}</code></p>
            <p style={{ margin: '0.4rem 0', fontSize: '0.82rem' }}>Response: <code>200 OK {JSON.stringify({ Msg: "successfully added", ID: "9781227" })}</code></p>
            <small style={{ color: 'var(--accent)', fontWeight: 700 }}>⚠️ Tester must copy "9781227" to clipboard.</small>
          </div>
          <div className="static-step-box" style={{ background: 'var(--panel-soft)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <strong>Action 2: GetBook (GET /v1/books?id=9781227)</strong>
            <p style={{ margin: '0.4rem 0', fontSize: '0.82rem' }}>Query: <code>?id=9781227</code> (pasted from Action 1)</p>
            <p style={{ margin: '0.4rem 0', fontSize: '0.82rem' }}>Response: <code>200 OK [{JSON.stringify({ book_name: "Zero to Agentic API Testing", isbn: "9781", aisle: "227" })}]</code></p>
          </div>
          <div className="static-step-box" style={{ background: 'var(--panel-soft)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <strong>Action 3: DeleteBook (POST /v1/books/delete)</strong>
            <p style={{ margin: '0.4rem 0', fontSize: '0.82rem' }}>Payload: <code>{JSON.stringify({ ID: "9781227" })}</code> (pasted from Action 1)</p>
            <p style={{ margin: '0.4rem 0', fontSize: '0.82rem' }}>Response: <code>200 OK {JSON.stringify({ msg: "book is successfully deleted" })}</code></p>
          </div>
        </div>
      </section>
    )
  }

  const handleAddBook = () => {
    const compositeId = addIsbn + addAisle
    const existing = catalog.find(b => b.ID === compositeId)
    if (existing) {
      setAddResponse({ status: '200 OK', body: { msg: 'Book already exists' }, isError: true })
      return
    }
    const newBook = { ID: compositeId, name: addName, isbn: addIsbn, aisle: addAisle, author: addAuthor }
    setCatalog(prev => [...prev, newBook])
    setAddResponse({ status: '200 OK', body: { Msg: 'successfully added', ID: compositeId }, isError: false })
  }

  const handleGetBook = () => {
    if (!getQueryId.trim()) {
      setGetResponse({ status: '404 Not Found', body: { msg: 'Please provide an id parameter' }, isError: true })
      return
    }
    const match = catalog.find(b => b.ID === getQueryId.trim())
    if (!match) {
      setGetResponse({ status: '404 Not Found', body: { msg: 'The book by requested id is not found!' }, isError: true })
    } else {
      setGetResponse({ status: '200 OK', body: [{ book_name: match.name, isbn: match.isbn, aisle: match.aisle }], isError: false })
    }
  }

  const handleDeleteBook = () => {
    if (!deleteId.trim()) {
      setDeleteResponse({ status: '404 Not Found', body: { msg: 'Please provide an ID to delete' }, isError: true })
      return
    }
    const target = catalog.find(b => b.ID === deleteId.trim())
    if (!target) {
      setDeleteResponse({ status: '404 Not Found', body: { msg: 'book is not found' }, isError: true })
    } else {
      setCatalog(prev => prev.filter(b => b.ID !== deleteId.trim()))
      setDeleteResponse({ status: '200 OK', body: { msg: 'book is successfully deleted' }, isError: false })
    }
  }

  return (
    <section className="library-workbench-card">
      <div className="workbench-head">
        <span className="workbench-badge">INTERACTIVE LAB · FEEL THE COPY PASTE FRICTION</span>
        <h3 className="workbench-title">Manual College Library CRUD Simulator</h3>
        <p className="workbench-desc">
          Execute the three operations by hand. Notice how you must copy the generated ID from Step 1 and paste it into Step 2 and Step 3: this is the exact manual pain that motivates automated request chaining!
        </p>
      </div>

      <div className="workbench-steps-grid">
        <div className="wb-step-card">
          <div className="wb-step-head">
            <span className="step-num">ACTION 1</span>
            <strong>POST /v1/books (AddBook)</strong>
          </div>
          <div className="wb-form-fields">
            <div className="wb-input-item">
              <label>Title:</label>
              <input type="text" value={addName} onChange={e => setAddName(e.target.value)} />
            </div>
            <div className="wb-input-item">
              <label>Author:</label>
              <input type="text" value={addAuthor} onChange={e => setAddAuthor(e.target.value)} />
            </div>
            <div className="wb-input-row">
              <div className="wb-input-item">
                <label>ISBN:</label>
                <input type="text" value={addIsbn} onChange={e => setAddIsbn(e.target.value)} />
              </div>
              <div className="wb-input-item">
                <label>Aisle:</label>
                <input type="text" value={addAisle} onChange={e => setAddAisle(e.target.value)} />
              </div>
            </div>
            <button type="button" className="api-btn post full-width" onClick={handleAddBook}>
              Send POST /v1/books 🚀
            </button>
          </div>
          {addResponse && (
            <div className={`wb-response-box ${addResponse.isError ? 'err' : 'ok'}`}>
              <div className="wb-resp-status">Status: {addResponse.status}</div>
              <pre><code>{JSON.stringify(addResponse.body, null, 2)}</code></pre>
              {addResponse.body.ID && (
                <button type="button" className="copy-id-btn" onClick={() => {
                  setGetQueryId(addResponse.body.ID);
                  setDeleteId(addResponse.body.ID);
                }}>
                  📋 Copy ID "{addResponse.body.ID}" for GetBook and DeleteBook
                </button>
              )}
            </div>
          )}
        </div>

        <div className="wb-step-card">
          <div className="wb-step-head">
            <span className="step-num">ACTION 2</span>
            <strong>GET /v1/books?id= (GetBook)</strong>
          </div>
          <div className="wb-form-fields">
            <div className="wb-input-item">
              <label>Paste Book ID Here:</label>
              <input
                type="text"
                placeholder="Paste generated ID (e.g. 9781227)"
                value={getQueryId}
                onChange={e => setGetQueryId(e.target.value)}
              />
            </div>
            <button type="button" className="api-btn get full-width" onClick={handleGetBook}>
              Send GET /v1/books?id={getQueryId || '...'} 🚀
            </button>
          </div>
          {getResponse && (
            <div className={`wb-response-box ${getResponse.isError ? 'err' : 'ok'}`}>
              <div className="wb-resp-status">Status: {getResponse.status}</div>
              <pre><code>{JSON.stringify(getResponse.body, null, 2)}</code></pre>
            </div>
          )}
        </div>

        <div className="wb-step-card">
          <div className="wb-step-head">
            <span className="step-num">ACTION 3</span>
            <strong>POST /v1/books/delete (DeleteBook)</strong>
          </div>
          <div className="wb-form-fields">
            <div className="wb-input-item">
              <label>Paste Book ID to Delete:</label>
              <input
                type="text"
                placeholder="Paste ID to delete (e.g. 9781227)"
                value={deleteId}
                onChange={e => setDeleteId(e.target.value)}
              />
            </div>
            <button type="button" className="api-btn delete full-width" onClick={handleDeleteBook}>
              Send POST /v1/books/delete 🚀
            </button>
          </div>
          {deleteResponse && (
            <div className={`wb-response-box ${deleteResponse.isError ? 'err' : 'ok'}`}>
              <div className="wb-resp-status">Status: {deleteResponse.status}</div>
              <pre><code>{JSON.stringify(deleteResponse.body, null, 2)}</code></pre>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function Block({ block: b, staticMode = false }) {
  switch (b.type) {
    case 'chapter-opener': return <ChapterOpener {...b} staticMode={staticMode} />
    case 'heading': return <Heading>{b.text}</Heading>
    case 'paragraph': return <p className="section-intro"><RichText text={b.text}/></p>
    case 'chunked-code': return <ChunkedCode {...b} />
    case 'predict-output': return <PredictOutput {...b} staticMode={staticMode} />
    case 'mini-api': return <MiniApiSandbox {...b} staticMode={staticMode} />
    case 'library-workbench': return <LibraryApiWorkbench staticMode={staticMode} />
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
                <img src={b.src || b.file} alt={b.alt}/>
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

