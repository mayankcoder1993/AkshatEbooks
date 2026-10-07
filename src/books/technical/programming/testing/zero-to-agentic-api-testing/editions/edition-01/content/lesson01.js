import act01Scene02Img from '../assets/illustrations/acts/act1/act01_scene02_leaking_brass_bottle.jpg'
import act01Scene03Img from '../assets/illustrations/acts/act1/act01_scene03_akshay_soaked_admit_card.jpg'
import act01Scene04Img from '../assets/illustrations/acts/act1/act01_scene04_smeared_watercolor_admit_card.jpg'
import act01Scene05Img from '../assets/illustrations/acts/act1/act01_scene05_akshay_sprinting_panic.jpg'
import act01Scene06Img from '../assets/illustrations/acts/act1/act01_scene06_two_students_running_panic.jpg'
import act01Scene07Img from '../assets/illustrations/acts/act1/act01_scene07_akshay_tapping_phone_screen.jpg'
import act01Scene09Img from '../assets/illustrations/acts/act1/act01_scene09_sameer_arrival_chai.jpg'
import act01Scene09ServerImg from '../assets/illustrations/acts/act1/act01_scene09_alt_cloister_server_rack.jpg'
import act01Scene11Img from '../assets/illustrations/acts/act1/act01_scene11_sameer_diagnostic_slate_14ms.jpg'
import act01Scene12Img from '../assets/illustrations/acts/act1/act01_scene12_akshay_shock_relief.jpg'
import act01Scene13Img from '../assets/illustrations/acts/act1/act01_scene13_students_running_exam_gates.jpg'

import act02Scene14Img from '../assets/illustrations/acts/act2/act02_scene14_research_workshop_interior.jpg'
import act02Scene15Img from '../assets/illustrations/acts/act2/act02_scene15_brass_kettle_pouring_chai.jpg'
import act02Scene17Img from '../assets/illustrations/acts/act2/act02_scene17_restaurant_customer_client.jpg'
import act02Scene18Img from '../assets/illustrations/acts/act2/act02_scene18_canteen_waiter_api.jpg'
import act02Scene19Img from '../assets/illustrations/acts/act2/act02_scene19_commercial_kitchen_database.jpg'
import act02Scene21Img from '../assets/illustrations/acts/act2/act02_scene21_bullock_cart_vs_royal_courier.jpg'

import act03Scene27Img from '../assets/illustrations/acts/act3/act03_scene27_reaction_typeerror_crash.jpg'
import act03Scene29Img from '../assets/illustrations/acts/act3/act03_scene29_sameer_points_physical_wire.jpg'
import act03Scene30Img from '../assets/illustrations/acts/act3/act03_scene30_byte_stream_waterfall_aqueduct.jpg'
import act03Scene31Img from '../assets/illustrations/acts/act3/act03_scene31_adding_express_json_middleware.jpg'
import act03Scene32Img from '../assets/illustrations/acts/act3/act03_scene32_two_men_success_201_created.jpg'

import act04Scene33Img from '../assets/illustrations/acts/act4/act04_scene33_veranda_lunch_table_setup.jpg'
import act04Scene34Img from '../assets/illustrations/acts/act4/act04_scene34_sitting_down_protocol_feast.jpg'
import act04Scene35Img from '../assets/illustrations/acts/act4/act04_scene35_post_placing_brand_new_thali.jpg'
import act04Scene36Img from '../assets/illustrations/acts/act4/act04_scene36_get_inspecting_without_touching.jpg'
import act04Scene37Img from '../assets/illustrations/acts/act4/act04_scene37_put_replacing_entire_platter.jpg'
import act04Scene38Img from '../assets/illustrations/acts/act4/act04_scene38_patch_topping_up_dal.jpg'
import act04Scene41Img from '../assets/illustrations/acts/act4/act04_scene41_status_2xx_green_royal_garden.jpg'

import act05Scene44Img from '../assets/illustrations/acts/act5/act05_scene44_walking_up_spiral_staircase.jpg'
import act05Scene45Img from '../assets/illustrations/acts/act5/act05_scene45_sunset_rooftop_pavilion_wide.jpg'
import act05Scene46Img from '../assets/illustrations/acts/act5/act05_scene46_sameer_slate_blackboard_canopy.jpg'
import act05Scene47Img from '../assets/illustrations/acts/act5/act05_scene47_paradigm_rest_standardized_postcard.jpg'
import act05Scene48Img from '../assets/illustrations/acts/act5/act05_scene48_soap_armored_lockbox.jpg'
import act05Scene49Img from '../assets/illustrations/acts/act5/act05_scene49_paradigm_graphql_spice_market.jpg'
import act05Scene52Img from '../assets/illustrations/acts/act5/act05_scene52_chai_toast_to_network_wire.jpg'

import scene1Svg from '../assets/svgs/ch01-comic-scene1-admitcard-leak.svg'
import scene2Svg from '../assets/svgs/ch01-comic-scene2-portal-spinner.svg'
import scene3Svg from '../assets/svgs/ch01-comic-scene3-terminal-rescue.svg'
import scene4Svg from '../assets/svgs/ch01-comic-scene4-waiter-architecture.svg'
import scene5Svg from '../assets/svgs/ch01-comic-scene5-port3000-middleware.svg'
import scene6Svg from '../assets/svgs/ch01-comic-scene6-protocols-thali.svg'

import akshayPanicSvg from '../assets/svgs/characters/akshay-panic.svg'
import akshayCodingSvg from '../assets/svgs/characters/akshay-coding.svg'
import akshayEurekaSvg from '../assets/svgs/characters/akshay-eureka.svg'
import sameerChaiSvg from '../assets/svgs/characters/sameer-chai.svg'
import sameerPointingSvg from '../assets/svgs/characters/sameer-pointing.svg'
import sameerThaliSvg from '../assets/svgs/characters/sameer-thali.svg'

import flowSvg from '../assets/svgs/ch01-flow-http-transaction.svg'
import getMenuSvg from '../assets/svgs/ch01-workbench-get-menu.svg'
import postMenuSvg from '../assets/svgs/ch01-workbench-post-menu.svg'

export const lesson01 = {
  id: 'understanding-apis',
  icon: '⚡',
  title: 'Understanding APIs from First Principles',
  shortTitle: 'Understanding APIs',
  badge: 'CHAPTER 01 : FOUNDATIONS',
  subtitle: 'The restaurant analogy, the five core operations, building your own minimal server, and tasting REST, SOAP, and GraphQL.',
  tags: ['APIs', 'HTTP', 'Express', 'First Principles', 'CRUD', 'REST', 'SOAP', 'GraphQL'],

  blocks: [
    {
      type: 'chapter-opener',
      missionBadge: 'CHAPTER 01 : FOUNDATIONS : THE WIRED AWAKENING',
      missionTitle: 'The Wire and the 14ms Rescue',
      missionCrisis: 'The 08:30 AM Admit Card Meltdown and the Heavy Webpage Timeout',
      missionContext: 'At 08:30 AM on exam morning, student Akshay runs across the quad. A water leak in his bag smudges his printed Admit Card, dissolving his Hall and Seat numbers. Gates lock in twenty minutes. Panicking, he tries to re-download on mobile, but twelve thousand concurrent students have crashed the portal into a 504 timeout. Principal Systems Architect Sameer steps in with hot cutting chai, bypasses the browser, and fetches the pure Admit Card JSON directly from the wire in fourteen milliseconds. Astounded, Akshay vows to master APIs and pair programs with Sameer after the exam.',
      missionObjective: 'Understand what an Application Programming Interface does on the network wire, build a runnable Express Admit Card server on port 3000, avoid the undefined body byte stream crash, and master all five core CRUD verbs.',
      targetSystems: 'Apex Campus Admit Card Service : Port 3000 : HTTP Wire Traffic',
      phaseRoadmap: [
        {
          phase: 'Phase 1 of 3',
          title: 'The Wire and the Local Admit Card Server',
          status: 'current',
          desc: 'Chapter 1: Assembling Express on port 3000, bypassing UI bloat, and auditing the five CRUD verbs across the network wire.'
        },
        {
          phase: 'Phase 2 of 3',
          title: 'The Manual Wire Investigation',
          status: 'upcoming',
          desc: 'Chapter 2: Hands on investigation of campus transit status endpoints, discovering the 500 error.'
        },
        {
          phase: 'Phase 3 of 3',
          title: 'Building Automated Safety Gates',
          status: 'upcoming',
          desc: 'Chapter 3: Writing programmatic assertions, test suites, and CI CD automation to lock quality in.'
        }
      ],
      achieve: 'Understand what an Application Programming Interface actually does behind the browser. Distinguish heavy webpage bundles from lightweight backend data. Build a fully runnable Express server from scratch. Master the five essential CRUD verbs (POST, GET, PUT, PATCH, DELETE) and taste the architectural differences between REST, SOAP, and GraphQL.',
      how: 'Through sequential comic scenes, visual storyboards, interactive code workbenches, and diagnostic triage challenges following student Akshay and mentor Sameer.',
      carry: 'The mental model of the client server handshake, an intuitive grasp of HTTP status codes, and the confidence to inspect network requests directly rather than relying blindly on UI screens.'
    },

    // =========================================================================
    // ACT 1: THE MORNING QUAD CRISIS & THE 14ms WIRE RESCUE
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC ACT 1 : THE WATERFALL CHOKE AND TERMINAL RESCUE',
      title: 'The Admit Card Meltdown on the Sandstone Quadrangle',
      intro: 'Follow student Akshay from a high-stakes quad sprint with a water-damaged hall ticket to the 14ms terminal rescue, experiencing the sharp contrast between heavy browser presentation and lightweight wire data.',
      columns: 2,
      panels: [
        {
          title: 'The Brass Bottle Leak',
          time: '08:38 AM',
          image: {
            src: act01Scene02Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene02_leaking_brass_bottle.jpg',
            w: 1200,
            h: 675,
            alt: 'Polished brass water bottle leaking inside unzipped canvas messenger bag over folded paper admit cards.',
            caption: 'Apex Campus: Inside Akshay satchel, the loose bottle cap leaks, drowning paper admit cards in water.'
          },
          scene: 'Inside Akshay canvas satchel, the screw cap of his brass bottle works loose. Water pools across his examination hall ticket, dissolving the printed ink into running indigo watercolor blotches.'
        },
        {
          title: 'The Ink Dissolves on the Quad',
          time: '08:40 AM',
          image: {
            src: act01Scene03Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene03_akshay_soaked_admit_card.jpg',
            w: 1200,
            h: 675,
            alt: 'Akshay holding a soaked paper admit card in total panic on the sunny red sandstone quadrangle with water dripping from his bag.',
            caption: 'Apex Campus Quadrangle: Ancient carved sandstone arches meet modern cyan data lines, as Akshay stares in shock at his soaked hall ticket.'
          },
          dialogues: [
            {
              speaker: 'Akshay',
              speech: 'My water bottle cap opened inside my bag! My admit card looks like a melted blueberry popsicle! Where is my seat number?!'
            }
          ],
          scene: 'Akshay sprints past the quad with twenty minutes to the exam, staring in horror as water soaks through his paper admit card, completely blurring his room and seat numbers.'
        },
        {
          title: 'The Ruined Hall Ticket',
          time: '08:41 AM',
          image: {
            src: act01Scene04Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene04_smeared_watercolor_admit_card.jpg',
            w: 1200,
            h: 675,
            alt: 'Trembling fingers holding the ruined waterlogged examination hall ticket with running blue ink.',
            caption: 'Ruined Document: Water dissolves the blue printed ink over the hall and seat number box, rendering the printout completely illegible.'
          },
          dialogues: [
            {
              speaker: 'Akshay',
              speech: 'The ink ran right over the room number! It is completely blank! Security will never let me through the entrance gate without verified room digits!'
            }
          ],
          scene: 'Macro close-up of Akshay trembling hands gripping the ruined hall ticket as dissolved indigo ink feints across the wet paper fiber.'
        },
        {
          title: 'Fellow Students Rush Past the Gates',
          time: '08:42 AM',
          image: {
            src: act01Scene06Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene06_two_students_running_panic.jpg',
            w: 1200,
            h: 675,
            alt: 'Fellow students sprinting toward the carved campus gates, looking back and shouting warnings at Akshay.',
            caption: 'Main Campus Gate: Students sprint past the ornamental iron gates as the 09:00 AM lockdown deadline approaches.'
          },
          dialogues: [
            {
              speaker: 'Fellow Students',
              reply: true,
              speech: 'Stop staring at wet paper, Akshay! Gates lock at nine sharp! Open portal.apex.edu on your phone before security turns you away for the entire year!'
            }
          ],
          scene: 'Panicked classmates sprint past toward Hall 302, shouting that the gates close in minutes and urging him to pull up the campus web portal.'
        },
        {
          title: 'Frantic Screen Tapping under the Arch',
          time: '08:43 AM',
          image: {
            src: act01Scene07Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene07_akshay_tapping_phone_screen.jpg',
            w: 1200,
            h: 675,
            alt: 'Akshay aggressively tapping his smartphone screen under a shaded sandstone archway as morning sunlight filters through stone jali screens.',
            caption: 'Corridor Arcade: Leaning against a carved pillar, Akshay desperately taps his glowing screen.'
          },
          dialogues: [
            {
              speaker: 'Akshay',
              speech: 'It will not open! The little loading circle has been spinning like a ceiling fan for four straight minutes!'
            }
          ],
          scene: 'Akshay taps his mobile screen frantically under the arcade corridor, but the college admit card portal is trapped in an infinite spinning wheel.'
        },
        {
          title: 'Sameer Arrives with Cutting Chai',
          time: '08:44 AM',
          fullWidth: true,
          image: {
            src: act01Scene09Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene09_sameer_arrival_chai.jpg',
            w: 1200,
            h: 675,
            alt: 'Akshay sitting frustrated at his mobile phone under the stone jali screen as Sameer stands beside him holding hot cutting chai.',
            caption: 'Cloister Arcade: Akshay struggles on a 1-bar connection while Sameer observes the browser waterfall bloat.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'Good morning, Akshay. Let me guess: you are standing out here under the stone arches where the campus Wi-Fi drops to one shaky bar.'
            },
            {
              speaker: 'Akshay',
              speech: 'Did the college server crash?!'
            }
          ],
          scene: 'Principal Systems Architect Sameer steps out from the cloister colonnade with hot cutting chai in a traditional brass wire holder, smiling with veteran composure as Akshay panics over the frozen portal.',
          realization: 'The senior architect diagnoses network bottlenecks before jumping to conclusions. Panic looks at symptoms; engineering finds the actual constraint.'
        },
        {
          title: 'The Browser Vanity Choke',
          time: '08:45 AM',
          image: {
            src: act01Scene09ServerImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene09_alt_cloister_server_rack.jpg',
            w: 1200,
            h: 675,
            alt: 'Akshay listening intently as Sameer points to an enterprise server rack recessed inside an ancient vaulted sandstone alcove.',
            caption: 'Server Vault Alcove: Pulsing cyan server LEDs illuminate the contrast between heavy HTML pages and pure backend JSON.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'The server is fine. Your browser is choking on nearly four megabytes of photos, styles, and React bundles just to show two lines of text.'
            },
            {
              speaker: 'Akshay',
              speech: 'Almost four megabytes over a one-bar connection just to read two lines of text?!'
            }
          ],
          scene: 'Sameer gestures toward the recessed server rack alcove, explaining that the backend is processing requests flawlessly, but the bloated client presentation bundle cannot fit through the weak Wi-Fi signal.',
          realization: 'Webpages carry megabytes of visual assets, styling, and scripts before showing you the data you actually need. The backend API response itself is tiny JSON.'
        },
        {
          title: 'Querying the Pure API Directly',
          time: '08:45 AM',
          image: {
            src: act01Scene11Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene11_sameer_diagnostic_slate_14ms.jpg',
            w: 1200,
            h: 675,
            alt: 'Sameer resting his slim matte-black diagnostic tablet on a stone ledge, preparing to query the server socket directly.',
            caption: 'Network Console: Sameer opens his terminal to query the backend API directly with curl.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'Exactly. Hall 302 and Seat B14 are only 120 bytes. Put away the browser. We will query the API directly with curl.'
            },
            {
              speaker: 'Sameer',
              speech: 'See? No HTML, no heavy styles or scripts. Just a direct GET request for student APX102.'
            }
          ],
          scene: 'Sameer rests his laptop on the carved balustrade, bypassing HTML, CSS, and client-side JavaScript to query the raw API endpoint directly over HTTP.',
          realization: 'APIs eliminate frontend download bloat. When you speak directly to the backend in structured JSON, low bandwidth is no longer a blocker.'
        },
        {
          title: 'The 14 Millisecond Terminal Query',
          time: '08:46 AM',
          layout: 'duo',
          image: {
            src: act01Scene11Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene11_sameer_diagnostic_slate_14ms.jpg',
            w: 1200,
            h: 675,
            alt: 'Sameer holding a diagnostic slate projecting a cyan and amber wire inspection HUD.',
            caption: 'Terminal Console: Sameer extracts Hall 302, Seat B14 via an HTTP GET request in fourteen milliseconds.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'Done. Hall 302. Seat B14. Took fourteen milliseconds.'
          },
          scene: 'Sameer opens his terminal, fires a direct curl request, and extracts the exact hall and seat number in 14 milliseconds.',
          realization: 'An API call goes directly to the server and asks for exactly the data you need: nothing more. It skips every layer of visual presentation.'
        },
        {
          title: 'Shock and Relief under the Archway',
          time: '08:46 AM',
          layout: 'duo',
          image: {
            src: act01Scene12Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene12_akshay_shock_relief.jpg',
            w: 1200,
            h: 675,
            alt: 'Akshay reacting in jaw-dropping awe and relief as room digits appear.',
            caption: 'Instant Verdict: Akshay stares in disbelief as four minutes of spinning collapses into 14ms.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Wait, fourteen milliseconds?! My phone wasted four whole minutes spinning in circles, and your screen answered before I even blinked?!',
            replySpeaker: 'Sameer',
            replySpeech: 'Your phone tried to build a giant palace just to show a tiny sticky note. I grabbed the sticky note directly.'
          },
          scene: 'Akshay gasps in astonishment, looking between his frozen smartphone screen and Sameer diagnostic slate.',
          realization: 'The browser waterfall downloads megabytes of styling and scripts; the API wire payload was merely 120 bytes of JSON.'
        },
        {
          title: 'Sprint to Hall 302',
          time: '08:47 AM',
          layout: 'duo',
          image: {
            src: act01Scene13Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene13_students_running_exam_gates.jpg',
            w: 1200,
            h: 675,
            alt: 'Akshay sprinting toward the exam gates with verified hall ticket digits in mind.',
            caption: 'Main Quad: Akshay dashes toward the examination doors as the warning bell rings.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Hall 302, Seat B14! I have to sprint! Sameer, how did you get that so fast?!',
            replySpeaker: 'Sameer',
            replySpeech: 'Not magic, Akshay: an API call! Go pass your exam and meet me in Room 7 behind the stepwell. I will show you how it works!'
          },
          scene: 'Akshay sprints past the quad gates just as the bell tolls, shouting back in gratitude as Sameer sips his chai with quiet satisfaction.',
          realization: 'Understanding APIs turns mysterious infrastructure failures into predictable, inspectable network transactions.'
        }
      ]
    },

    // =========================================================================
    // CODE INTERFACE 1: THE BROWSER WATERFALL VS API JSON PAYLOAD
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'EQUIPMENT BENCH 1 : BROWSER WATERFALL CHOKE VS 14ms API PAYLOAD',
      title: 'Measuring Presentation Overhead against Pure API Data',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Apprentice Engineer',
          avatarSrc: akshayPanicSvg,
          text: 'My phone was pulling 3.8 megabytes of fonts and photos just to read 120 bytes of hall ticket information!'
        },
        {
          speaker: 'Sameer',
          role: 'Principal Systems Architect',
          avatarSrc: sameerChaiSvg,
          text: 'When connection speed drops, downloading megabytes of web page assets will time out. But a direct API query transfers the lightweight JSON response in milliseconds.'
        }
      ],
      tabs: [
        {
          label: 'The 14ms Direct Wire API',
          workbench: {
            method: 'GET',
            url: 'https://portal.apex.edu/api/v1/admitcards/APX102',
            headers: {
              'Host': 'portal.apex.edu',
              'Accept': 'application/json',
              'User-Agent': 'WireTerminal/1.0'
            },
            responseStatus: '200 OK',
            responseTime: '14 ms',
            responseBody: JSON.stringify({
              rollNumber: 'APX102',
              name: 'Akshay Mehra',
              exam: 'Engineering Entrance Board 2025',
              hall: '302',
              seat: 'B-14',
              reportingTime: '08:50 AM'
            }, null, 2)
          },
          breakdown: {
            input: 'curl -s https://portal.apex.edu/api/v1/admitcards/APX102 with Accept: application/json header.',
            explanation: 'The terminal initiates a direct TCP socket handshake with port 443, issuing an HTTP GET without requesting stylesheets or visual media.',
            output: 'HTTP/1.1 200 OK with Content-Length: 120 bytes delivered in 14 milliseconds.',
            trapAndFix: 'Common Trap: Assuming the server is broken whenever a webpage hangs. The server API is often healthy while the client asset pipeline times out.'
          }
        },
        {
          label: 'The 3.8MB Browser Waterfall Cascade',
          workbench: {
            method: 'GET',
            url: 'https://portal.apex.edu/student-portal/admitcard.html',
            headers: {
              'Host': 'portal.apex.edu',
              'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
              'Sec-Fetch-Dest': 'document'
            },
            responseStatus: '504 Gateway Timeout (Pending Assets)',
            responseTime: '4,200 ms (Timed Out)',
            responseBody: `<!-- Browser Cascade Breakdown -->
1. index.html                  18 KB   (Parsed in 42ms)
2. hero-campus-neem.png      1100 KB   (Downloading... 38% stuck)
3. bootstrap.min.css          480 KB   (Blocks rendering)
4. NotoSans-Regular.woff2     390 KB   (Blocks font paint)
5. vendor-react-bundle.js    1240 KB   (Blocks execution)
6. portal-app.js              610 KB   (Awaiting framework boot)
-------------------------------------------------------------
TOTAL ASSET OVERHEAD:        3838 KB   (Actual data: 120 bytes)`
          },
          breakdown: {
            input: 'Browser navigation bar request for HTML document over 1-bar cellular signal.',
            explanation: 'Browsers enforce render-blocking CSS and JavaScript execution phases before client-side data fetches can be rendered on screen.',
            output: 'Total download exceeds 3.8 megabytes, causing mobile connection saturation and a spinning wheel.',
            trapAndFix: 'Architectural Lesson: Never rely solely on web browser interfaces during production triage. Query backend endpoints directly using wire inspection tools.'
          }
        }
      ]
    },

    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 1 : THE WIRE RESCUE',
      title: 'Direct Wire Inspection vs Browser Waterfall Bloat',
      subtitle: 'Bypassing megabytes of frontend page bloat to fetch pure JSON from the backend',
      input: {
        method: 'GET',
        url: 'http://localhost:5050/api/v1/admitcards/APX102',
        desc: 'Direct wire request for candidate examination hall ticket.',
        code: 'curl -i http://localhost:5050/api/v1/admitcards/APX102 -H "Accept: application/json"'
      },
      underTheHood: {
        desc: 'Bypassing the entire browser presentation engine: no HTML parsing, no CSS styling, no React hydration.',
        steps: [
          'Client opens TCP connection directly to campus API gateway.',
          'HTTP GET request reaches the admit card database service.',
          'Database reads 120 bytes of JSON without compiling DOM elements.',
          'Payload returns across network in a single TCP packet.'
        ]
      },
      output: {
        status: '200 OK',
        time: '14ms',
        desc: 'Pure JSON payload delivered in fourteen milliseconds.',
        body: '{\n  "status": "success",\n  "rollNo": "APX102",\n  "hall": 302,\n  "seat": "B14",\n  "verified": true\n}'
      },
      seniorSavior: {
        aphorism: 'Webpages carry heavy visual layout bloat; API data payloads are almost always featherweight.',
        rule: 'When testing web systems, always inspect the API network request before debugging UI components.',
        trap: 'Confusing client rendering delays with server API latency leads to debugging the wrong tier.'
      }
    },

    // =========================================================================
    // ACT 2: THE CANTEEN COURIER MODEL & CONTRACT RULES
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC ACT 2 : THE COURIER MODEL AND CONTRACT',
      title: 'The Restaurant Waiter Analogy at the Stepwell Canteen',
      intro: 'After conquering the entrance exam, Akshay meets Sameer at the stepwell veranda to explore client server decoupling, courier contracts, and HTTP status codes.',
      columns: 2,
      panels: [
        {
          title: 'Entering the Stepwell Research Workshop',
          time: '12:15 PM',
          image: {
            src: act02Scene14Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act2/act02_scene14_research_workshop_interior.jpg',
            w: 1200,
            h: 675,
            alt: 'Wide sunlit research workshop with teakwood workbenches, slate chalkboards, and brass scientific instruments.',
            caption: 'Apex Campus Stepwell: Akshay arrives at Sameer peaceful engineering sanctuary after surviving the morning exam.'
          },
          dialogues: [
            {
              speaker: 'Akshay',
              speech: 'I made it! Hall 302 and Seat B14 with minutes to spare. How did you get my admit card in fourteen milliseconds while every phone was frozen?'
            }
          ],
          scene: 'Hours after surviving the board exam, Akshay enters Sameer quiet workshop, eager to understand the architectural secret that rescued him.'
        },
        {
          title: 'Post Exam Chai at the Stepwell Veranda',
          time: '12:20 PM',
          image: {
            src: act02Scene15Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act2/act02_scene15_brass_kettle_pouring_chai.jpg',
            w: 1200,
            h: 675,
            alt: 'An engraved brass kettle pouring piping hot cutting chai into twin glasses on a carved teak table.',
            caption: 'Veranda Workshop: Steaming cutting chai poured as Sameer unpacks the client server model.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'Sit back, take a sip of hot chai, and let us use some common sense. Have you ever eaten at a South Indian restaurant?'
            },
            {
              speaker: 'Akshay',
              speech: 'Sameer, I am an engineering student. My entire life runs on canteen parathas and cheap tea!'
            }
          ],
          scene: 'Sameer pours hot cutting chai into brass-held glasses, setting up the fundamental real-world analogy of client, courier, and kitchen.'
        },
        {
          title: 'The Customer at the Table: The Client',
          time: '12:25 PM',
          image: {
            src: act02Scene17Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act2/act02_scene17_restaurant_customer_client.jpg',
            w: 1200,
            h: 675,
            alt: 'A customer sitting at a carved teak dining table in a courtyard restaurant before an empty brass thali plate.',
            caption: 'The Client Role: You sit at the table with an empty plate, formulating a specific demand.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'Perfect! You sit at the table: in tech terms, you are the client. You want something: your exam admit card. You formulate a request.'
            },
            {
              speaker: 'Akshay',
              reply: true,
              speech: 'And the kitchen is the server?'
            }
          ],
          scene: 'Sameer sketches the client sitting at the dining table, waiting for structured nourishment.'
        },
        {
          title: 'The Steaming Kitchen: The Server and Database',
          time: '12:30 PM',
          image: {
            src: act02Scene19Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act2/act02_scene19_commercial_kitchen_database.jpg',
            w: 1200,
            h: 675,
            alt: 'Bustling commercial kitchen with flaming copper pans, clay tandoors, and disciplined cooks at work.',
            caption: 'The Server and Database: The kitchen holds the ingredients, recipes, and state. Clients never walk inside.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'Spot on. The kitchen is the server and database. It holds the chef, stove, and ingredients. Clients never walk in and touch the pots.'
            }
          ],
          scene: 'Sameer illustrates the kitchen as the isolated, secure backend environment where state mutations and queries actually execute.',
          realization: 'The client and server must remain strictly decoupled: the client requests data, the server processes data, and neither invades the internal space of the other.'
        },
        {
          title: 'The Waiter Courier: The API and the Menu Contract',
          time: '12:45 PM',
          image: {
            src: act02Scene18Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act2/act02_scene18_canteen_waiter_api.jpg',
            w: 1200,
            h: 675,
            alt: 'The Courier Waiter standing attentively in an arched doorway holding a brass order slip notepad.',
            caption: 'The Courier Contract: The API carries parameters without cooking food or washing plates.'
          },
          dialogues: [
            {
              speaker: 'Akshay',
              speech: 'So the waiter walking between the tables is the API?'
            },
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'Exactly. The waiter does not cook, eat, or wash dishes. He carries your order to the kitchen and the finished plate back to your table.'
            },
            {
              speaker: 'Akshay',
              speech: 'And the menu is the contract!'
            },
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'Spot on. The menu says what you can request and how to order it. Ask for pizza at a dosa stall and the waiter returns a polite 404 Not Found.'
            }
          ],
          scene: 'Sameer sketches the three boxes on the whiteboard: Customer, Waiter, and Kitchen, demonstrating how the courier carries payloads without altering them.',
          realization: 'An API is a courier with a contract: it carries structured requests to the server and structured responses back to the client. It never cooks, never stores, and never renders.'
        },
        {
          title: 'Heavy Frontend Bundles vs Lightweight API Requests',
          time: '12:55 PM',
          image: {
            src: act02Scene21Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act2/act02_scene21_bullock_cart_vs_royal_courier.jpg',
            w: 1200,
            h: 675,
            alt: 'Split comparison between an overloaded bullock cart carrying heavy furniture and an agile royal horse courier carrying a sealed letter.',
            caption: 'Asset Overhead: The browser downloads 4 megabytes of layout assets; the API courier delivers 120 bytes of JSON.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'A browser downloads heavy styles, fonts, and script bundles before rendering. It buries the data under frontend overhead.'
            },
            {
              speaker: 'Akshay',
              reply: true,
              speech: 'While an API client requests only the data: no fonts, no styles, just the pure JSON payload!'
            }
          ],
          scene: 'Sameer contrasts heavy frontend web page downloads with the clean speed of targeted backend API requests.'
        }
      ]
    },

    // =========================================================================
    // ACT 3: PAIR PROGRAMMING & THE BYTE STREAM TRAP
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC ACT 3 : SERVER BOOT AND THE BYTE STREAM TRAP',
      title: 'Building Port 3000 and Solving the Undefined Body Crash',
      intro: 'In the afternoon workshop, Akshay builds a minimal Express server from first principles, encounters the infamous req.body undefined trap, and mounts JSON middleware.',
      columns: 2,
      panels: [
        {
          title: 'Pair Programming on Port 3000: The TypeError Crash',
          time: '01:10 PM',
          image: {
            src: act03Scene27Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act3/act03_scene27_reaction_typeerror_crash.jpg',
            w: 1200,
            h: 675,
            alt: 'Akshay grabbing his hair in shock at the workstation screen displaying TypeError req.body undefined as Sameer smiles knowingly.',
            caption: 'Pair Programming: Akshay hits the undefined body trap as the raw TCP byte stream arrives unparsed.'
          },
          dialogues: [
            {
              speaker: 'Akshay',
              speech: 'Bare-bones Express server ready: one GET, one POST on port 3000! Time to fire it up!'
            },
            {
              speaker: 'Akshay',
              speech: 'Wait, hold on! I sent my name and exam in the body, but the server just replied: received: undefined?! Where on earth did my data go?'
            }
          ],
          scene: 'Akshay starts his Express server on port 3000 and dispatches a POST request, but is baffled when req.body returns undefined.'
        },
        {
          title: 'Understanding Network Byte Streams',
          time: '01:18 PM',
          image: {
            src: act03Scene29Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act3/act03_scene29_sameer_points_physical_wire.jpg',
            w: 1200,
            h: 675,
            alt: 'Sameer leaning forward with veteran authority at the workbench, pointing to the network cable plugged into the server port.',
            caption: 'Protocol Reality: Sameer explains network data streams, demystifying how Express handles incoming payloads.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'You made the classic rookie assumption: expecting Express to automatically parse incoming JSON payloads.'
            },
            {
              speaker: 'Sameer',
              speech: 'HTTP requests arrive as a stream of raw byte buffers. Express will not parse that stream into req.body unless you mount middleware.'
            }
          ],
          scene: 'Sameer explains TCP streaming buffers and why Express requires parsing middleware before route handlers can access req.body.',
          realization: 'The server receives streaming network byte chunks, not ready-made JavaScript objects. Without express.json(), req.body remains undefined.'
        },
        {
          title: 'The Byte Stream Sieve: Assembling the Chunks',
          time: '01:25 PM',
          image: {
            src: act03Scene30Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act3/act03_scene30_byte_stream_waterfall_aqueduct.jpg',
            w: 1200,
            h: 675,
            alt: 'An intricate mechanical brass sieve mechanism on a teakwood workshop bench, receiving raw unparsed streams of colorful ceramic puzzle tiles and neatly sorting them.',
            caption: 'The Byte Stream Sieve: Express middleware intercepts raw TCP byte chunks and reassembles them before route handlers run.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'Express leaves req.body blank unless you install a catcher. Stick app.use(express.json()) above your routes!'
            }
          ],
          scene: 'Sameer explains TCP streaming buffers and demonstrates why mounting express.json() is essential before registering any route handlers.',
          realization: 'Data travels over the network as a raw stream of byte chunks. Without middleware to collect and parse those pieces, req.body stays undefined.'
        },
        {
          title: 'Mounting Express JSON Middleware',
          time: '01:28 PM',
          image: {
            src: act03Scene31Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act3/act03_scene31_adding_express_json_middleware.jpg',
            w: 1200,
            h: 675,
            alt: 'Akshay typing app.use(express.json()) into the code editor on his laptop with Sameer nodding beside him.',
            caption: 'Middleware Mount: Akshay installs express.json() right above his POST route to assemble incoming byte streams.'
          },
          dialogues: [
            {
              speaker: 'Akshay',
              speech: 'Adding app.use(express.json())... It parses incoming stream buffers into req.body!'
            }
          ],
          scene: 'Akshay adds app.use(express.json()) above his route handlers, instructing Express to buffer incoming chunks before dispatching requests.'
        },
        {
          title: 'Victory on Port 3000: 201 Created',
          time: '01:30 PM',
          image: {
            src: act03Scene32Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act3/act03_scene32_two_men_success_201_created.jpg',
            w: 1200,
            h: 675,
            alt: 'Akshay pumping a celebratory fist in the air with a broad victorious grin as the dual monitors glow with emerald-green 201 Created status.',
            caption: 'Triumphant Milestone: One line of middleware turns raw socket bytes into a structured JavaScript payload.'
          },
          dialogues: [
            {
              speaker: 'Akshay',
              reply: true,
              speech: 'Yes! Status 201 Created! It read the incoming JSON and stored my student record!'
            }
          ],
          scene: 'Akshay successfully verifies that express.json() converts the raw TCP buffer into a clean JavaScript object.'
        }
      ]
    },

    // =========================================================================
    // STEP BY STEP PROGRAM CREATION: BLUEPRINT, FLOW, CHUNKED CODE, AND TERMINAL
    // =========================================================================
    {
      type: 'blueprint',
      purpose: 'Building an authentic Node.js Express server on port 3000 to process Admit Card requests from first principles.',
      input: 'HTTP POST request with JSON payload containing studentId, exam, hall, and candidate name.',
      processing: 'TCP stream packet buffering, express.json middleware deserialization, in memory routing, and status code assignment.',
      output: 'HTTP 201 Created status, Location response header, and saved JSON record in 4 milliseconds.',
      files: ['server.js', 'package.json']
    },
    {
      type: 'flow',
      inputLabel: 'POST /api/admit-card',
      inputDetail: 'Client sends raw JSON payload over TCP socket connection',
      processLabel: 'express.json() Buffer and Parse',
      processDetail: 'Node buffers TCP stream chunks into req.body JavaScript object',
      outputLabel: '201 Created + JSON',
      outputDetail: 'Server emits Location header and saved record in 4ms'
    },
    {
      type: 'chunked-code',
      badge: 'STEP BY STEP CODE CONSTRUCTION',
      title: 'Building server.js in Four Architectural Chunks',
      intro: 'An Express API server is not magic: it is a structured pipeline that converts raw incoming network bytes into structured responses. Let us inspect each layer step by step.',
      chunks: [
        {
          label: 'Application Initialization',
          filename: 'server.js',
          badge: 'CHUNK 1 : FACTORY',
          code: [
            "const express = require('express');",
            "const app = express();",
            "const PORT = 3000;"
          ],
          title: 'Importing the Framework and Creating the App Instance',
          explanation: 'Calling express() instantiates an application object containing an in memory routing table and middleware dispatch queue. PORT 3000 designates the local TCP socket gateway where the operating system will direct incoming HTTP packets.',
          keyTakeaway: 'The app instance is the central dispatcher that routes network traffic to specific handler functions.'
        },
        {
          label: 'The Under the Hood Shield',
          filename: 'server.js',
          badge: 'CHUNK 2 : MIDDLEWARE',
          code: [
            "// In memory catalog store for issued admit cards",
            "const admitCards = new Map();",
            "",
            "// MANDATORY: Buffer TCP packet stream before route handlers execute",
            "app.use(express.json());"
          ],
          title: 'Mounting express.json Body Parsing Middleware',
          explanation: 'Network requests arrive as fragmented TCP stream buffers. Node.js does not buffer the entire request payload by default. Without express.json(), req.body remains undefined because the stream chunks were never assembled. Mounting express.json() intercepts every packet, buffers the chunks, executes JSON.parse(), and populates req.body before route handlers execute.',
          keyTakeaway: 'Always mount body parsing middleware before declaring route handlers.'
        },
        {
          label: 'Entity Creation Route',
          filename: 'server.js',
          badge: 'CHUNK 3 : HANDLER',
          code: [
            "app.post('/api/admit-card', (req, res) => {",
            "  const student = req.body;",
            "  const id = student.studentId || 'APX-9942';",
            "  const card = { ...student, studentId: id, issuedAt: new Date().toISOString() };",
            "  admitCards.set(id, card);",
            "",
            "  res.status(201)",
            "     .location(`/api/admit-card/${id}`)",
            "     .json({ status: 'success', admitCardId: id, card });",
            "});"
          ],
          title: 'Reading req.body and Emitting 201 Created',
          explanation: 'The POST handler reads the assembled req.body object, generates or validates the record ID, writes the record to the in memory store, and returns HTTP 201 Created. Notice the Location header pointing to the newly minted entity URL.',
          keyTakeaway: 'Entity creation requires HTTP 201 Created and should provide a Location header pointing to the new resource.'
        },
        {
          label: 'Network Socket Listener',
          filename: 'server.js',
          badge: 'CHUNK 4 : LISTENER',
          code: [
            "app.listen(PORT, '0.0.0.0', () => {",
            "  console.log(`[ADMIT-CARD-API] Server live on http://0.0.0.0:${PORT}`);",
            "});"
          ],
          title: 'Binding the Port and Starting the Event Loop',
          explanation: 'The listen() function instructs the operating system to bind port 3000 to our Node.js process. The event loop transitions into an active listening state, waiting for incoming TCP handshakes from browsers or API workbenches.',
          keyTakeaway: 'A server only begins accepting traffic once its TCP socket listener successfully binds to its designated port.'
        }
      ]
    },
    {
      type: 'code',
      language: 'javascript',
      filename: 'server.js (Complete Unified Script)',
      code: `const express = require('express');
const app = express();
const PORT = 3000;

// In memory data store
const admitCards = new Map();

// 1. Mount JSON body parsing middleware
app.use(express.json());

// 2. Resource creation route
app.post('/api/admit-card', (req, res) => {
  const student = req.body;
  const id = student.studentId || 'APX-9942';
  const card = { ...student, studentId: id, issuedAt: new Date().toISOString() };
  admitCards.set(id, card);

  res.status(201)
     .location(\`/api/admit-card/\${id}\`)
     .json({ status: 'success', admitCardId: id, card });
});

// 3. Resource inspection route
app.get('/api/admit-card/:id', (req, res) => {
  const card = admitCards.get(req.params.id);
  if (!card) return res.status(404).json({ error: 'Admit Card Not Found' });
  res.json(card);
});

// 4. Start TCP listener
app.listen(PORT, '0.0.0.0', () => {
  console.log(\`[ADMIT-CARD-API] Server live on http://0.0.0.0:\${PORT}\`);
});`
    },
    {
      type: 'terminal',
      command: 'node server.js',
      lines: [
        '[ADMIT-CARD-API] Initializing Express v4.18...',
        '[ADMIT-CARD-API] Mounting express.json() stream parser... OK',
        '[ADMIT-CARD-API] Registering POST /api/admit-card... OK',
        '[ADMIT-CARD-API] Registering GET /api/admit-card/:id... OK',
        '[ADMIT-CARD-API] Server live on http://0.0.0.0:3000',
        '',
        '$ curl -i -X POST http://localhost:3000/api/admit-card \\',
        '       -H "Content-Type: application/json" \\',
        '       -d \'{"studentId":"APX-9942","studentName":"Akshay Sharma","exam":"CS101"}\'',
        '',
        'HTTP/1.1 201 Created',
        'Content-Type: application/json',
        'Location: /api/admit-card/APX-9942',
        '',
        '{"status":"success","admitCardId":"APX-9942","card":{"studentId":"APX-9942","exam":"CS101"}}'
      ]
    },

    // =========================================================================
    // CODE INTERFACE 2: THE PROGRESSIVE SERVER IDE & BYTE STREAM PARSER
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'EQUIPMENT BENCH 2 : PROGRESSIVE SERVER IDE & BYTE STREAM PARSER',
      title: 'Bootstrapping server.js on Port 3000 and Fixing the Body Parser Trap',
      appType: 'ide',
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Apprentice Engineer',
          avatarSrc: akshayCodingSvg,
          text: 'When I sent JSON to my POST endpoint, the server responded with received: undefined!'
        },
        {
          speaker: 'Sameer',
          role: 'Principal Systems Architect',
          avatarSrc: sameerPointingSvg,
          text: 'HTTP requests arrive as fragmented TCP stream buffers. app.use(express.json()) assembles those chunks into req.body.'
        }
      ],
      tabs: [
        {
          label: '1. The Broken Server (No Middleware)',
          ide: {
            filename: 'server.js (v1 - broken)',
            status: 'TypeError Vulnerable',
            code: `const express = require('express');
const app = express();
const PORT = 3000;

// ❌ TRAP: Missing app.use(express.json())!
// Without body parsing middleware, Express leaves req.body undefined.

app.get('/api/v1/admitcards/:id', (req, res) => {
  res.status(200).json({ rollNumber: req.params.id, name: 'Akshay' });
});

app.post('/api/v1/admitcards', (req, res) => {
  // 💥 RUNTIME BUG: req.body is undefined!
  res.status(201).json({
    message: 'Card created',
    received: req.body
  });
});

app.listen(PORT, () => console.log('Listening on port 3000'));`
          },
          breakdown: {
            input: 'curl -X POST http://localhost:3000/api/v1/admitcards -H "Content-Type: application/json" -d \'{"name":"Akshay"}\'',
            explanation: 'The TCP socket receives chunks [\'{"name":\', \'"Akshay"}\'], but no middleware was configured to buffer and parse the stream.',
            output: '{"message":"Card created","received":null} (req.body evaluates to undefined).',
            trapAndFix: 'Silent Trap: The server did not crash immediately, but downstream code trying to access req.body.name will throw Cannot read properties of undefined.'
          }
        },
        {
          label: '2. The Fixed Server (Middleware Mounted)',
          ide: {
            filename: 'server.js (v2 - production ready)',
            status: 'Fully Operational',
            code: `const express = require('express');
const app = express();
const PORT = 3000;

// ✅ THE FIX: Mount JSON parser before all route handlers
app.use(express.json());

const admitCards = {
  'APX102': { rollNumber: 'APX102', name: 'Akshay Mehra', hall: '302', seat: 'B-14' }
};

app.get('/api/v1/admitcards/:id', (req, res) => {
  const card = admitCards[req.params.id];
  if (!card) return res.status(404).json({ error: 'Card not found' });
  res.status(200).json(card);
});

app.post('/api/v1/admitcards', (req, res) => {
  const { rollNumber, name, hall, seat } = req.body;
  admitCards[rollNumber] = { rollNumber, name, hall, seat };
  res.status(201).json({ message: 'Card persisted', record: admitCards[rollNumber] });
});

app.listen(PORT, () => console.log('Admit Card service active on port 3000'));`
          },
          breakdown: {
            input: 'POST payload dispatched with explicit Content-Type: application/json header.',
            explanation: 'express.json() intercepts the incoming stream, aggregates raw buffer chunks, parses the string into an object, and attaches it to req.body.',
            output: 'HTTP/1.1 201 Created with clean JSON containing { rollNumber, name, hall, seat }.',
            trapAndFix: 'Order of Middleware Rule: Always declare app.use(express.json()) before route declarations. If placed after, routes will still see undefined.'
          }
        }
      ]
    },

    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 2 : THE TCP BYTE STREAM',
      title: 'Express JSON Middleware and Stream Buffering',
      subtitle: 'Overcoming the undefined body trap through stream chunk buffering on port 3000',
      input: {
        method: 'POST',
        url: 'http://localhost:3000/api/students',
        desc: 'Client transmits JSON payload across the wire.',
        code: 'curl -X POST http://localhost:3000/api/students -H "Content-Type: application/json" -d \'{"name": "Akshay"}\''
      },
      underTheHood: {
        desc: 'Operating system socket splits payload into TCP segments. Express must collect chunks before route logic fires.',
        steps: [
          'TCP packets arrive over the network as disconnected raw byte chunks.',
          'Readable stream fires data events into server memory buffers.',
          'express.json() concatenates chunks into a complete UTF-8 string.',
          'JSON.parse deserializes text and attaches resulting object to req.body.'
        ]
      },
      output: {
        status: '201 Created',
        time: '18ms',
        desc: 'Server successfully parses body and assigns persistent ID.',
        body: '{\n  "status": "success",\n  "studentId": "STU1094",\n  "name": "Akshay"\n}'
      },
      seniorSavior: {
        aphorism: 'TCP sockets transfer raw streaming bytes, not JavaScript objects.',
        rule: 'Always mount express.json() before registering POST, PUT, or PATCH routes.',
        trap: 'Omitting express.json() leaves req.body undefined, crashing handlers attempting property access.'
      }
    },

    // =========================================================================
    // ACT 4: THE FIVE CRUD VERBS & THE BRASS THALI RULE
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC ACT 4 : THE FIVE CRUD VERBS AND BRASS THALI RULE',
      title: 'Mastering Entity Operations: PUT Total Replacement vs PATCH Surgical Delta',
      intro: 'Over a traditional six-katori lunch thali, Sameer illustrates the life cycle of server entities, exposing the devastating data wiping trap of HTTP PUT.',
      columns: 2,
      panels: [
        {
          title: 'Veranda Lunch Table Setup',
          time: '02:25 PM',
          image: {
            src: act04Scene33Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act4/act04_scene33_veranda_lunch_table_setup.jpg',
            w: 1200,
            h: 675,
            alt: 'Wide view of the stepwell dining veranda with carved sandstone columns and gleaming brass thali platters.',
            caption: 'Dining Veranda: The canteen staff prepares gleaming brass thalis, setting the stage for the five HTTP verbs.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'Lunch is served. Every action you can perform on a database entity maps to what we do at this table.'
            }
          ],
          scene: 'Wide view of the open dining veranda overlooking the stepwell, where gleaming brass thali platters await the afternoon session.'
        },
        {
          title: 'Sitting Down for the Protocol Feast',
          time: '02:30 PM',
          image: {
            src: act04Scene34Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act4/act04_scene34_sitting_down_protocol_feast.jpg',
            w: 1200,
            h: 675,
            alt: 'Akshay and Sameer sitting cross-legged on crimson floor cushions before low carved dining tables with gleaming brass thali platters.',
            caption: 'Dining Veranda: Sameer and Akshay sit down before the five HTTP verbs take culinary form.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'Whenever you talk to an API, you only ever perform five basic moves: the five core CRUD verbs.'
            }
          ],
          scene: 'Akshay and Sameer sit before traditional brass lunch thalis on the veranda, ready to map database operations to dining rituals.'
        },
        {
          title: 'GET: Inspecting the Platter Without Touching',
          time: '02:35 PM',
          image: {
            src: act04Scene36Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act4/act04_scene36_get_inspecting_without_touching.jpg',
            w: 1200,
            h: 675,
            alt: 'Akshay leaning over his gleaming brass thali with hands resting politely on his lap, inspecting the colorful bowls of spiced curries and rice without touching them.',
            caption: 'Safe Inspection: Looking with your eyes changes zero state in the kitchen. That is HTTP GET.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'GET means inspect this plate with your eyes. Safe and idempotent. Looking changes nothing in the kitchen.'
            }
          ],
          scene: 'Sameer demonstrates GET as visual read-only inspection: safe, cacheable, and idempotent.',
          realization: 'GET is safe and idempotent: inspecting a resource ten times leaves the database unchanged. POST creates new entities and is not idempotent.'
        },
        {
          title: 'POST: Creating a Brand New Platter',
          time: '02:38 PM',
          image: {
            src: act04Scene35Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act4/act04_scene35_post_placing_brand_new_thali.jpg',
            w: 1200,
            h: 675,
            alt: 'Canteen attendant placing a brand new brass thali platter with bowls onto the teak table.',
            caption: 'Entity Creation: The attendant places a brand-new, steaming brass thali platter on the table, representing HTTP POST.'
          },
          dialogues: [
            {
              speaker: 'Akshay',
              speech: 'POST is bringing a brand new thali to the table. The server assigns it an ID and returns 201 Created!'
            }
          ],
          scene: 'The canteen attendant arrives with a full, fresh brass thali platter, representing non-idempotent entity creation.',
          realization: 'POST is non-idempotent: issuing three consecutive POST requests creates three distinct records in the database collection.'
        },
        {
          title: 'The Brass Thali Trap: PUT Replaces the Entire Platter',
          time: '02:45 PM',
          image: {
            src: act04Scene37Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act4/act04_scene37_put_replacing_entire_platter.jpg',
            w: 1200,
            h: 675,
            alt: 'Sameer lifting the entire brass thali off the table, setting down a replacement plate containing only flatbread while Akshay gasps in alarm.',
            caption: 'The PUT Trap: PUT swaps out the whole entire plate. Anything omitted from your payload is thrown in the trash!'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'The Brass Thali Trap! PUT replaces the whole plate! If you omit the paneer, the kitchen wipes it out!'
            }
          ],
          scene: 'Sameer dramatically lifts the entire thali away to demonstrate that HTTP PUT replaces the complete resource record from scratch.'
        },
        {
          title: 'PATCH: Surgical Precision Topping Up the Dal',
          time: '02:48 PM',
          image: {
            src: act04Scene38Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act4/act04_scene38_patch_topping_up_dal.jpg',
            w: 1200,
            h: 675,
            alt: 'Close-up of a carved brass ladle pouring dal into one single katori without disturbing the surrounding rotis, rice, and kheer.',
            caption: 'The Brass Thali Rule: PUT replaces the whole platter; PATCH surgically tops up a single katori.'
          },
          dialogues: [
            {
              speaker: 'Akshay',
              speech: 'PATCH is surgical! Leave everything alone, just add a swirl of cream to my dal. Only the delta updates!'
            }
          ],
          scene: 'Sameer uses a brass ladle to top up a single katori, showing how PATCH updates only the specific fields specified in the request body.',
          realization: 'PUT replaces the entire resource from scratch: anything you leave out gets wiped clean. PATCH updates only the fields you send. Remember the Brass Thali Rule: PUT replaces the whole plate; PATCH tops up a single bowl.'
        },
        {
          title: 'The Three HTTP Status Kingdoms',
          time: '02:55 PM',
          image: {
            src: act04Scene41Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act4/act04_scene41_status_2xx_green_royal_garden.jpg',
            w: 1200,
            h: 675,
            alt: 'Allegorical illustration of status code kingdoms: green royal garden for 2xx success, closed wicket gate for 4xx client errors, and kitchen fire for 5xx server errors.',
            caption: 'Status Kingdoms: HTTP status codes communicate server outcomes clearly across distributed network systems.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'Status codes are server weather reports: 2xx green garden, 4xx locked wicket, 5xx kitchen fire.'
            }
          ],
          scene: 'Sameer summarizes HTTP response codes into three distinct kingdoms: 2xx success, 4xx client mistake, and 5xx internal server breakdown.'
        }
      ]
    },

    // =========================================================================
    // CODE INTERFACE 3: THE 5-TAB CRUD CONSOLE
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'EQUIPMENT BENCH 3 : THE 5 CRUD ENDPOINTS INTERACTIVE CONSOLE',
      title: 'Testing the Five Core Operations on the Admit Card Service',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Apprentice Engineer',
          avatarSrc: akshayEurekaSvg,
          text: 'Testing all five operations sequentially: GET, POST, PUT, PATCH, and DELETE on port 3000.'
        },
        {
          speaker: 'Sameer',
          role: 'Principal Systems Architect',
          avatarSrc: sameerThaliSvg,
          text: 'Pay close attention to Tab 3 and Tab 4. Witness the Brass Thali wipe on PUT versus the safe field retention on PATCH.'
        }
      ],
      tabs: [
        {
          label: '1. GET (Safe Read)',
          workbench: {
            method: 'GET',
            url: 'http://localhost:3000/api/v1/admitcards/APX102',
            headers: { 'Accept': 'application/json' },
            responseStatus: '200 OK',
            responseTime: '8 ms',
            responseBody: JSON.stringify({
              rollNumber: 'APX102',
              name: 'Akshay Mehra',
              exam: 'Engineering Entrance Board 2025',
              hall: '302',
              seat: 'B-14',
              reportingTime: '08:50 AM'
            }, null, 2)
          },
          breakdown: {
            input: 'GET request targeting specific resource identifier APX102.',
            explanation: 'Safe and idempotent read. No server state is modified; multiple requests return identical data.',
            output: 'HTTP/1.1 200 OK with complete student record JSON.',
            trapAndFix: 'GET Body Anti-Pattern: Never send a request body with GET. Some proxies and gateways strip GET bodies silently.'
          }
        },
        {
          label: '2. POST (Create New)',
          workbench: {
            method: 'POST',
            url: 'http://localhost:3000/api/v1/admitcards',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              rollNumber: 'APX205',
              name: 'Priya Sharma',
              exam: 'Engineering Entrance Board 2025',
              hall: '301',
              seat: 'A-07',
              reportingTime: '08:50 AM'
            }, null, 2),
            responseStatus: '201 Created',
            responseTime: '18 ms',
            responseBody: JSON.stringify({
              message: 'Admit card created',
              data: {
                rollNumber: 'APX205',
                name: 'Priya Sharma',
                exam: 'Engineering Entrance Board 2025',
                hall: '301',
                seat: 'A-07',
                reportingTime: '08:50 AM'
              }
            }, null, 2)
          },
          breakdown: {
            input: 'POST payload establishing a brand new Admit Card entity.',
            explanation: 'Non-idempotent operation. A new record is registered in the database collection.',
            output: 'HTTP/1.1 201 Created signaling successful resource persistence.',
            trapAndFix: 'Status Code Gotcha: Returning 200 OK instead of 201 Created for entity generation is a common REST compliance defect.'
          }
        },
        {
          label: '3. PUT (The Brass Thali Wipe)',
          workbench: {
            method: 'PUT',
            url: 'http://localhost:3000/api/v1/admitcards/APX102',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              rollNumber: 'APX102',
              name: 'Akshay Mehra',
              hall: '305'
            }, null, 2),
            responseStatus: '200 OK',
            responseTime: '12 ms',
            responseBody: JSON.stringify({
              message: 'Admit card fully replaced',
              data: {
                rollNumber: 'APX102',
                name: 'Akshay Mehra',
                hall: '305',
                seat: null,
                exam: null,
                reportingTime: null
              }
            }, null, 2)
          },
          breakdown: {
            input: 'PUT request supplying only rollNumber, name, and hall.',
            explanation: 'THE BRASS THALI TRAP: Because PUT enforces complete resource replacement, all omitted fields (seat, exam, reportingTime) were wiped out!',
            output: 'HTTP/1.1 200 OK with omitted fields reset to null or deleted.',
            trapAndFix: 'Crucial Rule: Only use PUT when you intend to overwrite the entire resource document. Use PATCH for partial modifications.'
          }
        },
        {
          label: '4. PATCH (Surgical Delta)',
          workbench: {
            method: 'PATCH',
            url: 'http://localhost:3000/api/v1/admitcards/APX102',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              hall: '305'
            }, null, 2),
            responseStatus: '200 OK',
            responseTime: '9 ms',
            responseBody: JSON.stringify({
              message: 'Admit card partially updated',
              data: {
                rollNumber: 'APX102',
                name: 'Akshay Mehra',
                exam: 'Engineering Entrance Board 2025',
                hall: '305',
                seat: 'B-14',
                reportingTime: '08:50 AM'
              }
            }, null, 2)
          },
          breakdown: {
            input: 'PATCH request carrying only the modified hall attribute.',
            explanation: 'The server merges the delta: hall is updated to 305 while all existing fields (name, exam, seat, reportingTime) remain intact.',
            output: 'HTTP/1.1 200 OK with preserved student properties.',
            trapAndFix: 'Efficiency Win: PATCH reduces payload bandwidth and protects database records from accidental field erasure.'
          }
        },
        {
          label: '5. DELETE (Resource Teardown)',
          workbench: {
            method: 'DELETE',
            url: 'http://localhost:3000/api/v1/admitcards/APX102',
            headers: { 'Accept': 'application/json' },
            responseStatus: '204 No Content',
            responseTime: '6 ms',
            responseBody: '/* [Empty Body - 0 Bytes] */'
          },
          breakdown: {
            input: 'DELETE verb targeting APX102 resource endpoint.',
            explanation: 'The server removes the record from memory and returns HTTP 204 No Content to save bandwidth.',
            output: 'HTTP/1.1 204 No Content (subsequent GET requests return HTTP 404 Not Found).',
            trapAndFix: '204 No Content Rule: A 204 response MUST NOT include a message-body. If returning confirmation JSON, use 200 OK instead.'
          }
        }
      ]
    },

    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 3 : ENTITY MUTATION',
      title: 'The Brass Thali Rule: PUT Total Replacement vs PATCH Surgical Delta',
      subtitle: 'Preventing catastrophic data loss when updating database collections',
      input: {
        method: 'PUT vs PATCH',
        url: 'http://localhost:3000/api/students/APX102',
        desc: 'Comparing total replacement against partial property update.',
        code: '// PUT: Replaces entire record\n{ "name": "Akshay" }\n\n// PATCH: Modifies only target field\n{ "email": "akshay@campus.edu" }'
      },
      underTheHood: {
        desc: 'PUT constructs a brand new entity and swaps it into storage. PATCH merges incoming keys into existing state.',
        steps: [
          'PUT receives payload and overwrites existing record completely.',
          'Any omitted properties in PUT request payload are wiped or set to null.',
          'PATCH fetches existing record first and applies partial object merge.',
          'Omitted properties in PATCH payload remain untouched in the database.'
        ]
      },
      output: {
        status: '200 OK',
        time: '12ms',
        desc: 'Server returns modified student entity.',
        body: '{\n  "status": "updated",\n  "student": {\n    "roll": "APX102",\n    "name": "Akshay",\n    "email": "akshay@campus.edu"\n  }\n}'
      },
      seniorSavior: {
        aphorism: 'PUT replaces the whole platter; PATCH surgically tops up a single bowl.',
        rule: 'Send complete resource representations with PUT, or use PATCH for partial updates.',
        trap: 'Sending partial payloads to PUT wipes all unmentioned fields silently.'
      }
    },

    // =========================================================================
    // ACT 5: THE THREE PARADIGMS SYNTHESIS & SUNSET TOAST
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC ACT 5 : THE THREE PARADIGMS SYNTHESIS',
      title: 'Architectural Showdown: REST vs SOAP vs GraphQL',
      intro: 'As twilight falls across the stepwell veranda, Sameer synthesizes the three major architectural styles against the same admit card record.',
      columns: 2,
      panels: [
        {
          title: 'Ascending the Sandstone Watchtower',
          time: '04:45 PM',
          image: {
            src: act05Scene44Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act5/act05_scene44_walking_up_spiral_staircase.jpg',
            w: 1200,
            h: 675,
            alt: 'Akshay and Sameer climbing a curved sandstone spiral staircase illuminated by slit windows.',
            caption: 'Watchtower Stairs: Climbing toward the open rooftop as twilight approaches.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'Come upstairs. You understand HTTP verbs and JSON payloads. Now look at the architectural landscape.'
            }
          ],
          scene: 'Sameer and Akshay climb the ancient sandstone spiral staircase toward the rooftop pavilion to survey system paradigms.'
        },
        {
          title: 'The Sunset Rooftop Pavilion',
          time: '05:00 PM',
          image: {
            src: act05Scene45Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act5/act05_scene45_sunset_rooftop_pavilion_wide.jpg',
            w: 1200,
            h: 675,
            alt: 'Panoramic golden hour view from the open rooftop pavilion overlooking the stepwell campus.',
            caption: 'Rooftop Horizon: Golden sunlight spreads across the campus, framing the architectural showdown.'
          },
          dialogues: [
            {
              speaker: 'Akshay',
              speech: 'From up here, the entire campus network feels like one giant living nervous system!'
            }
          ],
          scene: 'From the breezy rooftop pavilion, Akshay and Sameer look across the glowing campus roofs as evening begins.'
        },
        {
          title: 'The Slate Blackboard Showdown',
          time: '05:15 PM',
          image: {
            src: act05Scene46Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act5/act05_scene46_sameer_slate_blackboard_canopy.jpg',
            w: 1200,
            h: 675,
            alt: 'Sameer illustrating REST, SOAP, and GraphQL architectures on an outdoor slate blackboard under a banyan canopy.',
            caption: 'Architectural Showdown: Sameer diagrams REST resource URIs, SOAP XML envelopes, and GraphQL field selection.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'Three great philosophies govern distributed systems today: REST, SOAP, and GraphQL. Let us compare them.'
            }
          ],
          scene: 'Sameer breaks down the three communication paradigms, demonstrating that all three are variations of the courier waiter model.',
          realization: 'Protocol architectures reflect trade-offs: REST prioritizes simplicity and standard verbs, SOAP enforces strict typed contracts, and GraphQL optimizes payload precision.'
        },
        {
          title: 'REST: The Standardized Open Postcard',
          time: '05:25 PM',
          image: {
            src: act05Scene47Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act5/act05_scene47_paradigm_rest_standardized_postcard.jpg',
            w: 1200,
            h: 675,
            alt: 'A crisp parchment postcard with clear address lines and franked postal stamps resting on a cedar desk.',
            caption: 'Standardized Postcard: REST relies on universal URIs and standard HTTP methods that any postal worker can read.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'REST is a standard open postcard. Clear address, standard stamps, readable by any courier on earth.'
            }
          ],
          scene: 'Sameer introduces REST as an open postal card: simple, standardized, cacheable, and understood by all network intermediaries.'
        },
        {
          title: 'SOAP: The Armored Royal Lockbox',
          time: '05:35 PM',
          image: {
            src: act05Scene48Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act5/act05_scene48_soap_armored_lockbox.jpg',
            w: 1200,
            h: 675,
            alt: 'Sealed iron royal chest reinforced with heavy brass rivets and wax-sealed contracts.',
            caption: 'Enterprise Envelope: The sealed iron chest represents a SOAP envelope carrying strict WSDL schemas, digital signatures, and XML structures.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'SOAP is an armored bank vault with wax seals and heavy XML contracts. Rigid, heavy, enterprise safe.'
            }
          ],
          scene: 'Sameer points to the sealed iron chest metaphor, explaining why high-compliance enterprise domains rely on strict XML contracts.',
          realization: 'SOAP trades lightweight speed for absolute contract enforcement, type safety, and standardized security headers.'
        },
        {
          title: 'GraphQL: The Tailored Spice Market Basket',
          time: '05:45 PM',
          image: {
            src: act05Scene49Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act5/act05_scene49_paradigm_graphql_spice_market.jpg',
            w: 1200,
            h: 675,
            alt: 'A woven bamboo spice basket holding precisely measured pinch bowls of saffron, star anise, and green cardamom.',
            caption: 'Field Precision: GraphQL allows clients to request exact fields, preventing over-fetching over cellular links.'
          },
          dialogues: [
            {
              speaker: 'Akshay',
              speech: 'GraphQL is a spice market basket! The client asks for only hall and seat digits, and gets zero unwanted data!'
            }
          ],
          scene: 'Akshay grasps GraphQL query flexibility: mobile clients declare their required data shape, eliminating over-fetching.'
        },
        {
          title: 'Sunset Chai Toast: Welcome to API Engineering',
          time: '06:00 PM',
          image: {
            src: act05Scene52Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act5/act05_scene52_chai_toast_to_network_wire.jpg',
            w: 1200,
            h: 675,
            alt: 'Sameer and Akshay clinking cutting chai glasses against the warm amber sunset over ancient sandstone domes.',
            caption: 'Sunset Milestone: Akshay transforms from a stressed page viewer into a confident API engineer.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'Good work today, Akshay. Today you bypassed the UI and spoke to the API. Tomorrow, we test it to destruction.'
            }
          ],
          scene: 'Akshay and Sameer clink cutting chai glasses against the twilight sky, celebrating Akshay transformation from an anxious student into a confident API engineer.',
          realization: 'Understanding APIs transforms the engineer from a passive user of web interfaces into an architect of robust backend contracts.'
        }
      ]
    },

    // =========================================================================
    // CODE INTERFACE 4: MULTI-PARADIGM COMPARISON LENS
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'EQUIPMENT BENCH 4 : THE SAME RECORD IN THREE PARADIGMS',
      title: 'Comparing REST, SOAP, and GraphQL on Student APX102',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Sameer',
          role: 'Principal Systems Architect',
          avatarSrc: sameerChaiSvg,
          text: 'Notice the contrast: REST delivers clean JSON, SOAP packages everything in strict XML envelopes, and GraphQL queries only requested fields.'
        },
        {
          speaker: 'Akshay',
          role: 'Apprentice Engineer',
          avatarSrc: akshayEurekaSvg,
          text: 'In GraphQL, the client asks for only hall and seat, and the server returns exactly those two properties!'
        }
      ],
      tabs: [
        {
          label: '1. REST (Resource URI + JSON)',
          workbench: {
            method: 'GET',
            url: 'https://portal.apex.edu/api/v1/admitcards/APX102',
            headers: { 'Accept': 'application/json' },
            responseStatus: '200 OK',
            responseTime: '14 ms',
            responseBody: JSON.stringify({
              rollNumber: 'APX102',
              name: 'Akshay Mehra',
              exam: 'Engineering Entrance Board 2025',
              hall: '302',
              seat: 'B-14',
              reportingTime: '08:50 AM'
            }, null, 2)
          },
          breakdown: {
            input: 'GET /api/v1/admitcards/APX102 over standard HTTP/1.1.',
            explanation: 'Standard REST conventions: nouns identify resources, HTTP verbs define actions, lightweight JSON transfers the entity state.',
            output: 'Pure 120-byte JSON object without schema envelopes.',
            trapAndFix: 'Over-fetching Trade-off: If the client only needs the seat number, REST still transmits the full record (acceptable for small objects).'
          }
        },
        {
          label: '2. SOAP 1.2 (Strict Typed XML Envelope)',
          workbench: {
            method: 'POST',
            url: 'https://portal.apex.edu/ws/AdmitCardService',
            headers: {
              'Content-Type': 'application/soap+xml; charset=utf-8',
              'SOAPAction': 'http://portal.apex.edu/GetAdmitCard'
            },
            body: `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
               xmlns:apex="http://portal.apex.edu/types">
  <soap:Header/>
  <soap:Body>
    <apex:GetAdmitCardRequest>
      <apex:RollNumber>APX102</apex:RollNumber>
    </apex:GetAdmitCardRequest>
  </soap:Body>
</soap:Envelope>`,
            responseStatus: '200 OK',
            responseTime: '42 ms',
            responseBody: `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
               xmlns:apex="http://portal.apex.edu/types">
  <soap:Body>
    <apex:GetAdmitCardResponse>
      <apex:RollNumber>APX102</apex:RollNumber>
      <apex:Hall>302</apex:Hall>
      <apex:Seat>B-14</apex:Seat>
      <apex:Status>CONFIRMED</apex:Status>
    </apex:GetAdmitCardResponse>
  </soap:Body>
</soap:Envelope>`
          },
          breakdown: {
            input: 'XML-encoded SOAP Envelope with WSDL contract validation.',
            explanation: 'Strict enterprise paradigm. Both request and response are wrapped in heavy XML envelopes with typed namespaces.',
            output: 'Valid XML message compliant with contract schema.',
            trapAndFix: 'High Overhead: Verbose markup requires significantly more bandwidth and CPU parsing overhead than JSON.'
          }
        },
        {
          label: '3. GraphQL (Client-Selected Fields)',
          workbench: {
            method: 'POST',
            url: 'https://portal.apex.edu/graphql',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              query: `query {
  admitCard(rollNumber: "APX102") {
    hall
    seat
  }
}`
            }, null, 2),
            responseStatus: '200 OK',
            responseTime: '11 ms',
            responseBody: JSON.stringify({
              data: {
                admitCard: {
                  hall: '302',
                  seat: 'B-14'
                }
              }
            }, null, 2)
          },
          breakdown: {
            input: 'POST request carrying a GraphQL query selecting only hall and seat.',
            explanation: 'Client-driven precision. The client specifies exact fields desired; the server omits all others, preventing over-fetching.',
            output: 'Compact JSON payload containing exclusively requested attributes.',
            trapAndFix: 'Caching Complexity: Because all queries use POST to a single endpoint, standard HTTP caching proxies require custom configuration.'
          }
        }
      ]
    },

    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 4 : THE THREE PARADIGMS',
      title: 'Architectural Showdown: REST vs SOAP vs GraphQL',
      subtitle: 'Selecting the optimal network contract model for your system requirements',
      input: {
        method: 'Admit Card Query Comparison',
        url: 'GET /admitcards/APX102 | SOAP Action | query { student { hall seat } }',
        desc: 'Comparing the three distinct request formats for retrieving candidate exam details.',
        code: '// REST:\nGET /api/v1/admitcards/APX102\n\n// GraphQL:\nquery { student(id: "APX102") { hall seat } }'
      },
      underTheHood: {
        desc: 'Underlying protocol mechanics: URL resource dispatching versus XML schema envelope processing versus AST field graph resolution.',
        steps: [
          'REST leverages standard HTTP verbs and status codes for uniform caching.',
          'SOAP serializes payloads into XML envelopes validated against WSDL contracts.',
          'GraphQL parses client queries into abstract syntax trees and executes field resolvers.'
        ]
      },
      output: {
        status: '200 OK across all paradigms',
        time: '14ms REST | 48ms SOAP | 22ms GraphQL',
        desc: 'Observable payload trade-offs across simplicity, contract rigor, and field precision.',
        body: '{\n  "hall": 302,\n  "seat": "B14"\n}'
      },
      seniorSavior: {
        aphorism: 'No protocol is universally superior; each solves a different engineering constraint.',
        rule: 'Choose REST for public APIs, SOAP for strict banking compliance, and GraphQL for data hungry mobile clients.',
        trap: 'Building GraphQL when simple REST endpoints suffice adds unnecessary schema and caching complexity.'
      }
    },

    // =========================================================================
    // TOPIC 2: ARCHITECTURAL TRANSACTION FLOW & TRIAGE
    // =========================================================================
    {
      type: 'flow',
      title: 'Anatomy of the 14ms Admit Card HTTP Transaction',
      subtitle: 'Tracing the client request packet across TCP sockets to the Express route handler and back.',
      input: [
        'Client Terminal Request',
        'curl -s http://portal.apex.edu/api/v1/admitcards/APX102 over TCP socket port 80/3000'
      ],
      process: [
        'Express Kernel & Route Dispatch',
        'Socket receives bytes -> express.json() unboxes -> router matches /api/v1/admitcards/:id -> query student store'
      ],
      output: [
        'Structured 200 OK JSON Payload',
        '{"status":"CONFIRMED","regNo":"APX102","hallNumber":"302","seatNumber":"B-14"} delivered in 14ms'
      ]
    },

    {
      type: 'triage',
      title: 'The Browser Address Bar Protocol Triage',
      scenario: 'Akshay wants to issue a newly generated Admit Card record to the server using POST. Why can he not simply type the JSON into the Chrome browser address bar?',
      options: [
        'The browser address bar is designed strictly for GET navigation and cannot attach JSON payloads or configure custom HTTP headers',
        'Web browsers cannot establish TCP socket connections to port 3000',
        'Localhost URLs only support reading static HTML files from disk',
        'Express rejects all incoming connections originating from web browser user agents'
      ],
      answerIndex: 0,
      debrief: 'Tactical Triumph: The browser address bar speaks exactly one dialect: an HTTP GET request with no payload body and default browser navigation headers. To test APIs like a professional engineer, you need an API Testing Workbench capable of forging POST, PUT, PATCH, and DELETE verbs with custom JSON bodies.',
      traps: [
        'Tactical Triumph: The browser address bar speaks exactly one dialect: an HTTP GET request with no payload body and default browser navigation headers.',
        'Diagnostic Trap: Browsers can connect to any open TCP port; the limitation is protocol verb and payload capability, not socket connectivity.',
        'Diagnostic Trap: Localhost URLs support any valid HTTP payload; the address bar simply does not provide an interface to compose bodies.',
        'Diagnostic Trap: Express does not inspect user agents by default; it processes any valid HTTP byte stream matching route definitions.'
      ]
    },

    // =========================================================================
    // TOPIC 5: PROTOCOL SHOWDOWN & VICTORY MILESTONE
    // =========================================================================
    {
      type: 'guess',
      prompt: 'Why does req.body evaluate to undefined inside an Express route handler when sending a JSON POST payload without middleware?',
      options: [
        'The HTTP request body is sent over an encrypted channel that Express cannot read',
        'Node streams TCP packets in chunks, so req.body remains unparsed until express.json middleware buffers and deserializes the byte stream',
        'Express only supports URL query parameters and rejects JSON payloads by specification',
        'The client browser failed to set the Content Length header correctly',
      ],
      answerIndex: 1,
      explain: 'Node.js processes incoming network requests as streaming TCP byte chunks. Without express.json middleware, the chunks are never assembled or parsed into a JavaScript object, leaving req.body undefined.',
    },
    {
      type: 'quiz',
      items: [
        [
          'Why does req.body evaluate to undefined inside an Express route handler when sending a JSON POST payload without middleware?',
          'Node.js processes incoming network requests as streaming TCP byte chunks. Without express.json middleware, the chunks are never assembled or parsed into a JavaScript object, leaving req.body undefined.',
        ],
        [
          'What is the fundamental difference between an API and a Web Service according to system architecture standards?',
          'All web services are APIs operating over network protocols like HTTP, but not all APIs are web services because local software libraries and SDKs run in memory without network communication.',
        ]
      ],
    },
    {
      type: 'takeaways',
      title: 'Senior Savior Takeaways',
      items: [
        'An API is a contract between two software systems, decoupling user interfaces from core data logic.',
        'Network payloads travel as streaming TCP byte packets that require proper server side parsing middleware.',
        'JSON data endpoints consume a fraction of the network bandwidth required by full HTML web pages.',
        'Always verify network traffic in developer tools before assuming a frontend rendering bug.'
      ]
    },
    {
      type: 'victory-milestone',
      badge: '⚡ ARCHITECTURAL TRIUMPH UNLOCKED',
      rank: 'APPRENTICE API ENGINEER',
      title: 'From Page Viewer to API Engineer',
      summary: 'Akshay has transitioned from panicking over frozen browser screens to querying network endpoints and building Express APIs on port 3000. He understands client server decoupling, knows why req.body becomes undefined, and has seen why lightweight JSON outpaces bloated webpage bundles.',
      powers: [
        'Direct API Inspection: Ability to query backend HTTP endpoints directly without waiting for heavy frontend assets.',
        'Byte Stream Mastery: Understanding TCP packet chunks and correctly configuring body parsing middleware.',
        'CRUD Competence: Fluent mapping of POST, GET, PUT, PATCH, and DELETE verbs to real world entity lifecycles.',
        'Architectural Literacy: Intuitive grasp of the trade-offs between REST resources, SOAP envelopes, and GraphQL queries.'
      ],
      disastersPrevented: [
        'The 504 Portal Blackout: Recognizing that heavy UI assets cause server collapse under peak concurrent load.',
        'The Undefined Body Crash: Preventing runtime TypeError crashes by ensuring middleware is mounted before route handlers.',
        'The Brass Thali Data Loss: Avoiding catastrophic data loss caused by mistaking PUT complete replacement for PATCH partial update.'
      ],
      warRoomTakeaway: 'When a web page fails to load, never ask "Why is the screen frozen?" Always open DevTools, inspect the Network tab, and ask: "Which API failed to deliver this data?"'
    },

    {
      type: 'cliffhanger',
      badge: '★ CHAPTER 01 COMPLETE : PREVIEW OF CHAPTER 02',
      title: 'Next Mission: Getting Started with API Testing Workbench',
      text: 'Akshay has proven that data travels as packets across the wire. He knows how to build an Admit Card server on port 3000. But what happens when the college redeploys the service, or an accidental code push breaks the defensive validation? In Chapter 2, Akshay enters the API Testing Workbench, crafts automated assertions, and hunts down live defects before they ever reach students.',
      cliffhangerPanel: {
        title: 'The Upcoming Challenge',
        time: 'NEXT CHAPTER',
        image: {
          src: act05Scene52Img,
          file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act5/act05_scene52_chai_toast_to_network_wire.jpg',
          w: 1200,
          h: 675,
          alt: 'Sameer and Akshay toasting chai against the sunset horizon, ready for automated testing in Chapter 2.',
          caption: 'Chapter 2 Preview: Automating API checks and building regression gates.'
        },
        scene: 'Akshay opens the API Testing Workbench to systematically test the college service under synthetic traffic loads.',
        dialogue: {
          speaker: 'Sameer',
          speech: 'Now that you know what an API is and how it works, it is time to test it with intention. Chapter 2 begins!'
        },
        realization: 'Knowing how to build an API is only half the journey; the true engineer knows how to prove it cannot break.'
      }
    }
  ]
};
