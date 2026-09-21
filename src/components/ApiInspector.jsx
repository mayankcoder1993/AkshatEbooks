import { useState } from 'react'

export default function ApiInspector({
  method = 'GET',
  url = 'https://api.github.com/users/octocat',
  headers = {},
  requestBody = null,
  status = '200 OK',
  time = '42 ms',
  size = '1.2 kB',
  responseBody = {},
  assertions = [],
  title = 'Live API Wire Inspection Blueprint',
  staticMode = false
}) {
  const [activeTab, setActiveTab] = useState(staticMode ? 'all' : 'all')
  const [sent, setSent] = useState(true)
  const [sending, setSending] = useState(false)

  const methodClass = method.toUpperCase() === 'POST' ? 'post' :
    method.toUpperCase() === 'DELETE' ? 'delete' :
    method.toUpperCase() === 'PUT' ? 'put' : 'get'

  const handleSend = () => {
    if (staticMode) return
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setActiveTab('all')
    }, 400)
  }

  const responseString = typeof responseBody === 'string'
    ? responseBody
    : JSON.stringify(responseBody, null, 2)

  // In static mode or eBook view, show all sections so print and eBook readers see everything
  const showRequest = staticMode || activeTab === 'request' || activeTab === 'all'
  const showResponse = staticMode || activeTab === 'response' || activeTab === 'all'
  const showTests = (staticMode || activeTab === 'tests' || activeTab === 'all') && assertions.length > 0

  return (
    <div className="api-inspector">
      <div className="api-inspector-header">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="api-inspector-title">{title}</span>
      </div>

      <div className="api-url-bar">
        <span className={`method-badge ${methodClass}`}>{method}</span>
        <span className="url-text">{url}</span>
        {!staticMode && (
          <button
            type="button"
            className="send-btn"
            onClick={handleSend}
            disabled={sending}
          >
            {sending ? 'Sending…' : 'Send Request 🚀'}
          </button>
        )}
      </div>

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
          {assertions.length > 0 && (
            <button
              type="button"
              className={`tab-btn ${activeTab === 'tests' ? 'active' : ''}`}
              onClick={() => setActiveTab('tests')}
            >
              Test Results ({assertions.length})
            </button>
          )}
        </div>
      )}

      <div className="api-inspector-body">
        {showRequest && (
          <div className="request-pane" style={{ marginBottom: activeTab === 'all' || staticMode ? '1.25rem' : '0' }}>
            <h6 style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', margin: '0 0 0.5rem' }}>
              1. The Request (Sent Over the Wire)
            </h6>
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

        {showResponse && (
          <div className="response-pane" style={{ marginBottom: (activeTab === 'all' || staticMode) && showTests ? '1.25rem' : '0' }}>
            <h6 style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', margin: '0 0 0.5rem' }}>
              2. The Server Response (Received Over the Wire)
            </h6>
            <div className="response-meta-bar">
              <span className="meta-badge status">{status}</span>
              <span className="meta-badge time">⏱ {time}</span>
              <span className="meta-badge size">📦 {size}</span>
            </div>
            <pre className="payload-box">
              <code>{responseString}</code>
            </pre>
          </div>
        )}

        {showTests && (
          <div className="tests-pane">
            <h6 style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', margin: '0 0 0.5rem' }}>
              3. Automated Quality Verification (Assertions Checked)
            </h6>
            <div className="assertions-summary">
              <span className="assertions-pass-count">✓ {assertions.length} of {assertions.length} Tests Passed</span>
            </div>
            <ul className="assertions-list">
              {assertions.map((a, i) => (
                <li key={i} className="assertion-item pass">
                  <span className="assertion-check">✓</span>
                  <span className="assertion-name">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
