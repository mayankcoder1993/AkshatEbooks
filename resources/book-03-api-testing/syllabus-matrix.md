# Book 3 Syllabus Matrix: Zero to Agentic API Testing

**Book Title:** *Zero to Agentic API Testing: Automated Quality with Postman & Newman*  
**Subtitle:** *The Modern Guide to Testing APIs with Postman, JavaScript, and Newman*  
**Target Repository Path:** `src/books/technical/programming/testing/zero-to-agentic-api-testing/`  
**Current Status in Repo:** 13 Chapters active in edition-01, passed test suite with 47 automated assertions and Newman runs.  
**Deliverable Project:** An enterprise-grade, 47-assertion automated API test suite with dynamic environments, OAuth 2.0 keycard rotation, SOAP XML bridging, Newman headless CLI runners, and GitHub Actions CI/CD gates that protects against silent regressions and wins Akshay his dream job.

---

## 1. Complete 13-Chapter Syllabus Matrix

| Chapter | Title & Subtitle (Rule 19 Compliant) | Core First-Principles Gotchas & Wire Mechanics | Comic Scene, Analogy & Cast Interplay | Hands-on Lab & Interactive Bench |
| :--- | :--- | :--- | :--- | :--- |
| **Ch 01** | **Understanding APIs from First Principles:** The Wire and The Glass | HTTP request and response cycle, TCP byte streams, unparsed bodies (`req.body is undefined`), Express middleware (`express.json()`), the five core CRUD operations. | *The Morning Quad Meltdown:* Akshay's soaked admit card; Sameer's 14ms terminal rescue on Port 3000; the stepwell restaurant waiter analogy. | Port 3000 Express admit-card server with 5 CRUD verb tabs and raw TCP byte stream sieve. |
| **Ch 02** | **Investigating the Incident:** Manual Wire Auditing and HTTP Status Codes | The five status code families (1xx to 5xx), Chrome DevTools Network Tab, reading raw headers, unhandled 500 exceptions, input guards returning 400 Bad Request. | *The Transit War Room:* At 8:14 PM, campus bus tracker crashes in the rain; Palash vibe-codes an unhelpful try-catch patch; Sameer guides Akshay to audit the raw wire. | Campus Shuttle API (`GET /v1/shuttle/route`) with status code triage and query parameter bounds. |
| **Ch 03** | **Automating the Wire Check:** API Testing Workbench and Assertions | Postman runtime sandbox, Chai BDD syntax (`pm.test`, `pm.expect`), Red-Before-Green test design, false positive status 200 traps, dual assertions (status plus body). | *The Reading Room Pact:* Swati insists that manual clicking is not verification; Akshay and Swati build the first automated collection runner watchdog. | Chai BDD test workbench writing dual assertions against course catalogs. |
| **Ch 04** | **Manual Testing the College Library API:** Mapping Endpoints and Constraints | Swagger specifications, idempotency contracts (GET vs POST), resource path parameters vs query strings, unique database constraint violations (`409 Conflict`). | *The Copy Paste Nightmare:* Palash accidentally deletes active library records during manual testing; Akshay catalogs all four routes to prove automation is mandatory. | Library CRUD API (`/v1/books`) testing conflict handling and unique ISBN constraints. |
| **Ch 05** | **Writing JavaScript Assertions and Schema Contracts:** The pm Object | Deep payload validation, Ajv JSON Schema draft-07 verification, data type assertions, regex pattern constraints, latency budgets (`responseTime < 200ms`). | *The Silent Schema Shift:* Sachin's mobile app crashes because the backend renamed a field; Swati introduces strict Ajv schema validation to prevent drift. | JSON Schema validator catching renamed keys and null pointer leaks. |
| **Ch 06** | **Managing Variables Across the Five Scopes:** Taming Dynamic Collisions | The five variable tiers (Global, Collection, Environment, Data, Local), scope precedence rules, variable shadowing traps, dynamic pre-request ISBN generation. | *The Scope Collision Crisis:* Akshay and Shivam run parallel tests that overwrite each other's IDs; Sameer explains the hostel noticeboard vs pocket paper analogy. | Dynamic variable workbench with scope priority debugger and pre-request scripts. |
| **Ch 07** | **Request Chaining and Complex Nested JSON Navigation:** Dynamic State Pipelines | Dynamic variable extraction, token handoffs between requests, nested JSON navigation, JavaScript array methods (`find`, `filter`, `map`, `reduce`), optional chaining. | *The Scholarship Pipeline:* Akshay, Swati, and Sachin automate a multi-step financial aid flow; defensive parsing prevents unhandled TypeError crashes. | Multi-step request chain passing generated auth tokens and calculating budget arrays. |
| **Ch 08** | **Data Driven Testing with External Data Files:** CSV and JSON Suites | Postman Collection Runner, `pm.iterationData`, parameterized request bodies (`{{courseName}}`), batch file ingestion traps, iteration error logging. | *The Midnight Enrollment Rush:* Importing 500 courses; Palash's script chokes on unescaped commas; Akshay and Swati execute a deterministic CSV runner. | Data-driven iteration runner testing 100+ course enrollment edge cases. |
| **Ch 09** | **Advanced Error Handling and Resilience Testing:** The Negative Matrix | Deterministic negative test matrices (400, 401, 403, 404, 429, 500), payload limits (413), rate limiting, sanitizing error contracts to prevent database leaks. | *The Hostile Network Challenge:* Sameer challenges the team to break their own server; Swati builds the negative matrix; Akshay verifies zero stack traces leak. | Negative test matrix runner probing SQL injection strings and oversized payloads. |
| **Ch 10** | **Postman Mock Servers and JSON Schema Contracts:** Unblocking the Frontend | Contract-first development, cloud mock servers, matching algorithms, simulating response latencies and network failure modes, unblocking parallel sprints. | *The Standup Deadlock:* Sachin and Shivam are blocked for three weeks waiting for backend endpoints; Akshay delivers mock servers so the frontend build continues. | Mock server configuration with realistic response delay and schema-driven stubs. |
| **Ch 11** | **OAuth 2.0 and Modern Token Authentication:** Automated Keycard Rotation | Four OAuth roles, Authorization Code grant handshake, Bearer token chaining, pre-request automated token refresh scripts, preventing credential leakage in git. | *The Keycard Analogy:* Sameer explains hotel room keys vs passports; Akshay automates silent token refresh loops in collection pre-request scripts. | OAuth 2.0 token exchange bench refreshing Bearer credentials without manual copy-paste. |
| **Ch 12** | **SOAP WebServices and XML Parsing:** Bridging Legacy Enterprise Systems | REST vs SOAP architecture, WSDL contracts, XML envelope crafting, `SOAPAction` headers, parsing XML to JavaScript objects via `xml2Json`, schema assertions. | *The Treasury Bridge:* Integrating with a 20-year-old state banking portal; Guest Mentor Ashish explains why enterprise money runs on XML; Akshay verifies the wire. | SOAP XML request builder and NumberConversion WSDL response assertion parser. |
| **Ch 13** | **Headless Test Execution with Newman, CI CD and The Job Triumph:** Industry Victory | Newman CLI, headless collection execution, HTML Extra rich visual reports, GitHub Actions CI CD gating, non-zero exit codes blocking defective pull requests. | *The Campus Interview and Job Offer:* Akshay demonstrates his automated 47-assertion suite to industry interviewers; lands his dream SDE job; celebratory chai toast with the team! | Complete Newman CI/CD pipeline blocking pull requests and generating deployment reports. |

---

## 2. The 3-Act Narrative Architecture

```text
┌────────────────────────────────────────────────────────────────────────┐
│               BOOK 3: NARRATIVE & CAREER PROGRESSION                   │
├────────────────────────────────────────────────────────────────────────┤
│  ACT 1: WIRE FOUNDATIONS (Chapters 1 to 3)                             │
│  The 08:30 AM exam admit-card disaster on Port 3000.                   │
│  Moving from panicked browser refreshing to 14ms direct wire APIs.     │
│  Sameer establishes the core restaurant waiter analogy and Chai BDD.   │
├────────────────────────────────────────────────────────────────────────┤
│  ACT 2: RESILIENT CLIENTS & CONTRACT TESTING (Chapters 4 to 7)         │
│  Palash's vibe-coded tests fail on silent payload shifts.              │
│  Swati introduces Ajv JSON Schema contracts; Sachin & Shivam's client  │
│  is saved by dynamic request chaining and scope isolation.             │
├────────────────────────────────────────────────────────────────────────┤
│  ACT 3: ENTERPRISE GATES, NEWMAN & THE JOB TRIUMPH (Chapters 8 to 13)  │
│  Data-driven runners, OAuth2 keycard loops, and legacy SOAP envelopes. │
│  Akshay runs Newman in CI/CD, demonstrates 47 green assertions to      │
│  placement interviewers, and receives his dream SDE job offer!         │
└────────────────────────────────────────────────────────────────────────┘
```
