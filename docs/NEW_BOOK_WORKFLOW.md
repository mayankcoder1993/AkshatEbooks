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

4. Read the layered instruction stack in `docs/agents/README.md`.
5. Scaffold the planned package with `npm run create:book -- --id <id> --title "<title>" --domain <domain> --subdomain <group> --profile <PROFILE>`.
6. Complete the generated `BOOK_BRIEF.md` before writing chapters.
7. Select the primary profile: technical, exam preparation, school textbook or wellbeing. Use a second profile only for a genuinely hybrid title.

The brief must define identity, selected profile, reader, promise, measurable outcomes, source authority, version/syllabus/curriculum, chapter plan, exclusions, safety review, outputs and approved brand assets. Planned packages remain `readable: false` until their content module exists and passes validation.

## Current architecture boundary

### Shared engine

Keep these reusable and topic-neutral:

- `src/components/Blocks.jsx`
- `src/components/PrintBook.jsx`
- `src/components/RunVisualizer.jsx`
- `src/components/PipelineVisualizer.jsx`
- `src/export/docx.js`
- `src/publishing/`
- `src/schemas/`
- `src/styles/core/`, `src/styles/catalog/` and `src/styles/profiles/`
- `scripts/generate-catalog.mjs` and `scripts/validate-books.mjs`
- `scripts/generate-docx.mjs`
- `vite.singlefile.config.mjs`

### Book package

Every title is isolated by domain, subdomain, permanent book ID and edition:

- `src/books/<domain>/<subdomain>/<book-id>/book.manifest.json`
- `src/books/<domain>/<subdomain>/<book-id>/BOOK_BRIEF.md`
- `src/books/<domain>/<subdomain>/<book-id>/AGENTS.md` when title-specific rules exist
- `src/books/<domain>/<subdomain>/<book-id>/shared/`
- `src/books/<domain>/<subdomain>/<book-id>/editions/<edition-id>/content/`
- `src/books/<domain>/<subdomain>/<book-id>/editions/<edition-id>/assets/`
- `src/books/<domain>/<subdomain>/<book-id>/editions/<edition-id>/edition.manifest.json`
- `public/books/<book-id>/<edition-id>/` for generated deliverables

### Publisher package

Treat owner-provided brand assets as shared but controlled:

- `brand/sinha-crest-template.svg` is the byte-exact crest master.
- Derived crest assets are generated; never redraw the geometry.
- The imprint logo is copied from the owner's exact master without recoloring.
- Crest placement remains limited to cover/title and copyright pages unless the owner changes the policy.

## Multi-book and edition operation

The system discovers `book.manifest.json` files and every nested edition recursively, validates each edition independently, generates a lightweight catalog, and creates lazy content loaders keyed by `book-id@edition-id`. The library therefore does not import every chapter and image at startup.

Use `BOOK_ID=<id> EDITION_ID=<edition-id>` to build one selected edition without editing imports; omitting `EDITION_ID` selects the current edition. One self-contained HTML normally represents one edition; exceptionally large works split by meaningful volumes rather than arbitrary chapter files.

Patch and minor revisions update the active edition's semantic `contentVersion`. Create a new `edition-XX/` when a major syllabus, curriculum, technology, promise or structure change must coexist with the previous edition. Published release records are immutable and include checksums.

## Source-to-book authoring pipeline

Use this staged workflow for transcripts, uploaded documents, topic briefs and research collections:

1. **Receive through the AI agent:** register source files, transcript parts, links, notes or the approved topic brief without overwriting originals. A separate browser intake application is not required.
2. **Extract and audit:** extract text, detect missing/garbled material and record page or section provenance. Cleanup must be reviewable against the original.
3. **Understand:** classify purpose, profile, domain, authority, reader, concepts, evidence and source gaps.
4. **Decompose semantically:** propose parts and chapters from objectives, concept dependencies, source/syllabus structure and reader workload—not character counts.
5. **Blueprint:** define chapter goals, evidence, examples, activities, visuals, assessments and research needs; require approval before full drafting.
6. **Draft by approved unit:** generate or write one reviewable unit at a time and preserve source links.
7. **Review surgically:** apply targeted revisions with a visible change history rather than regenerating approved material wholesale.
8. **Validate:** run factual, profile, source, safety, accessibility, schema and output checks.
9. **Publish:** render the same approved structured source to Web, Book/PDF, DOCX and self-contained offline HTML.
10. **Release:** record edition/version, checksums, review status, verified-through dates and update schedule.

AI output that is truncated, schema-invalid or missing required sections remains incomplete. Do not make missing content appear valid merely by balancing JSON brackets.

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

## Chapter creation gate

Every chapter needs a clear purpose and prerequisite, progressive explanation, a concrete example, a profile-appropriate learner activity, feedback or solution, concise summary, transition, accessible visuals and correct static rendering in Book/PDF and Word.

Apply the selected profile's specific gate:

- Technical books require visible input/output and execution or system state where relevant.
- Exam books require syllabus mapping, marks/time/difficulty where useful, and synchronized worked solutions.
- School books require curriculum alignment, guided-to-independent practice and age-appropriate safeguarding.
- Wellbeing books require evidence/claim boundaries, optional practices, non-diagnostic language and professional/crisis escalation where relevant.

Do not add a new block type unless the educational behavior cannot be represented cleanly by the existing schema. A non-technical title will need profile-appropriate blocks before production; do not misuse code-oriented blocks merely because they already exist.

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
