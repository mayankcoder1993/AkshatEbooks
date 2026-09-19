import { useState } from 'react'

function Track({ track }) {
  return <div className="pipeline-track">
    <h4>{track.icon} {track.label}</h4>
    <div className="pipeline-stages">
      {track.stages.map((stage, index) => <div className="pipeline-stage" key={stage.name}>
        <span className="stage-number">{index + 1}</span><span className="stage-icon">{stage.icon}</span>
        <strong>{stage.name}</strong><code>{stage.artifact}</code><p>{stage.description}</p>
      </div>)}
    </div>
  </div>
}

export default function PipelineVisualizer({ tracks, staticMode }) {
  const [active, setActive] = useState(tracks[0].id)
  if (staticMode) return <div className="pipeline static-pipeline">{tracks.map(t => <Track key={t.id} track={t} />)}</div>
  const track = tracks.find(t => t.id === active)
  return <div className="pipeline">
    <div className="pipeline-tabs" role="tablist">{tracks.map(t => <button key={t.id} className={active === t.id ? 'active' : ''} onClick={() => setActive(t.id)}>{t.icon} {t.label}</button>)}</div>
    <Track track={track} />
  </div>
}
