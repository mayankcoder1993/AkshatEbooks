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
      text: 'In Chapter 2, we investigated the campus transit crash and proved the solution by hand. But manual checking has a severe flaw: a human tester cannot sit at a screen clicking Send every fifteen seconds, especially during midnight deployments. If a backend engineer pushes an update that accidentally breaks the route parameter again, real students will be stranded at bus stops before anyone notices. In this chapter, we automate our manual checks into a repeatable Postman collection with JavaScript assertions that validate the wire in milliseconds.',
    },
    {
      type: 'heading',
      text: 'Step 1: The API Testing Workbench Cockpit',
    },
    {
      type: 'paragraph',
      text: 'Standard web browsers are designed for human browsing, not API automation. A browser address bar cannot run assertions, cannot chain variables between requests, and cannot execute automated regression suites. This is why professional quality engineers rely on an **API Testing Workbench** like Postman.',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'POSTMAN WORKBENCH',
      title: 'The Postman Testing Cockpit: Navigation, Request Builder, and Response Pane',
      text: 'Postman organizes your testing universe into three major zones: the left sidebar for Collections and Environments, the center top builder for URLs and Headers, and the bottom pane for live responses and assertion results.',
      src: workbenchImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/postman-workbench-overview.jpg',
      w: 1408,
      h: 768,
      alt: 'Postman user interface layout showing collections, request tabs, and test execution results.',
      caption: 'The Automation Cockpit: Collections on the left, request parameters on top, response data and test results on the bottom.',
      points: [
        'Left Sidebar: Houses Collections, Environments, and Mock Servers organized in logical folders.',
        'Top Center Pane: Where you configure HTTP methods, endpoints, authorization headers, and body payloads.',
        'Bottom Pane: Where the live server status code, response time, headers, body, and test results appear.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 2: The JavaScript Test Sandbox: pm.test and pm.expect',
    },
    {
      type: 'paragraph',
      text: 'Inside Postman, every request includes a dedicated tab labeled **Tests**. Code typed into this tab executes automatically in a secure JavaScript sandbox immediately after the server response arrives.',
    },
    {
      type: 'paragraph',
      text: 'Postman provides a global JavaScript object named **pm** that gives your test scripts complete access to the request and response packets. The testing syntax uses plain English matchers powered by the popular Chai assertion library:',
    },
    {
      type: 'definition',
      term: 'Test Assertion',
      text: 'A formal logical condition in code that compares an actual runtime value against an expected outcome. If the condition is true, the test passes with a green checkmark; if false, the test halts with an explicit error description.',
      example: 'pm.response.to.have.status(200) asserts that the server returned HTTP status code 200 OK.',
    },
    {
      type: 'heading',
      text: 'Step 3: Automating Both Manual Checks: Negative and Positive Assertions',
    },
    {
      type: 'paragraph',
      text: 'In Chapter 2, we performed two manual checks: first observing how an omitted parameter crashed the backend, and second verifying that a valid route returned coordinates. A thorough automation suite must automate both paths: a negative test to guarantee regressions never crash the server, and a positive test to verify functional correctness:',
    },
    {
      type: 'chunked-code',
      badge: 'AUTOMATION SCRIPT CHUNKS',
      title: 'The Campus Shuttle Automated Assertion Suite',
      intro: 'Study each assertion chunk and see how it translates our manual observations into automated guards:',
      chunks: [
        {
          label: 'Request 1: Negative Regression Assertion (Missing Route)',
          filename: 'negative_guard.js',
          code: 'pm.test("Omitted route returns 400 Bad Request", function () {\n    pm.response.to.have.status(400);\n});\n\npm.test("Error message guides the client", function () {\n    const data = pm.response.json();\n    pm.expect(data.error).to.include("route parameter is required");\n});',
          title: 'Guarding Against 500 Regressions',
          explanation: 'Validates that when route is omitted, the server returns 400 Bad Request rather than an uncaught 500 NullPointerException.',
          keyTakeaway: 'Automating negative error cases ensures backend code never regresses into unhandled crashes.'
        },
        {
          label: 'Request 2: Positive Contract Assertion (Valid Route)',
          filename: 'positive_contract.js',
          code: 'pm.test("Status code is 200 OK", function () {\n    pm.response.to.have.status(200);\n});\n\npm.test("Response time is under 500 ms", function () {\n    pm.expect(pm.response.responseTime).to.be.below(500);\n});\n\npm.test("Coordinates are valid numbers", function () {\n    const data = pm.response.json();\n    pm.expect(data.status).to.eql("in_transit");\n    pm.expect(data.coordinates.latitude).to.be.a("number");\n    pm.expect(data.coordinates.longitude).to.be.a("number");\n});',
          title: 'Verifying Functional Correctness',
          explanation: 'Asserts status 200 OK, latency under 500 ms, and confirms latitude and longitude are numbers rather than null or missing keys.',
          keyTakeaway: 'Deep property validation guarantees mobile mapping components receive valid coordinates.'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 4: Imagine and Predict the Test Result',
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'When we automate both requests into our Postman collection (the missing parameter test and the valid route test), what will the Test Results tab display?',
      options: [
        'All assertions pass: The negative check verifies 400 Bad Request with guidance, and the positive check verifies 200 OK with coordinates',
        'The negative check fails: Testing workbenches only support validating successful 200 OK responses',
        'The entire suite halts: JavaScript assertions cannot evaluate error messages or numbers',
        'Both calls timeout: API test suites require mobile phone emulators to run'
      ],
      answerIndex: 0,
      revealTitle: 'Automated Test Results Tab Confirmation',
      explanation: 'All assertions pass! Postman validates negative error handling (400 Bad Request) just as reliably as positive successful data flows (200 OK), giving complete coverage across both code paths.'
    },
    {
      type: 'heading',
      text: 'Step 5: Executing the Suite Live in the Workbench',
    },
    {
      type: 'paragraph',
      text: 'Here is the automated execution of the positive shuttle call in our API workbench. Notice the Test Results tab: our assertions validate the server contract automatically:',
    },
    {
      type: 'api-inspector',
      title: 'Automated Postman Suite: Campus Shuttle Locator',
      method: 'GET',
      url: 'https://api.campustransit.org/v1/campus/shuttle/coordinates?route=campus_loop_north',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer campus_student_tok_9918'
      },
      status: '200 OK',
      time: '38 ms',
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
        'Response time is under 500 ms latency budget',
        'Shuttle coordinates are valid numbers'
      ],
      testScript: [
        'pm.test("Status code is 200 OK", function () {',
        '    pm.response.to.have.status(200);',
        '});',
        '',
        'pm.test("Response time is under 500 ms", function () {',
        '    pm.expect(pm.response.responseTime).to.be.below(500);',
        '});',
        '',
        'pm.test("Shuttle coordinates are valid numbers", function () {',
        '    const data = pm.response.json();',
        '    pm.expect(data.status).to.eql("in_transit");',
        '    pm.expect(data.coordinates.latitude).to.be.a("number");',
        '    pm.expect(data.coordinates.longitude).to.be.a("number");',
        '});'
      ]
    },
    {
      type: 'heading',
      text: 'Step 6: Sourced Case Study: When Code Deploys Without Verification',
    },
    {
      type: 'source-note',
      label: 'Verified Historical Case Study · August 2012',
      claim: 'Knight Capital Group Incurs 440 Million Dollar Loss Following Unverified Deployment',
      url: 'https://www.sec.gov/litigation/admin/2013/34-70694.pdf',
      verifiedThrough: 'United States Securities and Exchange Commission (SEC) Administrative Proceeding File No. 3-15570'
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The Real World Cost of Missing Automated Release Checks: Knight Capital',
      paragraphs: [
        'On August 1, 2012, financial trading firm Knight Capital Group deployed updated order router code across eight servers. During the manual deployment, a technician failed to copy the new code to the eighth server, leaving an obsolete feature flag active on that single machine.',
        'When the market opened at 9:30 AM, the unverified server repurposed an obsolete order execution mechanism, processing millions of erroneous share transactions in 45 minutes.',
        'Because the engineering team lacked automated pre release verification suites to validate consistent server configurations and response behavior across all nodes before trading opened, the rogue server operated unnoticed until 440 million dollars in losses had accumulated.',
        'The Architectural Lesson: Automated verification suites run continuously to catch configuration drift, unverified deployments, and unexpected contract changes before users or downstream services are impacted.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 7: Team Collaboration: Workspaces, Forks, and Pull Requests',
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
      text: 'Step 8: Review and Practice',
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
        'The Chai assertion library powers expressive, readable assertions: such as to.have.status(200) and to.be.below(500).',
        'Team collaboration relies on forking collections and opening pull requests to review new test cases safely.',
      ],
    },
    {
      type: 'mission-accomplished',
      title: 'Mission 1 Completed: Transit Verification Watchdogs Active',
      text: 'You have automated both critical transit checks into repeatable JavaScript assertions: the negative check verifies 400 Bad Request to prevent 500 crashes, and the positive check validates 200 OK with numeric coordinates. These assertions now execute on every deployment.'
    },
    {
      type: 'cliffhanger',
      title: 'Entering Mission 2: Automating Campus Library Services at Scale',
      text: 'Our shuttle bus is rolling and protected by automated tests. But across campus, the University Library catalog is about to launch! In Mission 2 (Chapters 4 through 8), we step up to multi request CRUD workflows: adding books, querying records, handling duplicate constraints, chaining dynamic IDs, and processing hundreds of records using Data Driven Testing with CSV spreadsheets!',
    },
  ],
}
