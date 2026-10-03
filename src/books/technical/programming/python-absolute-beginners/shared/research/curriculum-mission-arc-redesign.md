# Curriculum and Mission Arc Redesign

Status: superseded by `end-to-end-book-plan.md`; retained for design history

Verified: 2026-09-21

## Why the current structure needs revision

The current publication gives nearly every lesson its own mission card. That makes small concepts feel larger than they are. It also repeats introductory space that should be used for code, visual explanations and practice.

The existing curriculum roadmap has the opposite problem. It lists advanced topics such as decorators, generators, complex numbers and production architecture without a clear beginner need. It promises large projects before the prerequisite path has been designed.

The revised structure uses one meaningful mission across several chapters. Each chapter contributes one necessary capability. The mission begins once, progress is shown compactly, and the finished program appears at the end of the arc.

## Recommended series boundary

### Book 1: Python Foundations

This book should teach the Python language and the tools needed to build reliable small programs. It should make the reader ready for a framework, but it should not teach Django and FastAPI in the same volume.

Reasons:

- Django and FastAPI solve different web-development problems.
- Django includes an ORM, migrations, templates, forms, authentication and an administrative interface.
- FastAPI centers on typed API endpoints, validation, OpenAPI documentation and asynchronous-capable request handling.
- Both frameworks require concepts that are not basic Python: HTTP, routing, databases, configuration, security, testing and deployment.
- Framework releases and setup guidance change more quickly than core Python. Separate books can carry their own version and verification date.
- Combining both frameworks with first-language instruction would make the beginner book long, fragile and difficult to navigate.

### Recommended follow-on books

1. **Book 1: Python Foundations**
   Language, reliable scripts, files, modules, testing and framework-readiness.
2. **Book 2: Web Foundations with Python**
   HTTP, requests and responses, JSON, APIs, SQL basics, authentication concepts, environment configuration and an introduction to asynchronous work.
3. **Book 3: Build Web Apps with Django**
   One complete database-backed web application using a supported Django release.
4. **Book 4: Build APIs with FastAPI**
   One complete typed API using a supported FastAPI release.

Readers could take either framework book after Book 2. They would not need to finish both.

## Book 1 scope

The book should be comprehensive for an absolute beginner without trying to become a complete reference. The official Python tutorial itself states that it does not cover every feature. This book should teach the concepts that unlock independent small programs and later framework study.

### Include as core

- Running saved Python files in VS Code.
- Source code, runtime and a concise source-to-machine explanation.
- Values, names, assignment and arithmetic.
- Input and output.
- Strings and formatted output.
- Comparisons, Boolean logic and decisions.
- Lists, dictionaries, tuples and sets at an appropriate beginner depth.
- `for` and `while` loops.
- Functions, parameters, return values and scope.
- Files, paths and JSON.
- Errors and exception handling.
- Modules, imports, virtual environments and package installation.
- Classes and objects at a practical introductory level.
- Comprehensions and iteration at a practical level.
- Type hints and decorator recognition because later frameworks use both.
- Debugging, tests and one final structured program.

### Mention or defer

- `lambda`, `map()`, `filter()` and `reduce()`: optional reference, not a main learning arc.
- Complex numbers: mention as another numeric type, not a lesson.
- Custom iterators and generators: short orientation or later intermediate book.
- Deep inheritance, metaclasses and advanced dunder methods: later book.
- Concurrency and detailed `async` programming: Web Foundations or an intermediate book.
- Packaging and publishing to PyPI: later project book.
- Framework-specific code: separate framework books.

## Revised Book 1 mission arcs

The revised recommendation is **12 substantial chapters**, not 16. Twelve is a planning ceiling rather than a target to inflate. A chapter exists only when it advances a mission and gives the reader a manageable practice cycle.

## Mission 1: Build an Interactive Score Game

Goal: a terminal program asks for a player name, tracks a score, makes decisions and repeats until the game ends.

### Chapter 1: Make Python Respond

Consolidates the current Hello World lesson and the beginner-relevant part of the code-to-machine route.

Teach a saved Python file, `print()`, terminal output and one compact visual from source file through Python to screen. Explain CPython bytecode briefly. Move detailed language-route comparisons to an optional spread.

Mission contribution: display the game title and instructions.

### Chapter 2: Track and Calculate a Score

Consolidates the current variables, data types and numbers lessons.

Teach names and values, assignment, `int`, `float`, `str`, `bool`, arithmetic operators, parentheses, precedence and one short floating-point warning. Keep the reach-100 exercise.

Mission contribution: create and update the score.

### Chapter 3: Ask and Decide

Teach `input()`, explicit number conversion, essential string literals and f-strings, comparisons, Boolean logic, `if`, `elif`, `else` and indentation. Show `ValueError` as an observed conversion error, but postpone exception handling.

Mission contribution: collect the player name and apply a choice to the score.

### Chapter 4: Repeat and Finish the Game

Teach `while`, `for`, `range()`, and only the `break` or `continue` behavior the game genuinely needs. Trace loop state visually.

Mission completion: assemble and vary the playable score game.

## Mission 2: Build a Message Analyzer

Goal: clean text, organize its parts, count useful information and report the result.

### Chapter 5: Shape and Inspect Text

Consolidates all three previously proposed string chapters.

Teach quotes, escapes, `len()`, indexing, slicing, immutability, selected methods and formatted output. Use one character map and one transformation pipeline. Do not create a separate chapter for each string operation.

Mission contribution: clean, slice and split a message.

### Chapter 6: Organize Collections

Teach collections by the problem each solves:

- Lists for ordered mutable items.
- Tuples for fixed records and unpacking.
- Dictionaries for key-to-value lookup.
- Sets for uniqueness and membership.

Cover only the core operations needed by the analyzer. Use a comparison after concrete examples, not a memorization table before them.

Mission contribution: store words, count them and identify unique words.

### Chapter 7: Organize Work with Functions

Teach defining and calling functions, parameters, arguments, return values, local scope and small single-purpose functions. Add docstrings briefly after the reader has a reusable function worth describing.

Mission completion: a reusable message analyzer with a compact report.

## Mission 3: Build a Reliable Task Tracker

Goal: save tasks, load them again and recover from expected problems.

### Chapter 8: Save and Load Data

Teach `pathlib`, text files, `with open(...)`, and JSON as stored text representing familiar Python data.

Mission contribution: persist the task collection.

### Chapter 9: Find, Handle and Test Problems

Teach syntax errors versus runtime exceptions, reading tracebacks, specific `try` and `except` handling, basic debugging, assertions and a few automated behavior tests. Use the same tracker failures for all of these ideas instead of creating separate error, debugging and testing chapters.

Mission contribution: handle missing or invalid data and prove that core behavior still works.

### Chapter 10: Split and Run a Real Project

Teach modules, imports, a practical `if __name__ == "__main__":` entry point, virtual environments, package installation, and the difference between the standard library and third-party packages.

Mission completion: a modular and testable task tracker.

## Mission 4: Build a Framework-Ready Mini Application

Goal: reorganize familiar program logic into structures the reader will recognize later in larger Python applications.

### Chapter 11: Model Data with Classes and Types

Teach classes, instances, `__init__`, attributes, methods, composition, a concise `dataclass` example and practical type hints. Inheritance receives only a small example if the project creates a real need.

Mission contribution: model users and tasks clearly.

### Chapter 12: Transform, Assemble and Look Ahead

Teach practical comprehensions, `enumerate()`, `zip()`, iteration as the shared idea behind collections, decorator recognition and an orientation to generators. Assemble the capstone from existing pieces. Do not turn decorators, generators or functional helpers into separate beginner chapters.

Mission completion: a clean command-line application that prepares the reader to recognize later framework code.

Framework-book boundaries are intentionally deferred until Book 1 is complete, as requested. Django and FastAPI are not added to the current Book 1 plan.

## Mission presentation contract

### At the start of an arc

Show one mission brief containing:

- The finished goal.
- A small preview of the final behavior.
- The capabilities still needed.
- The chapters that will supply those capabilities.

### At the start of later chapters in the same arc

Do not show another mission card. Show a compact progress strip:

- Mission name.
- Completed steps.
- Current capability.
- One sentence explaining how this chapter advances the goal.

### At the end of each chapter

Add one small piece to the shared program. Do not restart with an unrelated project.

### At the end of an arc

- Assemble the pieces.
- Run the complete program.
- Include one independent variation.
- Use a compact retrieval check.
- Introduce the next mission only after the current mission is complete.

## Space utilization rules

- One main explanation surface per idea.
- No card when a heading and paragraph are enough.
- Do not repeat the same statement in a mission, caption, callout and takeaway.
- Keep code beside its explanation when layout permits.
- Use full-width visuals only when they need the width.
- Use two-column comparison layouts for short parallel concepts.
- Keep metadata to one compact line.
- Limit end-of-chapter takeaways to three to five items.
- Limit chapter checks to three or four high-value questions.
- Avoid oversized vertical padding and decorative empty space.
- In print, keep a heading with the first paragraph or code block that follows it.

## Compact Q&A contract

Use a compact question stack rather than large answer cards or modal screens.

### Web and offline HTML

- One shared bordered section for the whole check.
- Numbered question rows.
- Short options arranged in two columns on wide screens and one column on narrow screens.
- A selected answer uses a small status icon and restrained background tint.
- Explanation appears only after an answer is selected.
- No large close button, modal overlay or full-width empty answer area.
- A chapter check should normally fit within one screen.

### Book View, PDF and DOCX

- Questions appear as a compact numbered list.
- Answers appear in a short answer key immediately after the list or on the next page when needed.
- Do not print every option inside a separate large bordered box.

### Assessment quality

- Each single-answer question must have exactly one defensible correct answer.
- The supplied “Which expression outputs 36?” screenshot fails this rule because both `6 * 6` and six added sixes equal 36.
- Prefer prediction, error diagnosis and code reading over fact recall.
- Label authored questions as practice, not PYQs.

## Migration from the current edition

- Current Lessons 1 and 2 become revised Chapter 1.
- Current Lessons 3, 4 and 5 become revised Chapter 2.
- The planned Input lesson becomes Chapter 3.
- The three planned String lessons become one well-paced Chapter 5.
- The planned List lesson joins tuples, dictionaries and sets in Chapter 6, organized by the problem each collection solves.
- The existing large curriculum roadmap is replaced rather than expanded.
- Detailed route comparisons remain available as an optional visual spread, not a full interruption before basic programming.

## Evidence basis

- The official Python tutorial describes itself as non-comprehensive and aimed at programmers new to Python, which supports a more carefully scaffolded beginner selection rather than an attempt to include every feature: https://docs.python.org/3/tutorial/index.html
- Django’s official overview introduces models, an ORM, migrations, database queries and an administrative interface, showing why it requires its own project path: https://docs.djangoproject.com/en/stable/intro/overview/
- FastAPI’s official tutorial builds a separate typed API workflow with package setup, development server behavior and generated documentation: https://fastapi.tiangolo.com/tutorial/
