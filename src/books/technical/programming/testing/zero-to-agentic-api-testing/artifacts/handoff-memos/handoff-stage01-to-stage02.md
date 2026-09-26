# HANDOFF MEMO

From Stage: Stage 01 Promise and Format Decision
To Stage: Stage 02 Persona Profile and Character Cast
Book ID: SGK-TECH-API-001
Chapter: N/A
Completing Agent: Lead Curriculum Architect
Date: 2026-09-27
Duration: 3 hours

---

## OUTPUTS PRODUCED

File: artifacts/BOOK_PROMISE.md
Status: COMPLETE
Location: src/books/technical/programming/testing/zero-to-agentic-api-testing/artifacts/BOOK_PROMISE.md

File: artifacts/FORMAT_DECISION.md
Status: COMPLETE
Location: src/books/technical/programming/testing/zero-to-agentic-api-testing/artifacts/FORMAT_DECISION.md

---

## KEY DECISIONS MADE

DECISION 1:
  What was decided: Canonical promise is locked: "This book helps a manual tester with zero automation experience become a job ready API Quality Architect by teaching the wire first, then assertions, chaining, data driven execution, and headless CI/CD gating across 13 hands on mission chapters on a real runnable server."
  Why this option was chosen: Focuses on verifiable third party observable outcomes rather than vague knowledge states.
  Options that were rejected: "Understands API testing concepts" or "Learn Postman in 21 days".
  Impact on subsequent stages: Every downstream artifact must trace its features to this exact promise.

DECISION 2:
  What was decided: The 3 action completion test defines reader success: (1) assemble Express API on port 3000 and diagnose 1xx to 5xx status codes, (2) write original JavaScript assertions with Ajv schema checks and 500 row CSV runs, (3) run headless Newman in CI/CD and interpret exit codes 0 versus 1.
  Why this option was chosen: Gives the persona a concrete definition of job readiness.
  Options that were rejected: Multiple choice exam with no live terminal execution.
  Impact on subsequent stages: Stage 02 persona profile uses this test as the success criterion.

DECISION 3:
  What was decided: Multi format delivery locking: Primary HTML interactive single file edition, plus DOCX manuscript, PDF print, and EPUB reflowable. Game build deferred to edition 2.
  Why this option was chosen: Readers need selectable code and side by side interactive terminals on desktop.
  Options that were rejected: PDF only or web only distribution.
  Impact on subsequent stages: Workbench screens must be built as interactive SVG components.

---

## DISCOVERIES AND FINDINGS

FINDING 1:
  What was discovered: Learners punish overclaiming in technical books. Adding an explicit Non Promise section builds immediate credibility.
  Source: Technical book reader surveys.
  How subsequent stages should use this: Reinforce non promises (no UI automation, no RFC memorization) in frontmatter and marketing.

---

## BUYER LANGUAGE DISCOVERIES

PHRASE 1:
  Text: "I want to write my own test from scratch, not copy a template."
  Source: r/softwaretesting community discussions.
  Recommended placement: Persona desired identity.
  Used already: YES in BOOK_PROMISE.md.

---

## CONSTRAINTS DISCOVERED

CONSTRAINT 1:
  What the constraint is: Zero hyphens in prose per Rule 19.
  Why it exists: Universal publishing standard.
  How subsequent stages must comply: All persona and character documents must verify Rule 19 compliance.

---

## OPEN QUESTIONS FOR NEXT STAGE

QUESTION 1:
  The question: None.
  Why it matters: Stage 1 artifacts complete and aligned with Guardrail 0.
  Suggested approach: Proceed with Persona Profile and Character Cast design.
  Requires human decision: NO

---

## WORLD BIBLE UPDATES REQUIRED

New Established Facts to add:
  None at Stage 1.

Emotional Arc Tracker update:
  None.

New Locked Vocabulary:
  None.

New Open Story Threads:
  None.

---

## NEXT STAGE INSTRUCTIONS

MANDATORY READS BEFORE STARTING:
  artifacts/BOOK_PROMISE.md
  artifacts/FORMAT_DECISION.md
  framework/audience-profiles/ap04-working-professionals.md

SPECIFIC WATCH-OUTS:
  Calibrate Arun Pillai persona against ap04 working professional band.
  Design mentor Sameer and hero Akshay with authentic Madhubani Pan Indian heritage styling.

RECOMMENDED FIRST ACTION:
  Draft PERSONA_PROFILE.md and CHARACTER_CAST.md.

---

## GUARDRAIL STATUS

Guardrail reached: Guardrail 1 (Promise and Format Approval)
Content presented to human: Canonical promise, completion test, and page budget.
Human decision: Approved and confirmed.
Confirmation file: artifacts/handoff-memos/guardrail-01-confirmed.md
