# BOOK PROMISE: Zero to Agentic API Testing

System: framework/unified/12-market-discovery-protocol.md, Section 4
Status: LOCKED at Guardrail 0. Every stage downstream references this document.

---

## The Canonical One Sentence Promise

"This book helps a manual tester with zero automation experience become a job ready API Quality Architect by teaching the wire first, then assertions, chaining, data driven execution, and headless CI/CD gating across 13 hands on mission chapters on a real runnable server."

(Rule 19 normalization applied to the original brief wording: "job ready" and "hands on" render as separate words in user facing prose. Meaning unchanged.)

---

## Promise Breakdown

Specific Reader: A working manual QA tester (2 to 4 years experience) who can find bugs by clicking, has been told to automate, and has silently avoided it because nobody taught the mechanics from the ground up.

Specific Result: Can independently build an automated API test suite on a real server, run it headlessly, interpret its exit code, and embed it as a quality gate in a CI/CD pipeline for a codebase they have never seen before.

Specific Method: Wire first. The reader inspects raw requests and responses before touching any GUI, so every later button, script, and assertion has a mental model underneath it. The arc runs from manual clicking (Chapter 1) to a Newman gate in a pipeline (Chapter 13) with no skipped steps and one continuous story world.

---

## The Completion Test

A reader who finishes this book will be able to:
  1. Assemble and break their own Express API on port 3000, then diagnose any 1xx to 5xx response family on sight.
  2. Write original JavaScript assertions (pm.test with matchers and Ajv schema checks), chain three requests with extracted variables, and run 500 data driven CSV iterations with clean teardown.
  3. Run newman run collection.json -e env.json --bail from a Linux terminal, explain exit code 0 versus exit code 1, and wire the command into GitHub Actions and Jenkins as a release gate.

These are actions, not knowledge states.
REJECTED wording: "Understands API testing concepts."
APPROVED wording: as above, each observable by a third party.

---

## The Non-Promise

This book is NOT:
  A browser or UI automation book. Selenium and Playwright belong to another SGK Tech title. This book is about the API layer only.
  An exhaustive HTTP specification reference. For RFC level depth, consult RFC 9110 directly; this book teaches only what a working API tester must apply weekly.
  A guarantee of passing any interview. It guarantees capability; interviews still require the reader to practice aloud.

Honest non-promises build trust. Reviews of competing books repeatedly punish overclaiming; this declaration preempts that failure mode.

---

## Promise to Feature Traceability (checked at Stage 5 and Stage 9)

  "Wire first"  =>  Chapter 1 shows raw request and response bodies before any tool GUI. Blurb line: "You will read the wire, not just click buttons."
  "Real runnable server"  =>  Every chapter runs against the book's Express server on port 3000. Back cover bullet: "Every example runs on a server you assemble yourself."
  "Headless CI/CD gating"  =>  Chapter 13 is entirely terminal and pipeline. Blurb line: "Ends where it matters: a green gate in your pipeline."
  "Machine verified"  =>  validate-all-snippets.mjs (47/47) and the Newman suite (11/11) must pass before any chapter certifies.

Checked against chapter blueprints at Guardrail 4. Re-checked against listing copy at Guardrail 6.
