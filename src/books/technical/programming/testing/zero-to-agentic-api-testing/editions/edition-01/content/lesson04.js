import libraryEngineImg from '../assets/campus-library-automation-engine.jpg'
import lifecycleImg from '../assets/library-api-crud-lifecycle.jpg'
import ch04Scene1Img from '../assets/ch04-scene-1-library-mission.jpg'
import ch04Scene2Img from '../assets/ch04-scene-2-duplicate-collision.jpg'
import ch04Scene3Img from '../assets/ch04-scene-3-copy-paste-teardown.jpg'

import ch04LibrarianImg from '../assets/illustrations/ch04/ch04_akshay_and_librarian.jpg'
import ch04LaptopDeskImg from '../assets/illustrations/ch04/ch04_laptop_on_desk_library.jpg'
import ch04SameerLibraryImg from '../assets/illustrations/ch04/ch04_sameer_and_akshay_library.jpg'
import ch04GhostBookImg from '../assets/illustrations/ch04/ch04_ghost_book_in_aisle.jpg'
import ch04ShockImg from '../assets/illustrations/ch04/ch04_akshay_library_shock.jpg'
import ch04Conflict409Img from '../assets/illustrations/ch04/ch04_409_conflict_response.jpg'
import ch04WhiteboardImg from '../assets/illustrations/ch04/ch04_whiteboard_toctou.jpg'
import ch04NotesFrictionImg from '../assets/illustrations/ch04/ch04_akshay_notes_friction.jpg'
import ch04MonsoonOutsideImg from '../assets/illustrations/ch04/ch04_monsoon_delivery_outside.jpg'
import ch04SameerDeskImg from '../assets/illustrations/ch04/ch04_sameer_teaches_at_desk.jpg'

export const lesson04 = {
  id: 'library-crud',
  icon: '',
  title: 'Manual Testing the College Library API',
  shortTitle: 'The Library API',
  subtitle: 'Executing AddBook, GetBook, and DeleteBook manually, feeling the copy paste pain, and mapping unique constraints.',
  tags: ['API Testing Workbench', 'Collections', 'CRUD', 'Library API', 'Hands On'],
  blocks: [
    {
      type: 'chapter-opener',
      missionBadge: 'MISSION 2 · PHASE 1 OF 6',
      missionTitle: 'Automating Student and Campus Services at Scale',
      missionCrisis: 'The College Library REST Service: Manual CRUD Exploration',
      missionContext: 'With the transit crisis resolved, the engineering leadership assigns you to automate the core College Library REST services. The library system manages cataloging, aisle positioning, and book acquisitions under strict unique constraints. Before automating scripts, we must map out the manual AddBook, GetBook, and DeleteBook contract lifecycle and experience the pain of manual copy paste.',
      missionObjective: 'Map out the complete CRUD contract across AddBook, GetBook, and DeleteBook, and verify unique ISBN and aisle constraints.',
      targetSystems: 'College Library REST Engine · Port 5050 · QA Staging Target',
      achieve: 'Execute the complete Create, Read, and Teardown lifecycle against an enterprise Library API service by hand.',
      how: 'Sending AddBook POST, witnessing duplicate ISBN and aisle collisions, querying GetBook with query parameters, and executing DeleteBook teardown.',
      carry: 'The canonical 3 step Library API request contract: AddBook, GetBook, and DeleteBook.'
    },
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
          desc: 'We parameterize our suite with external CSV and JSON data files using Collection Runner to test hundreds of records in seconds.',
          outcome: 'Mission 2 Cleared! Full automated data driven testing suite running against enterprise services.'
        }
      ]
    },

    // =========================================================================
    // GRAPHIC COMIC ARC : THREE SCENES FROM MASTER STORY LEDGER
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC : SIX SCENES',
      title: 'The Ghost ISBN Incident and CRUD Wire Discovery',
      intro: 'Follow apprentice Akshay, Chief Librarian Mrs. Iyer, and architect Sameer inside the Central Library stacks as they map AddBook, discover duplicate key collisions, examine TOCTOU concurrency on the whiteboard, and diagnose the soft delete zombie read.',
      panels: [
        {
          title: 'Scene 1: 10:15 PM: The Central Library Stacks and First AddBook',
          time: '10:15 PM',
          layout: 'duo',
          image: {
            src: ch04Scene1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch04-scene-1-library-mission.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay and Mrs. Iyer at the teak catalog desk in the vaulted Central Library stacks.',
            caption: 'Library Console: Testing the newly deployed AddBook endpoint on port 5050 under the stern gaze of Mrs. Iyer.'
          },
          replyImage: {
            src: ch04LibrarianImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch04/ch04_akshay_and_librarian.jpg',
            w: 1376,
            h: 768,
            alt: 'Mrs. Iyer observing Akshay closely at the library catalog desk.',
            caption: 'Guardian of the Stacks: Mrs. Iyer demands total catalog truth before opening tomorrow morning.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'The new library catalog service is deployed on port 5050. Ready to test AddBook!',
            replySpeaker: 'Mrs. Iyer',
            replySpeech: 'Careful young man. Shelf space and catalog truth are non negotiable.'
          },
          scene: 'At 10:15 PM, following the successful creation of the automated assertion watchdog in Chapter 3, apprentice Akshay moves to the Central Library systems archive to test the new campus book catalog service on port 5050. Chief Librarian Mrs. Iyer watches with keen eyes.',
          realization: 'A catalog service is not merely a database; it is an authoritative ledger of physical reality.'
        },
        {
          title: 'Scene 2: 10:27 PM: Duplicate Collision and The Ghost ISBN',
          time: '10:27 PM',
          layout: 'duo',
          image: {
            src: ch04Scene2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch04-scene-2-duplicate-collision.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay looking at duplicate book IDs on screen as Sameer points out the constraint collision.',
            caption: 'State Collision: Replaying the AddBook POST without unique constraints creates duplicate ghost rows for a single ISBN.'
          },
          replyImage: {
            src: ch04ShockImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch04/ch04_akshay_library_shock.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay holding his head in disbelief as duplicate book IDs appear on screen.',
            caption: 'The Ghost Book Shock: Two rows created for one physical copy in the database.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Wait! It returned 201 Created with another ID for the same ISBN! Two rows for one book?!',
            replySpeaker: 'Sameer',
            replySpeech: 'A ghost book. Heathrow 2015 issued seat 14A twice. Add a unique index now.'
          },
          scene: 'Akshay replays the POST request and discovers that the server creates a second record with identical ISBN and aisle coordinates. Two students could reserve the exact same physical copy. Sameer recalls the Heathrow 2015 boarding pass collision.',
          realization: 'Application level existence checks are vulnerable to concurrency race conditions. Database unique constraints are mandatory.'
        },
        {
          title: 'Scene 3: 10:36 PM: The TOCTOU Concurrency Race on the Whiteboard',
          time: '10:36 PM',
          layout: 'duo',
          image: {
            src: ch04WhiteboardImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch04/ch04_whiteboard_toctou.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer drawing the TOCTOU concurrency race window on the library whiteboard.',
            caption: 'TOCTOU Architecture: Two concurrent threads execute SELECT at the same millisecond; both see zero rows.'
          },
          replyImage: {
            src: ch04GhostBookImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch04/ch04_ghost_book_in_aisle.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer and Akshay examining a physical textbook down the narrow library aisle.',
            caption: 'Physical Truth: Reality holds only one book; the database must enforce uniqueness.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'Time of Check to Time of Use. Two threads check SELECT at the same millisecond. Application checks are blind.',
            replySpeaker: 'Akshay',
            replySpeech: 'The database unique index is the only wall that holds under concurrent load!'
          },
          scene: 'Sameer steps to the whiteboard to diagram the TOCTOU race window. When two concurrent requests arrive simultaneously, application-level checks evaluate true for both. Only an ACID-compliant unique constraint at the database layer prevents duplicate row creation.',
          realization: 'Never rely on application memory for uniqueness. Enforce constraints at the database boundary.'
        },
        {
          title: 'Scene 4: 10:46 PM: Atomic ON CONFLICT and Honest HTTP 409',
          time: '10:46 PM',
          layout: 'duo',
          image: {
            src: ch04Conflict409Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch04/ch04_409_conflict_response.jpg',
            w: 1376,
            h: 768,
            alt: 'API testing tool showing explicit 409 Conflict status on duplicate replay.',
            caption: 'Semantic Truth: 409 Conflict signals valid syntax conflicting with existing server state.'
          },
          replyImage: {
            src: ch04SameerDeskImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch04/ch04_sameer_teaches_at_desk.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer guiding Akshay through atomic conflict handling at the teak desk.',
            caption: 'Atomic Upsert: ON CONFLICT DO NOTHING returns actionable conflict status.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Replaying duplicate POST... HTTP 409 Conflict in 6 milliseconds! The database rejected the write!',
            replySpeaker: 'Sameer',
            replySpeech: '409 Conflict tells the client: your request syntax was valid, but conflicts with server state.'
          },
          scene: 'With ALTER TABLE unique_isbn in place, Akshay updates the route handler with ON CONFLICT DO NOTHING. When replayed, the server returns an honest HTTP 409 Conflict in 6ms rather than silently creating duplicate records.',
          realization: 'Honest HTTP status codes guide client behavior. 409 Conflict explicitly communicates state collisions.'
        },
        {
          title: 'Scene 5: 10:54 PM: The Soft Delete Zombie and Teardown Verification',
          time: '10:54 PM',
          layout: 'duo',
          image: {
            src: ch04Scene3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch04-scene-3-copy-paste-teardown.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay holding his head in frustration copying IDs across browser tabs while Sameer explains soft deletes.',
            caption: 'Teardown Dilemma: Copying composite keys across tabs creates fatigue, while soft deleted records reappear in query results.'
          },
          replyImage: {
            src: ch04NotesFrictionImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch04/ch04_akshay_notes_friction.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay noting down IDs in his spiral notebook surrounded by Postman tabs.',
            caption: 'Developer Friction: Manually copying generated IDs across tabs wastes sprint hours.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'I copied this ISBN twelve times across tabs! And the deleted book still shows up in GET!',
            replySpeaker: 'Sameer',
            replySpeech: 'The Zombie Read. Your soft delete updated deleted_at, but your query omitted the filter.'
          },
          scene: 'Akshay deletes the record and queries GetBook, only to find the book still returned because the query omitted WHERE deleted_at IS NULL. Furthermore, copying and pasting IDs between AddBook, GetBook, and DeleteBook proves exhausting.',
          realization: 'Manual copy paste testing does not scale, and soft delete implementations require explicit filtering across all read queries.'
        },
        {
          title: 'Scene 6: 11:10 PM: The Monsoon Delivery and Batch Automation Cliffhanger',
          time: '11:10 PM',
          layout: 'duo',
          image: {
            src: ch04MonsoonOutsideImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch04/ch04_monsoon_delivery_outside.jpg',
            w: 1376,
            h: 768,
            alt: 'Torrential monsoon rain pouring outside the library loading bay under night sky.',
            caption: 'Monsoon Arrival: Two trucks carrying 500 physical textbooks arrive at the loading bay.'
          },
          replyImage: {
            src: ch04SameerLibraryImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch04/ch04_sameer_and_akshay_library.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer and Akshay turning toward the loading bay as thunder rumbles.',
            caption: 'The Automation Cliffhanger: Five hundred textbooks need batch verification before dawn.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Five hundred new textbooks just arrived at the loading bay! Mrs. Iyer needs them verified by dawn!',
            replySpeaker: 'Sameer',
            replySpeech: 'Never verify bulk data by hand. Next, we parameterize our requests and let Newman drive the batch.'
          },
          scene: 'Thunder rumbles as torrential monsoon rain begins outside. An operations worker announces the arrival of two logistics trucks carrying five hundred textbooks that must be verified in the catalog before classes start at dawn. Manual testing has reached its absolute limit.',
          realization: 'Enterprise scale demands data driven automation. External data files and automated runners must replace manual clicking.'
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
      type: 'callout',
      variant: 'note',
      title: 'This Service Contract: Inspecting Real World Conventions',
      paragraphs: [
        'Before dispatching requests, inspect the published contract of this college library service:',
        '• AddBook (POST /v1/books): Returns HTTP status 200 OK (rather than 201) with a capitalized Msg property: { "Msg": "successfully added", "ID": "9781227" }.',
        '• GetBook (GET /v1/books?id=...): Returns an array containing matching book items: [{ "book_name": "...", "isbn": "...", "aisle": "..." }]. Notice that aisle is a string and the author field is omitted from this read endpoint.',
        '• DeleteBook (POST /v1/books/delete): Requires a JSON body with the ID: { "ID": "..." }, returning HTTP status 200 OK with lowercase msg: { "msg": "book is successfully deleted" }.',
        'As quality automation engineers, our job is to test against the exact service contract rather than assuming theoretical conventions.',
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
        '200 OK: Returns a success confirmation message alongside the composite primary key ID',
        '404 Not Found: Endpoint is unreachable because the library catalog is offline for maintenance',
        '500 Server Error: Crashes because the book author is not registered in the student directory'
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
      type: 'comic-workbench',
      badge: 'API TESTING WORKBENCH · ADDBOOK OPERATION',
      title: 'Akshay Dispatches AddBook and Inspects the Contract',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Junior Learner',
          text: 'Sameer! I sent the AddBook POST with ISBN 9781 and aisle 227. The response came back with status 200 OK and Msg successfully added! The server generated composite ID 9781227!',
          pointer: 'Points to ID 9781227 composite primary key'
        },
        {
          speaker: 'Sameer',
          role: 'Lead Architect',
          text: 'Observe the response closely, Akshay! Notice that the server used capitalized Msg instead of lowercase msg. In real world APIs, naming conventions often vary across endpoints. An automation tester asserts what the server actually sends, not what theoretical textbooks predict!',
          pointer: 'Points to capitalized Msg property in JSON response'
        }
      ],
      workbench: {
        method: 'POST',
        url: 'https://qa-api.campuslibrary.org/v1/books',
        headers: 'Content-Type: application/json',
        body: '{\n  "name": "Zero to Agentic API Testing",\n  "isbn": "9781",\n  "aisle": "227",\n  "author": "Alex Mercer"\n}',
        responseStatus: '200 OK',
        responseTime: '182 ms',
        responseBody: '{\n  "Msg": "successfully added",\n  "ID": "9781227"\n}'
      },
      breakdown: {
        input: 'POST https://qa-api.campuslibrary.org/v1/books with book attributes.',
        explanation: 'Server combines isbn (9781) and aisle (227) into composite ID 9781227 and inserts into library database.',
        output: '200 OK with Msg: successfully added and composite ID: 9781227.',
        trapAndFix: 'Assuming AddBook returns status 201 Created will cause your tests to fail. Always verify the actual status code returned by the server.'
      }
    },
    {
      type: 'heading',
      text: 'Step 3: Action 2: Duplicate Key Collision Before Cleanup',
    },
    {
      type: 'paragraph',
      text: 'What happens if you execute AddBook a second time with the exact same payload before deleting the first record? Let us test the database unique constraint:',
    },
    {
      type: 'api-inspector',
      title: 'Live Interactive Wire Inspector: Duplicate AddBook POST',
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
      time: '110 ms',
      size: '142 B',
      responseBody: {
        msg: 'Book already exists'
      },
      sampleLabel: 'DUPLICATE CONSTRAINT REJECTION'
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Why Duplicate Insertion Failed',
      paragraphs: [
        'The Library API enforces a composite unique key across ISBN and aisle (9781 + 227 = 9781227).',
        'Because record 9781227 already exists in the database table, the server rejects insertion and returns: {"msg": "Book already exists"}.',
        'This demonstrates why test teardown is mandatory: without automated deletion, subsequent test runs will fail immediately on duplicate constraints!',
      ],
    },
    {
      type: 'comic-workbench',
      badge: 'API TESTING WORKBENCH · DUPLICATE CONSTRAINT COLLISION',
      title: 'Akshay Triggers the Duplicate Primary Key Guard',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Junior Learner',
          text: 'Wait Sameer! I clicked Send a second time with the exact same payload, and the response changed to msg: Book already exists! Did the server reject my textbook?!',
          pointer: 'Points to msg: Book already exists'
        },
        {
          speaker: 'Sameer',
          role: 'Lead Architect',
          text: 'Yes, Akshay! The library database enforces a unique composite constraint on ISBN plus aisle. Because 9781227 was already registered during your first request, the database stopped the duplicate insertion. This is why automated teardown is mandatory!',
          pointer: 'Points to composite key collision on 9781 + 227'
        }
      ],
      workbench: {
        method: 'POST',
        url: 'https://qa-api.campuslibrary.org/v1/books',
        headers: 'Content-Type: application/json',
        body: '{\n  "name": "Zero to Agentic API Testing",\n  "isbn": "9781",\n  "aisle": "227",\n  "author": "Alex Mercer"\n}',
        responseStatus: '200 OK',
        responseTime: '110 ms',
        responseBody: '{\n  "msg": "Book already exists"\n}'
      },
      breakdown: {
        input: 'Re dispatching identical AddBook payload with isbn: 9781 and aisle: 227.',
        explanation: 'Database unique constraint catches duplicate key 9781227 and rejects row creation.',
        output: '200 OK with business rejection payload: msg: Book already exists.',
        trapAndFix: 'Without deleting test records after execution, subsequent test runs will fail immediately due to duplicate constraints.'
      }
    },
    {
      type: 'heading',
      text: 'Step 4: Action 3: Retrieving by ID (GET with Query Params)',
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
      text: 'Step 5: Action 4: Deleting the Book (POST Teardown)',
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
      text: 'Step 6: Action 5: Verifying Re addition After Teardown Cleanup',
    },
    {
      type: 'paragraph',
      text: 'Now that DeleteBook has successfully purged record 9781227 from the database, what happens if we execute AddBook again with the exact same payload? Let us verify:',
    },
    {
      type: 'api-inspector',
      title: 'Live Wire Capture: AddBook After Teardown Succeeded',
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
      time: '175 ms',
      size: '248 B',
      responseBody: {
        Msg: 'successfully added',
        ID: '9781227'
      },
      sampleLabel: 'CLEAN RE ADDITION AFTER TEARDOWN'
    },
    {
      type: 'comic-workbench',
      badge: 'API TESTING WORKBENCH · COMPLETE CRUD TEARDOWN VERIFICATION',
      title: 'Akshay Completes the Teardown and Re addition Cycle',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Junior Learner',
          text: 'I executed DeleteBook with ID 9781227, and then sent AddBook once more. The server welcomed it back with Msg successfully added! But copying and pasting that ID across three separate tabs was completely exhausting!',
          pointer: 'Points to ID 9781227 re added after deletion'
        },
        {
          speaker: 'Sameer',
          role: 'Lead Architect',
          text: 'Feel that friction, Akshay! That exact manual copy paste fatigue is why we automate. In Chapter 5 and Chapter 7, we will write test scripts that extract and inject IDs automatically across requests in single millisecond hops!',
          pointer: 'Points to Msg: successfully added'
        }
      ],
      workbench: {
        method: 'POST',
        url: 'https://qa-api.campuslibrary.org/v1/books',
        headers: 'Content-Type: application/json',
        body: '{\n  "name": "Zero to Agentic API Testing",\n  "isbn": "9781",\n  "aisle": "227",\n  "author": "Alex Mercer"\n}',
        responseStatus: '200 OK',
        responseTime: '175 ms',
        responseBody: '{\n  "Msg": "successfully added",\n  "ID": "9781227"\n}'
      },
      breakdown: {
        input: 'Re running AddBook following successful DeleteBook teardown.',
        explanation: 'DeleteBook purged record 9781227 from database, freeing the composite key constraint for fresh registration.',
        output: '200 OK confirming successful creation of pristine book record.',
        trapAndFix: 'Leaving stale test records in databases pollutes test environments and breaks automated CI pipelines. Always teardown test entities.'
      }
    },
    {
      type: 'heading',
      text: 'Step 7: The Friction of Manual Testing: Why We Must Automate',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Why Manual Testing Fails at Scale',
      paragraphs: [
        '1. Copy Paste Fatigue: In this manual exercise, we had to look at the AddBook response, copy "9781227", open a new tab for GetBook, paste the ID into the URL, run it, then copy it into DeleteBook. Doing this for 500 books would take hours of tedious, error prone labor.',
        '2. False Confidence: When you inspect JSON visually with your eyes, you can easily miss subtle typos or missing fields.',
        '3. In Chapter 5, we begin the automation revolution: writing automated JavaScript assertions to validate every status code, message, and property in milliseconds!',
      ],
    },
    {
      type: 'library-workbench',
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 1 : RESOURCE CREATION',
      title: 'Resource Creation with 201 and Location Header',
      subtitle: 'Returning newly minted resource URIs in compliance with REST protocol specifications',
      input: {
        method: 'POST',
        url: 'http://localhost:5050/v1/books',
        desc: 'Submitting a new textbook payload to the campus library catalog.',
        code: 'curl -i -X POST http://localhost:5050/v1/books \\\n  -H "Content-Type: application/json" \\\n  -d \'{"isbn": "9780134685991", "title": "The Pragmatic Programmer", "aisle": "A3", "author": "David Thomas"}\''
      },
      underTheHood: {
        desc: 'Express parses incoming JSON, queries database with atomic insert, updates indexes, and formats headers.',
        steps: [
          'Express body parser converts incoming byte stream into JavaScript JSON object.',
          'Database executes INSERT INTO books RETURNING id.',
          'Disk write updates B tree index on primary key.',
          'Controller sets HTTP Location header to /v1/books/42.',
          'Server returns HTTP 201 Created with full resource representation.'
        ]
      },
      output: {
        status: '201 Created',
        time: '14ms',
        desc: 'Resource created with dedicated URI in Location header.',
        body: 'Location: /v1/books/42\nContent-Type: application/json\n\n{\n  "id": 42,\n  "isbn": "9780134685991",\n  "title": "The Pragmatic Programmer",\n  "aisle": "A3",\n  "createdAt": "2026-10-06T10:20:00Z"\n}'
      },
      seniorSavior: {
        aphorism: '201 means creation with an address; 200 means generic acknowledgment.',
        rule: 'Always include the Location response header when returning 201 Created.',
        trap: 'Returning 200 OK without a Location header forces clients to guess the URI of the newly created entity.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 2 : UNIQUE CONSTRAINTS',
      title: 'Unique Composite Constraints & 409 Conflict',
      subtitle: 'Preventing duplicate state collisions at the database layer under concurrent load',
      input: {
        method: 'POST',
        url: 'http://localhost:5050/v1/books',
        desc: 'Submitting a duplicate textbook payload with an already registered ISBN.',
        code: 'curl -i -X POST http://localhost:5050/v1/books \\\n  -H "Content-Type: application/json" \\\n  -d \'{"isbn": "9780134685991", "title": "The Pragmatic Programmer", "aisle": "A3"}\''
      },
      underTheHood: {
        desc: 'Database unique index intercepts collision; ON CONFLICT DO NOTHING halts write safely.',
        steps: [
          'Request clears application layer input validation.',
          'Database attempts INSERT into table with UNIQUE (isbn, aisle) index.',
          'Unique B tree index detects duplicate key collision.',
          'Atomic ON CONFLICT DO NOTHING prevents duplicate row creation.',
          'Handler inspects zero affected rows and formats HTTP 409 Conflict.'
        ]
      },
      output: {
        status: '409 Conflict',
        time: '6ms',
        desc: 'Explicit conflict status code indicating duplicate entity collision.',
        body: '{\n  "error": "Conflict",\n  "message": "Book with ISBN 9780134685991 already registered in aisle A3",\n  "existingId": 42\n}'
      },
      seniorSavior: {
        aphorism: 'Application checks are courtesy; database constraints are law.',
        rule: 'Never rely on SELECT before INSERT to prevent duplicates; enforce unique database indexes.',
        trap: 'Time of Check to Time of Use (TOCTOU) race conditions allow concurrent requests to slip past application IF checks.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 3 : SOFT DELETE ZOMBIE GUARD',
      title: 'Soft Deletion and The Zombie 404 Guard',
      subtitle: 'Ensuring soft deleted rows remain completely invisible to client read operations',
      input: {
        method: 'GET',
        url: 'http://localhost:5050/v1/books/42',
        desc: 'Attempting to query a textbook record after soft deletion teardown.',
        code: 'curl -i http://localhost:5050/v1/books/42'
      },
      underTheHood: {
        desc: 'Read query enforces mandatory deleted_at IS NULL filter on all lookups.',
        steps: [
          'Client transmits GET request for book ID 42.',
          'Database executes SELECT * FROM books WHERE id = 42 AND deleted_at IS NULL.',
          'Row with non null deleted_at timestamp is excluded from result set.',
          'Database returns zero rows to application controller.',
          'Controller returns HTTP 404 Not Found to client.'
        ]
      },
      output: {
        status: '404 Not Found',
        time: '5ms',
        desc: 'Deleted resource is completely invisible to client queries.',
        body: '{\n  "error": "Not Found",\n  "message": "No book found with ID 42"\n}'
      },
      seniorSavior: {
        aphorism: 'A deleted entity must stay dead to the outside world.',
        rule: 'Every SQL query touching a soft delete table must include AND deleted_at IS NULL.',
        trap: 'Omitting the deleted_at filter allows soft deleted ghost rows to leak back into public search results.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 4 : 404 VS EMPTY ARRAY',
      title: 'The 404 Not Found versus Empty Array Ambiguity',
      subtitle: 'Distinguishing singular resource absence from empty search collection queries',
      input: {
        method: 'GET',
        url: 'http://localhost:5050/v1/books?author=NonExistentAuthor',
        desc: 'Searching for books by an author that does not exist in catalog.',
        code: 'curl -i "http://localhost:5050/v1/books?author=NonExistentAuthor"'
      },
      underTheHood: {
        desc: 'Singular entity lookup vs collection search filtering protocol semantics.',
        steps: [
          'Singular URI (/v1/books/999) addresses a specific unique entity.',
          'Absence of a singular entity returns HTTP 404 Not Found.',
          'Collection URI (/v1/books?author=...) addresses a searchable container.',
          'Query executes successfully and finds zero matching items.',
          'Server returns HTTP 200 OK with empty JSON array [].'
        ]
      },
      output: {
        status: '200 OK',
        time: '8ms',
        desc: 'Empty search result returned as clean empty array with 200 OK.',
        body: '[]'
      },
      seniorSavior: {
        aphorism: 'Singular addresses return 404; search queries return empty arrays.',
        rule: 'Collection endpoints return 200 OK with [] when zero items match; never return 404 for empty query results.',
        trap: 'Returning 404 for an empty search query confuses client apps into treating valid searches as missing routes.'
      }
    },
    {
      type: 'battle-scar',
      metric: 'Concurrence & State Collision Outage',
      title: 'Heathrow Seat 14A Collision and Amazon Marketplace Double Deduction',
      context: 'In November 2015 at London Heathrow, two passengers were issued boarding passes for seat 14A on the same Munich flight. Because the seat reservation API used a fragile SELECT before UPDATE pattern without database unique constraints, two concurrent requests arriving within 11 milliseconds both found the seat available and assigned it to both travelers, costing $2.8 million in fines and remediation. In July 2016 during Amazon Prime Day, multiple sellers experienced double inventory deductions because retry requests during latency spikes were executed without idempotency keys. Both catastrophes prove that application level checks are powerless against concurrent race conditions.',
      takeaway: 'Never trust application layer IF checks to enforce business uniqueness under concurrent load. Database level unique constraints and atomic upserts are the only guarantees that survive in production.'
    },
    {
      type: 'triage',
      title: 'War Room Triage: The Duplicate Key Automation Blocker',
      scenario: 'You built an automated workbench test that executes AddBook with ISBN 9781 and aisle 227. The first run in the workbench passed with 200 OK. Five minutes later, you run the exact same collection again, but the AddBook test suddenly fails with an error: "Book already exists"! What is the root cause of this failure?',
      options: [
        'The workbench cached the older response headers and refused to send new network packets.',
        'The database enforced a composite unique key on ISBN plus aisle, and the previous test record was never deleted.',
        'The campus API server ran out of disk memory to store additional title strings.',
        'The client must wait exactly thirty minutes between POST requests for database index rebuilding.'
      ],
      answerIndex: 1,
      debrief: 'Database unique constraints reject duplicates! Because the first test run created ISBN 9781 in aisle 227 and never cleaned it up with DeleteBook, subsequent test runs fail immediately. Automated tests must either generate unique dynamic values or execute teardown requests to clean up after themselves.',
      traps: [
        'The workbench dispatches fresh HTTP network packets every time you click Send or run a collection.',
        '',
        'Storage memory exhaustion produces HTTP 500 errors or disk full crashes, not a structured business validation message.',
        'REST APIs do not require arbitrary thirty minute cooling periods between requests.'
      ]
    },
    {
      type: 'heading',
      text: 'Step 8: Review and Practice',
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
