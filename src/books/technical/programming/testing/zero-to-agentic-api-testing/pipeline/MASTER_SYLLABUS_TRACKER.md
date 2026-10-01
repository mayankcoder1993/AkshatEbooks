# Master Syllabus Coverage & Governance Tracker

> **Guardian:** Antigravity (Engineer AI)
> **Mandate:** Guarantee 100% curriculum coverage across all 13 chapters. If the Story Planner objects to a technical topic in a chapter or finds it awkward for the narrative flow, Antigravity records the objection, reallocates the topic to a subsequent chapter or dedicated lab workbench, and verifies it in tests and deliverables. No syllabus item is ever silently dropped.

---

## Tracking Status Codes
- `PLANNED`: Assigned by Architect AI to a chapter.
- `IN_STORY`: Integrated into dramatic comic scene dialogues and wire lesson callouts.
- `IN_WORKBENCH`: Integrated into dedicated programming workbench / lab blocks below comic panels.
- `OBJECTED_BY_STORY`: Flagged by Story Planner as unsuitable for narrative; queued for reallocation.
- `REALLOCATED`: Successfully moved to another chapter or technical deep dive.
- `VERIFIED`: Built, tested, and validated in all four deliverables (Web, Book/PDF, DOCX, Single HTML).

---

## 13-Chapter Master Allocation Matrix

| Chapter | Title & Scope | Primary Topics | Story Scene Status | Workbench Status | Overall Coverage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Ch 01** | Understanding APIs from First Principles | Wire vs Glass, Restaurant Analogy, Express Server on Port 3000, `req.body` JSON trap, 5 CRUD Verbs, Brass Thali (PUT vs PATCH), REST vs SOAP vs GraphQL | Pending Architect & Story Pass | Ready (`server.js`) | In Progress |
| **Ch 02** | Investigating the Incident: Manual Wire Auditing and HTTP Status Codes | Transit Outage Triage, Chrome DevTools Network Tab, 5 Status Families (1xx-5xx), Header Inspection, HTTPBin verification | Pending Architect & Story Pass | Ready (`wire-auditor`) | In Progress |
| **Ch 03** | Automating the Wire Check: API Testing Workbench and Assertions | Postman Desktop Setup, Workspaces, Collections, Environments, First automated `pm.test` status assertion | Planned | Planned | Scheduled |
| **Ch 04** | Manual Testing the College Library API | College Library REST endpoints, POST AddBook, GET GetBook, DELETE DeleteBook, Copy-paste pain point | Planned | Planned | Scheduled |
| **Ch 05** | Writing JavaScript Assertions and the `pm` Object | Node.js sandbox, Chai assertion library, status/header/body matchers, latency budgets, Ajv JSON schema basics | Planned | Planned | Scheduled |
| **Ch 06** | Managing Variables Across the Five Scopes | Global, Collection, Environment, Data, Local scopes, Scope precedence, dynamic ISBN pre-request generation | Planned | Planned | Scheduled |
| **Ch 07** | Request Chaining and Complex Nested JSON Parsing | Dynamic variable extraction, passing IDs between requests, nested JSON navigation, `filter`/`find`/`map`/`reduce` | Planned | Planned | Scheduled |
| **Ch 08** | Data Driven Testing with External Data Files | Collection Runner, CSV and JSON iteration data, parameterized requests, batch book record ingestion | Planned | Planned | Scheduled |
| **Ch 09** | Advanced Error Handling and Resilience Testing | Negative testing matrix (400, 401, 403, 404, 429, 500), defensive try/catch parsing, self-healing recovery loops | Planned | Planned | Scheduled |
| **Ch 10** | Postman Mock Servers and JSON Schema Contracts | Contract-first testing, JSON Schema draft-07, Ajv validation, hosted mock servers, query parameter simulation | Planned | Planned | Scheduled |
| **Ch 11** | OAuth 2.0 and Modern Token Authentication | Keycard analogy, 4 grant types, Authorization Code handshake, automated token refresh, Bearer token chaining | Planned | Planned | Scheduled |
| **Ch 12** | SOAP WebServices and XML Parsing | REST vs SOAP, XML envelopes, WSDL contracts, POST text/xml, `xml2Json` conversion, payload bracket notation | Planned | Planned | Scheduled |
| **Ch 13** | Headless Test Execution with Newman and CI/CD | Newman CLI, automated collection execution, HTML Extra reporting, Jenkins and GitHub Actions pipeline gating | Planned | Planned | Scheduled |

---

## Log of Story Planner Objections & Syllabus Reallocations

| Date | Topic | Origin Chapter | Story Planner Objection Reason | Reallocated Destination | Resolution Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| *No active objections logged yet. Awaiting Story AI pass on Chapter 01.* | — | — | — | — | — |
