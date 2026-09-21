import { useState } from 'react'

export default function CodeBlock({ lines, highlight, caption = 'program.py', filename }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const text = lines.join('\n')
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }).catch(() => {
        // Fallback if clipboard API fails
      })
    }
  }

  return (
    <figure className="code-block">
      <div className="code-titlebar">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="code-filename">{filename || caption}</span>
        <button
          type="button"
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          title="Copy code to clipboard"
          aria-label="Copy code to clipboard"
        >
          {copied ? '✓ Copied' : '📋 Copy'}
        </button>
      </div>
      <pre>
        <code>
          {lines.map((ln, i) => (
            <div key={i} className={'code-line' + (highlight === i + 1 ? ' hl' : '')}>
              <span className="ln">{i + 1}</span>
              <span className="lc">{ln || ' '}</span>
            </div>
          ))}
        </code>
      </pre>
    </figure>
  )
}

