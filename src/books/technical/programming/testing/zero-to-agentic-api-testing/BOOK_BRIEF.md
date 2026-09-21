# Book Brief: Zero to Agentic API Testing

## Identity

• Book ID: `zero-to-agentic-api-testing`
• Title: Zero to Agentic API Testing
• Subtitle: The Modern Guide to Testing APIs with Postman, JavaScript and Newman
• Series: Standalone
• Author: Akshat Sinha
• Publisher: Sarva Gyana Koshah Books, a division of The Sinha Family Group
• Domain: `technical`
• Subdomain: `programming/testing`
• Primary profile: `TECHNICAL`
• Status: published

## Reader

Software engineers, QA automation testers, and developers who need to understand, test, and automate APIs from first principles.

No prior API experience is assumed. The reader begins at true Ground Zero: learning what an API is, how clients and servers exchange messages, the restaurant and Skyscanner analogies, live browser testing with open JSON APIs, RESTful CRUD methods, and HTTP status codes, before advancing into the Postman workbench, manual testing of the College Library API, JavaScript test scripting, variable scopes, dynamic chaining, complex nested JSON parsing, data driven testing, advanced error handling, Postman mock servers, JSON Schema contract testing, OAuth 2.0 token security, SOAP WebServices, and headless CI CD execution with Newman.

## Promise and Limits

Readers master end to end API testing: from manual exploratory requests in Postman to automated test scripting, dynamic variable chaining, complex nested JSON parsing, contract testing with JSON Schema, hosted mock servers, data driven execution, and headless CI CD pipeline integration.

### Measurable Outcomes
1. Explain the mechanics of client server architecture, HTTP transactions, and architectural paradigms (REST, SOAP, GraphQL, gRPC).
2. Dissect and assert HTTP transactions (methods, status codes, headers, payloads) with exact wire level precision.
3. Master the Postman workbench: workspaces, collections, environments, pre request scripts, and test scripts.
4. Write robust automated assertions using JavaScript, Chai matchers, and the pm object.
5. Manage state across all 5 variable scopes (Global, Collection, Environment, Data, Local).
6. Implement dynamic request chaining (passing IDs from AddBook to GetBook and DeleteBook).
7. Traverse complex nested JSON payloads and perform array operations using find, filter, map, and mathematical sum reductions.
8. Execute data driven tests using external CSV and JSON data files.
9. Build resilient test suites with negative matrices, defensive try catch parsing, and self healing recovery loops.
10. Validate API contracts with JSON Schema and unblock agile parallel development using Postman Mock Servers and Examples.
11. Automate modern token security with OAuth 2.0 grant types and Bearer token chaining.
12. Test legacy enterprise SOAP WebServices with XML envelopes and xml2Json object conversion.
13. Run collections headlessly using Newman CLI and generate HTML reports in Jenkins and GitHub Actions pipelines.

## The Three Mission Architecture

The entire curriculum follows three progressive, real world engineering missions across 13 units:

### Mission 1: The Global Open Data and Web Wire Audit (Units 1 to 3)
• Unit 1: Understanding APIs from First Principles: One computer talking to another, the pizza delivery and waiter analogy, Skyscanner flight aggregation, frontend to backend decoupling, and inspecting live open JSON endpoints from the United Nations and GitHub directly in your browser.
• Unit 2: REST Architecture and HTTP Methods: The 4 CRUD operations mapped to HTTP verbs (the restaurant bill story), idempotency, the 5 status code families, and live status code verification with HTTPBin (200, 201, 404, 500).
• Unit 3: Setting Up Postman and Workspace Collaboration: Why We Need an API Testing Workbench, Postman and modern alternatives, desktop app installation, workspace scopes, and executing live requests in Postman collections. Mission 1 Accomplished.

### Mission 2: Automating Student and Campus Services at Scale (Units 4 to 8)
• Unit 4: Manual Testing the College Library API: Live endpoints, POST AddBook with composite IDs (ISBN + aisle), GET GetBook with query parameters, POST DeleteBook, and identifying the manual copy paste pain.
• Unit 5: Writing JavaScript Assertions and the pm Object: The Node.js sandbox, writing status, header, and body assertions with pm.test and Chai, latency budgets, and Ajv JSON Schema validation.
• Unit 6: Managing Variables Across the Five Scopes: Global, Collection, Environment, Data, and Local scopes, switching QA and UAT environments dynamically, and Pre request dynamic unique ISBN generation.
• Unit 7: Request Chaining and Complex Nested JSON Parsing: Passing AddBook response IDs dynamically to GetBook and DeleteBook, navigating nested JSON trees, array manipulation with find, filter, map, and calculating mathematical sums across records.
• Unit 8: Data Driven Testing with External Data Files: Driving Collection Runner with external CSV and JSON files to ingest 100+ book records in bulk. Mission 2 Accomplished.

### Mission 3: Enterprise Resilience, Mock Servers, and CI CD Pipelines (Units 9 to 13)
• Unit 9: Advanced Error Handling and Resilience Testing: Negative testing matrix (400, 401, 404, 429, 500), defensive try catch parsing, preventing secret leaks, soft error traps, and self healing recovery loops.
• Unit 10: Postman Mock Servers and JSON Schema Contracts: Contract first design, JSON Schema structure and type validation with tv4 and Ajv, spinning up hosted Mock Servers, configuring Examples with query parameters, and unblocking parallel QA in agile sprints.
• Unit 11: OAuth 2.0 and Modern Token Authentication: Four roles, hotel keycard analogy, the 4 step Authorization Code handshake, automated token exchange scripts, global variable token storage, and Bearer token chaining.
• Unit 12: SOAP WebServices and XML Parsing: REST vs SOAP, XML envelopes and WSDL contracts, POST with text/xml, converting XML responses with xml2Json, and asserting payload data with bracket notation.
• Unit 13: Headless Test Execution with Newman and CI CD: Running collections headlessly with Newman, generating interactive HTML Extra dashboards, and gating automated deployments in Jenkins and GitHub Actions. Mission 3 Accomplished.

## Publication Deliverables

• Interactive Web View: Embedded single page reader.
• Book and PDF View: Fully formatted print ready layout.
• Editable Word Book: Complete DOCX deliverable in `public/books/zero-to-agentic-api-testing/edition-01/`.
• Offline HTML: Single file standalone bundle with zero external network dependencies.

## Companion Materials and Individual Lesson Files

All test collections, environments, and sample data files are organized by lesson in `course-materials/zero-to-agentic-api-testing/` and `public/materials/zero-to-agentic-api-testing/`. When clicked, each link delivers only that specific individual file:

• Master Collection: `Zero-to-Agentic-API-Testing.postman_collection.json`
• Environments: `Campus-Library-QA.postman_environment.json` and `Campus-Library-UAT.postman_environment.json`
• Lesson 01: `lesson-01/un-sdg-goals.json`, `github-octocat.json`, `open-meteo-weather.json`
• Lesson 02: `lesson-02/rest-methods-guide.json`, `httpbin-status-tests.json`
• Lesson 03: `lesson-03/create-post-request.json`, `create-post-response.json`
• Lesson 04: `lesson-04/AddBook-payload.json`, `GetBook-query.txt`, `DeleteBook-payload.json`
• Lesson 05: `lesson-05/chai-assertions.js`, `book-schema.json`
• Lesson 06: `lesson-06/pre-request-unique-isbn.js`, `library-qa-environment.json`
• Lesson 07: `lesson-07/department-audit-response.json`, `advanced-array-assertions.js`
• Lesson 08: `lesson-08/books_data.csv`, `books_data.json`, `ddt-pre-request.js`
• Lesson 09: `lesson-09/defensive-safe-parsing.js`, `self-healing-workflow.js`
• Lesson 10: `lesson-10/contract-schema.json`, `mock-example-science.json`, `mock-example-literature.json`
• Lesson 11: `lesson-11/token-exchange.http`, `capture-bearer-token.js`
• Lesson 12: `lesson-12/soap-number-conversion.xml`, `parse-soap-response.js`
• Lesson 13: `lesson-13/run-newman.sh`, `api-tests-workflow.yml`

