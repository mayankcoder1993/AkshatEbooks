# Multi-AI Book Authoring Pipeline

This directory organizes the structured, multi-AI collaborative authoring workflow for *Zero to Agentic API Testing*.

## AI Roles & Keywords

1. **Architect AI (`01-ARCHITECT_AI_SYLLABUS.md` or `01-ARCHITECT_AI_PROMPT.md`)**:
   - Analyzes the technical domain, prerequisites, gotchas, and learning objectives.
   - Decomposes the chapter into an 18-step syllabus breakdown and 5-pillar gotcha checklist.
   - Formulates the exact technical parameters, code examples, and wire behaviors.

2. **Story AI (`02-STORY_AI_SCRIPT.md`)**:
   - Takes the Architect AI's syllabus and writes the dramatic graphic novel story.
   - Uses the canonical characters: Student/Apprentice **Akshay** and Mentor **Sameer**.
   - Generates 4 to 6 sequential comic scenes with timestamps, scene actions, readable dialogues, and `💡 The Core Wire Lesson`.
   - **Crucial Rule:** Comic scenes focus purely on characters, emotions, and human interaction. No code editors or mock IDEs crammed into the comic panel.

3. **Image AI (`03-IMAGE_AI_PROMPTS.md`)**:
   - Takes the scene descriptions and generates authentic Madhubani (Mithila) folk art graphic novel illustrations.
   - Preserves character anchors: Akshay in white embroidered kurta, Sameer in teal/indigo kurta with wireframe glasses and cutting chai.
   - Enforces 16:9 widescreen layout, Indic contemporary sandstone architecture with jali screens, and the ornate peacock & fish border frame.

4. **Engineer AI (Antigravity / Quality Gate)**:
   - Integrates the approved script and images into `src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/content/lessonXX.js`.
   - Mounts dedicated, full-width programming interfaces (Express code blocks, terminal flows, interactive workbenches) separately below the comic story arc.
   - Runs the local MCP server validation (`pipeline_validate_story`, `pipeline_audit_rule19`, `pipeline_verify_chapter`).
   - Generates all 4 book deliverables: Web View, static Book PDF View, editable DOCX, and offline single-file HTML.

---

## Chapter Directory Map

- `ch01/`: Understanding APIs from First Principles (Foundations & Local Admit Card Server)
- `ch02/`: Investigating the Incident: Manual Wire Auditing and Status Codes (Transit Outage Triage)
- `ch03/`: Automating the Wire Check: API Testing Workbench and Assertions (Automated Watchdog)
- `ch04/`: Manual Testing the College Library API (Library Service & Copy-Paste Pain)
- `ch05/`: Writing JavaScript Assertions and the pm Object (Chai Matchers & Contracts)
- `ch06/`: Managing Variables Across the Five Scopes (Precedence & Dynamic Environments)
- `ch07/`: Request Chaining and Complex Nested JSON Parsing (Property Transfer & Array Pipelines)
- `ch08/`: Data Driven Testing with External Data Files (CSV/JSON Iteration & Console Debugging)
- `ch09/`: Advanced Error Handling and Resilience Testing (Negative Testing & Self-Healing Loops)
- `ch10/`: Postman Mock Servers and JSON Schema Contracts (Agile Parallel QA & Schema Verification)
- `ch11/`: OAuth 2.0 and Modern Token Authentication (Token Handshakes & Bearer Chaining)
- `ch12/`: SOAP WebServices and XML Parsing (XML Envelopes & SOAP 1.2 Parsing)
- `ch13/`: Headless Test Execution with Newman and CI CD (CLI Pipeline & HTML Extra Reports)
