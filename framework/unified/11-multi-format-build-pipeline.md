# SGK Multi-Format Build Pipeline

System ID: H11
Layer: Unified
Version: 2.0.0

---

## Purpose

Every SGK book is authored once as a structured AST
(Abstract Syntax Tree) of typed blocks. This single source
renders into five distinct output formats without any manual
reformatting. The pipeline is automated, reproducible, and
runs from a single command.

The five formats serve different reader contexts:
  HTML: Full interactivity, offline capable, primary format
  DOCX: Editorial review and print preparation
  PDF: Print-on-demand and digital distribution
  EPUB: Ereader devices and Kindle
  GAME: Interactive adventure learning experience

---

## The Single Source Architecture

The source of truth for every book is the collection of
chapter files in books/[book-id]/chapters/.

Each chapter file is a JavaScript module exporting an array
of typed block objects. Every block has a type field that
corresponds to a block type defined in H06 Block Type System,
and a set of fields specific to that block type.

CHAPTER FILE FORMAT:

```javascript
// books/[book-id]/chapters/ch01-[slug].js

export const chapter = {
  id: 'ch01',
  title: '[Chapter Title]',
  missionId: 'mission-1',
  roi: '[Chapter ROI statement]',
  arcPosition: '[Hero arc position label]',
  blocks: [
    {
      type: 'scene-panel',
      id: 'ch01-s1-b1',
      setting_description: '[Full visual description]',
      characters_present: [
        {
          name: '[Character name]',
          position: '[Where in the scene]',
          expression: '[Specific expression]',
          action: '[What they are doing]',
          prop: '[What they hold if applicable]'
        }
      ],
      heritage_elements: ['[Element 1]', '[Element 2]'],
      mood: '[Scene mood]',
      lighting: '[Light source and quality]',
      art_prompt_ref: 'image-prompts/image-prompts-ch01.md#s1-b1'
    },
    {
      type: 'dialogue-exchange',
      id: 'ch01-s1-b2',
      lines: [
        {
          speaker: '[Character name]',
          emotion: '[Specific emotion and action]',
          text: '[Dialogue text, Rule 19 compliant]',
          pointer: '[Optional: what they point to]'
        },
        {
          speaker: '[Character name]',
          emotion: '[Specific emotion and action]',
          text: '[Dialogue text, Rule 19 compliant]',
          pointer: null
        }
      ],
      teaching_payload: '[Concept delivered in this exchange]'
    },
    {
      type: 'workbench-screen',
      id: 'ch01-s1-b3',
      workbench_type: 'api-testing-workbench',
      screen_content: '[Exact screen content in appropriate format]',
      pointer_callouts: [
        {
          position: '[x,y or descriptive position]',
          direction: '[left, right, up, down]',
          label: '[Short label]',
          explanation: '[What this element means]'
        }
      ],
      interaction_mode: 'READ_ONLY',
      svg_template_ref: 'framework/templates/interactive-svg-templates/api-workbench.svg.js'
    },
    {
      type: 'quad-card',
      id: 'ch01-s1-b4',
      domain_labels: {
        part1: 'Input',
        part2: 'Under the Hood',
        part3: 'Output',
        part4: 'Senior Savior'
      },
      part1_content: '[What was sent or submitted]',
      part2_content: '[The internal mechanism explanation]',
      part3_content: '[The observable result or response]',
      part4_trap: '[The specific common trap]',
      part4_rule: '[The memorable golden rule]'
    }
  ]
}
```

---

## Format 1: HTML Interactive Edition

ENGINE: Vite 6 + React 18 + vite-plugin-singlefile

PURPOSE: The primary reader experience. Full interactivity.
Zero network dependency after download. Works offline on
any device.

BUILD COMMAND: npm run build:html
OUTPUT: exports/[book-slug]-Interactive.html

WHAT THE HTML BUILD ADDS ON TOP OF THE BOOK:

Reveal animations for quad-card sections:
  Reader sees the quad-card with Parts 1 and 2 visible.
  Parts 3 and 4 are hidden behind a tap-to-reveal button.
  Each tap generates a micro-competence signal.
  After all 4 parts are revealed, the full card is visible.

Inline challenge-prompt interactions:
  challenge-prompt blocks render as interactive selection panels.
  Reader selects their answer before the challenge-reveal appears.
  Reader choice is logged locally for chapter-end accuracy display.
  Correct answer: brief positive Madhubani-style micro-celebration.
  Wrong answer: near-miss explanation appears before correct answer.

Animated workbench screens:
  Terminal cursor blinks in terminal workbenches.
  API response appears line by line in API workbenches.
  Code editor cursor pulses in IDE workbenches.
  All animations are subtle: not distracting, purpose-serving.

Character expression shifts:
  When a thought-bubble appears, the hero character portrait
  updates to the matching expression from their expression range.
  When the mentor delivers a key insight, their portrait updates
  to their insight expression.

Chapter progress indicators:
  A thin series accent colour progress bar at top of page
  shows position within current chapter.
  A mission progress indicator shows position within the mission.
  Both update as the reader scrolls.

Universe links:
  universe-link blocks render as interactive callout panels.
  Clicking the link opens the referenced book's HTML edition
  in a new tab if the reader has it, or the SGK web reader
  for that book.

REACT COMPONENT MAP:
  scene-panel          → <ScenePanel />
  dialogue-exchange    → <DialogueExchange />
  workbench-screen     → <WorkbenchScreen type={workbench_type} />
  quad-card            → <QuadCard labels={domain_labels} />
  action-beat          → <ActionBeat />
  thought-bubble       → <ThoughtBubble />
  challenge-prompt     → <ChallengePrompt />
  challenge-reveal     → <ChallengeReveal />
  cliffhanger-panel    → <CliffhangerPanel />
  trap-alert           → <TrapAlert />
  reference-anchor     → <ReferenceAnchor />
  narration-box        → <NarrationBox />
  prose-paragraph      → <ProseParagraph />
  universe-link        → <UniverseLink />

SINGLEFILE BUILD:
  vite-plugin-singlefile inlines all assets:
    JavaScript bundle
    CSS stylesheets
    All Madhubani JPEG illustrations (base64 data URLs)
    All SVG workbench components
  Result: one self-contained HTML file with zero external
    dependencies. Works on airplane, in offline exam prep,
    on any device with a browser.

---

## Format 2: DOCX Manuscript Edition

ENGINE: Node.js docx npm library (Packer, Paragraph, Table,
  TextRun, ImageRun, TableRow, TableCell)

PURPOSE: Editorial review, human proofreading, track-changes
  feedback, print preparation manuscript.

BUILD COMMAND: npm run build:docx
ENTRY SCRIPT: scripts/generate-docx.mjs
BUILD MODULE: src/export/docx.js
OUTPUT: exports/[book-slug]-Manuscript.docx

BLOCK TRANSFORMER MAP:
Every block type maps to specific docx library primitives.

scene-panel:
  Renders as: Full-width ImageRun with embedded JPEG.
  Caption below in italic: Scene description (abbreviated).
  Page break before chapter-opening scene-panels.

dialogue-exchange:
  Renders as: Indented paragraph sequence.
  Speaker name in bold followed by colon.
  Dialogue text in regular weight.
  Emotion tag in italic inside square brackets before text.
  Example: SAMEER [picking up the chai glass]:
    The wire does not lie. Look at line 3.
  Empty line between each speaker turn.

workbench-screen:
  Renders as: Styled table with Consolas 10pt font.
  Light slate cell shading (#F1F5F9).
  Workbench type as table header in series accent colour.
  Pointer callouts as footnote-style annotations below table.

quad-card:
  Renders as: 2x2 table.
  Each quadrant has a shaded header with the domain-specific
    part label in bold.
  Content in regular weight below the header within the cell.
  Table border in series accent colour.

action-beat:
  Renders as: Italic paragraph with character name in bold prefix.
  Example: Akshay: [Types the DELETE request body into the
    workbench and presses Send, watching the response pane.]

thought-bubble:
  Renders as: Italic paragraph in square brackets with
    character name prefix.
  Example: [Akshay thinks: But I already checked the
    endpoint twice. Why is it still returning 404?]

challenge-prompt:
  Renders as: Boxed paragraph with CHALLENGE heading.
  Options as numbered list inside the box.
  Instruction below: Cover the next section. Make your
    selection. Then continue reading.

challenge-reveal:
  Renders as: ANSWER heading with ruled line separator above.
  Correct answer in bold.
  Explanation in regular weight.
  Wrong answer analysis in italic.

cliffhanger-panel:
  Renders as: Full-width ImageRun (cliffhanger illustration).
  Cliffhanger text below in italic, centred.
  Page break after.

trap-alert:
  Renders as: Bordered box with TRAP ALERT heading in bold.
  Trap name in series accent colour.
  Content in regular weight inside box.

reference-anchor:
  Renders as: Caller dialogue line in normal dialogue format.
  Reference content in styled box below with REFERENCE heading.
  Story continuation line in normal dialogue format below.

narration-box:
  Renders as: Italic text, centred, with extra spacing above
    and below.

prose-paragraph:
  Renders as: Standard body paragraph with justified alignment.

universe-link:
  Renders as: Text reference in format:
    See also: [Book Title], Chapter [N].
    [Connection text in italic.]

---

## Format 3: PDF Print Edition

ENGINE: Puppeteer headless Chrome rendering the HTML edition
  with print-specific CSS activated.

PURPOSE: Fixed-layout digital distribution, Amazon KDP
  print-on-demand submission, physical bookstore distribution.

BUILD COMMAND: npm run build:pdf
OUTPUT: exports/[book-slug]-Print.pdf

PRINT CSS SPECIFICATIONS:
  Page size: A5 (148mm x 210mm) for standard trade books
    OR Royal (156mm x 234mm) for premium editions.
    Specified in FORMAT_DECISION.md > printSize.
  Margins: 20mm outer, 25mm inner (gutter), 20mm top, 22mm bottom.
  Bleed: 3mm on all sides when exporting for KDP.
  Crop marks: Included in KDP export mode.
  Body font: [Specified in book manifest] at 11pt.
  Line height: 1.5 for body text.
  Chapter title font: Display weight, 24pt.
  Colour profile: CMYK for physical print, RGB for digital PDF.

PRINT-SPECIFIC ELEMENT HANDLING:
  Interactive elements removed: challenge-prompt and
    challenge-reveal merge into static challenge boxes
    showing both question and answer.
  Animations disabled: all reveal animations become static
    fully-visible states.
  Progress indicators removed.
  Universe links become text references.
  Quad-cards render as static 2x2 grids.
  All workbench screens render as static SVG.

RUNNING HEADERS AND FOOTERS:
  Applied via print CSS @page rules.
  Left page header: Chapter title.
  Right page header: Section title.
  Left footer: Series name in small caps.
  Centre footer: Page number.
  Right footer: Book ID.

---

## Format 4: EPUB Digital Edition

ENGINE: Custom EPUB3 builder from AST export.
  Alternative: Pandoc from Markdown export if AST builder
  is not yet implemented. Both produce valid EPUB3 output.

PURPOSE: Kindle, Apple Books, Kobo, and any EPUB3 reader.
  Reflowable layout adapts to any screen size.

BUILD COMMAND: npm run build:epub
OUTPUT: exports/[book-slug]-Digital.epub

EPUB3 REQUIREMENTS:
  Package: Valid EPUB3 OPF package document.
  Navigation: NCX and EPUB3 nav document.
  Content: XHTML5 chapter documents.
  Images: All embedded with correct media types.
  Fonts: Embedded with proper license for embedding.
  Accessibility: All images have alt-text. All decorative
    images have empty alt attributes. Language declared.
    Reading order defined in spine.

BLOCK RENDERING IN EPUB:
  scene-panel: Full-width image with descriptive alt-text.
  dialogue-exchange: Definition list or styled div sequence.
  workbench-screen: Static SVG image (EPUB3 supports SVG).
    Pointer callouts as image annotations.
  quad-card: 2x2 HTML table with styled headers.
  challenge-prompt and challenge-reveal: Sequential display.
    Both shown together in EPUB (no interactivity).
    Challenge question then answer, separated by a rule.
  All other blocks: Appropriate HTML5 semantic equivalents.

KINDLE NOTES:
  Kindle uses KFX format internally.
  EPUB3 output must be run through KindleGen or Kindle Previewer
    to generate KFX for Amazon KDP submission.
  SVG support in Kindle is limited. Complex SVG workbench screens
    should have JPEG fallbacks generated at build time.

---

## Format 5: Game Build

ENGINE: React 18 game components within the Vite SPA.
  Game state management: Zustand or React Context.
  Animation: Framer Motion for Madhubani-style transitions.

PURPOSE: Dopamine-driven adventure learning. Full player
  agency. Challenge, score, streak, and revelation mechanics.
  Defined fully in H20 Gameplay Specification.

BUILD COMMAND: npm run build:game
OUTPUT: exports/[book-slug]-Game/ (directory with index.html
  and all assets, deployable to web server or packaged
  as PWA for offline play)

GAME SOURCE:
  The game is NOT built from the same chapter AST as other formats.
  The game has its own scene definitions derived from the chapter
  content but restructured for player agency.
  Game scene files: src/game/scenes/[mission-id]/[scene-id].js
  Game is always structured around the 3 missions from MISSION_MAP.md.

GAMEPLAY DEGRADATION IN OTHER FORMATS:
  When the game format is not the active format, gameplay blocks
  in chapter content degrade as follows:

  challenge-prompt + challenge-reveal:
    In HTML: Interactive selection (already defined).
    In DOCX: Static challenge box as defined above.
    In PDF: Static challenge box showing both Q and A.
    In EPUB: Sequential Q then A display.

  Gameplay Boss Challenge:
    In HTML: Available as an optional interactive section
      at end of each mission (linked from cliffhanger panel).
    In DOCX/PDF/EPUB: A case study discussion with full
      scenario, decision options, and reasoning shown.

---

## Build Sequence

Full build runs via: npm run build:all

scripts/build-all.mjs executes in this order:

1. prepare:books
   Compile CSS design tokens.
   Regenerate catalog metadata from chapter files.
   Validate all book manifests against book-manifest schema.
   Run visual-density-checker on all chapters. Fail build
     if any chapter violates the Visual Density Law.
   Run rule19-checker on all chapters. Report violations
     but do not fail build (violations tracked as warnings).

2. build:html
   Vite production build.
   vite-plugin-singlefile inlines all assets.
   Output: exports/[book-slug]-Interactive.html

3. build:docx
   node scripts/generate-docx.mjs
   Processes all chapter files through blockToDocx transformer.
   Assembles frontmatter and backmatter.
   Output: exports/[book-slug]-Manuscript.docx

4. build:pdf
   Launches Puppeteer.
   Opens HTML edition with print CSS active.
   Renders to PDF at specified page size.
   Output: exports/[book-slug]-Print.pdf

5. build:epub
   Runs EPUB3 builder or Pandoc export.
   Validates output against EPUB3 spec (epubcheck).
   Output: exports/[book-slug]-Digital.epub

6. build:game (if FORMAT_DECISION.md > includeGame: true)
   Vite build of game SPA.
   Output: exports/[book-slug]-Game/

7. sync:docs
   Mirrors exports/ to docs/ for GitHub Pages.
   Copies primary HTML edition to docs/index.html.
   Writes docs/.nojekyll.

8. update:registry
   Writes new build date, export paths, and chapter count
   to registry/registry.json for this book.

9. validate:final
   Runs full audit suite on all chapters.
   Reports overall book health: total chapters, certified
     chapters, average audit score, any chapters below 90.
   Build succeeds even with audit warnings (audit failures
     are a content gate, not a build gate, since content
     may be in-progress).
