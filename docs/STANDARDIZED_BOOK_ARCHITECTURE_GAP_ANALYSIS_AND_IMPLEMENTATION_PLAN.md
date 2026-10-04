# Stand standardized Book Architecture: Forensic Gap Analysis and Master Implementation Plan

**Document ID:** `SGK-ARCH-GAP-PLAN-v2`  
**Imprint:** Sarva Gyana Koshah Books (The Sinha Family Group)  
**Scope:** Universal Publishing Engine (`framework/`), Active Technical Titles (`zero-to-agentic-api-testing`, `python-absolute-beginners`), and Cross Domain Verticals  
**Author:** Lead Systems Architect and Authoring Guild  
**Status:** Canon  

---

## 1. Executive Summary

Sarva Gyana Koshah transforms dry technical and academic non fiction into cinematic graphic novels paired with interactive software workbenches. To scale this publishing model across diverse disciplines (software engineering, constitutional law, commerce, and competitive examinations), the authoring and asset pipeline must adhere to an **identical canonical folder structure** and maintain **a single comprehensive master story and dialogue ledger** per title.

This document delivers a forensic gap analysis of the current repository, defines the invariant directory standard, specifies the single master ledger format, and outlines the step by step implementation plan for all thirteen chapters.

---

## 2. Forensic Gap Analysis

A rigorous inspection of the repository reveals seven primary architectural gaps across titles, pipeline stages, asset curation, and pedagogical contracts.

```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                            REPOSITORY GAP AUDIT MATRIX                               │
├──────────────────────────┬──────────────────────────┬────────────────────────────────┤
│ Subsystem / Dimension    │ Current State            │ Target Canonical Requirement   │
├──────────────────────────┼──────────────────────────┼────────────────────────────────┤
│ 1. Book Folder Uniformity│ Asymmetric. Only Book 3  │ Identical canonical folder     │
│                          │ had partial pipeline and │ structure for all books:       │
│                          │ artifacts folders. Book 1│ `rag/`, `pipeline/ch01-chNN/`, │
│                          │ lacked pipeline entirely.│ `incoming/`, `useful/`, etc.   │
├──────────────────────────┼──────────────────────────┼────────────────────────────────┤
│ 2. Pipeline Subfolders   │ Only ch01 had triage     │ Every chapter ch01 to chNN has │
│    (Triage & Ingestion)  │ folders. ch02 to ch13    │ `incoming/`, `useful/`, and    │
│                          │ lacked incoming/useful.  │ `not_useful/` subfolders.      │
├──────────────────────────┼──────────────────────────┼────────────────────────────────┤
│ 3. Master Story & Script │ Fragmented across prompt │ One comprehensive master MD    │
│    Ledger per Title      │ files; ch04 to ch13 only │ ledger per book unifying all   │
│                          │ had bare prompt stubs.   │ scenes, dialogues, and prompts.│
├──────────────────────────┼──────────────────────────┼────────────────────────────────┤
│ 4. Flow AI Prompt Layer  │ Detailed for ch01-ch03;  │ Standardized handoff format    │
│    and Headroom Invariant│ absent for ch04 to ch13. │ for all chapters (no text,     │
│                          │ Headroom rule not uniform│ top 25% negative headroom).    │
├──────────────────────────┼──────────────────────────┼────────────────────────────────┤
│ 5. Balloon Compositor    │ ch01 upgraded to inside  │ All chapters use inside image  │
│    and Face Occlusion    │ image balloons; ch02-13  │ glassmorphic balloons in       │
│                          │ not yet standardized.    │ negative headroom (<120 chars).│
├──────────────────────────┼──────────────────────────┼────────────────────────────────┤
│ 6. Four Part Cards       │ Implemented in Blocks    │ Dedicated QuadCards across all │
│    (Pedagogical Invariant│ and ch01; missing in     │ chapters, providing 15/15 pts  │
│    for D5 Audit)         │ subsequent chapters.     │ on audit dimension 5.          │
├──────────────────────────┼──────────────────────────┼────────────────────────────────┤
│ 7. Book Level FAISS RAG  │ Indexed for ch01 beats;  │ Full book vector index mapping │
│    Coverage              │ absent for Book 1.       │ character dossiers and states. │
└──────────────────────────┴──────────────────────────┴────────────────────────────────┘
```

### Gap 1: Structural Divergence Between Book Packages
* **Finding:** While `zero-to-agentic-api-testing` contained `artifacts/`, `pipeline/`, and partial RAG stores, `python-absolute-beginners` lacked `pipeline/`, `artifacts/`, and `rag/` completely.
* **Remedy:** Stand up identical top level directories across all book packages. Every title must feature `rag/`, `pipeline/`, `artifacts/`, and `editions/`.

### Gap 2: Incomplete Chapter Pipeline Stages (Chapters 4 to 13)
* **Finding:** In `zero-to-agentic-api-testing/pipeline/`, only `ch01` possessed full incoming and organized triage directories. Chapters 4 through 13 existed only as single bare stub prompt files (`01-ARCHITECT_AI_PROMPT.md`), lacking syllabus specifications, story scripts, Flow AI prompt packages, and triage storage.
* **Remedy:** Instantiate `pipeline/ch01/` through `pipeline/ch13/` with standardized subdirectories (`incoming/`, `organized/useful/`, `organized/not_useful/`).

### Gap 3: Absence of a Single Comprehensive Master Production Ledger
* **Finding:** Narrative scripts, dialogues, and visual prompts were dispersed across disconnected files (`02-STORY_AI_SCRIPT.md`, `03-IMAGE_AI_PROMPTS.md`, `MASTER_VISUAL_PRODUCTION_PROMPT_CH02_CH03.md`). Anyone entering the project could not find a unified, end to end narrative document.
* **Remedy:** Compile a single master document per title: `MASTER_STORY_AND_DIALOGUE_LEDGER.md`. This ledger consolidates every chapter, scene beat, spoken dialogue line, emotional tone, interactive workbench specification, 4-tier card, and Flow AI image prompt.

### Gap 4: Clean Technology vs Folk Art Boundary Invariant
* **Finding:** Early AI generation runs mistakenly rendered tribal squiggles or folk art patterns on computer screens, books, and code editors.
* **Remedy:** Codified in `agent.md` and Universal RAG. Screens and technical props must be photorealistic (dark mode VS Code, Node.js terminal CLI output, clean printed typography). Madhubani styling is strictly reserved for character anatomy and heritage architecture.

### Gap 5: Headroom Geometry and Balloon Occlusion
* **Finding:** Several early panels stacked dialogues outside the art or allowed character heads to penetrate the top 25% ceiling, occluding faces.
* **Remedy:** Mandatory 25% to 30% negative headroom in every image prompt. All dialogues must float inside the frame at top 4%, left or right 3%, max width 34%, with short spoken lines (<120 characters / <18 words).

---

## 3. Standardized Canonical Book Package Schema

Every title in `src/books/[domain]/[subdomain]/[book-id]/` must possess this exact directory structure:

```text
src/books/[domain]/[subdomain]/[book-id]/
├── book.manifest.json               # Book metadata, target readers, edition registry
├── BOOK_BRIEF.md                    # Pedagogical premise, target persona, learning arc
├── MASTER_STORY_AND_DIALOGUE_LEDGER.md # Single master production reference file
├── AGENTS.md                        # Book specific agent directives and character rules
├── rag/                             # Tier 2 Book Level FAISS RAG Store
│   ├── book.index                   # FAISS dense vector cosine index (dim=128)
│   ├── book_meta.json               # Vector chunk metadata and provenance log
│   ├── character_ledger.json        # Character profiles (attire, eyes, voice profile)
│   ├── narrative_beats_master.json  # Comprehensive beats across all chapters
│   ├── technical_state_ledger.json  # Ports, endpoints, schemas, defensive traps
│   └── asset_manifest.json          # Approved art assets registry
├── pipeline/                        # Chapter by chapter production pipeline
│   ├── ch01/
│   │   ├── 01-ARCHITECT_AI_SYLLABUS.md
│   │   ├── 02-STORY_AI_SCRIPT.md   # Scene breakdown, dialogues, emotional states
│   │   ├── 03-IMAGE_AI_PROMPTS.md  # Clean prompts for Flow AI (no baked text)
│   │   ├── incoming/               # Ingestion dropzone for raw Flow AI generations
│   │   └── organized/
│   │       ├── useful/             # Approved images meeting 5 acceptance criteria
│   │       └── not_useful/         # Rejected candidates with defect documentation
│   ├── ch02/ ... chNN/             # Identical structure for every chapter
├── editions/
│   └── edition-01/
│       ├── edition.manifest.json
│       ├── assets/
│       │   ├── illustrations/      # Production linked images from useful/
│       │   └── svgs/               # Interactive workbenches, diagrams, UI screens
│       └── content/
│           ├── index.js
│           ├── curriculum.js
│           ├── preface.js
│           └── lesson01.js ... lessonNN.js
└── artifacts/
    ├── audits/                      # audit-chapter.mjs scorecard JSON and reports
    ├── blueprints/                  # Pedagogical blueprints
    ├── handoff-memos/               # Stage gate signoffs
    ├── image-prompts/               # Compiled prompt bundles
    └── storyboards/                 # Storyboard markdown files
```

---

## 4. Master Story and Dialogue Ledger Specification

Each book root must house `MASTER_STORY_AND_DIALOGUE_LEDGER.md`. This master ledger is structured as follows:

```markdown
# [Book Title]: Master Story and Dialogue Production Ledger

## Section 1: Universe Bible and Character Continuity Locks
* Character physical profiles, attire locks, voice registers, and speech accents.
* World setting rules: 300-year-old sandstone architecture blended with modern Silicon engineering servers.
* Technology screen rules: Real syntax highlighted code, dark mode VS Code, zero decorative squiggles.

## Section 2: Chapter by Chapter Comprehensive Ledger
For each Chapter (Chapter 1 to Chapter N):
### Chapter XX: [Chapter Title]
* **Mission Context & Crisis:** The stakes, deadline, and real world engineer crisis.
* **Syllabus & Core Wire Epiphany:** Pedagogical concepts and senior mentor takeaways.
* **Scene Beats Matrix (Table):**
  - Beat Number | Timestamp | Setting | Shot Archetype | Speaker | Spoken Dialogue (<120 chars) | Emotion | Asset Path
* **Interactive Software Workbench Specifications:**
  - Active tabs, HTTP method, URL, headers, request body, response status, and live response body.
* **Four Part Pedagogical Cards (Input, Under the Hood, Output, Senior Savior).**
* **Flow AI Prompts:** Complete, granular, full bleed 16:9 prompts with negative headroom specifications and zero baked in text.
```

---

## 5. Master Implementation Plan

The multi agent implementation advances through five structured phases:

```text
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 1: DIRECTORY STANDARDIZATION & CANON RAG INGESTION (COMPLETED)   │
│ • Uniform pipeline and rag subdirectories instantiated across books    │
│ • Tier 2 FAISS vector index built for both active titles               │
│ • agent.md codified at repository root                                 │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 2: MASTER STORY & DIALOGUE LEDGER CREATION                       │
│ • Author MASTER_STORY_AND_DIALOGUE_LEDGER.md for Book 3                │
│ • Consolidate Chapters 1 through 13 with scenes, dialogues, emotions   │
│ • Enforce Rule 19 across all master prose and dialogues                │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 3: CHAPTER 2 EXPANSION & CERTIFICATION (WAR ROOM INCIDENT)       │
│ • Wire approved Ch 2 illustrations into lesson02.js                    │
│ • Deploy inside image floating balloons in negative headroom           │
│ • Mount 3 four part pedagogical cards (500 crash, 400 guard, 200)      │
│ • Run audit-chapter.mjs (achieve >=90/100) and verify Rule 19 clean    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 4: CHAPTERS 3 THROUGH 8 (POSTMAN WORKBENCH & JS DATA PIPELINES)  │
│ • Ch 3: Postman collections, assertions, and Red Before Green rule     │
│ • Ch 4 to 6: REST library CRUD, Newman CLI automation, and CI/CD gates │
│ • Ch 7 to 8: JavaScript array transformations and environment variables│
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 5: CHAPTERS 9 THROUGH 13 (ADVANCED PROTOCOLS & AGENTIC TESTING)  │
│ • Ch 9: E-Commerce auth tokens and data driven testing                 │
│ • Ch 10: GraphQL AST queries and payload optimization                  │
│ • Ch 11: OAuth 2.0 handshake and token exchange                        │
│ • Ch 12: SOAP 1.2 XML envelopes and WSDL validation                    │
│ • Ch 13: Capstone Agentic API Testing Pipeline                         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Image Triage and Curation Operational Protocol

When Flow AI images arrive in `pipeline/chXX/incoming/`:
1. **Automated Inspection:** Check image dimensions (1200x675 or 16:9 equivalent) and measure upper 25% luminance variance to confirm empty headroom.
2. **Rejection Sorting (`organized/not_useful/`):**
   - Headroom filled with character heads or high props.
   - Dialogue bubbles, text, or labels baked into pixel art.
   - Tribal folk art patterns across screens, code editors, or menus.
   - Outer margins or decorative borders.
   - Character attire drift (e.g. Akshay wearing non white kurti).
3. **Approval Sorting (`organized/useful/`):**
   - Canonical rename: `chXX_actY_sceneZZ_[descriptor].jpg`.
   - Asset manifest updated: `rag/asset_manifest.json`.
   - Content linking: Copied or symlinked to `editions/edition-01/assets/illustrations/acts/actY/`.

---

## 7. Quality Gate Enforcement Checklist

Prior to ratifying any chapter into canon:
- [ ] Directory structure strictly matches canonical schema.
- [ ] Chapter content authored in `lessonXX.js` with inside image floating balloons.
- [ ] All spoken dialogue lines are under 120 characters and under 18 words.
- [ ] Zero hyphens or dashes in all user facing prose, headings, and speech balloons (`rule19-checker.mjs` clean).
- [ ] Four part pedagogical cards present for every core technical transaction.
- [ ] `node framework/tools/audit-chapter.mjs` scores 90 or above.
- [ ] `npm test` passes 100% (47/47 assertions, Newman test suites pass with zero failures).
- [ ] FAISS vector index recomputed and ratified via `amend_rag.py --confirm`.
