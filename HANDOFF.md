# Handoff: Sarva Gyana Koshah Books

Updated 2026-09-20.

## Current repository state

This branch contains the filterable publishing-library home at `/`, current-edition and explicit-edition routes, domain- and edition-isolated packages, validated manifests, generated lightweight catalog data, lazy book loading, edition-selected and build-all outputs, immutable release gates, reusable cross-profile blocks, the static Book View, light-mode-first design and four current Python lessons. Planned books and planned editions can be scaffolded without being falsely marked reader-ready.

## Brand authority

- Author: Akshat Sinha.
- Imprint: Sarva Gyana Koshah Books.
- Parent: The Sinha Family Group.
- Series: The First Code Series · Book 1.
- Active family crest variant: ivory.
- Crest use: title and copyright pages only.
- The exact imprint master is `public/brand/sarva-gyana-koshah-logo.png`. Preserve it byte-for-byte; use `npm run generate:imprint-mark` for the approved circular opening-page treatment.
- Read the branding section in `AGENTS.md` before changing reader-facing text.

## Current lessons

1. Your First Program: Hello, World!
2. How Does Our Code Reach the Computer?
3. Variables: Names for Values
4. Data Types: What Kind of Value?

Next planned lesson: `input()`, including the important rule that user input starts as a string.

## Sources of truth

Read the layered instruction stack in `docs/agents/README.md`: root `AGENTS.md`, `CORE_EDITORIAL.md`, the active `BOOK_BRIEF.md`, its selected category profile, and the new-book workflow. This book lives in `src/books/technical/programming/python-absolute-beginners/`; its active source is `editions/edition-01/`. Generated files in `public/books/python-absolute-beginners/edition-01/` are deliverables, not source.

For a different title, use the branch-per-book process in `docs/NEW_BOOK_WORKFLOW.md`. Keep shared renderers topic-neutral and do not mix multiple books' content in one branch.

## Verify before handoff

```bash
npm run build
npm run generate:docx
npm run build:single
```

The session branch is `arena/01a0bb5d-akshatebooks`. Push only that branch.
