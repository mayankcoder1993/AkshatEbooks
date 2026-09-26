# SGK Rule 19 Language Standard

System ID: H10
Layer: Unified
Version: 2.0.0

---

## The Rule

Zero hyphens (-), em dashes (—), or en dashes (–) in any
user-facing prose, headings, titles, subtitle lines, bullet
list items, quiz options, callout boxes, dialogue text,
thought-bubbles, narration boxes, or instructional text.

This rule applies to every word in every SGK book in every
output format. It applies to print, HTML, DOCX, EPUB, and
game text. It applies to frontmatter, chapter content, and
backmatter.

---

## Why This Rule Exists

Hyphens and dashes create subtle reading friction and are
inconsistently applied across authors and agents. By removing
them entirely from prose (while retaining them in technical
tokens where they are syntactically mandatory), SGK achieves
consistent, clean, readable prose across all books regardless
of how many different agents contribute to them.

---

## The Replacement Protocol

When the impulse to use a hyphen or dash arises, apply this
decision tree:

CASE 1: Compound adjective before a noun
  WRONG: "real-time monitoring"
  RIGHT: "real time monitoring"
  WRONG: "end-to-end testing"
  RIGHT: "end to end testing"
  WRONG: "high-yield topics"
  RIGHT: "high yield topics"
  WRONG: "in-memory cache"
  RIGHT: "in memory cache"
  WRONG: "step-by-step guide"
  RIGHT: "step by step guide"
  WRONG: "sub-second latency"
  RIGHT: "sub second latency"
  WRONG: "pre-request script"
  RIGHT: "pre request script"
  WRONG: "multi-agent system"
  RIGHT: "multi agent system"
  WRONG: "domain-specific rules"
  RIGHT: "domain specific rules"
  WRONG: "subject-agnostic engine"
  RIGHT: "subject agnostic engine"
  Rule: Always separate. No exceptions for compound adjectives
    in user-facing prose.

CASE 2: Parenthetical thought using an em dash or en dash
  WRONG: "The audit engine—which runs automatically—flags issues."
  RIGHT: "The audit engine, which runs automatically, flags issues."
  WRONG: "The result was clear—the chapter failed the audit."
  RIGHT: "The result was clear: the chapter failed the audit."
  Rule: Use commas for parenthetical insertions.
    Use colons for result or consequence statements.

CASE 3: Range or span in prose
  WRONG: "Chapters 1-6 are certified."
  RIGHT: "Chapters 1 through 6 are certified."
  WRONG: "Score 90-100 indicates exemplary quality."
  RIGHT: "A score from 90 to 100 indicates exemplary quality."
  Rule: Use through or from N to N in prose.

CASE 4: Prefix plus word
  WRONG: "pre-existing"
  RIGHT: "preexisting"
  WRONG: "re-run"
  RIGHT: "rerun"
  WRONG: "co-author"
  RIGHT: "coauthor"
  WRONG: "multi-dimensional"
  RIGHT: "multidimensional"
  Rule: Merge the prefix and word. No hyphen.

CASE 5: Two-word verb phrase
  WRONG: "set-up the environment"
  RIGHT: "set up the environment"
  WRONG: "log-in to the system"
  RIGHT: "log in to the system"
  Rule: Two-word verbs are always separated in prose.

---

## The Whitelist: Where Hyphens and Dashes ARE Allowed

These categories are exempt from Rule 19. Hyphens and dashes
in these contexts are technical or mathematical tokens, not
prose punctuation, and must be reproduced exactly.

CATEGORY W1: Command Line Flags and Technical Tokens
  npm init -y
  node --watch server.js
  curl -X POST
  git commit -m "message"
  newman run -e env.json --bail
  These are exact machine instructions. Never modify.

CATEGORY W2: HTTP Header Names
  Content-Type: application/json
  Authorization: Bearer token
  X-Request-Id: 12345
  Cache-Control: no-store
  These are protocol-defined names. Never modify.

CATEGORY W3: URL Paths and Slugs
  /api/v1/books
  /auth-service/token
  https://api.example.com/v2/users
  These are exact resource addresses. Never modify.

CATEGORY W4: Negative Numbers
  -1 (negative one)
  -0.5 (negative zero point five)
  The temperature fell to -3 degrees.
  These are mathematical values. Never modify.

CATEGORY W5: Technical Range Notation in Code Context
  Status codes 200-299 when appearing inside a code block
    or workbench-screen block content.
  Port ranges 3000-3999 when appearing in code context.
  Note: These are NOT exempt when appearing in prose sentences.
    In prose: use "status codes from 200 to 299".

CATEGORY W6: Named Technical Standards and Protocols
  OAuth 2.0
  HTTP/1.1
  HTTP/2
  EPUB3
  These are formally named standards. Use as standardized.

CATEGORY W7: ISBN and MRP on Copyright Page
  ISBN-13: 978-X-XXXXX-XXX-X
  These are formatted identifiers with standardized hyphens.

---

## The Compound Adjective Master List

The following are the most commonly hyphenated compound
adjectives in SGK subject domains and their correct
Rule 19 form. Agents must apply these consistently.

TECH AND PROGRAMMING:
  real time (not real-time)
  end to end (not end-to-end)
  in memory (not in-memory)
  sub second (not sub-second)
  pre request (not pre-request)
  post request (not post-request)
  open source (not open-source)
  client side (not client-side)
  server side (not server-side)
  full stack (not full-stack)
  well defined (not well-defined)
  loosely coupled (not loosely-coupled)
  tightly coupled (not tightly-coupled)
  long running (not long-running)
  short lived (not short-lived)

LAW AND GOVERNANCE:
  high court (not high-court when used as adjective)
  fact finding (not fact-finding)
  law making (not law-making)
  decision making (not decision-making)
  policy making (not policy-making)
  well established (not well-established)
  long standing (not long-standing)
  far reaching (not far-reaching)

ECONOMICS AND FINANCE:
  supply side (not supply-side)
  demand side (not demand-side)
  long term (not long-term)
  short term (not short-term)
  medium term (not medium-term)
  cost benefit (not cost-benefit)
  risk adjusted (not risk-adjusted)
  market driven (not market-driven)
  interest bearing (not interest-bearing)

GENERAL ACADEMIC:
  high yield (not high-yield)
  step by step (not step-by-step)
  hands on (not hands-on)
  in depth (not in-depth)
  well known (not well-known)
  widely used (not widely-used)
  above mentioned (not above-mentioned)
  so called (not so-called)
  up to date (not up-to-date)
  out of date (not out-of-date)

---

## Rule 19 Checker Tool Specification

The automated tool at framework/tools/rule19-checker.mjs
enforces this standard.

WHAT IT SCANS:
All prose content in chapter files.
Frontmatter prose content.
Backmatter prose content.
Dialogue text in dialogue-exchange blocks.
Thought text in thought-bubble blocks.
Text in narration-box blocks.
Text in prose-paragraph blocks.
Heading text.
Bullet list text.

WHAT IT SKIPS:
Content inside workbench-screen blocks (code, commands,
  terminal output, HTTP headers).
Content inside code-snippet blocks.
Content explicitly marked as whitelisted technical token.
ISBN and MRP formatted identifiers on the copyright page.

HOW IT REPORTS:
For every violation found:
  LINE NUMBER: [N]
  CONTENT: [The exact text containing the violation]
  VIOLATION TYPE: [Compound adjective / Parenthetical dash /
    Range hyphen / Prefix hyphen]
  SUGGESTED FIX: [The Rule 19 compliant replacement]

EXIT CODES:
  0: No violations found. File is Rule 19 compliant.
  1: Violations found. Detailed report to stdout.

WHEN IT RUNS:
Automatically as part of Stage 7 audit.
Can also be run manually at any time:
  node framework/tools/rule19-checker.mjs [filepath]
