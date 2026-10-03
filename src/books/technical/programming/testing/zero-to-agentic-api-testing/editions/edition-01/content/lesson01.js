import act01Scene02Img from '../assets/illustrations/acts/act1/act01_scene02_leaking_brass_bottle.jpg'
import act01Scene03Img from '../assets/illustrations/acts/act1/act01_scene03_akshay_soaked_admit_card.jpg'
import act01Scene05Img from '../assets/illustrations/acts/act1/act01_scene05_akshay_sprinting_panic.jpg'
import act01Scene06Img from '../assets/illustrations/acts/act1/act01_scene06_two_students_running_panic.jpg'
import act01Scene07Img from '../assets/illustrations/acts/act1/act01_scene07_akshay_tapping_phone_screen.jpg'
import act01Scene09Img from '../assets/illustrations/acts/act1/act01_scene09_sameer_arrival_chai.jpg'
import act01Scene09ServerImg from '../assets/illustrations/acts/act1/act01_scene09_alt_cloister_server_rack.jpg'
import act01Scene11Img from '../assets/illustrations/acts/act1/act01_scene11_sameer_diagnostic_slate_14ms.jpg'
import act01Scene13Img from '../assets/illustrations/acts/act1/act01_scene13_students_running_exam_gates.jpg'

import act02Scene15Img from '../assets/illustrations/acts/act2/act02_scene15_brass_kettle_pouring_chai.jpg'
import act02Scene18Img from '../assets/illustrations/acts/act2/act02_scene18_canteen_waiter_api.jpg'
import act02Scene21Img from '../assets/illustrations/acts/act2/act02_scene21_bullock_cart_vs_royal_courier.jpg'

import act03Scene27Img from '../assets/illustrations/acts/act3/act03_scene27_reaction_typeerror_crash.jpg'
import act03Scene30Img from '../assets/illustrations/acts/act3/act03_scene30_byte_stream_waterfall_aqueduct.jpg'
import act03Scene32Img from '../assets/illustrations/acts/act3/act03_scene32_two_men_success_201_created.jpg'

import act04Scene33Img from '../assets/illustrations/acts/act4/act04_scene33_veranda_lunch_table_setup.jpg'
import act04Scene38Img from '../assets/illustrations/acts/act4/act04_scene38_patch_topping_up_dal.jpg'

import act05Scene46Img from '../assets/illustrations/acts/act5/act05_scene46_sameer_slate_blackboard_canopy.jpg'
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
      missionCrisis: 'The 08:30 AM Admit Card Meltdown and the Presentation Glass Trap',
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
      achieve: 'Understand what an Application Programming Interface actually does on the physical network wire. Distinguish presentation glass from network web services. Build a fully runnable Express server from scratch. Master the five essential CRUD verbs (POST, GET, PUT, PATCH, DELETE) and taste the architectural differences between REST, SOAP, and GraphQL.',
      how: 'Through sequential comic scenes, visual storyboards, interactive code workbenches, and diagnostic triage challenges following student Akshay and mentor Sameer.',
      carry: 'The mental model of the client server handshake, an intuitive grasp of HTTP status codes, and the confidence to inspect raw wire traffic rather than relying blindly on UI screens.'
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
          scene: 'Inside Akshay canvas satchel, the screw cap of his brass bottle works loose. Water pools across his examination hall ticket, dissolving the printed ink into running indigo watercolor blotches.',
          realization: 'Physical paper is fragile and ephemeral. The ultimate source of truth is never the printout: it is the canonical database record waiting on the server.'
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
          scene: 'Akshay sprints past the quad with twenty minutes to the exam, staring in horror as water soaks through his paper admit card, completely blurring his room and seat numbers.',
          realization: 'When the physical document fails, the data still exists on the server. The question is not whether the data is there: it is whether you can reach it in time.'
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
          scene: 'Panicked classmates sprint past toward Hall 302, shouting that the gates close in minutes and urging him to pull up the campus web portal.',
          realization: 'Everyone assumes the web browser is the only door to data, unaware that thousands of simultaneous browser requests create an instant traffic choke.'
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
          scene: 'Akshay taps his mobile screen frantically under the arcade corridor, but the college admit card portal is trapped in an infinite spinning wheel.',
          realization: 'When thousands of users hit a monolithic web frontend simultaneously, presentation pipelines collapse under their own graphical weight.'
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
          realization: 'The senior engineer diagnoses the architecture before touching a single wire. Panic looks at symptoms; mastery identifies bottlenecks.'
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
            caption: 'Server Vault Alcove: Pulsing cyan server LEDs illuminate the contrast between heavy HTML and pure wire data.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'The server is completely fine. It is your browser that is choking on its own vanity. Your phone is pulling nearly four megabytes of heavy photos, button styles, and React bundles through a thin wireless straw just to read two lines of text!'
            },
            {
              speaker: 'Akshay',
              speech: 'Almost four megabytes over a one-bar connection just to read two lines of text?!'
            }
          ],
          scene: 'Sameer gestures toward the recessed server rack alcove, explaining that the backend is processing requests flawlessly, but the bloated client presentation bundle cannot fit through the weak Wi-Fi signal.',
          realization: 'The browser is a presentation glass: it downloads megabytes of decoration before showing you the bytes you actually need. The data itself on the raw network wire is almost always tiny.'
        },
        {
          title: 'Bypassing the Presentation Glass',
          time: '08:45 AM',
          image: {
            src: act01Scene11Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene11_sameer_diagnostic_slate_14ms.jpg',
            w: 1200,
            h: 675,
            alt: 'Sameer resting his slim matte-black diagnostic tablet on a stone ledge, preparing to query the server socket directly.',
            caption: 'Wire Inspection Console: Sameer unsheathes the diagnostic slate to ask the server directly.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'Exactly. The actual data you need: Hall 302, Seat B-14: is just one hundred and twenty bytes! That is thirty thousand times smaller. Put away the heavy browser; we are going to walk straight into the kitchen.'
            },
            {
              speaker: 'Sameer',
              speech: 'Look at what I am doing: no web pages, no heavy photos, no button scripts. I am sending the server just one simple question over the wire: give me the admit card for student APX102.'
            }
          ],
          scene: 'Sameer rests his slim diagnostic slate on the carved balustrade, bypassing HTML, CSS, and client-side JavaScript to query the raw API endpoint directly over the wire.',
          realization: 'APIs eliminate presentation tax. When you speak directly to the server in structured data, network constraints become irrelevant.'
        },
        {
          title: 'The 14 Millisecond Terminal Rescue',
          time: '08:46 AM',
          hero: true,
          fullWidth: true,
          image: {
            src: act01Scene11Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act1/act01_scene11_sameer_diagnostic_slate_14ms.jpg',
            w: 1200,
            h: 675,
            alt: 'Sameer holding a diagnostic slate projecting a cyan and amber wire inspection HUD while Akshay reacts in jaw-dropping awe.',
            caption: 'Terminal Console: Sameer extracts Hall 302, Seat B-14 over the raw wire in fourteen milliseconds.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'Done. Hall 302. Seat B-14. Took fourteen milliseconds.'
            },
            {
              speaker: 'Akshay',
              reply: true,
              speech: 'Wait, fourteen milliseconds?! My phone wasted four whole minutes spinning in circles, and your screen answered before I even blinked?!'
            },
            {
              speaker: 'Sameer',
              speech: 'Your phone tried to build a giant palace just to show a tiny sticky note. I just grabbed the sticky note directly.'
            },
            {
              speaker: 'Akshay',
              reply: true,
              speech: 'Hall 302, Seat B-14! I have to sprint! Sameer, what kind of black magic was that?!'
            },
            {
              speaker: 'Sameer',
              speech: 'Not magic, Akshay: an API call! Go pass your exam and meet me in Room 7 behind the stepwell. I will show you how it works!'
            }
          ],
          scene: 'Sameer opens a bare black terminal, fires a direct wire request, and extracts the exact hall and seat number in 14 milliseconds, getting Akshay into the exam.',
          realization: 'An API call goes directly to the server and asks for exactly the data you need: nothing more. It skips every layer of visual presentation. That is why it returned in 14 milliseconds what the browser could not deliver in 4 minutes.'
        }
      ]
    },

    // =========================================================================
    // CODE INTERFACE 1: THE BROWSER WATERFALL VS RAW WIRE PAYLOAD
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'EQUIPMENT BENCH 1 : BROWSER WATERFALL CHOKE VS 14ms WIRE PAYLOAD',
      title: 'Measuring Presentation Overhead against Pure Wire Data',
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
          text: 'When signal strength drops, asset waterfalls fail. An API bypasses the Presentation Glass entirely and queries the socket directly.'
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
          title: 'Post Exam Chai at the Stepwell Veranda',
          time: '12:15 PM',
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
              speaker: 'Akshay',
              speech: 'I survived! Hall 302, Seat B-14 conquered with minutes to spare. Now please tell me: how on earth did you get that admit card in fourteen milliseconds when all our phones were completely frozen?!'
            },
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'Sit back, take a sip of hot chai, and let us use some common sense. Have you ever eaten at a South Indian restaurant?'
            },
            {
              speaker: 'Akshay',
              speech: 'Sameer, I am an engineering student. My entire life runs on canteen parathas and cheap tea!'
            },
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'Perfect! Then you already understand how big computer systems talk to each other. You sit at the table: in tech terms, you are the client. You want something: your exam admit card. You have a request.'
            },
            {
              speaker: 'Akshay',
              speech: 'And the kitchen is the server?'
            },
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'Spot on. The kitchen is the server and its database. It has the chef, the stove, and the ingredients. You are not allowed to walk inside and mess with the pots.'
            }
          ],
          scene: 'Hours after surviving the board exam, Akshay sits at Sameer research desk as Sameer maps the restaurant client server model on the whiteboard.',
          realization: 'The client and server must remain decoupled: the client requests data, the server processes data, and neither invades the internal space of the other.'
        },
        {
          title: 'The Waiter Courier and the Menu Contract',
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
              speech: 'Exactly! But notice what the waiter does and does not do. The waiter does not cook the meal, does not eat your food, and does not wash the dishes. He is simply a courier. He takes your order slip to the kitchen, and carries the cooked plate back to your table.'
            },
            {
              speaker: 'Akshay',
              speech: 'And my phone browser?!'
            },
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'Your phone browser told the waiter: Wait! Before I look at my food, please repaint the dining room walls, hang crystal chandeliers, and play some background music! You buried him under party decorations.'
            },
            {
              speaker: 'Akshay',
              speech: 'And the menu is the contract!'
            },
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'Spot on. The menu lists what you can ask for and how to order it. If you ask for pizza at a dosa stall, the waiter shakes his head and returns a polite 404 Not Found.'
            }
          ],
          scene: 'Sameer sketches the three boxes on the whiteboard: Customer, Waiter, and Kitchen, demonstrating how the courier carries payloads without altering them.',
          realization: 'An API is a courier with a contract: it carries structured requests to the server and structured responses back to the client. It never cooks, never stores, and never renders.'
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
          title: 'Pair Programming on Port 3000',
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
              speech: 'Now let me test my POST route. I will shoot over some JSON with curl and watch the server echo it back.'
            },
            {
              speaker: 'Akshay',
              speech: 'Wait, hold on! I sent my name and exam in the body, but the server just replied: received: undefined?! Where on earth did my data go?'
            },
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'You are making the classic rookie mistake. You assume sending JSON across the wire is like handing someone a neat letter inside an envelope.'
            }
          ],
          scene: 'Akshay starts his Express server on port 3000 and dispatches a POST request, but is baffled when req.body returns undefined.',
          realization: 'The server receives streaming network byte chunks, not ready-made JavaScript objects. Without a body parser, req.body remains undefined.'
        },
        {
          title: 'The Byte Stream Translation Fix',
          time: '01:25 PM',
          image: {
            src: act03Scene30Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act3/act03_scene30_byte_stream_waterfall_aqueduct.jpg',
            w: 1200,
            h: 675,
            alt: 'Sameer sketching an aqueduct sieve showing raw TCP byte stream chunks being buffered into an orderly req.body object.',
            caption: 'The Byte Stream Sieve: Express middleware intercepts raw TCP byte chunks and reassembles them before route handlers run.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'When curl sends JSON, it shoots across the wire as a TCP byte stream: like water blasting out of a garden hose in little splashy chunks. The server sees a puddle of raw bytes trickling in over time.'
            },
            {
              speaker: 'Sameer',
              speech: 'Express does not guess. It leaves req.body completely blank unless you install a catcher. Stick app.use(express.json()) right above your routes.'
            },
            {
              speaker: 'Akshay',
              reply: true,
              speech: 'One line of middleware... Let me reboot and fire curl again!'
            },
            {
              speaker: 'Akshay',
              reply: true,
              speech: 'Yes! received: { name: "Akshay Mehra" }! It actually read the data!'
            },
            {
              speaker: 'Sameer',
              speech: 'Remember this forever: wires carry raw bytes, not JavaScript objects. Middleware is the worker that turns noise into meaning.'
            }
          ],
          scene: 'Sameer explains TCP streaming buffers and demonstrates why mounting express.json() is essential before registering any route handlers.',
          realization: 'Data travels over the network as a raw stream of byte chunks. Without middleware to collect and parse those pieces, req.body stays undefined.'
        }
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
          title: 'The Brass Thali Platter Analogy',
          time: '02:30 PM',
          image: {
            src: act04Scene33Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act4/act04_scene33_veranda_lunch_table_setup.jpg',
            w: 1200,
            h: 675,
            alt: 'Sameer and Akshay seated at an outdoor stone veranda table with steaming brass lunch thalis and small bowls of curries.',
            caption: 'Dining Courtyard: Six katoris on the brass platter represent the fields of a structured database record.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'Whenever you talk to an API, you only ever do five basic moves. Five verbs. And this lunch thali is about to teach you every single one.'
            },
            {
              speaker: 'Sameer',
              speech: 'GET: Take a good look at this plate. Dal makhani, paneer, aloo, raita, pickle, kheer. You are looking with your eyes. Nothing gets eaten, nothing gets spilled. It is safe and idempotent.'
            },
            {
              speaker: 'Sameer',
              speech: 'POST: I just dropped a fresh, hot roti on your plate. Boom: something new was created that was not there two seconds ago. That is POST. It is not idempotent: do that three times and you get three rotis!'
            },
            {
              speaker: 'Akshay',
              reply: true,
              speech: 'GET looks, POST cooks! What happens when I want to update my order?'
            }
          ],
          scene: 'Sameer introduces GET as safe visual inspection and POST as non-idempotent resource creation.',
          realization: 'GET is safe and idempotent: inspecting a resource ten times leaves the database unchanged. POST creates new entities and is not idempotent.'
        },
        {
          title: 'The Brass Thali Trap: PUT vs PATCH',
          time: '02:45 PM',
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
              speaker: 'Sameer',
              speech: 'PUT: Brace yourself, because this is where thousands of sleepy developers blow up their databases. PUT does not mean tweak this one tiny thing. PUT means: swap out the whole entire plate!'
            },
            {
              speaker: 'Sameer',
              speech: 'If your request only mentions dal and rice, the waiter literally dumps your plate and brings back a tray with only dal and rice. Your paneer? In the bin! Your kheer? Gone forever!'
            },
            {
              speaker: 'Akshay',
              reply: true,
              speech: 'Hey! Keep your hands off my paneer! That is terrifying!'
            },
            {
              speaker: 'Sameer',
              speech: 'That is the Brass Thali Trap! Junior coders hit PUT thinking they are updating an email, and accidentally delete the customer phone number and address because they omitted them from the JSON body.'
            },
            {
              speaker: 'Sameer',
              speech: 'PATCH: The polite surgical scalpel. PATCH tells the kitchen: Leave everything alone, just add a swirl of cream to my dal. Only the delta changes.'
            },
            {
              speaker: 'Akshay',
              reply: true,
              speech: 'And DELETE clears the table and returns 204 No Content!'
            }
          ],
          scene: 'Sameer mimes dumping the whole plate to demonstrate PUT total replacement, then uses a spoon to show PATCH surgical delta updates.',
          realization: 'PUT replaces the entire resource from scratch: anything you leave out gets wiped clean. PATCH updates only the fields you send. Remember the Brass Thali Rule: PUT replaces the whole plate; PATCH tops up a single bowl.'
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
          title: 'The Glass Whiteboard Showdown',
          time: '03:15 PM',
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
              speech: 'What saved your life this morning: GET /api/v1/admitcards/APX102: that is called REST. It is clean, simple, and built on uniform URLs and standard HTTP verbs.'
            },
            {
              speaker: 'Sameer',
              speech: 'SOAP is the grumpy corporate lawyer in a three-piece suit. It wraps every tiny message in a giant, triple-sealed XML envelope with strict WSDL validation contracts.'
            },
            {
              speaker: 'Akshay',
              reply: true,
              speech: 'Why would anyone use that?'
            },
            {
              speaker: 'Sameer',
              speech: 'When international banks transfer five million dollars, nobody wants casual. They want ironclad, tamper-proof contracts with strict schemas.'
            },
            {
              speaker: 'Sameer',
              speech: 'GraphQL flips the table: the client picks only the exact bites it wants. A phone can ask for only hall and seat, eliminating over-fetching!'
            }
          ],
          scene: 'Sameer breaks down the three communication paradigms, demonstrating that all three are variations of the courier waiter model.',
          realization: 'Protocol architectures reflect trade-offs: REST prioritizes simplicity and standard verbs, SOAP enforces strict typed contracts, and GraphQL optimizes payload precision.'
        },
        {
          title: 'Sunset Chai Toast: Welcome to the Wire',
          time: '04:00 PM',
          image: {
            src: act05Scene52Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/acts/act5/act05_scene52_chai_toast_to_network_wire.jpg',
            w: 1200,
            h: 675,
            alt: 'Sameer and Akshay clinking cutting chai glasses against the warm amber sunset over ancient sandstone domes.',
            caption: 'Sunset Milestone: Akshay transforms from a stressed page viewer into a confident API thinker.'
          },
          dialogues: [
            {
              speaker: 'Akshay',
              speech: 'This morning at the quad gate, I was just a stressed-out user waiting on a frozen spinning wheel. Now I see the whole secret engine purring behind the curtain!'
            },
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'Look at you. No longer a page viewer waiting on frozen glass. Welcome to the other side of the wire, engineer.'
            },
            {
              speaker: 'Akshay',
              speech: 'An official API thinker!'
            },
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'Good. Rest up tonight. Tomorrow in Chapter 2, we open our workbench and start breaking and testing APIs like pros.'
            }
          ],
          scene: 'Akshay and Sameer clink their chai glasses in celebration of mastering the network wire.',
          realization: 'When a webpage hangs, never ask "Why is the screen frozen?" Always open DevTools, inspect the wire, and ask: "Which API failed to deliver this data?"'
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
      type: 'victory-milestone',
      badge: '⚡ ARCHITECTURAL TRIUMPH UNLOCKED',
      rank: 'APPRENTICE WIRE INSPECTOR',
      title: 'From Page Viewer to API Thinker',
      summary: 'Akshay has transitioned from panicking over frozen browser screens to inspecting network sockets and writing Express APIs on port 3000. He understands client server decoupling, knows why req.body becomes undefined, and has seen why 14ms wire data outpaces heavy presentation glass.',
      powers: [
        'Bypassing Decorative Glass: Ability to inspect and query raw HTTP endpoints directly without waiting for heavy UI renders.',
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
          caption: 'Chapter 2 Preview: Automating wire checks and building regression gates.'
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
