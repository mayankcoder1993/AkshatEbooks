export default function TerminalWindow({
  title = 'Terminal',
  command = 'python3 hello.py',
  lines = [],
  staticMode = false,
}) {
  return (
    <div className="terminal">
      <div className="term-titlebar">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="term-title">{title}</span>
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
