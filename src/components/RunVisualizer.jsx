import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CodeBlock from './CodeBlock.jsx'

function MemoryPanel({ vars }) {
  return (
    <div className="memory-panel">
      <h5>🧠 Memory (variables)</h5>
      {vars.length === 0 ? (
        <p className="memory-empty">Nothing stored yet</p>
      ) : (
        <div className="memory-chips">
          <AnimatePresence mode="popLayout">
            {vars.map(v => (
              <motion.div
                key={v.name + '=' + v.value}
                className="memory-chip"
                layout
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ type: 'spring', stiffness: 380, damping: 24 }}
              >
                <span className="var-name">{v.name}</span>
                <span className="var-eq">=</span>
                <span className="var-value">{v.value}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

function MiniConsole({ lines }) {
  return (
    <div className="mini-console">
      <h5>🖥️ Console output</h5>
      <div className="mini-console-body">
        {lines.length === 0 ? (
          <span className="console-empty">(nothing yet)</span>
        ) : (
          lines.map((l, i) => (
            <motion.div
              key={i + l}
              className="console-line"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {l || '\u00A0'}
            </motion.div>
          ))
        )}
        <span className="cursor-blink">▍</span>
      </div>
    </div>
  )
}

/** Full step-by-step walkthrough of a program run (interactive). */
function InteractiveRun({ steps, codeLines, file }) {
  const [i, setI] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return
    if (i >= steps.length - 1) {
      setPlaying(false)
      return
    }
    const t = setTimeout(() => setI(v => Math.min(v + 1, steps.length - 1)), 2600)
    return () => clearTimeout(t)
  }, [playing, i, steps.length])

  const s = steps[i]

  return (
    <div className="runviz">
      <div className="rv-top">
        <CodeBlock lines={codeLines} highlight={s.line} filename={file} />
        <div className="rv-side">
          <MemoryPanel vars={s.vars || []} />
          <MiniConsole lines={s.console || []} />
        </div>
      </div>

      <div className="rv-step">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            className="rv-explain"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="rv-stepnum">
              Step {i + 1} of {steps.length}
              <span className="rv-progress">
                <span style={{ width: `${((i + 1) / steps.length) * 100}%` }} />
              </span>
            </div>
            <strong>{s.title}</strong>
            <p>{s.explain}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="rv-controls">
        <button className="btn" onClick={() => setI(v => Math.max(0, v - 1))} disabled={i === 0}>
          ← Prev
        </button>
        <button className="btn primary" onClick={() => setPlaying(p => !p)}>
          {playing ? '⏸ Pause' : '▶ Auto-play'}
        </button>
        <button
          className="btn"
          onClick={() => setI(v => Math.min(steps.length - 1, v + 1))}
          disabled={i === steps.length - 1}
        >
          Next →
        </button>
        <button
          className="btn ghost"
          onClick={() => {
            setPlaying(false)
            setI(0)
          }}
        >
          ↺ Restart
        </button>
        <input
          type="range"
          min="0"
          max={steps.length - 1}
          value={i}
          onChange={e => setI(Number(e.target.value))}
          aria-label="Step"
        />
      </div>
    </div>
  )
}

/** Static rendering of every step — used for print / Word export. */
function StaticRun({ steps, codeLines, file }) {
  const last = steps[steps.length - 1]
  return (
    <div className="rv-static">
      <CodeBlock lines={codeLines} filename={file} />
      <ol className="rv-timeline">
        {steps.map((s, idx) => (
          <li key={idx}>
            <div className="rv-dot">{idx + 1}</div>
            <div>
              <strong>
                {s.title}
                {s.line ? <code className="rv-line-ref"> (line {s.line})</code> : null}
              </strong>
              <p>{s.explain}</p>
              {s.vars?.length > 0 && (
                <p className="rv-vars">
                  Memory: {s.vars.map(v => `${v.name} = ${v.value}`).join(', ')}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
      <div className="rv-static-console">
        <h5>Final console output</h5>
        <pre>{(last.console || []).join('\n') || '(empty)'}</pre>
      </div>
    </div>
  )
}

export default function RunVisualizer(props) {
  return props.staticMode ? <StaticRun {...props} /> : <InteractiveRun {...props} />
}
