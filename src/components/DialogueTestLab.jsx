import React, { useState } from 'react'
import cableImage from '../books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch01-scene2-panel2-modern-network-cable.jpg'

export default function DialogueTestLab({ onBackToBook }) {
  const [previewWidth, setPreviewWidth] = useState('100%')
  const [activeTab, setActiveTab] = useState('preview') // 'preview', 'code', 'raw'

  const sameerShort = 'Does the menu live inside that tablet?'
  const akshayShort = 'No, it fetches it across the campus network.'

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1e293b' }}>
      {/* Top Header */}
      <div style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '1.25rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-block', background: '#dcfce7', color: '#166534', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              UNIFIED COMIC & PROGRAMMING INTERFACE SPECIFICATION
            </div>
            <h1 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>
              Comic Story Cell & Programming Interface Blueprint
            </h1>
            <p style={{ margin: '0.5rem 0 0', color: '#475569', fontSize: '0.95rem' }}>
              <strong>Consistency System:</strong> Top context bar + unhidden character artwork + negative-space clouds + bottom takeaway strip + split-pane Input/Process/Output programming workbench.
            </p>
          </div>
          {onBackToBook && (
            <button
              onClick={onBackToBook}
              style={{ background: '#0284c7', color: '#ffffff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}
            >
              ← Back to Book Reader
            </button>
          )}
        </div>

        {/* Viewport Resize Simulator */}
        <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#f8fafc', padding: '0.6rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>Simulate Viewport Width:</span>
          <button
            onClick={() => setPreviewWidth('100%')}
            style={{ padding: '0.35rem 0.75rem', borderRadius: '4px', border: previewWidth === '100%' ? '2px solid #0284c7' : '1px solid #cbd5e1', background: previewWidth === '100%' ? '#e0f2fe' : '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.8rem' }}
          >
            🖥️ Desktop (100%)
          </button>
          <button
            onClick={() => setPreviewWidth('840px')}
            style={{ padding: '0.35rem 0.75rem', borderRadius: '4px', border: previewWidth === '840px' ? '2px solid #0284c7' : '1px solid #cbd5e1', background: previewWidth === '840px' ? '#e0f2fe' : '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.8rem' }}
          >
            📱 Tablet (840px)
          </button>
          <button
            onClick={() => setPreviewWidth('480px')}
            style={{ padding: '0.35rem 0.75rem', borderRadius: '4px', border: previewWidth === '480px' ? '2px solid #0284c7' : '1px solid #cbd5e1', background: previewWidth === '480px' ? '#e0f2fe' : '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.8rem' }}
          >
            📱 Mobile (480px)
          </button>
        </div>
      </div>

      <div style={{ maxWidth: previewWidth, margin: '0 auto', transition: 'max-width 0.25s ease' }}>
        
        {/* ========================================================================= */}
        {/* PART 1: THE STANDARDIZED COMIC STORY CELL */}
        {/* ========================================================================= */}
        <section style={{ marginBottom: '3rem', background: '#ffffff', borderRadius: '12px', border: '2px solid #0f172a', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
          {/* Top Context Bar */}
          <div style={{ background: '#0f172a', color: '#f8fafc', padding: '0.65rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ background: '#0284c7', color: '#fff', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>PANEL 2</span>
              <strong style={{ fontSize: '0.9rem', letterSpacing: '0.02em' }}>HOLDING THE PHYSICAL WIRE</strong>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>12:12 PM · Apex Campus Server Bay</span>
          </div>

          {/* Comic Canvas (Artwork + Negative Space Clouds) */}
          <div style={{ position: 'relative', width: '100%', lineHeight: 0, background: '#f8fafc' }}>
            <svg viewBox="0 0 1376 768" width="100%" height="auto" style={{ display: 'block' }}>
              <defs>
                <filter id="cell-shadow" x="-8%" y="-8%" width="120%" height="125%">
                  <feDropShadow dx="0" dy="4" stdDeviation="5" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* 1. Base 16:9 Artwork (100% Uncropped) */}
              <image href={cableImage} x="0" y="0" width="1376" height="768" />

              {/* 2. Sameer Cloud (Top Left: in empty negative space above server rack) */}
              <g filter="url(#cell-shadow)">
                <path
                  d="M 85 45 L 365 45 Q 385 45 385 65 L 385 125 Q 385 145 365 145 L 330 145 L 430 195 L 310 145 L 85 145 Q 65 145 65 125 L 65 65 Q 65 45 85 45 Z"
                  fill="#ffffff"
                  stroke="#4338ca"
                  strokeWidth="3"
                />
                <text x="82" y="75" fill="#4338ca" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="800" letterSpacing="0.05em">
                  SAMEER
                </text>
                <text x="82" y="105" fill="#0f172a" fontFamily="system-ui, sans-serif" fontSize="15" fontStyle="italic">
                  "Does the menu live inside
                </text>
                <text x="82" y="128" fill="#0f172a" fontFamily="system-ui, sans-serif" fontSize="15" fontStyle="italic">
                  that tablet?"
                </text>
              </g>

              {/* 3. Akshay Cloud (Top Right: in empty negative space above desk) */}
              <g filter="url(#cell-shadow)">
                <path
                  d="M 1010 45 L 1290 45 Q 1310 45 1310 65 L 1310 125 Q 1310 145 1290 145 L 1050 145 L 820 250 L 1020 145 L 1010 145 Q 990 145 990 125 L 990 65 Q 990 45 1010 45 Z"
                  fill="#ffffff"
                  stroke="#0284c7"
                  strokeWidth="3"
                />
                <text x="1010" y="75" fill="#0284c7" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="800" letterSpacing="0.05em">
                  AKSHAY
                </text>
                <text x="1010" y="105" fill="#0f172a" fontFamily="system-ui, sans-serif" fontSize="15" fontStyle="italic">
                  "No, it fetches it across
                </text>
                <text x="1010" y="128" fill="#0f172a" fontFamily="system-ui, sans-serif" fontSize="15" fontStyle="italic">
                  the campus network."
                </text>
              </g>
            </svg>
          </div>

          {/* Bottom Explanation Bar (Full Scene Grounding) */}
          <div style={{ background: '#f8fafc', borderTop: '1.5px solid #cbd5e1', padding: '0.85rem 1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <span style={{ fontSize: '1rem', lineHeight: 1 }}>💡</span>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#334155', lineHeight: 1.45 }}>
                <strong>The Core Wire Principle:</strong> In the lab, Sameer lifts the physical blue Category 6 network cable. The tablet is merely a presentation mirror. When requests stall or screens freeze, the true state of the conversation lives on the network wire.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PART 2: THE STANDARDIZED PROGRAMMING INTERFACE WORKBENCH */}
        {/* ========================================================================= */}
        <section style={{ marginBottom: '3rem', background: '#ffffff', borderRadius: '12px', border: '2px solid #0f172a', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
          {/* Title Bar with Tabs */}
          <div style={{ background: '#0f172a', color: '#f8fafc', padding: '0.6rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ display: 'flex', gap: '5px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              </div>
              <strong style={{ fontSize: '0.9rem', letterSpacing: '0.02em', marginLeft: '0.4rem' }}>
                API TESTING WORKBENCH · INTERACTIVE TRANSACTION RUNNER
              </strong>
            </div>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <span style={{ background: '#1e293b', border: '1px solid #334155', color: '#38bdf8', fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px', fontFamily: 'monospace' }}>
                PORT: 3000
              </span>
              <span style={{ background: '#166534', color: '#bbf7d0', fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                SERVER: ACTIVE
              </span>
            </div>
          </div>

          {/* Split Pane: Left = INPUT & CODE | Right = PROCESS & OUTPUT */}
          <div style={{ display: 'grid', gridTemplateColumns: previewWidth === '480px' ? '1fr' : '1.1fr 0.9fr', borderBottom: '1px solid #cbd5e1' }}>
            
            {/* LEFT COLUMN: INPUT */}
            <div style={{ padding: '1.25rem', borderRight: previewWidth === '480px' ? 'none' : '1px solid #cbd5e1', borderBottom: previewWidth === '480px' ? '1px solid #cbd5e1' : 'none', background: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0284c7', letterSpacing: '0.05em' }}>
                  STEP 1 · REQUEST INPUT (CLIENT DISPATCH)
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>protocol: HTTP/1.1</span>
              </div>

              {/* Method + URL Bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', background: '#f1f5f9', padding: '0.4rem 0.6rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                <span style={{ background: '#10b981', color: '#ffffff', fontWeight: 800, fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                  POST
                </span>
                <code style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: 600 }}>http://localhost:3000/catalog</code>
              </div>

              {/* Payload Editor */}
              <div style={{ background: '#0f172a', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ background: '#1e293b', padding: '0.3rem 0.75rem', fontSize: '0.72rem', color: '#94a3b8', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Headers: Content-Type: application/json</span>
                  <span>JSON Payload</span>
                </div>
                <pre style={{ margin: 0, padding: '0.85rem', color: '#e2e8f0', fontSize: '0.82rem', fontFamily: 'Consolas, monospace', lineHeight: 1.45, overflowX: 'auto' }}>
{`{
  "id": "CS101",
  "title": "Foundations of Computer Systems",
  "department": "Computer Science",
  "credits": 4
}`}
                </pre>
              </div>
            </div>

            {/* RIGHT COLUMN: PROCESSING & OUTPUT */}
            <div style={{ padding: '1.25rem', background: '#f8fafc' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6366f1', letterSpacing: '0.05em' }}>
                  STEP 2 · PROCESSING & DETERMINISTIC OUTPUT
                </span>
                <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 700 }}>201 CREATED</span>
              </div>

              {/* Processing Stream Status */}
              <div style={{ background: '#e0e7ff', border: '1px solid #c7d2fe', borderRadius: '6px', padding: '0.5rem 0.75rem', marginBottom: '0.85rem', fontSize: '0.78rem', color: '#3730a3' }}>
                <div style={{ fontWeight: 700, marginBottom: '0.2rem' }}>⚙️ Wire Processing Lifecycle:</div>
                <div>1. TCP handshake established on port 3000</div>
                <div>2. <code style={{ background: '#fff', padding: '0.1rem 0.3rem', borderRadius: '3px' }}>express.json()</code> buffers chunked byte stream</div>
                <div>3. Handler validates keys and writes to memory</div>
              </div>

              {/* Response Window */}
              <div style={{ background: '#0f172a', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ background: '#1e293b', padding: '0.3rem 0.75rem', fontSize: '0.72rem', color: '#94a3b8', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#4ade80', fontWeight: 700 }}>Status: 201 Created</span>
                  <span>Latency: 14 ms · Size: 312 B</span>
                </div>
                <pre style={{ margin: 0, padding: '0.85rem', color: '#4ade80', fontSize: '0.82rem', fontFamily: 'Consolas, monospace', lineHeight: 1.45, overflowX: 'auto' }}>
{`{
  "id": "CS101",
  "title": "Foundations of Computer Systems",
  "department": "Computer Science",
  "credits": 4,
  "status": "Active"
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* LOWER SECTION: TOKEN EXPLANATION & QUAD BREAKDOWN */}
          <div style={{ padding: '1.25rem', background: '#ffffff' }}>
            <h4 style={{ margin: '0 0 0.6rem 0', fontSize: '0.92rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>🔎</span> Chunked Code Breakdown & Token Callouts
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: previewWidth === '480px' ? '1fr' : '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0.6rem 0.85rem', fontSize: '0.82rem' }}>
                <strong style={{ color: '#0284c7' }}>👉 app.use(express.json())</strong>
                <p style={{ margin: '0.2rem 0 0', color: '#475569', lineHeight: 1.4 }}>
                  Buffers incoming TCP readable stream packets until complete, then parses the JSON string into <code style={{ background: '#f1f5f9', padding: '0.1rem 0.3rem', borderRadius: '3px' }}>req.body</code>.
                </p>
              </div>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0.6rem 0.85rem', fontSize: '0.82rem' }}>
                <strong style={{ color: '#10b981' }}>👉 res.status(201).json(record)</strong>
                <p style={{ margin: '0.2rem 0 0', color: '#475569', lineHeight: 1.4 }}>
                  Signals the client that a new entity was created successfully and echoes back the confirmed database record over the wire.
                </p>
              </div>
            </div>

            {/* Senior Savior 4-Part Pedagogical Summary */}
            <div style={{ background: '#fef2f2', border: '1.5px solid #fecaca', borderRadius: '8px', padding: '0.75rem 1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '1rem' }}>🛡️</span>
                <strong style={{ fontSize: '0.85rem', color: '#991b1b' }}>SENIOR SAVIOR · ARCHITECTURAL TRAP & GOLDEN RULE</strong>
              </div>
              <div style={{ fontSize: '0.83rem', color: '#7f1d1d', lineHeight: 1.45 }}>
                <div><strong>The Trap:</strong> Forgetting body parser middleware, causing <code style={{ background: '#fee2e2', padding: '0.1rem 0.3rem', borderRadius: '3px' }}>req.body</code> to be undefined and crashing the handler with a runtime TypeError.</div>
                <div style={{ marginTop: '0.25rem' }}><strong>The Golden Rule:</strong> An HTTP server is a streaming engine; always mount stream buffering middleware before declaring POST, PUT, or PATCH handlers.</div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
