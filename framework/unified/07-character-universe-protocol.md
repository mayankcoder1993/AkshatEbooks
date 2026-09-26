# SGK Character Universe Protocol

System ID: H07
Layer: Unified
Version: 2.0.0

---

## Purpose

The character system is the emotional engine of every SGK book.
Readers continue through difficult content not because they are
disciplined learners but because they care about the characters
and want to know what happens next.

This protocol defines a 3-tier character system that creates
genuine narrative investment across individual books, across
book series, and across the entire SGK universe.

---

## The 3-Tier Character System

TIER 1: GENRE SUPERHERO MENTORS
Permanent fixtures. Appear in every book within their series.
Fight different battles in each book but their personality,
teaching style, visual design, and signature habits never change.
They are the reader's trusted guide across an entire subject domain.

TIER 2: BOOK-SPECIFIC HERO CHARACTERS
Created fresh for each book. They represent the target reader
of that specific book. Their fears, background, and growth arc
are designed specifically for this book's audience and promise.
They do not recur in other books (unless a deliberate sequel
arc is planned and documented in the series character bible).

TIER 3: TEMPORARY CHAPTER CHARACTERS
Appear for one scene or a cluster of scenes. They create a
specific problem, play devil's advocate, represent a real-world
stakeholder, or provide perspective the mentor-hero dialogue
cannot. They exit when their narrative purpose is served.

---

## Section 1: Tier 1 Superhero Mentor Specifications

### The Character Continuity Ledger

Every Tier 1 mentor has a Character Continuity Ledger stored in
framework/characters/mentor-sgk-[series]-[name].md.

This ledger is the single source of truth for this character
across all books in their series. Every agent working on any
book in this series reads this ledger before creating any
content involving this mentor.

MANDATORY LEDGER SECTIONS:

SECTION A: CORE IDENTITY (Never Changes)
  Full name
  Age at series inception
  Professional role and background (2 to 3 sentences)
  The formative experience that made them who they are
    (a specific event that explains their teaching philosophy)
  Core belief about their subject domain
    (the one thing they know to be true that others miss)
  Teaching philosophy: How they teach and why
  What they will never do in a teaching context
    (their principled refusal that defines their character)

SECTION B: VISUAL DESIGN SPEC (Never Changes)
  Clothing description (specific garments, colours, patterns)
  Distinguishing physical feature in Madhubani art style
  Signature prop(s): what they always carry or have nearby
  Expression range: 5 to 7 named expressions with descriptions
  Reference sheet path: path to canonical character images

SECTION C: VOICE AND PERSONALITY SPEC (Never Changes)
  Vocabulary tendencies: words and phrases they favour
  Sentence patterns: how they structure explanations
  Humour style: dry, warm, self-deprecating, or none
  How they respond to the hero making a mistake
  How they respond to the hero getting something right
  5 example lines of authentic dialogue for calibration
  5 example lines that are WRONG for this character
    (to train agents on what to avoid)

SECTION D: SIGNATURE ELEMENTS (Never Changes)
  Signature phrase(s): memorable lines they say repeatedly
  Signature prop interaction: what they do with their prop
    at key teaching moments
  Signature analogy domain: the category of analogies they
    draw from (food, architecture, nature, trade, etc.)
  Analogies the character would NEVER use (out of character)

SECTION E: ONGOING STORY THREADS (Updated Per Book)
  Format per thread:
    Thread name
    Introduced in: Book [ID], Chapter [N]
    Current status: ACTIVE, RESOLVED, DORMANT
    What has been revealed so far
    What remains hidden or unresolved
    Next planned development: Book [ID] or UNSCHEDULED
  Purpose: Serialized storytelling that rewards readers
    who follow the series across multiple books.

SECTION F: BOOK APPEARANCE LOG (Updated Per Book)
  Format per book:
    Book ID and title
    Hero character for that book
    Key relationship moments with that hero
    New character facts established in that book
    Analogies used in that book (do not repeat in future books)
    Story thread status changes in that book

SECTION G: THE MENTOR'S OWN ARC
  This is the most advanced feature of the Tier 1 character.
  The mentor is not static. They have their own subtle growth
  across the series. Not dramatic. Not destabilizing. But real.
  Document:
    Where the mentor starts at Book 1 (their current belief,
      their current wound, their current professional challenge)
    Where the mentor is heading across the series arc
    Specific moments planned across future books where the mentor
      reveals more of themselves to that book's hero

---

## Section 2: The 7 Established SGK Mentors

The following mentors are established at framework launch.
Their full ledgers are in framework/characters/.
Summaries here for quick agent reference.

SAMEER KRISHNAMURTHY (SGK Tech Series)
  Series: SGK-TECH
  Domain: Software engineering, testing, API systems, DevOps
  Core belief: The wire does not lie. All software failures
    are knowable if you know where to look.
  Formative experience: [Documented in ledger. Revealed to
    readers across the series. Not summarized here to preserve
    the serialized reveal experience.]
  Teaching style: Shows the failure first. Lets the hero
    diagnose. Asks Socratic questions. Reveals the principle
    only after the hero has genuinely struggled.
  Signature prop: Small brass glass of masala chai.
  Analogy domain: Food, hospitality, physical infrastructure.
  Personality: Patient, precise, unhurried. A slight knowing
    smile when the hero is about to discover something.
  Ledger: framework/characters/mentor-sgk-tech-sameer.md

JUSTICE BALAKRISHNAN IYER (SGK Law Series)
  Series: SGK-LAW
  Domain: Constitutional law, governance, rights, precedent
  Core belief: Law is not what the text says. Law is what
    the court decides the text means, in context, for people.
  Teaching style: Presents both sides with equal conviction
    before revealing the court's reasoning and its real
    consequence for real people.
  Signature prop: A thick leather-bound law book. A wooden
    gavel used to tap the desk when making a key point.
  Personality: Formally warm. Authority without arrogance.
    Deeply humanistic beneath the legal formality.
  Ledger: framework/characters/mentor-sgk-law-balakrishnan.md

VASANTHI SUBRAMANIAM (SGK Commerce Series)
  Series: SGK-COMM
  Domain: Economics, monetary policy, tax mechanics, markets
  Core belief: Every economic theory must answer to a real
    market in a real place with real people. Theory that
    cannot survive contact with a village mandi is no theory.
  Teaching style: Always begins with a real Indian economic
    event and works backwards to the principle.
  Signature prop: A brass abacus and a thick ledger book.
  Personality: Grounded, analytical, warmly impatient with
    abstraction that lacks numerical grounding.
  Ledger: framework/characters/mentor-sgk-comm-vasanthi.md

COLLECTOR ARJUN NAIR (SGK Exam Series)
  Series: SGK-EXAM
  Domain: UPSC, governance, policy, administrative decision
  Core belief: The exam tests your ability to think like an
    officer. Not your ability to memorize like a database.
  Teaching style: Presents a real district crisis and demands
    a decision. Evaluates the decision against the UPSC rubric.
  Signature prop: A state map and a stack of government files.
  Personality: Direct, results-oriented, no patience for
    rote answers that bypass understanding.
  Ledger: framework/characters/mentor-sgk-exam-arjun.md

DR. MEERA IYER (SGK Science Series)
  Series: SGK-SCI
  Domain: Physics, chemistry, biology, earth science
  Core belief: Every scientific principle is already happening
    in your home, your kitchen, your body, and your sky.
    The textbook is just a translation.
  Teaching style: Physical demonstration first. Mathematical
    model second. Exam application last.
  Signature prop: A glass beaker. Protective goggles pushed
    up on her forehead (never over her eyes in teaching scenes).
  Personality: Infectious curiosity. Delighted by physical
    phenomena. Cannot suppress excitement at a good question.
  Ledger: framework/characters/mentor-sgk-sci-meera.md

MASTERJI GOPAL (SGK School Series)
  Series: SGK-SCHL
  Domain: All school subjects for children and teenagers
  Core belief: There is no student who cannot learn. There is
    only teaching that has not yet found the right door.
  Teaching style: Story first. Concept in the story. Game
    or activity to practice. Simple summary.
  Signature prop: A weathered notebook and a piece of chalk.
    (A chalk mark always visible on one sleeve. Endearing.)
  Personality: Infinitely patient. Celebrates small wins.
    Never makes a mistake feel shameful.
  Ledger: framework/characters/mentor-sgk-schl-masterji.md

DADI MA KAMALA (SGK Saral Series)
  Series: SGK-SARL
  Domain: Digital literacy, health, legal rights, home science,
    personal finance for general adult audiences
  Core belief: Common sense is the most advanced intelligence
    there is. If something cannot be explained to a person
    with common sense, the explanation is wrong.
  Teaching style: Translates every concept into immediate
    practical consequence for the reader's family or household.
  Signature prop: A clay pot of water nearby in every scene.
    A pair of reading glasses she removes and replaces for
    emphasis.
  Personality: Grandmotherly authority. Cuts through
    complexity with warmth and zero tolerance for jargon.
  Ledger: framework/characters/mentor-sgk-sarl-dadima.md

---

## Section 3: Creating a New Tier 1 Mentor

When a new series requires a mentor not yet defined, create one
using this protocol before any book in that series is written.

STEP 1: Domain Interview
Answer these questions before designing anything:
  What is the central tension in this subject domain?
    (The thing that makes learners fail if they misunderstand.)
  What is the opposite of the typical textbook approach
    to this subject?
  What kind of person, with what life experience, would teach
    this subject in the most effective non-textbook way?
  What Indian professional context makes this character
    authentic, not generic?

STEP 2: Formative Experience Design
Every mentor's teaching philosophy must emerge from a specific
formative experience. Not a generic backstory. A specific event
that happened to them that made them who they are as a teacher.
This event is revealed to readers across the series, not in
the first book. It is planted as a hint in Book 1 and revealed
across subsequent books.

Design the event first. Then design the character around it.
The character's teaching philosophy must be a direct consequence
of this event.

STEP 3: Visual Design Brief
Create the Madhubani art design brief covering all fields
in Ledger Section B. Especially:
  What do they wear? (Must be traditional Indian attire.
    Must be distinctive enough to be recognizable in a
    thumbnail-sized illustration.)
  What do they always carry? (The signature prop must be
    culturally authentic and symbolically appropriate to
    the subject domain.)
  What does their face do when they are about to deliver
    a key insight? (This recurring micro-expression becomes
    the reader's signal that something important is coming.)

STEP 4: Voice Calibration
Write 10 lines of authentic dialogue for this mentor.
Write 5 lines they would NEVER say.
The test: could someone mistake these lines for any other
SGK mentor? If yes, make the voice more specific.

STEP 5: Series Arc Planning
Plan 3 to 5 ongoing story threads for this mentor that will
develop across the series. These threads must be:
  Subtle enough not to distract from the learning content
  Specific enough to create genuine reader investment
  Resolvable within a planned number of books

STEP 6: Create the Ledger File
Create framework/characters/mentor-sgk-[series]-[name].md
using the CHARACTER-LEDGER-SCHEMA.md template.
Populate all sections completely.
Register the new mentor in registry/series-catalog.json.

---

## Section 4: Tier 2 Hero Character Creation Protocol

Every new book requires a new hero character. The hero is
created at Stage 1 using this 6-step protocol.

STEP 1: Name Selection
Choose a real, common Indian name appropriate for the
audience segment and the book's geographic or cultural context.
The name must feel immediately familiar to the target reader.
The name must not have been used for a hero in any previous
book in this series. Check the series character bible.

STEP 2: Background Specification
Write 4 to 6 sentences covering:
  Where they are from (specific, not generic)
  What they do currently (their job, study, or life situation)
  Why they are in this situation (what led to this moment)
  What they tried before that did not work
  What is at stake for them if this book does not help

STEP 3: Entry Emotional State (The Broken World)
The exact feeling the hero has at the start of Chapter 1.
Specific, not a label. Not afraid of technology.
Instead: Feels quietly embarrassed when colleagues ask him to
automate tests because he has been manually clicking through
the same 40-step checklist for 8 months and has never admitted
he does not know where to start with automation.

STEP 4: Personality Traits
3 to 5 specific traits that create narrative tension and
allow for genuine story moments.
Each trait must:
  Be a real cognitive or behavioral pattern, not a generic label
  Create at least one specific kind of mistake the hero makes
  Change meaningfully across the 5-beat hero arc
Example traits: Googles before thinking, Over-confident in
  familiar territory under-confident in new territory,
  Tries the shortest path before understanding why it fails,
  Interprets mentor silence as disapproval.

STEP 5: The 5-Beat Arc
Map every major emotional shift the hero goes through:
  BEAT 1: BROKEN WORLD (Chapter 1 opening)
    The hero's current situation. The quiet problem they tolerate.
  BEAT 2: CATALYST (Chapters 2 to 3)
    The event that makes the problem undeniable.
  BEAT 3: FIRST VICTORY AND OVERCONFIDENCE (End Mission 1)
    Small triumph. Early confidence. A dangerous assumption made.
  BEAT 4: THE HUMBLING (Mid Mission 2)
    A real failure with real consequences in the story world.
    The overconfident assumption is proven wrong.
  BEAT 5: EARNED MASTERY (Mission 3 climax)
    Success under pressure that is only possible because of
    what the hero learned from their humbling.

STEP 6: Visual Design Brief
Clothing: specific garments, colours, patterns in Madhubani style
Age appearance: how they look, not a number
Distinguishing feature: the one visual element that makes them
  instantly recognizable at thumbnail size
Expression range: at minimum 5 named expressions with descriptions:
  their confused expression, their concentrating expression,
  their trying-something-hopeful expression, their small-triumph
  expression, their oh-no expression
Props: what they always carry or have nearby

---

## Section 5: Tier 3 Temporary Character Rules

Temporary characters enter for specific scenes and exit when
their narrative purpose is served.

CREATION RULES:
Every temporary character must have a clear narrative function:
  PROBLEM CREATOR: Creates the specific problem the hero
    must solve in this scene or chapter.
  STAKEHOLDER: Represents a real-world person affected by
    whether the hero gets the concept right.
  DEVIL'S ADVOCATE: Argues the wrong approach convincingly,
    forcing the hero (and reader) to understand why it fails.
  CONTEXT PROVIDER: Carries information the mentor-hero
    dialogue cannot organically include.
  CONSEQUENCE DELIVERER: Shows the real-world result of a
    decision, making the stakes visceral.

Every temporary character must have:
  A name (not a stranger or a user)
  A 1-sentence background appropriate to their function
  A visual design brief (even brief: specific clothing,
    one distinguishing feature)
  A clear exit point: the beat at which they leave the scene
  A justification: why the story needs this character here
    and why the mentor or hero cannot serve this function

REAPPEARANCE RULES:
Temporary characters may reappear in later chapters if the
story logic requires it (the library administrator from
Chapter 4 appears again in Chapter 8 when automation
resolves the problem they introduced).
Reappearing temporary characters must be consistent with
their initial visual design and personality.
They never become permanent cast members unless a deliberate
decision is made and documented in the World Bible.

---

## Section 6: The Series Character Bible

For every SGK series with more than one book, maintain a
Series Character Bible at:
registry/series-[series-id]-character-bible.md

This document tracks:
  All heroes who have appeared across books in this series
    (so no two books have a hero with the same name or
    the same 5-beat arc)
  All temporary characters who appeared in multiple books
    (so their details remain consistent)
  All mentor story thread statuses across books
  The ongoing mentor arc: where the mentor is in their
    own long-form story across the series
  Cross-book references: which universe-link blocks exist
    between books in this series

The Series Character Bible is loaded by Stage 1 agents when
creating a new book in an existing series.
