import React from 'react'
import { RichText } from './Blocks.jsx'

export function ComicWorkbench({
  badge = 'APPLICATION WORKBENCH',
  title = '',
  intro = '',
  appType = 'api-workbench', // 'ide' | 'api-workbench'
  dialogue = [],
  ide = null,
  workbench = null,
  breakdown = null,
  staticMode = false
}) {
  const methodClass = (workbench?.method || 'get').toLowerCase()

  return (
    <section className="comic-wb-card">
      {/* Header */}
      <div className="comic-wb-header">
        {badge && <span className="comic-wb-badge">{badge}</span>}
        {title && <h3 className="comic-wb-title">{title}</h3>}
        {intro && <p className="comic-wb-intro"><RichText text={intro} /></p>}
      </div>

      {/* Comic Dialogue Clouds (Akshay & Sameer) */}
      {dialogue && dialogue.length > 0 && (
        <div className="comic-wb-dialogue-strip">
          {dialogue.map((cloud, idx) => {
            const isAkshay = (cloud.speaker || '').toLowerCase().includes('akshay')
            const speakerClass = isAkshay ? 'akshay' : 'sameer'
            return (
              <div key={idx} className={`comic-cloud-card ${speakerClass}`}>
                <div className="comic-cloud-header">
                  <span className="comic-cloud-speaker">{cloud.speaker}</span>
                  <span className="comic-cloud-role">{cloud.role}</span>
                </div>
                <p className="comic-cloud-bubble">
                  <RichText text={cloud.text} />
                </p>
                {cloud.pointer && (
                  <span className="comic-cloud-pointer-tag">
                    <span>↘</span>
                    <span>Pointing to: {cloud.pointer}</span>
                  </span>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Software Application Window */}
      <div className="comic-app-window">
        {appType === 'ide' && ide && (
          <div className="comic-ide-window">
            {/* Titlebar */}
            <div className="comic-app-titlebar">
              <div className="comic-window-dots">
                <span className="comic-dot red"></span>
                <span className="comic-dot yellow"></span>
                <span className="comic-dot green"></span>
              </div>
              <div className="comic-app-name">
                <span>IDE Code Workspace</span>
                <span>•</span>
                <small style={{ color: '#64748B' }}>{ide.breadcrumbs || ide.fileName}</small>
              </div>
              <span className="comic-app-env-badge">Node.js v22</span>
            </div>

            {/* Code Editor */}
            <div className="comic-ide-editor">
              <div className="comic-ide-line-numbers">
                {(ide.code || '').split('\n').map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="comic-ide-code-content">
                <pre><code>{ide.code}</code></pre>
              </div>
            </div>

            {/* Terminal Drawer */}
            {ide.terminalLogs && (
              <div className="comic-ide-terminal">
                <div className="comic-terminal-header">
                  <span>Terminal Console</span>
                  <span>•</span>
                  <span>Integrated Shell</span>
                </div>
                {ide.terminalCommand && (
                  <div className="comic-terminal-cmd">$ {ide.terminalCommand}</div>
                )}
                {ide.terminalLogs.map((log, idx) => (
                  <div key={idx} className="comic-terminal-log">{log}</div>
                ))}
              </div>
            )}
          </div>
        )}

        {appType === 'api-workbench' && workbench && (
          <div className="comic-workbench-window">
            {/* Titlebar */}
            <div className="comic-app-titlebar">
              <div className="comic-window-dots">
                <span className="comic-dot red"></span>
                <span className="comic-dot yellow"></span>
                <span className="comic-dot green"></span>
              </div>
              <div className="comic-app-name">
                <span>API Testing Workbench</span>
                <span>•</span>
                <small style={{ color: '#64748B' }}>Workspace</small>
              </div>
              <span className="comic-app-env-badge">{workbench.environment || 'No Environment'}</span>
            </div>

            {/* Request Bar */}
            <div className="comic-api-request-bar">
              <span className={`comic-method-pill ${methodClass}`}>
                {workbench.method || 'GET'}
              </span>
              <div className="comic-url-input">
                {workbench.url}
              </div>
              <button type="button" className="comic-send-btn">Send</button>
            </div>

            {/* Request Tabs */}
            <div className="comic-api-tabs">
              {['Params', 'Headers', 'Body', 'Pre request', 'Tests'].map(tab => (
                <div
                  key={tab}
                  className={`comic-api-tab ${workbench.activeTab === tab ? 'active' : ''}`}
                >
                  {tab}
                </div>
              ))}
            </div>

            {/* Tab Content (if body or pre request or tests code provided) */}
            {workbench.tabContent && (
              <div className="comic-api-tab-content">
                <pre style={{ margin: 0 }}><code>{workbench.tabContent}</code></pre>
              </div>
            )}

            {/* Response Drawer */}
            {workbench.response && (
              <div className="comic-api-response-drawer">
                <div className="comic-resp-status-bar">
                  <div className="comic-resp-status-group">
                    <span className={`comic-status-pill ${workbench.response.status?.startsWith('2') ? 'ok' : 'err'}`}>
                      {workbench.response.status}
                    </span>
                    {workbench.response.time && (
                      <span className="comic-metric">Time: {workbench.response.time}</span>
                    )}
                    {workbench.response.size && (
                      <span className="comic-metric">Size: {workbench.response.size}</span>
                    )}
                  </div>
                  <span className="comic-app-env-badge">Format: {workbench.response.format || 'JSON'}</span>
                </div>

                {/* Response Body */}
                {workbench.response.body && (
                  <div className="comic-resp-body">
                    <pre><code>{workbench.response.body}</code></pre>
                  </div>
                )}

                {/* Test Results */}
                {workbench.response.testResults && workbench.response.testResults.length > 0 && (
                  <div className="comic-test-results-list">
                    {workbench.response.testResults.map((t, idx) => (
                      <div key={idx} className="comic-test-item">
                        <span className={`comic-test-badge ${t.status.toLowerCase()}`}>
                          {t.status}
                        </span>
                        <span>{t.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Pedagogical Structured Breakdown */}
      {breakdown && (
        <div className="comic-wb-pedagogy">
          <div className="comic-pedagogy-grid">
            {breakdown.input && (
              <div className="comic-pedagogy-box">
                <div className="comic-pedagogy-label">Wire Input & Parameter</div>
                <p className="comic-pedagogy-text"><RichText text={breakdown.input} /></p>
              </div>
            )}
            {breakdown.output && (
              <div className="comic-pedagogy-box">
                <div className="comic-pedagogy-label">Serialized Wire Output</div>
                <p className="comic-pedagogy-text"><RichText text={breakdown.output} /></p>
              </div>
            )}
          </div>

          {breakdown.explanation && (
            <div className="comic-pedagogy-box" style={{ marginBottom: '1rem' }}>
              <div className="comic-pedagogy-label">Line by Line Runtime Execution</div>
              <p className="comic-pedagogy-text"><RichText text={breakdown.explanation} /></p>
            </div>
          )}

          {/* Akshay's Trap & Sameer's Fix */}
          {breakdown.trapAndFix && (
            <div className="comic-trap-fix-card">
              <div className="comic-trap-fix-header">
                <span>⚠️ Developer Trap vs Principal Architect Fix</span>
              </div>
              <div className="comic-trap-fix-body">
                <p style={{ margin: '0 0 0.5rem 0' }}>
                  <strong>Akshay's Common Mistake: </strong>
                  <RichText text={breakdown.trapAndFix.trap} />
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Sameer's Architectural Gyan: </strong>
                  <RichText text={breakdown.trapAndFix.savior} />
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
