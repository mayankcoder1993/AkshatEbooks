export default function CodeBlock({ lines, highlight, caption = 'program.py', filename }) {
  return (
    <figure className="code-block">
      <div className="code-titlebar">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="code-filename">{filename || caption}</span>
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
