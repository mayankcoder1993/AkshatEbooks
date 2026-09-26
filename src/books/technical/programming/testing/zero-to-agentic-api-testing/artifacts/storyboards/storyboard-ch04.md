# STORYBOARD: Chapter 04

CHAPTER HEADER

Chapter Number: 04
Chapter Title: The Library Vault: Manual Testing the College Library API
Mission: Mission 2: Building the Watchdog (opening chapter)
Chapter ROI: After this chapter, the reader can execute the full library CRUD lifecycle including composite key creation (ISBN plus aisle), duplicate rejection contracts, and clean teardown.
Arc Position: Early Mission 2 (competent, frustrated by manual scale)
Total Scenes: 4
Estimated Pages: 30
Estimated Total Blocks: 44
  scene-panel: 6, dialogue-exchange: 12, workbench-screen: 3, action-beat: 5,
  thought-bubble: 3, quad-card: 3, challenge-prompt: 2, challenge-reveal: 2,
  cliffhanger-panel: 1, trap-alert: 2, narration-box: 2, prose-paragraph: 2,
  reference-anchor: 1
Visual Density Precheck: Visual plus dialogue plus interactive: 77 percent (PASS). Prose: 9 percent (PASS).

CHAPTER OPENING CONDITION

Previous Chapter Cliffhanger: "500 new textbooks arrive by dawn. Someone will add them by hand, one row at a time, unless Akshay's new watchdog eats the job first."
How This Chapter Resolves It: Scene 1 Beat 1 opens at the circulation desk with the manifest and Meera's manual rekeying, directly staging the threat the hook named. The hero arrives offering his new watchdog and meets his first institutional skeptic.
Hero Emotional State at Chapter Open: Proud and slightly cocky (Beat 3 overconfidence from Ch 3 intact), ready to prove automation belongs everywhere.
World Bible Check Confirmation: Established Facts reviewed: YES (Ch 1 to 3). No contradictions: YES. Mission Tone Envelope: Mission 2 loaded (5 to 6 beats per scene, 50/50 dialogue, fewer thought bubbles than Mission 1, team level stakes). Locked Vocabulary: The library debuts (distinguish from the library API).

---

SCENE 1 OF 4: MEERA'S DESK

Scene Type: OPENING
Estimated Panels: 4
Estimated Pages: 7
Content Type Tags: Type A (institutional skepticism), Type C (composite key prediction)
Mission Tone Compliance: Team stakes introduced; Akshay proposes before asking (50/50 dialogue starts here).

SETTING:
  Location: Campus library circulation desk. Tall teak counter, brass stamp, catalogue cards, clay water pot, jali window behind.
  Time: Morning, delivery boxes open.
  Heritage Elements Present: Counter, jali, brass stamp, clay pot (World Bible Section 5 exact).
  Subject Specific Props: Manifest of 500 books, paper catalogue cards, Akshay's laptop.
  Mood: Warm friction.
  Lighting: Morning light through jali.

CHARACTERS PRESENT:
  Meera (temp, recurring): Deep green sari with gold border, brass stamp in hand, skeptical eyebrow.
  Akshay: Laptop open, offering his watchdog like a visiting consultant.
  (Sameer appears in Scene 3; Mission 2 envelope lets Akshay lead.)

SCENE BEATS:
Beat 1 (scene-panel): The manifest in foreground, weight on brass stamp. Meera behind counter, Akshay on visitor side setting down the laptop. 500 books visible in boxes behind.
Beat 2 (dialogue-exchange): Akshay: "Give me the API and I can add all five hundred tonight. Automated, checked, cleaned up after." Meera: "This desk has never needed a machine to know where a book lives." Pointer: her handwritten shelf cards. Teaching payload: stakeholder skepticism as a real force, not an obstacle to laugh at.
Beat 3 (thought-bubble): "She is not wrong to be careful. Last time someone automated her desk, records vanished for a week." (Akshay remembers, which humanizes her position.)
Beat 4 (dialogue-exchange): Meera slides one catalogue card across: "Prove the machine understands a book before you ask it to hold five hundred. One book. Perfectly." Teaching payload: scope the win: one record before many.
Beat 5 (challenge-prompt): "The library keys books by ISBN plus aisle, not ISBN alone. Two copies of the same title on different aisles: (a) collide and reject (b) coexist as two records (c) the server picks one." Reveal in Scene 2.

TEACHING PAYLOAD: Institutional stakes; composite primary key motivation told through a person who owns the data.
EMOTIONAL ARC: Start: confident offer. End: accepted challenge, slightly humbled by her seriousness.
PROSE BUDGET: Allowed prose words: 0.

---

SCENE 2 OF 4: ONE BOOK, PERFECTLY

Scene Type: DEVELOPMENT
Estimated Panels: 5
Estimated Pages: 8
Content Type Tags: Type A (CRUD lifecycle), Type C (reveal + duplicate prediction), Type B (contract table)
Mission Tone Compliance: Methodical Mission 2 pacing; Akshay narrates his own reasoning now (less prompting needed).

SETTING:
  Location: Circulation desk.
  Time: Late morning.
  Heritage Elements Present: Unchanged.
  Subject Specific Props: Workbench tabs for AddBook, GetBook, DeleteBook; the single card.
  Mood: Focused demonstration.
  Lighting: Bright morning.

CHARACTERS PRESENT:
  Akshay: Executing, calling out each step to Meera rather than to Sameer.
  Meera: Watching hands folded, evaluating.

SCENE BEATS:
Beat 1 (scene-panel): Medium shot of the circulation desk. Akshay sits opposite Meera, entering the first single book record into the workbench while she watches with arms folded.
Beat 2 (challenge-reveal): Answer (b): composite key ISBN plus aisle means two copies coexist; (a) confuses with duplicate on the SAME key; (c) is the silent failure shape. Wrong answers analyzed. Story continuation: Akshay: "Two copies, two aisles, two records. The key is the pair."
Beat 3 (action-beat): AddBook POST: body with book_name, isbn, aisle, author. Result: 201 with { "Msg": "successfully added", "ID": "9781227" }. Akshay notes the capital M aloud with a frown of curiosity. Expression: concentrating squinting.
Beat 4 (workbench-screen): Workbench: AddBook request and response. Pointer: composite ID 9781227 (ISBN 9781227 pattern derived from isbn plus aisle), the capitalized Msg contract quirk. PREDICT: what happens if I send the same body twice?
Beat 5 (dialogue-exchange): Akshay sends the duplicate. Response: 409 with { "msg": "Book already exists" } (lowercase msg). Meera: "Different spelling of the same word. My cards never did that." Akshay: "Two endpoints, two dialects. We test both as written, not as we wish." Teaching payload: contracts are per endpoint; casing is part of the contract.
Beat 6 (quad-card):
  Part 1 Input: AddBook POST with ISBN plus aisle.
  Part 2 Under the Hood: server checks the composite key against the store before insert.
  Part 3 Output: 201 with capitalized Msg and ID, or 409 with lowercase msg on duplicate.
  Part 4 Senior Savior: Trap: writing one assertion that assumes both endpoints match. Golden rule: assert the contract each endpoint actually publishes.

TEACHING PAYLOAD: Add lifecycle, composite keys, duplicate rejection, casing quirk as contract.
EMOTIONAL ARC: Start: performing for an audience. End: respected because he noticed the casing without being told.
PROSE BUDGET: Allowed prose words: 40, used: 30.

---

SCENE 3 OF 4: THREE TABS AND A QUEASINESS

Scene Type: DEVELOPMENT
Estimated Panels: 4
Estimated Pages: 7
Content Type Tags: Type A (manual fatigue at scale), Type C (teardown necessity), Type B (UK Passport anchor)
Mission Tone Compliance: Sameer enters briefly for the retrospective anchor; stakes remain team level.

SETTING:
  Location: Circulation desk; Sameer passing with chai, stopping.
  Time: Midday.
  Heritage Elements Present: Unchanged.
  Subject Specific Props: Three workbench tabs open (Add, Get, Delete), Akshay's spiral notebook counting hand movements.
  Mood: Repetition weariness.
  Lighting: Midday.

CHARACTERS PRESENT:
  Akshay: Ten manual cycles in, shoulders tightening.
  Sameer: Doorway, observing the three tab dance, one question ready.
  Meera: Sorting cards, unimpressed by tedium she has endured for years.

SCENE BEATS:
Beat 1 (scene-panel): Close shot of Akshay's hands at the keyboard. His notebook beside the laptop shows nine tally marks per book row as the repetition fatigue sets in. Sameer watches from the doorway.
Beat 2 (workbench-screen): Three tabs side by side: AddBook tab, GetBook tab (?id=9781227), DeleteBook tab (body { "ID": "9781227" }). Pointer: the ID copied by hand between tabs three times per cycle. interaction_mode: EXECUTE but the reader feels the drag.
Beat 3 (action-beat): Akshay runs the cycle manually for row after row: add, verify, delete, reinsert for clean state. Result: spiral fills with tally marks; one paste error flashes (wrong tab) and is caught. Expression: jaw tight.
Beat 4 (dialogue-exchange): Sameer: "Count your hand movements for one row." Akshay: "Copy, paste, send, copy, paste, send, check, copy, paste, send. Nine." Sameer: "Nine times five hundred." Meera, not looking up: "I have done it four thousand times." Teaching payload: fatigue is a defect generator; the human cost makes automation moral.
Beat 5 (quad-card):
  Part 1 Input: AddBook POST, GetBook GET with query ID, DeleteBook POST with payload ID.
  Part 2 Under the Hood: Each request creates, verifies, or removes server state in sequence.
  Part 3 Output: Add produces 201, Get verifies attributes, Delete verifies removal.
  Part 4 Senior Savior: The Idempotent Teardown Pattern. Always clean up created test entities at test conclusion so subsequent test runs execute against clean state.
Beat 6 (reference-anchor): Caller: Sameer: "The UK Passport Agency, 1999. Manual processing under volume does not slow down. It collapses." Reference: National Audit Office report; backlog in passport applications, emergency measures required; source stamped. Story continuation: Sameer taps the manifest. "Every manual step you take tonight is a step the backlog takes with you."
Beat 7 (trap-alert): Trap name: The One More Paste Trap. What happens: at row 300 a pasted ID lands in the wrong tab and a live record is deleted. Why: repetition erodes attention exactly when stakes rise. The fix: automate before the count, not after the error. Real world consequence: one sentence on data loss from a single mispasted delete (source stamped to a public API incident).

TEACHING PAYLOAD: The lifecycle as a loop (add, get, delete, reinsert clean); why scale demands automation.
EMOTIONAL ARC: Start: dutiful. End: angry at the process, not the job.
PROSE BUDGET: Allowed prose words: 40, used: 36.

---

SCENE 4 OF 4: CLEAN HANDS

Scene Type: RESOLUTION
Estimated Panels: 4
Estimated Pages: 6
Content Type Tags: Type A (teardown proof to Meera), Type C (what remains after delete?)
Mission Tone Compliance: Mission 2 lesson one closed; measured win, not triumphal.

SETTING:
  Location: Circulation desk, evening.
  Time: Evening.
  Heritage Elements Present: Brass lamp at the desk joins the jali dusk.
  Subject Specific Props: Workbench delete response, empty GetBook response.
  Mood: Quiet credibility.
  Lighting: Lamp amber, dusk blue through jali (page background stays light).

CHARACTERS PRESENT:
  Akshay: Performing the final clean teardown for Meera.
  Meera: The skeptical eyebrow eases one degree.

SCENE BEATS:
Beat 1 (scene-panel): Evening shot at the circulation desk. The brass lamp casts a warm amber glow over the teak counter as Meera watches Akshay execute the final verification query.
Beat 2 (challenge-prompt): "After a successful DeleteBook, what should GetBook ?id=9781227 return before you call the test suite honest?" Options: (a) the record with a deleted flag (b) 404 or an empty result proving absence (c) 200 with the old record for compatibility. Reveal in Beat 4.
Beat 3 (action-beat): Akshay deletes, then queries. Result: the record is gone; the response proves absence. He adds the same composite key again and gets 201 again: clean state verified. Expression: small triumph.
Beat 4 (challenge-reveal): Answer (b): absence must be provable, or delete is theater. Wrong answers: (a) invents behavior no one specified; (c) keeps the lie alive (Polite 200 shape from Ch 2, referenced obliquely). Story continuation: Meera: "It knows what is not there. Show me the five hundred tomorrow."
Beat 5 (cliffhanger-panel): The lab at night, Akshay's screen showing his first green trio (add, get, delete) against the library API. Text: "Three checks, three hundred lines of clicking saved. But one of those greens would not notice a WRONG body, only a missing one. Sameer left a note on the desk: 'Shield your assertions.'" story_question: What does it mean to shield an assertions when the badge is green but the body lies? handoff_to_next: Chapter 5 opens with the note in close up, then the silent false positive demo.

TEACHING PAYLOAD: Teardown and clean state proof; absence assertions; bridge to assertion quality.
EMOTIONAL ARC: Start: hopeful demonstration. End: credibility earned, then a new doubt planted by the note.
PROSE BUDGET: Allowed prose words: 0.

---

CHAPTER CLOSING HOOK

Cliffhanger-Panel Content: Sameer's desk note: "Shield your assertions" beside a green trio that would pass on an empty body.
Story Question Left Unresolved: How a green check can lie even when every request succeeds.
Handoff to Next Chapter: Chapter 5 opens with Scene 1 Beat 1 on the note and the green trio. The hero is proud but snagged by the note: his Mission 2 confidence now carries a splinter.

New World Bible Entries This Chapter Creates:
  Established Facts: as Chapter 4 log (library desk, composite key, Msg quirk, duplicate 409, teardown loop, UK Passport anchor).
  Locked Vocabulary: The library; Meera's desk.
  Analogy Used: none reserved (Birthday Paradox is Ch 6, untouched here).
  Open Threads: Meera skepticism planted (resolution Ch 8); 500 shipment planted; One More Paste Trap recorded.
  Emotional Arc Tracker: After Chapter 4 entry as written.

---

VISUAL MOCKUP

PAGES 1 to 2 (Scene 1):
+---------------------------+---------------------------+
| Beat 1 scene-panel: desk, manifest, stamp (full page)  |
+---------------------------+---------------------------+
| Beat 2 dialogue | Beat 3 thought-bubble               |
+---------------------------+---------------------------+
| Beat 4 dialogue | Beat 5 challenge-prompt (boxed)      |
+---------------------------+---------------------------+

PAGES 3 to 4 (Scene 2):
+---------------------------+---------------------------+
| Beat 1 reveal boxed | Beat 2 action-beat AddBook       |
+---------------------------+---------------------------+
| Beat 3 workbench: AddBook contract, pointers (full)    |
+------------------------------------------------------+
| Beat 4 dialogue: duplicate 409, casing duel            |
+------------------------------------------------------+
| Beat 5 quad-card (2x2, full page)                      |
+------------------------------------------------------+

PAGES 5 to 6 (Scene 3):
+---------------------------+---------------------------+
| Beat 1 workbench: THREE TABS (full width)              |
+------------------------------------------------------+
| Beat 2 action-beat tally marks | Beat 3 dialogue       |
+---------------------------+---------------------------+
| Beat 4 reference-anchor: UK Passport box               |
+---------------------------+---------------------------+
| Beat 5 TRAP ALERT: One More Paste (boxed, full width)  |
+------------------------------------------------------+

PAGES 7 (Scene 4):
+---------------------------+---------------------------+
| Beat 1 challenge-prompt    | Beat 2 action-beat        |
+---------------------------+---------------------------+
| Beat 3 challenge-reveal    | Beat 4 CLIFFHANGER:       |
|                           | desk note, green trio     |
+---------------------------+---------------------------+
