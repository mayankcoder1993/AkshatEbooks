# MISSION MAP: Zero to Agentic API Testing

System: Stage 3 output. Chapter ROI test applied to every chapter per H02.
Story Mining applied per framework/unified/14-story-mining-protocol.md.
Guardrail 3: CONFIRMED (guardrail-03-confirmed.md).

---

## Mission Names (victories over the Enemy, not topic labels)

MISSION 1: Reading the Wire (Seeing What the Machine Actually Does) — Chapters 1 to 3
MISSION 2: Building the Watchdog (Automating What Used to Break Silently) — Chapters 4 to 8
MISSION 3: Guarding the Gate (Making Machines Responsible for Quality) — Chapters 9 to 13

Rejected names (recorded for audit trail): "Mission 1: API Fundamentals" (topic label), "Mission 2: Intermediate Testing" (topic label), "Mission 3: Advanced Topics" (topic label).

---

## Chapter Assignments and ROI Statements

### MISSION 1: Reading the Wire

Chapter 1: Understanding APIs from First Principles
  ROI: After this chapter, the reader can distinguish an in process library call from a network API call, assemble a minimal Express server on port 3000, and execute all five CRUD operations in the API Testing Workbench without copying from a template.
  Type tags: A (cafeteria crisis, CRUD demo), B (Fowler's First Law reference anchor, REST versus SOAP versus GraphQL comparison), C (predict the browser bar failure).

Chapter 2: The War Room Crisis: Manual Wire Auditing and Status Codes
  ROI: After this chapter, the reader can reproduce an unhandled 500, diagnose missing versus empty versus whitespace parameters, install a fail fast guard, and classify any 1xx to 5xx status family on sight.
  Type tags: A (orientation day freeze, frontend versus backend standoff), C (which parameter state caused this?), B (Healthcare.gov retrospective anchor).

Chapter 3: The Automated Watchdog: Workbench and Assertions
  ROI: After this chapter, the reader can write an original pm.test with a Chai matcher, prove it fails against a broken server before trusting it green, and run a collection of 4 requests with 10 assertions from the runner.
  Type tags: A (manual clicking fatigue named as the enemy), C (red before green prediction), B (Knight Capital anchor).

### MISSION 2: Building the Watchdog

Chapter 4: The Library Vault: Manual Testing the College Library API
  ROI: After this chapter, the reader can execute the full library CRUD lifecycle including composite key creation (ISBN plus aisle), duplicate rejection contracts, and clean teardown.
  Type tags: A (500 book shipment arrives, three tab copy paste fatigue), C (predict the duplicate response contract), B (UK Passport Agency anchor).

Chapter 5: The Assertion Shield: Writing JavaScript Assertions and the pm Object
  ROI: After this chapter, the reader can build triple layer assertions (status, header with latency bound, deep payload), validate a schema with Ajv, and detect and fix a silent false positive.
  Type tags: A (the humbling: his green test lies), C (is this test real? cover and decide), B (Msg versus msg casing disparity reference table).

Chapter 6: The Scope Ladder: Managing Variables Across the Five Scopes
  ROI: After this chapter, the reader can explain all five variable scopes with precedence, switch environments with base_url, generate dynamic unique IDs in pre request scripts, and justify teardown with collision math.
  Type tags: A (environment switch nearly hits production), C (Birthday Paradox prediction: how many runs until a collision?), B (NIST 800-90A anchor, scope precedence table).

Chapter 7: The Chaining Pipeline: Request Chaining and Complex JSON
  ROI: After this chapter, the reader can chain three requests end to end by extracting data.ID into a collection variable, and traverse nested JSON trees with find, filter, map, and reduce to audit a department budget.
  Type tags: A (Akshay still copying IDs by hand; Sameer makes the pipeline autonomous), C (which link breaks first?), B (nested JSON traversal reference).

Chapter 8: The Data Ingestion Engine: Data Driven Testing with CSV
  ROI: After this chapter, the reader can bind a CSV to the Collection Runner with pm.iterationData, bulk execute 500 records with per iteration assertions, and verify clean teardown after every row.
  Type tags: A (Meera returns; the 500 book shipment runs in seconds), C (what happens to row 217 if teardown fails?), B (CSV column contract reference).
  Milestone: MISSION 2 ACCOMPLISHED.

### MISSION 3: Guarding the Gate

Chapter 9: The Resilience Gauntlet: Advanced Error Handling and Recovery
  ROI: After this chapter, the reader can design a negative chaos matrix across 400, 401, 404, 429, and 500, survive non JSON crash responses with try catch parsing, and write self healing teardown retries.
  Type tags: A (Sameer's challenge: test how gracefully systems fail), C (pick the failure mode), B (chaos matrix table).

Chapter 10: The Phantom Server: Mock Servers and GraphQL
  ROI: After this chapter, the reader can stand up a contract first mock server to unblock a frontend team, and compare GraphQL versus REST field selection on one endpoint.
  Type tags: A (Vikram blocked for two months), C (which fields does the client actually need?), B (GraphQL versus REST comparison).

Chapter 11: The Keycard Protocol: OAuth 2.0 Security and Tokens
  ROI: After this chapter, the reader can implement client credentials and authorization code with PKCE token flows, and inject Bearer tokens dynamically into downstream calls.
  Type tags: A (campus security mandates tokens; Akshay nearly hardcodes a password), C (where should the secret live?), B (grant type comparison reference, hotel keycard analogy RESERVED for this chapter).

Chapter 12: The Ancient Scroll: SOAP Web Services and XML Parsing
  ROI: After this chapter, the reader can construct SOAP XML request bodies, parse responses with xml2js in the tests tab, and handle envelope quirks and trailing whitespace.
  Type tags: A (the 20 year old finance mainframe), C (JSON or XML, what does this service speak?), B (SOAP versus REST envelope reference).

Chapter 13: The Continuous Quality Gate: Headless Runs and CI/CD Pipelines
  ROI: After this chapter, the reader can export collection and environment to version control, run newman run with --bail, interpret exit codes 0 versus 1, and embed the gate in GitHub Actions and Jenkins.
  Type tags: A (graduation day; the gate decides a release), C (exit code 0 or 1, what do you do?), B (pipeline stage reference).
  Milestone: MISSION 3 ACCOMPLISHED. Final triumph: Akshay crowned Lead API Quality Architect.

---

## Golden Chapter Rule audit

Every chapter above passes the Chapter ROI Test with a specific, observable action. No chapter exists to "cover" or "build foundation" language. Topics from CHAPTER_TOPIC_POOL.md not assigned to a chapter were either excluded with reason (gRPC, performance, UI) or merged (status code families folded into Chapter 2 rather than its own chapter, because ROI alone did not justify a chapter).
