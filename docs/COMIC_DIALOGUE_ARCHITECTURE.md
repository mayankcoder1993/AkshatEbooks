# Comic Storyboard & Dialogue Architecture Specification

**Status:** CANONICAL & LOCKED  
**Module:** `src/components/Blocks.jsx` & `src/components/DialogueTestLab.jsx`  
**Imprint:** Sarva Gyana Koshah Books

---

## 1. Core Principle: Inside-Image Comic Speech Balloons

In traditional and digital graphic novels, dialogues belong **inside the artwork frame**, floating directly in the top negative space (the **Top 30% Dialogue Ceiling**) rather than stacked as sterile text cards outside the image.

### Architectural Rules:
1. **Dialogue Placement:** Speech balloons float **over the 16:9 illustration** using responsive absolute positioning (`position: absolute; top: 4%..12%`).
2. **Headroom Protection (Zero Occlusion):**
   - All AI prompt specifications strictly require the top 25% to 30% of the image to be **empty sky, sandstone arch ceilings, or rafters**.
   - Speech balloons are constrained to `maxWidth: 36%` (or compact side positions) so they reside **strictly within this negative ceiling**.
   - Balloons never cross below 30% of image height, ensuring **zero character faces, hands, or props are covered**.
3. **Turn-Based Dynamic Positioning:**
   - **Speaker 1 (Initiator / Akshay):** Placed in the **upper-left** negative space (`left: 3.5%; top: 4%`), Sky Blue outline (`#0284c7`), pointer tail pointing toward Akshay.
   - **Speaker 2 (Reply / Sameer / Fellow Students):** Placed in the **upper-right** negative space (`right: 3.5%; top: 4%` or staggered at `top: 18%`), Peacock Indigo (`#4f46e5`) or Amber (`#ca8a04`), pointer tail pointing toward the responder.
4. **Dialogue Density Control:**
   - On single-panel illustrations, a maximum of **2 primary dialogue turns** (Call & Response) float inside the top ceiling.
   - Any extended multi-line debrief script is placed below in the **Scene & Action** or **Core Wire Lesson** box.

---

## 2. Visual Hierarchy per Panel

```text
┌─────────────────────────────────────────────────────────────────┐
│ 1. CONTEXT TOP BAR: [Phase / Scene Title]    [Time: 08:40 AM]   │
├─────────────────────────────────────────────────────────────────┤
│ 2. 16:9 CINEMATIC ARTWORK FRAME (with Inside-Image Balloons)    │
│    ┌───────────────────────────────────────────────────────┐    │
│    │ [SPEAKER 1 BUBBLE]              [SPEAKER 2 BUBBLE]   │    │
│    │ (Upper-Left Negative Sky)       (Upper-Right Ceiling) │    │
│    │ ↳ Tail pointing at Akshay       ↳ Tail pointing Sameer│    │
│    │                                                       │    │
│    │               [UNOBSTRUCTED CHARACTERS]               │    │
│    │                 (Faces, Hands, Props)                 │    │
│    └───────────────────────────────────────────────────────┘    │
│    Caption: Architectural beat context                          │
├─────────────────────────────────────────────────────────────────┤
│ 3. CONTEXT SUMMARY & REALIZATION (Post-Image Grounding):        │
│    - Scene & Action description                                 │
│    - 💡 The Core Wire Lesson (Engineering principle)            │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. Implementation Verification Checklist
- [x] Speech balloons float inside the image container.
- [x] Glassmorphism background (`rgba(255, 255, 255, 0.96)`) with high-contrast text.
- [x] Directional SVG/CSS pointer tails indicating the speaking character.
- [x] Top 30% constraint strictly observed so character faces remain 100% visible.
- [x] Dialogue text preserved byte-for-byte from canonical lesson manifests.
