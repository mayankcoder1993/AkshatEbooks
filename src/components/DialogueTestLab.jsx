import React, { useState } from 'react'
import cableImage from '../books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch01-scene2-panel2-modern-network-cable.jpg'

export default function DialogueTestLab({ onBackToBook }) {
  const [activeTab, setActiveTab] = useState('all') // 'all', 'method1', 'method2', 'method3'
  const [previewWidth, setPreviewWidth] = useState('100%') // '100%', '768px', '480px'

  const sameerSpeech = 'When you press the menu app, does the menu live inside that tablet?'
  const akshaySpeech = 'No, it fetches it across the campus network. The tablet just displays what the network returns.'

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1e293b' }}>
      {/* Header */}
      <div style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '1.25rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              LAB PROTOTYPE · COMIC DIALOGUE COMPARISON
            </div>
            <h1 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>
              Dialogue Delivery Methods Comparison
            </h1>
            <p style={{ margin: '0.5rem 0 0', color: '#64748b', fontSize: '0.95rem' }}>
              Evaluating 3 distinct approaches using the exact same uncropped 16:9 illustration (<code style={{ background: '#f1f5f9', padding: '0.1rem 0.3rem', borderRadius: '3px' }}>ch01-scene2-panel2-modern-network-cable.jpg</code>) and dialogue.
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
        <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>Simulate Viewport Width:</span>
          <button
            onClick={() => setPreviewWidth('100%')}
            style={{ padding: '0.4rem 0.8rem', borderRadius: '4px', border: previewWidth === '100%' ? '2px solid #0284c7' : '1px solid #cbd5e1', background: previewWidth === '100%' ? '#e0f2fe' : '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.8rem' }}
          >
            🖥️ Desktop (Full Width 100%)
          </button>
          <button
            onClick={() => setPreviewWidth('768px')}
            style={{ padding: '0.4rem 0.8rem', borderRadius: '4px', border: previewWidth === '768px' ? '2px solid #0284c7' : '1px solid #cbd5e1', background: previewWidth === '768px' ? '#e0f2fe' : '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.8rem' }}
          >
            📱 Tablet (768px)
          </button>
          <button
            onClick={() => setPreviewWidth('480px')}
            style={{ padding: '0.4rem 0.8rem', borderRadius: '4px', border: previewWidth === '480px' ? '2px solid #0284c7' : '1px solid #cbd5e1', background: previewWidth === '480px' ? '#e0f2fe' : '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.8rem' }}
          >
            📱 Mobile (480px)
          </button>
        </div>
      </div>

      <div style={{ maxWidth: previewWidth, margin: '0 auto', transition: 'max-width 0.25s ease' }}>
        {/* ========================================================================= */}
        {/* METHOD 1: Integrated Comic Strip Frame */}
        {/* ========================================================================= */}
        <section style={{ marginBottom: '3.5rem', background: '#ffffff', borderRadius: '12px', border: '2px solid #cbd5e1', padding: '1.5rem', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
            <div>
              <span style={{ background: '#6366f1', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, marginRight: '0.5rem' }}>
                METHOD 1
              </span>
              <strong style={{ fontSize: '1.1rem', color: '#0f172a' }}>Integrated Comic Strip Frame (Cell Architecture)</strong>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Webtoon / Manga Standard · 0% Image Covered</span>
          </div>

          <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '1.25rem' }}>
            <strong>How it works:</strong> The dialogue balloons are integrated into the frame directly above and below the illustration with directional pointer tails. The 16:9 art is 100% visible, completely uncropped, and characters are never obscured.
          </p>

          {/* Comic Frame Container */}
          <div style={{ border: '2px solid #1e293b', borderRadius: '10px', background: '#f8fafc', padding: '1rem', overflow: 'hidden' }}>
            {/* Top Speech Balloon (Sameer) */}
            <div style={{ position: 'relative', background: '#ffffff', border: '2px solid #6366f1', borderRadius: '12px', padding: '0.75rem 1rem', marginBottom: '0.75rem', maxWidth: '85%', marginLeft: '2%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '1.1rem' }}>🧘‍♂️</span>
                <strong style={{ fontSize: '0.8rem', color: '#4338ca', letterSpacing: '0.05em' }}>SAMEER · STAFF ARCHITECT</strong>
              </div>
              <p style={{ margin: 0, fontSize: '0.95rem', fontStyle: 'italic', color: '#1e293b', lineHeight: 1.4 }}>
                "{sameerSpeech}"
              </p>
              {/* Downward pointer tail directed at Sameer */}
              <div style={{ position: 'absolute', bottom: '-10px', left: '25%', width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '10px solid #6366f1' }} />
              <div style={{ position: 'absolute', bottom: '-8px', left: '26%', width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '8px solid #ffffff' }} />
            </div>

            {/* Uncropped 16:9 Artwork */}
            <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid #cbd5e1', lineHeight: 0 }}>
              <img
                src={cableImage}
                alt="Scene Illustration: Sameer holding blue network cable with Akshay"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
              />
            </div>

            {/* Bottom Speech Balloon (Akshay) */}
            <div style={{ position: 'relative', background: '#ffffff', border: '2px solid #0284c7', borderRadius: '12px', padding: '0.75rem 1rem', marginTop: '0.75rem', maxWidth: '85%', marginLeft: 'auto', marginRight: '2%' }}>
              {/* Upward pointer tail directed at Akshay */}
              <div style={{ position: 'absolute', top: '-10px', right: '30%', width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: '10px solid #0284c7' }} />
              <div style={{ position: 'absolute', top: '-8px', right: '31%', width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderBottom: '8px solid #ffffff' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '1.1rem' }}>👨‍💻</span>
                <strong style={{ fontSize: '0.8rem', color: '#0284c7', letterSpacing: '0.05em' }}>AKSHAY · JUNIOR QA</strong>
              </div>
              <p style={{ margin: 0, fontSize: '0.95rem', fontStyle: 'italic', color: '#1e293b', lineHeight: 1.4 }}>
                "{akshaySpeech}"
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* METHOD 2: Vector SVG Canvas Composite */}
        {/* ========================================================================= */}
        <section style={{ marginBottom: '3.5rem', background: '#ffffff', borderRadius: '12px', border: '2px solid #cbd5e1', padding: '1.5rem', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
            <div>
              <span style={{ background: '#059669', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, marginRight: '0.5rem' }}>
                METHOD 2
              </span>
              <strong style={{ fontSize: '1.1rem', color: '#0f172a' }}>Vector SVG Composite (Balloons Inside Canvas Coordinates)</strong>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>SVG ViewBox 1376×768 · Symmetrical Vector Scaling</span>
          </div>

          <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '1.25rem' }}>
            <strong>How it works:</strong> The background JPEG is loaded into an SVG container (<code style={{ background: '#f1f5f9', padding: '0.1rem 0.3rem', borderRadius: '3px' }}>viewBox="0 0 1376 768"</code>). Vector speech balloons are drawn inside the canvas coordinates with pointer tails targeting Sameer (left) and Akshay (right).
          </p>

          {/* SVG Canvas Container */}
          <div style={{ border: '2px solid #1e293b', borderRadius: '10px', overflow: 'hidden', lineHeight: 0, background: '#0f172a' }}>
            <svg viewBox="0 0 1376 768" width="100%" height="auto" style={{ display: 'block' }}>
              <defs>
                <filter id="balloon-shadow" x="-5%" y="-5%" width="115%" height="115%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* 1. Base 16:9 Illustration */}
              <image href={cableImage} x="0" y="0" width="1376" height="768" preserveAspectRatio="xMidYMid slice" />

              {/* 2. Sameer Speech Balloon (Left Upper Area: x: 80, y: 55, w: 520, h: 140) */}
              <g filter="url(#balloon-shadow)">
                {/* Speech Bubble Path with Tail pointing to Sameer at (470, 220) */}
                <path
                  d="M 100 65 L 560 65 Q 580 65 580 85 L 580 175 Q 580 195 560 195 L 430 195 L 470 230 L 400 195 L 100 195 Q 80 195 80 175 L 80 85 Q 80 65 100 65 Z"
                  fill="#ffffff"
                  stroke="#4338ca"
                  strokeWidth="3.5"
                />
                {/* Speaker Badge */}
                <text x="105" y="98" fill="#4338ca" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="bold" letterSpacing="0.05em">
                  🧘‍♂️ SAMEER · STAFF ARCHITECT
                </text>
                {/* Speech Text */}
                <text x="105" y="130" fill="#0f172a" fontFamily="system-ui, sans-serif" fontSize="19" fontStyle="italic">
                  "When you press the menu app, does
                </text>
                <text x="105" y="160" fill="#0f172a" fontFamily="system-ui, sans-serif" fontSize="19" fontStyle="italic">
                  the menu live inside that tablet?"
                </text>
              </g>

              {/* 3. Akshay Speech Balloon (Right Upper Area: x: 740, y: 55, w: 560, h: 145) */}
              <g filter="url(#balloon-shadow)">
                {/* Speech Bubble Path with Tail pointing to Akshay at (770, 240) */}
                <path
                  d="M 760 65 L 1280 65 Q 1300 65 1300 85 L 1300 180 Q 1300 200 1280 200 L 840 200 L 775 240 L 810 200 L 760 200 Q 740 200 740 180 L 740 85 Q 740 65 760 65 Z"
                  fill="#ffffff"
                  stroke="#0284c7"
                  strokeWidth="3.5"
                />
                {/* Speaker Badge */}
                <text x="765" y="98" fill="#0284c7" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="bold" letterSpacing="0.05em">
                  👨‍💻 AKSHAY · JUNIOR QA
                </text>
                {/* Speech Text */}
                <text x="765" y="128" fill="#0f172a" fontFamily="system-ui, sans-serif" fontSize="18" fontStyle="italic">
                  "No, it fetches it across the campus network.
                </text>
                <text x="765" y="156" fill="#0f172a" fontFamily="system-ui, sans-serif" fontSize="18" fontStyle="italic">
                  The tablet just displays what the network returns."
                </text>
              </g>
            </svg>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* METHOD 3: HTML Percentage Floating Balloons */}
        {/* ========================================================================= */}
        <section style={{ marginBottom: '2rem', background: '#ffffff', borderRadius: '12px', border: '2px solid #cbd5e1', padding: '1.5rem', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem' }}>
            <div>
              <span style={{ background: '#d97706', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, marginRight: '0.5rem' }}>
                METHOD 3
              </span>
              <strong style={{ fontSize: '1.1rem', color: '#0f172a' }}>HTML Percentage Floating Balloons (Overlay Container)</strong>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>CSS Absolute Percentages · Native DOM Selectable</span>
          </div>

          <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '1.25rem' }}>
            <strong>How it works:</strong> Floating HTML speech bubbles placed via percentage coordinates (<code style={{ background: '#f1f5f9', padding: '0.1rem 0.3rem', borderRadius: '3px' }}>top: 7%; left: 6%</code>) over a relative 16:9 container.
          </p>

          {/* Relative Overlay Container */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '1376 / 768', border: '2px solid #1e293b', borderRadius: '10px', overflow: 'hidden', background: '#f8fafc' }}>
            {/* Background Image */}
            <img
              src={cableImage}
              alt="Sameer and Akshay"
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />

            {/* Floating Balloon 1 (Sameer - Top Left) */}
            <div style={{
              position: 'absolute',
              top: '7%',
              left: '6%',
              width: '42%',
              background: 'rgba(255, 255, 255, 0.96)',
              border: '2px solid #4338ca',
              borderRadius: '10px',
              padding: '0.6rem 0.85rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(4px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                <span style={{ fontSize: '1rem' }}>🧘‍♂️</span>
                <strong style={{ fontSize: '0.75rem', color: '#4338ca', letterSpacing: '0.04em' }}>SAMEER</strong>
              </div>
              <p style={{ margin: 0, fontSize: '0.85rem', fontStyle: 'italic', color: '#0f172a', lineHeight: 1.35 }}>
                "{sameerSpeech}"
              </p>
              {/* CSS pointer tail */}
              <div style={{
                position: 'absolute',
                bottom: '-9px',
                left: '75%',
                width: 0,
                height: 0,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '9px solid #4338ca'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-7px',
                left: '76%',
                width: 0,
                height: 0,
                borderLeft: '7px solid transparent',
                borderRight: '7px solid transparent',
                borderTop: '7px solid #ffffff'
              }} />
            </div>

            {/* Floating Balloon 2 (Akshay - Top Right) */}
            <div style={{
              position: 'absolute',
              top: '7%',
              right: '6%',
              width: '42%',
              background: 'rgba(255, 255, 255, 0.96)',
              border: '2px solid #0284c7',
              borderRadius: '10px',
              padding: '0.6rem 0.85rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(4px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                <span style={{ fontSize: '1rem' }}>👨‍💻</span>
                <strong style={{ fontSize: '0.75rem', color: '#0284c7', letterSpacing: '0.04em' }}>AKSHAY</strong>
              </div>
              <p style={{ margin: 0, fontSize: '0.82rem', fontStyle: 'italic', color: '#0f172a', lineHeight: 1.35 }}>
                "{akshaySpeech}"
              </p>
              {/* CSS pointer tail pointing down towards Akshay */}
              <div style={{
                position: 'absolute',
                bottom: '-9px',
                left: '18%',
                width: 0,
                height: 0,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '9px solid #0284c7'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-7px',
                left: '19%',
                width: 0,
                height: 0,
                borderLeft: '7px solid transparent',
                borderRight: '7px solid transparent',
                borderTop: '7px solid #ffffff'
              }} />
            </div>
          </div>
        </section>

        {/* Comparison Summary Table */}
        <section style={{ background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', padding: '1.25rem', marginTop: '2rem' }}>
          <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '1.05rem', color: '#0f172a' }}>Technical Trade Off Summary</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: '#e2e8f0', textAlign: 'left' }}>
                <th style={{ padding: '0.5rem 0.75rem' }}>Method</th>
                <th style={{ padding: '0.5rem 0.75rem' }}>Artwork Coverage</th>
                <th style={{ padding: '0.5rem 0.75rem' }}>Responsive Behavior</th>
                <th style={{ padding: '0.5rem 0.75rem' }}>DOCX / Export Reliability</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '0.6rem 0.75rem', fontWeight: 700, color: '#6366f1' }}>Method 1: Integrated Frame</td>
                <td style={{ padding: '0.6rem 0.75rem' }}>100% visible (0% covered)</td>
                <td style={{ padding: '0.6rem 0.75rem' }}>Auto wraps text on any screen width</td>
                <td style={{ padding: '0.6rem 0.75rem', color: '#16a34a', fontWeight: 600 }}>100% Native Word Tables</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '0.6rem 0.75rem', fontWeight: 700, color: '#059669' }}>Method 2: Vector SVG Composite</td>
                <td style={{ padding: '0.6rem 0.75rem' }}>Over upper white wall space</td>
                <td style={{ padding: '0.6rem 0.75rem' }}>Scales symmetrically with ViewBox</td>
                <td style={{ padding: '0.6rem 0.75rem', color: '#16a34a', fontWeight: 600 }}>Bakeable via @resvg/resvg-js</td>
              </tr>
              <tr>
                <td style={{ padding: '0.6rem 0.75rem', fontWeight: 700, color: '#d97706' }}>Method 3: HTML Percentage Overlay</td>
                <td style={{ padding: '0.6rem 0.75rem' }}>Over upper white wall space</td>
                <td style={{ padding: '0.6rem 0.75rem' }}>May crowd small mobile viewports</td>
                <td style={{ padding: '0.6rem 0.75rem', color: '#dc2626', fontWeight: 600 }}>Falls back to text below image</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}
