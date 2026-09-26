# FORMAT DECISION: Zero to Agentic API Testing

System: framework/unified/12-market-discovery-protocol.md, Section 5

Status: LOCKED at Guardrail 0.

---

## Product Specification

Product type: Concept and practice hybrid (each chapter teaches and tests within itself).

Reading mode: Daily plan primary (1 to 1.5 hours on weeknights, 2 hours weekends), cover to cover possible.

Physical reading context: Desk with laptop open, the book's server running, reader types along.

Time constraint: 6 to 8 weeks to complete at the stated pace.

Total chapters: 13, grouped in 3 missions.

---

## Page Budget

Target page count: 400

Maximum page count: 440 (hard limit)

Density ratio: Concept to practice 45:55 (practice heavy by design; this audience buys to DO)

Average pages per chapter: 30 to 33

Block type budget per chapter (from H06): minimum 4 scene-panels, 2 workbench-screens, 3 quad-cards, 2 challenge-prompt and reveal pairs, exactly 1 cliffhanger-panel; prose-paragraph maximum 3 at 50 words each.

---

## Output Formats

Primary: HTML Interactive Edition (the reader runs the book beside a live terminal; interactivity wins).

Include HTML Interactive Edition: YES (Vite + React + vite-plugin-singlefile, offline capable)

Include DOCX Manuscript Edition: YES (editorial review and print preparation)

Include PDF Print Edition: YES (print on demand and digital distribution)

Include EPUB Digital Edition: YES (Kindle and reflowable reading)

Include Game Build: NO for edition 1. Framework H20 gameplay spec is designed but deferred to edition 2 pending KPI review (Stage 10).

---

## Print Specifications (PDF)

Page size: Royal (156 mm x 234 mm) for code and workbench legibility.

Colour: Full colour (Madhubani illustrations and workbench screenshots require it).

Line height: 1.5 body. Code blocks: Consolas 10 pt with light slate shading.

Bleed and crop marks: YES for KDP submission.

KDP submission: YES.

---

## Language Configuration

Primary language: English.

Secondary language: None for edition 1.

Bilingual mode: None.

(Rule 19 active in all prose. Technical tokens whitelisted per H10.)

---

## Price

Target MRP: INR 599

Price tier: Mid Range

Pricing rationale: See MARKET_BRIEF.md, Price Tier section.

---

## Derived Products (Offer Ladder, decided at Stage 0)

Rung 1: Free Chapter 1 sampler (PDF) as lead magnet for the SGK site and GitHub Pages reader.

Rung 2: This core book, INR 599.

Rung 3: Question bank and drill companion (extracted from challenge blocks plus 2 extra variations per challenge), planned after edition 1 KPIs, target INR 299.

Rung 4: Crash course sprint (Chapters 1, 2, 3, 6, 7, 13 compressed), planned on demand, target INR 249.

Each rung names its own trigger (see OFFER_LADDER decisions recorded in handoff-stage00-to-stage01.md). Core chapters were built for extraction from day one: quad-cards, trap-alerts, and cliffhanger summaries are structured blocks, not prose.
