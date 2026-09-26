# Visual Style, Cultural Aesthetics & Language Standards

The Sarva Gyana Koshah publishing imprint is defined by a distinctive visual identity: pairing ancient Indian artistic heritage with cutting edge modern engineering and clear typography.

---

## 1. Visual & Cultural Art Guidelines

### 1.1 Authentic Indian Madhubani (Mithila) Folk Art
All illustrated character scenes, chapter headers, and narrative panels must employ authentic Indian Madhubani folk art style:
• **Stylistic Anchors:** Sharp, expressive almond shaped eyes; delicate double line ink contours; intricate geometric hatching; traditional floral and paisley borders.
• **Character Attire:** Characters wear dignified traditional Indian attire (cotton kurtas, dhotis, Nehru jackets, silk saris with ornate borders, angavastrams).
• **STRICT CONSTRAINT:** **NO real photorealistic humans in ANY image.** Photorealistic generations destroy stylistic immersion and look like generic stock photography. All characters must remain hand drawn folk art figures.

### 1.2 Pan-Indian Heritage Architectural Settings
All scenes, war rooms, and campus environments must take place within heritage architectural backdrops:
• **Architectural Elements:** Dravidian carved stone pillars, Nagara intricately carved stone jali lattice screens, chaitya arched doorways, polished teak wood study tables, brass oil lamps (diyas), and brass glasses of steaming masala chai.
• **STRICT CONSTRAINT:** **Strictly NO modern corporate glass or steel skyscrapers.** The environment celebrates timeless heritage university craftsmanship where ancient stone halls meet high speed fiber optic networks.

### 1.3 Color Palette & Lighting
• **Light Theme Only:** All reading surfaces, illustrations, and book layouts must exist on pure white (`#FFFFFF`) or light neutral slate (`#F8FAFC` / `#F1F5F9`) backgrounds.
• **NO Dark Mode:** Never generate or style dark mode backgrounds.
• **Accent Colors:** Royal peacock teal (`#0284c7`), deep indigo (`#4338ca`), terracotta warm amber (`#d97706`), forest emerald (`#16a34a`), and ruby crimson (`#dc2626`).

### 1.4 Language Inside Generated Images
• **English Only:** All text, signage, and labels appearing inside generated illustrations or comic panels must be in **English only**.
• **No Devanagari or regional scripts inside generated images** to ensure universal legibility across all global editions.

---

## 2. Interactive SVG & Software Screen Markup Standard

A core flaw of traditional technical publishing is using fuzzy bitmap screenshots of software applications. When fonts scale or books are printed, bitmap screenshots blur, text cannot be selected or copied, and color contrast degrades.

### 2.1 Pure SVG & Interactive DOM Markup
All software screens must be rendered using dedicated interactive markup components or inline SVGs:
1. **IDE Code Editor Mockups:**
   • Window titlebar with red, yellow, and green circular buttons.
   • Active filename tab (e.g. `server.js`).
   • Selectable, high contrast syntax highlighted code with monospace typography.
2. **API Testing Workbench Panes:**
   • Standardized HTTP verb badge (`GET` in blue, `POST` in green, `PUT` in amber, `PATCH` in purple, `DELETE` in red).
   • Editable URL input bar.
   • Headers and request body tab panels.
   • Response metadata banner displaying live HTTP status code badge, latency badge, and formatted JSON payload.
   • Directional pointer callouts (`👉 Points to express.json()`) linking character dialogue directly to UI controls.
3. **Terminal Windows:**
   • Linux shell prompt styling (`$`).
   • Selectable command input and standard error / standard output streams.

### 2.2 Trademarked Names Prohibition
To maintain timeless independence and avoid commercial trademark friction:
• Refer to VS Code as **IDE** or **Code Editor**.
• Refer to Postman as **API Testing Workbench** or **API Client**.

---

## 3. Strict Rule 19 Language & Prose Standard

To ensure maximum typographical clarity and avoid typesetting breaks across different reader screens and print formatters:

### 3.1 The Zero-Hyphen Constraint
**User-facing prose, chapter titles, headings, bullet points, interactive questions, answer options, quiz items, and explanations must contain ZERO hyphens or dashes (`-`, `—`, `–`).**

### 3.2 Approved Substitutes
• Instead of hyphens for punctuation, use **colons (`:`)**, **commas (`,`)**, or **full stops (`.`)**.
• Instead of hyphenated lists, use **bullet dots (`•`)** or numbered lists (`1.`, `2.`).
• Instead of hyphenated adjectives (such as *real-time* or *in-memory* or *end-to-end*), write them as separate unhyphenated words: **real time**, **in memory**, **end to end**, **sub second**, **pre request**.
• Instead of dash dividers, use middle dots (`·`) or clean line breaks.

### 3.3 Strict Allowed Exceptions
Hyphens are permitted **only** inside:
1. Exact machine code tokens, programming keywords, and terminal commands (`npm init -y`, `node -v`, `git-commit`, `req.query.route_id`).
2. Exact standard HTTP headers (`Content-Type: application/json`, `User-Agent`).
3. Exact URL paths, route slugs, and file system paths (`/v1/campus/shuttle/coordinates`, `server.js`, `book.manifest.json`).
4. Exact negative numbers in technical payloads (`latitude: 42.3601, longitude: -71.0942`).
5. Internal JavaScript object keys in block definitions (`type: 'chapter-opener'`, `type: 'comic-workbench'`).
