import libraryEngineImg from '../assets/campus-library-automation-engine.jpg'
import lifecycleImg from '../assets/library-api-crud-lifecycle.jpg'

export const lesson04 = {
  id: 'library-crud',
  icon: '',
  title: 'Manual Testing the College Library API',
  shortTitle: 'The Library API',
  subtitle: 'Executing AddBook, GetBook, and DeleteBook manually, feeling the copy paste pain, and mapping unique constraints.',
  tags: ['Postman', 'Collections', 'CRUD', 'Library API', 'Hands On'],
  blocks: [
    {
      type: 'mission-hud',
      mission: 'Mission 2: Automating Student and Campus Services at Scale',
      phase: 'Phase 1 of 5: Manual CRUD Verification',
      rank: 'Rank: Automation Quality Engineer',
      status: 'ACTIVE'
    },
    {
      type: 'mission',
      title: 'Mission 2: Automating Student and Campus Services at Scale',
      text: 'Every college campus has a library where students check out textbooks, professors reserve course reading material, and librarians track inventory across physical aisles. The college has deployed a new web service to manage its book catalog across campus stacks. Before releasing the system to faculty and students, we must test every operation: adding a new textbook, verifying its physical shelf location, and removing retired editions. As Automation Quality Engineer, your mission is to map out the entire inventory lifecycle and prepare it for automated testing.',
      image: {
        src: libraryEngineImg,
        file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/campus-library-automation-engine.jpg',
        w: 1376,
        h: 768,
        alt: 'Automated campus library inventory center showing REST API operations, shelf mapping matrix, and request chaining pipeline.',
        caption: 'The Campus Library Operations Center: Moving from manual book checking to fast automated testing.',
        points: [
          'Live Book Tracking: Keeping track of textbook copies, shelf locations, and checkout status in real time.',
          'The Three Core Actions: Adding new books, checking where they sit on the shelf, and deleting old copies safely.',
          'Smart Automation: Passing book details automatically from one step to the next without copying and pasting by hand.',
        ],
      },
      weKnow: [
        'The Library API is deployed across dedicated campus service clusters with structured REST endpoints.',
        'Books are stored with a unique combination of ISBN and aisle numbers.',
        'If an ISBN and aisle combination already exists, the server rejects insertion with "book already exist".',
      ],
      weNeed: [
        'A configured POST AddBook request with valid JSON payload and unique ISBN.',
        'A configured GET GetBook request using query parameters to verify coordinates.',
        'A configured POST DeleteBook request to verify safe cleanup.',
        'The ability to diagnose unique database constraint collisions.',
      ],
    },
    {
      type: 'battle-plan',
      badge: 'TACTICAL MISSION ROADMAP',
      title: 'How We Will Approach Mission 2: The 5 Phase Battle Plan',
      intro: 'Automating an enterprise inventory system requires a deliberate step by step progression. We move from manual exploration to full data driven automation across five structured phases:',
      phases: [
        {
          phase: 'Phase 1',
          timing: 'Chapter 4 · Right Now',
          title: 'Manual CRUD Execution',
          status: 'active',
          desc: 'We execute manual AddBook, GetBook, and DeleteBook operations to map unique ISBN and aisle constraints and experience the friction of manual testing.',
          outcome: 'You discover database constraint collisions and understand the lifecycle of book inventory.'
        },
        {
          phase: 'Phase 2',
          timing: 'Chapter 5 · Next Step',
          title: 'Automated Assertions',
          status: 'upcoming',
          desc: 'We replace human eyeball checks with automated JavaScript assertions verifying status codes, response times, and payload schemas.',
          outcome: 'Your tests pass or fail automatically in milliseconds without human inspection.'
        },
        {
          phase: 'Phase 3',
          timing: 'Chapter 6 · Environment Isolation',
          title: 'Variable Scopes and Environments',
          status: 'upcoming',
          desc: 'We eliminate hardcoded URLs by configuring dynamic environments (Local, QA, UAT) and pre request scripts to generate random unique ISBNs.',
          outcome: 'Zero test collisions; identical collections run seamlessly across multiple test servers.'
        },
        {
          phase: 'Phase 4',
          timing: 'Chapter 7 · Request Chaining',
          title: 'Dynamic Request Chaining',
          status: 'upcoming',
          desc: 'We extract generated book IDs from POST responses and pass them dynamically into downstream GET and DELETE requests without copy pasting.',
          outcome: 'Self contained automated testing pipelines that clean up their own test data.'
        },
        {
          phase: 'Phase 5',
          timing: 'Chapter 8 · Mission Victory',
          title: 'Data Driven Scale',
          status: 'upcoming',
          desc: 'We parameterize our suite with external CSV and JSON data files using Postman Collection Runner to test hundreds of records in seconds.',
          outcome: 'Mission 2 Cleared! Full automated data driven testing suite running against enterprise services.'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 1: The Library CRUD Lifecycle Sequence',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'DATA LIFECYCLE',
      title: 'Library API CRUD Lifecycle: Create, Verify, and Cleanup Sequence',
      text: 'The college library system exposes three core HTTP services that form a complete data lifecycle: Create a record with unique coordinates, Read it back to confirm persistence across campus stacks, and Delete it to maintain a clean database state.',
      src: lifecycleImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/library-api-crud-lifecycle.jpg',
      w: 1408,
      h: 768,
      alt: 'Three stage sequence flow diagram: Step 1 POST AddBook, Step 2 GET GetBook, Step 3 POST DeleteBook.',
      caption: 'The complete lifecycle of a textbook through the Library API.',
      points: [
        'Phase 1 (Step 1 AddBook POST): Client submits book title, author, ISBN, and shelf aisle. The server stores the record and returns a composite ID.',
        'Phase 2 (Step 2 GetBook GET): Client queries GET /books with the composite ID to confirm the record exists in the catalog.',
        'Phase 3 (Step 3 DeleteBook POST): Client submits a delete request with the composite ID to remove the record.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 2: Action 1: Adding a Book (POST)',
    },
    {
      type: 'paragraph',
      text: 'When a new book arrives at the circulation desk, the librarian enters its title, author, ISBN, and shelf aisle number. In our API test workbench, we break down the outgoing HTTP POST request in chunks:',
    },
    {
      type: 'chunked-code',
      badge: 'REQUEST CHUNKS',
      title: 'Deconstructing the AddBook POST Request',
      intro: 'Inspect the method, endpoint, and payload:',
      chunks: [
        {
          label: 'Endpoint and Method',
          filename: 'AddBook-line.http',
          code: 'POST /v1/books HTTP/1.1\nHost: api.campuslibrary.org',
          title: 'The Target Resource',
          explanation: 'Dispatches a POST request to the collection resource endpoint.',
          keyTakeaway: 'POST indicates resource creation on the server.'
        },
        {
          label: 'JSON Payload Body',
          filename: 'AddBook-payload.json',
          code: '{\n  "name": "Zero to Agentic API Testing",\n  "isbn": "9781",\n  "aisle": "227",\n  "author": "Alex Mercer"\n}',
          title: 'The Book Attributes',
          explanation: 'The server combines the ISBN (9781) and aisle (227) into a unique composite primary key: 9781227.',
          keyTakeaway: 'The combination of ISBN and aisle forms the unique identifier in this API.'
        }
      ]
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'When we send this AddBook request for the first time, what response status and payload do you expect from the server?',
      options: [
        '200 OK with JSON confirmation: { "Msg": "successfully added", "ID": "9781227" }',
        '404 Not Found because the library catalog is locked for the night',
        '500 Server Error because the book author is not an enrolled student'
      ],
      answerIndex: 0,
      revealTitle: 'AddBook Live Wire Outcome',
      explanation: 'The book is registered! The server returns 200 OK along with a confirmation message and the composite primary key ID: 9781227.'
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Architectural Contract Quirk: Why AddBook Returns 200 Instead of 201',
      paragraphs: [
        'In Chapter 2, we learned that theoretical REST standards recommend returning 201 Created when a new record is added.',
        'However, in real world corporate software, many production APIs return 200 OK with a custom confirmation payload. Notice also that the success message uses capitalized "Msg" while other endpoints use lowercase "msg".',
        'As quality automation engineers, our job is not to enforce academic dogma: we test against the actual published contract of the service.',
      ],
    },
    {
      type: 'api-inspector',
      title: 'Live Interactive Wire Inspector: AddBook POST',
      method: 'POST',
      url: 'https://qa-api.campuslibrary.org/v1/books',
      publicMirrorUrl: 'https://raw.githubusercontent.com/mayankcoder1993/AkshatEbooks/arena/01a0bfe5-akshatebooks/course-materials/zero-to-agentic-api-testing/lesson-04/AddBook-payload.json',
      headers: {
        'Content-Type': 'application/json'
      },
      requestBody: {
        name: 'Zero to Agentic API Testing',
        isbn: '9781',
        aisle: '227',
        author: 'Alex Mercer'
      },
      status: '200 OK',
      time: '182 ms',
      size: '248 B',
      responseBody: {
        Msg: 'successfully added',
        ID: '9781227'
      }
    },
    {
      type: 'heading',
      text: 'Step 3: Action 2: Retrieving by ID (GET with Query Params)',
    },
    {
      type: 'paragraph',
      text: 'To confirm that the book was stored on the correct shelf, we query the catalog by passing the generated composite ID (9781227) as a query parameter:',
    },
    {
      type: 'chunked-code',
      badge: 'GET REQUEST CHUNK',
      title: 'The GetBook Query Request',
      intro: 'We pass the composite ID created in Step 2:',
      chunks: [
        {
          label: 'Query Parameter Request',
          filename: 'GetBook-Request.http',
          code: 'GET /v1/books?id=9781227 HTTP/1.1\nHost: api.campuslibrary.org\nAccept: application/json',
          title: 'Filtering by Composite Key',
          explanation: 'The query parameter `?id=9781227` asks the database to locate the single record matching that ID.',
          keyTakeaway: 'Notice that we had to manually copy and paste 9781227 from the previous step!'
        }
      ]
    },
    {
      type: 'api-inspector',
      title: 'Live Interactive Wire Inspector: GetBook GET',
      method: 'GET',
      url: 'https://qa-api.campuslibrary.org/v1/books?id=9781227',
      status: '200 OK',
      time: '145 ms',
      size: '312 B',
      responseBody: [
        {
          book_name: 'Zero to Agentic API Testing',
          isbn: '9781',
          aisle: '227'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 4: Action 3: Deleting the Book (POST Teardown)',
    },
    {
      type: 'paragraph',
      text: 'When a textbook is retired, the librarian removes it by posting its ID to the delete endpoint:',
    },
    {
      type: 'chunked-code',
      badge: 'TEARDOWN REQUEST CHUNK',
      title: 'The DeleteBook Teardown Request',
      intro: 'We submit the book ID to clean up database state:',
      chunks: [
        {
          label: 'Delete Payload Body',
          filename: 'DeleteBook-Request.json',
          code: 'POST /v1/books/delete HTTP/1.1\nHost: api.campuslibrary.org\nContent-Type: application/json\n\n{\n  "ID": "9781227"\n}',
          title: 'Submitting Deletion ID',
          explanation: 'The server verifies the ID exists, purges the record from the database table, and returns a confirmation message.',
          keyTakeaway: 'Teardown deletions prevent test databases from bloating with obsolete records.'
        }
      ]
    },
    {
      type: 'api-inspector',
      title: 'Live Interactive Wire Inspector: DeleteBook POST',
      method: 'POST',
      url: 'https://qa-api.campuslibrary.org/v1/books/delete',
      headers: {
        'Content-Type': 'application/json'
      },
      requestBody: {
        ID: '9781227'
      },
      status: '200 OK',
      time: '120 ms',
      size: '185 B',
      responseBody: {
        msg: 'book is successfully deleted'
      }
    },
    {
      type: 'heading',
      text: 'Step 5: The Duplicate Key Collision and Manual Testing Pain',
    },
    {
      type: 'bug',
      filename: 'AddBook-Duplicate.http',
      prompt: 'You execute AddBook a second time with the exact same payload. The server returns: { "msg": "Book already exists" }. Why?',
      lines: [
        'POST /v1/books HTTP/1.1',
        'Payload: { "name": "Zero to Agentic API Testing", "isbn": "9781", "aisle": "227", "author": "Alex Mercer" }',
        'Response: 200 OK { "msg": "Book already exists" }',
      ],
      bugLine: 3,
      explain: 'The Library API enforces a unique constraint on the composite key (ISBN + aisle). Because a book with ISBN 9781 and aisle 227 already exists in the database, duplicate insertion is rejected. In Chapter 6, we solve this by generating unique ISBNs dynamically.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The Friction of Manual Testing: Why We Must Automate',
      paragraphs: [
        '1. Copy Paste Fatigue: In this manual exercise, we had to look at the AddBook response, copy "9781227", open a new tab for GetBook, paste the ID into the URL, run it, then copy it into DeleteBook. Doing this for 500 books would take hours of tedious, error prone labor.',
        '2. False Confidence: When you inspect JSON visually with your eyes, you can easily miss subtle typos or missing fields.',
        '3. In Chapter 5, we begin the automation revolution: writing automated JavaScript assertions to validate every status code, message, and property in milliseconds!',
      ],
    },
    {
      type: 'battle-scar',
      metric: 'Enterprise Database Collision',
      title: 'UK Passport System Crash: The Real Cost of Unhandled Unique Key Collisions',
      context: 'When government immigration services upgraded their online application database, batch imports of applicant records began failing intermittently. Testing teams had only validated individual records manually and assumed the database would automatically increment sequence IDs. In reality, the database enforced a composite unique key across document number and postal zone. Because automated test suites never verified duplicate submission behaviors or automated record teardown, duplicate applicant records caused cascading transaction rollbacks that delayed hundreds of thousands of citizen passports.',
      takeaway: 'Never assume a database handles duplicate primary keys gracefully. API automation engineers must explicitly verify unique constraint rejections and automate record deletion teardown steps.'
    },
    {
      type: 'triage',
      title: 'War Room Triage: The Duplicate Key Automation Blocker',
      scenario: 'You built a Postman test that executes AddBook with ISBN 9781 and aisle 227. The first run in Postman passed with 200 OK. Five minutes later, you run the exact same collection again, but the AddBook test suddenly fails with an error: "Book already exists"! What is the root cause of this failure?',
      options: [
        'Postman cached the older response headers and refused to send new network packets.',
        'The database enforced a composite unique key on ISBN plus aisle, and the previous test record was never deleted.',
        'The campus API server ran out of disk memory to store additional title strings.',
        'The client must wait exactly thirty minutes between POST requests for database index rebuilding.'
      ],
      answerIndex: 1,
      debrief: 'Database unique constraints reject duplicates! Because the first test run created ISBN 9781 in aisle 227 and never cleaned it up with DeleteBook, subsequent test runs fail immediately. Automated tests must either generate unique dynamic values or execute teardown requests to clean up after themselves.',
      traps: [
        'Postman dispatches fresh HTTP network packets every time you click Send or run a collection.',
        '',
        'Storage memory exhaustion produces HTTP 500 errors or disk full crashes, not a structured business validation message.',
        'REST APIs do not require arbitrary thirty minute cooling periods between requests.'
      ]
    },
    {
      type: 'heading',
      text: 'Step 6: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'If you execute DeleteBook with ID 9781227 a second time immediately after a successful deletion, what should happen?',
      options: [
        'The server should crash with a fatal 500 error',
        'The server should return 404 Not Found or a message indicating the book no longer exists, because the record was already purged on the first call',
        'The server should recreate the book automatically',
        'The server should delete all books in the library'
      ],
      answerIndex: 1,
      explain: 'Because the record was purged during the initial deletion, attempting to delete it a second time cannot find the record ID. The server appropriately responds with 404 Not Found or a message stating the resource does not exist.'
    },
    {
      type: 'quiz',
      items: [
        [
          'What is a composite primary key in database design?',
          'A composite primary key is a unique identifier formed by combining two or more individual columns: such as ISBN and aisle: to ensure no duplicate combination exists.',
        ],
        [
          'Why did we execute DeleteBook at the end of our manual testing workflow?',
          'Executing DeleteBook performs automated teardown: returning the test database to its clean, pristine starting state so subsequent test runs do not fail on duplicate key collisions.',
        ],
        [
          'How does the GetBook endpoint locate a book record?',
          'The client transmits the composite ID as an HTTP query parameter in the URL (such as ?id=9781227), which the database queries to return matching shelf locations.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'The Library API lifecycle consists of Create (AddBook POST), Read (GetBook GET), and Teardown (DeleteBook POST).',
        'Composite primary keys combine multiple fields (ISBN plus aisle) to enforce uniqueness in the catalog database.',
        'Always clean up test records using teardown delete requests to keep test environments reproducible.',
        'Manual copy pasting of dynamic IDs between requests is slow and prone to errors; this motivates automated request chaining.',
      ],
    },
    {
      type: 'cliffhanger',
      title: 'Banishing Human Eyeballs: Automated JavaScript Assertions',
      text: 'You have mapped the Library CRUD lifecycle by hand and felt the pain of copy pasting IDs between tabs. In Chapter 5, we banish manual visual inspections forever: writing powerful JavaScript assertions with pm.expect to validate status codes, latency budgets, and JSON properties in milliseconds!',
    },
  ],
}
