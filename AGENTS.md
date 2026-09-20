# Sarva Gyana Koshah Books — AI Agent Playbook

Read this before changing the book. This repository builds a sellable interactive ebook for absolute beginners from one structured content source.

## Product outputs

1. Web View: React, animated and interactive.
2. Book View: light, static and print-ready for PDF.
3. Native editable Word `.docx`, generated with `docx`.
4. A self-contained offline HTML file.

## Non-negotiable rules

1. **Light mode first.** Every component must be clear on white. Dark mode is optional.
2. **Value-check sources.** Keep lasting teaching. Skip course logistics, support links and platform instructions.
3. **Book 1 is Python only.**
4. **Lessons teach. The Preface orients.** Motivation belongs in the one-page Preface. Each lesson needs a concept, code and visualization.
5. **Write for a 12-year-old.** Use one idea per sentence. Explain each technical term where it appears.
6. **Use professional infographics.** Prefer numbered steps, clear icons and navy/teal/amber. Avoid cartoons. Make the image understandable on its own with short, accurate labels. If more explanation is needed, use a short caption plus separate numbered notes below the image—never one crowded “Legend 1… Legend 2…” sentence.
7. **Never break the three-renderer rule.** Each block must work in Web View, Book View and Word.
8. **No server is needed by readers.** The generated HTML, DOCX and PDF are deliverables. Vite is only a development tool.
9. **Show, then name.** Terms such as bytecode, class file, compiler and linker require a concrete code or command example. Never teach them as definitions alone.
10. **User-visible brand.** Author = Akshat Sinha. Imprint = Sarva Gyana Koshah Books. Publisher = Sarva Gyana Koshah Books, a division of The Sinha Family Group. Never show “AkshatEBooks” in reader-facing copy.
11. **Crest placement is minimal.** The exact Sinha Family crest may appear on the title and copyright pages only. Never redraw or retype its SVG path. Generate color variants from `brand/sinha-crest-template.svg` with `npm run generate:crest`; never hand-edit a derived crest or overwrite the master. The active variant is ivory (`#FAF6EC` background, `#A8842C` antique-gold ink, fixed red accents `#D9383A`).
12. **Imprint logo is a separate asset.** Never invent or redraw it. When the owner uploads `final logo.png`, copy it without recoloring to the paths documented in the AI Share Pack.
13. **Temporary marks are not final logos.** The `SGK` text blocks currently keep layouts stable while the exact owner assets are unavailable. Replace them—not the owner artwork—when both masters arrive. A book is not branding-complete until the actual crest and imprint logo render in Web/Book View, DOCX and offline HTML.
14. **Keep the library truthful.** `src/catalog/books.js` is the public status registry. Update its status, progress, lesson list, formats, branding readiness and next milestone whenever the book changes. Never mark missing branding or unbuilt outputs as complete.

## Architecture

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

## Lesson checklist

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
8. Fit retained material into the existing learning journey. Motivation stays in the Preface. Book 1 remains Python-only; C and Java appear only as short route comparisons.
9. Turn the material into testable learning: prediction, code, visible output, execution steps, memory state, practice, bug hunt, quiz and concise takeaways as appropriate.
10. Add content only through pure data blocks and confirm that interactive material flattens fully in Book/PDF and Word output.
11. Run all validation commands and inspect all four outputs before considering the transcript integrated.

If a transcript is sent in parts, acknowledge the part numbers, preserve their order and wait for the user to confirm the final part before making a full-book editorial pass unless they explicitly request incremental integration.

## Reusable book system

This repository is intended to become a publishing engine that can support many books. Shared renderers, export code, block schemas and styles should remain topic-neutral. Book metadata, lessons, Preface and teaching assets must remain isolated from engine code.

For a new book, a future agent should create a dedicated branch from an up-to-date `main` after the publishing-system changes have been merged. Do not mix two books' content in one branch. In environments that pin an agent to a specific branch, obey the pinned branch and ask the owner or open a PR rather than switching branches.

Follow `docs/NEW_BOOK_WORKFLOW.md`. Do not duplicate or fork shared renderer components merely to change book content. Improve the shared engine on a separate focused change when a genuinely reusable capability is needed.

## Commands

- `npm run dev`: regenerate deliverables and start development UI.
- `npm run build`: regular production build.
- `npm run generate:docx`: write `public/books/python-absolute-beginners/Python-for-Absolute-Beginners-The-First-Code-Series-Book-1.docx`.
- `npm run build:single`: write `public/books/python-absolute-beginners/Python-for-Absolute-Beginners-Interactive.html`.

## Professional book structure

Front matter: cover → copyright/disclaimer → clickable contents → Preface → how to use. Each lesson includes a hook, learning goal, core concept, code, expected output, practice, mistakes, takeaways, links and a transition. End with about the author.

Keep callouts, code, tables and figures from splitting when possible. Every lesson begins on a new printed page. PDF and Word use a light palette.

When product rules or architecture change, update this file in the same commit.
