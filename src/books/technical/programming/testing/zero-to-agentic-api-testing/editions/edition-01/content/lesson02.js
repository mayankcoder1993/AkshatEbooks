import warRoomImg from '../assets/apex-campus-crisis-war-room.jpg'
import wireImg from '../assets/http-wire-anatomy.jpg'
import crudImg from '../assets/restful-crud-status-guide.jpg'
import warRoomPanel1Img from '../assets/war-room-panel-1-the-crisis.jpg'
import warRoomPanel2Img from '../assets/war-room-panel-2-the-standoff.jpg'
import warRoomPanel3Img from '../assets/war-room-panel-3-invisible-wire.jpg'
import warRoomPanel4Img from '../assets/war-room-panel-4-first-principles.jpg'
import ch02Scene1Img from '../assets/ch02-scene-1-transit-crisis.jpg'
import ch02Scene2Img from '../assets/ch02-scene-2-reproduce-500-crash.jpg'
import ch02Scene3Img from '../assets/ch02-scene-3-defensive-guard-fix.jpg'
import ch02Scene4Img from '../assets/ch02-scene-4-dual-wire-verification.jpg'
import warRoomStripImg from '../assets/war-room-comic-strip.jpg'
import warRoomEngineerImg from '../assets/war-room-engineer-first-principles.jpg'

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
      missionContext: 'The student shuttle tracking service crashed on day one of orientation whenever students opened the route tracker without selecting a destination. The frontend team blamed the backend, while backend logs showed an unhandled NullPointerException. In this phase, we enter the war room to inspect raw HTTP packets by hand, understand status code families, and install defensive guards.',
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
    {
      type: 'storyboard',
      badge: 'COMIC SCENE 1 OF 4',
      title: '8:14 PM: The War Room Outage',
      intro: 'Inside the transit operations centre, fingers are pointed across a whiteboard while student phones fail across campus.',
      panels: [
        {
          title: 'The Frozen Transit Map',
          time: '08:14 PM',
          image: warRoomPanel1Img,
          scene: 'A large overhead map display hangs frozen in the transit war room between carved Dravidian stone pillars. The evening campus rush starts in twenty minutes, but all shuttle icons have vanished.',
          dialogue: {
            speaker: 'Transit Operator',
            speech: 'The shuttle locator went black! Students are stranded at the north gates, and their phones display an internal error screen.',
            replySpeaker: 'Frontend Lead',
            replySpeech: 'Our mobile application code did not change. The backend service must be returning garbage.'
          },
          realization: 'When production systems fail, finger pointing between teams begins until someone inspects the network wire.'
        },
        {
          title: 'The Familiar Defense',
          time: '08:16 PM',
          image: warRoomPanel2Img,
          scene: 'Akshay sits at the teak console, clicking the reload button on his testing workbench repeatedly as the amber task lamp casts long shadows.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'It works when I try it on my laptop! I queried the shuttle route three minutes ago and received status 200 OK!',
            replySpeaker: 'Sameer',
            replySpeech: 'It works when YOU try it, Akshay. Come to the whiteboard and show me the exact URL you sent.'
          },
          realization: 'Works on my machine is the most dangerous phrase in software engineering because it hides parameter differences.'
        },
        {
          title: 'Comparing the Two URLs',
          time: '08:18 PM',
          image: warRoomPanel3Img,
          scene: 'Sameer points to the workbench console monitor showing two request tabs open side by side.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Look at the query strings. Your request sent name equals north loop. The mobile application sent the route path with the name parameter completely missing.',
            replySpeaker: 'Akshay',
            replySpeech: 'Wait, does leaving off the query parameter make that big a difference to the backend?'
          },
          realization: 'A missing parameter is not an empty string; it is a completely absent memory reference.'
        },
        {
          title: 'The Standup Confrontation',
          time: '08:19 PM',
          image: warRoomPanel4Img,
          scene: 'Backend engineers cluster around the server logs as an unhandled exception stack trace scrolls continuously down the terminal.',
          dialogue: {
            speaker: 'Backend Lead',
            speech: 'The server log reports an uncaught TypeError in RouteLocatorService. The entire request worker process stalled.',
            replySpeaker: 'Sameer',
            replySpeech: 'Let us isolate the failure. An API contract must account for every way a client can send empty data.'
          },
          realization: 'Unvalidated client inputs become server crashes unless defensive guards intercept them on arrival.'
        }
      ]
    },
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
      type: 'storyboard',
      badge: 'COMIC SCENE 2 OF 4',
      title: 'Three Ways to Be Empty',
      intro: 'At the war room whiteboard, Sameer draws three columns to demonstrate how undefined, empty string, and whitespace trigger identical runtime crashes.',
      panels: [
        {
          title: 'The Three Columns',
          time: '08:22 PM',
          image: ch02Scene1Img,
          promptMeta: {
            title: '8:14 PM War Room Standoff',
            aspectRatio: '16:9',
            positivePrompt: 'Madhubani Mithila folk art graphic novel illustration. 8:14 PM at the campus transit war room. A giant wall display monitor shows a frozen transit map with glowing warning borders. Akshay in mustard kurta sits at the terminal looking anxious, while transit operator with arms crossed gestures at the screen. Sameer stands calmly in the background holding a brass chai tumbler. Sandstone Dravidian pillars flanking console, pure white background #FFFFFF, print-safe.',
            negativePrompt: 'Photorealistic, 3D, CGI, Western comic, manga, dark background, gradients, neon.',
            targetAsset: 'assets/ch02-scene-1-transit-crisis.jpg'
          },
          scene: 'Sameer stands at the mobile whiteboard with a dry erase marker in hand, sketching three distinct columns while Akshay watches with his notebook open.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'There are three distinct ways a request parameter can be empty: undefined when omitted, empty string when present without a value, and whitespace when carrying only spaces.',
            replySpeaker: 'Akshay',
            replySpeech: 'And our backend code handles all three differently?'
          },
          realization: 'Data absence has multiple shapes; treating them as identical without checking leads to silent crashes.'
        },
        {
          title: 'Replaying the Replicas',
          time: '08:25 PM',
          image: ch02Scene2Img,
          promptMeta: {
            title: 'Reproducing the 500 Crash',
            aspectRatio: '16:9',
            positivePrompt: 'Madhubani Mithila folk art comic panel. Akshay sitting at workstation typing curl command without route parameter. Terminal monitor flashes red stack trace: TypeError Cannot read properties of undefined trim. Sameer pointing with stylus to the terminal buffer. Pure white background #FFFFFF, double-line black ink contours.',
            negativePrompt: 'Photorealistic, 3D, CGI, Western comic, manga, dark background, gradients.',
            targetAsset: 'assets/ch02-scene-2-reproduce-500-crash.jpg'
          },
          scene: 'Akshay replays three curl commands in his terminal: one with route omitted, one with name equals nothing, and one with name equals percentage twenty.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'All three requests crash with HTTP 500! The server cannot distinguish between them because line 42 calls trim without checking existence!',
            replySpeaker: 'Sameer',
            replySpeech: 'Precisely. You have reproduced the root cause under laboratory conditions.'
          },
          realization: 'Reproducing all failure variations proves where the contract breaks before writing a single line of fix.'
        },
        {
          title: 'Inspecting the Stack Trace',
          time: '08:27 PM',
          image: warRoomEngineerImg,
          scene: 'The terminal screen glows red with a full stack trace pointing directly to RouteLocatorService.lookup in routes.js line 42.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'Look at the stack trace. Express converts any unhandled JavaScript throw into a generic 500 Internal Server Error.',
            replySpeaker: 'Akshay',
            replySpeech: 'So a 500 does not mean the server computer is broken; it means our software threw an exception it forgot to catch.'
          },
          realization: 'A 500 error is an uncaught runtime exception leaking past application handlers to the HTTP server wrapper.'
        },
        {
          title: 'Setting the Rule',
          time: '08:29 PM',
          image: ch02Scene2Img,
          scene: 'Sameer places his brass chai glass on the console table and points to the whiteboard heading.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'When the client sends bad data, that is a client fault. It belongs in the 4xx family. Never let a client mistake become a 500 server crash.',
            replySpeaker: 'Akshay',
            replySpeech: 'Let us write the defensive guard right now.'
          },
          realization: 'Semantic integrity requires returning 400 for bad input and preserving 500 strictly for true server outages.'
        }
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
      type: 'storyboard',
      badge: 'COMIC SCENE 3 OF 4',
      title: 'The Defensive Guard',
      intro: 'Akshay writes a defensive validation guard in the route locator handler to catch empty parameters before business logic executes.',
      panels: [
        {
          title: 'Opening the Route Handler',
          time: '08:31 PM',
          image: ch02Scene3Img,
          promptMeta: {
            title: 'Installing the Defensive Guard Fix',
            aspectRatio: '16:9',
            positivePrompt: 'Madhubani Mithila folk art illustration. Sameer and Akshay reviewing code. On the screen, code editor shows defensive validation check. Akshay smiles with understanding as Sameer nods. Sandstone jali window, pure white background #FFFFFF, rich traditional colors.',
            negativePrompt: 'Photorealistic, 3D, CGI, Western comic, manga, dark background, gradients.',
            targetAsset: 'assets/ch02-scene-3-defensive-guard-fix.jpg'
          },
          scene: 'Akshay switches to the code editor tab in his IDE workbench, navigating to the shuttle locator route definition.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'Here is the line. It reads: const normalized = req.query.name.trim(). It never verifies if req.query.name exists at all!',
            replySpeaker: 'Sameer',
            replySpeech: 'Now write the guard. Check for existence first, then check for empty whitespace, and terminate early with status 400.'
          },
          realization: 'Defensive programming intercepts invalid state before business logic attempts execution.'
        },
        {
          title: 'Writing the Fail Fast Check',
          time: '08:33 PM',
          image: ch02Scene3Img,
          scene: 'Akshay types the defensive guard into the route handler, adding the check and a clear JSON error payload.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'If not name or name dot trim equals empty string, return res dot status 400 dot json with an explicit message.',
            replySpeaker: 'Sameer',
            replySpeech: 'Good. You have given the client clear guidance and protected the server from crashing.'
          },
          realization: 'A fail fast guard turns a potential fatal crash into a 4 millisecond actionable diagnostic response.'
        },
        {
          title: 'Replaying the Broken Call',
          time: '08:35 PM',
          image: ch02Scene4Img,
          promptMeta: {
            title: 'Dual Wire Contract Verification',
            aspectRatio: '16:9',
            positivePrompt: 'Madhubani Mithila folk art illustration. Terminal split into two successful verification panes: top pane showing 400 Bad Request defensive guard, bottom pane showing 200 OK valid route coordinates. Akshay celebrating at his desk with fist pump, Sameer smiling calmly. Pure white background #FFFFFF, floral border motifs.',
            negativePrompt: 'Photorealistic, 3D, CGI, Western comic, manga, dark background, gradients.',
            targetAsset: 'assets/ch02-scene-4-dual-wire-verification.jpg'
          },
          scene: 'Akshay hits Send on the omitted parameter request tab in his API Testing Workbench.',
          dialogue: {
            speaker: 'Akshay',
            speech: 'Status 400 Bad Request! Response time dropped from 42 milliseconds to 4 milliseconds, and the error explains that name is required!',
            replySpeaker: 'Sameer',
            replySpeech: 'Now replay the valid route request. We must prove the fix did not harm the working contract.'
          },
          realization: 'Every bug fix requires dual verification: proving the defect is guarded and proving the working feature remains intact.'
        },
        {
          title: 'The Working Contract Remains Safe',
          time: '08:37 PM',
          image: ch02Scene4Img,
          scene: 'Akshay sends GET /v1/shuttle/route?name=north_loop and sees the green 200 OK badge appear with complete coordinate objects.',
          dialogue: {
            speaker: 'Akshay',
            speech: '200 OK with latitude and longitude intact. Both ends of the contract are verified!',
            replySpeaker: 'Sameer',
            replySpeech: 'That is professional engineering. Now let us explore the wider family of status codes.'
          },
          realization: 'Dual verification builds lasting confidence in software pipelines.'
        }
      ]
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
      type: 'storyboard',
      badge: 'COMIC SCENE 4 OF 4',
      title: 'The Language of Codes',
      intro: 'With the transit emergency resolved, Sameer walks Akshay through the five HTTP status code families on the war room whiteboard.',
      panels: [
        {
          title: 'The Five Families',
          time: '08:40 PM',
          image: crudImg,
          scene: 'Sameer writes the five numbers across the top of the whiteboard: 1xx, 2xx, 3xx, 4xx, and 5xx, creating a systematic taxonomy table.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'The HTTP status code is a three digit contract between two computers. The first digit defines the family of truth.',
            replySpeaker: 'Akshay',
            replySpeech: '1xx is informational, 2xx is success, 3xx is redirection, 4xx is client fault, and 5xx is server fault.'
          },
          realization: 'Status codes are the universal grammar of distributed computing across the global internet.'
        },
        {
          title: 'The Campus Catalog Examples',
          time: '08:43 PM',
          image: warRoomStripImg,
          scene: 'Akshay writes concrete campus examples under each column on the whiteboard with black marker.',
          dialogue: {
            speaker: 'Akshay',
            speech: '200 for shuttle coordinates. 201 for registering a new student. 400 for our missing route guard. 404 when a book ISBN does not exist. 500 when our server throws an uncaught exception.',
            replySpeaker: 'Sameer',
            replySpeech: 'Spot on. You can now diagnose any API conversation simply by looking at the status header.'
          },
          realization: 'Connecting abstract HTTP status ranges to concrete daily API interactions cements architectural retention.'
        },
        {
          title: 'The Polite 200 Trap',
          time: '08:46 PM',
          image: ch02Scene4Img,
          scene: 'Sameer circles the 2xx column in red marker and writes the word Danger underneath it.',
          dialogue: {
            speaker: 'Sameer',
            speech: 'The most dangerous bug in software is not a 500 error. A 500 error sounds an alarm. The most dangerous bug is a 200 OK that returns an error payload inside the body.',
            replySpeaker: 'Akshay',
            replySpeech: 'Because downstream monitoring assumes everything is fine while the user gets nothing!'
          },
          realization: 'A dishonest 200 OK conceals failures from monitoring alarms and automated quality gates.'
        },
        {
          title: 'The Evening Rush Succeeds',
          time: '08:50 PM',
          image: warRoomEngineerImg,
          scene: 'The overhead operations display springs to life. Green shuttle icons move smoothly across campus routes as students head home without interruption.',
          dialogue: {
            speaker: 'Transit Operator',
            speech: 'The shuttle fleet is tracking live! Evening orientation rush is saved.',
            replySpeaker: 'Akshay',
            replySpeech: 'We inspected the wire, found the null parameter, installed the 400 guard, and verified the 200 contract.'
          },
          realization: 'True quality engineering fixes root causes on the network wire rather than patching symptoms on the glass.'
        }
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
