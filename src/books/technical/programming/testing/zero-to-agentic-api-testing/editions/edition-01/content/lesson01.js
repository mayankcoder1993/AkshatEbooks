import admitCardLeakSvg from '../assets/svgs/ch01-comic-scene1-admitcard-leak.svg'
import portalSpinnerSvg from '../assets/svgs/ch01-comic-scene2-portal-spinner.svg'
import terminalRescueSvg from '../assets/svgs/ch01-comic-scene3-terminal-rescue.svg'
import waiterArchSvg from '../assets/svgs/ch01-comic-scene4-waiter-architecture.svg'
import port3000MiddlewareSvg from '../assets/svgs/ch01-comic-scene5-port3000-middleware.svg'
import protocolsThaliSvg from '../assets/svgs/ch01-comic-scene6-protocols-thali.svg'

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
      missionBadge: 'MISSION 1 : PHASE 1 OF 3 : THE WIRE AND LOCAL ADMIT CARD SERVER',
      missionTitle: 'Global Open Data and Web Wire Audit',
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
    {
      type: 'mission-hud',
      mission: 'Mission 1: Global Open Data and Web Wire Audit',
      phase: 'Phase 1 of 3: Foundations',
      rank: 'Apprentice Wire Inspector',
      status: 'ACTIVE'
    },

    // =========================================================================
    // SECTION 1: 18-STEP SYLLABUS PREREQUISITE MATRIX
    // =========================================================================
    {
      type: 'comparison',
      title: 'Curriculum Roadmap: 18 Foundational Steps to API Mastery',
      columns: ['Step', 'Topic Area', 'Pedagogical Role', 'Core Concept and Learning Objective'],
      rows: [
        ['Step 01', 'What is an API Really?', 'Foundational Concept', 'Beyond the acronym: An API is an agreed contract of permission between two systems.'],
        ['Step 02', 'Why APIs Exist', 'Foundational Concept', 'Decoupling frontend and backend, enabling cross-platform reuse across Web, iOS, and Android.'],
        ['Step 03', 'Client Server Architecture', 'Foundational Concept', 'Request and response handshake: Client asks, Server processes and answers.'],
        ['Step 04', 'The Restaurant Analogy', 'Intuitive Mental Model', 'Customer is Client, Waiter is API, Kitchen is Server. API carries without cooking or eating.'],
        ['Step 05', 'Web Page vs API Response', 'Core Distinction', 'Websites deliver heavy HTML, CSS, fonts, and images; APIs deliver pure, lightweight data payloads.'],
        ['Step 06', 'How Data Moves Across Networks', 'Technical Foundation', 'IP addresses as digital addresses, Ports as doorways, and TCP sockets ensuring reliable byte transfer.'],
        ['Step 07', 'HTTP from First Principles', 'Protocol Core', 'Application-level stateless protocol governing request methods, headers, and responses over the wire.'],
        ['Step 08', 'HTTP Methods and CRUD Mapping', 'Core Operations', 'POST (Create), GET (Read), PUT (Replace), PATCH (Partial Update), DELETE (Revoke).'],
        ['Step 09', 'Anatomy of an HTTP Request', 'Packet Anatomy', 'Verb, Endpoint URL, Headers (Context), Query Params (Filters), and Body Payload.'],
        ['Step 10', 'Anatomy of an HTTP Response', 'Packet Anatomy', 'Status Code, Status Message, Response Headers, and Structured Data Body.'],
        ['Step 11', 'HTTP Status Codes Decoded', 'Core Operations', '2xx Success (200, 201), 4xx Client Mistakes (400, 404, 422), 5xx Server Meltdowns (500, 504).'],
        ['Step 12', 'JSON as the Language of APIs', 'Data Interchange', 'Key-value pairs, types, case sensitivity, and why JSON replaced heavy XML for modern services.'],
        ['Step 13', 'Endpoints, Resources, and Routes', 'Architecture', 'Organizing around resources (/api/v1/admitcards), collection versus single entity (:id).'],
        ['Step 14', 'Why Servers Crash: The Undefined Body Trap', 'Advanced Core', 'TCP byte streams require body parsing middleware (express.json()) to populate req.body.'],
        ['Step 15', 'REST, SOAP, and GraphQL Compared', 'Architecture Showdown', 'Comparing all three architectures against one identical query: Admit Card for APX102.'],
        ['Step 16', 'The API Testing Mindset', 'Mental Shift', 'Shift from "Why is this page not loading?" to "Which API is failing to deliver this data?"'],
        ['Step 17', 'Inspecting Live APIs with DevTools', 'Practical Skill', 'Using Browser Network tab, filtering Fetch/XHR, and verifying payload latency in milliseconds.'],
        ['Step 18', 'Building an API First Thinking Model', 'Capstone Synthesis', 'Connecting every concept back to the campus crisis: reasoning with packets, not pixels.']
      ]
    },

    // =========================================================================
    // SECTION 2: COMPREHENSIVE TOPIC & GOTCHA CHECKLIST
    // =========================================================================
    {
      type: 'structured-breakdown',
      badge: 'PEDAGOGICAL CHECKLIST',
      title: 'Crucial Gotchas and Knowledge Traps Addressed in Chapter 1',
      intro: 'Essential technical boundaries and gotchas every beginner must master before testing APIs.',
      categories: [
        {
          category: 'First Principles',
          title: 'System Separation and The Wire',
          explanation: 'Understanding the clear boundary between user interfaces and data services.',
          points: [
            'An API is far more than an acronym: Treat it as a contract of permission between two distinct software systems.',
            'An API does not render buttons, gradients, animations, or fonts; it deals exclusively with data, rules, and access.',
            'The Presentation Glass Trap: The UI can fail or freeze completely while the backend API remains perfectly healthy.'
          ]
        },
        {
          category: 'Networking',
          title: 'TCP Byte Streams and Port Doorways',
          explanation: 'How machines identify services and move binary data across sockets.',
          points: [
            'IP addresses identify machines, while Ports identify specific service doorways (such as Port 3000 for Admit Cards).',
            'Bandwidth efficiency: Sending heavy HTML/CSS drains mobile bandwidth; sending lightweight JSON takes milliseconds.',
            'A server sees packets of structured bytes, not rendered graphical pixels.'
          ]
        },
        {
          category: 'HTTP Verbs',
          title: 'The Brass Thali Trap: PUT vs PATCH',
          explanation: 'The danger of confusing complete resource replacement with partial updates.',
          points: [
            'PUT is idempotent complete entity replacement: Omitting a field in PUT wipes it out on the server (The Brass Thali Trap).',
            'PATCH is partial delta modification: Perfect for updating a single attribute (such as changing just seatNumber).',
            'GET must never carry a sensitive payload body: It is strictly for cacheable, safe data retrieval.'
          ]
        },
        {
          category: 'Middleware',
          title: 'The Undefined Body Trap and Stream Parsing',
          explanation: 'Why incoming payloads fail without express.json() body parsing.',
          points: [
            'Incoming JSON arrives over TCP as fragmented raw byte chunks, not as pre-parsed JavaScript objects.',
            'Without app.use(express.json()), Express leaves req.body as undefined, causing runtime TypeError crashes.',
            'Middleware sits directly in the stream pipeline to intercept, buffer, parse, and attach JSON payloads.'
          ]
        },
        {
          category: 'Architecture',
          title: 'REST, SOAP, and GraphQL Compared',
          explanation: 'Choosing the right architectural paradigm for the problem.',
          points: [
            'REST treats Admit Cards as resources; SOAP wraps requests in strict XML envelopes; GraphQL queries only exact fields.',
            'Over-fetching vs Under-fetching: GraphQL gives precise field selectivity, preventing excess payload transfer.',
            'API First Mindset: Always inspect DevTools Network tab XHR/Fetch traffic before jumping to visual UI assumptions.'
          ]
        }
      ]
    },

    // =========================================================================
    // TOPIC 1: THE COMIC STORYBOARD ARC (ALL 6 SCENES)
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC : SIX SCENES',
      title: 'The Admit Card Meltdown and the Wire Awakening',
      intro: 'Follow student Akshay from a high-stakes quad sprint with a water-damaged hall ticket to the 14ms terminal rescue, the restaurant waiter model, building an Express API on port 3000, and mastering the wire.',
      panels: [
        {
          title: 'Scene 1: The Leaking Bottle and Smudged Hall Ticket',
          time: '08:30 AM',
          image: {
            src: admitCardLeakSvg,
            alt: 'Akshay racing across campus with leaking water bottle and smudged admit card',
            caption: 'Apex College Quad: A leaking water bottle obliterates Akshay seat number 20 minutes before board exams.'
          },
          embeddedBubbles: true,
          scene: 'Akshay sprints across the campus quad under the clock tower. A water bottle leak inside his backpack dissolves the blue ink over his Exam Hall and Seat Number. Gates lock in twenty minutes, threatening an automatic year back.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'Water leaked inside my bag! The blue ink over my Room and Seat number has dissolved! Gates lock in 20 minutes! Without seat details, I face an automatic year-back!',
            replySpeaker: 'Fellow Student',
            replySpeech: 'The Admit Card portal is frozen! Twelve thousand students hit it at once and it crashed!'
          },
          realization: 'A single point of presentation failure on a physical printed document leaves the student locked out of the exam.'
        },
        {
          title: 'Scene 2: The Portal Collapse and Sameer with Cutting Chai',
          time: '08:38 AM',
          image: {
            src: portalSpinnerSvg,
            alt: 'Akshay staring in distress at mobile phone showing 504 timeout while Sameer arrives with cutting chai',
            caption: 'College Corridor: The college portal collapses into an infinite spinner under 12,000 concurrent requests.'
          },
          embeddedBubbles: true,
          scene: 'Outside the exam hall, Akshay repeatedly refreshes portal.apex.edu on his phone, only to encounter an endless white spinner and 504 Gateway Timeout. Principal Systems Architect Sameer calmly walks in holding a steel glass of hot cutting chai.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Breathe, Akshay. Screaming at the browser will not bring back a single admit card. The webpage is decorative glass choking on heavy CSS, fonts, and images. Watch the wire.',
            replySpeaker: 'Akshay',
            replySpeech: 'I hit refresh twenty times on my phone! The screen is locked on an endless white spinner! How can twelve thousand students bring down the entire university infrastructure?!'
          },
          realization: 'The user interface is merely decorative glass; bloated presentation assets cause catastrophic timeouts under peak load.'
        },
        {
          title: 'Scene 3: The 14 Millisecond Terminal Rescue',
          time: '08:40 AM',
          image: {
            src: terminalRescueSvg,
            alt: 'Black terminal window showing raw HTTP curl request returning JSON in 14ms',
            caption: 'Corridor Bench: Sameer bypasses the browser and extracts Hall 302, Seat B-14 in 14 milliseconds.'
          },
          embeddedBubbles: true,
          scene: 'Sameer sits at a bench, opens a bare black terminal, and fires a direct HTTP request to /api/v1/admitcards/APX102. In fourteen milliseconds, pure structured JSON returns: Hall 302, Seat B-14. Akshay rushes into the exam in the nick of time.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'I did not open the website at all. I spoke directly to the backend over the raw wire. The webpage is decorative glass. The API carries the truth.',
            replySpeaker: 'Akshay',
            replySpeech: 'Fourteen milliseconds! Hall 302, Seat B-14! The browser was drowning in CSS and fonts, while the raw data was ready in an instant!'
          },
          realization: 'Raw wire requests bypass browser presentation overhead entirely, delivering instant truth in milliseconds.'
        },
        {
          title: 'Scene 4: The Whiteboard Restaurant and Exam Courier Model',
          time: '12:15 PM',
          image: {
            src: waiterArchSvg,
            alt: 'Whiteboard diagram showing Customer Client, Waiter API, and Kitchen Server',
            caption: 'Engineering Desk: Akshay returns after the exam to understand how the 14ms rescue worked.'
          },
          embeddedBubbles: true,
          scene: 'Meeting at the engineering desk post exam, Sameer sketches the three core columns of web architecture: Customer (Client), Waiter (API), and Kitchen (Server). Akshay takes notes in his journal with rising excitement.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'You cannot walk into the kitchen to cook your food. You call the Waiter. The Waiter takes your order, delivers it to the kitchen, and brings back the dish. The Waiter is the API.',
            replySpeaker: 'Akshay',
            replySpeech: 'So the Examination Cell is the Kitchen, my Admit Card is the dish, and the API is the trusted courier carrying only the exact payload!'
          },
          realization: 'An API does not create or consume data on its own; it acts as an agreed contract carrying structured requests and responses.'
        },
        {
          title: 'Scene 5: Port 3000 Pair Programming and the Undefined Body Bug',
          time: '01:00 PM',
          image: {
            src: port3000MiddlewareSvg,
            alt: 'Split terminal screen showing req.body is undefined error and express.json middleware fix',
            caption: 'Workstation Lab: Akshay and Sameer uncover the raw byte stream trap and mount body parsing middleware.'
          },
          embeddedBubbles: true,
          scene: 'Pair programming on port 3000, Akshay writes a POST route to issue Admit Cards but encounters req.body is undefined. Sameer explains TCP byte streams and mounts app.use(express.json()), turning red crashes into green 201 Created triumph.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Data arrives as raw bytes over the TCP wire. Express does not guess its format. One line, app.use(express.json()), unboxes the stream into req.body.',
            replySpeaker: 'Akshay',
            replySpeech: 'I sent a valid JSON body with student details, but console.log(req.body) returns undefined! Why did the server crash on a simple POST request?!'
          },
          realization: 'Network payloads travel as streams of bytes. Servers require explicit body parsing middleware to transform chunks into usable objects.'
        },
        {
          title: 'Scene 6: The Brass Thali Trap and Protocol Showdown',
          time: '02:15 PM',
          image: {
            src: protocolsThaliSvg,
            alt: 'Multi block diagram showing PUT vs PATCH Brass Thali and REST vs SOAP vs GraphQL comparison on APX102',
            caption: 'Engineering Bay: Sizing up REST, SOAP, and GraphQL on Admit Card APX102 and mastering PUT vs PATCH.'
          },
          embeddedBubbles: true,
          scene: 'Sameer illustrates the difference between PUT and PATCH using an Indian brass thali dinner plate, then benchmarks REST, SOAP, and GraphQL against the exact same Admit Card APX102 query.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'REST gives a clean resource plate, SOAP is an enterprise contract, and GraphQL lets you pick. Now you understand the wire. Next, we test it with intention!',
            replySpeaker: 'Akshay',
            replySpeech: 'I will never look at a broken website again and ask "Why is the page failing?" I will inspect the Network tab and find which API failed to deliver!'
          },
          realization: 'The transition from Page Viewer to API Thinker is complete. Understanding protocols and request methods unlocks professional API testing.'
        }
      ]
    },

    // =========================================================================
    // TOPIC 2: ARCHITECTURAL FLOW & PROTOCOL TRIAGE
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
    // TOPIC 3: BUILDING THE ADMIT CARD SERVER ON PORT 3000
    // =========================================================================
    {
      type: 'chunked-code',
      badge: 'CHUNKS 1 AND 2 : SERVER BOOT AND GET HANDLER',
      title: 'Initializing Express and Building the Admit Card Service',
      intro: 'Follow along step by step as we build our campus Admit Card service in digestible chunks.',
      chunks: [
        {
          label: 'Chunk 1: Express Initialization and Port 3000 Listener',
          filename: 'server.js',
          code: `const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(\`Admit Card service listening on port \${PORT}\`);
});`,
          explanation: 'Imports the Express web framework, instantiates the application, and binds the event loop to TCP port 3000.',
          callouts: [
            { line: 'PORT = 3000', note: 'The physical TCP network door where incoming client packets knock.' },
            { line: 'app.listen()', note: 'Starts the asynchronous event loop waiting for incoming socket connections.' }
          ]
        },
        {
          label: 'Chunk 2: In Memory Admit Card Store and GET /api/v1/admitcards/:id Handler',
          filename: 'server.js',
          code: `const admitCards = {
  'APX102': {
    status: 'CONFIRMED',
    regNo: 'APX102',
    studentName: 'Akshay',
    examCenter: 'Apex Main Hall',
    hallNumber: '302',
    seatNumber: 'B-14',
    examDate: '2026-10-01T09:00:00Z'
  }
};

app.get('/api/v1/admitcards/:id', (req, res) => {
  const card = admitCards[req.params.id];
  if (!card) {
    return res.status(404).json({ error: 'Admit Card not found' });
  }
  res.status(200).json(card);
});`,
          explanation: 'Declares the canonical in-memory student record and binds a GET route handler using the :id path parameter. If the record exists, it responds with HTTP 200 OK and clean JSON in milliseconds.',
          callouts: [
            { line: 'req.params.id', note: 'Extracts the path parameter APX102 from the incoming URL.' },
            { line: 'res.status(200)', note: 'Returns explicit HTTP 200 OK status code alongside the payload.' }
          ]
        }
      ]
    },

    {
      type: 'chunked-code',
      badge: 'CHUNKS 3 AND 4 : THE MIDDLEWARE FIX AND POST HANDLER',
      title: 'Mounting express.json and Issuing New Admit Cards',
      intro: 'Here we solve the classic req.body is undefined bug and handle POST requests to create new cards.',
      chunks: [
        {
          label: 'Chunk 3: Mounting Body Parsing Middleware',
          filename: 'server.js',
          code: `// CRITICAL: Mount body parsing middleware before routes!
app.use(express.json());`,
          explanation: 'Tells Express to buffer incoming TCP byte chunks, parse the payload as JSON, and assign the parsed object to req.body. Without this single line, req.body is undefined.',
          callouts: [
            { line: 'app.use(express.json())', note: 'The middleware savior that prevents TypeError crashes on all incoming POST, PUT, and PATCH bodies.' }
          ]
        },
        {
          label: 'Chunk 4: POST /api/v1/admitcards Issue Handler',
          filename: 'server.js',
          code: `app.post('/api/v1/admitcards', (req, res) => {
  const { regNo, studentName, hallNumber, seatNumber } = req.body;
  
  if (!regNo || !studentName) {
    return res.status(400).json({ error: 'regNo and studentName are required' });
  }

  admitCards[regNo] = {
    status: 'ISSUED',
    regNo,
    studentName,
    examCenter: 'Apex Main Hall',
    hallNumber: hallNumber || 'TBD',
    seatNumber: seatNumber || 'TBD',
    examDate: new Date().toISOString()
  };

  res.status(201).json(admitCards[regNo]);
});`,
          explanation: 'Reads the validated payload from req.body, stores the new Admit Card in the dictionary, and returns HTTP 201 Created with the persisted record.',
          callouts: [
            { line: 'res.status(201)', note: 'Industry standard HTTP 201 Created response indicating successful entity creation.' }
          ]
        }
      ]
    },

    {
      type: 'chunked-code',
      badge: 'CHUNKS 5 AND 6 : THE BRASS THALI TRAP AND DELETION',
      title: 'PUT vs PATCH and Revoking Admit Cards',
      intro: 'Understanding why PUT and PATCH are not interchangeable and how to remove resources with DELETE.',
      chunks: [
        {
          label: 'Chunk 5: PUT (Complete Replacement) vs PATCH (Partial Update)',
          filename: 'server.js',
          code: `// PUT: The Brass Thali complete replacement
app.put('/api/v1/admitcards/:id', (req, res) => {
  // Completely replaces the record. Omitted fields are lost!
  admitCards[req.params.id] = req.body;
  res.status(200).json(admitCards[req.params.id]);
});

// PATCH: Partial update (refilling only the katori)
app.patch('/api/v1/admitcards/:id', (req, res) => {
  if (!admitCards[req.params.id]) {
    return res.status(404).json({ error: 'Record not found' });
  }
  // Merges only the supplied fields (e.g. just seatNumber)
  Object.assign(admitCards[req.params.id], req.body);
  res.status(200).json(admitCards[req.params.id]);
});`,
          explanation: 'Demonstrates the crucial distinction between complete resource replacement (PUT) and partial attribute modification (PATCH). If you send only seatNumber with PUT, all other student details are wiped out!',
          callouts: [
            { line: 'PUT', note: 'Replaces the entire record. Any field omitted in the request body is lost.' },
            { line: 'PATCH', note: 'Safely mutates only specified keys, preserving existing student properties.' }
          ]
        },
        {
          label: 'Chunk 6: DELETE /api/v1/admitcards/:id Revocation Handler',
          filename: 'server.js',
          code: `app.delete('/api/v1/admitcards/:id', (req, res) => {
  if (!admitCards[req.params.id]) {
    return res.status(404).json({ error: 'Admit Card not found' });
  }
  delete admitCards[req.params.id];
  res.status(204).send();
});`,
          explanation: 'Removes the Admit Card from memory and returns HTTP 204 No Content, confirming the deletion without unnecessary body payload.',
          callouts: [
            { line: 'res.status(204)', note: '204 No Content confirms success while saving network bandwidth.' }
          ]
        }
      ]
    },

    // =========================================================================
    // TOPIC 4: INTERACTIVE API TESTING WORKBENCHES
    // =========================================================================
    {
      type: 'image',
      layout: 'stacked',
      badge: 'INTERACTIVE WORKBENCH : GET ADMIT CARD',
      title: 'Verifying GET /api/v1/admitcards/APX102 in 14ms',
      text: 'Observe the API Testing Workbench issuing a GET request directly across the local socket. The server responds with HTTP 200 OK and clean JSON in 14 milliseconds, completely bypassing browser rendering overhead.',
      src: getMenuSvg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/svgs/ch01-workbench-get-menu.svg',
      w: 720,
      h: 395,
      alt: 'API Testing Workbench showing GET request to /api/v1/admitcards/APX102 with 200 OK status and 14ms latency',
      caption: 'The Workbench: Fast, deterministic inspection of structured wire data without browser flakiness.',
      points: [
        'Method & URL: GET http://localhost:3000/api/v1/admitcards/APX102',
        'Response Status: HTTP 200 OK with latency under 15 milliseconds',
        'Data Payload: Pure structured student record with confirmed Hall 302 and Seat B-14'
      ]
    },

    {
      type: 'image',
      layout: 'stacked',
      badge: 'INTERACTIVE WORKBENCH : POST ISSUE CARD',
      title: 'Verifying POST /api/v1/admitcards with 201 Created',
      text: 'Here we forge an HTTP POST request carrying a JSON payload in the request body. With express.json() active, Express unboxes the stream and responds with HTTP 201 Created.',
      src: postMenuSvg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/svgs/ch01-workbench-post-menu.svg',
      w: 720,
      h: 255,
      alt: 'API Testing Workbench showing POST request to /api/v1/admitcards with 201 Created status and 18ms latency',
      caption: 'Issuing a new Admit Card: Validating body parsing middleware on port 3000.',
      points: [
        'Method & URL: POST http://localhost:3000/api/v1/admitcards',
        'Request Body: Raw JSON payload carrying student registration parameters',
        'Response Status: HTTP 201 Created confirming persistence on the server'
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
      title: 'Next Mission: Getting Started with Postman to Test APIs',
      text: 'Akshay has proven that data travels as packets across the wire. He knows how to build an Admit Card server on port 3000. But what happens when the college redeploys the service, or an accidental code push breaks the defensive validation? In Chapter 2, Akshay enters the API Testing Workbench, crafts automated assertions, and hunts down live defects before they ever reach students.',
      cliffhangerPanel: {
        title: 'The Upcoming Challenge',
        time: 'NEXT CHAPTER',
        image: {
          src: waiterArchSvg,
          alt: 'Preview of Chapter 2 testing workbench',
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
