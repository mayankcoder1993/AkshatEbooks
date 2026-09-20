# Sarva Gyana Koshah Books — Python for Absolute Beginners

**The First Code Series · Book 1**, by Akshat Sinha.

A light-first interactive ebook built from one structured content source.

## Repository layout

- `src/books/python-absolute-beginners/BOOK_BRIEF.md` — this title's reader, scope and selected editorial profile.
- `src/books/python-absolute-beginners/content/` — this book's metadata, Preface and lessons.
- `src/books/python-absolute-beginners/assets/` — this book's teaching images.
- `src/catalog/` — public book registry, status, milestones, and architecture data.
- `src/components/` — reusable library, Web, and Book View renderers.
- `src/export/` — reusable native Word exporter.
- `scripts/` — generation and publishing commands.
- `public/books/python-absolute-beginners/` — generated reader deliverables.
- `brand/` — protected owner brand masters when supplied.
- `docs/agents/` — shared editorial rules plus technical, exam, school and wellbeing profiles.
- `docs/BOOK_BRIEF_TEMPLATE.md` — required starting contract for every new title.
- `docs/NEW_BOOK_WORKFLOW.md` — branch and production workflow for future books.

## Deliverables

- Interactive React Web View with reveals, bug hunts, quizzes, pipelines and run visualizers.
- Static Book View for browser printing and PDF.
- Native editable Word document with real headings, TOC, headers, page numbers and images.
- Self-contained offline HTML file.

## Develop

```bash
npm install
npm run dev
```

`predev` regenerates the DOCX and offline HTML. Readers do not need the development server.

The development site opens with the publishing library at `/`. The active book is available at `/books/python-absolute-beginners`. The downloaded self-contained HTML opens directly as the book.

## Build outputs

```bash
npm run build
npm run generate:docx
npm run build:single
```

Generated deliverables:

- `public/books/python-absolute-beginners/Python-for-Absolute-Beginners-The-First-Code-Series-Book-1.docx`
- `public/books/python-absolute-beginners/Python-for-Absolute-Beginners-Interactive.html`

Read `AGENTS.md` before adding content or changing the publishing system. It includes the required transcript-and-internet-research workflow.

For another title, follow `docs/NEW_BOOK_WORKFLOW.md`. The intended model is one shared publishing engine with a dedicated branch for each active book.
