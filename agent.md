# AGENT COLLABORATION STANDARD AND MULTI AGENT PIPELINE PROTOCOL

**Document ID:** `AGENT-COLLAB-STANDARD-v2`  
**Status:** Canon  
**Audience:** All Contributing AIs (Architect AI, Story AI, Flow Image AI, Triage AI, Compositor AI, Audit AI)  
**Imprint:** Sarva Gyana Koshah Books (The Sinha Family Group)

---

## 1. Prime Directives and Core Style Boundary

### 1.1 Separation of Engineering Architecture vs Graphic Novel Artwork
* **Software and System Architecture Diagrams:** These are pure technical blueprints. They must be rendered as clean, high resolution software engineering diagrams (packages, dataflows, state machines, component trees), NEVER in folk art or character illustration styles.
* **Storybook Graphic Panels:** The Modern Tech Madhubani Hybrid style is reserved exclusively for the storybook illustrations and character narrative. In the books, characters have expressive almond eyes, fine ink outlines, and traditional Indian attire set against sandstone heritage architecture blended with modern server racks and workstations.
* **The Laptop and Screen Invariant:** Laptops, monitors, terminals, books, menus, and code editors inside the illustrations must display photorealistic, authentic syntax highlighted code (VS Code dark mode, Node.js CLI text, clean printed typography). Decorative folk art motifs or squiggles must NEVER appear on screens, code, or terminal windows.

---

## 2. The Multi Agent Publishing Assembly Line

Every book and chapter advances through seven sequential phases. Each stage produces verifiable markdown or code artifacts before the next agent begins work.

```text
┌────────────────────────────────────────────────────────────────────────┐
│ Stage 1: Architect AI                                                  │
│   • Generates Syllabus and Concept DAG (`01-ARCHITECT_AI_SYLLABUS.md`) │
│   • Defines technical milestones, wire protocols, and failure modes   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Stage 2: Story AI                                                      │
│   • Generates Scene Script (`02-STORY_AI_SCRIPT.md`)                   │
│   • Establishes scene timestamps, settings, character actions          │
│   • Details authentic emotional stakes and visceral spoken dialogues   │
│   • Formulates core wire lessons and takeaway epiphanies               │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Stage 3: Prompt Engineer and Flow Handoff AI                           │
│   • Produces Flow AI Generation Prompts (`03-IMAGE_AI_PROMPTS.md`)     │
│   • Prompts specify emotional expressions, lighting, and camera angle  │
│   • MANDATORY: Zero baked in dialogue bubbles or text labels in art    │
│   • MANDATORY: Enforces 25% to 30% negative headroom at top of canvas  │
│   • Plans interactive workbench screens and SVG dashboards             │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Stage 4: Flow AI Image Generation and Ingestion                        │
│   • External Flow AI agent generates raw illustrations from prompts    │
│   • User provides folder link; raw assets drop into incoming directory │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Stage 5: Triage and Curation AI                                        │
│   • Inspects incoming images against the 5 Rejection Filters           │
│   • Sorts assets into `organized/useful/` vs `organized/not_useful/`   │
│   • Renames approved images with canonical beat IDs                    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Stage 6: Compositor and Code Authoring AI                              │
│   • Wires approved images from `useful/` into chapter (`lessonXX.js`)  │
│   • Overlays punchy spoken dialogues in top 25% negative headroom      │
│   • Embeds interactive software workbenches and four part quad cards   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Stage 7: Quality Gate and Knowledge Base AI                            │
│   • Runs `audit-chapter.mjs` (must pass 90% threshold)                │
│   • Runs `rule19-checker.mjs` (must be 100% clean of prose hyphens)   │
│   • Runs `npm test` and Newman API test suites (zero failures)         │
│   • Amends Hierarchical RAG via `amend_rag.py` upon user confirmation │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Image Triage and Curation Rubric (`useful/` vs `not_useful/`)

When inspecting incoming images from the Flow AI agent, the Triage AI must sort every candidate into `organized/useful/` or `organized/not_useful/` based on these objective criteria:

### 3.1 Five Fatal Rejection Triggers (`not_useful/`)
1. **Low Headroom Violation:** Character heads or props occupy the upper 25% to 30% of the canvas. This destroys the lettering zone, causing dialogue balloons to occlude faces.
2. **Text or Dialogue Bubbles Baked into the Art:** Any generated speech bubbles, dialogue text, or floating conceptual labels in the sky or walls. Speech balloons must be rendered dynamically via SVG or HTML overlays, never flattened into the pixel raster.
3. **Folk Art on Technology:** Tribal patterns, squiggles, or decorative motifs rendered across laptops, monitors, phone screens, terminal slates, menus, or books. Technology must be photorealistic and readable.
4. **Outer Borders or Margins:** Any decorative outer border, lotus frame, floral margin, or picture frame. All images must be 100% full bleed 16:9 widescreen.
5. **Character Drift or Attire Violation:** Akshay in anything other than his white cotton kurta with rolled sleeves; Sameer missing his salt and pepper beard or spectacles; unnatural multi panel collages inside a single file; AI watermarks or logos.

### 3.2 Acceptance Criteria (`useful/`)
* **Aspect Ratio:** 16:9 widescreen orientation.
* **Negative Headroom:** Top 25% to 30% contains empty sky, sandstone arches, ceiling beams, or blank walls.
* **Emotional Resonance:** Facial expressions match the scene state (intense panic, focused debugging, philosophical calm).
* **Character Fidelity:** Consistent features, hairstyles, Kurta colors, and recognizable props (scratched laptop, faceted chai glass).
* **Grounding:** Heritage red sandstone surroundings paired with authentic modern computing hardware.

---

## 4. Programming Dashboards and Interactive Workbenches

Technical chapters must not rely solely on static prose. Every technical concept requires an interactive software workbench:
* **Interface Blueprints:** Planned in SVG using templates in `framework/templates/interactive-svg-templates/`.
* **Four Part Pedagogical Cards (`type: 'quad-card'`):**
  1. *Input:* Explicit stimulus, HTTP method, URL, headers, and request body payload.
  2. *Under the Hood:* Successive pipeline transformation, socket buffering, middleware deserialization.
  3. *Output:* Observable HTTP status code, response headers, and clean JSON payload.
  4. *Senior Savior:* Senior architect defensive rule, common trap warning, and memory hook.

---

## 5. Hierarchical RAG Knowledge Sharing and Amendment Gate

When any AI identifies a superior pattern, character continuity refinement, or new rule:
1. **Do not modify canon files silently.**
2. **Formulate Proposed Change:** Specify the tier (`universal` or `book`), target file, key, value, and engineering rationale.
3. **Execute Amendment CLI with Confirmation Gate:**
   ```bash
   python3 framework/rag/amend_rag.py \
     --tier book \
     --file character_ledger.json \
     --key "new_rule" \
     --value-json '{"rule": "..."}' \
     --rationale "..." \
     --confirm
   ```
4. **User Agreement:** The agent must present the proposal and rationale to the user. Only when confirmed is the change ratified, triggering automatic FAISS vector re indexing.
5. **Universal Precedence:** Tier 1 universal invariants (Rule 19 zero hyphens, inside image headroom, 4 part cards, 90% audit pass) always take precedence over localized book variables.

---

## 6. Checklist for New Incoming AIs

Before generating or editing any chapter content:
* [ ] Read `agent.md` and query the RAG via `python3 framework/rag/search.py "<query>"`.
* [ ] Verify that software architectural diagrams are clean technical diagrams, NOT folk art illustrations.
* [ ] Follow the 7 stage assembly line: Script -> Flow Prompts -> Triage -> Compositor -> Quality Audit.
* [ ] Ensure all dialogues are placed inside the artwork canvas strictly in the top 25% negative headroom.
* [ ] Enforce Rule 19: Zero hyphens or dashes in all user facing prose, headings, and speech balloons.
* [ ] Verify that `audit-chapter.mjs` achieves at least 90/100 points.
