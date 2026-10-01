# Architect AI Mission Brief: Chapter 03

> **Instruction for Architect AI:**
> Read this complete brief to understand what has transpired across Chapters 1 & 2, then generate the full technical architecture, syllabus matrix, gotcha checklist, and 4-scene technical blueprint for **Chapter 03: Automating the Wire Check: API Testing Workbench and Assertions**. Save or output your analysis into `01-ARCHITECT_AI_SYLLABUS.md` in this directory.

---

## 1. What Happened So Far (Narrative & Technical Context)

### Chapter 01: Foundations & Local Server (Port 3000)
- **Incident:** Student Akshay sprints across the quad 20 minutes before his Final Board Examination. A water bottle leak in his bag dissolves the blue ink over his Exam Hall and Seat Number.
- **Crisis:** Twelve thousand students crash `portal.apex.edu` into an infinite loading spinner and a 504 Gateway Timeout.
- **Rescue:** Principal Systems Architect Sameer bypasses the browser "decorative glass" using a bare black terminal, executing `GET /api/v1/admitcards/APX102` in **14 milliseconds** to extract Hall 302, Seat B-14.
- **Post-Exam Lab:** Akshay pair-programs with Sameer on port 3000. They build an Express Admit Card server, encounter the `req.body is undefined` byte stream bug, fix it with `app.use(express.json())`, map the 5 CRUD verbs, unpack the Brass Thali PUT vs. PATCH trap, and compare REST vs. SOAP vs. GraphQL.
- **Shift:** Akshay transitions from "Page Viewer" to "API Thinker".

### Chapter 02: War Room Incident & Manual Wire Triage
- **Incident:** At 08:14 PM, hours after the exam, Akshay joins Sameer at the campus Transit Operations desk. The campus transit shuttle locator crashes during the evening rush.
- **Crisis:** When students open the locator without choosing a route, the server crashes with HTTP 500. Teams point fingers between mobile frontend and backend.
- **Root Cause:** In Express, an omitted query parameter evaluates to `undefined`, not an empty string. Calling `req.query.name.trim()` throws an uncaught `TypeError: Cannot read properties of undefined (reading 'trim')`, which Express surfaces as a 500 error.
- **Remediation:** Akshay and Sameer install a fail-fast defensive guard returning `400 Bad Request` with an actionable JSON message:
  ```javascript
  if (!name || name.trim() === '') {
    return res.status(400).json({
      error: 'Bad Request',
      message: "Query parameter 'name' is required and cannot be empty"
    });
  }
  ```
- **Dual Wire Verification:** They verify both the negative `400 Bad Request` guard in 4ms and the positive `200 OK` route coordinates in 12ms. They catalog the 5 HTTP status code families (1xx to 5xx) and unmask the **Polite 200 Trap**.
- **Cliffhanger:** Sameer shows Akshay a test report glowing 100% green with ten passing badges, but warns him: *"One of these green checks is a complete lie. The test passes without testing anything."*

---

## 2. Your Ask: Chapter 03 Architectural Blueprint

You must formulate the complete technical curriculum and scene requirements for **Chapter 03**:

### Chapter Identity:
- **Title:** Automating the Wire Check: API Testing Workbench and Assertions
- **Short Title:** Automating the Wire Check
- **Badge:** CHAPTER 03 · AUTOMATED WATCHDOG
- **Mission:** Mission 1 · Phase 3 of 3: Automating the Wire Verification

### Core Pedagogical & Technical Requirements to Plan:
1. **The Testing Pyramid:**
   - Explain why concentrating automated tests at the API service layer provides the optimal balance of machine execution speed, deterministic contracts, and complete coverage compared to brittle UI clicking.
2. **"The Green Lie" Anti-Pattern:**
   - How an empty assertion block or missing test condition creates a false sense of security (a test that always passes because it never tests anything).
3. **The Chai BDD Assertion Sandbox:**
   - Execution lifecycle: Request -> Response Received -> Test Script Executes in JavaScript Sandbox.
   - Anatomy of `pm.test("Status is 200", function () { pm.response.to.have.status(200); })`.
   - The `pm.expect()` syntax for status code, response time, and JSON body keys.
4. **"Red Before Green" Testing Discipline:**
   - Why a professional test architect must force an assertion to fail against a broken wire before trusting it green.
5. **Dual Assertions (Header + Body):**
   - Combining status code validation (`pm.response.to.have.status(200)`) with body content validation (`pm.expect(jsonData.route).to.eql("north_loop")`).
6. **The Collection Runner Watchdog:**
   - Batch collection execution: running all 4 campus transit requests with 10 assertions in milliseconds.
   - Establishing automated quality gates so engineers never have to repeat manual eyeball audits.

---

## 3. Required Output from Architect AI

Please produce `01-ARCHITECT_AI_SYLLABUS.md` containing:
1. **Curriculum Roadmap (18-step pedagogical matrix)** for Chapter 3.
2. **5-Pillar Gotcha Checklist** (the false green trap, missing return/await, response time jitter, type mismatch in matchers, unhandled exception in test script).
3. **4-Scene Structural Specification** to hand off to Story AI:
   - Scene 1: 06:00 PM: The Green Lie (discovering the fake green test in the quiet research lab).
   - Scene 2: 06:15 PM: The Chai Assertion Sandbox (dissecting `pm.test` and Chai BDD matchers).
   - Scene 3: 06:30 PM: Red Before Green Discipline (forcing assertion failure against bad wire).
   - Scene 4: 06:45 PM: The Collection Runner Watchdog (batch regression run protecting campus endpoints).
4. **Exact Code & Workbench Definitions**:
   - The failing assertion code and corrected dual assertion code.
   - Collection Runner batch results payload.
