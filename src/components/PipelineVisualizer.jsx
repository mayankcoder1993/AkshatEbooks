import { useState } from 'react'

function Track({ track, staticMode = false }) {
  return <section className={`pipeline-track route-${track.color || 'indigo'}`}>
    <header className="pipeline-track-header"><div className="route-title"><span className="route-icon">{track.icon}</span><div><h4>{track.label}</h4>{track.summary && <p>{track.summary}</p>}</div></div><span className="route-finish">SOURCE → RESULT</span></header>
    <div className="pipeline-stages">
      {track.stages.map((stage, index) => <article className="pipeline-stage" key={stage.name}>
        <div className="stage-top"><span className="stage-number">{index + 1}</span><span className="stage-icon">{stage.icon}</span><span className="stage-kind">STAGE {index + 1}</span></div>
        <strong>{stage.name}</strong><span className="artifact-label">Creates or uses</span><code className="stage-artifact">{stage.artifact}</code><p>{stage.description}</p>
        {stage.example && <pre className="stage-example" aria-label={`${stage.name} example`}>{stage.example}</pre>}
        {index < track.stages.length - 1 && <span className="route-arrow" aria-hidden>→</span>}
      </article>)}
    </div>
    {staticMode && <p className="pipeline-print-note">Follow stages 1–{track.stages.length} from left to right.</p>}
  </section>
}

export default function PipelineVisualizer({ tracks, staticMode }) {
  const [active, setActive] = useState(tracks[0].id)
  if (staticMode) return <div className="pipeline static-pipeline">{tracks.map(t => <Track key={t.id} track={t} staticMode />)}</div>
  const track = tracks.find(t => t.id === active)
  return <div className="pipeline">
    <div className="pipeline-tabs" role="tablist" aria-label="Programming language routes">{tracks.map(t => <button role="tab" aria-selected={active === t.id} key={t.id} className={active === t.id ? 'active' : ''} onClick={() => setActive(t.id)}><span>{t.icon}</span>{t.label}</button>)}</div>
    <Track track={track} />
    <div className="pipeline-route-key"><span><i className="key-dot source"/>Human-readable source</span><span><i className="key-dot artifact"/>Artifact made or used</span><span><i className="key-dot result"/>Visible result</span></div>
  </div>
}
