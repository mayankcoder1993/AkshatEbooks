import React, { useState } from 'react'
import act01Scene03Img from '../books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene03_akshay_soaked_admit_card.jpg'
import act01Scene13Img from '../books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene13_students_running_exam_gates.jpg'
import act01Scene11Img from '../books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene11_sameer_diagnostic_slate_14ms.jpg'
import cableImage from '../books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch01-scene2-panel2-modern-network-cable.jpg'

export default function DialogueTestLab({ onBackToBook }) {
  const [previewWidth, setPreviewWidth] = useState('100%')
  const [workbenchLayout, setWorkbenchLayout] = useState('sequential') // 'sequential' (default full width), 'split'
  const [selectedVariant, setSelectedVariant] = useState('both') // 'both', 'variantA', 'variantB'

  const sameerShort = 'Does the menu live inside that tablet?'
  const akshayShort = 'No, it fetches it across the campus network.'

  const isSplit = workbenchLayout === 'split' && previewWidth === '100%'
  const isStacked = !isSplit

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.5rem 1rem', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1e293b' }}>
      {/* Top Header */}
      <div style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '1.25rem', marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              STEP 2 PROTOTYPE · INSIDE-IMAGE DIALOGUE LAB
            </div>
            <h1 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>
              Speech Balloon Delivery: Inside-Image Prototypes
            </h1>
            <p style={{ margin: '0.5rem 0 0', color: '#475569', fontSize: '0.95rem' }}>
              Comparing <strong>Variant A (Dynamic Inside-Image SVG Vector Overlay)</strong> vs <strong>Variant B (Floating HTML/CSS Balloon Inside Frame)</strong> for Act 1 Scene 1. No more stacked cards outside the artwork!
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

        {/* Viewport Resize & Layout Controls */}
        <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', background: '#f8fafc', padding: '0.6rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#475569' }}>Filter Comparison:</span>
            <button
              onClick={() => setSelectedVariant('both')}
              style={{ padding: '0.3rem 0.7rem', borderRadius: '4px', border: selectedVariant === 'both' ? '2px solid #0284c7' : '1px solid #cbd5e1', background: selectedVariant === 'both' ? '#e0f2fe' : '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.78rem' }}
            >
              ⚖️ Side-by-Side (Both)
            </button>
            <button
              onClick={() => setSelectedVariant('variantA')}
              style={{ padding: '0.3rem 0.7rem', borderRadius: '4px', border: selectedVariant === 'variantA' ? '2px solid #0284c7' : '1px solid #cbd5e1', background: selectedVariant === 'variantA' ? '#e0f2fe' : '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.78rem' }}
            >
              🅰️ Variant A Only (Dynamic Vector SVG)
            </button>
            <button
              onClick={() => setSelectedVariant('variantB')}
              style={{ padding: '0.3rem 0.7rem', borderRadius: '4px', border: selectedVariant === 'variantB' ? '2px solid #0284c7' : '1px solid #cbd5e1', background: selectedVariant === 'variantB' ? '#e0f2fe' : '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.78rem' }}
            >
              🅱️ Variant B Only (HTML Comic Balloon Overlay)
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#475569' }}>Simulation Width:</span>
            <button
              onClick={() => setPreviewWidth('100%')}
              style={{ padding: '0.3rem 0.6rem', borderRadius: '4px', border: previewWidth === '100%' ? '2px solid #059669' : '1px solid #cbd5e1', background: previewWidth === '100%' ? '#dcfce7' : '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.75rem' }}
            >
              Desktop
            </button>
            <button
              onClick={() => setPreviewWidth('840px')}
              style={{ padding: '0.3rem 0.6rem', borderRadius: '4px', border: previewWidth === '840px' ? '2px solid #059669' : '1px solid #cbd5e1', background: previewWidth === '840px' ? '#dcfce7' : '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.75rem' }}
            >
              Tablet
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: previewWidth, margin: '0 auto', transition: 'max-width 0.25s ease' }}>
        
        {/* ========================================================================= */}
        {/* ========================================================================= */}
        {/* STEP 2: SIDE-BY-SIDE PROTOTYPE SHOWDOWN FOR SCENE 1 */}
        {/* ========================================================================= */}
        <section style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: selectedVariant === 'both' ? 'repeat(auto-fit, minmax(540px, 1fr))' : '1fr', gap: '1.5rem' }}>
            
            {/* VARIANT A: SVG VECTOR EMBEDDED INSIDE IMAGE */}
            {(selectedVariant === 'both' || selectedVariant === 'variantA') && (
              <div style={{ background: '#ffffff', borderRadius: '12px', border: '2px solid #0284c7', overflow: 'hidden', boxShadow: '0 8px 24px rgba(2, 132, 199, 0.12)' }}>
                {/* Header Badge */}
                <div style={{ background: '#0284c7', color: '#ffffff', padding: '0.65rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ background: '#ffffff', color: '#0284c7', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>VARIANT A</span>
                    <strong style={{ fontSize: '0.9rem' }}>Dynamic SVG Vector Balloon (Inside Canvas)</strong>
                  </div>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.2)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                    100% Vector · Sharp at any Zoom
                  </span>
                </div>

                {/* Subtitle / Context Bar */}
                <div style={{ background: '#0f172a', color: '#f8fafc', padding: '0.45rem 1rem', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Act 1 · Scene 1: The Melted Admit Card</span>
                  <span style={{ color: '#94a3b8' }}>08:40 AM · Campus Quadrangle</span>
                </div>

                {/* SVG 16:9 Canvas with Artwork + Vector Speech Bubble inside negative space */}
                <div style={{ position: 'relative', width: '100%', lineHeight: 0, background: '#f8fafc' }}>
                  <svg viewBox="0 0 1200 675" width="100%" height="auto" style={{ display: 'block' }}>
                    <defs>
                      <filter id="svg-bubble-shadow-a" x="-5%" y="-5%" width="115%" height="120%">
                        <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.3" />
                      </filter>
                    </defs>

                    {/* 16:9 Artwork */}
                    <image href={act01Scene03Img} x="0" y="0" width="1200" height="675" />

                    {/* Akshay's Speech Bubble in upper left negative sky/arch space with pointer tail targeting Akshay */}
                    <g filter="url(#svg-bubble-shadow-a)">
                      {/* Speech Bubble Body strictly in left 38% under the stone arch */}
                      <path
                        d="M 45 40 L 460 40 Q 485 40 485 65 L 485 185 Q 485 210 460 210 L 320 210 L 350 280 L 280 210 L 45 210 Q 25 210 25 185 L 25 65 Q 25 40 45 40 Z"
                        fill="#ffffff"
                        stroke="#0284c7"
                        strokeWidth="3.5"
                      />
                      {/* Speaker Badge */}
                      <rect x="45" y="55" width="90" height="22" rx="4" fill="#0284c7" />
                      <text x="90" y="70" fill="#ffffff" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="800" textAnchor="middle" letterSpacing="0.05em">
                        AKSHAY
                      </text>
                      {/* Speech Text inside bubble */}
                      <text x="45" y="105" fill="#0f172a" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="600" fontStyle="italic">
                        "My water bottle cap leaked in my bag!"
                      </text>
                      <text x="45" y="135" fill="#b91c1c" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="700">
                        "The admit card ink dissolved completely!"
                      </text>
                      <text x="45" y="165" fill="#475569" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">
                        Gates lock in 20 minutes... Where is my seat?!
                      </text>
                    </g>
                  </svg>
                </div>

                {/* Grounding Strip */}
                <div style={{ background: '#f8fafc', padding: '0.85rem 1rem', borderTop: '1px solid #e2e8f0', fontSize: '0.85rem', color: '#334155' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.1rem' }}>💡</span>
                    <span><strong>Pro:</strong> Scales mathematically with the image, perfectly responsive, zero clipping, pointer tail points right at Akshay's soaked bag.</span>
                  </div>
                </div>
              </div>
            )}

            {/* VARIANT B: DYNAMIC HTML/CSS FLOATING BALLOON INSIDE IMAGE CONTAINER */}
            {(selectedVariant === 'both' || selectedVariant === 'variantB') && (
              <div style={{ background: '#ffffff', borderRadius: '12px', border: '2px solid #7c3aed', overflow: 'hidden', boxShadow: '0 8px 24px rgba(124, 58, 237, 0.12)' }}>
                {/* Header Badge */}
                <div style={{ background: '#7c3aed', color: '#ffffff', padding: '0.65rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ background: '#ffffff', color: '#7c3aed', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>VARIANT B</span>
                    <strong style={{ fontSize: '0.9rem' }}>Floating HTML/CSS Balloon (Inside Image Frame)</strong>
                  </div>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.2)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                    Responsive HTML · Selectable Text
                  </span>
                </div>

                {/* Subtitle / Context Bar */}
                <div style={{ background: '#0f172a', color: '#f8fafc', padding: '0.45rem 1rem', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Act 1 · Scene 1: The Melted Admit Card</span>
                  <span style={{ color: '#94a3b8' }}>08:40 AM · Campus Quadrangle</span>
                </div>

                {/* Relative Image Container with Absolute Floating Balloon inside negative space */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', background: '#0f172a' }}>
                  <img
                    src={act01Scene03Img}
                    alt="Akshay panicked"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />

                  {/* Absolute Balloon Floating in upper left corner strictly within negative space (maxWidth: 34%) */}
                  <div style={{
                    position: 'absolute',
                    top: '4%',
                    left: '3%',
                    maxWidth: '34%',
                    background: 'rgba(255, 255, 255, 0.96)',
                    backdropFilter: 'blur(8px)',
                    border: '2.5px solid #7c3aed',
                    borderRadius: '12px',
                    padding: '0.45rem 0.75rem',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                    zIndex: 10
                  }}>
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                      <span style={{ background: '#7c3aed', color: '#fff', fontSize: '0.65rem', fontWeight: 800, padding: '0.12rem 0.35rem', borderRadius: '4px', letterSpacing: '0.04em' }}>
                        [1] AKSHAY
                      </span>
                      <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>In sheer panic</span>
                    </div>

                    {/* Dialogue Text */}
                    <p style={{ margin: 0, fontSize: 'clamp(0.7rem, 1vw, 0.8rem)', lineHeight: 1.35, color: '#0f172a', fontStyle: 'italic', fontWeight: 600 }}>
                      "My water bottle cap leaked! The ink is completely dissolved! Gates lock in twenty minutes... Where is my seat number?!"
                    </p>

                    {/* Comic Balloon Tail pointing towards Akshay */}
                    <div style={{
                      position: 'absolute',
                      bottom: '-10px',
                      right: '20px',
                      width: 0,
                      height: 0,
                      borderLeft: '9px solid transparent',
                      borderRight: '9px solid transparent',
                      borderTop: '10px solid #7c3aed'
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: '-7px',
                      right: '21px',
                      width: 0,
                      height: 0,
                      borderLeft: '8px solid transparent',
                      borderRight: '8px solid transparent',
                      borderTop: '8px solid #ffffff'
                    }} />
                  </div>
                </div>

                {/* Grounding Strip */}
                <div style={{ background: '#f8fafc', padding: '0.85rem 1rem', borderTop: '1px solid #e2e8f0', fontSize: '0.85rem', color: '#334155' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.1rem' }}>💡</span>
                    <span><strong>Pro:</strong> Easy to edit text, readers can copy/translate, uses crisp CSS typography and glassmorphism backdrop.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MULTI-CHARACTER BEAT DEMO: SCENE 1 SPLIT INTO TWO CUTS */}
        {/* ========================================================================= */}
        <section style={{ marginBottom: '2.5rem', background: '#ffffff', borderRadius: '12px', border: '2px solid #0f172a', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
          <div style={{ background: '#0f172a', color: '#f8fafc', padding: '0.65rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ background: '#eab308', color: '#000', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>MULTI-CHARACTER STORY BEAT</span>
              <strong style={{ fontSize: '0.9rem', letterSpacing: '0.02em' }}>Resolving the "Fellow Student" Visual Disconnect</strong>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Proper Comic Cut: Akshay (Solo) → Students Rushing Gates (Cutaway)</span>
          </div>

          <div style={{ padding: '1rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', fontSize: '0.88rem', color: '#334155' }}>
            <strong>Why this fixes your observation:</strong> Previously, 4 dialogues (2 from Akshay and 2 from Fellow Student) were crammed onto 1 solo picture of Akshay. Instead, a real comic cuts between the speaker and the reaction!
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '1.25rem', padding: '1rem', background: '#ffffff' }}>
            {/* Beat 1: Akshay panicked - bubble placed in top-left negative space (under arch, away from center face) */}
            <div style={{ border: '1.5px solid #cbd5e1', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ background: '#f1f5f9', padding: '0.4rem 0.8rem', fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>BEAT 1 · AKSHAY IN PANIC</span>
                <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800 }}>SPEAKER 1 OF 3</span>
              </div>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#0f172a' }}>
                <img src={act01Scene03Img} alt="Akshay" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {/* Embedded Bubble - kept strictly to the left 36% under the stone arch so Akshay's face and admit card are 100% visible */}
                <div style={{
                  position: 'absolute',
                  top: '5%',
                  left: '4%',
                  maxWidth: '36%',
                  background: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(6px)',
                  border: '2px solid #0284c7',
                  borderRadius: '12px',
                  padding: '0.45rem 0.75rem',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                  zIndex: 5
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.15rem' }}>
                    <span style={{ background: '#0284c7', color: '#ffffff', fontSize: '0.65rem', fontWeight: 800, padding: '0.1rem 0.35rem', borderRadius: '3px' }}>
                      [1] FIRST
                    </span>
                    <strong style={{ fontSize: '0.7rem', color: '#0284c7', letterSpacing: '0.04em' }}>
                      AKSHAY
                    </strong>
                  </div>
                  <span style={{ fontSize: 'clamp(0.72rem, 1.1vw, 0.82rem)', fontStyle: 'italic', color: '#0f172a', fontWeight: 600, lineHeight: 1.35, display: 'block' }}>
                    "My water bottle leaked! The ink is completely dissolved!"
                  </span>
                  {/* Pointer tail pointing toward Akshay */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-9px',
                    right: '15px',
                    width: 0,
                    height: 0,
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '9px solid #0284c7'
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '-6px',
                    right: '16px',
                    width: 0,
                    height: 0,
                    borderLeft: '7px solid transparent',
                    borderRight: '7px solid transparent',
                    borderTop: '7px solid #ffffff'
                  }} />
                </div>
              </div>
            </div>

            {/* Beat 2: Fellow Students rushing gates yelling back - bubble placed in upper negative sky, 34% width, clearing character heads */}
            <div style={{ border: '1.5px solid #cbd5e1', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ background: '#f1f5f9', padding: '0.4rem 0.8rem', fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>BEAT 2 · FELLOW STUDENTS RUSHING EXAM GATES</span>
                <span style={{ background: '#fef3c7', color: '#92400e', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800 }}>SPEAKER 2 OF 3</span>
              </div>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#0f172a' }}>
                <img src={act01Scene13Img} alt="Students rushing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {/* Embedded Bubble - placed in empty upper-left sky and stone pillar, compact width 35%, totally clearing students' heads and faces */}
                <div style={{
                  position: 'absolute',
                  top: '4%',
                  left: '3%',
                  maxWidth: '35%',
                  background: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(6px)',
                  border: '2px solid #ca8a04',
                  borderRadius: '12px',
                  padding: '0.45rem 0.75rem',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                  zIndex: 5
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.15rem' }}>
                    <span style={{ background: '#ca8a04', color: '#ffffff', fontSize: '0.65rem', fontWeight: 800, padding: '0.1rem 0.35rem', borderRadius: '3px' }}>
                      [2] NEXT
                    </span>
                    <strong style={{ fontSize: '0.7rem', color: '#a16207', letterSpacing: '0.04em' }}>
                      FELLOW STUDENTS
                    </strong>
                  </div>
                  <span style={{ fontSize: 'clamp(0.7rem, 1.05vw, 0.8rem)', fontStyle: 'italic', color: '#0f172a', fontWeight: 600, lineHeight: 1.35, display: 'block' }}>
                    "Gates lock in twenty minutes, Akshay! Open the portal on your phone or you will fail the year!"
                  </span>
                  {/* Pointer tail pointing toward running students */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-9px',
                    right: '25px',
                    width: 0,
                    height: 0,
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '9px solid #ca8a04'
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '-6px',
                    right: '26px',
                    width: 0,
                    height: 0,
                    borderLeft: '7px solid transparent',
                    borderRight: '7px solid transparent',
                    borderTop: '7px solid #ffffff'
                  }} />
                </div>
              </div>
            </div>

            {/* Beat 3: Principal Architect Sameer arrives with Chai & Terminal - bubble placed in upper right negative space */}
            <div style={{ border: '1.5px solid #cbd5e1', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ background: '#f1f5f9', padding: '0.4rem 0.8rem', fontSize: '0.78rem', fontWeight: 700, color: '#475569', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>BEAT 3 · ARCHITECT SAMEER 14ms INTERVENTION</span>
                <span style={{ background: '#ede9fe', color: '#5b21b6', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800 }}>SPEAKER 3 OF 3</span>
              </div>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#0f172a' }}>
                <img src={act01Scene11Img} alt="Sameer diagnostic slate" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {/* Embedded Bubble - placed in upper-right sky/canopy negative space, 36% width, clearing Sameer and Akshay */}
                <div style={{
                  position: 'absolute',
                  top: '5%',
                  right: '4%',
                  maxWidth: '36%',
                  background: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(6px)',
                  border: '2px solid #4f46e5',
                  borderRadius: '12px',
                  padding: '0.45rem 0.75rem',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                  zIndex: 5
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.15rem' }}>
                    <span style={{ background: '#4f46e5', color: '#ffffff', fontSize: '0.65rem', fontWeight: 800, padding: '0.1rem 0.35rem', borderRadius: '3px' }}>
                      [3] ARCHITECT
                    </span>
                    <strong style={{ fontSize: '0.7rem', color: '#4f46e5', letterSpacing: '0.04em' }}>
                      SAMEER
                    </strong>
                  </div>
                  <span style={{ fontSize: 'clamp(0.7rem, 1.05vw, 0.8rem)', fontStyle: 'italic', color: '#0f172a', fontWeight: 600, lineHeight: 1.35, display: 'block' }}>
                    "Bypass the browser waterfall, Akshay. Query the wire socket directly: Hall 302, Seat B-14 in 14ms!"
                  </span>
                  {/* Pointer tail pointing toward Sameer */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-9px',
                    left: '20px',
                    width: 0,
                    height: 0,
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '9px solid #4f46e5'
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: '21px',
                    width: 0,
                    height: 0,
                    borderLeft: '7px solid transparent',
                    borderRight: '7px solid transparent',
                    borderTop: '7px solid #ffffff'
                  }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}

        {/* ========================================================================= */}
        {/* PART 2: THE REFINED PROGRAMMING INTERFACE WORKBENCH (UNCROPPED) */}
        {/* ========================================================================= */}
        <section style={{ marginBottom: '3rem', background: '#ffffff', borderRadius: '12px', border: '2px solid #0f172a', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
          {/* Title Bar with Status and Controls */}
          <div style={{ background: '#0f172a', color: '#f8fafc', padding: '0.65rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ display: 'flex', gap: '5px' }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              </div>
              <strong style={{ fontSize: '0.9rem', letterSpacing: '0.02em', marginLeft: '0.4rem' }}>
                API TESTING WORKBENCH · PINPOINT TRANSACTION INSPECTOR
              </strong>
            </div>
            
            {/* PORT 3000 WITH IMMEDIATE PINPOINT MARKER [1] & INLINE EXPLANATION */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#1e293b', border: '1.5px solid #0284c7', padding: '0.25rem 0.6rem', borderRadius: '6px' }}>
                <span style={{ background: '#0284c7', color: '#ffffff', fontSize: '0.68rem', fontWeight: 800, padding: '0.1rem 0.35rem', borderRadius: '3px' }}>
                  [1]
                </span>
                <span style={{ color: '#38bdf8', fontSize: '0.78rem', fontFamily: 'monospace', fontWeight: 700 }}>
                  PORT: 3000
                </span>
                <span style={{ color: '#94a3b8', fontSize: '0.72rem', borderLeft: '1px solid #475569', paddingLeft: '0.4rem' }}>
                  Designated socket door listening on local host
                </span>
              </div>
              <span style={{ background: '#166534', color: '#bbf7d0', fontSize: '0.72rem', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                SERVER: ACTIVE
              </span>
            </div>
          </div>

          {/* Workbench Body (Flexible Split or Stacked Grid) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isStacked ? '1fr' : '1.05fr 0.95fr',
            borderBottom: '1px solid #cbd5e1',
            background: '#ffffff'
          }}>
            
            {/* INPUT PANE (STEP 1) */}
            <div style={{
              padding: '1.25rem',
              borderRight: isStacked ? 'none' : '1px solid #cbd5e1',
              borderBottom: isStacked ? '1px solid #cbd5e1' : 'none',
              background: '#ffffff',
              minWidth: 0
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0284c7', letterSpacing: '0.05em' }}>
                  STEP 1 · REQUEST INPUT (CLIENT DISPATCH)
                </span>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>protocol: HTTP/1.1</span>
              </div>

              {/* Method + URL Bar with Immediate Pinpoint Marker [2] */}
              <div style={{ background: '#f8fafc', padding: '0.55rem 0.75rem', borderRadius: '8px', border: '1.5px solid #cbd5e1', marginBottom: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span style={{ background: '#10b981', color: '#ffffff', fontWeight: 800, fontSize: '0.7rem', padding: '0.15rem 0.35rem', borderRadius: '3px' }}>
                      [2]
                    </span>
                    <span style={{ background: '#10b981', color: '#ffffff', fontWeight: 800, fontSize: '0.75rem', padding: '0.18rem 0.5rem', borderRadius: '4px' }}>
                      POST
                    </span>
                  </div>
                  <code style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: 700, wordBreak: 'break-all' }}>
                    http://localhost:3000/catalog
                  </code>
                </div>
                {/* Immediate Inline Explanation attached directly under the URL bar */}
                <div style={{ marginTop: '0.35rem', fontSize: '0.75rem', color: '#047857', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>↳</span>
                  <span><strong>Action:</strong> Commands server to create and store a brand-new resource entity in database.</span>
                </div>
              </div>

              {/* Code Box: Request Payload with Immediate Pinpoint Marker [3] */}
              <div style={{ background: '#0f172a', borderRadius: '8px', overflow: 'hidden', border: '1.5px solid #1e293b' }}>
                <div style={{ background: '#1e293b', padding: '0.45rem 0.75rem', fontSize: '0.74rem', color: '#94a3b8', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ background: '#38bdf8', color: '#0f172a', fontWeight: 800, fontSize: '0.68rem', padding: '0.1rem 0.35rem', borderRadius: '3px' }}>
                      [3]
                    </span>
                    <span style={{ color: '#f8fafc', fontWeight: 700 }}>Request Body (Payload)</span>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Content-Type: application/json</span>
                </div>
                {/* Pre with auto text-wrapping */}
                <pre style={{
                  margin: 0,
                  padding: '0.85rem 1rem',
                  color: '#f8fafc',
                  fontSize: '0.84rem',
                  fontFamily: 'Consolas, Monaco, monospace',
                  lineHeight: 1.5,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  overflowX: 'auto'
                }}>
{`{
  "id": "CS101",
  "title": "Foundations of Computer Systems",
  "department": "Computer Science",
  "credits": 4
}`}
                </pre>
                {/* Immediate Inline Explanation inside the payload card */}
                <div style={{ background: '#111e33', padding: '0.4rem 0.75rem', borderTop: '1px solid #1e293b', fontSize: '0.74rem', color: '#7dd3fc', lineHeight: 1.4 }}>
                  <strong>↳ Payload Note:</strong> Raw byte stream transmitted over TCP socket; requires <code style={{ color: '#fff', background: '#1e293b', padding: '0.1rem 0.3rem', borderRadius: '3px' }}>express.json()</code> to buffer into memory.
                </div>
              </div>
            </div>

            {/* PROCESSING & OUTPUT PANE (STEP 2) */}
            <div style={{
              padding: '1.25rem',
              background: '#f8fafc',
              minWidth: 0
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6366f1', letterSpacing: '0.05em' }}>
                  STEP 2 · PROCESSING & DETERMINISTIC OUTPUT
                </span>
                
                {/* Immediate Pinpoint Marker [4] on 201 Created */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ background: '#16a34a', color: '#ffffff', fontWeight: 800, fontSize: '0.68rem', padding: '0.12rem 0.35rem', borderRadius: '3px' }}>
                    [4]
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 800, background: '#dcfce7', padding: '0.15rem 0.45rem', borderRadius: '4px', border: '1px solid #bbf7d0' }}>
                    ✓ 201 CREATED
                  </span>
                </div>
              </div>

              {/* Processing Stream Status */}
              <div style={{ background: '#e0e7ff', border: '1px solid #c7d2fe', borderRadius: '6px', padding: '0.5rem 0.75rem', marginBottom: '0.85rem', fontSize: '0.78rem', color: '#3730a3', lineHeight: 1.45 }}>
                <div style={{ fontWeight: 700, marginBottom: '0.2rem' }}>⚙️ Wire Processing Lifecycle:</div>
                <div>1. TCP handshake accepted on <strong>Port 3000</strong> [1]</div>
                <div>2. Buffer readable byte stream [3] via <code style={{ background: '#fff', padding: '0.1rem 0.3rem', borderRadius: '3px' }}>express.json()</code></div>
                <div>3. Persist record into catalog and echo HTTP <strong>201 Created</strong> [4]</div>
              </div>

              {/* Code Box: Response Body with Immediate Marker [4] Explanation */}
              <div style={{ background: '#0f172a', borderRadius: '8px', overflow: 'hidden', border: '1.5px solid #1e293b' }}>
                <div style={{ background: '#1e293b', padding: '0.45rem 0.75rem', fontSize: '0.74rem', color: '#94a3b8', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ color: '#4ade80', fontWeight: 800 }}>Server Confirmation Response</span>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Latency: 14 ms · Size: 312 B</span>
                </div>
                {/* Pre with auto text-wrapping */}
                <pre style={{
                  margin: 0,
                  padding: '0.85rem 1rem',
                  color: '#4ade80',
                  fontSize: '0.84rem',
                  fontFamily: 'Consolas, Monaco, monospace',
                  lineHeight: 1.5,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  overflowX: 'auto'
                }}>
{`{
  "id": "CS101",
  "title": "Foundations of Computer Systems",
  "department": "Computer Science",
  "credits": 4,
  "status": "Active"
}`}
                </pre>
                {/* Immediate Inline Explanation attached directly to 201 response */}
                <div style={{ background: '#062817', padding: '0.4rem 0.75rem', borderTop: '1px solid #14532d', fontSize: '0.74rem', color: '#86efac', lineHeight: 1.4 }}>
                  <strong>↳ Status 201 Meaning:</strong> Explicit proof that data survived wire transfer and is written into database memory.
                </div>
              </div>
            </div>
          </div>

          {/* LOWER SECTION: TOKEN EXPLANATIONS & SENIOR SAVIOR */}
          <div style={{ padding: '1.25rem', background: '#ffffff' }}>
            <h4 style={{ margin: '0 0 0.75rem 0', fontSize: '0.92rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>🔎</span> Chunked Code Breakdown & Token Callouts
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: isStacked ? '1fr' : '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0.7rem 0.85rem', fontSize: '0.82rem' }}>
                <strong style={{ color: '#0284c7' }}>👉 [3] app.use(express.json())</strong>
                <p style={{ margin: '0.25rem 0 0', color: '#475569', lineHeight: 1.45 }}>
                  Buffers incoming TCP readable stream packets until complete, then parses the JSON string into <code style={{ background: '#f1f5f9', padding: '0.1rem 0.3rem', borderRadius: '3px' }}>req.body</code>.
                </p>
              </div>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0.7rem 0.85rem', fontSize: '0.82rem' }}>
                <strong style={{ color: '#10b981' }}>👉 [4] res.status(201).json(record)</strong>
                <p style={{ margin: '0.25rem 0 0', color: '#475569', lineHeight: 1.45 }}>
                  Signals the client that a new entity was created successfully and echoes back the confirmed database record over the wire.
                </p>
              </div>
            </div>

            {/* Senior Savior 4-Part Summary */}
            <div style={{ background: '#fef2f2', border: '1.5px solid #fecaca', borderRadius: '8px', padding: '0.85rem 1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                <span style={{ fontSize: '1.05rem' }}>🛡️</span>
                <strong style={{ fontSize: '0.85rem', color: '#991b1b' }}>SENIOR SAVIOR · ARCHITECTURAL TRAP & GOLDEN RULE</strong>
              </div>
              <div style={{ fontSize: '0.83rem', color: '#7f1d1d', lineHeight: 1.5 }}>
                <div><strong>The Trap:</strong> Forgetting body parser middleware, causing <code style={{ background: '#fee2e2', padding: '0.1rem 0.3rem', borderRadius: '3px' }}>req.body</code> to be undefined and crashing the handler with a runtime TypeError.</div>
                <div style={{ marginTop: '0.3rem' }}><strong>The Golden Rule:</strong> An HTTP server is a streaming engine; always mount stream buffering middleware before declaring POST, PUT, or PATCH handlers.</div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
