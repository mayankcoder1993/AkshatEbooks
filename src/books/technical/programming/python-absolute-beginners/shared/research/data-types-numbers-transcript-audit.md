# Data Types and Numbers Transcript Audit

Status: planning only

Verified: 2026-09-21

## Source value assessment

The transcript has a useful beginner progression from value categories to arithmetic, but it mixes an overview of advanced containers with a focused numbers lesson. It also includes Jupyter interface instructions and course-platform exercises that do not belong in this book.

## Material already covered

Lesson 4 already teaches the four value types needed at this point:

- `str`: text
- `int`: whole numbers
- `float`: floating-point numbers
- `bool`: `True` or `False`

It also teaches `type()`, explicit conversion, dynamic typing, and the difference between `12` and `"12"`.

Do not repeat that complete explanation in a new chapter. The numbers chapter should begin from the types the reader already knows.

## Corrections and qualifications

- Do not say Python has only two number types. `int` and `float` are the two main numeric types needed in this beginner lesson, but Python also has `complex`, and `bool` has a special relationship with integers.
- A decimal point in a numeric literal usually creates a `float`, so `100.0` is a float. Floating-point values are binary approximations, not exact decimal storage in general.
- A string is an ordered text sequence. Quotes mark a string literal, but the quote characters are not normally part of the resulting value.
- A list is an ordered, mutable sequence. It can contain mixed types, although many real lists contain values with the same role.
- Do not call dictionaries unordered. Modern Python dictionaries preserve insertion order. They map hashable keys to values.
- Parentheses do not create a tuple by themselves. The comma is the essential part of ordinary tuple construction. Parentheses often make the grouping clearer.
- A tuple is immutable, but it can contain a mutable object such as a list. “Immutable” does not mean that every nested object is frozen.
- A set is an unordered finite collection of unique, hashable objects. A set is not a dictionary without values.
- `True` and `False` are case-sensitive Python keywords.
- `%` returns the remainder paired with floor division. For positive beginner examples it matches the familiar school remainder. Negative operands need a later qualification because the result follows Python's floor-division rule.
- `/` performs true division. With two integers it can still produce a float, as in `3 / 2 == 1.5`.
- `//` is materially relevant and should be taught alongside `/` and `%`, even though the transcript omits it.
- Division or modulo by zero raises `ZeroDivisionError`.
- `**` performs exponentiation.
- Python follows defined operator precedence. Parentheses should be used when they make intention clearer.

## Proposed placement

Add a numbers and arithmetic mission after Lesson 4 and before the planned `input()` lesson.

Reason:

- Lesson 3 already introduces variables and assignment.
- Lesson 4 identifies integers and floats.
- A numbers mission can now use those ideas without teaching several concepts at once.
- The later `input()` lesson will need arithmetic and numeric conversion for useful reader-input programs.

## Proposed Lesson 5

### Working title

Numbers: Build a 100-Point Score

### Mission

Start with a score and use arithmetic expressions to reach exactly 100 points. The reader must predict each result before running the program.

### Reader outcomes

By the end, the reader can:

1. Use `+`, `-`, `*`, `/`, `//`, `%` and `**`.
2. Explain the difference between true division and floor division for positive beginner examples.
3. Use a remainder to test whether a positive integer is even.
4. Predict which operation Python performs first.
5. Use parentheses to make an intended calculation explicit.
6. Recognise that a division result can be a float.
7. Recognise `ZeroDivisionError`.
8. Complete and explain a one-line expression whose result is 100.

### Suggested mission steps

#### Step 1: Let Python calculate

Use short expressions with visible results:

```python
2 + 1
2 - 1
2 * 2
3 / 2
```

Connect each symbol to one action. Do not spend pages imitating a calculator.

#### Step 2: Compare `/`, `//` and `%`

Use one family of values:

```python
7 / 4
7 // 4
7 % 4
```

Visualise seven counters being placed into groups of four:

- `/` answers the full quotient: `1.75`.
- `//` answers how many whole groups fit for this positive example: `1`.
- `%` answers what remains: `3`.

State that the “whole groups” wording is a beginner picture for positive operands. Python defines `//` using floor division, which matters for negative numbers.

#### Step 3: Use remainder for an even-number check

```python
23 % 2
24 % 2
```

A result of zero means a positive integer is divisible by two. Do not introduce conditional statements before their planned lesson. The reader only predicts and observes the remainder.

#### Step 4: Raise a power

```python
2 ** 3
```

Show three factors visually: `2 * 2 * 2`.

#### Step 5: Control the order

Compare:

```python
2 + 10 * 10 + 3
(2 + 10) * (10 + 3)
```

Use a visual expression tree or numbered operation path. Avoid relying only on the mnemonic “order of operations.” Show the actual grouping.

#### Step 6: Build the 100-point expression

Label this as a practice challenge, not a course-platform coding exercise.

Prompt:

> Write one Python expression that evaluates to 100. Use at least two different arithmetic operators. Predict the result, then run it.

Accept many valid solutions and explain that different expressions can produce the same value.

#### Step 7: Learn from boundary cases

Show:

- `3 / 0` raises `ZeroDivisionError`.
- `100.0` is a float even though it represents a whole-valued quantity.
- `0.1 + 0.2` may display `0.30000000000000004` because most decimal fractions cannot be represented exactly as binary floating-point values.

Keep the floating-point explanation short. Preserve the detailed binary representation for a later numbers or computing chapter.

## Visual plan

1. **Operator toolbelt:** seven large cards for `+`, `-`, `*`, `/`, `//`, `%` and `**`, each with one example.
2. **Seven counters, three answers:** one grouping diagram that compares `/`, `//` and `%` using 7 and 4.
3. **Expression order:** numbered arrows that show which part of an expression Python evaluates first.
4. **Reach 100:** a mission progress card that updates after each arithmetic step.

The visual should not place all explanations in one crowded diagram. Use separate visuals for grouping and precedence.

## Container types from the transcript

Preserve these for later lessons rather than adding them to Lesson 4 as a memorisation table:

- Lists: teach when the reader needs to keep several related values in order.
- Dictionaries: teach when the reader needs to look up a value by a meaningful key.
- Tuples: teach after lists, when a fixed record or unpacking creates a real need.
- Sets: teach when uniqueness or membership testing solves a visible problem.

Each structure should receive its own mission, executable evidence, mutation behaviour, common errors and comparison with the nearest alternative.

## Material to exclude

- Instructor greetings and next-lecture transitions.
- Jupyter toolbar and header toggles.
- Course platform submission instructions.
- Success-message language tied to an external exercise system.
- Requests to memorise a table before the concepts are needed.

## Authoritative sources consulted

- Python built-in numeric operations: https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex
- Python expressions and precedence: https://docs.python.org/3/reference/expressions.html
- Python floating-point limitations: https://docs.python.org/3/tutorial/floatingpoint.html
- Python object values, types and mutability: https://docs.python.org/3/reference/datamodel.html
- Python data structures tutorial: https://docs.python.org/3/tutorial/datastructures.html
