# Master Architecture Proposal and AI Consultant Directive: Universal Multi-Subject Publishing Engine and Hierarchical RAG

## Document Context and Purpose
This document serves as an exhaustive Request for Architecture Proposal (RFAP) and Master Directive. It records everything built to date in the **Sarva Gyana Koshah** publishing architecture, analyzes the lessons learned during the transformation of the flagship book *Zero to Agentic API Testing*, outlines the vision for an autonomous book generation IDE and pipeline, and directs the incoming Senior AI Architect to propose a complete, scalable system design.

---

## 1. Executive Summary: What We Have Built

Sarva Gyana Koshah is a scalable, single source, multi subject publishing platform engineered to replace dry academic textbooks with culturally grounded, emotionally charged graphic novel storybooks and interactive software workbenches.

### 1.1 The Technical Foundations
* **Repository Architecture:** Monorepo with a standalone universal authoring framework in `framework/`, modular book editions in `src/books/`, reusable React component renderers in `src/components/Blocks.jsx`, design tokens in `src/styles/core/`, and export pipelines in `src/export/`.
* **Current Catalog:**
  * *Zero to Agentic API Testing* (13 Chapters covering First Principles, Status Codes, Postman, JavaScript Assertions, Variable Scopes, Request Chaining, Data Driven Testing, Resilience, Mock Servers, OAuth 2.0, SOAP 1.2 XML, Newman CI CD).
  * *Python for Absolute Beginners* (8 Chapters covering First Code to Functions and Modules).
* **The Standalone Universal Framework (`framework/`):**
  * 20 core system documents (`01-brand-identity-system.md` through `20-gameplay-spec.md`).
  * 9 domain pedagogical modules (`v01` through `v27`) spanning Technical Programming, Polity and Law, Economics and Commerce, Competitive Exam Rubrics, and Mathematics.
  * 6 audience calibration profiles (`ap01` through `ap06`).
* **Automated Quality and Audit CLI Tools:**
  * `framework/tools/audit-chapter.mjs`: Seven dimension automated audit engine scoring chapters against a 90% threshold.
  * `framework/tools/rule19-checker.mjs`: Strict scanner certifying zero hyphens or dashes in user prose.
  * `npm test` and `npm run test:api`: Automated Newman execution against a local companion mock server (port 5050) with 100% pass rates.
* **Mathematical Watermark Eradication Engine:**
  * Automated Python pipeline (`scripts/remove_gemini_watermarks.py`) that reverses Google Gemini SynthID watermarks via linear alpha inversion ($O = \frac{I - 255 \cdot \alpha}{1 - \alpha}$) and adaptive Telea inpainting across 255 image assets without blurring line art.

### 1.2 The Comic Storybook Implementation (Chapter 1 Standard)
* **Five Narrative Acts (35 Visual Beats):** The high stakes 08:30 AM exam crisis where student Akshay has his brass water bottle leak over his paper admit card, the 504 gateway timeout, the 14 millisecond terminal rescue by architect Sameer, the stepwell canteen waiter courier model, bootstrapping an Express server on port 3000, solving the byte stream `undefined` crash, the brass thali rule (PUT replaces the entire platter while PATCH toppings up the dal), and the sunset showdown comparing REST, SOAP, and GraphQL.
* **Cultural Aesthetic Identity:** Madhubani Folk Tech hybrid (double black ink outlines, sharp almond eyes, traditional attire) set in modern engineering environments (open slim laptops, server racks, network diagnostic slates, cutting chai glasses).
* **The Four Part Pedagogical Card:** Input (Wire Request), Under the Hood (Execution Pipeline), Output (Formatted Response), and Senior Savior (Architectural Insight).
* **Interactive Software Workbenches:** Live tabbed consoles featuring character avatars, cURL execution, step by step traces, and API inspectors.

---

## 2. Forensic Analysis: The Speech Balloon Crisis and Resolution

A critical design challenge emerged during development that every future book agent must understand:

### 2.1 Why Previous Attempts Failed
1. **The Prose Paragraph Trap:** Early speech balloons contained 40 to 60 words of dense tutorial explanation. When rendered at readable sizes, the balloon expanded downward to cover 60% of the image height, dropping right over characters' eyes, glasses, and faces.
2. **The Multi Speaker Cramming Trap:** When Akshay, Sameer, and fellow students spoke in sequence, attempts to stack three balloons onto a single image forced text into the center of the frame and created a visual disconnect where Sameer spoke over a picture of Akshay alone.
3. **The False Fix (The External Header Dock):** To stop face collisions, dialogues were pulled entirely outside the image into a grey box above the frame (`.comic-dialogue-dock`). While this eliminated face overlap, it destroyed the graphic novel experience, reducing an immersive comic into a dry web card or an admin inspection checklist.

### 2.2 The Proven Solution (The Dialogue Test Lab Prototype)
Documented in `docs/COMIC_DIALOGUE_ARCHITECTURE.md` and verified in `src/components/DialogueTestLab.jsx`:

1. **Inside Image Glassmorphism Balloons:** Speech balloons float **inside the 16:9 illustration frame** using absolute positioning pinned to the top negative headroom (`top: 4%` to `12%`).
2. **The 120 Character Spoken Dialogue Ceiling:** Balloons carry only punchy, spoken human emotion (under 18 words / 120 characters), keeping balloon height under 70 pixels so the lower 75% character zone remains 100% visible and un-obscured.
3. **The Cinematic Cutaway Rule:** One primary speaker per panel. Instead of stacking dialogues, the storyboard cuts between camera angles using our library of 153+ images (Akshay panicked close up to students running cutaway to Sameer lifting his diagnostic slate).
4. **The Sub Art Grounding Deck:** Deep technical definitions, RFC standards, and byte stream math are moved to the narrative caption and Senior Savior rule card placed **directly beneath the artwork**, leaving the balloon inside the art light, agile, and expressive.

---

## 3. What We Are Envisioning: The Universal Publishing IDE

We want to expand this architecture into a comprehensive authoring engine where an IDE or an autonomous agent can generate complete, engaging books across diverse subjects:

```text
                                IDE COMMAND
            "create:book --domain law --title Indian Constitutional Law"
                                    │
                                    ▼
                     HIERARCHICAL RAG KNOWLEDGE SYSTEM
                                    │
          ┌─────────────────────────┴─────────────────────────┐
          ▼                                                   ▼
┌─────────────────────────┐                         ┌─────────────────────────┐
│      TIER 1 (ROOT)      │                         │    TIER 2 (PER BOOK)    │
│    Universal Invariants │                         │   Book Level Variables  │
│     `framework/rag/`    │                         │   `[book-path]/rag/`    │
├─────────────────────────┤                         ├─────────────────────────┤
│ • Rule 19: Zero hyphens │                         │ • Character Dossiers    │
│ • Inside-Image Balloons │                         │   (Outfits, Voices)     │
│ • 4-Part Card Standard  │                         │ • Continuity Ledger     │
│ • Madhubani Folk Style  │                         │ • Domain Terminology    │
│ • 5-Act Narrative Arc   │                         │ • Asset Reference Map   │
│ • 90%+ Audit Engine     │                         │ • Grade Calibration     │
└─────────────────────────┘                         └─────────────────────────┘
                                    │
                                    ▼
                     AUTONOMOUS GENERATION PIPELINE
         Research Brief → Storyboard Blueprint → Image Generation
         → Watermark Unblend → Dialouge Script → Automated Audit
                                    │
                                    ▼
                       MULTI FORMAT EXPORT ENGINE
         Interactive Web App · Standalone Single HTML · DOCX · PDF
```

### 3.1 The Proposed Hierarchical RAG and FAISS Architecture
* **Universal RAG (`framework/rag/`):** Contains the eternal laws that never change across any book:
  * Strict Rule 19 (zero hyphens or dashes in user prose).
  * Inside image balloon geometry (top 25% negative headroom, 120 character max, directional tails, zero face occlusion).
  * The 4 part pedagogical card standard.
  * Visual composition constraints (Madhubani linework, light mode first, no medieval clutter).
* **Book Level RAG (`src/books/.../[book-id]/rag/`):** Contains the variables unique to that book:
  * Character dossiers and voice guides (e.g. Akshay and Sameer for API Testing; Meera and Justice Vikram for Constitutional Law; Arjun and Kautilya for Economics).
  * Established story continuity across previous chapters (e.g. Chapter 2 builds on the Port 3000 Express server from Chapter 1).
  * Subject specific interactive components (e.g. Courtroom Evidence Board for Law; Bazaar Trading Simulator for Economics; Molecular Balances for Chemistry).
* **The Continuous Learning and Amendment Gate:**
  * When an incoming agent discovers a new critical pattern or resolves an asset discrepancy, it drafts an amendment card using `amend_rag.py`.
  * The agent presents the proposed amendment to the user: *"I discovered that Chapter 2 requires a specific 400 Bad Request guard. I have drafted an amendment for the Book RAG ledger. Do you approve, or would you like adjustments?"*
  * Upon approval, the FAISS vector index is updated and committed to Git.

---

## 4. Specific Directive to the Consulting AI Architect

As our Senior Publishing Systems Architect, please review our codebase and provide a comprehensive, rigorous proposal addressing the following six requirements:

### Requirement 1: Comprehensive System Architecture and Pipeline Blueprint
* Detail the complete architectural blueprint for our autonomous book publishing IDE.
* Define the end to end pipeline stages: Topic Selection → Curriculum Decomposition → Research Briefing → Five Act Narrative Storyboard Blueprinting → Visual Asset Generation → Watermark Cleansing → Dialogue Authoring → Automated CLI Verification → Production Compilation.
* Specify how each stage validates prerequisites and enforces invariants before advancing.

### Requirement 2: Hierarchical RAG and FAISS Technical Specification
* Provide the concrete technical implementation for our two tier RAG system:
  * Vector store selection (`faiss-cpu`) and indexing mechanics.
  * Directory layout, chunk schema, and metadata tags for both Universal and Book Level stores.
  * Search CLI interface supporting cross book and intra book scoping (`python3 framework/rag/search.py --book <id> "<query>"`).
  * The amendment protocol and user confirmation workflow (`amend_rag.py`).
  * Hybrid fallback mechanisms (dense FAISS vector retrieval combined with zero dependency Node.js BM25 keyword matching).

### Requirement 3: Multi-Domain Pedagogical Engagement Archetypes
* Propose how the authoring engine adapts its storytelling and interactive widgets across at least five distinct domains:
  1. **Software and Systems Engineering:** Comic pairing, terminal crashes, byte stream aqueducts, live API workbenches.
  2. **Constitutional Law and Polity:** Courtroom trial drama, petitioner defense tables, interactive evidence exhibits, Supreme Court ratio decendi.
  3. **Economics, Commerce and Public Finance:** Bazaar price wars, supply demand balance scales, GST ledger simulations.
  4. **Mathematics and Theoretical Physics:** Geometric derivations, visual function graphs, step by step algebraic transformations.
  5. **Competitive Examinations (UPSC, PSC):** High yield case studies, marking rubrics, previous year question forensics, flashcard mnemonics.
* For each domain, define the mentor apprentice dynamic, cultural visual palette, and interactive workbench component.

### Requirement 4: Graphic Novel Balloon Engine and Zero Occlusion Guarantee
* Provide the exact mathematical and CSS rules for rendering speech balloons inside 16:9 illustrations without ever covering a character's face, hands, or props.
* Formulate the spatial quadrant layout algorithm (`top-left`, `top-right`, `top-center`, `bottom-split`) and directional SVG pointer tail positioning.
* Define the strict boundary between visceral inside image dialogue (< 120 characters) and deep technical exposition in the sub art Tier 3 grounding deck.

### Requirement 5: Strict Language Quality and Rule 19 Enforcement
* Outline the automated linting and lexical inspection architecture that enforces strict Rule 19 compliance (zero hyphens or dashes in user facing prose, headings, and dialogues).
* Detail natural phrasing alternatives that maintain emotional cadence, technical accuracy, and rhythmic prose without relying on hyphens or dashes.

### Requirement 6: Step by Step Phased Execution Roadmap
* Provide a phased, actionable execution roadmap following the project's GSD and SpecKit workflows:
  * Phase 1: Universal and Book Level RAG and FAISS Engine implementation.
  * Phase 2: Graphic Novel Speech Balloon Engine overhaul in `Blocks.jsx` and `publishing.css`.
  * Phase 3: Chapter 1 Storyboard 35 beat expansion and live preview audit.
  * Phase 4: Chapter 2 Transit War Room Storyboard authoring and asset mapping.
  * Phase 5: Automated Book Creation CLI (`scripts/create-book-curriculum.mjs`).

---

## 5. Acceptance Criteria for the Proposal
A successful architectural proposal must:
* Respect all existing project assets, tests, and configurations.
* Provide concrete code structures, schemas, and CLI commands rather than vague abstractions.
* Ensure 100% compatibility with our React frontend, Vite bundler, Newman API runner, and Node.js backend.
* Guarantee that future AI agents can autonomously generate new chapters and new books that achieve 90%+ audit scores on first compilation.
