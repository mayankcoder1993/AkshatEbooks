import scene1BriefingImg from '../assets/ch05-scene-1-assertions-briefing.jpg'
import scene2PmTestImg from '../assets/ch05-scene-2-pm-test-chai.jpg'
import scene3SchemaImg from '../assets/ch05-scene-3-schema-contract-validation.jpg'
import lifecycleImg from '../assets/postman-assertion-lifecycle.jpg'

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
      missionContext: 'Manual verification of hundreds of textbook responses is impossible for human eyes to sustain. A missing JSON key or a latency spike to two seconds will easily slip past manual review. In this phase, we harness the embedded Node.js sandbox inside Postman to write Chai assertions that validate status codes, response times, header values, and schema contracts in milliseconds.',
      missionObjective: 'Automate status code, response time, header, and JSON schema assertions with strict casing validation.',
      targetSystems: 'Postman Embedded Node.js Sandbox · Chai Assertion Library · Library REST Engine',
      achieve: 'Transform manual eyeball checks into machine speed quality gates by mastering the Postman JavaScript execution sandbox, Chai matchers, and JSON schema validation.',
      how: 'Deconstruct the Postman request lifecycle, explore core JavaScript variable rules, build robust Chai status and response assertions, and validate strict schema contracts accounting for production casing disparities.',
      carry: 'A battle tested suite of JavaScript assertions verifying status codes, response timing budgets, and schema properties that you will parameterize with dynamic environments in Chapter 6.'
    },
    {
      type: 'mission-tracker',
      badge: 'MISSION 2 PROGRESS · STEP 2 OF 5',
      title: 'Continuing Mission 2: Replacing the Manual Eyeball Test',
      text: 'In Chapter 4, we added a book to our campus catalog, but we verified the response by visually inspecting the screen. Humans cannot inspect thousands of JSON responses by eye without missing missing properties or slow response times. Our next step in Mission 2 is replacing eyeball checks with automated JavaScript assertions: mastering the JavaScript fundamentals that power the Postman sandbox, writing code in the Tests tab to validate status codes, response headers, latency budgets, and data schemas in milliseconds.',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'MISSION BRIEFING',
      title: 'Mission 2 Phase 2: Eliminating Eyeball Traps with JavaScript Assertions',
      text: 'Dev, Pooja, and Karan convene inside the university scriptorium to plan the transition from manual eyeball reviews to automated Chai assertions inside the Postman embedded Node.js sandbox.',
      src: scene1BriefingImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch05-scene-1-assertions-briefing.jpg',
      w: 1792,
      h: 1024,
      alt: 'Madhubani graphic novel panel showing Dev, Pooja, and Karan in an ancient Indian stone library hall with comic speech clouds explaining the necessity of automated JavaScript assertions.',
      caption: 'Figure 5.0: Dev, Pooja, and Karan planning the transition from manual eyeball checks to automated JavaScript assertions.',
      points: [
        'Dev warns that manual inspection of hundreds of textbook payloads is impossible to sustain.',
        'Pooja outlines the assertion sequence: HTTP status 200 first, followed by JSON envelope headers and a 1200 millisecond latency budget.',
        'Karan notes the defensive assertion strategy: validating both lowercase msg and uppercase Msg keys to handle production quirks.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 1: The Request and Response Execution Lifecycle',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'EXECUTION LIFECYCLE',
      title: 'Postman Execution Lifecycle: Pre Request, Network Wire, and Assertions',
      text: 'Postman separates execution into three distinct phases for every HTTP transaction: Pre request Script to seed dynamic parameters, Network Transmission over the wire, and Tests script to parse responses and assert business contracts at machine speed.',
      src: lifecycleImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/postman-assertion-lifecycle.jpg',
      w: 1408,
      h: 768,
      alt: 'Postman script execution lifecycle: Pre request script runs before network call, HTTP request and response travel across the wire, Tests script runs assertions after response arrives.',
      caption: 'The complete three stage execution lifecycle of every Postman request.',
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
      text: 'Why do API automation engineers need JavaScript? Because Postman contains a full Node.js execution sandbox. Every time you write code in the Pre request Script or Tests tabs, Postman executes your JavaScript directly. Understanding fundamental language mechanics prevents subtle bugs in your test suites.',
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
      text: 'To register an automated test case in Postman, we use the `pm.test` wrapper function with a description string and an assertion callback.',
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
        '• Line 1: `pm.test("...", function () {` tells Postman to register a new test card in the Test Results panel with your chosen label.',
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
        'ERROR: Because Postman cannot check string inclusion',
        'TIMEOUT: Because latency was measured in milliseconds'
      ],
      answerIndex: 0,
      revealTitle: 'AddBook Assertion Test Results Confirmation',
      explanation: 'All three assertions pass green! Postman confirmed the 200 status, validated latency was 145 ms (well below 1200 ms), and confirmed that Msg included "successfully added" with a valid ID string!'
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'AUTOMATED QUALITY GATE',
      title: 'Executing Automated Chai Assertions in the Postman Tests Tab',
      text: 'Dev, Pooja, and Karan review the live execution of their Chai assertions. The top panel captures their analysis, while the bottom panel shows the exact Postman Tests code editor and the green Test Results verification scorecard.',
      src: scene2PmTestImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch05-scene-2-pm-test-chai.jpg',
      w: 1792,
      h: 1024,
      alt: 'Hybrid Madhubani panel and software UI showing Dev, Pooja, and Karan pointing to Postman Tests code editor and Test Results panel with three green PASS checkmarks.',
      caption: 'Figure 5.1: Dev, Pooja, and Karan validating AddBook status, latency budget, and payload properties with Chai assertions.',
      points: [
        'Dev highlights the Chai matcher pm.response.to.have.status(200) validating the wire code instantly.',
        'Pooja tracks the Test Results scorecard showing 3 out of 3 assertions passed green in 145 milliseconds.',
        'Karan demonstrates defensive body validation where responseData.msg or responseData.Msg handles either casing gracefully.',
      ],
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
      type: 'heading',
      text: 'Step 5: JSON Schema Validation with Ajv',
    },
    {
      type: 'paragraph',
      text: 'JSON Schema validation checks the entire structural contract: verifying that required fields exist and data types remain stable across server releases. Because each endpoint has its own specific contract, we write each schema validation script in that endpoint own Tests tab in Postman.',
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
      type: 'image',
      layout: 'stacked',
      badge: 'STRICT CONTRACT DEFENSE',
      title: 'Enforcing JSON Schema Structural Contracts with Ajv',
      text: 'Dev, Pooja, and Karan lock down payload contracts using JSON Schema validation. The top panel shows their contract review, while the bottom panel displays the schema definition and green verification badge in Postman.',
      src: scene3SchemaImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch05-scene-3-schema-contract-validation.jpg',
      w: 1792,
      h: 1024,
      alt: 'Hybrid Madhubani panel and software UI showing Dev, Pooja, and Karan analyzing strict JSON schema validation code and the green PASS Test Result badge in Postman.',
      caption: 'Figure 5.2: Dev, Pooja, and Karan enforcing structural schema contracts to prevent production casing drift.',
      points: [
        'Dev explains why status 200 alone is insufficient: silent payload drift or dropped keys break client applications.',
        'Karan details how Ajv schema validation locks required keys and exact data types into place.',
        'Pooja verifies that required properties Msg and ID are enforced as strings, catching contract drift at the quality gate.',
      ],
    },
    {
      type: 'battle-scar',
      metric: 'Silent Production Bug Outage',
      title: 'The Silent False Positive Trap: The Danger of Assertions Without Matchers',
      context: 'During an enterprise retail migration, thousands of automated tests ran green across CI CD pipelines. Yet, immediately after deployment, customers could not add items to their shopping cart. An engineering audit discovered the test script was written as: pm.test("Item added", function() { pm.response.json().status === "success"; }). Because the triple equal expression returned true or false without passing it to a Chai matcher or throwing an error, the Postman test sandbox recorded every test as passed green, even when the server returned an error!',
      takeaway: 'Never write bare boolean expressions inside pm.test. Assertions must use pm.expect or pm.response.to.have matchers that explicitly throw errors on mismatch so failing contracts turn the quality gate red.'
    },
    {
      type: 'triage',
      title: 'War Room Triage: The False Positive Green Gate Incident',
      scenario: 'The CI pipeline runs 120 automated Postman tests and all 120 report green checkmarks. Ten minutes later, customers report that user registration is broken. When inspecting the test script for registration, you see: pm.test("Status is 200", function () { pm.response.status; }). Why did this test report green while production crashed?',
      options: [
        'Postman ignores HTTP status codes when running inside automated pipelines.',
        'The statement pm.response.status accesses the status number but performs no comparison matcher or error throw, so the function exited cleanly without failing.',
        'The backend database intercepted the test runner and returned simulated success headers.',
        'The test script requires a semicolon after every bracket to trigger failures.'
      ],
      answerIndex: 1,
      debrief: 'A test only fails when an exception is thrown! Accessing pm.response.status without an assertion matcher like pm.response.to.have.status(200) simply evaluates a number in memory and exits cleanly. The test runner saw zero errors and falsely marked the test green.',
      traps: [
        'Postman evaluates status codes identically across desktop and headless CLI environments.',
        '',
        'Databases have no awareness of test runners versus human requests.',
        'JavaScript syntax rules do not alter test assertion execution mechanics.'
      ]
    },
    {
      type: 'heading',
      text: 'Step 6: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'Which Postman object is the unified gateway to access request metadata, response data, and test runner assertions?',
      options: [
        'The request object',
        'The pm object',
        'The testSuite object',
        'The chai object',
      ],
      answerIndex: 1,
      explain: 'The pm object is the universal namespace in modern Postman. It consolidates request parameters, response data (pm.response), test creation (pm.test), and assertion logic (pm.expect).',
    },
    {
      type: 'quiz',
      items: [
        [
          'What is the primary difference between let and const in Postman test scripts?',
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
        'Postman runs an embedded Node.js sandbox that executes your JavaScript code in Pre request and Tests scripts.',
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
