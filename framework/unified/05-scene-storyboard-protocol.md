# SGK Scene Storyboard Protocol

System ID: H05
Layer: Unified
Version: 2.0.0

---

## Purpose

The scene storyboard is the mandatory blueprint that every chapter
must have before a single word of content is generated. It is the
architectural drawing before the construction begins.

Without an approved storyboard, the Author Agent defaults to its
training bias: dense academic prose organized by topic. With an
approved storyboard, the Author Agent has no choice but to produce
comic-first, scene-driven, visually rich content because every beat
is specified before writing begins.

The storyboard solves the most common SGK failure mode: content that
is technically accurate but reads like a textbook because the comic
format was intended rather than engineered.

---

## When Storyboards Are Created

One storyboard per chapter.
Created at Stage 4, after Stage 3 artifacts are confirmed.
Approved by the human user at Guardrail 4 before Stage 6 begins.
Never skipped. Never abbreviated. Never created after content begins.

---

## The Comic Story Cell Standard Architecture

Every comic beat in every SGK book must follow the unified 4-layer sandwich standard:

1. TOP CONTEXT BAR:
   A clean dark navy header bar outside the art containing:
   - Panel badge (e.g. PANEL 1, PANEL 2)
   - Scene beat title in uppercase
   - Narrative timestamp and physical setting
   This ensures setting context without placing text labels over illustration pixels.

2. NEGATIVE SPACE SPEECH CLOUDS:
   Speech balloons must NEVER cover character faces, eyes, hands, or focal tools:
   - Clouds are constrained to <= 28 percent container width.
   - Pinned strictly in verified empty negative spaces (e.g. upper outer wall corners, ceiling margins above equipment).
   - Styled with speaker badges, avatar icons, colored borders, and directional pointer tails angling toward character mouths.
   - Pacing constraint: Short, punchy lines only (under 15 words per cloud). If a character has more to say, split into a subsequent beat or reaction panel.

3. 100 PERCENT UNCROPPED 16:9 ARTWORK:
   - Every illustration rendered with aspect-ratio: 16 / 9 and height: auto.
   - Zero fixed-height clipping or object-fit: cover cropping.

4. BOTTOM GROUNDING STRIP:
   - A light slate takeaway box beneath the artwork.
   - Summarizes the core physical principle, engineering insight, or lesson realization before advancing to the next beat.

---

## Operational Specification: Comic Story Cell Working Way in Web View and Book View

Every comic story cell in Sarva Gyana Koshah books must deliver a seamless visual storytelling experience across two distinct rendering environments: Web View (interactive digital reader) and Book View (paged print and PDF layout). Any AI agent generating comic content must follow this exact working way:

### 1. The 4-Layer Sandwich Structure
Every comic cell is an integrated sandwich unit composed of four vertical layers:

Layer 1: Top Context Header
- Rendered outside and above the illustration canvas.
- Background: Dark navy `#0f172a` with light text `#f8fafc`.
- Contains:
  • Left badge: High contrast pill (e.g. `PANEL 1`, `SCENE 2 BEAT 1`) in `#0284c7`.
  • Center/Left title: Scene action title in bold uppercase.
  • Right metadata: Story timestamp and physical setting (e.g. `09:15 AM · Engineering Bay`).
- Purpose: Establishes chronological and narrative setting without overlaying text over character artwork.

Layer 2: 100% Uncropped 16:9 Artwork Canvas
- Aspect ratio: Strictly 16:9 (`aspect-ratio: 16 / 9; width: 100%; height: auto;`).
- Object fit: `contain` (Never use `cover`, never use fixed pixel heights like `height: 260px` or `max-height: 280px`).
- Frame styling: Minimal subtle border `#cbd5e1`, rounded corners matching theme.
- Modern Tech with Madhubani Character Art: Characters pair program at modern workstations with open laptops, optical mice, and server racks while drawn with Madhubani folk linework and traditional attire.

Layer 3: Negative Space Dialogue Cloud Engine
- Dialogue lines are never presented as disconnected bulk text.
- Balloons are rendered either as SVG overlays inside the 16:9 viewBox or as compact dialogue cards immediately below the art.
- Negative Space Placement Constraints:
  • Maximum balloon width: 28% of canvas width.
  • Anchor zones: Upper outer margins, empty walls, ceiling negative space.
  • Absolute prohibition: Never occlude character faces, expressive eyes, gesturing hands, laptop displays, or whiteboard diagrams.
  • Pointer tails: Directional pointer tails angle toward the speaker mouth.
  • Pacing rule: 1 to 2 sentences maximum per cloud (under 15 words). If a character needs to explain more, introduce a follow-up reaction panel or transition into a workbench screen.
- Speaker Avatar & Role Pill:
  • Akshay: 👨‍💻 Junior QA Engineer (curious, learns by doing).
  • Sameer: 🧘‍♂️ Staff Architect (calm, first principles mentor).

Layer 4: Bottom Grounding Takeaway Strip
- Rendered immediately beneath the artwork and dialogue.
- Background: Soft slate `#f8fafc` with top border `1.5px solid #cbd5e1`.
- Contains: Icon mark (💡 or ⚡), followed by the bold core principle label and a concise 1 to 2 sentence realization.
- Purpose: Translates the dramatic character beat into a permanent physical or architectural mental model.

### 2. Dual Mode Operational Behavior

#### Mode A: Web View (Interactive Digital Reader)
- Container behavior: Fluid responsive layout inside the lesson reader.
- Responsive breakpoints:
  • Desktop (>= 1024px): Renders in 2-column storyboard grid (`grid-template-columns: repeat(2, 1fr)`) with comfortable 1.25rem gap, or full-width hero cards.
  • Tablet (768px - 1023px): Adjusts grid margins, maintains 16:9 uncropped aspect ratio.
  • Mobile (< 768px): Stacks automatically to single-column full-width flow (`grid-template-columns: 1fr`).
- Interactivity:
  • Tap to zoom/inspect high-resolution details on touch devices.
  • Smooth scroll transitions between scene beats.
  • Audio narration trigger support when voice tracks are active.

#### Mode B: Book View & Print Mode (Paged Document & PDF Export)
- Paged sheet integration: Rendered inside `.book-sheet` containers with standardized printable margins (A4: 210mm x 297mm or US Letter: 8.5in x 11in).
- Page break discipline:
  • Mandatory CSS rule: `break-inside: avoid; page-break-inside: avoid;` applied to `.comic-story-cell` and `.storyboard-panel-card`.
  • A comic cell must NEVER break across a physical page boundary. The top bar, artwork, dialogue, and takeaway must stay united on a single printed page.
- Print typography and contrast:
  • Minimum print font size: 9pt for dialogue and takeaways, 10pt for titles.
  • Contrast: Deep charcoal `#0f172a` text on clean white `#ffffff` or light slate `#f8fafc` backgrounds.
  • Ink optimization: No large black background rectangles that bleed or waste printer toner. Headers use crisp borders with light fills.

### 3. Canonical DOM Blueprint for AI Authors
```html
<div class="comic-story-cell">
  <div class="comic-context-bar">
    <div>
      <span class="comic-context-badge">PANEL 1</span>
      <strong class="comic-context-title">SCENE ACTION TITLE</strong>
    </div>
    <span class="comic-context-time">09:15 AM · Engineering Lab</span>
  </div>
  <div class="panel-art-frame">
    <img src="illustration.jpg" alt="Scene description" class="panel-art-image" />
  </div>
  <div class="comic-dialogue-strip">
    <div class="comic-speech-balloon speaker-akshay">
      <span class="balloon-avatar">👨‍💻</span>
      <strong>AKSHAY:</strong> "Short punchy line under fifteen words."
    </div>
  </div>
  <div class="comic-takeaway-bar">
    <span class="comic-takeaway-icon">💡</span>
    <p class="comic-takeaway-text"><strong>Core Lesson:</strong> Physical principle takeaway.</p>
  </div>
</div>
```

---

## Content Type Tagging System

Before designing any scene beat, the Creative Director Agent
classifies every teaching payload into one of three types.
The content type determines which block patterns are used.

TYPE A: DRAMATIC CONTENT
Definition: Content that fits naturally into story tension.
A live system failure, a courtroom argument, a market crash,
a lab experiment gone wrong, a debugging session, a legal
dispute. The reader learns because the characters are in a
situation where the knowledge matters right now.

Block pattern: Full scene-panel to cliffhanger-panel sequence.
Prose budget: Zero to 20 words per scene.
Teaching vehicle: Dialogue and action carry the content.
Example subjects: Debugging sessions, courtroom arguments,
market crises, experiment observations, governance dilemmas.

TYPE B: REFERENCE CONTENT
Definition: Content that must exist but resists dramatization.
Article text, syntax tables, rate charts, formula sheets,
command option lists, glossary definitions, classification
tables. Important and necessary, but not inherently dramatic.

Block pattern: The reference-anchor block within a story scene.
How it works: The mentor or hero explicitly calls for the
reference within the story. The mentor says something like:
Let me pull up the full rate table. You will need to know
these exact figures for the compliance notice.
The reference appears as a styled information panel within
the scene. The story continues immediately after.
This makes reference content feel like a natural story moment
rather than an interruption from a different book.
Prose budget: The reference content itself may use structured
prose. The surrounding story beats remain at zero prose.

TYPE C: PRACTICE CONTENT
Definition: Content where the reader must perform an action
before seeing the answer. Challenge prompts, exercises,
self-assessment moments, calculation practice, prediction
exercises.

Block pattern: challenge-prompt block followed by
challenge-reveal block. The story explicitly pauses and
addresses the reader directly.
How it works: Before the mentor reveals the answer in the
story, the book breaks the fourth wall and says:
Before Sameer shows Akshay what went wrong, what do you
think the problem is? Cover the next section, make your
prediction, then continue.
This fourth-wall break is a defined SGK convention, not an
accident. The reader is briefly pulled out of the story to
engage actively, then returned to it.
Minimum frequency: Two Type C beats per chapter.

---

## The Mandatory Storyboard Format

Every storyboard file uses this exact structure.
Every field marked [REQUIRED] must be completed.
Fields marked [IF APPLICABLE] are completed when the
condition applies.

---

FILE: storyboards/storyboard-ch[NN].md

CHAPTER HEADER [REQUIRED]

Chapter Number: [NN]
Chapter Title: [Title as it appears in MISSION_MAP.md]
Mission: [Mission name and number]
Chapter ROI: [The exact one-sentence problem this chapter solves,
  copied from MISSION_MAP.md]
Arc Position: [Hero arc label from World Bible Section 3]
Total Scenes: [N]
Estimated Pages: [N]
Estimated Total Blocks: [N]
  Estimated scene-panel blocks: [N]
  Estimated dialogue-exchange blocks: [N]
  Estimated workbench-screen blocks: [N]
  Estimated action-beat blocks: [N]
  Estimated thought-bubble blocks: [N]
  Estimated quad-card blocks: [N]
  Estimated challenge-prompt blocks: [N]
  Estimated challenge-reveal blocks: [N]
  Estimated cliffhanger-panel blocks: [N]
  Estimated trap-alert blocks: [N]
  Estimated narration-box blocks: [N]
  Estimated prose-paragraph blocks: [N]
  Estimated reference-anchor blocks: [N]
  Estimated universe-link blocks: [N]
Visual Density Pre-check:
  Visual plus dialogue plus interactive percentage: [N]%
  Must be 60% or above. If below: redesign scenes before proceeding.
  Prose percentage: [N]%
  Must be 20% or below. If above: redesign scenes before proceeding.

CHAPTER OPENING CONDITION [REQUIRED]

Previous Chapter Cliffhanger:
  [Exact text of the cliffhanger-panel from the previous certified
  chapter. If this is Chapter 1, write: NONE. This is the opening
  chapter. The Broken World state is established fresh.]

How This Chapter Resolves It:
  [Specific description of how Scene 1 Beat 1 directly addresses
  or continues from the previous cliffhanger. If Chapter 1:
  describe how the Broken World is established instead.]

Hero Emotional State at Chapter Open:
  [Loaded from WORLD_BIBLE.md Emotional Arc Tracker. Exact
  emotional state inherited from the end of the previous chapter.
  If Chapter 1: the initial Broken World emotional state from
  CHARACTER_CAST.md.]

World Bible Check Confirmation:
  Established Facts reviewed: YES
  No contradictions found: YES / [List contradictions found]
  Mission Tone Envelope loaded: [Mission N: Name]
  Locked Vocabulary reviewed: YES

---

SCENE [N] OF [TOTAL]: [Scene Title]
[Repeat this block for every scene in the chapter]

Scene Type: [OPENING / DEVELOPMENT / CLIMAX / RESOLUTION /
  CLIFFHANGER]
Estimated Panels: [N]
Estimated Pages: [N to N]
Content Type Tags: [List of TYPE A, TYPE B, TYPE C for each
  teaching beat in this scene]
Mission Tone Compliance: [How this scene fits the current
  mission's tone envelope]

SETTING:
  Location: [Specific heritage location from World Bible or new
    location being introduced]
  Time: [Morning, afternoon, evening, night. Affects lighting.]
  Heritage Elements Present: [Which specific elements from the
    visual DNA are in this scene]
  Subject-Specific Props: [Tools, documents, equipment relevant
    to the teaching payload]
  Mood: [Tense, curious, triumphant, playful, urgent, solemn]
  Lighting: [Brass lamp warm amber, natural light through jali
    screens, mixed, etc.]

CHARACTERS PRESENT:
  [Mentor Name]: [What they are doing. What prop they hold.
    Facial expression. Emotional register.]
  [Hero Name]: [What they are doing. Emotional state.
    What they believe at scene start.]
  [Temporary Character if any]: [Name, role in this scene,
    why they are here, when they exit]

SCENE BEATS:
[List every beat in order. Each beat uses a block type tag
and a description.]

Beat 1 ([block-type]):
  [Description of what this beat contains]
  [For scene-panel: describe the visual composition]
  [For dialogue-exchange: summarize what is said by whom,
    the emotional register, and the teaching payload delivered]
  [For action-beat: describe what physically happens and
    what result appears]
  [For thought-bubble: whose thought, and what the thought is]
  [For workbench-screen: what type of screen, what it shows,
    what the directional pointer highlights]
  [For quad-card: all 4 parts summarized]
  [For challenge-prompt: the exact question posed to the reader]
  [For challenge-reveal: the answer and why]
  [For reference-anchor: who calls for it, what it contains]
  [For trap-alert: what trap, what the correct approach is]

Beat 2 ([block-type]):
  [Description]

[Continue for all beats in this scene]

TEACHING PAYLOAD:
  [The exact concept or skill this scene delivers. One sentence.
    This must directly serve the Chapter ROI.]

EMOTIONAL ARC WITHIN THIS SCENE:
  Start: [Hero's emotional state entering this scene]
  End: [Hero's emotional state leaving this scene]
  Change driver: [What specifically caused the emotional shift]

PROSE BUDGET FOR THIS SCENE:
  Allowed prose words: [Number, usually 0, maximum 80 per scene]
  Justification if non-zero: [Why dialogue and visuals cannot
    convey this content without prose]

TYPE C PRACTICE MOMENT [IF APPLICABLE]:
  Challenge question posed: [Exact text]
  Placed before: [Which beat number reveals the answer]
  Reader action required: [What the reader must do or predict]

TEMPORARY CHARACTER EXIT [IF APPLICABLE]:
  Character: [Name]
  Exit beat: [Beat number]
  Exit justification: [Why they leave now, what they accomplished]

IMAGE PROMPT REFERENCE:
  Scene-panels in this scene: [Beat numbers that are scene-panels]
  These beats will become image prompts in Stage 5.
  Visual composition notes for Stage 5: [Any specific visual
    requirements beyond the setting and character specs]

---

[AFTER ALL SCENES]

CHAPTER CLOSING HOOK [REQUIRED]

Cliffhanger-Panel Content:
  [Exact one to two sentence text of the cliffhanger-panel
    that ends this chapter]
  [Must pose a specific unresolved question or reveal a
    complication that makes the reader need to open the next chapter]

Story Question Left Unresolved:
  [What specifically the reader does not yet know]

Handoff to Next Chapter:
  [The exact instruction that goes into the next chapter's
    storyboard as its Chapter Opening Condition]
  Format: Chapter [NN+1] opens with [specific description].
    The hero is in [emotional state] because [reason].

New World Bible Entries This Chapter Will Create:
  New Established Facts: [List anticipated new facts]
  New Locked Vocabulary: [List new terms introduced]
  New Analogy Used: [List any analogies the mentor will use]
  New Open Story Threads: [List any story seeds being planted]
  Emotional Arc Tracker Update: [Hero's projected end state]

VISUAL MOCKUP [REQUIRED]

[Produce a page-by-page layout wireframe for this chapter
using ASCII text representation. Each spread shows panel
placements. Example:]

PAGE 1:
+---------------------------+---------------------------+
|                           |  SCENE 1 BEAT 1           |
|   CHAPTER TITLE PANEL     |  scene-panel              |
|   Full page opener        |  (half page, right)       |
|                           |                           |
|                           +---------------------------+
|                           |  Beat 2: dialogue-exchange|
|                           |  (half page, right)       |
+---------------------------+---------------------------+

PAGE 2:
+---------------------------+---------------------------+
|  Beat 3: action-beat      |  Beat 4: workbench-screen |
|  (half page, left)        |  (half page, right)       |
+---------------------------+---------------------------+
|  Beat 5: dialogue-exchange (full width, bottom strip) |
+------------------------------------------------------|

[Continue for all pages in this chapter]

[The mockup must clearly show: where scene-panels appear,
where dialogue bubbles sit, where workbench screens anchor,
where quad-cards fall, where challenge-prompts interrupt,
and where the cliffhanger-panel ends the chapter.]

---

## Storyboard Quality Gates

Before presenting a storyboard to the human user at Guardrail 4,
the Creative Director Agent self-checks all of the following.
Any failed check must be resolved before the guardrail presentation.

GATE 1: Visual Density
Estimated visual plus dialogue plus interactive blocks: >= 60%
Estimated prose blocks: <= 20%
Result: PASS or FAIL with redesign required

GATE 2: World Bible Compliance
No scene beat contradicts any Established Fact: YES or NO
No analogy used that is marked USED or RESERVED incorrectly: YES
Hero emotional state matches the Tracker for this position: YES
Mission Tone Envelope respected throughout: YES

GATE 3: Chapter Transition
Scene 1 Beat 1 directly addresses the previous cliffhanger: YES
Chapter Closing Hook provides clear handoff: YES

GATE 4: Teaching Payload Coverage
Every topic assigned to this chapter in MISSION_MAP.md appears
in at least one scene's Teaching Payload: YES or NO with gaps listed

GATE 5: Type C Minimum
At least 2 challenge-prompt plus challenge-reveal pairs: YES or NO

GATE 6: Required Block Minimums
At least 4 scene-panel blocks: YES or NO
At least 2 workbench-screen blocks: YES or NO
At least 3 quad-card blocks: YES or NO
Exactly 1 cliffhanger-panel block at chapter end: YES or NO
At least 2 thought-bubble blocks: YES or NO

GATE 7: Visual Mockup
Visual mockup covers all pages: YES or NO
Mockup does not show consecutive pages of text without a
visual element: YES or NO

All gates must show YES before Guardrail 4 presentation.
