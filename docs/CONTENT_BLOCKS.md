# Reusable Content Blocks

Every block is pure data and must render in interactive Web, static Book/PDF, editable DOCX and offline HTML outputs. `scripts/validate-books.mjs` rejects unsupported or incomplete blocks.

## Cross-domain blocks

- `definition`: `term`, `text`, optional `example`.
- `worked-example`: `title`, `problem`, ordered `steps`, `result`.
- `case-study`: `title`, `context`, optional `kind`, `points`, and `{label,url}` source. Use for verified real applications, events, judgments or responsibly labelled scenarios.
- `timeline`: `title` and items containing `date`, `title`, `text`.
- `comparison`: `title`, `columns`, and equally sized `rows`.
- `source-note`: `claim`, optional `label`, `url`, `verifiedThrough`.

## Exam block

`question` contains `prompt`, `answer`, optional marking points and metadata. `kind: 'verified-pyq'` additionally requires exam, year and official `sourceUrl`. AI-created questions must use `kind: 'practice'` and must never be labelled PYQ.

## School block

`activity` contains `title`, ordered `steps`, optional materials and safety guidance.

## Wellbeing blocks

- `reflection`: optional exercise with `prompt`, permission language and optional guidance.
- `safety-notice`: support boundary with text and optional `[label,url]` resources.

## Existing technical blocks

Technical titles may use code, terminal, execution visualizer, pipeline, bug hunt, prediction and program-blueprint blocks documented in the active technical book.

`bytecode-map` contains a verified runtime/version label and one or more source groups. Each group has a source line and an ordered list of named opcode actions with plain-language explanations and optional visible state. It must distinguish a learning map from literal version-sensitive disassembler output.

A new block needs data validation, Web/static rendering, DOCX rendering, accessible styles, tests and an update to root `AGENTS.md`.
