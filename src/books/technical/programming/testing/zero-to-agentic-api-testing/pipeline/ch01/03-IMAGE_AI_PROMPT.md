# DIRECTIVE FOR IMAGE GENERATION AI: CHAPTER 01 FULL COMIC STRIP PANELS

> **CRITICAL DIRECTIVE FOR IMAGE GENERATION AI:**  
> Do **NOT** generate only 7 generic postcard images. A true graphic novel requires **all individual story panels** so the reader experiences genuine visual pacing, character expressions, camera angles, and action beats!
> 
> You must generate **all 14 sequential story panels** defined below.
> Every panel must strictly adhere to the **Character Consistency Anchors** and **Madhubani Folk Art Graphic Novel Style**.

---

## 1. Quick File Reference

| Resource | Repository Path |
| :--- | :--- |
| **This Master Generation Directive** | `src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/03-IMAGE_AI_PROMPT.md` |
| **Comic Strip Layout & Code Architecture** | `src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/05-COMIC_STRIP_LAYOUT_AND_CODE_DIRECTIVE.md` |
| **Output Image Storage Directory** | `src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/resources/` (and mirrored to `assets/illustrations/`) |

---

## 2. Master Character Consistency Bible (NON-NEGOTIABLE)

To stop characters from shapeshifting across panels, follow these exact visual rules:

### Akshay Mehra (The Learner)
- **Age & Build:** 23-year-old Indian student engineer; lean build; expressive almond-shaped (*badam*) eyes with double-line black Madhubani eyelids; clean-shaven; sleek parted short black hair.
- **Costume (Strictly Identical in All Panels):** Crisp plain white handloom cotton kurta with thin double-line geometric collar embroidery; dark canvas messenger bag slung diagonally across chest.
- **Negative Triggers for Akshay:** `beard, mustache, stubble, spectacles, glasses, yellow kurta, blue kurta, sherwani, bindi, forehead markings`.

### Sameer Sen (The Senior Architect / Mentor)
- **Age & Build:** 40-year-old senior enterprise architect; calm, deliberate posture; piercing warm *badam* eyes; circular brass wireframe spectacles perched on nose; neat trimmed salt-and-pepper mustache and short beard.
- **Costume (Strictly Identical in All Panels):** Deep teal/indigo raw-silk kurta with subtle golden thread neckline embroidery; frequently holding an ornate traditional brass cutting-chai holder with tea glass.
- **Negative Triggers for Sameer:** `clean-shaven face, missing glasses, young boy, teenager, jeans, western suit`.

---

## 3. Universal Technical & Aesthetic Rules

1. **Aspect Ratio:** `16:9` widescreen (`1408 x 768` or `1365 x 768`).
2. **Art Style:** Authentic Madhubani (Mithila) folk art graphic novel style with bold double-line black ink outlines (`#1E1B18`) on character contours, drapery folds, and architectural edges. Flat, rich gouache color fills.
3. **Border Frame:** Every panel MUST be framed by an intricate traditional Madhubani peacock and lotus ornamental border along all 4 outer edges.
4. **CRITICAL TEXT INVARIANT (STRICT):** **DO NOT GENERATE ANY WORDS, LETTERS, PSEUDO-ENGLISH, CODE, OR SPEECH BUBBLES IN THE PIXELS OF THE IMAGE.** All dialogues are rendered dynamically on top as vector SVG overlays. Leave the upper 20% to 25% of each panel uncluttered for speech balloons.
5. **Universal Negative Prompt:**
   ```text
   text, watermark, logo, typography, english letters, words, alphabet, code, terminal, numbers, signature, blurry, low resolution, photorealistic, 3d render, western superhero comic style, deformed hands, extra fingers, bad anatomy, distorted faces
   ```

---

## 4. The 14 Sequential Story Panel Prompts

Save all 14 generated images to:  
`src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/resources/`

---

### COMIC STRIP 1: The Morning Quad Crisis & The 14ms Wire Rescue

#### Panel 01: Akshay Sprinting in Panic
- **Filename:** `ch01-p01-akshay-quad-sprint.jpg`
- **Shot Type:** Medium-wide action shot in morning sunlight (`08:40 AM`).
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Akshay, a 23-year-old clean-shaven Indian student with sleek short black hair and expressive almond badam eyes, sprints across a sun-drenched college quadrangle in sheer panic. He wears a plain white cotton kurta with embroidered collar, his dark messenger bag bouncing on his hip. He clutches a leaking steel water bottle in one hand. In the background, majestic red sandstone Mughal arches inspired by Fatehpur Sikri, mature leafy neem trees, and students walking toward distant examination hall doors. Intricate traditional Madhubani ornamental border frame of peacocks and lotus flowers along all four edges. Bold double-line black ink outlines, warm gouache colors, golden morning light, no text, clean 16:9 ratio.
  ```

#### Panel 02: Close-Up of the Soaked Admit Card
- **Filename:** `ch01-p02-admit-card-blur.jpg`
- **Shot Type:** Tight close-up insert.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Tight dramatic close-up of young clean-shaven Akshay's trembling hands holding up a water-soaked, crumpled paper exam admit card. The ink has dissolved into a smeared blue-violet watercolor blotch, making all text completely unreadable. His fingertips are stained blue. In the background, a fellow student in a block-printed dupatta points urgently toward distant closing brass doors. Authentic Madhubani decorative floral border frame with peacocks and fish. Flat gouache textures in ivory, terracotta, and indigo, sharp double-line ink contours, no letters or text, 16:9 ratio.
  ```

#### Panel 03: The 1-Bar Phone Spinner Choke
- **Filename:** `ch01-p03-phone-spinner-choke.jpg`
- **Shot Type:** Medium shot under sandstone archway.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Akshay in his white cotton kurta stands under a carved sandstone archway, hunched over his mobile phone, tapping frantically with his thumb, sweat drops of stress on his temple, badam eyes wide with anxiety. The phone screen emits a blank white glow. Dappled morning sunlight filters through geometric jali screens behind him. Intricate traditional Madhubani peacock and lotus ornamental border along all 4 edges. Bold black ink outlines, warm sandstone ochre tones, no words or text in image, 16:9 ratio.
  ```

#### Panel 04: Sameer Arrives with Cutting Chai
- **Filename:** `ch01-p04-sameer-arrival-chai.jpg`
- **Shot Type:** Medium two-shot composition.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Medium two-shot under carved sandstone arch. Sameer, a distinguished 40-year-old architect with round brass wireframe spectacles and a neat trimmed salt-and-pepper beard, wearing a deep teal-indigo kurta with gold neckline, steps into frame smiling with calm mastery. In his hand, an ornate brass cutting chai holder with hot tea. Beside him, stressed Akshay in white kurta gestures frantically at his phone. In background, a faint glowing cyan optical data line embedded in stone wall mortar grooves. Intricate Madhubani border frame with peacocks and fish. Rich gouache colors, crisp ink contours, no text, 16:9 widescreen.
  ```

#### Panel 05: The 14 Millisecond Terminal Rescue & Sprint
- **Filename:** `ch01-p05-terminal-rescue-sprint.jpg`
- **Shot Type:** Wide dynamic action hero panel.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Wide dramatic action panel. Sameer with wireframe spectacles and trimmed beard taps on a sleek matte-black portable terminal resting on a stone ledge; the terminal screen glows warm amber. Beside him, Akshay's eyes are round with shock, already pivoting on one foot to sprint away toward massive brass exam hall doors in the background. A campus proctor in crisp linen is beginning to close the heavy door leaf. Authentic Madhubani decorative border frame with peacocks and lotus flowers. Dynamic composition, rich terracotta, amber, and indigo gouache fills, sharp double-line ink outlines, no text or numbers, 16:9 widescreen.
  ```

---

### COMIC STRIP 2: The Canteen Courier Model

#### Panel 06: Post-Exam Chai at the Stepwell Table
- **Filename:** `ch01-p06-canteen-table-relax.jpg`
- **Shot Type:** Medium two-shot sitting at table.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Sunlit campus canteen veranda overlooking a historic stone stepwell. Clean-shaven Akshay in his white cotton kurta and bearded Sameer in his teal kurta sit across a low carved teakwood table, relaxing post-exam with hot glasses of cutting chai and golden samosas on a brass plate. Akshay leans forward asking a question, while Sameer smiles thoughtfully. Arched sandstone windows, potted jasmine plants. Authentic Madhubani ornamental peacock and fish border frame. Warm ochre, turmeric, and indigo colors, double black ink outlines, clean 16:9 widescreen, no text.
  ```

#### Panel 07: Sameer Sketching on the Napkin
- **Filename:** `ch01-p07-sameer-napkin-sketch.jpg`
- **Shot Type:** Close-up on table and sketchpad.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Close-up over-the-table shot. Sameer with round spectacles and neat beard uses a brass fountain pen to sketch on a paper pad on the teak table. Beside him, attentive Akshay in white kurta watches with badam eyes shining with curiosity. On the table are faceted chai glasses and brass coasters. Intricate Madhubani border frame with lotus flowers and peacocks. Warm gouache tones, crisp black ink lines, no readable English text on sketchpad, 16:9 widescreen.
  ```

#### Panel 08: The Waiter Courier Analogy
- **Filename:** `ch01-p08-waiter-courier-model.jpg`
- **Shot Type:** Wide bustling canteen panel.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Wide bustling veranda panel. Sameer gestures with an open explanatory palm toward a cheerful canteen waiter wearing a clean Nehru jacket carrying a tiered brass food platter between the kitchen door and dining tables. Akshay smiles with realization at the table. In the background, sunlit stepwell architecture and traditional brass hanging lanterns. Intricate traditional Madhubani peacock and lotus frame. Saffron, cream, and terracotta tones, sharp double-line ink outlines, 16:9 widescreen, no text.
  ```

---

### COMIC STRIP 3: Pair Programming & The Byte Stream Trap

#### Panel 09: Akshay Coding at the Workshop Terminal
- **Filename:** `ch01-p09-akshay-coding-desk.jpg`
- **Shot Type:** Over-the-shoulder medium shot.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Modern engineering workshop interior. Akshay, clean-shaven in his white cotton kurta, sits at a dark teak workbench typing energetically on a modern computer keyboard. On the desk are coiled blue Ethernet cables, a brass Ganesha figurine, and a notepad. In the background, sleek server racks with glowing green status LEDs and arched sandstone jali windows. Intricate Madhubani border frame with peacocks and fish. Charcoal, teal, and saffron gouache fills, double black ink outlines, 16:9 widescreen, no text on screen.
  ```

#### Panel 10: The Confusion: req.body is Undefined!
- **Filename:** `ch01-p10-body-undefined-confusion.jpg`
- **Shot Type:** Close-up reaction shot.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Close-up reaction panel. Akshay in white kurta stares at the glowing monitor with hands on his head, badam eyes wide in comic bewilderment and confusion. Beside him, Sameer in teal kurta with round spectacles leans in with an amused, knowing smile, holding his cutting chai. Coiled blue network cables on the desk. Traditional Madhubani ornamental lotus and peacock border frame. Bold double-line ink contours, rich flat colors, no words or code, 16:9 widescreen.
  ```

#### Panel 11: Sameer Explaining the Byte Stream
- **Filename:** `ch01-p11-byte-stream-whiteboard.jpg`
- **Shot Type:** Wide workshop whiteboard panel.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Sameer with spectacles and trimmed beard stands at a large transparent glass whiteboard, drawing a pipe with fragmented water droplets flowing through it to explain streaming network bytes. Akshay in white kurta sits at the workbench listening with deep concentration. Arched stone walls with embedded server racks in background. Authentic Madhubani decorative frame of peacocks and fish. Turquoise, amber, and terracotta gouache colors, sharp ink outlines, 16:9 widescreen, no text.
  ```

#### Panel 12: The Middleware Fix Eureka Moment
- **Filename:** `ch01-p12-middleware-eureka.jpg`
- **Shot Type:** Warm two-shot at terminal.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Sameer leans over Akshay's shoulder at the workbench, pointing one finger toward the keyboard to guide the one-line middleware fix. Akshay punches the air with his fist, badam eyes glowing with a sudden bright eureka smile. The computer monitor emits a warm cyan glow. Brass Ganesha and chai glass on desk. Intricate Madhubani peacock and lotus border frame. Crisp black double-line contours, vibrant saffron and teal tones, 16:9 widescreen, no text.
  ```

---

### COMIC STRIP 4: The Brass Thali Rule (The 5 CRUD Verbs)

#### Panel 13: The Theatrical PUT Thali Trap
- **Filename:** `ch01-p13-put-thali-trap.jpg`
- **Shot Type:** Dining courtyard medium-wide shot.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Dining veranda scene. Sameer with round spectacles and trimmed beard dramatically holds up a large ornate circular Indian brass thali platter with six brass katoris bowls, gesturing with humorous theatrical flair as if threatening to dump the entire plate into the bin. Across the teak dining table, Akshay in his white cotton kurta pulls his own food plate back with both arms in comic panic and laughter. Traditional water jug on table, sunny garden veranda in background. Authentic Madhubani border frame with peacocks and fish. Deep saffron, gold, and lapis blue tones, sharp ink outlines, 16:9 widescreen, no text.
  ```

#### Panel 14: The Surgical PATCH Spoon & Paradigm Toast
- **Filename:** `ch01-p14-patch-spoon-synthesis.jpg`
- **Shot Type:** Evening workshop synthesis shot.
- **Prompt:**
  ```text
  Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Evening sunset in the high-tech workshop. Sameer with spectacles and trimmed beard stands beside a transparent illuminated architectural glass whiteboard, raising a cutting chai glass in a proud toast. Across the desk, Akshay in his white cotton kurta sits relaxed, smiling with calm, confident mastery, raising his own chai glass. Golden sunset rays stream through sandstone stepwell arches in the background, illuminating quiet server racks. Intricate traditional Madhubani peacock and lotus border frame. Rich evening burnt orange, terracotta, and indigo gouache tones, double black ink outlines, 16:9 widescreen, no text.
  ```

---

## 5. Production Tracking & Review Checklist

When you finish generating each image:
1. Save the file with the exact filename to `pipeline/ch01/resources/`.
2. Update the table below, changing **Status** from `Pending` to `Generated`.
3. The Architect AI will inspect composition, character consistency, and SVG overlay clearance.

| # | Panel Filename | Scene Description | Status | Review Status | Editorial Feedback |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **01** | `ch01-p01-akshay-quad-sprint.jpg` | Akshay quad sprint with leaking bottle | `Pending` | `Not Reviewed` | *(Awaiting generation)* |
| **02** | `ch01-p02-admit-card-blur.jpg` | Close-up of water-soaked blue admit card | `Pending` | `Not Reviewed` | *(Awaiting generation)* |
| **03** | `ch01-p03-phone-spinner-choke.jpg` | Akshay under arch hammering frozen phone | `Pending` | `Not Reviewed` | *(Awaiting generation)* |
| **04** | `ch01-p04-sameer-arrival-chai.jpg` | Sameer arrives with chai & calm explanation | `Pending` | `Not Reviewed` | *(Awaiting generation)* |
| **05** | `ch01-p05-terminal-rescue-sprint.jpg` | 14ms slate rescue + Akshay sprinting to doors | `Pending` | `Not Reviewed` | *(Awaiting generation)* |
| **06** | `ch01-p06-canteen-table-relax.jpg` | Post-exam chai & samosas at stepwell table | `Pending` | `Not Reviewed` | *(Awaiting generation)* |
| **07** | `ch01-p07-sameer-napkin-sketch.jpg` | Sameer sketching client/server model | `Pending` | `Not Reviewed` | *(Awaiting generation)* |
| **08** | `ch01-p08-waiter-courier-model.jpg` | Waiter delivering brass tray as API courier | `Pending` | `Not Reviewed` | *(Awaiting generation)* |
| **09** | `ch01-p09-akshay-coding-desk.jpg` | Akshay coding server.js at workshop desk | `Pending` | `Not Reviewed` | *(Awaiting generation)* |
| **10** | `ch01-p10-body-undefined-confusion.jpg` | Confusion: req.body is undefined | `Pending` | `Not Reviewed` | *(Awaiting generation)* |
| **11** | `ch01-p11-byte-stream-whiteboard.jpg` | Sameer drawing TCP stream pipe on board | `Pending` | `Not Reviewed` | *(Awaiting generation)* |
| **12** | `ch01-p12-middleware-eureka.jpg` | Middleware fix: eureka fist pump | `Pending` | `Not Reviewed` | *(Awaiting generation)* |
| **13** | `ch01-p13-put-thali-trap.jpg` | Theatrical PUT thali plate dump vs plate clutch | `Pending` | `Not Reviewed` | *(Awaiting generation)* |
| **14** | `ch01-p14-patch-spoon-synthesis.jpg` | Sunset glass whiteboard & chai toast | `Pending` | `Not Reviewed` | *(Awaiting generation)* |

---

## 6. Image AI Response Notes
*(Image AI can report generation progress, aspect ratio checks, or notes here)*
