import warRoomImg from '../assets/apex-campus-crisis-war-room.jpg'
import wireImg from '../assets/http-wire-anatomy.jpg'
import crudImg from '../assets/restful-crud-status-guide.jpg'

import ch02ComicScene1Svg from '../assets/svgs/ch02-comic-scene1-transit-crisis.svg'
import ch02ComicScene2Svg from '../assets/svgs/ch02-comic-scene2-reproduce-500.svg'
import ch02ComicScene3Svg from '../assets/svgs/ch02-comic-scene3-defensive-guard.svg'
import ch02ComicScene4Svg from '../assets/svgs/ch02-comic-scene4-dual-verification.svg'

import crash500Svg from '../assets/svgs/ch02-workbench-500-crash.svg'
import guard400Svg from '../assets/svgs/ch02-workbench-400-guard.svg'
import contract200Svg from '../assets/svgs/ch02-workbench-200-contract.svg'

export const lesson02 = {
  id: 'rest-crud-status',
  icon: '🚨',
  title: 'Investigating the Incident: Manual Wire Auditing and Status Codes',
  shortTitle: 'Manual Wire Auditing',
  badge: 'CHAPTER 02 · WAR ROOM INVESTIGATION',
  subtitle: 'The campus transit shuttle crisis, dissecting status code families, comparing URLs, diagnosing the 500 crash by hand, and verifying the 400 guard and 200 contract.',
  tags: ['REST', 'HTTP', 'Status Codes', 'Triage', 'Manual Testing', 'Investigation'],
  blocks: [
    {
      type: 'chapter-opener',
      missionBadge: 'MISSION 1 · PHASE 2 OF 3: THE MANUAL WIRE INVESTIGATION',
      missionTitle: 'Global Open Data and Web Wire Audit',
      missionCrisis: 'The Campus Transit Shuttle Crash: Diagnosing the 500 Server Error',
      missionContext: 'At 08:14 PM, hours after surviving his morning exam, student apprentice Akshay joins Principal Architect Sameer at the campus Transit Operations desk. The campus transit shuttle tracking service has crashed during the evening rush whenever students open the route tracker without selecting a destination. The frontend team blamed the backend, while backend logs showed an unhandled TypeError. In this phase, Akshay and Sameer inspect raw HTTP packets on the wire by hand, reproduce the unhandled 500 crash via curl, understand status code families, and install a defensive guard returning 400 Bad Request.',
      missionObjective: 'Reproduce the unhandled 500 crash, install a defensive input validation guard, and verify both 400 Bad Request and 200 OK contracts.',
      targetSystems: 'Campus Shuttle Route Locator Service · Port 5050 · HTTP Wire Traffic',
      missionImage: {
        src: warRoomImg,
        file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
        w: 1408,
        h: 768,
        alt: 'The Apex Campus transit war room showing live route monitors and status diagnostics.',
        caption: 'The Transit Operations War Room: Resolving unhandled crashes with wire first investigation.',
      },
      phaseRoadmap: [
        {
          phase: 'Phase 1 of 3',
          title: 'Wire Foundations and Minimal Server',
          status: 'completed',
          desc: 'Chapter 1: Assembled server.js from scratch, tested the 5 operations, and mapped HTTP basics.'
        },
        {
          phase: 'Phase 2 of 3',
          title: 'The Manual Wire Investigation',
          status: 'active',
          desc: 'Chapter 2: Diagnosing the transit shuttle 500 crash by hand and installing defensive guards.'
        },
        {
          phase: 'Phase 3 of 3',
          title: 'Automating the Wire Verification',
          status: 'upcoming',
          desc: 'Chapter 3: Converting manual checks into automated workbench assertions.'
        }
      ],
      achieve: 'Reproduce an unhandled 500, diagnose missing versus empty versus whitespace parameters, install a fail fast guard, and classify any 1xx to 5xx status family on sight.',
      roi: 'After this chapter, the reader can reproduce an unhandled 500, diagnose missing versus empty versus whitespace parameters, install a fail fast guard, and classify any 1xx to 5xx status family on sight.'
    },
    {
      type: 'mission-hud',
      mission: 'Phase 2: The Manual Wire Investigation',
      phase: 'STAGE 6 AUTHORING',
      rank: 'WIRE PROTOCOL INVESTIGATOR',
      status: 'ACTIVE'
    },

    // =========================================================================
    // TOPIC 1: THE COMIC STORYBOARD ARC (ALL 4 SCENES)
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC : FOUR SCENES',
      title: 'The Transit Shuttle Outage and Wire Triage',
      intro: 'Follow student apprentice Akshay and mentor Sameer in the transit operations room as they reproduce the 500 crash on the wire, distinguish empty parameter variants, install the defensive guard, and verify contracts.',
      panels: [
        {
          title: 'Scene 1: 08:14 PM: The Frozen Transit Map and the War Room Standoff',
          time: '08:14 PM',
          image: {
            src: ch02ComicScene1Svg,
            alt: 'Akshay and Sameer in the transit operations room looking at frozen bus tracking display',
            caption: 'Transit Operations Desk: Evening rush transit monitors freeze with HTTP 500 Internal Server Error.'
          },
          embeddedBubbles: true,
          scene: 'At 08:14 PM, hours after his morning exam, student apprentice Akshay joins Sameer at the transit operations desk. Overhead map screens hang frozen with red error banners as campus shuttles vanish from student phone screens. Teams point fingers between frontend and backend.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'The campus transit shuttle map has frozen! Students waiting at bus stops see an empty screen. The terminal log says HTTP 500 Internal Server Error!',
            replySpeaker: 'Sameer',
            replySpeech: 'Step away from the blame game. The browser and app screens are decorative glass. Come to the terminal and inspect the raw wire.'
          },
          realization: 'When production systems fail, finger pointing between teams begins until someone inspects the network wire.'
        },
        {
          title: 'Scene 2: 08:25 PM: Reproducing the 500 Crash on the Wire',
          time: '08:25 PM',
          image: {
            src: ch02ComicScene2Svg,
            alt: 'Akshay typing curl command without route parameter as terminal shows red TypeError stack trace',
            caption: 'Terminal Console: Omitted query parameter triggers unhandled TypeError: Cannot read properties of undefined (reading trim).'
          },
          embeddedBubbles: true,
          scene: 'Akshay opens his terminal and fires curl http://localhost:5050/v1/shuttle/route without specifying a route name. The terminal instantly dumps a bright red unhandled stack trace: TypeError: Cannot read properties of undefined (reading trim). Sameer points out the three ways to be empty.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'I sent GET /v1/shuttle/route with the route name omitted. The server returned HTTP 500 with an unhandled TypeError stack trace!',
            replySpeaker: 'Sameer',
            replySpeech: 'An omitted parameter in Express is undefined, not an empty string. Calling trim on undefined crashes the worker process!'
          },
          realization: 'A 500 error is not a hardware failure; it is an uncaught application exception crashing the server process due to missing input guards.'
        },
        {
          title: 'Scene 3: 08:33 PM: Installing the Defensive Input Guard',
          time: '08:33 PM',
          image: {
            src: ch02ComicScene3Svg,
            alt: 'Akshay and Sameer writing defensive guard in code editor',
            caption: 'Editor Console: Installing fail fast validation guard checking existence and whitespace before running business logic.'
          },
          embeddedBubbles: true,
          scene: 'Akshay opens the route handler file in his editor. Under Sameer guidance, he writes a fail fast guard: if (!name || !name.trim()) return res.status(400).json({ error: "Bad Request", message: "Query parameter name is required and cannot be empty" }).',
          dialogue: {
            speaker: 'Akshay',
            speech: 'I added the guard: if (!name || !name.trim()) return res.status(400) with a clear error payload. We fail fast before calling route lookup!',
            replySpeaker: 'Sameer',
            replySpeech: 'Clean engineering. 400 Bad Request informs the client that their request was malformed, protecting our server from a fatal crash.'
          },
          realization: 'Defensive guards intercept malformed client requests at the door, preventing unhandled server crashes and returning 400 client error contracts.'
        },
        {
          title: 'Scene 4: 08:37 PM: Dual Wire Contract Verification',
          time: '08:37 PM',
          image: {
            src: ch02ComicScene4Svg,
            alt: 'Terminal split screen showing 400 Bad Request guard and 200 OK valid route coordinates',
            caption: 'Dual Verification: Negative guard returns 400 Bad Request in 4ms, while valid query returns 200 OK with live coordinates in 12ms.'
          },
          embeddedBubbles: true,
          scene: 'Akshay tests both endpoints side by side on the terminal. The omitted parameter returns a fast 400 Bad Request in 4ms. The valid query with name=north_loop returns 200 OK with complete route coordinates in 12ms. The wall display comes alive as shuttles resume tracking.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'Status 400 for the missing parameter in 4ms, and status 200 OK with live coordinates for the valid route! Both ends of the wire contract are verified!',
            replySpeaker: 'Sameer',
            replySpeech: 'Dual verification complete. Never declare a fix complete until you prove both the defensive guard and the working contract side by side.'
          },
          realization: 'Dual verification builds permanent engineering confidence: prove the defect is safely guarded and prove the feature remains intact.'
        }
      ]
    },

    // =========================================================================
    // SECTION 2: WIRE INSPECTION & TRIAGE
    // =========================================================================
    {
      type: 'triage',
      title: 'Missing versus Empty Query Parameter Triage',
      scenario: 'Akshay compares the working call GET /v1/shuttle/route?name=north_loop against the failing call GET /v1/shuttle/route where name is completely omitted. What does Node.js Express do when a query parameter is absent from the URL?',
      options: [
        'Express assigns undefined to req.query.name when the parameter is omitted from the request URL',
        'Express automatically populates req.query.name with an empty string so string methods never throw',
        'Express synthesizes a default value based on the previous HTTP request received on port 5050'
      ],
      answerIndex: 0,
      debrief: 'Tactical Triumph: An omitted query parameter results in undefined in req.query. If backend logic attempts to execute string methods such as req.query.name.trim() without checking existence, the V8 runtime throws TypeError: Cannot read properties of undefined, resulting in an unhandled 500 Internal Server Error.',
      traps: [
        'Tactical Triumph: An omitted query parameter results in undefined in req.query. If backend logic attempts to execute string methods such as req.query.name.trim() without checking existence, the V8 runtime throws TypeError: Cannot read properties of undefined, resulting in an unhandled 500 Internal Server Error.',
        'Diagnostic Trap: Express does not invent empty strings for absent parameters. An omitted key is strictly undefined.',
        'Diagnostic Trap: HTTP is stateless; Express handlers never retain state from previous requests across separate client sockets.'
      ]
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'PARAMETER WIRE INSPECTION',
      title: 'Inspecting Query Parameters on the Network Wire',
      text: 'Query strings append key value pairs to the request URI after a question mark. When a client omits a query parameter, Express parses the property as undefined. Invoking string operations on undefined crashes the worker thread.',
      src: wireImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/http-wire-anatomy.jpg',
      w: 1408,
      h: 768,
      alt: 'Technical diagram showing query string parsing from raw URL to Express req.query object.',
      caption: 'Query String Parsing: How missing parameters evaluate to undefined inside the server process.',
      points: [
        'Omitted Parameter: URL path /v1/shuttle/route contains no query string; req.query.name is undefined.',
        'Empty Value: URL path /v1/shuttle/route?name= passes key with empty string; req.query.name is "".',
        'Whitespace Value: URL path /v1/shuttle/route?name=%20 passes URL encoded space; req.query.name.trim() is "".'
      ]
    },
    {
      type: 'comic-workbench',
      badge: 'COMIC WORKBENCH · CRASH REPRODUCTION',
      title: 'Auditing the Unhandled 500 Crash on the Wire',
      appType: 'api-workbench',
      svgScreen: crash500Svg,
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Hero',
          text: 'I sent GET /v1/shuttle/route with the route name parameter omitted. The server returned HTTP 500 Internal Server Error with a leaked stack trace!',
          pointer: 'Status 500 Internal Server Error'
        },
        {
          speaker: 'Sameer',
          role: 'Staff Architect',
          text: 'Notice the problem: a 500 tells the client that the server broke itself. In truth, the client sent missing data, but our server crashed because it lacked an input guard.',
          pointer: 'Backend Stack Trace'
        }
      ],
      workbench: {
        method: 'GET',
        url: 'http://localhost:5050/v1/shuttle/route',
        headers: 'Accept: application/json',
        responseStatus: '500 Internal Server Error',
        responseTime: '42ms',
        responseBody: '{\n  "error": "Internal Server Error",\n  "message": "TypeError: Cannot read properties of undefined (reading \'trim\')",\n  "stack": "at RouteLocatorService.lookup (/server/routes.js:42:24)"\n}'
      },
      breakdown: {
        input: 'Client issues GET /v1/shuttle/route across port 5050 with query parameter name completely omitted.',
        explanation: 'Backend code accesses req.query.name.trim() immediately. Because req.query.name is undefined, the V8 engine throws an unhandled TypeError, terminating request execution and forcing Express to return status 500.',
        output: 'HTTP status 500 Internal Server Error with stack trace leak, blinding the mobile client to the actual input error.',
        trapAndFix: 'Senior Savior Trap: Assuming an absent parameter is handled the same as an empty string. Golden Rule: Never call string operations on request parameters without validating existence and non empty values first.'
      }
    },
    {
      type: 'battle-scar',
      title: 'The Healthcare.gov Launch Catastrophe',
      context: 'In October 2013, the United States federal health insurance exchange launched to massive public failure. Users faced frozen screens, spinning loaders, and unhandled 500 error pages. The congressional post mortem revealed that downstream identity and insurance services had unhandled null parameters and missing validation guards, causing catastrophic cascading timeouts across hundreds of interconnected servers.',
      takeaway: 'When servers fail without defensive guards, a single missing query parameter can crash upstream gateways and lock out millions of users. Validate early, fail fast, and return meaningful 400 client error contracts.',
      metric: 'PRODUCTION ARCHITECTURE LAW'
    },
    {
      type: 'comic-workbench',
      badge: 'COMIC WORKBENCH · DEFENSIVE REPAIR',
      title: 'Verifying the 400 Bad Request Guard',
      appType: 'api-workbench',
      svgScreen: guard400Svg,
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Hero',
          text: 'I replayed the request without the parameter. Instead of a 500 crash, we get 400 Bad Request with a clear message explaining that the route name is required!',
          pointer: 'Status 400 Bad Request'
        },
        {
          speaker: 'Sameer',
          role: 'Staff Architect',
          text: 'Clean and honest. 400 tells the client that the problem is their request, not server health.',
          pointer: 'Guarded JSON Message'
        }
      ],
      workbench: {
        method: 'GET',
        url: 'http://localhost:5050/v1/shuttle/route',
        headers: 'Accept: application/json',
        responseStatus: '400 Bad Request',
        responseTime: '4ms',
        responseBody: '{\n  "error": "Bad Request",\n  "message": "Query parameter \'name\' is required and cannot be empty"\n}'
      },
      breakdown: {
        input: 'Client issues GET /v1/shuttle/route with missing or whitespace name parameter.',
        explanation: 'The fail fast guard checks (!name || name.trim() === "") before calling database or locator services. It intercepts invalid input and terminates the response immediately.',
        output: 'HTTP status 400 Bad Request with actionable JSON error contract: Query parameter name is required.',
        trapAndFix: 'Senior Savior Trap: Returning HTTP 200 with an error object inside the body to avoid alarming frontend teams. Golden Rule: 400 communicates client error; never use 200 for malformed input.'
      }
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'STATUS CODE TAXONOMY',
      title: 'The Five HTTP Status Code Families: 1xx to 5xx Range Architecture',
      text: 'Every HTTP response returns a three digit integer status code. The first digit defines the semantic category of the result, establishing whether the conversation succeeded, failed on the client side, or collapsed on the server.',
      src: crudImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/restful-crud-status-guide.jpg',
      w: 1408,
      h: 768,
      alt: 'Systematic reference chart categorizing 1xx Informational, 2xx Success, 3xx Redirection, 4xx Client Error, and 5xx Server Error.',
      caption: 'The Five Status Families: The universal grammar of HTTP client server communication.',
      points: [
        '1xx Informational: Request received, protocol handshake continuing (e.g. 101 Switching Protocols for WebSockets).',
        '2xx Success: The action requested by the client was successfully received, understood, and accepted (200 OK, 201 Created).',
        '3xx Redirection: Further action needed by user agent to fulfill request (301 Moved Permanently, 304 Not Modified).',
        '4xx Client Error: The client sent an invalid request (400 Bad Request, 401 Unauthorized, 404 Not Found).',
        '5xx Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request (500, 502, 503).'
      ]
    },
    {
      type: 'triage',
      title: 'The Polite 200 Incident Triage',
      scenario: 'Sameer warns Akshay that some legacy enterprise backends return HTTP 200 OK with body { "success": false, "error": "Invalid route parameter" }. Why is this Polite 200 pattern considered a critical anti pattern in API architecture?',
      options: [
        'Automated test suites, API gateways, and proxy caches check HTTP status headers; a 200 badge causes pipelines to mark tests as passing even when data operations failed completely',
        'The HTTP specification forbids JSON payloads inside responses with status 200',
        'Network routers automatically rewrite status 200 responses into 500 errors if the body contains the word error'
      ],
      answerIndex: 0,
      debrief: 'Tactical Triumph: The Polite 200 Trap fools monitoring dashboards, CDN caches, and automated test runners. Because the HTTP status header reads 200 OK, automated tools assume success and cache the failure payload. Status codes must faithfully represent operational reality.',
      traps: [
        'Tactical Triumph: The Polite 200 Trap fools monitoring dashboards, CDN caches, and automated test runners. Because the HTTP status header reads 200 OK, automated tools assume success and cache the failure payload. Status codes must faithfully represent operational reality.',
        'Diagnostic Trap: HTTP 200 permits any MIME payload type including JSON. The anti pattern is semantic dishonesty, not format violation.',
        'Diagnostic Trap: Network switches and routers operate at Layer 3 and Layer 4. They do not inspect application level JSON strings or rewrite status headers.'
      ]
    },
    {
      type: 'comic-workbench',
      badge: 'COMIC WORKBENCH · CONTRACT VERIFICATION',
      title: 'Auditing the Valid 200 OK Shuttle Route Contract',
      appType: 'api-workbench',
      svgScreen: contract200Svg,
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Hero',
          text: 'Now when I send GET /v1/shuttle/route?name=north_loop, the server responds with 200 OK and valid bus coordinates!',
          pointer: 'Status 200 OK with coordinates'
        },
        {
          speaker: 'Sameer',
          role: 'Staff Architect',
          text: 'Both contracts are now satisfied: the negative guard returns 400 Bad Request, and the positive lookup returns 200 OK with full route data.',
          pointer: 'Positive Contract Response'
        }
      ],
      workbench: {
        method: 'GET',
        url: 'http://localhost:5050/v1/shuttle/route?name=north_loop',
        headers: 'Accept: application/json',
        responseStatus: '200 OK',
        responseTime: '12ms',
        responseBody: '{\n  "route": "north_loop",\n  "status": "Active",\n  "stops": 8,\n  "coordinates": {\n    "latitude": 12.9716,\n    "longitude": 77.5946\n  }\n}'
      },
      breakdown: {
        input: 'Client sends GET /v1/shuttle/route?name=north_loop with valid route query parameter.',
        explanation: 'The request passes the fail fast guard, enters the locator query, finds the active shuttle coordinates, and serializes the JSON response.',
        output: 'HTTP status 200 OK returning the complete route object with active coordinates.',
        trapAndFix: 'Senior Savior Trap: Only testing happy path 200 queries and assuming edge cases never happen in production. Golden Rule: Dual verification is mandatory; prove the negative 400 guard and the positive 200 contract side by side.'
      }
    },
    {
      type: 'victory-milestone',
      title: 'Phase 2 Complete: Manual Wire Auditing and Status Codes Mastered',
      summary: 'Akshay successfully diagnosed the campus shuttle 500 crash by hand, categorized parameter empty states, installed a fail fast validation guard, and mastered the five HTTP status code families.',
      powers: [
        'Ability to distinguish omitted undefined parameters from empty strings and whitespace',
        'Diagnosing unhandled server crashes through raw wire inspection and stack trace analysis',
        'Implementing fail fast input validation guards returning clean 400 Bad Request contracts',
        'Full semantic mastery of the five HTTP status families from 1xx to 5xx'
      ],
      disastersPrevented: [
        'Prevented evening transit orientation shutdown by resolving the unhandled 500 route locator crash',
        'Eliminated silent data corruption caused by the Polite 200 Trap',
        'Stopped finger pointing between frontend and backend teams by establishing the network wire as the single source of truth'
      ]
    },
    {
      type: 'cliffhanger',
      title: 'The Green Suite with the Hidden Lie',
      text: 'Twilight gives way to deep night across Apex Campus. As Akshay prepares to pack his bag, Sameer drops a printed test execution report onto his desk. Ten requests, ten green checks, clean zero failure badges across the board. Sameer points to the middle test: Your senior handed you this green suite at 6 PM. By 6:40 PM you will discover that one of these green checks is a complete lie. The test passes without testing anything. In Chapter 3, Akshay enters the automation lab to learn the anatomy of automated assertions, inspect the API Testing Workbench test script sandbox, and write dual assertions that never lie.'
    }
  ]
}
