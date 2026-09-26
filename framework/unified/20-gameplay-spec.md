# SGK Gameplay Specification

System ID: H20
Layer: Unified
Version: 2.0.0

---

## Purpose

SGK games are not quiz apps. They are learning adventures.
The difference between a quiz and an SGK game is the difference
between watching someone swim and being pushed into a pool.
Both teach you what water is. Only one teaches you to swim.

This spec defines the complete game architecture that applies
to every SGK subject domain. The specific scenarios change
per subject. The architecture is universal.

---

## The 4 Dopamine Mechanisms

Every element of every SGK game must serve at least one of
these four neurochemical engagement mechanisms.

MECHANISM 1: CURIOSITY LOOPS
Every game scene ends with an unresolved question.
Every mission ends with a revelation that reframes what
the player thought they knew.
The brain's prediction circuits fire when a question is posed
and will not rest until they see the answer.
Implementation: Cliffhanger mission transitions, locked scenes
that unlock only when prerequisite challenges are completed,
revelation cutscenes that arrive when the player has earned them.

MECHANISM 2: COMPETENCE SIGNALS
Every time a player correctly predicts an outcome, identifies
a bug, argues the right Article, or solves a calculation before
the answer is revealed, their brain releases a genuine
competence signal. Not a hollow progress bar. Real satisfaction.
Implementation: challenge-prompt sequences where correct
predictions immediately advance the scene, visible "You got it"
moments without excessive celebration, streak counters that
show accumulating expertise.

MECHANISM 3: VARIABLE REWARD SCHEDULES
Rewards that arrive at unpredictable intervals and in
unpredictable magnitudes are the most powerful engagement
mechanism in behavioral psychology. The player cannot predict
when the next Revelation Moment will arrive. This keeps
attention sustained between rewards.
Implementation: The Revelation Engine (defined below) delivers
major insights at variable intervals based on engagement, not
on a fixed schedule.

MECHANISM 4: NEAR-MISS LEARNING
When a player selects a wrong answer that was almost right,
their brain responds with heightened attention and stronger
memory encoding than when they get it right on the first try.
Near-misses create the strongest learning moments.
Implementation: All wrong answer options must be meaningful
near-misses. The incorrect GST rate is one that actually
existed before the most recent amendment. The wrong Article
is one that applies in adjacent contexts. Wrong answers teach.

---

## Game Structure Architecture

### The Opening Cinematic (Per Session)

Every time the game is opened, a brief Madhubani-animated
opening plays (15 to 30 seconds, skippable after first viewing).

Content of the opening cinematic:
  Brief "story so far" moment: what the player has accomplished.
  Current mission's central conflict established in one image.
  A direct address to the player in the mentor's voice.
    Not a formal instruction. A character speaking to a person.
    Example: "The deployment window opens in 6 hours.
    The Newman suite has 3 failing assertions. Let's find them."
  Fade to the Mission Hub.

---

### The Mission Hub

The central navigation environment between challenges.
A fully illustrated Madhubani-style interactive scene.

The Mission Hub shows:
  The current mission's primary setting as an explorable scene.
    (Campus server room, Supreme Court anteroom, RBI boardroom,
    bazaar counting house, laboratory, household kitchen.)
  The mentor character as an interactive NPC.
    Tapping or clicking the mentor: delivers a hint,
    a piece of domain lore, or brief encouragement.
    The mentor speaks in their established character voice.
    Mentor dialogue in the Mission Hub is never generic.
    It is always specific to the current mission's content.
  The hero character avatar.
    Customizable within Madhubani art constraints:
    clothing colour choices, expression default,
    but always traditional attire, always almond eyes.
  The mission progress display.
    A "war room board" or equivalent domain-specific display:
    In tech: a monitoring dashboard showing challenge completion.
    In law: a case file with sections revealed as completed.
    In economics: a ledger with transactions logged.
  Locked and unlocked challenge indicators.
    Visual: locked challenges shown as sealed scrolls, vaults,
    case files, laboratory samples, or domain-appropriate objects.
    Unlocked: the same objects shown open or illuminated.

---

### Challenge Sequence Architecture

Challenges are not questions. They are scenarios.
The player is inside the story solving a real problem.

CHALLENGE FORMAT:

SETUP (30 to 60 seconds of reading):
  A situation description that places the player in the story.
  Not "Question: What is the correct Article for this situation?"
  But: "Your client received a show-cause notice. The officer
    claims the supply is inter-state and IGST applies.
    You believe it is intra-state. CGST and SGST apply.
    You have 10 minutes before the response is due."

RESOURCE ACCESS:
  The player has a set of resources available.
    In tech: a code file, a log output, a Newman report.
    In law: a case file, an Article reference list, a precedent set.
    In economics: a data table, a formula sheet, a policy document.
  Accessing each resource costs a "resource token" from
    a limited supply (typically 3 tokens per challenge).
  This forces genuine prioritization: the player must decide
    which resource to consult rather than reading everything.

DECISION POINT:
  The player selects from 3 to 4 options.
  All options are meaningful near-misses.
  The correct option requires genuine understanding to select.
  Recognizing the distractors requires understanding why
    the adjacent options are wrong.

CONSEQUENCE DELIVERY:
  After selection: the consequence plays out in the story.
  Correct: the scenario resolves successfully. The story
    advances. A brief character moment acknowledges the victory
    (mentor nods, story consequence shown: server stays up,
    client saved from penalty, student gets their book, etc.)
  Incorrect: the scenario shows the consequence of the wrong
    choice. The penalty is a story consequence, not a score hit.
    Then: the near-miss explanation appears.
    Then: retry opportunity.

---

### The Revelation Engine

The Revelation Engine manages when major insights are delivered.
It implements Mechanism 3 (Variable Reward Schedules).

HOW IT WORKS:
  Revelation Moments are not on a fixed schedule.
  They are unlocked when the player demonstrates understanding
    of the prerequisite concepts through challenge performance.
  The engine tracks: challenge accuracy across the current
    mission, streak length, resource tokens remaining,
    and whether the current concept's prerequisites are clear.
  When prerequisites are met: the Revelation Moment unlocks
    and triggers at the next challenge transition.

REVELATION MOMENT CONTENT:
  A 30 to 45 second animated cinematic.
  The mentor character reveals a deeper truth about the subject.
  This truth recontextualizes something the player has already
    done, making it suddenly richer.
  Example: After the player has completed 3 challenges about
    API status codes, the Revelation shows the actual network
    packet behind one of those challenges. "You were reading
    the Postman screen. This is what happened on the wire.
    Notice anything?"
  The revelation is visually delivered in Madhubani style
    with the mentor as narrator and annotated scene imagery.

---

### The Boss Challenge

Every mission ends with a Boss Challenge.
A multi-stage complex problem requiring everything learned
in the mission.

STRUCTURE:
  A dramatic setup cinematic (30 to 45 seconds).
  3 to 5 sequential stages, each building on the previous.
  No resource tokens available (the player has spent them
    during the mission and must rely on understanding alone).
  A visible story timer showing elapsed time
    (not a countdown that kicks the player out: a story prop).
  Full narrative consequence delivery on completion.

SUCCESS STATE:
  Climactic animation: the server stays up, the judgment
    is delivered, the reconciliation matches, the deployment
    is approved, the student gets their book.
  Mission Accomplished screen:
    XP earned (displayed as a craft metaphor, not raw numbers:
      "Senior Apprentice" → "Journeyman" → "Craftsperson" → "Architect")
    Streak status
    Accuracy percentage for this mission
    A story panel showing what changed in the world because
      of the player's victory
    Unlocked: one new lore card added to the player's collection
    Unlocked: the next mission in the Mission Hub

---

### Streak System

A running count of correct first-attempt answers.
Displayed as a visual counter in Madhubani style:
  1 to 5: A single oil lamp, flame growing with each answer.
  6 to 10: The lamp is fully lit, a second lamp appears.
  11 to 20: Both lamps lit, decorative motifs appear around them.
  21 plus: Full Madhubani border pattern glowing.

Losing the streak:
  The flame reduces but does not extinguish immediately.
  The player enters a 2-question "recovery mode":
    Get these 2 right and the streak resumes from its last value.
    Get one wrong: streak resets to 0.
  This creates anxiety followed by relief, not punishment.

---

### Social Proof Display

The Mission Hub shows aggregate community statistics:
  "[N] learners have completed this mission."
  "The most replayed challenge in this mission: [Title]."
  "Average accuracy on the Boss Challenge: [N]%."

What it does NOT show:
  Individual rankings.
  Competitive leaderboards.
  Any comparison between specific learners.

The social proof is community-building, not competitive.
The reader feels part of a large group fighting the same battle.
They do not feel ranked against that group.

---

### Game Asset Requirements

For every book that includes a game build, these assets
must be produced beyond the standard book illustrations:

Mission Hub backgrounds: 3 fully illustrated Madhubani
  scenes (one per mission setting). Interactive layer format
  (foreground, midground, background separate for parallax).

Mentor NPC sprite: The mentor character in 5 states:
  idle (subtle animation: chai glass lift), speaking,
  pointing, approving, thinking.

Hero avatar base: 3 to 5 clothing colour variations within
  Madhubani constraints for customization.

Challenge UI elements: Locked and unlocked challenge icons
  in domain-appropriate styles (scrolls, vaults, files, samples).

Revelation cutscene frames: Illustrated panels for each
  planned Revelation Moment (minimum 5 per book).

Boss Challenge cinematic frames: Opening dramatic panel
  and success panel for each mission Boss Challenge (6 total).

Mission Accomplished screen assets: Progress milestone
  illustrations for the craft progression ladder.
