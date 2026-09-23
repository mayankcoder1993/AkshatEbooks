import workbenchImg from '../assets/postman-workbench-overview.jpg'
import collaborationImg from '../assets/postman-team-collaboration-fork-pr.jpg'

export const lesson03 = {
  id: 'postman-setup',
  icon: '',
  title: 'Automating the Wire Check: Postman Workbench and Assertions',
  shortTitle: 'Automating the Wire Check',
  subtitle: 'Translating manual verification into automated JavaScript assertions, running test suites, and team collaboration.',
  tags: ['Postman', 'Assertions', 'JavaScript', 'Automation', 'Collections', 'Collaboration'],
  blocks: [
    {
      type: 'chapter-opener',
      achieve: 'Turn the shuttle investigation we performed by hand into repeatable checks that reveal a broken response.',
      how: 'Reuse the same local endpoint and inputs, add a small post response check to each request, run the checks against broken and guarded versions, and read actual Test Results.',
      carry: 'The core automated assertion pattern ready to test library services in Chapter 4.'
    },
    {
      type: 'mission-hud',
      mission: 'Mission 1: The Core Protocol and Campus Cloud Integration',
      phase: 'Phase 3 of 3: Automating the Wire Verification',
      rank: 'Rank: Automation Quality Engineer',
      status: 'ACTIVE'
    },
    {
      type: 'mission-tracker',
      badge: 'MISSION 1 PROGRESS · STEP 3 OF 3',
      title: 'Completing Mission 1: Turning Manual Inspections into Automated Watchdogs',
      text: 'In Chapter 2, we investigated the campus transit crash and proved the solution by hand. But manual checking has a severe limitation: a human tester cannot sit at a screen clicking Send every fifteen seconds, especially during midnight deployments. If a backend engineer pushes an update that accidentally breaks the route parameter again, real students will be stranded at bus stops before anyone notices. In this chapter, we automate our manual checks into a repeatable Postman collection with JavaScript assertions that validate the wire in milliseconds.',
    },
    {
      type: 'heading',
      text: 'Step 1: The API Testing Workbench Cockpit: The Four Surfaces',
    },
    {
      type: 'paragraph',
      text: 'Standard web browsers are designed for human browsing, not API automation. A browser address bar cannot run assertions, cannot chain variables between requests, and cannot execute automated regression suites. Professional quality engineers rely on an **API Testing Workbench** such as Postman.',
    },
    {
      type: 'paragraph',
      text: 'When working inside an API testing workbench, an engineer interacts with four distinct surfaces:',
    },
    {
      type: 'structured-breakdown',
      badge: 'WORKBENCH ANATOMY',
      title: 'The Four Surfaces of an API Testing Workbench',
      intro: 'Understanding where each action happens prevents confusion during test construction:',
      categories: [
        {
          category: 'Surface 1: Request Builder',
          subCategory: 'Top Center Pane',
          title: 'Configuring the Outgoing HTTP Call',
          explanation: 'Where you specify the HTTP verb (GET, POST), target URL, query parameters, headers, and request body before sending.',
          points: [
            'Enter the endpoint address: http://localhost:3001/v1/campus/shuttle/coordinates.',
            'Attach query parameters such as route=campus_loop_north in the Params table.',
          ]
        },
        {
          category: 'Surface 2: Post Response Script Area',
          subCategory: 'Tests Tab',
          title: 'Writing Automated Assertion Code',
          explanation: 'A dedicated JavaScript sandbox that executes automatically the instant a response arrives from the network.',
          points: [
            'Where you write pm.test() blocks and assertion logic.',
            'Executes after the network transfer completes.',
          ]
        },
        {
          category: 'Surface 3: Response Status and Payload',
          subCategory: 'Bottom Left Pane',
          title: 'Inspecting What the Server Returned',
          explanation: 'Shows the exact raw data received over the wire: HTTP status code, latency, headers, and JSON or HTML body.',
          points: [
            'Status line displays 200 OK or 400 Bad Request.',
            'Body viewer formats returned JSON objects.',
          ]
        },
        {
          category: 'Surface 4: Test Results Summary',
          subCategory: 'Bottom Right Tab',
          title: 'Evaluating Assertion Passes and Failures',
          explanation: 'Where the workbench tallies your assertions, displaying green PASS badges for successful checks and red FAIL messages for defects.',
          points: [
            'Shows named test outcomes with clear descriptions.',
            'Prints expected versus actual values when a check fails.',
          ]
        }
      ]
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'POSTMAN WORKBENCH',
      title: 'The Postman Testing Cockpit: Navigation, Request Builder, and Response Pane',
      text: 'Postman organizes your testing universe into dedicated zones: the left sidebar for Collections and Environments, the top center builder for URLs and Headers, the Tests script editor, and the bottom pane for live responses and assertion results.',
      src: workbenchImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/postman-workbench-overview.jpg',
      w: 1408,
      h: 768,
      alt: 'Postman user interface layout showing collections, request tabs, and test execution results.',
      caption: 'The Automation Cockpit: Collections on the left, request parameters on top, response data and test results on the bottom.',
      points: [
        'Left Sidebar: Houses Collections, Environments, and saved requests organized in folders.',
        'Top Center Pane: Where you configure HTTP methods, endpoints, parameters, and post response test scripts.',
        'Bottom Pane: Where live server status codes, response bodies, and named test results appear.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 2: The JavaScript Test Sandbox: pm.test and pm.expect',
    },
    {
      type: 'paragraph',
      text: 'Inside Postman, every request includes a dedicated tab labeled **Tests**. Code typed into this tab runs in an embedded JavaScript engine immediately after the server response arrives.',
    },
    {
      type: 'paragraph',
      text: 'Postman provides a global JavaScript object named **pm** that gives your test scripts complete access to the request and response packets. You construct tests using simple, readable matchers:',
    },
    {
      type: 'definition',
      term: 'Test Assertion',
      text: 'A formal logical condition in code that compares an actual runtime value against an expected outcome. If the condition is true, the test passes with a green indicator; if false, the test halts with an explicit error description.',
      example: 'pm.response.to.have.status(200) asserts that the server returned HTTP status code 200 OK.',
    },
    {
      type: 'paragraph',
      text: 'Every test begins with `pm.test()`. It takes two arguments: a descriptive test name, and a callback function containing your assertions:',
    },
    {
      type: 'code',
      filename: 'assertion_syntax.js',
      lines: [
        '// Anatomy of a Postman Assertion',
        'pm.test("Status code is 200 OK", function () {',
        '    // Chai assertion matcher',
        '    pm.response.to.have.status(200);',
        '});',
      ],
    },
    {
      type: 'heading',
      text: 'Step 3: Red Before Green: Detecting Regressions on the Unhardened Server',
    },
    {
      type: 'paragraph',
      text: 'A test that has never been seen to fail cannot be trusted to protect production. To prove that our test is a genuine watchdog, we first run our missing route check against the deliberately broken fixture from Chapter 2 (where the guard was not yet installed).',
    },
    {
      type: 'paragraph',
      text: 'First, save the baseline valid request: `GET http://localhost:3001/v1/campus/shuttle/coordinates?route=campus_loop_north`. In its Tests tab, enter `pm.test("Status code is 200 OK", function () { pm.response.to.have.status(200); });`. Click Send. The test passes green because the broken server can still fulfill valid queries.',
    },
    {
      type: 'paragraph',
      text: 'Now create a second request in your collection named `Missing Route Check` with URL `http://localhost:3001/v1/campus/shuttle/coordinates`. In its Tests tab, write our expectation that the server should reject missing parameters with 400 Bad Request:',
    },
    {
      type: 'code',
      filename: 'missing_route_status_check.js',
      lines: [
        '// Request 02: Missing Route Status Assertion',
        'pm.test("Missing route returns 400", function () {',
        '    pm.response.to.have.status(400);',
        '});',
      ],
    },
    {
      type: 'paragraph',
      text: 'When we click Send against the unhardened server, predict what will happen:',
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'When we send the missing route request against the unhardened server (which crashes with 500), what will the Test Results tab display?',
      options: [
        'A red FAIL indicator: expected response to have status code 400 but got 500',
        'A green PASS indicator: Postman treats 500 and 400 as identical error codes',
        'The Postman application freezes and closes',
        'A timeout error because status assertions only work on status 200'
      ],
      answerIndex: 0,
      revealTitle: 'Authentic Red Failure Confirmation',
      explanation: 'Red before green confirmed! The unhardened server returned HTTP 500. Because our assertion demanded status code 400, Postman flagged the test with a red FAIL badge and printed: AssertionError: expected response to have status code 400 but got 500. The test caught the bug!'
    },
    {
      type: 'terminal',
      command: 'Postman Test Results Pane (Unhardened Server)',
      lines: [
        'FAIL Missing route returns 400',
        '  AssertionError: expected response to have status code 400 but got 500',
      ],
    },
    {
      type: 'paragraph',
      text: 'Notice why we assert the status code first: if the server crashes with a 500 error returning HTML or raw text, testing `pm.response.to.have.status(400)` fails cleanly with an informative message rather than crashing with an unexpected JSON parsing exception!',
    },
    {
      type: 'heading',
      text: 'Step 4: Rerunning After the Server Defense: Green on Negative Guard',
    },
    {
      type: 'paragraph',
      text: 'Now start the guarded transit service from Chapter 2 (or uncomment the validation guard in `shuttle_service.js` and restart the server). Without changing a single character of our test script, click Send again in Postman:',
    },
    {
      type: 'terminal',
      command: 'Postman Test Results Pane (Guarded Server)',
      lines: [
        'PASS Missing route returns 400',
      ],
    },
    {
      type: 'paragraph',
      text: 'The test turned green! Next, we expand our post response script to also verify that the server returns our canonical error guidance payload:',
    },
    {
      type: 'code',
      filename: 'negative_guard_full.js',
      lines: [
        '// Request 02: Negative Regression Guard (Missing Route)',
        'pm.test("Missing route returns 400", function () {',
        '    pm.response.to.have.status(400);',
        '});',
        '',
        'pm.test("Missing route explains why", function () {',
        '    pm.response.to.have.status(400);',
        '    const body = pm.response.json();',
        '    pm.expect(body.error).to.eql("route parameter is required");',
        '});',
      ],
    },
    {
      type: 'api-inspector',
      title: 'Automated Postman Suite: Request 02 (Negative 400 Guard)',
      method: 'GET',
      url: 'http://localhost:3001/v1/campus/shuttle/coordinates',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'ApexCampusMobile/2.4.0 (iOS 17.4)'
      },
      status: '400 Bad Request',
      time: '14 ms',
      size: '184 B',
      responseBody: {
        statusCode: 400,
        error: 'route parameter is required'
      },
      assertions: [
        'Missing route returns 400',
        'Missing route explains why'
      ],
      testScript: [
        'pm.test("Missing route returns 400", function () {',
        '    pm.response.to.have.status(400);',
        '});',
        '',
        'pm.test("Missing route explains why", function () {',
        '    pm.response.to.have.status(400);',
        '    const body = pm.response.json();',
        '    pm.expect(body.error).to.eql("route parameter is required");',
        '});'
      ],
      sampleLabel: 'POSTMAN TEST EXECUTION: NEGATIVE GUARD'
    },
    {
      type: 'heading',
      text: 'Step 5: Protecting the Positive Path: Deep Data and Coordinate Validation',
    },
    {
      type: 'paragraph',
      text: 'Rejecting bad requests is only half of quality engineering. We must also verify that when valid parameters are sent, the server returns the complete payload required by the mobile map. Open Request 01 (`Valid Route Contract`) targeting `http://localhost:3001/v1/campus/shuttle/coordinates?route=campus_loop_north`:',
    },
    {
      type: 'code',
      filename: 'positive_contract_full.js',
      lines: [
        '// Request 01: Positive Contract Verification (Valid Route)',
        'pm.test("Status code is 200 OK", function () {',
        '    pm.response.to.have.status(200);',
        '});',
        '',
        'pm.test("Route and status match contract", function () {',
        '    const data = pm.response.json();',
        '    pm.expect(data.route).to.eql("campus_loop_north");',
        '    pm.expect(data.status).to.eql("in_transit");',
        '});',
        '',
        'pm.test("Coordinates are valid numbers", function () {',
        '    const data = pm.response.json();',
        '    pm.expect(data.coordinates.latitude).to.be.a("number");',
        '    pm.expect(data.coordinates.longitude).to.be.a("number");',
        '});',
        '',
        'pm.test("Response time is under local budget", function () {',
        '    pm.expect(pm.response.responseTime).to.be.below(1200);',
        '});',
      ],
    },
    {
      type: 'api-inspector',
      title: 'Automated Postman Suite: Request 01 (Positive 200 Contract)',
      method: 'GET',
      url: 'http://localhost:3001/v1/campus/shuttle/coordinates?route=campus_loop_north',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'ApexCampusMobile/2.4.0 (iOS 17.4)'
      },
      status: '200 OK',
      time: '28 ms',
      size: '286 B',
      responseBody: {
        route: 'campus_loop_north',
        shuttleId: 'BUS_104',
        status: 'in_transit',
        coordinates: {
          latitude: 42.3601,
          longitude: -71.0942
        },
        speedMph: 24,
        nextStop: 'Apex Student Union',
        estimatedArrivalMinutes: 3
      },
      assertions: [
        'Status code is 200 OK',
        'Route and status match contract',
        'Coordinates are valid numbers',
        'Response time is under local budget'
      ],
      testScript: [
        'pm.test("Status code is 200 OK", function () {',
        '    pm.response.to.have.status(200);',
        '});',
        '',
        'pm.test("Route and status match contract", function () {',
        '    const data = pm.response.json();',
        '    pm.expect(data.route).to.eql("campus_loop_north");',
        '    pm.expect(data.status).to.eql("in_transit");',
        '});',
        '',
        'pm.test("Coordinates are valid numbers", function () {',
        '    const data = pm.response.json();',
        '    pm.expect(data.coordinates.latitude).to.be.a("number");',
        '    pm.expect(data.coordinates.longitude).to.be.a("number");',
        '});',
        '',
        'pm.test("Response time is under local budget", function () {',
        '    pm.expect(pm.response.responseTime).to.be.below(1200);',
        '});'
      ],
      sampleLabel: 'POSTMAN TEST EXECUTION: POSITIVE CONTRACT'
    },
    {
      type: 'paragraph',
      text: 'All four assertions pass! Postman validated that the status code is 200, the route matches `campus_loop_north`, the coordinates are numbers (preventing mobile map render crashes), and the response latency was well under our local testing budget.',
    },
    {
      type: 'heading',
      text: 'Step 6: Covering the Edge Cases: Empty Strings and Spaces Only',
    },
    {
      type: 'paragraph',
      text: 'In Chapter 2, we discovered that clients do not merely omit parameters: they can also send empty strings (`?route=`) and whitespace only (`?route=%20%20`). To ensure complete test coverage, we add two more requests to our collection reusing the exact same defensive assertions:',
    },
    {
      type: 'structured-breakdown',
      badge: 'EDGE CASE COVERAGE',
      title: 'The Complete Four Request Transit Suite',
      intro: 'Here is the full matrix of automated requests carried directly from Chapter 2:',
      categories: [
        {
          category: 'Request 01: Valid Route',
          subCategory: 'GET ...?route=campus_loop_north',
          title: 'Positive Contract Verification',
          explanation: 'Validates successful coordinate delivery for the mobile transit map.',
          points: [
            'Asserts status code 200 OK.',
            'Asserts route equals campus_loop_north and status equals in_transit.',
            'Asserts latitude and longitude are numbers.',
            'Asserts latency under 1200 ms.',
          ]
        },
        {
          category: 'Request 02: Missing Route',
          subCategory: 'GET .../coordinates',
          title: 'Negative Guard (Omitted Key)',
          explanation: 'Validates that an absent query string is rejected defensively without server crash.',
          points: [
            'Asserts status code 400 Bad Request.',
            'Asserts error message equals route parameter is required.',
          ]
        },
        {
          category: 'Request 03: Empty Route',
          subCategory: 'GET ...?route=',
          title: 'Negative Guard (Blank Value)',
          explanation: 'Validates that a present key with zero characters is rejected with 400.',
          points: [
            'Asserts status code 400 Bad Request.',
            'Asserts error message equals route parameter is required.',
          ]
        },
        {
          category: 'Request 04: Spaces Only',
          subCategory: 'GET ...?route=%20%20',
          title: 'Negative Guard (Whitespace Value)',
          explanation: 'Validates that URL encoded spaces are trimmed and rejected with 400.',
          points: [
            'Asserts status code 400 Bad Request.',
            'Asserts error message equals route parameter is required.',
          ]
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 7: Running the Entire Suite and Catching a Type Regression',
    },
    {
      type: 'paragraph',
      text: 'Rather than clicking Send manually on four separate requests, Postman allows you to run the entire collection in sequence using the **Collection Runner**.',
    },
    {
      type: 'paragraph',
      text: 'In the left sidebar, click the three dots icon next to your collection and select **Run collection**. Click **Run Zero to Agentic API Testing**. Postman executes all four requests sequentially, running all ten assertions in milliseconds:',
    },
    {
      type: 'terminal',
      command: 'Postman Collection Runner Summary Report',
      lines: [
        'Collection: Campus Transit Verification Suite',
        'Iterations: 1',
        'Requests: 4',
        'Assertions: 10',
        '-------------------------------------------------------',
        'PASS 01 Valid Route: Status code is 200 OK',
        'PASS 01 Valid Route: Route and status match contract',
        'PASS 01 Valid Route: Coordinates are valid numbers',
        'PASS 01 Valid Route: Response time is under local budget',
        'PASS 02 Missing Route: Missing route returns 400',
        'PASS 02 Missing Route: Missing route explains why',
        'PASS 03 Empty Route: Missing route returns 400',
        'PASS 03 Empty Route: Missing route explains why',
        'PASS 04 Spaces Only: Missing route returns 400',
        'PASS 04 Spaces Only: Missing route explains why',
        '-------------------------------------------------------',
        'Results: 10 passed, 0 failed, 0 skipped (duration: 86 ms)',
      ],
    },
    {
      type: 'paragraph',
      text: 'Now consider a real regression test: suppose a backend developer updates the database serializer and accidentally converts latitude into a string `"42.3601"` instead of a number `42.3601`. What happens when the collection runs?',
    },
    {
      type: 'terminal',
      command: 'Postman Collection Runner Type Regression Caught',
      lines: [
        'FAIL 01 Valid Route: Coordinates are valid numbers',
        '  AssertionError: expected \'42.3601\' to be a number',
        '-------------------------------------------------------',
        'Results: 9 passed, 1 failed, 0 skipped',
      ],
    },
    {
      type: 'paragraph',
      text: 'The suite immediately catches the defect! The red test warns the team before bad code reaches staging or production. Once the backend serializer is restored to return numbers, the test suite returns to all green.',
    },
    {
      type: 'heading',
      text: 'Step 8: Sourced Case Study: When Code Deploys Without Verification',
    },
    {
      type: 'source-note',
      label: 'Verified Historical Case Study · August 2012',
      claim: 'Knight Capital Group Incurs Over 460 Million Dollar Loss Following Unverified Deployment',
      url: 'https://www.sec.gov/files/litigation/admin/2013/34-70694.pdf',
      verifiedThrough: 'United States Securities and Exchange Commission (SEC) Release No. 34-70694'
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The Real World Cost of Missing Automated Release Checks: Knight Capital',
      paragraphs: [
        'On August 1, 2012, financial trading firm Knight Capital Group deployed updated order router code across eight servers. During the manual deployment, a technician failed to copy the new code to the eighth server, leaving an obsolete feature flag active on that single machine.',
        'When the market opened at 9:30 AM, the unverified server repurposed an obsolete order execution mechanism, processing millions of erroneous share transactions in 45 minutes.',
        'Because the engineering team lacked automated pre release verification suites to validate consistent server configurations and response behavior across all nodes before trading opened, the rogue server operated unnoticed until over 460 million dollars in losses had accumulated.',
        'The Architectural Lesson: Automated verification suites run continuously to catch configuration drift, unverified deployments, and unexpected contract changes before users or downstream services are impacted.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 9: Team Collaboration: Workspaces, Forks, and Pull Requests',
    },
    {
      type: 'paragraph',
      text: 'Now that you have built a working test collection, how do you share it across the engineering team without team members accidentally overwriting each other work?',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'TEAM COLLABORATION',
      title: 'Collaborative Testing Workflow: Forking Collections and Reviewing Pull Requests',
      text: 'Just like software developers use Git branches to write code safely, API testers use Postman Forks. You fork the parent collection into your personal workspace, add new assertions, and create a Pull Request for your peers to review before merging.',
      src: collaborationImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/postman-team-collaboration-fork-pr.jpg',
      w: 1408,
      h: 768,
      alt: 'Postman collaboration workflow showing parent collections, personal forks, and pull request reviews.',
      caption: 'Safe Collaboration: Forking the main collection, writing assertions, and merging through peer review.',
      points: [
        'Parent Collection: The single source of truth shared in the Team Workspace.',
        'Personal Fork: Your safe, private playground where you experiment and write new assertions without affecting teammates.',
        'Pull Request: A formal review request where teammates inspect your added tests before merging into the main collection.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 10: Final Understanding Gate: Independent Assertion Challenge',
    },
    {
      type: 'paragraph',
      text: 'Before moving into Chapter 4, test your understanding of assertion mechanics on a new scenario:',
    },
    {
      type: 'structured-breakdown',
      badge: 'UNDERSTANDING GATE',
      title: 'Independent Assertion Challenge',
      intro: 'Evaluate this new testing requirement:',
      categories: [
        {
          category: 'Challenge 1: Status Code Validation',
          subCategory: 'Status Guard',
          title: 'Why check status code before parsing JSON?',
          explanation: 'If a server crashes with an unhandled 500 error returning HTML or raw text, calling pm.response.json() throws a syntax error. Asserting pm.response.to.have.status() first ensures failures report meaningful status code differences.',
          points: [
            'Protects tests from crashing with JSON parser errors.',
            'Gives clear diagnostic messages in Test Results.',
          ]
        },
        {
          category: 'Challenge 2: Type Assertion',
          subCategory: 'Data Types',
          title: 'How do you verify speedMph is a number?',
          explanation: 'Write: pm.expect(data.speedMph).to.be.a("number"). This guarantees that calculations downstream will not encounter string concatenation bugs.',
          points: [
            'Chai type matchers: to.be.a("number"), to.be.a("string"), to.be.an("array").',
            'Prevents mobile mapping components from breaking.',
          ]
        },
        {
          category: 'Challenge 3: Dual Contract Principle',
          subCategory: 'Testing Strategy',
          title: 'Why are both 400 and 200 checks required in every regression suite?',
          explanation: 'Testing only 200 proves the feature works under ideal input, but leaves the system vulnerable to unhandled server crashes when invalid input arrives. Testing only 400 proves defensive error safety, but cannot confirm if real users receive valid data. You must test both to guarantee total system reliability.',
          points: [
            'Negative checks prevent unhandled 500 outages.',
            'Positive checks ensure business feature fulfillment.',
          ]
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 11: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'What happens when an assertion inside a pm.test block evaluates to false?',
      options: [
        'Postman automatically restarts your computer',
        'Postman marks that specific test as failed with a red indicator and prints the exact assertion difference in the console',
        'The entire Postman application deletes the collection',
        'The network server cancels all user accounts'
      ],
      answerIndex: 1,
      explain: 'When an assertion condition fails, Postman catches the AssertionError, flags the test with a red cross badge in the Test Results tab, and prints the expected vs actual value in the test report.'
    },
    {
      type: 'quiz',
      items: [
        [
          'What is the difference between a manual test and an automated API test?',
          'A manual test requires a human tester to click buttons, inspect screens, and verify status codes with their eyes. An automated API test executes in milliseconds using code assertions that run without human intervention.',
        ],
        [
          'In Postman, what is the role of the pm.response.json() method?',
          'It parses the incoming raw HTTP response body text and deserializes it into a traversable JavaScript object that can be queried and asserted.',
        ],
        [
          'Why should engineering teams use Postman Forks instead of editing the parent collection directly?',
          'Editing a shared team collection directly can disrupt ongoing automated builds and overwrite teammate changes. Forking provides an isolated workspace where tests can be developed safely and reviewed before merging.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'Postman provides a dedicated API testing cockpit combining collections, environment management, and JavaScript assertion sandboxes.',
        'Use pm.test() to define individual test cases, and pm.expect() to assert status codes, response times, and payload properties.',
        'The Chai assertion library powers expressive, readable assertions: such as to.have.status(200) and to.be.below(1200).',
        'Always verify red before green: a test must be proven capable of detecting real failures before trusting its green status.',
        'Team collaboration relies on forking collections and opening pull requests to review new test cases safely.',
      ],
    },
    {
      type: 'mission-accomplished',
      title: 'Mission 1 Completed: Transit Verification Watchdogs Active',
      text: 'You have automated both critical transit checks into repeatable JavaScript assertions: the negative check verifies 400 Bad Request to prevent 500 crashes, and the positive check validates 200 OK with numeric coordinates. These assertions now execute reliably in your local automated collection suite.'
    },
    {
      type: 'cliffhanger',
      title: 'Entering Mission 2: Automating Campus Library Services at Scale',
      text: 'Our shuttle bus is rolling and protected by automated tests. But across campus, the University Library catalog is about to launch! In Mission 2 (Chapters 4 through 8), we step up to multi request CRUD workflows: adding books, querying records, handling duplicate constraints, chaining dynamic IDs, and processing hundreds of records using Data Driven Testing with CSV spreadsheets!',
    },
  ],
}
