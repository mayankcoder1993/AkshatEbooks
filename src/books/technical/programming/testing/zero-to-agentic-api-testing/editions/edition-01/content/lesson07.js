import chainingImg from '../assets/api-request-chaining-pipeline.jpg'
import arrayPipelineImg from '../assets/javascript-array-pipeline-transform.jpg'
import ch07Scene1Img from '../assets/ch07-scene-1-chaining-pipeline.jpg'
import ch07Scene2Img from '../assets/ch07-scene-2-chaining-execution-ui.jpg'
import warRoomWideImg from '../assets/apex-campus-crisis-war-room.jpg'
import warRoomPanel1Img from '../assets/war-room-panel-1-the-crisis.jpg'
import warRoomPanel2Img from '../assets/war-room-panel-2-the-standoff.jpg'
import warRoomPanel3Img from '../assets/war-room-panel-3-invisible-wire.jpg'

export const lesson07 = {
  id: 'request-chaining',
  icon: '',
  title: 'Request Chaining and Complex Nested JSON Parsing',
  shortTitle: 'Request Chaining and Parsing',
  subtitle: 'Automated property transfer, navigating nested object hierarchies, array methods, and mathematical calculations.',
  tags: ['Chaining', 'Property Transfer', 'Nested JSON', 'Array Methods', 'Calculations'],
  blocks: [
    {
      type: 'mission-hud',
      mission: 'Mission 2: Automating Student and Campus Services at Scale',
      phase: 'Phase 4 of 5: Dynamic Request Chaining & Array Pipelines',
      rank: 'Rank: Automation Pipeline Architect',
      status: 'ACTIVE'
    },
    {
      type: 'chapter-opener',
      missionBadge: 'MISSION 2 · PHASE 4 OF 6',
      missionTitle: 'Automating Student and Campus Services at Scale',
      missionCrisis: 'Autonomous Request Chaining and Multilevel JSON Traversal',
      missionContext: 'Real world workflows do not exist in isolation: data produced by one request must be consumed by the next. In the library catalog, AddBook generates a composite ID that must be dynamically captured and passed into GetBook and DeleteBook. Furthermore, enterprise responses contain deeply nested objects and arrays that require mathematical verification.',
      missionObjective: 'Chain AddBook, GetBook, and DeleteBook dynamically, parse nested JSON responses, and aggregate array data with JavaScript methods.',
      targetSystems: 'API Testing Workbench Request Chaining Engine · JavaScript Functional Array Pipelines · Nested JSON Deserializer',
      difficulty: 'INTERMEDIATE',
      estimatedTime: '30 MINUTES',
      prerequisites: 'Chapter 06: Managing Variables Across the Five Scopes'
    },
    {
      type: 'mission-tracker',
      currentPhase: 'Phase 4: Request Chaining & Array Pipelines',
      totalPhases: 5,
      completedSteps: [
        'Manual CRUD Lifecycle & Unique Constraints (Chapter 04)',
        'Writing JavaScript Assertions and pm Object (Chapter 05)',
        'Managing Variables Across the Five Scopes (Chapter 06)'
      ],
      currentStep: 'Request Chaining and Complex Nested JSON Parsing',
      upcomingSteps: [
        'Data Driven Testing with External Data Files (Chapter 08)'
      ]
    },

    // =========================================================================
    // GRAPHIC COMIC ARC : SIX SCENES FROM MASTER STORY LEDGER
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC : SIX SCENES',
      title: 'The Property Transfer Chasm and Array Pipeline Symphony',
      intro: 'Follow apprentice Akshay, Principal Systems Architect Sameer, and Frontend Lead Ananya in the Financial Systems Annex as mouse slips cause 404 errors, nested JSON triggers null pointer crashes, and JavaScript array pipelines prove the campus budget.',
      panels: [
        {
          title: 'Scene 1: 01:15 AM: Deep Midnight Financial Systems Annex and Manual Fatigue',
          time: '01:15 AM',
          layout: 'duo',
          image: {
            src: warRoomWideImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay and Sameer at black granite server tables in the Financial Systems Annex.',
            caption: 'Financial Systems Annex: Server towers hum as rain clears into cool midnight fog.'
          },
          replyImage: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay highlighting text with his mouse trackpad between different browser tabs.',
            caption: 'Manual Property Transfer: Copying generated IDs with a mouse trackpad creates pipeline bottlenecks.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'We have dynamic ISBNs now. But to verify GetBook, I am still highlighting IDs with my mouse to paste them!',
            replySpeaker: 'Sameer',
            replySpeech: 'The manual property transfer chasm. A single human copy paste breaks pipeline autonomy.'
          },
          scene: 'At 01:15 AM, cold blue LED strips illuminate the Financial Systems Annex. Following the variable scope victory, Akshay hits a new bottleneck: manually copying IDs from AddBook responses to paste them into GetBook and DeleteBook URLs.',
          realization: 'Manual property transfer between API requests creates human friction and breaks automated regression pipelines.'
        },
        {
          title: 'Scene 2: 01:17 AM: The Split-Second Cursor Slip: Highlighting the Wrong ID',
          time: '01:17 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Close up of the trackpad and monitor showing 404 Not Found due to truncated ID.',
            caption: 'Cursor Slip Trap: Missing trailing characters on a manual copy turns valid tests red.'
          },
          replyImage: {
            src: warRoomPanel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-2-the-standoff.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer gesturing calmly with cutting chai in brass holder.',
            caption: 'Memory Extraction: Let the V8 JavaScript engine extract properties directly in memory.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: '404 Not Found! My mouse missed the last three characters on the copy! The whole test failed!',
            replySpeaker: 'Sameer',
            replySpeech: 'Human coordination degrades at one in the morning. Let JavaScript extract the property in memory.'
          },
          scene: 'Akshay tries copying LIB-99482-CS from the AddBook response. His finger slips, copying LIB-9948. When GetBook executes, the server responds with 404 Not Found, failing the verification.',
          realization: 'Automated request chaining eliminates human trackpad errors by transferring properties directly in memory.'
        },
        {
          title: 'Scene 3: 01:21 AM: Deserializing JSON and Binding Dynamic State to Collection Scope',
          time: '01:21 AM',
          layout: 'duo',
          image: {
            src: ch07Scene1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch07-scene-1-chaining-pipeline.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay writing pm.response.json() and pm.collectionVariables.set() in the Tests script tab.',
            caption: 'Dynamic Property Binding: Storing response properties in Collection scope for downstream consumption.'
          },
          replyImage: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Diagram showing AddBook response ID flowing directly into GetBook query parameter.',
            caption: 'The Automated Bridge: Upstream response body feeds downstream request parameters.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'const res = pm.response.json(); pm.collectionVariables.set("bookId", res.ID); Bound in memory!',
            replySpeaker: 'Sameer',
            replySpeech: 'Now reference {{bookId}} in GetBook and DeleteBook. The loop closes itself.'
          },
          scene: 'In the Tests tab of AddBook, Akshay parses the incoming response into an object and saves the generated ID into Collection scope. He interpolates {{bookId}} into GetBook query parameters and DeleteBook body payloads.',
          realization: 'Deserializing JSON responses and binding extracted keys to collection variables creates resilient automated request chains.'
        },
        {
          title: 'Scene 4: 01:29 AM: The 3-Step Runner Symphony: Green Cascade in 24 Milliseconds',
          time: '01:29 AM',
          layout: 'duo',
          image: {
            src: ch07Scene2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch07-scene-2-chaining-execution-ui.jpg',
            w: 1408,
            h: 768,
            alt: 'Collection runner interface displaying passing green tests across AddBook, GetBook, and DeleteBook.',
            caption: 'Chained Symphony: Three requests execute autonomously in cascade in 24 milliseconds.'
          },
          replyImage: {
            src: warRoomPanel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-2-the-standoff.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer reviewing the test summary metrics table with Akshay.',
            caption: 'Complete Lifecycle: Create, verify, and teardown executed without human intervention.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'Three requests executed in cascade: Add, Get, Delete. 24 milliseconds flat.',
            replySpeaker: 'Akshay',
            replySpeech: 'The book was created, verified, and cleaned up with zero manual clicks!'
          },
          scene: 'Akshay launches the Collection Runner. AddBook fires, stores the ID, GetBook verifies the record, and DeleteBook cleans up the book from the database. The entire CRUD cycle completes in 24 milliseconds.',
          realization: 'A well structured request chain automates the complete resource lifecycle while maintaining zero residual database clutter.'
        },
        {
          title: 'Scene 5: 01:33 AM: The Multilevel JSON Labyrinth and Optional Chaining',
          time: '01:33 AM',
          layout: 'duo',
          image: {
            src: arrayPipelineImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/javascript-array-pipeline-transform.jpg',
            w: 1408,
            h: 768,
            alt: 'Diagram showing nested JSON response hierarchy with department and book arrays.',
            caption: 'Nested Labyrinth: Five tiers of nested objects and arrays require defensive navigation.'
          },
          replyImage: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Terminal screen displaying TypeError: Cannot read properties of undefined.',
            caption: 'Null Pointer Crash: Direct property access on missing parent keys crashes the V8 runner.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'TypeError: Cannot read properties of undefined! The department audit test crashed!',
            replySpeaker: 'Sameer',
            replySpeech: 'Defensive optional chaining. Use the Elvis operator: data?.departments?.[0]?.items.'
          },
          scene: 'Ananya returns with the bookstore department audit payload. When Akshay writes a test accessing deep properties directly, a missing optional key throws a TypeError that halts the entire test suite. Sameer introduces optional chaining.',
          realization: 'Optional chaining prevents unhandled null pointer exceptions when traversing deep, evolving enterprise JSON payloads.'
        },
        {
          title: 'Scene 6: 01:49 AM: Functional Array Pipelines and the 1500 Budget Proof',
          time: '01:49 AM',
          layout: 'duo',
          image: {
            src: ch07Scene1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch07-scene-1-chaining-pipeline.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay and Ananya verifying computed totals on the bookstore telemetry monitor.',
            caption: 'Mathematical Verification: reduce() computes the total purchase sum matching budget 1500.'
          },
          replyImage: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Whiteboard showing the four array methods: find, filter, map, and reduce.',
            caption: 'The Four Pillars: Functional array methods turn complex loops into clean assertions.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'books.reduce((acc, b) => acc + b.price, 0); Total matches 1500 exactly!',
            replySpeaker: 'Ananya',
            replySpeech: 'The audit discrepancy is resolved! The books, taxes, and discounts reconcile!'
          },
          scene: 'Akshay applies the four functional array methods: find() to locate specific titles, filter() to isolate premium volumes, map() to extract title arrays, and reduce() to calculate the total purchase sum. The assertion confirms the total matches 1500.',
          realization: 'Functional array methods turn complex multi record assertions into clean, readable single line verification statements.'
        }
      ]
    },

    // =========================================================================
    // TECHNICAL ARCHITECTURE & DEEP DIVE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      text: 'The Architecture of Autonomous Request Chaining'
    },
    {
      type: 'image',
      src: chainingImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-request-chaining-pipeline.jpg',
      w: 1408,
      h: 768,
      title: 'Autonomous Request Chaining Pipeline: State Transfer across HTTP Boundaries',
      text: 'Request chaining turns isolated HTTP calls into an automated end to end workflow. Properties extracted from upstream responses are stored in collection variables and passed into downstream request parameters.',
      alt: 'Architecture diagram showing 3-step chained pipeline with automated property transfer.',
      caption: 'The 3-step chained pipeline: AddBook stores book_id, GetBook reads it, DeleteBook cleans it.'
    },

    // =========================================================================
    // WORKBENCH SCREEN 1 : CHAINED PIPELINE RUNNER
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 1 : REQUEST CHAINING RUNNER',
      title: 'Chained 3-Step Lifecycle: AddBook -> GetBook -> DeleteBook',
      scenario: 'Execute the AddBook request. The Tests script captures res.ID and assigns it to collectionVariables. GetBook and DeleteBook consume {{bookId}} autonomously.',
      config: {
        method: 'POST',
        path: '/v1/books',
        activeTab: 'Tests'
      },
      tabs: {
        params: [],
        headers: [
          { key: 'Content-Type', value: 'application/json' }
        ],
        body: JSON.stringify({
          name: "Designing Data-Intensive Applications",
          isbn: "ISBN992459",
          aisle: 88,
          author: "Martin Kleppmann"
        }, null, 2),
        tests: '// Deserializing JSON response and binding to collection scope\nconst res = pm.response.json();\npm.test("Status is 200 OK", function() {\n  pm.response.to.have.status(200);\n});\n\npm.test("Book added and ID extracted", function() {\n  pm.expect(res.Msg).to.eql("successfully added");\n  pm.expect(res.ID).to.exist;\n  // Bind dynamic ID for downstream requests\n  pm.collectionVariables.set("bookId", res.ID);\n});'
      },
      response: {
        status: '200 OK',
        time: '12ms',
        size: '401B',
        body: JSON.stringify({
          Msg: "successfully added",
          ID: "ISBN992459"
        }, null, 2)
      },
      notes: [
        'pm.response.json() deserializes the raw HTTP response byte stream into a live JavaScript object.',
        'pm.collectionVariables.set("bookId", res.ID) makes the ID available to all requests in the collection.'
      ]
    },

    // =========================================================================
    // WORKBENCH SCREEN 2 : ARRAY PIPELINE & REDUCE ACCUMULATOR
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 2 : JAVASCRIPT ARRAY PIPELINE',
      title: 'Nested JSON Traversal & Functional Array Reduction',
      scenario: 'Inspect the Department Audit response. Use find(), filter(), map(), and reduce() to validate nested book arrays and verify the total budget.',
      config: {
        method: 'GET',
        path: '/v1/departments/audit',
        activeTab: 'Tests'
      },
      tabs: {
        params: [
          { key: 'deptId', value: 'CS', desc: 'Department identifier' }
        ],
        headers: [
          { key: 'Accept', value: 'application/json' }
        ],
        body: '',
        tests: 'const res = pm.response.json();\n\npm.test("Validate department and books array", function() {\n  pm.expect(res.department).to.eql("Computer Science");\n  pm.expect(res.books).to.be.an("array").that.is.not.empty;\n});\n\npm.test("Target book price and keys exist", function() {\n  const target = res.books.find(b => b.price === 55);\n  pm.expect(target).to.exist;\n  pm.expect(target.title).to.include("Microservices");\n});\n\npm.test("Computed total matches budget", function() {\n  const total = res.books.reduce((acc, b) => acc + b.price, 0);\n  pm.expect(total).to.eql(1500);\n});'
      },
      response: {
        status: '200 OK',
        time: '15ms',
        size: '578B',
        body: JSON.stringify({
          department: "Computer Science",
          budget: 1500,
          books: [
            { id: "B1", title: "Building Microservices", price: 55, stock: 10 },
            { id: "B2", title: "Enterprise Integration", price: 65, stock: 8 },
            { id: "B3", title: "Clean Architecture", price: 50, stock: 14 }
          ]
        }, null, 2)
      },
      notes: [
        'find() returns the first element matching a predicate or undefined if absent.',
        'reduce() iterates over array elements, accumulating a single return value (e.g. total cost).'
      ]
    },

    // =========================================================================
    // FOUR PART PEDAGOGICAL CARDS (SENIOR SAVIOR CONTRACTS)
    // =========================================================================
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 1 : AUTONOMOUS PROPERTY EXTRACTION',
      title: 'Autonomous Property Extraction and Chaining',
      subtitle: 'Eliminating manual cut and paste through programmatic variable binding',
      input: {
        method: 'POST',
        url: '{{baseUrl}}/v1/books',
        desc: 'Request 1 creates book entity returning dynamic composite ID.',
        code: 'pm.test("Capture ID", function() {\n  const res = pm.response.json();\n  pm.collectionVariables.set("bookId", res.ID);\n});'
      },
      underTheHood: {
        desc: 'Tests script deserializes JSON in V8 sandbox and updates collection dictionary.',
        steps: [
          'AddBook request completes with status 200 OK.',
          'Tests script parses JSON response body using pm.response.json().',
          'pm.collectionVariables.set("bookId", res.ID) stores ID in Collection scope.',
          'Downstream GetBook query parameter {{bookId}} resolves to captured ID.',
          'Downstream DeleteBook body payload {{bookId}} resolves to same ID for teardown.'
        ]
      },
      output: {
        status: '200 OK',
        time: '12ms',
        desc: 'Subsequent requests execute autonomously without human trackpad interaction.',
        body: JSON.stringify({
          Msg: "successfully added",
          ID: "ISBN992459"
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Never let a human finger bridge two API requests.',
        rule: 'Always automate property extraction in test scripts. Bind dynamic keys to Collection scope.',
        trap: 'Manually copy pasting IDs between requests prevents running test collections headlessly in CI.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 2 : DEFENSIVE OPTIONAL CHAINING',
      title: 'Defensive Optional Chaining and Null Safety',
      subtitle: 'Surviving unexpected null and undefined values in deep JSON trees',
      input: {
        method: 'SCRIPT',
        url: 'Tests Tab Sandbox',
        desc: 'Deeply nested property traversal on evolving enterprise JSON payloads.',
        code: '// Defensive traversal with the Elvis operator (?.)\nconst discount = data?.departments?.[0]?.discounts?.seasonal ?? 0;\npm.expect(discount).to.be.a("number");'
      },
      underTheHood: {
        desc: 'Optional chaining evaluates properties without throwing unhandled TypeError exceptions.',
        steps: [
          'V8 evaluates data.departments. If undefined, halts evaluation and returns undefined.',
          'Does not throw "Cannot read properties of undefined" unhandled exception.',
          'Nullish coalescing operator (??) supplies default fallback value (0).',
          'Assertion test evaluates gracefully with informative assertion failure if field is missing.',
          'Remaining tests in the script continue executing without catastrophic crash.'
        ]
      },
      output: {
        status: 'SAFE TRAVERSAL',
        time: '0ms',
        desc: 'Zero unhandled runtime exceptions across complex multi tier object trees.',
        body: JSON.stringify({
          evaluatedValue: 0,
          evaluationStatus: "SAFE_FALLBACK"
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Dot notation assumes; optional chaining defends.',
        rule: 'Always use optional chaining (?.) when traversing nested objects that may be absent.',
        trap: 'Chaining dot notation through absent intermediate keys throws a TypeError that kills the whole test run.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 3 : FUNCTIONAL ARRAY PIPELINES',
      title: 'Functional Array Pipelines in API Testing',
      subtitle: 'Transforming, filtering, and aggregating response arrays with modern JavaScript',
      input: {
        method: 'GET',
        url: '{{baseUrl}}/v1/departments/audit',
        desc: 'Endpoint returning department audit object containing an array of 50 book items.',
        code: 'const books = pm.response.json().books;\nconst premium = books.filter(b => b.price >= 50);\nconst titles  = books.map(b => b.title);\nconst total   = books.reduce((acc, b) => acc + b.price, 0);'
      },
      underTheHood: {
        desc: 'Functional array methods operate declaratively on collections without procedural for loops.',
        steps: [
          'find() scans array, returning first matching object or undefined.',
          'filter() evaluates predicate function, returning new array of matching elements.',
          'map() projects objects into a transformed array of values (e.g. title strings).',
          'reduce() runs accumulator function across array, computing mathematical totals.',
          'Single line functional expressions assert data integrity with concise readability.'
        ]
      },
      output: {
        status: '200 OK',
        time: '18ms',
        desc: 'Computed total equals 1500, verifying bookstore budget reconciliation.',
        body: JSON.stringify({
          filteredCount: 2,
          totalPrice: 1500,
          verified: true
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Treat response arrays as data streams, not index counters.',
        rule: 'Use find, filter, map, and reduce for array assertions instead of verbose for loops.',
        trap: 'Writing manual for loops with index variables leads to off by one errors and brittle test code.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 4 : SYMMETRIC AUTONOMOUS TEARDOWN',
      title: 'Symmetric Autonomous Teardown Architecture',
      subtitle: 'Guaranteeing zero delta residual state in shared persistent databases',
      input: {
        method: 'POST',
        url: '{{baseUrl}}/v1/books/delete',
        desc: 'Teardown request consuming {{bookId}} to purge created test entities.',
        code: '{\n  "ID": "{{bookId}}"\n}'
      },
      underTheHood: {
        desc: 'Teardown request executes at conclusion of collection run, removing transient records.',
        steps: [
          'AddBook creates entity with unique composite ID.',
          'GetBook verifies entity properties in live database.',
          'DeleteBook issues delete command referencing dynamic {{bookId}}.',
          'Database purges row, restoring initial database state.',
          'Database holds zero orphan records following regression suite execution.'
        ]
      },
      output: {
        status: '200 OK',
        time: '14ms',
        desc: 'Server confirms book record deleted. Subsequent GET returns fallback.',
        body: JSON.stringify({
          msg: "book is successfully deleted"
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Every test that creates state is responsible for destroying it.',
        rule: 'Pair every stateful creation test with an automated teardown request in the collection.',
        trap: 'Leaving test created entities in persistent databases causes disk bloat and unique key collisions.'
      }
    },

    // =========================================================================
    // POST DRILLS & QUIZ
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      text: 'Functional Array Methods: The Tester Arsenal'
    },
    {
      type: 'chunked-code',
      title: 'The Big Four Array Methods for API Testers',
      code: `const books = [
  { id: 1, title: "Microservices", price: 55, stock: 10 },
  { id: 2, title: "Integration",   price: 65, stock: 0 },
  { id: 3, title: "Clean Code",    price: 45, stock: 5 }
];

// 1. find(): Locate a specific item
const book65 = books.find(b => b.price === 65);
// book65 -> { id: 2, title: "Integration", price: 65, stock: 0 }

// 2. filter(): Extract a subset matching criteria
const inStock = books.filter(b => b.stock > 0);
// inStock.length -> 2 (items 1 and 3)

// 3. map(): Transform array of objects into array of primitives
const titles = books.map(b => b.title);
// titles -> ["Microservices", "Integration", "Clean Code"]

// 4. reduce(): Accumulate a single value (sum, tally, aggregation)
const totalInventoryValue = books.reduce((sum, b) => sum + (b.price * b.stock), 0);
// total -> (55*10) + (65*0) + (45*5) = 550 + 225 = 775`,
      chunks: [
        {
          lines: '8-10',
          label: 'find()',
          explanation: 'Returns the first object that satisfies the condition, or undefined if no match exists.'
        },
        {
          lines: '12-14',
          label: 'filter()',
          explanation: 'Returns a brand new array containing all elements that pass the truth test.'
        },
        {
          lines: '16-18',
          label: 'map()',
          explanation: 'Extracts specific attributes or calculates transformed properties for every element.'
        },
        {
          lines: '20-22',
          label: 'reduce()',
          explanation: 'Iterates through the collection, folding all values into a single accumulator result.'
        }
      ]
    },

    {
      type: 'battle-scar',
      incident: 'The Orphan Record Avalanche That Exhausted Production Disk Space',
      context: 'An automated testing framework created 50,000 synthetic customer accounts every night to test transaction latency. However, the engineers never built an automated teardown step. Within three months, millions of phantom accounts exhausted database index storage, causing an unrecoverable production database outage.',
      takeaway: 'Every test that creates state must be paired with an automated teardown request.'
    },
    {
      type: 'triage',
      title: 'Triage Drill: Undefined Chaining Bug',
      scenario: 'You run a chained collection: AddBook -> GetBook. GetBook fails with 404 Not Found. When you inspect the URL in the Workbench Console, it says: GET /v1/books?id={{bookId}}. The variable was not resolved.',
      options: [
        {
          label: 'The server rejected the request because the variable name is invalid.',
          correct: false,
          explanation: 'The server never saw a variable name: it received literal text.'
        },
        {
          label: 'AddBook failed to set the collection variable, so the placeholder was sent literally.',
          correct: true,
          explanation: 'When a variable placeholder cannot be resolved in any active scope, the workbench sends the literal string {{bookId}} across the wire, causing a 404.'
        },
        {
          label: 'Double curly braces only work in request bodies, not query parameters.',
          correct: false,
          explanation: 'Double curly braces work in URLs, params, headers, and bodies.'
        }
      ],
      debrief: 'If {{variable}} appears literally in the console, the variable was never defined in any active scope before the request fired.'
    },

    {
      type: 'guess',
      prompt: 'Which JavaScript array method is best suited for summing the prices of all items in an order array to verify total invoice accuracy?',
      options: [
        'Array.prototype.find()',
        'Array.prototype.map()',
        'Array.prototype.reduce()',
        'Array.prototype.filter()',
      ],
      answerIndex: 2,
      explain: 'reduce() iterates over an array and accumulates values into a single result (such as a sum or aggregate count).',
    },
    {
      type: 'quiz',
      items: [
        [
          'Which JavaScript array method is best suited for summing the prices of all items in an order array to verify total invoice accuracy?',
          'Array.prototype.reduce(). reduce() iterates over an array and accumulates values into a single result (such as a sum or aggregate count).',
        ],
      ],
    },
    {
      type: 'takeaways',
      title: 'Senior Savior Takeaways',
      items: [
        'Automate property transfer in Tests scripts: capture dynamic IDs and save them to Collection scope.',
        'Use optional chaining (?.) to traverse multi tier enterprise JSON payloads safely without TypeError crashes.',
        'Master the big four array methods: find() for search, filter() for subsets, map() for projections, reduce() for totals.',
        'Enforce symmetric teardown: every request that creates state must be paired with a request that deletes it.'
      ]
    },
    {
      type: 'victory-milestone',
      badge: 'Milestone 2.4 Cleared',
      title: 'Request Chaining & Array Pipelines Mastered',
      summary: 'You have automated dynamic property transfer across HTTP boundaries, mastered defensive optional chaining, and implemented functional array pipelines to audit complex budgets.',
      powers: [
        'Extracting dynamic properties from response bodies into collection scope',
        'Interpolating captured IDs into subsequent GET and DELETE requests',
        'Traversing complex multi-tier nested JSON payloads using optional chaining',
        'Transforming and aggregating arrays using find, filter, map, and reduce'
      ],
      disastersPrevented: [
        'Eliminated manual copy-paste errors that trigger false 404 Not Found failures',
        'Prevented unhandled null pointer crashes when traversing optional payload fields',
        'Stopped math calculation discrepancies from slipping past financial audits'
      ],
      nextStep: 'Proceed to Chapter 08 to scale from single requests to mass ingestion with Data Driven Testing.'
    },
    {
      type: 'cliffhanger',
      time: '02:15 AM',
      location: 'Apex Logistics Data Center',
      alert: 'MASS INGESTION CRISIS',
      speaker: 'Akshay Sharma',
      speech: 'University registrar just dumped 10,000 course records in an external CSV file!',
      context: 'Akshay and Sameer head to the Logistics Data Center where testing individual requests by hand is impossible. They must drive collection iterations from external data files.',
      nextLessonId: 'data-driven-testing'
    }
  ]
}
