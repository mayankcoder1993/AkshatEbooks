# Chapter Engagement Blueprint

Status: superseded by `end-to-end-book-plan.md`; retained for design history

Verified: 2026-09-21

## Shared design contract

Each chapter has one dominant learning experience. The structure stays recognisable without forcing every chapter into the same sequence of cards.

Every chapter must:

1. Open with a small lesson number, a clear chapter title and a one-sentence promise.
2. Place its mission, mystery, simulation, sorting challenge or build challenge first.
3. Ask the reader to think before revealing at least one important result.
4. Pair a concrete example with a visual or executable representation.
5. Move from a worked example toward an independent variation.
6. End with retrieval, a concise result and a bridge to the next chapter.
7. Remove any block that merely repeats the previous block in another box.

Typography must distinguish chapter number, title, subtitle, section heading, card title, body text, caption, code and metadata. The book title does not appear beside the lesson number.

## Lesson 1: Your First Program: Hello, World!

Dominant experience: mission.

Promise: begin with an empty file and make the computer show one exact message.

Opening challenge: “Make the silent machine answer us.”

Core mental model:

- Source code stores an instruction.
- Quotes mark a string value.
- `print()` receives the value.
- The terminal displays standard output.

Engagement path:

1. Predict how Python recognises text.
2. Meet each character in `print("Hello, World!")`.
3. Plan the tiny program.
4. Type it.
5. Predict the output.
6. Follow one complete run in the visualizer.
7. Change the message.
8. Find case, quote and bracket mistakes.

Repetition rule: use the opening journey image as orientation and the run visualizer as the one detailed execution explanation. Do not add another standalone print-process diagram.

## Lesson 2: How Does Our Code Reach the Computer?

Dominant experience: mystery and visual journey.

Promise: uncover the helpers between readable source code and visible output.

Opening mystery: “Who translates our words into work the processor can perform?”

Clues:

- People can read Python source.
- The processor does not directly understand Python words.
- The program still produces a result.

Engagement path:

1. Predict whether the processor understands `print`.
2. Follow the high-level source-helper-result route.
3. Inspect Python’s hidden route.
4. Compare Python, C and Java one route at a time.
5. Map each Python source line to concrete CPython opcode actions.
6. Inspect a small Java class-file action list.
7. Explain why different routes can produce the same output.

Visual rule: bytecode must be a source-to-action map with visible state, not a flat terminal list.

## Lesson 3: Variables: Names for Values

Dominant experience: score simulation.

Promise: watch one score change while the variable name remains useful.

Opening simulation: “Keep track of a changing score.”

Engagement path:

1. Predict whether old numbers should be edited manually.
2. Connect a name to a value.
3. Read assignment from right to left.
4. Simulate `score = score + 5` in three visible stages.
5. Run the program one line at a time.
6. Change the starting value.
7. Find a near-miss variable name.

Misconception to prevent: a Python variable is not a permanently locked box. It is a name that refers to a value.

## Lesson 4: Data Types: What Kind of Value?

Dominant experience: classification challenge.

Promise: sort values by type and use the type to predict valid operations.

Opening challenge: “Sort the values in a learner profile.”

Engagement path:

1. Classify `"12"`, `12`, `12.0` and `True` before revealing their types.
2. Introduce only `str`, `int`, `float` and `bool`.
3. Compare numeric addition with string joining.
4. Inspect each value with `type()`.
5. Convert only when the intended meaning is clear.
6. Diagnose a mixed-type error.

Scope rule: lists, dictionaries, tuples and sets are preserved for dedicated later missions. They are not placed in a memorisation table here.

## Lesson 5: Numbers: Build a 100-Point Score

Dominant experience: build challenge.

Promise: use arithmetic tools and calculation order to reach exactly 100.

Opening challenge: “Reach 100 with more than one operator.”

Engagement path:

1. Use Python as a calculator with `+`, `-` and `*`.
2. Compare `/`, `//` and `%` using seven counters and groups of four.
3. Use `% 2` to inspect whether a positive integer is even.
4. Expand `2 ** 3` into three visible factors.
5. Compare an expression with and without parentheses.
6. Follow a score program in the run visualizer.
7. Write one expression that equals 100.
8. Diagnose division by zero.
9. Meet one short floating-point surprise without entering the full binary explanation.

Practice progression:

- Complete worked expression.
- Predict a changed expression.
- Choose the correct operation.
- Rearrange a short action sequence.
- Build an independent expression that reaches 100.

## Typography specification

Screen and Book View:

- Lesson number: 11 to 12 px, uppercase, wide letter spacing.
- Chapter title: 32 to 46 px depending on viewport, with a compact line height.
- Subtitle: 16 to 18 px, plain rather than italic in the main reader.
- Opening challenge title: 24 to 32 px.
- Section heading: 21 to 24 px.
- Card heading: 17 to 19 px.
- Body: 16 to 18 px with 1.6 to 1.75 line height.
- Caption and metadata: 13 to 15 px.
- Keep prose lines near 65 to 72 characters where the layout permits.

Print and DOCX:

- Chapter title: 24 pt.
- Subtitle: 11 to 12 pt.
- Main body: 11 pt.
- Section heading: 14 to 16 pt.
- Caption: 9 to 10 pt.

## Evidence basis

The design uses worked examples followed by practice, combines relevant graphics with verbal explanation, asks for active retrieval, and connects concrete representations with abstract code. It also uses prediction, self-explanation and gradually reduced support rather than relying on decorative gamification.

Key references:

- What Works Clearinghouse recommendations on worked examples, graphics, concrete representations, quizzing and explanatory questions: https://ies.ed.gov/ncee/wwc/practiceguide/1
- Deans for Impact, The Science of Learning: https://www.deansforimpact.org/files/assets/thescienceoflearning.pdf
- Research on Parsons problems as scaffolding between worked examples and independent code: https://arxiv.org/abs/2311.18115
