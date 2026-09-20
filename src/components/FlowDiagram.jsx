/**
 * A responsive, step-by-step route through a program.
 * The HTML layout stays readable in narrow Book View pages and Word-sized layouts.
 */
export default function FlowDiagram({
  stages,
  inputLabel = 'Input',
  inputDetail = 'Data enters the program',
  processLabel = 'Process',
  processDetail = 'The program performs an action',
  outputLabel = 'Output',
  outputDetail = 'A result leaves the program',
  caption = 'Read from top to bottom. Each result becomes possible because the previous step happened first.',
}) {
  const route = stages || [
    { eyebrow: 'INPUT', title: inputLabel, detail: inputDetail },
    { eyebrow: 'PROCESS', title: processLabel, detail: processDetail },
    { eyebrow: 'OUTPUT', title: outputLabel, detail: outputDetail },
  ]

  return (
    <div className="flow-wrap" role="group" aria-label="Program process shown step by step">
      <ol className="flow-stages">
        {route.map((stage, index) => (
          <li className="flow-stage" key={`${stage.eyebrow || 'step'}-${stage.title}`}>
            <span className="flow-number" aria-hidden="true">{index + 1}</span>
            <div>
              <span className="flow-eyebrow">{stage.eyebrow || `STEP ${index + 1}`}</span>
              <strong>{stage.title}</strong>
              <p>{stage.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="flow-caption">{caption}</p>
    </div>
  )
}
