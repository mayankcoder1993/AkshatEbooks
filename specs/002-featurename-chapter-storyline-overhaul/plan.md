# Implementation Plan: Comic Authoring MCP Server and Chapter 1 Admit Card Overhaul

**Feature ID:** 002-chapter-storyline-overhaul
**Plan Date:** 2026-10-01
**Status:** PLANNED

---

## Technical Strategy

1. **Local MCP Authoring Server (`comic-authoring-mcp`):**
   - Implement a lightweight, zero-dependency Node.js MCP server in `scripts/comic-authoring-mcp.mjs`.
   - Register it in `~/.gemini/config/mcp_config.json` and generate schema descriptors in `~/.gemini/antigravity-ide/mcp/comic-authoring/`.
   - Expose tools to guide each authoring stage: checking stage prerequisites, validating narrative continuity, auditing Rule 19 punctuation, generating comic SVGs with embedded speech bubbles, and executing full verification gates.

2. **Pedagogical Curriculum:**
   - Embed the 18-step syllabus prerequisite matrix and 9 gotcha categories directly into Chapter 1 front matter.
   - Lock Student Akshay and Architect Sameer into the 8:30 AM Admit Card crisis.

3. **Graphic Comic SVGs:**
   - Scene 1: Akshay running late, leaking water bottle, dissolved Hall/Seat number ink on Admit Card.
   - Scene 2: 12,000 student portal crash spinner, Sameer stepping in with hot cutting chai.
   - Scene 3: Bare black terminal rescue returning 14ms pure JSON (`GET /api/v1/admitcards/APX102`).
   - Scene 4: Post-exam Restaurant Waiter architecture whiteboard.
   - Scene 5: Pair programming on port 3000, `req.body is undefined` error and `app.use(express.json())` middleware fix.
   - Scene 6: Brass Thali PUT vs PATCH demonstration and REST vs SOAP vs GraphQL comparison.

4. **Engine Support:**
   - Configure `Blocks.jsx` to render speech bubbles cleanly above illustrations or directly inside SVG artwork without cluttering the page.

5. **Quality Gate:**
   - Zero hyphens or dashes in chapter titles or section headings (Rule 19).
   - All tests passing (`npm test`).
   - Production Vite bundle builds cleanly (`npm run build`).

---

## Phase Breakdown

- **Phase 1: Comic Authoring MCP Server Implementation and Registration**
  - Implement `scripts/comic-authoring-mcp.mjs`.
  - Register in MCP configuration and create tool schemas.
- **Phase 2: Curriculum Structure and Prerequisite Matrix**
  - Add 18-step matrix and gotcha checklist to `lesson01.js`.
- **Phase 3: Comic Storyboard and Native SVGs with Embedded Speech Bubbles**
  - Generate the canonical 6-scene comic SVGs with character artwork and speech bubbles.
- **Phase 4: Admit Card Server and Architecture Workbench Integration**
  - Wire port 3000 Admit Card endpoints, middleware explanation, and protocol comparisons.
- **Phase 5: Empirical Quality Verification**
  - Run Rule 19 audit, `npm test`, and `npm run build`.
