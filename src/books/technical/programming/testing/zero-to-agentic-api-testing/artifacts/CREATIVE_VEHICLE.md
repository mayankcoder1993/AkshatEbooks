# CREATIVE VEHICLE: Zero to Agentic API Testing

System: Stage 3 output. Story Mining Protocol H14 + vertical v01 Part B palette.

Guardrail 3: CONFIRMED with vehicle selection (guardrail-03-confirmed.md).

---

## Story Mining Output

Core Conflict:

"Learners think clicking Send and getting a 200 response means the API works. The reality is that a 200 response only means the server processed the request, not that the data is correct. The gap between these causes silent data corruption that passes manual testing and fails only in production."

The 3 Natural Acts:

  Act 1 (Ch 1 to 3): Akshay discovers the gap. His clicking mental model collapses; he sees what the machine actually does.

  Act 2 (Ch 4 to 8): He builds real capability: assertions, scopes, chaining, bulk data, each facing escalating library and campus failures.

  Act 3 (Ch 9 to 13): He operates under pressure: chaos, security, legacy, and finally the pipeline gate that decides whether software ships.

The Enemy:

  Name: The Silent Failure.

  What it is: Code and contracts that appear to work, pass casual review, and fail without raising their voice, because nobody automated the promise.

  Real world example: Knight Capital's guard code (Ch 3) and Akshay's own matcherless green test (Ch 5), which is the personal face of the same enemy.

  How it appears in this book's world: A screen that looks healthy while route data vanishes; a check mark that stays green over an empty body; a suite that passes on one laptop and fails on another.

---

## The Story World

World concept: A single academic year at Apex Institute of Technology, a heritage campus whose digital infrastructure (transit screens, library catalogue, reservation systems, a 20 year old finance mainframe) has grown faster than anyone fully understands. During orientation week the strain shows.

Why this world works for this subject: Campus services are APIs the reader can feel the stakes of (students stranded, books unfindable), the failure modes are small enough to teach from, and the heritage setting gives Sameer's lab, the war room, and the circulation desk distinct visual identities that carry Madhubani art naturally.

Why this world is different from other books in this series: v01 palette Vehicle 1 (The Campus Crisis) is marked DO NOT REUSE in the vertical module. The next SGK Tech testing book must draw from Vehicle 2 (startup launch), Vehicle 5 (festival deployment), or invent fresh. Sameer's analogy registry also carries forward: restaurant waiter is USED here and cannot be reintroduced as new elsewhere; hotel keycard is RESERVED for Chapter 11 of this book only.

---

## The Mission Architecture

MISSION 1: Reading the Wire (Seeing What the Machine Actually Does)

  Chapters: 1 to 3. Act 1.

  Enemy encounter: Chapter 2, the orientation day transit freeze. The Silent Failure stands in front of Akshay looking like a working screen, and his clicking finds nothing.

  Victory condition: He can diagnose any response family on sight and has written a test that once failed honestly.

  Story consequence: The war room reopens tomorrow; the team has a working watchdog where yesterday there was only hope.

MISSION 2: Building the Watchdog (Automating What Used to Break Silently)

  Chapters: 4 to 8. Act 2.

  Enemy escalation: The Silent Failure evolves. It is no longer a crash; it is his own green test lying to him (Ch 5), and it is scale (500 rows, one bad teardown, Ch 8).

  Victory condition: A chained, data driven suite over the library API with verified cleanup.

  Story consequence: Meera's manual rekeying ends; the catalogue runs itself at midnight.

MISSION 3: Guarding the Gate (Making Machines Responsible for Quality)

  Chapters: 9 to 13. Act 3.

  Final confrontation: Chapter 13, the pipeline decides a release. The Silent Failure makes its last stand as a test everyone dismisses as flaky; Akshay reads the wire and stops the build.

  Victory condition: Exit code 1 fires, the broken release never ships, and the gate now belongs to him.

  Story consequence: Graduation day. He is Lead API Quality Architect. Sameer hands over the chai glass.

---

## Differentiation from Other Books in This Series

Previously used story worlds: none (this is SGK Tech book 1; series character bible created at registry/series-SGK-TECH-character-bible.md).

Previously used opening scenarios: none. Ch 1 cafeteria dilemma registered as RESERVED for this title.

Hero arc patterns used: The five beat arc registered under Akshay's name so no future SGK Tech hero repeats the "silent false positive humbling" as their Beat 4.

How this book avoids repetition: campus vehicle locked to this title; future Sameer books must use different worlds and different analogy sets, checked against WORLD_BIBLE Section 4 before Stage 3 approval.
