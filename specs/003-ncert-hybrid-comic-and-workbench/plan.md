# Implementation Plan: NCERT Hybrid Comic & Wire Workbench Architecture

**Feature ID:** 003-ncert-hybrid-comic-and-workbench
**Plan Date:** 2026-10-01
**Status:** IMPLEMENTED AND VERIFIED

---

## 1. Technical Strategy

1. **Rendering Engine Enhancements (`Blocks.jsx`):**
   - Extend `Storyboard` to support:
     - `panel.dialogues` array for multi-turn character banter.
     - `hero` and `fullWidth` properties to expand dramatic anchor panels.
     - Responsive grid column classes (`grid-cols-1`, `grid-cols-2`, `grid-cols-3`).
   - Extend `ComicWorkbench` to support:
     - Interactive tab bar (`tabs` prop) allowing learners to switch between operations (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).
     - Dynamic rendering of `activeWorkbench`, `activeIde`, and `activeBreakdown`.

2. **Styling Layer (`publishing.css`):**
   - Clean NCERT speech balloons with directional tails, avatar badges, and light-theme contrast.
   - Responsive multi-column grid layout rules.
   - Print-safe styles (`break-inside: avoid; background: #ffffff;`).

3. **Multi-Format Export (`docx.js`):**
   - Traverse `panel.dialogues` and emit bold speaker labels with distinct color coding.
   - Render tabbed workbench views sequentially in tables with code formatting and quad breakdowns.

4. **Curriculum & Narrative Data (`lesson01.js`):**
   - Reconstruct Chapter 1 into 5 narrative acts:
     - **Act 1:** The Morning Quad Crisis & 14ms Wire Rescue.
     - **Interface 1:** Network Waterfall Inspector vs 14ms Wire Payload.
     - **Act 2:** The Canteen Courier Model & Menu Contract.
     - **Act 3:** Pair Programming & Byte Stream Trap.
     - **Interface 2:** Progressive `server.js` IDE & Byte Stream Parser.
     - **Act 4:** The Five CRUD Verbs & Brass Thali Rule.
     - **Interface 3:** 5-Tab CRUD Console (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).
     - **Act 5:** The Three Paradigms Synthesis & Sunset Toast.
     - **Interface 4:** Multi-Paradigm Comparison Lens (REST vs SOAP vs GraphQL).

5. **Empirical Quality Gate:**
   - Verify Rule 19 punctuation compliance (zero hyphens/dashes in headings).
   - Run snippet and Newman integration test suite (`npm test`).
   - Generate native `.docx` deliverable (`npm run generate:docx`).
