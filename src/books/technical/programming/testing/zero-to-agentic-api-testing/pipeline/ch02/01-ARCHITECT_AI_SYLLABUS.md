# Chapter 02: Architect AI Syllabus & Technical Specification

## Book & Chapter Identity
- **Book:** Zero to Agentic API Testing
- **Chapter 02:** Investigating the Incident: Manual Wire Auditing and Status Codes
- **Badge:** CHAPTER 02 · WAR ROOM INVESTIGATION
- **Mission:** Mission 1 · Phase 2 of 3: The Manual Wire Investigation

## Core Pedagogical Objectives
1. Investigate the live campus transit shuttle tracking service crashing with HTTP 500.
2. Distinguish the three variants of data absence: omitted parameter (`undefined`), empty value (`""`), and whitespace (`"%20"`).
3. Reproduce unhandled runtime crashes via direct `curl` commands under laboratory conditions.
4. Understand that an HTTP 500 error is an uncaught runtime exception leaking past handlers (`TypeError: Cannot read properties of undefined`).
5. Install a defensive input validation guard returning a clean, actionable `400 Bad Request` contract.
6. Enforce mandatory **Dual Wire Verification**: proving the negative 400 guard and the positive 200 contract side by side.
7. Master the universal grammar of the 5 HTTP status code families (1xx to 5xx).
8. Diagnose and avoid the **Polite 200 Trap** (semantic dishonesty returning HTTP 200 with error payloads).

## Technical Gotchas & Parameters
- Target Service: Shuttle Route Locator on Port 5050
- Failing Route: `GET /v1/shuttle/route` (name parameter omitted -> `req.query.name` is undefined)
- Defensive Guard:
  ```javascript
  if (!name || name.trim() === '') {
    return res.status(400).json({
      error: 'Bad Request',
      message: "Query parameter 'name' is required and cannot be empty"
    });
  }
  ```
- Dual Contracts:
  - Guard: `400 Bad Request` in 4ms
  - Contract: `200 OK` with `{ route, status, stops, coordinates: { latitude, longitude } }` in 12ms
