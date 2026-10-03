import fs from 'fs';
import path from 'path';

const srcDir = 'C:/Users/AkshatSinha/Downloads/the first flow for api agent';
const workspaceRaw = 'src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/generated_raw';
const workspaceOrganized = 'src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/organized';

// Classification dictionary for all 65 files
const classification = [
  // ACT 1: Scenes 01 - 13
  {
    pattern: 'Students_walking_toward_universi',
    status: 'useful',
    act: 1,
    scene: 'scene01',
    targetName: 'act01_scene01_sunny_campus_quadrangle.jpg',
    category: 'act1',
    notes: 'Wide establishing shot of heritage campus quadrangle under morning sunlight.'
  },
  {
    pattern: 'Water_leaking_from_brass_bottle',
    status: 'useful',
    act: 1,
    scene: 'scene02',
    targetName: 'act01_scene02_leaking_brass_bottle.jpg',
    category: 'act1',
    notes: 'Extreme close-up of water leaking from brass flask cap soaking canvas bag.'
  },
  {
    pattern: 'Student_holding_wet_paper_sheet_20261002141457.jpg',
    status: 'useful',
    act: 1,
    scene: 'scene03',
    targetName: 'act01_scene03_akshay_soaked_admit_card.jpg',
    category: 'act1',
    notes: 'Medium shot of Akshay holding soaked paper with panic expression. Clean hands, accurate white kurta.'
  },
  {
    pattern: 'Student_holding_wet_paper_sheet_20261002141457_2.jpg',
    status: 'useful',
    act: 1,
    scene: 'scene03',
    targetName: 'act01_scene03_alt1_soaked_paper.jpg',
    category: 'act1',
    notes: 'Alternate take of Scene 03 soaked paper.'
  },
  {
    pattern: 'Student_holding_wet_paper_sheet_20261002141457_3.jpg',
    status: 'useful',
    act: 1,
    scene: 'scene03',
    targetName: 'act01_scene03_alt2_soaked_paper.jpg',
    category: 'act1',
    notes: 'Alternate take 2 of Scene 03 soaked paper.'
  },
  {
    pattern: 'Fingers_holding_wet_waterlogged',
    status: 'not_useful',
    act: 1,
    scene: 'scene04',
    targetName: 'rejected_tattoos_scene04_fingers_holding_wet_paper.jpg',
    reason: 'Hand tattoo anomaly: Intricate blue tribal/henna tattoos on Akshay thumbs. Character must have bare hands. Needs regeneration.',
    repromptScene: 'Scene 04'
  },
  {
    pattern: 'Man_sprinting_across_stone_quadr',
    status: 'useful',
    act: 1,
    scene: 'scene05',
    targetName: 'act01_scene05_akshay_sprinting_panic.jpg',
    category: 'act1',
    notes: 'Dynamic low-angle sprint of Akshay in panic across quadrangle.'
  },
  {
    pattern: 'Student_frustrated_by_mobile_phone',
    status: 'useful',
    act: 1,
    scene: 'scene09',
    targetName: 'act01_scene09_sameer_arrival_chai.jpg',
    category: 'act1',
    notes: 'Masterpiece two-shot: Akshay sitting frustrated at phone under jali screen, Sameer arrives standing with steaming cutting chai.'
  },
  {
    pattern: 'Student_frustrated_with_phone',
    status: 'not_useful',
    act: 1,
    scene: 'scene07',
    targetName: 'rejected_kurta_print_scene07_student_frustrated_with_phone.jpg',
    reason: 'Sameer kurta has literal fish and parrots printed on it. Use clean geometric alternative instead.',
    repromptScene: 'Scene 07'
  },
  {
    pattern: 'Man_tapping_mobile_phone_screen',
    status: 'useful',
    act: 1,
    scene: 'scene07',
    targetName: 'act01_scene07_akshay_tapping_phone_screen.jpg',
    category: 'act1',
    notes: 'Akshay tapping phone under archway.'
  },
  {
    pattern: 'Hand_holding_smartphone_with_screen',
    status: 'not_useful',
    act: 1,
    scene: 'scene08',
    targetName: 'rejected_mehndi_scene08_hand_holding_smartphone.jpg',
    reason: 'Bridal mehndi henna patterns covering the hand and folk wallpaper background. Needs clean bare male hand.',
    repromptScene: 'Scene 08'
  },
  {
    pattern: 'Student_and_architect_by_pillar',
    status: 'useful',
    act: 1,
    scene: 'scene09',
    targetName: 'act01_scene09_alt_sameer_by_pillar.jpg',
    category: 'act1',
    notes: 'Sameer and Akshay standing by pillar with chai in god-rays.'
  },
  {
    pattern: 'Two_men_in_ancient_cloister',
    status: 'useful',
    act: 1,
    scene: 'scene09',
    targetName: 'act01_scene09_alt_cloister_server_rack.jpg',
    category: 'act1',
    notes: 'Silicon Heritage server rack inside sandstone cloister with Sameer and Akshay.'
  },
  {
    pattern: 'Man_holding_chai_glass_20261002141457.jpg',
    status: 'useful',
    act: 1,
    scene: 'scene10',
    targetName: 'act01_scene10_sameer_diagnostic_gaze.jpg',
    category: 'act1',
    notes: 'Close-up of Sameer with calm diagnostic smile holding cutting chai.'
  },
  {
    pattern: 'Man_holding_chai_glass_20261002141457_2.jpg',
    status: 'useful',
    act: 1,
    scene: 'scene10',
    targetName: 'act01_scene10_alt_sameer_holding_chai.jpg',
    category: 'act1',
    notes: 'Alternative close-up of Sameer with chai.'
  },
  {
    pattern: 'Sameer_holding_diagnostic_tablet',
    status: 'useful',
    act: 1,
    scene: 'scene11',
    targetName: 'act01_scene11_sameer_diagnostic_slate_14ms.jpg',
    category: 'act1',
    notes: 'Masterpiece: Sameer diagnostic slate projecting glowing wire HUD, Akshay jaw-drop shock at 14ms payload.'
  },
  {
    pattern: 'Man_showing_shock_and_relief',
    status: 'useful',
    act: 1,
    scene: 'scene12',
    targetName: 'act01_scene12_akshay_shock_relief.jpg',
    category: 'act1',
    notes: 'Akshay reaction shot of shock turning to immense relief.'
  },
  {
    pattern: 'Students_running_toward_exam_gates',
    status: 'useful',
    act: 1,
    scene: 'scene13',
    targetName: 'act01_scene13_students_running_exam_gates.jpg',
    category: 'act1',
    notes: 'Akshay sprinting through closing brass gates holding printed sheet.'
  },

  // ACT 2: Scenes 14 - 22
  {
    pattern: 'Research_workshop_interior_with',
    status: 'useful',
    act: 2,
    scene: 'scene14',
    targetName: 'act02_scene14_research_workshop_interior.jpg',
    category: 'act2',
    notes: 'Post-exam research workshop interior with teak desks and dual monitors.'
  },
  {
    pattern: 'Brass_kettle_pouring_chai_into',
    status: 'useful',
    act: 2,
    scene: 'scene15',
    targetName: 'act02_scene15_brass_kettle_pouring_chai.jpg',
    category: 'act2',
    notes: 'Masterpiece: Brass kettle pouring piping hot cutting chai into twin glasses on carved teak table.'
  },
  {
    pattern: 'Man_pouring_tea_from_samovar',
    status: 'useful',
    act: 2,
    scene: 'scene15',
    targetName: 'act02_scene15_alt_samovar_pouring_chai.jpg',
    category: 'act2',
    notes: 'Alternate chai pouring shot.'
  },
  {
    pattern: 'Men_drinking_chai_at_table',
    status: 'not_useful',
    act: 2,
    scene: 'scene16',
    targetName: 'rejected_folk_wallpaper_scene16_men_drinking_chai.jpg',
    reason: 'Folk animal wallpaper (cows, fish on table trim) contradicts clean architectural workshop.',
    repromptScene: 'Scene 16'
  },
  {
    pattern: 'Customer_looking_at_plate',
    status: 'useful',
    act: 2,
    scene: 'scene17',
    targetName: 'act02_scene17_restaurant_customer_client.jpg',
    category: 'act2',
    notes: 'Conceptual analogy: Customer seated waiting for food (The Client).'
  },
  {
    pattern: 'Waiter_standing_in_arched_doorway',
    status: 'useful',
    act: 2,
    scene: 'scene18',
    targetName: 'act02_scene18_canteen_waiter_api.jpg',
    category: 'act2',
    notes: 'Conceptual analogy: The Courier Waiter with brass notepad in arched portal (The API).'
  },
  {
    pattern: 'Chefs_working_in_commercial_kitchen',
    status: 'useful',
    act: 2,
    scene: 'scene19',
    targetName: 'act02_scene19_commercial_kitchen_database.jpg',
    category: 'act2',
    notes: 'Conceptual analogy: Steaming commercial kitchen with cooks (The Database and Server).'
  },
  {
    pattern: 'Hands_holding_leather_menu_card',
    status: 'not_useful',
    act: 2,
    scene: 'scene20',
    targetName: 'rejected_mehndi_scene20_hands_holding_menu_card.jpg',
    reason: 'Hand covered in bridal mehndi henna + folk wallpaper border. Needs clean bare hands.',
    repromptScene: 'Scene 20'
  },
  {
    pattern: 'Bullock_cart_versus_royal_courier',
    status: 'useful',
    act: 2,
    scene: 'scene21',
    targetName: 'act02_scene21_bullock_cart_vs_royal_courier.jpg',
    category: 'act2',
    notes: 'Split conceptual analogy: Heavy 4MB UI bullock cart vs swift 120-byte JSON royal courier.'
  },

  // ACT 3: Scenes 23 - 32
  {
    pattern: 'Two_men_at_development_workbench',
    status: 'not_useful',
    act: 3,
    scene: 'scene23',
    targetName: 'rejected_wallpaper_scene23_two_men_at_development_workbench.jpg',
    reason: 'Giant fish and lotus wallpaper covers the entire background; Sameer wearing green instead of indigo.',
    repromptScene: 'Scene 23'
  },
  {
    pattern: 'Men_discussing_programming_over',
    status: 'not_useful',
    act: 3,
    scene: 'scene23',
    targetName: 'rejected_folk_tapestry_scene23_men_discussing_programming.jpg',
    reason: 'Folk peacock and lotus tapestry behind characters; image depicts dining rather than pair programming.',
    repromptScene: 'Scene 23'
  },
  {
    pattern: 'Person_typing_on_mechanical_keyb',
    status: 'not_useful',
    act: 3,
    scene: 'scene24',
    targetName: 'rejected_wrong_character_scene24_person_typing_keyboard.jpg',
    reason: 'Depicts a female character with bangles and hair bun instead of Akshay. Folk wallpaper covering desk.',
    repromptScene: 'Scene 24'
  },
  {
    pattern: 'Finger_pressing_blue_button',
    status: 'not_useful',
    act: 3,
    scene: 'scene26',
    targetName: 'rejected_mehndi_scene26_finger_pressing_blue_button.jpg',
    reason: 'Hand covered in intricate bridal mehndi henna. Needs clean bare finger clicking Postman Send.',
    repromptScene: 'Scene 26'
  },
  {
    pattern: 'Man_reacting_to_terminal_screens',
    status: 'useful',
    act: 3,
    scene: 'scene27',
    targetName: 'act03_scene27_reaction_typeerror_crash.jpg',
    category: 'act3',
    notes: 'Akshay panic reaction with hands on head as terminals flash red warnings (TypeError!). Clean hands, white kurta.'
  },
  {
    pattern: 'Monitor_displaying_glowing_quest',
    status: 'not_useful',
    act: 3,
    scene: 'scene28',
    targetName: 'rejected_folk_wallpaper_scene28_monitor_glowing_pot.jpg',
    reason: 'Room covered in animal folk wallpaper; screen shows earthenware pot with question marks instead of console undefined.',
    repromptScene: 'Scene 28'
  },
  {
    pattern: 'Men_discussing_network_cable_at',
    status: 'useful',
    act: 3,
    scene: 'scene29',
    targetName: 'act03_scene29_sameer_points_physical_wire.jpg',
    category: 'act3',
    notes: 'Sameer in indigo kurta pointing directly at hardware wire connection with chai in hand. Akshay studying terminal.'
  },
  {
    pattern: 'Water_carrying_glowing_tiles_in',
    status: 'useful',
    act: 3,
    scene: 'scene30',
    targetName: 'act03_scene30_byte_stream_waterfall_aqueduct.jpg',
    category: 'act3',
    notes: 'Conceptual visualization: Sandstone aqueduct carrying raw glowing byte stream tiles into brass gear sieve.'
  },
  {
    pattern: 'Programmer_typing_code_into_editor',
    status: 'not_useful',
    act: 3,
    scene: 'scene31',
    targetName: 'rejected_flying_fish_scene31_programmer_typing_code.jpg',
    reason: 'Literal fish swimming out of glowing portal across laptop screen. Must be replaced with clean code editor.',
    repromptScene: 'Scene 31'
  },
  {
    pattern: 'Two_men_celebrating_victory',
    status: 'not_useful',
    act: 3,
    scene: 'scene32',
    targetName: 'rejected_caricature_face_scene32_two_men_celebrating_victory.jpg',
    reason: 'Distorted caricature facial features and folk wallpaper.',
    repromptScene: 'Scene 32'
  },
  {
    pattern: 'Two_men_smiling_graphic_novel',
    status: 'useful',
    act: 3,
    scene: 'scene32',
    targetName: 'act03_scene32_two_men_success_201_created.jpg',
    category: 'act3',
    notes: 'Akshay and Sameer smiling with crossed arms before glowing green 201 Created monitor! Clean modern workspace.'
  },

  // ACT 4: Scenes 33 - 43
  {
    pattern: 'Stone_dining_veranda_overlooking',
    status: 'useful',
    act: 4,
    scene: 'scene33',
    targetName: 'act04_scene33_veranda_lunch_table_setup.jpg',
    category: 'act4',
    notes: 'Wide shot of stone dining veranda overlooking lush courtyard garden.'
  },
  {
    pattern: 'Men_sitting_at_table',
    status: 'useful',
    act: 4,
    scene: 'scene34',
    targetName: 'act04_scene34_sitting_down_protocol_feast.jpg',
    category: 'act4',
    notes: 'Akshay finger to temple having breakthrough, Sameer smiling warmly. Clean characters.'
  },
  {
    pattern: 'Attendant_placing_food_on_mat',
    status: 'useful',
    act: 4,
    scene: 'scene35',
    targetName: 'act04_scene35_post_placing_brand_new_thali.jpg',
    category: 'act4',
    notes: 'POST Verb: Attendant placing a brand-new complete thali platter on the dining surface.'
  },
  {
    pattern: 'Man_inspecting_thali_of_food',
    status: 'useful',
    act: 4,
    scene: 'scene36',
    targetName: 'act04_scene36_get_inspecting_without_touching.jpg',
    category: 'act4',
    notes: 'GET Verb: Hands inspecting the brass thali dishes without altering or consuming them.'
  },
  {
    pattern: 'Man_lifts_brass_thali',
    status: 'useful',
    act: 4,
    scene: 'scene37',
    targetName: 'act04_scene37_put_replacing_entire_platter.jpg',
    category: 'act4',
    notes: 'PUT Verb: Lifting the entire brass platter to completely overwrite and replace the resource.'
  },
  {
    pattern: 'Pouring_dal_into_brass_bowl_20261002141457_2.jpg',
    status: 'useful',
    act: 4,
    scene: 'scene38',
    targetName: 'act04_scene38_patch_topping_up_dal.jpg',
    category: 'act4',
    notes: 'PATCH Verb Masterpiece: Brass ladle pouring steaming yellow dal with mustard seeds into single katori. Clean hands, veranda background.'
  },
  {
    pattern: 'Pouring_dal_into_brass_bowl_20261002141457.jpg',
    status: 'useful',
    act: 4,
    scene: 'scene38',
    targetName: 'act04_scene38_alt1_patch_dal.jpg',
    category: 'act4',
    notes: 'PATCH Verb alternative: Clean hands, brass ladle pouring dal.'
  },
  {
    pattern: 'Hands_pouring_dal_into_bowl',
    status: 'useful',
    act: 4,
    scene: 'scene38',
    targetName: 'act04_scene38_alt2_patch_dal_archway.jpg',
    category: 'act4',
    notes: 'PATCH Verb alternative 2: Sandstone archway background.'
  },
  {
    pattern: 'Hand_lifting_bowl_off_platter',
    status: 'not_useful',
    act: 4,
    scene: 'scene39',
    targetName: 'rejected_folk_tablecloth_scene39_hand_lifting_bowl.jpg',
    reason: 'Tablecloth and background covered with folk birds and suns rather than clean dining veranda.',
    repromptScene: 'Scene 39'
  },
  {
    pattern: 'Two_men_dining_together',
    status: 'not_useful',
    act: 4,
    scene: 'scene40',
    targetName: 'rejected_fish_wallpaper_scene40_two_men_dining_together.jpg',
    reason: 'Wall tapestry features prominent fish designs directly prohibited by user guidelines.',
    repromptScene: 'Scene 40'
  },
  {
    pattern: 'Parakeets_in_tranquil_royal_garden',
    status: 'useful',
    act: 4,
    scene: 'scene41',
    targetName: 'act04_scene41_status_2xx_green_royal_garden.jpg',
    category: 'act4',
    notes: 'Status 2xx Family: Symmetrical tranquil royal garden with green fountains and parakeets (Success/Everything OK).'
  },
  {
    pattern: 'Traveler_holding_key_at_door',
    status: 'useful',
    act: 4,
    scene: 'scene42',
    targetName: 'act04_scene42_status_4xx_closed_wicket_gate.jpg',
    category: 'act4',
    notes: 'Status 4xx Family: Traveler holding wrong key before locked wooden gate at night (Client Error / Unauthorized / Forbidden).'
  },
  {
    pattern: 'Cooks_panicking_in_castle_kitchen',
    status: 'useful',
    act: 4,
    scene: 'scene43',
    targetName: 'act04_scene43_status_5xx_exploding_kitchen.jpg',
    category: 'act4',
    notes: 'Status 5xx Family: Kitchen billowing smoke and flames with panicked cooks (Server Crash / Internal Server Error).'
  },

  // ACT 5: Scenes 44 - 52
  {
    pattern: 'Two_people_walking_up_staircase',
    status: 'useful',
    act: 5,
    scene: 'scene44',
    targetName: 'act05_scene44_walking_up_spiral_staircase.jpg',
    category: 'act5',
    notes: 'Akshay following Sameer up the exterior spiral staircase of sandstone tower at sunset.'
  },
  {
    pattern: 'Man_running_up_stairs',
    status: 'useful',
    act: 5,
    scene: 'scene44',
    targetName: 'act05_scene44_alt_running_up_stairs.jpg',
    category: 'act5',
    notes: 'Alternative staircase shot.'
  },
  {
    pattern: 'Landscape_view_from_rooftop_terrace',
    status: 'useful',
    act: 5,
    scene: 'scene45',
    targetName: 'act05_scene45_sunset_rooftop_pavilion_wide.jpg',
    category: 'act5',
    notes: 'Masterpiece: Wide scenic panorama from rooftop pavilion overlooking glowing fiber towers and solar array at dusk.'
  },
  {
    pattern: 'Man_sketching_on_slate_blackboard',
    status: 'useful',
    act: 5,
    scene: 'scene46',
    targetName: 'act05_scene46_sameer_slate_blackboard_canopy.jpg',
    category: 'act5',
    notes: 'Masterpiece: Sameer sketching the 3 architectural portals (REST, SOAP, GraphQL) on slate blackboard as Akshay listens.'
  },
  {
    pattern: 'Postcards_carried_by_postal_mess',
    status: 'useful',
    act: 5,
    scene: 'scene47',
    targetName: 'act05_scene47_paradigm_rest_standardized_postcard.jpg',
    category: 'act5',
    notes: 'Paradigm 1 REST: Messengers carrying open standardized postcards across highway.'
  },
  {
    pattern: 'Guards_carrying_armored_chest',
    status: 'not_useful',
    act: 5,
    scene: 'scene48',
    targetName: 'rejected_border_frame_scene48_guards_carrying_armored_chest.jpg',
    reason: 'Artwork surrounded by a thick decorative patterned border/frame contrary to negative prompt.',
    repromptScene: 'Scene 48'
  },
  {
    pattern: 'Shopper_selecting_spices_in_market',
    status: 'useful',
    act: 5,
    scene: 'scene49',
    targetName: 'act05_scene49_paradigm_graphql_spice_market.jpg',
    category: 'act5',
    notes: 'Paradigm 3 GraphQL: Shopper selecting exact custom spices into woven basket from burlap sacks.'
  },
  {
    pattern: 'Men_speaking_under_sunset_pavilion',
    status: 'not_useful',
    act: 5,
    scene: 'scene50',
    targetName: 'rejected_akshay_beard_scene50_men_speaking_under_sunset_pavilion.jpg',
    reason: 'Character inconsistency: Akshay is drawn with a full beard! Akshay must be clean-shaven. Needs regeneration.',
    repromptScene: 'Scene 50'
  },
  {
    pattern: 'Man_lifting_chai_glass',
    status: 'useful',
    act: 5,
    scene: 'scene51',
    targetName: 'act05_scene51_pouring_twilight_chai.jpg',
    category: 'act5',
    notes: 'Sameer raising cutting chai glass in warm sunset light.'
  },
  {
    pattern: 'Men_raising_glasses_on_rooftop',
    status: 'useful',
    act: 5,
    scene: 'scene52',
    targetName: 'act05_scene52_chai_toast_to_network_wire.jpg',
    category: 'act5',
    notes: 'Grand Finale Masterpiece: Sameer and Akshay raising chai glasses on rooftop terrace at twilight, cyan fiber lines glowing below.'
  },

  // Model sheets
  {
    pattern: 'Character_turnaround_model_sheet_20261002141457.jpg',
    status: 'useful',
    act: 'model_sheet',
    scene: 'sheet1',
    targetName: 'ref_model_sheet_akshay_1.jpg',
    category: 'model_sheets',
    notes: 'Character model turnaround reference sheet 1.'
  },
  {
    pattern: 'Character_turnaround_model_sheet_20261002141457_2.jpg',
    status: 'useful',
    act: 'model_sheet',
    scene: 'sheet2',
    targetName: 'ref_model_sheet_akshay_2.jpg',
    category: 'model_sheets',
    notes: 'Character model turnaround reference sheet 2.'
  },
  {
    pattern: 'Character_turnaround_model_sheet_20261002141457_3.jpg',
    status: 'useful',
    act: 'model_sheet',
    scene: 'sheet3',
    targetName: 'ref_model_sheet_sameer_1.jpg',
    category: 'model_sheets',
    notes: 'Character model turnaround reference sheet 3.'
  },
  {
    pattern: 'Character_turnaround_model_sheet_20261002141457_4.jpg',
    status: 'useful',
    act: 'model_sheet',
    scene: 'sheet4',
    targetName: 'ref_model_sheet_sameer_2.jpg',
    category: 'model_sheets',
    notes: 'Character model turnaround reference sheet 4.'
  }
];

// Execute file segregation
const allFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

// Ensure target directories exist
const acts = ['act1', 'act2', 'act3', 'act4', 'act5', 'model_sheets'];
for (const act of acts) {
  fs.mkdirSync(path.join(srcDir, 'useful', act), { recursive: true });
  fs.mkdirSync(path.join(workspaceOrganized, 'useful', act), { recursive: true });
}
fs.mkdirSync(path.join(srcDir, 'not_useful'), { recursive: true });
fs.mkdirSync(path.join(workspaceOrganized, 'not_useful'), { recursive: true });

let usefulCount = 0;
let notUsefulCount = 0;
const auditReport = [];

for (const file of allFiles) {
  // If file is already inside a folder or already processed, skip
  const entry = classification.find(c => file.includes(c.pattern));
  if (!entry) {
    console.log('Unclassified file:', file);
    continue;
  }

  const srcPath = path.join(srcDir, file);
  
  if (entry.status === 'useful') {
    usefulCount++;
    const targetDirDownloads = path.join(srcDir, 'useful', entry.category);
    const targetDirWorkspace = path.join(workspaceOrganized, 'useful', entry.category);
    
    fs.copyFileSync(srcPath, path.join(targetDirDownloads, entry.targetName));
    fs.copyFileSync(srcPath, path.join(targetDirWorkspace, entry.targetName));
    
    auditReport.push({
      file,
      targetName: entry.targetName,
      status: 'APPROVED (USEFUL)',
      act: entry.act,
      scene: entry.scene,
      notes: entry.notes
    });
  } else {
    notUsefulCount++;
    const targetDirDownloads = path.join(srcDir, 'not_useful');
    const targetDirWorkspace = path.join(workspaceOrganized, 'not_useful');
    
    fs.copyFileSync(srcPath, path.join(targetDirDownloads, entry.targetName));
    fs.copyFileSync(srcPath, path.join(targetDirWorkspace, entry.targetName));
    
    auditReport.push({
      file,
      targetName: entry.targetName,
      status: 'QUARANTINED (NOT USEFUL)',
      act: entry.act,
      scene: entry.scene,
      reason: entry.reason,
      repromptScene: entry.repromptScene
    });
  }
}

console.log(`\n=== SEPARATION COMPLETE ===`);
console.log(`Total Files Checked: ${allFiles.length}`);
console.log(`Useful Images: ${usefulCount}`);
console.log(`Not Useful / Quarantined: ${notUsefulCount}`);
fs.writeFileSync(
  path.join(workspaceOrganized, 'audit_summary.json'),
  JSON.stringify(auditReport, null, 2)
);
console.log('Saved audit_summary.json');
