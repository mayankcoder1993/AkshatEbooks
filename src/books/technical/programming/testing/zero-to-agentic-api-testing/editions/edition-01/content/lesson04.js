import libraryEngineImg from '../assets/campus-library-automation-engine.jpg'
import lifecycleImg from '../assets/library-api-crud-lifecycle.jpg'

export const lesson04 = {
  id: 'library-crud',
  icon: '',
  title: 'Manual Testing the College Library API',
  shortTitle: 'The Library API',
  subtitle: 'Executing AddBook, GetBook, and DeleteBook with unique constraints and query parameters.',
  tags: ['Postman', 'Collections', 'CRUD', 'Library API', 'Hands On'],
  blocks: [
    {
      type: 'mission',
      title: 'Mission 2: Automating Student and Campus Services at Scale',
      text: 'Every college campus has a library where students check out textbooks, professors reserve course reading material, and librarians track inventory across physical aisles. The college has deployed a new web service to manage its book catalog across campus stacks. Before releasing the system to faculty and students, we must test every operation: adding a new textbook, verifying its physical shelf location, and removing retired editions. Across the next five chapters, our mission is to build a complete, resilient automation suite: executing manual CRUD, replacing eyeball checks with JavaScript assertions, eliminating hardcoded URLs, chaining requests dynamically, and scaling to hundreds of books with Data Driven Testing.',
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
      type: 'image',
      layout: 'stacked',
      src: libraryEngineImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/campus-library-automation-engine.jpg',
      w: 1376,
      h: 768,
      alt: 'Automated campus library inventory center showing REST API operations, shelf mapping matrix, and request chaining pipeline.',
      caption: 'The Campus Library Digital Operations Center: Transforming physical circulation into an autonomous automated API pipeline.',
      points: [
        'Circulation Telemetry: Tracking textbook inventory, physical shelf coordinates, and automated borrowing status in real time.',
        'REST Operations Stream: Dissecting live AddBook POST, GetBook GET, and DeleteBook cleanup calls across campus stacks.',
        'Autonomous Pipeline: Chaining dynamic identifiers and eliminating manual copy paste bottlenecks before scaling to bulk data.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 1: The Library CRUD Lifecycle Sequence',
    },
    {
      type: 'paragraph',
      text: 'The college library system exposes three core HTTP services that form an end to end data lifecycle: Create a record, Read it back to confirm persistence, and Delete it to maintain clean database state.',
    },
    {
      type: 'image',
      layout: 'stacked',
      src: lifecycleImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/library-api-crud-lifecycle.jpg',
      w: 1408,
      h: 768,
      alt: 'Three stage sequence flow diagram: Step 1 POST AddBook, Step 2 GET GetBook, Step 3 POST DeleteBook.',
      caption: 'The complete lifecycle of a textbook through the Library API.',
      points: [
        'Phase 1 (Step 1 AddBook POST): Client submits book title, author, ISBN, and shelf aisle. The server stores the record and returns 201 Created with generated composite ID.',
        'Phase 2 (Step 2 GetBook GET): Client queries GET /books with the composite ID to confirm the record exists in the catalog and returns 200 OK with location details.',
        'Phase 3 (Step 3 DeleteBook POST): Client submits a delete request with the composite ID to /books/delete. The server removes the record and confirms deletion.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 2: Action 1: Adding a Book (POST)',
    },
    {
      type: 'paragraph',
      text: 'When a new book arrives at the library circulation desk, the librarian enters its title, author, ISBN, and assigned shelf aisle number. In Postman, we send an HTTP POST request with a JSON body:',
    },
    {
      type: 'code',
      filename: 'AddBook-Request.json',
      lines: [
        'POST https://api.campuslibrary.org/v1/books HTTP/1.1',
        'Content-Type: application/json',
        '',
        '{',
        '  "name": "Zero to Agentic API Testing",',
        '  "isbn": "9781",',
        '  "aisle": "227",',
        '  "author": "Alex Mercer"',
        '}',
      ],
    },
    {
      type: 'terminal',
      command: 'HTTP Response from Server',
      lines: [
        'Status: 200 OK | Time: 182 ms | Size: 248 B',
        '{',
        '  "Msg": "successfully added",',
        '  "ID": "9781227"',
        '}',
      ],
    },
    {
      type: 'api-inspector',
      title: 'Live Interactive Wire Inspector: AddBook POST',
      method: 'POST',
      url: 'https://qa-api.campuslibrary.org/v1/books',
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
      },
      assertions: [
        'Response HTTP status code is 200 OK',
        'Response message equals successfully added',
        'Backend generated ID equals concatenation of ISBN and aisle'
      ]
    },
    {
      type: 'heading',
      text: 'Step 3: Action 2: Retrieving by ID (GET with Query Params)',
    },
    {
      type: 'paragraph',
      text: 'To confirm that the book was stored on the correct shelf, we query the catalog by passing the generated composite ID as a query parameter:',
    },
    {
      type: 'code',
      filename: 'GetBook-Request.http',
      lines: [
        'GET https://api.campuslibrary.org/v1/books?id=9781227 HTTP/1.1',
        'Accept: application/json',
      ],
    },
    {
      type: 'terminal',
      command: 'HTTP Response from Server',
      lines: [
        'Status: 200 OK | Time: 145 ms',
        '[',
        '  {',
        '    "book_name": "Zero to Agentic API Testing",',
        '    "isbn": "9781",',
        '    "aisle": "227"',
        '  }',
        ']',
      ],
    },
    {
      type: 'heading',
      text: 'Step 4: Action 3: Deleting the Book (POST)',
    },
    {
      type: 'paragraph',
      text: 'When a book is retired or lost, the librarian removes it from the catalog by posting its ID to the delete endpoint:',
    },
    {
      type: 'code',
      filename: 'DeleteBook-Request.json',
      lines: [
        'POST https://api.campuslibrary.org/v1/books/delete HTTP/1.1',
        'Content-Type: application/json',
        '',
        '{',
        '  "ID": "9781227"',
        '}',
      ],
    },
    {
      type: 'terminal',
      command: 'HTTP Response from Server',
      lines: [
        'Status: 200 OK',
        '{ "msg": "book is successfully deleted" }',
      ],
    },
    {
      type: 'heading',
      text: 'Step 5: The Duplicate Constraint Bug and Manual Testing Bottleneck',
    },
    {
      type: 'bug',
      prompt: 'You execute AddBook a second time with the exact same payload. The server returns: { "msg": "Book already exists" }. Why?',
      lines: [
        'POST /api/v1/books',
        'Payload: { "name": "Zero to Agentic API Testing", "isbn": "9781", "aisle": "227", "author": "Alex Mercer" }',
        'Response: { "msg": "Book already exists" }',
      ],
      bugLine: 3,
      explain: 'The Library API enforces a unique constraint on the composite key (ISBN + aisle). Because a book with ISBN 9781 and aisle 227 already exists in the database, duplicate insertion is rejected. In Chapter 6, we solve this by generating unique ISBNs dynamically.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Fresher Trap to Avoid: Duplicate Key Collisions',
      paragraphs: [
        'When testing APIs for the first time, students often hit Send multiple times and panic when they get an error.',
        'If a database table has a unique rule on a field (like a student enrollment number, user email, or ISBN), subsequent requests with identical data will fail with a collision error.',
        'In Chapter 6, we learn how to generate unique random numbers in Pre request scripts so every test execution succeeds cleanly.',
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Why Manual Copy Paste Fails at Scale',
      paragraphs: [
        'In this exercise, we manually copied the ID string (9781227) from AddBook into GetBook and DeleteBook.',
        'This takes minutes of human effort, risks manual typo errors, and cannot run in continuous integration.',
        'In Chapter 5, we begin automating: writing JavaScript assertions to replace visual checks.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 6: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'If you call DeleteBook again immediately after a successful deletion, what will the server return?',
      options: [
        '200 OK: book is successfully deleted again',
        '404 Not Found: book does not exist',
        '500 Internal Server Error: database crash',
        '201 Created: book recreated',
      ],
      answerIndex: 1,
      explain: 'Because the record was already removed from the database in the previous step, querying or deleting the same ID will inform the client that the book does not exist.',
    },
    {
      type: 'quiz',
      items: [
        [
          'How does the Library API generate the unique book ID in its response?',
          'By concatenating the isbn string and aisle string provided in the AddBook request payload (for example, 9781 plus 227 equals 9781227).',
        ],
        [
          'Why did we manually copy the ID from AddBook into GetBook and DeleteBook?',
          'Because we were performing manual exploratory testing. In upcoming chapters, we eliminate manual copying using Postman environment variables and request chaining.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'The Library API provides a realistic CRUD testbed simulating production database interactions.',
        'AddBook requires a unique ISBN and aisle pair to prevent duplicate collision errors.',
        'GetBook retrieves data using URL query parameters (?ID= and ?AuthorName=).',
        'DeleteBook removes the record and validates idempotent cleanup.',
      ],
    },
    {
      type: 'victory-milestone',
      badge: 'MISSION 2 PHASE 1 CLEARED',
      rank: 'INVENTORY AUTOMATION SPECIALIST',
      title: 'Architectural Triumph: Full CRUD Lifecycle & Constraint Auditing Mastered',
      summary: 'You executed the complete multi step lifecycle of the College Library catalog. You uncovered how composite keys generate primary IDs, diagnosed duplicate insertion constraint rejections, and experienced the exact manual bottleneck that makes automated testing non negotiable.',
      powers: [
        'Executing full cycle CRUD transactions: AddBook POST, GetBook GET with query parameters, and DeleteBook cleanup',
        'Deconstructing composite ID generation mechanics from concatenated payload attributes (ISBN + aisle)',
        'Diagnosing relational database unique constraint collisions directly from API error payloads',
        'Recognizing the severe failure modes of manual copy paste to design autonomous test architectures',
      ],
      disastersPrevented: [
        'Averted catastrophic database lockups and corrupt records from unhandled duplicate key collisions',
        'Eliminated orphaned test records cluttering production campus library databases by verifying teardown cleanup',
        'Prevented blind deployment of unverified schema changes that silently break mobile student catalog lookups',
      ],
      warRoomTakeaway: 'Manual testing is an exploratory flashlight, not a quality shield. Once you map the manual lifecycle, your mission is to turn it into an autonomous, self running JavaScript machine.',
    },
    {
      type: 'cliffhanger',
      title: 'Continuing Mission 2: Automating our validations',
      text: 'Manual copy pasting and eyeballing ends here. In Chapter 5, we open the Postman Tests tab: writing JavaScript assertions using the pm object and Chai matchers to validate responses in milliseconds!',
    },
  ],
}
