# SGK World Bible Protocol

System ID: H04
Layer: Unified
Version: 2.0.0

---

## Purpose

The World Bible is the single most important consistency document
in any SGK book. It solves three critical problems that occur
without it:

PROBLEM 1: Chapter 7 feels like a different book from Chapter 1.
Without a World Bible, agents generate each chapter fresh. Settings
shift subtly. Character voices drift. Story facts contradict each
other. The reader notices and loses trust.

PROBLEM 2: Mission 3 chapters feel as tentative as Mission 1.
Without locked tone envelopes, every chapter gets the same energy
regardless of where it falls in the story arc. The reader loses
the sense of escalating competence.

PROBLEM 3: Story seeds planted in Chapter 2 are forgotten by Chapter 8.
Without an Open Story Threads log, planted details that were meant
to pay off later simply disappear. The reader who noticed them
feels cheated.

The World Bible is created at Stage 3 and updated after every
certified chapter. It is a mandatory input to Stage 4, Stage 5,
Stage 6, Stage 7, and the Context Packet.

---

## World Bible Lifecycle

CREATED: Stage 3 (initial version with Stage 3 data only)
UPDATED: After every certified chapter (Stage 7 certification
  triggers a mandatory World Bible update before Stage 4 begins
  for the next chapter)
READ: Stage 4 (storyboard design), Stage 5 (image prompts),
  Stage 6 (content generation), Stage 7 (audit compliance check),
  Context Packet assembly

---

## The 7 Sections of Every World Bible

### SECTION 1: THE WORLD PREMISE

Definition: One paragraph. The definitive description of the world
this book takes place in. Every chapter must be consistent with
this paragraph.

What it must contain:
  The physical setting and its character (not just a location,
  but what it FEELS like to be there)
  The time period or timeframe of the story
  The emotional tone of this world (warm, urgent, mysterious,
  playful, formal)
  The central ongoing tension in this world (not the plot,
  but the permanent condition that makes conflict possible)
  The coexistence of the heritage setting with the subject domain
  (how ancient architecture and modern subject matter share space)

What it must NOT contain:
  Chapter-specific plot details
  Character backstory (that goes in CHARACTER_CAST.md)
  Technical content (that goes in chapters)
  Anything that will change across chapters

Update frequency: NEVER after Stage 3. The World Premise is
locked when approved in Guardrail 3. It does not change.

---

### SECTION 2: ESTABLISHED FACTS LOG

Definition: A chronological running list of facts established
in certified chapters. Every new storyboard checks this log
for contradictions before designing scenes.

Format for each entry:
```
Chapter [N] - Certified [DATE]:
  [Category]: [Fact established]
  [Category]: [Fact established]
  ...
```

Categories to use:
  LOCATION: A physical place introduced or described
  PROP: An object described with specific details
  RELATIONSHIP: How two characters relate to each other
  EVENT: Something that happened in the story
  SKILL: A capability the hero has demonstrated
  KNOWLEDGE: Something the hero now knows (cannot be unlearned)
  ANALOGY: A metaphor or analogy the mentor has used
    (mark as USED. Cannot be reintroduced as new in later chapters)
  DECISION: A choice a character made with story consequences
  RULE: A technical, legal, or conceptual rule established

Contradiction check rule: Before any storyboard is approved,
the agent runs a check: does any proposed scene beat contradict
any entry in the Established Facts Log? If yes, the scene beat
must be revised. The log is always correct. The new scene
adapts to the log.

Update frequency: After every certified chapter. The Auditor
Agent flags any chapter content that contradicts the log.
New facts from the certified chapter are added by the Author
Agent after Stage 6.

---

### SECTION 3: EMOTIONAL ARC TRACKER

Definition: A record of the hero character's emotional state
at the end of every certified chapter. Every new chapter's
storyboard inherits the emotional state from this tracker
as the hero's starting condition.

Format for each entry:
```
After Chapter [N]:
  Emotional State: [specific description, not just a label]
  Confidence Level: [1 to 10, where 1 is completely lost and
    10 is mastery]
  Current Belief: [what the hero currently believes about the
    subject, including any misconceptions still present]
  Relationship with Mentor: [how the dynamic currently stands]
  Open Fear: [the specific thing the hero is still afraid of]
```

Arc position labels (use as shorthand in the Context Packet):
  BROKEN WORLD (Chapter 1): Hero is tolerating a problem
  CATALYST (Chapters 2 to 3): The problem becomes undeniable
  FIRST VICTORY (End of Mission 1): Small triumph, early confidence
  OVERCONFIDENCE (Start of Mission 2): Shortcuts and assumptions
  HUMBLING (Mid Mission 2): A real failure with consequences
  REBUILDING (Late Mission 2): Methodical growth with setbacks
  EARNED MASTERY (Mission 3): Competence under real pressure
  TRIUMPH (Final chapter): The promise fulfilled

Update frequency: After every certified chapter.

---

### SECTION 4: LOCKED VOCABULARY

Definition: Words, phrases, and naming conventions established
in this book's world. All future chapters use these consistently.

Sub-sections:

WORLD TERMS: Names and references specific to this book's world.
Format: [Term]: [Meaning and first use chapter]

MENTOR PHRASES: The mentor's established expressions.
Format: [Phrase]: [First use chapter]. [Usage rule: e.g., max once per chapter]

ANALOGY REGISTRY: All analogies the mentor has used.
Format: [Analogy]: [Chapter used]. [Topic it explained]. [Status: USED, do not reintroduce as new]

PLANNED ANALOGIES: Analogies reserved for specific future chapters.
Format: [Analogy]: [Planned chapter]. [Topic it will explain]. [Status: RESERVED]
Rule: Do not use a RESERVED analogy in any chapter before its planned chapter.

TECHNICAL NAMING CONVENTIONS: How to refer to tools, systems,
and concepts consistently throughout this book.
Example: Always refer to the testing tool as API Testing Workbench.
Never as the application, the tool, or the software.

Update frequency: After every certified chapter.
The Author Agent adds new entries after Stage 6.
The Auditor Agent flags inconsistencies during Stage 7.

---

### SECTION 5: VISUAL CONTINUITY SPECIFICATION

Definition: Exact visual descriptions of recurring elements
that must appear consistently in every image prompt and every
workbench screen that features them.

Sub-sections:

RECURRING LOCATIONS:
For each primary location used in multiple chapters:
```
[Location Name]:
  Room size and feel: [description]
  Left wall: [what is there]
  Centre: [what is there]
  Right wall: [what is there]
  Ceiling: [lighting source and quality]
  Floor: [material and pattern]
  Ambient props: [items always present]
  Variable props: [items that change per scene]
```

RECURRING PROPS:
For each prop that appears in multiple chapters:
```
[Prop Name]:
  Appearance: [specific description]
  Who uses it: [character name]
  When it appears: [rule for when this prop is in scenes]
  Symbolic meaning: [what it represents in the story, if any]
```

CHARACTER VISUAL SPECS:
For each named recurring character:
```
[Character Name]:
  Reference sheet: [path to canonical reference image]
  Clothing: [specific garments, colours, patterns]
  Distinguishing feature: [the one thing that makes them
    instantly recognizable]
  Expression range: [list of emotional states and what they
    look like for this character specifically]
  Props always carried or nearby: [list]
  Props never present: [things that would contradict their
    character, e.g., the calm mentor never looks panicked]
```

Update frequency: After every certified chapter that introduces
a new recurring visual element. Reference sheet paths updated
when new character reference images are generated.

---

### SECTION 6: MISSION TONE ENVELOPES

Definition: The emotional and tonal specifications for each
of the 3 missions. Every storyboard must comply with its
mission's envelope.

Format for each mission:
```
MISSION [N]: [Mission Name]
Chapters: [range]

Pacing: [description of scene tempo and information density]
  Scenes average [N to N] beats. [Pacing instruction].

Learner Register: [emotional states the hero occupies in
  this mission. Which block types are dominant: thought-bubbles
  for confusion, action-beats for competence, etc.]

Mentor Approach: [how the mentor engages in this mission:
  leading questions, letting the hero fail, peer-level discussion]

Stakes: [the level at which failure matters in this mission:
  personal, team, organizational, systemic]

Crisis Scale: [the size of the problems the hero faces]

Dialogue Ratio: [approximate split between hero proposing/
  asking and mentor answering/validating, expressed as a ratio]

Visual Mood: [lighting, time of day, visual energy of scenes]

Tone Words: [5 to 8 adjectives that describe the feel of
  chapters in this mission]

What Must NOT Appear: [things that would break the mission's
  tone: e.g., Mission 1 must not have enterprise-scale crises,
  Mission 3 must not have the hero making beginner mistakes]
```

Update frequency: NEVER after Stage 3. Tone Envelopes are
locked with the World Bible creation. They do not change.

---

### SECTION 7: OPEN STORY THREADS

Definition: Story seeds planted in certified chapters that
must be resolved or developed in future chapters. Prevents
the agent from accidentally forgetting planted details.

Format for each thread:
```
THREAD [N]: [Thread Name]
Status: [ACTIVE / RESOLVED / DORMANT]
Planted: Chapter [N], Scene [N]
How it was planted: [brief description of the detail]
Planned resolution: Chapter [N], Scene [N] (or UNSCHEDULED)
Current visibility: [VISIBLE TO READER / SUBTLE / BACKGROUND]
Handling rule: [specific instruction for how to treat this
  thread in chapters before its resolution]
```

Status definitions:
  ACTIVE: The thread is planted and awaiting development or resolution
  RESOLVED: The thread has been addressed in a certified chapter
  DORMANT: The thread exists but will not be developed in this book
    (may be picked up in a future book in the series)

Update frequency: After every certified chapter.
New threads added when planted. Status updated when resolved.
Dormant threads documented for the series character bible.

---

## World Bible Compliance Audit Rules

The Auditor Agent checks the following during Stage 7:

CHECK 1: Established Facts Consistency
Does any content in the chapter contradict any entry in the
Established Facts Log? If yes: flag as a consistency violation.
The chapter must be revised to match the log.

CHECK 2: Emotional Arc Accuracy
Is the hero's emotional state in this chapter consistent with
the Emotional Arc Tracker entry for this chapter's position?
If the hero is too confident for their arc position, or too
confused for a Mission 3 chapter: flag as arc violation.

CHECK 3: Locked Vocabulary Compliance
Are all world terms, location names, and tool references
consistent with the Locked Vocabulary? Any term used
differently than established: flag as vocabulary violation.

CHECK 4: Analogy Registry Compliance
Has the mentor used any analogy marked as USED (already used
in a previous chapter) as if it were new? Flag.
Has the mentor used any analogy marked as RESERVED before
its planned chapter? Flag.

CHECK 5: Mission Tone Compliance
Does the chapter's pacing, dialogue ratio, and emotional
register match its mission's Tone Envelope?
Does any forbidden element appear (per the What Must NOT
Appear field of the Tone Envelope)? Flag.

CHECK 6: Open Story Threads
Does this chapter accidentally resolve a thread before its
planned chapter? Flag.
Does this chapter plant a new story seed that is not yet
documented in Section 7? Flag (and add it).

All flags from these checks are included in the audit report
and must be resolved before certification.

---

## The World Bible Update Procedure

After every Stage 7 certification:

1. The Author Agent reads the certified chapter content.
2. For each new fact, location, prop, relationship, event,
   skill, knowledge item, analogy, decision, or rule established
   in the chapter: add it to Section 2 with the chapter number
   and certification date.
3. Update Section 3 with the hero's emotional state at the
   chapter's end.
4. Add any new vocabulary or naming conventions to Section 4.
5. Add any new recurring visual elements to Section 5.
6. Update the status of any Open Story Threads that were
   developed or resolved in this chapter.
7. Add any new story threads planted in this chapter.
8. Save the updated WORLD_BIBLE.md.
9. The next stage (Stage 4 for the next chapter) reads
   the updated World Bible before beginning.

The World Bible is the memory of the book.
Chapters certified without updating the World Bible create
a memory gap that compounds into inconsistency.
