import { useState } from 'react'

export default function ApiInspector({
  method = 'GET',
  url = 'https://api.github.com/users/octocat',
  publicMirrorUrl = null,
  headers = {},
  requestBody = null,
  status = '200 OK',
  time = '34 ms',
  size = '562 B',
  responseBody = {},
  assertions = [],
  testScript = null,
  title = 'API Test Workbench: Wire Inspector',
  staticMode = false
}) {
  const [activeTab, setActiveTab] = useState(staticMode ? 'all' : 'all')
  const [chaosMode, setChaosMode] = useState('normal')
  const [sending, setSending] = useState(false)
  const [liveResponse, setLiveResponse] = useState(null)
  const [liveStatus, setLiveStatus] = useState(null)
  const [liveTime, setLiveTime] = useState(null)

  const isSimulatedDomain = url.includes('campuslibrary.org') || url.includes('.local') || url.includes('.corp')
  const mirrorLink = publicMirrorUrl || (url.includes('campuslibrary.org')
    ? 'https://raw.githubusercontent.com/mayankcoder1993/AkshatEbooks/arena/01a0bfe5-akshatebooks/course-materials/zero-to-agentic-api-testing/lesson-01/campus-catalog.json'
    : null)

  const methodClass = method.toUpperCase() === 'POST' ? 'post' :
    method.toUpperCase() === 'DELETE' ? 'delete' :
    method.toUpperCase() === 'PUT' ? 'put' : 'get'

  const handleSend = () => {
    if (staticMode) return
    setSending(true)
    const startTime = performance.now()

    // If it's a real public or localhost URL, attempt browser fetch
    const canFetch = (url.startsWith('https://api.github.com') || url.startsWith('https://api.bigdatacloud.net') || url.startsWith('http://localhost:5050')) && method === 'GET'
    
    if (canFetch) {
      fetch(url)
        .then(res => {
          const duration = Math.round(performance.now() - startTime)
          setLiveStatus(`${res.status} ${res.statusText}`)
          setLiveTime(`${duration} ms`)
          return res.json()
        })
        .then(data => {
          setLiveResponse(data)
          setSending(false)
          setActiveTab('all')
        })
        .catch(() => {
          // Fallback to static mock payload if CORS or network blocks
          setTimeout(() => {
            setSending(false)
            setActiveTab('all')
          }, 250)
        })
    } else {
      setTimeout(() => {
        setSending(false)
        setActiveTab('all')
      }, 300)
    }
  }

  // Chaos simulation states
  const isCrash = chaosMode === 'crash500'
  const isSlow = chaosMode === 'slow3000'

  const currentStatus = isCrash ? '500 Server Error' : (liveStatus || status)
  const currentTime = isSlow ? '3,420 ms' : (isCrash ? '14 ms' : (liveTime || time))
  const currentSize = isCrash ? '280 B' : size

  const currentResponseString = isCrash
    ? '<html>\n  <head><title>500 Internal Server Error</title></head>\n  <body>\n    <h1>Unhandled Server Error</h1>\n    <p>Crash in coordinate resolver service</p>\n  </body>\n</html>'
    : (liveResponse ? JSON.stringify(liveResponse, null, 2) : (typeof responseBody === 'string' ? responseBody : JSON.stringify(responseBody, null, 2)))

  const testResults = isCrash
    ? assertions.map(a => ({ name: a, pass: false, error: 'Expected 200 OK with JSON, but received HTML 500 error' }))
    : isSlow
      ? assertions.map((a, i) => i === 0
          ? { name: 'Response time is under 200 ms latency budget', pass: false, error: 'Actual time was 3,420 ms' }
          : { name: a, pass: true })
      : assertions.map(a => ({ name: a, pass: true }))

  const passCount = testResults.filter(t => t.pass).length
  const totalCount = testResults.length

  const showRequest = staticMode || activeTab === 'request' || activeTab === 'all'
  const showResponse = staticMode || activeTab === 'response' || activeTab === 'all'
  const showTests = (staticMode || activeTab === 'tests' || activeTab === 'all') && assertions.length > 0
  const hasScript = Array.isArray(testScript) && testScript.length > 0
  const showScript = !staticMode && (activeTab === 'script' || activeTab === 'all') && hasScript

  return (
    <div className="api-inspector">
      <div className="api-inspector-header">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="api-inspector-title">{title}</span>
        <span className="workbench-tag">SILICON VALLEY WORKBENCH UI</span>
      </div>

      <div className="api-url-bar">
        <span className={`method-badge ${methodClass}`}>{method}</span>
        <span className="url-text">{url}</span>
        {isSimulatedDomain && (
          <span className="dns-notice-pill" title="Private simulated university microservice. Not registered on public internet DNS.">
            🔒 Private Intranet Domain
          </span>
        )}
        {mirrorLink && (
          <a
            href={mirrorLink}
            target="_blank"
            rel="noreferrer"
            className="mirror-btn"
            title="Open live JSON payload directly in your browser"
          >
            🌐 Live Browser Link ↗
          </a>
        )}
        {!staticMode && (
          <div className="workbench-actions">
            <button
              type="button"
              className="send-btn"
              onClick={handleSend}
              disabled={sending}
            >
              {sending ? 'Sending…' : 'Send 🚀'}
            </button>
          </div>
        )}
      </div>

      {isSimulatedDomain && (
        <div className="dns-explainer-bar">
          💡 <strong>Why pasting this URL into your browser shows no response:</strong> <code>{url}</code> is a private university intranet address. In real world corporate architectures, internal microservices live behind company firewalls and are not registered on public internet DNS. That is why API workbenches like Postman exist: to test private endpoints directly! To inspect this exact response live in your public browser right now, click <a href={mirrorLink} target="_blank" rel="noreferrer">Live Browser Link ↗</a>.
        </div>
      )}

      {!staticMode && (
        <div className="chaos-controls-bar">
          <span className="chaos-label">Chaos Simulation:</span>
          <button
            type="button"
            className={`chaos-btn normal ${chaosMode === 'normal' ? 'active' : ''}`}
            onClick={() => setChaosMode('normal')}
          >
            Normal (200 OK)
          </button>
          <button
            type="button"
            className={`chaos-btn crash ${chaosMode === 'crash500' ? 'active' : ''}`}
            onClick={() => setChaosMode('crash500')}
          >
            💥 Chaos: 500 Crash
          </button>
          <button
            type="button"
            className={`chaos-btn slow ${chaosMode === 'slow3000' ? 'active' : ''}`}
            onClick={() => setChaosMode('slow3000')}
          >
            ⏱️ Chaos: Latency Spike
          </button>
        </div>
      )}

      {!staticMode && (
        <div className="api-inspector-tabs">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            Full eBook View (All)
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'response' ? 'active' : ''}`}
            onClick={() => setActiveTab('response')}
          >
            Response Payload
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'request' ? 'active' : ''}`}
            onClick={() => setActiveTab('request')}
          >
            Request Details
          </button>
          {hasScript && (
            <button
              type="button"
              className={`tab-btn ${activeTab === 'script' ? 'active' : ''}`}
              onClick={() => setActiveTab('script')}
            >
              JavaScript Tests (pm.*)
            </button>
          )}
          {assertions.length > 0 && (
            <button
              type="button"
              className={`tab-btn ${activeTab === 'tests' ? 'active' : ''}`}
              onClick={() => setActiveTab('tests')}
            >
              Test Results ({passCount}/{totalCount})
            </button>
          )}
        </div>
      )}

      <div className="api-inspector-body">
        {showRequest && (
          <div className="request-pane" style={{ marginBottom: (activeTab === 'all' || staticMode) ? '1.25rem' : '0' }}>
            <h6 className="pane-heading">1. The Request (Sent Over the Wire)</h6>
            <div className="headers-list">
              {Object.entries(headers).length > 0 ? (
                Object.entries(headers).map(([k, v]) => (
                  <div key={k} className="header-row">
                    <span className="header-key">{k}:</span>
                    <span className="header-val">{v}</span>
                  </div>
                ))
              ) : (
                <p className="empty-notice">Accept: application/json</p>
              )}
            </div>
            {requestBody && (
              <div className="pane-section" style={{ marginTop: '0.5rem' }}>
                <pre className="payload-box">
                  <code>{typeof requestBody === 'string' ? requestBody : JSON.stringify(requestBody, null, 2)}</code>
                </pre>
              </div>
            )}
          </div>
        )}

        {showScript && testScript && (
          <div className="script-pane" style={{ marginBottom: (activeTab === 'all' || staticMode) ? '1.25rem' : '0' }}>
            <h6 className="pane-heading">2. JavaScript Automated Test Script (pm.*)</h6>
            <pre className="payload-box script-box">
              <code>{Array.isArray(testScript) ? testScript.join('\n') : testScript}</code>
            </pre>
          </div>
        )}

        {showResponse && (
          <div className="response-pane" style={{ marginBottom: (activeTab === 'all' || staticMode) && showTests ? '1.25rem' : '0' }}>
            <h6 className="pane-heading">3. The Server Response (Received Over the Wire)</h6>
            <div className="response-meta-bar">
              <span className={`meta-badge status ${isCrash ? 'status-err' : 'status-ok'}`}>
                {currentStatus}
              </span>
              <span className={`meta-badge time ${isSlow ? 'time-slow' : ''}`}>
                ⏱ {currentTime}
              </span>
              <span className="meta-badge size">📦 {currentSize}</span>
            </div>
            <pre className={`payload-box ${isCrash ? 'payload-crash' : ''}`}>
              <code>{currentResponseString}</code>
            </pre>
          </div>
        )}

        {showTests && (
          <div className="tests-pane">
            <h6 className="pane-heading">4. Automated Quality Verification (Assertions Checked)</h6>
            <div className={`assertions-summary ${isCrash ? 'summary-fail' : ''}`}>
              <span className="assertions-pass-count">
                {isCrash ? '✗ 0 of 4 Passed' : `✓ ${passCount} of ${totalCount} Passed`}
              </span>
            </div>
            <ul className="assertions-list">
              {testResults.map((t, i) => (
                <li key={i} className={`assertion-item ${t.pass ? 'pass' : 'fail'}`}>
                  <span className="assertion-check">{t.pass ? '✓' : '✗'}</span>
                  <div className="assertion-details">
                    <span className="assertion-name">{t.name}</span>
                    {t.error && <span className="assertion-error-msg">{t.error}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
