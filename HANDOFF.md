# Handoff — Akshat EBooks

Updated 2026-09-20.

## Current repository state

This branch rebuilt the missing local-only work described in the previous handoff on top of GitHub `main` (`151d867`). The working system now uses block-based content, a native DOCX renderer, static Book View, offline single-file HTML, light-mode-first design and four lessons.

## Current lessons

1. Hello, World!
2. From Code to Machine
3. Variables: Names for Values
4. Data Types: What Kind of Value?

Next planned lesson: `input()`, including the important rule that user input starts as a string.

## Sources of truth

Read `AGENTS.md` first. Content lives in `src/content/`. Generated files in `public/` are deliverables, not source.

## Verify before handoff

```bash
npm run build
npm run generate:docx
npm run build:single
```

The session branch is `arena/01a0bb5d-akshatebooks`. Push only that branch.
