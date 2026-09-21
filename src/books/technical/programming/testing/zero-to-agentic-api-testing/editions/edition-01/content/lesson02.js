import wireImg from '../assets/http-wire-anatomy.jpg'
import crudImg from '../assets/restful-crud-status-guide.jpg'

export const lesson02 = {
  id: 'rest-crud-status',
  icon: '',
  title: 'REST Architecture and HTTP Methods',
  shortTitle: 'REST and HTTP',
  subtitle: 'CRUD operations, the restaurant bill analogy for methods, and the 5 status code families.',
  tags: ['REST', 'HTTP', 'CRUD', 'Status Codes', 'Architecture'],
  blocks: [
    {
      type: 'mission-tracker',
      badge: 'MISSION 1 PROGRESS · STEP 2 OF 3',
      title: 'Continuing Mission 1: Decoding the Wire Protocol',
      text: 'Armed with our knowledge of APIs, we inspect browser developer tools to investigate failing network requests. We discover that publishing a post dispatches an HTTP request that can return status codes like 201 Created on success, 404 Not Found on missing routes, or 500 Internal Server Error when payloads are malformed. To test these transactions with confidence, we must decode the language spoken across the wire: REST principles, CRUD operations, and the 5 status code families.',
    },
    {
      type: 'heading',
      text: 'Step 1: The Core Principles of REST',
    },
    {
      type: 'paragraph',
      text: 'REST stands for **Representational State Transfer**. Created by Roy Fielding in 2000, it is an architectural design style that makes web services scalable, uniform, and reliable.',
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'The Core Principles of REST in Simple English',
      paragraphs: [
        '1. Client Server Separation: The user interface is completely decoupled from data storage. Frontends can change without touching the backend.',
        '2. Statelessness: The server never remembers previous requests. Every single request from the client must contain all the information necessary for the server to understand and process it.',
        '3. Cacheability: Server responses must explicitly declare whether data can be cached by the browser to avoid redundant network round trips.',
        '4. Uniform Interface: All resources are accessed using standard URIs and standard HTTP methods.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 2: Anatomy of the HTTP Wire',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'PROTOCOL SPECIFICATION',
      title: 'HTTP Wire Anatomy: Dissecting the Protocol Request and Response',
      text: 'Every HTTP transaction consists of two halves: the Request sent by the client, and the Response sent back by the server. When an API call fails, Lead API Test Automation Architects do not guess or blame the network. We dissect the raw request and response anatomy to locate the exact breakdown across method, headers, and payload.',
      src: wireImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/http-wire-anatomy.jpg',
      w: 1408,
      h: 768,
      alt: 'Anatomy of an HTTP transaction showing Request structure (Method, URL, Headers, Body) and Response structure (Status Code, Headers, Body).',
      caption: 'The complete anatomy of an HTTP conversation across the network.',
      points: [
        'Part 1 (Request Method and Path): The HTTP verb (such as POST) targeting the resource route /api/v1/books and protocol version HTTP/1.1.',
        'Part 2 (Request Headers): Essential wire metadata such as Content Type application json and authorization tokens.',
        'Part 3 (Request JSON Payload): The structured client data (title, author, year) sent across the network.',
        'Part 4 (Response Status Code): The numerical status code (such as 201 Created) signaling success.',
        'Part 5 (Response Body): The server output containing the generated resource ID and confirmation message.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 3: CRUD to HTTP Mapping and the Restaurant Bill Analogy',
    },
    {
      type: 'paragraph',
      text: 'In database systems, every fundamental action belongs to **CRUD**: Create, Read, Update, and Delete. REST maps these database operations directly to standard HTTP verbs.',
    },
    {
      type: 'comparison',
      title: 'CRUD to HTTP Mapping on a RESTful Publishing Platform',
      columns: ['Database Action', 'HTTP Verb', 'Publishing Platform Operation', 'Safe or Idempotent?'],
      rows: [
        ['Create', 'POST', 'POST /posts: Submits a new article payload', 'Not safe: creates new records each time'],
        ['Read', 'GET', 'GET /posts/1: Retrieves article title and body', 'Safe: can be called repeatedly without changes'],
        ['Update', 'PUT or PATCH', 'PUT /posts/1: Overwrites the complete article record', 'Idempotent: repeating update produces same result'],
        ['Delete', 'DELETE', 'DELETE /posts/1: Removes the article from the database', 'Idempotent: deleting once removes it completely'],
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'The Restaurant Bill Analogy for HTTP Verbs',
      paragraphs: [
        '• GET: You look at the bill to read how much dinner costs. Reading the numbers changes nothing.',
        '• POST: You swipe your credit card to create a brand new charge in the bank database.',
        '• PUT: The waiter notices an incorrect dessert charge and replaces the entire bill with a corrected slip.',
        '• PATCH: The waiter crosses out one incorrect price line and writes the correct dollar amount beside it.',
        '• DELETE: The manager voids the bill completely because the restaurant provided complimentary food.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 4: The 5 Status Code Families and Live Verification',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'RESPONSE STATUS CODES',
      title: 'HTTP Status Codes Matrix: The Five Diagnostic Families',
      text: 'When a server answers an API call, it returns a three digit status code grouped into five fundamental families. Memorizing the five status code families is essential for writing accurate test assertions and diagnosing whether a problem stems from an invalid request or a crashing server.',
      src: crudImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/restful-crud-status-guide.jpg',
      w: 1408,
      h: 768,
      alt: 'Infographic guide showing the 5 HTTP status code families from 1xx to 5xx with color coded indicators.',
      caption: 'The five status code families every API engineer must know.',
      points: [
        '1xx (Informational): Request received, continuing process (such as 100 Continue).',
        '2xx (Success): Action accepted and completed (such as 200 OK, 201 Created).',
        '3xx (Redirection): Resource moved to another location (such as 301 Moved Permanently).',
        '4xx (Client Error): The client sent bad data or requested a missing URL (such as 400 Bad Request, 404 Not Found).',
        '5xx (Server Error): The server crashed or threw an unhandled exception (such as 500 Internal Server Error).',
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Diagnosing Wire Failures and Server Crashes Live',
      paragraphs: [
        'When an endpoint functions normally, a successful GET returns 200 OK and a created resource returns 201 Created. You can verify a healthy live response by opening [Campus Catalog JSON](https://raw.githubusercontent.com/mayankcoder1993/AkshatEbooks/arena/01a0bfe5-akshatebooks/course-materials/zero-to-agentic-api-testing/lesson-01/campus-catalog.json).',
        'If you request a resource that does not exist, such as querying an absent profile on GitHub via [GitHub Query Check](https://api.github.com/users/campus-test-nonexistent-user-query), the server answers with 404 Not Found and a structured error payload.',
        'If a server experiences an unhandled code exception or database pool exhaustion, it returns 500 Internal Server Error. In our upcoming test automation suites, we validate that applications handle 500 errors gracefully with clear user alerts rather than crashing abruptly.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Fresher Trap to Avoid: Using GET to Transmit Secrets or Delete Data',
      paragraphs: [
        'A common beginner mistake is placing sensitive user passwords or credit card numbers inside the query parameters of a GET request: `GET /login?password=mysecret123`.',
        'Because GET parameters appear directly in the browser address bar, web server access logs, and browser history, they are immediately exposed to third parties.',
        'Always use POST with a request body over HTTPS for sensitive user input, and reserve GET strictly for safe, read only data retrieval.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 5: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'If you want to read details about a specific article from the server without modifying the database, which HTTP verb should you use?',
      options: [
        'POST',
        'DELETE',
        'GET',
        'PUT',
      ],
      answerIndex: 2,
      explain: 'GET is the standard method for retrieving information from a server. It is safe because reading data produces zero side effects in the database.',
    },
    {
      type: 'quiz',
      items: [
        [
          'What is the difference between PUT and PATCH in RESTful APIs?',
          'PUT replaces the entire resource with the newly submitted record. PATCH modifies only specific individual fields while leaving the rest of the resource intact.',
        ],
        [
          'What is the difference between an HTTP 404 error and an HTTP 500 error?',
          'A 404 error means the requested route or resource does not exist on the server. A 500 error means the route exists, but the server encountered an unhandled exception or crash while processing the request.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'REST aligns database CRUD actions with HTTP verbs: POST, GET, PUT, and DELETE.',
        'HTTP transactions consist of headers, resource URLs, and optional payload bodies.',
        'Status codes provide instant visibility: 2xx means success, 4xx means client mistake, and 5xx means server crash.',
        'Diagnosing status codes live with endpoints like httpbin.org gives testers direct visibility into server behavior.',
      ],
    },
    {
      type: 'victory-milestone',
      badge: 'MISSION 1 PHASE 2 CLEARED',
      rank: 'LEAD API PROTOCOL AUDITOR',
      title: 'Architectural Triumph: HTTP Wire Mechanics & Status Code Matrix Mastered',
      summary: 'You dissected the invisible network wire, mapped relational CRUD operations to standardized HTTP verbs, mastered the restaurant bill analogy, and unlocked the 5 status code families. You can now pinpoint the exact layer of any web failure within seconds.',
      powers: [
        'Instant wire diagnosis: distinguishing client payload defects (4xx) from catastrophic server crashes (5xx)',
        'Defending database integrity by enforcing safe and idempotent HTTP verbs (GET, PUT, PATCH, DELETE)',
        'Auditing request and response wire anatomy: inspecting Content Type headers, status lines, and JSON bodies',
        'Preventing sensitive credential leaks by enforcing encrypted POST bodies over query parameter exposure',
      ],
      disastersPrevented: [
        'Averted silent duplicate credit card charges by verifying non idempotent POST boundaries',
        'Blocked confidential authentication tokens and passwords from appearing in plaintext web server access logs',
        'Stopped frontend engineers from blaming backend teams when the root cause was an unvalidated 400 Bad Request',
      ],
      warRoomTakeaway: 'In high pressure production outages, senior engineers often waste hours guessing. With status code mastery, you look directly at the wire status line and name the exact failing subsystem instantly.',
    },
    {
      type: 'cliffhanger',
      title: 'Continuing Mission 1: Entering the testing laboratory',
      text: 'Web browsers can only send GET requests from the address bar. To craft custom POST payloads, inspect request headers, and test live API endpoints systematically, we need a dedicated workbench. In our next chapter, we set up Postman and complete Mission 1!',
    },
  ],
}
