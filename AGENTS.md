# Akshat EBooks — AI Agent Playbook

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
6. **Use professional infographics.** Prefer numbered steps, clear icons and navy/teal/amber. Avoid cartoons and long text inside images. Every image needs a caption that works as a legend.
7. **Never break the three-renderer rule.** Each block must work in Web View, Book View and Word.
8. **No server is needed by readers.** The generated HTML, DOCX and PDF are deliverables. Vite is only a development tool.

## Architecture

- `src/content/index.js`: book metadata and ordered lesson registry.
- `src/content/lesson*.js`: pure block data. No JSX.
- `src/content/preface.js`: one-page orientation.
- `src/components/Blocks.jsx`: blocks to Web/Book View.
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
2. Add `src/content/lessonX.js` as pure data.
3. Use this journey: professional image → mission → think → core idea → blueprint/code → run visualizer or pipeline → expected output → aha → try it → mistakes/guess/bug → quiz → takeaways → resources → cliffhanger.
4. Register the lesson in `src/content/index.js`.
5. If code appears, include a `runviz` or `pipeline`.
6. Import each image for browser inlining. Also add `file`, `w`, `h`, `alt` and a legend caption for Node/Word.
7. Run `npm run build`, `npm run generate:docx`, and `npm run build:single`.
8. Audit light mode, static output and 12-year-old language.

## Commands

- `npm run dev`: regenerate deliverables and start development UI.
- `npm run build`: regular production build.
- `npm run generate:docx`: write `public/Akshat-EBooks-Python-for-Absolute-Beginners.docx`.
- `npm run build:single`: write `public/AkshatEBooks-Interactive-Book.html`.

## Professional book structure

Front matter: cover → copyright/disclaimer → clickable contents → Preface → how to use. Each lesson includes a hook, learning goal, core concept, code, expected output, practice, mistakes, takeaways, links and a transition. End with about the author.

Keep callouts, code, tables and figures from splitting when possible. Every lesson begins on a new printed page. PDF and Word use a light palette.

When product rules or architecture change, update this file in the same commit.
