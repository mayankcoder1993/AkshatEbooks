import restaurantImg from '../assets/api-concept-restaurant.jpg'
import bridgeImg from '../assets/frontend-backend-api-bridge.jpg'
import matrixImg from '../assets/api-architectures-matrix.jpg'
import anatomyImg from '../assets/http-wire-anatomy.jpg'
import serverAnatomyImg from '../assets/express-server-code-anatomy.jpg'
import warRoomImg from '../assets/apex-campus-crisis-war-room.jpg'
import postOpImg from '../assets/post-operation-wire-flow.jpg'
import getOpImg from '../assets/get-operation-wire-flow.jpg'
import putPatchDeleteImg from '../assets/put-patch-delete-comparison.jpg'

import ch01Scene1Img from '../assets/illustrations/ch01-scene1-panel1.jpg'
import ch01Scene2Img from '../assets/illustrations/ch01-scene2-panel2.jpg'
import ch01Scene3Img from '../assets/illustrations/ch01-scene3-panel3.jpg'
import ch01Scene4Img from '../assets/illustrations/ch01-scene4-panel4.jpg'

import akshayRefImg from '../assets/character-reference/akshay-neutral-front.jpg'
import sameerRefImg from '../assets/character-reference/sameer-neutral-front.jpg'

import warRoomPanel1Img from '../assets/war-room-panel-1-the-crisis.jpg'
import warRoomPanel2Img from '../assets/war-room-panel-2-the-standoff.jpg'
import warRoomPanel3Img from '../assets/war-room-panel-3-invisible-wire.jpg'
import warRoomPanel4Img from '../assets/war-room-panel-4-first-principles.jpg'

export const lesson01 = {
  id: 'understanding-apis',
  icon: '',
  title: 'Understanding APIs from First Principles',
  shortTitle: 'Understanding APIs',
  subtitle: 'The restaurant analogy, the five core operations, building your own minimal server, and tasting REST, SOAP, and GraphQL.',
  tags: ['APIs', 'Client Server', 'JSON', 'REST', 'Fundamentals', 'Architecture'],
  blocks: [
    {
      type: 'chapter-opener',
      missionBadge: 'MISSION 1 · PHASE 1 OF 3: WIRE FOUNDATIONS AND FIRST PRINCIPLES',
      missionTitle: 'Global Open Data and Web Wire Audit',
      missionCrisis: 'The Apex Campus Launch Crisis: When the Frontend Lost Its Voice',
      missionContext: 'On the eve of university orientation, the student mobile application failed to display campus data. The triage war room discovered a silent disconnect between client UI code and backend services. To resolve the crisis and establish lasting quality gates, we must inspect the wire from first principles, construct a minimal server, and audit every core HTTP operation.',
      missionObjective: 'Build a runnable server from scratch, execute all five CRUD operations, and verify payload contracts across REST, SOAP, and GraphQL.',
      targetSystems: 'Node.js Express Catalog Service · Port 3000 · Public Open Data Endpoints',
      missionImage: {
        src: warRoomImg,
        file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
        w: 1408,
        h: 768,
        alt: 'The Apex Campus war room showing engineering command screens and live wire diagnostics.',
        caption: 'The Apex Campus War Room: When the frontend loses its voice, truth is found on the wire.',
      },
      phaseRoadmap: [
        {
          phase: 'Phase 1 of 3',
          title: 'Wire Foundations and Minimal Server',
          status: 'active',
          desc: 'Chapter 1: Assembling server.js from scratch, testing the 5 operations, and understanding HTTP wire basics.'
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
      how: 'Through four interconnected comic scenes, visual storyboards, interactive code workbenches, and war room diagnostic triage challenges following junior QA engineer Akshay and mentor Sameer.',
      carry: 'The mental model of the client server handshake, an intuitive grasp of HTTP status codes, and the confidence to inspect raw wire traffic rather than relying blindly on UI screens.'
    },
    {
      type: 'mission-hud',
      mission: 'Mission 1: Global Open Data and Web Wire Audit',
      phase: 'Phase 1 of 3: Foundations',
      rank: 'Apprentice Wire Inspector',
      status: 'ACTIVE'
    },
    {
      type: 'storyboard',
      badge: 'COMIC SCENE 1 OF 4',
      title: 'The Checklist Kingdom',
      intro: 'Morning at the Apex University engineering bay. Akshay starts his day running repetitive manual regression tests from a printed binder.',
      panels: [
        {
          title: 'The Manual Routine',
          time: '09:15 AM',
          image: ch01Scene1Img,
          scene: 'Akshay sits at his slim laptop workstation under warm sunlight, methodically checking green boxes on a printed regression sheet.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'Forty one requests checked by hand. Forty one green rows. Exactly the same checklist as yesterday.'
          },
          realization: 'Repetitive manual clicking gives an illusion of safety, but reveals nothing about why requests pass or fail.'
        },
        {
          title: 'The Mentor Arrives',
          time: '09:30 AM',
          image: sameerRefImg,
          scene: 'Sameer walks into the bay carrying two steaming glasses of cutting chai, stopping behind Akshay desk.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Checking boxes on paper again, Akshay? Tell me: what did that last checkmark actually test on the physical wire?',
            replySpeaker: 'Akshay',
            replySpeech: 'The screen showed the course catalog without errors, so the feature works as intended.'
          },
          realization: 'A green user interface tells you that pixels rendered, not that your backend data contracts are solid.'
        },
        {
          title: 'The Browser Address Bar Trap',
          time: '09:42 AM',
          image: akshayRefImg,
          scene: 'Akshay types a URL into his browser address bar to show Sameer that the catalog endpoint responds with text.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'Look, I paste http://localhost:3000/courses right into the browser bar and press enter. It loads data instantly.',
            replySpeaker: 'Sameer',
            replySpeech: 'Now use that address bar to create a new course. Or update a tuition fee. Or send an authorization bearer token.'
          },
          realization: 'Web browsers only issue simple GET requests from their address bar; modern distributed systems require structured verbs and payloads.'
        },
        {
          title: 'The Restaurant Mental Model',
          time: '10:05 AM',
          image: restaurantImg,
          scene: 'Sameer sketches a three part diagram on the dry erase whiteboard: a customer at a table, a waiter holding an order pad, and a kitchen behind closed doors.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'You are the customer. The database is the kitchen. You never walk into the kitchen to grab ingredients. You speak to the waiter.',
            replySpeaker: 'Akshay',
            replySpeech: 'And the API is the waiter! It takes my structured request, carries it back, and returns the response.'
          },
          realization: 'An API acts as a formal messenger enforcing access boundaries between consumers and backends.'
        }
      ]
    },
    {
      type: 'triage',
      title: 'Browser Address Bar Diagnostic Triage',
      scenario: 'Akshay attempts to test a new student registration feature by pasting the endpoint URL into his web browser address bar. The feature fails to create a record. What is the fundamental technical limitation of the browser address bar?',
      options: [
        'The browser address bar can only trigger HTTP GET requests and cannot carry an HTTP POST body payload or custom headers',
        'The browser address bar encrypts all outgoing text, preventing the backend from reading plain JSON objects',
        'The browser address bar refuses to communicate with local development servers running on localhost'
      ],
      answerIndex: 0,
      debrief: 'Tactical Triumph: The browser address bar speaks exactly one dialect: simple HTTP GET navigation without request body payloads or custom authorization headers. Creating resources requires an HTTP POST request carrying a serialized JSON payload, which necessitates a dedicated API testing workbench.',
      traps: [
        'Tactical Triumph: The browser address bar speaks exactly one dialect: simple HTTP GET navigation without request body payloads or custom authorization headers. Creating resources requires an HTTP POST request carrying a serialized JSON payload, which necessitates a dedicated API testing workbench.',
        'Diagnostic Trap: Browsers do not encrypt request text unilaterally; encryption depends on the transport protocol (HTTPS vs HTTP).',
        'Diagnostic Trap: Browsers communicate seamlessly with localhost. The restriction is HTTP verb capability, not local networking.'
      ]
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'ARCHITECTURAL BLUEPRINT',
      title: 'The Frontend to Backend API Bridge: Separating UI from Persistence',
      text: 'Modern applications separate presentation from business data. The user interface runs on phones, laptops, and smart tablets, while databases run on secured server clusters. APIs form the structured contract layer connecting these distinct tiers over HTTP.',
      src: bridgeImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/frontend-backend-api-bridge.jpg',
      w: 1408,
      h: 768,
      alt: 'System architecture diagram showing Frontend Client Tier, API Gateway Contract Layer, and Backend Service Tier connected via HTTP.',
      caption: 'The API Bridge: Decoupling client interfaces from backend persistence through standardized HTTP contracts.',
      points: [
        'Client Presentation Layer: Mobile applications and browsers that render user interfaces but store zero durable data.',
        'API Contract Layer: Standardized HTTP endpoints exposing predictable paths, methods, and JSON payloads.',
        'Persistence Layer: Relational databases, cache clusters, and background processors executing business transactions.'
      ]
    },
    {
      type: 'storyboard',
      badge: 'COMIC SCENE 2 OF 4',
      title: 'The Cafeteria Crisis',
      intro: 'Lunchtime at the university cafeteria. The digital order tablet is frozen, and Akshay learns why UI screens cannot be trusted during outages.',
      panels: [
        {
          title: 'The Standoff at the Screen',
          time: '12:04 PM',
          image: warRoomPanel2Img,
          scene: 'A long line of hungry students forms behind the order kiosk. Akshay repeatedly taps the tablet screen, hoping the menu will reappear.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'The tablet screen is completely frozen on yesterday menu. I restarted the kiosk app twice, but nothing changes!'
          },
          realization: 'Restarting a user interface does nothing when the underlying backend service is unreachable or broken.'
        },
        {
          title: 'Holding the Physical Wire',
          time: '12:12 PM',
          image: ch01Scene2Img,
          scene: 'Sameer steps forward, reaches beneath the kiosk counter, and points to a blue network cable plugged into the wall terminal.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Stop tapping the glass, Akshay. Does the menu live inside that screen, or does it live across this blue wire?',
            replySpeaker: 'Akshay',
            replySpeech: 'It lives in the campus dining database across the network. The tablet just displays what the network returns.'
          },
          realization: 'The user interface is merely a presentation mirror; the ground truth of system state lives on the network wire.'
        },
        {
          title: 'Deconstructing the HTTP Packet',
          time: '12:25 PM',
          image: anatomyImg,
          scene: 'Sameer draws an open envelope on his notepad, labeling four distinct compartments: Method, Path, Headers, and Body.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Every request travelling this wire is a postcard in an envelope. Method and Path say what to do. Headers provide context. Body carries data.',
            replySpeaker: 'Akshay',
            replySpeech: 'So when the kiosk queries the menu, it sends GET /menu HTTP/1.1 with accept headers, expecting a JSON list in return.'
          },
          realization: 'HTTP transactions are plain, structured text messages composed of request lines, headers, and payloads.'
        },
        {
          title: 'Preparing for First Principles',
          time: '12:40 PM',
          image: warRoomPanel4Img,
          scene: 'Akshay rolls up his sleeves with a determined expression, opening his terminal and API Testing Workbench.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'I want to see the raw conversation. How do I inspect the packets without the kiosk UI getting in the way?',
            replySpeaker: 'Sameer',
            replySpeech: 'By sending the requests yourself using an API Testing Workbench, and then building the server that answers them.'
          },
          realization: 'To master API engineering, you must inspect the wire directly without client UI distortions.'
        }
      ]
    },
    {
      type: 'flow',
      input: ['Client Request', 'GET /courses HTTP/1.1 with Host and Accept headers'],
      process: ['Express Route Handler', 'Query catalog store in RAM and serialize JSON payload'],
      output: ['Wire Response', '200 OK with Content-Type application/json array']
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'CORE CONCEPT',
      title: 'The Restaurant Analogy: Customer, Waiter API, and Kitchen Backend',
      text: 'To understand APIs from first principles, imagine a dining room. The customer cannot enter the kitchen to inspect raw pots or cook food directly. The waiter takes the customer order, delivers it to the kitchen in standard terms, and returns with the finished meal.',
      src: restaurantImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-concept-restaurant.jpg',
      w: 1408,
      h: 768,
      alt: 'Pedagogical diagram showing Customer (Client UI), Waiter (API Interface), and Kitchen (Backend Database).',
      caption: 'The Restaurant Mental Model: APIs act as protocol waiters facilitating secure, structured service exchange.',
      points: [
        'Customer (Client UI): Requests items from the menu without needing to know kitchen recipes or refrigerator organization.',
        'Waiter (The API): Delivers requests in an agreed protocol format and returns results or error notifications.',
        'Kitchen (Backend Database): Prepares data, applies business logic rules, and maintains durable state.'
      ]
    },
    {
      type: 'comic-workbench',
      badge: 'COMIC WORKBENCH · WIRE AUDIT',
      title: 'Auditing the Menu GET Wire Transaction',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Sameer',
          role: 'Staff Architect',
          text: 'Notice the response panel. We received an HTTP 200 OK status code along with an array of four courses in JSON format.',
          pointer: 'Status 200 OK'
        },
        {
          speaker: 'Akshay',
          role: 'Hero',
          text: 'The entire menu arrived in 18 milliseconds! No HTML wrappers or styling buttons, just pure machine readable key value pairs.',
          pointer: 'JSON response body'
        }
      ],
      workbench: {
        method: 'GET',
        url: 'http://localhost:3000/courses',
        headers: {
          'Host': 'localhost:3000',
          'Accept': 'application/json',
          'User-Agent': 'API-Testing-Workbench/1.0'
        },
        responseStatus: '200 OK',
        responseTime: '18 ms',
        responseBody: `[
  {
    "code": "CS101",
    "title": "Foundations of Computer Systems",
    "department": "Computer Science",
    "credits": 4
  },
  {
    "code": "CS204",
    "title": "Data Structures and Algorithms",
    "department": "Computer Science",
    "credits": 4
  }
]`
      },
      breakdown: {
        input: 'GET http://localhost:3000/courses sent from workbench with Accept application/json.',
        explanation: 'The request travels over TCP port 3000. Express matches the path to app.get(/courses) and flushes the courses array serialized as JSON.',
        output: 'HTTP status 200 OK with two course objects in an array payload.',
        trapAndFix: 'Senior Savior Trap: Believing a missing screen means a broken server. Golden Rule: The wire does not lie; always check HTTP status codes and wire responses before blaming backend services.'
      }
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'PROTOCOL DECONSTRUCTION',
      title: 'Anatomy of an HTTP Wire Transaction: Request Line, Headers, and Payloads',
      text: 'Every communication over the web is broken down into discrete HTTP transactions consisting of request metadata, entity headers, and optional payload bodies.',
      src: anatomyImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/http-wire-anatomy.jpg',
      w: 1408,
      h: 768,
      alt: 'Diagram breaking down Request Line, Request Headers, Request Body, Response Status, Response Headers, and Response Body.',
      caption: 'HTTP Transaction Anatomy: Complete wire breakdown of request and response packet structures.',
      points: [
        'Request Line: Method verb (GET, POST), target path resource (/courses), and protocol version (HTTP/1.1).',
        'Headers Section: Metadata providing encoding rules, authorization tokens, content types, and caching policies.',
        'Body Payload: Structured text (typically JSON) carrying operational data from client to server or server to client.',
        'Response Status Line: Three digit numeric code confirming success (200), client error (400), or server fault (500).'
      ]
    },
    {
      type: 'battle-scar',
      title: 'The First Law of Distributed Objects',
      context: 'Martin Fowler formulated the First Law of Distributed Object Design: Do not distribute your objects. Engineers often assume remote network calls behave like local function calls. A local function call in memory executes in nanoseconds and never suffers packet drops. A network call crosses physical routers, switches, and serialization boundaries where latency multiplies by ten thousand and connections can fail at any instant.',
      takeaway: 'Never assume the server is in the same room as your data. Treat every network transaction as a fallible conversation requiring explicit status checks, timeouts, and defensive contracts.',
      metric: 'PRODUCTION ARCHITECTURE LAW'
    },
    {
      type: 'storyboard',
      badge: 'COMIC SCENE 3 OF 4',
      title: 'Building the Minimal Server',
      intro: 'In Sameer quiet corner lab, Sameer guides Akshay to construct a runnable Express catalog server from first principles.',
      panels: [
        {
          title: 'The Two Ends of the Wire',
          time: '02:15 PM',
          image: warRoomPanel3Img,
          scene: 'Sameer pulls up a split screen on his workstation monitor. On the left is an empty code editor file named server.js; on the right is a dark terminal prompt.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Before you can test someone else code, you must hold both ends of the wire in your own hands.',
            replySpeaker: 'Akshay',
            replySpeech: 'You mean build the server myself? I thought QA engineers only test existing systems.'
          },
          realization: 'True API mastery begins when you understand the server mechanics that receive and process wire packets.'
        },
        {
          title: 'Assembling Express on Port 3000',
          time: '02:30 PM',
          image: serverAnatomyImg,
          scene: 'Akshay types the initial Express setup lines into server.js under Sameer watchful eye.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'We import express, create the app instance, and listen on port 3000.',
            replySpeaker: 'Sameer',
            replySpeech: 'Good. Now add the courses array so our server has data to share.'
          },
          realization: 'An API server is fundamentally a loop listening on a network port, matching URL patterns to functions.'
        },
        {
          title: 'The Undefined Body Crash',
          time: '02:48 PM',
          image: ch01Scene3Img,
          scene: 'Akshay triggers a POST request to add a new course, but the Node console flashes a red stack trace.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'TypeError: Cannot read properties of undefined! But I sent a valid JSON body!',
            replySpeaker: 'Sameer',
            replySpeech: 'Look closely at your middleware pipeline. Did you tell Express how to read JSON text from the wire?'
          },
          realization: 'HTTP request bodies arrive as raw TCP binary streams; middleware must buffer and parse them into objects.'
        },
        {
          title: 'Mounting express.json Middleware',
          time: '03:05 PM',
          image: warRoomPanel4Img,
          scene: 'Akshay adds app.use(express.json()) at the top of server.js and restarts the process. The terminal confirms healthy startup.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'It worked! req.body now contains the parsed course object and returns 201 Created.',
            replySpeaker: 'Sameer',
            replySpeech: 'Remember that moment. Half of all junior API bugs are missing stream parsers.'
          },
          realization: 'Middleware sits directly in the request path, transforming raw wire bytes before route handlers run.'
        }
      ]
    },
    {
      type: 'blueprint',
      purpose: 'Spin up a minimal Express HTTP catalog service with stream middleware and full CRUD routes.',
      input: 'HTTP requests arriving over TCP port 3000 carrying methods, paths, headers, and JSON bodies.',
      processing: 'Express routes requests, express.json() buffers binary socket chunks into req.body, and handlers mutate catalog array in RAM.',
      output: 'HTTP status codes (200 OK, 201 Created) and JSON payloads dispatched back across socket.',
      files: ['server.js']
    },
    {
      type: 'code',
      filename: 'server.js',
      lines: [
        'const express = require("express");',
        'const app = express();',
        'const PORT = 3000;',
        '',
        '// Mandatory stream buffer middleware: parses incoming JSON bodies',
        'app.use(express.json());',
        '',
        '// In memory course catalog array',
        'let courses = [',
        '  { code: "CS101", title: "Foundations of Computer Systems", department: "Computer Science", credits: 4 },',
        '  { code: "CS204", title: "Data Structures and Algorithms", department: "Computer Science", credits: 4 }',
        '];',
        '',
        '// 1. GET /courses: Read all catalog records',
        'app.get("/courses", (req, res) => {',
        '  res.status(200).json({ total: courses.length, courses });',
        '});',
        '',
        '// 2. POST /courses: Create new course record',
        'app.post("/courses", (req, res) => {',
        '  const newCourse = req.body;',
        '  courses.push(newCourse);',
        '  res.status(201).json({ message: "Course successfully registered", course: newCourse });',
        '});',
        '',
        '// 3. PUT /courses/:code: Complete document replacement',
        'app.put("/courses/:code", (req, res) => {',
        '  const idx = courses.findIndex(c => c.code === req.params.code);',
        '  if (idx === -1) return res.status(404).json({ error: "Course not found" });',
        '  courses[idx] = req.body;',
        '  res.status(200).json({ message: "Course replaced", course: courses[idx] });',
        '});',
        '',
        '// 4. PATCH /courses/:code: Surgical delta attribute update',
        'app.patch("/courses/:code", (req, res) => {',
        '  const course = courses.find(c => c.code === req.params.code);',
        '  if (!course) return res.status(404).json({ error: "Course not found" });',
        '  Object.assign(course, req.body);',
        '  res.status(200).json({ message: "Course updated", course });',
        '});',
        '',
        '// 5. DELETE /courses/:code: Remove course from database',
        'app.delete("/courses/:code", (req, res) => {',
        '  courses = courses.filter(c => c.code !== req.params.code);',
        '  res.status(200).json({ message: "Course deleted successfully" });',
        '});',
        '',
        'app.listen(PORT, () => {',
        '  console.log(`Apex Campus Catalog Service live on port ${PORT}`);',
        '});'
      ]
    },
    {
      type: 'chunked-code',
      badge: 'ANATOMY OF SERVER.JS',
      title: 'Deconstructing the Minimal Express Server',
      intro: 'Every production web service consists of four core responsibilities: loading libraries, configuring stream parsers, routing verbs, and binding a network socket.',
      chunks: [
        {
          label: 'Core Initialisation',
          badge: 'Imports',
          filename: 'server.js',
          title: 'Instantiating Express',
          code: [
            'const express = require("express");',
            'const app = express();',
            'const PORT = 3000;'
          ],
          explanation: 'Loads Express and instantiates the application object. The port variable reserves TCP port 3000 for incoming connections.',
          keyTakeaway: 'Express acts as the application layer router between Node.js network sockets and your code.'
        },
        {
          label: 'Stream Middleware',
          badge: 'Critical Wire Buffer',
          filename: 'server.js',
          title: 'Buffering the Request Stream',
          code: [
            'app.use(express.json());'
          ],
          explanation: 'Without this single line, req.body is undefined. HTTP request bodies arrive across TCP as discrete chunks. This middleware buffers every chunk, concatenates them into a single UTF8 string, parses the JSON, and attaches the resulting object to req.body.',
          keyTakeaway: 'The network stream emits chunks over time; express.json() waits for all chunks before passing control to your handler.'
        },
        {
          label: 'The Route Handlers',
          badge: 'CRUD Operations',
          filename: 'server.js',
          title: 'Matching Method and Path',
          code: [
            'app.get("/courses", (req, res) => res.status(200).json({ total: courses.length, courses }));',
            'app.post("/courses", (req, res) => {',
            '  const newCourse = req.body;',
            '  courses.push(newCourse);',
            '  res.status(201).json({ message: "Course successfully registered", course: newCourse });',
            '});'
          ],
          explanation: 'Routes map an incoming HTTP verb and path pattern to a JavaScript callback function. The response object sets the exact numeric status code and serializes the memory object to JSON.',
          keyTakeaway: 'Each route handler is the kitchen chef preparing the exact meal the waiter requested.'
        },
        {
          label: 'Binding the Socket',
          badge: 'Port Listener',
          filename: 'server.js',
          title: 'Opening Port 3000 to the Campus Network',
          code: [
            'app.listen(PORT, () => console.log(`Apex Campus Catalog Service live on port ${PORT}`));'
          ],
          explanation: 'Tells the operating system kernel to route all TCP packets arriving on port 3000 to this Node.js process.',
          keyTakeaway: 'A port is an operating system mailbox; without listen, nobody can knock on your door.'
        }
      ]
    },
    {
      type: 'runviz',
      filename: 'server.js',
      codeLines: [
        'app.post("/courses", (req, res) => {',
        '  const newCourse = req.body;',
        '  courses.push(newCourse);',
        '  res.status(201).json({ message: "Course successfully registered", course: newCourse });',
        '});'
      ],
      steps: [
        {
          title: 'TCP Connection and Header Inspection',
          line: 1,
          explain: 'Client opens TCP connection on port 3000. Express verifies POST /courses route match.',
          vars: [{ name: 'method', value: '"POST"' }, { name: 'url', value: '"/courses"' }],
          console: ['Incoming TCP stream on port 3000']
        },
        {
          title: 'express.json() Buffering Completed',
          line: 1,
          explain: 'All TCP chunks received. req.body is now populated with the parsed JSON payload.',
          vars: [{ name: 'req.body.code', value: '"CS301"' }, { name: 'req.body.title', value: '"Compilers"' }],
          console: ['Stream reassembly complete: 52 bytes parsed']
        },
        {
          title: 'Course Object Attached to Memory',
          line: 2,
          explain: 'Assigns req.body to newCourse in memory.',
          vars: [{ name: 'newCourse.code', value: '"CS301"' }, { name: 'newCourse.credits', value: '4' }],
          console: ['Captured payload object for CS301']
        },
        {
          title: 'Record Appended to RAM Catalog',
          line: 3,
          explain: 'Pushes newCourse into the server courses array. State is updated in server RAM.',
          vars: [{ name: 'courses.length', value: '3' }],
          console: ['Catalog array size updated to 3']
        },
        {
          title: 'HTTP 201 Created Dispatched to Wire',
          line: 4,
          explain: 'Express serializes newCourse to JSON, sets status 201 Created, and flushes bytes across socket.',
          vars: [{ name: 'statusCode', value: '201' }, { name: 'statusMessage', value: '"Created"' }],
          console: ['HTTP/1.1 201 Created sent to client']
        }
      ]
    },
    {
      type: 'terminal',
      command: 'node server.js',
      lines: [
        'Apex Campus Catalog Service live on port 3000',
        'Incoming TCP connection from 127.0.0.1:54218',
        'HTTP/1.1 GET /courses 200 OK (18 ms)',
        'HTTP/1.1 POST /courses 201 Created (24 ms)',
        'State updated in RAM: 3 courses active'
      ]
    },
    {
      type: 'api-inspector',
      title: 'API Testing Workbench: Live Wire Verification',
      sampleLabel: 'CHAPTER 1 VERIFIED WORKBENCH EXECUTION',
      method: 'POST',
      url: 'http://localhost:5050/v1/books',
      headers: {
        'Host': 'localhost:5050',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'API-Testing-Workbench/1.0'
      },
      requestBody: {
        name: 'Computer Science 101',
        isbn: 'CS101',
        aisle: '01',
        author: 'Apex Engineering Staff'
      },
      status: '200 OK',
      time: '18 ms',
      size: '401 B',
      responseBody: {
        Msg: 'successfully added',
        ID: 'CS10101'
      },
      testScript: [
        'pm.test("Status code is 200 OK", function () {',
        '    pm.response.to.have.status(200);',
        '});',
        'pm.test("Response body confirms record creation", function () {',
        '    var jsonData = pm.response.json();',
        '    pm.expect(jsonData.Msg).to.eql("successfully added");',
        '});',
        'pm.test("Response contains generated identifier", function () {',
        '    var jsonData = pm.response.json();',
        '    pm.expect(jsonData.ID).to.eql("CS10101");',
        '});'
      ],
      assertions: [
        'Status code is 200 OK',
        'Response body confirms record creation',
        'Response contains generated identifier'
      ]
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'SERVER MECHANICS',
      title: 'Express Server Code Anatomy: The Request Lifecycle in Node.js',
      text: 'A web server is a program that binds to a TCP port, listens for incoming connections, executes middleware transformations, matches request paths against routes, and writes serialized responses back to the socket.',
      src: serverAnatomyImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/express-server-code-anatomy.jpg',
      w: 1408,
      h: 768,
      alt: 'Code anatomy breakdown of server.js showing import express, express.json middleware, route handlers, and app.listen.',
      caption: 'Express Server Anatomy: Port listener, middleware pipeline, and route handler dispatch.',
      points: [
        'Port Binding: app.listen(3000) opens a network socket on port 3000, waiting for TCP client handshakes.',
        'Middleware Pipeline: app.use(express.json()) intercepts incoming binary chunks and parses them into req.body.',
        'Route Dispatcher: app.get and app.post match URL paths to JavaScript callback functions.'
      ]
    },
    {
      type: 'comic-workbench',
      badge: 'COMIC WORKBENCH · CODE IMPLEMENTATION',
      title: 'Constructing server.js in the IDE',
      appType: 'ide',
      dialogue: [
        {
          speaker: 'Sameer',
          role: 'Staff Architect',
          text: 'An API server is simply a program listening on a TCP port, parsing incoming bytes, and sending structured text back.',
          pointer: 'app.listen(3000)'
        },
        {
          speaker: 'Akshay',
          role: 'Hero',
          text: 'I imported express, mounted the JSON middleware, and registered both GET and POST routes on /courses.',
          pointer: 'app.use(express.json())'
        }
      ],
      ide: {
        filename: 'server.js',
        status: 'Active · Node.js v22',
        code: `import express from 'express'

const app = express()
app.use(express.json())

const courses = [
  { code: 'CS101', title: 'Foundations of Computer Systems', department: 'Computer Science', credits: 4, status: 'Active' },
  { code: 'CS204', title: 'Data Structures and Algorithms', department: 'Computer Science', credits: 4, status: 'Active' }
]

app.get('/courses', (req, res) => {
  res.status(200).json({ total: courses.length, courses })
})

app.post('/courses', (req, res) => {
  const newCourse = req.body
  courses.push(newCourse)
  res.status(201).json({ message: 'Course successfully registered', course: newCourse })
})

app.listen(3000, () => {
  console.log('Apex Campus Catalog Service live on port 3000')
})`
      },
      breakdown: {
        input: 'Node server.js executed in the terminal.',
        explanation: 'The Node.js process binds to port 3000, initializes the in memory courses array, and waits for incoming HTTP TCP connections.',
        output: 'Terminal logs confirmation: Apex Campus Catalog Service live on port 3000.',
        trapAndFix: 'Senior Savior Trap: Forgetting app.use(express.json()) causes req.body to remain undefined on POST requests. Golden Rule: Express readable streams require explicit body parsing middleware to reconstruct JSON objects from network buffers.'
      }
    },
    {
      type: 'triage',
      title: 'The Undefined Body Incident Triage',
      scenario: 'Akshay sends a POST request with body { "code": "CS102", "title": "Discrete Mathematics" } to /courses. The server crashes with TypeError: Cannot read properties of undefined. What is the root cause in server.js?',
      options: [
        'The developer forgot to register app.use(express.json()) middleware, so Express did not parse the incoming TCP stream into req.body',
        'The client sent JSON formatted text when Express only accepts binary protocol buffers',
        'The operating system blocked port 3000 because POST requests require administrative root privileges'
      ],
      answerIndex: 0,
      debrief: 'Tactical Triumph: By default, Express treats incoming request streams as unparsed chunks of bytes. Without express.json() middleware installed, req.body is undefined. Attempting to access properties on undefined throws an uncaught TypeError.',
      traps: [
        'Tactical Triumph: By default, Express treats incoming request streams as unparsed chunks of bytes. Without express.json() middleware installed, req.body is undefined. Attempting to access properties on undefined throws an uncaught TypeError.',
        'Diagnostic Trap: Express is built specifically for JSON web APIs. It handles JSON seamlessly once the parsing middleware is mounted.',
        'Diagnostic Trap: Operating system ports above 1024 are unprivileged user ports and do not require administrative elevation for HTTP operations.'
      ]
    },
    {
      type: 'storyboard',
      badge: 'COMIC SCENE 4 OF 4',
      title: 'The Five CRUD Operations and Protocol Tasting',
      intro: 'With the server running on port 3000, Akshay uses the API Testing Workbench to execute all five HTTP operations and compare REST against SOAP and GraphQL.',
      panels: [
        {
          title: 'The CRUD Verbs in Action',
          time: '03:40 PM',
          image: postOpImg,
          scene: 'Akshay opens the API Testing Workbench, configuring tabs for POST, GET, PUT, PATCH, and DELETE against the local catalog service.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'POST creates a resource. GET retrieves it. But what is the exact difference between PUT and PATCH?',
            replySpeaker: 'Sameer',
            replySpeech: 'PUT replaces the entire document. PATCH applies a surgical delta to specific attributes.'
          },
          realization: 'HTTP verbs have precise architectural contracts; choosing the wrong verb causes silent data bugs.'
        },
        {
          title: 'The PUT Overwrite Accident',
          time: '04:02 PM',
          image: putPatchDeleteImg,
          scene: 'Akshay sends a PUT request with only { "status": "Inactive" }, and watches the course title and credits disappear from the database record.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'The department and credits are gone! The server replaced the whole object with my single field!',
            replySpeaker: 'Sameer',
            replySpeech: 'That is the PUT contract in action. If you only want to update status, use PATCH.'
          },
          realization: 'PUT is complete resource replacement; PATCH is partial modification.'
        },
        {
          title: 'Protocol Tasting: REST vs SOAP vs GraphQL',
          time: '04:30 PM',
          image: matrixImg,
          scene: 'Sameer loads three side by side tabs in the workbench showing the same campus catalog query represented in REST JSON, SOAP XML, and a GraphQL query document.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Look at the wire payload for each. REST gives standard resources. SOAP wraps XML in heavy envelopes. GraphQL gives exact field control.',
            replySpeaker: 'Akshay',
            replySpeech: 'In GraphQL I can request just code and title, and the server returns only those two keys!'
          },
          realization: 'Different API styles solve different enterprise trade offs; all of them travel across HTTP.'
        },
        {
          title: 'The First Victory',
          time: '05:00 PM',
          image: ch01Scene4Img,
          scene: 'Akshay leans back in his chair with a confident smile. All five CRUD tabs show clean, predictable green responses.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'I understand what the wire is doing now. No more blind clicking on checklists.',
            replySpeaker: 'Sameer',
            replySpeech: 'Good. Because tomorrow morning, our real challenge begins.'
          },
          realization: 'The transition from manual tester to wire auditor begins with understanding first principles.'
        }
      ]
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'CRUD DEEP DIVE · POST',
      title: 'POST Operation Wire Flow: Submitting Payloads and 201 Created',
      text: 'POST requests submit new entity payloads to collections. The server assigns an identifier, mutates database records, and returns HTTP 201 Created.',
      src: postOpImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/post-operation-wire-flow.jpg',
      w: 1408,
      h: 768,
      alt: 'Sequence diagram of POST operation showing client dispatch, body parsing, database insert, and 201 Created response.',
      caption: 'POST Lifecycle: Client submission, server record creation, and 201 Created response dispatch.',
      points: [
        'Method Intent: Non idempotent operation creating a new child resource beneath a target collection.',
        'Request Body: Serialized JSON object carrying attributes to insert.',
        'Expected Response: HTTP 201 Created accompanied by the newly generated resource representation or Location header.'
      ]
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'CRUD DEEP DIVE · GET',
      title: 'GET Operation Wire Flow: Querying Resources and 200 OK',
      text: 'GET requests retrieve representation snapshots without mutating server state. They must remain safe and idempotent across repetitive calls.',
      src: getOpImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/get-operation-wire-flow.jpg',
      w: 1408,
      h: 768,
      alt: 'Sequence diagram of GET operation showing query dispatch, cache inspection, database query, and 200 OK payload response.',
      caption: 'GET Lifecycle: Safe query dispatch, cache headers, and idempotent data retrieval.',
      points: [
        'Safety Invariant: Executing GET ten thousand times must never modify server database records.',
        'Caching Semantics: GET responses can be safely cached by intermediate proxies, CDNs, and browser storage.',
        'Status Codes: Returns 200 OK when found, or 404 Not Found when the identifier does not exist.'
      ]
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'CRUD DEEP DIVE · MODIFICATIONS',
      title: 'PUT vs PATCH vs DELETE: Understanding Modification Semantics',
      text: 'Mastering HTTP verbs requires distinguishing full resource replacement (PUT) from surgical delta modifications (PATCH) and permanent purging (DELETE).',
      src: putPatchDeleteImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/put-patch-delete-comparison.jpg',
      w: 1408,
      h: 768,
      alt: 'Visual comparison table contrasting PUT full replacement, PATCH delta modification, and DELETE removal.',
      caption: 'Modification Semantics: Contrasting replacement, delta patching, and deletion mechanics.',
      points: [
        'PUT Replacement: Overwrites the target resource entirely; omitted fields are wiped from server memory.',
        'PATCH Delta: Modifies only the specified keys, preserving existing unmentioned attributes.',
        'DELETE Removal: Purges the specified resource identifier; subsequent reads typically return 404 Not Found.'
      ]
    },
    {
      type: 'comic-workbench',
      badge: 'COMIC WORKBENCH · VERB AUDIT',
      title: 'Auditing Full Replacement (PUT) versus Delta Patch (PATCH)',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Hero',
          text: 'When I sent PUT with only status Inactive, the server wiped the credits and department! But when I sent PATCH, only status changed.',
          pointer: 'PUT replaces all fields'
        },
        {
          speaker: 'Sameer',
          role: 'Staff Architect',
          text: 'Exactly. Think of a brass thali plate. PUT swaps out the whole plate; PATCH just refills one bowl.',
          pointer: 'PATCH updates delta'
        }
      ],
      workbench: {
        method: 'PATCH',
        url: 'http://localhost:3000/courses/CS101',
        headers: {
          'Host': 'localhost:3000',
          'Content-Type': 'application/json'
        },
        body: `{
  "status": "Inactive"
}`,
        responseStatus: '200 OK',
        responseTime: '15 ms',
        responseBody: `{
  "code": "CS101",
  "title": "Foundations of Computer Systems",
  "department": "Computer Science",
  "credits": 4,
  "status": "Inactive"
}`
      },
      breakdown: {
        input: 'PATCH /courses/CS101 with payload { "status": "Inactive" }.',
        explanation: 'Express locates course CS101 and uses Object.assign to mutate only the status field, preserving code, title, department, and credits intact.',
        output: '200 OK with the preserved record reflecting only the updated status value.',
        trapAndFix: 'Senior Savior Trap: Using PUT when you only intended to update a single attribute causes accidental data loss. Golden Rule: Use PUT only when supplying the complete document representation; use PATCH for partial delta edits.'
      }
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'PROTOCOL MATRIX',
      title: 'Protocol Comparison Matrix: REST vs SOAP vs GraphQL',
      text: 'Enterprise environments balance multiple API architectures. While REST remains the internet standard, legacy enterprise services rely on SOAP XML envelopes, and modern data intensive clients favor GraphQL query flexibility.',
      src: matrixImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-architectures-matrix.jpg',
      w: 1408,
      h: 768,
      alt: 'Comparison matrix detailing REST, SOAP, and GraphQL architectural styles, payload formats, contracts, and use cases.',
      caption: 'Enterprise Protocol Landscape: Comparing REST, SOAP, and GraphQL on the wire.',
      points: [
        'REST: Resource oriented, uses standard HTTP verbs, lightweight JSON bodies, highly cacheable.',
        'SOAP: Operation oriented, enforces strict WSDL XML contracts, transport independent, enterprise WS standards.',
        'GraphQL: Query oriented, single endpoint POST /graphql, client specifies exact fields, prevents over fetching.'
      ]
    },
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
    {
      type: 'cliffhanger',
      badge: 'MISSION 1 · PHASE 2 PREVIEW',
      title: 'The Campus Transit Shuttle 500 Crash',
      text: 'Evening settles over Apex University. Akshay and Sameer celebrate their working catalog server with hot samosas when suddenly, an amber alert flashes across the campus operations monitor. The automated GPS transit shuttle tracking system has stopped broadcasting coordinates. Commuter shuttles across the university are navigating blind, and the triage dashboard displays a single ominous error: 500 Internal Server Error. The manual checklist era is officially over. Tomorrow morning, Akshay must step into the war room and track down the phantom crash.',
      cliffhangerPanel: {
        title: 'The Crimson Screen in the Operations Center',
        time: '07:45 PM',
        image: warRoomImg,
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
