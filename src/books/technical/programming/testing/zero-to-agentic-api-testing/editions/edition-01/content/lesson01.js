import restaurantImg from '../assets/api-concept-restaurant.jpg'
import bridgeImg from '../assets/frontend-backend-api-bridge.jpg'
import matrixImg from '../assets/api-architectures-matrix.jpg'
import pyramidImg from '../assets/testing-pyramid-focus.jpg'

export const lesson01 = {
  id: 'understanding-apis',
  icon: '',
  title: 'Understanding APIs from First Principles',
  shortTitle: 'Understanding APIs',
  subtitle: 'What APIs are, how frontends and backends communicate, the restaurant analogy, and inspecting live data in your browser.',
  tags: ['APIs', 'Client Server', 'JSON', 'REST', 'Fundamentals'],
  blocks: [
    {
      type: 'mission',
      title: 'Mission 1: The Core Protocol and Campus Cloud Integration',
      text: 'Welcome to the Apex Campus Enterprise Cloud Platform. As our Lead API Test Automation Architect, you are stepping into a high stakes engineering challenge: our university has developed a brand new student mobile application in TypeScript and React Native, while the core course catalog and registrar run on an enterprise Java Spring Boot backend. Furthermore, external academic partners and housing portals in Python need real time data access. Neither side can call internal code directly, and infosec strictly forbids sharing private database passwords. Across our opening three chapters, our mission is to inspect the invisible network wire: mastering what APIs are, decoding the HTTP protocol, resolving the language decoupling crisis, validating live campus catalog endpoints, and assembling an executable test suite in Postman.',
      weKnow: [
        'Web pages and mobile apps do not store all their data inside your phone or laptop memory.',
        'Whenever an app needs data, it dispatches an invisible background API call across the network.',
        'Without inspecting the network layer, testers cannot distinguish between user interface glitches and server crashes.',
      ],
      weNeed: [
        'An intuitive mental model of client and server communication that anyone can grasp in five minutes.',
        'Hands on experiments requesting real campus API endpoints directly in our web browser without any complex setup.',
        'An understanding of how diverse frontend and backend technologies connect seamlessly through universal JSON contracts.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 1: What is an API? The Interoperability Crisis and Waiter Analogy',
    },
    {
      type: 'paragraph',
      text: 'API stands for **Application Programming Interface**. In simple words, an API is a software contract that lets two completely different computer programs talk to each other and exchange data securely.',
    },
    {
      type: 'paragraph',
      text: 'To understand why APIs are indispensable, consider our university campus. The frontend development team wrote a sleek mobile application in TypeScript and React Native. The backend infrastructure team wrote the academic catalog service in Java with Spring Boot, connected to an internal PostgreSQL database. Can the TypeScript mobile app directly invoke a Java method or run a SQL query? Absolutely not. TypeScript cannot execute compiled Java bytecode, and granting mobile devices direct database access would create a massive security catastrophe.',
    },
    {
      type: 'paragraph',
      text: 'Think of visiting your favorite campus dining hall or ordering food on your phone. You do not walk into the kitchen, open the walk in freezer, or operate the commercial pizza oven. You look at the menu, decide what you want, and place your order through the waiter or the digital counter.',
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
      text: 'Step 2: Real World Example: How Partner Aggregators Connect',
    },
    {
      type: 'paragraph',
      text: 'Consider modern marketplace aggregators. When travel portals like Booking.com or Hotels.com display available rooms across worldwide hotel chains like Marriott, how does that integration work? Marriott will never hand over their entire proprietary Java repository or private database credentials to hundreds of outside booking websites.',
    },
    {
      type: 'paragraph',
      text: 'Similarly, when national scholarship boards or student housing aggregators need to verify student enrollment at our university, our campus cannot give them direct database passwords. Instead, our backend team exposes a secure API endpoint: `GET /v1/catalog` or `GET /v1/students/{id}/status`.',
    },
    {
      type: 'paragraph',
      text: 'The partner portal sends an HTTP request with the necessary search parameters. Our campus API receives the request, validates authorization, queries our internal database, and returns clean structured JSON. The external partner receives the exact data needed without ever touching our private code or infrastructure.',
    },
    {
      type: 'heading',
      text: 'Step 3: How Frontends and Backends Communicate Across Networks',
    },
    {
      type: 'paragraph',
      text: 'In modern enterprise software engineering, applications are deliberately divided into independent layers: frontend clients, the API network contract, backend microservices, and persistence storage. The API is the universal bridge that binds them together across the network wire.',
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
      columns: ['Technology Layer', 'Popular Tools and Languages', 'Role in the Application'],
      rows: [
        ['Frontend Clients', 'React, Angular, iOS Swift, Android Kotlin, Web Browsers', 'Displays the visual buttons, colors, and forms that users interact with.'],
        ['The API Contract', 'HTTP Protocol, JSON Data, REST Guidelines', 'The universal language and rules both sides use to exchange messages.'],
        ['Backend Services', 'Java Spring Boot, Node.js, Python FastAPI, Go, C# .NET', 'Executes business rules, verifies user credentials, and processes transactions.'],
        ['Database Storage', 'PostgreSQL, MySQL, MongoDB, Redis', 'Safely stores student records, course enrollments, and library inventory.'],
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Why APIs Create Complete Technology Freedom',
      paragraphs: [
        'Notice an amazing advantage of APIs: they are completely language independent.',
        'Your frontend could be built with React running on a laptop or an iPhone app written in Swift. Your backend could be written in Java or Go, connected to a database in another country.',
        'The frontend does not need to know what programming language the backend uses. As long as both sides agree on the API contract (sending standard HTTP requests with structured JSON text), communication works seamlessly.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 4: Inspecting Live Campus Catalog Endpoints in Your Browser',
    },
    {
      type: 'paragraph',
      text: 'You do not need to install complex tools to see an API in action. Your everyday web browser is already an HTTP client capable of making live GET requests. Click each link below to inspect real live JSON data served by our campus test platform:',
    },
    {
      type: 'steps',
      items: [
        '1. Campus Academic Catalog: Click [http://localhost:5050/v1/catalog](http://localhost:5050/v1/catalog). Notice how our server returns all four registered university courses (Computer Systems, Data Structures, Agentic API Automation, Digital Logic) in structured JSON.',
        '2. System Health Status: Click [http://localhost:5050/status/200](http://localhost:5050/status/200). The server answers with an immediate status confirmation verifying the cluster is healthy.',
        '3. Sustainable Development Goals: Click [http://localhost:5050/SDGAPI/v1/sdg/Goal/List?includechildren=false](http://localhost:5050/SDGAPI/v1/sdg/Goal/List?includechildren=false). Notice how public educational data is organized into structured JSON records.',
        '4. Open Developer Profile: Click [https://api.github.com/users/octocat](https://api.github.com/users/octocat). The remote GitHub server returns Octocat developer profile: name, company, and public repository statistics.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Here is what our Campus Academic Catalog looks like when returned as raw JSON text from our backend server. You can test sending the request live right inside our interactive inspector below:',
    },
    {
      type: 'api-inspector',
      title: 'Live Interactive Wire Inspector: Campus Academic Catalog',
      method: 'GET',
      url: 'http://localhost:5050/v1/catalog',
      headers: {
        'Accept': 'application/json',
        'User Agent': 'Campus QA Tester'
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
      text: 'Step 5: Architectural Styles and the Testing Pyramid',
    },
    {
      type: 'paragraph',
      text: 'Why is API testing considered the most valuable skill for modern quality assurance engineers? The answer lies in the **Testing Pyramid**, a fundamental software engineering principle formulated by industry leader Mike Cohn.',
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
        'UI Tests (Top): Slow, fragile, and expensive. A button moving three pixels to the left can break twenty automated browser tests.',
        'API Tests (Middle): Fast, reliable, and high leverage. Tests execute in milliseconds and directly validate business logic and data contracts.',
        'Unit Tests (Bottom): Extremely fast, written by developers to test individual functions, but unable to verify network integration or database integrity.',
      ],
    },
    {
      type: 'paragraph',
      text: 'While REST represents the most dominant architectural style across web applications today, enterprise systems employ different API standards depending on performance and legacy requirements:',
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
        'REST (Representational State Transfer): Uses HTTP methods and JSON. Powers the majority of public web and mobile services.',
        'GraphQL: Exposes a single endpoint allowing clients to query exact fields, eliminating over fetching and under fetching.',
        'SOAP (Simple Object Access Protocol): Strict, XML based protocol common in legacy financial and banking systems.',
        'gRPC: High performance binary protocol created by Google for microsecond communication between internal microservices.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 6: Review and Practice',
    },
    {
      type: 'takeaways',
      items: [
        'An API is a software messenger and contract that allows independent applications to communicate without sharing code.',
        'In the restaurant analogy, the customer is the client, the waiter is the API, and the kitchen is the backend server and database.',
        'APIs enable complete language independence: frontends in TypeScript and backends in Java communicate seamlessly using JSON over HTTP.',
        'API testing sits in the golden middle of the testing pyramid: much faster and more resilient than UI tests, while validating real business rules.',
      ],
    },
    {
      type: 'quiz',
      items: [
        [
          'Why can a mobile app written in TypeScript talk to a backend service written in Java?',
          'Because both programs exchange data using the universal HTTP protocol and standardized JSON text, requiring zero knowledge of internal code.',
        ],
        [
          'In the Testing Pyramid, why do engineering teams invest heavily in API testing compared to UI testing?',
          'API tests execute in milliseconds, are immune to visual user interface layout changes, and validate core business logic directly.',
        ],
      ],
    },
  ],
}
