import restaurantImg from '../assets/api-concept-restaurant.jpg'
import bridgeImg from '../assets/frontend-backend-api-bridge.jpg'
import pyramidImg from '../assets/testing-pyramid-focus.jpg'
import matrixImg from '../assets/api-architectures-matrix.jpg'

export const lesson01 = {
  id: 'understanding-apis',
  icon: '',
  title: 'Understanding APIs from First Principles',
  shortTitle: 'Understanding APIs',
  subtitle: 'The restaurant analogy, the five core operations, building your own minimal server, and tasting REST, SOAP, and GraphQL.',
  tags: ['APIs', 'Client Server', 'JSON', 'REST', 'Fundamentals', 'Architecture'],
  blocks: [
    {
      type: 'heading',
      text: 'Step 1: The Core Mental Model: What is an API?',
    },
    {
      type: 'paragraph',
      text: 'Every day you tap buttons on your smartphone: you order food on a delivery app, check the weather forecast, or book a cab. But your phone does not store the global weather database, and it certainly does not store the restaurant kitchen inventory. Your phone is a **client**, and the powerful computer holding the data miles away in a data center is the **server**.',
    },
    {
      type: 'paragraph',
      text: 'How do these two computers talk to each other? They communicate through an **API**, which stands for Application Programming Interface. In simple English, an API is a digital messenger that takes your request to the server, tells the server what you want, and brings back the reply.',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'FIRST PRINCIPLES MENTAL MODEL',
      title: 'The Restaurant Analogy: Customer, Waiter, and Kitchen Backend',
      text: 'Imagine dining in a restaurant. You are the customer sitting at the table. The kitchen is the backend system with all the ingredients and cooking equipment. You cannot walk into the kitchen and cook food yourself. Instead, the waiter takes your order, brings it to the chef, and returns with your meal.',
      src: restaurantImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-concept-restaurant.jpg',
      w: 1408,
      h: 768,
      alt: 'The friendly restaurant dining room illustrating client, API waiter, and kitchen backend database.',
      caption: 'The Digital Dining Room: The customer is the client, the waiter is the API, and the kitchen is the server.',
      points: [
        'The Customer: Represents the client, such as a web browser or mobile phone app.',
        'The Waiter: Represents the API messenger carrying requests and delivering responses.',
        'The Kitchen: Represents backend microservices and databases storing business records securely.',
      ],
    },
    {
      type: 'definition',
      term: 'Application Programming Interface (API)',
      text: 'A structured set of rules and protocols that lets two software applications communicate and exchange data securely without exposing internal database credentials or implementation details.',
      example: 'A weather app on your phone calls a weather service API to retrieve the current temperature in your city.',
    },
    {
      type: 'heading',
      text: 'Step 2: The Five Universal HTTP Operations',
    },
    {
      type: 'paragraph',
      text: 'Just like dining at a restaurant involves different actions: reading the menu, placing an order, changing a dish, or cancelling an item: communicating with a web server relies on standard verbs called **HTTP Methods**.',
    },
    {
      type: 'comparison',
      title: 'The Five Core HTTP Operations and Their Everyday Meanings',
      columns: ['HTTP Verb', 'Everyday Action', 'Restaurant Analogy', 'Database Action', 'Wire Effect'],
      rows: [
        ['GET', 'Read or Retrieve', 'Reading the printed menu or checking table status', 'SELECT', 'Fetches records without modifying server state'],
        ['POST', 'Create New Record', 'Placing a brand new order with the chef', 'INSERT', 'Creates a fresh resource and assigns an ID'],
        ['PUT', 'Completely Replace', 'Replacing your entire meal order with a different set', 'UPDATE (Full)', 'Replaces the entire record with the new payload'],
        ['PATCH', 'Partially Modify', 'Asking the waiter for extra spicy sauce on your second dish', 'UPDATE (Partial)', 'Updates only the specific fields provided in the body'],
        ['DELETE', 'Remove Record', 'Cancelling a dish before preparation starts', 'DELETE', 'Permanently removes the target record from the database'],
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'The Crucial Architectural Distinction: Safe vs Idempotent',
      paragraphs: [
        '• Safe Operations: A request is safe if it does not alter server state. GET is safe because reading a webpage a hundred times changes nothing in the database.',
        '• Idempotent Operations: A request is idempotent if repeating it multiple times produces the identical server state as executing it once. PUT and DELETE are idempotent. Replacing a record with name "Alice" ten times leaves the name as "Alice". Deleting record ID 42 once removes it; repeating the command leaves it removed.',
        '• Neither Safe Nor Idempotent: POST is neither safe nor idempotent. Submitting a payment POST request three times will charge the customer credit card three times!',
      ],
    },
    {
      type: 'heading',
      text: 'Step 3: Anatomy of an HTTP Message: The Wire Structure',
    },
    {
      type: 'paragraph',
      text: 'When your computer talks to a server over the internet, it sends an **HTTP Request** packet and receives an **HTTP Response** packet. Every message consists of four structural elements:',
    },
    {
      type: 'chunked-code',
      badge: 'REQUEST ANATOMY',
      title: 'Deconstructing the HTTP Request Envelope',
      intro: 'Study each part of an HTTP request before we execute live calls:',
      chunks: [
        {
          label: 'The Verb and Endpoint URL',
          filename: 'request_line.http',
          code: 'POST /v1/books HTTP/1.1\nHost: api.library.org',
          title: 'The Action and Address',
          explanation: 'Specifies the HTTP method (POST) telling the server what operation to perform, followed by the resource path and target server host name.',
          keyTakeaway: 'The URL identifies the target resource; the HTTP verb identifies the intended action.'
        },
        {
          label: 'The Headers (The Envelope Metadata)',
          filename: 'headers.http',
          code: 'Content-Type: application/json\nAccept: application/json\nUser-Agent: CampusClient/1.0',
          title: 'Format and Client Details',
          explanation: 'Headers act like the outside of a postal envelope: they declare the data format (JSON), security tokens, and device details.',
          keyTakeaway: 'Content Type informs the server how to parse the incoming body payload.'
        },
        {
          label: 'The Payload Body (The Letter Inside)',
          filename: 'payload.json',
          code: '{\n  "title": "Clean Code",\n  "author": "Robert Martin",\n  "aisle": 42\n}',
          title: 'The Actual Data Content',
          explanation: 'The payload contains the raw data being created or updated, formatted as human readable JSON text.',
          keyTakeaway: 'GET requests generally do not have a body; POST and PUT requests carry payloads.'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 4: Developing a Minimal API Server and Testing Every Operation',
    },
    {
      type: 'paragraph',
      text: 'Many beginners assume an API is a mysterious black box requiring complex enterprise infrastructure. In reality, a modern web API is simply a small script listening on a network port, maintaining records in memory, and responding to HTTP verbs. Let us build our own minimal API server from scratch in Node.js and Express, and then systematically execute every core HTTP operation against it.',
    },
    {
      type: 'chunked-code',
      badge: 'SERVER BLUEPRINT',
      title: 'Building Our Minimal In Memory API Server (server.js)',
      intro: 'Here is the entire backend web service. Notice how few lines it takes to build a fully functional REST API:',
      chunks: [
        {
          label: 'Chunk 1: Express App and JSON Parser Middleware',
          filename: 'setup.js',
          code: 'const express = require("express");\nconst app = express();\napp.use(express.json());',
          title: 'Application Bootstrap',
          explanation: 'Imports Express, initializes the application instance, and mounts the JSON middleware to automatically parse incoming request bodies.',
          keyTakeaway: 'Without express.json(), the server cannot read incoming JSON payload bodies.'
        },
        {
          label: 'Chunk 2: The In Memory Data Store',
          filename: 'database.js',
          code: 'let books = [\n  { id: 1, title: "Clean Architecture", author: "Robert Martin" }\n];',
          title: 'The Database Array in RAM',
          explanation: 'Before connecting enterprise SQL or NoSQL databases, APIs store data in simple memory collections. This array acts as our live database table.',
          keyTakeaway: 'Every HTTP mutation alters this array in the computer memory.'
        },
        {
          label: 'Chunk 3: The Route Handlers and HTTP Verbs',
          filename: 'routes.js',
          code: 'app.get("/books", (req, res) => res.json(books));\napp.post("/books", (req, res) => {\n  const newBook = { id: books.length + 1, ...req.body };\n  books.push(newBook);\n  res.status(201).json(newBook);\n});\napp.put("/books/:id", (req, res) => {\n  const idx = books.findIndex(b => b.id == req.params.id);\n  if (idx === -1) return res.status(404).json({ error: "Book not found" });\n  books[idx] = { id: Number(req.params.id), ...req.body };\n  res.json(books[idx]);\n});\napp.patch("/books/:id", (req, res) => {\n  const book = books.find(b => b.id == req.params.id);\n  if (!book) return res.status(404).json({ error: "Book not found" });\n  Object.assign(book, req.body);\n  res.json(book);\n});\napp.delete("/books/:id", (req, res) => {\n  books = books.filter(b => b.id != req.params.id);\n  res.json({ msg: "removed", id: Number(req.params.id) });\n});',
          title: 'Mapping Verbs to Actions',
          explanation: 'Each method (get, post, put, patch, delete) is bound to an endpoint path. When a request arrives, Express routes it to the matching function.',
          keyTakeaway: 'The HTTP method tells the server which function to execute on the resource.'
        },
        {
          label: 'Chunk 4: Starting the Network Port Listener',
          filename: 'listen.js',
          code: 'app.listen(3000, () => console.log("Campus API listening on port 3000"));',
          title: 'Opening the Network Socket',
          explanation: 'Tells the operating system to bind to TCP port 3000 and listen for incoming HTTP packets over the network.',
          keyTakeaway: 'Once listening, any HTTP client can dispatch requests to http://localhost:3000.'
        }
      ]
    },
    {
      type: 'paragraph',
      text: 'Now that our server code is running, let us step through each core operation one by one. For each operation, study the server code handler, predict the outcome, and observe the wire transmission.',
    },
    {
      type: 'heading',
      text: 'Operation 1: Reading Records with GET /books',
    },
    {
      type: 'paragraph',
      text: 'The client wants to view all books currently stored in the library. The backend route handler is `app.get("/books", (req, res) => res.json(books));`. Because GET is a safe, read only operation, it does not alter server memory in any way.',
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'When we dispatch an HTTP GET request to http://localhost:3000/books on a newly started server, what status code and payload structure do you expect?',
      options: [
        '200 OK: Returns a JSON array containing the single initial book stored in memory',
        '201 Created: Generates a brand new book record on the server database',
        '404 Not Found: The books collection is completely empty on startup',
        '500 Server Error: In memory arrays require SQL drivers before they can be queried'
      ],
      answerIndex: 0,
      revealTitle: 'Wire Response for GET /books',
      explanation: 'The server reads the current books array from RAM, serializes it to JSON text, and responds with HTTP status 200 OK containing our initial record!'
    },
    {
      type: 'api-inspector',
      title: 'Wire Capture: GET /books (Read All Records)',
      method: 'GET',
      url: 'http://localhost:3000/books',
      status: '200 OK',
      time: '18 ms',
      size: '142 B',
      responseBody: [
        {
          id: 1,
          title: 'Clean Architecture',
          author: 'Robert Martin'
        }
      ]
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Server State Transition: RAM After GET',
      paragraphs: [
        'Server RAM state: The books array still contains exactly 1 record. Total records in memory: 1.',
        'Architectural takeaway: GET is safe and idempotent. You can execute this GET request ten thousand times, and the server state will remain completely unchanged.',
      ],
    },
    {
      type: 'heading',
      text: 'Operation 2: Creating a Record with POST /books',
    },
    {
      type: 'paragraph',
      text: 'Now we want to add a new book to our collection. The client dispatches an HTTP POST verb with a JSON payload in the request body. The server handler `app.post("/books", ...)` generates the next ID, pushes the new object into the memory array, and returns HTTP 201 Created.',
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'When we dispatch a POST request carrying a JSON body with title "The Pragmatic Programmer" and author "David Thomas", what status code and response payload will the server return?',
      options: [
        '201 Created: Returns the newly persisted book object with a newly assigned primary key ID of 2',
        '200 OK: Returns all books previously stored in the database',
        '400 Bad Request: Missing author enrollment credentials',
        '304 Not Modified: The record already existed in client browser cache'
      ],
      answerIndex: 0,
      revealTitle: 'Wire Response for POST /books',
      explanation: 'Success! The server accepted the payload, generated ID 2, appended it to the in memory array, and returned HTTP status 201 Created!'
    },
    {
      type: 'api-inspector',
      title: 'Wire Capture: POST /books (Create New Record)',
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
      size: '178 B',
      responseBody: {
        id: 2,
        title: 'The Pragmatic Programmer',
        author: 'David Thomas'
      }
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Server State Transition: RAM After POST',
      paragraphs: [
        'Server RAM state: The books array now contains 2 records (ID 1 and ID 2).',
        'Architectural takeaway: POST is non idempotent. If you send this exact same POST request three times, you will create three distinct books with three unique IDs in memory!',
      ],
    },
    {
      type: 'heading',
      text: 'Operation 3: Replacing a Complete Record with PUT /books/:id',
    },
    {
      type: 'paragraph',
      text: 'Suppose we need to update record 1 with an entirely new title and updated author name. In REST architecture, the HTTP PUT verb represents complete resource replacement. The URL path parameter `:id` indicates which record to target.',
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'When we send an HTTP PUT request to http://localhost:3000/books/1 with a full replacement payload, how does the server process the update?',
      options: [
        '200 OK: Completely replaces the existing record at ID 1 with the new attributes and returns the updated object',
        '201 Created: Appends a third book to the memory array',
        '405 Method Not Allowed: Existing records in memory cannot be updated',
        '500 Server Error: Overwriting memory is strictly prohibited by Express'
      ],
      answerIndex: 0,
      revealTitle: 'Wire Response for PUT /books/1',
      explanation: 'The server located the existing record at index 0 matching ID 1, replaced its contents entirely with the incoming payload, and returned HTTP status 200 OK!'
    },
    {
      type: 'api-inspector',
      title: 'Wire Capture: PUT /books/1 (Full Record Replacement)',
      method: 'PUT',
      url: 'http://localhost:3000/books/1',
      headers: {
        'Content-Type': 'application/json'
      },
      requestBody: {
        title: 'Clean Code: Refactored Edition',
        author: 'Robert C. Martin'
      },
      status: '200 OK',
      time: '20 ms',
      size: '182 B',
      responseBody: {
        id: 1,
        title: 'Clean Code: Refactored Edition',
        author: 'Robert C. Martin'
      }
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Server State Transition: RAM After PUT',
      paragraphs: [
        'Server RAM state: Record 1 was completely overwritten in RAM. Total records in memory: still exactly 2 (ID 1 and ID 2).',
        'Architectural takeaway: PUT is idempotent. Sending this exact PUT request once or one hundred times produces the exact same server memory state.',
      ],
    },
    {
      type: 'heading',
      text: 'Operation 4: Partially Modifying a Record with PATCH /books/:id',
    },
    {
      type: 'paragraph',
      text: 'What if you only want to update one single attribute: such as changing the book title: without touching the author? If you used PUT and omitted the author, the author field would be wiped out. This is where the HTTP PATCH verb is required: PATCH represents a partial delta update.',
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'If we send a PATCH request to /books/1 containing only { "title": "Clean Architecture: Collector Edition" } without passing the author field, what happens to the author in server memory?',
      options: [
        'The author is preserved: Only the title field is modified while the existing author remains untouched in RAM',
        'The author is erased: Any field omitted in a PATCH request is permanently set to null',
        'The server crashes: PATCH requires every single schema field to be provided',
        'A new record is created: PATCH behaves identically to POST'
      ],
      answerIndex: 0,
      revealTitle: 'Wire Response for PATCH /books/1',
      explanation: 'The author was preserved! The server handler used Object.assign(book, req.body) to apply only the new title property, leaving the existing author intact.'
    },
    {
      type: 'api-inspector',
      title: 'Wire Capture: PATCH /books/1 (Partial Delta Update)',
      method: 'PATCH',
      url: 'http://localhost:3000/books/1',
      headers: {
        'Content-Type': 'application/json'
      },
      requestBody: {
        title: 'Clean Architecture: Collector Edition'
      },
      status: '200 OK',
      time: '19 ms',
      size: '186 B',
      responseBody: {
        id: 1,
        title: 'Clean Architecture: Collector Edition',
        author: 'Robert C. Martin'
      }
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Server State Transition: RAM After PATCH',
      paragraphs: [
        'Server RAM state: Record 1 has updated title while retaining its existing author. Total records in memory: still 2.',
        'Architectural takeaway: Use PUT when replacing an entire entity; use PATCH when updating a subset of fields without touching the rest.',
      ],
    },
    {
      type: 'heading',
      text: 'Operation 5: Deleting a Record with DELETE /books/:id',
    },
    {
      type: 'paragraph',
      text: 'Finally, we want to purge a textbook from our library. The client sends an HTTP DELETE verb with the target ID in the path parameter. The server handler `app.delete("/books/:id", ...)` filters the memory array to remove the matching record.',
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'When we dispatch DELETE /books/1 to remove record 1, and then immediately dispatch GET /books to inspect the catalog, what will the books array contain?',
      options: [
        'Only ID 2 remains: Record 1 was purged from server memory, leaving a single book in the array',
        'Both records remain: DELETE only marks records as hidden in client cookies',
        'The array is completely empty: DELETE purges the entire database collection',
        'The server crashes: Deleting memory requires an operating system reboot'
      ],
      answerIndex: 0,
      revealTitle: 'Wire Response for DELETE /books/1 and Verification GET',
      explanation: 'Record 1 is gone! The server responded to DELETE with 200 OK, and our follow up GET verification confirms only ID 2 remains in memory.'
    },
    {
      type: 'api-inspector',
      title: 'Wire Capture: DELETE /books/1 (Remove Record from Memory)',
      method: 'DELETE',
      url: 'http://localhost:3000/books/1',
      status: '200 OK',
      time: '16 ms',
      size: '124 B',
      responseBody: {
        msg: 'removed',
        id: 1
      }
    },
    {
      type: 'api-inspector',
      title: 'Wire Capture: Verification GET /books (Proving Deletion)',
      method: 'GET',
      url: 'http://localhost:3000/books',
      status: '200 OK',
      time: '15 ms',
      size: '148 B',
      responseBody: [
        {
          id: 2,
          title: 'The Pragmatic Programmer',
          author: 'David Thomas'
        }
      ]
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Server State Transition: RAM After DELETE',
      paragraphs: [
        'Server RAM state: Record 1 has been permanently purged. The books array now holds exactly 1 record (ID 2).',
        'Architectural takeaway: We have completed the entire CRUD lifecycle (Create, Read, Update, Delete) against our own API server using standardized HTTP methods!',
      ],
    },
    {
      type: 'heading',
      text: 'Interactive Companion Sandbox: Experimenting with Custom Inputs',
    },
    {
      type: 'paragraph',
      text: 'For readers viewing this book inside our interactive application, you can also experiment dynamically with custom book titles, authors, and target IDs using the live workbench below:',
    },
    {
      type: 'mini-api',
      title: 'Live Interactive 5 Line In Memory API Server',
      intro: 'Type custom title and author values below, then click each method to witness real time server memory transitions and wire logs:',
    },
    {
      type: 'heading',
      text: 'Step 5: Tasting the Three Architectural Worlds: REST, SOAP, and GraphQL',
    },
    {
      type: 'paragraph',
      text: 'Not all APIs look identical. In enterprise software, you will encounter three major architectural styles. Here is how the same operation: retrieving a book: looks in each world:',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'ARCHITECTURAL STYLES',
      title: 'Architectural Comparison: REST, SOAP, and GraphQL Side by Side',
      text: 'REST treats data as unique URL resources formatted in lightweight JSON. SOAP packages requests in formal XML envelopes with rigid schemas. GraphQL exposes a single endpoint where clients request the exact fields they need.',
      src: matrixImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-architectures-matrix.jpg',
      w: 1408,
      h: 768,
      alt: 'Architectural comparison matrix illustrating REST, SOAP, and GraphQL.',
      caption: 'Three Architectural Flavors: REST for clean resources, SOAP for formal legal envelopes, GraphQL for custom client queries.',
      points: [
        'REST (The Postcard): Simple, human readable JSON resources over clean HTTP verbs.',
        'SOAP (The Sealed Legal Document): Formal W3C XML standard used extensively in banking and government.',
        'GraphQL (The Custom Shopping List): Single endpoint where clients specify exactly which fields to return.',
      ],
    },
    {
      type: 'chunked-code',
      badge: 'THREE PROTOCOLS',
      title: 'Comparing the Three Styles in Practice',
      intro: 'Notice how each style requests the title of book ID 101:',
      chunks: [
        {
          label: 'RESTful API Request',
          filename: 'rest_request.http',
          code: 'GET /v1/books/101 HTTP/1.1\nHost: api.library.org\nAccept: application/json',
          title: 'Direct Resource Retrieval',
          explanation: 'In REST, the URL directly identifies the resource. The server replies with clean JSON: { "id": 101, "title": "Clean Code" }.',
          keyTakeaway: 'REST is the dominant standard across 85 percent of modern web and mobile applications.'
        },
        {
          label: 'SOAP WebServices Request',
          filename: 'soap_envelope.xml',
          code: '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n  <soap:Body>\n    <GetBookRequest>\n      <BookId>101</BookId>\n    </GetBookRequest>\n  </soap:Body>\n</soap:Envelope>',
          title: 'Formal XML Envelope',
          explanation: 'In SOAP, every request is wrapped in a strict XML envelope and dispatched via HTTP POST to an enterprise gateway.',
          keyTakeaway: 'SOAP relies on rigid WSDL contracts, widely used in financial banking and legacy systems.'
        },
        {
          label: 'GraphQL Query Request',
          filename: 'query.graphql',
          code: 'query {\n  book(id: 101) {\n    title\n  }\n}',
          title: 'Precise Field Selection',
          explanation: 'In GraphQL, the client asks only for the title field, avoiding unwanted metadata and eliminating extra round trips.',
          keyTakeaway: 'GraphQL prevents over fetching by letting clients dictate the exact JSON response shape.'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 6: Live Exploration: Sending Real Global GET Requests',
    },
    {
      type: 'paragraph',
      text: 'Now let us send real HTTP requests over the public internet. First, we will inspect the public GitHub user profile for the famous GitHub mascot, Octocat:',
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'When we send a GET request to https://api.github.com/users/octocat, what status code and data fields do you expect the server to return?',
      options: [
        '200 OK: Returns the public Octocat profile object containing username and public repository statistics',
        '201 Created: Generates a brand new user profile on the server database',
        '404 Not Found: Fails because octocat is a cartoon mascot',
        '500 Server Error: Crashes because GitHub requires paid authentication to read user data'
      ],
      answerIndex: 0,
      revealTitle: 'GitHub Public API Wire Confirmation',
      explanation: 'Because the octocat profile is public and exists, GitHub responds with HTTP 200 OK and returns Octocat profile metadata serialized in JSON!'
    },
    {
      type: 'api-inspector',
      title: 'Live Public Wire: GitHub Octocat User Profile',
      method: 'GET',
      url: 'https://api.github.com/users/octocat',
      status: '200 OK',
      time: '185 ms',
      size: '2.6 kB',
      responseBody: {
        login: 'octocat',
        id: 583231,
        name: 'The Octocat',
        company: '@github',
        blog: 'https://github.blog',
        location: 'San Francisco',
        public_repos: 8,
        followers: 12450
      }
    },
    {
      type: 'paragraph',
      text: 'Next, let us query the BigDataCloud reverse geocoding API. When your mobile device shares its latitude and longitude, the API translates those coordinates into a physical city and postal code:',
    },
    {
      type: 'api-inspector',
      title: 'Live Public Wire: BigDataCloud Reverse Geocoding',
      method: 'GET',
      url: 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=42.3601&longitude=-71.0942&localityLanguage=en',
      status: '200 OK',
      time: '142 ms',
      size: '1.2 kB',
      responseBody: {
        latitude: 42.3601,
        longitude: -71.0942,
        continent: 'North America',
        countryName: 'United States of America',
        principalSubdivision: 'Massachusetts',
        city: 'Cambridge',
        locality: 'MIT Campus',
        postcode: '02139'
      }
    },
    {
      type: 'heading',
      text: 'Step 7: Sourced Historical Outage: When Operations Are Misunderstood',
    },
    {
      type: 'source-note',
      label: 'Verified Historical Case Study · May 2005',
      claim: 'Google Web Accelerator Crawler Inadvertently Triggers Mass Deletions on Web Forums',
      url: 'https://www.w3.org/2001/tag/doc/whenToUseGet.html',
      verifiedThrough: 'W3C Technical Architecture Group (TAG) Finding on Safe HTTP Methods'
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The Real World Cost of Misunderstanding HTTP GET: The Web Accelerator Incident',
      paragraphs: [
        'In May 2005, Google launched a utility called Google Web Accelerator. Its purpose was to speed up browsing by pre fetching web links using background HTTP GET requests before the user clicked them.',
        'However, web forums and enterprise applications had implemented destructive actions: such as deleting a post, modifying account settings, or clearing a cart: using simple hyperlinks like `<a href="/admin/delete_post?id=42">Delete</a>`.',
        'Because the developers bound state modifying operations to HTTP GET instead of HTTP POST or DELETE, Google web pre fetcher visited every link it encountered. It triggered deletions, cleared carts, and modified application state on forums across the web where destructive actions were bound to GET links.',
        'The Architectural Rule: Never use GET for state modifying actions. In HTTP specifications (RFC 7231), GET must strictly remain a safe, read only operation that leaves server databases unaltered.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 8: Why We Test at the API Layer: The Testing Pyramid',
    },
    {
      type: 'paragraph',
      text: 'Why do mature engineering organizations invest heavily in API test automation instead of testing exclusively through mobile screens and web browsers?',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'TESTING PYRAMID',
      title: 'The Automation Testing Pyramid: High Speed and Deep Reliability',
      text: 'Testing exclusively through the user interface is slow, fragile, and prone to false alarms caused by animation lags. Testing at the API layer allows engineers to validate business logic directly over the wire in milliseconds.',
      src: pyramidImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/testing-pyramid-focus.jpg',
      w: 1408,
      h: 768,
      alt: 'The Testing Pyramid contrasting Unit, API Integration, and UI End to End tests.',
      caption: 'The Automation Pyramid: API integration tests provide the sweet spot of speed, reliability, and business coverage.',
      points: [
        'Top Layer (UI Tests): Slow, fragile, and easily broken by minor button redesigns or screen resizing.',
        'Middle Layer (API Tests): Fast, dependable, executing hundreds of validations per second directly on business contracts.',
        'Base Layer (Unit Tests): High volume internal code checks validating individual functions.',
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
        'Ten new records should be created in the database table',
        'Nothing should change in the database records because GET is a safe, read only operation',
        'The server should permanently delete the requested resource',
        'The server should automatically reboot its operating system'
      ],
      answerIndex: 1,
      explain: 'GET operations are defined by the HTTP specification as safe. Safe methods retrieve data without altering server state, regardless of how many times they are executed.'
    },
    {
      type: 'quiz',
      items: [
        [
          'What is the core difference between an idempotent operation and a safe operation?',
          'A safe operation (such as GET) does not alter server state at all. An idempotent operation (such as PUT or DELETE) alters state, but repeating the request produces the exact same final state as executing it once.',
        ],
        [
          'Why did the Google Web Accelerator cause mass data loss on web forums in 2005?',
          'Developers improperly bound destructive actions to HTTP GET links. Because Web Accelerator pre fetched every GET link to speed up browsing, it automatically executed delete operations across thousands of websites.',
        ],
        [
          'What are the four primary structural components of an HTTP request?',
          'The HTTP method (verb), the resource URL endpoint, the metadata headers (such as Content Type), and the payload body.',
        ],
        [
          'How does GraphQL differ from REST when a client only requires one specific property?',
          'REST returns the entire resource payload defined by the endpoint. GraphQL allows the client to request only the specific field needed, eliminating unnecessary network bandwidth and payload processing.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'An API is a software messenger that allows decoupled clients and servers to communicate across networks securely.',
        'The five universal HTTP operations are GET (Read), POST (Create), PUT (Replace), PATCH (Modify), and DELETE (Remove).',
        'GET operations must always remain safe; PUT and DELETE operations are idempotent; POST operations are neither safe nor idempotent.',
        'Every HTTP request carries a verb, an endpoint URL, envelope headers, and an optional data payload body.',
        'An API server is simply a program listening on a port that updates in memory records and returns status codes.',
      ],
    },
    {
      type: 'cliffhanger',
      title: 'Now Enter the Mission: The Apex Campus Transit Crisis',
      text: 'Now that your foundations are crystal clear: you understand clients, servers, HTTP verbs, and wire packets: you are ready for your first real world mission. In Chapter 2, launch day arrives at Apex Campus: the transit shuttle tracker is frozen, students are stranded, and you must investigate and fix the failing request by hand!',
    },
  ],
}
