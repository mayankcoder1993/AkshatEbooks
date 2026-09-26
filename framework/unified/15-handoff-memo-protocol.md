# SGK Handoff Memo Protocol

System ID: H15
Layer: Unified
Version: 2.0.0

---

## Purpose

Every stage of the pipeline produces output files. But output
files capture only decisions, not the reasoning behind them.
When an agent completes a stage and a different agent (or the
same agent in a new session) begins the next stage, the
reasoning is lost. The next agent makes different decisions
from the same information, contradicting what came before.

The Handoff Memo solves this. Every stage produces a memo
that travels with the output files. The receiving agent reads
the memo before beginning work. No reasoning is lost between
stages.

---

## When Memos Are Written

A handoff memo is written at the completion of every stage.
The memo is written by the agent completing the stage before
any handoff occurs.

Memo naming convention:
  handoff-stage[NN]-to-stage[NN].md for book-level stages
  handoff-stage[NN]-to-stage[NN]-ch[NN].md for chapter stages
  guardrail-[NN]-confirmed.md for human confirmation records
  guardrail-[NN]-ch[NN]-remediation.md for audit remediations

All memos stored in: books/[book-id]/handoff-memos/

---

## The Handoff Memo Template

```markdown
# HANDOFF MEMO

From Stage: [Stage number and name]
To Stage: [Stage number and name]
Book ID: [Book ID]
Chapter: [If chapter-level, specify. Otherwise: N/A]
Completing Agent: [Agent role]
Date: [Date]
Duration: [How long this stage took, for pipeline optimization]

---

## OUTPUTS PRODUCED

[List every artifact file produced by this stage]
File: [path/filename.md]
Status: [COMPLETE / PARTIAL - reason]
Location: [Full path from project root]

---

## KEY DECISIONS MADE

[For every significant decision made during this stage:]

DECISION [N]:
  What was decided: [Specific]
  Why this option was chosen: [Reasoning]
  Options that were rejected: [List with brief reasons]
  Impact on subsequent stages: [What the next agent must
    know because of this decision]

---

## DISCOVERIES AND FINDINGS

[Findings from research, buyer language mining, storyboard
design, or content generation that are not captured in the
output files but are important for subsequent stages.]

FINDING [N]:
  What was discovered: [Specific]
  Source: [Where this came from]
  How subsequent stages should use this: [Specific instruction]

---

## BUYER LANGUAGE DISCOVERIES

[Exact phrases from buyer language mining that must appear
in the book. Maintained across all stage memos so this
library grows progressively.]

PHRASE [N]:
  Text: "[Exact phrase]"
  Source: [Where found: Amazon review / Reddit / Quora etc.]
  Recommended placement: [Preface / Chapter N dialogue /
    Challenge-prompt / Cliffhanger-panel]
  Used already: [YES in Chapter N / NO]

---

## CONSTRAINTS DISCOVERED

[Technical, content, legal, or logical constraints discovered
during this stage that limit options for subsequent stages.]

CONSTRAINT [N]:
  What the constraint is: [Specific]
  Why it exists: [Reason or source]
  How subsequent stages must comply: [Specific instruction]
  Example: "All GST rate examples must use post-July 2023
    rates. Pre-2023 rates caused reader confusion in competitor
    book reviews."

---

## OPEN QUESTIONS FOR NEXT STAGE

[Questions that arose during this stage that the next stage
must address before or during its work.]

QUESTION [N]:
  The question: [Specific]
  Why it matters: [Impact if not addressed]
  Suggested approach: [How the next stage might answer it]
  Requires human decision: [YES / NO]
  If YES: Flag for the next guardrail checkpoint.

---

## WORLD BIBLE UPDATES REQUIRED

[If this stage produced content that must be added to the
World Bible, list it here for the Author Agent to add.]

[This section is populated primarily by Stage 6 memos.]

New Established Facts to add:
  [List]

Emotional Arc Tracker update:
  [New entry to add]

New Locked Vocabulary:
  [List]

New Open Story Threads:
  [List]

---

## NEXT STAGE INSTRUCTIONS

[Specific instructions for the agent receiving this memo.]

MANDATORY READS BEFORE STARTING:
  [List of files the next agent must read before beginning]

SPECIFIC WATCH-OUTS:
  [Things the next agent must be careful about based on what
  happened in this stage]

RECOMMENDED FIRST ACTION:
  [The specific first thing the next agent should do]

---

## GUARDRAIL STATUS

[If a guardrail was reached during this stage:]

Guardrail reached: [Number]
Content presented to human: [Brief description]
Human decision: [What the human chose]
Confirmation file: [Path to guardrail confirmation document]
```

---

## Reading the Handoff Memo: Agent Instructions

When beginning any stage, read the handoff memo from the
previous stage before doing anything else.

MANDATORY READING CHECKLIST:
  Read: Key Decisions Made (all entries)
  Read: Discoveries and Findings (all entries)
  Read: Buyer Language Discoveries (add to running library)
  Read: Constraints Discovered (add to active constraints list)
  Read: Open Questions for Next Stage (address all before work)
  Read: World Bible Updates Required (apply if relevant)
  Read: Next Stage Instructions (follow exactly)

If any Open Question requires human decision: do not proceed
past that question until a guardrail confirmation is obtained.

---

## The Guardrail Confirmation Document

When a human user confirms a guardrail decision, the agent
records this in a confirmation document.

```markdown
# GUARDRAIL [N] CONFIRMATION

Book ID: [Book ID]
Chapter: [If applicable]
Date: [Date]
Stage: [Stage where guardrail was reached]

## What Was Presented

[Brief description of what options were presented to the human]

## Human Decision

Option selected: [Which option or custom direction]
Exact instruction: "[Verbatim or close paraphrase of what
  the human user said]"
Any modifications to the presented option: [List]

## Constraints This Creates for Subsequent Stages

[What subsequent agents must respect because of this decision]

## Next Action Authorized

[Exactly what the agent is now authorized to do]
```
