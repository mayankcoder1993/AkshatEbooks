import { useEffect, useState } from 'react'
import CodeBlock from './CodeBlock.jsx'

function MemoryPanel({ vars = [] }) {
  return <div className="memory-panel"><h5>Memory</h5>{vars.length === 0 ? <p className="memory-empty">Nothing stored yet</p> : <div className="memory-chips">{vars.map(v => <div key={`${v.name}-${v.value}`} className="memory-chip"><span className="var-name">{v.name}</span><span className="var-eq"> = </span><span className="var-value">{v.value}</span></div>)}</div>}</div>
}
function MiniConsole({ lines = [] }) {
  return <div className="mini-console"><h5>Console output</h5><div className="mini-console-body">{lines.length ? lines.map((line,i)=><div className="console-line" key={`${i}-${line}`}>{line || '\u00a0'}</div>) : <span className="console-empty">(nothing yet)</span>}<span className="cursor-blink">▍</span></div></div>
}
function InteractiveRun({ steps, codeLines, file }) {
  const [index,setIndex]=useState(0)
  const [playing,setPlaying]=useState(false)
  useEffect(()=>{ if(!playing)return; if(index>=steps.length-1){setPlaying(false);return} const timer=setTimeout(()=>setIndex(i=>Math.min(i+1,steps.length-1)),2200); return()=>clearTimeout(timer)},[playing,index,steps.length])
  const step=steps[index]
  return <div className="runviz"><div className="rv-top"><CodeBlock lines={codeLines} highlight={step.line} filename={file}/><div className="rv-side"><MemoryPanel vars={step.vars}/><MiniConsole lines={step.console}/></div></div><div className="rv-step"><div className="rv-explain step-enter" key={index}><div className="rv-stepnum">Step {index+1} of {steps.length}<span className="rv-progress"><span style={{width:`${(index+1)/steps.length*100}%`}}/></span></div><strong>{step.title}</strong><p>{step.explain}</p></div></div><div className="rv-controls"><button className="btn" disabled={index===0} onClick={()=>setIndex(i=>Math.max(0,i-1))}>← Prev</button><button className="btn primary" onClick={()=>setPlaying(p=>!p)}>{playing?'Pause':'▶ Auto-play'}</button><button className="btn" disabled={index===steps.length-1} onClick={()=>setIndex(i=>Math.min(steps.length-1,i+1))}>Next →</button><button className="btn ghost" onClick={()=>{setPlaying(false);setIndex(0)}}>↺ Restart</button><input type="range" min="0" max={steps.length-1} value={index} onChange={e=>setIndex(Number(e.target.value))} aria-label="Program step"/></div></div>
}
function StaticRun({ steps, codeLines, file }) {
  const last=steps[steps.length-1]
  return <div className="rv-static"><CodeBlock lines={codeLines} filename={file}/><ol className="rv-timeline">{steps.map((s,i)=><li key={`${s.title}-${i}`}><div className="rv-dot">{i+1}</div><div><strong>{s.title}{s.line?<code className="rv-line-ref"> (line {s.line})</code>:null}</strong><p>{s.explain}</p>{s.vars?.length>0&&<p className="rv-vars">Memory: {s.vars.map(v=>`${v.name} = ${v.value}`).join(', ')}</p>}{s.console?.length>0&&<p className="rv-vars">Console: {s.console.join(' | ')}</p>}</div></li>)}</ol><div className="rv-static-console"><h5>Final console output</h5><pre>{last.console?.join('\n')||'(empty)'}</pre></div></div>
}
export default function RunVisualizer(props){return props.staticMode?<StaticRun {...props}/>:<InteractiveRun {...props}/>}
