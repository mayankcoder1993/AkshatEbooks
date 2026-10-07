import resilienceImg from '../assets/api-resilience-error-handling.jpg'
import warRoomWideImg from '../assets/apex-campus-crisis-war-room.jpg'
import warRoomPanel1Img from '../assets/war-room-panel-1-the-crisis.jpg'
import warRoomPanel2Img from '../assets/war-room-panel-2-the-standoff.jpg'
import warRoomPanel3Img from '../assets/war-room-panel-3-invisible-wire.jpg'
import warRoomPanel4Img from '../assets/war-room-panel-4-first-principles.jpg'

export const lesson09 = {
  id: 'error-handling-resilience',
  icon: '',
  title: 'Advanced Error Handling and Resilience Testing',
  shortTitle: 'Error Handling and Resilience',
  subtitle: 'Negative testing matrix, safe JSON parsing, preventing secret leaks, and self healing workflow loops.',
  tags: ['Error Handling', 'Negative Testing', 'Resilience', 'Retry Loop', 'Log Sanitization', 'Try Catch'],
  blocks: [
    {
      type: 'mission-hud',
      mission: 'Mission 3: Enterprise Quality Engineering & Resilience Testing',
      phase: 'Phase 1 of 5: Negative Matrix & Self Healing Loops',
      rank: 'Rank: Resilience Systems Architect',
      status: 'ACTIVE'
    },
    {
      type: 'chapter-opener',
      missionBadge: 'MISSION 3 · PHASE 1 OF 5',
      missionTitle: 'Enterprise Quality Engineering & Resilience Testing',
      missionCrisis: 'The Flash Sale Ticket Inventory Underflow Emergency',
      missionContext: 'At 03:15 AM in the Apex Campus Ticketing and Commerce Control Center, amber warning beacons sweep across server racks as student traffic spikes to 12,000 requests per second. The live inventory counter drops to -42: the database has oversold venue capacity. Existing tests all returned green 200 OK because they only tested happy paths. Upstream gateways drop into 502 HTML errors, crashing parsers.',
      missionObjective: 'Construct the comprehensive Negative Testing Matrix across six HTTP status codes, implement defensive try catch JSON parsing, sanitize sensitive log credentials, and build bounded self healing retry loops.',
      targetSystems: 'API Testing Workbench Resilience Engine · Express Error Middleware · V8 Try Catch Parser · Exponential Backoff Runner',
      difficulty: 'INTERMEDIATE',
      estimatedTime: '30 MINUTES',
      prerequisites: 'Chapter 08: Data Driven Testing with External Data Files'
    },
    {
      type: 'mission-tracker',
      currentPhase: 'Phase 1: Negative Matrix & Self Healing Loops',
      totalPhases: 5,
      completedSteps: [
        'Data Driven Testing with External Data Files (Chapter 08)'
      ],
      currentStep: 'Advanced Error Handling and Resilience Testing',
      upcomingSteps: [
        'Postman Mock Servers and JSON Schema Contracts (Chapter 10)'
      ]
    },

    // =========================================================================
    // GRAPHIC COMIC ARC : SIX SCENES FROM MASTER STORY LEDGER
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC : SIX SCENES',
      title: 'The Negative Forty Two Crash and the Self Healing Wire',
      intro: 'Follow apprentice Akshay, Principal Systems Architect Sameer, and Frontend Lead Ananya in the Ticketing War Room as flash sale traffic breaches inventory, raw HTML 502 errors crash test scripts, and the Negative Testing Matrix restores production sanity.',
      panels: [
        {
          title: 'Scene 1: 03:15 AM: Ticketing War Room and the Negative Forty Two Crisis',
          time: '03:15 AM',
          layout: 'duo',
          image: {
            src: warRoomWideImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay and Sameer in the Ticketing War Room as amber alarms illuminate massive traffic spikes.',
            caption: 'Ticketing War Room: Amber beacons sweep server racks as 12,000 students hit the ticketing gateway.'
          },
          replyImage: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Live inventory counter flashing Remaining Passes: -42 in bold red numerals.',
            caption: 'Inventory Underflow: Venue capacity oversold by 42 passes due to unasserted race conditions.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'The sale is sixty seconds old! Inventory counter is negative forty two! How did all ten tests pass green?',
            replySpeaker: 'Sameer',
            replySpeech: 'You tested the happy path. Stress, malice, and concurrency walked free without a single assertion.'
          },
          scene: 'At 03:15 AM, twelve thousand students click buy simultaneously for the campus cultural festival pass. The inventory count plunges past zero to negative forty two. Akshay is baffled because all ten automated tests passed green.',
          realization: 'Testing only happy paths creates a false sense of security while critical race conditions breach production.'
        },
        {
          title: 'Scene 2: 03:23 AM: The Negative Testing Matrix: Six Refusal Codes',
          time: '03:23 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-2-the-standoff.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer sketching the six refusal codes on the glass whiteboard.',
            caption: 'The Negative Testing Matrix: 400 malformed, 401 unauthorized, 403 forbidden, 404 not found, 429 throttled, 500 error.'
          },
          replyImage: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay verifying status code assertions against the whiteboard matrix.',
            caption: 'First Principles: Every refusal code must owe the test suite a distinct passing assertion.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'Six refusals: 400, 401, 403, 404, 429, 500. Each one owes us an assertion before this night ends.',
            replySpeaker: 'Akshay',
            replySpeech: 'Zero tickets ordered returned 200 OK! It never validated quantity! Testing 400 Bad Request now!'
          },
          scene: 'Sameer outlines the Negative Testing Matrix on the glass whiteboard. When Akshay tests ordering zero tickets, the server returns 200 OK and deducts nothing. Akshay immediately writes an assertion verifying 400 Bad Request.',
          realization: 'A resilient test suite must assert every refusal code an API can return to guard against business logic flaws.'
        },
        {
          title: 'Scene 3: 03:29 AM: Gateway Failure and the 502 HTML SyntaxError Crash',
          time: '03:29 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Terminal screen showing unhandled SyntaxError: Unexpected token < in JSON at position 0.',
            caption: 'Parser Catastrophe: Unhandled JSON parse crash when upstream gateway responds with raw HTML.'
          },
          replyImage: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Ananya pointing to upstream payment gateway dropping socket connection.',
            caption: 'Upstream Gateway Drop: Nginx and edge proxies return HTML error pages on gateway failure.'
          },
          dialogue: {
            speaker: 'Ananya',
            speech: 'Payment gateway dropped connection! Server returned 502 Bad Gateway with raw HTML text!',
            replySpeaker: 'Akshay',
            replySpeech: 'SyntaxError: Unexpected token less than in JSON! The entire test suite crashed on line 3!'
          },
          scene: 'An upstream payment gateway drops connection. The proxy returns a 502 Bad Gateway with raw HTML text. Akshay’s test script calls pm.response.json() directly, throwing an unhandled SyntaxError that halts the entire test suite.',
          realization: 'Never assume response bodies are JSON; wrap deserialization in defensive try catch blocks to survive edge failures.'
        },
        {
          title: 'Scene 4: 03:35 AM: Defensive Try Catch Parsing: Surviving Non JSON Payloads',
          time: '03:35 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay implementing try catch block wrapping pm.response.json in the Tests editor.',
            caption: 'Defensive Deserialization: Gracefully catching non-JSON payloads without terminating test execution.'
          },
          replyImage: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer pointing to clean execution trace continuing past 502 response.',
            caption: 'Resilient Runner: Test suite verifies 502 status code while preserving suite execution continuity.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'Wrap JSON parsing in try catch. When proxies serve HTML, capture the status without killing the runner.',
            replySpeaker: 'Akshay',
            replySpeech: 'try { res = pm.response.json(); } catch { res = null; } The 502 status asserted cleanly!'
          },
          scene: 'Akshay wraps the deserialization in a defensive try catch block. If JSON parsing fails, the script falls back to null and inspects status codes and raw text. The test suite asserts the 502 status gracefully.',
          realization: 'Defensive parsing protects test runners from abrupt failure when edge proxies return HTML error pages.'
        },
        {
          title: 'Scene 5: 03:41 AM: CI Credential Leak and the Console Log Sanitizer',
          time: '03:41 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Console log output showing Authorization Bearer token and database password printed in plain text.',
            caption: 'Credential Hazard: Printing raw request headers exposes sensitive tokens in cloud CI build logs.'
          },
          replyImage: {
            src: warRoomPanel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-2-the-standoff.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay creating a log sanitizer utility masking sensitive keys with asterisks.',
            caption: 'Sanitized Output: Redacting secrets at the source protects automated pipelines from security leaks.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'Your console log printed the raw admin bearer token. CI build logs are archived in cloud runners.',
            replySpeaker: 'Akshay',
            replySpeech: 'Sanitizing now! Masking Authorization and password keys before any string touches the console!'
          },
          scene: 'While debugging, Akshay leaves console.log(pm.request.headers) active. Sameer spots the database bearer token displayed in plain text. Akshay builds a sanitizer utility that redacts Authorization and password fields before printing.',
          realization: 'Assume every console log line is public; redact sensitive headers and secrets at the source.'
        },
        {
          title: 'Scene 6: 03:51 AM: The Bounded Self Healing Retry Loop and 409 Atomic Lock',
          time: '03:51 AM',
          layout: 'duo',
          image: {
            src: resilienceImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-resilience-error-handling.jpg',
            w: 1408,
            h: 768,
            alt: 'Architecture visual of retry taxonomy, exponential backoff, and atomic concurrency locks.',
            caption: 'Resilience Architecture: Bounded exponential retry absorbs blips; atomic lock returns 409 Conflict.'
          },
          replyImage: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay, Sameer, and Ananya watching the ticketing system recover under atomic locks.',
            caption: 'Production Stabilized: Negative matrix verified, rate limits asserted, zero inventory underflow.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'The flaky gateway retried on 503 and recovered! And oversold tickets now cleanly reject with 409 Conflict!',
            replySpeaker: 'Sameer',
            replySpeech: 'Bounded retry for availability; atomic lock for correctness. The ticketing engine is hardened.'
          },
          scene: 'Akshay implements a bounded retry loop for flaky 503 gateway blips capped at 3 attempts with exponential backoff. Concurrently, Ananya adds atomic database locks that cleanly return 409 Conflict when passes sell out. Production stabilizes.',
          realization: 'Bounded retries absorb transient network blips while atomic locks preserve state consistency under load.'
        }
      ]
    },

    // =========================================================================
    // TECHNICAL ARCHITECTURE & DEEP DIVE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      text: 'The Architecture of API Resilience and Error Handling'
    },
    {
      type: 'image',
      src: resilienceImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-resilience-error-handling.jpg',
      w: 1408,
      h: 768,
      title: 'API Resilience Architecture: Error Classification, Safe Parsing, and Retry Loops',
      text: 'Enterprise API resilience requires classifying errors into transient vs permanent, defending against malformed payloads, asserting rate limit throttling, and sanitizing diagnostic telemetry.',
      alt: 'Architecture diagram showing the Negative Testing Matrix and self-healing retry pipeline.',
      caption: 'The Resilience Matrix: Classifying client errors, gateway blips, and server faults.'
    },

    // =========================================================================
    // WORKBENCH SCREEN 1 : NEGATIVE TESTING MATRIX VALIDATOR
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 1 : NEGATIVE MATRIX VALIDATOR',
      title: 'Asserting Refusal Contracts: 400 Bad Request & 429 Throttle',
      scenario: 'Send a malformed ticketing payload ordering zero tickets. Assert the server rejects with 400 Bad Request and validates the error message contract.',
      config: {
        method: 'POST',
        path: '/v1/tickets/purchase',
        activeTab: 'Tests'
      },
      tabs: {
        params: [],
        headers: [
          { key: 'Content-Type', value: 'application/json' },
          { key: 'Authorization', value: 'Bearer test-student-token' }
        ],
        body: JSON.stringify({
          eventId: "EVT-SPRING-FEST-2026",
          quantity: 0
        }, null, 2),
        tests: '// Asserting negative refusal contract\npm.test("Status is 400 Bad Request", function() {\n  pm.response.to.have.status(400);\n});\n\npm.test("Error payload contains structured message", function() {\n  const res = pm.response.json();\n  pm.expect(res.error).to.eql("INVALID_QUANTITY");\n  pm.expect(res.message).to.include("Quantity must be at least 1");\n});'
      },
      response: {
        status: '400 Bad Request',
        time: '14ms',
        size: '286B',
        body: JSON.stringify({
          error: "INVALID_QUANTITY",
          message: "Quantity must be at least 1",
          timestamp: "2026-10-07T03:25:00.000Z"
        }, null, 2)
      },
      notes: [
        'Negative testing verifies that invalid input is intercepted by input guards before reaching the database.',
        'Structured error bodies ensure frontend clients can present actionable feedback to users.'
      ]
    },

    // =========================================================================
    // WORKBENCH SCREEN 2 : DEFENSIVE PARSER & BOUNDED RETRY
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 2 : DEFENSIVE PARSER & RETRY',
      title: 'Defensive Deserialization & Bounded Retry Controller',
      scenario: 'Execute request against an upstream gateway that returns 502 with HTML text. Safely parse the response with try catch and trigger self healing retry if transient.',
      config: {
        method: 'POST',
        path: '/v1/payments/process',
        activeTab: 'Tests'
      },
      tabs: {
        params: [],
        headers: [
          { key: 'Content-Type', value: 'application/json' }
        ],
        body: JSON.stringify({
          orderId: "ORD-9912",
          amount: 500
        }, null, 2),
        tests: '// Defensive JSON parsing\nlet res = null;\ntry {\n  res = pm.response.json();\n} catch (e) {\n  console.warn("Non-JSON payload received. Raw response:", pm.response.text());\n}\n\n// Transient status inspection\nif (pm.response.code === 502 || pm.response.code === 503) {\n  const currentRetry = pm.collectionVariables.get("retryCount") || 0;\n  if (currentRetry < 3) {\n    pm.collectionVariables.set("retryCount", currentRetry + 1);\n    console.log(`Retrying request, attempt ${currentRetry + 1}...`);\n  }\n}'
      },
      response: {
        status: '502 Bad Gateway',
        time: '45ms',
        size: '180B',
        body: "<html><body><h1>502 Bad Gateway</h1><p>Upstream payment socket timed out.</p></body></html>"
      },
      notes: [
        'Defensive try catch prevents unexpected non-JSON payloads from crashing the test runner.',
        'Retry logic is strictly bounded to transient status codes (502, 503, 504) and never applied to 4xx client errors.'
      ]
    },

    // =========================================================================
    // FOUR PART PEDAGOGICAL CARDS (SENIOR SAVIOR CONTRACTS)
    // =========================================================================
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 1 : THE NEGATIVE TESTING MATRIX',
      title: 'The Negative Testing Matrix',
      subtitle: 'Asserting structured refusal contracts across six core HTTP codes',
      input: {
        method: 'POST',
        url: '{{baseUrl}}/v1/tickets/purchase',
        desc: 'Deliberate fault injection covering client and server refusal boundaries.',
        code: '// Testing bad request\npm.test("Status 400 Bad Request", () => pm.response.to.have.status(400));\n// Testing rate limit\npm.test("Status 429 Throttle", () => pm.response.to.have.status(429));'
      },
      underTheHood: {
        desc: 'Server validation pipeline evaluates syntax guards, auth tokens, and concurrency locks.',
        steps: [
          '400 Bad Request: Syntax and schema validation guards reject malformed fields.',
          '401 Unauthorized: Auth middleware rejects missing or expired bearer tokens.',
          '403 Forbidden: RBAC middleware rejects valid tokens lacking resource privileges.',
          '404 Not Found: Resource lookup fails to locate target entity in database.',
          '429 Too Many Requests: Token bucket rate limiter throttles traffic spike.',
          '500 Server Error: Unhandled server exceptions trigger error middleware.'
        ]
      },
      output: {
        status: 'REFUSAL ASSERTED',
        time: '14ms',
        desc: 'Six distinct assertions verify appropriate HTTP status codes and structured bodies.',
        body: JSON.stringify({
          status: 400,
          error: "INVALID_QUANTITY",
          contractVerified: true
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'A test suite that only verifies 200 OK is a placebo.',
        rule: 'Assert every refusal code your API can return. Guard against invalid state transitions.',
        trap: 'Assuming that passing tests mean working software when error paths are never exercised.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 2 : DEFENSIVE RESPONSE PARSING',
      title: 'Defensive Response Parsing and Non JSON Fallbacks',
      subtitle: 'Surviving unexpected HTML error pages from edge proxies and gateways',
      input: {
        method: 'GATEWAY ERROR',
        url: '502 Bad Gateway with raw HTML text: <html><body>Bad Gateway</body></html>',
        desc: 'Proxy error page dispatched when upstream microservice fails to reply.',
        code: 'let res = null;\ntry {\n  res = pm.response.json();\n} catch (e) {\n  res = null;\n}'
      },
      underTheHood: {
        desc: 'Unhandled pm.response.json() throws SyntaxError that kills the V8 runner.',
        steps: [
          'Upstream microservice drops socket connection under heavy load.',
          'Reverse proxy (Nginx, Envoy) generates fallback 502 HTML error page.',
          'Direct call to pm.response.json() throws "Unexpected token < in JSON".',
          'V8 execution engine aborts test script execution abruptly.',
          'Wrapping in try catch isolates parse failure, allowing status assertion to evaluate.'
        ]
      },
      output: {
        status: 'GRACEFUL EVALUATION',
        time: '2ms',
        desc: 'Test runner evaluates 502 assertion cleanly without crashing test suite.',
        body: JSON.stringify({
          rawText: "<html><body>Bad Gateway</body></html>",
          parsedJson: null,
          handledSafely: true
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Never assume response bodies are JSON.',
        rule: 'Always wrap JSON deserialization in try catch blocks when handling unknown or error responses.',
        trap: 'Allowing unhandled SyntaxError exceptions to halt an entire automated test run.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 3 : RETRY TAXONOMY & BOUNDED HEALING',
      title: 'Retry Taxonomy and Bounded Self Healing',
      subtitle: 'Absorbing transient network blips without compounding permanent failures',
      input: {
        method: 'RETRY CONTROLLER',
        url: 'Tests Tab with postman.setNextRequest() loop',
        desc: 'Automated retry loop with exponential backoff capped at 3 attempts.',
        code: 'if (pm.response.code >= 502 && retryCount < 3) {\n  pm.collectionVariables.set("retryCount", retryCount + 1);\n  postman.setNextRequest(pm.info.requestName);\n}'
      },
      underTheHood: {
        desc: 'Classifying errors into transient vs permanent before retrying execution.',
        steps: [
          'Transient errors (502, 503, 504, socket timeout) represent infrastructure blips.',
          'Permanent errors (400, 401, 403, 404, 409) represent semantic contract rejections.',
          'Controller only retries transient statuses, never semantic contract failures.',
          'Backoff delay increases exponentially to avoid overwhelming reviving servers.',
          'Caps strictly at 3 attempts; unrecovered failures report red to CI pipeline.'
        ]
      },
      output: {
        status: 'BOUNDED RETRY',
        time: '250ms',
        desc: 'Transient blip absorbed on attempt 2; permanent failure logged after attempt 3.',
        body: JSON.stringify({
          attempt: 2,
          recovered: true,
          status: "200 OK"
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Retries exist for availability, never for correctness.',
        rule: 'Only retry transient gateway blips. Never retry 4xx semantic rejections.',
        trap: 'Retrying 400 Bad Request or 409 Conflict in a loop, hammering an already stressed backend.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 4 : CONSOLE LOG CREDENTIAL SANITIZER',
      title: 'Console Log Credential Sanitizer',
      subtitle: 'Preventing secret exposure in persistent cloud CI build logs',
      input: {
        method: 'SANITIZER HOOK',
        url: 'Diagnostic console logging utility',
        desc: 'Scrubbing Authorization headers and passwords before printing to console.',
        code: 'function sanitize(obj) {\n  const clone = { ...obj };\n  if (clone.Authorization) clone.Authorization = "Bearer [REDACTED]";\n  if (clone.password) clone.password = "********";\n  return clone;\n}'
      },
      underTheHood: {
        desc: 'Build runners archive console stdout in persistent cloud logs accessible to teams.',
        steps: [
          'Engineer logs raw request headers to debug authentication failure.',
          'Console output captures raw admin bearer token or API key in plain text.',
          'Continuous integration runner publishes test log to permanent build archive.',
          'Exposed tokens become accessible to unauthorized parties, violating security policy.',
          'Sanitizer masks sensitive keys with asterisks while preserving payload structure.'
        ]
      },
      output: {
        status: 'SANITIZED LOG',
        time: '0ms',
        desc: 'Secrets redacted at source; diagnostic structure preserved without risk.',
        body: JSON.stringify({
          Authorization: "Bearer [REDACTED]",
          Accept: "application/json",
          logSafe: true
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Assume every console log line is public.',
        rule: 'Redact credentials at the source before printing to console or test logs.',
        trap: 'Printing raw authorization headers in console logs that get archived in cloud CI systems.'
      }
    },

    // =========================================================================
    // POST DRILLS & QUIZ
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      text: 'Error Code Classification Matrix'
    },
    {
      type: 'chunked-code',
      title: 'HTTP Status Code Diagnostic Routing',
      code: `const statusCode = pm.response.code;

if (statusCode === 200 || statusCode === 201) {
  // Happy Path: Resource created or verified
  console.log("Success contract verified.");
} else if (statusCode >= 400 && statusCode < 500) {
  // Client Error: Permanent semantic rejection (DO NOT RETRY)
  console.warn("Client contract rejection:", statusCode);
} else if (statusCode >= 500) {
  // Server/Gateway Error: Potential transient blip (ELIGIBLE FOR RETRY)
  console.error("Infrastructure fault detected:", statusCode);
}`,
      chunks: [
        {
          lines: '1-6',
          label: '2xx Success',
          explanation: 'Resource state transitioned successfully per business contract.'
        },
        {
          lines: '7-9',
          label: '4xx Semantic Rejection',
          explanation: 'Client submitted malformed, unauthorized, or conflicting payload. Never retry.'
        },
        {
          lines: '10-13',
          label: '5xx Infrastructure Blip',
          explanation: 'Server or upstream gateway crashed or timed out. Eligible for bounded retry.'
        }
      ]
    },

    {
      type: 'battle-scar',
      incident: 'The Infinite Retry Loop That Took Down A Production Payment Cluster',
      context: 'An automated testing bot was programmed to retry any non-200 response until success. When the backend payment cluster began rejecting requests with 422 Unprocessable Entity due to expired cards, 50 parallel test runners entered infinite retry loops, firing 80,000 requests per minute and causing a complete cluster outage.',
      takeaway: 'Never retry semantic client errors (4xx). Strictly bound retry attempts with maximum counts and backoff intervals.'
    },
    {
      type: 'triage',
      title: 'Triage Drill: The Crashing Non-JSON 502',
      scenario: 'Your test suite executes every midnight. Last night, an upstream microservice restarted, returning 502 Bad Gateway. Your test suite failed with: SyntaxError: Unexpected token < in JSON at position 0, preventing remaining test suites from running.',
      options: [
        {
          label: 'The server rejected the request because the Content-Type header was missing.',
          correct: false,
          explanation: 'The request was received, but the upstream proxy generated an HTML error page.'
        },
        {
          label: 'The script called pm.response.json() directly without wrapping it in a try-catch block.',
          correct: true,
          explanation: 'When edge proxies return HTML error bodies, calling JSON.parse() throws an unhandled SyntaxError. Defensive try-catch prevents the crash.'
        },
        {
          label: 'The test suite failed because Newman does not support HTTP 502 responses.',
          correct: false,
          explanation: 'Newman supports all HTTP status codes; the failure was an unhandled JavaScript exception in the test script.'
        }
      ],
      debrief: 'Always wrap response JSON deserialization in try-catch blocks to survive non-JSON error payloads gracefully.'
    },

    {
      type: 'guess',
      prompt: 'Which of the following HTTP status codes should NEVER be automatically retried by a resilience test loop?',
      options: [
        '502 Bad Gateway',
        '503 Service Unavailable',
        '504 Gateway Timeout',
        '400 Bad Request',
      ],
      answerIndex: 3,
      explain: '400 Bad Request is a permanent client semantic rejection. Retrying the identical invalid payload will always produce the identical rejection and wastes server capacity.',
    },
    {
      type: 'quiz',
      items: [
        [
          'Which of the following HTTP status codes should NEVER be automatically retried by a resilience test loop?',
          '400 Bad Request. 400 Bad Request is a permanent client semantic rejection. Retrying the identical invalid payload will always produce the identical rejection and wastes server capacity.',
        ],
      ],
    },
    {
      type: 'takeaways',
      title: 'Senior Savior Takeaways',
      items: [
        'A test suite that only verifies 200 OK is a placebo; build the Negative Testing Matrix across 400, 401, 403, 404, 429, and 500.',
        'Wrap response deserialization in try catch blocks to survive raw HTML error pages from proxies.',
        'Only retry transient gateway faults (502, 503, 504); never retry 4xx semantic client rejections.',
        'Sanitize console logs: redact bearer tokens and passwords at the source before logging to cloud runners.'
      ]
    },
    {
      type: 'victory-milestone',
      badge: 'Milestone 3.1 Cleared',
      title: 'Resilience & Error Handling Mastered',
      summary: 'You have hardened test suites against unexpected HTML crashes, asserted the Negative Testing Matrix, implemented log credential sanitizers, and built bounded self-healing retry loops.',
      powers: [
        'Implementing a comprehensive Negative Testing Matrix across six HTTP refusal codes',
        'Wrapping JSON response parsing in defensive try catch blocks to survive gateway HTML',
        'Asserting rate limiting contracts including HTTP 429 and Retry-After headers',
        'Constructing bounded self-healing retry loops with exponential backoff'
      ],
      disastersPrevented: [
        'Prevented false green test suites from masking production inventory race conditions',
        'Stopped unhandled HTML 502/503 error pages from aborting entire test runs',
        'Eliminated credential leaks in CI runner logs through automated sanitization'
      ],
      nextStep: 'Proceed to Chapter 10 to decouple frontend development from backend delays with Mock Servers and JSON Schema Contracts.'
    },
    {
      type: 'cliffhanger',
      time: '04:00 AM',
      location: 'Apex Frontend Engineering Studio',
      alert: 'DEVELOPMENT BLOCKER STANDOFF',
      speaker: 'Ananya Sen',
      speech: 'Backend team is three days behind on the Science Library API! My entire UI sprint is blocked!',
      context: 'Ananya slams her laptop shut in frustration. The frontend team cannot build or test their user interface because the backend API does not exist yet. Chapter 10 Mock Servers and JSON Schema Contracts begins!',
      nextLessonId: 'mock-servers-and-contracts'
    }
  ]
}
