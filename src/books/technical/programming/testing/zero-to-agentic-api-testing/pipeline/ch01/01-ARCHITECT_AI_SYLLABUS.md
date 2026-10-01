# Chapter 01: Architect AI Syllabus & Technical Specification

## Book & Chapter Identity
- **Book:** Zero to Agentic API Testing
- **Chapter 01:** Understanding APIs from First Principles
- **Badge:** CHAPTER 01 : FOUNDATIONS
- **Mission:** Mission 1 : Phase 1 of 3 : The Wire and Local Admit Card Server

## Core Pedagogical Objectives
1. Define what an Application Programming Interface does on the physical network wire (contract of permission).
2. Distinguish presentation glass (browser UI choking on heavy CSS, fonts, and images) from raw data wire payloads.
3. Build a fully runnable Express server from scratch on port 3000 issuing Admit Cards (`/api/v1/admitcards`).
4. Avoid the critical `req.body is undefined` byte stream trap by mounting `app.use(express.json())` middleware.
5. Master the 5 essential CRUD verbs (POST, GET, PUT, PATCH, DELETE).
6. Understand the Brass Thali rule: PUT replaces the entire resource plate, while PATCH updates a single field.
7. Compare REST, SOAP, and GraphQL using identical Admit Card queries on `APX102`.

## 18-Step Curriculum Matrix
1. What is an API really? (Contract of permission)
2. Presentation Glass vs Raw Network Wire (Browser bloat vs 14ms JSON)
3. The Restaurant Waiter Analogy (Client table, Waiter API, Kitchen Database)
4. Courier Architecture (Carrying data without cooking or eating)
5. Assembling server.js on Port 3000 (Minimal Express server)
6. The TCP Byte Stream Phenomenon (Raw data chunks on the wire)
7. The req.body is undefined Runtime Trap
8. Express JSON Middleware Unboxing (`app.use(express.json())`)
9. GET: Safe Idempotent Retrieval (`GET /api/v1/admitcards/APX102`)
10. POST: Non-idempotent Resource Creation (`POST /api/v1/admitcards`)
11. Status 201 Created vs 200 OK
12. The Brass Thali Trap: PUT Total Replacement
13. PATCH: Surgical Delta Mutation
14. DELETE: Resource Teardown and Cleanup
15. REST Architecture Principles (Uniform interface, stateless, resource URIs)
16. SOAP 1.2 XML Envelopes (Strict contracts and typing)
17. GraphQL Query Flexibility (Exact field selection)
18. Transition from Page Viewer to API Thinker
