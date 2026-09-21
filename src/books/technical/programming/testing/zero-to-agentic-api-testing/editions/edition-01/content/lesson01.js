import restaurantImg from '../assets/api-concept-restaurant.jpg'
import bridgeImg from '../assets/frontend-backend-api-bridge.jpg'
import matrixImg from '../assets/api-architectures-matrix.jpg'
import pyramidImg from '../assets/testing-pyramid-focus.jpg'

export const lesson01 = {
  id: 'understanding-apis',
  icon: '',
  title: 'Understanding APIs from First Principles',
  shortTitle: 'Understanding APIs',
  subtitle: 'The campus interoperability crisis, client server decoupling, the restaurant analogy, and inspecting live payloads across the network wire.',
  tags: ['APIs', 'Client Server', 'JSON', 'REST', 'Fundamentals', 'Architecture'],
  blocks: [
    {
      type: 'mission',
      title: 'Mission 1: The Core Protocol and Campus Cloud Integration',
      text: 'Welcome to the Apex Campus Enterprise Cloud Platform. As our Lead API Test Automation Architect, you are stepping directly into an urgent engineering crisis: our university is launching a flagship digital campus across web, mobile, and external academic partners. The frontend engineering team built a student mobile application in TypeScript and React Native. The backend infrastructure team built the core academic catalog and transit services in Java Spring Boot and Python, storing records in an enterprise PostgreSQL database. On launch day preview, the mobile application crashed repeatedly because data contracts were mismatched and unverified over the wire. Infosec strictly forbids sharing database passwords with frontend devices or external partners. Across our opening three chapters, your mission is to investigate the invisible network wire: mastering what APIs are, decoding HTTP requests and responses, establishing the single source of truth contract, examining backend code blueprints, validating live payloads across the web, and setting up an automated Postman testing workbench for the entire engineering organization.',
      weKnow: [
        'Web pages and mobile applications never store entire university databases inside client device memory.',
        'Whenever an application displays student grades, courses, or campus transit locations, it dispatches background network requests across the wire.',
        'Without inspecting the API layer directly, quality engineering teams cannot distinguish between user interface glitches and serious backend server crashes.',
      ],
      weNeed: [
        'An intuitive mental model explaining how decoupled clients and servers communicate without sharing internal code or database credentials.',
        'An inspection of how backend engineers construct APIs using modern route decorators and automatic JSON serializers.',
        'Hands on experience inspecting live, authentic API payloads directly in your browser without requiring local server setup or complex tooling.',
        'A clear architectural foundation of why API testing is the highest leverage tier in the modern testing pyramid.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 1: The Campus Interoperability Crisis and the Waiter Analogy',
    },
    {
      type: 'paragraph',
      text: 'API stands for **Application Programming Interface**. At its core, an API is a software messenger and formal contract that allows two completely independent computer programs to communicate and exchange data securely across networks.',
    },
    {
      type: 'paragraph',
      text: 'To understand why APIs are the backbone of modern software, consider the architectural reality of our Apex Campus platform. The student mobile application is compiled into mobile device packages written in TypeScript and React Native. The core course catalog runs on remote enterprise servers written in Java Spring Boot. Can the mobile phone directly invoke a Java method or execute raw SQL against the production PostgreSQL database? Absolutely not. A mobile operating system cannot execute remote Java bytecode. Furthermore, embedding database connection strings inside mobile apps would allow any malicious actor to decompile the app and steal the entire campus student directory.',
    },
    {
      type: 'paragraph',
      text: 'Think of visiting a busy campus dining hall or ordering a meal at a restaurant. You do not walk into the kitchen, open the industrial refrigerator, turn on the stove, or assemble your own dish. Doing so would violate health safety rules and cause complete operational chaos. Instead, you look at the printed menu, select your meal, and give your order to the waiter. The waiter carries your request to the kitchen, the chefs prepare your food according to the recipe, and the waiter delivers the finished dish back to your table.',
    },
    {
      type: 'image',
      layout: 'stacked',
      src: restaurantImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-concept-restaurant.jpg',
      w: 1408,
      h: 768,
      alt: 'The classic restaurant waiter analogy illustrating how an API mediates between a customer and the kitchen backend.',
      caption: 'The restaurant analogy: an API acts as the waiter between client and server.',
      points: [
        'Step 1 (Client Makes Request): The student selects an action on their phone, and the client application formats an HTTP request.',
        'Step 2 (Waiter Places Order to Kitchen): The API transmits the request securely across the network wire to the backend server.',
        'Step 3 (Kitchen Processes and Returns Data): The server executes business logic, verifies database records, and returns structured data to the API.',
        'Step 4 (API Delivers Response): The API returns the completed JSON response to the client screen for immediate display.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 2: Real World Integrations: How External Academic Partners Connect',
    },
    {
      type: 'paragraph',
      text: 'Modern digital platforms do not exist in isolation. Our campus must constantly interact with external ecosystem partners: state scholarship agencies verifying active enrollment, student loan providers approving disbursements, and regional housing portals matching student housing.',
    },
    {
      type: 'paragraph',
      text: 'How do global aggregators like Booking.com display room availability and prices across worldwide hotel chains like Marriott or Hilton? Marriott will never share their internal Java code or production database passwords with hundreds of external travel websites. Doing so would destroy their system security and invite catastrophic data corruption.',
    },
    {
      type: 'paragraph',
      text: 'Instead, Marriott exposes a secure public API endpoint. Travel aggregators send an authorized HTTP request specifying dates and room criteria. The hotel API verifies the request credentials, retrieves real time inventory from internal databases, and returns a clean, structured JSON response.',
    },
    {
      type: 'paragraph',
      text: 'Similarly, when our campus mobile app verifies student transit discounts or detects whether a student is currently within campus boundaries, we do not build a global mapping satellite network from scratch. Instead, our application integrates with commercial grade geolocation services such as the **BigDataCloud Free Reverse Geocoding API**. The mobile device passes geographical latitude and longitude coordinates over HTTP, and the remote edge service instantly resolves the administrative locality, city, and postal code in clean JSON format.',
    },
    {
      type: 'heading',
      text: 'Step 3: How Frontends and Backends Communicate Across Networks',
    },
    {
      type: 'paragraph',
      text: 'In enterprise engineering, systems are deliberately separated into distinct tiers: user facing client applications, the API network contract wire, backend microservices, and persistent databases. The API serves as the universal bridge uniting these tiers across the network.',
    },
    {
      type: 'image',
      layout: 'stacked',
      src: bridgeImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/frontend-backend-api-bridge.jpg',
      w: 1408,
      h: 768,
      alt: 'Architectural blueprint showing frontend mobile clients and external partner portals communicating with the backend microservices and databases through the API network bridge.',
      caption: 'The API Network Bridge: Decoupling frontend clients from backend systems over HTTP.',
      points: [
        'Zone 1 (Clients and Consumers): React Native mobile apps, Angular web portals, and Python partner services initiate user requests without seeing backend internals.',
        'Zone 2 (The API Network Wire): Requests and responses travel across standard HTTP using universal JSON and XML contracts, mediated by the API Gateway.',
        'Zone 3 (Backend Services and Database): Java Spring Boot and Node.js microservices enforce security and query internal PostgreSQL database clusters.',
        'Architectural Decoupling: Teams can update, rewrite, or scale frontend and backend technologies completely independently without breaking existing contracts.',
      ],
    },
    {
      type: 'comparison',
      title: 'Connecting Multiple Technologies Through One API Bridge',
      columns: ['Technology Layer', 'Popular Tools and Languages', 'Role in the Campus Architecture'],
      rows: [
        ['Frontend Clients', 'React Native, Angular, iOS Swift, Android Kotlin', 'Renders buttons, course search filters, and profile screens for students and faculty.'],
        ['The API Contract', 'HTTP Protocol, REST Guidelines, JSON and XML Schemas', 'The universal specification and rules defining valid requests, responses, and data shapes.'],
        ['Backend Microservices', 'Java Spring Boot, Node.js, Python FastAPI, Go', 'Enforces business rules, validates prerequisite courses, and handles financial calculations.'],
        ['Persistence Layer', 'PostgreSQL, MySQL, MongoDB, Redis Caches', 'Securely stores course catalogs, student records, enrollment status, and credentials.'],
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'The Power of Language Decoupling',
      paragraphs: [
        'Because APIs communicate through standardized network protocols and plain text JSON payloads, they provide complete technology independence.',
        'The mobile engineering team can rewrite the student app in Flutter or Swift without changing a single line of backend code.',
        'The infrastructure team can migrate the backend from Java to Go or upgrade the database from MySQL to PostgreSQL without breaking the mobile app.',
        'As long as the API contract remains respected and unaltered, both sides can evolve and innovate at their own rapid pace.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 4: The Developer Blueprint: How Backends Build APIs',
    },
    {
      type: 'paragraph',
      text: 'To test an API with confidence, it helps to demystify what happens on the server side. Fresh testers often view backend APIs as mysterious black boxes. In reality, building an API endpoint requires only a few lines of code.',
    },
    {
      type: 'paragraph',
      text: 'Here is an authentic backend blueprint showing how our engineering team builds a campus location resolver service using Python and FastAPI. You do not need to execute or write backend code; studying this blueprint reveals exactly how servers receive requests and return responses:',
    },
    {
      type: 'code',
      filename: 'campus-location-service.py',
      lines: [
        'from fastapi import FastAPI',
        '',
        'app = FastAPI(title="Apex Campus Geolocation Service")',
        '',
        '# Define an HTTP GET route for resolving student campus boundaries',
        '@app.get("/v1/location/resolve")',
        'def resolve_campus_location(latitude: float, longitude: float):',
        '    # The server inspects the query parameters and evaluates campus zones',
        '    is_on_main_campus = (37.40 <= latitude <= 37.45) and (-122.10 <= longitude <= -122.05)',
        '    ',
        '    return {',
        '        "status": "success",',
        '        "campus": "North Innovation Campus",',
        '        "coordinates": {"latitude": latitude, "longitude": longitude},',
        '        "city": "Mountain View",',
        '        "verified_on_campus": is_on_main_campus',
        '    }',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Three Server Side Secrets Every API Tester Should Know',
      paragraphs: [
        '1. The Route Decorator: Notice `@app.get("/v1/location/resolve")`. This instructs the web server to listen specifically for HTTP GET requests matching that exact URL path.',
        '2. Automatic Query Parameter Mapping: The function arguments `latitude` and `longitude` are automatically populated from the incoming URL query string (such as `?latitude=37.42&longitude=-122.08`).',
        '3. Automatic JSON Serialization: When the function returns a native dictionary, the framework automatically converts it into structured JSON text and sets the HTTP status code to 200 OK.',
        'As Lead Test Automation Architects, we do not need to maintain their backend code. Our mission is to test the contract from the outside, verifying that valid inputs return expected data and invalid inputs are caught safely before reaching users.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 5: Inspecting Live API Payloads Across the Global Web',
    },
    {
      type: 'paragraph',
      text: 'You do not need to install complex desktop software or launch local terminal servers to observe an API in action. Your everyday web browser is already an HTTP client capable of dispatching live GET requests. When you enter a URL into your browser address bar and press Enter, the browser sends an HTTP GET request to the remote host and displays the response payload.',
    },
    {
      type: 'paragraph',
      text: 'Click each link below to inspect real, globally accessible live JSON API payloads in your browser right now on any phone, tablet, or laptop:',
    },
    {
      type: 'steps',
      items: [
        '1. BigDataCloud Reverse Geocoding API: Open [BigDataCloud Geocoding Endpoint](https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=37.42159&longitude=-122.0837&localityLanguage=en). Notice how the public service accepts geographical coordinates and returns immediate locality data: continent, country, subdivision, city, and postal code in clean JSON format.',
        '2. Apex Campus Academic Catalog Contract: Open [Campus Academic Catalog JSON](https://raw.githubusercontent.com/mayankcoder1993/AkshatEbooks/arena/01a0bfe5-akshatebooks/course-materials/zero-to-agentic-api-testing/lesson-01/campus-catalog.json). Notice how the response delivers all four campus courses (Computer Systems, Data Structures, Agentic API Automation, Digital Logic) as clean, structured JSON key value pairs.',
        '3. Global Developer Profile API: Open [GitHub Octocat Profile](https://api.github.com/users/octocat). The remote GitHub server answers with a structured JSON object detailing login username, public repository counts, and account creation timestamps.',
      ],
    },
    {
      type: 'paragraph',
      text: 'To understand what happens behind the scenes during an automated API test, inspect our live interactive wire inspector below. You can test sending the request, examine the response headers and payload body, and verify the automated assertions:',
    },
    {
      type: 'api-inspector',
      title: 'Live Interactive Wire Inspector: Campus Academic Catalog',
      method: 'GET',
      url: 'https://api.campuslibrary.org/v1/catalog',
      headers: {
        'Accept': 'application/json',
        'User Agent': 'Campus QA Automation Architect'
      },
      status: '200 OK',
      time: '34 ms',
      size: '562 B',
      responseBody: {
        institution: 'Apex Campus Global Platform',
        academic_year: '2026-2027',
        total_courses: 4,
        courses: [
          { code: 'CS101', title: 'Foundations of Computer Systems', department: 'Computer Science', credits: 4, status: 'Active' },
          { code: 'CS204', title: 'Data Structures and Algorithms', department: 'Computer Science', credits: 4, status: 'Active' },
          { code: 'QA301', title: 'Agentic API Automation and Quality', department: 'Software Engineering', credits: 3, status: 'Active' },
          { code: 'EE210', title: 'Digital Logic and Microprocessors', department: 'Electrical Engineering', credits: 4, status: 'Active' }
        ]
      },
      assertions: [
        'Response HTTP status code is 200 OK',
        'Response Content Type is application/json',
        'Institution matches Apex Campus Global Platform',
        'Total courses count is equal to four'
      ]
    },
    {
      type: 'heading',
      text: 'Step 6: Why UI Automation Fails: The Testing Pyramid',
    },
    {
      type: 'paragraph',
      text: 'Why did the campus launch day test fail even though the team wrote automated browser tests? The answer lies in the **Testing Pyramid**, a fundamental software engineering doctrine formulated by Mike Cohn.',
    },
    {
      type: 'image',
      layout: 'stacked',
      src: pyramidImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/testing-pyramid-focus.jpg',
      w: 1408,
      h: 768,
      alt: 'The software testing pyramid showing Unit tests at the bottom, Service and API tests in the high leverage middle tier, and UI tests at the top.',
      caption: 'The Testing Pyramid: API testing delivers maximum speed and reliability.',
      points: [
        'UI Tests (Top Tier): Slow, fragile, and expensive to maintain. A small button redesign or font adjustment can break dozens of automated browser tests even when backend logic works perfectly.',
        'API Tests (Middle Tier): Fast, reliable, and exceptionally high leverage. Tests execute across raw network packets in milliseconds, validating core business logic, contracts, and security directly.',
        'Unit Tests (Bottom Tier): Lightning fast tests written by developers for isolated code functions, but completely incapable of verifying network integrations, database transactions, or multi system handshakes.',
      ],
    },
    {
      type: 'paragraph',
      text: 'By focusing our automation strategy on the API layer, we catch critical bugs early in the deployment pipeline. API tests do not wait for browsers to render CSS styles or load heavy JavaScript bundles. They validate the actual business contracts at machine speed.',
    },
    {
      type: 'heading',
      text: 'Step 7: The Four Major Enterprise API Architectural Styles',
    },
    {
      type: 'paragraph',
      text: 'While REST represents the most dominant architectural style across modern cloud applications, enterprise ecosystems like our campus utilize multiple specialized API paradigms:',
    },
    {
      type: 'image',
      layout: 'stacked',
      src: matrixImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-architectures-matrix.jpg',
      w: 1408,
      h: 768,
      alt: 'Architectural comparison matrix contrasting REST, GraphQL, SOAP, and gRPC across data formats, transport protocols, and use cases.',
      caption: 'Comparing the four major enterprise API architectural styles.',
      points: [
        'REST (Representational State Transfer): Uses HTTP verbs and standard JSON payloads. Powers our campus web and mobile services in Missions 1 and 2.',
        'GraphQL: Exposes a single flexible endpoint allowing clients to query exact fields in one roundtrip, preventing data bloat.',
        'SOAP (Simple Object Access Protocol): Strict, XML based protocol with rigorous enterprise schemas, common in banking and legacy registrar records.',
        'gRPC: High performance binary protocol created by Google for microsecond communication between internal microservices.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 8: Mission 1 Execution Plan: The Road to Automated Quality',
    },
    {
      type: 'paragraph',
      text: 'Now that you have audited the network wire and grasped the foundational principles of APIs, our Mission 1 roadmap unfolds across the next two chapters:',
    },
    {
      type: 'steps',
      items: [
        'Chapter 1 (Complete): You established why APIs exist, demystified client server decoupling, examined the FastAPI backend blueprint, inspected live JSON payloads in your browser, and positioned API testing at the core of our quality strategy.',
        'Chapter 2 (Next Step): We decode the HTTP wire itself. You will master the five HTTP methods (GET, POST, PUT, PATCH, DELETE), inspect headers, query parameters, request bodies, and understand all five HTTP status code families from 200 success to 500 server crashes.',
        'Chapter 3 (Mission Milestone): We install Postman, configure personal and team collaboration workspaces, practice forking and pull requests, and execute our very first collaborative automated test collection to declare Mission 1 fully accomplished.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 9: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'In our enterprise architecture, why does the React Native mobile app send an HTTP GET request to an API rather than querying PostgreSQL directly?',
      options: [
        'Because direct database connections expose passwords and violate language decoupling rules.',
        'Because PostgreSQL only accepts connections from Apple iOS devices.',
        'Because web browsers cannot display information that comes from databases.',
        'Because Java Spring Boot servers can only execute on physical desktop computers.',
      ],
      answerIndex: 0,
      explain: 'Direct database access would force client devices to hold sensitive passwords and bypass all business validation logic. APIs provide a secure contract that abstracts database internals.',
    },
    {
      type: 'quiz',
      items: [
        [
          'What is the core purpose of an API in modern software engineering?',
          'An API acts as a software messenger and formal contract that enables independent applications to exchange data securely without knowing each other internal code or database implementation.',
        ],
        [
          'In the Python FastAPI blueprint, what is the role of the route decorator @app.get?',
          'The route decorator instructs the web framework to bind a specific HTTP method and URL path to a Python function, automatically mapping incoming network requests to executable code.',
        ],
        [
          'Why is API testing considered higher leverage than UI testing in continuous integration pipelines?',
          'API tests execute in milliseconds, remain stable against visual user interface redesigns, and validate the actual business logic and data payloads directly over the network wire.',
        ],
        [
          'How do external services like BigDataCloud return locality details to client mobile applications?',
          'Clients transmit latitude and longitude coordinates over standard HTTP GET requests. The remote service evaluates the coordinates and returns structured JSON containing continent, country, state, city, and postal code.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'An API is a software contract that enables decoupled systems to communicate securely across networks.',
        'In the restaurant analogy, the customer represents the client, the waiter represents the API messenger, and the kitchen represents backend microservices and databases.',
        'Backends build APIs by binding route decorators to functions that return structured dictionaries automatically serialized as JSON.',
        'In the testing pyramid, API testing provides the sweet spot of high execution speed, total test reliability, and deep business validation.',
      ],
    },
    {
      type: 'cliffhanger',
      title: 'Advancing Mission 1: The Language of the Wire',
      text: 'You now understand why APIs are indispensable, how backends construct them, and have inspected raw JSON payloads. But how do clients ask servers to create, update, or remove records? In Chapter 2, we advance Mission 1 by decoding the language of the wire: mastering GET, POST, PUT, and DELETE methods alongside status codes from 200 success to 500 server crashes!',
    },
  ],
}
