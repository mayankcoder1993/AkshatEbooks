# SGK Audit Engine

System ID: H09
Layer: Unified
Version: 2.0.0

---

## Purpose

The audit engine is the quality gate that every chapter must
pass before it is certified and merged into the book. It is
an objective, rubric-based evaluation that prevents subjective
assessment from allowing substandard content to ship.

A chapter is not done when the Author Agent thinks it is good.
A chapter is done when the Audit Engine certifies it at 90 or
above with no auto-reject triggers.

---

## The 100-Point Rubric: 7 Dimensions

TOTAL MAXIMUM SCORE: 100 points
CERTIFICATION THRESHOLD: 90 points minimum
AUTO-REJECT TRIGGERS: Defined per dimension. Any auto-reject
  trigger fails the chapter regardless of total score.

---

### DIMENSION 1: VISUAL DENSITY AND COMIC FORMAT INTEGRITY
Maximum Points: 20
Auto-Reject Trigger: Score of 7 or below

This is the highest-weighted dimension because it is the most
commonly failed one. It measures whether the chapter actually
reads and renders as a visual storybook or has drifted back
into textbook mode.

TOOL: Run visual-density-checker.mjs before manual scoring.
The tool reports exact block type counts and ratios.

SCORING:

18 to 20 points (Exemplary):
  Visual plus dialogue plus interactive blocks: 70% or above
  prose-paragraph blocks: 0 to 1, all under 40 words
  narration-box blocks: 0 to 2, all under 30 words
  Every scene opens with a scene-panel: YES
  Every chapter ends with a cliffhanger-panel: YES
  At minimum 1 photograph-worthy spread exists (a visual
    element so clear and useful that a reader would photograph
    and share it): YES
  The chapter renders as a comic storybook at first visual
    impression: YES

14 to 17 points (Proficient):
  Visual plus dialogue plus interactive blocks: 60% to 69%
  prose-paragraph blocks: 2 to 3, all under 50 words
  narration-box blocks: 3 to 4, all under 40 words
  Most scenes open with a scene-panel: YES
  Chapter ends with cliffhanger-panel: YES
  Generally feels like a storybook with minor textbook drift

8 to 13 points (Developing, Revision Required):
  Visual plus dialogue plus interactive blocks: 40% to 59%
  Prose blocks creeping above 20% of total
  Some scenes lack opening scene-panels
  The chapter reads as a hybrid: partly storybook, partly textbook
  This score requires targeted revision of scenes with prose creep

0 to 7 points (AUTO-REJECT):
  Visual plus dialogue plus interactive blocks: below 40%
  Long prose paragraphs dominate multiple scenes
  The chapter reads primarily as a textbook
  This is the failure mode that directly contradicts the
  SGK Format Principle. Any chapter scoring here is immediately
  rejected regardless of other scores and returned to Stage 4
  for complete storyboard redesign.

---

### DIMENSION 2: BOOK PROMISE AND SYLLABUS ALIGNMENT
Maximum Points: 15
Auto-Reject Trigger: Score of 4 or below

Measures whether the chapter directly serves the Book Promise
and delivers the stated Chapter ROI, and whether it covers
the syllabus topics assigned to it in MISSION_MAP.md.

TOOL: Manual check against BOOK_PROMISE.md and MISSION_MAP.md.

SCORING:

13 to 15 points (Exemplary):
  Chapter ROI clearly satisfied: a reader who reads only this
    chapter gains a specific, nameable capability
  All syllabus topics from MISSION_MAP.md covered with depth
  Direct and measurable movement toward the Book Promise
  No off-topic content present
  The chapter-level transformation is complete and visible

9 to 12 points (Proficient):
  Chapter ROI mostly satisfied
  Most assigned syllabus topics covered
  Book Promise connection present but could be more direct
  Minor off-topic content (one section that could be cut)

5 to 8 points (Developing, Revision Required):
  Chapter ROI vague: covers this topic rather than enables
    this skill
  Syllabus coverage incomplete (missing topics)
  Book Promise connection unclear
  Requires restructuring to focus on transformation

0 to 4 points (AUTO-REJECT):
  Chapter does not cover assigned syllabus topics
  No connection to the Book Promise
  Chapter ROI is effectively empty
  Reject immediately

---

### DIMENSION 3: WORLD BIBLE COMPLIANCE AND NARRATIVE CONSISTENCY
Maximum Points: 15
Auto-Reject Trigger: Score of 4 or below

Measures whether the chapter is internally consistent with
the established World Bible, whether characters behave
consistently with their established personalities, and whether
the story arc is advancing correctly.

TOOL: Run world-bible-checker.mjs before manual scoring.
The tool flags specific consistency violations.

SCORING:

13 to 15 points (Exemplary):
  Zero contradictions with the Established Facts Log
  Hero emotional state perfectly matches the Emotional Arc Tracker
  Mission Tone Envelope fully respected (pacing, dialogue ratio,
    stakes scale, visual mood all match the mission spec)
  All Locked Vocabulary used consistently
  No analogy reused that is marked USED in the Analogy Registry
  All Open Story Threads handled correctly (not prematurely
    resolved, not accidentally forgotten)
  World Bible updates are complete and accurate

9 to 12 points (Proficient):
  Minor consistency issues: one vocabulary inconsistency,
    or hero slightly more confident than tracker suggests,
    or one minor setting detail inconsistency
  Mission Tone mostly respected with minor deviations
  World Bible updates complete with minor gaps

5 to 8 points (Developing, Revision Required):
  Multiple consistency violations with the Established Facts Log
  Hero emotional state significantly misaligned with tracker
  Mission Tone violated in noticeable ways
  Analogies reused or vocabulary inconsistent
  Requires targeted revision to align with World Bible

0 to 4 points (AUTO-REJECT):
  Fundamental World Bible violations that would confuse
    any reader who has read previous chapters
  Hero behaving in a way that contradicts their established arc
  Setting or character descriptions contradicting reference specs
  Reject and return to Stage 6 with specific correction list

---

### DIMENSION 4: CHARACTER VOICE AND NARRATIVE ENGAGEMENT
Maximum Points: 15
Auto-Reject Trigger: Score of 4 or below

Measures whether characters sound authentic to their established
personalities, whether the narrative creates genuine emotional
engagement, and whether the reader cares about what happens next.

SCORING:

13 to 15 points (Exemplary):
  Mentor dialogue: zero instances of textbook-in-quotation-marks
    style. Every explanation uses an authentic analogy or
    Socratic question from the mentor's established voice
  Hero dialogue: voices genuine confusion, attempts wrong
    shortcuts, shows believable arc-appropriate confidence level
  Temporary characters serve their narrative function clearly
    and exit at the right moment
  The reader genuinely cares what happens next after reading
  The cliffhanger-panel creates real story tension
  The Emotional Arc of the chapter is visible and earned

9 to 12 points (Proficient):
  Characters mostly authentic with 1 to 2 dialogue exchanges
    that feel slightly formal or textbook-like
  Narrative momentum present
  Cliffhanger functional if not exceptional

5 to 8 points (Developing, Revision Required):
  Mentor frequently sounds like a textbook in quotation marks
  Hero dialogue too competent for their arc position, or
    too confused for Mission 3
  Narrative momentum weak
  Requires dialogue rewriting in multiple scenes

0 to 4 points (AUTO-REJECT):
  Characters indistinguishable from narrating prose
  No authentic personality, no genuine analogies
  No emotional engagement
  No meaningful cliffhanger
  Reject immediately

---

### DIMENSION 5: INTERACTIVE ELEMENTS AND ACTIVE LEARNING
Maximum Points: 15
Auto-Reject Trigger: Score of 4 or below

Measures whether the chapter creates sufficient active learning
moments where the reader must engage rather than passively read.

TOOL: Count block types using visual-density-checker.mjs.

SCORING:

13 to 15 points (Exemplary):
  Minimum 2 workbench-screen blocks, correctly rendered as
    SVG or DOM with selectable text and pointer callouts
  Minimum 3 quad-cards, all 4 parts complete and substantive
    (Under the Hood explains mechanism, not repeats input;
    Senior Savior names a specific trap AND a golden rule)
  Minimum 2 challenge-prompt blocks with paired challenge-reveal
  Minimum 2 thought-bubble blocks showing authentic hero
    internal reasoning
  At minimum 3 moments where the reader must actively engage
    before seeing the answer
  All Type C Practice beats properly implemented

9 to 12 points (Proficient):
  Most interactive requirements met
  One workbench or quad-card missing or incomplete
  Challenge-prompts present but one missing

5 to 8 points (Developing, Revision Required):
  Workbench screens described in prose rather than SVG
  Quad-cards incomplete (missing one or more quadrants in
    multiple cards)
  Challenge-prompts rare or absent
  Passive reading dominates

0 to 4 points (AUTO-REJECT):
  No workbench screens
  No quad-cards
  No challenge-prompts
  Purely passive reading experience
  Reject immediately

---

### DIMENSION 6: TECHNICAL ACCURACY AND PROOF VERIFICATION
Maximum Points: 10
Auto-Reject Trigger: Score of 2 or below

Measures whether all claims, code examples, citations,
calculations, and facts are accurate and verified.

TOOL: Run snippet-validator.mjs for tech books.
Run citation-checker.mjs for law and exam books.
Manual verification for calculations in economics books.

SCORING:

9 to 10 points (Exemplary):
  All code snippets execute and pass the test suite with
    zero failures (tech books)
  All legal citations include correct Article/Section/Clause
    and relevant case name (law books)
  All calculations recalculate to stated answer (econ books)
  All factual claims carry named primary sources
  Domain-specific proof validator reports zero errors
  No outdated information (all content current as of the
    date specified in FORMAT_DECISION.md)

6 to 8 points (Proficient):
  Minor issues: one code comment inaccurate, one citation
    missing a clause number, one calculation needs a rounding
    note. Fixable without restructuring.

3 to 5 points (Developing, Revision Required):
  Multiple accuracy issues requiring systematic review
  Some code untested, some citations missing
  Calculations unverified

0 to 2 points (AUTO-REJECT):
  Core technical content is inaccurate or unverifiable
  Significant errors that would mislead the reader
  Reject immediately

---

### DIMENSION 7: RULE 19 COMPLIANCE AND LANGUAGE QUALITY
Maximum Points: 10
Auto-Reject Trigger: None (Rule 19 violations reduce score
  but do not auto-reject, because all violations are fixable
  without content restructuring)

Measures compliance with the Rule 19 language standard and
overall language quality.

TOOL: Run rule19-checker.mjs. The tool reports exact line
numbers for every violation.

SCORING:

9 to 10 points (Exemplary):
  rule19-checker.mjs reports: 0 violations
  All compound adjectives written as separate words
  No hyphen or dash outside whitelisted technical tokens
  Language flows naturally (the absence of hyphens does not
    feel forced or awkward)
  Vocabulary level matches the audience profile specification

7 to 8 points (Proficient):
  1 to 3 Rule 19 violations, minor and easily fixed
  Vocabulary level mostly appropriate

4 to 6 points (Developing, Fix Required Before Certification):
  4 to 10 violations. Systematic issue with a specific
    pattern (e.g., all compound adjectives in one section
    still hyphenated)

0 to 3 points:
  10 or more violations. Rule 19 was not actively enforced.
  All violations must be fixed before certification regardless
  of whether the chapter passes on total score.

---

## Scoring Summary Table

| Dimension | Max Points | Auto-Reject Trigger |
|---|---|---|
| 1: Visual Density and Comic Format | 20 | Score 7 or below |
| 2: Book Promise and Syllabus | 15 | Score 4 or below |
| 3: World Bible and Consistency | 15 | Score 4 or below |
| 4: Character Voice and Engagement | 15 | Score 4 or below |
| 5: Interactive and Active Learning | 15 | Score 4 or below |
| 6: Technical Accuracy and Proof | 10 | Score 2 or below |
| 7: Rule 19 and Language Quality | 10 | None |
| TOTAL | 100 | |

CERTIFICATION: Total score 90 or above AND no auto-reject triggers
REJECTION: Total score below 90 OR any auto-reject trigger

---

## The Audit Report Format

Every audit produces a file at audits/audit-report-ch[NN].md

MANDATORY SECTIONS:

CHAPTER INFORMATION:
  Chapter number and title
  Book ID
  Audit date
  Auditor agent version

TOOL OUTPUT SUMMARY:
  visual-density-checker output (block counts and ratios)
  rule19-checker output (violation count and line numbers)
  world-bible-checker output (consistency violations if any)
  snippet-validator output if applicable
  citation-checker output if applicable

DIMENSION SCORES:
  For each dimension:
    Score: [N] / [Maximum]
    Status: PASS / FAIL / AUTO-REJECT
    Justification: [Specific observation supporting the score]
    Deduction items: [Specific lines or blocks that caused
      deductions, with exact location references]

TOTAL SCORE: [N] / 100
CERTIFICATION STATUS: CERTIFIED PASS or REJECTED

IF REJECTED:
  REMEDIATION REQUIRED:
  For each deduction or auto-reject trigger:
    Issue: [Specific problem with location reference]
    Required action: [Specific fix with enough detail that
      the Author Agent can implement without ambiguity]
    Priority: CRITICAL (auto-reject), HIGH (large deduction),
      MEDIUM (small deduction)

  REMEDIATION PATHS (for Guardrail 5 presentation):
  Present 2 to 3 ways to address the most significant issues,
  with trade-offs for each, and a recommendation.

IF CERTIFIED:
  CERTIFICATION STATEMENT:
  Chapter [NN] of [Book Title] is certified at [N]/100.
  All 7 audit dimensions pass the minimum threshold.
  No auto-reject triggers. This chapter is approved for
  inclusion in the book assembly.
  Certification date: [DATE]
  Next action: Update World Bible. Proceed to Stage 4
    for Chapter [NN+1] or Stage 8 if all chapters certified.
