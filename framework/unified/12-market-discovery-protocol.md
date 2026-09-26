# SGK Market Discovery Protocol

System ID: H12
Layer: Unified
Version: 2.0.0

---

## Purpose

Stage 0 of the pipeline. This protocol ensures that every
SGK book begins with a locked buyer identity, a specific
purchase trigger, a named pain, a one-sentence Book Promise,
a format decision, and a price tier. Nothing is assumed from
the subject name alone.

A book about Indian Polity for a UPSC aspirant with 90 days
to prelims is a fundamentally different product from a book
about Indian Polity for a law student building foundational
knowledge over a semester. Same subject. Different buyer.
Different promise. Different format. Different price tier.
This protocol forces that distinction before any content is
created.

---

## Section 1: Buyer Discovery Question Sets

The Market Discovery Agent presents these question sets to
the human user using Option C format: 2 to 3 structured
options per question with trade-offs and a recommendation.
Never open-ended blanks.

QUESTION SET A: THE EXACT BUYER

A1: Who is buying this?
Present 3 specific buyer personas based on the subject and
any signals from the human user's initial request.
Each persona includes:
  Name (fictional but realistic Indian name)
  Age and current life situation (2 sentences)
  What they are doing right now that is not working
  What is at stake for them
User selects one persona or refines.

A2: What is their purchase trigger?
The specific event that makes them buy today.
Options to present:
  Exam notification just released (creates deadline urgency)
  Employer requirement or job interview scheduled
  A recent failure or mistake at work or in an exam
  Recommendation from a trusted peer or mentor
  Discovery of a knowledge gap while working on something else
User confirms or specifies.

A3: What pain is forcing this purchase?
The thing that is failing or threatening to fail.
The pain must be specific enough to appear verbatim
(or near-verbatim) in the book's Preface opening paragraph.
User confirms.

A4: What have they tried before that did not work?
This becomes the Preface's "what this book is not" section.
User confirms.

A5: Book completion sentence:
"After finishing this book I can finally ___________."
User completes this sentence. This becomes the core of
the Book Promise.

QUESTION SET B: THE FORMAT

B1: Product type:
Option 1: Full textbook (comprehensive, 300 to 600 pages)
Option 2: Sprint guide (targeted, 150 to 250 pages,
  high yield focus, time constrained buyer)
Option 3: Question bank (practice focused, mostly problems
  and solutions with concept summaries)
Option 4: Revision companion (assumes prior knowledge,
  structured for quick review before exam or use)
Option 5: Workbook (concept plus practice balanced,
  heavy on worked examples)
Option 6: Concept and practice hybrid (teaches and tests
  within each chapter, moderate length)
User selects.

B2: Reading mode:
Option 1: Cover to cover (reader follows sequentially)
Option 2: Reference dip in (reader jumps to needed topics)
Option 3: Chapter independent (each chapter complete alone)
Option 4: Daily plan (structured daily reading targets)
User selects. This affects how chapters must be written.
Chapter-independent mode means no chapter can assume
the reader has read any other chapter.

B3: Physical reading context:
Option 1: Desk with highlighters and notebook (print focus)
Option 2: Phone screen on commute (HTML focus, short scenes)
Option 3: Laptop with hands-on practice (HTML interactive)
Option 4: Tablet before bed (EPUB focus, comfortable reading)
User selects. This affects panel density and scene length.

B4: Time constraint:
How many days does the buyer realistically have?
How many hours per day can they dedicate?
This determines the page budget.

QUESTION SET C: THE MARKET

C1: Competing books:
Name the top 3 books a buyer would consider before this one.
For each: what do they do well, and what do verified reader
reviews most commonly complain about?
This feeds Pillar 3 of Stage 2 research.

C2: Why free content is not enough:
What specifically does YouTube, ChatGPT, or Google fail to
provide for this buyer in this situation?
This becomes a key differentiator in the Preface.

C3: Language configuration:
Primary: English
Secondary: None / Hindi / Regional language
Bilingual mode: None / Parallel / Selective / Translation
If secondary language: specify vocabulary conventions.

---

## Section 2: Buyer Language Mining

The Market Discovery Agent runs this research as part of Stage 0.
The goal: collect the exact phrases real buyers use when
describing their problem with this subject. These phrases are
used verbatim or near-verbatim in the Preface, chapter opening
dialogue, and challenge-prompts.

SOURCE 1: Amazon India Reviews
Search Amazon India for the top 3 competing books.
Filter to 1-star and 3-star reviews.
Extract: exact complaint phrases, unmet need descriptions,
  what the buyer expected vs what they got.
Target: 15 to 20 distinct phrases.

SOURCE 2: Google Autocomplete
Run 20 or more search queries from the buyer's perspective.
Query formats: "best book for [subject] for [buyer type]",
  "[subject] book for [exam or purpose]",
  "how to [learn or master] [subject]",
  "[subject] for beginners India",
  "[competing book title] review".
Extract: autocomplete patterns showing real search intent.

SOURCE 3: Reddit
Subreddits: r/UPSC, r/IndianAcademia, r/learnprogramming,
  r/india, r/CAIndia, r/NEET, subject-specific communities.
Search: "which book for [subject]", "best resource for [topic]",
  "[subject] I am struggling with".
Extract: honest peer recommendations and honest complaints.
Target: 10 to 15 distinct phrases showing frustration or desire.

SOURCE 4: Quora
Search for questions about this subject with 1000 or more
views and fewer than 5 good answers.
These represent content gaps: real questions that have not
been well answered.
Target: 5 to 10 specific gaps.

SOURCE 5: YouTube Comments
Find the top 3 videos titled "best book for [subject]" or
"[subject] complete guide" with 100k or more views.
Read the top 200 comments.
Extract: specific praise phrases, specific complaint phrases,
  what viewers wished the video had covered.
Target: 10 to 15 phrases.

BUYER LANGUAGE LEXICON OUTPUT:
Organize all collected phrases into 4 categories:

CONFUSION PHRASES: How buyers describe their confusion.
Example: "I read the chapter three times and still cannot
  explain it in my own words."

FRUSTRATION PHRASES: How buyers describe their failures.
Example: "I keep getting the theory right on flashcards
  but then blanking on the actual exam question."

DESIRE PHRASES: What buyers want to be able to do.
Example: "I just want to understand what to study and
  in what order without wasting months."

FEAR PHRASES: What buyers are afraid of.
Example: "What if I am studying the wrong things and
  realize it only after the exam."

---

## Section 3: MARKET_BRIEF.md Schema

Every field in this schema must be populated before Stage 1.

```markdown
# MARKET BRIEF: [Book Working Title]

Generated: [Date]
Book ID: [Assigned at registry registration]

## Confirmed Buyer Profile

Name: [Fictional realistic Indian name from Persona A1]
Age: [Range]
Current situation: [2 sentences]
Doing right now that is not working: [Specific]
What is at stake: [Specific consequence of not solving this]
Purchase trigger: [From A2]
Pain: [From A3]
Previous failed attempts: [From A4]

## Confirmed Book Promise Seed

Completion sentence: "After finishing this book I can finally
[FROM A5]."

## Format Decision

Product type: [From B1]
Reading mode: [From B2]
Physical reading context: [From B3]
Time constraint: [Days and hours per day from B4]
Page budget: [Calculated from time constraint and product type]
Language configuration: [From C3]

## Market Landscape

Competing books:
  Book 1: [Title]. Strengths: []. Verified complaints: []
  Book 2: [Title]. Strengths: []. Verified complaints: []
  Book 3: [Title]. Strengths: []. Verified complaints: []

SGK differentiation opportunities:
  Gap 1: [Specific unmet need from competitor analysis]
  Gap 2: [Specific unmet need]
  Gap 3: [Specific unmet need]

Why free content is insufficient: [From C2]

## Buyer Language Lexicon

CONFUSION PHRASES:
  [List of 10 to 20 exact phrases]

FRUSTRATION PHRASES:
  [List]

DESIRE PHRASES:
  [List]

FEAR PHRASES:
  [List]

## Price Tier

Target price: [INR amount]
Price tier: [Budget / Mid Range / Premium / Reference]
Pricing rationale: [Why this price fits this buyer and format]

PRICE TIER REFERENCE TABLE:
  Budget (INR 199 to 349): Sprint guides and question banks,
    150 to 250 pages, high yield content only.
  Mid Range (INR 399 to 599): Concept and practice hybrids,
    300 to 500 pages, diagrams, chapter tests.
  Premium (INR 699 to 999): Comprehensive textbooks,
    500 to 800 pages, full derivations, mock tests.
  Reference (INR 999 plus): Exhaustive encyclopedic works,
    800 plus pages, appendices, full index.
```

---

## Section 4: BOOK_PROMISE.md Schema

```markdown
# BOOK PROMISE: [Book Title]

## The Canonical One-Sentence Promise

"This book helps [SPECIFIC READER] achieve [SPECIFIC RESULT]
by [SPECIFIC METHOD OR APPROACH]."

## Promise Breakdown

Specific Reader: [Who exactly. Not a demographic. A person.]
Specific Result: [The measurable capability gained.]
Specific Method: [What makes this book's approach different
  from reading any other book on this subject.]

## The Completion Test

A reader who finishes this book will be able to:
  1. [Specific action 1]
  2. [Specific action 2]
  3. [Specific action 3]

These must be actions, not knowledge states.
WRONG: "Understand the concept of X."
RIGHT: "Solve X-type problems independently in an exam
  or workplace context."

## The Non-Promise

This book is NOT:
  [Specific thing this book does not do, stated honestly]
  [Second thing it does not cover or claim to cover]

Honest non-promises build trust. Readers who know what a
book will not do and buy it anyway are the most satisfied.
```

---

## Section 5: FORMAT_DECISION.md Schema

```markdown
# FORMAT DECISION: [Book Title]

## Product Specification

Product type: [Full textbook / Sprint guide / Question bank /
  Revision companion / Workbook / Concept and practice hybrid]
Reading mode: [Cover to cover / Reference / Chapter independent /
  Daily plan]
Physical reading context: [Primary reading environment]
Time constraint: [N days, N hours per day]

## Page Budget

Target page count: [N]
Maximum page count: [N] (hard limit, not soft)
Density ratio: [Concept to practice, e.g., 60:40]
Chapters planned: [N]
Average pages per chapter: [N]

## Output Formats

Primary: [HTML / Print PDF]
Include HTML Interactive Edition: YES / NO
Include DOCX Manuscript Edition: YES / NO
Include PDF Print Edition: YES / NO
Include EPUB Digital Edition: YES / NO
Include Game Build: YES / NO

## Print Specifications (if PDF included)

Page size: [A5 / Royal / A4]
Colour: [Full colour / Two colour / Black and white]
KDP submission: YES / NO

## Language Configuration

Primary language: [English / Hindi / Other]
Secondary language: [None / specify]
Bilingual mode: [None / Parallel / Selective / Translation]

## Price

Target MRP: INR [amount]
Price tier: [Budget / Mid Range / Premium / Reference]
```
