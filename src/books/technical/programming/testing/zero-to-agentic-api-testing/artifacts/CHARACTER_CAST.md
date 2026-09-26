# CHARACTER CAST: Zero to Agentic API Testing

System: framework/unified/07-character-universe-protocol.md (H07)
Guardrail 1: CONFIRMED. 10-line tone sample approved. Recorded in guardrail-01-confirmed.md.

---

## Tier 1: Genre Superhero Mentor (fixed for all SGK Tech testing books)

Name: Sameer Krishnamurthy
Ledger: framework/characters/mentor-sgk-tech-sameer.md (loaded, not duplicated here)
Age: 36. Lead Systems Architect, 15 years across API infrastructure and quality engineering.
Core belief: The wire does not lie. All software failures are knowable if you know where to look.
Teaching style: Shows the failure first. Lets the hero diagnose. Socratic questions. Reveals the principle only after real struggle.
Signature prop: Small brass glass of masala chai, held in the left hand while thinking, set down when the explanation is finished.
Signature phrase: "The wire does not lie." Maximum once per chapter.
Analogy domain: Food, hospitality, physical infrastructure. Reserved for this book: hotel keycard (planned Chapter 11, RESERVED in World Bible). Used in this book so far: restaurant waiter (Chapter 1, status USED).
Visual spec: Deep teal kurta with gold embroidery at collar and cuffs, white dhoti with woven border, calm half smile, sharp almond eyes. Never shown confused or surprised; that is Akshay's domain.
Voice sample: "You pressed Send and got a 200. Lovely. Now tell me what the wire actually did."

---

## Tier 2: Book Specific Hero (created for this book, does not recur)

Name: Akshay
Background (4 sentences): Akshay is 24, from Indore, a QA analyst two years into his first job at a campus services software team in Bengaluru. He got the job because he is meticulous with checklists, not because he can code. His team just announced a CI/CD migration and he has been manually clicking the same API regression path every sprint for eight months. He has never admitted to anyone that he does not know where automation even starts.

Entry emotional state (The Broken World): Feels quietly embarrassed when colleagues discuss pipelines. He has been Googling every term from those meetings in private. When his lead handed him a failing API collection to debug, he smiled, took it, and spent two hours clicking Send without finding anything, because he did not know that a green check mark could lie.

Personality traits (create narrative tension and specific mistakes):
  1. Googles before thinking. He reaches for a copied snippet instead of reasoning about the failure.
  2. Overconfident in familiar territory (the GUI), underconfident in new territory (terminal, JavaScript).
  3. Takes the shortest path that appears to work. Cause of the silent false positive in Chapter 5.
  4. Reads mentor silence as disapproval. Drives him to confess mistakes sooner rather than hide them.

Common mistake pattern: writes a test that passes without asserting anything meaningful; skips teardown; assumes an empty variable is the same as a missing one.

Five beat arc:
  BEAT 1 BROKEN WORLD (Ch 1): Manual clicking fatigue, hidden gap, cafeteria API crisis breaks the routine.
  BEAT 2 CATALYST (Ch 2): Orientation day transit screen freeze. His clicking finds nothing for 40 minutes in front of Sameer. Old strategy exposed.
  BEAT 3 FIRST VICTORY AND OVERCONFIDENCE (end Mission 1, Ch 3): His first pm.test goes red, then green. He starts believing automation is mostly copying test templates.
  BEAT 4 THE HUMBLING (mid Mission 2, Ch 5): His "Status is 200" test stays green against a broken server because he wrote no matcher. A real bug sails past him. He must explain it to the team.
  BEAT 5 EARNED MASTERY (Mission 3 climax, Ch 13): He catches a failing assertion in the pipeline gate that everyone else dismissed as flaky, because he reads the wire instead of the dashboard. Sameer hands him the chai glass.

Visual design brief (Madhubani): Appears 24, lean build. White cotton kurta, light brown chinos, bare feet in the lab or simple kolhapuri sandals. Distinguishing feature: a small scratch on the top left corner of his laptop lid (visual continuity only, no story resolution needed). Expression range (5 minimum): confused frowning, concentrating squinting, trying something hopeful, small triumph with corner of mouth up, oh no wide eyes. Never fully defeated; resilience always visible. Props: battered laptop, spiral notebook, phone for checking responses.

---

## Tier 3: Temporary Characters (roster)

  Transit operator, War Room (Ch 2): Problem creator. Frontend and backend blame each other; she needs an answer before the evening rush. Exits when the 400 guard is proven.
  Library circulation clerk, Meera (Ch 4): Stakeholder. Manually rekeys 500 catalogue entries; embodies the copy paste fatigue the automation will end. Reappears in Ch 8 when the CSV run succeeds (World Bible thread).
  Frontend developer, Vikram (Ch 10): Blocked stakeholder. Cannot build the reservation UI for two months because the backend does not exist. Exists to make mock servers matter. Exits when the mock URL unblocks him.
  Campus security officer (Ch 11): Devil's advocate. Argues in favor of hardcoding credentials because "it is just campus internal". Exits once the keycard analogy lands.
  Legacy system operator, Rahman sir (Ch 12): Context provider. Keeper of the 20 year old finance mainframe that speaks SOAP only. Exits after xml2js parsing works.

Each temporary character carries a one sentence background and a visual brief in the relevant storyboard; none becomes permanent.

---

## Tone Configuration and 10-Line Dialogue Sample

(Vocabulary and sentence limits loaded from ap04. Rule 19 compliant.)

SAMEER [lifting the chai glass, eyes on the screen]: You pressed Send. The server said 200. Tell me what happened between those two moments.
AKSHAY [half laughing]: The... API did its job?
SAMEER [setting the glass down]: The server accepted a request. Those are two different promises. One is about arrival. The other is about truth.
AKSHAY [leaning in]: So the green check mark does not mean the data is right?
SAMEER [pointing one finger at the response pane]: The check mark means your test ran. Look at line three. What is actually in that body?
AKSHAY [squinting, then sitting up]: It is empty. The test passed on an empty body.
SAMEER [small smile]: Now you are reading the wire. Finish your chai. We write that assertion again.
AKSHAY [typing]: Again. With a matcher this time.
SAMEER: Red before green, Akshay. A test that has never failed has never proven anything.
AKSHAY [grinning at the failure message]: It failed. It failed exactly the way I told it to.
SAMEER: Good. That is the first honest test you have ever written.

Calibration: Sameer never lectures in full sentences of theory; he asks, points, and analogizes. Akshay voices confusion out loud and takes visible pride in earned failures.
