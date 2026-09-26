# SGK Brand Identity System

System ID: H01
Layer: Unified (applies to every book in every series)
Version: 2.0.0

---

## Purpose

This document defines everything that must be identical across every
SGK book ever produced. Any SGK book picked up by any reader anywhere
must be instantly recognizable as part of the SGK family. This
recognition is built through consistent visual identity, consistent
frontmatter structure, consistent running elements, and consistent
backmatter.

This document defines the SCHEMA and RULES. Book-specific content
(actual title, actual author name, actual ISBN) is populated in the
book's artifact files. Templates for every page are in
framework/templates/.

---

## Section 1: Visual DNA (Non-Negotiable for Every Image Asset)

### 1.1 Art Style

All human characters and scene illustrations across all SGK books
must follow the Madhubani (Mithila) folk art tradition with these
specific characteristics:

Sharp almond-shaped eyes on all human figures. This is the single
most recognizable feature. Every face, regardless of age, gender,
or character role, has this eye shape.

Delicate double-line black ink outlines on all figures, objects,
furniture, and architectural elements. No single-line outlines.
No thick brush strokes. Always double and delicate.

Flat colour fills within ink outlines. No gradients. No drop shadows.
No photorealistic shading or lighting effects. Colour fills are solid
and warm.

Traditional Indian attire on all characters without exception.
Men: kurtas, dhotis, Nehru jackets, sherwanis, lungis.
Women: saris with decorative borders, salwar kameez with dupattas,
lehengas. Children: traditional regional variations appropriate to
their character backstory.

Decorative floral and geometric border patterns on panel edges.
Fish, lotus, peacock, and sun motifs as decorative elements in
backgrounds and panel borders.

ABSOLUTE CONSTRAINT: Zero photorealistic human images in any SGK
asset under any circumstance. If an image is photorealistic, it is
rejected regardless of how accurate or useful the content is.

### 1.2 Settings

All scenes in all SGK books must use Pan-Indian heritage architecture
as the physical world. The exact heritage elements vary per vertical
module (a tech lab has different props than a courtroom) but the
architectural DNA is always heritage Indian.

Mandatory heritage elements to draw from per scene:
  Carved Dravidian stone pillars with intricate relief patterns
  Nagara stone jali lattice screens as windows or room dividers
  Chaitya arches and torana gateways for doorways and entries
  Brass oil lamps (diyas) and hanging lanterns for lighting
  Teak wood furniture with brass fittings and carved legs
  Stone floors with geometric inlay patterns
  Clay pots, copper vessels, woven textiles as ambient props
  Courtyard elements: tulsi plants, water features, carved wells

ABSOLUTE CONSTRAINT: Zero modern glass facades, steel-and-glass
skyscrapers, neon signs, fluorescent office lighting, or corporate
interior design in any SGK asset under any circumstance.

### 1.3 Colour Palette

Background: Pure white (#FFFFFF) or light neutral slate (#F8FAFC
or #F1F5F9).

ABSOLUTE CONSTRAINT: Zero dark mode backgrounds under any
circumstance. No dark grey, no black, no navy backgrounds in any
rendered book page or illustration.

Character clothing uses warm, saturated traditional Indian palettes:
turmeric yellow, sindoor red, peacock blue, mango green, lotus pink,
ivory white, deep indigo, saffron orange.

Series accent colours (used for cover bands, badges, and running
elements only, never for full backgrounds):
  SGK Tech:     Teal    (#0D9488)
  SGK Exam:     Saffron (#D97706)
  SGK Law:      Maroon  (#9B1C1C)
  SGK Commerce: Navy    (#1E3A8A)
  SGK Science:  Forest  (#166534)
  SGK Saral:    Orange  (#C2410C)
  SGK School:   Violet  (#6D28D9)

### 1.4 Text in Images

English only inside any generated image or illustration.
Zero Devanagari script inside images.
Zero regional language script inside images.
This applies to speech bubbles, labels, signs, screen text,
whiteboard content, and any other text appearing within an
illustrated or generated image.

Note: This constraint applies to text INSIDE images only. The book
text itself (outside images) may use other languages as specified
in the book's FORMAT_DECISION.md language configuration.

### 1.5 Software Screen Representation

All software interfaces (code editors, API clients, terminals,
workbenches, dashboards, ledgers) must be rendered as crisp
interactive SVG or DOM components with selectable monospace text.

Never use fuzzy bitmap screenshots of actual software.
Never embed photographic screenshots of real software interfaces.

Reference commercial software by category name only:
  Code editors: IDE or Code Editor (never VS Code, never Vim by name
    unless teaching that specific tool is the book's purpose)
  API clients: API Testing Workbench or API Client (never Postman)
  Terminals: Terminal or Command Line (acceptable as generic terms)
  Databases: Database Client (never TablePlus, Sequel Pro, etc.)

SVG templates for all standard workbench types are in
framework/templates/interactive-svg-templates/.

---

## Section 2: Cover Anatomy

### 2.1 Front Cover (Mandatory Elements, Top to Bottom)

ZONE 1 (Top band, series accent colour):
  Series badge text in white: [SERIES NAME] SERIES
  Example: SGK TECH SERIES
  Font: All caps, medium weight, 12 to 14pt equivalent

ZONE 2 (Upper centre, dominant):
  Book title in large display typeface
  Title must be large enough to read from 60cm distance when printed
  Maximum 8 words. If title is longer, break into title plus subtitle.
  Font: Display weight, series accent colour or deep neutral

ZONE 3 (Below title):
  Subtitle: one line, outcome-focused
  Must complete the sentence: After reading this you will be able to...
  Font: Regular weight, 60 percent of title size

ZONE 4 (Centre, dominant visual):
  Featured Madhubani-style scene illustration
  Must show the book's primary characters in action
  Must reflect the subject domain visually
  Minimum 40 percent of cover height

ZONE 5 (Lower area):
  Edition badge: Latest Edition [Year] or [Number] Edition [Year]
  Key selling number: prominently displayed
  Example formats: 13 Mission Chapters, 347 High Yield Facts,
    500 Solved Problems, 1200 Practice Questions

ZONE 6 (Bottom strip):
  Left: Author name(s) with credentials
  Centre: SGK logo with tagline below
  Right: Series icon or category badge

### 2.2 Spine (Top to Bottom When Shelved Vertically)

Series accent colour band running full spine length.
Book title in white, readable when shelved.
Author surname in white.
SGK logo at bottom.
Volume number if this is part of a numbered series within a series.

### 2.3 Back Cover (Top to Bottom)

Series accent colour header band.

Outcome paragraph (3 to 5 bullet points):
  Each bullet states something the reader will be ABLE TO DO
  after reading, not something the book covers.
  Format: After this book you will be able to [specific action].
  Never: This book covers [topic].

Target audience declaration:
  This book is for: [one specific reader description]
  Must match the buyer profile from MARKET_BRIEF.md exactly.

Feature list (optional, 3 to 5 items):
  Specific differentiators from competing books.
  Must be true and verifiable.

Social proof (if available):
  Trusted by [number] students or readers.
  Do not fabricate. Leave blank if not yet established.

Bottom strip:
  Left: ISBN barcode
  Centre: Publisher name and website
  Right: MRP clearly printed (required for Indian print market)
  QR code linking to the book's companion digital resource

---

## Section 3: Frontmatter Pages

Every SGK book contains these frontmatter pages in this exact order.
Templates for each page are in framework/templates/frontmatter/.

### 3.1 Half Title Page
Content: Book title only. Centred vertically and horizontally.
Nothing else on this page. No author name. No publisher. No subtitle.
Purpose: Clean, dignified opening. Standard publishing convention.

### 3.2 Series Title Page
Content:
  Top: This book is part of the [Series Name]
  Centre: List of other titles in the same series (if any exist)
  Bottom: SGK logo
Purpose: Cross-selling and brand reinforcement.
Note: If this is the first book in the series, this page shows
  Coming soon in the [Series Name] as a placeholder.

### 3.3 Full Title Page
Content (top to bottom):
  Book title (large)
  Subtitle (medium)
  Author full name with credentials
  Edition statement: First Edition or [Number] Edition, Revised
  SGK logo (medium, centre)
  Publisher name
  City of publication, India
  Year

### 3.4 Copyright and Imprint Page
This page is IDENTICAL in structure across all SGK books.
Only the book-specific fields change.
The template below shows fixed text in regular type and
variable fields in [BRACKETS]:

---
Copyright [YEAR] Sarva Gyana Koshah Publications
All rights reserved.

No part of this publication may be reproduced, stored in a
retrieval system, or transmitted in any form or by any means,
electronic, mechanical, photocopying, recording, or otherwise,
without the prior written permission of the publisher.

First published: [YEAR OF FIRST EDITION]
This edition: [CURRENT EDITION STATEMENT], [YEAR]

ISBN: [ISBN-13]
MRP: [PRICE IN RUPEES]

Published by:
Sarva Gyana Koshah Publications
[ADDRESS LINE 1]
[CITY], India
[WEBSITE]

Illustrations in the Madhubani folk art tradition.
All characters depicted are fictional. Any resemblance to real
persons, living or deceased, is coincidental.

The information in this book is provided in good faith and is
believed to be accurate as of the date of publication. Readers
are advised to verify critical information from primary sources
before making professional or financial decisions based on this
content.

Last content verification date: [DATE]
Current as of: [DATE OR VERSION]

Found an error? We want to know.
Email: corrections@sgkbooks.in
Verified errors will be corrected in the next print run.
The reader who reports a verified error will be acknowledged
by name in the acknowledgments of the corrected edition.

Printed in India.
---

### 3.5 Dedication Page (Optional)
If the author includes a dedication: centre the dedication text
vertically on the page. Maximum 3 lines.
If no dedication: skip this page entirely. Do not include a
blank page or a placeholder.

### 3.6 Table of Contents
Format:
  Chapter number and title on the left
  Page number right-aligned
  Grouped by Mission (not by unit or section)
  Mission name appears as a styled subheader between chapter groups
  
Example structure:
  MISSION 1: [Mission Name]
    Chapter 1: [Chapter Title]        1
    Chapter 2: [Chapter Title]       24
    Chapter 3: [Chapter Title]       48
  MISSION 2: [Mission Name]
    Chapter 4: [Chapter Title]       72
    ...

### 3.7 List of Figures and Workbenches
Alphabetical by chapter, then by appearance order within chapter.
Includes all scene-panel illustrations and all workbench screens.
Format: Figure [Chapter].[Number]: [Description]  Page [N]

### 3.8 List of Abbreviations
All acronyms and abbreviations used in the book.
Alphabetical order.
Format: [ABBREVIATION]: [Full form]. See page [N] for first use.

### 3.9 Foreword (Optional)
Written by an expert in the field, not the author.
Maximum 2 pages.
Must be genuine: no fabricated forewords.
If no foreword: skip this page entirely.

### 3.10 Preface
The Preface is the most commercially important page in the book.
It is the primary conversion page for browsers who open the book
in a store or via Look Inside online. It must follow this
exact 4-part structure:

PART 1: THE READER'S PROBLEM (opening paragraph)
Open with the reader's exact pain in their own language.
Use buyer language phrases mined in Stage 2 research.
The reader must think: this book understands me, within
the first 3 sentences.
Length: 100 to 150 words.

PART 2: THE BOOK PROMISE (one bold sentence)
State the Book Promise from BOOK_PROMISE.md exactly as written.
Format it as a visually distinct statement: larger text,
bold, or boxed. The reader must be able to find this
sentence at a glance.

PART 3: WHAT MAKES THIS DIFFERENT (3 specific points)
Not vague claims. Specific, verifiable differentiators.
Each point addresses a specific failure of competing books
identified in Stage 2 competitor research.
Length: 50 to 80 words per point.

PART 4: HOW TO USE THIS BOOK
Reading paths for different time constraints.
At minimum: a fast path (minimum viable reading for
someone with very little time) and a full path (cover
to cover for someone who wants complete mastery).
Optional: domain-specific paths (e.g., for exam aspirants
vs practitioners).

### 3.11 Reader's Roadmap
A full-page VISUAL showing the reader's journey.
This is NOT a table of contents. It is a transformation map.

Required visual elements:
  A starting point labelled with the reader's BEFORE state
  (use the exact language from PERSONA_PROFILE.md)
  
  Three mission zones, each labelled with the mission name
  and a one-line capability statement
  
  Chapter milestones shown as waypoints on the journey
  (numbers only, not full titles, to keep visual clean)
  
  An ending point labelled with the reader's AFTER state
  and PROOF statement from TRANSFORMATION_MAP.md
  
  Visual styling: Madhubani folk art border, heritage
  architectural motifs as landscape elements on the journey

### 3.12 Acknowledgments
Standard acknowledgments page.
Must include: Research sources, any subject matter reviewers,
the error bounty acknowledgment section (names of readers
who reported verified errors in previous editions, if any).

---

## Section 4: Running Page Elements

These elements appear on every content page throughout the book.

Left page (even page number):
  Header left: Chapter title (abbreviated if necessary)
  Footer left: Page number
  Footer right: Book ID (e.g., SGK-TECH-API-001)

Right page (odd page number):
  Header right: Current section title
  Footer left: Series name in small caps
  Footer right: Page number

Corner elements:
  Every left page top corner: Series accent colour dot (6mm)
  Every right page top corner: SGK logo mark (micro, 8mm)

Margin notes:
  Right margin of right pages: Reserved for Key Term callouts
  A key term introduced in the body text may have its definition
  in the right margin at the same vertical position.
  This is optional per chapter, not mandatory.

---

## Section 5: Backmatter Pages

Every SGK book contains these backmatter pages in this order.
Not all are mandatory. Mandatory ones are marked [REQUIRED].

### 5.1 Appendices [SITUATIONAL]
Include if the book has supplementary reference material that
supports the main content but would interrupt reading flow if
placed in chapters. Examples: full formula sheets, full article
text, full command reference, full case law citations.

Number appendices alphabetically: Appendix A, Appendix B, etc.
Each appendix has a clear title and a one-sentence purpose statement.

### 5.2 Glossary [REQUIRED]
All key terms used in the book, alphabetically ordered.
Format: [Term]: [Definition]. See page [N] for context.
Every term that appears in bold in any chapter must appear here.
Technical terms specific to the subject's vertical module
must appear here even if not bolded in the text.

### 5.3 Bibliography and Sources [REQUIRED]
All primary sources cited in the book.
Grouped by source type:
  Official Documents (acts, notifications, circulars, RFCs)
  Books and Treatises
  Academic Papers and Reports
  Online Sources (with access date)
  Case Law (for law books)

Format follows the Chicago author-date style for consistency.

### 5.4 Index [REQUIRED for books over 200 pages]
Alphabetical keyword index with page numbers.
Includes: all key terms, all named concepts, all named cases
or incidents, all character names, all tool names.

### 5.5 About the Author [REQUIRED]
Left column: Madhubani-style illustrated author avatar
(never a photograph). The avatar follows all Madhubani art rules.

Right column: Author name, credentials, brief professional
background (3 to 5 sentences), other SGK books by this author
(if any), contact or professional social presence.

### 5.6 About Sarva Gyana Koshah [REQUIRED]
SGK brand story (2 paragraphs).
The SGK mission statement.
Full list of published SGK books by series.
Invitation to the reader community.
Website, email, and social presence.

### 5.7 Cross-Sell Page [REQUIRED]
Titled: What to Read Next
Shows 2 to 4 other SGK books that the reader of this book
is likely to want.
Each entry: Cover thumbnail (Madhubani illustration),
title, one-sentence description, series badge.
Selection logic: books in the same series that follow this one
in the learning progression, or books in adjacent series that
serve the same audience.

### 5.8 Colophon [REQUIRED]
Final page of the book.
This book was typeset in [FONT NAMES].
The Madhubani illustrations were created using [TOOL].
The interactive HTML edition was built with Vite and React.
The DOCX edition was generated using the docx npm library.
The PDF edition was rendered using Puppeteer.
The EPUB edition was built to the EPUB3 specification.
First printed in [YEAR] at [PRINTER NAME], India.
