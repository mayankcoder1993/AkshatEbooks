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
      text: 'Step 3: Chunking the Automation Test Script',
    },
    {
      type: 'paragraph',
      text: 'Let us take the exact manual observations we made in Chapter 2 and convert them into three automated assertion chunks:',
    },
    {
      type: 'chunked-code',
      badge: 'AUTOMATION SCRIPT CHUNKS',
      title: 'The Campus Shuttle Automated Assertion Suite',
      intro: 'Study each assertion chunk and see how it mirrors what our eyes inspected by hand:',
      chunks: [
        {
          label: 'Chunk 1: Status Code Assertion',
          filename: 'status_check.js',
          code: 'pm.test("Status code is 200 OK", function () {\n    pm.response.to.have.status(200);\n});',
          title: 'Verifying HTTP Status',
          explanation: 'Replaces our manual check of the status pill. If the server crashes with 500 or returns 404, this assertion instantly fails with a red badge.',
          keyTakeaway: 'Always verify status code first before parsing response body properties.'
        },
        {
          label: 'Chunk 2: Response Time Latency Check',
          filename: 'latency_check.js',
          code: 'pm.test("Response time is under 500 ms", function () {\n    pm.expect(pm.response.responseTime).to.be.below(500);\n});',
          title: 'Enforcing Performance Budgets',
          explanation: 'Human eyes cannot reliably notice whether a server answered in 120 ms or 800 ms. This script ensures the server responds within half a second.',
          keyTakeaway: 'Performance budgets prevent slow database queries from creeping into production.'
        },
        {
          label: 'Chunk 3: Data Integrity and Coordinate Validation',
          filename: 'payload_check.js',
          code: 'pm.test("Shuttle coordinates are valid numbers", function () {\n    const data = pm.response.json();\n    pm.expect(data.status).to.eql("in_transit");\n    pm.expect(data.coordinates.latitude).to.be.a("number");\n    pm.expect(data.coordinates.longitude).to.be.a("number");\n});',
          title: 'Validating JSON Payload Structure',
          explanation: 'Parses the response JSON text into a JavaScript object and validates that latitude and longitude are real numbers, not null strings.',
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
      prompt: 'When we send the corrected request (GET /v1/campus/shuttle/coordinates?route=campus_loop_north) and execute these three assertion chunks, what will appear in the Postman Test Results tab?',
      options: [
        'PASS 3 of 3: Three green checkmarks confirming status 200, latency under 500 ms, and valid numeric coordinates',
        'FAIL: Because JavaScript requires variables to be declared in uppercase letters',
        'ERROR: Because Postman cannot inspect JSON numbers inside response objects',
        'TIMEOUT: Because assertions delay network transmission by sixty seconds'
      ],
      answerIndex: 0,
      revealTitle: 'Automated Test Results Tab Confirmation',
      explanation: 'All three assertions pass with bright green checkmarks! Postman evaluated the status code, confirmed the response time was 38 ms (well below 500 ms), and verified that latitude and longitude were valid floating point numbers!'
    },
    {
      type: 'heading',
      text: 'Step 5: Executing the Suite Live in the Workbench',
    },
    {
      type: 'paragraph',
      text: 'Here is the complete automated execution in our API workbench. Notice the Test Results tab: our three assertions validate the server contract automatically:',
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
      claim: 'Knight Capital Group Suffers 440 Million Dollar Loss in 45 Minutes Due to Unverified Deployment',
      url: 'https://www.sec.gov/litigation/admin/2013/34-70694.pdf',
      verifiedThrough: 'United States Securities and Exchange Commission (SEC) Administrative Proceeding'
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The Catastrophic Cost of Missing Automated Verification: Knight Capital',
      paragraphs: [
        'On August 1, 2012, financial trading firm Knight Capital Group deployed an update to eight servers. A technician mistakenly failed to copy the new software to the eighth server, leaving an obsolete flag active.',
        'When the market opened at 9:30 AM, the unverified server entered an infinite loop: executing millions of unintended high speed stock trades. Because the team had no automated post deployment verification tests running against the live cluster, the rogue server traded for 45 minutes straight.',
        'By the time engineers halted the system, the firm had accumulated a staggering loss of 440 million dollars, forcing the company into emergency acquisition.',
        'The Lesson: Automated API test suites are not optional luxuries. They are automated safety shields that run on every code release to ensure broken code never runs unchecked.',
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
      type: 'victory-milestone',
      badge: 'MISSION 1 ACCOMPLISHED · PROTOCOL & WORKBENCH CLEARED',
      rank: 'FOUNDATIONAL API AUTOMATION ENGINEER',
      title: 'Mission 1 Accomplished: Transit Crisis Resolved and Automated Watchdogs Deployed',
      summary: 'You have conquered Mission 1! You took on the launch day transit crisis, rejected finger pointing, investigated the failing shuttle locator call directly on the wire, proved the exact 500 error cause by hand, verified the manual fix, and automated the entire validation into a repeatable Postman collection with JavaScript assertions.',
      powers: [
        'Decoding HTTP wire messages into methods, endpoints, headers, and payloads with complete confidence',
        'Distinguishing client errors (4xx) from server crashes (5xx) using the five status code families',
        'Writing automated JavaScript assertions in Postman using pm.test and pm.expect',
        'Validating latency budgets and deep JSON coordinate properties directly over the wire',
      ],
      disastersPrevented: [
        'Eliminated the deadlock between mobile and backend teams by providing undeniable wire evidence',
        'Prevented recurring transit crashes on future releases by deploying automated test watchdogs',
        'Protected the team from unverified deployment catastrophes like the 2012 Knight Capital disaster',
      ],
      warRoomTakeaway: 'You started with zero API knowledge. Now you have investigated a live production crash, proved the fix by hand, and automated the verification in code. Mission 1 is officially conquered!',
    },
    {
      type: 'cliffhanger',
      title: 'Entering Mission 2: Automating Campus Library Services at Scale',
      text: 'Our shuttle bus is rolling and protected by automated tests. But across campus, the University Library catalog is about to launch! In Mission 2 (Chapters 4 through 8), we step up to multi request CRUD workflows: adding books, querying records, handling duplicate constraints, chaining dynamic IDs, and processing hundreds of records using Data Driven Testing with CSV spreadsheets!',
    },
  ],
}
