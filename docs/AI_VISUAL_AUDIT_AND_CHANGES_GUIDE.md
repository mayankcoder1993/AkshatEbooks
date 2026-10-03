# Handover Directive: Visual Comic Engine, Graphic Novel Spread & Live Playwright Verification
### Sarva Gyana Koshah Books · The Sinha Family Group
**Target Agent Role:** Senior Visual Frontend Architect & Automated E2E Quality Engineer  
**Book Reference:** *Zero to Agentic API Testing: The Modern Guide to Testing APIs with Postman, JavaScript and Newman*  
**Audience & Grade Level:** Complete beginners around age 12 up to working software apprentices  
**Publisher Non-Negotiables:** Light mode first, authentic graphic novel presentation (tight gutters, Scott McCloud closure grammar), zero hyphens/dashes in titles/headings, zero baked-in AI text, zero character face obscuring, zero uninspected assumptions.

---

## 1. Executive Mission & Current Architecture State

### What is Already Built and Committed
1. **Lightweight Graphic Novel Layout Engine (`Blocks.jsx` & `publishing.css`):**
   - Panels are grouped into an authentic graphic novel strip (`.storyboard-grid`) using an 8px solid dark gutter grid (`gap: 8px`), replacing website-like 2rem card padding.
   - Dynamic panel width layouts are supported:
     - `hero` / `full`: 12-column full-width establishing widescreen shot.
     - `duo`: 6-column 50%/50% conversational action-and-reaction pair.
     - `trio`: 4-column 33.3% sequential beat.
     - `wide` (8-col) / `narrow` (4-col): focus beat and reaction pair.
   - **Bifurcation Engine:** Multi-turn dialogue exchanges on a single panel are automatically unpacked into sequential panels so each image hosts at most **one clean dialogue balloon**.
   - **Dialogue Balloons (`.comic-balloon-box`):** Snug, compact footprint (`max-width: 32%` on duo, `24%` on hero) pinned to `top: 6px` in the negative ceiling headroom with directional pointer tails.
   - **Narrative Scene Captions (`.comic-narration-caption`):** Placed **directly underneath the artwork** on warm parchment (`#fffbeb`) with bold titles, rather than covering the image.
   - **Logo & Watermark Shielding:** Art image frame uses `object-position: center 30%` and `overflow: hidden` to cleanly trim bottom-corner AI generator watermarks.

2. **Asset Organization:**
   - 154 downloaded raw visual generations reside in `src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/downloaded_assets/`.
   - Master prompt suites are consolidated in `resources/ecosystem/MASTER_VISUAL_PRODUCTION_PROMPT_CH02_CH03.md`.
   - Chapter 1, 2, and 3 storyboards are registered in:
     - `src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/content/lesson01.js`
     - `src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/content/lesson02.js`
     - `src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/content/lesson03.js`

---

## 2. Your Required Scope of Work

As the incoming AI agent, your job is to audit, refine, and verify the visual presentation across Chapters 1, 2, and 3:

### Step 1: Live Visual Audit (Using Playwright / Dev Server)
1. **Start the Local Preview Server:**
   ```bash
   npm run dev
   ```
2. **Access the Interactive Book View:**
   Navigate your headless browser / Playwright runner to:
   ```text
   http://localhost:5173/?view=book
   ```
3. **Capture and Inspect Screenshots:**
   - Scroll to **Chapter 1: Understanding APIs from First Principles** (Act 1 storyboards).
   - Scroll to **Chapter 2: Investigating the Incident** (War room outage storyboard).
   - Scroll to **Chapter 3: The Automated Watchdog** (Green Lie and Collection Runner storyboards).
4. **Audit Criteria to Check:**
   - [ ] **Face Visibility:** Ensure NO dialogue balloon, tag, or tail overlaps Akshay's or Sameer's face.
   - [ ] **Gutter Uniformity:** Confirm 8px dark borders between panels create a continuous comic book spread.
   - [ ] **Scene Caption Legibility:** Confirm `.comic-narration-caption` sits neatly beneath the image with high-contrast text on `#fffbeb` parchment.
   - [ ] **Logo Shielding:** Check bottom-right and bottom-left corners of every image for any lingering AI logo artifacts. If any are visible, adjust the container crop or swap the asset.

### Step 2: Image Copy Mapping & Bifurcation Refinement
1. In `pipeline/downloaded_assets/`, multiple variations and copies of each scene exist.
2. For multi-dialogue bifurcated panels, ensure `replyImage` or `image2` points to an actual matching reaction asset rather than repeating identical frames where appropriate:
   - Akshay typing → Sameer pointing slate
   - Terminal 500 red stack trace → Code editor with 400 guard
   - Green badge empty array → Postman assertion tab
3. When updating image paths, verify imports and ensure standard relative paths from `content/lessonXX.js`.

### Step 3: Verification & Strict Publishing Quality Gates
1. Run all unit tests, snippet audits, and Newman collections:
   ```bash
   npm test
   ```
   *Expected outcome: 47 / 47 passing assertions; 0 Newman failures.*
2. Run the production build:
   ```bash
   npm run build
   ```
   *Expected outcome: Vite compiles cleanly in < 4 seconds with zero errors.*

---

## 3. Strict Operating Invariants (Do Not Violate)
1. **Rule 19 (Punctuation):** Never introduce hyphens (`-`), em-dashes (`—`), or en-dashes (`–`) into chapter titles, section headings, or comic beat titles. Use colons (`:`), commas, or natural words (`and`, `to`, `through`).
2. **Character Consistency:**
   - **Akshay:** 24-year-old North Indian apprentice, white cotton kurta, rolled sleeves, clean forehead (NO markings), white laptop with silver scratch on lid edge.
   - **Sameer:** 40-year-old South Indian Principal Architect, peacock-indigo raw-silk kurta, salt-and-pepper beard, round brass spectacles, holds faceted cutting chai glass in brass holder. Hands never touch a junior's keyboard.
3. **Dialogue Directness:** Keep dialogue lines under 160 characters per balloon so they remain readable at a glance without dominating the panel.
4. **Questions & Doubts:** If any consequential ambiguity exists regarding image attribution, layout choice, or narrative intent, **stop and ask the user directly** using clear multiple-choice or direct questions instead of making silent assumptions.

---

## 4. Git Delivery Instructions
When changes are tested and verified:
```bash
git add .
git commit -m "feat(visuals): audit and refine comic panel art, captions, and dialogue pacing"
git push origin <active-branch>
git checkout main
git merge <active-branch> --no-edit
git push origin main
git checkout <active-branch>
```
