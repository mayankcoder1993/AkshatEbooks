# Sarva Gyana Koshah Books — Publishing System

A scalable light-first library that turns one approved structured source per edition into an interactive Web View, static Book/PDF View, native editable Word document and self-contained offline HTML ebook.

The current title is **Python for Absolute Beginners — The First Code Series · Book 1**, by Akshat Sinha.

## Architecture

- `src/books/<domain>/<subdomain>/<book-id>/` — isolated book brief, instructions, shared material and edition packages.
- `book.manifest.json` — permanent identity, profile, status, catalog data and current edition.
- `editions/<edition-id>/edition.manifest.json` — version, verification date, content module and output names.
- `src/catalog/generated/` — generated lightweight catalog and lazy content registry.
- `src/components/` — reusable library, interactive and static renderers.
- `src/export/` — reusable native Word exporter.
- `src/publishing/` — publisher-wide metadata.
- `src/schemas/` — machine-validated book, edition and release contracts.
- `src/styles/core/`, `catalog/`, `profiles/` — separated style layers.
- `scripts/` — scaffolding, validation, catalog, export and release commands.
- `docs/agents/` — agent-led authoring workflow and category profiles.
- `docs/CONTENT_BLOCKS.md` — reusable cross-domain, exam, school, wellbeing and technical data blocks.
- `public/books/<book-id>/<edition-id>/` — generated reader deliverables.

The current edition source lives at:

```text
src/books/technical/programming/python-absolute-beginners/editions/edition-01/
```

## Quality gates

```bash
npm ci
npm run prepare:books
npm test
npm run build
npm run generate:docx
npm run build:single
# or build the library and every readable edition:
npm run build:all
```

`prepare:books` validates manifests, chapter identity/order, supported block types, image paths, alt text, edition metadata and output configuration. It then regenerates the catalog and lazy loader.

## Develop

```bash
npm run dev
```

The library opens at `/`. The current edition opens at `/books/python-absolute-beginners`; a historical or preview edition uses `/books/python-absolute-beginners/editions/<edition-id>`. Downloaded self-contained HTML opens directly as its selected book edition and needs no server.

## Create another book

```bash
npm run create:book -- \
  --id upsc-indian-polity \
  --title "Indian Polity for UPSC" \
  --domain exams \
  --subdomain upsc \
  --profile EXAM_PREPARATION
```

This creates a planned, non-readable package that appears in the management catalog without pretending content is ready. Complete its brief and blueprint, add a validated content module, then mark it reader-accessible.

## Create another edition

```bash
npm run create:edition -- \
  --book python-absolute-beginners \
  --id edition-02 \
  --label "Second Edition" \
  --version 2.0.0
```

The planned edition appears in edition history but does not replace the current edition. Add and validate its own chapter registry and content module before updating `currentEdition`.

## Build a selected book edition

```bash
BOOK_ID=python-absolute-beginners EDITION_ID=edition-01 npm run generate:docx
BOOK_ID=python-absolute-beginners EDITION_ID=edition-01 npm run build:single
```

Current outputs:

- `public/books/python-absolute-beginners/edition-01/Python-for-Absolute-Beginners-The-First-Code-Series-Book-1.docx`
- `public/books/python-absolute-beginners/edition-01/Python-for-Absolute-Beginners-Interactive.html`

## Release gate

```bash
BOOK_ID=python-absolute-beginners EDITION_ID=edition-01 npm run release:book
```

A release is blocked until the edition status and required branding are ready. Successful releases create immutable records with commit, version, verification date, byte sizes and SHA-256 checksums.

Read `AGENTS.md` and `docs/agents/README.md` before changing content or architecture.
