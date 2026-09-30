# Implementation Tasks: Milestone 2 Storyline Overhaul

## Wave 1: Chapter 1 Block Data Overhaul (lesson01.js)
- [ ] T101: Update Scene 1 Storyboard to reflect the 10:00 AM semester results crash, Akshay''s F5 panic, Sameer''s 18ms curl response, and Akshay''s vow to build the college results app.
- [ ] T102: Update Scene 2 Storyboard to cover heterogeneous tech stacks (iOS/Swift, Android/Kotlin, Web/React vs. Java/Spring Boot & Postgres over HTTP/JSON).
- [ ] T103: Update Scene 3 Storyboard to provide line-by-line Express server deconstruction with TCP chunk explanation and the missing express.json() TypeError blooper.
- [ ] T104: Update Scene 4 Storyboard to detail real campus CRUD operations (re-evaluation tickets, scorecards, Brass Thali PUT vs PATCH, course drops).
- [ ] T105: Update Scene 5 Storyboard with the 8:14 PM transit shuttle 500 error cliffhanger and enterprise deep dive links.

## Wave 2: Chapter 2 Transit War Room Investigation (lesson02.js)
- [ ] T106: Update Chapter 2 Storyboard to cover triage of transit telemetry endpoints.
- [ ] T107: Model the 500 Internal Server Error reproduction with missing routeId in the API Testing Workbench.
- [ ] T108: Implement server-side defensive guards returning 400 Bad Request with actionable error payloads.

## Wave 3: Chapter 3 Automated Watchdog Test Suites (lesson03.js)
- [ ] T109: Update Chapter 3 Storyboard comparing 45-minute manual regressions to automated test execution.
- [ ] T110: Add assertion workbenches (status codes, latency < 100ms, JSON schema validation).
- [ ] T111: Integrate headless Newman CLI runner into the curriculum narrative.

## Wave 4: Empirical Pipeline Validation
- [ ] T112: Validate updated book schema with 
pm run prepare:books (0 errors required).
- [ ] T113: Run Newman API test suite 
pm run test:api (0 failures required).