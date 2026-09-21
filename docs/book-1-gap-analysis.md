# Book 1 implementation gap analysis

Status: implementation audit and publication-gate record

Audited: 2026-09-21

Authority: `src/books/technical/programming/python-absolute-beginners/shared/research/end-to-end-book-plan.md`

## Result

The former published source was a five-lesson prototype. It did not implement the approved unnumbered Quick Start, eight-chapter sequence, two learning arcs or continuing assistant. The source is now restructured around those requirements. The edition remains marked `drafting` and uses release-candidate version `1.0.0-rc.1` until all generated-output and editorial gates pass.

## Gap matrix

| Area | Gap found | Fix in source | State | Publication gate |
|---|---|---|---|---|
| Structure | Five legacy lessons instead of eight approved chapters | Added eight authoritative chapter modules and updated index and manifest | Fixed | Validator must confirm manifest and module agreement |
| Setup | No unnumbered setup route | Added Quick Start using official Python, VS Code, Windows-first steps, concise macOS/Linux sidebars and Git through VS Code | Fixed | Inspect current screen labels before final publication |
| Project continuity | Examples did not build one continuing product | Arc 1 now builds a deterministic local study assistant; Arc 2 organizes and tests its reusable core | Fixed | Execute final project files as a suite |
| Arc design | Every legacy lesson opened as an independent mission | Added one `arc-start` at Chapters 1 and 6, with compact `arc-progress` strips elsewhere | Fixed | Inspect web, print, DOCX and offline output |
| Experience variety | Repeated mission template | Chapters now use launch, laboratory, packing, maze, assembly, design, mapping and reliability experiences. Every chapter adds one demanding skill trial with an observable win condition and one evidence-based earned-rank panel. | Fixed | Inspect challenge pacing and avoid empty praise or artificial pressure |
| Checkpoints | Spacious separate cards and one five-question checkpoint | Renderer now uses one compact numbered stack and validator caps checkpoints at four questions | Fixed | Inspect narrow screen and print spacing |
| Visual explanation | Planned diagrams absent after Chapter 2 | Added structured comparison, flow and trace representations; retained approved existing image assets | Partly fixed | Publication blocker: add and inspect the planned dedicated string, collection, loop, function, object, import, traceback and test visuals where structured blocks are not sufficient |
| Chapter 1 consolidation | First program and execution route were separate lessons | Composed them into Chapter 1 and removed a repeated conceptual introduction between sections | Fixed in structure | Editorial repetition audit remains |
| Chapter 2 consolidation | Variables, types and numbers were separate lessons; strings missing | Composed legacy material into Chapter 2 and added strings, indexing, slicing, immutability, methods and formatting | Fixed in scope | Execute all examples and inspect workload |
| Chapters 3 to 5 | Collections, control flow, functions and input missing | Authored the three chapters and completed Arc 1 requirements in structured content | Fixed in source | Publication blocker: ship and execute the complete assistant project files |
| Chapters 6 to 8 | OOP, modules, exceptions and tests missing | Authored the three chapters and Arc 2 reliability progression | Fixed in source | Publication blocker: ship modular assistant and run its tests |
| Reading guide | Described separate missions | Rewritten to explain one shared goal across several chapters and varied chapter experiences | Fixed | Export inspection |
| Curriculum | Legacy four-phase game roadmap | Replaced by two arcs and eight chapters | Fixed | Catalog rebuild |
| Metadata | Manifest exposed old IDs and version | Updated to eight IDs, verification date and `1.0.0` | Fixed | Keep drafting until gates pass |
| Renderer | No arc block support | Added web/static renderers and styling | Fixed | Build and accessibility inspection |
| DOCX | Arc blocks were silently omitted | Added native editable arc opening and progress rendering; added Quick Start | Fixed in code | Generate and inspect native DOCX |
| Offline HTML | Output represented five lessons | Source and registry now expose Quick Start and eight chapters | Fixed in source | Regenerate and open without a server |
| Validation | Only `mission` was accepted as first block | Added arc contracts, progress bounds, Quick Start validation and checkpoint limit | Fixed | Run validator |
| Evidence | No executable end-to-end assistant artifact | Added `examples/study_assistant` with entry point, model, deterministic routes, text persistence and six passing `unittest` cases | Fixed | Re-run with the supported publication Python version before release |
| Research | Existing official source links cover key behavior | New chapters cite official Python, packaging and VS Code sources | Partly fixed | Publication blocker: claim-level research audit for every new teaching topic |
| Back matter | Reference, glossary, error guide, next map and source notes incomplete | Not yet implemented | Open | Publication blocker |
| Editorial QA | Reading age, duplication, line-by-line output and quiz defensibility not fully re-audited | Compact language and answer rules applied during authoring | Open | Publication blocker |
| Generated outputs | Existing public DOCX and HTML were stale | Regenerated native DOCX and single-file HTML from the eight-chapter source; inspected package/text presence and confirmed no external script or stylesheet references | Fixed in generation | Visual page-by-page inspection remains a publication blocker |

## Publication blockers

1. Complete claim-level source verification for the newly authored teaching material. Record verification where needed.
2. Add or approve all dedicated planned visuals and inspect them at actual page size.
3. Complete the planned back matter.
4. Run reading-level, repetition, checkpoint-answer and accessibility audits.
5. Visually inspect native DOCX and self-contained offline HTML page by page. Confirm fresh chapter pages, light mode, opening mark placement and no stale five-lesson presentation.
6. Keep status as `drafting` until every blocker is closed. Do not present draft outputs as final publication files.

Completed automated gates: the assistant’s six tests pass; book validation reports eight chapters and 285 blocks; system tests pass; production and single-file builds pass; DOCX generation passes; the scanned source and generated HTML contain no U+2014.

## Decision record

The implementation does not hide incomplete work behind a `published` status. Structural and renderer gaps are fixed in source, while evidence, visual, research, back-matter and final-output work stays explicitly open. This distinction prevents an incomplete edition from appearing complete.
