import mockServerImg from '../assets/postman-mock-servers-agile.jpg'
import graphqlImg from '../assets/graphql-vs-rest-architecture.jpg'

export const lesson10 = {
  id: 'mock-servers-and-contracts',
  icon: '',
  title: 'Postman Mock Servers and JSON Schema Contracts',
  shortTitle: 'Mock Servers and Contracts',
  subtitle: 'Contract first development, JSON Schema validation, building hosted Mock Servers, and unblocking parallel QA in Agile sprints.',
  tags: ['Mock Servers', 'JSON Schema', 'Contract Testing', 'Agile Sprints', 'GraphQL'],
  blocks: [
    {
      type: 'mission-hud',
      mission: 'Mission 3: Hardening for Enterprise Production and CI CD',
      phase: 'Phase 2 of 5: Mock Servers & Schema Contracts',
      rank: 'Rank: Contract Architecture Specialist',
      status: 'ACTIVE'
    },
    {
      type: 'chapter-opener',
      achieve: 'Unblock Agile testing sprints and prevent contract drift by mastering JSON Schema validation, hosted Postman Mock Servers, and modern GraphQL query architectures.',
      how: 'Define strict array schemas matching production REST contracts, configure cloud mock examples, execute seamless mock to live environment flips, and parameterize GraphQL queries.',
      carry: 'Production grade schema validation and mock virtualization techniques that prepare you for enterprise OAuth 2.0 security in Chapter 11.'
    },
    {
      type: 'mission-tracker',
      badge: 'MISSION 3 PROGRESS · STEP 2 OF 5',
      title: 'Continuing Mission 3: Contract Testing and Agile Simulation',
      text: 'In modern fast paced engineering sprints, QA automation engineers face a classic dilemma: backend developers spend eight to ten days building database models and business logic. If testers wait for live endpoints before writing scripts, testing turns into a painful bottleneck. In this chapter, we master the modern solution: defining rigid JSON Schema contracts, spinning up hosted Postman Mock Servers with Examples and query parameter matching, and exploring modern query architectures like GraphQL alongside REST.',
    },
    {
      type: 'heading',
      text: 'Step 1: Contract First Development and JSON Schema Fundamentals',
    },
    {
      type: 'paragraph',
      text: 'Rather than writing code first and guessing payloads later, mature engineering teams practice **contract first API design**. Before writing a single line of backend code, product managers, frontend engineers, and QA automation testers agree on a formal schema defining every request, response, status code, and data type.',
    },
    {
      type: 'paragraph',
      text: 'The international standard for defining these contracts is **JSON Schema**. A JSON Schema acts like a blueprint for your JSON data: specifying mandatory fields, data types such as string or integer, value boundaries, and nested object rules.',
    },
    {
      type: 'code',
      filename: 'book-contract-schema.json',
      lines: [
        '{',
        '  "$schema": "http://json-schema.org/draft-07/schema#",',
        '  "type": "array",',
        '  "items": {',
        '    "type": "object",',
        '    "required": ["book_name", "isbn", "aisle"],',
        '    "properties": {',
        '      "book_name": { "type": "string" },',
        '      "isbn": { "type": "string", "minLength": 3 },',
        '      "aisle": { "type": "string" }',
        '    }',
        '  }',
        '}',
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'The Array Trap in REST Search Endpoints',
      paragraphs: [
        'A frequent pitfall among freshers is declaring the root type as object when inspecting query endpoints.',
        'In RESTful services, search endpoints like GET /v1/books?id=... return a list of matching entries even when only one record matches. The root container is an array ([]) rather than a single object ({}).',
        'Declaring type: "object" against an array response immediately triggers a schema mismatch failure. Always verify whether the root token is a curly bracket or an open square bracket!',
      ],
    },
    {
      type: 'heading',
      text: 'Step 2: Validating JSON Schema Contracts in Postman',
    },
    {
      type: 'paragraph',
      text: 'Postman includes the industry standard schema validator library **tv4** directly in its test sandbox. We break down the schema validation assertion into three focused chunks:',
    },
    {
      type: 'chunked-code',
      badge: 'CONTRACT VALIDATION CHUNKS',
      title: 'JSON Schema Validation Architecture',
      intro: 'Guarantees structural and type integrity:',
      chunks: [
        {
          label: 'Chunk 1: Defining Contract Schema',
          filename: 'schema-contract.js',
          code: 'const schemaContract = {\n    type: "array",\n    items: {\n        type: "object",\n        required: ["book_name", "isbn", "aisle"],\n        properties: {\n            book_name: { type: "string" },\n            isbn: { type: "string" },\n            aisle: { type: "string" }\n        }\n    }\n};',
          title: 'The Architectural Contract Blueprint',
          explanation: 'Specifies that the response is an array of book objects with required string properties.',
          keyTakeaway: 'The contract acts as the immutable standard between frontend and backend teams.'
        },
        {
          label: 'Chunk 2: Executing Schema Matcher',
          filename: 'schema-matcher.js',
          code: 'const responseData = pm.response.json();\npm.test("Response body strictly satisfies the JSON Schema contract", function () {\n    const validationResult = tv4.validate(responseData, schemaContract);\n    pm.expect(validationResult, "Schema validation failed: " + JSON.stringify(tv4.error)).to.be.true;\n});',
          title: 'Evaluating Structural Compliance',
          explanation: 'Validates that the received JSON payload adheres strictly to every constraint in the blueprint.',
          keyTakeaway: 'tv4 evaluates missing fields and type mismatches across deep hierarchies.'
        },
        {
          label: 'Chunk 3: Diagnostic Pinpoint Logging',
          filename: 'schema-error-diagnostics.js',
          code: 'if (!tv4.validate(responseData, schemaContract)) {\n    console.error("Contract violation at " + tv4.error.dataPath + ": " + tv4.error.message);\n}',
          title: 'Pinpointing Offending Fields',
          explanation: 'If validation fails, logs the exact JSON path and the specific violation reason in the Postman Console.',
          keyTakeaway: 'Diagnostic logging eliminates guesswork when diagnosing schema rejections.'
        }
      ]
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'If a backend update changes the aisle field from string "42" to a number 42, how will this schema test react?',
      options: [
        'The test fails immediately: tv4 flags a type mismatch because number was received where string was required',
        'The test passes green because JSON automatically converts numbers to strings',
        'Postman ignores the schema and passes the status code',
        'The server rolls back the database'
      ],
      answerIndex: 0,
      revealTitle: 'Schema Type Mismatch Confirmation',
      explanation: 'Schema drift caught instantly! JSON Schema is strictly typed: tv4 flags an AssertionError with message "Invalid type: number (expected string) at /0/aisle". This protects mobile apps from crashing before bad code reaches production!'
    },
    {
      type: 'heading',
      text: 'Step 3: The Agile Dilemma and Postman Mock Servers',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'AGILE SIMULATION',
      title: 'Postman Mock Servers: Enabling Fast Parallel Agile Development',
      text: 'When starting a sprint, waiting ten days for backend microservices stalls everyone. Postman Mock Servers eliminate this blocker by simulating real web servers in the cloud. By defining JSON request examples, frontend and testing teams simulate production behavior weeks before real code lands.',
      src: mockServerImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/postman-mock-servers-agile.jpg',
      w: 1408,
      h: 768,
      alt: 'Postman Mock Server agile workflow showing contract schema creating mock server, enabling parallel development for frontend and QA teams before flipping to live backend.',
      caption: 'Unblocking parallel QA and frontend development using hosted Postman Mock Servers.',
      points: [
        'Sprint Day 1 (Contract Definition): Frontend, Backend, and QA agree on request paths, parameters, and response schemas.',
        'Sprint Day 2 (Mock Server Spin Up): A hosted Postman Mock Server is launched with Examples matching the agreed specification.',
        'Sprint Days 2 to 9 (Parallel Development): Frontend developers build UI screens and QA engineers build complete automated assertion suites against the mock server.',
        'Sprint Day 10 (Deployment and Environment Flip): Backend deploys live microservices to QA. Testers flip the environment variable from Mock URL to Live URL with zero code rewrites.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 4: Configuring Examples and Matching Query Parameters',
    },
    {
      type: 'paragraph',
      text: 'A Postman Mock Server functions by inspecting **Examples** attached to requests in your collection. You can create multiple Examples for a single endpoint to simulate different business scenarios and query parameters. You can download our sample mock response examples: [Download Science Mock Example JSON](/materials/zero-to-agentic-api-testing/lesson-10/mock-example-science.json) and [Download Literature Mock Example JSON](/materials/zero-to-agentic-api-testing/lesson-10/mock-example-literature.json):',
    },
    {
      type: 'steps',
      items: [
        'Open any request in your Postman collection and click the three dots icon to select Add Example.',
        'Provide the expected HTTP status code: such as 200 OK for happy paths or 404 Not Found for negative flows.',
        'Paste the mock JSON response body in the Example editor and click Save.',
        'To simulate query parameter matching, add the parameter (such as ?category=science) in the Example URL. When a caller requests that specific query, Postman Mock Server returns that tailored Example!',
      ],
    },
    {
      type: 'terminal',
      command: 'Calling Hosted Postman Mock Server via cURL',
      lines: [
        'curl https://9b12c8a1-42ef-49bb-b12e.mock.pstmn.io/v1/books?category=science',
        'HTTP/1.1 200 OK',
        'Content-Type: application/json; charset=utf-8',
        'x-srv-span: mock-server-edge-01',
        '{',
        '  "category": "science",',
        '  "total_records": 1,',
        '  "books": [',
        '    { "book_name": "Full Stack API Automation", "isbn": "SCI941", "aisle": 42, "author": "Dr. Sarah Chen" }',
        '  ]',
        '}',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Fresher Trap to Avoid: Forgetting to Save the Example Before Testing',
      paragraphs: [
        'When creating mock responses in Postman, students often edit the Example body and immediately fire a request to the mock URL, only to receive a 404 Not Found or generic default payload.',
        'Postman Mock Servers in the cloud only know about Examples that have been saved to the cloud workspace.',
        'Always press Save on the Example tab before sending requests to the mock server endpoint.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 5: Seamless Environment Toggling: From Mock to Live QA',
    },
    {
      type: 'paragraph',
      text: 'Because our collection references `{{base_url}}` rather than hardcoded URLs, transitioning from the mock server to the live deployment requires zero test script modifications.',
    },
    {
      type: 'code',
      filename: 'environment-variables-comparison.json',
      lines: [
        '// During Sprint Week 1 (Targeting Mock Server)',
        '{',
        '  "environment": "Campus Mock Server",',
        '  "base_url": "https://9b12c8a1-42ef-49bb-b12e.mock.pstmn.io"',
        '}',
        '',
        '// During Sprint Week 2 (Targeting Live Deployed Backend)',
        '{',
        '  "environment": "Campus Live QA Cluster",',
        '  "base_url": "https://qa-api.campuslibrary.org"',
        '}',
      ],
    },
    {
      type: 'paragraph',
      text: 'On deployment day, simply click the Postman Environment dropdown and select Campus Live QA Cluster. When you hit Run Collection, every assertion, property transfer, and test logic written during Week 1 immediately validates the real production codebase!',
    },
    {
      type: 'heading',
      text: 'Step 6: Modern Query Architectures: Testing GraphQL Alongside REST',
    },
    {
      type: 'paragraph',
      text: 'In enterprise architectures, QA engineers increasingly encounter **GraphQL** alongside standard REST endpoints. To understand why GraphQL exists, consider the student academic portal on our university campus.',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'QUERY ARCHITECTURES',
      title: 'REST vs GraphQL Architecture: Single Request Precise Data Resolution',
      text: 'To display a single student profile screen, a REST client might call four separate endpoints (students, departments, courses, loans), multiplying mobile network latency and returning unwanted fields. GraphQL solves this by exposing a single endpoint where clients declare the exact fields required in one roundtrip.',
      src: graphqlImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/graphql-vs-rest-architecture.jpg',
      w: 1408,
      h: 768,
      alt: 'Architectural comparison between REST and GraphQL contrasting multiple round trips with single endpoint resolution.',
      caption: 'REST vs GraphQL: Eliminating over fetching and under fetching with a single unified query.',
      points: [
        'Left Panel (REST 4 Network Roundtrips): The client must execute four separate HTTP requests over mobile networks (GET /students, GET /departments, GET /courses, GET /loans), multiplying latency.',
        'Left Panel (Over Fetching and Under Fetching): Each REST endpoint returns unwanted data that the client discards, while forcing multiple trips to assemble a single screen.',
        'Right Panel (GraphQL 1 Single Unified Query): The client dispatches one POST request to /graphql requesting the exact nested fields required.',
        'Right Panel (Single Payload Resolution): The GraphQL server contacts backend services in parallel and delivers one consolidated JSON response in a single network roundtrip.',
      ],
    },
    {
      type: 'heading',
      text: 'Revisiting the Chapter 1 Book Inquiry in GraphQL',
    },
    {
      type: 'paragraph',
      text: 'Recall our comparison in Chapter 1: when asking for a book record, a standard REST endpoint returns the entire rigid database schema (including aisle, ISBN, price, copies, and timestamps), whether the client needs them or not. In GraphQL, the client asks specifically for the desired fields, such as title and author:',
    },
    {
      type: 'code',
      filename: 'book-graphql-query.graphql',
      lines: [
        '# Parameterized book query with dynamic variable',
        'query GetBookDetails($bookId: ID!) {',
        '  book(id: $bookId) {',
        '    title',
        '    author',
        '  }',
        '}',
      ],
    },
    {
      type: 'paragraph',
      text: 'When dispatched with variable `{ "bookId": "1" }`, the GraphQL engine contacts the catalog repository and returns only the requested attributes: `{ "data": { "book": { "title": "Clean Architecture", "author": "Robert Martin" } } }`. If the client subsequently needs the price, the frontend engineer simply adds `price` to the query string without waiting for backend engineers to deploy a new REST endpoint version.',
    },
    {
      type: 'heading',
      text: 'Live Exploration: Testing the Public Rick and Morty GraphQL API',
    },
    {
      type: 'paragraph',
      text: 'To practice testing GraphQL against a live production endpoint without configuring local mock servers or authentication credentials, engineers often explore the public Rick and Morty GraphQL service at `https://rickandmortyapi.com/graphql`. Here is a live parameterized query fetching character details and nested location coordinates:',
    },
    {
      type: 'code',
      filename: 'rick-and-morty-query.graphql',
      lines: [
        '# Live query against public https://rickandmortyapi.com/graphql',
        'query GetCharacterProfile($characterId: ID!) {',
        '  character(id: $characterId) {',
        '    name',
        '    status',
        '    species',
        '    origin {',
        '      name',
        '    }',
        '  }',
        '}',
      ],
    },
    {
      type: 'api-inspector',
      title: 'Live Interactive Wire Inspector: Public Rick and Morty GraphQL Query',
      method: 'POST',
      url: 'https://rickandmortyapi.com/graphql',
      headers: {
        'Content-Type': 'application/json'
      },
      requestBody: {
        query: 'query GetCharacterProfile($characterId: ID!) { character(id: $characterId) { name status species origin { name } } }',
        variables: { characterId: '1' }
      },
      status: '200 OK',
      time: '142 ms',
      size: '388 B',
      responseBody: {
        data: {
          character: {
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            origin: {
              name: 'Earth (C-137)'
            }
          }
        }
      },
      assertions: [
        'GraphQL status code is 200 OK',
        'Response contains data object without errors',
        'Character name matches Rick Sanchez',
        'Origin name matches Earth (C-137)'
      ]
    },
    {
      type: 'paragraph',
      text: 'While queries retrieve data, **Mutations** create, update, or delete data in GraphQL. A key advantage of mutations is hybrid retrieval: when you create a new lab location or research character, GraphQL immediately returns the newly generated ID in the response:',
    },
    {
      type: 'code',
      filename: 'campus-graphql-mutation.graphql',
      lines: [
        '# Mutation creating new campus research entities in one call',
        'mutation RegisterEntities {',
        '  createLocation(name: "Innovation Robotics Lab", type: "North Wing", dimension: "Lab 4") {',
        '    id',
        '  }',
        '  createCharacter(name: "Dr. Elena Rostova", status: "Active", gender: "Female") {',
        '    id',
        '  }',
        '}',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Fresher Trap to Avoid: All GraphQL Calls Use HTTP POST',
      paragraphs: [
        'In REST, you use GET to read records and POST to write records.',
        'In GraphQL, while queries can technically be sent via GET query parameters, industry standard practice packages the query syntax and variables into a JSON payload body and dispatches using HTTP POST.',
        'In Postman, select POST, choose Body > GraphQL, paste your query on the left and your JSON variables on the right.',
      ],
    },
    {
      type: 'battle-scar',
      metric: 'Enterprise Contract Outage',
      title: 'The Silent Schema Drift Outage: When a Type Flip Crashed Native Mobile Apps',
      context: 'A retail engineering team updated an inventory API endpoint. The property in_stock_count was changed from integer 42 to string "42" to accommodate out of stock text badges. Desktop web browsers handled the loose type coercion without complaint, but the native iOS and Android mobile apps crashed instantly on startup with fatal JSON decoding errors: Expected Int but received String. Because test suites had only verified HTTP 200 status codes without schema contract checks, the defect reached the public app store, crashing the app for over two million customers.',
      takeaway: 'Never rely on HTTP 200 status checks alone. Rigid JSON Schema assertions with tv4 or ajv ensure property names and data types strictly adhere to contracts before production deployment.'
    },
    {
      type: 'triage',
      title: 'War Room Triage: The Cryptic Contract Failure',
      scenario: 'You write a contract test in Postman: pm.expect(tv4.validate(data, schema)).to.be.true. The assertion fails during sprint testing, but the test runner prints only "AssertionError: expected false to be true", offering zero clues on which field broke. What debugging technique instantly pinpoints the schema defect?',
      options: [
        'Inspect tv4.error.message and tv4.error.dataPath to log the exact property and type violation.',
        'Restart Postman and run the collection again.',
        'Change the schema data type from object to string.',
        'Delete all required fields from the JSON Schema blueprint.'
      ],
      answerIndex: 0,
      debrief: 'Extract the validation error details! The tv4 library stores full diagnostic information in tv4.error. Logging tv4.error.message alongside tv4.error.dataPath pinpoints the exact offending JSON key (such as /books/0/isbn) and the specific reason (such as "type string expected, integer received").',
      traps: [
        '',
        'Restarting the app will not fix an invalid schema match.',
        'Modifying the schema type breaks the intended data validation.',
        'Removing required fields defeats the entire purpose of contract validation.'
      ]
    },
    {
      type: 'heading',
      text: 'Step 7: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'How does a Postman Mock Server determine which response payload to return when an incoming request arrives?',
      options: [
        'It randomly generates fictional data on every single request',
        'It matches the incoming request method, path, headers, and query parameters against saved Examples in the collection',
        'It connects to a live MySQL database in the cloud',
        'It asks the user to manually type the response in the desktop window',
      ],
      answerIndex: 1,
      explain: 'Postman Mock Servers inspect incoming HTTP requests and compare them with the saved Examples in the collection, returning the Example that best matches the method, URL path, and query parameters.',
    },
    {
      type: 'quiz',
      items: [
        [
          'What is contract first development, and why does it benefit software testing teams?',
          'Contract first development defines the formal API schema before developers write backend code. It allows QA and frontend engineers to build tests and user interfaces in parallel against mock servers rather than waiting for backend completion.',
        ],
        [
          'What is the primary difference between REST and GraphQL data retrieval?',
          'REST endpoints return a fixed response structure determined by the server, often leading to over fetching or under fetching. GraphQL allows clients to specify the exact fields they require in a single query dispatched to one endpoint.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'Contract first API design establishes agreed JSON schemas before backend coding begins.',
        'JSON Schema validation with tv4 catches missing keys and subtle data type mismatches.',
        'Postman Mock Servers provide cloud hosted simulations powered by saved collection Examples.',
        'Using Examples with query parameters simulates diverse real world response flows.',
        'Toggling base_url environment variables transitions test suites seamlessly from Mock to live QA.',
        'GraphQL eliminates over fetching and under fetching by allowing clients to request exact fields across multiple domains in a single POST query.',
      ],
    },
    {
      type: 'victory-milestone',
      badge: 'MISSION 3 PHASE 2 CLEARED',
      rank: 'ENTERPRISE CONTRACT & PROTOCOL ARCHITECT',
      title: 'Architectural Triumph: Agile Mock Simulation & Dual REST GraphQL Contracts Mastered',
      summary: 'You solved the universal Agile sprint dilemma! Instead of idling for weeks waiting for backend developers to finish server code, you authored formal JSON Schema contracts, spun up hosted Postman Mock Servers, parameterized response Examples, and conquered modern GraphQL query architectures alongside REST.',
      powers: [
        'Authoring formal JSON Schema specifications that enforce field types, mandatory properties, and data bounds',
        'Deploying Postman hosted Mock Servers to simulate edge cases and unblock frontend and QA teams on Day 1 of sprints',
        'Fine tuning mock responses using query parameter matching and custom Example payloads',
        'Executing dual protocol automation: commanding both traditional REST endpoints and modern GraphQL queries and mutations',
        'Seamless environment switching: transitioning automated suites from Mock to Live servers with one variable swap',
      ],
      disastersPrevented: [
        'Eliminated two week sprint bottlenecks where testers sit idle waiting for backend database deployments',
        'Prevented mobile application crashes caused by unexpected field type mutations (such as string IDs turning into integers)',
        'Stopped mobile network throttling and payload bloat by leveraging GraphQL targeted field resolution',
      ],
      warRoomTakeaway: 'The highest leverage QA engineers do not wait for software to be built. They write the contract, stand up the mock server, and have the full automated regression suite ready the second the backend goes live.',
    },
    {
      type: 'cliffhanger',
      title: 'Continuing Mission 3: Enterprise Identity and Token Security',
      text: 'With contract schemas, mock servers, and GraphQL fundamentals mastered, we encounter enterprise identity gateways. In Chapter 11, we explore OAuth 2.0 and Modern Token Authentication: executing automated token exchanges, managing global access tokens, and testing secured microservice endpoints!',
    },
  ],
}
