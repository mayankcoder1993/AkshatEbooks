# Feature Specification: NCERT Hybrid Comic and Interactive Wire Workbench Pipeline (Chapter 1)

**Feature ID:** 003-ncert-hybrid-comic-and-workbench
**Status:** IMPLEMENTED AND VERIFIED
**Created:** 2026-10-01
**Authors:** Akshat Sinha, Antigravity Agent

---

## 1. User Story and Pedagogical Motivation

As a beginner to computer networks and API development (from age 12 to university level),  
I want to learn APIs through an NCERT-inspired graphic novel paired with live, interactive network workbenches,  
So that:
1. I read dialogue comfortably with clean character cutouts and speech bubbles on a white/transparent canvas without eye strain from cluttered illustrations.
2. I experience cinematic anchor scenes showing developed Indian royal heritage (sandstone arches, stepwells, carved pillars) interwoven with modern high-tech conduits and edge servers.
3. I interact with four dedicated, brand-neutral code and wire inspection interfaces (Network Waterfall Inspector, Progressive `server.js` IDE, 5-Tab CRUD Console, and Multi-Paradigm Comparison Lens).
4. I understand the physical network mechanisms: client-server decoupling, 120-byte wire payload vs 3.8MB browser bloat, TCP chunk streams, the `req.body undefined` trap, and the Brass Thali PUT vs PATCH data-wiping risk.
5. Every visual and dialogue flattens cleanly in print/static PDF and editable Word `.docx` exports with zero lost information.

---

## 2. Character Consistency & Anchor Guidelines

| Character | Visual Anchor | Costume & Props | Strict Negative Triggers |
| :--- | :--- | :--- | :--- |
| **Akshay Mehra** (23, Student) | Sleek side-parted short black hair, clean-shaven, expressive almond (*badam*) eyes. | Crisp white handloom cotton kurta with thin double-line geometric collar embroidery; blue canvas messenger bag. | `NO beard, NO glasses, NO yellow kurta, NO blue sherwani, NO bindi` |
| **Sameer Sen** (40, Architect) | Round brass wireframe spectacles, neat trimmed salt-and-pepper mustache and short beard. | Deep teal/indigo raw-silk kurta with subtle golden thread neckline; holding brass cutting-chai holder with tea glass. | `NO clean-shaven face, NO missing spectacles, NO teenage look` |

---

## 3. Core Functional Requirements

### FR-01: NCERT-Style Dialogue Rendering
- Support multi-turn dialogue arrays (`panel.dialogues`) in `Storyboard` components.
- Render character avatars (`👨‍💻 Akshay`, `🧘‍♂️ Sameer`, `👩‍🎓 Fellow Student`) with crisp typography and clean speech tails.
- Light mode first: dialogue containers and balloons must be crystal clear on white without heavy decorative frames.

### FR-02: Flexible Comic Grid Layout
- Support 1-column (wide hero panel), 2-column (standard dialogue exchange), and 3-column layouts.
- Panels with `fullWidth: true` or `hero: true` must span the entire grid row.

### FR-03: Four Dedicated Interactive Workbenches
- **Interface 1: Network Waterfall vs Wire Payload:** Compares 3.8MB asset cascade (HTML, CSS, images, React bundle) with direct 120-byte JSON wire response in 14ms.
- **Interface 2: Progressive `server.js` IDE & Byte Stream Parser:** Side-by-side demonstration of the broken server (missing `app.use(express.json())` resulting in `req.body undefined`) and the production fix.
- **Interface 3: 5-Tab CRUD Console:** Interactive tabs for `GET` (safe read), `POST` (create new), `PUT` (the Brass Thali wipe where omitted fields become null), `PATCH` (surgical delta), and `DELETE` (204 No Content).
- **Interface 4: Multi-Paradigm Comparison Lens:** Direct comparison of REST (resource URI + JSON), SOAP 1.2 (strict XML envelope + WSDL), and GraphQL (client-selected fields).

### FR-04: Rule 19 Strict Punctuation Compliance
- Absolutely zero hyphens (`-`), en-dashes (`–`), or em-dashes (`—`) in chapter titles, subtitles, or section headings.
- Colons, commas, bullet points, or natural words used exclusively.

### FR-05: Multi-Format Representation
- All multi-turn dialogues and tabbed workbenches must render seamlessly in:
  1. Interactive Web React view.
  2. Static Book/PDF print view.
  3. Native editable Word `.docx` via `src/export/docx.js`.
