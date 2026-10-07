import mockServerImg from '../assets/postman-mock-servers-agile.jpg'
import warRoomWideImg from '../assets/apex-campus-crisis-war-room.jpg'
import warRoomPanel1Img from '../assets/war-room-panel-1-the-crisis.jpg'
import warRoomPanel2Img from '../assets/war-room-panel-2-the-standoff.jpg'
import warRoomPanel3Img from '../assets/war-room-panel-3-invisible-wire.jpg'
import warRoomPanel4Img from '../assets/war-room-panel-4-first-principles.jpg'

export const lesson10 = {
  id: 'mock-servers-and-contracts',
  icon: '',
  title: 'Mock Servers and JSON Schema Contracts',
  shortTitle: 'Mock Servers & Contracts',
  subtitle: 'Contract first design, JSON Schema Draft 07 validation, hosted mock servers, and query matching.',
  tags: ['Mock Servers', 'JSON Schema', 'Draft 07', 'Contract First', 'Ajv', 'GraphQL'],
  blocks: [
    {
      type: 'mission-hud',
      mission: 'Mission 3: Enterprise Quality Engineering & Resilience Testing',
      phase: 'Phase 2 of 5: Mock Servers & Contract Verification',
      rank: 'Rank: Contract Integration Architect',
      status: 'ACTIVE'
    },
    {
      type: 'chapter-opener',
      missionBadge: 'MISSION 3 · PHASE 2 OF 5',
      missionTitle: 'Enterprise Quality Engineering & Resilience Testing',
      missionCrisis: 'The Stalled Sprint Review and Backend Blocker Crisis',
      missionContext: 'At 04:15 AM in the Agile Team Suite, Ananya and Vikram stare at a sprint board covered in red BLOCKED sticky notes. The sprint review is four hours away, and the backend team is three days behind delivering the new Science Library API. Vikram has rebuilt his UI four times against four guessed payload shapes. Akshay and Sameer introduce Contract First design using JSON Schema Draft 07 and API Testing Workbench Hosted Mock Servers.',
      missionObjective: 'Define immutable contracts with JSON Schema Draft 07, spin up hosted mock servers with query parameter matching, validate live responses with Ajv, and audit GraphQL partial error lies.',
      targetSystems: 'API Testing Workbench Hosted Mock Engine · JSON Schema Draft 07 Validator · Ajv Testing Engine · GraphQL Client Bridge',
      difficulty: 'INTERMEDIATE',
      estimatedTime: '30 MINUTES',
      prerequisites: 'Chapter 09: Advanced Error Handling and Resilience Testing'
    },
    {
      type: 'mission-tracker',
      currentPhase: 'Phase 2: Mock Servers & Schema Contracts',
      totalPhases: 5,
      completedSteps: [
        'Advanced Error Handling and Resilience Testing (Chapter 09)'
      ],
      currentStep: 'Mock Servers and JSON Schema Contracts',
      upcomingSteps: [
        'OAuth 2.0 and Modern Token Authentication (Chapter 11)'
      ]
    },

    // =========================================================================
    // GRAPHIC COMIC ARC : SIX SCENES FROM MASTER STORY LEDGER
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC : SIX SCENES',
      title: 'The Red Sticky Standoff and the Contract First Mock',
      intro: 'Follow apprentice Akshay, Principal Systems Architect Sameer, and Frontend Lead Ananya in the Agile War Room as sprint deadlines loom, guessing games stall UI development, and hosted mock servers decouple frontend and backend teams.',
      panels: [
        {
          title: 'Scene 1: 04:15 AM: The Agile War Room and Red BLOCKED Sticky Notes',
          time: '04:15 AM',
          layout: 'duo',
          image: {
            src: warRoomWideImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
            w: 1408,
            h: 768,
            alt: 'Ananya and Akshay in front of a sprint board covered in red BLOCKED sticky notes.',
            caption: 'Agile War Room: Sprint review is in four hours, but the backend Science Library API has not landed.'
          },
          replyImage: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Ananya pointing at the sprint board in stalled frustration.',
            caption: 'The Sprint Blocker: Frontend engineers cannot build UI when the backend API is delayed.'
          },
          dialogue: {
            speaker: 'Ananya',
            speech: 'Sprint review is in four hours! The Science Library API is three days late! My entire frontend sprint is blocked!',
            replySpeaker: 'Akshay',
            replySpeech: 'What if I hardcode mock JSON directly into your mobile bundle until the backend catches up?'
          },
          scene: 'At 04:15 AM, red BLOCKED cards cover the Agile War Room board. The sprint review is four hours away and the backend team is three days late on the Science Library API. Akshay suggests hardcoding static JSON into the frontend app.',
          realization: 'Hardcoding static JSON into frontend bundles creates technical debt, masks network serialization issues, and leaks into production.'
        },
        {
          title: 'Scene 2: 04:19 AM: Four Guesses and the Coordination Ache',
          time: '04:19 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-2-the-standoff.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer stopping Akshay from inserting hardcoded mocks.',
            caption: 'The Shortcut Refused: Hardcoded mocks mask HTTP serialization and leak into production.'
          },
          replyImage: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Whiteboard showing four different conflicting response payload shapes.',
            caption: 'Payload Drift: Changing field names across four guessed versions breaks mobile parsing.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'Client hardcoded mocks bloat bundles and mask wire defects. Contract first: agree the schema before code.',
            replySpeaker: 'Ananya',
            replySpeech: 'Vikram rebuilt his UI four times against four guessed response shapes! We need an immutable contract!'
          },
          scene: 'Sameer rejects hardcoded mocks. He reveals that senior engineer Vikram rebuilt his React Native UI four times because backend engineers kept changing field names. Sameer mandates the Contract First architecture.',
          realization: 'Without a formal machine readable contract, parallel development degenerates into brittle guessing games.'
        },
        {
          title: 'Scene 3: 04:25 AM: The JSON Schema Draft 07 Foundation',
          time: '04:25 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay writing JSON Schema Draft 07 defining required types and field constraints.',
            caption: 'Contract Definition: Drafting the JSON Schema Draft-07 specification defining /v1/books.'
          },
          replyImage: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer and Ananya signing off on the schema specification on the glass screen.',
            caption: 'Immutable Sign-off: The schema defines required fields, string formats, and numerical ranges.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Draft 07 schema defined: id is UUID, rating floats from 1.0 to 5.0, availableCopies integer minimum zero.',
            replySpeaker: 'Sameer',
            replySpeech: 'Both teams sign the schema. The contract is immutable. Now spin up the hosted mock server.'
          },
          scene: 'Akshay writes a formal JSON Schema Draft 07 defining the /v1/books endpoint: mandatory keys, UUID types, numerical rating ranges, and array limits. Both frontend and backend leads sign off on the specification.',
          realization: 'JSON Schema Draft 07 provides an unambiguous, enforceable specification that both frontend and backend teams can build against.'
        },
        {
          title: 'Scene 4: 04:31 AM: The Hosted Mock Server and Query Matching',
          time: '04:31 AM',
          layout: 'duo',
          image: {
            src: mockServerImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/postman-mock-servers-agile.jpg',
            w: 1408,
            h: 768,
            alt: 'Architecture visual of hosted mock server returning photorealistic responses in 8ms.',
            caption: 'Hosted Mock Server: Matching ?category=science and returning photorealistic responses in 8ms.'
          },
          replyImage: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Ananya repointing the mobile app base URL to the mock endpoint.',
            caption: 'Mobile App Unblocked: Live HTTP wire calls render books with real star ratings.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Mock server live in the cloud! Query parameter matching ?category=science returns live books in 8ms!',
            replySpeaker: 'Ananya',
            replySpeech: 'I repointed the mobile baseUrl! The UI rendered science book cards with real star ratings!'
          },
          scene: 'Akshay publishes a Hosted Mock Server in the API Testing Workbench. He creates example pairs matching query parameters (?category=science) returning realistic book objects. Ananya repoints her mobile client and renders the UI in minutes.',
          realization: 'Hosted mock servers with query matching unblock frontend development while backend implementation is in progress.'
        },
        {
          title: 'Scene 5: 04:41 AM: Schema Validation as Acceptance Test with Ajv',
          time: '04:41 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay executing Ajv schema validation script in the workbench Tests tab.',
            caption: 'Automated Gate: Validating live payloads against the signed JSON Schema specification with Ajv.'
          },
          replyImage: {
            src: warRoomPanel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-2-the-standoff.jpg',
            w: 1376,
            h: 768,
            alt: 'Console display showing Ajv validation passing with 0 errors.',
            caption: 'Single Truth Artifact: The same schema doc serves as mock spec and backend CI test.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Ajv.validate(schema, pm.response.json()); Live response validated against our Draft 07 schema!',
            replySpeaker: 'Sameer',
            replySpeech: 'Write the schema once, enforce everywhere. The mock spec is now the backend CI acceptance gate.'
          },
          scene: 'Akshay adds an Ajv schema validation test to the collection. When the backend service eventually deploys, the identical schema used to generate mocks acts as the automated acceptance gate in the CI pipeline.',
          realization: 'Reusing the same JSON Schema for both mocks and CI acceptance tests guarantees zero contract drift.'
        },
        {
          title: 'Scene 6: 04:55 AM: GraphQL Field Selection and The Polite 200 Lie',
          time: '04:55 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Monitor displaying GraphQL response with HTTP 200 OK and errors array populated.',
            caption: 'The Polite 200 Lie: GraphQL returns HTTP 200 OK even when queries fail partially.'
          },
          replyImage: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay and Sameer reviewing passing tests in the Agile War Room.',
            caption: 'Sprint Saved: Frontend unblocked, contracts signed, and sprint review demo ready.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'An HTTP 200 containing an errors array is still an error. Never trust status lines alone in GraphQL.',
            replySpeaker: 'Ananya',
            replySpeech: 'Sprint review is saved! The mobile app is tested and running live ahead of schedule!'
          },
          scene: 'Sameer demonstrates testing GraphQL APIs: a GraphQL endpoint will politely return 200 OK even when execution fails, embedding failures in an errors array. Akshay writes body checks to catch the polite 200 lie. The sprint demo is saved.',
          realization: 'In GraphQL and RPC APIs, HTTP 200 does not guarantee success; always inspect the response body payload.'
        }
      ]
    },

    // =========================================================================
    // TECHNICAL ARCHITECTURE & DEEP DIVE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      text: 'The Architecture of Contract First Mocking'
    },
    {
      type: 'image',
      src: mockServerImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/postman-mock-servers-agile.jpg',
      w: 1408,
      h: 768,
      title: 'Hosted Mock Server & Contract Validation Pipeline',
      text: 'Contract First design decouples frontend and backend engineering. The JSON Schema Draft 07 contract drives both the hosted mock server and continuous integration acceptance tests.',
      alt: 'Architecture diagram showing contract first lifecycle with mock server and schema validation.',
      caption: 'The Contract First Loop: The same schema doc serves as mock spec and backend CI test.'
    },

    // =========================================================================
    // WORKBENCH SCREEN 1 : HOSTED MOCK SERVER WITH QUERY MATCHING
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 1 : HOSTED MOCK SERVER',
      title: 'Query Matching Mock Server: GET /v1/books?category=science',
      scenario: 'Dispatch request to the hosted mock server. The mock engine evaluates query parameters and returns the matching saved science books example in 8ms.',
      config: {
        method: 'GET',
        path: '/v1/books?category=science',
        activeTab: 'Params'
      },
      tabs: {
        params: [
          { key: 'category', value: 'science', desc: 'Category filter for book recommendations' }
        ],
        headers: [
          { key: 'x-mock-match-request-body', value: 'true' },
          { key: 'Accept', value: 'application/json' }
        ],
        body: '',
        tests: '// Validate mock response structure\nconst res = pm.response.json();\npm.test("Status is 200 OK from Mock Server", function() {\n  pm.response.to.have.status(200);\n});\n\npm.test("Returns science books matching query", function() {\n  pm.expect(res.category).to.eql("science");\n  pm.expect(res.items).to.be.an("array").that.is.not.empty;\n  pm.expect(res.items[0].rating).to.be.at.least(4.0);\n});'
      },
      response: {
        status: '200 OK',
        time: '8ms',
        size: '512B',
        body: JSON.stringify({
          category: "science",
          total: 2,
          items: [
            {
              id: "550e8400-e29b-41d4-a716-446655440000",
              title: "A Brief History of Time",
              author: "Stephen Hawking",
              rating: 4.8,
              availableCopies: 5
            },
            {
              id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
              title: "Cosmos",
              author: "Carl Sagan",
              rating: 4.9,
              availableCopies: 3
            }
          ]
        }, null, 2)
      },
      notes: [
        'Hosted mock servers simulate real HTTP backends with zero code required.',
        'Query matching ensures distinct query parameters return distinct, realistic mock responses.'
      ]
    },

    // =========================================================================
    // WORKBENCH SCREEN 2 : JSON SCHEMA DRAFT-07 VALIDATION WITH AJV
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 2 : SCHEMA VALIDATOR WITH AJV',
      title: 'Automated Contract Acceptance Gate with JSON Schema Draft 07',
      scenario: 'Validate live response payload against JSON Schema Draft 07. The Ajv engine verifies field types, mandatory properties, and numerical rating ranges.',
      config: {
        method: 'GET',
        path: '/v1/books/550e8400-e29b-41d4-a716-446655440000',
        activeTab: 'Tests'
      },
      tabs: {
        params: [],
        headers: [
          { key: 'Accept', value: 'application/json' }
        ],
        body: '',
        tests: 'const schema = {\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "type": "object",\n  "required": ["id", "title", "rating", "availableCopies"],\n  "properties": {\n    "id": { "type": "string", "format": "uuid" },\n    "title": { "type": "string" },\n    "rating": { "type": "number", "minimum": 1.0, "maximum": 5.0 },\n    "availableCopies": { "type": "integer", "minimum": 0 }\n  }\n};\n\npm.test("Response adheres to Draft 07 schema", function() {\n  pm.response.to.have.jsonSchema(schema);\n});'
      },
      response: {
        status: '200 OK',
        time: '11ms',
        size: '342B',
        body: JSON.stringify({
          id: "550e8400-e29b-41d4-a716-446655440000",
          title: "A Brief History of Time",
          rating: 4.8,
          availableCopies: 5
        }, null, 2)
      },
      notes: [
        'pm.response.to.have.jsonSchema(schema) uses the Ajv validation engine under the hood.',
        'Schema assertions fail loudly if any required field is absent or if types mismatch.'
      ]
    },

    // =========================================================================
    // FOUR PART PEDAGOGICAL CARDS (SENIOR SAVIOR CONTRACTS)
    // =========================================================================
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 1 : CONTRACT FIRST WITH JSON SCHEMA',
      title: 'Contract First Design with JSON Schema Draft 07',
      subtitle: 'Eliminating cross team integration drift through formal schema specifications',
      input: {
        method: 'SPECIFICATION',
        url: 'JSON Schema Draft 07 Document defining /v1/books',
        desc: 'Formal JSON Schema Draft 07 defining required fields, types, and constraints.',
        code: '{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "type": "object",\n  "required": ["id", "title", "rating", "availableCopies"]\n}'
      },
      underTheHood: {
        desc: 'Schema acts as an immutable structural contract agreed upon before writing implementation code.',
        steps: [
          'Teams define resource contracts before opening IDEs or writing business logic.',
          'Draft 07 specifies primitive types, formats, required arrays, and numeric boundaries.',
          'Frontend engineers build components and tests against the schema.',
          'Backend engineers write controllers to satisfy the schema.',
          'Prevents weeks of integration rework and payload guessing games.'
        ]
      },
      output: {
        status: 'SIGNED CONTRACT',
        time: '0ms',
        desc: 'Single contract artifact eliminates payload drift and ambiguity across teams.',
        body: JSON.stringify({
          contractVersion: "Draft-07",
          status: "IMMUTABLE_SIGNED",
          alignedTeams: ["Frontend", "Backend", "QA"]
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'The first deliverable in any API project is the contract, not the code.',
        rule: 'Agree on the JSON Schema before writing line one of backend or frontend code.',
        trap: 'Starting backend development without a signed schema, leading to four rebuilds of the frontend UI.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 2 : HOSTED MOCK SERVERS & QUERY MATCHING',
      title: 'Hosted Mock Servers and Example Matching',
      subtitle: 'Simulating cloud backends with photorealistic latency and query routing',
      input: {
        method: 'GET',
        url: '{{mockUrl}}/v1/books?category=science',
        desc: 'Request routed to an API Testing Workbench Hosted Mock Server.',
        code: 'GET {{mockUrl}}/v1/books?category=science\nx-mock-match-request-body: true'
      },
      underTheHood: {
        desc: 'Mock engine evaluates method, URL path, headers, and query parameters to select examples.',
        steps: [
          'Cloud mock engine receives incoming HTTP request.',
          'Evaluates path, query parameters, and custom headers against saved collection examples.',
          'Selects best matching example (e.g. 200 for science, 404 for unknown).',
          'Simulates configurable network latency (e.g. 8ms to 200ms).',
          'Returns photorealistic JSON payload without requiring backend deployment.'
        ]
      },
      output: {
        status: '200 OK',
        time: '8ms',
        desc: 'Photorealistic mock response unblocks frontend engineering immediately.',
        body: JSON.stringify({
          category: "science",
          total: 2,
          mocked: true
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'A mock server that only returns success teaches false confidence.',
        rule: 'Always configure error (404, 500) and empty state examples on mock servers.',
        trap: 'Building mock servers that only return happy path 200 responses, hiding edge cases from UI clients.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 3 : SCHEMA ACCEPTANCE GATES VIA AJV',
      title: 'Schema Validation as Acceptance Test via Ajv',
      subtitle: 'Enforcing immutable contracts as automated continuous integration gates',
      input: {
        method: 'TEST SCRIPT',
        url: 'pm.response.to.have.jsonSchema(schema)',
        desc: 'Automated test validating live response against signed Draft 07 schema.',
        code: 'pm.test("Response matches Draft 07 contract", function() {\n  pm.response.to.have.jsonSchema(bookSchema);\n});'
      },
      underTheHood: {
        desc: 'Ajv validator evaluates live payload against compiled schema rules in memory.',
        steps: [
          'V8 sandbox compiles Draft 07 JSON Schema using Ajv engine.',
          'Evaluates response body against required keys, types, and constraints.',
          'Any missing field, type mismatch, or out of range number fails assertion.',
          'Provides detailed structural error path on failure (e.g. data.rating should be >= 1.0).',
          'Serves as mandatory gating check in CI/CD pipeline before merging code.'
        ]
      },
      output: {
        status: 'CONTRACT VALIDATED',
        time: '3ms',
        desc: 'Live payload verified against specification; CI gate passes green.',
        body: JSON.stringify({
          schemaValid: true,
          errors: null,
          gateStatus: "PASSED"
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Write the schema once, enforce it everywhere.',
        rule: 'The same schema document must serve as mock spec, frontend contract, and CI gate.',
        trap: 'Maintaining separate documents for mock specifications and test assertions, causing contract drift.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 4 : GRAPHQL FIELD SELECTION & POLITE 200',
      title: 'GraphQL Field Selection and the Polite 200 Trap',
      subtitle: 'Catching partial execution errors concealed behind HTTP 200 OK status lines',
      input: {
        method: 'POST',
        url: '{{baseUrl}}/graphql',
        desc: 'GraphQL query requesting specific fields with partial server execution failure.',
        code: 'pm.test("GraphQL errors array is empty", function() {\n  const res = pm.response.json();\n  pm.expect(res.errors).to.be.undefined;\n});'
      },
      underTheHood: {
        desc: 'GraphQL specification returns HTTP 200 OK even when execution resolvers throw errors.',
        steps: [
          'Client sends GraphQL query requesting fields across multiple resolvers.',
          'One resolver fails due to database timeout or permission rejection.',
          'GraphQL engine responds with HTTP 200 OK status code.',
          'Response payload contains partial data object alongside a non empty errors array.',
          'Naive status checks report false green passes; body inspection reveals truth.'
        ]
      },
      output: {
        status: 'BODY VERIFIED',
        time: '12ms',
        desc: 'Errors array inspected directly; contract truthfully fails if errors present.',
        body: JSON.stringify({
          data: { book: null },
          errors: [{ message: "Database connection failed", code: "INTERNAL_ERROR" }]
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'An HTTP 200 containing an error payload is still a lie.',
        rule: 'In GraphQL and RPC APIs, assert the JSON body structure, never the status line alone.',
        trap: 'Relying solely on HTTP 200 status assertions, missing silent partial failures in GraphQL responses.'
      }
    },

    // =========================================================================
    // POST DRILLS & QUIZ
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      text: 'JSON Schema vs Chai Property Assertions'
    },
    {
      type: 'chunked-code',
      title: 'Comparing Verification Approaches',
      code: `// Approach A: Manual Chai property assertions (verbose, brittle)
pm.test("Validate book manually", function() {
  const data = pm.response.json();
  pm.expect(data).to.have.property("id").that.is.a("string");
  pm.expect(data).to.have.property("rating").that.is.a("number");
  pm.expect(data.rating).to.be.within(1.0, 5.0);
  pm.expect(data).to.have.property("availableCopies").that.is.an("integer");
});

// Approach B: JSON Schema Draft 07 (declarative, standardized, shareable)
const bookSchema = {
  type: "object",
  required: ["id", "rating", "availableCopies"],
  properties: {
    id: { type: "string" },
    rating: { type: "number", minimum: 1.0, maximum: 5.0 },
    availableCopies: { type: "integer", minimum: 0 }
  }
};
pm.test("Validate with JSON Schema", function() {
  pm.response.to.have.jsonSchema(bookSchema);
});`,
      chunks: [
        {
          lines: '1-8',
          label: 'Manual Chai Assertions',
          explanation: 'Requires writing multiple imperative checks that must be manually updated when payloads change.'
        },
        {
          lines: '10-22',
          label: 'Declarative JSON Schema',
          explanation: 'Standardized specification that can be shared across mock servers, documentation, and CI gates.'
        }
      ]
    },

    {
      type: 'battle-scar',
      incident: 'The Four-Month Integration Standoff That Sunk A Mobile Release',
      context: 'A financial institution spent four months building mobile and backend applications in parallel without an agreed schema. When both systems integrated during staging, 85% of field names differed ("account_number" vs "accNum"). The resulting architectural rewrite delayed the launch by five months and cost $1.2M.',
      takeaway: 'Adopt Contract First design: sign off on machine-readable JSON Schema specifications before writing code.'
    },
    {
      type: 'triage',
      title: 'Triage Drill: The Polite 200 Trap',
      scenario: 'You run an automated test against a GraphQL endpoint. The test asserts: pm.response.to.have.status(200). The test passes green. However, the mobile app displays an empty screen with a spinner.',
      options: [
        {
          label: 'The server rejected the request because GraphQL requires HTTP POST.',
          correct: false,
          explanation: 'The request was sent and answered with 200 OK.'
        },
        {
          label: 'The GraphQL server returned 200 OK with an errors array in the body, which was never asserted.',
          correct: true,
          explanation: 'GraphQL servers return HTTP 200 OK even when queries fail. Test suites must verify that res.errors is undefined.'
        },
        {
          label: 'The mobile app network cache is corrupt and must be cleared.',
          correct: false,
          explanation: 'The root cause is unverified errors in the GraphQL response body.'
        }
      ],
      debrief: 'In GraphQL, HTTP 200 OK only indicates that the query was received, not that it executed successfully. Always assert the absence of errors in the response body.'
    },

    {
      type: 'quiz',
      title: 'Knowledge Check: Contract First Workflow',
      question: 'In a Contract First API development lifecycle, which artifact is created and agreed upon before any backend implementation code is written?',
      options: [
        'The database migration scripts',
        'The JSON Schema or OpenAPI specification',
        'The production deployment Helm charts',
        'The end-to-end Selenium test suite'
      ],
      correctAnswer: 1,
      explanation: 'Contract First design mandates that the API contract (JSON Schema or OpenAPI) is authored and approved before writing frontend or backend code.'
    },
    {
      type: 'takeaways',
      title: 'Senior Savior Takeaways',
      points: [
        'Contract First design: agree on JSON Schema Draft 07 before writing implementation code.',
        'Deploy hosted mock servers with query parameter matching to decouple frontend and backend schedules.',
        'Use the identical JSON Schema for mock generation, frontend contract, and CI acceptance tests.',
        'Beware the polite 200 lie in GraphQL: always assert that the errors array in the response body is undefined.'
      ]
    },
    {
      type: 'victory-milestone',
      badge: 'Milestone 3.2 Cleared',
      title: 'Mock Servers & Contracts Mastered',
      summary: 'You have decoupled parallel development teams using hosted mock servers, authored JSON Schema Draft 07 contracts, verified live responses with Ajv, and audited GraphQL response payloads.',
      nextStep: 'Proceed to Chapter 11 to master modern token security with OAuth 2.0 and PKCE authorization flows.'
    },
    {
      type: 'cliffhanger',
      time: '05:00 AM',
      location: 'Apex Security Operations Center',
      alert: 'UNAUTHORIZED PRIVILEGE ESCALATION',
      speaker: 'Akshay Sharma',
      speech: 'Changing studentId from 104 to 101 returned the entire campus grading ledger!',
      context: 'Akshay stumbles upon an Insecure Direct Object Reference (IDOR) flaw in the campus portal. A simple query parameter change exposes private records. Sameer steps in: modern token security with OAuth 2.0 and PKCE is mandatory. Chapter 11 begins!',
      nextLessonId: 'oauth2-authentication'
    }
  ]
}
