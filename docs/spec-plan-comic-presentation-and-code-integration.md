# GSD & Spec-Kit Implementation Plan: Visual Presentation & Code Integration Architecture

**Milestone:** Production Quality Graphic Comic Panels & First-Principles Interactive Code Workbenches  
**Target Book:** Book 3: *Zero to Agentic API Testing* (`edition-01`) & Book 1: *First Bytecode*  
**Core Framework:** GSD (Get Stuff Done) + Spec-Kit (`.specify/`) Standard  

---

## 🎯 Executive Problem Statement (Audit of What Was Wrong)

1. **Dialogue Ceiling & Headroom Violation:** Speech balloons float directly over characters' heads/faces in 16:9 comic cards because the CSS overlay is positioned with rigid percentages (`top: 4%` to `8%`), covering critical character expressions.
2. **Art Style Drift:** Inconsistency between rich cross-hatched gouache realism (Beat 1: Brass water bottle leak) versus flat 2D cartoon vector lines (Beat 2: Akshay on quad).
3. **Card Clutter & Internal Prompt Artifacts:** Three levels of redundant text under each image (Caption + `SCENE & ACTION` + `THE CORE WIRE LESSON`), making the interface feel like an internal design proofing tool rather than a published graphic novel.
4. **Intrusive Lightbox Tooltip:** Hovering over panel cards triggers a disruptive, persistent browser tooltip (`"Click panel to open full-resolution Lightbox"`) that blocks surrounding cards.
5. **Disconnected Code & Lab Progression:** Comic scenes and code workbenches need a unified pedagogical rhythm (Visual Hook $\to$ Mechanical Metaphor $\to$ Hands-On Code Workbench $\to$ Verified Output $\to$ Diagnostic Triage).

---

## 📐 The 4-Phase GSD Execution Plan

```text
┌────────────────────────────────────────────────────────────────────────┐
│                   GSD & SPEC-KIT ROADMAP PHASES                        │
├────────────────────────────────────────────────────────────────────────┤
│  PHASE 1: PRESENTATION GLASS & SPEECH BALLOON ARCHITECTURE             │
│  • Redesign balloon CSS to stay pinned in negative headspace or top    │
│    header strip; never cover faces.                                    │
│  • Remove persistent "title" tooltip attribute from storyboard cards.  │
│  • Streamline below-panel text: eliminate duplicate "Scene & Action"   │
│    and elevate "The Core Wire Lesson" callout.                         │
├────────────────────────────────────────────────────────────────────────┤
│  PHASE 2: VISUAL STYLE ALIGNMENT & WINNER ASSET MAPPING                │
│  • Audit the 189 incoming images in `incoming_oct03/`.                 │
│  • Replace flat cartoon assets with painterly, textured graphic-novel  │
│    winners (matching Beat 1's mature aesthetic).                       │
│  • Map all 5 Acts of Chapter 01 to consistent visual assets.           │
├────────────────────────────────────────────────────────────────────────┤
│  PHASE 3: DUAL-PLANE CODE WORKBENCH & LAB INTEGRATION                  │
│  • Structure the 4 core equipment benches:                             │
│    1. Bench 1: Presentation Glass vs Raw Wire API (14ms response).     │
│    2. Bench 2: Progressive Server Boot & express.json() byte sieve.    │
│    3. Bench 3: Five CRUD Endpoints Console & Brass Thali wipe.         │
│    4. Bench 4: Architecture Lens (REST vs SOAP vs GraphQL).            │
│  • Ensure every code snippet is executable, unit-tested, and verified. │
├────────────────────────────────────────────────────────────────────────┤
│  PHASE 4: MULTI-FORMAT RENDER & RIGOROUS QUALITY AUDIT                 │
│  • Verify interactive Web View (React).                                │
│  • Verify static Book / PDF layout (clean pagination, no overlaps).    │
│  • Run full test suite (`npm test`, snippet tests, Newman collection). │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 📋 Phase-by-Phase Task Breakdown (Spec-Kit Format)

### Phase 1: Presentation & Headroom Fixes (UI & CSS)
- [ ] **Task 1.1:** In `src/components/Blocks.jsx`, remove the `title="Click panel to open full-resolution Lightbox"` attribute from the outer card to eliminate the persistent cursor tooltip box.
- [ ] **Task 1.2:** In `src/components/Blocks.jsx`, refine the speech balloon overlay:
  - Constrain balloons to the top 20% negative space with a semi-transparent blur badge.
  - Add responsive headroom padding so balloons dynamically dock above character heads.
  - Alternatively, render dialogue in a dedicated comic speech strip directly above the art frame if headroom is low.
- [ ] **Task 1.3:** Streamline the card footer:
  - Remove the redundant `SCENE & ACTION` block (which duplicates the caption/dialogue).
  - Retain the clean image caption and the crisp **💡 The Core Wire Lesson** box.

### Phase 2: Visual Asset Quality & Style Alignment
- [ ] **Task 2.1:** Review Beat 2 (`act01_scene03_akshay_soaked_admit_card.jpg`) and replace with the high-resolution, textured candidate from `incoming_oct03` that matches Beat 1's rich gouache watercolor style.
- [ ] **Task 2.2:** Verify that all character appearances in Act 1 to Act 5 consistently feature:
  - Akshay in clean white handloom kurta with sleeves rolled (no tattoos, no fish prints).
  - Sameer in peacock-indigo kurta with dark waistcoat and brass chai carrier.
  - Laptops and terminals showing authentic dark-mode VS Code / Node.js CLI text (no folk-art squiggles on screens).

### Phase 3: Interactive Code Workbench & Lab Wiring
- [ ] **Task 3.1:** Verify that every equipment bench (`comic-workbench`) features:
  - **Quadrant 1:** Request parameters / curl command.
  - **Quadrant 2:** Architectural explanation of TCP byte stream or HTTP headers.
  - **Quadrant 3:** Exact terminal response body and HTTP status code.
  - **Quadrant 4:** Trap & Fix diagnosis (e.g. `req.body is undefined` caused by missing middleware).
- [ ] **Task 3.2:** Ensure all code snippets in Chapter 01 pass automated execution in `scripts/validate-all-snippets.mjs`.

### Phase 4: Full Validation & Quality Gate
- [ ] **Task 4.1:** Run `npm test` to validate manifest schemas, chapter blocks, and Newman collections.
- [ ] **Task 4.2:** Build single-file offline HTML (`npm run build:single`) and test in browser to ensure static print readability.
