import panel1Img from '../assets/illustrations/ch01-scene1-panel1.jpg'
import panel2Img from '../assets/illustrations/ch01-scene2-panel1-modern-frame-terminal.jpg'
import panel3Img from '../assets/illustrations/ch01-scene2-panel2-modern-network-cable.jpg'
import panel4Img from '../assets/illustrations/ch01-scene1-whiteboard-waiter-modern.jpg'
import panel5Img from '../assets/illustrations/ch01-scene3-panel3-modern-middleware-fix.jpg'
import panel6Img from '../assets/illustrations/ch01-scene4-panel2-modern-thali-trap.jpg'

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
          title: 'The Ink Dissolves on the Quad',
          time: '08:40 AM',
          image: {
            src: panel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch01-scene1-panel1.jpg',
            w: 1365,
            h: 768,
            alt: 'Akshay examining the smudged admit card sheet at his desk under Dravidian pillars and jali screen.',
            caption: 'Apex Campus Quad: The paper admit card with water soaked seat numbers 20 minutes before the board exam.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'The water bottle leaked right into my bag! The room and seat numbers are completely dissolved into blue smudge!',
            replySpeaker: 'Fellow Student',
            replySpeech: 'Gate closes in twenty minutes, Akshay! Try downloading the PDF again from the college portal!'
          },
          scene: 'Akshay sprints past the quad with twenty minutes to the exam, staring in horror as water soaks through his paper admit card, completely blurring his room and seat numbers.',
          realization: 'A physical paper printout is only as reliable as its last copy; digital data must be reachable in an emergency.'
        },
        {
          title: 'The White Screen Portal Spinner',
          time: '08:44 AM',
          image: {
            src: panel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch01-scene2-panel1-modern-frame-terminal.jpg',
            w: 1365,
            h: 768,
            alt: 'Sameer showing the laptop decorative glass choking on presentation bloat while pointing to terminal.',
            caption: 'Campus Corridor: Twelve thousand students crash the portal into an infinite white spinner.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'I have refreshed the portal eight times! The browser is completely frozen on a white screen spinner!',
            replySpeaker: 'Sameer',
            replySpeech: 'Twelve thousand students are hitting that server right now. The website is choking on its own heavy CSS, fonts, and images.'
          },
          scene: 'Akshay taps his mobile screen frantically under the arcade corridor, but the college admit card portal is trapped in an infinite spinning wheel.',
          realization: 'The user interface is merely decorative glass; bloated presentation assets easily choke servers during traffic spikes.'
        },
        {
          title: 'The 14 Millisecond Terminal Rescue',
          time: '08:46 AM',
          image: {
            src: panel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch01-scene2-panel2-modern-network-cable.jpg',
            w: 1365,
            h: 768,
            alt: 'Sameer holding network cable between two systems, explaining raw wire transport to Akshay.',
            caption: 'Terminal Console: Sameer extracts Hall 302, Seat B-14 over the raw wire in fourteen milliseconds.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'I did not open the browser at all. I spoke directly to the backend over the raw wire. GET /api/v1/admitcards/APX102 returned JSON in 14ms.',
            replySpeaker: 'Akshay',
            replySpeech: 'Fourteen milliseconds! Hall 302, Seat B-14! The browser was drowning in CSS and fonts, while the raw data was ready in an instant!'
          },
          scene: 'Sameer opens a bare black terminal, fires a direct wire request, and extracts the exact hall and seat number in 14 milliseconds, getting Akshay into the exam.',
          realization: 'Raw wire requests bypass browser presentation overhead entirely, delivering instant truth in milliseconds.'
        },
        {
          title: 'The Whiteboard Restaurant Model',
          time: '12:15 PM',
          image: {
            src: panel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch01-scene1-whiteboard-waiter-modern.jpg',
            w: 1365,
            h: 768,
            alt: 'Sameer sketching the restaurant waiter analogy on the glass whiteboard for Akshay.',
            caption: 'Whiteboard Architecture: The Waiter (API) carries requests to the kitchen (server) and dishes to the table (client).'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'Think of an API as the waiter in a South Indian restaurant. You are the customer at the table. The chef is the server database. The waiter takes your order and brings your dosa without eating the food or cooking in the kitchen.',
            replySpeaker: 'Akshay',
            replySpeech: 'So the Examination Cell is the Kitchen, my Admit Card is the dish, and the API is the trusted courier carrying only the exact payload!'
          },
          scene: 'Hours after surviving the board exam, Akshay sits at Sameer research desk as Sameer maps the restaurant client server model on the whiteboard.',
          realization: 'An API is an agreed courier contract: it accepts client parameters, delegates execution to backend resources, and delivers results without owning storage.'
        },
        {
          title: 'Pair Programming Port 3000 Server',
          time: '01:10 PM',
          image: {
            src: panel5Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch01-scene3-panel3-modern-middleware-fix.jpg',
            w: 1365,
            h: 768,
            alt: 'Sameer leaning over Akshay laptop pointing to middleware fix while Akshay codes on port 3000.',
            caption: 'Pair Programming: Installing express.json middleware to parse incoming byte streams into req.body objects.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'I started our server on port 3000 and sent a POST body, but req.body is undefined! The server received the request but cannot read the data!',
            replySpeaker: 'Sameer',
            replySpeech: 'HTTP request bodies arrive as raw streaming network byte chunks. Without express.json() middleware, Express never assembles those chunks into a JavaScript object.'
          },
          scene: 'Akshay and Sameer pair program on port 3000. When Akshay encounters the undefined body byte stream bug, Sameer mounts the JSON middleware.',
          realization: 'HTTP request bodies arrive as raw streaming network byte chunks; middleware must parse JSON streams before route handlers can inspect properties.'
        },
        {
          title: 'The Brass Thali Protocol Feast',
          time: '02:30 PM',
          image: {
            src: panel6Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch01-scene4-panel2-modern-thali-trap.jpg',
            w: 1365,
            h: 768,
            alt: 'Sameer holding an empty brass thali plate laughing warmly while Akshay points at the screen in comic shock.',
            caption: 'The Protocol Feast: Understanding the Brass Thali PUT versus PATCH trap and comparing REST, SOAP, and GraphQL.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'Remember the Brass Thali rule: PUT replaces the entire thali. If you send only sambar, the waiter throws away the rice and rasam! PATCH tops up only the sambar katori.',
            replySpeaker: 'Akshay',
            replySpeech: 'And SOAP is a sealed brass courier dabba with strict XML seals, while GraphQL lets me order exact katoris without taking the whole meal!'
          },
          scene: 'Sameer and Akshay conclude their architectural briefing by testing all five CRUD operations and comparing REST, SOAP, and GraphQL on APX102.',
          realization: 'Protocol architectures reflect communication trade-offs: REST prioritizes standard verbs, SOAP enforces strict typed envelopes, and GraphQL optimizes client query precision.'
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
          src: panel4Img,
          file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch01-scene1-whiteboard-waiter-modern.jpg',
          w: 1365,
          h: 768,
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
