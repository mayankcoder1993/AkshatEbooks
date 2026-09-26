import restaurantImg from '../assets/api-concept-restaurant.jpg'
import bridgeImg from '../assets/frontend-backend-api-bridge.jpg'
import matrixImg from '../assets/api-architectures-matrix.jpg'
import anatomyImg from '../assets/http-wire-anatomy.jpg'
import serverAnatomyImg from '../assets/express-server-code-anatomy.jpg'
import warRoomImg from '../assets/apex-campus-crisis-war-room.jpg'
import postOpImg from '../assets/post-operation-wire-flow.jpg'
import getOpImg from '../assets/get-operation-wire-flow.jpg'
import putPatchDeleteImg from '../assets/put-patch-delete-comparison.jpg'

const serverCodeLines = [
  "import express from 'express'",
  "",
  "const app = express()",
  "app.use(express.json())",
  "",
  "const courses = [",
  "  { code: 'CS101', title: 'Foundations of Computer Systems', department: 'Computer Science', credits: 4, status: 'Active' },",
  "  { code: 'CS204', title: 'Data Structures and Algorithms', department: 'Computer Science', credits: 4, status: 'Active' }",
  "]",
  "",
  "app.get('/courses', (req, res) => {",
  "  res.status(200).json({ total: courses.length, courses })",
  "})",
  "",
  "app.post('/courses', (req, res) => {",
  "  const newCourse = req.body",
  "  courses.push(newCourse)",
  "  res.status(201).json({ message: 'Course successfully registered', course: newCourse })",
  "})",
  "",
  "app.listen(3000, () => {",
  "  console.log('Apex Campus Catalog Service live on port 3000')",
  "})"
]

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
          desc: 'Chapter 2: Investigating the transit shuttle 500 crash by hand and installing defensive guards.'
        },
        {
          phase: 'Phase 3 of 3',
          title: 'Automating the Wire Verification',
          status: 'upcoming',
          desc: 'Chapter 3: Converting manual checks into automated workbench assertions.'
        }
      ],
      achieve: 'Build and run a minimal API server from scratch and verify every core HTTP operation over the wire.',
      roi: 'After this chapter, the reader can distinguish an in process library call from a network API call, assemble a minimal Express server on port 3000, and execute all five CRUD operations in the API Testing Workbench without copying from a template.'
    },
    {
      type: 'mission-hud',
      mission: 'Phase 1: Wire Foundations and First Principles',
      phase: 'STAGE 6 AUTHORING',
      rank: 'JUNIOR QA TO WIRE AUDITOR',
      status: 'ACTIVE'
    },
    {
      type: 'storyboard',
      badge: 'COMIC SCENE 1 OF 4',
      title: 'The Checklist Kingdom',
      intro: 'Akshay spends his morning in the shared desk bay ticking checkboxes on a printed regression sheet, wondering why automated pipeline gates feel so far away.',
      panels: [
        {
          title: 'The Manual Routine',
          time: '09:15 AM',
          scene: 'Akshay in a crisp white kurta sits at his teak partition desk bay beneath geometric light from a carved jali screen. Over his shoulder, three tabs of the API Testing Workbench show green status pills.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'Forty one requests clicked. Forty one green ticks recorded. Exactly the same as yesterday.',
            replySpeaker: 'Colleague',
            replySpeech: 'That is the dream, no? Nothing broke, so management stays happy.'
          },
          realization: 'Clicking manual checks creates the illusion of software quality while leaving the engineer completely blind to wire contracts.'
        },
        {
          title: 'The Inner Doubt',
          time: '09:42 AM',
          scene: 'Akshay stares at the printed spreadsheet, tapping his pen against the desk beside a brass lamp. He glances at terminal windows flying past on senior screens across the bay.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'If the dream is clicking the same button every sprint, why does everyone keep talking about pipeline gates and test runners?'
          },
          realization: 'Manual clicking is repetitive maintenance; automated wire assertions are software engineering.'
        },
        {
          title: 'The Standup Order',
          time: '10:05 AM',
          scene: 'The engineering lead pauses by the bay entrance, leaning against a carved Dravidian stone pillar with a tablet in hand.',
          dialogue: {
            speaker: 'Lead Architect',
            speech: 'Our orientation platform migration is scheduled for tonight. The catalog smoke suite needs automated wire verification before we open the gates.',
            replySpeaker: 'Akshay',
            replySpeech: 'Understood. I will have the endpoints verified.'
          },
          realization: 'Modern deployment pipelines demand programmable contracts, not human fingers on buttons.'
        },
        {
          title: 'The Browser Bar Barrier',
          time: '10:20 AM',
          scene: 'Akshay opens a browser window and pastes a catalog URL into the address bar, hitting enter to inspect the server response.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'It shows text on the screen, but how do I submit a new course or send a security token from this browser bar?'
          },
          realization: 'The browser address bar is strictly a GET consumer; full API auditing requires dedicated workbench tools.'
        }
      ]
    },
    {
      type: 'triage',
      title: 'Browser Address Bar Diagnostic Triage',
      scenario: 'Akshay attempts to test a backend endpoint by pasting http://localhost:3000/courses into his browser address bar. What is the fundamental operational limitation of this approach?',
      options: [
        'The browser address bar can only trigger GET requests and cannot transmit a JSON body payload or custom headers',
        'The browser cannot parse JSON data and will always crash on HTTP status 200',
        'The browser address bar encrypts all network packets with private SSL keys that Node.js cannot read'
      ],
      answerIndex: 0,
      debrief: 'Tactical Triumph: The browser address bar issues an HTTP GET request without a request body. To test POST, PUT, PATCH, and DELETE operations with JSON payloads, an engineer requires an API Testing Workbench or a terminal HTTP client.',
      traps: [
        'Tactical Triumph: The browser address bar issues an HTTP GET request without a request body. To test POST, PUT, PATCH, and DELETE operations with JSON payloads, an engineer requires an API Testing Workbench or a terminal HTTP client.',
        'Diagnostic Trap: Modern browsers render raw JSON text cleanly. The limitation is request construction, not response presentation.',
        'Diagnostic Trap: Transport encryption takes place at the network socket layer, not because the address bar fails to speak standard HTTP.'
      ]
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'ARCHITECTURAL FOUNDATION',
      title: 'The Frontend to Backend API Bridge: Separating UI from Persistence',
      text: 'Modern web applications never connect client user interfaces directly to database storage. The API acts as an explicit bridge, enforcing authentication, validation, and contract rules across the network boundary.',
      src: bridgeImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/frontend-backend-api-bridge.jpg',
      w: 1408,
      h: 768,
      alt: 'Architectural diagram showing client devices connecting over HTTP to backend microservices and databases.',
      caption: 'The API Bridge: Hiding database complexity behind clean HTTP interfaces.',
      points: [
        'Client Tier: Mobile apps and web browsers render pixels and handle user interactions.',
        'Network Wire: HTTP transport carries structured JSON messages across TCP sockets.',
        'Backend Tier: Server handlers authenticate requests, execute business rules, and read from databases.'
      ]
    },
    {
      type: 'storyboard',
      badge: 'COMIC SCENE 2 OF 4',
      title: 'The Cafeteria Crisis',
      intro: 'Orientation lunch is jeopardized when the digital menu board freezes. Sameer invites Akshay to inspect the invisible wire between client and server.',
      panels: [
        {
          title: 'Frozen Menu Screen',
          time: '12:30 PM',
          scene: 'A long queue of hungry students stretches across the campus dining hall. The digital menu screen hangs motionless, displaying breakfast items during lunch hour.',
          dialogue: {
            speaker: 'Cafeteria Manager',
            speech: 'The screen is frozen! I restarted the tablet three times, but the lunch specials will not appear.'
          },
          realization: 'Restarting client display devices does nothing when the backend wire conversation is severed.'
        },
        {
          title: 'The Refresh Reflex',
          time: '12:34 PM',
          scene: 'Akshay taps the screen reload icon repeatedly, watching the spinning circular loader return to the exact same stale menu.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'It returns something, so the network must be working, right?',
            replySpeaker: 'Sameer',
            replySpeech: 'Something is not a contract, Akshay. Come to the lab and let us inspect the conversation.'
          },
          realization: 'Receiving any response is not evidence of correctness; payload contracts must be audited.'
        },
        {
          title: 'Entering Sameer Lab',
          time: '12:45 PM',
          scene: 'Sameer leads Akshay into his quiet corner research lab. An indigo Nehru jacket hangs on his teak chair, a server rack hums softly on the left, and a brass chai glass rests on the desk.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'When a customer sits in a restaurant, does the kitchen pantry sit directly on their table?',
            replySpeaker: 'Akshay',
            replySpeech: 'No. The customer gives an order to the waiter, and the waiter brings food from the kitchen.'
          },
          realization: 'An API is the digital waiter translating structured orders between client consumers and backend kitchens.'
        },
        {
          title: 'The Wire Conversation',
          time: '12:55 PM',
          scene: 'Sameer gestures toward the glowing terminal screen with his brass chai glass.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Stop calling it a screen failure. The screen only renders what the wire delivers. Look at the conversation itself.'
          },
          realization: 'When user interfaces misbehave, the ultimate source of truth is the network wire.'
        }
      ]
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'CORE MENTAL MODEL',
      title: 'The Restaurant Analogy: Customer, Waiter API, and Kitchen Backend',
      text: 'To understand why APIs exist, consider dining in a restaurant. A customer does not enter the kitchen to slice vegetables or query the pantry directly. Instead, the customer interacts with a waiter who accepts structured menu orders, conveys them to the kitchen, and returns prepared meals.',
      src: restaurantImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-concept-restaurant.jpg',
      w: 1408,
      h: 768,
      alt: 'Infographic showing customer as client, waiter as API contract, and kitchen as backend database server.',
      caption: 'The Restaurant Analogy: Structured orders prevent customers from breaking kitchen invariants.',
      points: [
        'Customer (Client Application): Submits structured requests using menu definitions without knowing internal chef routines.',
        'Waiter (Application Programming Interface): Validates the order, carries packets across the room, and returns responses.',
        'Kitchen (Backend Server & Database): Executes culinary logic, fetches raw data from storage, and outputs serialized food.'
      ]
    },
    {
      type: 'flow',
      input: ['HTTP Request', 'GET /courses or POST with JSON body'],
      process: ['Express Route Handler', 'Buffers TCP stream and queries store'],
      output: ['HTTP Response', 'Status 200 OK or 201 Created with JSON']
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'WIRE PROTOCOL ANATOMY',
      title: 'Anatomy of an HTTP Wire Transaction: Request Line, Headers, and Payloads',
      text: 'Every API transaction across the internet consists of two complementary packets: an HTTP Request and an HTTP Response. Each packet features three distinct structural sections: the start line, key value headers, and an optional message body.',
      src: anatomyImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/http-wire-anatomy.jpg',
      w: 1408,
      h: 768,
      alt: 'Technical diagram breaking down HTTP request line, request headers, payload body, response status line, response headers, and response body.',
      caption: 'HTTP Wire Anatomy: Dissecting the start line, headers, and payload body across client server sockets.',
      points: [
        'Request Start Line: Contains the HTTP Verb (GET, POST), the target resource path (/menu), and protocol version (HTTP/1.1).',
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
      purpose: 'Construct an in memory Express catalog server that listens on port 3000 and serves course data.',
      input: 'HTTP requests (GET /courses without body, POST /courses with JSON payload)',
      processing: 'Route matching, TCP stream parsing via express.json(), in memory array mutations',
      output: 'HTTP status codes (200 OK, 201 Created) and JSON response bodies',
      files: ['server.js', 'package.json']
    },
    {
      type: 'code',
      filename: 'server.js',
      lines: serverCodeLines
    },
    {
      type: 'chunked-code',
      badge: 'CODE IN CHUNKS',
      title: 'Dissecting server.js Line by Line',
      intro: 'Here is how each section of our minimal server operates under the hood:',
      chunks: [
        {
          label: 'Server Setup and Middleware',
          title: 'Importing Express and Mounting JSON Parser',
          explanation: 'Express requires explicit middleware to buffer incoming TCP chunk streams and parse raw text into JavaScript objects.',
          code: [
            "import express from 'express'",
            "const app = express()",
            "app.use(express.json())"
          ],
          keyTakeaway: 'Without app.use(express.json()), req.body remains undefined on all POST and PUT requests.'
        },
        {
          label: 'In Memory Store',
          title: 'Initializing the Course Catalog Array',
          explanation: 'We seed an in memory array with initial courses to simulate a lightweight database store.',
          code: [
            "const courses = [",
            "  { code: 'CS101', title: 'Foundations of Computer Systems', department: 'Computer Science', credits: 4, status: 'Active' },",
            "  { code: 'CS204', title: 'Data Structures and Algorithms', department: 'Computer Science', credits: 4, status: 'Active' }",
            "]"
          ],
          keyTakeaway: 'In memory arrays provide deterministic, sub millisecond state for local testing.'
        },
        {
          label: 'Route Handlers and Port Listener',
          title: 'Binding Routes and Listening on Port 3000',
          explanation: 'The server matches HTTP methods and paths to callback functions, returning status codes and JSON payloads.',
          code: [
            "app.get('/courses', (req, res) => res.status(200).json({ total: courses.length, courses }))",
            "app.post('/courses', (req, res) => {",
            "  courses.push(req.body)",
            "  res.status(201).json({ message: 'Course successfully registered', course: req.body })",
            "})",
            "app.listen(3000, () => console.log('Apex Campus Catalog Service live on port 3000'))"
          ],
          keyTakeaway: 'Always return explicit HTTP status codes: 200 for retrieval, 201 for resource creation.'
        }
      ]
    },
    {
      type: 'terminal',
      title: 'Terminal Window: Starting the Server',
      command: 'node server.js',
      lines: [
        '[Apex Campus] Node.js v22 runtime initialized',
        'Binding TCP socket to 0.0.0.0:3000...',
        'Mounted middleware: express.json() stream parser',
        'Registered routes: GET /courses, POST /courses',
        'Apex Campus Catalog Service live on port 3000',
        'Ready for incoming client connections'
      ]
    },
    {
      type: 'runviz',
      file: 'server.js',
      codeLines: [
        'app.listen(3000)',
        'app.use(express.json())',
        'req.body = JSON.parse(stream)',
        'courses.push(req.body)',
        'res.status(201).json(course)'
      ],
      steps: [
        {
          line: 1,
          title: 'Process Binds to Port 3000',
          explain: 'Node.js opens a TCP socket on port 3000, waiting for client connections.',
          vars: [{ name: 'port', value: '3000' }, { name: 'status', value: '"LISTENING"' }],
          console: ['Catalog Service live on port 3000']
        },
        {
          line: 2,
          title: 'Client Dispatches HTTP POST',
          explain: 'A client sends POST /courses with a raw TCP chunk stream containing JSON bytes.',
          vars: [{ name: 'method', value: '"POST"' }, { name: 'path', value: '"/courses"' }],
          console: ['Catalog Service live on port 3000', 'Incoming TCP connection from 127.0.0.1']
        },
        {
          line: 3,
          title: 'Middleware Buffers Stream',
          explain: 'express.json() buffers binary TCP chunks and reconstructs the JSON object.',
          vars: [{ name: 'req.body', value: '{ code: "CS102", title: "Data Structures" }' }],
          console: ['Catalog Service live on port 3000', 'TCP stream parsed successfully']
        },
        {
          line: 4,
          title: 'Route Handler Appends Course',
          explain: 'The POST route handler pushes the new course object into the in memory catalog array.',
          vars: [{ name: 'courses.length', value: '3' }],
          console: ['Catalog Service live on port 3000', 'Course CS102 persisted to memory store']
        },
        {
          line: 5,
          title: 'Response Dispatched Over Socket',
          explain: 'Server sends HTTP header 201 Created and serializes confirmation JSON back across the wire.',
          vars: [{ name: 'res.statusCode', value: '201' }],
          console: ['Catalog Service live on port 3000', 'HTTP/1.1 201 Created dispatched to socket']
        }
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
      type: 'api-inspector',
      title: 'Interactive API Workbench: Auditing GET /courses',
      method: 'GET',
      url: 'http://localhost:5050/v1/courses',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'CampusCatalogWorkbench/1.0'
      },
      status: '200 OK',
      time: '18 ms',
      size: '420 B',
      responseBody: {
        total_courses: 4,
        courses: [
          { code: 'CS101', title: 'Foundations of Computer Systems', department: 'Computer Science', credits: 4, status: 'Active' },
          { code: 'CS204', title: 'Data Structures and Algorithms', department: 'Computer Science', credits: 4, status: 'Active' },
          { code: 'QA301', title: 'Agentic API Automation and Quality', department: 'Software Engineering', credits: 3, status: 'Active' },
          { code: 'EE210', title: 'Digital Logic and Microprocessors', department: 'Electrical Engineering', credits: 4, status: 'Active' }
        ]
      },
      assertions: [
        'Status code is 200 OK',
        'Response content type includes application/json',
        'Catalog contains 4 university courses',
        'First course code matches CS101'
      ],
      sampleLabel: 'INTERACTIVE WORKBENCH · CLICK SEND TO TEST'
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'CRUD WIRE FLOW: CREATE',
      title: 'POST Operation Wire Flow: Submitting Payloads and 201 Created',
      text: 'A POST operation transmits a request body to the server to create a new resource. The server validates the payload, generates a unique identity, stores the entity, and returns status 201 Created with the persisted resource representation.',
      src: postOpImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/post-operation-wire-flow.jpg',
      w: 1408,
      h: 768,
      alt: 'Sequence diagram showing client sending POST request with JSON body, server persisting to database, and returning 201 Created.',
      caption: 'POST Operation Wire Flow: Client input transforms into persisted backend state.',
      points: [
        'Client Dispatch: Client sends POST /courses with Content Type application/json and request body payload.',
        'Server Ingestion: Express middleware parses JSON and appends course object to database array.',
        'Persistence Confirmation: Server returns HTTP 201 Created containing confirmation message and assigned identity.'
      ]
    },
    {
      type: 'api-inspector',
      title: 'Interactive API Workbench: Submitting POST /courses Payload',
      method: 'POST',
      url: 'http://localhost:5050/v1/courses',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      requestBody: {
        code: 'CS102',
        title: 'Discrete Mathematics and Logic',
        department: 'Computer Science',
        credits: 4,
        status: 'Active'
      },
      status: '201 Created',
      time: '24 ms',
      size: '280 B',
      responseBody: {
        message: 'Course successfully registered',
        course: {
          code: 'CS102',
          title: 'Discrete Mathematics and Logic',
          department: 'Computer Science',
          credits: 4,
          status: 'Active'
        }
      },
      assertions: [
        'Status code is 201 Created',
        'Response body confirms course registration',
        'Created course code matches CS102'
      ],
      sampleLabel: 'INTERACTIVE WORKBENCH · POST REGISTRATION'
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'CRUD WIRE FLOW: RETRIEVE',
      title: 'GET Operation Wire Flow: Querying Resources and 200 OK',
      text: 'A GET operation requests a representation of an existing resource without modifying server state. GET requests are safe and idempotent; querying an endpoint ten times produces the same result without changing data.',
      src: getOpImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/get-operation-wire-flow.jpg',
      w: 1408,
      h: 768,
      alt: 'Sequence diagram showing client issuing GET /courses, server querying memory store, and returning 200 OK with array.',
      caption: 'GET Operation Wire Flow: Safe, idempotent retrieval across the network wire.',
      points: [
        'Idempotent Query: Client issues GET /courses across TCP port 3000 without request body.',
        'In Memory Scan: Express route handler reads existing courses array and counts records.',
        'Serialization: Server returns HTTP 200 OK with complete JSON array of courses.'
      ]
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'CRUD WIRE FLOW: UPDATE & DELETE',
      title: 'PUT vs PATCH vs DELETE: Understanding Modification Semantics',
      text: 'Updating resources requires careful selection between PUT and PATCH. PUT replaces the entire entity state, overwriting missing attributes with null. PATCH applies a surgical delta to specified fields. DELETE removes the resource entirely.',
      src: putPatchDeleteImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/put-patch-delete-comparison.jpg',
      w: 1408,
      h: 768,
      alt: 'Side by side comparison diagram of PUT full replacement, PATCH delta modification, and DELETE removal.',
      caption: 'PUT vs PATCH vs DELETE: Selecting the appropriate verb prevents accidental database attribute loss.',
      points: [
        'PUT (Full Replacement): Replaces the entire target resource with the submitted payload. Omitted fields are lost.',
        'PATCH (Delta Update): Merges supplied attributes into the existing resource, preserving unmentioned fields.',
        'DELETE (Resource Removal): Destroys the specified entity and returns 200 OK or 204 No Content.'
      ]
    },
    {
      type: 'comic-workbench',
      badge: 'COMIC WORKBENCH · CRUD AUDIT',
      title: 'Auditing Full Replacement (PUT) versus Delta Patch (PATCH)',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Hero',
          text: 'I sent a PUT request with only the status field, and the course department and credits were wiped out!',
          pointer: 'Status 200 OK with missing keys'
        },
        {
          speaker: 'Sameer',
          role: 'Staff Architect',
          text: 'Exactly. PUT is idempotent complete replacement. If you only want to change one attribute, send a PATCH request instead.',
          pointer: 'PATCH /courses/CS101'
        }
      ],
      workbench: {
        method: 'PATCH',
        url: 'http://localhost:3000/courses/CS101',
        headers: 'Content-Type: application/json',
        body: '{\n  "status": "Archived"\n}',
        responseStatus: '200 OK',
        responseTime: '15ms',
        responseBody: '{\n  "code": "CS101",\n  "title": "Foundations of Computer Systems",\n  "department": "Computer Science",\n  "credits": 4,\n  "status": "Archived"\n}'
      },
      breakdown: {
        input: 'Client sends PATCH /courses/CS101 with partial payload containing only the modified status attribute.',
        explanation: 'The backend merges the incoming delta keys into the existing stored course record without overwriting unmentioned properties.',
        output: 'HTTP status 200 OK returning the complete merged course entity with updated status and preserved attributes.',
        trapAndFix: 'Senior Savior Trap: Using PUT for partial field updates causes unintended data loss in strict REST architectures. Golden Rule: Use PUT when replacing the entire resource state; use PATCH when applying partial modifications.'
      }
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'PROTOCOL MATRIX',
      title: 'Protocol Comparison Matrix: REST vs SOAP vs GraphQL',
      text: 'Enterprise software utilizes diverse API paradigms. REST relies on HTTP verbs and URI resource nouns. SOAP wraps XML payloads inside strict WSDL envelopes. GraphQL uses a single HTTP POST endpoint where clients declare the exact fields they require.',
      src: matrixImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-architectures-matrix.jpg',
      w: 1408,
      h: 768,
      alt: 'Comparison matrix comparing REST JSON, SOAP XML envelopes, and GraphQL queries across transport, payload, and caching dimensions.',
      caption: 'Protocol Comparison: Choosing between REST, SOAP, and GraphQL based on architectural requirements.',
      points: [
        'REST: Resource oriented, uses standard HTTP verbs, excels at web caching and uniform client interfaces.',
        'SOAP: Contract oriented, strictly typed XML envelopes, standard for banking and enterprise legacy services.',
        'GraphQL: Query oriented, single endpoint, eliminates over fetching by allowing clients to specify precise shapes.'
      ]
    },
    {
      type: 'comic-workbench',
      badge: 'COMIC WORKBENCH · ARCHITECTURE TASTING',
      title: 'Comparing REST, SOAP, and GraphQL on the Wire',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Sameer',
          role: 'Staff Architect',
          text: 'Look at how each architecture packages the exact same question across the network wire.',
          pointer: 'Wire Payload Comparison'
        },
        {
          speaker: 'Akshay',
          role: 'Hero',
          text: 'REST uses URI nouns and HTTP verbs. SOAP wraps XML in an envelope. GraphQL lets me ask for only the title and code!',
          pointer: 'GraphQL Query Selection'
        }
      ],
      workbench: {
        method: 'POST',
        url: 'http://localhost:5050/graphql',
        headers: 'Content-Type: application/json',
        body: '{\n  "query": "query { courses { code title } }"\n}',
        responseStatus: '200 OK',
        responseTime: '24ms',
        responseBody: '{\n  "data": {\n    "courses": [\n      { "code": "CS101", "title": "Foundations of Computer Systems" },\n      { "code": "CS204", "title": "Data Structures and Algorithms" }\n    ]\n  }\n}'
      },
      breakdown: {
        input: 'Client posts GraphQL query specifying only code and title attributes inside a JSON request body.',
        explanation: 'The GraphQL engine executes field resolvers, filtering out department and credits at the service layer before wire transmission.',
        output: 'HTTP status 200 OK with data envelope containing precisely the requested keys, preventing over fetching.',
        trapAndFix: 'Senior Savior Trap: Assuming modern GraphQL always replaces REST without evaluating caching complexity and file upload trade offs. Golden Rule: Match architecture to problem requirements; REST excels at resource caching, GraphQL excels at client driven nested aggregations.'
      }
    },
    {
      type: 'victory-milestone',
      title: 'Phase 1 Complete: First Principles Wire Mastered',
      summary: 'Akshay has advanced from clicking manual checklists in ignorance to building a minimal Express API server, auditing the five core HTTP operations, and reading network wire conversations with clarity.',
      powers: [
        'Ability to construct an in memory Express server with JSON middleware on port 3000',
        'Precision auditing of all five CRUD operations: POST, GET, PUT, PATCH, and DELETE',
        'Architectural understanding of Martin Fowler First Law of Distributed Objects',
        'Clarity on REST, SOAP, and GraphQL payload trade offs on the network wire'
      ],
      disastersPrevented: [
        'Prevented undefined req.body crashes by understanding stream buffering middleware',
        'Prevented accidental database attribute overwrites by choosing PATCH over PUT for delta updates',
        'Prevented hours of wasted UI troubleshooting by isolating faults directly on the wire'
      ]
    },
    {
      type: 'cliffhanger',
      title: 'The Campus Transit Shuttle 500 Crash',
      text: 'Sameer taps the glowing monitor in his lab as twilight falls across the teak desk. Orientation morning begins tomorrow at eight sharp, but the campus transit shuttle tracking API has suddenly crashed with an uncaught 500 Internal Server Error. When student phones query the route locator with an absent parameter, the entire backend service halts. In Chapter 2, Akshay and Sameer enter the crisis war room to dissect status codes, analyze null pointer exceptions, and engineer defensive input validation guards.'
    }
  ]
}
