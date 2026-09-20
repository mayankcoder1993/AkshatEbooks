# Engagement Architecture for Python Foundations

Status: proposed alongside the eight-chapter curriculum

Verified: 2026-09-21

## Core principle

A multi-chapter goal does not require every chapter to look or sound like a mission.

The book will use a larger learning arc to connect several chapters. Inside that arc, each chapter will use the form of engagement that best matches its content. A chapter may be a launch, laboratory, mystery, sorting challenge, simulation, repair job, design studio or reliability trial.

The connecting goal supplies continuity. The changing experience prevents repetition.

## Language hierarchy

Use these terms consistently:

- **Learning arc:** several chapters working toward one meaningful finished program.
- **Arc goal:** the finished result readers are building, investigating or repairing.
- **Chapter experience:** the particular engaging structure used to learn the current material.
- **Build step:** the small contribution the chapter makes to the shared result.
- **Checkpoint:** compact retrieval or application questions.

Reserve the word **mission** for an arc that genuinely feels like a mission. Do not label every opening card “OUR MISSION.”

## Arc 1: Create an Interactive Terminal Game

This is a build quest across Chapters 1 through 5. The final goal appears once before Chapter 1. Later chapters show only a compact progress strip.

### Arc opening

Show:

- A short preview of the completed game conversation.
- The five capabilities the reader still needs.
- A progress path with five stops.
- The first runnable result.

Do not explain every future concept in the opening.

### Chapter 1: Make Python Run

Dominant experience: **launch challenge**.

Reader challenge: make a silent file produce an exact visible response.

Engagement tools:

- Predict the terminal result.
- Trace one instruction from file to screen.
- Put four execution stages in order.
- Change one message and rerun it.
- Diagnose one capitalization error.

Arc contribution: game title and opening instructions.

### Chapter 2: Work with Values

Dominant experience: **score laboratory**.

Reader challenge: test how values behave and calculate a target score.

Engagement tools:

- Sort example values by behavior.
- Simulate variable changes.
- Use counters to compare `/`, `//` and `%`.
- Predict precedence before revealing the operation order.
- Complete the one-line expression that reaches 100.
- Investigate one floating-point surprise without overexplaining it.

Arc contribution: starting score, score changes and displayed values.

### Chapter 3: Organize Data

Dominant experience: **packing and lookup challenge**.

Reader challenge: choose the right container for each part of the game.

Engagement tools:

- Pack ordered inventory into a list.
- Represent a fixed coordinate or record with a tuple.
- Match player labels to values with a dictionary.
- Remove duplicates with a set.
- Compare containers only after using each one.
- Repair an accidental mutation or wrong lookup.

Arc contribution: inventory, player record and unique collected items.

### Chapter 4: Control the Program

Dominant experience: **decision maze and loop simulation**.

Reader challenge: guide the game through choices and repeated turns.

Engagement tools:

- Walk through a branching decision map.
- Predict which branch runs.
- Trace a loop with a compact state table.
- Arrange shuffled loop lines.
- Find an infinite-loop bug.
- Compare a counted `for` loop with a condition-controlled `while` loop.

Arc contribution: rules, choices and repeated turns.

### Chapter 5: Build with Functions and Input

Dominant experience: **assembly workshop**.

Reader challenge: connect the pieces into one playable program.

Engagement tools:

- Match inputs, processing and returned results.
- Complete a function with fading support.
- Trace local variables through a call.
- Validate one user response.
- Assemble prepared program parts in the correct order.
- Run and customize the complete game.

Arc completion: a playable terminal game and one independent variation.

## Arc 2: Rescue and Strengthen a Small Application

Chapters 6 through 8 should not feel like another identical build quest. Begin with a small working program that becomes difficult to extend and fails in predictable ways. The reader’s larger goal is to improve its design and reliability.

### Arc opening

Show:

- A short program that works but has repeated, tangled code.
- A requested feature that is difficult to add.
- A failure caused by invalid or missing data.
- Three improvement stages: model, organize and verify.

This creates a repair and engineering narrative rather than another “start from nothing” mission.

### Chapter 6: Model Behavior with Objects

Dominant experience: **design studio**.

Reader challenge: turn scattered values and functions into clear objects with responsibilities.

Engagement tools:

- Group related data and behavior.
- Compare one procedural version with one class-based version.
- Sketch an object before writing its class.
- Trace instance attributes.
- Choose composition before unnecessary inheritance.
- Diagnose confusion between a class and an instance.

Arc contribution: clear models for the application’s main records.

### Chapter 7: Split and Share Code

Dominant experience: **codebase map**.

Reader challenge: separate one crowded file into modules without breaking the program.

Engagement tools:

- Draw an import map.
- Decide which responsibility belongs in which file.
- Predict what runs during import.
- Repair a missing or incorrect import.
- Build the project in a virtual environment.
- Distinguish standard-library modules from third-party packages.

Arc contribution: an understandable project structure with a clear entry point.

### Chapter 8: Handle Problems and Prove Behavior

Dominant experience: **reliability trial**.

Reader challenge: make the program survive expected failures and prove key behavior.

Engagement tools:

- Read the final traceback line first.
- Match failures to specific exception types.
- Repair overly broad exception handling.
- Turn a reported bug into a reproducible test.
- Test normal, boundary and invalid cases.
- Run a final reliability checklist.

Arc completion: a modular application that handles expected problems and passes its tests.

## Engagement forms available to future chapters

Use the form that matches the thinking task:

| Learning need | Suitable experience |
| --- | --- |
| Follow a process | visual journey or ordered path |
| Discover hidden behavior | mystery or investigation |
| Track changing state | simulation |
| Distinguish categories | classification or sorting challenge |
| Choose among routes | decision maze |
| Combine learned parts | assembly workshop |
| Improve structure | design studio |
| Diagnose a failure | bug hunt or repair job |
| Verify correctness | test laboratory or reliability trial |
| Apply skills independently | build challenge or open variation |

Do not turn this table into a requirement to use every format.

## Chapter rhythm

The exact sequence may vary, but a chapter should normally contain:

1. A concise promise and link to the arc goal.
2. A prediction, choice or puzzle before the first major explanation.
3. One clear representation: code, diagram, state table or physical analogy.
4. A worked example with visible reasoning.
5. Reduced-support practice.
6. An independent variation or repair.
7. A compact checkpoint.
8. One visible update to the arc goal.

Do not insert a decorative card for every step.

## Progress presentation

### Arc-opening chapter

Use one substantial goal card with the final behavior, prerequisites and progress path.

### Middle chapter

Use one narrow progress strip:

`INTERACTIVE GAME  2 of 5 complete  |  NOW: ORGANIZE DATA`

Below it, use a normal chapter title and begin the chapter experience immediately.

### Arc-completion chapter

Show the assembled program, completion checks and an independent variation. Do not repeat all previous chapter summaries.

## Compact checkpoint design

- Three or four high-value questions per chapter.
- One compact shared container.
- Short option rows or two-column choices when suitable.
- Explanation expands only after the reader chooses.
- Include at least one prediction or code-reading item.
- Avoid questions answered by wording copied directly from the paragraph above.
- Print uses a compact question list followed by an answer key.

## Space controls

- Prefer one strong visual to several small decorative cards.
- Pair code and a short explanation side by side on wide screens when readable.
- Collapse repeated labels and metadata into a single line.
- Do not restate the arc goal at full length in every chapter.
- Avoid full-width cards for one-sentence facts.
- Keep option controls only as tall as their content requires.
- Use captions for interpretation, not repetition.
- Limit takeaways to the ideas needed in the next chapter.

## Acceptance test

Before publishing a chapter, ask:

- Does the chapter advance the shared arc goal?
- Is its dominant experience different for an instructional reason, not merely for decoration?
- Could any card become a normal paragraph without losing meaning?
- Is an explanation repeated in the opening, body, caption and takeaway?
- Does every large surface earn its space?
- Does the checkpoint test thinking rather than copied wording?

If the answer reveals repetition or unused space, simplify before publishing.
