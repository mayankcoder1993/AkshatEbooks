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
  staticMode = false,
  sampleLabel = null
}) {
  const [activeTab, setActiveTab] = useState(staticMode ? 'all' : 'all')
  const [chaosMode, setChaosMode] = useState('normal')
  const [sending, setSending] = useState(false)
  const [hasSent, setHasSent] = useState(staticMode)
  const [liveResponse, setLiveResponse] = useState(null)
  const [liveStatus, setLiveStatus] = useState(null)
  const [liveTime, setLiveTime] = useState(null)
  const [liveSize, setLiveSize] = useState(null)

  const isSimulatedDomain = url.includes('campustransit.org') || url.includes('campuslibrary.org') || url.includes('.local') || url.includes('.corp')
  const mirrorLink = publicMirrorUrl

  const methodClass = method.toUpperCase() === 'POST' ? 'post' :
    method.toUpperCase() === 'DELETE' ? 'delete' :
    method.toUpperCase() === 'PUT' ? 'put' :
    method.toUpperCase() === 'PATCH' ? 'patch' : 'get'

  const handleSend = () => {
    if (staticMode) return
    setSending(true)
    const startTime = performance.now()

    // If it is a real public or localhost URL, attempt browser fetch
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
          const bodyStr = JSON.stringify(data)
          setLiveSize(`${new Blob([bodyStr]).size} B`)
          setSending(false)
          setHasSent(true)
          setActiveTab('all')
        })
        .catch(() => {
          setTimeout(() => {
            setSending(false)
            setHasSent(true)
            setActiveTab('all')
          }, 250)
        })
    } else {
      setTimeout(() => {
        setSending(false)
        setHasSent(true)
        setActiveTab('all')
      }, 300)
    }
  }

  // Chaos simulation states
  const isCrash = chaosMode === 'crash500'
  const isSlow = chaosMode === 'slow3000'

  const currentStatus = !hasSent ? 'Ready to dispatch' : (isCrash ? '500 Server Error' : (liveStatus || status))
  const currentTime = !hasSent ? '— ms' : (isSlow ? '3,420 ms' : (isCrash ? '14 ms' : (liveTime || time)))
  const currentSize = !hasSent ? '— B' : (isCrash ? '280 B' : (liveSize || size))

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
  const showTests = (staticMode || activeTab === 'tests' || activeTab === 'all') && assertions.length > 0 && hasSent
  const hasScript = Array.isArray(testScript) && testScript.length > 0
  const showScript = !staticMode && (activeTab === 'script' || activeTab === 'all') && hasScript

  return (
    <div className="api-inspector">
      <div className="api-inspector-header">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="api-inspector-title">{title}</span>
        <span className="workbench-tag">{sampleLabel || 'SILICON VALLEY WORKBENCH UI'}</span>
      </div>

      <div className="api-url-bar">
        <span className={`method-badge ${methodClass}`}>{method}</span>
        <span className="url-text">{url}</span>
        {isSimulatedDomain && (
          <span className="dns-notice-pill" title="Companion test endpoint. Runs on local mock server at localhost:5050.">
            🔒 Companion Test Endpoint
          </span>
        )}
        {mirrorLink && (
          <a
            href={mirrorLink}
            target="_blank"
            rel="noreferrer"
            className="mirror-btn"
            title="Open mirror payload directly in your browser"
          >
            🌐 Raw File Mirror ↗
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
              {sending ? 'Sending…' : (hasSent ? 'Re-send 🚀' : 'Send 🚀')}
            </button>
          </div>
        )}
      </div>

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
          {assertions.length > 0 && hasSent && (
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
          <div className="inspector-panel request-panel">
            <div className="panel-header">
              <span className="panel-tag">REQUEST WIRE DETAILS</span>
              <span className="panel-meta">Method: {method}</span>
            </div>
            {Object.keys(headers).length > 0 && (
              <div className="panel-section">
                <span className="sub-label">Request Headers:</span>
                <div className="headers-grid">
                  {Object.entries(headers).map(([k, v]) => (
                    <div key={k} className="header-row">
                      <span className="h-key">{k}:</span>
                      <span className="h-val">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {requestBody && (
              <div className="panel-section">
                <span className="sub-label">Request Body (JSON Payload):</span>
                <pre className="code-box"><code>{typeof requestBody === 'string' ? requestBody : JSON.stringify(requestBody, null, 2)}</code></pre>
              </div>
            )}
          </div>
        )}

        {showResponse && (
          <div className="inspector-panel response-panel">
            <div className="panel-header">
              <span className="panel-tag">RESPONSE WIRE DETAILS</span>
              <div className="response-stats">
                <span className={`status-tag ${currentStatus.startsWith('2') ? 'status-200' : currentStatus.startsWith('5') ? 'status-500' : currentStatus.startsWith('4') ? 'status-400' : 'status-idle'}`}>
                  {currentStatus}
                </span>
                <span className="time-tag">⏱ {currentTime}</span>
                <span className="size-tag">📦 {currentSize}</span>
              </div>
            </div>
            {!hasSent && !staticMode ? (
              <div className="wire-idle-prompt">
                <p><strong>Wire Traffic Idle:</strong> Click <strong>Send 🚀</strong> in the address bar above to transmit this HTTP {method} request across the network and capture the server response.</p>
              </div>
            ) : (
              <pre className="code-box"><code>{currentResponseString}</code></pre>
            )}
          </div>
        )}

        {showScript && (
          <div className="inspector-panel script-panel">
            <div className="panel-header">
              <span className="panel-tag">TEST SCRIPTS (JAVASCRIPT / POSTMAN)</span>
              <span className="panel-meta">Sandbox: Node.js (pm.*)</span>
            </div>
            <pre className="code-box"><code>{testScript.join('\n')}</code></pre>
          </div>
        )}

        {showTests && (
          <div className="inspector-panel tests-panel">
            <div className="panel-header">
              <span className="panel-tag">ASSERTION EVALUATOR</span>
              <span className={`pass-tag ${passCount === totalCount ? 'all-pass' : 'some-fail'}`}>
                {passCount} / {totalCount} Passed
              </span>
            </div>
            <div className="test-results-list">
              {testResults.map((t, idx) => (
                <div key={idx} className={`test-row ${t.pass ? 'pass' : 'fail'}`}>
                  <span className="test-icon">{t.pass ? '✓' : '✗'}</span>
                  <div className="test-details">
                    <span className="test-name">{t.name}</span>
                    {t.error && <span className="test-error">{t.error}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
