# Image Audit Quality Control & Regeneration Manifest

Generated for: **Zero to Agentic API Testing** (Chapter 01: Understanding APIs from First Principles)
Master Pipeline Location: `src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/`
Download Folder: `C:\Users\AkshatSinha\Downloads\the first flow for api agent\`

## 1. Audit Summary Overview

- **Total Images Audited:** 65
- **Approved (Useful):** 49 images (segregated into `useful/act1` to `useful/act5` and `useful/model_sheets`)
- **Quarantined (Not Useful):** 16 images (segregated into `not_useful/`)

## 2. Quarantined Images & Defect Analysis

| Quarantined File | Act / Scene | Root Cause Defect | Action Required |
| :--- | :--- | :--- | :--- |
| `rejected_tattoos_scene04_fingers_holding_wet_paper.jpg` | Act 1 (scene04) | Hand tattoo anomaly: Intricate blue tribal/henna tattoos on Akshay thumbs. Character must have bare hands. Needs regeneration. | Regenerate using Section 3 below |
| `rejected_mehndi_scene26_finger_pressing_blue_button.jpg` | Act 3 (scene26) | Hand covered in intricate bridal mehndi henna. Needs clean bare finger clicking Postman Send. | Regenerate using Section 3 below |
| `rejected_border_frame_scene48_guards_carrying_armored_chest.jpg` | Act 5 (scene48) | Artwork surrounded by a thick decorative patterned border/frame contrary to negative prompt. | Regenerate using Section 3 below |
| `rejected_mehndi_scene20_hands_holding_menu_card.jpg` | Act 2 (scene20) | Hand covered in bridal mehndi henna + folk wallpaper border. Needs clean bare hands. | Regenerate using Section 3 below |
| `rejected_mehndi_scene08_hand_holding_smartphone.jpg` | Act 1 (scene08) | Bridal mehndi henna patterns covering the hand and folk wallpaper background. Needs clean bare male hand. | Regenerate using Section 3 below |
| `rejected_folk_tablecloth_scene39_hand_lifting_bowl.jpg` | Act 4 (scene39) | Tablecloth and background covered with folk birds and suns rather than clean dining veranda. | Regenerate using Section 3 below |
| `rejected_folk_tapestry_scene23_men_discussing_programming.jpg` | Act 3 (scene23) | Folk peacock and lotus tapestry behind characters; image depicts dining rather than pair programming. | Regenerate using Section 3 below |
| `rejected_folk_wallpaper_scene16_men_drinking_chai.jpg` | Act 2 (scene16) | Folk animal wallpaper (cows, fish on table trim) contradicts clean architectural workshop. | Regenerate using Section 3 below |
| `rejected_akshay_beard_scene50_men_speaking_under_sunset_pavilion.jpg` | Act 5 (scene50) | Character inconsistency: Akshay is drawn with a full beard! Akshay must be clean-shaven. Needs regeneration. | Regenerate using Section 3 below |
| `rejected_folk_wallpaper_scene28_monitor_glowing_pot.jpg` | Act 3 (scene28) | Room covered in animal folk wallpaper; screen shows earthenware pot with question marks instead of console undefined. | Regenerate using Section 3 below |
| `rejected_wrong_character_scene24_person_typing_keyboard.jpg` | Act 3 (scene24) | Depicts a female character with bangles and hair bun instead of Akshay. Folk wallpaper covering desk. | Regenerate using Section 3 below |
| `rejected_flying_fish_scene31_programmer_typing_code.jpg` | Act 3 (scene31) | Literal fish swimming out of glowing portal across laptop screen. Must be replaced with clean code editor. | Regenerate using Section 3 below |
| `rejected_kurta_print_scene07_student_frustrated_with_phone.jpg` | Act 1 (scene07) | Sameer kurta has literal fish and parrots printed on it. Use clean geometric alternative instead. | Regenerate using Section 3 below |
| `rejected_wallpaper_scene23_two_men_at_development_workbench.jpg` | Act 3 (scene23) | Giant fish and lotus wallpaper covers the entire background; Sameer wearing green instead of indigo. | Regenerate using Section 3 below |
| `rejected_caricature_face_scene32_two_men_celebrating_victory.jpg` | Act 3 (scene32) | Distorted caricature facial features and folk wallpaper. | Regenerate using Section 3 below |
| `rejected_fish_wallpaper_scene40_two_men_dining_together.jpg` | Act 4 (scene40) | Wall tapestry features prominent fish designs directly prohibited by user guidelines. | Regenerate using Section 3 below |

## 3. One-Click Clean Regeneration Prompts for Quarantined Scenes

Copy and paste these exact prompts into Google Flow / Nano Banana Pro. Each prompt contains strict negative instructions preventing tattoos, bridal mehndi, fish wallpaper, decorative borders, and character facial distortions.

### rejected_tattoos_scene04_fingers_holding_wet_paper.jpg (Act 1, SCENE04)

- **Defect Identified:** Hand tattoo anomaly: Intricate blue tribal/henna tattoos on Akshay thumbs. Character must have bare hands. Needs regeneration.
### rejected_mehndi_scene26_finger_pressing_blue_button.jpg (Act 3, SCENE26)

- **Defect Identified:** Hand covered in intricate bridal mehndi henna. Needs clean bare finger clicking Postman Send.
### rejected_border_frame_scene48_guards_carrying_armored_chest.jpg (Act 5, SCENE48)

- **Defect Identified:** Artwork surrounded by a thick decorative patterned border/frame contrary to negative prompt.
### rejected_mehndi_scene20_hands_holding_menu_card.jpg (Act 2, SCENE20)

- **Defect Identified:** Hand covered in bridal mehndi henna + folk wallpaper border. Needs clean bare hands.
### rejected_mehndi_scene08_hand_holding_smartphone.jpg (Act 1, SCENE08)

- **Defect Identified:** Bridal mehndi henna patterns covering the hand and folk wallpaper background. Needs clean bare male hand.
### rejected_folk_tablecloth_scene39_hand_lifting_bowl.jpg (Act 4, SCENE39)

- **Defect Identified:** Tablecloth and background covered with folk birds and suns rather than clean dining veranda.
### rejected_folk_tapestry_scene23_men_discussing_programming.jpg (Act 3, SCENE23)

- **Defect Identified:** Folk peacock and lotus tapestry behind characters; image depicts dining rather than pair programming.
### rejected_folk_wallpaper_scene16_men_drinking_chai.jpg (Act 2, SCENE16)

- **Defect Identified:** Folk animal wallpaper (cows, fish on table trim) contradicts clean architectural workshop.
### rejected_akshay_beard_scene50_men_speaking_under_sunset_pavilion.jpg (Act 5, SCENE50)

- **Defect Identified:** Character inconsistency: Akshay is drawn with a full beard! Akshay must be clean-shaven. Needs regeneration.
### rejected_folk_wallpaper_scene28_monitor_glowing_pot.jpg (Act 3, SCENE28)

- **Defect Identified:** Room covered in animal folk wallpaper; screen shows earthenware pot with question marks instead of console undefined.
### rejected_wrong_character_scene24_person_typing_keyboard.jpg (Act 3, SCENE24)

- **Defect Identified:** Depicts a female character with bangles and hair bun instead of Akshay. Folk wallpaper covering desk.
### rejected_flying_fish_scene31_programmer_typing_code.jpg (Act 3, SCENE31)

- **Defect Identified:** Literal fish swimming out of glowing portal across laptop screen. Must be replaced with clean code editor.
### rejected_kurta_print_scene07_student_frustrated_with_phone.jpg (Act 1, SCENE07)

- **Defect Identified:** Sameer kurta has literal fish and parrots printed on it. Use clean geometric alternative instead.
### rejected_wallpaper_scene23_two_men_at_development_workbench.jpg (Act 3, SCENE23)

- **Defect Identified:** Giant fish and lotus wallpaper covers the entire background; Sameer wearing green instead of indigo.
### rejected_caricature_face_scene32_two_men_celebrating_victory.jpg (Act 3, SCENE32)

- **Defect Identified:** Distorted caricature facial features and folk wallpaper.
### rejected_fish_wallpaper_scene40_two_men_dining_together.jpg (Act 4, SCENE40)

- **Defect Identified:** Wall tapestry features prominent fish designs directly prohibited by user guidelines.
