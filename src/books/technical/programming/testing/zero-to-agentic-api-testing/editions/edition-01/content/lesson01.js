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
  "app.patch('/courses/:code', (req, res) => {",
  "  const course = courses.find(c => c.code === req.params.code)",
  "  if (!course) return res.status(404).json({ error: 'Course not found' })",
  "  Object.assign(course, req.body)",
  "  res.status(200).json({ message: 'Course updated', course })",
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
      missionBadge: 'QUEST LEVEL 1: WIRE FOUNDATIONS AND FIRST PRINCIPLES',
      missionTitle: 'Day 1 on the Job: From Absolute Zero to Building Your First API',
      missionCrisis: 'Day 1 Confusion: When a Fresh Intern Tries to Test an API with Google Chrome',
      missionContext: 'Akshay walks into Apex Institute of Technology for his first day as a software engineering intern. He is paired with Sameer, a calm senior architect who reveals that Akshay will be testing backend APIs. The problem is that Akshay does not even know what an API is! When Akshay tries to test an API by simply pasting links into a web browser, Sameer introduces the restaurant analogy, the secret truth of network wires, and guides him to construct a working server from scratch.',
      missionObjective: 'Discover why browsers cannot test full APIs, assemble a runnable Express server on port 3000, master the five core CRUD operations in the API Testing Workbench, and prepare for production incidents.',
      targetSystems: 'Node.js Express Catalog Service · Port 3000 · Public Open Data Endpoints',
      missionImage: {
        src: warRoomImg,
        file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
        w: 1408,
        h: 768,
        alt: 'Akshay and Sameer at the workstation lab beginning the Day 1 training quest.',
        caption: 'Day 1 Training Lab: Where every junior engineer learns that truth is found on the wire.',
      },
      phaseRoadmap: [
        {
          phase: 'Quest 1 of 3',
          title: 'Wire Foundations and First Server',
          status: 'active',
          desc: 'Chapter 1: Understanding the restaurant waiter analogy, assembling server.js from scratch, and tasting the 5 CRUD keys.'
        },
        {
          phase: 'Quest 2 of 3',
          title: 'The Transit Shuttle 500 Investigation',
          status: 'upcoming',
          desc: 'Chapter 2: Investigating the campus transit shuttle server crash, discovering root cause analysis, and installing defensive guards.'
        },
        {
          phase: 'Quest 3 of 3',
          title: 'Automating the Quality Shield',
          status: 'upcoming',
          desc: 'Chapter 3: Converting manual workbench checks into an automated collection runner pipeline.'
        }
      ],
      achieve: 'Build and run a minimal API server from scratch and verify every core HTTP operation over the wire.',
      roi: 'After this chapter, you will understand exactly how the internet carries data, construct a minimal Express server on port 3000, and execute all five CRUD operations in the API Testing Workbench with total confidence.'
    },
    {
      type: 'mission-hud',
      mission: 'Quest Level 1: Wire Foundations and First Principles',
      phase: 'STAGE 6 AUTHORING',
      rank: 'DAY 1 INTERN TO WIRE AUDITOR',
      status: 'ACTIVE'
    },
    {
      type: 'storyboard',
      badge: 'COMIC SCENE 1 OF 4',
      title: 'Day 1 at the Desk: What is an API Anyway?',
      intro: 'Akshay reports for his first day at Apex Institute of Technology, eager to write code but completely baffled by his new job assignment.',
      panels: [
        {
          title: 'The First Assignment',
          time: '09:30 AM',
          scene: 'Akshay sits nervously at his new teak desk beneath geometric morning sunlight filtering through a carved stone jali screen. Sameer walks over holding two glasses of hot ginger chai.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Welcome to the team, Akshay! Drink some hot chai. Today begins your journey: you are going to be our new API tester.',
            replySpeaker: 'Akshay',
            replySpeech: 'Thank you, Sameer sir! But honestly, I have only built simple web pages in college. What exactly is an API?'
          },
          realization: 'Every great software engineer starts at absolute zero on Day 1.'
        },
        {
          title: 'The Google Chrome Experiment',
          time: '09:45 AM',
          scene: 'Akshay opens Google Chrome on his laptop, stares at the blank search bar, and types in the local campus course URL, hitting Enter with high hopes.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'If it has a URL, I can just test it right here in Chrome, correct? But wait, where are the buttons? How do I add a new student or change a course title from this search bar?'
          },
          realization: 'A web browser address bar is designed only to fetch and display documents, not to test programmable services.'
        },
        {
          title: 'Sameer Warm Laugh',
          time: '09:50 AM',
          scene: 'Sameer chuckles warmly and pulls up a wooden chair beside Akshay, placing his tea glass on a copper coaster.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Do not worry, Akshay! Every beginner tries hitting URLs in a browser. The browser only knows how to ask for things nicely. It cannot easily package data or test operations. Let me tell you about a restaurant.',
            replySpeaker: 'Akshay',
            replySpeech: 'A restaurant? How does food relate to computer programming?'
          },
          realization: 'Relatable physical analogies make complex technical architecture immediately intuitive.'
        },
        {
          title: 'The Secret of the Waiter',
          time: '10:05 AM',
          scene: 'Sameer sketches a simple diagram in Akshay notebook showing a dining table, a waiter holding an order notepad, and a kitchen pantry.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'When you sit at a dining table, do you walk into the kitchen pantry, chop onions, and light the stove yourself?',
            replySpeaker: 'Akshay',
            replySpeech: 'Of course not! I look at the menu, tell the waiter what I want, and the waiter brings the prepared dish to my table.'
          },
          realization: 'An API is the digital waiter that carries structured requests between consumers and backend kitchens.'
        }
      ]
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'CORE MENTAL MODEL',
      title: 'The Restaurant Analogy: Customer, Waiter API, and Kitchen Backend',
      text: 'To understand why APIs exist, picture a restaurant. You as the customer do not walk behind the kitchen counter to inspect storage shelves or cook recipes. Instead, you interact with a friendly waiter who accepts your order from the printed menu, carries it to the kitchen, and delivers your food when it is ready.',
      src: restaurantImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-concept-restaurant.jpg',
      w: 1408,
      h: 768,
      alt: 'Infographic showing Customer as Client App, Waiter as API Contract, and Kitchen as Backend Database.',
      caption: 'The Restaurant Analogy: The waiter API protects the kitchen while serving exact orders to guests.',
      points: [
        'Customer (The Client): The mobile app or website that requests information without needing to know internal database schemas.',
        'The Menu (The API Contract): The list of available endpoints and actions that both the client and server agree upon.',
        'The Waiter (The API): The messenger that takes structured request payloads across the room and returns formatted response data.',
        'The Kitchen (The Backend Server and Database): The secure engine that verifies rules, queries tables, and prepares the output.'
      ]
    },
    {
      type: 'triage',
      title: 'Browser Address Bar Diagnostic Triage',
      scenario: 'Akshay tries to test a new student registration endpoint by pasting http://localhost:3000/courses into his browser address bar. Why does this approach fail to test the full API contract?',
      options: [
        'The browser address bar can only trigger HTTP GET requests and cannot transmit structured JSON body payloads or custom headers',
        'Web browsers are forbidden by internet law from communicating with localhost servers',
        'Node.js automatically shuts down its network socket whenever Google Chrome connects'
      ],
      answerIndex: 0,
      debrief: 'Tactical Triumph: The browser address bar only issues HTTP GET requests without a request body. To test POST creation, PUT replacement, and custom headers, engineers use specialized API workbenches or terminal tools.',
      traps: [
        'Tactical Triumph: The browser address bar only issues HTTP GET requests without a request body. To test POST creation, PUT replacement, and custom headers, engineers use specialized API workbenches or terminal tools.',
        'Diagnostic Trap: Web browsers connect to localhost continuously during development. The restriction is HTTP verb flexibility, not local networking.',
        'Diagnostic Trap: Node.js does not discriminate between client applications; it accepts any valid TCP socket connection.'
      ]
    },
    {
      type: 'storyboard',
      badge: 'COMIC SCENE 2 OF 4',
      title: 'How the Internet Works and The Truth of the Wire',
      intro: 'Sameer opens his laptop to show Akshay what actually happens inside physical network cables when computers talk.',
      panels: [
        {
          title: 'The Fancy Frame vs The Postcard',
          time: '10:30 AM',
          scene: 'Sameer points to a colorful university homepage on one screen and a black terminal window with raw text on the other screen.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Look at this webpage, Akshay. The browser is like a decorator. It takes plain text and paints pretty CSS colors, fonts, and drop shadows around it like an ornate picture frame.',
            replySpeaker: 'Akshay',
            replySpeech: 'So what is the API doing behind all that paint?'
          },
          realization: 'User interfaces are decorative presentations built on top of underlying raw data payloads.'
        },
        {
          title: 'Why Engineers Say On The Wire',
          time: '10:45 AM',
          scene: 'Sameer lifts a blue Ethernet network cable running from the desk socket into the workstation tower.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Inside this cable and through WiFi waves, there are no buttons or pictures. There are only electrical pulses carrying raw letters of text, like a postcard in an envelope. Engineers call this the wire. An API tester looks directly at the postcard on the wire before the browser ever decorates it!',
            replySpeaker: 'Akshay',
            replySpeech: 'Aha! So inspecting the wire means reading the raw message traveling between two computers!'
          },
          realization: 'On the wire simply means inspecting raw data packets moving across physical networks.'
        },
        {
          title: 'The Four Parts of an HTTP Packet',
          time: '11:10 AM',
          scene: 'Sameer opens a text editor and writes four simple labels: Method, Path, Headers, and Body.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Every request traveling the wire has four simple parts: What action to take (Method), where to deliver it (Path), meta notes like language or format (Headers), and the payload package itself (Body).',
            replySpeaker: 'Akshay',
            replySpeech: 'Like sending a parcel by post! The address on the envelope, the delivery instructions, and the item inside the box!'
          },
          realization: 'HTTP transactions mirror physical postal mail: address, stamp, envelope, and contents.'
        },
        {
          title: 'The Challenge Accepted',
          time: '11:30 AM',
          scene: 'Akshay rolls up his kurta sleeves and places his hands on the keyboard with a bright grin.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'I understand the theory now! But how do we actually create a waiter? Can we build our own server right now?',
            replySpeaker: 'Sameer',
            replySpeech: 'That is the spirit! Open your code editor. We will build a complete campus course catalog server in less than twenty lines of code.'
          },
          realization: 'Building a working server transforms abstract theory into permanent engineering skill.'
        }
      ]
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'ARCHITECTURAL FOUNDATION',
      title: 'The Frontend to Backend API Bridge: Separating UI from Persistence',
      text: 'Modern software separates the user interface from backend data storage. Mobile phones, web browsers, smart watches, and external partners all talk to the exact same backend server through clean API contracts, ensuring that business rules and database records remain safe and consistent.',
      src: bridgeImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/frontend-backend-api-bridge.jpg',
      w: 1408,
      h: 768,
      alt: 'Architectural diagram showing client devices connecting over HTTP to backend microservices and databases.',
      caption: 'The API Bridge: Multiple client interfaces sharing a single backend source of truth.',
      points: [
        'Client Tier: Mobile apps and web browsers render pixels, accept taps, and display notifications.',
        'Network Wire: HTTP transport carries structured JSON messages across physical cables and wireless radio links.',
        'Backend Tier: Server handlers authenticate callers, validate incoming rules, and persist data to databases.'
      ]
    },
    {
      type: 'flow',
      input: ['HTTP Request', 'Method + URL Path + Headers + Optional Body'],
      process: ['Express Route Handler', 'Buffers TCP chunks, parses JSON, runs business logic'],
      output: ['HTTP Response', 'Status Code + Response Headers + JSON Payload']
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'WIRE PROTOCOL ANATOMY',
      title: 'Anatomy of an HTTP Wire Transaction: Request Line, Headers, and Payloads',
      text: 'Every API conversation across the internet consists of two complementary packets: an HTTP Request and an HTTP Response. Each packet features three distinct structural sections: the start line, key value headers, and the message body.',
      src: anatomyImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/http-wire-anatomy.jpg',
      w: 1408,
      h: 768,
      alt: 'Technical diagram breaking down HTTP request line, request headers, payload body, response status line, response headers, and response body.',
      caption: 'HTTP Wire Anatomy: Dissecting the start line, headers, and payload body across client server sockets.',
      points: [
        'Request Start Line: Contains the HTTP Verb (GET, POST), target path (/courses), and protocol version (HTTP/1.1).',
        'Headers Section: Metadata providing encoding rules, authorization tokens, content types, and caching hints.',
        'Body Payload: Structured text (typically JSON) carrying operational data from client to server or server to client.',
        'Response Status Line: Three digit numeric code confirming success (200, 201), client error (400, 404), or server crash (500).'
      ]
    },
    {
      type: 'battle-scar',
      title: 'The First Law of Distributed Objects',
      context: 'Martin Fowler formulated the First Law of Distributed Object Design: Do not distribute your objects. Beginners often assume remote network calls behave like local function calls. A local function call in memory executes in nanoseconds and never suffers packet drops. A network call crosses physical routers, switches, and serialization boundaries where latency multiplies by ten thousand and connections can fail at any instant.',
      takeaway: 'Never assume the server is in the same room as your data. Treat every network transaction as a fallible conversation requiring explicit status checks, timeouts, and defensive contracts.',
      metric: 'PRODUCTION ARCHITECTURE LAW'
    },
    {
      type: 'storyboard',
      badge: 'COMIC SCENE 3 OF 4',
      title: 'Akshay Builds His Very First API Server',
      intro: 'Sameer guides Akshay through writing server.js, where Akshay encounters a classic beginner blooper and discovers the power of middleware.',
      panels: [
        {
          title: 'Writing the First Five Lines',
          time: '01:15 PM',
          scene: 'Akshay creates a new file named server.js in his code workspace, typing out the Express import and initial course data array.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'We import express, create our app instance, and create a small courses array with two course items.',
            replySpeaker: 'Sameer',
            replySpeech: 'Perfect. That array represents our college catalog database. Now add the GET route so clients can read it.'
          },
          realization: 'An API server is simply a program that binds to a network port and listens for incoming requests.'
        },
        {
          title: 'The Missing Middleware Blooper',
          time: '01:35 PM',
          scene: 'Akshay writes app.post to register new courses, opens his terminal, and sends a test request. The terminal explodes with a bright red stack trace.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'Oh no! TypeError: Cannot read properties of undefined! Did I break the whole computer already?!',
            replySpeaker: 'Sameer',
            replySpeech: 'You did not break anything, Akshay! Look at line 4. Did you tell Express how to read JSON text coming across the wire?'
          },
          realization: 'HTTP bodies arrive as raw chunks of binary bytes; servers need a stream parser to decode them.'
        },
        {
          title: 'Mounting express.json',
          time: '01:45 PM',
          scene: 'Sameer points to the top of server.js with a smile. Akshay types app.use(express.json()) and restarts the server.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'By default, Express does not parse request bodies. Adding express.json tells your server to assemble incoming bytes into req.body.',
            replySpeaker: 'Akshay',
            replySpeech: 'It worked! The terminal says server listening on port 3000, and my new course was accepted!'
          },
          realization: 'Middleware acts as a translator standing at the door, converting raw bytes into clean JavaScript objects.'
        },
        {
          title: 'Holding Both Ends of the Wire',
          time: '02:00 PM',
          scene: 'Akshay looks at his terminal and editor side by side, his eyes wide with newfound understanding.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'I wrote twenty lines of JavaScript, and now any computer on our local network can talk to my server! This feels like magic!',
            replySpeaker: 'Sameer',
            replySpeech: 'It is not magic, Akshay. It is engineering. Now let us download a real API Testing Workbench and test every operation.'
          },
          realization: 'True confidence comes from understanding how servers receive, process, and return data.'
        }
      ]
    },
    {
      type: 'blueprint',
      purpose: 'Construct an in memory Express catalog server that listens on port 3000 and serves course data.',
      input: 'HTTP requests (GET /courses without body, POST /courses with JSON payload, PATCH /courses/:code with updates)',
      processing: 'Route pattern matching, TCP stream parsing via express.json(), in memory array mutations',
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
      intro: 'Here is how each section of our beginner friendly server works under the hood:',
      chunks: [
        {
          label: 'Setup and Middleware',
          title: 'Importing Express and Installing the JSON Parser',
          explanation: 'We load Express and mount express.json middleware so incoming request payloads are automatically parsed into JavaScript objects.',
          code: [
            "import express from 'express'",
            "const app = express()",
            "app.use(express.json())"
          ],
          keyTakeaway: 'Without app.use(express.json()), req.body remains undefined on every POST, PUT, and PATCH request.'
        },
        {
          label: 'In Memory Store',
          title: 'Seeding the Initial Course Catalog Array',
          explanation: 'We initialize a lightweight in memory array to act as our local database during development.',
          code: [
            "const courses = [",
            "  { code: 'CS101', title: 'Foundations of Computer Systems', department: 'Computer Science', credits: 4, status: 'Active' },",
            "  { code: 'CS204', title: 'Data Structures and Algorithms', department: 'Computer Science', credits: 4, status: 'Active' }",
            "]"
          ],
          keyTakeaway: 'In memory arrays provide instant, zero setup state for rapid local testing.'
        },
        {
          label: 'Route Handlers and Port Listener',
          title: 'Mounting GET, POST, and Activating Port 3000',
          explanation: 'The server matches client requests to callback functions and listens on port 3000 for incoming TCP connections.',
          code: [
            "app.get('/courses', (req, res) => res.status(200).json({ total: courses.length, courses }))",
            "app.post('/courses', (req, res) => {",
            "  courses.push(req.body)",
            "  res.status(201).json({ message: 'Course successfully registered', course: req.body })",
            "})",
            "app.listen(3000, () => console.log('Apex Campus Catalog Service live on port 3000'))"
          ],
          keyTakeaway: 'Return explicit HTTP status codes: 200 for reading data, 201 for successfully creating new records.'
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
        'Registered routes: GET /courses, POST /courses, PATCH /courses/:code',
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
          vars: [{ name: 'req.body', value: '{ code: "CS102", title: "Discrete Math" }' }],
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
      title: 'The API Testing Workbench and The Five Magic Keys',
      intro: 'Sameer introduces Akshay to the API Testing Workbench, where they test GET, POST, the dangerous PUT vs PATCH trap, and get interrupted by an urgent alarm.',
      panels: [
        {
          title: 'Opening the API Testing Workbench',
          time: '02:30 PM',
          scene: 'Akshay launches the desktop API Testing Workbench. He sees a clean request address bar, method dropdown buttons, and a dedicated response output drawer.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'This is your primary weapon as an API tester. Here you can pick any HTTP verb, set request headers, craft JSON payloads, and inspect status codes.',
            replySpeaker: 'Akshay',
            replySpeech: 'Look at that! I can hit Send on GET /courses and immediately see status 200 OK with the course array!'
          },
          realization: 'Specialized API testing workbenches provide total visibility into network wire conversations.'
        },
        {
          title: 'The Dangerous PUT vs PATCH Trap',
          time: '03:10 PM',
          scene: 'Akshay tries to mark a course as Inactive. He sends a PUT request with only { "status": "Inactive" }. Suddenly, the course title, department, and credits disappear!',
          dialogue: {
            speaker: 'Akshay',
            speech: 'Wait, what happened?! The title and credits are gone! The server replaced the whole object with just my single status field!',
            replySpeaker: 'Sameer',
            replySpeech: 'Think of ordering food at a restaurant! PUT replaces the entire dinner plate. If you order a replacement plate with only pickle, they take away your rice and dal! If you only want to change the pickle, use PATCH!'
          },
          realization: 'PUT is complete resource replacement; PATCH is surgical delta modification.'
        },
        {
          title: 'Tasting REST, SOAP, and GraphQL',
          time: '04:00 PM',
          scene: 'Sameer opens three comparison tabs in the workbench showing the same catalog query in REST JSON, SOAP XML, and a GraphQL query document.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'REST gives standard URLs and status codes. SOAP wraps XML in heavy envelopes. GraphQL lets the client ask for only the exact fields they need.',
            replySpeaker: 'Akshay',
            replySpeech: 'In GraphQL I can ask for just code and title, and the server returns only those two fields without extra clutter!'
          },
          realization: 'Different API styles solve different enterprise trade offs; all of them travel across HTTP.'
        },
        {
          title: 'The Emergency Strobe Alarm',
          time: '04:45 PM',
          scene: 'Akshay leans back, celebrating his mastery of all five CRUD operations. Suddenly, a piercing emergency pager alarm shrills across the room, and the operations monitor flashes crimson red!',
          dialogue: {
            speaker: 'Akshay',
            speech: 'Sameer, what is that sound?! The wall monitor is flashing red: Transit Shuttle Service 500 Internal Server Error!',
            replySpeaker: 'Sameer',
            replySpeech: 'Orientation begins tomorrow morning, and our student transit tracker just crashed in production. Grab your laptop, Akshay. Tomorrow, our real mission begins!'
          },
          realization: 'A software engineer training is tested the moment production breaks.'
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
          text: 'Exactly. PUT replaces the entire thali. If you only want to change one attribute, send a PATCH request instead.',
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
      title: 'Quest 1 Complete: From Absolute Zero to Wire Apprentice',
      summary: 'Akshay has advanced from a confused Day 1 intern typing URLs into Google Chrome to building his own minimal Express API server, auditing the five core HTTP operations, and reading network wire conversations with clarity.',
      powers: [
        'Clear mental model of the Restaurant Analogy: Client, Waiter API, and Backend Kitchen',
        'Understanding what On the Wire means: raw postcards traveling across physical cables before browser decoration',
        'Ability to construct an in memory Express server with JSON middleware on port 3000',
        'Precision understanding of all five CRUD operations: POST, GET, PUT, PATCH, and DELETE',
        'Dodging the PUT vs PATCH trap by choosing surgical delta updates over full document replacement'
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
      text: 'A piercing emergency pager alarm shrills across the room as the wall monitors strobe in crimson red. Orientation morning begins tomorrow at eight sharp, but the campus transit shuttle tracking API has suddenly crashed with an uncaught 500 Internal Server Error. Over one thousand students are stranded at the gates without shuttle arrival timings. When student phones query the route locator with an absent parameter, the entire backend service halts. In Chapter 2, Akshay and Sameer enter the crisis war room to investigate the root cause, dissect status codes, and engineer defensive input validation guards.'
    }
  ]
}
