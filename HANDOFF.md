# Handoff — Sarva Gyana Koshah Books

Updated 2026-09-20.

## Current repository state

This branch contains the block-based publishing system, native DOCX renderer, static Book View, offline single-file HTML, light-mode-first design and four lessons.

## Brand authority

- Author: Akshat Sinha.
- Imprint: Sarva Gyana Koshah Books.
- Parent: The Sinha Family Group.
- Series: The First Code Series · Book 1.
- Active family crest variant: ivory.
- Crest use: title and copyright pages only.
- Do not recreate the separate imprint logo. Wire it only after the owner uploads `final logo.png`.
- Read the branding section in `AGENTS.md` before changing reader-facing text.

## Current lessons

1. Your First Program — Hello, World!
2. How Does Our Code Reach the Computer?
3. Variables: Names for Values
4. Data Types: What Kind of Value?

Next planned lesson: `input()`, including the important rule that user input starts as a string.

## Sources of truth

Read `AGENTS.md` first. It contains the standing transcript, internet-research, editorial and branding rules. Content lives in `src/content/`. Generated files in `public/` are deliverables, not source.

For a different title, use the branch-per-book process in `docs/NEW_BOOK_WORKFLOW.md`. Keep shared renderers topic-neutral and do not mix multiple books' content in one branch.

## Verify before handoff

```bash
npm run build
npm run generate:docx
npm run build:single
```

The session branch is `arena/01a0bb5d-akshatebooks`. Push only that branch.
