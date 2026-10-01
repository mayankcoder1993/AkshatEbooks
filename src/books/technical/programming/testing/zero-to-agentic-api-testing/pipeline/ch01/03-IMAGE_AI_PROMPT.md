# DIRECTIVE FOR IMAGE GENERATION AI: CHAPTER 01

> **INSTRUCTION FOR IMAGE AI:**  
> You are the **Image Generation AI** responsible for producing the visual graphic novel scene illustrations for **Chapter 01: Understanding APIs from First Principles**.  
> Please follow the exact instructions, prompts, negative prompts, file output paths, and checklist reporting protocol defined below.

---

## 1. Quick File Reference

| Resource | Repository Path |
| :--- | :--- |
| **This Master Directive & Checklist** | `src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/03-IMAGE_AI_PROMPT.md` |
| **Detailed Prompts & SVG Overlay Blueprint** | `src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/03-IMAGE_AI_PROMPTS.md` |
| **Full Story Script & Dialogue Context** | `src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/02-STORY_AI_SCRIPT.md` |
| **Output Directory for Generated Images** | `src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/resources/` |

---

## 2. Mandatory Art Style, Format & Technical Constraints

1. **Aspect Ratio:** `16:9` widescreen (`1408 x 768` or `1365 x 768`).
2. **Art Style:** Authentic Madhubani (Mithila) folk art graphic novel aesthetic fused with high-tech Indian Solarpunk/Neo-Vedic heritage:
   - Bold, crisp double-line black ink outlines (`#1E1B18`) on characters, clothes, and architectural structures.
   - Traditional almond-shaped (*badam*) eyes with sharp double-line upper lids and expressive pupils.
   - Rich, warm, saturated flat gouache color fills (sandstone ochre, deep indigo, terracotta red, antique brass/gold, sunlight ivory).
   - Intricate ornamental traditional Madhubani border frame featuring stylized peacocks, swimming fish, and blooming lotus vines enclosing all four sides of each image.
3. **Heritage + Modern Technology Setting:**
   - Red sandstone Mughal/Dravidian arches inspired by Fatehpur Sikri.
   - Whisper-thin cyan optical fiber data conduits embedded flush into carved stone grooves.
   - Sleek matte-black diagnostic slates and edge-server cylinders sitting naturally among ancient neem tree roots.
4. **CRITICAL TEXT INVARIANT (STRICT):**
   - **DO NOT GENERATE ANY ENGLISH WORDS, CODE, LETTERS, NUMBERS, OR SPEECH BUBBLES IN THE PIXELS OF THE IMAGE.**
   - All dialogue speech bubbles, code snippets, and terminal outputs are rendered dynamically on top as vector SVG overlays by the web engine.
   - Ensure the upper 20% to 25% of each panel has breathing room (sky, stone arch ceilings, or soft background foliage) so the SVG speech bubbles can sit comfortably without covering character faces.
5. **Universal Negative Prompt:**
   ```text
   text, watermark, logo, typography, english letters, words, alphabet, code, terminal, numbers, signature, blurry, low resolution, photorealistic, 3d render, western superhero comic style, deformed hands, extra fingers, bad anatomy, distorted faces
   ```

---

## 3. Character Visual Bible

### Akshay Mehra (The Learner)
- **Age & Role:** 23-year-old student engineer; curious, expressive, energetic.
- **Features:** Parted short black hair, clean-shaven, expressive almond (*badam*) eyes that reflect vivid emotions (panic, wonder, eureka insight).
- **Outfit:** Crisp white handloom cotton kurta with subtle geometric mustard embroidery along the mandarin collar; rolled sleeves; dark canvas messenger bag slung across chest.

### Sameer Sen (The Senior Architect / Mentor)
- **Age & Role:** 40-year-old senior enterprise architect; deeply calm, master of distributed systems.
- **Features:** Neat salt-and-pepper trimmed beard, round wireframe brass spectacles, piercing yet warm *badam* eyes.
- **Outfit:** Deep indigo raw-silk kurta with antique-gold border weave; frequently holding an ornate traditional brass cup holder with hot cutting chai in a faceted glass.

---

## 4. The 7 Scene Generation Tasks

Generate all 7 images and save them directly to:  
`src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/resources/`

---

### Scene 1: The Ink Dissolves on the Quad
- **Filename:** `ch01-scene-01-ink-dissolves.jpg`
- **Scene ID:** `ch01-scene-01`
- **Scene Summary:** At 08:40 AM, Akshay sprints across the sunlit sandstone quad in panic clutching a water-soaked admit card whose printed text has smeared into an illegible blue watercolor blotch, 20 minutes before gate lock.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Wide dynamic action panel. Akshay, a 23-year-old Indian student with sleek short black hair and expressive almond badam eyes, sprints across a sun-drenched college quadrangle in panic. His white cotton kurta with embroidered collar billows behind him, messenger bag bouncing. He holds up a water-soaked, crumpled paper admit card with smeared blue watercolor blotches in horror. In the background, majestic red sandstone arches inspired by Mughal Fatehpur Sikri with intricate jali lattice screens, old leafy neem trees, and students walking toward massive brass-studded exam hall doors. Intricate Madhubani ornamental border frame of peacocks and lotus flowers along all four edges. Bold double-line black ink outlines, rich flat gouache color fills, golden morning sunlight, sharp focus, no text or words on image, clean 16:9 ratio.
  ```

---

### Scene 2: The White Screen Portal Spinner
- **Filename:** `ch01-scene-02-portal-spinner.jpg`
- **Scene ID:** `ch01-scene-02`
- **Scene Summary:** Under a sandstone archway with weak 1-bar Wi-Fi, Akshay taps furiously on his phone, which is frozen on a 4MB loading spinner. Sameer walks up with calm curiosity holding a steaming cup of cutting chai.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Medium two-shot composition under a carved sandstone archway. Akshay, with stressed almond badam eyes, hunches over a glowing glass mobile phone, tapping frantically with his thumb. Sameer, a 40-year-old distinguished mentor with salt-and-pepper beard, wireframe round spectacles, and an indigo raw-silk kurta with gold trim, steps in from the right holding an ornate brass cutting chai holder with hot tea. Sameer gestures calmly with a knowing smile. Dappled sunlight through geometric jali screens, leafy neem branch visible outside the arch, faint glowing cyan data conduit embedded in stone wall. Intricate traditional Madhubani peacock and fish floral border framing the 16:9 canvas. Rich gouache earth tones, crisp ink line work, pure white background elements, no text or letters in the illustration.
  ```

---

### Scene 3: The 14 Millisecond Terminal Rescue
- **Filename:** `ch01-scene-03-terminal-rescue.jpg`
- **Scene ID:** `ch01-scene-03`
- **Scene Summary:** Sameer types a single curl command on a sleek matte-black terminal slate resting on a stone ledge. The 120-byte admit card JSON returns in 14ms. Akshay turns in shock and sprints toward the brass doors as the proctor counts down.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Action panel in cloister. Sameer taps a sleek matte-black portable terminal resting on a carved stone ledge. The terminal screen has an amber glow. Akshay stands beside him, badam almond eyes dilated in absolute shock and astonishment, clutching his messenger bag strap, already pivoting his foot to sprint. In the blurred background, grand brass exam hall doors are beginning to close with a proctor holding a clipboard. Authentic Madhubani decorative floral border frame with peacocks and fish. Flat gouache textures in antique gold, amber, indigo, and terracotta, sharp double-line ink contours, clean composition, 16:9 widescreen, no words or code rendered in the artwork.
  ```

---

### Scene 4: The Whiteboard Restaurant Model
- **Filename:** `ch01-scene-04-canteen-waiter.jpg`
- **Scene ID:** `ch01-scene-04`
- **Scene Summary:** At a sunlit veranda table overlooking the stepwell, Sameer and Akshay sit with chai and samosas. Sameer gestures toward a cheerful waiter carrying a tiered brass food tray, explaining the API client-courier-server contract.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Sunlit campus canteen veranda overlooking a stone stepwell. Sameer and Akshay sit across a low teakwood table with hot cutting chai glasses and golden samosas. Sameer smiles, gesturing with an open hand toward a cheerful waiter in a clean Nehru jacket carrying a tiered brass food tray between the dining room and the kitchen door. Akshay leans forward with sharp badam eyes, listening with complete fascination, resting a notebook on the table. Arched sandstone windows, brass hanging lamps, potted jasmine plants. Authentic Madhubani decorative peacock and lotus frame. Warm ochre, turmeric, terracotta, and indigo colors, double black ink outlines, 16:9 widescreen, no text or words on image.
  ```

---

### Scene 5: Pair Programming: Port 3000 and the Byte Stream Trap
- **Filename:** `ch01-scene-05-byte-stream-trap.jpg`
- **Scene ID:** `ch01-scene-05`
- **Scene Summary:** In the workshop, Akshay types at a terminal on port 3000 and gets `req.body undefined`. Sameer leans over his shoulder, smiling wisely as he explains the TCP byte stream and `app.use(express.json())`.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Workshop interior. Akshay sits at a teakwood desk typing on a modern split-pane matte-black terminal, looking surprised and puzzled with wide badam eyes. Sameer leans over his shoulder, holding a cup of tea, tapping one finger deliberately toward the desk to explain, a wise grin on his face. On the desk are coiled blue Ethernet cables, a small brass Ganesha idol, and an Express.js card. In the background, arched sandstone jali windows with afternoon amber sunlight and slim glowing server towers. Elaborate Madhubani decorative floral border frame with peacocks and fish. Strong double-line ink contours, rich saffron, teal, and charcoal hues, clean 16:9 widescreen, no text or code in the artwork.
  ```

---

### Scene 6A: The Five CRUD Verbs and the Brass Thali Rule
- **Filename:** `ch01-scene-06a-brass-thali.jpg`
- **Scene ID:** `ch01-scene-06a`
- **Scene Summary:** Over lunch, Sameer dramatically lifts a large circular Indian brass thali with six bowls (*katoris*), pretending to dump it to illustrate how `PUT` replaces the whole plate while `PATCH` tops up a single bowl. Akshay pulls his plate away in comic horror.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Dining scene. Sameer with spectacles and trimmed beard dramatically holds up a large ornate circular Indian brass thali platter with six brass katoris bowls (dal, paneer, vegetables, rice), gesturing with humorous theatrical flair as if threatening to wipe the plate clean. Across the table, Akshay pulls his own plate back with both arms in comic alarm and realization, mouth open in laughter. Teak dining table, clay water jug, sunlit arched jali veranda in background. Authentic Madhubani peacock and lotus border frame. Deep saffron, turmeric yellow, brass gold, and lapis blue tones, sharp double-line ink outlines, 16:9 widescreen, no text on image.
  ```

---

### Scene 6B: The Three Great Paradigms: REST, SOAP, GraphQL
- **Filename:** `ch01-scene-06b-three-paradigms.jpg`
- **Scene ID:** `ch01-scene-06b`
- **Scene Summary:** Evening in the workshop. Sameer stands beside a transparent glass architectural whiteboard divided into three glowing sketched columns (REST, SOAP, GraphQL), raising his chai cup in a proud toast. Akshay sits relaxed, transformed into an API thinker.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Workshop synthesis panel. Sameer stands beside a transparent glass architectural whiteboard divided into three glowing sketched columns. He raises a cup of cutting chai in a toast to Akshay. Akshay sits relaxed at the teak table, badam almond eyes calm and radiant with confidence, nodding as he holds his own tea glass. Sunset amber rays stream through deep sandstone stepwell arches in the background, illuminating quiet server racks. Intricate traditional Madhubani peacock and lotus border frame. Rich evening color palette of burnt orange, terracotta, deep indigo, and warm brass, double black ink outlines, 16:9 widescreen, no words or code in the artwork.
  ```

---

## 5. Production Tracking & Review Checklist

When you finish generating each image:
1. Save the image file to the designated path.
2. In the table below, change **Status** from `Pending` to `Generated`.
3. Fill in the **Output File Location**.
4. The Architect AI will review the images, inspect composition and SVG compatibility, and update the **Review Status** and **Editorial Feedback** columns.

| Scene # | Scene Title | Expected Filename | Status | Review Status | Output File Location | Editorial Feedback |
| :---: | :--- | :--- | :---: | :---: | :--- | :--- |
| **01** | The Ink Dissolves on the Quad | `ch01-scene-01-ink-dissolves.jpg` | `Generated` | `Approved` | `pipeline/ch01/resources/ch01-scene-01-ink-dissolves.jpg` | 16:9 widescreen, authentic Madhubani border, excellent panic expression and blurred admit card ink. |
| **02** | The White Screen Portal Spinner | `ch01-scene-02-portal-spinner.jpg` | `Generated` | `Approved` | `pipeline/ch01/resources/ch01-scene-02-portal-spinner.jpg` | Sandstone arch with cutting chai holder, excellent contrast between anxious Akshay and calm Sameer. |
| **03** | The 14 Millisecond Terminal Rescue | `ch01-scene-03-terminal-rescue.jpg` | `Generated` | `Approved` | `pipeline/ch01/resources/ch01-scene-03-terminal-rescue.jpg` | Cloister setting with amber slate, closing brass exam hall doors in background, clear 16:9 ratio. |
| **04** | The Whiteboard Restaurant Model | `ch01-scene-04-canteen-waiter.jpg` | `Generated` | `Approved` | `pipeline/ch01/resources/ch01-scene-04-canteen-waiter.jpg` | Canteen veranda over stepwell, cheerful waiter with tiered brass tray, chai and samosas on table. |
| **05** | Pair Programming: Port 3000 & Byte Stream | `ch01-scene-05-byte-stream-trap.jpg` | `Generated` | `Approved` | `pipeline/ch01/resources/ch01-scene-05-byte-stream-trap.jpg` | Workshop desk with server racks, terminal window, blue Ethernet cables, and brass Ganesha idol. |
| **06A** | The Five CRUD Verbs & Brass Thali Rule | `ch01-scene-06a-brass-thali.jpg` | `Generated` | `Approved` | `pipeline/ch01/resources/ch01-scene-06a-brass-thali.jpg` | Ornate brass thali with six katoris, expressive theatrical posture from Sameer, laughing Akshay. |
| **06B** | The Three Paradigms: REST, SOAP, GraphQL | `ch01-scene-06b-three-paradigms.jpg` | `Generated` | `Approved` | `pipeline/ch01/resources/ch01-scene-06b-three-paradigms.jpg` | Evening sunset stepwell background, transparent illuminated diagram whiteboard, chai toast. |

---

## 6. Communication Protocol for Image AI

When your run is complete:
- Leave your generation notes or SVG bubble positioning suggestions under the **Image AI Response Notes** section below.
- Keep all generated images inside `pipeline/ch01/resources/`.
- Tell the user: *"Image generation for Chapter 01 completed. Table updated in `03-IMAGE_AI_PROMPT.md`."*

### Image AI Response Notes:
All 7 scene illustrations have been generated in native 16:9 widescreen format following the Madhubani folk art aesthetic (double-line ink contours, almond eyes, ornate peacock and lotus outer borders). The upper 25% of each panel preserves clear background headroom to support dynamic SVG speech bubble overlays without obscuring character faces. Files are stored in `pipeline/ch01/resources/` and synced to `editions/edition-01/assets/illustrations/`.
