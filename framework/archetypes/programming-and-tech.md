# Pedagogical Archetype: Programming & Technology Tools

This archetype governs technical books covering programming languages (Python, JavaScript, Go, Rust), testing frameworks (Postman, Selenium, Playwright), cloud architectures, and DevOps tooling.

---

## 1. Core Narrative Vehicle: The Pair Programming Comic Duo

Technical concepts must never be explained through monologue lectures. They unfold through the dynamic between two complementary archetypes:
• **The Protagonist Learner (e.g. Akshay):** Energetic, relatable, learns by doing, types commands, falls into fresher traps, asks the questions every student thinks of.
• **The Senior Architect Mentor (e.g. Sameer):** Experienced, calm, explains first principles over chai, points to underlying byte streams, rescues when servers crash, guides the student to architectural maturity.

---

## 2. Mandatory Visual Elements

1. **Interactive Software Screens (SVGs):**
   • **IDE Screen Mockups:** Window buttons, active file tab, syntax highlighted code, line numbers.
   • **API Client Workbenches:** HTTP verb badges, URL input, headers and body panes, response status badges, latency badges, and formatted JSON.
   • **Terminal Windows:** Interactive shell prompt with selectable commands and stdout/stderr streams.
2. **Directional Pointer Callouts:** Speech and thought clouds feature visual pointer badges (`👉 Points to server.listen(3000)`) directing the reader's eye to the exact code token or JSON key being discussed.
3. **Madhubani Heritage Setting:** Characters pair program at teak wood desks with laptops inside heritage stone halls (Dravidian pillars, Nagara jalis, chaitya arches).

---

## 3. The Quad Pedagogical Chunking Pattern

Every code block or wire exchange must be paired with the 4-part breakdown card:
1. **Explicit Input:** The exact command, HTTP request line, payload body, or code written.
2. **Under the Hood (Wire/Engine Mechanics):** What the runtime, operating system, or network did (e.g. TCP stream buffering, stack memory allocation).
3. **Deterministic Output:** The live response badge, status code, JSON body, or terminal stream received.
4. **Senior Savior (Common Trap & Fix):** The real-world production gotcha avoided (e.g. forgetting middleware, unhandled null dereferences).

---

## 4. Technical Verification Rules

• Every code snippet must be runnable and backed by automated test suites in the repository (`npm test`, pytest, etc.).
• Mock servers must simulate both happy path responses and realistic error cascades (400, 404, 500).
• Negative branches and database teardowns are mandatory: never leave test data stranded in database tables.
