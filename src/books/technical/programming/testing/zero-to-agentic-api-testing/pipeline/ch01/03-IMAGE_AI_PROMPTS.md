# Chapter 01: Image AI Generation Prompts & SVG Overlay Blueprint

This document specifies the exact generative image prompts for the Image AI and the production SVG text overlay blueprints for Chapter 01 of *Zero to Agentic API Testing*.

---

## 🎨 Master Art & Style Specification

- **Art Style:** Authentic Madhubani (Mithila) folk art graphic novel aesthetic merged with Solarpunk/Neo-Vedic high-tech Indian heritage.
- **Line Work:** Bold, double-line black ink outlines (`#1E1B18`) on character contours, drapery folds, and architectural edges. Fine cross-hatching and dotting for traditional texture.
- **Eyes & Features:** Signature Madhubani almond-shaped (*badam*) eyes with sharp double-line upper lids, pointed corners, and expressive high pupils.
- **Architectural Setting:** Grand red sandstone arches, geometric carved *jali* lattice screens filtering golden sunlight, teakwood workbenches, and brass accents, harmoniously integrated with subtle modern technology: whisper-thin cyan optical fiber data conduits flush inside stone mortar grooves, sleek matte-black diagnostic slates, and edge-server cylinders nestled naturally among neem tree roots.
- **Framing & Composition:** Full bleed borderless composition, edge-to-edge cinematic graphic novel artwork. No borders, no picture frames, no floral or ornamental edges.
- **Color Palette:** Rich, warm, saturated flat gouache fills:
  - Sandstone Ochre (`#D97706` / `#B45309`)
  - Indigo / Deep Teal (`#1E3A8A` / `#0F766E`)
  - Antique Brass / Gold (`#D4AF37` / `#B48222`)
  - Terracotta Red (`#C2410C` / `#991B1B`)
  - Pure Paper White / Sunlight Ivory (`#FFFFFF` / `#FAF6EC`)
- **Aspect Ratio:** `16:9` widescreen (`1408 x 768` or `1365 x 768`).
- **Core Generation Rule:** Generate strictly characters, environments, and physical props. **Never generate English dialogue text, mock code, or fake IDE windows inside the image.** All speech bubbles and terminal outputs are rendered dynamically as crisp SVG overlays.

---

## 👤 Character Consistency Bible

### 1. Akshay Mehra (Protagonist / The Learner)
- **Age:** 23 years old.
- **Appearance:** Expressive, energetic Indian student engineer; sleek short parted black hair; clean-shaven; expressive almond (*badam*) eyes that shift between comic panic and bright eureka focus.
- **Attire:** Crisp handloom white cotton kurta with subtle geometric mustard embroidery along the mandarin collar and placket; rolled sleeves; dark canvas messenger bag slung across chest.

### 2. Sameer Sen (Senior Enterprise Architect / The Mentor)
- **Age:** 40 years old.
- **Appearance:** Calm, deliberate, razor-sharp presence; neat salt-and-pepper trimmed beard; round wireframe brass spectacles perched on his nose; piercing, perceptive *badam* eyes that radiate calm mastery.
- **Attire:** Deep indigo raw-silk kurta with subtle antique-gold border weave; holding a traditional ornate brass cup holder with hot cutting chai in a faceted glass.

---

## 🖼️ Scene-by-Scene Image AI Prompts & SVG Blueprint

---

### Scene 1: The Ink Dissolves on the Quad
- **Card ID:** `ch01-scene-01`
- **Output Asset:** `assets/illustrations/ch01-scene-01-ink-dissolves.jpg`
- **Context:** Akshay sprints across the sandstone quad at 08:40 AM clutching a water-soaked admit card whose ink has run into an illegible blue watercolor blotch, 20 minutes before gate lock.

#### Image AI Generation Prompt:
```text
Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Wide dynamic action panel. Akshay, a 23-year-old Indian student with sleek short black hair and expressive almond badam eyes, sprints across a sun-drenched college quadrangle in panic. His white cotton kurta with embroidered collar billows behind him, messenger bag bouncing. He holds up a water-soaked, crumpled paper admit card with smeared blue watercolor blotches in horror. In the background, majestic red sandstone arches inspired by Mughal Fatehpur Sikri with intricate jali lattice screens, old leafy neem trees, and students walking toward massive brass-studded exam hall doors. Full bleed borderless composition, edge-to-edge cinematic graphic novel illustration, Bold double-line black ink outlines, rich flat gouache color fills, golden morning sunlight, sharp focus, no text or words on image, clean 16:9 ratio.
```

#### SVG Speech Bubble Overlay Map:
- **Bubble 1 (Akshay — Left, mouth open in panic):**
  - **Type:** Speech bubble with jagged agitation tail.
  - **Coordinates:** `x="12%" y="15%"` | `width="340px"`
  - **Content:**
    ```xml
    <g class="speech-bubble akshay-bubble">
      <rect x="120" y="80" width="360" height="110" rx="16" fill="#FFFFFF" stroke="#C2410C" stroke-width="3"/>
      <path d="M 220 190 L 210 230 L 250 190 Z" fill="#FFFFFF" stroke="#C2410C" stroke-width="3"/>
      <text x="140" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#991B1B">Akshay:</text>
      <text x="140" y="145" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">"My bottle leaked! My admit card looks</text>
      <text x="140" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">like a melted popsicle! Where is my seat?!"</text>
    </g>
    ```
- **Bubble 2 (Fellow Student — Right, pointing at gate):**
  - **Type:** Urgent warning speech bubble.
  - **Coordinates:** `x="60%" y="22%"` | `width="340px"`
  - **Content:**
    ```xml
    <g class="speech-bubble student-bubble">
      <rect x="620" y="90" width="370" height="110" rx="16" fill="#FAF6EC" stroke="#1E3A8A" stroke-width="3"/>
      <path d="M 720 200 L 700 240 L 750 200 Z" fill="#FAF6EC" stroke="#1E3A8A" stroke-width="3"/>
      <text x="640" y="125" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#1E3A8A">Fellow Student:</text>
      <text x="640" y="155" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">"The gates lock at 9 sharp! Open the college</text>
      <text x="640" y="180" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">portal on your phone and show your screen!"</text>
    </g>
    ```

---

### Scene 2: The White Screen Portal Spinner
- **Card ID:** `ch01-scene-02`
- **Output Asset:** `assets/illustrations/ch01-scene-02-portal-spinner.jpg`
- **Context:** Under the sandstone arch, Akshay taps furiously on his phone, which is stuck on a 1-bar connection showing an endless loading spinner. Sameer walks up with calm curiosity holding a steaming cup of cutting chai.

#### Image AI Generation Prompt:
```text
Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Medium two-shot composition under a carved sandstone archway. Akshay, with stressed almond badam eyes, hunches over a glowing glass mobile phone, tapping frantically with his thumb. Sameer, a 40-year-old distinguished mentor with salt-and-pepper beard, wireframe round spectacles, and an indigo raw-silk kurta with gold trim, steps in from the right holding an ornate brass cutting chai holder with hot tea. Sameer gestures calmly with a knowing smile. Dappled sunlight through geometric jali screens, leafy neem branch visible outside the arch, faint glowing cyan data conduit embedded in stone wall. Full bleed borderless composition, edge-to-edge cinematic graphic novel illustration, Rich gouache earth tones, crisp ink line work, pure white background elements, no text or letters in the illustration.
```

#### SVG Speech Bubble Overlay Map:
- **Bubble 1 (Akshay — Left, agitated):**
  - **Coordinates:** `x="15%" y="16%"` | `width="340px"`
  - **Content:**
    ```xml
    <g class="speech-bubble akshay-bubble">
      <rect x="110" y="70" width="370" height="110" rx="16" fill="#FFFFFF" stroke="#C2410C" stroke-width="3"/>
      <path d="M 260 180 L 280 220 L 290 180 Z" fill="#FFFFFF" stroke="#C2410C" stroke-width="3"/>
      <text x="130" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#991B1B">Akshay:</text>
      <text x="130" y="135" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">"It won't open! This loading circle has been</text>
      <text x="130" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">spinning like a ceiling fan for four minutes!"</text>
    </g>
    ```
- **Bubble 2 (Sameer — Right, wise and amused):**
  - **Coordinates:** `x="58%" y="14%"` | `width="380px"`
  - **Content:**
    ```xml
    <g class="speech-bubble sameer-bubble">
      <rect x="580" y="70" width="410" height="130" rx="16" fill="#FAF6EC" stroke="#0F766E" stroke-width="3"/>
      <path d="M 720 200 L 740 240 L 755 200 Z" fill="#FAF6EC" stroke="#0F766E" stroke-width="3"/>
      <text x="600" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#0F766E">Sameer:</text>
      <text x="600" y="135" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">"The quad Wi-Fi is spotty. Your browser is</text>
      <text x="600" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">trying to pull 4MB of heavy makeup, while</text>
      <text x="600" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">your actual seat data is only 120 bytes!"</text>
    </g>
    ```

---

### Scene 3: The 14 Millisecond Terminal Rescue
- **Card ID:** `ch01-scene-03`
- **Output Asset:** `assets/illustrations/ch01-scene-03-terminal-rescue.jpg`
- **Context:** Sameer props a sleek matte-black terminal slate on the stone balustrade, types a single curl command, and the 120-byte JSON admit card appears in 14ms. Akshay turns to sprint for the hall as the proctor counts down.

#### Image AI Generation Prompt:
```text
Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Action panel in cloister. Sameer taps a sleek matte-black portable terminal resting on a carved stone ledge. The terminal screen has an amber glow. Akshay stands beside him, badam almond eyes dilated in absolute shock and astonishment, clutching his messenger bag strap, already pivoting his foot to sprint. In the blurred background, grand brass exam hall doors are beginning to close with a proctor holding a clipboard. Full bleed borderless composition, edge-to-edge cinematic graphic novel illustration, Flat gouache textures in antique gold, amber, indigo, and terracotta, sharp double-line ink contours, clean composition, 16:9 widescreen, no words or code rendered in the artwork.
```

#### SVG Speech Bubble Overlay Map:
- **Bubble 1 (Sameer — Left, cool and measured):**
  - **Coordinates:** `x="15%" y="16%"`
  - **Content:**
    ```xml
    <g class="speech-bubble sameer-bubble">
      <rect x="120" y="80" width="370" height="110" rx="16" fill="#FAF6EC" stroke="#0F766E" stroke-width="3"/>
      <path d="M 280 190 L 300 230 L 315 190 Z" fill="#FAF6EC" stroke="#0F766E" stroke-width="3"/>
      <text x="140" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#0F766E">Sameer:</text>
      <text x="140" y="145" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">"Done. Hall 302, Seat B-14.</text>
      <text x="140" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">Took exactly fourteen milliseconds."</text>
    </g>
    ```
- **Bubble 2 (Akshay — Right, mouth dropped open mid-sprint):**
  - **Coordinates:** `x="58%" y="15%"`
  - **Content:**
    ```xml
    <g class="speech-bubble akshay-bubble">
      <rect x="580" y="80" width="410" height="110" rx="16" fill="#FFFFFF" stroke="#C2410C" stroke-width="3"/>
      <path d="M 720 190 L 710 235 L 750 190 Z" fill="#FFFFFF" stroke="#C2410C" stroke-width="3"/>
      <text x="600" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#991B1B">Akshay:</text>
      <text x="600" y="145" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">"Fourteen milliseconds?! My phone wasted four</text>
      <text x="600" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">minutes! Hall 302, here I come!"</text>
    </g>
    ```

---

### Scene 4: The Whiteboard Restaurant Model
- **Card ID:** `ch01-scene-04`
- **Output Asset:** `assets/illustrations/ch01-scene-04-canteen-waiter.jpg`
- **Context:** Post-exam in the sunlit campus stepwell canteen. Sameer and Akshay sit at a teak table with chai and samosas. Sameer gestures to the busy waiter carrying a brass tray, explaining the API client-courier-server contract.

#### Image AI Generation Prompt:
```text
Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Sunlit campus canteen veranda overlooking a stone stepwell. Sameer and Akshay sit across a low teakwood table with hot cutting chai glasses and golden samosas. Sameer smiles, gesturing with an open hand toward a cheerful waiter in a clean Nehru jacket carrying a tiered brass food tray between the dining room and the kitchen door. Akshay leans forward with sharp badam eyes, listening with complete fascination, resting a notebook on the table. Arched sandstone windows, brass hanging lamps, potted jasmine plants. Authentic Madhubani decorative peacock and lotus frame. Warm ochre, turmeric, terracotta, and indigo colors, double black ink outlines, 16:9 widescreen, no text or words on image.
```

#### SVG Speech Bubble Overlay Map:
- **Bubble 1 (Sameer — Left, explaining with open palm):**
  - **Coordinates:** `x="12%" y="15%"`
  - **Content:**
    ```xml
    <g class="speech-bubble sameer-bubble">
      <rect x="110" y="70" width="410" height="130" rx="16" fill="#FAF6EC" stroke="#0F766E" stroke-width="3"/>
      <path d="M 250 200 L 260 245 L 290 200 Z" fill="#FAF6EC" stroke="#0F766E" stroke-width="3"/>
      <text x="130" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#0F766E">Sameer:</text>
      <text x="130" y="135" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">"The waiter is the API: a dedicated courier.</text>
      <text x="130" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">He doesn't cook the food or re-tile the kitchen;</text>
      <text x="130" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">he just delivers orders and returns responses."</text>
    </g>
    ```
- **Bubble 2 (Akshay — Right, smiling with understanding):**
  - **Coordinates:** `x="58%" y="15%"`
  - **Content:**
    ```xml
    <g class="speech-bubble akshay-bubble">
      <rect x="580" y="75" width="400" height="110" rx="16" fill="#FFFFFF" stroke="#C2410C" stroke-width="3"/>
      <path d="M 720 185 L 710 230 L 750 185 Z" fill="#FFFFFF" stroke="#C2410C" stroke-width="3"/>
      <text x="600" y="110" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#991B1B">Akshay:</text>
      <text x="600" y="140" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">"And the printed menu is the API contract!</text>
      <text x="600" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">If I ask for pizza at a dosa stall, I get a 404!"</text>
    </g>
    ```

---

### Scene 5: Pair Programming: Port 3000 and the Byte Stream Trap
- **Card ID:** `ch01-scene-05`
- **Output Asset:** `assets/illustrations/ch01-scene-05-byte-stream-trap.jpg`
- **Context:** In the high-tech workshop, Akshay types at a terminal on port 3000. He fires a POST curl request, but gets `undefined` body. Sameer points out the byte stream nature of TCP and explains `app.use(express.json())`.

#### Image AI Generation Prompt:
```text
Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Workshop interior. Akshay sits at a teakwood desk typing on a modern split-pane matte-black terminal, looking surprised and puzzled with wide badam eyes. Sameer leans over his shoulder, holding a cup of tea, tapping one finger deliberately toward the desk to explain, a wise grin on his face. On the desk are coiled blue Ethernet cables, a small brass Ganesha idol, and an Express.js card. In the background, arched sandstone jali windows with afternoon amber sunlight and slim glowing server towers. Elaborate Madhubani decorative floral border frame with peacocks and fish. Strong double-line ink contours, rich saffron, teal, and charcoal hues, clean 16:9 widescreen, no text or code in the artwork.
```

#### SVG Speech Bubble Overlay Map:
- **Bubble 1 (Akshay — Left, scratching head):**
  - **Coordinates:** `x="12%" y="15%"`
  - **Content:**
    ```xml
    <g class="speech-bubble akshay-bubble">
      <rect x="110" y="70" width="390" height="110" rx="16" fill="#FFFFFF" stroke="#C2410C" stroke-width="3"/>
      <path d="M 260 180 L 250 225 L 290 180 Z" fill="#FFFFFF" stroke="#C2410C" stroke-width="3"/>
      <text x="130" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#991B1B">Akshay:</text>
      <text x="130" y="135" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">"I sent JSON in my POST request, but the</text>
      <text x="130" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">server says req.body is undefined! Why?!"</text>
    </g>
    ```
- **Bubble 2 (Sameer — Right, smiling and pointing):**
  - **Coordinates:** `x="56%" y="15%"`
  - **Content:**
    ```xml
    <g class="speech-bubble sameer-bubble">
      <rect x="560" y="70" width="430" height="130" rx="16" fill="#FAF6EC" stroke="#0F766E" stroke-width="3"/>
      <path d="M 720 200 L 735 245 L 755 200 Z" fill="#FAF6EC" stroke="#0F766E" stroke-width="3"/>
      <text x="580" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#0F766E">Sameer:</text>
      <text x="580" y="135" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">"Data travels as a raw TCP byte stream!</text>
      <text x="580" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">Without express.json() to collect and parse</text>
      <text x="580" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">the chunks, Express has no idea what it is."</text>
    </g>
    ```

---

### Scene 6A: The Five CRUD Verbs and the Brass Thali Rule
- **Card ID:** `ch01-scene-06a`
- **Output Asset:** `assets/illustrations/ch01-scene-06a-brass-thali.jpg`
- **Context:** Over lunch, Sameer holds up a magnificent traditional Indian brass thali with six small bowls (*katoris*), dramatically miming clearing the whole plate to explain the dangerous total replacement nature of `PUT` versus the surgical spoon of cream in `PATCH`.

#### Image AI Generation Prompt:
```text
Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Dining scene. Sameer with spectacles and trimmed beard dramatically holds up a large ornate circular Indian brass thali platter with six brass katoris bowls (dal, paneer, vegetables, rice), gesturing with humorous theatrical flair as if threatening to wipe the plate clean. Across the table, Akshay pulls his own plate back with both arms in comic alarm and realization, mouth open in laughter. Teak dining table, clay water jug, sunlit arched jali veranda in background. Full bleed borderless composition, edge-to-edge cinematic graphic novel illustration, Deep saffron, turmeric yellow, brass gold, and lapis blue tones, sharp double-line ink outlines, 16:9 widescreen, no text on image.
```

#### SVG Speech Bubble Overlay Map:
- **Bubble 1 (Sameer — Left, dramatic gesture with thali):**
  - **Coordinates:** `x="12%" y="15%"`
  - **Content:**
    ```xml
    <g class="speech-bubble sameer-bubble">
      <rect x="110" y="70" width="410" height="130" rx="16" fill="#FAF6EC" stroke="#0F766E" stroke-width="3"/>
      <path d="M 280 200 L 295 245 L 320 200 Z" fill="#FAF6EC" stroke="#0F766E" stroke-width="3"/>
      <text x="130" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#0F766E">Sameer:</text>
      <text x="130" y="135" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">"PUT swaps out the WHOLE plate! If you only</text>
      <text x="130" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">mention dal and rice, your paneer is thrown out!</text>
      <text x="130" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">Use PATCH if you only want to top up one bowl."</text>
    </g>
    ```
- **Bubble 2 (Akshay — Right, clutching food in comic panic):**
  - **Coordinates:** `x="58%" y="16%"`
  - **Content:**
    ```xml
    <g class="speech-bubble akshay-bubble">
      <rect x="580" y="75" width="390" height="110" rx="16" fill="#FFFFFF" stroke="#C2410C" stroke-width="3"/>
      <path d="M 720 185 L 710 230 L 750 185 Z" fill="#FFFFFF" stroke="#C2410C" stroke-width="3"/>
      <text x="600" y="110" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#991B1B">Akshay:</text>
      <text x="600" y="140" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">"Keep your hands off my paneer!</text>
      <text x="600" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">The Brass Thali Rule: PUT wipes what you omit!"</text>
    </g>
    ```

---

### Scene 6B: The Three Great Paradigms: REST, SOAP, GraphQL
- **Card ID:** `ch01-scene-06b`
- **Output Asset:** `assets/illustrations/ch01-scene-06b-three-paradigms.jpg`
- **Context:** Sameer stands at a large glass whiteboard displaying three distinct architectural columns: REST, SOAP, and GraphQL. Akshay sips chai, fully transformed from a confused page-viewer into an API thinker.

#### Image AI Generation Prompt:
```text
Madhubani Mithila folk art graphic novel illustration, 16:9 widescreen format. Workshop synthesis panel. Sameer stands beside a transparent glass architectural whiteboard divided into three glowing sketched columns. He raises a cup of cutting chai in a toast to Akshay. Akshay sits relaxed at the teak table, badam almond eyes calm and radiant with confidence, nodding as he holds his own tea glass. Sunset amber rays stream through deep sandstone stepwell arches in the background, illuminating quiet server racks. Full bleed borderless composition, edge-to-edge cinematic graphic novel illustration, Rich evening color palette of burnt orange, terracotta, deep indigo, and warm brass, double black ink outlines, 16:9 widescreen, no words or code in the artwork.
```

#### SVG Speech Bubble Overlay Map:
- **Bubble 1 (Sameer — Left, raising chai cup):**
  - **Coordinates:** `x="12%" y="15%"`
  - **Content:**
    ```xml
    <g class="speech-bubble sameer-bubble">
      <rect x="110" y="70" width="410" height="130" rx="16" fill="#FAF6EC" stroke="#0F766E" stroke-width="3"/>
      <path d="M 280 200 L 290 245 L 320 200 Z" fill="#FAF6EC" stroke="#0F766E" stroke-width="3"/>
      <text x="130" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#0F766E">Sameer:</text>
      <text x="130" y="135" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">"REST is the clean menu. SOAP is the sealed</text>
      <text x="130" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">bank contract. GraphQL is the custom plate.</text>
      <text x="130" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">Welcome to the other side of the glass, engineer."</text>
    </g>
    ```
- **Bubble 2 (Akshay — Right, smiling and confident):**
  - **Coordinates:** `x="58%" y="16%"`
  - **Content:**
    ```xml
    <g class="speech-bubble akshay-bubble">
      <rect x="580" y="75" width="390" height="110" rx="16" fill="#FFFFFF" stroke="#C2410C" stroke-width="3"/>
      <path d="M 720 185 L 710 230 L 750 185 Z" fill="#FFFFFF" stroke="#C2410C" stroke-width="3"/>
      <text x="600" y="110" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" fill="#991B1B">Akshay:</text>
      <text x="600" y="140" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">"No more waiting on frozen screens.</text>
      <text x="600" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="14" fill="#1E1B18">I am officially an API thinker!"</text>
    </g>
    ```

---

## 🛠️ Instructions for Your Image AI

When feeding these prompts to your Image AI:
1. Copy the text block under **Image AI Generation Prompt** for each scene.
2. Ensure the generation aspect ratio is set to `16:9` (`1408x768` or `1365x768`).
3. Save the resulting image files with their designated names into:
   `src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/resources/` (or `assets/illustrations/`).
4. If an image AI output accidentally contains distorted pseudo-English text, re-roll with negative prompt: `text, typography, watermark, signature, letters, code, numbers`.
