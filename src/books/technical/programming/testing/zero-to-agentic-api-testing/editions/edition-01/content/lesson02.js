import warRoomImg from '../assets/apex-campus-crisis-war-room.jpg'
import wireImg from '../assets/http-wire-anatomy.jpg'
import crudImg from '../assets/restful-crud-status-guide.jpg'

export const lesson02 = {
  id: 'rest-crud-status',
  icon: '',
  title: 'Investigating the Incident: Manual Wire Auditing and Status Codes',
  shortTitle: 'Manual Wire Auditing',
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
      targetSystems: 'Campus Shuttle Route Locator Service · Port 3001 · HTTP Wire Traffic',
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
          desc: 'Chapter 3: Converting manual checks into automated Postman JavaScript assertions.'
        }
      ],
      achieve: 'Find why one shuttle location request fails, make bad input safe, and check that a valid lookup still provides coordinates.',
      how: 'Compare two URLs, send requests to a local teaching service, examine the client response and server log, write a diagnosis and repair plan, add a defensive validation guard, and replay both requests by hand.',
      carry: 'The two finished manual request setups and verified response contracts, ready to automate in Chapter 3.'
    },
    {
      type: 'mission-hud',
      mission: 'Mission 1: The Core Protocol and Campus Cloud Integration',
      phase: 'Phase 2 of 3: The Manual Wire Investigation',
      rank: 'Rank: Wire Protocol Investigator',
      status: 'ACTIVE'
    },
    {
      type: 'mission',
      title: 'Mission 1 Active Incident: The Apex Campus Transit Blackout',
      text: 'Today is launch day for the new Apex Campus student portal. Outside on university avenues, hundreds of students stand at bus stops waiting for the campus shuttle. When they open the mobile app to check the live transit map, the screen locks into an endless spinning circle. In the engineering war room, tension is high: mobile frontend developers argue that their user interface is flawless and blame server outages; backend engineers insist the database cluster is healthy and blame mobile network disconnects. Akshay arrives at the war room console beside Sameer. Sameer turns to Akshay: "Now that you assembled our API server in Chapter 1, you know that truth lives directly on the network wire. Let us open our API Testing Workbench and reproduce this live failure together!"',
      image: {
        src: warRoomImg,
        file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
        w: 1408,
        h: 768,
        alt: 'The Apex Campus War Room showing real time server logs and mobile transit maps.',
        caption: 'The War Room Command Center: Finding the truth directly on the network wire.',
        points: [
          'The Incident: The campus shuttle locator screen is frozen with endless loading indicators.',
          'The Deadlock: Mobile developers and backend server teams blame each other for the crash.',
          'The Action Plan: Compare URLs, reproduce the crash locally, write a repair plan, guard the server, and verify both branches.',
        ],
      },
    },
    {
      type: 'heading',
      text: 'Step 1: Setting Up the Local Runnable Transit Fixture',
    },
    {
      type: 'paragraph',
      text: 'To investigate this failure safely without touching production systems, we run a local teaching fixture on port 3001. In Chapter 1, you learned how to start a minimal Node.js server. Here is the complete standalone Express transit service file, which you can run locally: [Download shuttle_service.js](/materials/zero-to-agentic-api-testing/lesson-02/shuttle_service.js):',
    },
    {
      type: 'code',
      filename: 'shuttle_service.js',
      lines: [
        '// shuttle_service.js: Runnable Local Transit Fixture (Node.js & Express)',
        'const express = require("express");',
        'const app = express();',
        'app.use(express.json());',
        '',
        '// In memory route coordinate database',
        'const activeRoutes = {',
        '  campus_loop_north: {',
        '    route: "campus_loop_north",',
        '    shuttleId: "BUS_104",',
        '    status: "in_transit",',
        '    coordinates: { latitude: 42.3601, longitude: -71.0942 },',
        '    speedMph: 24,',
        '    nextStop: "Apex Student Union",',
        '    estimatedArrivalMinutes: 3',
        '  }',
        '};',
        '',
        '// GET /v1/campus/shuttle/coordinates',
        'app.get("/v1/campus/shuttle/coordinates", (req, res) => {',
        '  const route = req.query.route;',
        '',
        '  // DEFECT: Attempting to trim without checking if route exists!',
        '  const normalizedRoute = route.trim().toLowerCase();',
        '',
        '  const shuttleData = activeRoutes[normalizedRoute];',
        '  if (shuttleData) {',
        '    return res.status(200).json(shuttleData);',
        '  }',
        '  res.status(404).json({ statusCode: 404, error: "Unknown shuttle route" });',
        '});',
        '',
        'app.listen(3001, () => console.log("Transit Service running on http://localhost:3001"));',
      ],
    },
    {
      type: 'paragraph',
      text: 'To run this service, open a terminal window in your workspace and type `node shuttle_service.js`. To stop it at any time, press `Ctrl + C`. Before touching any broken requests, let us perform a baseline check to prove the server is reachable and can serve valid data:',
    },
    {
      type: 'terminal',
      command: 'curl -s "http://localhost:3001/v1/campus/shuttle/coordinates?route=campus_loop_north"',
      lines: [
        '{',
        '  "route": "campus_loop_north",',
        '  "shuttleId": "BUS_104",',
        '  "status": "in_transit",',
        '  "coordinates": {',
        '    "latitude": 42.3601,',
        '    "longitude": -71.0942',
        '  },',
        '  "speedMph": 24,',
        '  "nextStop": "Apex Student Union",',
        '  "estimatedArrivalMinutes": 3',
        '}',
      ],
    },
    {
      type: 'paragraph',
      text: 'The server returns `200 OK` with valid GPS coordinates. This confirms that the service is alive and the database contains active shuttle records. Now, what is different about the request that the mobile app actually sent?',
    },
    {
      type: 'heading',
      text: 'Step 2: Comparing the Two URLs: Locating the Missing Piece',
    },
    {
      type: 'paragraph',
      text: 'Let us place the working baseline URL and the mobile app request side by side:',
    },
    {
      type: 'chunked-code',
      badge: 'URL COMPARISON',
      title: 'Comparing the Working URL with the Mobile Request',
      intro: 'Notice the exact difference in the request line:',
      chunks: [
        {
          label: 'Working Baseline URL',
          filename: 'working_url.http',
          code: 'GET http://localhost:3001/v1/campus/shuttle/coordinates?route=campus_loop_north',
          title: 'Contains the Route Parameter',
          explanation: 'The question mark begins extra query information. The key route specifies which bus line the map wishes to locate.',
          keyTakeaway: 'The server requires route to look up matching coordinates.'
        },
        {
          label: 'Mobile App Failing Request',
          filename: 'failing_url.http',
          code: 'GET http://localhost:3001/v1/campus/shuttle/coordinates',
          title: 'Omitted Query Parameter',
          explanation: 'On initial screen boot, the mobile frontend code dispatched the GET request immediately, omitting the question mark and the route parameter entirely.',
          keyTakeaway: 'The query string is completely absent from the client call.'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 3: Imagine and Predict Before Sending',
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'When this request arrives at the backend server with the route query parameter missing, how will an unhardened backend service respond?',
      options: [
        'A successful response returning GPS coordinates for all campus routes',
        'An unhandled 500 server crash caused by attempting to use an absent value',
        'A 201 Created code generating a brand new route on the server',
        'A 301 redirect forwarding to an external commercial map provider'
      ],
      answerIndex: 1,
      revealTitle: 'Raw Server Wire Output',
      explanation: 'The backend crashed with HTTP 500! When the query parameter was omitted, req.query.route evaluated to undefined in Node.js (and null in Java). Calling .trim() on undefined threw an unhandled TypeError, terminating the request with an internal server error!'
    },
    {
      type: 'heading',
      text: 'Step 4: Manually Reproducing the Crash: Client Response vs Server Log',
    },
    {
      type: 'paragraph',
      text: 'In your API software (such as Postman or Thunder Client), configure a GET request targeting `http://localhost:3001/v1/campus/shuttle/coordinates` without any query parameters or request body. Click Send. Now observe the two distinct locations where output appears:',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'WIRE ARCHITECTURE',
      title: 'Distinguishing Client Response from Server Terminal Log',
      text: 'An API tester must look in two separate places: the client response pane shows what the public caller received, while the server terminal log reveals internal exceptions and call stack traces.',
      src: wireImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/http-wire-anatomy.jpg',
      w: 1408,
      h: 768,
      alt: 'Anatomy of an HTTP wire exchange separating client status from server terminal log.',
      caption: 'Two distinct perspectives: the client response pane versus the local server console.',
      points: [
        'The Client Response Pane: Shows the HTTP status code and response payload returned to the caller.',
        'The Server Terminal Console: Displays internal logs, uncaught exceptions, and line numbers where code broke.',
      ],
    },
    {
      type: 'api-inspector',
      title: 'Local Wire Capture: Failing Campus Shuttle Request',
      method: 'GET',
      url: 'http://localhost:3001/v1/campus/shuttle/coordinates',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'ApexCampusMobile/2.4.0 (iOS 17.4)'
      },
      status: '500 Internal Server Error',
      time: '14 ms',
      size: '228 B',
      responseBody: {
        statusCode: 500,
        error: 'Internal Server Error',
        message: 'Cannot read properties of undefined (reading \'trim\')'
      },
      sampleLabel: 'UNHANDLED 500 SERVER CRASH'
    },
    {
      type: 'terminal',
      command: 'Local Server Console Output (shuttle_service.js)',
      lines: [
        'Transit Service running on http://localhost:3001',
        'GET /v1/campus/shuttle/coordinates',
        'TypeError: Cannot read properties of undefined (reading \'trim\')',
        '    at /home/user/campus_api/shuttle_service.js:23:25',
        '    at Layer.handle [as handle_request] (/node_modules/express/lib/router/layer.js:95:5)',
        '    at next (/node_modules/express/lib/router/route.js:149:13)',
      ],
    },
    {
      type: 'paragraph',
      text: 'Look at the evidence. The client received `500 Internal Server Error`. The server terminal reveals that line 23 crashed with an unhandled TypeError because it called `.trim()` on an undefined variable. In Java Spring servers, this same defect manifests as `java.lang.NullPointerException` at RouteLocatorService.java:42. In both ecosystems, the root cause is identical: dereferencing an unchecked input.',
    },
    {
      type: 'comic-workbench',
      badge: 'API TESTING WORKBENCH · REPRODUCING THE 500 CRASH',
      title: 'Akshay Reproduces the Incident in the API Testing Workbench',
      intro: 'Akshay fires the failing request in the API Testing Workbench, while Sameer inspects the server terminal output to reveal the uncaught exception.',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Junior Automation Engineer',
          text: 'The workbench returned HTTP status 500 Internal Server Error! Did our database drop offline or is the local port blocked?',
          pointer: 'Status 500'
        },
        {
          speaker: 'Sameer',
          role: 'Principal Architect',
          text: 'Check the terminal console log below, Akshay. Line 23 crashed calling .trim() on undefined! When a client omits a required parameter, the server must never throw an unhandled 500 exception. A 500 error represents a backend code defect!',
          pointer: 'TypeError trim'
        }
      ],
      workbench: {
        method: 'GET',
        url: 'http://localhost:3001/v1/campus/shuttle/coordinates',
        environment: 'Apex Campus Local',
        activeTab: 'Params',
        tabContent: '// Query parameters table is empty: zero keys supplied',
        response: {
          status: '500 Internal Server Error',
          time: '14 ms',
          size: '228 B',
          format: 'JSON',
          body: `{\n  "statusCode": 500,\n  "error": "Internal Server Error",\n  "message": "Cannot read properties of undefined (reading 'trim')"\n}`,
          testResults: [
            { status: 'FAIL', name: 'Expected 200 OK or handled 400 Bad Request, but received unhandled 500' }
          ]
        }
      },
      breakdown: {
        input: 'GET /v1/campus/shuttle/coordinates with empty query parameters.',
        code: 'const route = req.query.route;\nconst normalizedRoute = route.trim().toLowerCase();',
        explanation: 'When the query parameter route is omitted, req.query.route evaluates to undefined. Invoking .trim() on an undefined reference triggers an uncaught TypeError in Node.js or NullPointerException in Java, immediately aborting the request handler.',
        output: 'HTTP status 500 Internal Server Error with unhandled TypeError stack trace.',
        trapAndFix: 'Common Trap: Assuming callers will always provide expected parameters. Senior Savior: Never call methods on unchecked inputs. Always check presence before dereferencing.'
      }
    },
    {
      type: 'structured-breakdown',
      badge: 'PARAMETER MECHANICS',
      title: 'Distinguishing Missing Parameters from Empty Strings',
      intro: 'Web application servers make strict semantic distinctions between different parameter states:',
      categories: [
        {
          category: 'Case A: Parameter Omitted Completely',
          subCategory: 'GET /v1/campus/shuttle/coordinates',
          title: 'Evaluates to undefined or null in Server Memory',
          explanation: 'When the query string route is absent from the URL, the parameter evaluates to undefined in Node.js or null in Java. Calling methods like trim() without a presence check throws an immediate fatal exception.',
          points: [
            'Trigger: The client sent the URL path with zero query parameters.',
            'Server State: Variable route does not exist in memory.',
            'Required Defense: Check if (!route) or if (route == null) before dereferencing.'
          ]
        },
        {
          category: 'Case B: Parameter Present but Empty',
          subCategory: 'GET /v1/campus/shuttle/coordinates?route=',
          title: 'Evaluates to an Empty String ("")',
          explanation: 'When the parameter name is supplied with an empty value, the variable is defined as an empty string. Calling trim() succeeds without throwing, but querying the database for a blank route finds zero records.',
          points: [
            'Trigger: The caller included the key but provided no value after the equal sign.',
            'Server State: Variable is non null but holds zero characters.',
            'Required Defense: Check if (route.trim() === "") to reject blank queries.'
          ]
        },
        {
          category: 'Case C: Parameter Whitespace Only',
          subCategory: 'GET /v1/campus/shuttle/coordinates?route=%20%20',
          title: 'Evaluates to Blank Whitespace ("  ")',
          explanation: 'The parameter contains spaces that pass a simple presence check. If trimmed, its length collapses to zero characters.',
          points: [
            'Trigger: The caller provided spaces or blanks.',
            'Server State: Variable holds spaces; trim() produces an empty string.',
            'Required Defense: Always trim before checking length.'
          ]
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 5: Stop and Plan: Writing the Diagnosis and Repair Card',
    },
    {
      type: 'paragraph',
      text: 'Before modifying a single line of backend code, professional quality engineers pause to write a concrete repair plan. Guessing and randomly editing code creates secondary bugs. Here is the four part repair card for this incident:',
    },
    {
      type: 'structured-breakdown',
      badge: 'REPAIR CARD',
      title: 'The Four Part Incident Diagnosis and Proof Plan',
      intro: 'Write down the diagnosis, the minimal change, and the exact two tests to prove the fix:',
      categories: [
        {
          category: 'Part 1: Observed Evidence',
          subCategory: 'The Facts',
          title: 'Client 500 and Server TypeError',
          explanation: 'The client omitted the route parameter, causing an uncaught exception on the server when trying to trim undefined.',
          points: [
            'The client is at fault for omitting required input.',
            'The server is also at fault for failing to validate inputs before using them.',
          ]
        },
        {
          category: 'Part 2: Root Cause',
          subCategory: 'The Defect',
          title: 'Unchecked Input Dereferencing',
          explanation: 'The server code assumes route is always a valid string and attempts to call string methods before checking presence.',
          points: [
            'Missing input validation guard at controller layer.',
            'Cascades into unhandled 500 error.',
          ]
        },
        {
          category: 'Part 3: Proposed Minimal Repair',
          subCategory: 'The Code Change',
          title: 'Defensive Validation Guard',
          explanation: 'Inspect route first. If route is omitted, empty, or whitespace, immediately return HTTP 400 Bad Request with a clear message.',
          points: [
            'Guard must check both absence and blank strings.',
            'Must return status 400 with { statusCode: 400, error: "route parameter is required" }.',
          ]
        },
        {
          category: 'Part 4: Proof Checks',
          subCategory: 'The Two Verifications',
          title: 'Negative Guard Test and Positive Path Test',
          explanation: 'Verify both execution branches manually to prove stability.',
          points: [
            'Check 1 (Negative): Replay the unchanged failing URL and confirm 400 Bad Request without server crash.',
            'Check 2 (Positive): Send valid route campus_loop_north and confirm 200 OK with coordinates.',
          ]
        }
      ]
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Investigator Insight: Why Fixing Only the Client is Insufficient',
      paragraphs: [
        'A junior engineer might suggest: "Why touch the backend? Just update the mobile app to send the route parameter!"',
        'In enterprise systems, hundreds of third party clients, mobile platforms, web portals, and external partners call the same API. If the server does not defend itself, any single bug in any client will crash server threads, exhaust connection pools, and trigger widespread outages.',
        'Robust engineering requires two separate fixes: the server must defend itself with a 400 validation guard, and the client must supply valid parameters to receive 200 data.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 6: Applying the Defensive Guard and Replaying the Bad Request',
    },
    {
      type: 'paragraph',
      text: 'Now open `shuttle_service.js` in your editor. We install the defensive validation guard at the top of the route handler, before any string manipulation occurs:',
    },
    {
      type: 'code',
      filename: 'shuttle_service_guarded.js',
      lines: [
        '// Defensive Guard installed in shuttle_service.js',
        'app.get("/v1/campus/shuttle/coordinates", (req, res) => {',
        '  const route = req.query.route;',
        '',
        '  // DEFENSIVE GUARD: Catch omitted, empty, and whitespace strings',
        '  if (!route || route.trim() === "") {',
        '    return res.status(400).json({',
        '      statusCode: 400,',
        '      error: "route parameter is required"',
        '    });',
        '  }',
        '',
        '  // Safe to process valid string',
        '  const normalizedRoute = route.trim().toLowerCase();',
        '  const shuttleData = activeRoutes[normalizedRoute];',
        '  if (shuttleData) {',
        '    return res.status(200).json(shuttleData);',
        '  }',
        '  res.status(404).json({ statusCode: 404, error: "Unknown shuttle route" });',
        '});',
      ],
    },
    {
      type: 'comic-workbench',
      badge: 'IDE WORKSPACE · DEFENSIVE INPUT GUARD',
      title: 'Akshay Hardens the Route Handler in the Code IDE',
      intro: 'Akshay opens the IDE to install a defensive input validation guard in shuttle_service.js, protecting server memory from uncaught exceptions.',
      appType: 'ide',
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Junior Automation Engineer',
          text: 'I installed a defensive guard checking (!route || route.trim() === ""). If route is absent or blank, it returns status 400 Bad Request immediately without throwing an uncaught exception!',
          pointer: 'Guard line 6'
        },
        {
          speaker: 'Sameer',
          role: 'Principal Architect',
          text: 'Notice the logical short circuit order, Akshay: we check (!route) first so JavaScript never calls .trim() on undefined. Defensive programming at the API boundary protects our server threads from unhandled crashes!',
          pointer: 'Short circuit OR'
        }
      ],
      ide: {
        file: 'shuttle_service.js',
        activeLine: 6,
        code: `// shuttle_service.js: Hardened Route Handler\napp.get("/v1/campus/shuttle/coordinates", (req, res) => {\n  const route = req.query.route;\n\n  // DEFENSIVE GUARD: Catch omitted, empty, and whitespace strings\n  if (!route || route.trim() === "") {\n    return res.status(400).json({\n      statusCode: 400,\n      error: "route parameter is required"\n    });\n  }\n\n  const normalizedRoute = route.trim().toLowerCase();\n  const shuttleData = activeRoutes[normalizedRoute];\n  if (shuttleData) {\n    return res.status(200).json(shuttleData);\n  }\n  res.status(404).json({ statusCode: 404, error: "Unknown shuttle route" });\n});`,
        terminalOutput: 'Transit Service restarted on http://localhost:3001\nDefensive parameter guard registered for /v1/campus/shuttle/coordinates'
      },
      breakdown: {
        input: 'Any HTTP request missing query parameter route or supplying an empty string.',
        code: 'if (!route || route.trim() === "") {\n  return res.status(400).json({ statusCode: 400, error: "route parameter is required" });\n}',
        explanation: 'The logical OR operator short circuits: if route is undefined or null, (!route) evaluates to true and immediately returns status 400. The second expression route.trim() === "" is only evaluated if route is guaranteed to be a string.',
        output: 'Predictable HTTP 400 Bad Request with informative error body; server terminal remains quiet with zero crashes.',
        trapAndFix: 'Common Trap: Calling route.trim() before checking if route exists. Senior Savior: Always check presence first before invoking string operations.'
      }
    },
    {
      type: 'paragraph',
      text: 'Save the file. In your terminal, stop the running server with `Ctrl + C` and restart it with `node shuttle_service.js`. Now, in your API software, replay the exact same failing request without changing the URL: `GET http://localhost:3001/v1/campus/shuttle/coordinates`:',
    },
    {
      type: 'api-inspector',
      title: 'Local Wire Capture: Guarded Response for Omitted Parameter',
      method: 'GET',
      url: 'http://localhost:3001/v1/campus/shuttle/coordinates',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'ApexCampusMobile/2.4.0 (iOS 17.4)'
      },
      status: '400 Bad Request',
      time: '12 ms',
      size: '184 B',
      responseBody: {
        statusCode: 400,
        error: 'route parameter is required'
      },
      sampleLabel: 'DEFENSIVE 400 WIRE RESPONSE'
    },
    {
      type: 'paragraph',
      text: 'The server did not crash! Instead of an internal 500 error, the service immediately returned `400 Bad Request` with an informative JSON payload explaining that the route parameter is required. Notice that the server console log remains completely quiet: zero unhandled exceptions!',
    },
    {
      type: 'paragraph',
      text: 'Now let us test Case B by sending `GET http://localhost:3001/v1/campus/shuttle/coordinates?route=`. Because `route.trim() === ""` evaluates to true, the server returns the exact same defensive `400 Bad Request`. Both bad input variations are now safely handled.',
    },
    {
      type: 'heading',
      text: 'Step 7: Repairing the Client Call and Verifying 200 OK',
    },
    {
      type: 'paragraph',
      text: 'Now let us perform our second proof check: verifying the positive happy path. The backend guard safely rejected bad inputs, but the mobile transit map still needs real coordinates to function. In your API software request builder, add the query parameter `?route=campus_loop_north`. Click Send:',
    },
    {
      type: 'api-inspector',
      title: 'Local Wire Capture: Fixed Campus Shuttle Request',
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
      sampleLabel: 'SUCCESSFUL 200 WIRE RESPONSE'
    },
    {
      type: 'paragraph',
      text: 'The map unfreezes! The server returns `200 OK` with valid GPS coordinates, shuttle speed, and the estimated arrival time. You proved the exact cause of the crash, added the server defense, and verified the solution with your own eyes on the network wire.',
    },
    {
      type: 'comic-workbench',
      badge: 'API TESTING WORKBENCH · DUAL VERIFICATION & MANUAL FATIGUE',
      title: 'Akshay Manually Verifies the Fleet and Experiences Tester Fatigue',
      intro: 'Akshay switches to the API Testing Workbench to verify that status 200 returns valid GPS telemetry, but discovers the painful limits of manual eyeball checks.',
      appType: 'api-workbench',
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Junior Automation Engineer',
          text: 'With ?route=campus_loop_north, status 200 OK returns valid GPS coordinates! But after manually retyping seven different route names and verifying coordinates with my own eyes, I am exhausted and already making typos!',
          pointer: 'Status 200 OK'
        },
        {
          speaker: 'Sameer',
          role: 'Principal Architect',
          text: 'That is the reality of manual testing, Akshay. When our campus transit fleet grows to 50 routes, clicking Send and inspecting JSON numbers by hand is impossible to sustain. In Chapter 3, we automate these checks with Postman JavaScript assertions so the machine verifies everything in milliseconds!',
          pointer: 'Coordinates payload'
        }
      ],
      workbench: {
        method: 'GET',
        url: 'http://localhost:3001/v1/campus/shuttle/coordinates?route=campus_loop_north',
        environment: 'Apex Campus Local',
        activeTab: 'Params',
        tabContent: 'KEY: route   |   VALUE: campus_loop_north   |   DESCRIPTION: Active shuttle route',
        response: {
          status: '200 OK',
          time: '28 ms',
          size: '286 B',
          format: 'JSON',
          body: `{\n  "route": "campus_loop_north",\n  "shuttleId": "BUS_104",\n  "status": "in_transit",\n  "coordinates": {\n    "latitude": 42.3601,\n    "longitude": -71.0942\n  },\n  "speedMph": 24,\n  "nextStop": "Apex Student Union",\n  "estimatedArrivalMinutes": 3\n}`,
          testResults: [
            { status: 'PASS', name: 'HTTP Status is 200 OK' },
            { status: 'PASS', name: 'Coordinates object contains latitude and longitude numbers' }
          ]
        }
      },
      breakdown: {
        input: 'GET /v1/campus/shuttle/coordinates?route=campus_loop_north',
        code: 'res.status(200).json(shuttleData);',
        explanation: 'With valid query parameters supplied, the guarded route handler passes the defensive boundary, finds the record in system RAM, and returns HTTP 200 OK with full transit telemetry.',
        output: 'HTTP status 200 OK with valid shuttle telemetry and coordinates.',
        trapAndFix: 'Common Trap: Testing only happy path 200 OK and assuming error paths are safe. Senior Savior: Verify both the negative regression guard (400) and the positive contract (200), then automate them immediately to avoid manual fatigue.'
      }
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'What We Carry into Chapter 3: The Two Verified Request Contracts',
      paragraphs: [
        'We have verified two distinct requests by hand:',
        '1. Negative Regression Request: GET /v1/campus/shuttle/coordinates (omitted route) returning 400 Bad Request with JSON body { statusCode: 400, error: "route parameter is required" }.',
        '2. Positive Contract Request: GET /v1/campus/shuttle/coordinates?route=campus_loop_north returning 200 OK with valid numeric coordinates { latitude: 42.3601, longitude: -71.0942 }.',
        'In Chapter 3, we take these exact two requests and automate them inside Postman with JavaScript assertions!',
      ],
    },
    {
      type: 'heading',
      text: 'Step 8: Generalizing the Five HTTP Status Code Families',
    },
    {
      type: 'paragraph',
      text: 'Now that you have observed status codes 200, 400, and 500 live on the network wire, we can generalize how web servers communicate. When a client sends an HTTP request, the server begins its response with a standardized three digit numeric code called an **HTTP Status Code**. The first digit defines the overall family:',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'STATUS CODE MATRIX',
      title: 'The Five HTTP Status Code Families at a Glance',
      text: 'Every HTTP status code belongs to one of five distinct families: 1xx Informational, 2xx Success, 3xx Redirection, 4xx Client Error, and 5xx Server Failure.',
      src: crudImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/restful-crud-status-guide.jpg',
      w: 1408,
      h: 768,
      alt: 'Visual guide to HTTP status code families from 100 to 599.',
      caption: 'The Status Code Compass: Directing developers to the exact layer of success or failure.',
      points: [
        '2xx (Success): Everything went smoothly and the requested action was fulfilled (observed in our 200 OK coordinate response).',
        '4xx (Client Error): The caller made a mistake, such as omitting a required parameter (observed in our 400 Bad Request guard).',
        '5xx (Server Error): The server encountered an unhandled crash or exception (observed in our initial 500 TypeError crash).',
      ],
    },
    {
      type: 'structured-breakdown',
      badge: 'STATUS CODE FAMILIES',
      title: 'Deconstructing the Five Status Code Families',
      intro: 'Understanding these five ranges lets you instantly identify where a web failure originated:',
      categories: [
        {
          category: '2xx Series',
          subCategory: '200 to 299',
          title: 'Success Codes: Action Completed Gracefully',
          explanation: 'Confirms that the client request was successfully received, understood, and accepted by the backend application.',
          points: [
            '200 OK: Standard successful response for GET, PUT, or general queries.',
            '201 Created: The request succeeded and a brand new database record was created (standard for POST).',
            '204 No Content: Action succeeded but there is no response body to return (common for DELETE).'
          ]
        },
        {
          category: '4xx Series',
          subCategory: '400 to 499',
          title: 'Client Error Codes: The Caller Made a Mistake',
          explanation: 'Indicates that the request contains invalid syntax, missing parameters, or unauthorized tokens.',
          points: [
            '400 Bad Request: Malformed syntax, invalid JSON formatting, or missing required parameters.',
            '401 Unauthorized: Caller lacks valid authentication credentials (such as an API token).',
            '403 Forbidden: Caller identity is known, but they do not possess permissions to view this resource.',
            '404 Not Found: The requested URL endpoint does not exist on this server.'
          ]
        },
        {
          category: '5xx Series',
          subCategory: '500 to 599',
          title: 'Server Error Codes: The Backend Crashed',
          explanation: 'Proves that the client sent a request, but the server encountered an internal software crash, null dereference, or database failure.',
          points: [
            '500 Internal Server Error: Unhandled programming exception or fatal software defect on the server.',
            '502 Bad Gateway: Upstream server or proxy returned an invalid response.',
            '503 Service Unavailable: Server is overloaded or undergoing maintenance.',
            '504 Gateway Timeout: Server failed to respond before the network connection expired.'
          ]
        },
        {
          category: '1xx and 3xx Series',
          subCategory: '100 to 199 and 300 to 399',
          title: 'Informational and Redirection Codes',
          explanation: 'Specialized protocol signaling codes for connection handshakes and URL relocations.',
          points: [
            '100 Continue: Server acknowledges the initial headers and tells the client to send the body.',
            '301 Moved Permanently: The resource has permanently relocated to a new address.',
            '304 Not Modified: Cached client response is still fresh; saves network bandwidth.'
          ]
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 9: Sourced Case Study: The Healthcare.gov Launch Outage',
    },
    {
      type: 'source-note',
      label: 'Verified Historical Case Study · August 2014',
      claim: 'Healthcare.gov Early Outages Case Study Documenting Integration Bottlenecks and Access Failures',
      url: 'https://oig.hhs.gov/documents/evaluation/2981/OEI-06-14-00350-Complete%20Report.pdf',
      verifiedThrough: 'United States Department of Health and Human Services (HHS) Office of Inspector General Report OEI-06-14-00350'
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The Real World Cost of Untested Dependencies: Healthcare.gov Launch',
      paragraphs: [
        'On October 1, 2013, the United States federal health insurance exchange opened to the public. Within minutes, the system slowed to a crawl and crashed for millions of citizens.',
        'The Department of Health and Human Services Inspector General report documented capacity bottlenecks, cross agency timeout dependencies, and lack of end to end integration testing before release. When identity verification services became overloaded, downstream systems faced cascading unhandled timeouts and generic 500 crashes instead of graceful degradation or early validation.',
        'The Takeaway: Always test error status codes. An API must handle missing or invalid inputs gracefully with 4xx codes rather than crashing the system with unhandled 5xx server exceptions.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 10: Final Understanding Gate: Independent Diagnosis Challenge',
    },
    {
      type: 'paragraph',
      text: 'Before moving to Chapter 3, test your diagnostic reasoning on a brand new case. Suppose a client sends `GET /v1/campus/shuttle/coordinates?route=%20%20` (a present query parameter containing only spaces). Consider the four questions below:',
    },
    {
      type: 'structured-breakdown',
      badge: 'DIAGNOSTIC GATE',
      title: 'Independent Understanding Challenge',
      intro: 'Evaluate this new request against our guarded server code:',
      categories: [
        {
          category: 'Question 1: Parameter Condition',
          subCategory: 'Classification',
          title: 'Is this parameter omitted, empty, or whitespace only?',
          explanation: 'The parameter is present in the query string, but its content consists entirely of URL encoded spaces (%20%20). This represents Case C: Whitespace Only.',
          points: [
            'Presence check if (!route) evaluates to false because the string exists.',
            'Trimming the string collapses its length to zero characters.',
          ]
        },
        {
          category: 'Question 2: Guard Behavior',
          subCategory: 'Predicted Response',
          title: 'Which condition catches this request, and what status is returned?',
          explanation: 'The check route.trim() === "" evaluates to true. The server immediately returns HTTP 400 Bad Request with { statusCode: 400, error: "route parameter is required" }.',
          points: [
            'Guards against invisible blank queries that would fail in the database.',
            'Protects backend resources from executing empty string lookups.',
          ]
        },
        {
          category: 'Question 3: Client Remediation',
          subCategory: 'The Fix',
          title: 'What must the caller send to receive active coordinates?',
          explanation: 'The client must pass a real, non blank route identifier: ?route=campus_loop_north.',
          points: [
            'Client must supply valid business identifiers.',
            'The backend cannot guess which route the student needs.',
          ]
        },
        {
          category: 'Question 4: Test Philosophy',
          subCategory: 'Why Test Both?',
          title: 'Why do quality engineers test both bad and valid calls after every fix?',
          explanation: 'Testing only the valid call proves the feature works under ideal conditions, but misses regression crashes. Testing only the bad call proves error safety, but cannot confirm if real users receive data. You must test both to guarantee total system reliability.',
          points: [
            'Negative test proves system resilience against crashes.',
            'Positive test proves business fulfillment for users.',
          ]
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 11: Review and Practice',
    },
    {
      type: 'triage',
      title: 'War Room Triage: Distinguishing Client Errors from Server Crashes',
      scenario: 'A student submits a book loan request through the campus library API. The server returns HTTP status 400 Bad Request with message "Return date cannot be earlier than checkout date". Who is responsible for this failure?',
      options: [
        'The backend database server crashed and needs to be restarted immediately',
        'The client application sent invalid request data that violates business rules, so the caller must fix the date parameters',
        'The network internet cable was disconnected during transmission',
        'The Postman application is missing a software license'
      ],
      answerIndex: 1,
      debrief: 'Client error identified! The 4xx family explicitly signifies client side issues: the caller transmitted data that violated business validation rules. The backend functioned perfectly by rejecting the impossible dates and returning a helpful error message.',
      traps: [
        'Database crashes result in 500 Internal Server Error, not 400.',
        'Network disconnections trigger local network timeouts, not HTTP response codes.',
        'Postman executes requests without requiring commercial licenses for manual testing.'
      ]
    },
    {
      type: 'quiz',
      items: [
        [
          'What is the fundamental difference between an omitted parameter and an empty parameter?',
          'An omitted parameter is completely absent from the URL (evaluating to undefined or null in server memory), which can trigger uncaught dereference crashes if not checked. An empty parameter is present as a defined variable with zero characters (such as ?route=), which can still produce invalid database queries if not trimmed and validated.',
        ],
        [
          'Why did the campus shuttle locator service crash with HTTP 500 when the route parameter was omitted?',
          'The backend code failed to implement defensive parameter validation. When the query parameter was completely omitted, req.query.route evaluated to undefined. The service attempted to invoke trim() on this undefined reference, triggering an unhandled TypeError that crashed the request.',
        ],
        [
          'If a client requests a web address that does not exist on the server, what status code should be returned?',
          'The server should return HTTP 404 Not Found, indicating that the requested URL path could not be mapped to any server resource.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'HTTP status codes provide an instant, unambiguous diagnosis of where a transaction succeeded or broke.',
        'The 2xx series confirms success, 4xx series identifies client caller errors, and 5xx series proves backend server crashes.',
        'When diagnosing production defects, never rely on frontend screen behavior; inspect the raw request and response wire packets.',
        'Query parameters in URLs allow clients to filter or specify target resources; omitting required parameters must be handled defensively with 400 Bad Request.',
        'Always test both branches: verify that bad input is safely rejected with 400, and verify that valid input returns 200 with required data.',
      ],
    },
    {
      type: 'cliffhanger',
      title: 'From Human Eyes to Automated Test Scripts',
      text: 'You solved the campus transit crisis by hand! But what happens tomorrow when developers deploy code updates at 3:00 AM? You cannot sit at your computer clicking Send manually all night. In Chapter 3, we automate this exact verification using Postman JavaScript test assertions and assemble an executable collection!',
    },
  ],
}
