# SGK Context Injection Protocol

System ID: H03
Layer: Unified
Version: 2.0.0

---

## Purpose

This protocol exists to solve one specific problem: AI agents drift
into textbook prose mode because their training bias overwhelms
format instructions from earlier in the conversation.

The Context Packet defined in this protocol is injected at the
beginning of every generation call, every planning call, every
storyboard review call, and every audit call. No exceptions.
Not for short tasks. Not when context seems obvious. Every single
time, without exception.

The packet is assembled from the book's locked artifact files.
It is never written from memory. It is never abbreviated.
It is never considered optional.

---

## The Context Packet: Full Specification

The packet uses this exact structure. Every field is mandatory.
Fields marked [LOAD FROM: filename.md] are populated by reading
the specified artifact file at packet assembly time.

---
SGK CONTEXT PACKET
Mandatory. Assembled fresh from artifact files. Never from memory.
Inject at the start of every prompt before any task description.

IDENTITY
Book ID: [LOAD FROM: book-manifest.json > id]
Title: [LOAD FROM: book-manifest.json > title]
Series: [LOAD FROM: book-manifest.json > series]
Series Accent Colour: [LOAD FROM: book-manifest.json > accentColour]
Vertical Module: [LOAD FROM: book-manifest.json > verticalModule]
Audience Profile: [LOAD FROM: book-manifest.json > audienceProfile]

BOOK PROMISE
[LOAD FROM: BOOK_PROMISE.md > canonicalPromise]
This is the single sentence the entire book must deliver.
Every scene, every dialogue, every workbench must serve this promise.
If it does not serve this promise, it does not belong in this book.

AUDIENCE
Segment: [LOAD FROM: PERSONA_PROFILE.md > segment]
Reader Profile: [LOAD FROM: PERSONA_PROFILE.md > buyerDescription]
Success Definition: [LOAD FROM: PERSONA_PROFILE.md > successDefinition]
Urgency: [LOAD FROM: PERSONA_PROFILE.md > urgencyLevel]
Reading Context: [LOAD FROM: FORMAT_DECISION.md > readingContext]

FORMAT LAW
THIS IS A COMIC STORYBOOK. NOT A TEXTBOOK.
Teaching happens through: dialogue, scenes, workbenches, visuals.
Prose is restricted by hard limits. Violation fails the audit.

Block limits this chapter:
  prose-paragraph: MAXIMUM 3 total, MAXIMUM 50 words each
  narration-box: MAXIMUM 4 total, MAXIMUM 40 words each
  Visual plus dialogue plus interactive blocks: MINIMUM 60 percent

Every scene opens with a scene-panel block.
Teaching content goes in dialogue-exchange blocks, NOT narration.
Every chapter ends with exactly one cliffhanger-panel block.

MENTOR CHARACTER
Name: [LOAD FROM: CHARACTER_CAST.md > mentor > name]
Series Role: [LOAD FROM: CHARACTER_CAST.md > mentor > seriesRole]
Personality: [LOAD FROM: CHARACTER_CAST.md > mentor > personality]
Teaching Style: [LOAD FROM: CHARACTER_CAST.md > mentor > teachingStyle]
Signature Prop: [LOAD FROM: CHARACTER_CAST.md > mentor > signatureProp]
Signature Phrase: [LOAD FROM: CHARACTER_CAST.md > mentor > signaturePhrase]
Voice Sample: [LOAD FROM: CHARACTER_CAST.md > mentor > voiceSample]
Analogies Used So Far: [LOAD FROM: WORLD_BIBLE.md > lockedVocabulary >
  usedAnalogies]
Story Thread Status: [LOAD FROM: WORLD_BIBLE.md > openStoryThreads >
  mentorThread > currentStatus]

HERO CHARACTER
Name: [LOAD FROM: CHARACTER_CAST.md > hero > name]
Background: [LOAD FROM: CHARACTER_CAST.md > hero > background]
Current Arc Position: [LOAD FROM: CHARACTER_CAST.md > hero > arcPosition]
Current Emotional State: [LOAD FROM: WORLD_BIBLE.md > emotionalArcTracker >
  currentState]
Personality Traits: [LOAD FROM: CHARACTER_CAST.md > hero > traits]
Common Mistakes Pattern: [LOAD FROM: CHARACTER_CAST.md > hero > mistakePattern]
Voice Sample: [LOAD FROM: CHARACTER_CAST.md > hero > voiceSample]

WORLD BIBLE SNAPSHOT
World Premise: [LOAD FROM: WORLD_BIBLE.md > worldPremise]
Current Established Facts: [LOAD FROM: WORLD_BIBLE.md > establishedFacts >
  last3ChaptersEntries]
Locked Vocabulary: [LOAD FROM: WORLD_BIBLE.md > lockedVocabulary > allTerms]
Primary Setting Spec: [LOAD FROM: WORLD_BIBLE.md > visualContinuity >
  primarySetting]
Open Threads to Respect: [LOAD FROM: WORLD_BIBLE.md > openStoryThreads >
  allActive]

CURRENT MISSION TONE ENVELOPE
Mission: [LOAD FROM: MISSION_MAP.md > currentMission > name]
Pacing: [LOAD FROM: WORLD_BIBLE.md > missionToneEnvelopes >
  currentMission > pacing]
Learner Register: [LOAD FROM: WORLD_BIBLE.md > missionToneEnvelopes >
  currentMission > learnerRegister]
Mentor Approach: [LOAD FROM: WORLD_BIBLE.md > missionToneEnvelopes >
  currentMission > mentorApproach]
Stakes: [LOAD FROM: WORLD_BIBLE.md > missionToneEnvelopes >
  currentMission > stakes]
Dialogue Ratio: [LOAD FROM: WORLD_BIBLE.md > missionToneEnvelopes >
  currentMission > dialogueRatio]
Visual Mood: [LOAD FROM: WORLD_BIBLE.md > missionToneEnvelopes >
  currentMission > visualMood]

CURRENT WORK
Current Chapter: [NUMBER AND TITLE]
Current Stage: [STAGE NUMBER AND NAME]
Current Scene: [N OF TOTAL]
Chapter ROI: [LOAD FROM: MISSION_MAP.md > currentChapter > roi]
Chapter Opening Condition: [LOAD FROM: storyboard-ch[NN].md >
  chapterOpeningCondition]

VISUAL RULES
Art Style: Madhubani folk art. Almond eyes. Double-line ink outlines.
  Flat colour fills. Traditional Indian attire. Zero photorealism.
Settings: Heritage Indian architecture. Dravidian pillars, jali screens,
  brass lamps, teak furniture. Zero modern glass buildings.
Backgrounds: Pure white (#FFFFFF) or light slate (#F8FAFC). Zero dark mode.
Software screens: Crisp SVG with selectable text. Zero bitmap screenshots.
Image text: English only. Zero Devanagari. Zero regional scripts.

LANGUAGE RULES
Rule 19: ACTIVE. Zero hyphens or dashes in prose.
  Use colons and commas instead.
  Compound adjectives as separate words: real time, end to end,
  in memory, step by step, high yield, sub second.
  Whitelisted exceptions: CLI flags (npm init -y), HTTP headers
  (Content-Type), URL paths, negative numbers.

PROOF REQUIREMENT
[LOAD FROM: vertical module Subject Invariants > proofSystem]
Example for tech: All code must pass snippet-validator.mjs.
Example for law: All citations must pass citation-checker.mjs.
Example for economics: All calculations must recalculate to stated answer.

END OF CONTEXT PACKET
---

---

## Packet Assembly Rules

RULE 1: Assemble from files, never from memory.
Every field marked [LOAD FROM: filename] must be populated by
reading the actual current content of that file. If the file
does not exist yet (because the book is early in the pipeline),
the packet field is marked [NOT YET ESTABLISHED] and the agent
notes this in its task output.

RULE 2: Assemble at the start of every prompt.
Not once per session. Not once per chapter. Every single prompt
that asks an agent to generate, plan, review, or audit anything
must have the packet at its beginning.

RULE 3: The packet is never abbreviated in transit.
Never shorten the packet because the task seems simple.
Never say the book context is obvious from previous messages.
The packet is the antidote to drift. Removing it allows drift.

RULE 4: When artifacts change, the packet changes.
After every chapter is certified, the WORLD_BIBLE.md is updated.
The next packet assembled after that update will contain the
new information. The packet always reflects the current state
of the book, not the state at the start of the project.

RULE 5: The assembling agent is the agent initiating the call.
If the Author Agent begins a new scene generation, the Author
Agent assembles the packet before generating. If the Auditor
Agent begins an audit, the Auditor Agent assembles the packet.
The packet is not passed between agents. Each agent assembles
it fresh from the artifact files.

---

## Packet Validation

Before any generation task begins, the agent self-validates:

PACKET VALIDATION CHECKLIST
  Book ID present and matches registry: YES / NO
  Book Promise loaded (not placeholder): YES / NO
  Mentor voice sample loaded: YES / NO
  Hero current emotional state loaded: YES / NO
  World Bible snapshot includes last 3 chapters: YES / NO
  Mission Tone Envelope loaded for current mission: YES / NO
  Rule 19 reminder present: YES / NO
  Proof requirement specified: YES / NO

If any item is NO: the agent resolves it before generating.
A partial context packet is worse than a full one because it
creates false confidence that context has been loaded.
