import lifecycleImg from '../assets/postman-assertion-lifecycle.jpg'
import ch05Scene1Img from '../assets/ch05-scene-1-assertions-briefing.jpg'
import ch05Scene2Img from '../assets/ch05-scene-2-pm-test-chai.jpg'
import ch05Scene3Img from '../assets/ch05-scene-3-schema-contract-validation.jpg'
import ch05RainDockImg from '../assets/illustrations/ch05/ch05_rain_lashing_dock.jpg'
import ch05ManifestImg from '../assets/illustrations/ch05/ch05_waterlogged_manifest.jpg'
import ch05TypingImg from '../assets/illustrations/ch05/ch05_akshay_typing_tests.jpg'
import ch05SameerPointingImg from '../assets/illustrations/ch05/ch05_sameer_pointing_tests.jpg'
import ch05ChaiAssertImg from '../assets/illustrations/ch05/ch05_postman_chai_assertions.jpg'
import ch05CasingFailImg from '../assets/illustrations/ch05/ch05_postman_casing_failure.jpg'
import ch05AnanyaSchemaImg from '../assets/illustrations/ch05/ch05_ananya_reviewing_schema.jpg'
import ch05NewmanRunImg from '../assets/illustrations/ch05/ch05_newman_batch_run.jpg'
import ch05TeamWatchImg from '../assets/illustrations/ch05/ch05_team_watching_batch.jpg'
import ch05CelebrationImg from '../assets/illustrations/ch05/ch05_team_celebration_dawn.jpg'

export const lesson05 = {
  id: 'javascript-assertions',
  icon: '',
  title: 'Writing JavaScript Assertions and the pm Object',
  shortTitle: 'JavaScript Assertions',
  subtitle: 'Automating response validation, JavaScript fundamentals for testers, Chai matchers, and JSON schema verification.',
  tags: ['JavaScript', 'Assertions', 'pm Object', 'Chai', 'Schema'],
  blocks: [
    {
      type: 'mission-hud',
      mission: 'Mission 2: Automating Student and Campus Services at Scale',
      phase: 'Phase 2 of 5: Automated JavaScript Assertions',
      rank: 'Rank: Automated Quality Engineer',
      status: 'ACTIVE'
    },
    {
      type: 'chapter-opener',
      missionBadge: 'MISSION 2 · PHASE 2 OF 6',
      missionTitle: 'Automating Student and Campus Services at Scale',
      missionCrisis: 'Eliminating Eyeball Traps: Machine Speed JavaScript Assertions',
      missionContext: 'Manual verification of hundreds of textbook responses is impossible for human eyes to sustain. A missing JSON key or a latency spike to two seconds will easily slip past manual review. In this phase, we harness the embedded Node.js sandbox inside API Testing Workbench to write Chai assertions that validate status codes, response times, header values, and schema contracts in milliseconds.',
      missionObjective: 'Automate status code, response time, header, and JSON schema assertions with strict casing validation.',
      targetSystems: 'API Testing Workbench Embedded Node.js Sandbox · Chai Assertion Library · Library REST Engine',
      achieve: 'Transform manual eyeball checks into machine speed quality gates by mastering the workbench JavaScript execution sandbox, Chai matchers, and JSON schema validation.',
      how: 'Deconstruct the workbench request lifecycle, explore core JavaScript variable rules, build robust Chai status and response assertions, and validate strict schema contracts accounting for production casing disparities.',
      carry: 'A battle tested suite of JavaScript assertions verifying status codes, response timing budgets, and schema properties that you will parameterize with dynamic environments in Chapter 6.'
    },
    {
      type: 'mission-tracker',
      badge: 'MISSION 2 PROGRESS · STEP 2 OF 5',
      title: 'Continuing Mission 2: Replacing the Manual Eyeball Test',
      text: 'In Chapter 4, we added a book to our campus catalog, but we verified the response by visually inspecting the screen. Humans cannot inspect thousands of JSON responses by eye without missing missing properties or slow response times. Our next step in Mission 2 is replacing eyeball checks with automated JavaScript assertions: mastering the JavaScript fundamentals that power the workbench sandbox, writing code in the Tests tab to validate status codes, response headers, latency budgets, and data schemas in milliseconds.',
    },

    // =========================================================================
    // GRAPHIC COMIC ARC : SIX SCENES FROM MASTER STORY LEDGER
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC : SIX SCENES',
      title: 'The Monsoon Book Drop and Machine Speed Assertions',
      intro: 'Follow apprentice Akshay, Chief Librarian Mrs. Iyer, Frontend Lead Ananya, and architect Sameer at the library loading dock as they confront five hundred incoming textbooks in torrential rain, build Chai assertions, overcome casing traps, and verify schemas at machine speed.',
      panels: [
        {
          title: 'Scene 1: 11:15 PM: The Monsoon Book Drop and Loading Bay Standoff',
          time: '11:15 PM',
          layout: 'duo',
          image: {
            src: ch05Scene1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch05-scene-1-assertions-briefing.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay, Mrs. Iyer, and Sameer reviewing textbooks on the rain lashed loading dock.',
            caption: 'Loading Bay Standoff: Five hundred physical textbooks arrive in the monsoon; manual entry will take twelve hours.'
          },
          replyImage: {
            src: ch05RainDockImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch05/ch05_rain_lashing_dock.jpg',
            w: 1376,
            h: 768,
            alt: 'Torrential rain pouring over the loading bay pavilion outside the library.',
            caption: 'Monsoon Torrent: Water pools on the tarmac as five hundred crates await cataloging.'
          },
          dialogue: {
            speaker: 'Mrs. Iyer',
            speech: 'Five hundred textbooks in these crates. Every copy must be verified in the catalog by dawn.',
            replySpeaker: 'Akshay',
            replySpeech: 'Five hundred manual requests will take twelve hours! Gates lock in forty minutes!'
          },
          scene: 'At 11:15 PM, a torrential monsoon downpour lashes the central library loading dock as logistics trucks arrive with 500 textbooks. Mrs. Iyer demands full catalog entry before dawn, while Ananya warns that her search app will crash on any malformed record.',
          realization: 'Manual verification of bulk data collapses under operational deadlines; automated data driven execution is mandatory.'
        },
        {
          title: 'Scene 2: 11:24 PM: Waterlogged Manifests and The Eyeball Trap',
          time: '11:24 PM',
          layout: 'duo',
          image: {
            src: ch05ManifestImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch05/ch05_waterlogged_manifest.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay and Mrs. Iyer inspecting water damaged paper packing lists with smeared ink.',
            caption: 'The Paper Defect: Smeared numbers and missing aisle columns prove manual checklists are doomed.'
          },
          replyImage: {
            src: ch05TypingImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch05/ch05_akshay_typing_tests.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay opening the Tests tab on his silver laptop keyboard under the brass lamp.',
            caption: 'Opening the Sandbox: Akshay fires up the Tests tab to encode verification rules into code.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'The rain smeared the ink on row forty two! Is the price four hundred or nine hundred?!',
            replySpeaker: 'Sameer',
            replySpeech: 'Human eyeballs tire after ten records. We encode the acceptance rules into the Tests tab once.'
          },
          scene: 'Under the dim loading bay lights, raindrops seep into the paper shipping sheets. Akshay realizes that checking five hundred rows manually invites catastrophic transcription errors. Sameer directs him to automate the acceptance rules.',
          realization: 'Automated test scripts remove human cognitive fatigue from validation tasks.'
        },
        {
          title: 'Scene 3: 11:35 PM: The pm.test Sandbox and Chai Matchers',
          time: '11:35 PM',
          layout: 'duo',
          image: {
            src: ch05Scene2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch05-scene-2-pm-test-chai.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay typing Chai assertions in the workbench Tests tab as Sameer points to status and schema matchers.',
            caption: 'The JavaScript Sandbox: Authoring Chai status, latency, and schema assertions in the Tests tab.'
          },
          replyImage: {
            src: ch05SameerPointingImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch05/ch05_sameer_pointing_tests.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer pointing at the pm.test assertion block on the developer laptop screen.',
            caption: 'Precision Matchers: Sameer enforces strict equality and response time thresholds below 200 milliseconds.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Writing pm.test for status 200 and response time below two hundred milliseconds!',
            replySpeaker: 'Sameer',
            replySpeech: 'Check the wire headers too. Verify Content-Type is application/json charset utf 8.'
          },
          scene: 'Akshay configures the workbench Tests tab sandbox. Sameer shows him how Chai assertions validate response status, latency budgets, and body schemas at machine speed.',
          realization: 'The workbench embedded Node.js sandbox gives test engineers the full programmatic power of Chai matchers and Ajv schemas.'
        },
        {
          title: 'Scene 4: 11:44 PM: The Casing Disparity Ambush',
          time: '11:44 PM',
          layout: 'duo',
          image: {
            src: ch05ChaiAssertImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch05/ch05_postman_chai_assertions.jpg',
            w: 1376,
            h: 768,
            alt: 'API Testing Workbench test execution interface showing passing assertions alongside one unexpected red failure.',
            caption: 'First Assertion Suite: Green status assertions pass, but bookName returns undefined.'
          },
          replyImage: {
            src: ch05CasingFailImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch05/ch05_postman_casing_failure.jpg',
            w: 1376,
            h: 768,
            alt: 'Assertion failure detail displaying AssertionError: expected undefined to equal Operating Systems.',
            caption: 'Casing Trap: The legacy service returns book_name in snake_case, but the frontend expected bookName.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Red failure! AssertionError: expected undefined to equal Operating Systems Concepts! Why?!',
            replySpeaker: 'Sameer',
            replySpeech: 'The server returns snake_case book_name, not camelCase bookName. JavaScript is strictly case sensitive.'
          },
          scene: 'Akshay runs his first multi-assertion test script and hits an immediate red failure. While the status code is 200, checking jsonData.bookName yields undefined because the legacy database driver outputs snake_case book_name.',
          realization: 'Contract testing catches naming convention mismatches before they crash downstream frontend applications.'
        },
        {
          title: 'Scene 5: 11:52 PM: Schema Contracts and Ananya Defense',
          time: '11:52 PM',
          layout: 'duo',
          image: {
            src: ch05Scene3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch05-scene-3-schema-contract-validation.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay and Ananya examining green assertion passes across the terminal as batch execution completes.',
            caption: 'Automated Triumph: Five hundred iterations verified with zero failures in twelve seconds.'
          },
          replyImage: {
            src: ch05AnanyaSchemaImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch05/ch05_ananya_reviewing_schema.jpg',
            w: 1376,
            h: 768,
            alt: 'Ananya inspecting the JSON Schema contract model on the lab workstation monitor.',
            caption: 'Contract Guardian: Ananya demands type strictness for bookId string and price integer.'
          },
          dialogue: {
            speaker: 'Ananya',
            speech: 'If a single book returns price as a string instead of a number, my checkout cart breaks for everyone.',
            replySpeaker: 'Akshay',
            replySpeech: 'Locking down the Ajv JSON schema now. Every field type and required key is strictly asserted.'
          },
          scene: 'Frontend Lead Ananya joins Akshay at the developer station. She explains how mobile client parsing crashes when unexpected types appear. Akshay wraps the response in a formal JSON Schema validator using tv4/Ajv inside the workbench.',
          realization: 'JSON Schema assertions validate structure, data types, and required properties across entire payloads in a single line.'
        },
        {
          title: 'Scene 6: 11:58 PM: Newman Batch Velocity and Dawn Clearance',
          time: '11:58 PM',
          layout: 'duo',
          image: {
            src: ch05NewmanRunImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch05/ch05_newman_batch_run.jpg',
            w: 1376,
            h: 768,
            alt: 'Command line terminal showing fast Newman CLI collection runner executing five hundred iterations.',
            caption: 'Command Line Velocity: Newman runs the collection headlessly with fifteen hundred assertions passing.'
          },
          replyImage: {
            src: ch05CelebrationImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/ch05/ch05_team_celebration_dawn.jpg',
            w: 1376,
            h: 768,
            alt: 'The engineering team celebrating in the lab as dawn breaks outside the sandstone arches.',
            caption: 'Dawn Victory: Five hundred books verified and cataloged before the library gates open.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: '500 iterations, 1500 assertions, zero failures in twelve seconds flat! All green!',
            replySpeaker: 'Mrs. Iyer',
            replySpeech: 'Accurate to the last comma. The stacks open at eight on schedule. Good work, engineers.'
          },
          scene: 'With Chai assertions and schema validation locked in, Akshay executes the Newman CLI runner. 500 records stream through green in 12 seconds flat. Mrs. Iyer reviews the terminal output and gives her austere approval as dawn breaks over the campus arches.',
          realization: 'Automated batch assertions convert twelve hours of error-prone manual labor into seconds of deterministic verification.'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 1: The Request and Response Execution Lifecycle',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'EXECUTION LIFECYCLE',
      title: 'API Testing Workbench Execution Lifecycle: Pre Request, Network Wire, and Assertions',
      text: 'The workbench separates execution into three distinct phases for every HTTP transaction: Pre request Script to seed dynamic parameters, Network Transmission over the wire, and Tests script to parse responses and assert business contracts at machine speed.',
      src: lifecycleImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/postman-assertion-lifecycle.jpg',
      w: 1408,
      h: 768,
      alt: 'Workbench script execution lifecycle: Pre request script runs before network call, HTTP request and response travel across the wire, Tests script runs assertions after response arrives.',
      caption: 'The complete three stage execution lifecycle of every workbench request.',
      points: [
        'Stage 1 (Pre request Script): Runs before the HTTP request is built. Ideal for calculating timestamps, generating unique numbers, and configuring headers.',
        'Stage 2 (Network Transmission): The HTTP packet travels across the wire and the server returns status code, headers, and body.',
        'Stage 3 (Tests Script): Runs immediately after the response arrives. This is where we write assertions to validate data.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 2: JavaScript Fundamentals for API Automation Engineers',
    },
    {
      type: 'paragraph',
      text: 'Why do API automation engineers need JavaScript? Because the workbench contains a full Node.js execution sandbox. Every time you write code in the Pre request Script or Tests tabs, the workbench executes your JavaScript directly. Understanding fundamental language mechanics prevents subtle bugs in your test suites.',
    },
    {
      type: 'steps',
      items: [
        'Loosely Typed Nature: In languages like Java or C#, you must declare types explicitly like int a = 4. In JavaScript, variables are loosely typed and determine their data type dynamically at runtime.',
        'The typeof Operator: To inspect any variable type, use typeof. In JavaScript, both integers and floating point decimals share a single data type called number. Other primary types include string, boolean, null, and undefined.',
        'The Three Variable Keywords: Modern JavaScript provides var, let, and const. Knowing their exact differences is vital for reliable test scripting.',
      ],
    },
    {
      type: 'comparison',
      title: 'Comparing JavaScript Variable Keywords: var vs let vs const',
      columns: ['Keyword', 'Scope Boundary', 'Allows Redeclaration?', 'Allows Reassignment?'],
      rows: [
        ['var', 'Function or Global Scope (leaks out of if blocks)', 'Yes (can accidentally overwrite existing variables)', 'Yes'],
        ['let', 'Block Scope (confined strictly within braces { })', 'No (prevents accidental naming collisions)', 'Yes (ideal for counters and mutable accumulators)'],
        ['const', 'Block Scope (confined strictly within braces { })', 'No (immutable reference)', 'No (ideal for holding parsed JSON responses and fixed configs)'],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Classic Interview Trap: Negating a Constant in an If Condition',
      paragraphs: [
        'Consider a constant boolean flag: `const isAvailable = true;`. What happens if you write `if (!isAvailable) { ... }`?',
        'Does the exclamation mark negation operator throw an error because the variable was declared with const?',
        'No! The negation operator inverts the boolean evaluation of the expression for that comparison, but does not alter the stored variable value. The variable remains true in memory while the expression evaluates to false.',
      ],
    },
    {
      type: 'paragraph',
      text: 'When structuring test logic, modern JavaScript uses arrow functions for concise syntax:',
    },
    {
      type: 'code',
      filename: 'javascript-basics-for-testers.js',
      lines: [
        '// Modern arrow function vs traditional function declaration',
        'const addNumbers = (first, second) => first + second;',
        '',
        '// Checking data types with typeof',
        'const bookTitle = "Zero to Agentic API Testing";',
        'const price = 49.99;',
        'const isAvailable = true;',
        '',
        'console.log(typeof bookTitle); // prints "string"',
        'console.log(typeof price);     // prints "number"',
        'console.log(typeof isAvailable); // prints "boolean"',
      ],
    },
    {
      type: 'heading',
      text: 'Step 3: Anatomy of the pm.test Function',
    },
    {
      type: 'paragraph',
      text: 'To register an automated test case in the workbench, we use the `pm.test` wrapper function with a description string and an assertion callback.',
    },
    {
      type: 'code',
      filename: 'first-assertion.js',
      lines: [
        '// Line 1: Define the test name shown in the Test Results tab',
        'pm.test("Status code is 200 OK", function () {',
        '    // Line 2: The actual condition that must be true for the test to pass',
        '    pm.response.to.have.status(200);',
        '});',
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Micro Chunk Breakdown: Understanding the 3 Lines',
      paragraphs: [
        '• Line 1: `pm.test("...", function () {` tells the workbench to register a new test card in the Test Results panel with your chosen label.',
        '• Line 2: `pm.response.to.have.status(200);` is the assertion. If the server returned 200, the test turns GREEN. If the server returned 404 or 500, it turns RED and displays the discrepancy.',
        '• Line 3: `});` cleanly closes the JavaScript callback function block.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 4: Drilling into Response Bodies and Validating Headers',
    },
    {
      type: 'paragraph',
      text: 'To automate our validation of the AddBook response from Chapter 4, we break down our assertions into three focused chunks:',
    },
    {
      type: 'chunked-code',
      badge: 'ASSERTION CHUNKS',
      title: 'Automating the AddBook Response Validation',
      intro: 'Each chunk asserts a distinct architectural layer of the response packet:',
      chunks: [
        {
          label: 'Chunk 1: Status Code Assertion',
          filename: 'status-assertion.js',
          code: 'pm.test("Status code is 200 OK", function () {\n    pm.response.to.have.status(200);\n});',
          title: 'Verifying Wire Status',
          explanation: 'Asserts that the server answered with HTTP 200 OK, confirming the AddBook operation was accepted.',
          keyTakeaway: 'Always verify status code first before parsing response body properties.'
        },
        {
          label: 'Chunk 2: Headers and Latency Budget',
          filename: 'header-latency.js',
          code: 'pm.test("Header is JSON and latency under 1200ms", function () {\n    pm.response.to.have.header("Content-Type");\n    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");\n    pm.expect(pm.response.responseTime).to.be.below(1200);\n});',
          title: 'Enforcing Envelope Contract',
          explanation: 'Confirms the payload is encoded in JSON and arrived within the 1200 millisecond performance budget.',
          keyTakeaway: 'Testing latency budgets protects against silent database index degradation.'
        },
        {
          label: 'Chunk 3: Deep JSON Body Validation',
          filename: 'body-assertion.js',
          code: 'pm.test("Response contains successfully added message", function () {\n    const responseData = pm.response.json();\n    pm.expect(responseData.msg || responseData.Msg).to.include("successfully added");\n    pm.expect(responseData.ID).to.be.a("string");\n});',
          title: 'Validating Payload Properties',
          explanation: 'Defensively inspects both lowercase msg and uppercase Msg keys, and confirms the generated ID is a valid string.',
          keyTakeaway: 'Defensive assertions protect suites against casing inconsistencies across microservices.'
        }
      ]
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'If the server takes 145 ms and returns { "Msg": "successfully added", "ID": "9781227" } with status 200 OK, what will the Test Results tab display?',
      options: [
        'PASS 3 of 3: Three green checkmarks confirming status, header, and body message',
        'FAIL: Because the server response did not include a timestamp',
        'ERROR: Because the workbench cannot check string inclusion',
        'TIMEOUT: Because latency was measured in milliseconds'
      ],
      answerIndex: 0,
      revealTitle: 'AddBook Assertion Test Results Confirmation',
      explanation: 'All three assertions pass green! The workbench confirmed the 200 status, validated latency was 145 ms (well below 1200 ms), and confirmed that Msg included "successfully added" with a valid ID string!'
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Fresher Trap to Avoid: Forgetting Parentheses on json()',
      paragraphs: [
        'A very common mistake is typing `const data = pm.response.json;` instead of `const data = pm.response.json();`.',
        'Without parentheses, JavaScript returns a reference to the function definition rather than executing it to parse the payload. When you then try to read `data.msg`, your test script crashes with undefined!',
        'Always include parentheses: `pm.response.json()` to invoke the JSON parser.',
      ],
    },
    {
      type: 'comic-workbench',
      badge: 'API TESTING WORKBENCH · TRIPLE LAYER ASSERTIONS',
      title: 'Akshay Asserts Status, Envelope Headers, and Payload',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Junior Learner',
          text: 'Sameer! I wrote three chained assertions in the Tests tab: status code 200, Content Type header with sub second latency, and deep validation of Msg and ID! Look at the Test Results pane: all 3 passed green!',
          pointer: 'Points to PASS 3 of 3 in Test Results tab'
        },
        {
          speaker: 'Sameer',
          role: 'Lead Architect',
          text: 'Look at that clean structure, Akshay! Asserting status code first guarantees that if the server ever crashes with a 500 error, the test fails cleanly on status rather than blowing up on an invalid JSON body parser exception.',
          pointer: 'Points to pm.response.to.have.status(200) status guard'
        }
      ],
      workbench: {
        method: 'POST',
        url: 'https://qa-api.campuslibrary.org/v1/books',
        headers: 'Content-Type: application/json',
        body: '{\n  "name": "Zero to Agentic API Testing",\n  "isbn": "9781",\n  "aisle": "227",\n  "author": "Alex Mercer"\n}',
        responseStatus: '200 OK',
        responseTime: '145 ms',
        responseBody: '{\n  "Msg": "successfully added",\n  "ID": "9781227"\n}'
      },
      breakdown: {
        input: 'Tests script running post flight against AddBook response.',
        explanation: 'Chai matchers evaluate status code 200, Content Type header, latency under 1200 ms, and existence of composite ID.',
        output: '3 green checkmarks in Test Results with zero human intervention.',
        trapAndFix: 'Omitting parentheses on pm.response.json() returns the function reference instead of parsed data, causing tests to crash with undefined.'
      }
    },
    {
      type: 'heading',
      text: 'Step 5: JSON Schema Validation with Ajv',
    },
    {
      type: 'paragraph',
      text: 'JSON Schema validation checks the entire structural contract: verifying that required fields exist and data types remain stable across server releases. Because each endpoint has its own specific contract, we write each schema validation script in that endpoint own Tests tab in the workbench.',
    },
    {
      type: 'code',
      filename: 'addbook-schema-tests.js',
      lines: [
        '// Placed in the Tests tab of AddBook (POST /v1/books)',
        'const addBookSchema = {',
        '    type: "object",',
        '    required: ["Msg", "ID"],',
        '    properties: {',
        '        Msg: { type: "string" },',
        '        ID: { type: "string" }',
        '    }',
        '};',
        '',
        'pm.test("AddBook response matches strict JSON Schema", function () {',
        '    pm.response.to.have.jsonSchema(addBookSchema);',
        '});',
      ],
    },
    {
      type: 'code',
      filename: 'deletebook-schema-tests.js',
      lines: [
        '// Placed in the Tests tab of DeleteBook (POST /v1/books/delete)',
        'const deleteBookSchema = {',
        '    type: "object",',
        '    required: ["msg"],',
        '    properties: {',
        '        msg: { type: "string" }',
        '    }',
        '};',
        '',
        'pm.test("DeleteBook response matches strict JSON Schema", function () {',
        '    pm.response.to.have.jsonSchema(deleteBookSchema);',
        '});',
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Production Reality: Spotting Casing Disparities Across Endpoints',
      paragraphs: [
        'Notice an essential production detail between our two library endpoints:',
        '• AddBook returns uppercase Msg: { "Msg": "successfully added", "ID": "9781227" }.',
        '• DeleteBook returns lowercase msg: { "msg": "book is successfully deleted" }.',
        'If your test script checked for lowercase msg on the AddBook endpoint, your assertion would fail immediately! Real enterprise services are built by different teams over time. Always inspect the live wire response before writing strict JSON schemas.',
      ],
    },
    {
      type: 'comic-workbench',
      badge: 'API TESTING WORKBENCH · JSON SCHEMA CASING AUDIT',
      title: 'Akshay Discovers the Msg versus msg Casing Disparity',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Junior Learner',
          text: 'Sameer, my AddBook schema assertion threw an error! The schema expected lowercase msg, but the server sent uppercase Msg! Why would the developers capitalize it on AddBook but use lowercase on DeleteBook?!',
          pointer: 'Points to Ajv schema validation error on required property msg'
        },
        {
          speaker: 'Sameer',
          role: 'Lead Architect',
          text: 'Welcome to real enterprise software engineering, Akshay! Different microservices are built by different teams at different times. Academic textbooks assume perfection; real world test engineers write schemas that strictly match what the wire actually delivers!',
          pointer: 'Points to actual payload key: Msg: successfully added'
        }
      ],
      workbench: {
        method: 'POST',
        url: 'https://qa-api.campuslibrary.org/v1/books',
        headers: 'Content-Type: application/json',
        body: '{\n  "name": "Zero to Agentic API Testing",\n  "isbn": "9781",\n  "aisle": "227",\n  "author": "Alex Mercer"\n}',
        responseStatus: '200 OK',
        responseTime: '160 ms',
        responseBody: '{\n  "Msg": "successfully added",\n  "ID": "9781227"\n}'
      },
      breakdown: {
        input: 'JSON Schema requiring properties Msg and ID as strings.',
        explanation: 'Ajv schema engine verifies every property type and required presence against the server response.',
        output: 'Schema validation passes once schema accurately mirrors the uppercase Msg contract.',
        trapAndFix: 'Never assume consistent casing across microservice endpoints. Always verify the live wire contract before locking in schema assertions.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 1 : DYNAMIC PARAMETERIZATION',
      title: 'Parameterized POST with CSV Data and Scope Precedence',
      subtitle: 'Mapping external CSV columns into request templates via workbench Data scope',
      input: {
        method: 'POST',
        url: 'http://localhost:5050/v1/books',
        desc: 'Request template with variable placeholders fed by external CSV rows.',
        code: '{\n  "isbn": "{{isbn}}",\n  "title": "{{title}}",\n  "aisle": "{{aisle}}",\n  "author": "{{author}}"\n}'
      },
      underTheHood: {
        desc: 'Newman loads data file into iteration scope and evaluates variable substitution hierarchy.',
        steps: [
          'Newman reads next row from books data file into pm.iterationData scope.',
          'Request builder inspects double curly brace placeholders in JSON body.',
          'Scope precedence stack (Data beats Environment beats Global) resolves variable values.',
          'Resolved HTTP POST packet is dispatched across network socket to port 5050.',
          'Server receives fully formed JSON payload without knowing it was generated from CSV.'
        ]
      },
      output: {
        status: '200 OK or 201 Created',
        time: '12ms',
        desc: 'Server responds with status code matching expectedStatus column for that row.',
        body: '{\n  "Msg": "successfully added",\n  "ID": "ISBN9780134685991"\n}'
      },
      seniorSavior: {
        aphorism: 'Parameterize your assertions just like your URLs.',
        rule: 'Always assert dynamic expected values from iterationData rather than hardcoded literals.',
        trap: 'Hardcoding expected values in test scripts causes data driven runs to fail on every row except the first.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 2 : ITERATION SCOPE ISOLATION',
      title: 'Iteration Scope Isolation and Pre Request Cleanup',
      subtitle: 'Preventing state leakage across Newman collection iteration boundaries',
      input: {
        method: 'SCRIPT',
        url: 'Collection Pre Request Sandbox',
        desc: 'Defensive pre request cleanup script unsetting shared mutable environment variables.',
        code: 'pm.environment.unset("createdBookId");\npm.environment.unset("lastResponseStatus");'
      },
      underTheHood: {
        desc: 'Collection pre request script executes before every iteration, clearing stale state.',
        steps: [
          'Iteration row begins execution in collection runner.',
          'Collection level pre request script fires before request construction.',
          'Script explicitly unsets mutable environment keys from previous iteration runs.',
          'Row executes in a clean sandbox free from cross iteration data contamination.',
          'Teardown requests only act on variables set during the current iteration.'
        ]
      },
      output: {
        status: 'ISOLATED EXECUTION',
        time: '0ms',
        desc: 'Zero variable leakage between iterations across 500 consecutive batch runs.',
        body: '// State verified pristine: pm.environment.get("createdBookId") === undefined'
      },
      seniorSavior: {
        aphorism: 'Iteration data dies per row; environment variables live forever.',
        rule: 'Always unset mutable environment variables in collection pre request scripts.',
        trap: 'Relying on environment variables without clearing them causes iteration 2 to delete records created in iteration 1.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 3 : DYNAMIC STATUS MAPPING',
      title: 'Dynamic Multi Status Assertion Mapping',
      subtitle: 'Asserting positive creations, collisions, and bad requests from a single data driven script',
      input: {
        method: 'TEST',
        url: 'Tests Tab Sandbox',
        desc: 'Dynamic assertion converting CSV string status into integer and validating response.',
        code: 'const expectedCode = parseInt(pm.iterationData.get("expectedStatus"), 10);\npm.test(`Status matches expected ${expectedCode}`, function () {\n    pm.expect(pm.response.code).to.equal(expectedCode);\n});'
      },
      underTheHood: {
        desc: 'CSV parser treats all fields as strings; test script coerces expectedStatus to integer.',
        steps: [
          'Newman loads expectedStatus column value (such as string "200" or "409").',
          'Test script calls parseInt with radix 10 to produce JavaScript number type.',
          'pm.response.code returns actual HTTP response status as integer.',
          'Chai evaluates strict numerical equality: 200 === 200.',
          'Single test script validates 200 OK, 409 Conflict, and 400 Bad Request dynamically.'
        ]
      },
      output: {
        status: 'PASS',
        time: '3ms',
        desc: 'Test results pane displays PASS: Status matches expected 200.',
        body: 'PASS: Status matches expected 200 | Actual: 200 === Expected: 200'
      },
      seniorSavior: {
        aphorism: 'The CSV row is the test case, not the script.',
        rule: 'Always coerce numeric CSV fields with parseInt or Number before strict Chai equality checks.',
        trap: 'Strict Chai equality pm.expect(pm.response.code).to.equal("200") fails because integer 200 does not equal string "200".'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 4 : DELIMITER & BOM SANITATION',
      title: 'The Delimiter and BOM Sanitation Gate',
      subtitle: 'Defending against UTF 8 Byte Order Marks and unescaped commas in CSV batch files',
      input: {
        method: 'DATA',
        url: 'books_data.csv',
        desc: 'CSV dataset containing commas inside quoted titles and clean UTF 8 encoding.',
        code: 'isbn,title,aisle,expectedStatus\n9780134685991,"Eats, Shoots & Leaves",A3,200\n9780201616224,"The Mythical Man Month",B1,200'
      },
      underTheHood: {
        desc: 'RFC 4180 parsing respects double quotes, and stripping BOM preserves exact header names.',
        steps: [
          'Preflight check strips invisible EF BB BF Byte Order Mark bytes from CSV file.',
          'Newman reads clean header line: isbn instead of invisible backslash uFEFF isbn.',
          'RFC 4180 parser treats comma inside double quotes as literal string character.',
          'Column positions remain strictly intact without shifting author into aisle.',
          'Every variable substitution maps to the exact intended JSON property.'
        ]
      },
      output: {
        status: 'PARSED CLEAN',
        time: '2ms',
        desc: 'Clean column extraction without NaN status crashes or undefined variable errors.',
        body: '{\n  "isbn": "9780134685991",\n  "title": "Eats, Shoots & Leaves",\n  "aisle": "A3"\n}'
      },
      seniorSavior: {
        aphorism: 'Never open automated test CSV files in spreadsheet applications.',
        rule: 'Wrap text fields containing commas in double quotes and save as UTF 8 without BOM.',
        trap: 'Opening test CSVs in Excel auto converts ISBNs into date formulas and injects hidden BOM header bytes.'
      }
    },
    {
      type: 'battle-scar',
      metric: 'Batch Processing Catastrophe',
      title: 'The UK Payroll Batch Catastrophe and PHE COVID 19 Truncation',
      context: 'In March 2019, a United Kingdom outsourced payroll processor suffered a catastrophic £2.1 million failure during month end direct deposit execution. A single company name containing an unescaped comma ("Henderson, Clarke & Partners Ltd") shifted all subsequent columns in the CSV batch. The bank account numbers mapped to pay amounts, salary values mapped to tax codes, and a single validation error on row 14,208 caused the batch processor to abort and wipe all accumulated payments. Incredibly, the summary notification email stated "68,412 records processed, 0 fatal database errors" because the script caught the exception without checking batch completion truth. Similarly, in October 2020, Public Health England lost 15,841 positive COVID 19 test results because commercial lab CSV data was imported into legacy Excel XLS workbooks capped at 65,536 rows. Both disasters demonstrate the mortal danger of unescaped delimiters, spreadsheet auto conversion, and unassertive batch summaries.',
      takeaway: 'Never trust spreadsheet applications to handle programmatic test data, and never assume batch completion means data correctness. Enforce strict RFC 4180 delimiter escaping, strip invisible BOM bytes, and assert individual row contracts dynamically.'
    },
    {
      type: 'triage',
      title: 'War Room Triage: The False Positive Green Gate Incident',
      scenario: 'The CI pipeline runs 120 automated workbench tests and all 120 report green checkmarks. Ten minutes later, customers report that user registration is broken. When inspecting the test script for registration, you see: pm.test("Status is 200", function () { pm.response.status; }). Why did this test report green while production crashed?',
      options: [
        'The workbench ignores HTTP status codes when running inside automated pipelines.',
        'The statement pm.response.status accesses the status number but performs no comparison matcher or error throw, so the function exited cleanly without failing.',
        'The backend database intercepted the test runner and returned simulated success headers.',
        'The test script requires a semicolon after every bracket to trigger failures.'
      ],
      answerIndex: 1,
      debrief: 'A test only fails when an exception is thrown! Accessing pm.response.status without an assertion matcher like pm.response.to.have.status(200) simply evaluates a number in memory and exits cleanly. The test runner saw zero errors and falsely marked the test green.',
      traps: [
        'The workbench evaluates status codes identically across desktop and headless CLI environments.',
        '',
        'Databases have no awareness of test runners versus human requests.',
        'JavaScript syntax rules do not alter test assertion execution mechanics.'
      ]
    },
    {
      type: 'comic-workbench',
      badge: 'API TESTING WORKBENCH · MATCHER INTEGRITY AUDIT',
      title: 'Akshay Banishes Silent False Positive Assertions',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Junior Learner',
          text: 'Wait Sameer, I had a test that said pm.test("Status is 200", function () { pm.response.status; }). Even when I targeted a broken 500 endpoint, it stayed green! How could a failing server pass the test?!',
          pointer: 'Points to bare statement pm.response.status without matcher'
        },
        {
          speaker: 'Sameer',
          role: 'Lead Architect',
          text: 'Because accessing pm.response.status without an assertion matcher is just a bare number in memory! It never threw an AssertionError. The workbench only turns red when an exception is thrown. Always use pm.response.to.have.status(200) so mismatched contracts halt the gate!',
          pointer: 'Points to pm.expect and Chai matcher throwing AssertionError'
        }
      ],
      workbench: {
        method: 'GET',
        url: 'https://qa-api.campuslibrary.org/status/500',
        headers: 'Accept: application/json',
        responseStatus: '500 Internal Server Error',
        responseTime: '10 ms',
        responseBody: '{\n  "error": "Internal Server Error",\n  "message": "Database connection pool exhausted"\n}'
      },
      breakdown: {
        input: 'Failing 500 endpoint executed with proper pm.response.to.have.status(200) assertion.',
        explanation: 'Chai matcher compares actual 500 against expected 200, throws AssertionError, and turns test report red.',
        output: 'AssertionError: expected response to have status code 200 but got 500.',
        trapAndFix: 'A test without an explicit Chai matcher or comparison is a hollow ping. Always ensure failing conditions throw errors to prevent silent false positives.'
      }
    },
    {
      type: 'heading',
      text: 'Step 6: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'Which workbench object is the unified gateway to access request metadata, response data, and test runner assertions?',
      options: [
        'The request object',
        'The pm object',
        'The testSuite object',
        'The chai object',
      ],
      answerIndex: 1,
      explain: 'The pm object is the universal namespace in the API testing workbench. It consolidates request parameters, response data (pm.response), test creation (pm.test), and assertion logic (pm.expect).',
    },
    {
      type: 'quiz',
      items: [
        [
          'What is the primary difference between let and const in workbench test scripts?',
          'Variables declared with let can be reassigned new values during iteration, whereas const variables cannot be reassigned once initialized.',
        ],
        [
          'Why should performance tests check response latency with to.be.below() rather than exact equality?',
          'Network latency fluctuates on every call. Asserting that responseTime is below a budget verifies performance consistently without false failures.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'The workbench runs an embedded Node.js sandbox that executes your JavaScript code in Pre request and Tests scripts.',
        'Use const for immutable references like parsed JSON bodies, and let for mutable counters and accumulators.',
        'Automated assertions replace manual visual inspection, running in milliseconds to catch regressions instantly.',
        'The pm.test wrapper takes a description string and an executable callback function containing Chai assertions.',
      ],
    },
    {
      type: 'victory-milestone',
      badge: 'MISSION 2 PHASE 2 CLEARED',
      rank: 'SENIOR AUTOMATION SCRIPTING ENGINEER',
      title: 'Architectural Triumph: Autonomous JavaScript Assertion Engine Armed',
      summary: 'You fired up the embedded Node.js sandbox, banished manual visual inspections forever, and transformed raw responses into razor sharp automated assertions. With Chai BDD matchers, sub second latency budgets, and JSON Schema validation, your tests now execute with mathematical precision in milliseconds.',
      powers: [
        'Authoring robust Chai BDD assertions using pm.test and pm.expect without syntax ambiguity',
        'Enforcing microsecond to millisecond latency budgets to prevent backend performance degradation',
        'Validating wire security headers (Content Type, Cache Control, CORS) on every response packet',
        'Executing contract level structural verification using strict JSON Schema definitions and Ajv matchers',
      ],
      disastersPrevented: [
        'Eliminated human verification fatigue where missed null fields trigger downstream frontend crashes',
        'Stopped memory leaking, slow database queries from sneaking past QA by enforcing response time ceilings',
        'Prevented silent payload schema mutations from reaching production unnoticed by automated pipelines',
      ],
      warRoomTakeaway: 'An unasserted API test is just a hollow ping. The moment you combine status checks, property assertions, and schema validation, you hold an unbreakable contract guarantee.',
    },
    {
      type: 'cliffhanger',
      title: 'Continuing Mission 2: Eliminating hardcoded URLs and ISBNs',
      text: 'Our assertions are written, but our URLs and ISBN values are still hardcoded. In Chapter 6, we advance Mission 2: creating dynamic environments and generating random unique ISBNs in Pre request scripts!',
    },
  ],
}
