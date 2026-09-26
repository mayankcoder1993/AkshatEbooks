# WORLD BIBLE: Zero to Agentic API Testing

System: framework/unified/04-world-bible-protocol.md (H04)
Created: Stage 3. Updated after every certified chapter. Current state: Chapters 1 to 6 certified.
This is the memory of the book. Storyboards, image prompts, generation, and audit all read it.

---

## SECTION 1: THE WORLD PREMISE (locked at Guardrail 3, never changes)

This story takes place during a single academic year at Apex Institute of Technology, a heritage institution with carved Dravidian stone pillars, brass oil lamps, and a campus wide digital infrastructure that has grown faster than anyone fully understands. It is a world where ancient craftsmanship and modern systems coexist in imperfect harmony, where the brass lamp on Sameer's desk is as real as the server rack behind him, and where the gap between what a system is supposed to do and what it actually does is the central ongoing drama. The tone is mentorship: warm, purposeful, occasionally urgent, but never desperate. The campus is always present as a grounding presence even when the story moves into the urgent territory of failed deployments and cascading errors.

---

## SECTION 2: ESTABLISHED FACTS LOG

Chapter 1 — Certified 2026-09-27:
  LOCATION: Apex Campus cafeteria, lunch rush. Sameer's lab: teak desk centre of room, server rack left wall (4U, amber and green status lights), jali stone screen window right wall, brass lamp at desk right corner, stone floor with geometric inlay.
  PROP: Sameer's chai glass: small brass tumbler, slightly worn, always held in left hand while thinking.
  PROP: Akshay's laptop: white lid with a small scratch on the top left corner (visual continuity only).
  EVENT: Cafeteria database crisis. Orientation week stakes established.
  RULE: In process library call versus network web service distinction (Martin Fowler First Law framing) established and understood by Akshay.
  RULE: Express server assembled on port 3000; express.json() needed for TCP chunk buffering of JSON bodies.
  RULE: The browser address bar can only issue GET: no request bodies, no custom headers.
  SKILL: All five CRUD operations (GET, POST, PUT, PATCH, DELETE) executed in the API Testing Workbench against the textbook inquiry service.
  RULE: REST JSON, SOAP XML, and GraphQL compared on the same textbook inquiry scenario.
  ANALOGY: Restaurant waiter analogy, Used by Sameer in Chapter 1. Status: USED. Never reintroduce as new.
  EVENT: Cliffhanger: orientation day approaching, scaling from 5 hand tested books to 50 real time bus routes.

Chapter 2 — Certified 2026-09-27:
  LOCATION: The war room (transit operations centre monitoring room) introduced as recurring location. Whiteboard present.
  EVENT: 8:14 PM orientation day. Transit screen freeze. Frontend versus backend standoff.
  RULE: Working baseline request uses ?route=campus_loop_north; failing call omits route entirely.
  RULE: Unhandled 500 TypeError crash reproduced: route.trim() called on undefined.
  RULE: Missing (undefined) versus empty string versus whitespace (" ") parameter states are three different failures with three different correct responses.
  RULE: Fail fast guard installed: if (!route || route.trim() === '') return res.status(400). Replay of bad request yields 400 Bad Request; valid route yields 200 OK with coordinates.
  RULE: Status code families 1xx through 5xx established as diagnostic language.
  KNOWLEDGE: Healthcare.gov launch outage case study cited (source stamped in content).
  DECISION: Akshay decides to stop treating green checks as proof. (Arc: Catalyst complete.)

Chapter 3 — Certified 2026-09-27:
  RULE: The workbench has four surfaces: Request Builder, Tests Tab, Response Pane, Test Results.
  RULE: The tests tab runs embedded JavaScript in a sandbox; pm object is the interface.
  RULE: First assertion written with Chai BDD matcher: pm.response.to.have.status(200).
  RULE: Red before green principle established: the test was proven against the unhardened server first (AssertionError: expected 400 but got 500), then against the fixed server.
  RULE: Dual contract automation: 400 negative guard check plus 200 coordinate schema check.
  RULE: Collection runner execution established: 4 requests, 10 assertions, 86 ms baseline.
  KNOWLEDGE: Knight Capital $460M case study cited (SEC sources, source stamped).
  SKILL: Akshay writes an original test without copying. (Arc: Beat 3 First Victory. Overconfidence seeded.)
  RELATIONSHIP: Sameer now observes silently before intervening; Akshay reads this as approval.

Chapter 4 — Certified 2026-09-27:
  LOCATION: Campus library circulation desk introduced (Meera's domain, recurring).
  EVENT: Library catalogue launch; shipment of 500 new textbooks.
  RULE: Three step CRUD lifecycle mapped across campus stacks.
  RULE: AddBook POST uses composite primary key ISBN plus aisle producing ID 9781227.
  RULE: Capitalized Msg contract quirk: response body { "Msg": "successfully added", "ID": "9781227" }.
  RULE: Duplicate key collision rejection: { "msg": "Book already exists" } (lowercase msg on this path).
  RULE: GetBook query by ID (?id=9781227) returns shelf location fields.
  RULE: DeleteBook teardown body { "ID": "9781227" }; clean re-addition verified.
  KNOWLEDGE: UK Passport Agency backlog case study cited (NAO report, source stamped).
  RELATIONSHIP: Meera introduced; she rekeys catalogue rows manually and is openly skeptical that machines should touch her desk.

Chapter 5 — Certified 2026-09-27:
  RULE: Execution lifecycle established: Pre-request script runs before the packet leaves; then the wire; then Tests tab.
  RULE: Triple layer assertion pattern: (1) status 200, (2) Content-Type header plus latency under 1200 ms, (3) deep payload validation.
  RULE: Casing disparity confirmed as a real contract feature: AddBook returns uppercase Msg, DeleteBook returns lowercase msg.
  RULE: Ajv schema validation introduced for required keys and data types.
  EVENT: THE HUMBLING. Akshay's pm.test("Status is 200") stayed green with no matcher against a broken server. Silent false positive made personal. (Arc: Beat 4.)
  DECISION: Akshay adopts the rule: every test must contain at least one matcher that can fail.

Chapter 6 — Certified 2026-09-27:
  RULE: Five variable scopes established with precedence: Local greater than Data greater than Environment greater than Collection greater than Global.
  RULE: Environment switching via {{base_url}}: Local, QA, UAT configurations named.
  RULE: Initial Value (synced to cloud) versus Current Value (local only) security distinction established.
  RULE: Dynamic unique ISBNs generated in Pre-request scripts before dispatch.
  RULE: Birthday Paradox warning quantified: with 4 digit numbers, roughly 50 percent collision probability after 112 runs (NIST 800-90A cited).
  RULE: Automated DeleteBook teardown declared non-negotiable for any suite that creates data.
  EVENT: Environment mix-up near miss: Akshay almost pointed a mutating request at the wrong environment. Caught by {{base_url}} discipline, not by luck.
  SKILL: Akshay explains scope precedence aloud without notes. (Arc: Rebuilding, confidence 6/10.)

---

## SECTION 3: EMOTIONAL ARC TRACKER

After Chapter 1: Curious but uncertain. He understands what an API is and feels the distance to competence. Hopeful, not confident. Confidence 3/10. Belief: "APIs are like websites with buttons." Relationship: impressed, intimidated. Open fear: the terminal.

After Chapter 2: First competence signal. He reproduced the crash and understood the guard, but he was guided through it. Wants independence. Confidence 4/10. Belief updated: responses are diagnostic language, not verdicts. Open fear: being tested in front of Sameer again.

After Chapter 3: Growing confidence, slightly past earned. He wrote a real test. Still defers immediately to Sameer when uncertain, but now rehearses answers before speaking. Confidence 5/10. Overconfidence seeded: "automation is mostly copying patterns." Relationship: comfortable enough to joke.

After Chapter 4: Capable and frustrated. Manual CRUD works but the three tab copy paste fatigue makes him angry at his old method. Automation now looks like relief, not threat. Confidence 5/10. Belief: "I can do this by hand; I should not have to." Open fear: scale (he saw 500 books).

After Chapter 5: Humbled, careful. The silent false positive broke his trust in his own green marks. He now reads every test for what it can fail on. Confidence dips to 4.5/10, then recovers to 5 as the shield pattern lands. Belief: "a test is a claim that must be able to lose."

After Chapter 6: Methodical, alert. He checks scope precedence before sending and treats teardown as moral, not optional. Confidence 6/10. Belief: "environments are promises; variables are secrets." Open fear: doing this at pipeline scale (seeds Mission 3).

Arc position labels: Ch1 BROKEN WORLD, Ch2 CATALYST, Ch3 FIRST VICTORY, Ch4 early Mission 2, Ch5 HUMBLING, Ch6 REBUILDING.

---

## SECTION 4: LOCKED VOCABULARY

WORLD TERMS:
  "Apex Campus": always this full name. Never "the college" or "the university". First use Ch 1.
  "The war room": the transit operations centre monitoring room. Established Ch 2.
  "The library": the Apex Campus digital library catalogue system. Introduced Ch 4. Distinguished from "the library API" (the specific service).
  "The wire": always the network layer, the bytes on the connection. Established Ch 1, reinforced Ch 2. Sameer's philosophical anchor.

MENTOR PHRASES:
  "The wire does not lie." Sameer's signature phrase. First use Ch 1. Maximum once per chapter.
  "Masala chai o'clock": the moment Sameer sits to explain something difficult. Established Ch 2. Maximum once per chapter.
  "Red before green." Established Ch 3. Owned by both characters from then on.

ANALOGY REGISTRY:
  Restaurant waiter: Ch 1, explained in process versus network call. Status: USED. Do not reintroduce as new.
  Hotel keycard: PLANNED Chapter 11, will explain token exchange. Status: RESERVED. Do not use before Ch 11.
  Birthday Paradox: Ch 6, explained ID collision risk. Status: USED. May be referenced obliquely in Ch 8 (CSV bulk IDs) but not re-taught.
  Gatekeeper at the gate: PLANNED Ch 13. Status: RESERVED.

TECHNICAL NAMING CONVENTIONS:
  "API Testing Workbench": the SVG component and any generic reference. Never "the application".
  "Postman": permitted as the product name in prose and code because teaching this specific tool is the book's stated promise (documented H01 trademark exception, recorded in handoff-stage00-to-stage01.md CONSTRAINT 1). Inside generated illustrations the screen reads "API Testing Workbench" (trademark-safe rendering).
  "Newman": the CLI runner, always by name in Ch 13 and terminal workbenches.
  "the server": always the book's Express server on port 3000 unless another port is stated in the workbench.

---

## SECTION 5: VISUAL CONTINUITY SPECIFICATION

RECURRING LOCATIONS:

Sameer's Lab (primary setting):
  Room medium sized, intimate, not corporate. Left wall: black 4U server rack, amber and green status lights in Madhubani dot pattern style. Centre: teak desk with brass fittings, laptop open with warm white screen glow, stack of technical printouts left side. Right wall: jali stone screen window, natural light filtered in geometric patterns. Ceiling: one hanging brass lantern, warm amber glow. Floor: stone with geometric inlay, visible in foreground.

The War Room (Ch 2 onward):
  Transit operations centre. Wall of monitors showing route maps (never modern glass office; carved pillars flank the console). Whiteboard on easel, teak console desk, brass task lamp. Monitors show warm amber data on light backgrounds (light mode only).

Library Circulation Desk (Ch 4 onward):
  Tall teak counter, brass stamp, stacks of catalogue cards, clay water pot on the floor, jali window behind. Meera stands behind the counter; Akshay leans on the visitor side with laptop.

RECURRING PROPS:
  Sameer's chai glass: small brass tumbler, slightly worn, left hand while thinking, on desk when explanation complete. Never panicked grip (Sameer never panics).
  Akshay's laptop: white lid, scratch top left corner of lid, always present with Akshay.
  Spiral notebook: Akshay's, used to write questions before he can voice them.

CHARACTER VISUAL SPECS:
  Sameer: reference sheet assets/character-reference/sameer-v1.jpg. Deep teal kurta, gold collar and cuff embroidery, white dhoti with woven border, calm half smile, sharp almond eyes. Expression range: calm-default, focused-explaining, slight-smile-revelation, rare-serious-when-consequences-are-real. Never surprised or confused.
  Akshay: reference sheet assets/character-reference/akshay-v1.jpg. White cotton kurta, light brown chinos, kolhapuri sandals, laptop scratch. Expression range: confused-frowning, concentrating-squinting, trying-something-hopeful, small-triumph-corner-of-mouth-up, oh-no-wide-eyes. Never completely defeated.
  Meera (temp, recurring): deep green sari with gold border, brass stamp in hand, skeptical eyebrow as her signature expression.

Update rule: add any new recurring visual element here the same week a chapter that introduces it certifies.

---

## SECTION 6: MISSION TONE ENVELOPES (locked at Stage 3)

MISSION 1: Reading the Wire (Chapters 1 to 3)
  Pacing: Slow and exploratory. One core concept per scene. Scenes average 4 to 5 beats. No scene feels rushed.
  Learner register: Confused transitioning to curious. Thought bubbles frequent.
  Mentor approach: Patient, leading questions, full explanations shown step by step.
  Stakes: Personal. Embarrassment, small errors, learning moments.
  Crisis scale: Individual. One broken request, one error message, one screen.
  Dialogue ratio: 70 percent Akshay questions and attempts, 30 percent Sameer answers.
  Visual mood: Warm, welcoming, morning and afternoon light.
  Tone words: curious, warm, tentative, precise, hopeful, unhurried.
  Must NOT appear: enterprise scale crises, Akshay teaching Sameer, CI/CD or pipeline talk beyond a single forward glance.

MISSION 2: Building the Watchdog (Chapters 4 to 8)
  Pacing: Medium. Multiple connected concepts per chapter. Scenes average 5 to 6 beats, some urgency in action beats.
  Learner register: Growing confidence with real setbacks. Fewer thought bubbles, more action beats. Akshay tries things alone now.
  Mentor approach: Challenges Akshay to diagnose before explaining. Sameer lets him fail instructively (Ch 5 humbling happens without rescue).
  Stakes: Team level. The library catalogue serves all students.
  Crisis scale: System. Corrupted catalogue data, 500 rows, whole suites.
  Dialogue ratio: 50 percent Akshay attempting and proposing, 50 percent Sameer refining.
  Visual mood: Busier, more complex screens, afternoon and early evening light.
  Tone words: industrious, escalating, disciplined, collaborative, alert.
  Must NOT appear: Mission 1 level hand holding, Akshay making first day mistakes, full enterprise deployments.

MISSION 3: Guarding the Gate (Chapters 9 to 13)
  Pacing: Fast. Assumes mastery. Scenes average 6 to 7 beats, urgent rhythm in action beats.
  Learner register: Confident in unknown territory. Almost no thought bubbles; mostly action beats and direct dialogue. Akshay is a peer now.
  Mentor approach: Peer level discussion. Sameer admits his own early mistakes (Diwali incident thread may surface here, see Section 7).
  Stakes: Enterprise. The whole team's deployment pipeline.
  Crisis scale: Infrastructure. Pipeline failure blocking release for 20 developers.
  Dialogue ratio: 60 percent Akshay proposing and implementing, 40 percent Sameer validating or redirecting.
  Visual mood: High pressure, late evening and night visible through jali windows, multiple screens, warm lamp light against dark exterior (page backgrounds stay light mode; darkness only appears through windows and in illustration exteriors).
  Tone words: urgent, assured, technical, cinematic, earned.
  Must NOT appear: beginner mistakes, explanation of concepts taught in Missions 1 or 2, Sameer rescuing rather than advising.

---

## SECTION 7: OPEN STORY THREADS

Thread 1: Meera's skepticism about automation.
  Status: ACTIVE. Planted: Chapter 4, Scene 2 (she rekeys rows by hand and says the desk has never needed a machine).
  Handled so far: not referenced in Ch 5 or 6 (correct: she does not appear).
  Planned resolution: Chapter 8, the CSV run succeeds with zero errors while she watches.
  Handling rule before resolution: may appear as background only; do not let her concede early.

Thread 2: 500 book shipment and collision risk at scale.
  Status: ACTIVE. Planted: Chapter 4 (shipment arrives), quantified in Chapter 6 (Birthday Paradox, 112 runs to 50 percent with 4 digit IDs).
  Planned resolution: Chapter 8 must use collision safe ID generation when binding the CSV; the Birthday Paradox may be referenced obliquely but not re-taught.
  Handling rule: any future chapter generating IDs at scale must respect this thread's math.

Thread 3: The wrong environment near miss.
  Status: ACTIVE. Planted: Chapter 6, Scene 3 (mutating request almost pointed at the wrong environment).
  Planned resolution: Chapter 13, where the same discipline appears as pipeline environment variables in the CI gate.
  Handling rule: do not repeat the near miss as a plot device before Ch 13; it matures into competence there.

Thread 4: The Silent Failure as named enemy.
  Status: ACTIVE. Planted: Chapter 3 (Knight Capital framing names the pattern; Akshay's Ch 5 false positive personalizes it).
  Planned resolution: Chapter 13, the gate catches what humans dismissed as flaky.
  Handling rule: the enemy may be named in mentor dialogue from Ch 3 onward, maximum once per chapter.

Thread 5: Sameer's own history (mentor vulnerability).
  Status: DORMANT until Mission 3. No plant exists in Ch 1 to 6 certified content; if a future storyboard plants a brief pause or unfinished sentence, record it here the day that chapter certifies. Planned surface: Ch 11 or 12, with full story permitted only if planted first.

Thread 6: Vikram's blocked reservation frontend.
  Status: PLANNED (not yet planted). Will be planted by Chapter 10's storyboard; registration required at that storyboard's World Bible check.

---

## World Bible Compliance Audit Notes (last run: Chapter 6, Stage 7)

CHECK 1 Established facts: no contradictions found in Ch 6.
CHECK 2 Emotional arc: Ch 6 entry matches REBUILDING position.
CHECK 3 Vocabulary: all terms consistent; "API Testing Workbench" never replaced by generic "the tool".
CHECK 4 Analogies: no reserved analogy used early; no used analogy re-taught.
CHECK 5 Mission tone: Ch 6 within Mission 2 envelope (5 to 6 beats, 50/50 dialogue).
CHECK 6 Threads: Threads 1 to 5 statuses correct; Thread 6 correctly absent until planted.
