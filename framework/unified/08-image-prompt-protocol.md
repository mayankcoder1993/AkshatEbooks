# SGK Image Prompt Protocol

System ID: H08
Layer: Unified
Version: 2.0.0

---

## Purpose

Every scene-panel block in every SGK chapter requires a
Madhubani-style illustration. This protocol defines how to
convert storyboard scene-panel beats into production-ready
prompts for AI image generation tools.

The protocol ensures visual consistency within a book
(the same character looks the same in Chapter 1 and Chapter 12),
across books in a series (the mentor looks the same in Book 1
and Book 4), and across the entire SGK library (the Madhubani
art style is immediately recognizable regardless of subject).

---

## The Reference Image Protocol (Mandatory for Every New Book)

Before generating any chapter scene prompts, generate character
reference sheet prompts for every named recurring character.

CHARACTER REFERENCE SHEETS ARE GENERATED FIRST, BEFORE CHAPTER 1.

Purpose: AI image generation tools produce variable outputs
even from identical prompts. A reference sheet locks the
character's visual appearance. All subsequent scene prompts
use image-to-image workflow anchored to the reference sheet,
ensuring the character looks consistent across all chapters.

For every named recurring character (Tier 1 mentor, Tier 2
hero, any Tier 3 character who appears in more than 2 scenes):

Generate reference sheet prompts covering:
  NEUTRAL FRONT FACING: The baseline appearance. Used as
    the primary anchor for all subsequent image-to-image work.
  SIDE PROFILE: Left-facing profile view.
  EXPRESSION SET 1: Explaining or teaching expression.
  EXPRESSION SET 2: Listening or observing expression.
  EXPRESSION SET 3: The character's most distinctive
    emotional expression (mentor's slight knowing smile,
    hero's wide-eyed realization, etc.)
  WITH SIGNATURE PROP: Character holding or near their
    established signature prop.

After generating reference sheet images:
Select the best output for each view.
Store in books/[book-id]/assets/character-reference/
with naming: [character-slug]-[view-type].jpg
Example: sameer-neutral-front.jpg, akshay-confused.jpg

Register the reference sheet paths in WORLD_BIBLE.md
Section 5 Visual Continuity Specification.

---

## Image Prompt Template Structure

Every image prompt for every scene-panel consists of:
  1. A POSITIVE PROMPT (what to generate)
  2. A NEGATIVE PROMPT (what to avoid)
  3. TECHNICAL PARAMETERS

### 1. Positive Prompt Template

Assemble in this exact order:

[ART STYLE DECLARATION]
Madhubani Mithila folk art illustration. Authentic Indian
folk painting tradition. [Add any style emphasis needed
for this scene: detailed border patterns, specific motif
emphasis, etc.]

[SCENE COMPOSITION]
[Wide establishing shot / Medium two-shot / Close up on
character / Detail close-up on prop or screen].
[Brief scene description: what is happening, what the
overall composition communicates.]

[CHARACTER 1: MENTOR]
[CHARACTER_NAME], [age appearance] [gender description].
[Exact clothing from Character Ledger visual spec].
[Current expression from the scene beat specification].
[Current action from the scene beat specification].
[Signature prop placement if applicable].

[CHARACTER 2: HERO or other character if present]
[CHARACTER_NAME], [age appearance] [gender description].
[Exact clothing from CHARACTER_CAST.md visual design brief].
[Current expression from the scene beat specification].
[Current action from the scene beat specification].

[VISUAL DNA ANCHORS]
Sharp almond-shaped eyes on all human figures.
Delicate double-line black ink outlines on all elements.
Flat colour fills within outlines. No gradients or shadows.
Traditional Indian attire on all characters.
Decorative floral and geometric border patterns on panel edges.

[SETTING DESCRIPTION]
[Location from World Bible Visual Continuity Specification].
[Specific heritage elements present from the storyboard].
[Lighting from the storyboard scene setting].
[Specific props from the storyboard].

[COLOUR AND MOOD]
Warm saturated traditional Indian colour palette.
[Character clothing colours from their visual specs].
[Mood-appropriate colour temperature: warm amber for
evening scenes, bright warm white for morning scenes, etc.]
Pure white background (#FFFFFF). Light, bright, airy.
No dark backgrounds.

[TECHNICAL QUALITY]
High detail. Print-quality resolution. Aspect ratio [N:N].
All text in image in English only.

### 2. Negative Prompt Template (Standard, Applied to Every Prompt)

No photorealistic human faces or figures.
No 3D rendering or CGI style.
No Western comic book or manga art style.
No anime style.
No dark or black backgrounds.
No modern glass buildings, steel structures, or skyscrapers.
No neon signs, electric hoardings, or fluorescent lighting.
No photographic textures or realistic shadows.
No Devanagari script or regional language text in image.
No copyrighted logos or branded elements.
No violent or adult content.
No blurry, low-resolution, or out-of-focus elements.
No gradient fills inside outlined shapes.
No Western clothing (no suits, jeans, t-shirts, sneakers)
  on main characters.

### 3. Technical Parameters

Aspect ratio: [Determined by block type - see table below]
Style reference: Madhubani, Mithila painting
Quality: High detail, print resolution
Seed: [Use consistent seed for reference-anchored scenes
  to increase consistency. Document seed value used.]

ASPECT RATIO BY BLOCK TYPE:
  Full-page scene-panel (chapter opener): 3:4 portrait
  Half-page scene-panel (standard): 16:9 landscape
  Quarter-page scene-panel (insert): 4:3 landscape
  Character portrait (thought-bubble): 1:1 square
  Chapter-ending cliffhanger-panel: 21:9 cinematic landscape
  Reference sheet views: 1:1 square

---

## The Madhubani Keyword Library

These keywords are validated to produce consistent Madhubani
folk art results across different AI image tools. Include 3
to 5 of these in every positive prompt.

CORE STYLE KEYWORDS:
  Madhubani painting, Mithila folk art, Bihar folk tradition,
  traditional Indian folk illustration, hand-drawn folk style,
  Indian miniature painting influence, natural pigment colours

TECHNIQUE KEYWORDS:
  Double outline technique, geometric border patterns,
  flat colour fills, intricate line work, decorative motifs,
  floral patterns, fish motifs, lotus motifs, peacock motifs,
  sun and moon motifs, nature-inspired geometric patterns

COLOUR KEYWORDS:
  Turmeric yellow, sindoor red, peacock blue, mango green,
  lotus pink, ivory white, deep indigo, saffron orange,
  natural pigment warmth, warm earth tones

HERITAGE SETTING KEYWORDS:
  Dravidian stone pillars, carved stone columns, jali screen,
  stone lattice window, chaitya arch, brass oil lamp, diya lamp,
  teak wood furniture, brass fittings, geometric stone floor,
  inlay pattern floor, clay pots, copper vessels, woven textiles,
  Indian courtyard, tulsi plant courtyard

---

## The Character Description Library

Every book builds its own Character Description Library in
the image-prompts/character-reference-prompts.md file.
This library is a set of locked description blocks for each
named character.

Once established from the reference sheet generation,
these blocks are copied verbatim into every scene prompt
that features that character.

THE DESCRIPTION BLOCK FORMAT:

[CHARACTER_SLUG]_DESCRIPTION_BLOCK:
[Character full name]. [Age appearance, e.g., appears to be
in their mid-thirties]. [Gender description].
Wearing [specific garment 1] in [specific colour] with
[specific detail, e.g., gold embroidery at the collar].
[Specific garment 2] in [specific colour] with [specific
detail, e.g., a woven border].
[Any additional clothing item, e.g., a Nehru jacket in deep teal].
[Distinguishing feature, e.g., wire-frame reading glasses].
[Signature prop if present, e.g., holding a small brass
glass of masala chai in left hand].
Sharp Madhubani almond-shaped eyes.
Double-line black ink face and figure outline.
[Expression for this specific scene from the storyboard].

Copy this block without modification into every prompt
featuring this character. Modification of established
description blocks is not permitted without updating the
World Bible Visual Continuity Specification and the
Character Continuity Ledger.

---

## Setting Description Library

Similar to the character description library, every recurring
location in a book has a locked Setting Description Block.
Once established in WORLD_BIBLE.md Section 5, these blocks
are copied verbatim into prompts for scenes set in that location.

SETTING_DESCRIPTION_BLOCK format:
[Location name]. [Room or space composition description].
[Left side: what is there]. [Centre: what is there].
[Right side: what is there]. [Ceiling: light source].
[Floor: material and pattern]. [Ambient props list].
[Heritage elements visible in this location].
[Time of day lighting quality].

---

## Image Prompt File Structure

Every chapter produces one image prompt file:
image-prompts/image-prompts-ch[NN].md

File structure:
  CHAPTER [NN] IMAGE PROMPTS
  
  CHARACTER REFERENCE CHECK:
  [List of characters appearing in this chapter]
  [Confirm reference sheets exist for each one]
  [List reference sheet file paths]
  
  SCENE [N] BEAT [N]: [scene-panel description]
  POSITIVE PROMPT:
  [Full assembled positive prompt]
  
  NEGATIVE PROMPT:
  [Standard negative prompt]
  
  PARAMETERS:
  Aspect ratio: [ratio]
  Reference image: [path to character reference sheet if
    using image-to-image workflow]
  Seed: [seed value if applicable]
  
  PLACEMENT NOTE:
  [Which block in which scene this image serves]
  [Asset destination: assets/illustrations/ch[NN]-scene[N]-beat[N].jpg]
  
  [Repeat for every scene-panel in the chapter]

---

## Image Consistency Audit Checklist

After images are generated and placed in assets/illustrations/,
the human user completes this checklist before Stage 6 begins.

For each character appearing in chapter illustrations:
  Does [CHARACTER] look consistent with their reference sheet?
  Same clothing colours and patterns: YES / NO
  Same distinguishing feature visible: YES / NO
  Same signature prop if applicable: YES / NO
  Madhubani art style consistent (almond eyes, double outlines,
    flat fills, no photorealism): YES / NO
  Heritage setting elements correct per World Bible: YES / NO
  No dark backgrounds visible: YES / NO
  No Western clothing on main characters: YES / NO
  No Devanagari or regional script visible: YES / NO

Any NO: regenerate the image before proceeding.
A chapter with inconsistent character illustrations fails
the Visual Continuity check in the Stage 7 audit.
