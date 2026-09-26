# SGK Derivative Generation Engine

System ID: H18
Layer: Unified
Version: 2.0.0

---

## Purpose

Every SGK full textbook contains within it the raw material
for 4 derivative products. These derivatives serve buyers who
need a different format at a different price point. They are
not separate writing projects. They are extraction and
reformatting operations on already-certified content.

Producing all 4 derivatives from a full textbook requires
approximately 25 to 35 percent of the effort of producing
the original book. The commercial result is a 4 to 5 product
catalog from a single content investment.

---

## Derivative Product 1: Revision Booklet

SOURCE BLOCKS EXTRACTED:
  All quad-card blocks from all chapters.
  All trap-alert blocks from all chapters.
  All cliffhanger-panel blocks (for their memorable
    summarizing quality, not their cliffhanger function:
    in the revision booklet they become summary statements).
  The AFTER state from each chapter's mini-transformation
    (from TRANSFORMATION_MAP.md).
  All reference-anchor blocks (the reference content only,
    not the story framing).

STRUCTURE:
  One section per mission.
  Within each mission: one subsection per chapter.
  Each chapter subsection: 1 to 2 pages maximum.
  Content: chapter title, mini-AFTER statement, all quad-cards
    from that chapter, all trap-alerts.

ADDITIONS SPECIFIC TO THIS DERIVATIVE:
  A revision-specific Preface:
    "Use this booklet in the last 7 days before your exam.
    One chapter per sitting. Focus on the quad-cards and trap-alerts."
  A Quick Navigation guide: which chapters to prioritize
    for specific exam paper sections or workplace scenarios.

PAGE BUDGET: 80 to 120 pages.
PRICE: 40 to 50 percent of full book MRP.
FORMAT: PDF primary, EPUB secondary.

---

## Derivative Product 2: Question Bank

SOURCE BLOCKS EXTRACTED:
  All challenge-prompt blocks with their paired challenge-reveal.
  All Type C Practice beats from the storyboards
    (as worked problems, not as story moments).
  All PYQ cards from competitive exam books.
  Workbench scenarios that have a correct and incorrect version.

ADDITIONAL CONTENT GENERATED:
  For each extracted challenge: add 2 additional practice
    variations of the same concept at different difficulty levels.
    EASY: scaffolded version with hints visible.
    HARD: variation with a real-world complication added.
  Add an answer key section at the end with full worked solutions.

STRUCTURE:
  Organized by topic (not by chapter, to enable reference dip-in mode).
  Each topic section: definition summary (1 paragraph),
    then practice problems sorted easy to hard.

PAGE BUDGET: 150 to 250 pages depending on book length.
PRICE: 30 to 40 percent of full book MRP.
FORMAT: PDF primary (works best for practice and annotation).

---

## Derivative Product 3: Pocket Reference Guide

SOURCE BLOCKS EXTRACTED:
  All key terms from the Glossary.
  All formula references from economics and mathematics books.
  All Article badge content from law books.
  All command syntax from tech books.
  All rate tables and threshold tables from tax books.
  All mnemonic and memory device content.
  All trap-alert trap names and their one-sentence fixes.

STRUCTURE:
  Grouped by topic, alphabetically within topic.
  Maximum 2 items per page (large font, high contrast,
    glanceable at exam speed).
  Each item: term or command, 1 to 2 line definition or syntax,
    example usage in 5 words or fewer.

PAGE BUDGET: 60 to 90 pages, A6 or smaller format.
PRICE: 15 to 25 percent of full book MRP.
FORMAT: PDF only (pocket-sized print, or phone screen reference).

---

## Derivative Product 4: Crash Course Sprint

SOURCE BLOCKS EXTRACTED:
  Chapters with the highest Book Promise alignment scores
    from their audit reports (the chapters most essential
    to the core transformation).
  Typically 40 to 50 percent of full chapters selected.
  From each selected chapter: the opening scene-panel,
    the core quad-card(s), the key challenge-prompt
    and challenge-reveal, and the cliffhanger-panel.
  Excluded from each selected chapter: development scenes,
    reference-anchor content, secondary examples.

STRUCTURE:
  Same 3-mission structure as the full book.
  Each chapter compressed to 6 to 10 pages maximum.
  A sprint-specific Preface: "Complete this in 7 days.
    One chapter per day. Each chapter teaches one essential skill."
  A daily schedule: which chapter on which day.

PAGE BUDGET: 60 to 90 pages.
PRICE: 30 to 40 percent of full book MRP.
FORMAT: PDF primary, HTML secondary.

---

## Derivative Generation Process

STEP 1: Extraction
The Derivative Generation Agent reads all certified chapter
files and extracts the specified block types.
All extracted content is already Rule 19 compliant and
audited for accuracy. No re-auditing required for extraction.

STEP 2: Reformatting
The extracted content is reformatted for the derivative's
structure and purpose.
New structural elements (derivative-specific Preface,
navigation guides, additional practice variations) are
generated fresh and must pass a simplified audit:
  Rule 19 compliance: Required.
  Accuracy: Required.
  Visual density: Not required (derivatives use more
    structured prose than the main book; this is intentional).

STEP 3: Branding
Full brand layer applied: same imprint, same colophon,
  same cross-sell page (pointing to the full book as
  the primary product).
Different cover: derivative product type clearly stated
  on cover: REVISION BOOKLET or QUESTION BANK etc.
Same series colour accent.

STEP 4: Build
Run the relevant build commands for the derivative's target formats.
Register the derivative in registry.json linked to the parent book.
