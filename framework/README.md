# Sarva Gyana Koshah (SGK) — Universal Publishing Framework

Version: 2.0.0
Classification: Permanent Operating System
Status: Production Ready

---

## What This Framework Is

This framework is the universal engine that produces every SGK book,
HTML reader, and game across every subject, every audience, and every
series. It is built once and never modified per book. Books are created
by applying this engine to subject-specific vertical modules and
audience-specific profiles. The engine itself never changes.

This directory contains zero book-specific content. Character names,
story details, technical content, setting descriptions, and plot points
belong in individual book workspaces under books/[book-id]/. If you
find book-specific content in this directory, it is an error and must
be moved.

---

## The Governing Principles (Read Before Anything Else)

These four principles govern every decision made by every agent using
this framework. When creative instinct conflicts with these principles,
the principles win.

PRINCIPLE 1: PROBLEM FIRST, SYLLABUS SECOND
We do not write books to cover subjects. We write books to solve a
specific reader's problem and create a specific transformation. A book
that covers 100 percent of a syllabus but solves 0 percent of the
reader's actual problem is a failure. Every chapter, every scene, every
dialogue must move the reader closer to the Book Promise. If it does
not, it does not belong in the book.

PRINCIPLE 2: COMIC FIRST, ALWAYS
Every SGK book is a visual storybook with embedded interactive elements
and technical accuracy. It is never a textbook with illustrations added
on top. Teaching happens through scenes, character dialogue, visual
panels, and hands-on interactive workbenches. Academic prose is
restricted by hard structural limits enforced by the audit engine. If
the output looks like a wall of text when rendered on screen, the
output is wrong regardless of how accurate the content is.

PRINCIPLE 3: VERIFY EVERYTHING
Every claim in every SGK book must be verifiable through an automated
or structured process. Code must execute and pass tests. Legal citations
must check against the actual statute. Numbers must recalculate.
Historical facts must carry named primary sources. If a claim cannot
be verified by the proof system defined for its vertical module, it
cannot be published.

PRINCIPLE 4: ONE ENGINE, UNLIMITED BOOKS
The unified engine is built once and reused forever. Vertical modules
plug into the engine. Audience profiles layer on top. No book gets a
custom pipeline, custom audit engine, or custom format rules. The engine
handles all of that universally so that generating the fiftieth book
costs the same effort as generating the fifth.

---

## The 4-Layer Architecture

Every SGK book exists at the intersection of exactly four layers.
Understanding this is mandatory before any task begins.

LAYER 1: BRAND (Immutable)
The SGK visual and linguistic identity. Applies to every output from
every book in every series. Defined in unified/01-brand-identity-system.md.
Never modified per book.

LAYER 2: UNIFIED ENGINE (Horizontal)
Twenty systems that govern how every book is researched, planned,
written, illustrated, audited, and published. Defined in unified/.
Never modified per book.

LAYER 3: VERTICAL MODULES (Subject Depth)
Twenty-eight modules, one per subject domain. Each defines what must
be taught, how claims are verified, and what interactive elements the
subject requires. Each also provides a Creative Vehicle Palette: a
menu of possible story approaches for that subject. Defined in
vertical/. The correct module is loaded for each book. The module
is never modified. The book instance uses it.

LAYER 4: AUDIENCE PROFILES (Adaptation)
Six profiles that adjust tone, vocabulary, visual density, pacing, and
gameplay intensity for different reader segments. Defined in
audience-profiles/. The correct profile is loaded for each book.

Runtime Assembly: When any agent begins any task, the active context
is always assembled in this order:
  1. Brand Layer (always active)
  2. Unified Engine rules (always active)
  3. The book's vertical module
  4. The book's audience profile
  5. The book's own locked artifacts from books/[book-id]/artifacts/

All five are loaded together every time. An agent operating from
conversation memory alone is operating incorrectly.

---

## The SGK Series System

Every book belongs to exactly one series. Series group related
vertical modules under a shared visual identity.

| Series ID | Series Name | Vertical Modules Covered | Accent Colour |
|---|---|---|---|
| SGK-TECH | SGK Tech Series | v01 v02 v03 v04 | Teal #0D9488 |
| SGK-EXAM | SGK Exam Series | v23 v24 v25 v26 v27 | Saffron #D97706 |
| SGK-LAW | SGK Law Series | v05 v06 v07 | Maroon #9B1C1C |
| SGK-COMM | SGK Commerce Series | v08 v09 v22 | Navy #1E3A8A |
| SGK-SCI | SGK Science Series | v10 v11 v12 | Forest #166534 |
| SGK-SARL | SGK Saral Series | v18 v19 v20 v21 | Orange #C2410C |
| SGK-SCHL | SGK School Series | v13 v14 v15 v16 v17 | Violet #6D28D9 |

Book ID Format: SGK-[SERIES-ID]-[SUBJECT-CODE]-[3-digit-sequence]
Example: SGK-TECH-API-001

---

## The Book ID and Registry System

Every book ever created in the SGK platform is registered in
registry/registry.json. This is the single source of truth for
book status, stage progress, and output locations.

When a human user says anything that might refer to a book, the
Intake Agent runs the following detection logic:

STEP 1: Parse the user message for signals
  Subject keywords, audience keywords, series keywords,
  explicit book ID if provided.

STEP 2: Search registry.json
  Exact ID match: EXISTING BOOK confirmed.
  Subject and audience combination match: POSSIBLE EXISTING BOOK.
  No match: NEW BOOK.

STEP 3: If POSSIBLE EXISTING BOOK
  Present matching books to user with status summary.
  User confirms or redirects.

STEP 4: If EXISTING BOOK confirmed
  Load all artifacts from books/[book-id]/artifacts/.
  Load the World Bible from books/[book-id]/artifacts/WORLD_BIBLE.md.
  Load the Character Cast from books/[book-id]/artifacts/CHARACTER_CAST.md.
  Present status dashboard with current stage and options.

STEP 5: If NEW BOOK
  Generate book ID.
  Create workspace directory structure.
  Register in registry.json with status: in-progress, stage: 0.
  Begin Stage 0.

---

## How to Start a New Book (Agent Instructions)

When a new book is initiated, create this workspace:

books/[book-id]/
  artifacts/       Stage output artifacts and locked decisions
  storyboards/     Approved chapter storyboards
  image-prompts/   Generated Madhubani art prompts
  chapters/        Generated chapter content in AST block format
  assets/
    illustrations/ Madhubani character and scene images
    svgs/          Workbench screen SVG components
    covers/        Cover design files
    character-reference/ Canonical character reference sheets
  audits/          Chapter audit reports
  handoff-memos/   Inter-stage handoff documents
  exports/
    html/          Interactive HTML edition
    docx/          Manuscript DOCX edition
    pdf/           Print PDF edition
    epub/          Digital EPUB edition
    game/          Gameplay build

Then load the pipeline from unified/02-pipeline-protocol.md and
begin Stage 0.

---

## How to Continue an Existing Book (Agent Instructions)

Load the registry entry for the book.
Load all artifacts from books/[book-id]/artifacts/.
Read the most recent handoff memo from books/[book-id]/handoff-memos/.
Inject the Context Packet per unified/03-context-injection-protocol.md.
Present the status dashboard to the human user.
Execute the user's chosen action.

---

## Framework Directory Map

framework/
  README.md                        This file
  unified/                         The 20 horizontal systems
  vertical/                        The 28 subject depth modules
  audience-profiles/               The 6 audience adaptation specs
  characters/                      Superhero mentor ledgers
  templates/                       Schema-only artifact templates
  tools/                           Automated CLI validation tools

---

## The 10 Agent Commandments

When in doubt about any decision, these 10 rules resolve it.

1. Comic first, always. If output looks like a textbook, rebuild it
   as scenes and dialogue.

2. Load the Context Packet before every generation call. Never
   generate from conversation memory alone.

3. Follow the approved storyboard. The Author Agent executes the
   approved blueprint. It does not improvise.

4. Prose is restricted. Three prose paragraphs maximum per chapter,
   fifty words each. Find a dialogue or visual alternative.

5. Verify everything. Code executes. Citations check out. Numbers
   recalculate. Unverified claims are not published.

6. The Book Promise is law. If a scene does not move the reader
   toward the Book Promise, it does not belong in the book.

7. Characters have personalities. The mentor uses analogies. The
   hero makes mistakes. Neither sounds like a textbook.

8. The human decides at guardrails. Agents present options. Humans
   decide. No agent proceeds past a guardrail without a logged
   human decision stored in handoff-memos/.

9. Rule 19 is non-negotiable. Zero hyphens in prose. Check before
   submitting anything.

10. The audit is the truth. A chapter is not done until it scores
    90 or above. Feelings about quality do not override the rubric.
