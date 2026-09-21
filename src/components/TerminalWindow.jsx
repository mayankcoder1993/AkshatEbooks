import { useState } from 'react'

export default function TerminalWindow({
  title = 'Terminal',
  command = 'python3 hello.py',
  lines = [],
  staticMode = false,
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const textToCopy = command || lines.join('\n')
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }).catch(() => {})
    }
  }

  return (
    <div className="terminal">
      <div className="term-titlebar">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="term-title">{title}</span>
        <button
          type="button"
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          title="Copy command to clipboard"
          aria-label="Copy command to clipboard"
        >
          {copied ? '✓ Copied' : '📋 Copy'}
        </button>
      </div>
      <div className="term-body">
        <div className="term-line prompt">
          <span className="ps">➜</span>
          <span className="path"> ~/akshat-ebooks </span>
          <span className="cmd">{command}</span>
        </div>
        {lines.map((l, i) => (
          <div
            key={i}
            className={'term-line out' + (staticMode ? '' : ' anim')}
            style={staticMode ? undefined : { animationDelay: `${0.4 + i * 0.55}s` }}
          >
            {l || '\u00A0'}
          </div>
        ))}
        {!staticMode && <div className="term-cursor">▍</div>}
      </div>
    </div>
  )
}

