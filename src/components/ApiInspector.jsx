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
  title = 'Interactive Live API Wire Inspector',
  staticMode = false
}) {
  const [activeTab, setActiveTab] = useState('response')
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
      setActiveTab('response')
    }, 400)
  }

  const responseString = typeof responseBody === 'string'
    ? responseBody
    : JSON.stringify(responseBody, null, 2)

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

      <div className="api-inspector-tabs">
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

      <div className="api-inspector-body">
        {activeTab === 'request' && (
          <div className="request-pane">
            <div className="pane-section">
              <h6>Headers</h6>
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
            </div>
            {requestBody && (
              <div className="pane-section">
                <h6>Payload Body</h6>
                <pre className="payload-box">
                  <code>{typeof requestBody === 'string' ? requestBody : JSON.stringify(requestBody, null, 2)}</code>
                </pre>
              </div>
            )}
          </div>
        )}

        {activeTab === 'response' && (
          <div className="response-pane">
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

        {activeTab === 'tests' && (
          <div className="tests-pane">
            <div className="assertions-summary">
              <span className="assertions-pass-count">✓ {assertions.length} of {assertions.length} Passed</span>
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
