# The 7-Stage End-to-End Book Publishing Lifecycle

Every book published under the Sarva Gyana Koshah imprint follows a strict seven stage lifecycle to guarantee world class storytelling, technical accuracy, and production readiness.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ STAGE 1: Audience & Persona Profiling                                       │
│          • Target learner identity, cognitive baseline, and friction points  │
├─────────────────────────────────────────────────────────────────────────────┤
│ STAGE 2: Multi-Source Research & Industry Benchmarking                      │
│          • Transcripts, official syllabi, top YouTube/Udemy courses, RFCs   │
├─────────────────────────────────────────────────────────────────────────────┤
│ STAGE 3: Curriculum Architecture & Story Arc Design                         │
│          • Grouping into high stakes Missions, Mysteries, or Investigations │
├─────────────────────────────────────────────────────────────────────────────┤
│ STAGE 4: Visual & Asset Blueprinting                                        │
│          • Folk art scene panels, interactive SVG screens, and flowcharts   │
├─────────────────────────────────────────────────────────────────────────────┤
│ STAGE 5: Chapter-by-Chapter Blueprint Planning (Pre-Writing Gate)           │
│          • Beat by beat mapping of dialogue, inputs, outputs, and traps     │
├─────────────────────────────────────────────────────────────────────────────┤
│ STAGE 6: Autonomous Implementation & Code Execution                         │
│          • Structured blocks, zero hyphen prose, executable test scripts    │
├─────────────────────────────────────────────────────────────────────────────┤
│ STAGE 7: Multi-Dimensional 90%+ Audit Gate & Publication Certification      │
│          • Automated scorecard, defect remediation loop, final delivery     │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Stage 1: Audience & Persona Profiling

Before writing a single word, the author or agent must define:
1. **Who is the reader?** (e.g. A college graduate entering software QA, a civil service aspirant tackling Indian Polity, a commerce student studying corporate taxation).
2. **What is their current mental model?** (What naive assumptions or misconceptions do they bring?).
3. **What is their primary emotional barrier?** (Fear of terminal commands, intimidation by legal jargon, feeling overwhelmed by mathematics formulas).
4. **What is their transformation?** (From confused beginner to confident architect or analytical exam topper).

See `framework/core/persona-profiler.md` for full profiling rubrics.

---

## Stage 2: Multi-Source Research & Industry Benchmarking

No book is written from a single isolated source. The research phase requires synthesizing at least four distinct sources:
1. **Official Curriculum & Standard Syllabi:** University course guides, UPSC/State PSC official notifications, or industry standards (W3C, IETF RFCs, OpenAPI).
2. **Top-Tier Video & Course Pedagogy:** Analyzing how the top 1% of instructors on YouTube and Udemy break down difficult concepts visually. Note their metaphors, visual analogies, and student comments regarding points of confusion.
3. **Definitive Reference Books:** Authoritative texts (O'Reilly, Manning, Oxford, standard legal treatises) to ensure terminology and technical depth remain unimpeachable.
4. **Historical War Stories & Case Studies:** Official government investigation reports, regulatory filings (SEC, NAO, HHS), and industry outage retrospectives to ground theoretical principles in real world consequences.

Deliverable: A completed `research-brief.md` saved in the book directory.

---

## Stage 3: Curriculum Architecture & Story Arc Design

Traditional chapters feel like arbitrary partitions of lecture notes. In this framework, curriculum is organized into **Three High-Stakes Missions or Story Arcs**:
• **Phase 1 (The Foundation & Naive Standoff):** The protagonist faces an initial crisis or puzzle, tries the intuitive/naive approach, and discovers its fatal limitations.
• **Phase 2 (The Scaled Implementation & Friction):** The protagonist masters the core system, but hits the wall of manual scaling, fatigue, and edge case collisions.
• **Phase 3 (The Enterprise Fortress & Automation):** The protagonist ascends to architectural mastery, building resilient, autonomous, self healing systems.

Every mission must articulate:
• *Crisis Scenario:* What broke or what critical challenge demands resolution.
• *We Know vs We Need:* Clear inventory of current facts versus operational objectives.
• *The Battle Plan:* Transparent roadmap showing the reader where they are at every step.

---

## Stage 4: Visual & Asset Blueprinting

Visual assets must never be random stock art or AI hallmarked decorations. Every image must advance the narrative and clarify the concept:
1. **Authentic Cultural Art Style:** Intricate Indian Madhubani (Mithila) folk art featuring almond shaped eyes, traditional attire (dhoti, kurta, sari), and ornate borders.
2. **Pan-Indian Heritage Architecture:** Settings feature carved Dravidian pillars, Nagara stone jali screens, chaitya arches, brass lamps, and wooden desks. Strictly zero modern glass/steel skyscrapers.
3. **Pure Light Palette:** Pure white (`#FFFFFF`) or soft neutral slate backgrounds (`#F8FAFC`). No dark mode.
4. **Crisp Interactive Software SVGs:** For programming and digital tools, user interface screens (IDEs, API clients, terminal shells) must be rendered as interactive SVG/DOM markup components with selectable text and pixel perfect contrast, never compressed bitmap images.
5. **No Photorealistic Humans:** Zero photorealistic human generations. All characters are rendered in consistent folk art aesthetic.

---

## Stage 5: Chapter-by-Chapter Blueprint Planning (Pre-Writing Gate)

Before writing the JavaScript or Markdown blocks for a chapter, the author or agent constructs a detailed **Chapter Blueprint**:
• Scene Header: Location, time, physical atmosphere.
• The Dialogue Hook: Akshay encountering a specific obstacle, Sameer explaining with a physical analogy.
• The Action Beat: What code or command is typed.
• The Software Screen Mockup: Method, URL, headers, body, response badge, latency, response body.
• The Quad Breakdown Card:
  1. Input: What was dispatched.
  2. Under the Hood: The internal wire/memory mechanics.
  3. Output: The live observed result.
  4. Senior Savior: The architectural lesson or common trap avoided.
• The Sourced Historical Note / PYQ: Real world validation.
• Review & Triage Challenge: Interactive diagnostic scenario.

**User Alignment Gate:** The agent presents this blueprint to the human user for review before generating full content blocks.

---

## Stage 6: Autonomous Implementation & Code Execution

During implementation:
1. Content is written into structured modular blocks following the book manifest schema.
2. **Strict Rule 19 Compliance:** User-facing prose, headings, bullet lists, questions, and explanations must contain zero hyphens or dashes (`-`, `—`, `–`). Colons, commas, dots, and bullets are used instead.
3. All code snippets, API endpoints, mock servers, and test collections must be locally executable and 100% test passing.

---

## Stage 7: Multi-Dimensional 90%+ Audit Gate & Publication Certification

The final delivery of a chapter requires running the automated auditor:
```bash
node framework/tools/audit-chapter.mjs <chapter-file-path>
```
The auditor scores the chapter against the 100 point rubric:
• If the score is **$\ge 90\%$**, an official audit certificate is generated and the chapter is merged.
• If the score is **$< 90\%$**, the auditor outputs explicit diagnostic failure points, triggering an automatic remediation loop (Blueprint Revision $\rightarrow$ Implementation Patch $\rightarrow$ Re-Audit) until the threshold is met.
