import React from 'react'

export default function PrefaceHeader({ brand, book }) {
  return (
    <section className="preface-publisher-banner">
      <div className="publisher-insignia-row">
        <div className="insignia-badge tsg-badge">
          {brand?.tsgCrest ? (
            <img
              src={brand.tsgCrest}
              alt="The Sinha Family Group Crest"
              className="publisher-crest-img"
            />
          ) : (
            <div className="crest-fallback">TSG</div>
          )}
          <span className="insignia-label">The Sinha Family Group</span>
        </div>

        <div className="publisher-identity-center">
          <span className="publisher-eyebrow">OFFICIAL PUBLISHER IDENTITY</span>
          <h2 className="publisher-imprint-title">{brand?.imprint || 'Sarva Gyana Koshah Books'}</h2>
          <p className="publisher-group-subtitle">A Division of {brand?.group || 'The Sinha Family Group'}</p>
          <p className="publisher-tagline">"{brand?.tagline || 'The Treasury of All Knowledge'}"</p>
          <div className="publisher-meta-tags">
            <span className="pub-tag">Founder: Akshat Sinha</span>
            <span className="pub-tag">Universal Standard</span>
            <span className="pub-tag">Edition 1.0</span>
          </div>
        </div>

        <div className="insignia-badge sgk-badge">
          {brand?.imprintMark ? (
            <img
              src={brand.imprintMark}
              alt="Sarva Gyana Koshah Imprint Mark"
              className="publisher-mark-img"
            />
          ) : (
            <div className="mark-fallback">SGK</div>
          )}
          <span className="insignia-label">Sarva Gyana Koshah</span>
        </div>
      </div>

      <div className="publisher-commitments-grid">
        <div className="commitment-card">
          <div className="commitment-num">01</div>
          <strong className="commitment-title">First Principles</strong>
          <p className="commitment-desc">We build deep mental models from the physical wire and memory up, rejecting rote copy and paste recipes.</p>
        </div>
        <div className="commitment-card">
          <div className="commitment-num">02</div>
          <strong className="commitment-title">Light Heritage Aesthetics</strong>
          <p className="commitment-desc">High contrast reading clarity inspired by Indian artistic traditions and double line technical precision.</p>
        </div>
        <div className="commitment-card">
          <div className="commitment-num">03</div>
          <strong className="commitment-title">Verified Executable Truth</strong>
          <p className="commitment-desc">Every architectural pattern, terminal command, and code line is backed by runnable automated test harnesses.</p>
        </div>
        <div className="commitment-card">
          <div className="commitment-num">04</div>
          <strong className="commitment-title">Enduring Mastery</strong>
          <p className="commitment-desc">Libraries and tools evolve rapidly, but underlying network protocols and logical reasoning remain timeless.</p>
        </div>
      </div>

      <div className="about-book-divider">
        <span className="divider-line" />
        <span className="divider-badge">ABOUT THIS BOOK</span>
        <span className="divider-line" />
      </div>
    </section>
  )
}
