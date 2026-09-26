# SGK Pipeline Protocol

System ID: H02
Layer: Unified (applies to every book in every series)
Version: 2.0.0

---

## Purpose

Every SGK book follows the same 9-stage pipeline from market
discovery to final publication. No stage is skipped. No stage is
merged with another. The pipeline is the same regardless of subject,
audience, series, or book length. The content produced at each stage
varies per book. The structure never does.

---

## The 9 Stages at a Glance

Stage 0: Market, Format, and Audience Discovery
Stage 1: Persona, Character Casting, and Tone Configuration
Stage 2: Research and Buyer Language Mining
Stage 3: Story Mining, Mission Architecture, and World Bible Creation
Stage 4: Scene Storyboard and Visual Mockup (per chapter)
Stage 5: Image Prompt Generation (per chapter)
Stage 6: Content Generation, Scene by Scene (per chapter)
Stage 7: Audit and Validation (per chapter)
Stage 8: Brand Wrapping and Multi-Format Build
Stage 9: Human Final Review and Publication Approval

Stages 0 through 3 run once per book.
Stages 4 through 7 run once per chapter.
Stage 8 runs once per book after all chapters are certified.
Stage 9 runs once per book after Stage 8 completes.

---

## Stage 0: Market, Format, and Audience Discovery

PURPOSE
Lock the exact buyer, their purchase trigger, their pain, the Book
Promise, the format type, and the price tier before any other work
begins. Nothing is assumed. Nothing is inferred from the subject
alone.

AGENT RESPONSIBLE
Market Discovery Agent

INPUTS REQUIRED
Human user's initial book request (any form: a sentence, a topic,
an audience description, or an explicit brief).

PROCESS

Step 1: Registry check.
Is a book matching this request already registered?
If yes: load existing artifacts, present status dashboard,
proceed to the appropriate stage.
If no: this is a new book. Continue Step 2.

Step 2: Buyer discovery questions.
Present the following question sets to the human user.
Use Option C format: 2 to 3 structured options per question
with trade-offs and a recommendation. Never open-ended blanks.

QUESTION SET A: The Exact Buyer
Who is buying this? Present 3 specific buyer personas.
Each persona includes: age range, current situation, what they
are doing right now that is not working, what is at stake.
User selects one or refines.

What is their purchase trigger? The specific event that makes
them buy today rather than next month.

What pain is forcing this purchase? The specific thing that
is failing or threatening to fail without this knowledge.

What have they tried before that did not work?

In one line: what result must this book deliver?

Completion sentence: After finishing this book I can finally
[BLANK]. What goes in the blank for this buyer?

QUESTION SET B: The Format
Product type: Full textbook / Sprint guide / Question bank /
Revision companion / Workbook / Concept and Practice hybrid.

Reading mode: Cover to cover / Reference dip in /
Chapter independent / Daily plan (e.g., 20 pages per day).

Physical reading context: Desk with laptop and highlighters /
Phone on commute / Tablet before bed / Study table with
physical book.

Time constraint: How many days does the buyer realistically have?
How many hours per day can they dedicate?

QUESTION SET C: The Market
Top 3 competing books: What do they do well?
What do readers complain about in their reviews?

Why is free content (YouTube, ChatGPT, Google) not sufficient
for this buyer right now?

Language: English only, or does this book need Hindi or bilingual
support? (See language configuration in FORMAT_DECISION template.)

QUESTION SET D: Buyer Language Mining
The agent searches the following sources and extracts exact phrases
real buyers use when describing their problem:
  Amazon India: 1 star and 3 star reviews of top 3 competing books
  Google Autocomplete: 20+ queries from buyer perspective
  Reddit: r/UPSC, r/learnprogramming, r/IndianAcademia,
    r/india, subject-specific subreddits
  Quora: questions with 1000+ views and no satisfying answer
  YouTube comments: under which book for X review videos
  Telegram and study groups: pre-exam questions if applicable

Output: A list of 10 to 20 exact buyer phrases. These are used
verbatim or near-verbatim in the Preface, chapter opening dialogue,
and challenge prompts.

OUTPUTS PRODUCED
  MARKET_BRIEF.md
  BOOK_PROMISE.md (one sentence, the canonical Book Promise)
  FORMAT_DECISION.md (product type, page budget, density ratio,
    reading mode, physical context, language configuration)

GUARDRAIL 0
MANDATORY PAUSE. The agent presents the complete MARKET_BRIEF.md
and BOOK_PROMISE.md to the human user. The user must explicitly
confirm or revise in writing. The agent stores the confirmation
in books/[book-id]/handoff-memos/guardrail-00-confirmed.md.
The agent MUST NOT proceed to Stage 1 without this confirmation.

HANDOFF MEMO
Before handoff to Stage 1, the agent writes
books/[book-id]/handoff-memos/handoff-stage00-to-stage01.md
using the template in framework/templates/handoff-memo.template.md.
The memo documents: buyer persona selected, competing books
reviewed, buyer phrases collected, decisions made, options
rejected and why, open questions for Stage 1.

---

## Stage 1: Persona, Character Casting, and Tone Configuration

PURPOSE
Convert the confirmed market brief into an actionable reader profile.
Select the genre superhero mentor for this book's series. Create the
book-specific hero character. Lock the tone and vocabulary level.

AGENT RESPONSIBLE
Persona and Character Agent

INPUTS REQUIRED
Confirmed MARKET_BRIEF.md
Confirmed BOOK_PROMISE.md
Confirmed FORMAT_DECISION.md
framework/unified/07-character-universe-protocol.md
The character ledger for this series' superhero mentor from
framework/characters/
The audience profile for this book from framework/audience-profiles/

PROCESS

Part A: Outcome-Backwards Reader Profile
Profile the reader from outcome backwards, not from knowledge level
forwards. Answer all of the following:

Primary buyer: give them a specific name (fictional but realistic),
age, current life situation in 2 sentences.

Time constraint: realistic hours per day and days available.

Knowledge state:
  What do they genuinely know already?
  What do they think they know but actually do not?
  What are they afraid to admit they do not know?

Urgency level: Low, Medium, or High.
High urgency buyers have stronger purchase intent and prefer
shorter, more targeted formats.

Learning style under pressure: Do they revise from summaries,
tables, MCQs, full chapters, or worked examples?

Success definition: One measurable sentence.
Example: Success means solving 80 percent of PYQs from the
last 5 years on this topic independently.

Failure fear: What outcome are they genuinely afraid of?

Desired identity: Who do they want to become after using this book?
Not what they want to know. Who they want to be.

Part B: Genre Superhero Mentor Selection
Load the character ledger for the superhero mentor of this series.
The ledger is in framework/characters/mentor-sgk-[series-id]-[name].md.

If this is the FIRST book in a new series that has no established
mentor yet: create the mentor now using the Character Universe
Protocol in framework/unified/07-character-universe-protocol.md.
Create the ledger file and store it in framework/characters/.

If the mentor already exists: load their ledger. Note which story
threads from previous books are active. Note which analogies have
already been used. Note where the mentor is in their own ongoing
story arc.

The mentor is fixed for this series. They appear in this book
in the same way they appear in all books in this series.
The mentor never changes personality between books.

Part C: Book-Specific Hero Character Creation
Create a new hero character for this specific book.
Follow the 5-step Hero Creation Protocol from
framework/unified/07-character-universe-protocol.md.

The hero must:
  Be different from every previous hero in this series
  (check the series character bible if one exists)
  Represent the specific reader profile from Part A
  Have a distinct personality that creates story tension
  Have a clear 5-beat arc from Broken World to Earned Mastery
  Have a specific visual design brief for Madhubani illustration

Part D: Tone Configuration
Apply the vocabulary level, sentence length limits, and
prose budget rules from the audience profile for this book.
Write a 10-line tone sample: 5 lines of mentor dialogue and
5 lines of hero dialogue showing how they speak to each other.
This sample is used to calibrate all future content generation.

OUTPUTS PRODUCED
  PERSONA_PROFILE.md
  CHARACTER_CAST.md (superhero mentor selection plus hero spec
    plus tone configuration plus 10-line dialogue sample)

GUARDRAIL 1
MANDATORY PAUSE. The agent presents CHARACTER_CAST.md including
the 10-line dialogue sample to the human user in Option C style:
2 to 3 variations of the hero's personality and the dialogue tone.
User confirms or adjusts. Confirmation stored in
books/[book-id]/handoff-memos/guardrail-01-confirmed.md.

HANDOFF MEMO
books/[book-id]/handoff-memos/handoff-stage01-to-stage02.md

---

## Stage 2: Research and Buyer Language Mining

PURPOSE
Build a comprehensive research foundation across 5 mandatory pillars
before any content planning begins. Discover not just what to teach
but how real buyers talk about their confusion, what analogies
resonate, and which real-world failures make the subject viscerally
important.

AGENT RESPONSIBLE
Research Agent

INPUTS REQUIRED
Confirmed PERSONA_PROFILE.md
Confirmed CHARACTER_CAST.md
The vertical module for this book: framework/vertical/[vXX-name].md
The audience profile: framework/audience-profiles/[apXX-name].md
Buyer language phrases from Stage 0 MARKET_BRIEF.md

PROCESS

PILLAR 1: Official Syllabi and Standards
For exam books: official notification and syllabus documents
For tech books: RFCs, W3C standards, official library documentation
For law books: bare act text, official gazette notifications
For science books: NCERT curriculum, university syllabi, AICTE guidelines
For professional books: professional body standards (ICAI, ICSI, etc.)

Output: A list of mandatory topics. Topics that are required by the
official syllabus or standard. Topics that are optional or historical.
Topics that are outdated and should be excluded.

PILLAR 2: Top Course and Video Benchmarks
Identify the top 5 YouTube creators and top 5 platform course
instructors for this subject.
Extract: their most successful metaphors and analogies.
Extract: their visual diagram approaches.
Extract: the most frequently asked questions in comments and Q&A.
Extract: the moments where students say this finally made sense.
Note: which instructors students recommend and why in their words.

Output: A metaphor and analogy library. A list of common student
confusion points. A list of the most effective teaching moments
from top instructors.

PILLAR 3: Authoritative Reference Literature
Identify the canonical reference books for this subject.
Assess: what these books do well.
Assess: what reviewers and students criticize about them.
Map: their chapter structure against the official syllabus.
Identify: content gaps the SGK book can fill.

Output: A competitor analysis with specific gaps identified.
At minimum 3 specific things the SGK book will do that the
top competing books do not.

PILLAR 4: Real-World Failure Retrospectives
For every major concept in the subject, find a real-world failure
that occurred because someone did not understand that concept.

Source types by vertical:
  Tech: GitHub incident post-mortems, official outage reports,
    regulatory enforcement actions against tech companies
  Law: Supreme Court judgments, Law Commission reports,
    Parliamentary committee findings, RTI disclosures
  Economics: RBI annual reports, SEBI enforcement orders,
    World Bank country assessments, budget documents
  Science: Published experiment failures, retracted studies,
    regulatory recall notices, accident investigation reports
  Competitive exams: UPSC topper analysis, coaching failure
    patterns, common wrong-answer analysis from official keys

Output: A case study library. 2 to 3 real-world failure cases
per chapter assignment. Each case: what happened, what concept
was misunderstood, what the cost was, primary source citation.

PILLAR 5: Real Buyer Language Mining
This extends the initial mining from Stage 0 into deeper research.
For this subject specifically, collect 30 to 50 additional buyer
phrases from:
  Amazon India: 1 to 3 star reviews of all competing books
  Reddit threads specific to this subject community
  Quora questions with high views and low answer satisfaction
  Telegram study groups if publicly accessible
  YouTube comment sections under tutorial and review videos
  Forum posts and exam community discussions

Output: A buyer language lexicon: 30 to 50 exact phrases
organized by theme (confusion phrases, frustration phrases,
desire phrases, fear phrases). These phrases drive dialogue
authenticity and Preface voice.

OUTPUTS PRODUCED
  RESEARCH_BRIEF.md (all 5 pillars documented with sources)
  CHAPTER_TOPIC_POOL.md (flat list of all potential chapter
    topics before sequencing or selection)

GUARDRAIL 2
MANDATORY PAUSE. The agent presents RESEARCH_BRIEF.md summary
and the raw CHAPTER_TOPIC_POOL.md to the human user. User confirms
research scope, approves case study selections, and flags any
topics that must be included or excluded. Confirmation stored in
books/[book-id]/handoff-memos/guardrail-02-confirmed.md.

HANDOFF MEMO
books/[book-id]/handoff-memos/handoff-stage02-to-stage03.md

---

## Stage 3: Story Mining, Mission Architecture, and World Bible

PURPOSE
Transform the approved topic pool into a 3-mission story arc.
Name missions by reader outcomes, not syllabus units. Define the
Creative Vehicle for this specific book. Create the initial
World Bible that will govern all future content generation.

AGENT RESPONSIBLE
Architect Agent and Creative Director Agent (collaborative)

INPUTS REQUIRED
Confirmed RESEARCH_BRIEF.md
Confirmed CHAPTER_TOPIC_POOL.md
Confirmed BOOK_PROMISE.md
Confirmed CHARACTER_CAST.md
Confirmed FORMAT_DECISION.md
framework/unified/14-story-mining-protocol.md
The vertical module's Creative Vehicle Palette section

PROCESS

Part A: Story Mining (4 mandatory steps)
Load framework/unified/14-story-mining-protocol.md.
Execute all 4 steps of the Story Mining Protocol:
  Step 1: Extract the Core Conflict of this subject
  Step 2: Identify the 3 natural Acts of the learning journey
  Step 3: Define the Enemy (the specific failure mode)
  Step 4: Name missions as dramatic victories over the Enemy

Part B: Creative Vehicle Selection
Load the Creative Vehicle Palette from the vertical module.
The palette provides 5 to 8 seed ideas, not mandates.
Using the Story Mining output and the CHARACTER_CAST, select or
invent the specific story world for this book.

The Creative Vehicle must be:
  Different from every other book in this series
    (check the series catalog in registry/series-catalog.json)
  Consistent with the mentor character's established personality
  Appropriate for the audience profile's engagement preferences
  Rich enough to sustain 3 missions without feeling forced

Document the Creative Vehicle in CREATIVE_VEHICLE.md.

Part C: Mission Architecture
Assign every topic from CHAPTER_TOPIC_POOL.md to one of 3 missions.
Apply the Chapter ROI Test to every proposed chapter:
  REJECTED: Covers this topic
  REJECTED: Builds foundation
  REJECTED: Introduces the concept of X
  APPROVED: Enables the reader to [specific, measurable action]

Topics that cannot pass the Chapter ROI Test are restructured
to be more specific or merged with adjacent chapters.
Apply the Golden Chapter Rule: if a topic does not help the reader
move closer to the Book Promise, it is not a chapter.

Part D: Initial World Bible Creation
Create the initial WORLD_BIBLE.md using the template in
framework/templates/WORLD_BIBLE.template.md.

At Stage 3, populate these sections:
  Section 1: The World Premise (complete)
  Section 2: Established Facts Log (initial: setting, starting
    character relationships, opening story state)
  Section 3: Emotional Arc Tracker (initial: hero's state
    at the start of Chapter 1 only)
  Section 4: Locked Vocabulary (initial: terms established
    by the Book Promise, Character Cast, and Creative Vehicle)
  Section 5: Visual Continuity Specification (initial: primary
    recurring locations and character visual specs)
  Section 6: Mission Tone Envelopes (complete for all 3 missions)
  Section 7: Open Story Threads (initial: story seeds planted
    in the Creative Vehicle and Character Cast)

OUTPUTS PRODUCED
  MISSION_MAP.md
  CREATIVE_VEHICLE.md
  WORLD_BIBLE.md (initial version)

GUARDRAIL 3
MANDATORY PAUSE. The agent presents all three documents to the
human user. Specifically for MISSION_MAP.md: presents the mission
names, chapter titles, and the ROI statement for each chapter.
For CREATIVE_VEHICLE.md: presents 2 to 3 alternative creative
vehicles with a recommendation. User approves or revises.
Confirmation stored in
books/[book-id]/handoff-memos/guardrail-03-confirmed.md.

HANDOFF MEMO
books/[book-id]/handoff-memos/handoff-stage03-to-stage04.md

---

## Stage 4: Scene Storyboard and Visual Mockup

PURPOSE
Before writing a single word of content, blueprint every chapter
as a sequence of comic scenes with full visual panel descriptions,
character dialogue summaries, teaching payloads, and page layout
mockups. This stage is where the comic storybook format is designed,
not hoped for.

AGENT RESPONSIBLE
Creative Director Agent

RUNS: Once per chapter, before Stage 6 for that chapter.

INPUTS REQUIRED
Confirmed MISSION_MAP.md (for this chapter's ROI and mission)
Confirmed WORLD_BIBLE.md (current version)
Confirmed CHARACTER_CAST.md
The vertical module's Subject Invariants section
The audience profile's panel density and pacing rules
The previous chapter's certified storyboard (for transition protocol)
framework/unified/05-scene-storyboard-protocol.md

PROCESS

Step 1: Load the World Bible.
Read the Established Facts Log. No contradictions allowed.
Read the Emotional Arc Tracker. The hero begins this chapter
at exactly the emotional state recorded for this point.
Read the Mission Tone Envelope for this chapter's mission.
All scenes must comply with the tone envelope.

Step 2: Load the chapter transition requirement.
Read the previous chapter's CHAPTER CLOSING HOOK.
Scene 1 Beat 1 of this chapter must directly address or
resolve the previous chapter's cliffhanger.
If this is Chapter 1: no previous chapter. Scene 1 Beat 1
establishes the Broken World state of the hero.

Step 3: Apply the Chapter Opening Condition.
Record in the storyboard:
  Previous chapter cliffhanger (exact text or N/A for Chapter 1)
  How this chapter's Scene 1 resolves it
  Hero's inherited emotional state

Step 4: Design scenes.
Every scene must follow the mandatory scene format defined in
framework/unified/05-scene-storyboard-protocol.md.
Apply Content Type Tags to every teaching beat:
  Type A: Dramatic (natural story tension, full scene-panel sequence)
  Type B: Reference (important but not dramatizable, uses
    reference-anchor block within the story)
  Type C: Practice (reader must act, uses challenge-prompt
    and challenge-reveal block pair)

Step 5: Calculate block type ratios.
Count estimated blocks by type for the entire chapter.
Verify visual density law compliance before finalizing storyboard:
  Visual plus dialogue plus interactive blocks: minimum 60 percent
  Prose blocks (prose-paragraph plus narration-box): maximum 20 percent
If the ratio fails, redesign scenes to move teaching from prose
into dialogue and visual beats.

Step 6: Design the visual mockup.
Produce a page layout wireframe for each 2-page spread in the chapter.
Each spread shows: panel boxes with one-line descriptions,
workbench screen placements, quad-card placements, dialogue bubble
placements. This does not need to be a polished design. It needs to
show the visual experience of reading the chapter before content
is written.

Step 7: Assign the Chapter Closing Hook.
The final scene of every chapter must end with a cliffhanger-panel.
Assign specifically:
  What story question does this chapter leave unresolved?
  What one sentence does the cliffhanger-panel communicate?
  What instruction does this generate for the next chapter's
  storyboard (its Chapter Opening Condition)?

OUTPUTS PRODUCED
  storyboards/storyboard-ch[NN].md
  (The visual mockup is embedded in this document as
  ASCII or text-based layout diagrams.)

GUARDRAIL 4
MANDATORY PAUSE. The agent presents the complete storyboard
AND the visual mockup for the chapter to the human user.
This is a full Option B review: every scene with its beats.
The agent may present 2 to 3 alternative treatments for scenes
where genuine trade-offs exist (always with a recommendation).
The human user reviews and confirms, adjusts, or rejects.
If the mockup looks like a wall of text, the storyboard is
rejected and redesigned before any content is written.
Confirmation stored in
books/[book-id]/handoff-memos/guardrail-04-ch[NN]-confirmed.md.

HANDOFF MEMO
books/[book-id]/handoff-memos/handoff-stage04-to-stage05-ch[NN].md

---

## Stage 5: Image Prompt Generation

PURPOSE
Convert every scene-panel beat from the approved storyboard into
production-ready Madhubani art prompts for AI image generation.

AGENT RESPONSIBLE
Image Prompt Agent

RUNS: Once per chapter, after Stage 4 storyboard is approved.

INPUTS REQUIRED
Approved storyboard-ch[NN].md
Confirmed CHARACTER_CAST.md (visual design briefs)
WORLD_BIBLE.md Section 5 (visual continuity specs)
framework/unified/08-image-prompt-protocol.md
Existing character reference sheets from
books/[book-id]/assets/character-reference/ (if generated)

SPECIAL RULE FOR CHAPTER 1 OF EVERY BOOK
Before generating chapter image prompts, first generate
Character Reference Sheet prompts for every named recurring
character. These reference sheets must be generated and the
best image outputs selected and stored in
books/[book-id]/assets/character-reference/
BEFORE any chapter scene prompts are generated.
This ensures visual consistency from the first chapter.

OUTPUTS PRODUCED
  image-prompts/image-prompts-ch[NN].md
  (For Chapter 1 of every book, also produces:
  image-prompts/character-reference-prompts.md)

NO GUARDRAIL AT THIS STAGE
The agent generates prompts. The human user submits them to
their chosen image generation tool, reviews the outputs,
and places approved images in books/[book-id]/assets/illustrations/.
The agent does not generate images directly.

HANDOFF MEMO
books/[book-id]/handoff-memos/handoff-stage05-to-stage06-ch[NN].md

---

## Stage 6: Content Generation (Scene by Scene)

PURPOSE
Write the actual content of the chapter, one scene at a time,
following the approved storyboard beat by beat, with the Context
Packet injected at every step, using only approved block types,
with Rule 19 enforced in real time.

AGENT RESPONSIBLE
Author Agent

RUNS: Once per chapter, one scene at a time.

INPUTS REQUIRED
Approved storyboard-ch[NN].md
Confirmed CHARACTER_CAST.md
Current WORLD_BIBLE.md
Context Packet assembled per
framework/unified/03-context-injection-protocol.md
The vertical module's Subject Invariants section
The audience profile tone rules
Most recent handoff memo for this chapter

PROCESS

Before every scene, the Author Agent:
1. Assembles and reads the full Context Packet.
   Never generates from conversation memory alone.
2. Reads the specific scene beats from the storyboard.
   The storyboard is the blueprint. The agent executes it.
3. Checks the World Bible Established Facts Log.
   No contradiction with any established fact is acceptable.
4. Checks the Emotional Arc Tracker.
   The hero's emotional state matches the tracker for this point.

During generation:
1. Generate one scene at a time. Complete and self-check one
   scene before beginning the next.
2. Enforce block type rules actively. Before closing a scene,
   count prose blocks used so far in the chapter. If approaching
   the limit (3 prose-paragraph blocks total), find dialogue or
   visual alternatives for remaining prose impulses.
3. Enforce Rule 19 in real time. Before outputting any sentence,
   scan for hyphens and dashes in prose positions. Correct before
   output. Never output a Rule 19 violation and fix it later.
4. Dialogue authenticity check per line:
   Does the mentor sound like a textbook? Rewrite if yes.
   Does the hero voice genuine confusion or a realistic mistake?
   Rewrite if they sound too competent for their arc position.
5. Quad card completeness check:
   Every quad card must have all 4 parts populated.
   Under the Hood must explain mechanism, not repeat input.
   Senior Savior must state a specific trap AND a golden rule.
6. Proof embedding:
   Every code snippet drawn from the book's validated test suite.
   Every legal citation includes Article or Section number and clause.
   Every numerical example shows the full calculation chain.

After completing all scenes:
Update WORLD_BIBLE.md:
  Add to Established Facts Log: every new location, relationship,
  or story fact introduced in this chapter.
  Update Emotional Arc Tracker: record hero's emotional state
  at the end of this chapter.
  Add to Locked Vocabulary: any new terms or phrases established.
  Add to Open Story Threads: any new story seeds planted.
  Update Visual Continuity: any new recurring visual elements.

OUTPUTS PRODUCED
  chapters/ch[NN]-[slug].js (chapter content in AST block format)
  Updated WORLD_BIBLE.md

NO GUARDRAIL AT THIS STAGE
Content generation proceeds after Stage 4 guardrail approval.
The next human checkpoint is Stage 7 audit results.

HANDOFF MEMO
books/[book-id]/handoff-memos/handoff-stage06-to-stage07-ch[NN].md

---

## Stage 7: Audit and Validation

PURPOSE
Run the full automated audit. Calculate the 100-point score across
7 dimensions. Certify if score is 90 or above. Reject with itemized
remediation if below 90. Run the domain-specific proof validator.
Check World Bible compliance.

AGENT RESPONSIBLE
Auditor Agent

RUNS: Once per chapter, after Stage 6 content is generated.

INPUTS REQUIRED
Generated chapter file: chapters/ch[NN]-[slug].js
Current WORLD_BIBLE.md
Confirmed BOOK_PROMISE.md
Confirmed CHARACTER_CAST.md
framework/unified/09-audit-engine.md (full rubric)
framework/tools/audit-chapter.mjs
framework/tools/rule19-checker.mjs
framework/tools/visual-density-checker.mjs
framework/tools/world-bible-checker.mjs
framework/tools/citation-checker.mjs (for law and exam books)
framework/tools/snippet-validator.mjs (for tech books)

PROCESS

Step 1: Run automated tools.
  node framework/tools/rule19-checker.mjs chapters/ch[NN]-[slug].js
  node framework/tools/visual-density-checker.mjs chapters/ch[NN]-[slug].js
  node framework/tools/world-bible-checker.mjs chapters/ch[NN]-[slug].js
    artifacts/WORLD_BIBLE.md
  If tech book:
    node framework/tools/snippet-validator.mjs chapters/ch[NN]-[slug].js
  If law or exam book:
    node framework/tools/citation-checker.mjs chapters/ch[NN]-[slug].js

Step 2: Score all 7 audit dimensions.
  Load the full rubric from framework/unified/09-audit-engine.md.
  Score each dimension. Calculate total.

Step 3: Check auto-reject triggers.
  Any dimension scoring in its auto-reject band triggers immediate
  rejection regardless of total score.

Step 4: Apply certification or rejection.
  Total 90 or above AND no auto-reject triggers: CERTIFIED PASS.
  Total below 90 OR any auto-reject trigger: REJECTED.

OUTPUTS PRODUCED
  audits/audit-report-ch[NN].md
  (Contains: dimension scores, total, certification status,
  and if rejected: specific line-level remediation instructions
  for every deduction.)

GUARDRAIL 5
If REJECTED: MANDATORY PAUSE. The agent presents the audit report
to the human user in Option C style: 2 to 3 remediation paths
with trade-offs and a recommendation. User approves a remediation
path. The chapter loops back to Stage 6 for revision. The agent
MUST NOT revise content without an approved remediation path.
Confirmation stored in
books/[book-id]/handoff-memos/guardrail-05-ch[NN]-remediation.md.

If CERTIFIED PASS: No guardrail. Proceed to Stage 4 of next chapter
or to Stage 8 if all chapters are certified.

HANDOFF MEMO
books/[book-id]/handoff-memos/handoff-stage07-complete-ch[NN].md

---

## Stage 8: Brand Wrapping and Multi-Format Build

PURPOSE
Apply the brand layer to all certified chapter content. Compile
the complete book. Generate all output formats.

AGENT RESPONSIBLE
Assembly and Build Agent

RUNS: Once per book, after all chapters are certified.

INPUTS REQUIRED
All certified chapter files from chapters/
Current final WORLD_BIBLE.md
Confirmed BOOK_PROMISE.md
Confirmed PERSONA_PROFILE.md (for Preface buyer language)
Confirmed RESEARCH_BRIEF.md (for Bibliography)
Confirmed MISSION_MAP.md (for Reader's Roadmap)
All approved illustrations from assets/illustrations/
All SVG workbench files from assets/svgs/
framework/unified/01-brand-identity-system.md (full spec)
framework/unified/11-multi-format-build-pipeline.md

PROCESS

Step 1: Generate all frontmatter pages.
  Apply brand identity system Section 3 templates.
  Populate book-specific fields from artifacts.
  Write Preface using buyer language from RESEARCH_BRIEF.md Pillar 5.
  Generate Reader's Roadmap from MISSION_MAP.md transformation data.

Step 2: Generate all backmatter pages.
  Compile Glossary from all key terms in all chapters.
  Compile Bibliography from all citations in RESEARCH_BRIEF.md
    and all inline source stamps in chapters.
  Generate Index from chapter content.
  Apply About the Author template with book-specific content.
  Apply About SGK template.
  Apply Cross-Sell page with currently published SGK books.
  Apply Colophon template.

Step 3: Build all output formats.
  HTML: Vite plus React plus vite-plugin-singlefile build
  DOCX: Node.js docx library build via generate-docx.mjs
  PDF: Puppeteer headless render of HTML with print CSS
  EPUB: EPUB3 builder from AST or Pandoc from Markdown export

Step 4: Sync to docs/ for GitHub Pages.
Step 5: Update registry.json.

OUTPUTS PRODUCED
  exports/[title]-Interactive.html
  exports/[title]-Manuscript.docx
  exports/[title]-Print.pdf
  exports/[title]-Digital.epub
  Updated registry.json

NO GUARDRAIL AT THIS STAGE
Build is automated. Human review happens at Stage 9.

---

## Stage 9: Human Final Review and Publication Approval

PURPOSE
The human user reviews the complete rendered book across all formats
and provides final approval or revision instructions.

AGENT RESPONSIBLE
None. This is a pure human stage. The agent provides a structured
review checklist and waits.

PROCESS

The agent presents:
  A chapter-by-chapter audit score summary
  The HTML output URL or file path for visual review
  A structured review checklist covering:
    Does the book visually feel like a comic storybook or a textbook?
    Does the character voice feel consistent across all chapters?
    Does the World Bible feel internally consistent?
    Are all brand elements present and correctly applied?
    Did all format builds complete without errors?
    Are cross-book universe links pointing to real published books?

The human user makes one of 3 decisions:

FULL APPROVAL
Book is published. Registry status updated to: published.
Derivative generation (revision booklet, question bank etc.)
can now be initiated.

TARGETED REVISION
Specific chapters or scenes flagged. Those chapters loop back
to Stage 6 with specific instructions. Other chapters unchanged.

FULL RE-STORYBOARD
If the visual experience is fundamentally wrong (the book still
feels like a textbook), loop back to Stage 4 for the affected
chapters with new storyboard instructions. Stage 5 through 7
must all re-run for those chapters.

OUTPUTS PRODUCED
  Updated registry.json (status: published or status: revision-required)
  Guardrail confirmation stored in
  books/[book-id]/handoff-memos/guardrail-09-final-approval.md
