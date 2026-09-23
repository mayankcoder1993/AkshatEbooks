import warRoomImg from '../assets/apex-campus-crisis-war-room.jpg'
import wireImg from '../assets/http-wire-anatomy.jpg'
import crudImg from '../assets/restful-crud-status-guide.jpg'

export const lesson02 = {
  id: 'rest-crud-status',
  icon: '',
  title: 'Investigating the Incident: Manual Wire Auditing and Status Codes',
  shortTitle: 'Manual Wire Auditing',
  subtitle: 'The campus transit shuttle crisis, dissecting the five status code families, chunking the failing request, and discovering the 500 crash by hand.',
  tags: ['REST', 'HTTP', 'Status Codes', 'Triage', 'Manual Testing', 'Investigation'],
  blocks: [
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
      text: 'Today is launch day for the new Apex Campus student portal. Outside on university avenues, hundreds of students stand at bus stops waiting for the campus shuttle. When they open the mobile app to check the live transit map, the screen locks into an endless spinning circle. In the engineering war room, tension is high: mobile frontend developers argue that their user interface is flawless and blame server outages; backend engineers insist the database cluster is healthy and blame mobile network disconnects. As the API Quality Engineer, you do not guess or take sides: you inspect the invisible network wire directly to discover the truth.',
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
          'The Plan: Inspect the exact HTTP request by hand, see the raw server response, and isolate the break.',
        ],
      },
    },
    {
      type: 'heading',
      text: 'Step 1: The Language of the Server: The Five Status Code Families',
    },
    {
      type: 'paragraph',
      text: 'When a client sends an HTTP request, the server cannot talk back with spoken words. Instead, it begins its response with a standardized three digit numeric code called an **HTTP Status Code**. The first digit defines the overall family of the outcome:',
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
        '2xx (Success): Everything went smoothly and the requested action was fulfilled.',
        '4xx (Client Error): The caller made a mistake, such as omitting a required parameter or sending bad credentials.',
        '5xx (Server Error): The server encountered an unhandled crash or database failure while processing a valid request.',
      ],
    },
    {
      type: 'structured-breakdown',
      badge: 'STATUS CODE FAMILIES',
      title: 'Deconstructing the Five Status Code Families',
      intro: 'Understanding these five ranges lets you instantly identify where a web failure originated:',
      categories: [
        {
          category: '1xx Series',
          subCategory: '100 to 199',
          title: 'Informational Codes: Request Received',
          explanation: 'Tells the client that the initial request headers have been received and that processing is continuing over the network connection.',
          points: [
            '100 Continue: Server acknowledges the initial headers and tells the client to send the body.',
            '101 Switching Protocols: Used when upgrading a standard HTTP connection to a live real time WebSocket.'
          ]
        },
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
          category: '3xx Series',
          subCategory: '300 to 399',
          title: 'Redirection Codes: Further Action Required',
          explanation: 'Informs the client that the requested resource has relocated and that the client must visit a different URL to retrieve it.',
          points: [
            '301 Moved Permanently: The resource has permanently relocated to a new address.',
            '302 Found: The resource is temporarily reachable at an alternate location.',
            '304 Not Modified: Cached response is still fresh; saves network bandwidth by sending zero body data.'
          ]
        },
        {
          category: '4xx Series',
          subCategory: '400 to 499',
          title: 'Client Error Codes: The Caller Made a Mistake',
          explanation: 'Indicates that the request contains invalid syntax, missing authentication, or points to an address that does not exist.',
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
          explanation: 'Proves that the client sent a request, but the server encountered an internal software crash, null pointer exception, or database timeout.',
          points: [
            '500 Internal Server Error: Unhandled programming exception or fatal software defect on the server.',
            '502 Bad Gateway: Upstream server or proxy returned an invalid response.',
            '503 Service Unavailable: Server is overloaded or undergoing maintenance.',
            '504 Gateway Timeout: Server failed to respond before the network connection expired.'
          ]
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 2: Inspecting the Failing Bus Request in Chunks',
    },
    {
      type: 'paragraph',
      text: 'Let us isolate the exact network request triggered when the mobile app opens the bus tracking screen. Rather than looking at a massive wall of text, we break the outgoing message into clean structural chunks:',
    },
    {
      type: 'chunked-code',
      badge: 'REQUEST CHUNKS',
      title: 'The Outgoing Campus Bus Location Request',
      intro: 'Here is what the mobile phone dispatched over the network wire:',
      chunks: [
        {
          label: 'Request Verb and Resource Path',
          filename: 'request_line.http',
          code: 'GET /v1/campus/shuttle/coordinates?route= HTTP/1.1\nHost: api.campustransit.org',
          title: 'The Verb and Query String',
          explanation: 'The mobile app calls the shuttle coordinates endpoint using an HTTP GET verb. Notice the query parameter: `route=` has an empty string!',
          keyTakeaway: 'The mobile app code forgot to attach the selected route name to the query string.'
        },
        {
          label: 'Request Metadata Headers',
          filename: 'headers.http',
          code: 'Accept: application/json\nUser-Agent: ApexCampusMobile/2.4.0 (iOS 17.4)\nAuthorization: Bearer campus_student_tok_9918',
          title: 'Client Identification and Auth',
          explanation: 'The mobile phone identifies itself as the official student app and passes a valid Bearer authentication token.',
          keyTakeaway: 'The client is properly authenticated; the credentials are not the problem.'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 3: Imagine and Predict the Output',
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'When this request arrives at the backend server with an empty query parameter (?route=), how will an unhardened backend service respond?',
      options: [
        '200 OK with GPS coordinates for every bus in the state',
        '500 Internal Server Error because the backend software code threw an unhandled NullPointerException when parsing the empty route string',
        '201 Created with a brand new bus route entry added to the database',
        '301 Moved Permanently redirecting the phone to an external commercial mapping site'
      ],
      answerIndex: 1,
      revealTitle: 'Raw Wire Response from Server',
      explanation: 'The backend crashed! Because the backend developer wrote `String routeName = request.getParameter("route"); routeName.toUpperCase();` without checking for empty values, the server threw a fatal NullPointerException and crashed with a 500 Internal Server Error!'
    },
    {
      type: 'heading',
      text: 'Step 4: The Live Wire Reveal: Finding the 500 Error by Hand',
    },
    {
      type: 'paragraph',
      text: 'Here is the raw response captured directly from the server when we execute the failing call in our HTTP workbench:',
    },
    {
      type: 'api-inspector',
      title: 'Live Wire Capture: Failing Campus Shuttle Request',
      method: 'GET',
      url: 'https://api.campustransit.org/v1/campus/shuttle/coordinates?route=',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer campus_student_tok_9918'
      },
      status: '500 Internal Server Error',
      time: '14 ms',
      size: '342 B',
      responseBody: {
        statusCode: 500,
        error: 'Internal Server Error',
        exception: 'java.lang.NullPointerException',
        message: 'Parameter route cannot be null or empty string at RouteLocatorService.java:42',
        timestamp: '2026-09-23T09:15:00Z'
      }
    },
    {
      type: 'callout',
      variant: 'danger',
      title: 'The Truth Uncovered: Both Teams Shared the Blame',
      paragraphs: [
        '1. The Mobile Team Flaw: The mobile app had a coding bug: on startup, it failed to initialize the default route selection, sending `?route=` as an empty string.',
        '2. The Backend Team Flaw: The server had an unhandled exception: instead of validating input and returning a polite `400 Bad Request` with message "Please provide a valid route name", the backend crashed with an unhandled `500 Internal Server Error` and leaked internal code line numbers.',
        '3. This is why API testing is indispensable: neither team could see the real defect by staring at their own code. The network wire revealed the truth in seconds!',
      ],
    },
    {
      type: 'heading',
      text: 'Step 5: Sourced Case Study: The Healthcare.gov Launch Outage',
    },
    {
      type: 'source-note',
      label: 'Verified Historical Case Study · October 2013',
      claim: 'Healthcare.gov Launch Paralysis Caused by Unhandled Gateway Timeouts and Cascading 500 Failures',
      url: 'https://oig.hhs.gov/oei/reports/oei-03-14-00230.pdf',
      verifiedThrough: 'United States Department of Health and Human Services (HHS) Office of Inspector General'
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The Cost of Unhandled 500 Cascades: Healthcare.gov Launch Meltdown',
      paragraphs: [
        'On October 1, 2013, the United States federal health insurance exchange opened to the public. Within minutes, the system slowed to a crawl and crashed for millions of citizens.',
        'The Department of Health and Human Services Inspector General report documented that cross agency microservices relied on synchronous backend API requests with missing input validation. When identity verification services became overloaded, downstream gateways returned generic 500 errors and unhandled timeouts instead of graceful queues.',
        'Because user registration was blocked at the API layer, only six people successfully registered for health plans on the entire first day of nationwide launch!',
        'The Takeaway: Always test error status codes. An API must handle invalid inputs gracefully with 4xx codes rather than crashing the system with 5xx server exceptions.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 6: Performing the Manual Fix: Verifying 200 OK by Hand',
    },
    {
      type: 'paragraph',
      text: 'Now let us perform the manual fix. In our HTTP testing workbench, we provide the valid campus route name: `campus_loop_north`. We send the request by hand and inspect the response:',
    },
    {
      type: 'chunked-code',
      badge: 'CORRECTED WIRE CALL',
      title: 'The Corrected Campus Transit Request',
      intro: 'We supply the missing query parameter to verify the service works:',
      chunks: [
        {
          label: 'Corrected Request Line',
          filename: 'fixed_request.http',
          code: 'GET /v1/campus/shuttle/coordinates?route=campus_loop_north HTTP/1.1\nHost: api.campustransit.org',
          title: 'Valid Parameter Passed',
          explanation: 'By providing the exact route identifier `campus_loop_north`, the server can query the GPS database properly.',
          keyTakeaway: 'Query parameters must always match the required backend contract schema.'
        }
      ]
    },
    {
      type: 'api-inspector',
      title: 'Live Wire Capture: Fixed Campus Shuttle Request',
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
      }
    },
    {
      type: 'paragraph',
      text: 'The map unfreezes! The server returns `200 OK` with valid GPS coordinates, shuttle speed, and the estimated arrival time. You proved the exact cause of the crash and verified the solution with your own eyes on the network wire!',
    },
    {
      type: 'heading',
      text: 'Step 7: Review and Practice',
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
        '',
        'Network disconnections trigger local network timeouts, not HTTP response codes.',
        'Postman executes requests without requiring commercial licenses for manual testing.'
      ]
    },
    {
      type: 'quiz',
      items: [
        [
          'What does the first digit of an HTTP status code represent?',
          'The first digit represents the status family: 1xx Informational, 2xx Success, 3xx Redirection, 4xx Client Error, and 5xx Server Failure.',
        ],
        [
          'Why did the campus shuttle locator service crash with HTTP 500 when route was empty?',
          'The backend code failed to implement defensive parameter validation. When the query parameter was empty, the service attempted to invoke methods on a null object, throwing an unhandled exception.',
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
        'Query parameters in URLs allow clients to filter or specify target resources; omitting required parameters must be handled gracefully.',
      ],
    },
    {
      type: 'cliffhanger',
      title: 'From Human Eyes to Automated Test Scripts',
      text: 'You solved the campus transit crisis by hand! But what happens tomorrow when developers deploy code updates at 3:00 AM? You cannot sit at your computer clicking Send manually all night. In Chapter 3, we automate this exact verification using Postman JavaScript test assertions and assemble an executable collection!',
    },
  ],
}
