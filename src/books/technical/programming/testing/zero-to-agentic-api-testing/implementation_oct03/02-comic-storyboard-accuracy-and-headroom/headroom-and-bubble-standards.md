# Comic Storyboard Accuracy & Headroom Specifications

**Focus:** Eliminating Balloon Occlusion, Establishing Headspace Invariants, and Dialogue Positioning Rules  
**Date:** October 03, 2026  

---

## 1. The Headroom Invariant (The Dialogue Ceiling)

Every comic storyboard illustration generated for Sarva Gyana Koshah Books MUST follow the **70/30 Headspace Ratio**:
- **Bottom 70% of Canvas:** Action, characters, emotional expressions, props, and architectural ground.
- **Top 30% of Canvas (The Dialogue Ceiling):** Open negative space (sky, barrel-vaulted ceiling rafters, banyan tree canopy, or softly shaded sandstone archway tops).
- **Hard Rule:** NO character's head, eyes, or hands may penetrate the top 20% of the canvas. If a character is tall or jumping, the camera MUST use a low-angle or three-quarter perspective that pushes their head down into the middle third of the frame.

```text
┌────────────────────────────────────────────────────────────────────────┐
│ [TOP 30% DIALOGUE CEILING: OPEN SKY / SANDSTONE ARCH]                 │
│                                                                        │
│  ┌───────────────────────┐                  ┌───────────────────────┐  │
│  │ [AKSHAY]              │                  │ [SAMEER]              │  │
│  │ "My admit card        │                  │ "Fourteen             │  │
│  │ dissolved!"           │                  │ milliseconds."        │  │
│  └───────────┬───────────┘                  └───────────┬───────────┘  │
│              ▼                                          ▼              │
├────────────────────────────────────────────────────────────────────────┤
│ [BOTTOM 70% CHARACTER & ACTION ZONE]                                  │
│                                                                        │
│       Akshay's face & expression         Sameer standing with chai     │
│       completely unobstructed!           completely unobstructed!      │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Speech Balloon CSS Rules (`Blocks.jsx`)

1. **Maximum Width:** Balloons must never exceed `38%` of the card width on standard dual-column layouts (or `28%` on full-width panoramic panels).
2. **Horizontal Docking:**
   - **Speaker 1 (Primary / Prompt):** Pinned to `left: 2.5%`, `top: 2.5%`.
   - **Speaker 2 (Reply / Architect):** Pinned to `right: 2.5%`, `top: 4%` (staggered slightly lower to reflect conversational turn order).
3. **Typography & Contrast:**
   - Background: `rgba(255, 255, 255, 0.98)` with `backdrop-filter: blur(8px)`.
   - Border: Crisp 2px solid accent (`#0284c7` for Akshay, `#4f46e5` for Sameer, `#ca8a04` for Swati).
   - Speaker Tag: Bold uppercase chip inside the bubble header (`[AKSHAY]`, `[SAMEER]`).
   - Font: Italicized, weighted, high-contrast typography (`clamp(0.68rem, 0.95vw, 0.82rem)`).
4. **Directional Pointer Tails:**
   - Pointer tail must angle downwards toward the speaker's side, terminating before touching any character's hair or forehead.

---

## 3. Card Footer Layout Simplification

To eliminate the clutter identified in the user audit:
- ❌ **DELETED:** Redundant `SCENE & ACTION` block (which merely recited what the image and dialogue already showed).
- ✅ **RETAINED:**
  1. Subtle image caption directly under the art frame (grounding the location, e.g., *"Apex Campus Quadrangle"*).
  2. The punchy, high-value **💡 The Core Wire Lesson** box (giving the reader the direct first-principles takeaway).
