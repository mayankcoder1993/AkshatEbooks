# Vertical Module: Programming and Dev Tools

Module ID: v01
Series: SGK Tech (SGK-TECH)
Version: 2.0.0

---

## PART A: SUBJECT INVARIANTS
These rules never change regardless of which book,
which hero, or which creative vehicle is chosen.

### A1: What Must Be Taught

Every programming and dev tools book must cover:

FOUNDATIONAL LAYER (always Mission 1 territory):
  Why the tool or language exists: the problem it solves
    that no previous approach solved adequately.
  The mental model: how the system actually works internally,
    not just how to use its interface.
  The first working implementation: the reader must produce
    something that runs before Mission 1 ends.
  Error reading: how to interpret the most common errors
    from this tool as diagnostic information, not as failures.

PRACTICAL LAYER (always Mission 2 territory):
  The core workflow: the standard sequence of actions a
    practitioner uses daily.
  Data handling: how information enters, transforms within,
    and exits the system.
  Validation and verification: how to know if the system
    is doing what is intended.
  Automation: how to reduce repetitive manual actions
    to a reliable automated sequence.

PROFESSIONAL LAYER (always Mission 3 territory):
  Integration: how this tool connects to other systems.
  Failure handling: what happens when things go wrong
    and how to recover gracefully.
  Real-world patterns: how professionals use this tool
    in production environments with real stakes.
  The quality gate: how to use this tool as part of a
    larger professional workflow (CI/CD, code review,
    deployment pipelines).

### A2: Proof System

ALL code snippets must be in the book's validated test suite.
The snippet-validator.mjs tool must run to zero failures
before any chapter is certified.

Specific proof requirements:
  Every code block that claims to produce output X must
    produce output X when run in the book's test environment.
  Every assertion block must be a real assertion that
    passes against the stated condition.
  Every error scenario must reproduce the stated error
    when the error-producing code is run.
  Every performance claim (sub second response, faster than
    manual, etc.) must be measured, not estimated.

The book must include a companion test environment spec:
  Language version and runtime version.
  Required dependencies and their exact versions.
  Setup commands to reproduce the test environment.
  The full test suite command that runs all validations.

### A3: Interactive Element Types

REQUIRED interactive elements for this vertical:

IDE Workbench (ide-screen.svg.js template):
  Shows code being written or edited.
  Must use monospace font with syntax highlighting colours
    appropriate for the language being taught.
  Directional pointer callouts on specific lines.
  Line numbers visible.
  File name in a tab at the top.

API Testing Workbench (api-workbench.svg.js template):
  Shows HTTP requests and responses.
  Request panel: method, URL, headers, body visible.
  Response panel: status code, headers, body visible.
  Status code displayed with colour coding:
    2xx: green tint, 4xx: amber tint, 5xx: red tint.

Terminal Window (terminal-screen.svg.js template):
  Shows command line interactions.
  Prompt character visible.
  Command text distinguishable from output text.
  Error output visually distinguishable from standard output.

Network Inspector Panel:
  Shows the actual wire-level data for at minimum one
    key concept per book.
  Displays: request headers, response headers, timing,
    payload size.
  This is the "the wire does not lie" teaching moment.

### A4: Authoritative Source Types

Official language or framework documentation (primary).
RFC or specification documents where applicable.
GitHub repository official documentation.
Official changelog for the version being taught.
Post-mortems and incident reports from major tech companies
  (GitHub, Stripe, Cloudflare, Netflix, Amazon).
O'Reilly technical books for conceptual framing.
NEVER: unofficial blogs, Stack Overflow answers as primary
  source (may be cited as common questions but not as authority).

### A5: Chapter ROI Test Template

"After reading this chapter, the reader can [SPECIFIC ACTION]
[IN SPECIFIC CONTEXT] without [SPECIFIC DEPENDENCY OR HELP]."

EXAMPLE APPROVED:
"After reading this chapter, the reader can write a Postman
test that validates the status code and response body schema
of any GET endpoint, without copying from a template or
asking a senior for help."

EXAMPLE REJECTED:
"After reading this chapter, the reader understands how
assertions work in Postman."

---

## PART B: CREATIVE VEHICLE PALETTE

These are seed ideas. Stage 3 Story Mining chooses one or
invents something new. No two books in this vertical should
use the same creative vehicle.

VEHICLE 1: THE CAMPUS CRISIS
World: A university campus where the digital infrastructure
  is critical for student services: transit, library, admissions,
  events. A cascade of small failures threatens a major event.
Conflict engine: Real student impact from software failures
  creates urgency and stakes without corporate abstraction.
Natural for: API testing, backend development, debugging tools.
Used by: Zero to Agentic API Testing (DO NOT REUSE).

VEHICLE 2: THE STARTUP LAUNCH
World: A small Indian startup has 72 hours to ship their
  first product. Every feature that works is a celebration.
  Every bug is a crisis.
Conflict engine: Time pressure, investor demo deadline,
  team sleep deprivation, real money at stake.
Natural for: Full stack development, DevOps, deployment tools.

VEHICLE 3: THE OPEN SOURCE MYSTERY
World: A widely-used open source library has a critical bug
  reported in production. The hero joins the maintainer team
  to diagnose and fix it before millions of dependent projects
  are affected.
Conflict engine: Real-world impact at scale, detective work,
  the satisfaction of contributing to something larger than
  the individual.
Natural for: Debugging, code analysis, git, documentation.

VEHICLE 4: THE FINTECH HEIST (DEFENDED)
World: A payments startup is defending against an increasingly
  sophisticated series of API abuse attempts. The hero builds
  the security systems that stop the attacks.
Conflict engine: Adversarial scenarios, real financial stakes,
  the satisfaction of defense over attack.
Natural for: Security testing, API design, authentication,
  rate limiting.

VEHICLE 5: THE FESTIVAL DEPLOYMENT
World: An Indian e-commerce platform must handle the traffic
  surge of a Diwali sale. The hero is responsible for ensuring
  the system does not collapse under 100x normal load.
Conflict engine: Scale, time pressure, cultural stakes
  (Diwali is personal for the team), the drama of monitoring
  dashboards during the sale.
Natural for: Performance testing, load testing, monitoring,
  cloud infrastructure, caching.

VEHICLE 6: THE LEGACY MIGRATION
World: A 20-year-old government system with critical citizen
  data must be migrated to a modern architecture without any
  downtime and without losing a single record.
Conflict engine: Real civic consequences of failure,
  bureaucratic constraints, the mystery of undocumented
  legacy code, the satisfaction of modernization.
Natural for: Database tools, data pipelines, ETL, migration
  scripts, testing legacy systems.

VEHICLE 7: THE REMOTE TEAM EMERGENCY
World: A distributed engineering team across 3 Indian cities
  has a production incident at 11 PM. The hero must diagnose
  and fix a cascading failure using only logs and monitoring
  tools, while coordinating across timezones.
Conflict engine: Time pressure, distributed communication,
  the detective work of log analysis, the satisfaction of
  finding the root cause.
Natural for: Logging tools, monitoring, debugging, distributed
  systems concepts.

VEHICLE 8: THE STUDENT PROJECT THAT WENT VIRAL
World: A student's weekend project unexpectedly goes viral
  on social media. The simple Node.js server cannot handle
  the load. The hero must scale it overnight before it collapses
  and takes the viral moment with it.
Conflict engine: Unexpected success as a crisis, the contrast
  between toy code and production-ready code, the race against
  the viral window closing.
Natural for: Scaling, optimization, caching, deployment,
  monitoring.

---

## PART D: OPERATIONAL WORKING WAY FOR AI AUTHORS

### D1: The Pair Programming Comic Beat Workflow
When authoring technical chapters featuring the learner mentor duo (e.g. Akshay and Sameer), AI agents must structure every learning beat according to this sequence:

1. THE CONVERSATIONAL SPARK (Comic Beat):
   - Akshay encounters an unexpected behavior or holds a naive assumption (e.g. thinking a frozen tablet screen means the hardware glass is defective).
   - Sameer reframes the problem using a physical first-principles analogy (e.g. the restaurant waiter, the blue Ethernet cable, postcards vs framed pictures).
   - Dialogues are short, punchy (1 to 2 sentences max), positioned in negative space speech clouds without covering character faces or equipment.

2. THE INTERACTIVE PROGRAMMING INTERFACE (Workbench or SVG Screen):
   - Rather than jumping straight to explanations, present the actual software screen.
   - For HTTP/API topics: Display the API Testing Workbench with method badge, URL bar, headers, payload, and live response pane.
   - For runtime code topics: Display the Code IDE screen with window buttons, active filename tab, syntax highlighted lines, and chunked breakdowns.
   - Enforce auto-wrapping CSS (`white-space: pre-wrap; word-break: break-word`) so no code or JSON payload clips.

3. THE 4-PART PEDAGOGICAL BREAKDOWN (Quad Card):
   - Every workbench must be grounded by the 4-part card:
     • Part 1 (Input): What command or request was sent.
     • Part 2 (Under the Hood): The byte stream, socket handshake, or kernel action.
     • Part 3 (Deterministic Output): Exact status code, headers, and body received.
     • Part 4 (Senior Savior): The real-world production gotcha avoided and memorable golden rule.

4. DUAL-VIEW READINESS:
   - Web View: Supports responsive side-by-side or stacked layouts, interactive reveals, and copy buttons.
   - Book View: Enforces single-column sequential stacking, page-break avoidance (`break-inside: avoid`), high-contrast ink legibility, and pre-expanded static reveals.

