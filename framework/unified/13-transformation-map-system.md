# SGK Transformation Map System

System ID: H13
Layer: Unified
Version: 2.0.0

---

## Purpose

Every SGK book must define the reader's transformation
explicitly, concretely, and measurably before any content
is written. The transformation map is the bridge between
the market brief (who is buying and why) and the mission
architecture (how the book is structured).

The transformation map answers three questions:
  BEFORE: What is the reader's exact situation when they
    buy this book?
  AFTER: What specific capability do they have when they
    finish?
  PROOF: What tangible thing can they do that proves the
    transformation happened?

---

## BEFORE State Specification

The BEFORE state is not a knowledge level. It is a life
situation with an emotional component.

WRONG: "The reader is a beginner with no programming knowledge."
RIGHT: "The reader has been manually clicking through the same
  40-step API test checklist for 8 months. They can find bugs
  by clicking but they cannot automate anything. When their
  team started discussing CI/CD pipelines, they smiled and
  nodded. They have been Googling every term mentioned in
  those meetings privately ever since."

The BEFORE state must:
  Describe a specific professional or academic situation
  Include the emotional reality (the quiet embarrassment,
    the mounting anxiety, the specific fear)
  Name the specific workaround the reader currently uses
    that is failing them
  Be written in language the reader would use to describe
    themselves (use buyer language phrases from MARKET_BRIEF.md)

---

## AFTER State Specification

The AFTER state is not a knowledge attainment. It is a
capability demonstrated in a real context.

WRONG: "The reader understands API testing concepts."
RIGHT: "The reader can set up an automated Postman collection
  with dynamic variable chaining, run it headlessly through
  Newman in a CI/CD pipeline, interpret the exit code, and
  explain why any failing assertion failed. They can do this
  for a codebase they have never seen before."

The AFTER state must:
  Describe a specific action the reader can now take
  Specify the context in which they take it
    (exam hall, workplace, client meeting, interview)
  Be measurable: could an observer verify this state?
  Connect directly to the buyer's purchase trigger
    (if they bought because of a job interview, the AFTER
    state involves interview-relevant capability)

---

## PROOF Specification

The PROOF is the tangible evidence of transformation that
the reader can see for themselves without external validation.

WRONG: "The reader will feel more confident."
RIGHT: "The reader will run the book's final Newman CLI suite
  and see 0 failures. They will submit a sample PR to their
  team that includes a passing CI/CD quality gate. Both of
  these are visible, objective proof."

PROOF types by vertical module:
  Tech books: Working code that passes tests. A CI/CD green build.
  Law books: A correctly constructed exam answer that hits all
    marking rubric points. Accurate citation of Articles.
  Economics books: A correctly calculated numerical example
    that recalculates from scratch independently.
  Exam books: Solving a selection of official PYQs from the
    last 5 years with consistent accuracy.
  Science books: Correctly predicting an experiment outcome
    before seeing the result.
  Life skills books: Completing a real task (filing a tax form,
    drafting an RTI application, calculating a monthly budget).

---

## The Transformation Map Document

Created at Stage 1. Referenced at Stage 3 for mission naming.
Embedded in the Reader's Roadmap visual in frontmatter.

```markdown
# TRANSFORMATION MAP: [Book Title]

## BEFORE State

Situation: [2 to 3 sentences. Specific professional or
  academic situation in buyer's own language.]
Emotional reality: [The quiet fear, embarrassment,
  or anxiety. Specific, not generic.]
Current workaround: [What they do instead of the
  correct approach. What is failing about it.]
Exact buyer phrase that captures this:
  "[Direct quote from buyer language lexicon]"

## AFTER State

Capability gained: [Specific action the reader can
  now take, in specific context.]
Who can verify it: [Self / employer / examiner / client]
How long after finishing the book: [Immediately / within
  one week of practice / before the next exam cycle]

## PROOF

Tangible evidence: [The specific verifiable thing
  the reader produces or completes.]
What success looks like: [Observable description]
What the reader says after: "Now I can finally [BLANK]."
  [This must match the completion sentence from MARKET_BRIEF.md]

## Chapter-Level Transformation Steps

[For each chapter in MISSION_MAP.md:]
Chapter [N]: [Title]
  Mini-BEFORE: [What the reader cannot do at chapter start]
  Mini-AFTER: [What they can do at chapter end]
  Mini-PROOF: [The chapter's challenge-reveal or workbench
    result that shows the mini-transformation happened]
```
