# Complete Python Bootcamp Syllabus Audit

Status: scope evidence for the Book 1 redesign

Verified: 2026-09-21

Course: The Complete Python Bootcamp From Zero to Hero in Python, Jose Portilla and Pierian Training

Public course page: https://www.udemy.com/course/complete-python-bootcamp/

## Access note

The supplied TCS Global Udemy URL redirects to the private Ultimatix employee login. The private quiz and learning-progress page cannot be inspected without the user’s corporate session. No credentials are needed or requested.

The public Udemy course page exposes the current curriculum. It reports 23 sections, 170 lectures and about 22 hours of content, last updated August 2025. That public syllabus is sufficient to understand the likely order and range of future transcript batches.

## Full syllabus map

1. Course Overview
2. Python Setup
3. Python Object and Data Structure Basics
4. Python Comparison Operators
5. Python Statements
6. Methods and Functions
7. Milestone Project 1
8. Object-Oriented Programming
9. Modules and Packages
10. Errors and Exceptions Handling
11. Milestone Project 2
12. Python Decorators
13. Python Generators
14. Advanced Python Modules
15. Web Scraping with Python
16. Working with Images with Python
17. Working with PDFs and Spreadsheet CSV Files
18. Emails with Python
19. Final Capstone Python Project
20. Advanced Python Objects and Data Structures
21. Bonus Introduction to GUIs
22. Appendix with older Python 2 material
23. Bonus and closing material

The public page also exposes important detail inside the early sections:

- Setup includes command-line basics, installation, running code, Jupyter, optional Git and course-material downloads.
- Object and data-structure basics include numbers, assignment, strings, formatting, lists, dictionaries, tuples, sets, booleans and basic file I/O.
- Statements include conditions, `for`, `while`, useful operators and list comprehensions.
- Functions include methods, documentation, parameters, tuple unpacking, interacting functions, `*args`, `**kwargs`, lambda, `map`, `filter` and scope.
- Milestone Project 1 includes display, user input, input validation and user interaction before the larger project.
- OOP includes classes, attributes, methods, inheritance, polymorphism and selected dunder methods.
- Modules includes pip, PyPI, packages and the `__name__` entry-point pattern.
- Error handling includes exceptions, linting and `unittest`.

## What this means for the current book

The course is not one uniform “Python basics” syllabus. It contains three different levels:

### Level A: language foundations

- Setup and running code.
- Numbers, strings and core collections.
- Comparison and Boolean logic.
- Conditions and loops.
- Functions and scope.
- User input and validation.
- Basic file I/O.
- A first milestone project.

### Level B: reliable program structure

- OOP.
- Modules and packages.
- Errors and exceptions.
- Linting and unit tests.
- A second milestone project.

### Level C: intermediate patterns and application tracks

- Decorators and generators.
- Advanced standard-library modules.
- Web scraping.
- Images, PDFs, CSV and spreadsheet work.
- Email automation.
- GUI material.
- Advanced object and data-structure details.

Trying to place all three levels in one absolute-beginner book would recreate the course’s 22-hour breadth in book form. It would also force unrelated application tracks into the core path.

## Recommended Book 1 boundary

Book 1 should cover Levels A and B. That gives the reader a real Python foundation and a reliable project without inflating every lecture into a separate chapter.

Decorators and generators can receive a short recognition-level bridge near the end only if later framework readiness requires it. Their detailed mechanics belong after the basic book.

Web scraping, image processing, PDF and spreadsheet automation, email, and GUI work are application tracks. They should not be prerequisites for completing Python Foundations. Preserve transcript facts from those sections for a later practical-Python or automation book.

The Python 2 appendix is out of scope because Book 1 teaches current Python 3 only.

## More compact chapter recommendation

The syllabus supports a compact **eight-chapter** Book 1 rather than 12 or 16 chapters.

## Mission 1: Build an Interactive Terminal Game

### Chapter 1: Make Python Run

- Quick Start remains unnumbered.
- Saved Python file and terminal output.
- `print()` and the first string.
- Concise source, Python, bytecode and machine route.

### Chapter 2: Work with Values

- Numbers and arithmetic.
- Variables and assignment.
- Strings, indexing, slicing, methods and formatting.
- Booleans and basic type awareness.

This is a substantial chapter, not a separate chapter for every value type.

### Chapter 3: Organize Data

- Lists, dictionaries, tuples and sets.
- Mutability and the problem each collection solves.
- Basic file I/O only where the mission needs saved state.

### Chapter 4: Control the Program

- Comparisons and logical operators.
- `if`, `elif`, `else`.
- `for`, `while`, `range()` and selected useful operators.
- Comprehensions only after the equivalent loop is understood.

### Chapter 5: Build with Functions and Input

- Functions, parameters, return values and scope.
- User input and conversion.
- Input validation using the concepts available at this point.
- Tuple unpacking when useful.
- `*args` and `**kwargs` as a small extension, not the center of the chapter.
- Lambda, `map` and `filter` as optional reference material.

Mission completion: assemble and vary the terminal game.

## Mission 2: Build a Reliable Modular Application

### Chapter 6: Model Behavior with Objects

- Classes, instances, attributes and methods.
- Composition.
- Introductory inheritance and polymorphism only where the project benefits.
- Selected dunder methods such as `__init__` and `__str__`.

### Chapter 7: Split and Share Code

- Modules and packages.
- Imports.
- Virtual environments.
- pip and PyPI.
- `if __name__ == "__main__":`.

### Chapter 8: Handle Problems and Prove Behavior

- Exceptions and targeted error handling.
- Debugging and linting concepts.
- Unit tests and boundary cases.
- Final assembly of the reliable project.

Mission completion: a modular program that handles expected failures and has automated tests.

## Why eight chapters is not “missing” material

A chapter can contain several tightly related lessons. Chapter count is not topic count.

The eight-chapter structure still covers every foundational section through the course’s second milestone project. It avoids giving one small operator, method or collection its own oversized opening and mission card.

Practice remains distributed inside chapters:

- Prediction.
- Worked example.
- Reduced-support variation.
- Bug hunt.
- Compact Q&A.
- Mission program increment.

## Material preserved for later, not discarded

- Decorators.
- Generators.
- `collections`, date/time tools, regular expressions and other advanced modules.
- Web scraping.
- Image processing.
- PDFs, CSV and spreadsheets.
- Email automation.
- GUI work.
- Advanced collection and object behavior.

These topics remain in the intake pipeline when their transcripts arrive. They should be audited and routed to an intermediate or application-focused volume instead of silently inserted into Book 1.

## Source-quality cautions

- The course still advertises learning both Python 2 and Python 3. This book remains Python 3 only.
- Jupyter and downloadable notebook logistics do not replace the approved VS Code and saved-script workflow.
- Course quizzes and coding exercises are evidence of intended practice, not automatically correct book content. The supplied arithmetic quiz already demonstrates why every item needs independent validation.
- The public syllabus is a source map, not the final pedagogy. Official Python documentation remains the technical authority.
