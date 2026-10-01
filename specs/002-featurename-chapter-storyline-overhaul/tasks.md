# Tasks: Comic Authoring MCP Server and Chapter 1 Storyline Overhaul

**Feature ID:** 002-chapter-storyline-overhaul
**Status:** COMPLETED

---

## Task List

- [x] **T101: Implement `scripts/comic-authoring-mcp.mjs` stdio MCP server**
  - Expose tools: `pipeline_get_stage`, `pipeline_validate_story`, `pipeline_audit_rule19`, `pipeline_verify_chapter`.
- [x] **T102: Register `comic-authoring-mcp` in Antigravity MCP configuration**
  - Updated `C:\Users\AkshatSinha\.gemini\config\mcp_config.json`.
  - Added `npm run pipeline:validate` script in `package.json`.
- [x] **T103: Update `lesson01.js` chapter opener with locked Student Akshay Admit Card narrative**
  - Locked Student Akshay role, 8:30 AM quad sprint, leaking water bottle, dissolved seat ink, 12,000 student portal crash.
- [x] **T104: Embed 18-step syllabus prerequisite matrix and gotcha checklist in `lesson01.js`**
  - Inserted Section 1 comparison block and Section 2 structured breakdown with categories array.
- [x] **T105: Generate Scene 1 SVG (Quad sprint, leaking water bottle, dissolved ink, speech bubbles)**
  - Path: `src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/svgs/ch01-comic-scene1-admitcard-leak.svg`
- [x] **T106: Generate Scene 2 SVG (12k concurrent portal crash spinner, Sameer with cutting chai, speech bubbles)**
  - Path: `src/.../assets/svgs/ch01-comic-scene2-portal-spinner.svg`
- [x] **T107: Generate Scene 3 SVG (Bare black terminal, 14ms JSON rescue, speech bubbles)**
  - Path: `src/.../assets/svgs/ch01-comic-scene3-terminal-rescue.svg`
- [x] **T108: Generate Scene 4 SVG (Post-exam restaurant waiter model whiteboard, speech bubbles)**
  - Path: `src/.../assets/svgs/ch01-comic-scene4-waiter-architecture.svg`
- [x] **T109: Generate Scene 5 SVG (Port 3000 pair programming, req.body undefined error, express.json fix)**
  - Path: `src/.../assets/svgs/ch01-comic-scene5-port3000-middleware.svg`
- [x] **T110: Generate Scene 6 SVG (Brass Thali PUT vs PATCH and REST vs SOAP vs GraphQL comparison)**
  - Path: `src/.../assets/svgs/ch01-comic-scene6-protocols-thali.svg`
- [x] **T111: Wire all 6 comic panels into `lesson01.js` storyboard**
- [x] **T112: Align Admit Card code chunks and CRUD operations in `lesson01.js`**
  - Port 3000 server, `express.json()`, PUT vs PATCH Brass Thali.
- [x] **T113: Update interactive workbench SVGs to Admit Card endpoints**
  - Updated `ch01-workbench-get-menu.svg` and `ch01-workbench-post-menu.svg`.
- [x] **T114: Audit Rule 19 compliance (zero hyphens/dashes in headings or titles)**
  - MCP audit confirmed 0 violations.
- [x] **T115: Run empirical validation (`npm test`, `npm run build`, `npm run generate:docx`, `npm run build:single`)**
  - 100% green across all 4 formats.