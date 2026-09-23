import cicdGateImg from '../assets/enterprise-cicd-quality-gate.jpg'
import resilienceImg from '../assets/api-resilience-error-handling.jpg'

export const lesson09 = {
  id: 'error-handling-resilience',
  icon: '',
  title: 'Advanced Error Handling and Resilience Testing',
  shortTitle: 'Error Handling',
  subtitle: 'Negative testing matrix, safe JSON parsing, preventing secret leaks, and self healing workflow loops.',
  tags: ['Error Handling', 'Negative Testing', 'Try Catch', 'Resilience', 'Workflow Control'],
  blocks: [
    {
      type: 'mission-hud',
      mission: 'Mission 3: Hardening for Enterprise Production and CI CD',
      phase: 'Phase 1 of 5: Negative Testing & Safe Parsing',
      rank: 'Rank: Resilience Systems Engineer',
      status: 'ACTIVE'
    },
    {
      type: 'chapter-opener',
      achieve: 'Harden test suites against real world production instability by constructing negative test matrices, implementing defensive parsing, and writing bounded self healing workflows.',
      how: 'Test boundary and error status codes, safeguard JSON deserialization against HTML gateway crashes with try catch, verify data leak shields, and control execution flow safely.',
      carry: 'Defensive parsing and bounded retry mechanics that prepare your test suites for mock simulation in Chapter 10 and OAuth 2.0 flows in Chapter 11.'
    },
    {
      type: 'mission',
      title: 'Mission 3: Hardening for Enterprise Production and CI CD',
      text: 'Our library automation runs smoothly on happy paths. But real world production systems operate in an unpredictable environment: users submit blank forms, network connections drop, authentication tokens expire, and duplicate records collide in the database. If an API returns a generic 500 error instead of a helpful 400 Bad Request, or leaks database passwords in a crash stack trace, the application is fragile and insecure. As Lead Quality Architect, your mission is to harden our test suite to ensure systems fail safely and withstand hostile production edge cases.',
      image: {
        src: cicdGateImg,
        file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/enterprise-cicd-quality-gate.jpg',
        w: 1408,
        h: 768,
        alt: 'Enterprise operations command center during midnight deployment showing CI CD deployment gate with green pass shields.',
        caption: 'The Midnight Operations Center: Protecting campus services with automated safety checks.',
        points: [
          'Stress Testing: Checking what happens when users enter bad data or lose their internet connection.',
          'Hands Free Automation: Running all checks automatically in the background without needing a person to click buttons.',
          'Safety Shield: Catching password leaks and server crashes before real students ever see them.',
        ],
      },
      weKnow: [
        'Bugs overwhelmingly hide in negative scenarios and edge cases rather than happy paths.',
        'Calling pm.response.json() directly will crash your test script if the server returns an HTML error page.',
        'APIs must return standard 4xx error codes with structured messages without leaking sensitive backend details.',
      ],
      weNeed: [
        'A comprehensive Negative Testing Matrix covering 400, 401, 403, 404, 409, 429, and 500.',
        'A defensive try catch pattern that safely inspects responses without crashing the test runner.',
        'A security assertion ensuring that crash responses never expose passwords, tokens, or SQL stack traces.',
        'A self healing retry workflow using collection flags and postman.setNextRequest to resolve duplicate collisions.',
      ],
    },
    {
      type: 'battle-plan',
      badge: 'TACTICAL MISSION ROADMAP',
      title: 'How We Will Approach Mission 3: The 5 Phase Battle Plan',
      intro: 'Hardening an API ecosystem for production continuous integration requires systematic resilience verification across five structured phases:',
      phases: [
        {
          phase: 'Phase 1',
          timing: 'Chapter 9 · Right Now',
          title: 'Resilience and Safe Parsing',
          status: 'active',
          desc: 'We construct a negative testing matrix, implement try catch wrappers against non JSON 500 error pages, and build self healing recovery workflows.',
          outcome: 'Zero unhandled test crashes; your automated suites withstand HTML failure pages gracefully.'
        },
        {
          phase: 'Phase 2',
          timing: 'Chapter 10 · Next Step',
          title: 'Mock Servers and Schema Contracts',
          status: 'upcoming',
          desc: 'We decouple frontend and backend teams by simulating endpoints with Postman Mock Servers and validating contracts with JSON Schema.',
          outcome: 'Parallel agile team development without waiting for backend microservices to be coded.'
        },
        {
          phase: 'Phase 3',
          timing: 'Chapter 11 · Identity Protocols',
          title: 'OAuth 2.0 Token Handshake',
          status: 'upcoming',
          desc: 'We automate two legged and three legged OAuth 2.0 token handshakes, capturing Bearer access tokens dynamically for enterprise calls.',
          outcome: 'Secure zero trust API authorization automated seamlessly across test pipelines.'
        },
        {
          phase: 'Phase 4',
          timing: 'Chapter 12 · Legacy Integration',
          title: 'SOAP WebServices and XML',
          status: 'upcoming',
          desc: 'We master legacy enterprise protocols by crafting SOAP 1.2 XML envelopes and converting raw XML payloads into clean JavaScript objects.',
          outcome: 'Full capability to test banking, government, and enterprise legacy systems.'
        },
        {
          phase: 'Phase 5',
          timing: 'Chapter 13 · Mission Victory',
          title: 'Headless Newman and CI CD',
          status: 'upcoming',
          desc: 'We execute collections in terminal pipelines using Newman, publish HTML dashboards, and configure automated GitHub Actions quality gates.',
          outcome: 'Mission 3 Cleared! Autonomous enterprise quality gate guarding production deployments.'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 1: The Production Negative Testing Matrix',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'RESILIENCE MATRIX',
      title: 'Defensive API Testing: The Negative and Edge Case Resilience Matrix',
      text: 'Professional API test architects design negative and edge case suites to prove that systems fail safely. The Production Negative Testing Matrix categorizes critical defense vectors: invalid inputs, boundary violations, authentication denial, and graceful error responses.',
      src: resilienceImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-resilience-error-handling.jpg',
      w: 1408,
      h: 768,
      alt: 'Negative testing matrix showing 400 Bad Request, 401 Unauthorized, 404 Not Found, 429 Rate Limit, and 500 Server Error cards with try catch workflow.',
      caption: 'The core error testing matrix and defensive assertion architecture.',
      points: [
        'Client Validation Errors (400 or 422): Missing required fields, wrong data types, or out of range values.',
        'Security Errors (401 and 403): Missing or expired authentication tokens (401), or insufficient user permissions (403).',
        'State Conflicts (404 and 409): Querying missing resource IDs (404), or duplicate records colliding in the database (409).',
        'Throughput & Resilience (429 and 500): Rate limit throttling (429), and catching unhandled server exceptions (500).',
      ],
    },
    {
      type: 'heading',
      text: 'Step 2: Defensive Scripting: Safe Parsing with Try Catch',
    },
    {
      type: 'paragraph',
      text: 'When servers crash or time out, gateways like Nginx or cloud load balancers return raw HTML error pages rather than JSON. Attempting to parse HTML as JSON throws a fatal SyntaxError unless guarded by a defensive try catch block. We chunk this defensive pattern into three architectural layers:',
    },
    {
      type: 'chunked-code',
      badge: 'DEFENSIVE SCRIPT CHUNKS',
      title: 'Resilient Error Parsing Architecture',
      intro: 'Guards against fatal crashes on HTML server pages:',
      chunks: [
        {
          label: 'Chunk 1: Guarded Parsing',
          filename: 'try-catch-guard.js',
          code: 'let parsedBody = null;\ntry {\n    parsedBody = pm.response.json();\n} catch (exception) {\n    console.warn("Non JSON response: " + exception.message);\n    parsedBody = null;\n}',
          title: 'Guarding Against Crash Pages',
          explanation: 'Wraps the parser in a try catch block. If the server returns HTML, the exception is caught safely without aborting the runner.',
          keyTakeaway: 'Always catch parsing errors when testing failure endpoints.'
        },
        {
          label: 'Chunk 2: Format Contract Assertion',
          filename: 'format-assertion.js',
          code: 'pm.test("Response arrives in valid JSON format", function () {\n    pm.expect(parsedBody, "Parsed JSON body").to.not.equal(null);\n});',
          title: 'Asserting Content Type Compliance',
          explanation: 'Formally reports a failed test if the response was not valid JSON, giving clear error logs in the test report.',
          keyTakeaway: 'Report formatting failures as structured test failures rather than unhandled script crashes.'
        },
        {
          label: 'Chunk 3: Security Leak Scanner',
          filename: 'security-scan.js',
          code: 'pm.test("Response does not leak database secrets", function () {\n    const rawText = pm.response.text();\n    pm.expect(rawText).to.not.match(/password|SQLException|stack trace/i);\n});',
          title: 'Preventing Credential Leaks',
          explanation: 'Scans raw response text to ensure backend database table names, SQL queries, or passwords never reach clients.',
          keyTakeaway: 'Automated security assertions prevent dangerous internal leaks to third parties.'
        }
      ]
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'If an upstream server crashes and returns an HTML page starting with <!DOCTYPE html>, what will happen if your script calls pm.response.json() without a try catch wrapper?',
      options: [
        'Postman throws a fatal JSONError SyntaxError and crashes the test execution',
        'Postman automatically translates the HTML into a JSON object',
        'Postman returns undefined and continues running smoothly',
        'Postman reboots the remote server'
      ],
      answerIndex: 0,
      revealTitle: 'Unguarded JSON Parsing Crash Confirmation',
      explanation: 'Fatal JSONError halts execution! The JavaScript JSON parser expects braces { } or brackets [ ]. When it encounters the HTML tag <, it throws an unhandled SyntaxError that halts the remaining tests in that request. A try catch block prevents this crash!'
    },
    {
      type: 'heading',
      text: 'Step 3: Beware of Soft Errors (Status 200 with Error Content)',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Fresher Trap to Avoid: Believing Status 200 Always Means Success',
      paragraphs: [
        'A soft error occurs when a developer configures an endpoint to return HTTP 200 OK, but the JSON payload body says: `{"status": "failed", "message": "Record not found"}`.',
        'If your automated test only asserts `pm.response.to.have.status(200)`, your test suite will report GREEN PASS even though the business transaction completely failed!',
        'Always combine status code assertions with body message assertions to protect against deceptive soft errors.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 4: Self Healing Workflows: Handling Duplicate Collisions',
    },
    {
      type: 'paragraph',
      text: 'What happens if a test run is aborted midway, leaving a book record stuck in the database? On the next run, AddBook fails with {"msg": "Book already exists"}. We write an intelligent, bounded self healing script using collection variables and `postman.setNextRequest`:',
    },
    {
      type: 'code',
      filename: 'self-healing-retry-workflow.js',
      lines: [
        'let responseJson = {};',
        'try {',
        '    responseJson = pm.response.json();',
        '} catch (err) {',
        '    responseJson = {};',
        '}',
        '',
        'const maxRetries = 2;',
        'let retryCount = Number(pm.collectionVariables.get("retry_count") || 0);',
        '',
        '// Exact match on canonical duplicate error contract',
        'if (responseJson.msg === "Book already exists") {',
        '    if (retryCount < maxRetries) {',
        '        retryCount += 1;',
        '        pm.collectionVariables.set("retry_count", retryCount);',
        '        console.log("Collision detected! Attempt " + retryCount + " of " + maxRetries + ". Triggering DeleteBook cleanup...");',
        '        postman.setNextRequest("Delete Book");',
        '    } else {',
        '        pm.collectionVariables.set("retry_count", 0);',
        '        postman.setNextRequest(null);',
        '        pm.expect.fail("Max retries exceeded: duplicate record persistent after cleanup attempts");',
        '    }',
        '} else {',
        '    pm.collectionVariables.set("retry_count", 0);',
        '    pm.test("Book added successfully", function () {',
        '        pm.response.to.have.status(200);',
        '        pm.expect(responseJson.Msg).to.eql("successfully added");',
        '    });',
        '}',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The Bounded Loop Rule: Preventing Infinite CI CD Hangs',
      paragraphs: [
        'Never call postman.setNextRequest without a bounded counter like retryCount.',
        'If an automated script loops unconditionally on an unexpected database state, Postman or Newman will ping the server endlessly until the CI build times out after an hour.',
        'Always establish a hard ceiling (such as 2 or 3 retries) and explicitly call postman.setNextRequest(null) or pm.expect.fail() when the ceiling is reached.',
      ],
    },
    {
      type: 'battle-scar',
      metric: 'Critical Credential Leak Outage',
      title: 'The Database Stack Trace Leak: When an Uncaught 500 Exposed Root Credentials',
      context: 'A financial payment processing platform deployed a microservice that failed to implement global exception handling. When automated tests flooded the endpoint with malformed payloads, the backend threw an unhandled SQL syntax error. Instead of returning a sterile JSON error message, the web framework printed a 120 line raw stack trace containing the internal database hostname, database username, and unmasked connection string password. Security researchers discovered the flaw within three hours of release.',
      takeaway: 'Never permit backend stack traces or database connection strings to leak to clients. Always write automated security assertions in Postman verifying that error responses do not contain keywords like "SQLException", "password", or "traceback".'
    },
    {
      type: 'triage',
      title: 'War Room Triage: The Fatal SyntaxError on Server Crash Pages',
      scenario: 'During midnight CI regression, the upstream gateway crashes and returns an HTML 502 Bad Gateway page. Your test script executes: const data = pm.response.json(). The test runner halts immediately with: "JSONError: Unexpected token < in JSON at position 0". How do you safeguard your assertion suite from crashing?',
      options: [
        'Change the request method from POST to GET.',
        'Wrap the JSON parsing call in a try catch block and assert status code before attempting to inspect properties.',
        'Increase the request timeout in Postman settings to 60 seconds.',
        'Convert the HTML page to XML inside the Pre request script.'
      ],
      answerIndex: 1,
      debrief: 'Defensive parsing saves automation suites! When an upstream proxy fails, it returns an HTML document starting with <!DOCTYPE html>. Calling pm.response.json() throws a fatal SyntaxError because HTML cannot be parsed as JSON. Wrapping parsing in a try catch block or checking the response Content Type keeps the runner alive!',
      traps: [
        'Changing the HTTP method does not fix gateway crash parsing.',
        '',
        'Increasing timeout does not prevent non JSON responses.',
        'Pre request scripts run before response arrival and cannot alter server response types.'
      ]
    },
    {
      type: 'heading',
      text: 'Step 5: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'Why should you wrap pm.response.json() in a try catch block when testing error scenarios?',
      options: [
        'Because try catch makes the network call run faster',
        'Because server errors (such as 502 or 503) often return HTML pages that cause pm.response.json() to throw a SyntaxError and crash the test suite',
        'Because Postman requires try catch for all HTTP GET requests',
        'Because try catch automatically encrypts the response',
      ],
      answerIndex: 1,
      explain: 'When servers crash or time out, gateways like Nginx or cloud load balancers return raw HTML error pages. Attempting to parse HTML as JSON throws a fatal SyntaxError unless guarded by try catch.',
    },
    {
      type: 'quiz',
      items: [
        [
          'What is a soft error in API testing?',
          'A soft error happens when an endpoint incorrectly returns a 200 OK status code despite the business action failing. Testers must inspect body properties to catch them.',
        ],
        [
          'Why must API tests assert that response bodies never leak database stack traces?',
          'Stack traces expose database table names, SQL query syntax, and server file paths to potential attackers, creating serious security vulnerabilities.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'Negative testing validates that APIs fail safely, return correct 4xx codes, and never crash with unhandled 500 exceptions.',
        'Use defensive try catch blocks around pm.response.json() to handle HTML error pages gracefully.',
        'Assert both status codes and response body fields to detect deceptive soft errors.',
        'Use collection state flags and postman.setNextRequest() to build self healing test workflows.',
      ],
    },
    {
      type: 'victory-milestone',
      badge: 'MISSION 3 PHASE 1 CLEARED',
      rank: 'ENTERPRISE RESILIENCE SPECIALIST',
      title: 'Architectural Triumph: Production Negative Matrix & Defensive Resilience Mastered',
      summary: 'You moved beyond fragile happy paths into battle hardened production engineering. You mastered the comprehensive negative testing matrix (400, 401, 403, 404, 409, 429, 500), shielded your test runner with defensive try catch deserialization, intercepted dangerous soft 200 failures, and engineered self healing recovery loops.',
      powers: [
        'Deploying the complete production negative testing matrix to guarantee graceful backend failure modes',
        'Defensive JavaScript scripting: safe try catch parsing that survives raw HTML cloud gateway crashes',
        'Exposing deceptive soft 200 errors by coupling HTTP status assertions with payload business status checks',
        'Security auditing: intercepting database stack traces, SQL syntax leaks, and internal file path disclosures',
        'Engineering self healing test loops using collection flags and dynamic workflow redirection',
      ],
      disastersPrevented: [
        'Prevented severe security vulnerabilities where SQL error traces leak database schemas to malicious actors',
        'Stopped critical false positive passes where tests report green on failed business transactions',
        'Eliminated brittle CI test suite crashes caused by unhandled load balancer HTML timeout pages',
      ],
      warRoomTakeaway: 'Any junior tester can verify that a system works when everything is perfect. A true lead automation architect proves that the system stands tall, refuses to leak secrets, and recovers automatically when everything goes wrong.',
    },
    {
      type: 'cliffhanger',
      title: 'Continuing Mission 3: Postman Mock Servers and Contracts',
      text: 'Our test suite is resilient and self healing. In Chapter 10, we advance into Postman Mock Servers and JSON Schema Contracts: validating structural data integrity before servers even exist, simulating dependencies, and unblocking parallel QA workflows in Agile sprints!',
    },
  ],
}
