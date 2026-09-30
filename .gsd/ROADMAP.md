# ROADMAP.md: Zero to Agentic API Testing & Publishing Platform

## Milestone 1: Dynamic Admin Key Management & Security Architecture (COMPLETED)
- [x] Phase 1.1: Backend AES-256 encrypted key persistence (config/runtime-vault.json in .gitignore)
- [x] Phase 1.2: Backend API Proxy (/api/admin/ai-config, /api/admin/ai-status, /api/ai/generate)
- [x] Phase 1.3: Dynamic Admin UI modal in reader with password auth and AI toggle
- [x] Phase 1.4: Empirical validation & zero-leak git audit

## Milestone 2: Chapter 1 Comic Storyline & Pedagogical Overhaul (ACTIVE)
- [ ] Phase 2.1: Scene 1: 10:00 AM Results Meltdown (F5 frenzy vs. 18ms curl, Akshay's vow to build the college app)
- [ ] Phase 2.2: Scene 2: Heterogeneous tech stacks (iOS/Swift, Android/Kotlin, Web/React vs. Java/Spring Boot & Postgres)
- [ ] Phase 2.3: Scene 3: Line-by-line Express server deconstruction (TCP chunks, missing express.json crash)
- [ ] Phase 2.4: Scene 4: Real campus CRUD scenarios (re-evaluations, scorecards, Brass Thali PUT vs PATCH, course drops)
- [ ] Phase 2.5: Scene 5: War room cliffhanger (8:14 PM transit GPS 500 error) & enterprise reference links

## Milestone 3: Chapter 2 Transit War Room Investigation
- [ ] Phase 3.1: 500 crash reproduction with missing destination query param
- [ ] Phase 3.2: API Testing Workbench inspection (request headers, status codes, query strings)
- [ ] Phase 3.3: Server guard remediation (returning 400 Bad Request instead of unhandled 500)

## Milestone 4: Chapter 3 Automated Watchdog Test Suites
- [ ] Phase 4.1: Manual testing vs. Automated test runner economics
- [ ] Phase 4.2: Writing assertions (status code, schema, response time < 100ms)
- [ ] Phase 4.3: Newman CLI runner in CI/CD pipeline