# Research & Planning Resources: Sarva Gyana Koshah Technical Ecosystem

This directory serves as the centralized repository for all multi-AI deliberations, syllabus matrices, raw prompt outputs, failure mode audits, and narrative design documents across the curriculum.

---

## 📁 Directory Architecture

```text
resources/
├── README.md                                          # This master index
├── ecosystem/                                         # Unified library planning & cross-cutting doctrines
│   ├── doctrine-anti-vibe-coding.md                   # The 7-Layer Audit & First-Principles philosophy
│   ├── character-universe.md                          # The Indian Hindu cast roster and character arcs
│   └── raw-ai-deliberations-gap-audit.md              # Uncut external AI research, market gap audits & post-mortems
│
├── book-01-python-foundations/                        # Book 1: Python for Absolute Beginners (First Bytecode)
│   ├── syllabus-matrix.md                             # 8-chapter syllabus, gotchas, dopamine milestones, win conditions
│   ├── chapter-01-opening-scene.md                    # Lab 304 placement gate countdown master script & comic storyboard
│   └── raw-prompts-and-ai-responses.md                # Raw prompts fed to external AIs & their complete outputs
│
├── book-02-python-frameworks/                         # Book 2: Modern Python Backends (Framework Showdown)
│   ├── framework-showdown-matrix.md                   # FastAPI vs Django vs Flask specs, traps, and 7-layer audits
│   └── raw-prompts-and-ai-responses.md                # Prompts and responses for backend architecture
│
├── book-03-api-testing/                               # Book 3: Zero to Agentic API Testing (Active in repo)
│   ├── storyline-and-job-triumph-arc.md               # Akshay's admit card crisis, friends pod, and job offer triumph
│   └── raw-prompts-and-ai-responses.md                # Prompts for Postman, Newman & CI/CD pipeline chapters
│
└── book-04-agentic-ai/                                # Book 4: Production Agentic AI (The Sentinel Swarm)
    ├── agentic-failure-modes-and-swarms.md            # LangGraph, CrewAI, MCP, 2025 Replit incident & guardrails
    └── raw-prompts-and-ai-responses.md                # Prompts for autonomous swarms, NeMo Guardrails & evals
```

---

## 🔒 Source of Truth Policy
- **Immutable Raw Context:** When external AIs provide research or outlines, save their uncut responses in `raw-prompts-and-ai-responses.md` within the appropriate book directory.
- **Actionable Blueprints:** Synthesized, clean implementation plans go into the dedicated markdown files (e.g. `syllabus-matrix.md`).
- **Engine Isolation:** Content here guides the writing of code in `src/books/`, ensuring all pure data blocks follow Rule 19 and repo standards.
