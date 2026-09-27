import React, { useState } from 'react'
import cableImage from '../books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch01-scene2-panel2-modern-network-cable.jpg'

export default function DialogueTestLab({ onBackToBook }) {
  const [previewWidth, setPreviewWidth] = useState('100%')

  // Short, punchy dialogue lines per user rule:
  // "if more text then we need to create a new scene to cover it"
  const sameerShort = 'Does the menu live inside that tablet?'
  const akshayShort = 'No, it fetches it across the campus network.'

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1e293b' }}>
      {/* Header */}
      <div style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '1.25rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-block', background: '#dcfce7', color: '#166534', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              REFINED LAB PROTOTYPE · USER FEEDBACK APPLIED
            </div>
            <h1 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>
              Refined Comic Dialogue Clouds
            </h1>
            <p style={{ margin: '0.5rem 0 0', color: '#475569', fontSize: '0.95rem' }}>
              <strong>Applied User Rules:</strong> Compact text proportional to art, placed strictly in negative wall spaces so <strong>zero faces or bodies are hidden</strong>. Long dialogue split across beats.
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
            onClick={() => setPreviewWidth('820px')}
            style={{ padding: '0.35rem 0.75rem', borderRadius: '4px', border: previewWidth === '820px' ? '2px solid #0284c7' : '1px solid #cbd5e1', background: previewWidth === '820px' ? '#e0f2fe' : '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.8rem' }}
          >
            📱 Tablet (820px)
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
        {/* REFINED METHOD 2: Proportional Vector Clouds in Empty Negative Space */}
        {/* ========================================================================= */}
        <section style={{ marginBottom: '3rem', background: '#ffffff', borderRadius: '12px', border: '2px solid #059669', padding: '1.25rem', boxShadow: '0 4px 16px rgba(5,150,105,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <div>
              <span style={{ background: '#059669', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, marginRight: '0.5rem' }}>
                REFINED OPTION 2
              </span>
              <strong style={{ fontSize: '1.15rem', color: '#0f172a' }}>Compact Vector Clouds (Negative Space Only)</strong>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 700 }}>✓ Zero Faces Obscured · Crisp SVG Scaling</span>
          </div>

          <p style={{ fontSize: '0.85rem', color: '#475569', margin: '0 0 1rem 0' }}>
            Balloons placed strictly in the <strong>top-left corner</strong> (above server rack) and <strong>top-right corner</strong> (above desk/jali), leaving Sameer and Akshay completely unobscured. Tail pointers angle precisely toward each character's mouth.
          </p>

          <div style={{ border: '2px solid #0f172a', borderRadius: '8px', overflow: 'hidden', lineHeight: 0, background: '#0f172a' }}>
            <svg viewBox="0 0 1376 768" width="100%" height="auto" style={{ display: 'block' }}>
              <defs>
                <filter id="refined-shadow" x="-8%" y="-8%" width="120%" height="125%">
                  <feDropShadow dx="0" dy="4" stdDeviation="5" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* 1. Base Uncropped Artwork */}
              <image href={cableImage} x="0" y="0" width="1376" height="768" />

              {/* 2. Sameer Cloud (Placed in upper far-left negative space: x: 70, y: 45, w: 320, h: 90) */}
              <g filter="url(#refined-shadow)">
                {/* Cloud Body + Tail pointing toward Sameer mouth at (440, 210) */}
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

              {/* 3. Akshay Cloud (Placed in upper far-right negative space: x: 990, y: 45, w: 320, h: 90) */}
              <g filter="url(#refined-shadow)">
                {/* Cloud Body + Tail pointing toward Akshay mouth at (790, 270) */}
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
        </section>

        {/* ========================================================================= */}
        {/* REFINED METHOD 3: Proportional HTML Floating Clouds (Absolute %) */}
        {/* ========================================================================= */}
        <section style={{ marginBottom: '3rem', background: '#ffffff', borderRadius: '12px', border: '2px solid #d97706', padding: '1.25rem', boxShadow: '0 4px 16px rgba(217,119,6,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <div>
              <span style={{ background: '#d97706', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, marginRight: '0.5rem' }}>
                REFINED OPTION 3
              </span>
              <strong style={{ fontSize: '1.15rem', color: '#0f172a' }}>Compact HTML Percentage Clouds</strong>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#d97706', fontWeight: 700 }}>✓ Selectable Text · Scaled Down Cloud Dimensions</span>
          </div>

          <p style={{ fontSize: '0.85rem', color: '#475569', margin: '0 0 1rem 0' }}>
            HTML speech bubbles reduced to <strong>26% container width</strong> with smaller font size and positioned strictly at the top outer margins.
          </p>

          <div style={{ position: 'relative', width: '100%', aspectRatio: '1376 / 768', border: '2px solid #0f172a', borderRadius: '8px', overflow: 'hidden', background: '#f8fafc' }}>
            <img
              src={cableImage}
              alt="Sameer and Akshay"
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />

            {/* Sameer Small Cloud (Top Left: 5% left, 6% top, width 26%) */}
            <div style={{
              position: 'absolute',
              top: '6%',
              left: '5%',
              width: '26%',
              background: 'rgba(255, 255, 255, 0.96)',
              border: '2px solid #4338ca',
              borderRadius: '8px',
              padding: '0.4rem 0.65rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(3px)'
            }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#4338ca', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>
                SAMEER
              </div>
              <p style={{ margin: 0, fontSize: '0.78rem', fontStyle: 'italic', color: '#0f172a', lineHeight: 1.3 }}>
                "{sameerShort}"
              </p>
              {/* Pointer tail */}
              <div style={{
                position: 'absolute',
                bottom: '-8px',
                right: '15%',
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '8px solid #4338ca'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-6px',
                right: '16%',
                width: 0,
                height: 0,
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderTop: '6px solid #ffffff'
              }} />
            </div>

            {/* Akshay Small Cloud (Top Right: 5% right, 6% top, width 26%) */}
            <div style={{
              position: 'absolute',
              top: '6%',
              right: '5%',
              width: '26%',
              background: 'rgba(255, 255, 255, 0.96)',
              border: '2px solid #0284c7',
              borderRadius: '8px',
              padding: '0.4rem 0.65rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(3px)'
            }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#0284c7', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>
                AKSHAY
              </div>
              <p style={{ margin: 0, fontSize: '0.78rem', fontStyle: 'italic', color: '#0f172a', lineHeight: 1.3 }}>
                "{akshayShort}"
              </p>
              {/* Pointer tail pointing toward Akshay */}
              <div style={{
                position: 'absolute',
                bottom: '-8px',
                left: '15%',
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '8px solid #0284c7'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-6px',
                left: '16%',
                width: 0,
                height: 0,
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderTop: '6px solid #ffffff'
              }} />
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
