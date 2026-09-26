# SGK Edition Refresh Engine

System ID: H16
Layer: Unified
Version: 2.0.0

---

## Purpose

SGK books are living documents. Laws change. Software versions
update. Syllabi revise. New Supreme Court judgments reinterpret
established doctrines. New budget announcements alter tax rates.
New exam papers reveal shifting question patterns.

A published SGK book that is not updated becomes a liability:
readers buy it expecting current information and receive outdated
content. A bad review citing an outdated fact does more damage
than a delayed publication.

The Edition Refresh Engine makes updates cheap and fast.
A surgical revision of one chapter, incorporating one new GST
rate change, should take hours, not weeks. This protocol ensures
that is possible.

---

## The Modular Chapter Architecture Rule

Every chapter is an independent module. This is not just an
organizational preference. It is a structural requirement that
enables surgical updates.

WHAT INDEPENDENCE MEANS:
  No chapter hardcodes a reference to another chapter by
    page number.
  Cross-references between chapters use chapter numbers
    and section titles, not page numbers.
  Every chapter can be fully understood without reading any
    other chapter (for reference mode books).
  Updating Chapter 7 does not require touching Chapter 4
    or Chapter 11.

WHAT INDEPENDENCE DOES NOT MEAN:
  Chapters can contradict each other on established facts.
    The World Bible prevents this.
  Characters can behave inconsistently across chapters.
    The World Bible and Emotional Arc Tracker prevent this.
  Story continuity can be ignored.
    The Chapter Opening Condition and Closing Hook maintain it.

---

## Annual Refresh Checklist

Run at the start of every calendar year for every published book.

FOR TECH AND PROGRAMMING BOOKS:
  Check for major version releases of all tools covered.
    Has the API Testing tool changed its interface significantly?
    Has a command syntax changed in Newman or the CLI tool?
    Has a library API been deprecated or renamed?
  Verify all code snippets still execute without errors.
  Run the full snippet-validator suite. Any failures indicate
    outdated code that must be updated.
  Check for new security vulnerabilities in demonstrated patterns.
  Update the Last Verified date in the copyright page.

FOR LAW AND GOVERNANCE BOOKS:
  Check for Constitutional Amendments passed in the previous year.
  Check for landmark Supreme Court judgments that change or
    clarify covered doctrines.
  Check for new legislation, amendment acts, or ordinances
    in covered areas.
  Check for new Law Commission reports affecting covered topics.
  Verify all case law citations remain good law (not overruled).
  Update all statutory text to current amended version.

FOR ECONOMICS, COMMERCE, AND TAX BOOKS:
  Check Budget announcements for rate and threshold changes.
  Check RBI circulars for monetary policy tool changes.
  Check GST Council notifications for rate and procedure changes.
  Verify all numerical examples use current rates.
  Check SEBI regulations for securities market changes.
  Update all "as of" dates to the current financial year.

FOR COMPETITIVE EXAM BOOKS:
  Check for new official syllabus notifications from UPSC/PSC.
  Add PYQs from the most recent exam cycle.
  Update high-yield topic rankings based on the latest 3 years
    of question patterns.
  Check for changes to examination pattern or marking scheme.
  Verify that recommended preparation strategies align with
    recent topper analyses.

FOR SCIENCE BOOKS:
  Check for updated values in physical constants or standards.
  Check for curriculum changes from CBSE, NCERT, or university.
  Check for new discoveries that affect covered theories.
  Verify experiment protocols still reflect current lab safety standards.

---

## Delta Update Protocol

When a refresh is needed, the Refresh Agent runs this protocol
instead of rewriting entire chapters.

STEP 1: Identify Changes
The Refresh Agent compares current chapter content against
the identified external changes.
Produces: delta-report-ch[NN].md listing:
  Blocks that must change (with specific change description)
  Blocks that can remain unchanged
  New blocks that must be added
  Blocks that must be removed (outdated)

STEP 2: Human Approval
Present delta-report to human user at Guardrail.
Human approves the scope of changes.
Specifically: approve which chapters are affected and
what the approved changes are.
The agent does not implement any changes without this approval.

STEP 3: Surgical Implementation
The Author Agent implements ONLY the approved changes.
Unchanged blocks are not touched.
The World Bible is updated for any facts that changed.

STEP 4: Re-certification
The Auditor Agent runs a full audit on every changed chapter.
Each changed chapter must re-certify at 90 or above.
Unchanged chapters retain their previous certification.

STEP 5: Edition Tracking
Update the book manifest with new edition information.
Update the copyright page with new edition date.
Update all "Current as of" dates.
Update the registry with new edition status.
Run the full build pipeline to generate all new format outputs.

---

## Freshness Stamp Protocol

Every chapter footer displays:
"Current as of: [DATE] | Verified: [DATE]"

Current as of: The date of the most recent external development
  this chapter reflects. For a GST chapter: the date of the most
  recent GST Council notification incorporated.

Verified: The date the Author Agent last confirmed all facts
  in this chapter against current primary sources.

These stamps are metadata fields in the chapter file:
  currentAsOf: '[DATE]'
  lastVerified: '[DATE]'

The build pipeline reads these fields and renders them in
all output formats automatically.

---

## Edition Naming Convention

First Edition: The initial published version.
Second Edition: Substantial content revision (more than 30%
  of chapters significantly changed, or structural reorganization).
Revised Edition: Minor updates (rate changes, new PYQs added,
  outdated examples replaced) without structural change.
Reprint with Corrections: Only verified errors corrected.
  No content changes.

The edition statement appears on the cover, title page,
and copyright page.
