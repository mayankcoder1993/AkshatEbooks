import warRoomImg from '../assets/apex-campus-crisis-war-room.jpg'
import wireImg from '../assets/http-wire-anatomy.jpg'
import crudImg from '../assets/restful-crud-status-guide.jpg'

import ch02Scene1Img from '../assets/ch02-scene-1-transit-crisis.jpg'
import ch02Scene4Img from '../assets/ch02-scene-4-dual-wire-verification.jpg'
import ch02Terminal500Img from '../assets/illustrations/reactions/ch02-terminal-500-red-stack.jpg'
import ch02Guard400Img from '../assets/illustrations/reactions/ch02-code-editor-400-guard.jpg'
import ch02AkshayTypingImg from '../assets/illustrations/reactions/ch02-akshay-typing-guard.jpg'
import ch02SameerSlateImg from '../assets/illustrations/reactions/ch02-sameer-pointing-slate.jpg'

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
      missionContext: 'At 08:14 PM, hours after surviving his morning exam, student apprentice Akshay joins Principal Architect Sameer at the campus Transit Operations desk. The campus transit shuttle tracking service has crashed during evening rush whenever students open the route tracker without selecting a destination. The frontend team blamed the backend, while backend logs showed an unhandled TypeError. In this phase, Akshay and Sameer inspect raw HTTP packets on the wire by hand, reproduce the unhandled 500 crash via curl, understand status code families, and install a defensive guard returning 400 Bad Request.',
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
    // TOPIC 1: THE COMIC STORYBOARD ARC (ALL 4 SCENES FROM MASTER STORY LEDGER)
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
          layout: 'hero',
          image: {
            src: ch02Scene1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch02-scene-1-transit-crisis.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay and transit team examining frozen campus transit map showing HTTP 500 error.',
            caption: 'Transit Operations Desk: Evening rush transit monitors freeze with HTTP 500 Internal Server Error.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Fifty shuttle routes go live in twenty minutes and apps are completely blank!',
            replySpeaker: 'Sameer',
            replySpeech: 'Never test through a browser button during incident triage. Open raw curl.'
          },
          scene: 'At 08:14 PM, hours after his morning exam, student apprentice Akshay joins Sameer at the transit operations desk. Overhead map screens hang frozen with red error banners as campus shuttles vanish from student phone screens. Teams point fingers between frontend and backend.',
          realization: 'When production systems fail, finger pointing between teams begins until someone inspects the network wire.'
        },
        {
          title: 'Scene 2: 08:25 PM: Reproducing the 500 Crash on the Wire',
          time: '08:25 PM',
          layout: 'duo',
          image: {
            src: ch02Terminal500Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/reactions/ch02-terminal-500-red-stack.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay types at a laptop glowing red with a TypeError stack trace while Sameer observes from the background.',
            caption: 'Terminal Console: An omitted query parameter triggers an unhandled TypeError stack trace and HTTP 500 response.'
          },
          replyImage: {
            src: ch02Guard400Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/reactions/ch02-code-editor-400-guard.jpg',
            w: 1376,
            h: 768,
            alt: 'Code editor highlighting a defensive route validation guard before business logic runs.',
            caption: 'Guard Blueprint: A boundary check turns malformed input into an explicit HTTP 400 response.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'TypeError! Cannot read properties of undefined reading trim! Status 500!',
            replySpeaker: 'Sameer',
            replySpeech: 'An uncaught runtime crash leaked past your handler. That is what 500 means.'
          },
          scene: 'Akshay opens his terminal and fires curl http://localhost:5050/v1/campus/shuttle/coordinates without specifying a route name. The terminal instantly dumps a bright red unhandled stack trace: TypeError: Cannot read properties of undefined (reading trim). Sameer points out the three ways to be empty.',
          realization: 'A 500 error is not a hardware failure; it is an uncaught application exception crashing the server process due to missing input guards.'
        },
        {
          title: 'Scene 3: 08:33 PM: Installing the Defensive Input Guard',
          time: '08:33 PM',
          layout: 'duo',
          image: {
            src: ch02AkshayTypingImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/reactions/ch02-akshay-typing-guard.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay types a defensive validation guard at a workstation in the warm engineering lab.',
            caption: 'Implementation Beat: Akshay types the fail fast validation guard before route lookup begins.'
          },
          replyImage: {
            src: ch02SameerSlateImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/illustrations/reactions/ch02-sameer-pointing-slate.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer points to the validation logic on an illuminated diagnostic slate while Akshay reviews it.',
            caption: 'Review Beat: Sameer confirms that the guard keeps malformed requests from reaching business logic.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'if (!route || route.trim() === "") return res.status(400).json({ error })...',
            replySpeaker: 'Sameer',
            replySpeech: 'Never invent data for a broken client. Fail fast at the front door.'
          },
          scene: 'Akshay opens the route controller in his editor. Sameer prevents him from substituting a default route, teaching him that client errors must fail fast with 400 Bad Request. Akshay types the perimeter check: if (!route || route.trim() === "") return res.status(400).json({ error: "route parameter is required" }).',
          realization: 'Good API design fails fast at the perimeter. Never let invalid input enter downstream business logic.'
        },
        {
          title: 'Scene 4: 08:40 PM: Dual Verification and Status Code Architecture',
          time: '08:40 PM',
          layout: 'hero',
          image: {
            src: ch02Scene4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch02-scene-4-dual-wire-verification.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay and Sameer reviewing side by side terminals showing 400 Bad Request and 200 OK.',
            caption: 'Dual Verification Display: Negative guard returns 400 Bad Request in 4ms, positive query returns 200 OK with route coordinates.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: '400 Bad Request in 4ms for invalid queries! Status 200 OK for valid routes!',
            replySpeaker: 'Sameer',
            replySpeech: 'Dual verification complete. Always verify the negative guard and positive contract side by side.'
          },
          scene: 'With the guard saved, Akshay tests both boundary conditions side by side in split terminal panes. An omitted route immediately yields HTTP 400 Bad Request in 4ms. A valid route query returns HTTP 200 OK with complete shuttle coordinates. The overhead transit map unfreezes as live bus locations resume streaming.',
          realization: 'Testing a single happy path is professional negligence. Complete verification tests both the boundary guard and the contract fulfillment side by side.'
        }
      ]
    },

    // =========================================================================
    // TOPIC 2: PARAMETER EMPTY STATES AND QUERY STRING ANATOMY
    // =========================================================================
    {
      type: 'triage',
      title: 'Missing versus Empty Query Parameter Triage',
      scenario: 'During the evening transit incident, frontend developers claimed their app was sending the route parameter. Backend engineers saw undefined in Express. When inspecting GET /v1/campus/shuttle/coordinates on the wire, why does omitting the key cause undefined in JavaScript?',
      options: [
        'Query string parsers only populate object keys present in the raw URI; omitting ?route leaves req.query.route undefined, causing crashes if string methods like trim() are called without an existence check',
        'HTTP servers automatically convert missing parameters into the string null before passing them to application handlers',
        'The TCP network layer drops packets that do not include question mark query delimiters'
      ],
      answerIndex: 0,
      debrief: 'Tactical Triumph: In Node.js Express, req.query is built dynamically from the request line. If ?route is omitted entirely, req.query.route is undefined. Calling .trim() on undefined throws an uncaught TypeError that halts worker threads and produces an unhandled 500 error.',
      traps: [
        'Tactical Triumph: In Node.js Express, req.query is built dynamically from the request line. If ?route is omitted entirely, req.query.route is undefined. Calling .trim() on undefined throws an uncaught TypeError that halts worker threads and produces an unhandled 500 error.',
        'Diagnostic Trap: HTTP has no concept of JavaScript null. Values exist as raw bytes or are completely absent from the wire.',
        'Diagnostic Trap: TCP is a transport protocol; it does not read URI query characters or evaluate application level syntax.'
      ]
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'HTTP WIRE ANATOMY',
      title: 'Inspecting Query Parameters on the Network Wire',
      text: 'Query parameters reside in the URL request line following a question mark delimiter. Multiple parameters join with ampersands. Because the wire carries raw text, the server must parse parameters defensively before executing business logic.',
      src: wireImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/http-wire-anatomy.jpg',
      w: 1408,
      h: 768,
      alt: 'Detailed network wire diagram illustrating the structure of HTTP request lines, query parameters, headers, and payload separation.',
      caption: 'The Wire Protocol: How query parameters travel across the network to backend parsers.',
      points: [
        'The Request Line contains the HTTP verb, path, query string, and protocol version.',
        'Parameter Omission: /v1/campus/shuttle/coordinates provides no route key, leaving req.query.route undefined.',
        'Empty Value: /v1/campus/shuttle/coordinates?route= provides the key with empty string value.',
        'Whitespace Value: /v1/campus/shuttle/coordinates?route=%20 provides URL encoded spaces that require trim() sanitization.',
        'Defensive Rule: Always test all three empty variants to guarantee server resilience.'
      ]
    },

    // =========================================================================
    // TOPIC 3: WORKBENCH 1 & QUAD-CARD 1: AUDITING THE 500 CRASH
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'COMIC WORKBENCH · CRASH DIAGNOSTIC',
      title: 'Auditing the Unhandled 500 Crash on the Wire',
      appType: 'api-workbench',
      svgScreen: crash500Svg,
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Apprentice',
          text: 'I ran curl without the route query parameter and got a wall of red error text!',
          pointer: 'Status 500 Internal Server Error'
        },
        {
          speaker: 'Sameer',
          role: 'Principal Systems Architect',
          text: 'Look at the stack trace. The handler assumed route would always exist.',
          pointer: 'Uncaught TypeError Stack Dump'
        }
      ],
      workbench: {
        method: 'GET',
        url: 'http://localhost:5050/status/500',
        headers: 'Accept: application/json',
        responseStatus: '500 Internal Server Error',
        responseTime: '18ms',
        responseBody: '{\n  "statusCode": 500,\n  "error": "Internal Server Error",\n  "message": "TypeError: Cannot read properties of undefined (reading \'trim\')",\n  "stack": "at shuttleHandler (server.js:42:24)\\n    at Layer.handle [as handle_request] (router.js:58:5)"\n}'
      },
      breakdown: {
        input: {
          title: 'Omitted Route Parameter',
          detail: 'Client issues GET /v1/campus/shuttle/coordinates without providing the mandatory route query parameter.'
        },
        explanation: {
          title: 'Uncaught TypeError Exception',
          detail: 'Express assigns undefined to req.query.route. The route handler calls route.trim() without an existence check, crashing the process worker.'
        },
        output: {
          title: 'Status 500 Server Error Leak',
          detail: 'HTTP 500 Internal Server Error with HTML stack dump, exposing internal file paths and blinding the client to the real issue.'
        },
        trap: {
          title: 'Absent Parameter Confusion',
          detail: 'Senior Savior Trap: Assuming undefined behaves identically to empty string. Never invoke string operations without validating existence first.'
        }
      }
    },
    {
      type: 'battle-scar',
      title: 'The Healthcare.gov Launch Catastrophe',
      context: 'In October 2013, the United States federal health insurance exchange launched to massive public failure. Users faced frozen screens, spinning loaders, and unhandled 500 error pages. The congressional post mortem revealed that downstream identity and insurance services had unhandled null parameters and missing validation guards, causing catastrophic cascading timeouts across hundreds of interconnected servers.',
      takeaway: 'When servers fail without defensive guards, a single missing query parameter can crash upstream gateways and lock out millions of users. Validate early, fail fast, and return meaningful 400 client error contracts.',
      metric: 'PRODUCTION ARCHITECTURE LAW'
    },

    // =========================================================================
    // TOPIC 4: WORKBENCH 2 & QUAD-CARD 2: THE 400 BAD REQUEST GUARD
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'COMIC WORKBENCH · DEFENSIVE REPAIR',
      title: 'Verifying the 400 Bad Request Guard',
      appType: 'api-workbench',
      svgScreen: guard400Svg,
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Apprentice',
          text: 'I replayed the request without the parameter and received 400 Bad Request with an actionable message!',
          pointer: 'Status 400 Bad Request'
        },
        {
          speaker: 'Sameer',
          role: 'Principal Systems Architect',
          text: 'Clean and honest. 400 tells the client that the problem is their request, not server health.',
          pointer: 'Guarded JSON Message'
        }
      ],
      workbench: {
        method: 'GET',
        url: 'http://localhost:5050/v1/campus/shuttle/coordinates',
        headers: 'Accept: application/json',
        responseStatus: '400 Bad Request',
        responseTime: '4ms',
        responseBody: '{\n  "statusCode": 400,\n  "error": "route parameter is required",\n  "hint": "Provide a valid route identifier such as campus_loop_north"\n}'
      },
      breakdown: {
        input: {
          title: 'Malformed Query Parameter',
          detail: 'Client sends omitted or whitespace route parameter GET /v1/campus/shuttle/coordinates.'
        },
        explanation: {
          title: 'Fail Fast Perimeter Defense',
          detail: 'Defensive guard if (!route || route.trim() === "") halts execution before business logic or database queries run.'
        },
        output: {
          title: 'Status 400 with Actionable Message',
          detail: 'HTTP status 400 Bad Request with structured JSON: route parameter is required and cannot be empty.'
        },
        trap: {
          title: 'The Fallback Route Temptation',
          detail: 'Senior Savior Trap: Inventing fallback data for malformed requests. Fail fast so clients correct their query parameters immediately.'
        }
      }
    },

    // =========================================================================
    // TOPIC 5: THE FIVE STATUS CODE FAMILIES
    // =========================================================================
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

    // =========================================================================
    // TOPIC 6: WORKBENCH 3 & QUAD-CARD 3: THE 200 OK CONTRACT VERIFICATION
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'COMIC WORKBENCH · CONTRACT VERIFICATION',
      title: 'Auditing the Valid 200 OK Shuttle Route Contract',
      appType: 'api-workbench',
      svgScreen: contract200Svg,
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Apprentice',
          text: 'Now when I query campus_loop_north, the server responds with 200 OK and live telemetry!',
          pointer: 'Status 200 OK with coordinates'
        },
        {
          speaker: 'Sameer',
          role: 'Principal Systems Architect',
          text: 'Both contracts are satisfied: the negative guard returns 400 Bad Request, and the positive lookup returns 200 OK.',
          pointer: 'Positive Contract Response'
        }
      ],
      workbench: {
        method: 'GET',
        url: 'http://localhost:5050/v1/campus/shuttle/coordinates?route=campus_loop_north',
        headers: 'Accept: application/json',
        responseStatus: '200 OK',
        responseTime: '12ms',
        responseBody: '{\n  "route": "campus_loop_north",\n  "shuttleId": "BUS_104",\n  "status": "in_transit",\n  "coordinates": {\n    "latitude": 42.3601,\n    "longitude": -71.0942\n  },\n  "speedMph": 24,\n  "nextStop": "Apex Student Union",\n  "estimatedArrivalMinutes": 3\n}'
      },
      breakdown: {
        input: {
          title: 'Authorized Route Query',
          detail: 'Client sends GET /v1/campus/shuttle/coordinates?route=campus_loop_north with verified route key.'
        },
        explanation: {
          title: 'Verified Service Execution',
          detail: 'Request clears defensive guard, matches route in geospatial dispatcher, and retrieves active bus telemetry.'
        },
        output: {
          title: 'Status 200 with Geolocation JSON',
          detail: 'HTTP status 200 OK with verified bus coordinates, status in_transit, and estimated arrival minutes.'
        },
        trap: {
          title: 'Happy Path Blindness',
          detail: 'Senior Savior Trap: Testing only positive routes. Dual verification is mandatory: test the negative guard and positive contract side by side.'
        }
      }
    },

    // =========================================================================
    // TOPIC 7: WORKBENCH 4 & QUAD-CARD 4: THE POLITE 200 TRAP (CARD 4 COMPLETE)
    // =========================================================================
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
      badge: 'COMIC WORKBENCH · SILENT DEFECT DETECTION',
      title: 'Auditing the Polite 200 Trap on the Wire',
      appType: 'api-workbench',
      svgScreen: contract200Svg,
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Apprentice',
          text: 'Wait! The response status header says 200 OK, but the JSON body says the transaction failed?!',
          pointer: 'Status 200 OK with failure body'
        },
        {
          speaker: 'Sameer',
          role: 'Principal Systems Architect',
          text: 'The polite 200 lie. Automated test runners check the 200 status and report green, masking the real defect.',
          pointer: 'Semantic Dishonesty Mismatch'
        }
      ],
      workbench: {
        method: 'POST',
        url: 'http://localhost:5050/v1/campus/shuttle/reserve',
        headers: 'Content-Type: application/json',
        responseStatus: '200 OK (Semantic Lie)',
        responseTime: '15ms',
        responseBody: '{\n  "status": "failed",\n  "code": "EXPIRED_PASS",\n  "error": "Student semester transit pass expired",\n  "seatConfirmed": false\n}'
      },
      breakdown: {
        input: {
          title: 'Expired Shuttle Reservation Request',
          detail: 'Client attempts bus seat reservation with an expired semester transit pass.'
        },
        explanation: {
          title: 'Semantic Protocol Dishonesty',
          detail: 'Backend catches business validation failure but returns HTTP transport status 200 OK instead of 402 or 403.'
        },
        output: {
          title: 'Green Checkmark Masking Defect',
          detail: 'HTTP status 200 OK with payload failure body. CI runners mark test passed while reservation fails for the student.'
        },
        trap: {
          title: 'The Polite 200 Trap Law',
          detail: 'Senior Savior Trap: Wrapping failure in polite 200 OK to avoid scary errors. Always use authentic HTTP status semantics so distributed networks respond correctly.'
        }
      }
    },

    // =========================================================================
    // TOPIC 8: VICTORY AND CLIFFHANGER
    // =========================================================================
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
