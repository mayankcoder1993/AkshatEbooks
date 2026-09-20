# AI Authoring Workflow

The AI agent is the authoring orchestrator. A separate browser-based ingestion application is not required. The user may provide transcripts, files, notes, links, an existing manuscript or only a topic brief through the agent session. The agent uses repository files as the source of truth and follows this workflow together with root `AGENTS.md`, `CORE_EDITORIAL.md`, the active `BOOK_BRIEF.md` and the selected profiles.

## 1. Receive and preserve source material

- Identify every supplied file, transcript part, link and owner instruction.
- Preserve transcript order and wait for confirmation of the final part before a full editorial pass unless incremental work was requested.
- Never overwrite or silently “clean” the only copy of source material.
- Treat another AI agent's output as candidate material, not authority.
- Note missing, unreadable, duplicated or contradictory material immediately.
- Browser upload screens, local storage and client-side API credentials are not part of this requirement; the agent works through the session and versioned workspace.

## 2. Understand before writing

Build an internal source map:

- Main purpose and reader
- Concepts and their prerequisite relationships
- Claims requiring verification
- Definitions and terminology
- Useful examples, stories, cases, formulas, questions and activities
- Repetition, promotion, platform logistics and material to remove
- Gaps, outdated statements and misleading simplifications
- Profile, subject domain, curriculum/exam authority and version sensitivity
- Safety, privacy, copyright and professional-review concerns

Do not equate summarizing with understanding. The agent must be able to explain why each retained item belongs in the book and where it fits in the learning sequence.

## 3. Research beyond the source

- Research the concept on the internet when it improves accuracy, context or teaching.
- Prefer official documentation, specifications, curricula, exam authorities, statutes, judgments, public datasets and first-party historical sources.
- Use reputable secondary sources for explanation and synthesis.
- Keep useful researched material even when it was not in the transcript if it fits the book brief and reader level.
- Record URL, authority, date/version and a short takeaway for consequential claims.
- Never copy distinctive wording or treat search-grounded AI output as verified merely because it contains links.

## 4. Value-check and scope the material

Classify candidate material as:

1. Keep and teach
2. Keep but simplify
3. Move to a later chapter or later book
4. Use only as a comparison or sidebar
5. Research further before use
6. Reject as noise, duplication, unsupported, unsafe or out of scope

Check the proposed scope against the book brief. For the current Python book, motivation remains in the Preface, Book 1 remains Python-only, and technical depth is introduced progressively.

## 5. Decompose semantically

Create parts, chapters and sections from:

- Learning objectives
- Concept dependencies and prerequisites
- Official syllabus or curriculum structure
- Source boundaries
- Assessment boundaries
- Reader workload
- Natural narrative or reasoning flow

Character or token counts may warn that a unit is unwieldy, but they never decide where meaning is cut.

## 6. Create and approve a blueprint

Before drafting a large unit, define:

- Purpose and measurable outcome
- Assumed prior knowledge
- New terms
- Core explanation sequence
- Authentic domain evidence
- Examples and counterexamples
- Misconceptions or traps
- Visual and interaction plan
- Guided and independent activities
- Assessment/check for understanding
- Sources and facts still requiring verification
- Static-output behavior
- Connection to previous and next units

A blueprint is a planning contract, not finished prose. Preserve approved sections and apply later requests surgically rather than regenerating an entire approved chapter without need.

## 7. Select reusable educational components

Search the existing schemas and renderers before creating anything new.

### Core components

Use across domains when appropriate: heading, paragraph, definition, example, comparison, figure, table, timeline, steps, warning, callout, quiz, summary, source note and transition.

### Profile/domain components

- Technical: code, terminal, execution steps, memory state, pipeline, bug hunt.
- Exam: verified PYQ, practice question, model answer, marks guidance, examiner trap, syllabus map, timed section.
- School: learning objective, vocabulary, worked example, activity, teacher note, chapter review.
- Wellbeing: reflection, optional practice, grounding, safety notice, evidence note, support resource.
- Other domains should add only the reusable behaviors they genuinely need.

A new component is justified when it represents a reusable educational behavior that existing blocks cannot express cleanly. It requires data schema, Web renderer, static Book/PDF representation, DOCX renderer, accessible styling, tests and documentation. Do not create a one-off component merely to decorate one paragraph.

## 8. Use authentic domain evidence

Match evidence to the subject:

- Programming: executable code, exact commands, visible output, state and debugging.
- AI: data, model behavior, evaluation, limitations and reproducible demonstrations.
- Economics: sourced real applications, policies and dated data.
- History: verified events, primary evidence, maps, timelines and responsibly told real stories.
- Polity: actual constitutional provisions, amendments, judgments, institutions and legislative cases.
- Finance: calculations, risks, dated regulation and clearly labelled scenarios.
- Science/engineering: observation, experiment, measurement, calculations and physical mechanisms.
- Mathematics: worked reasoning, proof steps and alternative solution routes.
- Exam preparation: verified official past questions with provenance plus clearly labelled original practice questions.
- School: curriculum-aligned familiar examples and safe activities.
- Wellbeing: evidence-level labels, realistic scenarios and optional non-diagnostic practices.

Distinguish verified real material, simplified models, composites and invented teaching scenarios.

## 9. Draft in reviewable units

- Draft one chapter, section, assessment or visual brief at a time.
- Follow the reader level and selected profile.
- Introduce one idea at a time and define terms when needed.
- Use progressive disclosure rather than front-loading jargon.
- Preserve source links and evidence notes while drafting.
- Keep lessons as structured data rather than embedding book prose directly in UI components.
- Do not publish incomplete, truncated or schema-invalid AI output.

## 10. Plan visuals as teaching assets

- Specify the learning job, content, labels, sequence, dimensions, alt text and static behavior before generating a visual.
- Prefer professional self-explanatory diagrams over decorative images.
- Keep supporting captions short; use separate numbered explanation cards when needed.
- Never alter owner logos or protected brand geometry.
- Review generated visuals for factual accuracy, misleading scale, label errors and print readability.

## 11. Revise surgically

When feedback targets one area:

- Identify the exact affected blocks and dependent references.
- Preserve approved unrelated material.
- Show or summarize the meaningful change.
- Recheck downstream quizzes, answers, contents, captions and sources.
- Update the blueprint or brief when the decision changes standing scope.

Do not regenerate a whole book merely to fix a paragraph or example.

## 12. Validate editorial quality

Check:

- Factual and technical accuracy
- Source authority and date/version
- Reader level and clarity
- Profile and domain rules
- Curriculum/syllabus coverage where applicable
- Authentic-example labelling
- Questions, answers and marking consistency
- Safety, privacy, copyright and accessibility
- Internal terminology and cross-reference consistency
- No unsupported guarantees or invented citations

## 13. Validate every output

Render and inspect:

1. Interactive Web View
2. Static Book/PDF View
3. Native editable DOCX
4. Self-contained offline HTML

Interactive information must flatten completely. Verify images, headings, TOC, fresh-page chapter starts, page numbering, print contrast, offline operation and reader-facing branding. One self-contained HTML normally represents one book edition; very large works should split by meaningful volumes rather than arbitrary chapter files.

## 14. Update management and release records

- Update catalog status, progress, formats, branding readiness and next milestone truthfully.
- Record edition, content version, applicable technology/syllabus/curriculum, verified-through date and release notes.
- Keep generated artifacts tied to the structured source and release commit.
- Update `AGENTS.md`, the selected profile, book brief or handoff whenever a decision becomes a standing rule.
