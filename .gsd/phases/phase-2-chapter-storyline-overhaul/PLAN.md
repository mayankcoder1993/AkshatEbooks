# PLAN: Phase 2.1 - Chapter 1 NCERT Comic & Wire Workbench Overhaul

<objective>
Transform Chapter 1 into an engaging NCERT-inspired graphic novel paired with 4 live interactive wire workbenches.
Eliminate reading fatigue through clean speech bubbles on white backgrounds, grand Indian heritage anchor scenes with modern high-tech conduits, and deterministic equipment interfaces with zero trademarked names.
</objective>

<tasks>
<task id="2.1.1">
  <name>Storyboard Engine Enhancement</name>
  <description>Support panel.dialogues array, responsive grid columns (grid-cols-1, grid-cols-2, grid-cols-3), and hero/fullWidth panels in Blocks.jsx and publishing.css.</description>
  <verification>Component renders multi-speaker speech balloons with avatars and responsive widths without syntax errors.</verification>
</task>

<task id="2.1.2">
  <name>Multi-Tab Workbench Integration</name>
  <description>Extend ComicWorkbench in Blocks.jsx with a tab switcher supporting multi-operation inspection (e.g. 5-tab CRUD console and progressive server IDE).</description>
  <verification>Tab buttons switch active request, response, code, and quad breakdown dynamically.</verification>
</task>

<task id="2.1.3">
  <name>Multi-Format DOCX Export Parity</name>
  <description>Update src/export/docx.js to iterate panel.dialogues and tabbed workbenches into structured Word tables.</description>
  <verification>npm run generate:docx completes with exit code 0.</verification>
</task>

<task id="2.1.4">
  <name>Chapter 1 Curriculum Rebuild</name>
  <description>Reconstruct lesson01.js into 5 NCERT dialogue acts and 4 dedicated interactive workbenches (Network Waterfall, Progressive IDE, 5-Tab CRUD, 3 Paradigms).</description>
  <verification>npm run prepare:books validates all 544 blocks and passes with 0 errors.</verification>
</task>

<task id="2.1.5">
  <name>Empirical Validation & Regression Gate</name>
  <description>Execute full test suite including 47 snippet tests and Newman API tests.</description>
  <verification>npm test passes with 100% green assertions.</verification>
</task>
</tasks>