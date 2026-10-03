# Lessons 6 to 10 Blueprint

Status: superseded by `curriculum-mission-arc-redesign.md`; retained as source mapping

Verified: 2026-09-21

## Sequence

- Lesson 6: Input: Ask the Reader
- Lesson 7: Strings: Build a Clear Message
- Lesson 8: String Indexing: Find the Hidden Slice
- Lesson 9: String Tools: Remix Without Mutation
- Lesson 10: Lists: Pack and Update a Collection

## Lesson 6: Input: Ask the Reader

Dominant experience: conversation simulation.

Promise: turn a fixed script into a program that waits for and uses a reader’s answer.

Core facts:

- `input(prompt)` displays the optional prompt, reads one line and returns a string without the trailing newline.
- Even digit characters arrive as a string.
- `int()` and `float()` perform explicit conversion when arithmetic requires a numeric value.
- Invalid numeric text passed to `int()` or `float()` can raise `ValueError`.
- Do not introduce `try` and `except` before the error-handling lesson.

Program:

```python
name = input("What is your name? ")
age_text = input("How old are you? ")
age = int(age_text)
next_age = age + 1
print("Hello,", name)
print("Next year you will be", next_age)
```

Visual: terminal conversation paired with a memory view that distinguishes `"12"` from `12`.

Independent variation: change the question and perform one safe conversion.

Bug hunt: adding `1` directly to the string returned by `input()`.

Bridge: answers are strings, so the next lesson studies text directly.

## Lesson 7: Strings: Build a Clear Message

Dominant experience: message repair mission.

Promise: build text that contains an apostrophe, a line break and a changing name.

Core facts:

- Strings are `str` values.
- Single and double quotes create the same value type.
- Use the other quote style or an escape to include a matching quote.
- `\n` creates a newline and `\t` creates a tab character whose visible width depends on the display environment.
- Spaces count as string elements.
- `len()` reports string length.
- F-strings are the primary modern technique for putting values into text.

Worked example: repair a two-line welcome message.

Reduced support: add an apostrophe and one variable to a different message.

Independent variation: create a two-line event ticket.

Bug hunt: mismatched quote boundaries.

## Lesson 8: String Indexing: Find the Hidden Slice

Dominant experience: index-map mystery.

Promise: retrieve exact characters and words without rewriting the original string.

Core facts:

- Indexing is zero-based.
- Negative indexes count from the right, with `-1` selecting the last element.
- Indexing a string returns a string of length one.
- A slice uses `start:stop:step`.
- Start is included and stop is excluded.
- Omitted boundaries have context-sensitive defaults.
- An invalid single index raises `IndexError`; broad slice bounds are clipped.

Visual: `Hello World` in character boxes with positive indexes, negative indexes and boundary markers.

Worked example: derive `'World'` from `'Hello World'`.

Reduced support: `'Hello World'[8]` returns `'r'`.

Independent variation: `'tinker'[1:4]` returns `'ink'`.

Optional extension: reverse simple ASCII text with `[::-1]`, with a note that visible Unicode symbols can be more complex than one code point.

## Lesson 9: String Tools: Remix Without Mutation

Dominant experience: transformation lab.

Promise: produce several new messages while proving that the original string remains unchanged.

Core facts:

- Strings are immutable.
- Indexed assignment raises `TypeError`.
- `+` concatenates strings and does not add spacing automatically.
- Multiplication repeats a string by an integer count.
- `upper()`, `lower()` and `split()` return new values.
- Method parentheses perform the call.
- `split()` without an argument splits on whitespace runs.
- F-strings can format decimal display, such as `{score:.2f}`.
- Formatting changes displayed text, not the stored floating-point approximation.
- `str.format()` remains a supported alternative but is not the primary beginner path.
- A `#` outside a string starts a comment through the end of the physical line.

Bug hunts:

- `name[0] = "P"`
- `message.upper` instead of `message.upper()`
- missing space during concatenation

Independent variation: format a score card with a name and two decimal places.

## Lesson 10: Lists: Pack and Update a Collection

Dominant experience: packing and mutation challenge.

Promise: keep several related values in order and update the collection as events happen.

Core facts:

- A list is an ordered mutable collection.
- List literals use square brackets and commas.
- Mixed types are legal, but lists often contain values with one shared role.
- `len()`, positive indexes, negative indexes and slices work with lists.
- A list slice returns a new list.
- Indexed assignment mutates a list.
- `append()` adds one item.
- `pop()` removes and returns an item; an invalid position raises `IndexError`.
- `sort()` and `reverse()` mutate in place and return `None`.
- `sorted()` returns a separate sorted list.
- Values must be mutually orderable for a plain sort.
- Nested indexing performs one lookup and then another.

Visual: a packing row before and after replacement, append and pop operations.

Worked example: update a three-item supply list.

Reduced support: repair `saved = supplies.sort()`.

Independent variation: create one single-line list containing at least one string, integer and float, then explain why a purpose-driven list is usually clearer.

## Shared engagement contract

Each lesson will include:

- A visible opening challenge.
- A prediction before the first important reveal.
- One executable worked example.
- Reduced-support practice.
- One independent variation.
- At least one bug hunt or ordering task.
- Retrieval questions and a bridge forward.

Do not repeat the full explanations of `print()`, assignment, data-type classification, arithmetic operators or floating-point storage.

## Source basis

- Python `input()`: https://docs.python.org/3/library/functions.html#input
- Python objects and mutability: https://docs.python.org/3/reference/datamodel.html#objects-values-and-types
- Python strings, indexing and slicing: https://docs.python.org/3/tutorial/introduction.html#text
- Python formatted strings: https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals
- Python sequence and string methods: https://docs.python.org/3/library/stdtypes.html
- Python list methods: https://docs.python.org/3/tutorial/datastructures.html#more-on-lists
- Python exceptions: https://docs.python.org/3/library/exceptions.html
