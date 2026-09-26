# SGK Block Type System

System ID: H06
Layer: Unified
Version: 2.0.0

---

## Purpose

The block type system is the structural architecture of every SGK
book's content. Every piece of content in every chapter is one of
the defined block types. There is no untyped content. There is no
free-form prose that exists outside the block system.

The system is comic-native by design. Visual and interactive blocks
are the default. Prose blocks are the exception and are hard-limited.
This structural constraint is what makes SGK books look and feel like
storybooks rather than textbooks, regardless of subject or audience.

---

## The Visual Density Law

This law applies to every chapter in every SGK book.
The audit engine enforces it automatically.
It cannot be waived for any reason.

VISUAL DENSITY LAW:
In every chapter, the combined count of visual blocks,
dialogue blocks, and interactive blocks must be greater than
or equal to 60 percent of total blocks.

The combined count of prose blocks (prose-paragraph plus
narration-box) must be less than or equal to 20 percent
of total blocks.

VISUAL BLOCKS: scene-panel, action-beat, cliffhanger-panel
DIALOGUE BLOCKS: dialogue-exchange, thought-bubble
INTERACTIVE BLOCKS: workbench-screen, challenge-prompt,
  challenge-reveal, quad-card
STRUCTURE BLOCKS: trap-alert, reference-anchor, universe-link
PROSE BLOCKS: prose-paragraph, narration-box

Structure blocks are neutral (not counted in either percentage).

If a chapter fails the Visual Density Law, the audit dimension
for Visual Density and Comic Format Integrity scores in the
automatic rejection band regardless of other scores.

---

## Complete Block Type Definitions

### BLOCK TYPE: scene-panel

Category: VISUAL
Purpose: Opens every scene. Establishes setting, characters,
  mood, and physical context through visual description that
  becomes the source for Madhubani art generation.
Frequency rule: Every scene opens with exactly one scene-panel.
  Minimum 4 per chapter. No scene starts without one.
Mandatory fields:
  setting_description: Full visual description for art prompt.
  characters_present: List of characters, their positions,
    expressions, and what they are holding or doing.
  heritage_elements: Which specific heritage architectural
    elements are visible.
  mood: The emotional atmosphere of the panel.
  lighting: The light source and quality.
  art_prompt_ref: Reference to the corresponding entry in the
    chapter's image-prompts file.
Rendering per format:
  HTML: Full-width Madhubani illustration with hover-expand.
  DOCX: Full-width embedded image with caption.
  PDF: Full-width image, print-optimized.
  EPUB: Full-width image, reflowable.
  Game: Cinematic panel with subtle animation (parallax layers).
Prose content: Zero. This block is entirely visual.

---

### BLOCK TYPE: dialogue-exchange

Category: DIALOGUE
Purpose: The primary teaching vehicle. Characters speak to each
  other and through their conversation the reader learns.
  Never a transcript of a lecture. Always a genuine exchange
  where both characters are active.
Frequency rule: Minimum 40% of teaching content delivered
  through this block type. The most frequently used block type
  in any SGK chapter.
Mandatory fields:
  lines: Array of speaker plus text pairs.
  Each line includes:
    speaker: Character name
    emotion: Specific emotion tag (not just "said" but
      "said, picking up the chai glass slowly" or
      "said, frowning at the screen" or "said, suddenly sitting up")
    text: The actual dialogue text
    pointer: [OPTIONAL] What the speaker points to or gestures
      toward on a screen, document, or physical object.
  teaching_payload: What concept this exchange delivers.
Dialogue authenticity rules:
  The mentor NEVER sounds like a textbook in quotation marks.
  The mentor uses everyday analogies drawn from their established
    personality profile.
  The hero voices genuine confusion, genuine wrong assumptions,
    and genuine shortcuts that do not work.
  If a dialogue exchange reads as the mentor explaining that X
    is Y in a formal register, it must be rewritten.
  If a dialogue exchange reads as the mentor using an analogy
    drawn from their life while the hero realizes a misconception,
    it is correct.
Rendering per format:
  HTML: Speech bubble layout with character portrait thumbnails,
    emotion-tagged expressions, directional pointer animations.
  DOCX: Indented speaker-colon-text format with character names
    in bold.
  PDF: Same as DOCX with visual styling.
  EPUB: Indented dialogue format.
  Game: Animated character dialogue with expression changes
    and voice-over placeholder.

---

### BLOCK TYPE: workbench-screen

Category: INTERACTIVE
Purpose: Renders a crisp, selectable, interactive representation
  of a software interface or domain-specific work surface.
  This is where the reader sees the actual work being done.
Frequency rule: Minimum 2 per chapter.
Workbench types by vertical module:
  Tech books: IDE code editor, API Testing Workbench,
    Terminal window, Browser network inspector
  Law books: Constitutional Article badge display,
    Courtroom argument panel, Case law gazette
  Economics books: Supply-demand graph, Balance sheet ledger,
    Policy rate dashboard
  Science books: Lab bench with equipment readings,
    Molecular structure display, Data table
  Exam books: Question paper panel, Answer evaluation rubric,
    Score breakdown display
  Life skills books: Budget dashboard, Tax calculation table,
    Legal form display
  All books may also use: Comparison table workbench,
    Timeline panel, Map explorer panel
Mandatory fields:
  workbench_type: One of the defined types above.
  screen_content: The exact content appearing on the screen,
    in monospace format for code and terminal types,
    in structured format for other types.
  pointer_callouts: Array of directional pointer annotations.
    Each callout: position on screen, pointer direction,
    label text, explanation text.
  interaction_mode: READ_ONLY (reader observes) or
    PREDICT (reader predicts output before reveal) or
    EXECUTE (reader is instructed to try this themselves).
  svg_template_ref: Reference to the SVG template file in
    framework/templates/interactive-svg-templates/ that
    renders this workbench type.
Rendering per format:
  HTML: Interactive SVG or React component. Selectable text.
    Animated for PREDICT and EXECUTE modes.
  DOCX: Styled table representation with Consolas font
    and light slate cell shading.
  PDF: Static SVG render, print-optimized.
  EPUB: Static SVG, EPUB3-compatible.
  Game: Full interactive component with input capability
    in EXECUTE mode.
Technical constraint: Never use fuzzy bitmap screenshots.
  Never reference trademarked software names.
  Always use SVG templates from the framework templates folder.

---

### BLOCK TYPE: quad-card

Category: INTERACTIVE
Purpose: The 4-part breakdown card that makes every concept
  crystal clear by showing it from 4 distinct angles.
Frequency rule: Minimum 3 per chapter.
  Every major concept reveal uses a quad-card.
The 4 mandatory parts:
  1. INPUT: What was sent, submitted, argued, or calculated.
     What the actor did or what was put into the system.
  2. UNDER THE HOOD: What happened internally as a result.
     The mechanism: the runtime process, the legal doctrine
     being applied, the economic force at work, the chemical
     reaction, the mathematical operation. This is NOT a
     repetition of the input. It is the explanation of
     the internal process the input triggered.
  3. OUTPUT: What came back, resulted, or was decided.
     The observable consequence. The response, the judgment,
     the market price shift, the experimental result.
  4. SENIOR SAVIOR: Two sub-parts, both mandatory.
     a. THE TRAP: The specific common mistake that learners
        make here that causes real problems. Named and specific.
        Not a vague caution.
     b. THE GOLDEN RULE: The memorable principle that prevents
        the trap. One sentence. Memorable enough to recall
        under exam or workplace pressure.
Domain adaptations of quad-card labels:
  Tech books: Input, Under the Hood, Output, Senior Savior
  Law books: Submission, Doctrine Applied, Judgment, Advocate's Rule
  Economics books: Action, Market Mechanism, Consequence, Economist's Rule
  Exam books: Question, Core Concept, Correct Answer, Examiner Trap
  Science books: Hypothesis, Reaction or Process, Result, Lab Rule
  Life skills books: Decision, How It Works, Outcome, Common Mistake
Rendering per format:
  HTML: 4-quadrant card layout with tap-to-reveal animation
    for each quadrant. Reader sees all 4 simultaneously after
    all are revealed.
  DOCX: 2x2 table with shaded headers per quadrant.
  PDF: Same as DOCX, print-optimized.
  EPUB: Sequential reveal format, readable top to bottom.
  Game: Interactive reveal with player input required before
    quadrant 3 and 4 are shown.

---

### BLOCK TYPE: action-beat

Category: VISUAL
Purpose: Shows what a character physically does. Grounds
  the story in physical action rather than narration.
  Bridges dialogue exchanges and workbench screens.
Frequency rule: Frequent throughout chapters.
  Especially important in Mission 2 and 3 chapters where
  the hero is increasingly doing rather than listening.
Mandatory fields:
  character: Who is performing the action.
  action: Specific physical description. What fingers type,
    what button is pressed, what page is turned, what
    calculation is performed, what argument is made.
  result: What immediately happens as a result of the action.
    Visible on screen, in the room, or in the story world.
  expression: Character's face during the action.
Rendering per format:
  HTML: Illustrated action panel or animated sequence.
  DOCX: Italic action description with character name in bold.
  PDF: Same as DOCX.
  EPUB: Same as DOCX.
  Game: Animated character action with player interaction
    in EXECUTE mode workbenches.

---

### BLOCK TYPE: thought-bubble

Category: DIALOGUE
Purpose: Shows the hero's internal reasoning, confusion, or
  realization. Makes the hero's cognitive process visible
  to the reader, creating the "I know that feeling" moment.
Frequency rule: Minimum 2 per chapter.
  Most frequent in Mission 1 and early Mission 2 chapters.
  Rare in Mission 3 (the hero thinks less and acts more).
Mandatory fields:
  character: Always the hero. Mentors do not have thought-bubbles
    in standard chapters (mentor thoughts appear only in the
    rare, significant Revelation Moment scenes).
  thought: The internal monologue. First person. Authentic
    to the hero's voice and arc position. A thought-bubble
    from a Mission 1 hero sounds different from Mission 3.
  trigger: What caused this thought (a line of dialogue,
    a workbench screen result, an action outcome).
Rendering per format:
  HTML: Speech bubble with cloud-style border. Hero portrait
    thumbnail with relevant expression. Thought text inside.
  DOCX: Italicized first-person text in square brackets
    with character name prefix.
  PDF: Same as DOCX with visual styling.
  EPUB: Same as DOCX format.
  Game: Full thought-bubble animation with expression change.

---

### BLOCK TYPE: challenge-prompt

Category: INTERACTIVE
Purpose: Pauses the story to directly engage the reader.
  The reader must make a prediction or decision before the
  story reveals the answer. Creates active learning moments.
Frequency rule: 2 to 3 per chapter.
Mandatory fields:
  question: The exact text posed to the reader. Direct.
    Second person. Clear about what the reader must do.
  options: 3 to 4 options presented if multiple choice.
    If open-ended: state clearly what the reader should
    write down or think through before continuing.
  pause_instruction: What the reader is explicitly told to
    do. Example: Cover the next section. Make your choice.
    Then continue reading.
  reveal_block_ref: The ID of the challenge-reveal block
    that follows this prompt with the answer.
Fourth wall break rule: This block explicitly addresses
  the reader as a participant. The fourth wall is
  intentionally broken here. This is a defined SGK
  convention, not a formatting accident.
Rendering per format:
  HTML: Full-width interactive prompt. Multiple choice
    options are selectable buttons. Reader choice logged
    for chapter-end accuracy display.
  DOCX: Boxed prompt with options listed. Instruction to
    cover the next section before reading on.
  PDF: Same as DOCX.
  EPUB: Same as DOCX.
  Game: Full interactive challenge input. Wrong answers
    trigger meaningful near-miss explanations before retry.

---

### BLOCK TYPE: challenge-reveal

Category: INTERACTIVE
Purpose: Reveals the answer to the preceding challenge-prompt.
  Returns the reader to the story. Explains why the answer
  is correct and why the common wrong answer is wrong.
Frequency rule: Always paired 1:1 with challenge-prompt blocks.
Mandatory fields:
  correct_answer: The answer, stated clearly.
  explanation: Why this is correct. 40 to 80 words.
  wrong_answer_analysis: For each wrong option: why it is
    wrong and what misconception it represents.
  story_continuation: How the story picks up after this
    reveal. Connects back to the mentor-hero dialogue.
Rendering per format:
  HTML: Appears after user selects an answer in the
    challenge-prompt. Correct answers trigger positive
    micro-celebration. Incorrect answers trigger
    near-miss explanation before showing correct answer.
  DOCX: Text below a separator line with ANSWER heading.
  PDF: Same as DOCX.
  EPUB: Same as DOCX.
  Game: Full animated reveal with scoring consequence.

---

### BLOCK TYPE: cliffhanger-panel

Category: VISUAL
Purpose: Ends every chapter with an unresolved tension that
  makes the reader need to open the next chapter.
Frequency rule: Exactly 1 per chapter. Always at the end.
  Non-negotiable. Every chapter ends with a cliffhanger-panel.
Mandatory fields:
  visual_description: What the panel shows. A specific
    image that communicates the unresolved tension visually.
  cliffhanger_text: 1 to 2 sentences. The final words of
    the chapter. Must pose a specific question or reveal
    a complication. Must not resolve anything.
  story_question: The specific question left unanswered.
  handoff_to_next: The instruction this generates for the
    next chapter's storyboard opening condition.
Rendering per format:
  HTML: Full-width panel with atmospheric Madhubani
    illustration. Cliffhanger text overlaid or below.
    Subtle "Continue to Chapter N" prompt after a delay.
  DOCX: Full-width image placeholder with cliffhanger
    text below in italics.
  PDF: Same as DOCX, print-optimized.
  EPUB: Same as DOCX format.
  Game: Dramatic cinematic panel with ambient sound.
    Mission progress update shown after.

---

### BLOCK TYPE: trap-alert

Category: STRUCTURE
Purpose: Warns the reader about a specific common mistake
  in this subject area. Named traps are more memorable
  than general cautions.
Frequency rule: 1 to 2 per chapter.
Mandatory fields:
  trap_name: A memorable name for this specific mistake.
    Example: The Silent False Positive Trap.
    Example: The Concurrent Power Confusion Trap.
    Example: The Cascading Tax Illusion.
  what_happens: What goes wrong when this trap is triggered.
    Specific and consequential. Not vague.
  why_it_happens: The underlying misconception that leads here.
  the_fix: The correct approach stated as a positive rule.
  real_world_consequence: A one-sentence reference to a real
    case where this trap caused actual damage.
Rendering per format:
  HTML: Styled alert box with trap name as header.
    Warning icon in Madhubani folk art style.
  DOCX: Bordered box with TRAP ALERT heading in series
    accent colour.
  PDF: Same as DOCX.
  EPUB: Same as DOCX.
  Game: Appears as a bonus unlock after the player
    encounters the trap during a challenge.

---

### BLOCK TYPE: reference-anchor

Category: STRUCTURE
Purpose: Embeds reference content (Type B: undramatizable)
  within a story scene without breaking narrative flow.
  The character explicitly calls for the reference, it appears,
  and the story continues.
Frequency rule: As needed for Type B content. Never forced
  into scenes where Type A delivery is possible.
Mandatory fields:
  caller: Which character calls for this reference and the
    exact dialogue line they use to introduce it naturally.
  reference_type: TABLE, ARTICLE_TEXT, FORMULA_SHEET,
    COMMAND_LIST, RATE_CHART, CASE_CITATION, GLOSSARY
  reference_content: The actual reference material,
    formatted appropriately for its type.
  story_continuation: The exact dialogue line that picks
    up the story immediately after the reference appears.
Rendering per format:
  HTML: Styled reference panel with the character's
    calling line above it and the story continuation below.
    Collapsible on second reading.
  DOCX: Formatted reference box with caller attribution.
  PDF: Same as DOCX.
  EPUB: Same as DOCX.
  Game: Reference appears as a collectible document in
    the player's inventory, accessible anytime after found.

---

### BLOCK TYPE: narration-box

Category: PROSE (limited)
Purpose: Scene transition narration only. Setting the scene
  between dialogue exchanges or jumping forward in time.
  Not for teaching content. Teaching content always goes
  into dialogue or visual blocks.
Frequency rule: MAXIMUM 4 per chapter. MAXIMUM 40 words each.
  If the impulse to write a narration-box is for teaching
  content: stop. Find a dialogue or visual alternative.
  Narration boxes set scenes. They do not teach.
Mandatory fields:
  text: The narration. Maximum 40 words. Present tense.
    Third person. Atmospheric. Not informational.
Rendering per format:
  All formats: Italic text in a subtle box or indent.
  Game: Text overlay on a scene transition.

---

### BLOCK TYPE: prose-paragraph

Category: PROSE (restricted)
Purpose: Traditional prose paragraph. Used only when content
  genuinely cannot be delivered through any other block type.
  This should be rare enough that its appearance signals
  something truly requiring prose.
Frequency rule: MAXIMUM 3 per chapter. MAXIMUM 50 words each.
  This limit is enforced by the audit engine. Exceeding it
  fails the Visual Density dimension.
  Before writing a prose-paragraph, the Author Agent must
  answer: why cannot this be a dialogue-exchange, a
  narration-box, or a reference-anchor? If an answer exists,
  use the alternative. If no alternative exists, use this block.
Mandatory fields:
  text: The paragraph. Maximum 50 words.
  justification: [INTERNAL FIELD, not rendered] Why this
    content requires prose rather than any other block type.
Rendering per format:
  All formats: Standard paragraph typography.

---

### BLOCK TYPE: universe-link

Category: STRUCTURE
Purpose: Cross-references a concept in a currently published
  SGK book that the reader may have already read.
  Creates the connected SGK universe effect.
Frequency rule: Maximum 2 per chapter. Optional.
  Only links to books registered in registry.json as published.
  Never forward-references an unwritten book.
  The pedagogical connection must be genuine, not marketing.
Mandatory fields:
  target_book_id: The SGK book ID of the referenced book.
  target_chapter: Chapter number in the referenced book.
  connection_type: FOUNDATIONAL (the other book teaches
    what this concept builds on) or PARALLEL (the other
    book covers this concept from a different angle) or
    ADVANCED (the other book extends this concept further).
  connection_text: 1 to 2 sentences explaining the connection
    in the mentor's voice. Natural, not promotional.
  display_portrait: Which character from the referenced book
    appears in the link display (their Madhubani portrait).
Rendering per format:
  HTML: Styled callout with character portrait, connection
    text, and clickable link to the referenced book's
    HTML edition.
  DOCX: Text reference with book title and chapter citation.
  PDF: Same as DOCX.
  EPUB: Same as DOCX.
  Game: Unlockable lore entry in the player's collection.

---

## Block Sequence Rules

These rules govern how blocks may follow each other.

RULE 1: Scene-first.
Every scene must begin with a scene-panel block.
No other block type may open a scene.

RULE 2: No prose adjacency.
A prose-paragraph block may not be immediately followed by
another prose-paragraph block. A narration-box block may not
be immediately followed by another narration-box block.
These blocks must be separated by at minimum one other block.

RULE 3: Challenge pairing.
Every challenge-prompt must be followed eventually by a
challenge-reveal. They may have other blocks between them
(to give the reader time to think) but the reveal must come
before the end of the scene.

RULE 4: Chapter ending.
The final block of every chapter must be a cliffhanger-panel.
No block may follow the cliffhanger-panel within a chapter.

RULE 5: Workbench before quad-card.
When a workbench-screen and a quad-card cover the same concept,
the workbench-screen appears first (showing the actual work)
and the quad-card follows (explaining the mechanism and rule).
