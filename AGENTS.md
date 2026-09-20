# Sarva Gyana Koshah Books — AI Agent Playbook

Read this before changing any book. This repository builds sellable multi-format books from structured content sources.

Use the layered instruction system in `docs/agents/README.md`: read this root playbook, `docs/agents/CORE_EDITORIAL.md`, the active book's `BOOK_BRIEF.md`, its selected profile, and `docs/NEW_BOOK_WORKFLOW.md`. Do not apply a technical profile to an exam, school or wellbeing title unless its brief genuinely requires it.

## Product outputs

1. Web View: React, animated and interactive.
2. Book View: light, static and print-ready for PDF.
3. Native editable Word `.docx`, generated with `docx`.
4. A self-contained offline HTML file.

## Publisher-wide non-negotiable rules

1. **Light mode first.** Every component must be clear on white. Dark mode is optional.
2. **Value-check sources.** Keep lasting teaching. Skip course logistics, support links and platform instructions.
3. **Never break the renderer rule.** Every content block must have an appropriate Web, static Book/PDF and Word representation.
4. **No server is needed by readers.** Generated HTML, DOCX and PDF are deliverables. Vite is only a development tool.
5. **Use professional, purposeful visuals.** Make each image understandable with short labels, meaningful alt text and print-safe contrast. Use a short caption plus separate numbered notes rather than one crowded legend sentence.
6. **User-visible brand.** Author = Akshat Sinha unless a book brief names another approved author. Imprint = Sarva Gyana Koshah Books. Publisher = Sarva Gyana Koshah Books, a division of The Sinha Family Group. Never show “AkshatEBooks” in reader-facing copy.
7. **Crest placement is minimal.** The exact Sinha Family crest may appear on title/cover and copyright pages only. Never redraw or retype its SVG path. Generate variants from `brand/sinha-crest-template.svg` with `npm run generate:crest`; never hand-edit a derived crest or overwrite the master. The active light-book variant is ivory (`#FAF6EC` background, `#A8842C` antique-gold ink, fixed red accents `#D9383A`).
8. **Imprint logo is a separate asset.** Never invent or redraw it. When the owner uploads `final logo.png`, copy it without recoloring.
9. **Temporary marks are not final logos.** The `SGK` text blocks currently keep layouts stable while exact owner assets are unavailable. A book is not branding-complete until the actual approved assets render in Web/Book View, DOCX and offline HTML.
10. **Keep the library truthful.** `src/catalog/books.js` is the public status registry. Update its status, progress, lesson list, formats, branding readiness and next milestone whenever a book changes. Never mark missing branding or unbuilt outputs as complete.
11. **Respect profile safety rules.** Exam claims, child safeguarding, medical or mental-health boundaries, copyright and confidential source material must follow the selected profile and `CORE_EDITORIAL.md`.
12. **Never expose AI credentials.** Do not put provider API keys in browser code, generated HTML, local storage or book files. Any future AI-assisted authoring service must keep credentials in controlled server-side secret storage.
13. **Browser storage is never the source of truth.** Local storage or IndexedDB may provide temporary recovery or caching, but permanent book source, research, versions and approvals must live in the versioned project system.
14. **Do not split chapters by character count.** Length may trigger an editorial warning, but boundaries must follow meaning: objectives, concepts, prerequisites, source sections, assessment units and reader workload.
15. **Use authentic domain evidence.** Programming uses executable examples and visible output; economics uses sourced real applications and dated data; history uses verified events and responsible stories; polity uses actual constitutional provisions, judgments and institutional cases; exam books use verified PYQs; other domains use the equivalent strongest real evidence. Never force code-style pedagogy onto a non-technical subject.

## Active book rules — Python for Absolute Beginners

These rules apply to the current `python-absolute-beginners` package, not automatically to future titles:

1. Book 1 teaches Python only. C and Java may appear only as short route comparisons.
2. Motivation and “Why Python?” belong in the one-page Preface. Lessons teach concepts, code and visualization.
3. Write for a complete beginner around age 12. Use one idea per sentence and define technical terms immediately.
4. Prefer numbered professional infographics in navy, teal and amber; avoid whimsical cartoons.
5. Show the job and a concrete example before naming bytecode, class files, compilers, linkers or other technical machinery.

## Architecture

- `src/books/python-absolute-beginners/BOOK_BRIEF.md`: active reader, scope, profile and completion contract.
- `docs/agents/`: core editorial standard and category-specific profiles.
- `src/books/python-absolute-beginners/content/index.js`: active-book metadata and ordered lesson registry.
- `src/books/python-absolute-beginners/content/lesson*.js`: pure block data. No JSX.
- `src/books/python-absolute-beginners/content/preface.js`: one-page orientation.
- `src/books/python-absolute-beginners/assets/`: teaching images used only by this book.
- `src/catalog/books.js`: public library registry, status and live architecture description.
- `src/components/LibraryHome.jsx`: catalog home, book details and project architecture view.
- `src/components/Blocks.jsx`: topic-neutral blocks to Web/Book View.
- `src/components/PrintBook.jsx`: complete static book.
- `src/export/docx.js`: blocks to native Word.
- `src/styles/global.css`: both themes and print rules.
- `scripts/generate-docx.mjs`: Node Word generator.
- `vite.singlefile.config.mjs`: offline one-file HTML build.

`staticMode={false}` means Web View. `staticMode={true}` means Book View.

## Block schema

`heading`, `paragraph`, `image`, `mission`, `think`, `guess`, `bug`, `callout`, `flow`, `blueprint`, `code`, `runviz`, `terminal`, `pipeline`, `steps`, `mistakes`, `quiz`, `takeaways`, `aha`, `cliffhanger`, `resources`.

Pipeline tracks may include a short `summary` and display `color`. Each stage may include a concrete `example` alongside its name, artifact and explanation. Keep examples short enough to scan inside a visual card.

A new block type requires: lesson data, a `Blocks.jsx` case, a `docx.js` case, CSS, and verification in all outputs.

## Mandatory static transformations

- Reveals (`think`, `guess`, `bug`) show question and answer.
- Quizzes are open.
- Run visualizers show every numbered step, memory state and output.
- Pipelines show every track and stage.
- Links show a usable label and visible URL.
- No information may require click, hover or JavaScript in Book View.

## Active technical lesson checklist

This checklist implements the active book's `TECHNICAL` profile. Other book types must use their selected profile rather than forcing code, terminals or run visualizers into unsuitable material.

1. Value-check the source.
2. Add `src/books/python-absolute-beginners/content/lessonX.js` as pure data.
3. Use this journey: professional image → mission → think → core idea → blueprint/code → run visualizer or pipeline → expected output → aha → try it → mistakes/guess/bug → quiz → takeaways → resources → cliffhanger.
4. Register the lesson in `src/books/python-absolute-beginners/content/index.js`.
5. If code appears, include a `runviz` or `pipeline`.
6. Import each image for browser inlining. Also add `file`, `w`, `h`, `alt`, a short `caption`, and optional `points` for separate numbered explanations in Web, PDF and Word.
7. Run `npm run build`, `npm run generate:docx`, and `npm run build:single`.
8. Audit light mode, static output and 12-year-old language.

## Transcript and research workflow

A transcript is source material, not finished book copy. Never paste it into a lesson without editorial work.

1. Read the complete transcript and classify its concepts, examples, analogies, exercises and claims.
2. Value-check every part. Remove greetings, promotions, repetition, platform instructions, support links, course logistics and material that does not teach the book's reader.
3. Research the concept on the internet. Prefer official language documentation, specifications, standards and first-party historical sources. Use reputable secondary sources only when they add useful context.
4. Keep useful information discovered during research even when it was not present in the transcript, provided it belongs at the reader's current level and supports the lesson goal.
5. Verify consequential technical claims with more than one source when practical. Never copy a source's wording; synthesize and rewrite it for this book.
6. Record source URLs and their relevant takeaway in working notes or the handoff so another agent can audit important claims. Do not clutter beginner pages with unnecessary academic citations.
7. Rewrite for a complete beginner around age 12: one idea at a time, immediate definitions, concrete examples, then the technical name.
8. Fit retained material into the active book brief and selected profile. For the current Python book, motivation stays in the Preface and C/Java remain short route comparisons.
9. Turn the material into testable learning using profile-appropriate activities. For technical lessons this may include prediction, code, visible output, execution steps, memory state, practice, bug hunts and quizzes.
10. Add content only through pure data blocks and confirm that interactive material flattens fully in Book/PDF and Word output.
11. Run all validation commands and inspect all four outputs before considering the transcript integrated.

If a transcript is sent in parts, acknowledge the part numbers, preserve their order and wait for the user to confirm the final part before making a full-book editorial pass unless they explicitly request incremental integration.

## Reusable book system

This repository is intended to become a publishing engine that can support many books. Shared renderers, export code, block schemas and styles should remain topic-neutral. Book metadata, lessons, Preface and teaching assets must remain isolated from engine code.

For a new book, a future agent should create a dedicated branch from an up-to-date `main` after the publishing-system changes have been merged. Do not mix two books' content in one branch. In environments that pin an agent to a specific branch, obey the pinned branch and ask the owner or open a PR rather than switching branches.

Start every title from `docs/BOOK_BRIEF_TEMPLATE.md`, select the appropriate profile in `docs/agents/profiles/`, and follow `docs/NEW_BOOK_WORKFLOW.md`. Do not duplicate or fork shared renderer components merely to change book content. Improve the shared engine on a separate focused change when a genuinely reusable capability is needed.

When another AI agent supplies notes or instructions, follow the intake process in `docs/agents/README.md`: classify, verify and rewrite useful ideas rather than merging its prompt wholesale.

## Commands

- `npm run dev`: regenerate deliverables and start development UI.
- `npm run build`: regular production build.
- `npm run generate:docx`: write `public/books/python-absolute-beginners/Python-for-Absolute-Beginners-The-First-Code-Series-Book-1.docx`.
- `npm run build:single`: write `public/books/python-absolute-beginners/Python-for-Absolute-Beginners-Interactive.html`.

## Professional book structure

Front matter: cover → copyright/disclaimer → clickable contents → Preface → how to use. Each lesson includes a hook, learning goal, core concept, code, expected output, practice, mistakes, takeaways, links and a transition. End with about the author.

Keep callouts, code, tables and figures from splitting when possible. Every lesson begins on a new printed page. PDF and Word use a light palette.

When product rules or architecture change, update this file in the same commit.
