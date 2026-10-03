# Feature Specification: Zero-Occlusion Comic Storyboard Engine & 35-Beat Narrative Arc

**Feature ID:** `SPEC-CH01-STORYBOARD-EXPANSION`  
**Target Book:** *Zero to Agentic API Testing* (Book 3)  
**Target Chapter:** Chapter 01 (*Understanding APIs from First Principles: The Wire and The Glass*)  
**Component:** `src/components/Blocks.jsx`, `src/styles/core/publishing.css`, `lesson01.js`  
**Publisher:** Sarva Gyana Koshah Books (The Sinha Family Group)

---

## 1. Problem Statement & User Pain Points
1. **Dialogue Occlusion:** Floating speech balloons inside images cover characters' eyes, faces, admit cards, or laptop screens when text is long or exceeds 2 dialogue lines.
2. **Repetitive "Core Wire Lesson" Noise:** Repetitive takeaway boxes appear under basic visual action panels (like water bottles leaking or students running), disrupting cinematic comic immersion.
3. **Severe Narrative Compression & Asset Wastage:** 49 high-resolution illustrations were produced and verified in `pipeline/ch01/`, but Acts 2, 3, 4, and 5 were crammed into only 2 or 3 panels, with up to 6 dialogue lines stacked on a single image.

---

## 2. Requirements & Acceptance Criteria

### A. Architectural & Layout Engine (`Blocks.jsx` & CSS)
- **Zero-Occlusion Guarantee:**
  - When an image panel has **1 short punchy line ($\le 12$ words)**, it may float in the top negative headroom ($2.5\%$ top offset, max-width $30\%$).
  - When a panel contains **longer dialogue or conversational back-and-forth ($\ge 2$ dialogue lines)**, speech balloons **MUST NEVER overlay the artwork**. They must render in an authentic **Comic Dialogue Ribbon** directly adjacent to or below the art frame with character color-coding, speaker tags, and directional tails.
- **Pristine Art Preservation:** 
  - $100\%$ of characters' faces, terminal screens, props, and actions remain visible and un-obscured.
  - Image maintains 16:9 cinematic aspect ratio with rounded corners and high-contrast print-safe borders.
- **Selective Takeaway Hygiene:**
  - Remove all redundant `realization` callouts from standard narrative action panels.
  - Only genuine architectural epiphanies (e.g. Sameer's 14ms insight, the TCP streaming buffer, the Brass Thali rule, and the three paradigms) retain a dedicated takeaway card.

### B. Complete Narrative Beat Expansion (`lesson01.js`)
Unpack the 5 Acts across **35 distinct narrative beats** utilizing the approved assets in `pipeline/ch01/`:

#### Act 1: The Quad Crisis & 14ms Wire Rescue (10 Beats)
1. `act01_scene01_sunny_campus_quadrangle.jpg` — The Sunny Campus Quadrangle
2. `act01_scene02_leaking_brass_bottle.jpg` — The Leaking Brass Bottle
3. `act01_scene03_akshay_soaked_admit_card.jpg` — Akshay Discovers the Soaked Paper
4. `act01_scene04_smeared_watercolor_admit_card.jpg` — Ruined Hall Ticket (Ink Dissolved)
5. `act01_scene05_akshay_sprinting_panic.jpg` — Frantic Sprint Across the Quad
6. `act01_scene06_two_students_running_panic.jpg` — Rohan Points at the Watch
7. `act01_scene07_akshay_tapping_phone_screen.jpg` — Tapping Phone Screen Under the Arch
8. `act01_scene09_sameer_arrival_chai.jpg` — Sameer Steps Out with Cutting Chai
9. `act01_scene09_alt_cloister_server_rack.jpg` — The Browser Vanity Choke (Server Vault)
10. `act01_scene11_sameer_diagnostic_slate_14ms.jpg` — The 14 Millisecond Terminal Rescue

#### Act 2: The Stepwell Canteen Courier Model (6 Beats)
11. `act02_scene14_research_workshop_interior.jpg` — Entering the Stepwell Research Workshop
12. `act02_scene15_brass_kettle_pouring_chai.jpg` — Pouring Fresh Cutting Chai
13. `act02_scene17_restaurant_customer_client.jpg` — The Customer at the Table (The Client)
14. `act02_scene18_canteen_waiter_api.jpg` — The Courier Waiter (The API)
15. `act02_scene19_commercial_kitchen_database.jpg` — The Steaming Kitchen (The Database & Server)
16. `act02_scene21_bullock_cart_vs_royal_courier.jpg` — The 4MB Browser Cart vs The 120-Byte Courier

#### Act 3: Pair Programming Port 3000 & The Byte Stream Trap (5 Beats)
17. `act03_scene27_reaction_typeerror_crash.jpg` — Spinning Up Port 3000 and the Red TypeError
18. `act03_scene29_sameer_points_physical_wire.jpg` — Sameer Points to the Physical Wire
19. `act03_scene30_byte_stream_waterfall_aqueduct.jpg` — The Raw TCP Byte Stream Aqueduct Sieve
20. `act03_scene31_adding_express_json_middleware.jpg` — Mounting `express.json()` Middleware
21. `act03_scene32_two_men_success_201_created.jpg` — Victory: Body Reassembles Cleanly (`201 Created`)

#### Act 4: The Brass Thali Protocol Feast & CRUD Operations (7 Beats)
22. `act04_scene33_veranda_lunch_table_setup.jpg` — Veranda Lunch Table Setup
23. `act04_scene34_sitting_down_protocol_feast.jpg` — Sitting Down for the Protocol Feast
24. `act04_scene36_get_inspecting_without_touching.jpg` — GET: Inspecting the Thali Without Touching
25. `act04_scene35_post_placing_brand_new_thali.jpg` — POST: Allocating a Brand New Platter
26. `act04_scene37_put_replacing_entire_platter.jpg` — The Brass Thali Trap: PUT Replaces the Whole Plate!
27. `act04_scene38_patch_topping_up_dal.jpg` — PATCH: Surgical Precision Topping Up the Dal
28. `act04_scene41_status_2xx_green_royal_garden.jpg` / `act04_scene42_status_4xx_closed_wicket_gate.jpg` / `act04_scene43_status_5xx_exploding_kitchen.jpg` — The Three HTTP Status Kingdoms

#### Act 5: The Three Paradigms Synthesis & Sunset Toast (7 Beats)
29. `act05_scene44_walking_up_spiral_staircase.jpg` — Walking Up the Ancient Sandstone Tower
30. `act05_scene45_sunset_rooftop_pavilion_wide.jpg` — The Sunset Rooftop Pavilion
31. `act05_scene46_sameer_slate_blackboard_canopy.jpg` — Sameer at the Slate Blackboard Under Canopy
32. `act05_scene47_paradigm_rest_standardized_postcard.jpg` — REST: The Standardized Open Postcard
33. `act05_scene48_soap_armored_lockbox.jpg` — SOAP: The Armored Royal Lockbox
34. `act05_scene49_paradigm_graphql_spice_market.jpg` — GraphQL: The Tailored Spice Market Basket
35. `act05_scene52_chai_toast_to_network_wire.jpg` — Sunset Chai Toast: Welcome to the Wire!

---

## 3. Strict Quality Invariants
- **100% Dialogue Preservation:** Every existing dialogue sentence and character reply must be preserved verbatim without loss.
- **Rule 19 Compliance:** Zero hyphens (`-`) or dashes (`—`, `–`) in chapter titles or section headings.
- **Light Mode First:** Perfect contrast on white background.
