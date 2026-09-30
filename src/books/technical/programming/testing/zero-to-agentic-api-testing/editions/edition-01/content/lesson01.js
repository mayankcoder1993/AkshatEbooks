import laptopImg from '../assets/illustrations/ch01-scene1-akshay-modern-laptop.jpg'
import browserTrapImg from '../assets/illustrations/ch01-scene1-akshay-chrome.jpg'
import terminalMonitorImg from '../assets/illustrations/ch01-scene2-panel1-modern-frame-terminal.jpg'
import networkCableImg from '../assets/illustrations/ch01-scene2-panel2-modern-network-cable.jpg'
import whiteboardWaiterImg from '../assets/illustrations/ch01-scene1-whiteboard-waiter-modern.jpg'
import codingPairImg from '../assets/illustrations/ch01-scene3-panel1-modern-coding.jpg'
import blooperCrashImg from '../assets/illustrations/ch01-scene3-panel2-modern-blooper.jpg'
import middlewareFixImg from '../assets/illustrations/ch01-scene3-panel3-modern-middleware-fix.jpg'
import serverSuccessImg from '../assets/illustrations/ch01-scene3-panel4-modern-server-success.jpg'
import chaiReviewImg from '../assets/illustrations/ch01-scene1-sameer-chai-modern.jpg'
import thaliTrapImg from '../assets/illustrations/ch01-scene4-panel2-modern-thali-trap.jpg'
import alarmMonitorImg from '../assets/illustrations/ch01-scene5-panel3-modern-alarm-monitor.jpg'

import flowSvg from '../assets/svgs/ch01-flow-http-transaction.svg'
import getMenuSvg from '../assets/svgs/ch01-workbench-get-menu.svg'
import postMenuSvg from '../assets/svgs/ch01-workbench-post-menu.svg'

export const lesson01 = {
  id: 'understanding-apis',
  icon: '⚡',
  title: 'Understanding APIs from First Principles',
  shortTitle: 'Understanding APIs',
  badge: 'CHAPTER 01 · FOUNDATIONS',
  subtitle: 'The restaurant analogy, the five core operations, building your own minimal server, and tasting REST, SOAP, and GraphQL.',
  tags: ['APIs', 'HTTP', 'Express', 'First Principles', 'CRUD', 'REST', 'SOAP', 'GraphQL'],

  blocks: [
    {
      type: 'chapter-opener',
      missionBadge: 'MISSION 1 · PHASE 1 OF 3: THE WIRE AND LOCAL CATALOG SERVER',
      missionTitle: 'Global Open Data and Web Wire Audit',
      missionCrisis: 'The 10:00 AM Semester Results Meltdown & The Presentation Glass Trap',
      missionContext: 'At 10:00 AM on results day, twelve thousand students hammer the portal, leaving Akshay staring at a blank screen with a frozen spinner. Principal architect Sameer arrives with cutting chai, bypassing the browser to fetch the marksheet in 18ms via a raw API call. Astounded, Akshay vows to build a dedicated results web app and gift it to the college.',
      missionObjective: 'Understand what an Application Programming Interface does on the network wire, build a runnable Express catalog server from scratch on port 3000, avoid the undefined body crash, and execute all five core CRUD operations.',
      targetSystems: 'Apex Campus Catalog Service · Port 3000 · HTTP Wire Traffic',
      phaseRoadmap: [
        {
          phase: 'Phase 1 of 3',
          title: 'The Wire and the Local Catalog Server',
          status: 'current',
          desc: 'Chapter 1: Assembling Express on port 3000 and auditing the five CRUD verbs across the network wire.'
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
      achieve: 'Understand what an Application Programming Interface actually does on the physical network wire. Distinguish in memory code libraries from network web services. Build a fully runnable Express server from scratch. Master the five essential CRUD verbs (POST, GET, PUT, PATCH, DELETE) and taste the architectural differences between REST, SOAP, and GraphQL.',
      how: 'Through sequential comic scenes, visual storyboards, interactive code workbenches, and war room diagnostic triage challenges following junior QA engineer Akshay and mentor Sameer.',
      carry: 'The mental model of the client server handshake, an intuitive grasp of HTTP status codes, and the confidence to inspect raw wire traffic rather than relying blindly on UI screens.'
    },
    {
      type: 'mission-hud',
      mission: 'Mission 1: Global Open Data and Web Wire Audit',
      phase: 'Phase 1 of 3: Foundations',
      rank: 'Apprentice Wire Inspector',
      status: 'ACTIVE'
    },

    // =========================================================================
    // TOPIC 1: THE INVISIBLE WIRE & THE WAITER MODEL
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'COMIC SCENE 1 OF 4',
      title: 'The 10:00 AM Results Meltdown and the Wire Awakening',
      intro: 'Morning at the Apex University engineering bay. Akshay starts his day running repetitive manual regression tests from a printed binder before a cafeteria screen standoff leads him to the server room.',
      panels: [
        {
          title: 'The Manual Routine',
          time: '09:15 AM',
          image: laptopImg,
          promptMeta: {
            title: 'Akshay at Manual Checklist Bay',
            aspectRatio: '16:9',
            positivePrompt: 'Madhubani Mithila folk art graphic novel illustration. Akshay, 23-year-old junior QA engineer in a tailored mustard-yellow cotton kurta with rolled sleeves, sitting at a teakwood desk in a sandstone heritage campus wing with Dravidian carved pillars and jali screen windows. Ticking rows on a printed regression checklist sheet with a pen. Laptop with a small scratch on the top-left lid open beside him. Sharp almond eyes with double-line black ink contours, flat vibrant color fills, pure white background (#FFFFFF), print-safe, high detail.',
            negativePrompt: 'Photorealistic, 3D, CGI, Western comic, anime, dark background, gradients, neon, Devanagari script.',
            targetAsset: 'assets/illustrations/ch01-scene1-akshay-modern-laptop.jpg'
          },
          scene: 'Akshay sits at his shared desk bay in the heritage engineering wing under warm morning sunlight, ticking the same regression checklist column he ticked yesterday.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'Forty one requests checked by hand. Forty one green ticks. Exactly the same checklist as yesterday.',
            replySpeaker: 'Colleague',
            replySpeech: 'That is the dream, no? Everything stays green.'
          },
          realization: 'Repetitive manual clicking gives an illusion of safety, but reveals nothing about why requests pass or fail.'
        },
        {
          title: 'The Presentation Glass Illusion',
          time: '11:45 AM',
          image: terminalMonitorImg,
          promptMeta: {
            title: 'The Presentation Glass Illusion',
            aspectRatio: '16:9',
            positivePrompt: 'Madhubani Mithila folk art illustration. Sameer, 40-year-old principal architect in indigo blue kurta and off-white Nehru waistcoat, adjusting wireframe glasses and holding a terracotta cutting chai cup, pointing to a dark terminal monitor. Akshay looks upward in realization. Sandstone heritage lab background, pure white background #FFFFFF, double-line ink contours, print-safe.',
            negativePrompt: 'Photorealistic, 3D, CGI, Western comic, manga, dark background, gradients, neon.',
            targetAsset: 'assets/illustrations/ch01-scene2-panel1-modern-frame-terminal.jpg'
          },
          scene: 'Sameer points to an open laptop showing a browser UI while gesturing toward a dark terminal monitor. Akshay looks upward with sudden realization.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'The cafeteria menu board is frozen on yesterday specials. Stop looking at the glass. The screen only reports what the conversation returned.',
            replySpeaker: 'Akshay',
            replySpeech: 'So a frozen screen is not automatically a screen defect?'
          },
          realization: 'The user interface is merely a presentation mirror; the ground truth of system state lives on the network wire.'
        },
        {
          title: 'Holding the Physical Wire',
          time: '12:12 PM',
          image: networkCableImg,
          promptMeta: {
            title: 'Holding the Physical Wire',
            aspectRatio: '16:9',
            positivePrompt: 'Madhubani Mithila folk art graphic novel panel. In the server lab, Sameer lifts a blue Category 6 Ethernet network cable plugged between workstations, pointing toward the server rack status lights. Akshay observing closely. Double-line black ink contours, pure white background #FFFFFF.',
            negativePrompt: 'Photorealistic, 3D, CGI, Western comic, anime, dark background, gradients.',
            targetAsset: 'assets/illustrations/ch01-scene2-panel2-modern-network-cable.jpg'
          },
          scene: 'In the lab, Sameer lifts a blue Category 6 network cable plugged between workstations, pointing toward the enterprise server rack.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'When you tap the order button on the tablet, does the catalog live inside that glass?',
            replySpeaker: 'Akshay',
            replySpeech: 'No, it lives across the university network on the backend database.'
          },
          realization: 'The wire does not lie. Remote calls take real time, cross physical wires, and can fail independently of the client.'
        },
        {
          title: 'The Whiteboard Waiter Model',
          time: '12:35 PM',
          image: whiteboardWaiterImg,
          promptMeta: {
            title: 'The Whiteboard Waiter Model',
            aspectRatio: '16:9',
            positivePrompt: 'Madhubani Mithila folk art illustration. Sameer standing beside a glass whiteboard sketching the restaurant waiter architecture: customer, waiter interface, and kitchen database. Akshay taking notes on laptop. Sandstone pillars, pure white background #FFFFFF, traditional floral border accents.',
            negativePrompt: 'Photorealistic, 3D, CGI, Western comic, manga, dark background, neon.',
            targetAsset: 'assets/illustrations/ch01-scene1-whiteboard-waiter-modern.jpg'
          },
          scene: 'Sameer stands beside a magnetic dry erase whiteboard sketching the architecture of the client server interaction while Akshay takes notes on his laptop.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Think of an API like a restaurant waiter. You are the customer. The database is the kitchen. You never enter the kitchen directly; you give your order to the waiter.',
            replySpeaker: 'Akshay',
            replySpeech: 'The waiter enforces what I can ask for and delivers the response back to my table!'
          },
          realization: 'An API is an agreed contract hiding backend implementation details behind clean request and response rules.'
        }
      ]
    },

    {
      type: 'flow',
      badge: 'ARCHITECTURAL TRANSACTION FLOW',
      title: 'Anatomy of an HTTP Request Across the Network Wire',
      intro: 'Trace how an API request leaves the client device, travels across the network wire, triggers server side execution, and returns a structured response payload.',
      svgScreen: flowSvg,
      steps: [
        {
          step: 1,
          name: 'Client Packaging',
          desc: 'The client formats an HTTP request containing method, target path, headers, and optional payload body.'
        },
        {
          step: 2,
          name: 'Network Serialization',
          desc: 'The operating system serializes the request into raw TCP IP byte packets and dispatches them across the wire.'
        },
        {
          step: 3,
          name: 'Port Listener Receipt',
          desc: 'The server event loop listening on port 3000 catches the incoming stream chunks and passes them to route handlers.'
        },
        {
          step: 4,
          name: 'Structured Response Return',
          desc: 'The server formats an HTTP response status code and JSON payload, returning it over the wire to the client.'
        }
      ]
    },

    // =========================================================================
    // TOPIC 2: THE BROWSER ADDRESS BAR LIMITATION
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'COMIC SCENE 2 OF 4',
      title: 'The Browser Address Bar Dilemma',
      intro: 'Akshay tries using Chrome to test API mutations, discovering firsthand why software teams rely on dedicated API workbenches.',
      panels: [
        {
          title: 'The Address Bar Trap',
          time: '01:15 PM',
          image: browserTrapImg,
          scene: 'Akshay sits clutching his hair in confusion before his open laptop with an empty browser screen.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'I typed http://localhost:3000/catalog into Chrome and saw data. But how do I send a POST body from this address bar?',
            replySpeaker: 'Sameer',
            replySpeech: 'You cannot. The browser address bar speaks exactly one dialect: simple GET requests with no body.'
          },
          realization: 'Web browsers are built for page navigation; they cannot easily test custom HTTP verbs, payloads, or authentication headers.'
        }
      ]
    },

    {
      type: 'triage',
      title: 'The Browser Address Bar Protocol Triage',
      scenario: 'Akshay wants to submit a new course record to the server. Why can he not use the Chrome address bar to do this?',
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
    // TOPIC 3: BUILDING THE SERVER FROM SCRATCH IN CHUNKS
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'COMIC SCENE 3 OF 4',
      title: 'Assembling the Other Side of the Wire',
      intro: 'Sameer invites Akshay to pair program at the server rack desk. Together they construct an Express API server from scratch and encounter the classic fresher blooper.',
      panels: [
        {
          title: 'Pair Programming at the Workstation',
          time: '02:00 PM',
          image: codingPairImg,
          promptMeta: {
            title: 'Pair Programming at Workstation',
            aspectRatio: '16:9',
            positivePrompt: 'Madhubani Mithila folk art illustration. Akshay and Sameer pair programming side by side at a teakwood workstation. Server.js code editor visible on screen. Sameer calmly gesturing with open palm, Akshay typing with focused determination. Pure white background #FFFFFF, double-line ink contours.',
            negativePrompt: 'Photorealistic, 3D, CGI, Western comic, manga, dark background, neon.',
            targetAsset: 'assets/illustrations/ch01-scene3-panel1-modern-coding.jpg'
          },
          scene: 'Akshay types code on his laptop with server.js visible on the screen, while Sameer stands right beside him watching the implementation.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Before you can test someone else code with confidence, you must hold both ends of the wire in your own hands. Open your IDE and create server.js.',
            replySpeaker: 'Akshay',
            replySpeech: 'Building the API server myself? Let us do it!'
          },
          realization: 'True API testing mastery begins when you understand the server mechanics that receive and process wire packets.'
        },
        {
          title: 'The Undefined Body Crash',
          time: '02:25 PM',
          image: blooperCrashImg,
          promptMeta: {
            title: 'The Undefined Body Crash',
            aspectRatio: '16:9',
            positivePrompt: 'Madhubani Mithila folk art comic panel. Akshay in comic distress scratching the back of his head with wide eyes as terminal monitor displays a red stack trace: TypeError Cannot read properties of undefined. Sameer with calm knowing half-smile holding chai. Pure white background #FFFFFF, expressive almond eyes.',
            negativePrompt: 'Photorealistic, 3D, CGI, Western comic, manga, dark background, neon.',
            targetAsset: 'assets/illustrations/ch01-scene3-panel2-modern-blooper.jpg'
          },
          scene: 'Akshay triggers a POST request to add a new course, but the terminal flashes a red error stack trace.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'TypeError: Cannot read properties of undefined! But I sent a valid JSON body with title and department in the workbench! Why is req.body undefined?',
            replySpeaker: 'Sameer',
            replySpeech: 'Welcome to Node.js stream mechanics, Akshay. Express does not parse incoming request bodies automatically out of the box.'
          },
          realization: 'HTTP request bodies arrive as raw TCP byte stream chunks; servers must explicitly buffer and parse them.'
        },
        {
          title: 'The Middleware Savior',
          time: '02:40 PM',
          image: middlewareFixImg,
          promptMeta: {
            title: 'The Middleware Savior',
            aspectRatio: '16:9',
            positivePrompt: 'Madhubani Mithila folk art illustration. Sameer pointing with stylus directly at app.use express.json code line on Akshay laptop screen. Akshay nodding in lightbulb realization moment. Sandstone jali background, pure white background #FFFFFF.',
            negativePrompt: 'Photorealistic, 3D, CGI, Western comic, manga, dark background, neon.',
            targetAsset: 'assets/illustrations/ch01-scene3-panel3-modern-middleware-fix.jpg'
          },
          scene: 'Sameer leans over, smiling calmly and pointing with his finger directly at the code on Akshay laptop screen.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Mount app.use(express.json()) at the top of your file. It intercepts the incoming stream, pieces the packet chunks together, and populates req.body.',
            replySpeaker: 'Akshay',
            replySpeech: 'Now I see it! Without that middleware, req.body remains completely unpopulated.'
          },
          realization: 'Middleware functions run sequentially between stream receipt and route handler execution.'
        },
        {
          title: 'Green Server Startup Triumph',
          time: '02:55 PM',
          image: serverSuccessImg,
          promptMeta: {
            title: 'Green Server Startup Triumph',
            aspectRatio: '16:9',
            positivePrompt: 'Madhubani Mithila folk art illustration. Akshay pumping fist in victory with wide smile as terminal monitor displays green text 201 Created and server listening on port 3000. Sameer offering affirmative nod. Pure white background #FFFFFF, festive Madhubani border motif.',
            negativePrompt: 'Photorealistic, 3D, CGI, Western comic, manga, dark background, neon.',
            targetAsset: 'assets/illustrations/ch01-scene3-panel4-modern-server-success.jpg'
          },
          scene: 'Akshay pumps his fist in victory as the screen glows with green startup success.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'Status 201 Created! The server received the payload, assembled the chunks, stored the course, and echoed the object back over the wire!',
            replySpeaker: 'Sameer',
            replySpeech: 'First working implementation verified. Now you own both sides of the conversation.'
          },
          realization: 'A successful POST request returns HTTP 201 Created along with the persisted record identity.'
        }
      ]
    },

    {
      type: 'chunked-code',
      badge: 'CHUNKS 1 AND 2 · SERVER BOOT AND GET ENDPOINT',
      title: 'Initializing Express and Building the Course Catalog',
      intro: 'Follow along step by step as we build our campus catalog server in digestible chunks.',
      chunks: [
        {
          label: 'Chunk 1: Express Initialization and Port 3000 Listener',
          filename: 'server.js',
          code: `const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(\`Catalog service listening on port \${PORT}\`);
});`,
          explanation: 'Imports the Express web framework, instantiates the application, and binds the event loop to TCP port 3000.',
          callouts: [
            { line: 'PORT = 3000', note: 'The physical TCP network door where incoming client packets knock.' },
            { line: 'app.listen()', note: 'Starts the asynchronous event loop waiting for incoming socket connections.' }
          ]
        },
        {
          label: 'Chunk 2: In Memory Catalog Store and GET /catalog Handler',
          filename: 'server.js',
          code: `const courses = [
  { id: 'CS101', title: 'Foundations of Computer Systems', dept: 'CS', credits: 4 },
  { id: 'CS204', title: 'Data Structures and Algorithms', dept: 'CS', credits: 4 },
  { id: 'EE201', title: 'Circuit Analysis', dept: 'EE', credits: 3 }
];

app.get('/catalog', (req, res) => {
  res.status(200).json(courses);
});`,
          explanation: 'Defines our university courses data structure and registers an HTTP GET route returning status 200 OK with serialized JSON.',
          callouts: [
            { line: 'app.get()', note: 'Matches incoming GET requests targeting path /catalog.' },
            { line: 'res.status(200).json()', note: 'Sets the HTTP response status code to 200 OK and serializes the array to JSON.' }
          ]
        }
      ]
    },

    {
      type: 'comic-workbench',
      badge: 'API WORKBENCH · GET CATALOG VERIFICATION',
      title: 'Verifying the Catalog Endpoint over the Wire',
      appType: 'api-workbench',
      svgScreen: getMenuSvg,
      dialogue: [
        {
          speaker: 'Sameer',
          role: 'Staff Architect',
          text: 'Notice the response panel. We received an HTTP 200 OK status code along with an array of four courses in JSON format.',
          pointer: 'Status 200 OK and response JSON'
        },
        {
          speaker: 'Akshay',
          role: 'Hero',
          text: 'The workbench formats the JSON with indentation, shows the response time, and confirms the wire contract!',
          pointer: 'Formatted JSON array'
        }
      ],
      workbench: {
        method: 'GET',
        url: 'http://localhost:3000/catalog',
        headers: {
          'Host': 'localhost:3000',
          'Accept': 'application/json'
        },
        responseStatus: '200 OK',
        responseTime: '12 ms',
        responseBody: `[
  { "id": "CS101", "title": "Foundations of Computer Systems", "dept": "CS", "credits": 4 },
  { "id": "CS204", "title": "Data Structures and Algorithms", "dept": "CS", "credits": 4 },
  { "id": "EE201", "title": "Circuit Analysis", "dept": "EE", "credits": 3 }
]`
      },
      breakdown: {
        input: 'GET /catalog dispatched from the API workbench.',
        explanation: 'The Express route handler reads the in memory array, serializes the items, and flushes headers and bytes across the socket.',
        output: 'HTTP status 200 OK and 3 items in valid JSON format.',
        trapAndFix: 'Senior Savior Trap: Assuming status 200 means data is fresh without checking cache headers. Golden Rule: Always verify payload contents and freshness headers.'
      }
    },

    {
      type: 'chunked-code',
      badge: 'CHUNKS 3 AND 4 · STREAM BUFFERING AND POST MUTATION',
      title: 'Mounting express.json Middleware and Handling POST Payloads',
      intro: 'Here is the critical fix that solves the undefined body crash and enables reliable POST mutations.',
      chunks: [
        {
          label: 'Chunk 3: Mounting express.json Stream Buffering Middleware',
          filename: 'server.js',
          code: `// Mandatory stream buffering middleware
app.use(express.json());`,
          explanation: 'Tells Express to buffer all incoming TCP readable stream packets until complete, then parse the serialized JSON body into req.body.',
          callouts: [
            { line: 'app.use(express.json())', note: 'Without this line, req.body is undefined on every POST, PUT, and PATCH request!' }
          ]
        },
        {
          label: 'Chunk 4: POST /catalog Course Creation Handler',
          filename: 'server.js',
          code: `app.post('/catalog', (req, res) => {
  const newCourse = req.body;
  if (!newCourse.title || !newCourse.dept) {
    return res.status(400).json({ error: 'Title and department are required' });
  }
  courses.push(newCourse);
  res.status(201).json(newCourse);
});`,
          explanation: 'Validates mandatory payload keys, appends the new course to the in memory store, and returns HTTP 201 Created.',
          callouts: [
            { line: 'res.status(400)', note: 'Defensive validation rejecting malformed payloads before database writes.' },
            { line: 'res.status(201)', note: 'Standard HTTP status code confirming successful resource creation.' }
          ]
        }
      ]
    },

    {
      type: 'comic-workbench',
      badge: 'API WORKBENCH · POST CREATION VERIFICATION',
      title: 'Creating a Course Entity and Verifying 201 Created',
      appType: 'api-workbench',
      svgScreen: postMenuSvg,
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Hero',
          text: 'I submitted the course payload with title and department, and the server responded with 201 Created and echoed the saved object!',
          pointer: 'POST /catalog 201 Created'
        },
        {
          speaker: 'Sameer',
          role: 'Staff Architect',
          text: 'Notice the HTTP 201 status code. A well designed API never returns a generic 200 on resource creation; it explicitly confirms creation with 201.',
          pointer: 'HTTP 201 Created semantics'
        }
      ],
      workbench: {
        method: 'POST',
        url: 'http://localhost:3000/catalog',
        headers: {
          'Host': 'localhost:3000',
          'Content-Type': 'application/json'
        },
        body: `{
  "id": "CS301",
  "title": "Database Engineering",
  "dept": "CS",
  "credits": 4
}`,
        responseStatus: '201 Created',
        responseTime: '15 ms',
        responseBody: `{
  "id": "CS301",
  "title": "Database Engineering",
  "dept": "CS",
  "credits": 4,
  "status": "Active"
}`
      },
      breakdown: {
        input: 'POST /catalog with JSON body declaring course CS301.',
        explanation: 'express.json middleware buffers readable stream data events until the end event fires, parses JSON, and passes control to the route handler.',
        output: 'Status 201 Created with persisted entity echoed back.',
        trapAndFix: 'Senior Savior Trap: Reading req.body in Express without express.json middleware. Golden Rule: An HTTP server is a streaming engine; always buffer byte streams before reading payloads.'
      }
    },

    // =========================================================================
    // TOPIC 4: THE FIVE CRUD VERBS & THE THALI TRAP
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'COMIC SCENE 4 OF 4',
      title: 'Five Moves and the Thali Overwrite Trap',
      intro: 'Sameer and Akshay review the five HTTP verbs over cutting chai before Akshay experiences the classic PUT versus PATCH overwrite accident.',
      panels: [
        {
          title: 'Reviewing the Five Moves over Chai',
          time: '03:15 PM',
          image: chaiReviewImg,
          promptMeta: {
            title: 'Reviewing Five Moves over Chai',
            aspectRatio: '16:9',
            positivePrompt: 'Madhubani Mithila folk art illustration. Sameer and Akshay sitting at teakwood workbench sharing steaming terracotta cups of cutting chai. Server racks humming in soft background. Whiteboard displays 5 verbs: POST GET PUT PATCH DELETE. Pure white background #FFFFFF.',
            negativePrompt: 'Photorealistic, 3D, CGI, Western comic, manga, dark background, neon.',
            targetAsset: 'assets/illustrations/ch01-scene1-sameer-chai-modern.jpg'
          },
          scene: 'Sameer offering cutting chai to Akshay at their shared workbench desk, server racks humming softly in the background.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Take a sip of chai. Now look at the five core moves of the web: POST to create, GET to read, PUT to replace, PATCH to modify partially, and DELETE to remove.',
            replySpeaker: 'Akshay',
            replySpeech: 'Five verbs to govern every interaction on the web. Let us test updating a course.'
          },
          realization: 'HTTP verbs have precise architectural contracts; choosing the wrong verb causes silent data bugs.'
        },
        {
          title: 'The Brass Thali Trap',
          time: '03:40 PM',
          image: thaliTrapImg,
          promptMeta: {
            title: 'The Brass Thali Trap',
            aspectRatio: '16:9',
            positivePrompt: 'Madhubani Mithila folk art comic panel. Sameer holds a gleaming brass thali dinner plate explaining complete replacement versus single bowl refill, smiling merrily. Akshay looks at screen in surprise realizing PUT wiped out missing fields. Pure white background #FFFFFF, double-line ink contours.',
            negativePrompt: 'Photorealistic, 3D, CGI, Western comic, manga, dark background, neon.',
            targetAsset: 'assets/illustrations/ch01-scene4-panel2-modern-thali-trap.jpg'
          },
          scene: 'Sameer holds an empty thali plate laughing merrily, while Akshay points in dismay at his laptop screen where course properties disappeared.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'Wait! I sent a PUT request with only status Inactive to update course CS101. But when I retrieved the record, the title, department, and credits were completely wiped out!',
            replySpeaker: 'Sameer',
            replySpeech: 'That is the PUT contract in action. Think of a brass thali plate. PUT swaps out the entire plate with whatever you brought. When you want to refill only one bowl, use PATCH!'
          },
          realization: 'PUT is complete resource replacement; PATCH is partial modification.'
        }
      ]
    },

    {
      type: 'chunked-code',
      badge: 'CHUNKS 5 AND 6 · PUT REPLACEMENT VERSUS PATCH DELTA',
      title: 'Implementing PUT Full Replacement and PATCH Partial Modification',
      intro: 'Study the route mechanics that separate a destructive full replacement from a safe delta update.',
      chunks: [
        {
          label: 'Chunk 5: PUT Full Resource Replacement Handler',
          filename: 'server.js',
          code: `// PUT: Complete Resource Replacement (The Thali Swap)
app.put('/catalog/:id', (req, res) => {
  const index = courses.findIndex(c => c.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Course not found' });
  }
  // Destructive full replacement: omitted fields vanish!
  courses[index] = { id: req.params.id, ...req.body };
  res.status(200).json(courses[index]);
});`,
          explanation: 'Replaces the entire record in memory. Any properties omitted in req.body are completely erased.',
          callouts: [
            { line: 'courses[index] = { ... }', note: 'Swaps out the entire object; unmentioned attributes disappear.' }
          ]
        },
        {
          label: 'Chunk 6: PATCH Partial Modification Handler',
          filename: 'server.js',
          code: `// PATCH: Partial Modification (Refilling One Bowl)
app.patch('/catalog/:id', (req, res) => {
  const course = courses.find(c => c.id === req.params.id);
  if (!course) {
    return res.status(404).json({ error: 'Course not found' });
  }
  // Safe selective merge: updates only supplied keys
  Object.assign(course, req.body);
  res.status(200).json(course);
});`,
          explanation: 'Applies an in place delta merge via Object.assign, updating supplied keys while preserving existing fields.',
          callouts: [
            { line: 'Object.assign(course, req.body)', note: 'Safely merges changes into the existing record without data loss.' }
          ]
        }
      ]
    },

    // =========================================================================
    // TOPIC 5: PROTOCOL TASTING (REST VS SOAP VS GRAPHQL)
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'COMIC WORKBENCH · PROTOCOL TASTING',
      title: 'Comparing REST, SOAP, and GraphQL on the Wire',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Sameer',
          role: 'Staff Architect',
          text: 'Notice that GraphQL always uses POST to a single endpoint. The query document inside the body specifies exactly what fields to return.',
          pointer: 'POST /graphql query payload'
        },
        {
          speaker: 'Akshay',
          role: 'Hero',
          text: 'In REST, I got all course properties whether I needed them or not. With GraphQL, I requested just code and title, and received exactly that!',
          pointer: 'Selective field response'
        }
      ],
      workbench: {
        method: 'POST',
        url: 'http://localhost:3000/graphql',
        headers: {
          'Host': 'localhost:3000',
          'Content-Type': 'application/json'
        },
        body: `{
  "query": "query { course(code: \\"CS101\\") { code title } }"
}`,
        responseStatus: '200 OK',
        responseTime: '22 ms',
        responseBody: `{
  "data": {
    "course": {
      "code": "CS101",
      "title": "Foundations of Computer Systems"
    }
  }
}`
      },
      breakdown: {
        input: 'POST /graphql with GraphQL query requesting only code and title attributes.',
        explanation: 'The GraphQL engine parses the query AST, evaluates field resolvers against the catalog database, and filters out unrequested fields.',
        output: '200 OK with custom data object containing only the requested fields.',
        trapAndFix: 'Senior Savior Trap: Expecting HTTP 404 or 500 status codes on GraphQL resolver failures. Golden Rule: GraphQL almost always returns HTTP 200 OK; you must inspect the errors array inside the JSON payload to detect failures.'
      }
    },

    {
      type: 'victory-milestone',
      title: 'Phase 1 Complete: First Principles Wire Mastered',
      summary: 'Akshay transitioned from passive checklist clicking to active wire auditing, constructing a runnable Express server on port 3000, mastering stream buffer middleware, and verifying all five CRUD operations across REST, SOAP, and GraphQL.',
      powers: [
        'Read raw HTTP wire packets without relying on frontend UI screens',
        'Assembled a runnable Node.js Express server on port 3000 from scratch',
        'Mounted express.json middleware to prevent undefined body crashes',
        'Executed all five core CRUD operations (POST, GET, PUT, PATCH, DELETE)',
        'Audited the wire differences between REST JSON, SOAP XML, and GraphQL'
      ],
      disastersPrevented: [
        'Prevented silent data erasure caused by confusing PUT full replacement with PATCH delta updates',
        'Eliminated false bug tickets filed against backend servers when client UIs freeze',
        'Avoided unhandled Node.js crashes by properly installing readable stream buffering middleware'
      ],
      warRoomTakeaway: 'The wire does not lie. When client screens freeze or dashboards misbehave, the seasoned engineer bypasses the glass, opens the API Testing Workbench, and reads the raw HTTP packets directly.'
    },

    // =========================================================================
    // TOPIC 6: THE CLIFFHANGER (TRANSIT SHUTTLE 500 CRASH)
    // =========================================================================
    {
      type: 'cliffhanger',
      badge: 'MISSION 1 · PHASE 2 PREVIEW',
      title: 'The Campus Transit Shuttle 500 Crash',
      text: 'Evening settles over Apex University. Akshay and Sameer celebrate their working catalog server with hot samosas when suddenly, an amber alert flashes across the campus operations monitor. The automated GPS transit shuttle tracking system has stopped broadcasting coordinates. Commuter shuttles across the university are navigating blind, and the triage dashboard displays a single ominous error: 500 Internal Server Error. The manual checklist era is officially over. Tomorrow morning, Akshay must step into the war room and track down the phantom crash.',
      cliffhangerPanel: {
        title: 'The Crimson Screen in the Operations Center',
        time: '07:45 PM',
        image: alarmMonitorImg,
        scene: 'Sameer and Akshay stand frozen in front of the giant university operations center monitor. A crimson banner pulses across the screen: 500 INTERNAL SERVER ERROR: TRANSIT SHUTTLE TELEMETRY OFFLINE.',
        dialogue: {
          speaker: 'Akshay',
          speech: 'Five hundred internal server error! Is that another undefined body bug?',
          replySpeaker: 'Sameer',
          replySpeech: 'Worse. A 500 means the server threw an unhandled exception and died on the wire. Pack your laptop, Akshay. We are heading into the war room.'
        },
        realization: 'A 200 series response confirms success; a 500 series response means the backend crashed under an uncaught failure.'
      }
    }
  ]
}
