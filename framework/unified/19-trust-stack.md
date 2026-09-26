# SGK Trust Stack

System ID: H19
Layer: Unified
Version: 2.0.0

---

## Purpose

Indian educational book buyers are deeply skeptical. They have
been burned by books claiming complete coverage that miss 40%
of the syllabus, books with errors in answer keys, books using
outdated information presented as current, and books that are
coaching notes repackaged at triple the price.

The Trust Stack is a set of transparency and verification
mechanisms built into every SGK book's content. These signals
do not require the reader to trust the author's reputation.
They enable the reader to verify claims themselves.

---

## Trust Signal 1: Source Stamps

Every factual claim that is not common knowledge carries a
source stamp. The source stamp is inline in the content,
not buried in a bibliography.

FORMAT FOR DIFFERENT SOURCE TYPES:

For legal text (Constitution, Acts, Notifications):
  [Article 246A, Clause 1, Constitution of India (101st Amendment), 2016]
  [Section 16(4), CGST Act, 2017 (as amended to [YEAR])]
  [Circular No. 123/42/2019-GST, CBEC, dated 11 November 2019]

For case law:
  [Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225,
  Para 312, Supreme Court of India]
  [Ratio: [One sentence statement of the ratio decidendi]]

For government reports and data:
  [Economic Survey 2023-24, Chapter 4, Ministry of Finance]
  [RBI Annual Report 2023, Statistical Tables, Table III.1]

For technical standards:
  [RFC 9110, HTTP Semantics, Section 9.3.1, IETF, June 2022]
  [W3C Web Content Accessibility Guidelines 2.1, Criterion 1.4.3]

For research and publications:
  [Author Last Name, Title (abbreviated), Journal, Year, Page]

Source stamps appear:
  In reference-anchor blocks: embedded in the reference content.
  In dialogue-exchange blocks: as a pointer callout from the
    mentor character, not as an interruption to dialogue.
    Example: Sameer points to a highlighted section and says:
    "This is from the official CGST Act, Section 16 Clause 4.
    Always cite the section when you write about ITC eligibility."
  In trap-alert blocks: the real-world consequence field
    always carries a source for the cited incident.

---

## Trust Signal 2: PYQ Verification Badges

Past Year Questions in competitive exam books carry a
verification badge with complete provenance.

FORMAT:
  [PYQ: UPSC CSE Prelims 2022, General Studies Paper 1,
  Question 47, 2 marks]
  [PYQ: UPSC CSE Mains 2021, General Studies Paper 2,
  Section A, Question 1, 150 words, 10 marks]
  [PYQ: SSC CGL Tier 1 2023, Set 4, Question 23, 2 marks]

The badge appears as a styled inline label before the question.
Every PYQ must have a verified source. Fabricated or unverified
PYQs are not permitted under any circumstances.

---

## Trust Signal 3: Verification Date Stamps

Every chapter footer displays two dates:
  Current as of: The date of the most recent external
    development this chapter reflects.
  Last Verified: The date the content was last confirmed
    against current primary sources.

The copyright page displays the book's overall verification date.

The Reader's Guide includes this statement:
"The content of this book is verified as of [DATE].
For subjects where regulations or technology change frequently,
we publish annual refreshes. Check [website] for the
latest edition status."

---

## Trust Signal 4: The Error Bounty Promise

Prominently displayed on the copyright page:

"Found an error?
We want to know. Email corrections@sgkbooks.in with:
  The page number
  The incorrect content
  The correct content with your source

We verify every submission. Verified errors are corrected
in the next print run. The reader who reports a verified
error will be acknowledged by name in the corrected edition's
acknowledgments page.

We make this promise because we are confident in our content
and because we believe in accountability."

This promise accomplishes three things:
  It signals confidence in the content.
  It engages readers as active quality partners.
  It creates a public accountability mechanism that
    incentivizes accuracy in the original authoring process.

---

## Trust Signal 5: The Non-Promise Declaration

In the Preface, after the Book Promise, include a clear
statement of what this book does NOT claim to do:

"This book is not:
  A replacement for [specific competing book that covers X].
    [Competing book] is excellent for [specific purpose].
    This book is for [specific different purpose].
  A complete reference for every aspect of [subject].
    For exhaustive coverage of [specific area], consult
    [official source].
  A guarantee of exam success.
    Success requires consistent practice and application
    beyond what any single book provides."

Honest non-promises build trust. A reader who knows
what a book will not do and buys it anyway is the most
satisfied reader.

---

## Domain-Specific Proof Validators

Each vertical module specifies a proof validation process.
The automated tools implement these validations.

TECH BOOKS: snippet-validator.mjs
  Runs all code snippets from all workbench-screen blocks.
  Verifies they execute without errors.
  Verifies all assertion blocks pass.
  Reports failing snippets with error output for fixing.

LAW BOOKS: citation-checker.mjs
  Verifies that every cited Article or Section exists
    in the referenced act as cited.
  Verifies that case citations include year, court, and
    reporter reference.
  Flags unverified citations for human review.
  Does not automatically verify the content of judgments
    (that requires human review against original text).

ECONOMICS AND TAX BOOKS: calculation-verifier.mjs
  Re-runs every numerical example from its stated inputs.
  Verifies the output matches the stated answer.
  Flags any calculation that does not recalculate correctly.
  Reports the discrepancy for Author Agent correction.

EXAM BOOKS: pyq-verifier.mjs
  Verifies PYQ badge format is complete and correctly structured.
  Cross-checks year and paper references against a maintained
    database of official exam metadata.
  Flags any PYQ with incomplete or suspicious provenance.

GENERAL (all books): world-bible-checker.mjs
  Verifies consistency with the World Bible.
  Already fully specified in H04 and H09.
