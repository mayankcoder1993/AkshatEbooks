# AI Instruction System

Do not load every instruction file as if every book were the same. Use a layered instruction stack.

## Required reading order

1. Root `AGENTS.md` — publisher, source, branding, output and repository rules.
2. `docs/agents/CORE_EDITORIAL.md` — rules shared by every kind of book.
3. `docs/agents/AI_AUTHORING_WORKFLOW.md` — transcript understanding, research, blueprint, reusable-component selection, drafting, review and publishing sequence.
4. The book's `BOOK_BRIEF.md` — reader, promise, scope, structure and selected profile.
5. Exactly one primary profile from `docs/agents/profiles/`.
6. Any additional profile only when the brief explicitly describes a genuine hybrid book.
7. `docs/NEW_BOOK_WORKFLOW.md` — branch, package, build and validation procedure.

The nearest book-specific brief may narrow a general recommendation, but it may not override safety, copyright, truthful research, owner-brand protection or required-output rules.

## Available profiles

- `TECHNICAL.md` — programming, software, computing and engineering instruction.
- `EXAM_PREPARATION.md` — syllabus-led study guides, practice books and mock exams.
- `SCHOOL_TEXTBOOK.md` — grade-, subject- and curriculum-aligned learning.
- `WELLBEING.md` — self-reflection, habits, emotional wellbeing and self-help.

Add a new profile only when a book category has genuinely different evidence, pedagogy, safety or assessment needs. Do not create a new agent file merely for a different title.

## Intake from another AI agent

Material from another agent is candidate source material, not authority. Ask for its instructions, templates, sample output and source list when available. Then:

1. Compare it against the current book brief and instruction stack.
2. Keep useful structures, checklists, examples or research leads.
3. Verify factual claims and links independently.
4. Reject copied, unsupported, promotional, unsafe or out-of-scope material.
5. Rewrite accepted ideas in the book's own voice.
6. Record any reusable improvement in the correct global or profile file.
7. Put title-specific decisions only in that book's brief or content package.

Never merge another agent's entire prompt into `AGENTS.md` without classifying each rule as global, profile-specific or title-specific.
