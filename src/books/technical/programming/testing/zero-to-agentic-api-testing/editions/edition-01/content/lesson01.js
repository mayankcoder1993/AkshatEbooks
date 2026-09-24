import restaurantImg from '../assets/api-concept-restaurant.jpg'
import bridgeImg from '../assets/frontend-backend-api-bridge.jpg'
import pyramidImg from '../assets/testing-pyramid-focus.jpg'
import matrixImg from '../assets/api-architectures-matrix.jpg'
import anatomyImg from '../assets/http-wire-anatomy.jpg'
import serverAnatomyImg from '../assets/express-server-code-anatomy.jpg'
import warRoomImg from '../assets/apex-campus-crisis-war-room.jpg'

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
          desc: 'Chapter 3: Converting manual checks into automated Postman JavaScript assertions.'
        }
      ],
      achieve: 'Build and run a minimal API server from scratch and verify every core HTTP operation over the wire.',
      how: 'Assembling a runnable Express server step by step, executing POST, GET, PUT, PATCH, and DELETE, and comparing REST, SOAP, and GraphQL using the same book inquiry.',
      carry: 'The assembled runnable server.js file and the foundational mental model of an HTTP request and response pair.'
    },
    {
      type: 'heading',
      text: 'The Day You Walked into the War Room',
    },
    {
      type: 'paragraph',
      text: 'It is 8:14 PM on the eve of campus wide orientation at Apex University. Fluorescent lights hum in the engineering command center. A massive curved display shows real time transit telemetry, student registration queues, and a flood of failing network requests.',
    },
    {
      type: 'paragraph',
      text: 'The mobile development lead is visibly frustrated: The mobile app is completely blank. The backend transit service must have crashed. The backend lead pushes back immediately: Our database clusters are healthy and CPU load is under twelve percent. The mobile team must have broken their UI rendering.',
    },
    {
      type: 'paragraph',
      text: 'Both engineering teams are deadlocked because they are staring at their own screens, arguing across an invisible chasm: the network wire.',
    },
    {
      type: 'paragraph',
      text: 'You have just joined the engineering team as an aspiring tester and developer. You want to help resolve the crisis, but you face an immediate reality: you have never audited network packets or debugged distributed services before. How can you diagnose why two computers cannot speak to each other if you have never built an API from scratch?',
    },
    {
      type: 'paragraph',
      text: 'You cannot debug what you do not understand. To see through the confusion of the war room, you need to understand what an API truly is, how data travels across the physical wire, and how servers process requests.',
    },
    {
      type: 'paragraph',
      text: 'You pull up a chair in the corner of the room, open your laptop terminal, and begin where every great engineer begins: by understanding the foundational mechanics of client server communication from first principles.',
    },
    {
      type: 'heading',
      text: 'Step 1: The Core Mental Model: What is an API?',
    },
    {
      type: 'paragraph',
      text: 'Every day you tap buttons on your smartphone: you order food on a delivery app, check the weather forecast, or book a cab. But your phone does not store the global weather database, and it certainly does not store the restaurant kitchen inventory. Your phone is a **client**, and the computer holding the data miles away in a data center is the **server**.',
    },
    {
      type: 'paragraph',
      text: 'How do these two computers talk to each other? They communicate through an **API**, which stands for Application Programming Interface. In simple English, an API is a digital messenger that takes your request to the server, tells the server what you want, and brings back the reply.',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'CLIENT SERVER ARCHITECTURE',
      title: 'The Restaurant Analogy: Customer, Waiter, and Kitchen Backend',
      text: 'Imagine dining in a restaurant. You are the customer sitting at the table. The kitchen is the backend system with all the ingredients and cooking equipment. You cannot walk into the kitchen and cook food yourself. Instead, the waiter takes your order, brings it to the chef, and returns with your meal.',
      src: restaurantImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-concept-restaurant.jpg',
      w: 1408,
      h: 768,
      alt: 'Illustrated modern restaurant analogy showing Customer at table as Client, Waiter carrying order notepad as API Messenger, and Kitchen Chef as Backend Server.',
      caption: 'The restaurant mental model: The client asks under agreed rules, and the server answers.',
      points: [
        'The Customer (Client App): Sits in the dining room, browses the menu, and decides what data to request.',
        'The Waiter (API Messenger): Delivers your order to the kitchen and brings back your prepared food.',
        'The Kitchen (Backend Server): Stores all raw ingredients and processes business logic securely behind the counter.',
      ],
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'ENTERPRISE ARCHITECTURE',
      title: 'The Frontend and Backend Bridge: How Modern Applications Communicate',
      text: 'In enterprise software, the frontend client application (iOS, Android, React Web) never connects directly to database servers. Instead, it dispatches structured HTTP requests with JSON contracts across the network wire to an API gateway and backend service.',
      src: bridgeImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/frontend-backend-api-bridge.jpg',
      w: 1408,
      h: 768,
      alt: 'Architectural bridge diagram showing Frontend Clients connecting through HTTP REST and JSON Contracts to Backend Spring Boot and PostgreSQL Database.',
      caption: 'The API bridge: Decoupling user interfaces from backend database clusters across the network wire.',
      points: [
        'Frontend Clients: Mobile applications and web browsers rendering UI components.',
        'API Gateway and Network Wire: The HTTP communication layer transmitting standardized JSON payloads.',
        'Backend and Database: Enterprise services executing business logic and persisting state to database clusters.',
      ],
    },
    {
      type: 'definition',
      term: 'API (Application Programming Interface)',
      text: 'A structured set of rules and protocols that lets two software applications communicate and exchange data securely without exposing internal database credentials or implementation details.',
      example: 'A mobile library app requesting a list of available textbooks from the campus catalog server.'
    },
    {
      type: 'paragraph',
      text: 'Before we touch network protocols, look at how data travels. In modern web APIs, data is represented in **JSON** (JavaScript Object Notation). A single record is wrapped in curly braces like {"id": 1, "title": "Clean Architecture", "author": "Robert Martin"}. When a server holds multiple records, it groups them inside square brackets as a list: [{ ... }]. Now let us build a real program that serves this data.',
    },
    {
      type: 'heading',
      text: 'Step 2: Assembling Your First API Server Step by Step in Code Chunks',
    },
    {
      type: 'paragraph',
      text: 'When you are called into an engineering war room to debug a broken system, you cannot treat the API as a mysterious black box. You must understand how a web server is actually constructed from the inside out. Rather than pasting a whole file all at once, let us build server.js progressively in four clean code chunks, explaining the exact technical responsibility of each component as an engineer would expect.',
    },
    {
      type: 'steps',
      items: [
        'Verify Node.js: Open your terminal and run node -v. Any modern LTS version (such as Node 18 or Node 20) is ready to go.',
        'Create a Project Folder: Run mkdir campus_api, then cd campus_api.',
        'Initialize Node.js: Run npm init -y to generate a default package.json configuration file.',
        'Install Express: Run npm install express to pull the lightweight web routing framework into your project node_modules.',
        'Create server.js: Create a new file named server.js in your campus_api directory. We will now assemble it chunk by chunk.',
      ],
    },
    {
      type: 'chunked-code',
      badge: 'ASSEMBLING SERVER.JS',
      title: 'Step by Step Construction of server.js',
      intro: 'Open an empty file named server.js in your campus_api directory and add these four code sections line by line:',
      chunks: [
        {
          label: 'CHUNK 1: APPLICATION SETUP',
          filename: 'server.js (Lines 1 to 3)',
          title: 'Importing Express and Instantiating the Application',
          code: 'const express = require("express");\nconst app = express();',
          explanation: 'Loads the Express web routing library from node_modules and invokes it to instantiate the central application object named app. In Node.js architecture, this app instance manages the HTTP request lifecycle, registers endpoint routes, and controls middleware pipelines.',
          keyTakeaway: 'app is the central server instance coordinating all HTTP traffic.'
        },
        {
          label: 'CHUNK 2: STREAM PARSING',
          filename: 'server.js (Lines 5 to 7)',
          title: 'Configuring JSON Body Deserialization Middleware',
          code: '// Middleware to parse incoming JSON payloads\napp.use(express.json());',
          explanation: 'In Node.js, incoming HTTP request bodies arrive as raw binary streams split across network TCP packets. Without a deserializer, req.body remains undefined. express.json() acts as stream parsing middleware: it intercepts incoming packets with Content-Type application/json, buffers the data chunks, parses the raw JSON text into structured JavaScript objects, and attaches the parsed object directly to req.body.',
          keyTakeaway: 'Without express.json(), req.body remains completely undefined when receiving JSON payloads.'
        },
        {
          label: 'CHUNK 3: IN MEMORY STATE',
          filename: 'server.js (Lines 9 to 13)',
          title: 'Allocating the In Memory Datastore and State Counter',
          code: '// In memory textbook records and monotonically advancing counter\nlet books = [\n  { id: 1, title: "Clean Architecture", author: "Robert Martin" }\n];\nlet nextId = 2;',
          explanation: 'Allocates an array directly inside system RAM (Node.js heap memory) seeded with an initial textbook object. Using in memory storage allows rapid local experimentation without external database drivers, and resets cleanly on server restart. The nextId counter advances monotonically from 2 to 3, 4, and beyond, ensuring every newly created resource receives an immutable, collision free ID.',
          keyTakeaway: 'In memory state enables zero database friction; monotonic counters prevent ID collisions.'
        },
        {
          label: 'CHUNK 4: PORT BINDING',
          filename: 'server.js (Lines 15 to 18)',
          title: 'Binding the Process to TCP Port 3000',
          code: '// Start the server listening on local port 3000\napp.listen(3000, () => {\n  console.log("Book catalog server listening on http://localhost:3000");\n});',
          explanation: 'Binds the Node.js process to TCP communication port 3000 on the local loopback interface (127.0.0.1). Think of your computer as a high rise residential building: localhost is the building address, and port 3000 is the specific apartment door where our catalog service accepts visitors.',
          keyTakeaway: 'Port 3000 is the dedicated communication doorway where our server receives requests.'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Here is how your assembled server.js file looks with all four components united. Route handlers will be inserted right above app.listen:',
    },
    {
      type: 'code',
      filename: 'server.js',
      lines: [
        '// server.js: Minimal API Server Starter',
        'const express = require("express");',
        'const app = express();',
        '',
        '// Middleware to parse incoming JSON payloads',
        'app.use(express.json());',
        '',
        '// In memory textbook records and monotonically advancing counter',
        'let books = [',
        '  { id: 1, title: "Clean Architecture", author: "Robert Martin" }',
        '];',
        'let nextId = 2;',
        '',
        '// =========================================',
        '// ROUTE HANDLERS WILL BE ADDED HERE',
        '// =========================================',
        '',
        '// Start the server listening on local port 3000',
        'app.listen(3000, () => {',
        '  console.log("Book catalog server listening on http://localhost:3000");',
        '});',
      ],
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'ARCHITECTURAL ANATOMY',
      title: 'Architectural Flow of server.js: Data Journey through TCP and Memory',
      text: 'Here is how your minimal server processes traffic under the hood: incoming TCP requests enter port 3000, pass through stream parsing middleware, mutate heap memory state, and return formatted JSON.',
      src: serverAnatomyImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/express-server-code-anatomy.jpg',
      alt: 'Architectural flow diagram of server.js showing Client Request, Port 3000, JSON Stream Middleware, In Memory Heap Array, and JSON Response.',
      caption: 'The Architectural Flow of server.js: Client Request entering Port 3000, passing through JSON Middleware, mutating Heap RAM State, and returning formatted JSON.',
      w: 1408,
      h: 768,
      points: [
        'The Client Request: Dispatches an HTTP call over the network wire targeting localhost port 3000.',
        'The Port 3000 Listener: Accepts the incoming TCP socket connection on your machine.',
        'The JSON Middleware: Intercepts raw stream bytes and populates req.body with a structured JavaScript object.',
        'The In Memory Store: Reads and writes textbook records directly inside Node.js heap memory.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Now start the server from your terminal by running the following command:',
    },
    {
      type: 'terminal',
      command: 'node server.js',
      lines: [
        'Book catalog server listening on http://localhost:3000',
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Terminal Controls and Stopping the Server',
      paragraphs: [
        '• Stopping and Restarting: Whenever you add new route handlers to server.js in subsequent steps, switch to your terminal, press Ctrl+C to stop the process, and run node server.js again to load your changes.',
        '• Connection Refused Check: If your API client ever displays "Error: connect ECONNREFUSED 127.0.0.1:3000", verify that node server.js is actively running in your terminal.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 3: Operation 1: Creating a Record with POST /books',
    },
    {
      type: 'paragraph',
      text: 'Now let us add a new textbook to our catalog. In REST architecture, creating a new resource is performed using the HTTP **POST** method.',
    },
    {
      type: 'chunked-code',
      badge: 'ADD ROUTE HANDLER',
      title: 'Adding the POST Handler to server.js',
      intro: 'Insert this route handler into server.js directly above app.listen:',
      chunks: [
        {
          label: 'The Creation Handler',
          filename: 'post-books-handler.js',
          code: 'app.post("/books", (req, res) => {\n  const newBook = { id: nextId++, title: req.body.title, author: req.body.author };\n  books.push(newBook);\n  res.status(201).json(newBook);\n});',
          title: 'Assigning ID and Appending to Memory',
          explanation: 'Reads title and author from req.body, assigns nextId (which advances from 2 to 3), adds the object to the books array, and returns status 201 Created.',
          keyTakeaway: 'HTTP status 201 Created explicitly confirms a new resource was created.'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Save server.js, press Ctrl+C in your terminal, and restart the server with node server.js. Now open your API testing workbench (such as Postman) and configure your request inputs: Method is **POST**, URL is **http://localhost:3000/books**, Header is **Content-Type: application/json**, and Body is set to raw JSON: {"title": "The Pragmatic Programmer", "author": "David Thomas"}.',
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'When you dispatch this POST request carrying the new textbook data, what status code and ID will the server return?',
      options: [
        'HTTP status 201 Created with ID 2 and the newly created book object: { "id": 2, "title": "The Pragmatic Programmer", "author": "David Thomas" }',
        'HTTP status 200 OK with the entire library array',
        'HTTP status 400 Bad Request because ID was omitted from the request body',
        'HTTP status 204 No Content'
      ],
      answerIndex: 0,
      revealTitle: 'Recorded Wire Response for POST /books',
      explanation: 'Resource created! The server took nextId (2), attached it to the incoming title and author, pushed it into the array, incremented nextId to 3, and returned HTTP 201 Created.'
    },
    {
      type: 'api-inspector',
      title: 'Live Recorded Exchange: POST /books (Create New Record)',
      method: 'POST',
      url: 'http://localhost:3000/books',
      headers: {
        'Content-Type': 'application/json'
      },
      requestBody: {
        title: 'The Pragmatic Programmer',
        author: 'David Thomas'
      },
      status: '201 Created',
      time: '24 ms',
      size: '76 B',
      responseBody: {
        id: 2,
        title: 'The Pragmatic Programmer',
        author: 'David Thomas'
      },
      sampleLabel: 'RECORDED WIRE CAPTURE'
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'First Recovery Check: Connection Refused',
      paragraphs: [
        'If your API tool displays "Error: connect ECONNREFUSED 127.0.0.1:3000", do not panic! This message simply means no program is listening on port 3000.',
        'Check your terminal window: did you forget to run node server.js? Make sure the terminal shows "Book catalog server listening" before sending requests.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 4: Operation 2: Reading Records with GET /books',
    },
    {
      type: 'paragraph',
      text: 'Now let us verify what is stored in server memory based on the record we created in Step 3! In REST architecture, retrieving data without altering server state is performed using the HTTP **GET** method.',
    },
    {
      type: 'chunked-code',
      badge: 'ADD ROUTE HANDLER',
      title: 'Adding the GET Handler to server.js',
      intro: 'Insert this small route handler into server.js below your POST handler:',
      chunks: [
        {
          label: 'The Route Definition',
          filename: 'get-books-handler.js',
          code: 'app.get("/books", (req, res) => {\n  res.status(200).json(books);\n});',
          title: 'Replying with the Book List',
          explanation: 'When a client asks for GET /books, the server responds with HTTP status 200 OK and transmits the books array as JSON.',
          keyTakeaway: 'res.status(200).json(...) sets the success status code and formats data as JSON.'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Save server.js, press Ctrl+C in your terminal, and restart the server with node server.js. Now open your API testing workbench and configure your request inputs: Method is **GET**, URL is **http://localhost:3000/books**, and Body is left completely empty.',
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'When you dispatch this GET request to http://localhost:3000/books based on the book created in Step 3, what status code, payload structure, and book count do you expect to see?',
      options: [
        'HTTP status 200 OK with a JSON array containing both the initial book and the new book created in Step 3: [{ id: 1, title: "Clean Architecture", author: "Robert Martin" }, { id: 2, title: "The Pragmatic Programmer", author: "David Thomas" }]',
        'HTTP status 201 Created with a single book object',
        'HTTP status 404 Not Found because the server is empty',
        'HTTP status 500 Server Error because database connection was not established'
      ],
      answerIndex: 0,
      revealTitle: 'Recorded Wire Response for GET /books',
      explanation: 'Success confirmed! The server finds the books array in RAM, wraps it in status 200 OK, and returns both records inside an array bracket, directly verifying the record created in Step 3!'
    },
    {
      type: 'api-inspector',
      title: 'Live Recorded Exchange: GET /books (Read All Records)',
      method: 'GET',
      url: 'http://localhost:3000/books',
      status: '200 OK',
      time: '18 ms',
      size: '128 B',
      responseBody: [
        {
          id: 1,
          title: 'Clean Architecture',
          author: 'Robert Martin'
        },
        {
          id: 2,
          title: 'The Pragmatic Programmer',
          author: 'David Thomas'
        }
      ],
      sampleLabel: 'RECORDED WIRE CAPTURE'
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Objects versus Lists: Spotting the Data Structure Shift',
      paragraphs: [
        'Notice the structural difference: when you sent POST /books in Step 3, you transmitted a single JSON object wrapped in curly braces { ... } because you were creating one individual record.',
        'When you dispatched GET /books in Step 4, the server returned an array [ ... ] holding both Book 1 and Book 2! An array groups multiple items; an object defines a single item.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 5: PUT, PATCH, and DELETE: Complete Replacement, Delta, and Removal',
    },
    {
      type: 'paragraph',
      text: 'Now let us master the remaining three operations: PUT, PATCH, and DELETE. Each operation solves a distinct data modification challenge.',
    },
    {
      type: 'heading',
      text: 'Operation 3: Full Record Replacement with PUT /books/:id',
    },
    {
      type: 'paragraph',
      text: 'Suppose we need to update record 1 with a new title and author. In REST architecture, **PUT** represents complete resource replacement. The :id in the URL path is a parameter specifying which record to replace:',
    },
    {
      type: 'code',
      filename: 'put-handler.js',
      lines: [
        '// Full replacement (PUT /books/:id)',
        'app.put("/books/:id", (req, res) => {',
        '  const id = Number(req.params.id);',
        '  const index = books.findIndex(b => b.id === id);',
        '  if (index === -1) return res.status(404).json({ error: "Book not found" });',
        '  books[index] = { id: id, title: req.body.title, author: req.body.author };',
        '  res.status(200).json(books[index]);',
        '});',
      ],
    },
    {
      type: 'paragraph',
      text: 'Notice that PUT replaces the entire object. If a client sends a PUT payload omitting the author, the author property becomes undefined! Let us replace Book 1 by sending PUT to http://localhost:3000/books/1 with payload: {"title": "Clean Code", "author": "Robert Martin"}:',
    },
    {
      type: 'api-inspector',
      title: 'Live Recorded Exchange: PUT /books/1 (Full Record Replacement)',
      method: 'PUT',
      url: 'http://localhost:3000/books/1',
      headers: {
        'Content-Type': 'application/json'
      },
      requestBody: {
        title: 'Clean Code',
        author: 'Robert Martin'
      },
      status: '200 OK',
      time: '21 ms',
      size: '56 B',
      responseBody: {
        id: 1,
        title: 'Clean Code',
        author: 'Robert Martin'
      },
      sampleLabel: 'RECORDED WIRE CAPTURE'
    },
    {
      type: 'heading',
      text: 'Operation 4: Partial Modification with PATCH /books/:id',
    },
    {
      type: 'paragraph',
      text: 'What if you only want to change the title of Book 1 without touching the author? With PUT, omitting the author wiped it out. This is why **PATCH** exists: PATCH applies a partial delta modification, updating only the specific fields supplied:',
    },
    {
      type: 'code',
      filename: 'patch-handler.js',
      lines: [
        '// Partial modification (PATCH /books/:id)',
        'app.patch("/books/:id", (req, res) => {',
        '  const id = Number(req.params.id);',
        '  const book = books.find(b => b.id === id);',
        '  if (!book) return res.status(404).json({ error: "Book not found" });',
        '  if (req.body.title !== undefined) book.title = req.body.title;',
        '  if (req.body.author !== undefined) book.author = req.body.author;',
        '  res.status(200).json(book);',
        '});',
      ],
    },
    {
      type: 'paragraph',
      text: 'Let us send a PATCH request to http://localhost:3000/books/1 with only the title: {"title": "Clean Craftsmanship"}. Notice the author is retained intact in server memory:',
    },
    {
      type: 'api-inspector',
      title: 'Live Recorded Exchange: PATCH /books/1 (Partial Delta Update)',
      method: 'PATCH',
      url: 'http://localhost:3000/books/1',
      headers: {
        'Content-Type': 'application/json'
      },
      requestBody: {
        title: 'Clean Craftsmanship'
      },
      status: '200 OK',
      time: '19 ms',
      size: '64 B',
      responseBody: {
        id: 1,
        title: 'Clean Craftsmanship',
        author: 'Robert Martin'
      },
      sampleLabel: 'RECORDED WIRE CAPTURE'
    },
    {
      type: 'heading',
      text: 'Operation 5: Removing a Record with DELETE /books/:id',
    },
    {
      type: 'paragraph',
      text: 'Finally, we want to remove a textbook from our catalog. In REST architecture, the HTTP **DELETE** verb purges the targeted resource:',
    },
    {
      type: 'code',
      filename: 'delete-handler.js',
      lines: [
        '// Delete a book (DELETE /books/:id)',
        'app.delete("/books/:id", (req, res) => {',
        '  const id = Number(req.params.id);',
        '  const index = books.findIndex(b => b.id === id);',
        '  if (index === -1) return res.status(404).json({ error: "Book not found" });',
        '  books.splice(index, 1);',
        '  res.status(200).json({ deleted: id });',
        '});',
      ],
    },
    {
      type: 'paragraph',
      text: 'Let us dispatch DELETE to http://localhost:3000/books/1. The server purges the record and confirms with {"deleted": 1}:',
    },
    {
      type: 'api-inspector',
      title: 'Live Recorded Exchange: DELETE /books/1 (Remove Record)',
      method: 'DELETE',
      url: 'http://localhost:3000/books/1',
      status: '200 OK',
      time: '15 ms',
      size: '15 B',
      responseBody: {
        deleted: 1
      },
      sampleLabel: 'RECORDED WIRE CAPTURE'
    },
    {
      type: 'paragraph',
      text: 'Now let us run a follow up GET /books request to verify the server data state after deletion:',
    },
    {
      type: 'api-inspector',
      title: 'Live Recorded Exchange: Verification GET /books (Proving Deletion)',
      method: 'GET',
      url: 'http://localhost:3000/books',
      status: '200 OK',
      time: '14 ms',
      size: '78 B',
      responseBody: [
        {
          id: 2,
          title: 'The Pragmatic Programmer',
          author: 'David Thomas'
        }
      ],
      sampleLabel: 'RECORDED WIRE CAPTURE'
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Monotonic ID Protection: Why Next Book Gets ID 3',
      paragraphs: [
        'Notice that Book 1 was deleted, leaving only Book 2 in the catalog.',
        'If you now execute POST /books to add a third book, what ID will it receive? Because our server relies on nextId (which is now 3), the new record is assigned ID 3.',
        'It does NOT reuse ID 1! Reusing old IDs is a dangerous anti pattern that corrupts historical audit logs and foreign keys in relational databases.',
      ],
    },
    {
      type: 'heading',
      text: 'The Five Operations Compared: Safe and Idempotent Behaviors',
    },
    {
      type: 'paragraph',
      text: 'Now that you have executed all five operations with your own hands, study how their behaviors compare. In API engineering, operations are classified along two core dimensions: **Safe** and **Idempotent**:',
    },
    {
      type: 'comparison',
      title: 'The Five Universal HTTP Operations',
      columns: ['HTTP Method', 'Everyday Purpose', 'Payload Body?', 'Typical Status', 'Safe?', 'Idempotent?'],
      rows: [
        ['GET', 'Read records without modifying state', 'No body sent', '200 OK', 'Yes (Read Only)', 'Yes'],
        ['POST', 'Create a new resource', 'Requires JSON body', '201 Created', 'No (Creates state)', 'No (Repeated POST creates duplicates)'],
        ['PUT', 'Completely replace target resource', 'Requires full body', '200 OK or 201', 'No (Modifies state)', 'Yes (Repeated PUT yields identical state)'],
        ['PATCH', 'Partially update selected fields', 'Requires partial body', '200 OK', 'No (Modifies state)', 'Usually Yes (when setting values)'],
        ['DELETE', 'Purge target resource', 'No body needed', '200 OK or 204', 'No (Deletes state)', 'Yes (Subsequent calls leave resource absent)'],
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Understanding Safe vs Idempotent from Your Real Executions',
      paragraphs: [
        '• Safe: Calling GET /books five times in a row never changes the books stored on the server. Safe methods are strictly read only.',
        '• Idempotent: If you send DELETE /books/1 once, the book is deleted. If you send DELETE /books/1 again, the book is still absent from the catalog. The server state remains identical. In contrast, sending POST /books ten times creates ten distinct book records in memory, which is why POST is not idempotent.',
      ],
    },
    {
      type: 'heading',
      text: 'The Complete Assembled Server and Command Transcript',
    },
    {
      type: 'paragraph',
      text: 'Here is our complete minimal API server with all five route handlers assembled into one file. Save this complete code as server.js in your project directory:',
    },
    {
      type: 'code',
      filename: 'server.js',
      lines: [
        '// Complete Minimal API Server (server.js)',
        'const express = require("express");',
        'const app = express();',
        'app.use(express.json());',
        '',
        'let books = [',
        '  { id: 1, title: "Clean Architecture", author: "Robert Martin" }',
        '];',
        'let nextId = 2;',
        '',
        '// 1. GET /books: Read all books',
        'app.get("/books", (req, res) => {',
        '  res.status(200).json(books);',
        '});',
        '',
        '// 2. POST /books: Create a new book',
        'app.post("/books", (req, res) => {',
        '  const newBook = { id: nextId++, title: req.body.title, author: req.body.author };',
        '  books.push(newBook);',
        '  res.status(201).json(newBook);',
        '});',
        '',
        '// 3. PUT /books/:id: Full resource replacement',
        'app.put("/books/:id", (req, res) => {',
        '  const id = Number(req.params.id);',
        '  const index = books.findIndex(b => b.id === id);',
        '  if (index === -1) return res.status(404).json({ error: "Book not found" });',
        '  books[index] = { id: id, title: req.body.title, author: req.body.author };',
        '  res.status(200).json(books[index]);',
        '});',
        '',
        '// 4. PATCH /books/:id: Partial delta update',
        'app.patch("/books/:id", (req, res) => {',
        '  const id = Number(req.params.id);',
        '  const book = books.find(b => b.id === id);',
        '  if (!book) return res.status(404).json({ error: "Book not found" });',
        '  if (req.body.title !== undefined) book.title = req.body.title;',
        '  if (req.body.author !== undefined) book.author = req.body.author;',
        '  res.status(200).json(book);',
        '});',
        '',
        '// 5. DELETE /books/:id: Purge a record',
        'app.delete("/books/:id", (req, res) => {',
        '  const id = Number(req.params.id);',
        '  const index = books.findIndex(b => b.id === id);',
        '  if (index === -1) return res.status(404).json({ error: "Book not found" });',
        '  books.splice(index, 1);',
        '  res.status(200).json({ deleted: id });',
        '});',
        '',
        'app.listen(3000, () => {',
        '  console.log("Book catalog server listening on http://localhost:3000");',
        '});',
      ],
    },
    {
      type: 'terminal',
      command: 'Complete Five Operation Execution Transcript',
      lines: [
        '$ node server.js',
        'Book catalog server listening on http://localhost:3000',
        '',
        '# 1. Read catalog (GET /books)',
        'HTTP/1.1 200 OK -> [{"id":1,"title":"Clean Architecture","author":"Robert Martin"}]',
        '',
        '# 2. Add second book (POST /books)',
        'HTTP/1.1 201 Created -> {"id":2,"title":"The Pragmatic Programmer","author":"David Thomas"}',
        '',
        '# 3. Replace book 1 (PUT /books/1)',
        'HTTP/1.1 200 OK -> {"id":1,"title":"Clean Code","author":"Robert Martin"}',
        '',
        '# 4. Update title only (PATCH /books/1)',
        'HTTP/1.1 200 OK -> {"id":1,"title":"Clean Craftsmanship","author":"Robert Martin"}',
        '',
        '# 5. Delete book 1 (DELETE /books/1)',
        'HTTP/1.1 200 OK -> {"deleted":1}',
        '',
        '# Verification GET: Only book 2 remains',
        'HTTP/1.1 200 OK -> [{"id":2,"title":"The Pragmatic Programmer","author":"David Thomas"}]',
      ],
    },
    {
      type: 'heading',
      text: 'Interactive Workbench: In Browser Simulation',
    },
    {
      type: 'paragraph',
      text: 'For readers reviewing this chapter inside our interactive digital reading environment, you can also experiment dynamically with custom book titles, authors, and target IDs using the in browser simulation below:',
    },
    {
      type: 'mini-api',
      title: 'In Browser Simulation: Five Handler Book Catalog API',
    },
    {
      type: 'heading',
      text: 'Step 6: Deconstructing Both Sides of the Wire Exchange',
    },
    {
      type: 'paragraph',
      text: 'When your computer talks to a server over the network, it dispatches an **HTTP Request** packet and receives an **HTTP Response** packet. Now let us deconstruct the exact bytes exchanged during our earlier POST request when adding Book 2:',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'PROTOCOL ANATOMY',
      title: 'Anatomy of an HTTP Message: Request and Response Packet Structure',
      text: 'Every network transaction consists of two halves: the client request specifying method, path, headers, and body, and the server response specifying status code, response headers, and returned data.',
      src: anatomyImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/http-wire-anatomy.jpg',
      w: 1408,
      h: 768,
      alt: 'Detailed two panel diagram showing HTTP Request on left with Method, Host, Headers, Body, and HTTP Response on right with Status, Headers, Body.',
      caption: 'The four fundamental parts of every HTTP request and response.',
      points: [
        'Request Line: Specifies the HTTP verb, resource path (/books), and protocol version.',
        'Request Headers: Metadata such as Content-Type telling the server that JSON payload is attached.',
        'Request Body: The actual data payload transmitted to the server.',
        'Status Line: The numerical status code (such as 201 Created) indicating transaction outcome.',
      ],
    },
    {
      type: 'chunked-code',
      badge: 'WIRE ANATOMY CHUNKS',
      title: 'Deconstructing the POST /books Wire Exchange',
      intro: 'Inspect each component of the request and response from our earlier execution:',
      chunks: [
        {
          label: 'Part 1: The Request Line',
          filename: 'request-line.http',
          code: 'POST /books HTTP/1.1\nHost: localhost:3000',
          title: 'Specifying Method, Path, and Host',
          explanation: 'The request line declares the HTTP method, resource path, protocol version, and target host.',
          keyTakeaway: 'The method indicates desired action; the path indicates target resource.'
        },
        {
          label: 'Part 2: Request Headers & Body',
          filename: 'request-body.json',
          code: 'Content-Type: application/json\nAccept: application/json\n\n{\n  "title": "The Pragmatic Programmer",\n  "author": "David Thomas"\n}',
          title: 'Content Type and Outgoing Data',
          explanation: 'The Content-Type header informs the server that raw JSON text follows in the request body.',
          keyTakeaway: 'Always send Content-Type: application/json when transmitting JSON data.'
        },
        {
          label: 'Part 3: The Response Status Line',
          filename: 'response-status.http',
          code: 'HTTP/1.1 201 Created',
          title: 'Server Transaction Result',
          explanation: 'The server acknowledges receipt and confirms a new resource was created in memory.',
          keyTakeaway: '2xx family indicates successful transaction completion.'
        },
        {
          label: 'Part 4: Response Headers & Body',
          filename: 'response-body.json',
          code: 'Content-Type: application/json; charset=utf-8\n\n{\n  "id": 2,\n  "title": "The Pragmatic Programmer",\n  "author": "David Thomas"\n}',
          title: 'Returned Data Payload',
          explanation: 'The server returns the freshly created book record complete with its assigned ID.',
          keyTakeaway: 'The response body contains the structured data requested by the client.'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 7: Tasting the Three Architectural Worlds: REST, SOAP, and GraphQL',
    },
    {
      type: 'paragraph',
      text: 'Not all APIs look identical. In enterprise software, you will encounter three major architectural styles: REST, SOAP, and GraphQL. To understand how their shapes differ, let us first ask all three styles the exact same question: "Retrieve the title of book ID 1":',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'ARCHITECTURAL STYLES',
      title: 'Comparing API Architectures: REST, SOAP, and GraphQL',
      text: 'REST treats data as unique URL resources formatted in lightweight JSON. SOAP packages requests in formal XML envelopes with rigid schemas. GraphQL exposes a single endpoint where clients request the exact fields they need.',
      src: matrixImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-architectures-matrix.jpg',
      w: 1408,
      h: 768,
      alt: 'Comparison diagram showing REST with URL resource paths, SOAP with XML envelope, and GraphQL with flexible query selection.',
      caption: 'Three architectural styles answering the same inquiry.',
      points: [
        'REST (Representational State Transfer): Targets URL resources like /books/1 using standard HTTP verbs.',
        'SOAP (Simple Object Access Protocol): Encloses method calls inside formal XML envelope structures.',
        'GraphQL: Sends query documents to a single /graphql endpoint, selecting exact requested fields.',
      ],
    },
    {
      type: 'chunked-code',
      badge: 'PROTOCOL COMPARISON',
      title: 'Asking the Same Question: Book ID 1 Across Three Protocols',
      intro: 'Observe how the exact same data query is formatted in each architectural style:',
      chunks: [
        {
          label: 'Style 1: RESTful Query',
          filename: 'rest-query.http',
          code: 'GET /books/1 HTTP/1.1\nHost: localhost:3000\nAccept: application/json\n\n// Response 200 OK\n{\n  "id": 1,\n  "title": "Clean Architecture",\n  "author": "Robert Martin"\n}',
          title: 'Resource Centric REST Query',
          explanation: 'REST targets a specific URL resource path (/books/1) with the GET verb and returns lightweight JSON.',
          keyTakeaway: 'REST is resource oriented and leverages standard HTTP verbs and status codes.'
        },
        {
          label: 'Style 2: SOAP WebService (Hypothetical Contract)',
          filename: 'soap-envelope.xml',
          code: 'POST /BookService HTTP/1.1\nHost: localhost:3000\nContent-Type: application/soap+xml\n\n<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">\n  <soap:Body>\n    <GetBookTitleRequest xmlns="http://campus.edu/books">\n      <bookId>1</bookId>\n    </GetBookTitleRequest>\n  </soap:Body>\n</soap:Envelope>',
          title: 'XML Envelope Wrapper',
          explanation: 'SOAP wraps every request inside a formal XML Envelope and Body, dispatching via HTTP POST.',
          keyTakeaway: 'SOAP is strict, protocol heavy, and relies exclusively on XML payloads.'
        },
        {
          label: 'Style 3: GraphQL Query (Hypothetical Contract)',
          filename: 'book-query.graphql',
          code: 'POST /graphql HTTP/1.1\nHost: localhost:3000\nContent-Type: application/json\n\n{\n  "query": "query { book(id: 1) { title } }"\n}\n\n// Response 200 OK\n{\n  "data": {\n    "book": { "title": "Clean Architecture" }\n  }\n}',
          title: 'Field Precise GraphQL Query',
          explanation: 'GraphQL sends a structured query document to /graphql asking for only the title property.',
          keyTakeaway: 'GraphQL prevents over fetching by returning only the exact properties requested.'
        }
      ]
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Architectural Clarification: Conceptual Contracts vs Implemented Route',
      paragraphs: [
        'Notice an essential distinction: our minimal Node server implements the RESTful GET /books route.',
        'The SOAP /BookService and GraphQL /graphql examples shown above are conceptual contract designs illustrating how different protocols structure the same request. Do not attempt to send SOAP or GraphQL packets to our five handler Express server on port 3000!',
        'In Chapters 10 and 12, we will explore dedicated GraphQL and SOAP services in depth.',
      ],
    },
    {
      type: 'heading',
      text: 'Public Protocol Spot Checks: Real Public SOAP and GraphQL Endpoints',
    },
    {
      type: 'paragraph',
      text: 'To prove that SOAP and GraphQL are real protocols used in production today, here are live public services responding on the internet. Note that each public service manages its own distinct dataset:',
    },
    {
      type: 'api-inspector',
      title: 'Public SOAP WebService: DataAccess Number Conversion',
      method: 'POST',
      url: 'https://www.dataaccess.com/webservicesserver/NumberConversion.wso',
      headers: {
        'Content-Type': 'application/soap+xml; charset=utf-8'
      },
      requestBody: '<?xml version="1.0" encoding="utf-8"?>\n<soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">\n  <soap12:Body>\n    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">\n      <ubiNum>500</ubiNum>\n    </NumberToWords>\n  </soap12:Body>\n</soap12:Envelope>',
      status: '200 OK',
      time: '215 ms',
      size: '412 B',
      responseBody: '<?xml version="1.0" encoding="utf-8"?>\n<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">\n  <soap:Body>\n    <m:NumberToWordsResponse xmlns:m="http://www.dataaccess.com/webservicesserver/">\n      <m:NumberToWordsResult>five hundred </m:NumberToWordsResult>\n    </m:NumberToWordsResponse>\n  </soap:Body>\n</soap:Envelope>',
      assertions: [
        'Status code is 200 OK',
        'SOAP body contains written English words'
      ],
      sampleLabel: 'LIVE PUBLIC SOAP WIRE CAPTURE'
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Real World Wire Quirk: The Trailing Space',
      paragraphs: [
        'Inspect the raw XML response from the public DataAccess SOAP service above. Notice that it returned "five hundred " with a trailing space inside the tag!',
        'This real world quirk demonstrates why automated quality engineers exist: real production services often have subtle formatting oddities that unit tests miss. In Chapter 12, we write assertions using trim() to handle this exact quirk defensively.',
      ],
    },
    {
      type: 'api-inspector',
      title: 'Public GraphQL Service: Rick and Morty Character Query',
      method: 'POST',
      url: 'https://rickandmortyapi.com/graphql',
      headers: {
        'Content-Type': 'application/json'
      },
      requestBody: {
        query: 'query { character(id: 1) { name status species } }'
      },
      status: '200 OK',
      time: '180 ms',
      size: '210 B',
      responseBody: {
        data: {
          character: {
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human'
          }
        }
      },
      assertions: [
        'Status code is 200 OK',
        'Response contains data object without errors',
        'Character name attribute matches Rick Sanchez'
      ],
      sampleLabel: 'LIVE PUBLIC GRAPHQL WIRE CAPTURE'
    },
    {
      type: 'heading',
      text: 'Step 8: Prove Readiness and Hand Off',
    },
    {
      type: 'paragraph',
      text: 'Before moving onward, test your mastery with this hands on exercise:',
    },
    {
      type: 'steps',
      items: [
        '1. Restart your server: Press Ctrl+C in your terminal and run node server.js.',
        '2. Verify catalog: Send GET http://localhost:3000/books. Confirm it returns status 200 OK with Book 1.',
        '3. Add a book: Send POST http://localhost:3000/books with title "Modern Operating Systems" and author "Andrew Tanenbaum". Confirm status 201 Created and ID 2.',
        '4. Partially update: Send PATCH http://localhost:3000/books/2 with title "Modern Distributed Systems". Confirm author is retained.',
        '5. Delete book: Send DELETE http://localhost:3000/books/1. Verify subsequent GET returns only Book 2.',
      ],
    },
    {
      type: 'heading',
      text: 'Why We Test at the API Layer: The Testing Pyramid',
    },
    {
      type: 'paragraph',
      text: 'Why do mature engineering organizations invest heavily in API test automation instead of testing exclusively through mobile screens and web browsers?',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'TESTING ARCHITECTURE',
      title: 'The Testing Pyramid: Speed, Cost, and Isolation across Tiers',
      text: 'Testing exclusively through the user interface is slow, fragile, and prone to false alarms caused by animation lags. Testing at the API layer allows engineers to validate business logic directly over the wire in milliseconds.',
      src: pyramidImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/testing-pyramid-focus.jpg',
      w: 1408,
      h: 768,
      alt: 'Testing Pyramid diagram showing Unit Tests at bottom, API Integration Tests in middle, and UI Tests at top.',
      caption: 'The Testing Pyramid: Balancing fast unit checks, robust API contract tests, and focused UI checks.',
      points: [
        'UI Tests (Top Layer): Slowest and most expensive. High maintenance because UI layout changes break scripts.',
        'API Service Layer (Middle Layer): Fast, deterministic, and verifies business rules directly across the wire without browser rendering delays.',
        'Unit Tests (Base Layer): Fastest execution testing isolated functions in code.',
      ],
    },
    {
      type: 'heading',
      text: 'Sourced Architecture Finding: Why Safe Methods Must Not Alter State',
    },
    {
      type: 'source-note',
      label: 'Architectural Standard Finding · March 2004',
      claim: 'W3C Technical Architecture Group (TAG) Finding on URIs and Safe HTTP Operations',
      url: 'https://www.w3.org/2001/tag/doc/whenToUseGet.html',
      verifiedThrough: 'World Wide Web Consortium (W3C) TAG Finding on Safe Methods and GET Semantics'
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Why HTTP Operations Must Follow Semantic Rules',
      paragraphs: [
        'In March 2004, the World Wide Web Consortium (W3C) Technical Architecture Group issued a formal finding on URIs and safe methods.',
        'The finding emphasizes that HTTP GET is designed strictly for safe information retrieval. Clients, search engine crawlers, and network web proxies assume that repeating a GET request causes no destructive side effects.',
        'If a developer improperly binds destructive database actions to a GET request: such as /deleteBook?id=1: web crawlers indexing links can accidentally trigger catastrophic data deletions across an entire company database.',
        'The Architectural Lesson: Always use POST, PUT, or DELETE for operations that modify server state, and keep GET strictly safe and read only.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 9: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'If you send an HTTP GET request to a public API endpoint ten times in a row, what should happen to the server database records?',
      options: [
        'The records should remain completely unchanged because GET is a safe, read only operation',
        'Ten duplicate copies of the database records will be created',
        'The server will delete the records on the tenth call',
        'The network proxy will block the computer permanently',
      ],
      answerIndex: 0,
      explain: 'GET is defined by the HTTP standard as a safe, read only method. Dispatching GET one time or a thousand times must never modify server database state.',
    },
    {
      type: 'quiz',
      items: [
        [
          'What is the fundamental role of an API in client server architecture?',
          'An API acts as a structured digital messenger that allows a client application to request data and services from a backend server without exposing database internals.',
        ],
        [
          'What is the difference between a PUT operation and a PATCH operation?',
          'PUT replaces the entire resource with the incoming payload, overwriting omitted fields. PATCH applies a partial delta modification, updating only the specific fields provided while retaining others.',
        ],
        [
          'Why are API layer tests considered more reliable and faster than UI browser tests?',
          'API tests bypass browser rendering, visual layout engines, and network animation delays, verifying business logic and contracts directly over the wire in milliseconds.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'An API is a contract allowing clients to communicate securely with backend servers.',
        'HTTP defines standard methods: GET reads, POST creates, PUT replaces, PATCH updates, and DELETE removes.',
        'Safe methods (like GET) never alter server data; idempotent methods (like GET, PUT, and DELETE) produce the identical state when repeated.',
        'REST targets unique URL resources using JSON, SOAP packages calls in formal XML envelopes, and GraphQL queries exact fields.',
      ],
    },
    {
      type: 'cliffhanger',
      title: 'Entering Mission 1: The Apex Campus Transit Outage',
      text: 'Now that your foundations are solid: you have built an API server, executed all five operations, and verified responses on the wire: you are ready for your first investigation. Launch day has arrived at Apex Campus: the transit shuttle tracker is frozen, students are stranded, and you must investigate the failing request by hand in Chapter 2!',
    },
  ],
}
