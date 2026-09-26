# SGK Story Mining Protocol

System ID: H14
Layer: Unified
Version: 2.0.0

---

## Purpose

Story Mining is the mandatory process that transforms research
findings into a story architecture. It runs at Stage 3 after
research is confirmed. Without Story Mining, mission architecture
produces topic labels wearing mission costumes:
  "Mission 1: Introduction and Foundations"
  "Mission 2: Intermediate Concepts"
  "Mission 3: Advanced Applications"

These are not missions. These are chapter groupings with dramatic
names. They create no narrative investment.

With Story Mining, missions become genuine story arcs:
  "Mission 1: Reading the Wire (Seeing What the Machine Actually Does)"
  "Mission 2: Building the Watchdog (Automating What Used to Break Silently)"
  "Mission 3: Guarding the Gate (Making Machines Responsible for Quality)"

These create investment because they describe a journey with
stakes, a protagonist with a problem, and a world where the
problem matters.

---

## The 4-Step Story Mining Process

### STEP 1: EXTRACT THE CORE CONFLICT

Every subject has a central tension. This is the gap between
what learners commonly believe about the subject and what is
actually true. It is the reason people fail at this subject
despite studying it. It is the specific misunderstanding that
causes the most common real-world failures.

How to find it:
  Look at Pillar 2 of the Research Brief: what is the most
    common confusion point found in course comments and Q&A?
  Look at Pillar 4: what misunderstanding caused the real-world
    failures documented in the case study library?
  Look at Pillar 5: what frustration phrases appear most
    frequently in buyer language mining?

The Core Conflict is a single sentence in this format:
"Learners think [COMMON BELIEF]. The reality is [ACTUAL TRUTH].
The gap between these causes [SPECIFIC REAL-WORLD FAILURE]."

EXAMPLES:
Tech: "Learners think clicking Send and getting a 200 response
  means the API works. The reality is that a 200 response only
  means the server processed the request, not that the data
  is correct. The gap causes silent data corruption that passes
  manual testing and fails only in production."

Law: "Learners think memorizing Article numbers and their text
  is constitutional law mastery. The reality is that the Supreme
  Court's interpretation of those Articles, which changes with
  every landmark judgment, is what the law actually is.
  The gap causes exam answers that are textually accurate but
  constitutionally wrong."

Economics: "Learners think monetary policy directly controls
  inflation. The reality is that monetary policy influences
  aggregate demand, which influences inflation through a 6 to
  18 month lag. The gap causes policy recommendations that
  mistake correlation for causation and timing for mechanism."

---

### STEP 2: IDENTIFY THE 3 NATURAL ACTS

Every learning journey from beginner to competent has 3 natural
phases. These phases emerge from the Core Conflict.

ACT 1: DISCOVERING THE GAP
The learner confronts the Core Conflict directly. They realize
that their existing mental model is inadequate. The world looks
different from what they thought. This is disorienting and
energizing simultaneously.
Chapter topics that belong in Act 1:
  The topics that expose the gap between common belief and reality.
  The foundations that show HOW the system actually works.
  The first tools and methods that reveal the truth.

ACT 2: LEARNING TO NAVIGATE THE REAL WORLD
The learner builds real capability to work within the actual
system, not the imagined one. They face escalating challenges
that require genuine understanding, not just surface knowledge.
Chapter topics that belong in Act 2:
  The practical skills that require the Act 1 foundation.
  The common applications of the subject in real contexts.
  The nuances that separate adequate from competent.

ACT 3: OPERATING INDEPENDENTLY UNDER PRESSURE
The learner applies everything under conditions that resemble
real stakes: an exam, a client, a production system, a deadline.
They discover that competence under pressure requires genuine
internalization, not just knowledge.
Chapter topics that belong in Act 3:
  The complex, multi-concept scenarios.
  The edge cases and failure modes.
  The expert-level practices that separate competent from excellent.

---

### STEP 3: DEFINE THE ENEMY

Every great story has an enemy. In SGK books the enemy is not
a person. The enemy is the specific failure mode that causes
real damage when someone does not understand this subject.

The enemy must be:
  Specific (not vague)
  Real (documented in the case study library from Pillar 4)
  Relatable to the target buyer (it is the thing they fear
    will happen to them)
  Defeatable by the end of the book (the hero defeats the enemy)

How to name the enemy:
  Give the enemy a dramatic name that captures its nature.
  The enemy appears in the Book Promise, the Mission names,
    and the final chapter's triumph moment.

EXAMPLES:
Tech (API Testing): The enemy is "The Silent Failure":
  code that passes manual review, appears to work, and fails
  silently in production because no one automated the contract.

Law (Constitutional): The enemy is "The Textual Trap":
  the mistake of treating the Constitution as a fixed document
  rather than a living interpretation, leading to arguments
  that are literally correct but legally wrong.

Economics: The enemy is "The Lag Illusion":
  the mistake of expecting immediate policy results, leading
  to over-correction, under-correction, and policy paralysis.

---

### STEP 4: NAME MISSIONS AS VICTORIES OVER THE ENEMY

Mission names must describe what the learner achieves in
that mission, framed as progress in the battle against the enemy.

NAMING FORMULA:
"Mission [N]: [Action Phrase] ([Subtitle explaining the victory])"

The action phrase is a present continuous verb phrase that
describes what the hero is doing in that mission.
The subtitle is a parenthetical that tells the reader what
capability they will gain.

VALIDATION RULES FOR MISSION NAMES:
  REJECTED: Any mission name that is a topic label.
    (Mission 1: API Fundamentals)
  REJECTED: Any mission name that uses the word Introduction,
    Basics, Advanced, or Foundations.
  REJECTED: Any mission name that does not describe an action.
  APPROVED: Mission names that describe what the hero is DOING.
  APPROVED: Mission names that hint at the story conflict.
  APPROVED: Mission names that would make a reader curious
    about what happens in that mission.

---

## CREATIVE_VEHICLE.md Schema

The Creative Vehicle document captures the output of Story Mining
plus the chosen story world for this specific book.

```markdown
# CREATIVE VEHICLE: [Book Title]

## Story Mining Output

Core Conflict:
"Learners think [COMMON BELIEF]. The reality is [ACTUAL TRUTH].
The gap causes [SPECIFIC REAL-WORLD FAILURE]."

The 3 Natural Acts:
  Act 1: [What the learner discovers in this act]
  Act 2: [What the learner builds in this act]
  Act 3: [What the learner demonstrates in this act]

The Enemy:
  Name: [Dramatic name for the failure mode]
  What it is: [Specific description]
  Real-world example: [From case study library, Pillar 4]
  How it appears in this book's world: [Story framing]

## The Story World

World concept: [The specific creative frame for this book.
  Not a genre label but a world description. The campus server
  room during orientation week. The Supreme Court on the day
  of a landmark hearing. A mandi during harvest price collapse.]

Why this world works for this subject: [Specific reasons
  this world naturally generates story tension around the
  subject's Core Conflict]

Why this world is different from other books in this series:
  [How it distinguishes this book from previously published
  books using the same mentor character]

## The Mission Architecture

MISSION 1: [Full name with subtitle]
  Chapters: [Range]
  Act: Act 1
  Enemy encounter: [How the hero first meets the Enemy]
  Victory condition: [What the hero achieves by end of Mission 1]
  Story consequence: [What changes in the world because of this]

MISSION 2: [Full name with subtitle]
  Chapters: [Range]
  Act: Act 2
  Enemy escalation: [How the Enemy gets more dangerous]
  Victory condition: [What the hero achieves by end of Mission 2]
  Story consequence: [What changes]

MISSION 3: [Full name with subtitle]
  Chapters: [Range]
  Act: Act 3
  Final confrontation: [The climactic battle with the Enemy]
  Victory condition: [The final proof of earned mastery]
  Story consequence: [The transformation complete, the world better]

## Differentiation from Other Books in This Series

Previously used story worlds: [List from series character bible]
Previously used opening scenarios: [List]
Hero arc patterns used before: [List]
How this book avoids repetition: [Specific differences]
```
