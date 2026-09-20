# New Book Workflow

This guide lets a human or AI agent reuse the publishing system for another Sarva Gyana Koshah Books title without mixing books or duplicating the engine.

## Operating model

Use **one shared publishing engine** and **one branch per active book**.

- `main` is the reviewed foundation. It should contain the stable renderers, export system, block schema, design system, documentation and a clean reference implementation.
- A book branch contains that book's metadata, Preface, lessons, teaching images and generated deliverables.
- A pull request is the review boundary. A book branch should not silently change another book.
- Reusable engine improvements should be designed generically and merged deliberately. Book-specific wording must not leak into shared components.

This repository may be used from environments that pin the current branch. Such an agent must not switch branches. It should document the desired branch or ask the owner to start a new session from `main`.

## Before creating a book branch

1. Finish and merge any required publishing-engine PR into `main`.
2. Pull the latest `main`.
3. Create a descriptive branch, for example:

   ```bash
   git switch main
   git pull --ff-only
   git switch -c book/first-code-input-and-decisions
   ```

4. Read `AGENTS.md` completely.
5. Write a short book brief before writing lessons.

Recommended brief fields:

- Working title and series position
- Author, imprint and edition
- Reader age and assumed knowledge
- Promise to the reader
- Learning outcomes
- Chapter sequence
- Topics explicitly out of scope
- Required formats and filename slug
- Brand assets approved for this title

## Current architecture boundary

### Shared engine

Keep these reusable and topic-neutral:

- `src/components/Blocks.jsx`
- `src/components/PrintBook.jsx`
- `src/components/RunVisualizer.jsx`
- `src/components/PipelineVisualizer.jsx`
- `src/export/docx.js`
- `src/styles/global.css`
- `scripts/generate-docx.mjs`
- `vite.singlefile.config.mjs`

### Book package

These currently define the active book and may change on a book branch:

- `src/content/index.js`
- `src/content/preface.js`
- `src/content/lesson*.js`
- Book-specific files in `src/assets/`
- Reader-facing metadata in `index.html`
- Generated files in `public/`

### Publisher package

Treat owner-provided brand assets as shared but controlled:

- `brand/sinha-crest-template.svg` is the byte-exact crest master.
- Derived crest assets are generated; never redraw the geometry.
- The imprint logo is copied from the owner's exact master without recoloring.
- Crest placement remains limited to cover/title and copyright pages unless the owner changes the policy.

## Recommended future directory evolution

Do not perform this migration casually in the middle of a book release. When multiple books are active at the same time, move toward:

```text
src/
  publishing/             shared renderers, exporters and schemas
  books/
    python-absolute-beginners/
      book.js             metadata and ordered lesson registry
      preface.js
      lessons/
      assets/
    another-book/
      book.js
      preface.js
      lessons/
      assets/
brand/                    protected publisher masters
scripts/                  generic build and scaffold commands
public/books/<book-id>/   generated deliverables
```

Select a book with a build-time `BOOK_ID`, not by editing renderer imports. Add this only when a second simultaneous book needs it; until then, the branch-per-book model is simpler and safer.

## Transcript intake

1. Preserve transcript parts in order during the working session.
2. Do not commit raw transcripts by default. They may be large, copyrighted or contain private/platform material.
3. Extract concepts and claims into working notes.
4. Remove logistics, promotions, repetition and material outside the book brief.
5. Research each concept beyond the transcript, prioritizing official sources.
6. Keep useful researched material when it improves correctness or comprehension.
7. Rewrite everything in the book's own voice. Never imitate or copy the transcript.
8. Record important URLs and one-line takeaways in the handoff or research notes.
9. Convert accepted material into pure lesson data blocks.
10. Validate every output.

## Lesson creation gate

A lesson is ready only when it has:

- A clear learning goal and prerequisite
- One concept introduced at a time
- Concrete code and visible expected output
- A run visualizer or route pipeline where execution is taught
- At least one prediction or retrieval opportunity
- Guided practice and a concise check for understanding
- Common mistakes or a bug hunt where useful
- A short summary and transition
- Correct static rendering in Book/PDF and Word
- Useful alt text and print-safe treatment for each image

Do not add a new block type unless the educational behavior cannot be represented cleanly by the existing schema.

## Build and quality gate

Run:

```bash
npm ci
npm run build
npm run generate:docx
npm run build:single
```

Then inspect:

- Light-mode Web View
- Interactive behavior and keyboard access
- Static Book View with fresh-page chapter starts
- Print/PDF appearance
- Editable DOCX styles, TOC, pagination and embedded images
- Offline HTML with no server or external asset dependency
- Public brand strings and output filenames
- No content from a different book

## Integration policy

- Commit coherent changes with a clear message.
- Push only the intended book branch.
- Open a PR against `main` when the book or reusable engine change is ready for review.
- Explain whether the PR changes the shared engine, one book, or both.
- Never merge generated output changes without the structured source that produced them.
