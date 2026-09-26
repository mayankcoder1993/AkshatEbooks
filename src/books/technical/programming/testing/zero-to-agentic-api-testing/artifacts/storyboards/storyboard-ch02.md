# STORYBOARD: Chapter 02

CHAPTER HEADER

Chapter Number: 02
Chapter Title: The War Room Crisis: Manual Wire Auditing and Status Codes
Mission: Mission 1: Reading the Wire
Chapter ROI: After this chapter, the reader can reproduce an unhandled 500, diagnose missing versus empty versus whitespace parameters, install a fail fast guard, and classify any 1xx to 5xx status family on sight.
Arc Position: CATALYST
Total Scenes: 4
Estimated Pages: 32
Estimated Total Blocks: 46
  scene-panel: 7, dialogue-exchange: 13, workbench-screen: 3, action-beat: 5,
  thought-bubble: 3, quad-card: 3, challenge-prompt: 2, challenge-reveal: 2,
  cliffhanger-panel: 1, trap-alert: 2, narration-box: 2, prose-paragraph: 2,
  reference-anchor: 1
Visual Density Precheck:
  Visual plus dialogue plus interactive percentage: 78 percent (PASS)
  Prose percentage: 9 percent (PASS)

CHAPTER OPENING CONDITION

Previous Chapter Cliffhanger: "Orientation day arrives in nine hours. Fifty bus routes go live at once. Five hand tested clicks got this far. Fifty will not ask permission."
How This Chapter Resolves It: Scene 1 Beat 1 opens on the war room whiteboard at 8:14 PM with the transit screen already frozen. The promised load has arrived and failed, exactly as the hook threatened.
Hero Emotional State at Chapter Open: Anxious and performing speed. He publicly leaned on the manual path yesterday; now it is failing in front of the team.
World Bible Check Confirmation: Established Facts reviewed: YES (Chapter 1 log). No contradictions: YES. Mission Tone Envelope: Mission 1 (individual crisis scale, 4 to 5 beats per scene, 70/30 dialogue). Locked Vocabulary reviewed: YES (the war room debuts this chapter; masala chai o'clock first use).

---

SCENE 1 OF 4: 8:14 PM

Scene Type: OPENING
Estimated Panels: 4
Estimated Pages: 6
Content Type Tags: Type A (live outage), Type C (parameter state prediction)
Mission Tone Compliance: Individual scale (one screen, one route missing), warm urgency not enterprise panic.

SETTING:
  Location: The war room (transit operations centre). Whiteboard on easel, teak console, wall monitors flanked by carved pillars, brass task lamp.
  Time: Evening, 8:14 PM.
  Heritage Elements Present: Pillars flanking console, brass lamp, stone floor.
  Subject Specific Props: Route map monitor frozen, printed route sheets, whiteboard with blame arrows.
  Mood: Frayed, finger pointing.
  Lighting: Lamp amber against monitor glow.

CHARACTERS PRESENT:
  Akshay: At the console, clicking the same failing URL, rerunning it, hoping changes behavior.
  Transit operator (temp): Arms crossed, evening rush in twenty minutes.
  Sameer: Arrives quietly at the back of the room with the chai glass, observes before speaking.

SCENE BEATS:
Beat 1 (scene-panel): Wide war room. The route screen frozen on yesterday's loop. Frontend developer and backend developer on either side of the whiteboard, blame arrows meeting in the middle.
Beat 2 (dialogue-exchange): Operator: "Evening rush in twenty minutes." Frontend: "The API is broken." Backend: "Your render is broken." Akshay, clicking: "It works when I try it." Sameer from the back: "It works when YOU try it. Show me exactly what you try." Pointer: Sameer at the two URLs about to appear.
Beat 3 (workbench-screen): API Testing Workbench side by side URLs. Working baseline: GET .../routes?route=campus_loop_north returns 200 with coordinates. Failing call: GET .../routes (route omitted). interaction_mode: PREDICT before Send. Pointer: query string difference highlighted.
Beat 4 (challenge-prompt): "The route parameter is missing from the failing call. Before Send: what does the server do with a parameter that was never sent versus one sent empty?" Options: (a) identical failure (b) missing means undefined at the handler, empty means a value that trims to nothing (c) the server invents a default. Reveal in Scene 2.

TEACHING PAYLOAD: Reproduce first; diagnose second. The difference between observed symptom (frozen screen) and actual request (omitted parameter).
EMOTIONAL ARC: Start: defensive speed clicking. End: pinned by a single honest difference between two URLs.
PROSE BUDGET: Allowed prose words: 0.

---

SCENE 2 OF 4: THREE WAYS TO BE EMPTY

Scene Type: DEVELOPMENT
Estimated Panels: 5
Estimated Pages: 8
Content Type Tags: Type A (crash reproduction), Type C (reveal + guard prediction), Type B (Healthcare.gov anchor)
Mission Tone Compliance: One concept per beat: missing, empty, whitespace; then the 500; then the guard.

SETTING:
  Location: The war room console.
  Time: 8:20 PM.
  Heritage Elements Present: Unchanged; whiteboard now holds Sameer's three columns.
  Subject Specific Props: Three sticky notes: UNDEFINED, "", " ".
  Mood: Discovery under a clock.
  Lighting: Amber lamp, screen light.

CHARACTERS PRESENT:
  Akshay: Standing now, notebook out, writing the three states.
  Sameer: At the whiteboard, three columns drawn, chai glass in left hand.

SCENE BEATS:
Beat 1 (scene-panel): Medium shot at the war room whiteboard. Sameer draws three columns with marker in hand, while Akshay watches intently with notebook ready.
Beat 2 (challenge-reveal): Answer (b). Wrong answer analysis: (a) is the trap most testers fall into (they look identical in the UI until you print the handler value); (c) inventing defaults is how silent wrong data ships. Explanation: a parameter never sent arrives as undefined; an empty string arrived but carries nothing; whitespace arrived carrying only spaces that trim to nothing. Story continuation: Sameer writes the three states as columns.
Beat 3 (action-beat): Akshay replays the failing request with route= (empty) and route=%20 (space) alongside the omitted version. Result: all three reach route.trim() and crash identically, which is the point: the handler cannot tell them apart yet. Expression: concentrating squinting.
Beat 4 (workbench-screen): Terminal workbench showing the unhandled 500: TypeError: Cannot read properties of undefined (reading 'trim'), stack trace visible. Pointer: the exact frame where trim() is called on undefined. Error output visually distinct from standard output.
Beat 5 (quad-card):
  Part 1 Input: GET /routes with route missing, route= empty, route=%20 whitespace.
  Part 2 Under the Hood: handler calls route.trim() before checking existence; undefined has no trim; the process throws; Express converts the throw to 500.
  Part 3 Output: 500 Internal Server Error, frozen screen upstream.
  Part 4 Senior Savior: Trap: "works when I try it" (his URL had the parameter). Golden rule: three kinds of empty, one job: check before you use.
Beat 6 (reference-anchor): Caller: Sameer: "Healthcare.gov. Same shape, bigger room." Reference: October 2013 launch, cascading failures, error pages returned where contracts were promised; cost measured in lost enrollment days (source stamped HHS reporting). Story continuation: Sameer sets the glass down. "Write the guard."

TEACHING PAYLOAD: Missing versus empty versus whitespace; unhandled exceptions become 500s; failure at scale is the same failure with more seats.
EMOTIONAL ARC: Start: confused by three identical symptoms. End: seeing the difference unaided.
PROSE BUDGET: Allowed prose words: 40, used: 36.
TYPE C PRACTICE MOMENT: Reveal above; second prompt in Beat: "Which column does your last failing request actually belong to? Mark it before reading on."

---

SCENE 3 OF 4: THE GUARD

Scene Type: DEVELOPMENT
Estimated Panels: 4
Estimated Pages: 6
Content Type Tags: Type A (fix and replay), Type C (status family prediction)
Mission Tone Compliance: First working fix; stakes personal (his reputation in the room).

SETTING:
  Location: War room console.
  Time: 8:31 PM.
  Heritage Elements Present: Unchanged.
  Subject Specific Props: IDE screen with guard line, workbench replay tabs.
  Mood: Tight focus, then relief.
  Lighting: Unchanged.

CHARACTERS PRESENT:
  Akshay: Typing the guard himself (not copying: Sameer dictates the intent, Akshay writes syntax).
  Sameer: Watching, finger ready to point, small smile withheld until the replay.

SCENE BEATS:
Beat 1 (scene-panel): Console close shot. Akshay typing the guard syntax into the IDE workbench, Sameer observing calmly from behind.
Beat 2 (workbench-screen): IDE workbench. The fail fast guard: if (!route || route.trim() === '') return res.status(400). Pointer callouts: (1) the existence check, (2) the trim check, (3) 400 as a promise about the REQUEST not the server. interaction_mode: EXECUTE.
Beat 3 (action-beat): Akshay replays the bad request. Result: 400 Bad Request with a clear message. He replays the valid route. Result: 200 OK with coordinates. Expression: small triumph, corner of mouth up.
Beat 4 (quad-card):
  Part 1 Input: the same three broken requests, after the guard.
  Part 2 Under the Hood: validation now runs before business logic; the handler never touches trim() on undefined.
  Part 3 Output: 400 Bad Request (client's fault, stated plainly) instead of 500 (server's fault, opaque).
  Part 4 Senior Savior: Trap: returning 200 with an error message in the body (lying politely). Golden rule: 400 means the request broke the contract; 500 means the server broke itself.
Beat 5 (challenge-prompt): "Sameer says the next outage will not be this polite. A screen will look healthy while data quietly disappears. Which status family should you fear most in that sentence?" Options: (a) 5xx, loud and visible (b) 2xx that do not mean what you assumed (c) 4xx. Reveal in Scene 4.

TEACHING PAYLOAD: Fail fast guard installed and proven by replay; semantic ownership of status codes.
EMOTIONAL ARC: Start: pressure. End: relief with a new suspicion (2xx can lie).
PROSE BUDGET: Allowed prose words: 0.

---

SCENE 4 OF 4: THE LANGUAGE OF CODES

Scene Type: RESOLUTION
Estimated Panels: 4
Estimated Pages: 6
Content Type Tags: Type A (families taught in room), Type C (reveal), Type B (trap alert)
Mission Tone Compliance: Slower beats, teaching mode, warm lamp.

SETTING:
  Location: War room, operators dismissed, three remain.
  Time: 8:40 PM, screens now calm.
  Heritage Elements Present: Lamp, whiteboard with families written in Sameer's hand.
  Subject Specific Props: Whiteboard: 1xx 2xx 3xx 4xx 5xx columns with one example each.
  Mood: Calm after proof.
  Lighting: Amber.

CHARACTERS PRESENT:
  Akshay: Filling in examples under each family, confident now.
  Sameer: Leaning back, testing him with counterexamples.

SCENE BEATS:
Beat 1 (challenge-reveal): Answer (b). Wrong answer analysis: (a) is visible and therefore survivable; (c) are client problems the server handles gracefully. Explanation: the dangerous family is 2xx that answered a different question than you asked. Story continuation: Sameer taps the 2xx column. "This family is where the Silent Failure lives."
Beat 2 (dialogue-exchange): Sameer walks 1xx (informational, the handshake in progress), 2xx (your request did what you asked), 3xx (go ask over there), 4xx (you broke the contract), 5xx (we broke ourselves). Akshay supplies the campus example for each. Pointer: each column on the whiteboard.
Beat 3 (trap-alert): Trap name: The Polite 200 Trap. What happens: server answers 200 with an error payload and every downstream test passes. Why it happens: handlers written to avoid "bothering" clients. The fix: assert on the body contract, not just the badge. Real world consequence: one sentence on silent wrong data in production (source stamped).
Beat 4 (cliffhanger-panel): The lab, later. Sameer sets a printed failing collection in front of Akshay: four requests, ten green checks, one of them false. Text: "Your senior handed you a green suite at 6 PM. By 6:40 PM you found the lie. He wants to know how." story_question: How did Akshay spot a test that passes without testing? handoff_to_next: Chapter 3 opens at the workbench with the green check under a lamp, Akshay rereading it.

TEACHING PAYLOAD: Full status family taxonomy; the 2xx as the liar's parish; bridge into assertions.
EMOTIONAL ARC: Start: calm competence. End: calm, then hooked by the green lie.
PROSE BUDGET: Allowed prose words: 40, used: 32.

---

CHAPTER CLOSING HOOK

Cliffhanger-Panel Content: "A green suite with one false check inside it, on Akshay's desk, under the lamp, with his senior's deadline attached."
Story Question Left Unresolved: How a test can pass without testing, and what he will do about it before 6:40 PM.
Handoff to Next Chapter: Chapter 3 opens with Scene 1 Beat 1 on the workbench, the green check magnified. The hero is challenged and alert: he has seen a 2xx lie and now suspects every unexamined green mark.

New World Bible Entries This Chapter Creates:
  Established Facts: as Chapter 2 log in WORLD_BIBLE Section 2 (war room, 8:14 PM, parameter states, guard, families, Healthcare.gov).
  Locked Vocabulary: The war room; masala chai o'clock first use.
  Analogy Used: none new (restaurant waiter stays USED from Ch 1; no reserved analogy touched).
  Open Threads: orientation day scale resolved; silent failure foreshadowed (naming permitted from Ch 3).
  Emotional Arc Tracker: After Chapter 2 entry as written.

---

VISUAL MOCKUP

PAGE 1 (Scene 1 opener):
+---------------------------+---------------------------+
| Beat 1 scene-panel: WAR   | ROOM wide (half page)     |
| frozen map, blame arrows  |                           |
+---------------------------+---------------------------+
| Beat 2 dialogue full width bottom                      |
+------------------------------------------------------+

PAGE 2:
+---------------------------+---------------------------+
| Beat 3 workbench: two     | URLs side by side,        |
| pointer on query string   | PREDICT badges            |
+---------------------------+---------------------------+
| Beat 4 challenge-prompt boxed                          |
+------------------------------------------------------+

PAGES 3 to 4 (Scene 2):
+---------------------------+---------------------------+
| Beat 1 challenge-reveal   | Beat 2 action-beat:       |
| ANSWER rule above         | three replays, notebook   |
+---------------------------+---------------------------+
| Beat 3 workbench: TERMINAL 500, error tinted red,      |
| pointer on trim() frame (full width)                   |
+------------------------------------------------------+
+---------------------------+---------------------------+
| Beat 4 quad-card (2x2)    | Beat 5 reference-anchor:  |
|                           | Healthcare.gov box        |
+---------------------------+---------------------------+

PAGES 5 to 6 (Scene 3 and 4):
+---------------------------+---------------------------+
| Beat 1 IDE workbench:     | guard line, pointers      |
+---------------------------+---------------------------+
| Beat 2 action-beat replay | Beat 3 quad-card          |
+---------------------------+---------------------------+
| Beat 4 challenge-prompt boxed                          |
+------------------------------------------------------+
+---------------------------+---------------------------+
| Beat 1 reveal             | Beat 2 dialogue:          |
|                           | families on whiteboard    |
+---------------------------+---------------------------+
| Beat 3 TRAP ALERT boxed (Polite 200)                   |
+------------------------------------------------------+
| Beat 4 CLIFFHANGER: green suite under lamp, 21:9 strip |
+------------------------------------------------------+
