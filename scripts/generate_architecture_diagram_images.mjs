import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

fs.mkdirSync('docs/assets', { recursive: true });

function renderSvgToPng(svgStr, outputPath) {
  const resvg = new Resvg(svgStr, {
    fitTo: { mode: 'width', value: 1600 }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  fs.writeFileSync(outputPath, pngBuffer);
  console.log(`Rendered: ${outputPath} (${(pngBuffer.length / 1024).toFixed(1)} KB)`);
}

// ============================================================================
// DIAGRAM 1: COMPLETE TECH STACK, PACKAGES & FRAMEWORKS ARCHITECTURE
// ============================================================================
const diagram1Svg = `
<svg width="1600" height="1050" viewBox="0 0 1600 1050" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="accentCyan" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="accentPurple" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <linearGradient id="accentEmerald" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#34d399"/>
    </linearGradient>
    <linearGradient id="accentAmber" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#0284c7" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bgGrad)"/>
  
  <!-- Subtle Grid Lines -->
  <g stroke="#334155" stroke-width="0.5" stroke-opacity="0.3">
    <line x1="100" y1="0" x2="100" y2="1050"/>
    <line x1="400" y1="0" x2="400" y2="1050"/>
    <line x1="800" y1="0" x2="800" y2="1050"/>
    <line x1="1200" y1="0" x2="1200" y2="1050"/>
    <line x1="1500" y1="0" x2="1500" y2="1050"/>
    <line x1="0" y1="120" x2="1600" y2="120"/>
    <line x1="0" y1="360" x2="1600" y2="360"/>
    <line x1="0" y1="600" x2="1600" y2="600"/>
    <line x1="0" y1="840" x2="1600" y2="840"/>
  </g>

  <!-- Title Header Banner -->
  <rect x="60" y="30" width="1480" height="75" rx="10" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
  <text x="90" y="65" fill="#f8fafc" font-size="24" font-weight="800" letter-spacing="0.04em">SARVA GYANA KOSHAH · COMPLETE SYSTEM TECH STACK AND PACKAGE ARCHITECTURE</text>
  <text x="90" y="90" fill="#94a3b8" font-size="14" font-weight="500">Decoupled 4-Tier Architecture · Node.js 20+ · React 18 · Vite 6 · FAISS · OpenCV · Newman · Multi-Format Export</text>
  <rect x="1380" y="45" width="130" height="40" rx="6" fill="#0284c7"/>
  <text x="1445" y="70" fill="#ffffff" font-size="13" font-weight="800" text-anchor="middle">PRODUCTION</text>

  <!-- ========================================================================= -->
  <!-- LAYER 4: PRESENTATION, CLIENT SHELL & IDE WORKBENCH -->
  <!-- ========================================================================= -->
  <rect x="60" y="130" width="1480" height="195" rx="12" fill="#0f172a" stroke="#0284c7" stroke-width="2" filter="url(#glow)"/>
  <rect x="60" y="130" width="1480" height="38" rx="12" fill="url(#accentCyan)"/>
  <rect x="60" y="156" width="1480" height="12" fill="#0284c7"/>
  <text x="85" y="156" fill="#ffffff" font-size="16" font-weight="800" letter-spacing="0.06em">LAYER 4: AUTHORING CLI, DESKTOP IDE WORKBENCHES &amp; PRESENTATION SHELL</text>
  <text x="1480" y="156" fill="#ffffff" font-size="13" font-weight="700" text-anchor="end">CLIENT TIER</text>

  <!-- Cards inside L4 -->
  <!-- Card 1: React & UI Engine -->
  <rect x="85" y="185" width="335" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="105" y="210" fill="#38bdf8" font-size="14" font-weight="700">UI &amp; Component Framework</text>
  <text x="105" y="235" fill="#f8fafc" font-size="13" font-weight="600">• React 18.3.1 (Virtual DOM &amp; Hooks)</text>
  <text x="105" y="255" fill="#94a3b8" font-size="12">• Blocks.jsx (Comic layout engine)</text>
  <text x="105" y="275" fill="#94a3b8" font-size="12">• publishing.css (Editorial styling)</text>
  <text x="105" y="295" fill="#94a3b8" font-size="12">• CSS Tokens: Terracotta, Ochre, Indigo</text>

  <!-- Card 2: Bundling & Live Preview -->
  <rect x="445" y="185" width="335" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="465" y="210" fill="#38bdf8" font-size="14" font-weight="700">Bundler &amp; Dev Environment</text>
  <text x="465" y="235" fill="#f8fafc" font-size="13" font-weight="600">• Vite 6.4.3 (ESM Dev Server)</text>
  <text x="465" y="255" fill="#94a3b8" font-size="12">• @vitejs/plugin-react 4.3.4</text>
  <text x="465" y="275" fill="#94a3b8" font-size="12">• Port 5173 (Host 0.0.0.0 allowlist)</text>
  <text x="465" y="295" fill="#94a3b8" font-size="12">• HMR instant visual feedback</text>

  <!-- Card 3: Domain Workbenches -->
  <rect x="805" y="185" width="335" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="825" y="210" fill="#38bdf8" font-size="14" font-weight="700">Interactive Workbenches</text>
  <text x="825" y="235" fill="#f8fafc" font-size="13" font-weight="600">• ApiInspector.jsx (cURL workbench)</text>
  <text x="825" y="255" fill="#94a3b8" font-size="12">• TerminalWindow.jsx (CLI visualizer)</text>
  <text x="825" y="275" fill="#94a3b8" font-size="12">• EvidenceBoard.jsx (Law courtroom)</text>
  <text x="825" y="295" fill="#94a3b8" font-size="12">• MarketScale.jsx (Econ simulator)</text>

  <!-- Card 4: CLI State Machine -->
  <rect x="1165" y="185" width="350" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="1185" y="210" fill="#38bdf8" font-size="14" font-weight="700">Authoring IDE / CLI</text>
  <text x="1185" y="235" fill="#f8fafc" font-size="13" font-weight="600">• Node.js 20+ / 22+ ESM native</text>
  <text x="1185" y="255" fill="#94a3b8" font-size="12">• Commander.js / scripts/ CLI tools</text>
  <text x="1185" y="275" fill="#94a3b8" font-size="12">• pipeline-state.json (Pausable stages)</text>
  <text x="1185" y="295" fill="#94a3b8" font-size="12">• Electron / Tauri Desktop Shell</text>

  <!-- Connector Arrow L4 -> L3 -->
  <path d="M 800 325 L 800 350" stroke="#0284c7" stroke-width="3" fill="none" marker-end="url(#arrow)"/>

  <!-- ========================================================================= -->
  <!-- LAYER 3: QUALITY GATES, COMPLIANCE AUDIT & TEST HARNESS -->
  <!-- ========================================================================= -->
  <rect x="60" y="355" width="1480" height="195" rx="12" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
  <rect x="60" y="355" width="1480" height="38" rx="12" fill="url(#accentEmerald)"/>
  <rect x="60" y="381" width="1480" height="12" fill="#059669"/>
  <text x="85" y="381" fill="#ffffff" font-size="16" font-weight="800" letter-spacing="0.06em">LAYER 3: AUTOMATED QUALITY GATES, LINTERS &amp; TEST VERIFICATION</text>
  <text x="1480" y="381" fill="#ffffff" font-size="13" font-weight="700" text-anchor="end">AUDIT ENGINE (≥ 90/100 THRESHOLD)</text>

  <!-- L3 Cards -->
  <!-- L3 Card 1: Chapter Auditor -->
  <rect x="85" y="410" width="335" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="105" y="435" fill="#34d399" font-size="14" font-weight="700">SGK Audit Engine</text>
  <text x="105" y="460" fill="#f8fafc" font-size="13" font-weight="600">• audit-chapter.mjs (47-pt rules)</text>
  <text x="105" y="480" fill="#94a3b8" font-size="12">• 7-Dimension scoring algorithm</text>
  <text x="105" y="500" fill="#94a3b8" font-size="12">• Visual density &amp; pacing linter</text>
  <text x="105" y="520" fill="#94a3b8" font-size="12">• Hard Fail vs Soft Warning gates</text>

  <!-- L3 Card 2: Rule 19 & Lexical Linter -->
  <rect x="445" y="410" width="335" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="465" y="435" fill="#34d399" font-size="14" font-weight="700">Lexical &amp; Syntax Compliance</text>
  <text x="465" y="460" fill="#f8fafc" font-size="13" font-weight="600">• rule19-checker.mjs (Zero dashes)</text>
  <text x="465" y="480" fill="#94a3b8" font-size="12">• Balloon linter: ≤ 120 chars cap</text>
  <text x="465" y="500" fill="#94a3b8" font-size="12">• Single speaker presence verifier</text>
  <text x="465" y="520" fill="#94a3b8" font-size="12">• Headroom bounding: top 4%–12%</text>

  <!-- L3 Card 3: Code & API Test Runner -->
  <rect x="805" y="410" width="335" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="825" y="435" fill="#34d399" font-size="14" font-weight="700">Code &amp; Wire Verification</text>
  <text x="825" y="460" fill="#f8fafc" font-size="13" font-weight="600">• Newman 6.2.2 (CLI Postman runner)</text>
  <text x="825" y="480" fill="#94a3b8" font-size="12">• mock-api-server.mjs (Port 5050)</text>
  <text x="825" y="500" fill="#94a3b8" font-size="12">• validate-all-snippets.mjs (47/47)</text>
  <text x="825" y="520" fill="#94a3b8" font-size="12">• REST, SOAP 1.2, OAuth, GraphQL</text>

  <!-- L3 Card 4: Schema Validation -->
  <rect x="1165" y="410" width="350" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="1185" y="435" fill="#34d399" font-size="14" font-weight="700">Schema &amp; Contract Engine</text>
  <text x="1185" y="460" fill="#f8fafc" font-size="13" font-weight="600">• Ajv 8.20.0 (JSON Schema validator)</text>
  <text x="1185" y="480" fill="#94a3b8" font-size="12">• ajv-formats 3.0.1</text>
  <text x="1185" y="500" fill="#94a3b8" font-size="12">• book.manifest.schema.json</text>
  <text x="1185" y="520" fill="#94a3b8" font-size="12">• edition-manifest.schema.json</text>

  <!-- Connector Arrow L3 -> L2 -->
  <path d="M 800 550 L 800 575" stroke="#10b981" stroke-width="3" fill="none"/>

  <!-- ========================================================================= -->
  <!-- LAYER 2: TWO-TIER HIERARCHICAL RAG & DENSE VECTOR EMBEDDINGS -->
  <!-- ========================================================================= -->
  <rect x="60" y="580" width="1480" height="195" rx="12" fill="#0f172a" stroke="#8b5cf6" stroke-width="2"/>
  <rect x="60" y="580" width="1480" height="38" rx="12" fill="url(#accentPurple)"/>
  <rect x="60" y="606" width="1480" height="12" fill="#6366f1"/>
  <text x="85" y="606" fill="#ffffff" font-size="16" font-weight="800" letter-spacing="0.06em">LAYER 2: TWO-TIER HIERARCHICAL RAG &amp; CONTINUOUS LEARNING PIPELINE</text>
  <text x="1480" y="606" fill="#ffffff" font-size="13" font-weight="700" text-anchor="end">KNOWLEDGE ENGINE</text>

  <!-- L2 Cards -->
  <!-- L2 Card 1: Vector Search -->
  <rect x="85" y="635" width="335" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="105" y="660" fill="#c084fc" font-size="14" font-weight="700">Vector Search Core</text>
  <text x="105" y="685" fill="#f8fafc" font-size="13" font-weight="600">• faiss-cpu 1.15.1 (Dense Index)</text>
  <text x="105" y="705" fill="#94a3b8" font-size="12">• numpy 2.4.6 (Matrix operations)</text>
  <text x="105" y="725" fill="#94a3b8" font-size="12">• sentence-transformers / all-MiniLM</text>
  <text x="105" y="745" fill="#94a3b8" font-size="12">• Sub-10ms in-process retrieval</text>

  <!-- L2 Card 2: Tier 1 Universal RAG -->
  <rect x="445" y="635" width="335" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="465" y="660" fill="#c084fc" font-size="14" font-weight="700">Tier 1: Universal Knowledge</text>
  <text x="465" y="685" fill="#f8fafc" font-size="13" font-weight="600">• framework/rag/ (Invariant laws)</text>
  <text x="465" y="705" fill="#94a3b8" font-size="12">• Rule 19 zero-dash standard</text>
  <text x="465" y="725" fill="#94a3b8" font-size="12">• Balloon 34% width / 4% offset rules</text>
  <text x="465" y="745" fill="#94a3b8" font-size="12">• 4-Part card pedagogical schema</text>

  <!-- L2 Card 3: Tier 2 Book RAG -->
  <rect x="805" y="635" width="335" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="825" y="660" fill="#c084fc" font-size="14" font-weight="700">Tier 2: Book-Level Context</text>
  <text x="825" y="685" fill="#f8fafc" font-size="13" font-weight="600">• books/[book-id]/rag/ (Local state)</text>
  <text x="825" y="705" fill="#94a3b8" font-size="12">• Character dossiers: Akshay &amp; Sameer</text>
  <text x="825" y="725" fill="#94a3b8" font-size="12">• 35-Beat chapter continuity ledger</text>
  <text x="825" y="745" fill="#94a3b8" font-size="12">• Asset reference map &amp; vocabulary</text>

  <!-- L2 Card 4: Learning Gate -->
  <rect x="1165" y="635" width="350" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="1185" y="660" fill="#c084fc" font-size="14" font-weight="700">Continuous Learning Gate</text>
  <text x="1185" y="685" fill="#f8fafc" font-size="13" font-weight="600">• amend_rag.py (Agent amendment CLI)</text>
  <text x="1185" y="705" fill="#94a3b8" font-size="12">• User agreement confirmation gate</text>
  <text x="1185" y="725" fill="#94a3b8" font-size="12">• Automatic FAISS vector re-indexing</text>
  <text x="1185" y="745" fill="#94a3b8" font-size="12">• Git commit tracking &amp; provenance</text>

  <!-- Connector Arrow L2 -> L1 -->
  <path d="M 800 775 L 800 800" stroke="#8b5cf6" stroke-width="3" fill="none"/>

  <!-- ========================================================================= -->
  <!-- LAYER 1: CANON STORE, GRAPHIC PIPELINE & EXPORT COMPILERS -->
  <!-- ========================================================================= -->
  <rect x="60" y="805" width="1480" height="195" rx="12" fill="#0f172a" stroke="#d97706" stroke-width="2"/>
  <rect x="60" y="805" width="1480" height="38" rx="12" fill="url(#accentAmber)"/>
  <rect x="60" y="831" width="1480" height="12" fill="#d97706"/>
  <text x="85" y="831" fill="#ffffff" font-size="16" font-weight="800" letter-spacing="0.06em">LAYER 1: CANON REPOSITORY, ART ASSET PIPELINE &amp; MULTI-TARGET EXPORTERS</text>
  <text x="1480" y="831" fill="#ffffff" font-size="13" font-weight="700" text-anchor="end">FOUNDATION &amp; ARTIFACTS</text>

  <!-- L1 Cards -->
  <!-- L1 Card 1: Canon Store -->
  <rect x="85" y="860" width="335" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="105" y="885" fill="#fbbf24" font-size="14" font-weight="700">Canon Store (Source of Truth)</text>
  <text x="105" y="910" fill="#f8fafc" font-size="13" font-weight="600">• Git (Branch arena/01a0bfe5-...)</text>
  <text x="105" y="930" fill="#94a3b8" font-size="12">• YAML metadata: superseded_by</text>
  <text x="105" y="950" fill="#94a3b8" font-size="12">• framework/unified/ (20 Core specs)</text>
  <text x="105" y="970" fill="#94a3b8" font-size="12">• registry.json global book ledger</text>

  <!-- L1 Card 2: Image Processing -->
  <rect x="445" y="860" width="335" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="465" y="885" fill="#fbbf24" font-size="14" font-weight="700">Watermark Removal &amp; Vector</text>
  <text x="465" y="910" fill="#f8fafc" font-size="13" font-weight="600">• opencv-python-headless 5.0.0</text>
  <text x="465" y="930" fill="#94a3b8" font-size="12">• Telea Inpainting &amp; alpha unblend</text>
  <text x="465" y="950" fill="#94a3b8" font-size="12">• @resvg/resvg-js 2.6.2 (SVG to PNG)</text>
  <text x="465" y="970" fill="#94a3b8" font-size="12">• 255 verified watermark-free images</text>

  <!-- L1 Card 3: Document Exporters -->
  <rect x="805" y="860" width="335" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="825" y="885" fill="#fbbf24" font-size="14" font-weight="700">Publishing Document Compilers</text>
  <text x="825" y="910" fill="#f8fafc" font-size="13" font-weight="600">• docx 9.5.1 (Microsoft Word export)</text>
  <text x="825" y="930" fill="#94a3b8" font-size="12">• 455 KB profile-block docx output</text>
  <text x="825" y="950" fill="#94a3b8" font-size="12">• Puppeteer (Print PDF CMYK 300dpi)</text>
  <text x="825" y="970" fill="#94a3b8" font-size="12">• epub-gen (Fixed layout EPUB)</text>

  <!-- L1 Card 4: Web Offline Build -->
  <rect x="1165" y="860" width="350" height="120" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="1185" y="885" fill="#fbbf24" font-size="14" font-weight="700">Standalone Single-File Web</text>
  <text x="1185" y="910" fill="#f8fafc" font-size="13" font-weight="600">• vite-plugin-singlefile 2.3.0</text>
  <text x="1185" y="930" fill="#94a3b8" font-size="12">• Bundles scripts, styles, inline assets</text>
  <text x="1185" y="950" fill="#94a3b8" font-size="12">• Zero external server requirements</text>
  <text x="1185" y="970" fill="#94a3b8" font-size="12">• Offline-first student distribution</text>

</svg>
`;

// ============================================================================
// DIAGRAM 2: FOUR AI PROPOSALS ARCHITECTURAL COMPARISON MATRIX
// ============================================================================
const diagram2Svg = `
<svg width="1600" height="1100" viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgGrad2)"/>

  <!-- Title Header Banner -->
  <rect x="60" y="30" width="1480" height="75" rx="10" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
  <text x="90" y="65" fill="#f8fafc" font-size="24" font-weight="800">FOUR AI PROPOSALS · ARCHITECTURAL COMPARISON AND SYNTHESIS MATRIX</text>
  <text x="90" y="90" fill="#94a3b8" font-size="14">Forensic Breakdown of Agentic AI, AI A, AI B, and AI MAX — What We Adopt, What We Reject, and Master Synthesis</text>

  <!-- 4 Columns for the 4 AIs -->
  <!-- Column 1: agentic ai -->
  <rect x="60" y="130" width="350" height="680" rx="10" fill="#0f172a" stroke="#0284c7" stroke-width="1.5"/>
  <rect x="60" y="130" width="350" height="42" rx="10" fill="#0284c7"/>
  <rect x="60" y="162" width="350" height="10" fill="#0284c7"/>
  <text x="80" y="157" fill="#ffffff" font-size="15" font-weight="800">1. AGENTIC AI PROPOSAL</text>
  <text x="390" y="157" fill="#e0f2fe" font-size="12" font-weight="700" text-anchor="end">CANON HYGIENE</text>

  <g transform="translate(75, 185)">
    <text x="0" y="20" fill="#38bdf8" font-size="13" font-weight="700">CORE THESIS</text>
    <text x="0" y="40" fill="#e2e8f0" font-size="12" font-weight="600">Bottlenecks are canon hygiene,</text>
    <text x="0" y="58" fill="#e2e8f0" font-size="12" font-weight="600">not code. Thin state machine</text>
    <text x="0" y="76" fill="#e2e8f0" font-size="12" font-weight="600">over existing tools.</text>

    <text x="0" y="110" fill="#38bdf8" font-size="13" font-weight="700">KEY INNOVATIONS</text>
    <text x="0" y="130" fill="#94a3b8" font-size="12">• superseded_by frontmatter</text>
    <text x="0" y="150" fill="#94a3b8" font-size="12">• Pausable stage state machine</text>
    <text x="0" y="170" fill="#94a3b8" font-size="12">• Speaker must appear in panel</text>
    <text x="0" y="190" fill="#94a3b8" font-size="12">• Citation-CI for Law Bare Acts</text>
    <text x="0" y="210" fill="#94a3b8" font-size="12">• 7-chapter pilot slice first</text>

    <text x="0" y="250" fill="#34d399" font-size="13" font-weight="700">✓ WHAT WE ADOPT</text>
    <text x="0" y="270" fill="#a7f3d0" font-size="12">• Frontmatter provenance chain</text>
    <text x="0" y="290" fill="#a7f3d0" font-size="12">• Thin state machine over files</text>
    <text x="0" y="310" fill="#a7f3d0" font-size="12">• Speaker in frame hard rule</text>
    <text x="0" y="330" fill="#a7f3d0" font-size="12">• Citation-CI gate for law</text>

    <text x="0" y="370" fill="#f87171" font-size="13" font-weight="700">✗ WHAT WE REJECT</text>
    <text x="0" y="390" fill="#fecaca" font-size="12">• Rejection of watermark script</text>
    <text x="0" y="410" fill="#fecaca" font-size="12">  (Our alpha math works cleanly)</text>
    <text x="0" y="430" fill="#fecaca" font-size="12">• Retiring Madhubani style</text>
    <text x="0" y="450" fill="#fecaca" font-size="12">  (Heritage art is our identity!)</text>

    <rect x="-5" y="480" width="330" height="120" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="10" y="505" fill="#38bdf8" font-size="12" font-weight="700">TECH STACK RECOMMENDED</text>
    <text x="10" y="525" fill="#f8fafc" font-size="11">• SQLite FTS5 (Lexical text index)</text>
    <text x="10" y="545" fill="#f8fafc" font-size="11">• sqlite-vec (Local vector search)</text>
    <text x="10" y="565" fill="#f8fafc" font-size="11">• Git frontmatter metadata</text>
    <text x="10" y="585" fill="#f8fafc" font-size="11">• Bare Act citation API check</text>
  </g>

  <!-- Column 2: AI A -->
  <rect x="435" y="130" width="350" height="680" rx="10" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
  <rect x="435" y="130" width="350" height="42" rx="10" fill="#8b5cf6"/>
  <rect x="435" y="162" width="350" height="10" fill="#8b5cf6"/>
  <text x="455" y="157" fill="#ffffff" font-size="15" font-weight="800">2. AI A PROPOSAL</text>
  <text x="765" y="157" fill="#f3e8ff" font-size="12" font-weight="700" text-anchor="end">PEDAGOGICAL COMPILER</text>

  <g transform="translate(450, 185)">
    <text x="0" y="20" fill="#c084fc" font-size="13" font-weight="700">CORE THESIS</text>
    <text x="0" y="40" fill="#e2e8f0" font-size="12" font-weight="600">Publishing is compilation: source</text>
    <text x="0" y="58" fill="#e2e8f0" font-size="12" font-weight="600">is Domain Descriptor, compiler is</text>
    <text x="0" y="76" fill="#e2e8f0" font-size="12" font-weight="600">8-stage pipeline, CPU is 5L RAG.</text>

    <text x="0" y="110" fill="#c084fc" font-size="13" font-weight="700">KEY INNOVATIONS</text>
    <text x="0" y="130" fill="#94a3b8" font-size="12">• 8-Stage compiler pipeline</text>
    <text x="0" y="150" fill="#94a3b8" font-size="12">• 5-Layer RAG (L0 Universal to L4)</text>
    <text x="0" y="170" fill="#94a3b8" font-size="12">• "Book Becomes a Source" flywheel</text>
    <text x="0" y="190" fill="#94a3b8" font-size="12">• Chai moment every 3 chapters</text>
    <text x="0" y="210" fill="#94a3b8" font-size="12">• Deterministic auto-fix layer</text>

    <text x="0" y="250" fill="#34d399" font-size="13" font-weight="700">✓ WHAT WE ADOPT</text>
    <text x="0" y="270" fill="#a7f3d0" font-size="12">• 5-Layer RAG conceptual schema</text>
    <text x="0" y="290" fill="#a7f3d0" font-size="12">• Ingest flywheel (book as source)</text>
    <text x="0" y="310" fill="#a7f3d0" font-size="12">• Chai moment pacing pauses</text>
    <text x="0" y="330" fill="#a7f3d0" font-size="12">• Auto-fix before human review</text>

    <text x="0" y="370" fill="#f87171" font-size="13" font-weight="700">✗ WHAT WE REJECT</text>
    <text x="0" y="390" fill="#fecaca" font-size="12">• Heavy server daemons</text>
    <text x="0" y="410" fill="#fecaca" font-size="12">  (Neo4j, Qdrant, BullMQ)</text>
    <text x="0" y="430" fill="#fecaca" font-size="12">• 14-chapter default books</text>
    <text x="0" y="450" fill="#fecaca" font-size="12">  (Pilot with 7 chapters first)</text>

    <rect x="-5" y="480" width="330" height="120" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="10" y="505" fill="#c084fc" font-size="12" font-weight="700">TECH STACK RECOMMENDED</text>
    <text x="10" y="525" fill="#f8fafc" font-size="11">• Neo4j (Graph DAG prerequisites)</text>
    <text x="10" y="545" fill="#f8fafc" font-size="11">• Qdrant (Vector DB with payloads)</text>
    <text x="10" y="565" fill="#f8fafc" font-size="11">• Puppeteer (Headless renderer)</text>
    <text x="10" y="585" fill="#f8fafc" font-size="11">• BullMQ (Redis job queue)</text>
  </g>

  <!-- Column 3: AI B -->
  <rect x="810" y="130" width="350" height="680" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
  <rect x="810" y="130" width="350" height="42" rx="10" fill="#10b981"/>
  <rect x="810" y="162" width="350" height="10" fill="#10b981"/>
  <text x="830" y="157" fill="#ffffff" font-size="15" font-weight="800">3. AI B PROPOSAL</text>
  <text x="1140" y="157" fill="#d1fae5" font-size="12" font-weight="700" text-anchor="end">VISION SALIENCY</text>

  <g transform="translate(825, 185)">
    <text x="0" y="20" fill="#34d399" font-size="13" font-weight="700">CORE THESIS</text>
    <text x="0" y="40" fill="#e2e8f0" font-size="12" font-weight="600">Enterprise abstraction layer with</text>
    <text x="0" y="58" fill="#e2e8f0" font-size="12" font-weight="600">computer-vision safe zone map</text>
    <text x="0" y="76" fill="#e2e8f0" font-size="12" font-weight="600">and multi-agent authoring guild.</text>

    <text x="0" y="110" fill="#34d399" font-size="13" font-weight="700">KEY INNOVATIONS</text>
    <text x="0" y="130" fill="#94a3b8" font-size="12">• Universal Subject interface</text>
    <text x="0" y="150" fill="#94a3b8" font-size="12">• Multi-agent guild orchestrator</text>
    <text x="0" y="170" fill="#94a3b8" font-size="12">• CV Face &amp; Saliency detection</text>
    <text x="0" y="190" fill="#94a3b8" font-size="12">• Cognitive rigor level tracks</text>
    <text x="0" y="210" fill="#94a3b8" font-size="12">• Visual diffing regression CI</text>

    <text x="0" y="250" fill="#34d399" font-size="13" font-weight="700">✓ WHAT WE ADOPT</text>
    <text x="0" y="270" fill="#a7f3d0" font-size="12">• Universal Subject interface</text>
    <text x="0" y="290" fill="#a7f3d0" font-size="12">• Saliency / Sacred zone rules</text>
    <text x="0" y="310" fill="#a7f3d0" font-size="12">• Multi-agent role specialization</text>
    <text x="0" y="330" fill="#a7f3d0" font-size="12">• Cognitive rigor calibrations</text>

    <text x="0" y="370" fill="#f87171" font-size="13" font-weight="700">✗ WHAT WE REJECT</text>
    <text x="0" y="390" fill="#fecaca" font-size="12">• Real-time runtime face model</text>
    <text x="0" y="410" fill="#fecaca" font-size="12">  (Pre-prompt headroom is faster)</text>
    <text x="0" y="430" fill="#fecaca" font-size="12">• Heavy blackboard state engines</text>
    <text x="0" y="450" fill="#fecaca" font-size="12">  (Keep file-driven pipelines)</text>

    <rect x="-5" y="480" width="330" height="120" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="10" y="505" fill="#34d399" font-size="12" font-weight="700">TECH STACK RECOMMENDED</text>
    <text x="10" y="525" fill="#f8fafc" font-size="11">• OpenCV / MediaPipe (Face detect)</text>
    <text x="10" y="545" fill="#f8fafc" font-size="11">• Playwright (Visual diff testing)</text>
    <text x="10" y="565" fill="#f8fafc" font-size="11">• Multi-Agent Memory Blackboard</text>
    <text x="10" y="585" fill="#f8fafc" font-size="11">• Accessibility (WCAG 2.1 AA)</text>
  </g>

  <!-- Column 4: AI MAX -->
  <rect x="1185" y="130" width="355" height="680" rx="10" fill="#0f172a" stroke="#d97706" stroke-width="1.5"/>
  <rect x="1185" y="130" width="355" height="42" rx="10" fill="#d97706"/>
  <rect x="1185" y="162" width="355" height="10" fill="#d97706"/>
  <text x="1205" y="157" fill="#ffffff" font-size="15" font-weight="800">4. AI MAX PROPOSAL</text>
  <text x="1520" y="157" fill="#fef3c7" font-size="12" font-weight="700" text-anchor="end">DOMAIN ONTOLOGY</text>

  <g transform="translate(1200, 185)">
    <text x="0" y="20" fill="#fbbf24" font-size="13" font-weight="700">CORE THESIS</text>
    <text x="0" y="40" fill="#e2e8f0" font-size="12" font-weight="600">3-Layer decoupled architecture</text>
    <text x="0" y="58" fill="#e2e8f0" font-size="12" font-weight="600">with mathematical proof of 4-part</text>
    <text x="0" y="76" fill="#e2e8f0" font-size="12" font-weight="600">card across 5 radical domains.</text>

    <text x="0" y="110" fill="#fbbf24" font-size="13" font-weight="700">KEY INNOVATIONS</text>
    <text x="0" y="130" fill="#94a3b8" font-size="12">• 4-Part card cross-domain proof</text>
    <text x="0" y="150" fill="#94a3b8" font-size="12">• 47-Point quality audit checklist</text>
    <text x="0" y="170" fill="#94a3b8" font-size="12">• 6 Cinematic panel shot types</text>
    <text x="0" y="190" fill="#94a3b8" font-size="12">• Hard constraint balloon validator</text>
    <text x="0" y="210" fill="#94a3b8" font-size="12">• Alpha unblend watermark engine</text>

    <text x="0" y="250" fill="#34d399" font-size="13" font-weight="700">✓ WHAT WE ADOPT</text>
    <text x="0" y="270" fill="#a7f3d0" font-size="12">• Domain slot vocabulary mapping</text>
    <text x="0" y="290" fill="#a7f3d0" font-size="12">• 6 Panel shot archetypes</text>
    <text x="0" y="310" fill="#a7f3d0" font-size="12">• 47-Point hard fail audit engine</text>
    <text x="0" y="330" fill="#a7f3d0" font-size="12">• Watermark mathematical pipeline</text>

    <text x="0" y="370" fill="#f87171" font-size="13" font-weight="700">✗ WHAT WE REJECT</text>
    <text x="0" y="390" fill="#fecaca" font-size="12">• PostgreSQL relational schema</text>
    <text x="0" y="410" fill="#fecaca" font-size="12">  (Git + JSON is 10x more agile)</text>
    <text x="0" y="430" fill="#fecaca" font-size="12">• Electron / Tauri native bundle</text>
    <text x="0" y="450" fill="#fecaca" font-size="12">  (Browser web app is sufficient)</text>

    <rect x="-5" y="480" width="330" height="120" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="10" y="505" fill="#fbbf24" font-size="12" font-weight="700">TECH STACK RECOMMENDED</text>
    <text x="10" y="525" fill="#f8fafc" font-size="11">• PostgreSQL (Relational metadata)</text>
    <text x="10" y="545" fill="#f8fafc" font-size="11">• Python OpenCV / Telea Inpaint</text>
    <text x="10" y="565" fill="#f8fafc" font-size="11">• Tauri / Electron Desktop shell</text>
    <text x="10" y="585" fill="#f8fafc" font-size="11">• epub-gen / Puppeteer exporters</text>
  </g>

  <!-- Bottom Synthesis Box -->
  <rect x="60" y="830" width="1480" height="230" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <rect x="60" y="830" width="1480" height="35" rx="12" fill="#0284c7"/>
  <rect x="60" y="855" width="1480" height="10" fill="#0284c7"/>
  <text x="85" y="853" fill="#ffffff" font-size="15" font-weight="800">MASTER SYNTHESIS: THE UNIFIED SARVA GYANA KOSHAH ENGINE</text>

  <g transform="translate(85, 885)">
    <rect x="0" y="0" width="330" height="150" rx="6" fill="#0f172a" stroke="#334155"/>
    <text x="15" y="25" fill="#38bdf8" font-size="13" font-weight="700">1. CANON STORE (GIT + YAML)</text>
    <text x="15" y="48" fill="#94a3b8" font-size="12">• superseded_by provenance chain</text>
    <text x="15" y="68" fill="#94a3b8" font-size="12">• registry.json global book catalog</text>
    <text x="15" y="88" fill="#94a3b8" font-size="12">• Domain Manifests (law.yaml, etc.)</text>
    <text x="15" y="108" fill="#94a3b8" font-size="12">• Single source of truth in git repo</text>

    <rect x="360" y="0" width="330" height="150" rx="6" fill="#0f172a" stroke="#334155"/>
    <text x="375" y="25" fill="#c084fc" font-size="13" font-weight="700">2. TWO-TIER FAISS RAG</text>
    <text x="375" y="48" fill="#94a3b8" font-size="12">• Tier 1 Universal RAG (framework/)</text>
    <text x="375" y="68" fill="#94a3b8" font-size="12">• Tier 2 Book-Level RAG (local)</text>
    <text x="375" y="88" fill="#94a3b8" font-size="12">• faiss-cpu 1.15.1 + dense vectors</text>
    <text x="375" y="108" fill="#94a3b8" font-size="12">• amend_rag.py user confirmation gate</text>

    <rect x="720" y="0" width="330" height="150" rx="6" fill="#0f172a" stroke="#334155"/>
    <text x="735" y="25" fill="#34d399" font-size="13" font-weight="700">3. COMPOSITOR &amp; SHOT TYPES</text>
    <text x="735" y="48" fill="#94a3b8" font-size="12">• 6 Shot archetypes (Close-up, Wide)</text>
    <text x="735" y="68" fill="#94a3b8" font-size="12">• Inside-image balloon (top 4%–12%)</text>
    <text x="735" y="88" fill="#94a3b8" font-size="12">• 120-Char spoken ceiling (&lt; 18 words)</text>
    <text x="735" y="108" fill="#94a3b8" font-size="12">• Speaker must appear in frame</text>

    <rect x="1080" y="0" width="330" height="150" rx="6" fill="#0f172a" stroke="#334155"/>
    <text x="1095" y="25" fill="#fbbf24" font-size="13" font-weight="700">4. AUDIT &amp; EXPORT GATES</text>
    <text x="1095" y="48" fill="#94a3b8" font-size="12">• 47-Point audit-chapter.mjs (≥90)</text>
    <text x="1095" y="68" fill="#94a3b8" font-size="12">• rule19-checker.mjs (Zero dashes)</text>
    <text x="1095" y="88" fill="#94a3b8" font-size="12">• Newman API test + Snippet CI</text>
    <text x="1095" y="108" fill="#94a3b8" font-size="12">• docx, single-file HTML, PDF export</text>
  </g>
</svg>
`;

// ============================================================================
// DIAGRAM 3: HIERARCHICAL RAG DATAFLOW, PACKAGES & AMENDMENT GATE
// ============================================================================
const diagram3Svg = `
<svg width="1600" height="1000" viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="purpleGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <marker id="arrowPurple" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L9,3 z" fill="#a855f7"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgGrad3)"/>

  <!-- Title Header Banner -->
  <rect x="60" y="30" width="1480" height="75" rx="10" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
  <text x="90" y="65" fill="#f8fafc" font-size="24" font-weight="800">TWO-TIER HIERARCHICAL RAG · PACKAGES, DATAFLOW &amp; AMENDMENT PIPELINE</text>
  <text x="90" y="90" fill="#94a3b8" font-size="14">faiss-cpu 1.15.1 · sentence-transformers · numpy 2.4.6 · SQLite BM25 · Universal Invariants vs Book-Level State</text>

  <!-- Left Side: Ingestion & Vector Indexing Flow -->
  <rect x="60" y="130" width="700" height="820" rx="12" fill="#0f172a" stroke="#7c3aed" stroke-width="1.5"/>
  <rect x="60" y="130" width="700" height="38" rx="12" fill="url(#purpleGrad)"/>
  <rect x="60" y="156" width="700" height="12" fill="#7c3aed"/>
  <text x="85" y="156" fill="#ffffff" font-size="15" font-weight="800">1. KNOWLEDGE INGESTION &amp; FAISS INDEXING PIPELINE</text>

  <!-- Stage 1: Document Sources -->
  <g transform="translate(90, 190)">
    <rect x="0" y="0" width="640" height="110" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="20" y="28" fill="#c084fc" font-size="14" font-weight="700">Step 1: Document Sources (Git Markdown &amp; Manifests)</text>
    <text x="20" y="52" fill="#f8fafc" font-size="12" font-weight="600">• Tier 1 Universal: framework/unified/*.md (20 Core specs, Rule 19, Balloon math)</text>
    <text x="20" y="72" fill="#f8fafc" font-size="12" font-weight="600">• Tier 2 Book-Level: src/books/[book-id]/rag/ (Dossiers, Continuity, 35 beats)</text>
    <text x="20" y="92" fill="#94a3b8" font-size="11">Filtered by YAML frontmatter: status == canon &amp;&amp; !superseded</text>
  </g>

  <!-- Flow Arrow -->
  <line x1="410" y1="310" x2="410" y2="340" stroke="#a855f7" stroke-width="2.5" marker-end="url(#arrowPurple)"/>

  <!-- Stage 2: Chunking & Metadata Attachment -->
  <g transform="translate(90, 350)">
    <rect x="0" y="0" width="640" height="110" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="20" y="28" fill="#c084fc" font-size="14" font-weight="700">Step 2: Semantic Chunking &amp; Metadata Attachment</text>
    <text x="20" y="52" fill="#f8fafc" font-size="12">• Package: custom regex chunker + langchain-text-splitters (opt)</text>
    <text x="20" y="72" fill="#f8fafc" font-size="12">• Chunks bounded to 256–512 tokens with 32 token overlap</text>
    <text x="20" y="92" fill="#94a3b8" font-size="11">Attached Metadata: { tier: 1|2, domain, chapter_id, rule_id, authority: hard|soft }</text>
  </g>

  <!-- Flow Arrow -->
  <line x1="410" y1="470" x2="410" y2="500" stroke="#a855f7" stroke-width="2.5" marker-end="url(#arrowPurple)"/>

  <!-- Stage 3: Embedding Generation -->
  <g transform="translate(90, 510)">
    <rect x="0" y="0" width="640" height="110" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="20" y="28" fill="#c084fc" font-size="14" font-weight="700">Step 3: Dense Vector Embeddings</text>
    <text x="20" y="52" fill="#f8fafc" font-size="12">• Package: sentence-transformers / all-MiniLM-L6-v2 (384 dimensions)</text>
    <text x="20" y="72" fill="#f8fafc" font-size="12">• Fallback: Local ONNX runtime / OpenAI text-embedding-3-small</text>
    <text x="20" y="92" fill="#94a3b8" font-size="11">Normalized vectors exported to float32 NumPy matrix (numpy 2.4.6)</text>
  </g>

  <!-- Flow Arrow -->
  <line x1="410" y1="630" x2="410" y2="660" stroke="#a855f7" stroke-width="2.5" marker-end="url(#arrowPurple)"/>

  <!-- Stage 4: FAISS Vector Index Compilation -->
  <g transform="translate(90, 670)">
    <rect x="0" y="0" width="640" height="140" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="20" y="28" fill="#c084fc" font-size="14" font-weight="700">Step 4: FAISS Dense Vector Index Compilation</text>
    <text x="20" y="52" fill="#f8fafc" font-size="12" font-weight="600">• Package: faiss-cpu 1.15.1 (IndexFlatIP / IndexHNSWFlat)</text>
    <text x="20" y="72" fill="#f8fafc" font-size="12">• Builds universal_index.bin (Tier 1) and book_index.bin (Tier 2)</text>
    <text x="20" y="92" fill="#f8fafc" font-size="12">• Parallel BM25 inverted index for exact keyword &amp; code tokens</text>
    <text x="20" y="112" fill="#34d399" font-size="11">✓ Pre-compiled into repository; sub-millisecond offline query response</text>
  </g>

  <!-- Right Side: Query, Resolution, Generation & Amendment -->
  <rect x="840" y="130" width="700" height="820" rx="12" fill="#0f172a" stroke="#0284c7" stroke-width="1.5"/>
  <rect x="840" y="130" width="700" height="38" rx="12" fill="url(#accentCyan)"/>
  <rect x="840" y="156" width="700" height="12" fill="#0284c7"/>
  <text x="865" y="156" fill="#ffffff" font-size="15" font-weight="800">2. AGENT QUERY, CONFLICT RESOLUTION &amp; LEARNING GATE</text>

  <!-- Query Box -->
  <g transform="translate(870, 190)">
    <rect x="0" y="0" width="640" height="100" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="20" y="26" fill="#38bdf8" font-size="14" font-weight="700">Agent Query Invocation</text>
    <text x="20" y="48" fill="#f8fafc" font-size="12" font-family="monospace">python3 framework/rag/search.py --book zero-to-api "speech balloon rules"</text>
    <text x="20" y="70" fill="#94a3b8" font-size="12">• Embeds query via all-MiniLM-L6-v2</text>
    <text x="20" y="88" fill="#94a3b8" font-size="12">• Performs Top-K cosine search across Tier 1 + Tier 2 FAISS indices</text>
  </g>

  <!-- Flow Arrow -->
  <line x1="1190" y1="300" x2="1190" y2="330" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrowPurple)"/>

  <!-- Priority Cascade & Conflict Resolver -->
  <g transform="translate(870, 340)">
    <rect x="0" y="0" width="640" height="130" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="20" y="26" fill="#38bdf8" font-size="14" font-weight="700">Strict Priority Cascade &amp; Conflict Resolution</text>
    <rect x="20" y="38" width="600" height="24" rx="4" fill="#6366f1"/>
    <text x="30" y="55" fill="#ffffff" font-size="11" font-weight="700">TIER 1 (UNIVERSAL FRAMEWORK) OVERRIDES TIER 2</text>
    <text x="20" y="82" fill="#f8fafc" font-size="12">• Rule 19 (Zero dashes) overrides any domain punctuation</text>
    <text x="20" y="100" fill="#f8fafc" font-size="12">• Balloon 120-char cap overrides any long legal or technical text</text>
    <text x="20" y="118" fill="#34d399" font-size="11">✓ Assembled Context Window: Clean, prioritized, cited chunks</text>
  </g>

  <!-- Flow Arrow -->
  <line x1="1190" y1="480" x2="1190" y2="510" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrowPurple)"/>

  <!-- Chapter Generation by Agent -->
  <g transform="translate(870, 520)">
    <rect x="0" y="0" width="640" height="95" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="20" y="26" fill="#38bdf8" font-size="14" font-weight="700">Autonomous Chapter Generation</text>
    <text x="20" y="48" fill="#f8fafc" font-size="12">• Agent generates narrative beats, character speech, and code</text>
    <text x="20" y="68" fill="#f8fafc" font-size="12">• Generates 4-part card (Input, Mechanism, Output, Senior Truth)</text>
    <text x="20" y="86" fill="#38bdf8" font-size="11">Discovers new pattern: e.g. "Omitted route parameter needs 400 guard"</text>
  </g>

  <!-- Flow Arrow -->
  <line x1="1190" y1="625" x2="1190" y2="655" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrowPurple)"/>

  <!-- Continuous Learning & User Agreement Gate -->
  <g transform="translate(870, 665)">
    <rect x="0" y="0" width="640" height="150" rx="8" fill="#1e293b" stroke="#d97706" stroke-width="1.5"/>
    <text x="20" y="26" fill="#fbbf24" font-size="14" font-weight="700">The Continuous Learning &amp; User Confirmation Gate</text>
    <text x="20" y="48" fill="#f8fafc" font-size="12">• Agent runs amend_rag.py --draft "Chapter 2 400 Guard Pattern"</text>
    <rect x="20" y="58" width="600" height="32" rx="4" fill="#451a03" stroke="#b45309"/>
    <text x="30" y="78" fill="#fef3c7" font-size="11" font-weight="700">HUMAN GATE: "I discovered pattern X. Add to Book RAG? [Y/N]"</text>
    <text x="20" y="110" fill="#f8fafc" font-size="12">• Upon User 'Y': New JSON card written to books/[id]/rag/knowledge/</text>
    <text x="20" y="128" fill="#34d399" font-size="11">✓ Triggers instant rebuild of book_index.bin — available to next agent!</text>
  </g>

</svg>
`;

// ============================================================================
// DIAGRAM 4: GRAPHIC NOVEL SPEECH BALLOON & SUB-ART DECK GEOMETRY
// ============================================================================
const diagram4Svg = `
<svg width="1600" height="1050" viewBox="0 0 1600 1050" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <filter id="balloonShadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgGrad4)"/>

  <!-- Title Header Banner -->
  <rect x="60" y="30" width="1480" height="75" rx="10" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
  <text x="90" y="65" fill="#f8fafc" font-size="24" font-weight="800">GRAPHIC NOVEL PANEL GEOMETRY · INSIDE-IMAGE BALLOONS &amp; SUB-ART DECK</text>
  <text x="90" y="90" fill="#94a3b8" font-size="14">Pixel-Level Mathematical Constraints · 16:9 Aspect Ratio · Top 25% Headroom · 120-Char Cap · Zero Face Occlusion</text>

  <!-- Left: The Master Panel Layout (16:9 Canvas + Sub-Art Deck + 4-Part Card) -->
  <g transform="translate(60, 130)">
    <!-- Container Box -->
    <rect x="0" y="0" width="940" height="880" rx="12" fill="#020617" stroke="#334155" stroke-width="2"/>

    <!-- TIER 1: SCENE META BAR -->
    <rect x="0" y="0" width="940" height="38" rx="12" fill="#1e293b"/>
    <rect x="0" y="26" width="940" height="12" fill="#1e293b"/>
    <text x="20" y="24" fill="#38bdf8" font-size="12" font-weight="800">TIER 1: SCENE META BAR</text>
    <text x="200" y="24" fill="#f8fafc" font-size="12" font-weight="700">ACT 1 · SCENE 3: THE MELTED HALL TICKET</text>
    <rect x="810" y="8" width="110" height="22" rx="4" fill="#0284c7"/>
    <text x="865" y="23" fill="#ffffff" font-size="11" font-weight="800" text-anchor="middle">TIME: 08:41 AM</text>

    <!-- TIER 2: 16:9 ARTWORK CANVAS (Height = 940 * 9/16 = 528px) -->
    <rect x="0" y="38" width="940" height="528" fill="url(#panelGrad)"/>

    <!-- TOP 25% LETTERING ZONE (Headroom) -->
    <rect x="0" y="38" width="940" height="132" fill="#0284c7" fill-opacity="0.12" stroke="#0284c7" stroke-dasharray="4 4"/>
    <text x="920" y="60" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="end">TOP 25% LETTERING ZONE (Sandstone Arch / Sky Ceiling)</text>

    <!-- INSIDE-IMAGE SPEECH BALLOON (Pinned to Top 4% Negative Headroom) -->
    <g transform="translate(35, 60)" filter="url(#balloonShadow)">
      <!-- Balloon Box -->
      <rect x="0" y="0" width="310" height="74" rx="10" fill="#ffffff" stroke="#0284c7" stroke-width="2.5"/>
      <!-- Header -->
      <rect x="12" y="10" width="80" height="18" rx="3" fill="#0284c7"/>
      <text x="52" y="23" fill="#ffffff" font-size="10" font-weight="800" text-anchor="middle">[1] AKSHAY</text>
      <text x="100" y="23" fill="#64748b" font-size="10" font-weight="600">IN SHEER PANIC</text>
      <!-- Dialogue Text (under 120 chars, no hyphens) -->
      <text x="14" y="45" fill="#0f172a" font-size="12" font-weight="700" font-style="italic">"My water bottle leaked in my bag!</text>
      <text x="14" y="62" fill="#0f172a" font-size="12" font-weight="700" font-style="italic">The admit card ink is dissolving!"</text>
      <!-- Directional Pointer Tail -->
      <path d="M 230,74 L 250,92 L 242,74 Z" fill="#ffffff" stroke="#0284c7" stroke-width="2.5"/>
      <path d="M 229,72 L 244,72 Z" stroke="#ffffff" stroke-width="4"/>
    </g>

    <!-- LOWER 75% SACRED CHARACTER ZONE -->
    <rect x="0" y="170" width="940" height="396" fill="none" stroke="#10b981" stroke-dasharray="6 6" stroke-opacity="0.6"/>
    <text x="920" y="550" fill="#34d399" font-size="11" font-weight="700" text-anchor="end">LOWER 75% SACRED CHARACTER ZONE (Faces, Hands &amp; Props 100% Clear)</text>

    <!-- Simulated Character Figures in Sacred Zone -->
    <!-- Character Face Placeholder -->
    <circle cx="280" cy="340" r="55" fill="#334155" stroke="#64748b" stroke-width="2"/>
    <text x="280" y="345" fill="#f8fafc" font-size="13" font-weight="700" text-anchor="middle">Akshay's Face</text>
    <text x="280" y="365" fill="#38bdf8" font-size="10" text-anchor="middle">Unobstructed</text>
    <!-- Laptop / Soaked paper in hands -->
    <rect x="200" y="420" width="160" height="70" rx="6" fill="#1e293b" stroke="#64748b"/>
    <text x="280" y="460" fill="#f8fafc" font-size="11" text-anchor="middle">Soaked Paper in Hands</text>

    <!-- Mentor figure standing on right -->
    <circle cx="700" cy="320" r="50" fill="#334155" stroke="#64748b" stroke-width="2"/>
    <text x="700" y="325" fill="#f8fafc" font-size="13" font-weight="700" text-anchor="middle">Sameer Mentor</text>
    <rect x="640" y="380" width="120" height="110" rx="6" fill="#1e1b4b" stroke="#6366f1"/>
    <text x="700" y="440" fill="#c084fc" font-size="11" text-anchor="middle">Indigo Kurta &amp; Chai</text>

    <!-- TIER 3: SUB-ART GROUNDING DECK -->
    <rect x="0" y="566" width="940" height="135" fill="#fffbeb" stroke="#fde68a" stroke-width="1"/>
    <text x="20" y="590" fill="#92400e" font-size="12" font-weight="800">TIER 3: SUB-ART GROUNDING DECK (NARRATIVE GROUNDING &amp; STATUS CODE)</text>
    <text x="20" y="612" fill="#1e293b" font-size="12" font-weight="500">
      <tspan font-weight="700">Scene Action:</tspan> Outside the sandstone cloister, Akshay stares in horror at blue watercolor smudges where his hall number sat.
    </text>
    <text x="20" y="632" fill="#1e293b" font-size="12" font-weight="500">
      <tspan font-weight="700">Triage Challenge:</tspan> The exam portal is unresponsive under 4000 frantic phone connections. Wi-Fi drops to one bar.
    </text>
    <rect x="20" y="645" width="900" height="42" rx="6" fill="#fef3c7" stroke="#f59e0b"/>
    <text x="35" y="665" fill="#b45309" font-size="11" font-weight="800">💡 SENIOR SAVIOR ARCHITECTURAL LESSON:</text>
    <text x="35" y="680" fill="#78350f" font-size="11">"Never rely on a bloated web browser when you need raw payload data. A browser pulls megabytes of CSS when your answer is 120 bytes."</text>

    <!-- TIER 4: UNIVERSAL 4-PART PEDAGOGICAL CARD -->
    <rect x="0" y="701" width="940" height="179" rx="0" fill="#0f172a" stroke="#334155" stroke-width="1"/>
    <text x="20" y="725" fill="#38bdf8" font-size="12" font-weight="800">TIER 4: UNIVERSAL 4-PART PEDAGOGICAL CARD</text>

    <!-- 4 Columns inside Card -->
    <!-- Col 1: Input -->
    <rect x="20" y="735" width="215" height="130" rx="6" fill="#1e293b" stroke="#0284c7"/>
    <rect x="20" y="735" width="215" height="24" rx="6" fill="#0284c7"/>
    <text x="30" y="752" fill="#ffffff" font-size="11" font-weight="800">1. INPUT (WIRE REQUEST)</text>
    <text x="30" y="775" fill="#e2e8f0" font-size="11" font-weight="600">GET /api/v1/admit/APX102</text>
    <text x="30" y="795" fill="#94a3b8" font-size="10">Host: campus.apex.edu</text>
    <text x="30" y="810" fill="#94a3b8" font-size="10">Accept: application/json</text>
    <text x="30" y="830" fill="#38bdf8" font-size="10">Payload Size: 0 bytes</text>

    <!-- Col 2: Under the Hood -->
    <rect x="250" y="735" width="215" height="130" rx="6" fill="#1e293b" stroke="#6366f1"/>
    <rect x="250" y="735" width="215" height="24" rx="6" fill="#6366f1"/>
    <text x="260" y="752" fill="#ffffff" font-size="11" font-weight="800">2. UNDER THE HOOD</text>
    <text x="260" y="775" fill="#e2e8f0" font-size="11" font-weight="600">DNS Cache Resolution</text>
    <text x="260" y="795" fill="#94a3b8" font-size="10">TCP Three-Way Handshake</text>
    <text x="260" y="810" fill="#94a3b8" font-size="10">Direct Port 3000 Listener</text>
    <text x="260" y="830" fill="#c084fc" font-size="10">Bypasses HTML/JS bundle</text>

    <!-- Col 3: Output -->
    <rect x="480" y="735" width="215" height="130" rx="6" fill="#1e293b" stroke="#10b981"/>
    <rect x="480" y="735" width="215" height="24" rx="6" fill="#10b981"/>
    <text x="490" y="752" fill="#ffffff" font-size="11" font-weight="800">3. OUTPUT (RESPONSE)</text>
    <text x="490" y="775" fill="#34d399" font-size="11" font-weight="700">HTTP/1.1 200 OK (14ms)</text>
    <text x="490" y="795" fill="#e2e8f0" font-size="10">{ "hall": "302",</text>
    <text x="490" y="810" fill="#e2e8f0" font-size="10">  "seat": "Seat B14" }</text>
    <text x="490" y="830" fill="#94a3b8" font-size="10">Total Wire Size: 120 bytes</text>

    <!-- Col 4: Senior Savior -->
    <rect x="710" y="735" width="210" height="130" rx="6" fill="#1e293b" stroke="#f59e0b"/>
    <rect x="710" y="735" width="210" height="24" rx="6" fill="#d97706"/>
    <text x="720" y="752" fill="#ffffff" font-size="11" font-weight="800">4. SENIOR SAVIOR</text>
    <text x="720" y="775" fill="#fbbf24" font-size="11" font-weight="700">First Principles Truth</text>
    <text x="720" y="795" fill="#e2e8f0" font-size="10">The wire carries pure bytes.</text>
    <text x="720" y="810" fill="#e2e8f0" font-size="10">HTML is for human vanity;</text>
    <text x="720" y="830" fill="#e2e8f0" font-size="10">APIs are for machines.</text>
  </g>

  <!-- Right: Mathematical Rules & Invariant Specifications -->
  <g transform="translate(1030, 130)">
    <rect x="0" y="0" width="510" height="880" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="0" y="0" width="510" height="38" rx="12" fill="#0284c7"/>
    <rect x="0" y="26" width="510" height="12" fill="#0284c7"/>
    <text x="25" y="25" fill="#ffffff" font-size="15" font-weight="800">MATHEMATICAL SPEECH BALLOON INVARIANTS</text>

    <!-- Rule 1: Vertical Headroom Rule -->
    <g transform="translate(25, 60)">
      <rect x="0" y="0" width="460" height="110" rx="8" fill="#1e293b" stroke="#334155"/>
      <text x="20" y="26" fill="#38bdf8" font-size="14" font-weight="700">1. Vertical Headroom Bounds (Top 4% to 25%)</text>
      <text x="20" y="50" fill="#f8fafc" font-size="12">• Balloon top offset: y_min = 0.04 * H (approx 21px)</text>
      <text x="20" y="70" fill="#f8fafc" font-size="12">• Balloon bottom cap: y_max = 0.25 * H (approx 132px)</text>
      <text x="20" y="90" fill="#34d399" font-size="11">✓ Leaves the lower 75% character sanctuary completely clear</text>
    </g>

    <!-- Rule 2: Width & Character Ceiling -->
    <g transform="translate(25, 190)">
      <rect x="0" y="0" width="460" height="110" rx="8" fill="#1e293b" stroke="#334155"/>
      <text x="20" y="26" fill="#38bdf8" font-size="14" font-weight="700">2. Width &amp; Character Ceiling (120 Chars)</text>
      <text x="20" y="50" fill="#f8fafc" font-size="12">• Max width: W_balloon ≤ 0.34 * W_canvas (approx 320px)</text>
      <text x="20" y="70" fill="#f8fafc" font-size="12">• Max character count: L_text ≤ 120 characters (~18 words)</text>
      <text x="20" y="90" fill="#34d399" font-size="11">✓ Max balloon height stays under 74px at 1.3 line height</text>
    </g>

    <!-- Rule 3: Single Speaker Presence -->
    <g transform="translate(25, 320)">
      <rect x="0" y="0" width="460" height="110" rx="8" fill="#1e293b" stroke="#334155"/>
      <text x="20" y="26" fill="#38bdf8" font-size="14" font-weight="700">3. Single Speaker Presence Rule (No Cramming)</text>
      <text x="20" y="50" fill="#f8fafc" font-size="12">• Exactly 1 primary speaker per panel (no stacked dialogues)</text>
      <text x="20" y="70" fill="#f8fafc" font-size="12">• Speaker presence: character MUST be drawn in frame</text>
      <text x="20" y="90" fill="#34d399" font-size="11">✓ Uses cinematic cutaway shots across 153+ image library</text>
    </g>

    <!-- Rule 4: Rule 19 Zero Dash Law -->
    <g transform="translate(25, 450)">
      <rect x="0" y="0" width="460" height="110" rx="8" fill="#1e293b" stroke="#334155"/>
      <text x="20" y="26" fill="#38bdf8" font-size="14" font-weight="700">4. Rule 19 Strict Zero-Dash Law</text>
      <text x="20" y="50" fill="#f8fafc" font-size="12">• Prohibits: hyphens, em-dashes, en-dashes in prose</text>
      <text x="20" y="70" fill="#f8fafc" font-size="12">• Replaces with: commas, semicolons, natural words</text>
      <text x="20" y="90" fill="#34d399" font-size="11">✓ Verified clean across lesson01.js and architecture docs</text>
    </g>

    <!-- Rule 5: Sub-Art Deck Technical Separation -->
    <g transform="translate(25, 580)">
      <rect x="0" y="0" width="460" height="110" rx="8" fill="#1e293b" stroke="#334155"/>
      <text x="20" y="26" fill="#38bdf8" font-size="14" font-weight="700">5. Sub-Art Deck Technical Separation</text>
      <text x="20" y="50" fill="#f8fafc" font-size="12">• Spoken balloon = visceral emotion &amp; human character voice</text>
      <text x="20" y="70" fill="#f8fafc" font-size="12">• Sub-Art Deck = deep RFC, status code, Bare Act citations</text>
      <text x="20" y="90" fill="#34d399" font-size="11">✓ Keeps speech balloons lightweight, agile, and expressive</text>
    </g>

    <!-- Summary Checklist -->
    <g transform="translate(25, 710)">
      <rect x="0" y="0" width="460" height="150" rx="8" fill="#1e1b4b" stroke="#6366f1"/>
      <text x="20" y="26" fill="#c084fc" font-size="14" font-weight="700">Why This Solves Failure Modes A, B, and C</text>
      <text x="20" y="50" fill="#e2e8f0" font-size="11">• Eliminates Failure Mode A (No 60-word textbook lectures in balloons)</text>
      <text x="20" y="72" fill="#e2e8f0" font-size="11">• Eliminates Failure Mode B (No multi-speaker cramming on 1 still)</text>
      <text x="20" y="94" fill="#e2e8f0" font-size="11">• Eliminates Failure Mode C (No ugly external grey dock cards)</text>
      <text x="20" y="118" fill="#34d399" font-size="12" font-weight="800">✓ Result: Pure Graphic Novel Experience with Deep Technical Rigor</text>
    </g>
  </g>

</svg>
`;

console.log('Rendering 4 Architecture Diagram Images to PNG via @resvg/resvg-js...');
renderSvgToPng(diagram1Svg, 'docs/assets/diagram-01-complete-tech-stack-packages.png');
renderSvgToPng(diagram2Svg, 'docs/assets/diagram-02-four-ai-proposals-comparison.png');
renderSvgToPng(diagram3Svg, 'docs/assets/diagram-03-hierarchical-rag-packages-flow.png');
renderSvgToPng(diagram4Svg, 'docs/assets/diagram-04-speech-balloon-geometry-subart-deck.png');

console.log('All 4 Architecture Diagram Images Rendered Successfully!');
