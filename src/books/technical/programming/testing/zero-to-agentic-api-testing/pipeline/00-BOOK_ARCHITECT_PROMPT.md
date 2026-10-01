# Prompt for Architect AI: Overall Curriculum Bifurcation and Technical Blueprint

> **Role for the receiving AI:** You are the **Chief Technical Architect** for the multi-format book *Zero to Agentic API Testing: The Modern Guide to Testing APIs with Postman, JavaScript and Newman*.
> **Author & Imprint:** Akshat Sinha | Sarva Gyana Koshah Books (A division of The Sinha Family Group).

---

## 1. What Happened and What We Are Fixing

In the previous iteration:
1. **Comic Panel Clutter:** Code editors, terminals, and raw JSON were crammed directly into comic illustration scenes. This ruined image generation, degraded text legibility, and produced distorted illustrations.
2. **Missing Separation of Concerns:** Narrative character development became tangled with syntax walkthroughs.
3. **Improper Image Generation:** Chapter 1 and Chapter 2 images lacked consistent character anchors and clear visual storytelling.

### The New Standard Architecture:
- **Comic Scenes:** Pure character interactions, emotional tension, real-world analogies, readable spoken dialogues, and high-level architectural insights between Apprentice Engineer **Akshay** and Principal Architect **Sameer**. **Zero IDEs, terminals, or code snippets inside comic panels.**
- **Programming Workbenches & Lab Blocks:** Mounted immediately **below** the comic arc as dedicated full-width interactive code editors, visualizers, and terminal flows.
- **Workflow & Editorial Roles:**
  1. **Architect AI (You):** Establishes the authoritative technical syllabus, gotchas, code requirements, and overall curriculum bifurcation across all 13 chapters.
  2. **Story Planner / Story AI:** Translates the technical concepts into compelling narrative scenes and dialogues. *The Story Planner has full authority to object if a technical detail feels forced or interrupts the dramatic flow, and may ask for it to be moved.*
  3. **Antigravity (Engineer AI & Syllabus Guardian):** Holds absolute responsibility for **100% syllabus coverage**. If the Story Planner objects to a topic in a specific chapter, Antigravity logs and reallocates that topic to a subsequent chapter or dedicated lab block so nothing is ever lost.
  4. **Image AI:** Produces 16:9 widescreen Madhubani folk art graphic novel panels using strict character anchors and ornate peacock borders.

---

## 2. Your Task (Architect AI Deliverables)

Please review the book scope from `BOOK_BRIEF.md` and provide two structured outputs:

### Part A: Overall Book Syllabus Bifurcation (Chapters 1 to 13)
Provide a complete breakdown of the 13-chapter curriculum:
- **Chapter 01:** Understanding APIs from First Principles (Foundations, Network Wire, Local Express Server)
- **Chapter 02:** Investigating the Incident: Manual Wire Auditing and HTTP Status Codes
- **Chapter 03:** Automating the Wire Check: The Postman Workbench and Initial Assertions
- **Chapter 04:** Manual Testing the College Library API (Endpoints, Query Params, Payload Payloads)
- **Chapter 05:** Writing JavaScript Assertions and the `pm` Object (Chai Matchers, Sandboxing)
- **Chapter 06:** Managing Variables Across the Five Scopes (Global, Collection, Environment, Data, Local)
- **Chapter 07:** Request Chaining and Complex Nested JSON Parsing (Property Transfer, Array Operations)
- **Chapter 08:** Data Driven Testing with External Data Files (CSV/JSON Iteration, Bulk Ingestion)
- **Chapter 09:** Advanced Error Handling and Resilience Testing (Negative Matrix, Defensive Parsing)
- **Chapter 10:** Postman Mock Servers and JSON Schema Contracts (Ajv Validation, Agile Unblocking)
- **Chapter 11:** OAuth 2.0 and Modern Token Authentication (Grant Types, Bearer Chaining)
- **Chapter 12:** SOAP WebServices and XML Parsing (XML Envelopes, WSDL, `xml2Json`)
- **Chapter 13:** Headless Test Execution with Newman and CI/CD (CLI, HTML Extra, Pipeline Gating)

For each chapter, specify:
1. **Core Mission Objective:** What engineering crisis or milestone is conquered.
2. **Key Concepts & Standards:** Exact technical terms, protocols, and mechanisms.
3. **Primary Lab / Workbench:** What runnable code, endpoint, or Postman asset is constructed.
4. **Boundary Definition:** What belongs strictly in this chapter versus what must be deferred to later chapters.

---

### Part B: Chapter 1 Technical Blueprint (Detailed Specification)
Focusing on **Chapter 01: Understanding APIs from First Principles**:
1. **Full Chapter Syllabus (15 to 20 granular topics):**
   - From "What is an API on the physical wire?" to the restaurant waiter analogy, byte streams, Express server, CRUD verbs, status codes, and paradigm comparison (REST vs SOAP vs GraphQL).
2. **Gotcha & Common Traps Checklist:**
   - E.g., `req.body is undefined` (missing JSON body-parser), Brass Thali trap (PUT full replacement vs PATCH delta), Port in use `EADDRINUSE`, etc.
3. **Working Server Code Specification:**
   - Runnable Express `server.js` issuing Admit Cards on port 3000 (`/api/v1/admitcards`).
4. **Proposed Scene Mapping for Story AI (4 to 6 Scenes):**
   - Provide recommended story scene hooks (e.g., Scene 1: The Admit Card Portal Crash at 08:42 AM; Scene 2: The Wire vs The Glass; Scene 3: The Waiter and the Kitchen; Scene 4: Building the Local Server; Scene 5: The Five Verbs).
   - Note which topics can be handled gracefully in narrative dialogue vs which must be passed to the technical workbench below.

---

## 3. Hand-off Convention
Save or format your response as `01-ARCHITECT_AI_SYLLABUS.md` under `pipeline/ch01/` (for Chapter 1) and `pipeline/MASTER_SYLLABUS_BIFURCATION.md` (for the overall 13-chapter map).
