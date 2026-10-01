# Feature Specification: Comic Storytelling and Pedagogical Authoring Pipeline (Chapters 1 to 3)

**Feature ID:** 002-chapter-storyline-overhaul
**Status:** SPECIFIED
**Created:** 2026-10-01
**Authors:** Akshat Sinha, Antigravity Agent

---

## 1. User Story and Pedagogical Motivation

As an engineering student or newcomer to software engineering,
I want to learn APIs and API testing through an emotionally resonant graphic comic narrative grounded in a high stakes campus crisis,
So that:
1. I understand what an Application Programming Interface actually does on the physical network wire without relying on dry theory.
2. I witness firsthand why heavy presentation screens fail under peak load while lightweight API data requests succeed in milliseconds.
3. I build an API from scratch on port 3000, understand why incoming JSON arrives as an unparsed byte stream causing `req.body is undefined`, and install the `express.json()` middleware fix.
4. I master all five core HTTP methods (POST, GET, PUT, PATCH, DELETE) mapped to real lifecycle actions, avoiding catastrophic pitfalls like the Brass Thali complete resource replacement trap.
5. I understand architectural trade-offs by comparing REST, SOAP, and GraphQL using one identical real query.
6. I develop an API First investigative mindset, learning to inspect network traffic directly rather than relying on browser displays.

---

## 2. Character Roles and Mission Progression

### Mission 1 (Chapter 1)
- **Akshay (Student Engineer):** A final year engineering student at Apex Engineering College. Focused, determined, and relatable. Running across campus late for his Final Semester Board Examination.
- **Sameer (Principal Systems Architect and Systems Mentor):** Calm, experienced, and observant. Carries a stainless steel tumbler of hot cutting chai. Understands distributed systems from first principles and teaches by revealing what lives beneath the surface.
- **Character Evolution Policy:** Character roles are locked per mission. For Mission 1, Akshay is an engineering student. In subsequent missions, character roles evolve to match industry war rooms, bug triage, and enterprise test automation.

---

## 3. Narrative Arc for Chapter 1: The Admit Card Meltdown

### Scene 1: The Admit Card Meltdown in the Student Hall
- **Setting:** Apex Engineering College Student Hall | 8:30 AM
- **Crisis:** Akshay runs late across the quad. A water bottle leak inside his bag smudges and dissolves the blue ink over his printed Admit Card specifically obliterating his Exam Hall and Seat Number.
- **Escalation:** Gates lock in 20 minutes; without seat details he faces an automatic year back. He tries to re-download the PDF on his phone from `portal.apex.edu`, but 12,000 panicking students have collapsed the portal into an infinite white screen loading spinner and 504 Gateway Timeout.

### Scene 2: The Wire Awakening and Terminal Rescue
- **Setting:** College Corridor | 8:38 AM
- **Intervention:** Sameer calmly approaches sipping hot cutting chai. He points out that the webpage is decorative glass choking on heavy CSS, fonts, banners, and logos.
- **The Rescue:** Sameer opens a bare black terminal on his laptop and fires a raw HTTP request directly to the backend:
  `GET /api/v1/admitcards/APX102`
- **Result:** Pure JSON returns in 14 milliseconds showing Hall 302, Seat B-14. Akshay sprints to the hall in time.

### Scene 3: The Restaurant and Exam Courier Model
- **Setting:** Post Exam Engineering Desk | 12:15 PM (No premature war room in Chapter 1)
- **Core Concept:** Akshay returns eager to understand how 14ms pure data bypassed the website crash.
- **Analogy:** Customer (Client) sitting at the table, Kitchen (Server) cooking the food, and Waiter (API) carrying requests and delivering responses without cooking or eating.
- **Domain Mapping:** Examination Cell is the Kitchen, Admit Card is the dish, Exam Courier API carries the structured payload.

### Scene 4: Port 3000 and the Undefined Body Bug
- **Setting:** Engineering Lab Workstation | 01:00 PM
- **Action:** Akshay and Sameer pair program an Admit Card service from scratch on port 3000 using Node.js and Express.
- **The Bug:** Writing a POST route to receive registrations, Akshay logs `req.body` and encounters `undefined`.
- **The Mechanism:** Network data travels as a stream of raw bytes. Express does not automatically parse JSON payloads into JavaScript objects without middleware.
- **The Fix:** Mounting `app.use(express.json())` intercepts the byte stream and populates `req.body`.
- **CRUD Operations:** Mapping POST (Issue), GET (View), PUT (Reissue/Replace), PATCH (Change Seat), DELETE (Revoke).
- **The Brass Thali Trap:** PUT replaces the entire resource, wiping omitted fields; PATCH modifies only the specified attribute.

### Scene 5: Architectural Showdown: REST vs SOAP vs GraphQL
- **Setting:** Whiteboard and Workbench | 02:15 PM
- **Comparison:** Asking for the exact same Admit Card (`APX102` with hallNumber and seatNumber):
  - **REST:** Resource based (`GET /api/v1/admitcards/APX102`), returns clean JSON plate.
  - **SOAP:** Strict XML Envelope with Header and Body, formal contract for banking and enterprise.
  - **GraphQL:** Precise field selection query asking only for `hallNumber` and `seatNumber`, eliminating over-fetching.

### Scene 6: Victory and Cliffhanger for Chapter 2
- **Setting:** Engineering Bay | 03:00 PM
- **Mindset Shift:** Akshay stops asking *"Why is this page not loading?"* and starts asking *"Which API is failing to deliver this data?"*
- **DevTools Awakening:** Learning to open Browser DevTools Network tab, filter Fetch/XHR, and inspect wire payloads.
- **Cliffhanger:** Akshay prepares to test APIs with intention using the API Testing Workbench, setting up Chapter 2.

---

## 4. Comic Visual Standards and Speech Bubbles

1. **Embedded Speech Bubbles:** Dialogues are embedded directly inside or above the SVG artwork with pointers toward the speaking character.
2. **Visual Palette:** Clean, high contrast, pure white `#FFFFFF` background, print safe colors with zero gradients or dark mode dependencies.
3. **Character Poses:** Expressive poses (Akshay running with dripping bag, Akshay in distress looking at terminal error, Sameer with chai tumbler, triumphant green terminal).
4. **Code and Tool Workbenches:** Dedicated widescreen visual frames showing realistic terminal commands, status codes, response headers, and JSON bodies.

---

## 5. Technical Authoring MCP Server

To guarantee that the authoring pipeline is strictly followed without skipping steps or hallucinating, a dedicated local MCP server (`comic-authoring-mcp`) will provide:
1. `pipeline_get_stage`: Retrieves current stage requirements and checklists.
2. `pipeline_validate_story`: Validates chapter storyboards against the canonical character, incident, and gotcha requirements.
3. `pipeline_audit_rule19`: Enforces zero hyphens or dashes in all chapter and section headings.
4. `pipeline_generate_svg_panel`: Validates and produces print-safe comic SVGs with embedded character speech bubbles.
5. `pipeline_verify_chapter`: Executes tests (`npm test`, `npm run build`) and confirms structural integrity across Web, Book, PDF, and DOCX formats.