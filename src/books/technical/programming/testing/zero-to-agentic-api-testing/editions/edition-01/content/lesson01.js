import warRoomImg from '../assets/apex-campus-crisis-war-room.jpg'
import restaurantImg from '../assets/api-concept-restaurant.jpg'
import bridgeImg from '../assets/frontend-backend-api-bridge.jpg'
import matrixImg from '../assets/api-architectures-matrix.jpg'
import pyramidImg from '../assets/testing-pyramid-focus.jpg'

export const lesson01 = {
  id: 'understanding-apis',
  icon: '',
  title: 'Understanding APIs from First Principles',
  shortTitle: 'Understanding APIs',
  subtitle: 'The campus launch crisis, how phone apps and servers talk, the friendly restaurant analogy, and inspecting live web messages.',
  tags: ['APIs', 'Client Server', 'JSON', 'REST', 'Fundamentals', 'Architecture'],
  blocks: [
    {
      type: 'mission',
      title: 'Mission 1: The Core Protocol and Campus Cloud Integration',
      text: 'Welcome to Apex Campus. Today is launch day for our new university app, and we have an emergency: thousands of students downloaded the app to check bus times and class schedules, but the app keeps freezing on their screens with endless spinning loading circles. The mobile app developers insist their code works fine and blame the server team. The backend server developers insist their database is healthy and blame the phone app. Security rules strictly forbid giving the phone app the server database password. The phone and server must communicate through APIs: digital messengers that carry questions and answers across the network. Across our opening three chapters, you will take charge: looking behind the visual screen, inspecting the exact messages flowing across the network wire, discovering why requests are failing, and setting up an automated testing workbench in Postman so our engineering team can build with total confidence.',
      image: {
        src: warRoomImg,
        file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
        w: 1408,
        h: 768,
        alt: 'The Apex Campus War Room showing campus bus tracking and digital network inspection.',
        caption: 'The Campus War Room: Finding out why the student mobile app stopped talking to the server.',
        points: [
          'The Live Map: Showing campus bus locations, student phone requests, and server response times.',
          'The Mystery Crash: The phone screen got stuck on a spinning loading circle because the server failed while looking up campus coordinates.',
          'Looking Under the Hood: Skipping the phone buttons to inspect the actual digital messages traveling back and forth across the network.',
        ],
      },
      weKnow: [
        'Phone apps do not hold the whole university database inside the phone.',
        'Every time the app shows bus times, grades, or classes, it asks the server for that information across the network.',
        'If you only look at the phone screen, you cannot tell if a frozen button is a screen glitch or a server crash.',
      ],
      weNeed: [
        'A simple real world mental model showing how phone apps and servers talk like a diner ordering food through a waiter.',
        'A clear look at how backend engineers write code to answer questions from the app.',
        'Hands on practice inspecting real, live API messages directly in your browser with zero setup needed.',
        'A clear understanding of why testing APIs is faster, cheaper, and more dependable than clicking buttons on a screen.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 1: The Campus Crisis and the Waiter Analogy',
    },
    {
      type: 'paragraph',
      text: 'API stands for **Application Programming Interface**. Put simply, an API is a digital messenger that lets two different software programs talk to each other and share information securely.',
    },
    {
      type: 'paragraph',
      text: 'To understand why APIs are so important, look at what happened on our campus today. The student mobile app runs on phones. The course catalog and bus schedules live on distant university servers. Can a phone talk directly to the university database? Absolutely not. Storing the database password inside an app downloaded by thousands of students would let anyone open the app and steal confidential student records. Instead, the phone and server need a safe middleman: an API.',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'ARCHITECTURAL MENTAL MODEL',
      title: 'The Restaurant Analogy: An API Acts as the Waiter',
      text: 'Think of eating at a restaurant or campus dining hall. You do not walk into the kitchen, open the refrigerator, turn on the stove, and cook your own meal. That would create chaos and break kitchen safety rules. Instead, you sit at your table, look at the menu, and tell the waiter what you want. The waiter takes your order to the kitchen, the chefs prepare the meal, and the waiter brings the finished food back to your table. In software, your phone is the customer at the table, the backend server is the kitchen, and the API is the friendly waiter.',
      src: restaurantImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-concept-restaurant.jpg',
      w: 1408,
      h: 768,
      alt: 'The classic restaurant waiter analogy illustrating how an API mediates between a customer and the kitchen backend.',
      caption: 'The restaurant analogy: an API acts as the waiter between client and server.',
      points: [
        'Step 1 (The Customer Orders): The student taps a button on their phone, asking for bus schedules.',
        'Step 2 (The Waiter Carries the Order): The API takes that question safely across the internet to the server.',
        'Step 3 (The Kitchen Prepares the Food): The server looks up the bus schedule in the database and prepares the answer.',
        'Step 4 (The Waiter Brings the Food): The API delivers the neat response back to the phone screen for the student to read.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 2: Real World Examples: How Apps Share Information Safely',
    },
    {
      type: 'paragraph',
      text: 'Apps almost never work completely alone. Our campus app must constantly talk to outside partners: student loan providers checking who is enrolled, bus transit systems tracking arrivals, and housing services helping students find apartments.',
    },
    {
      type: 'paragraph',
      text: 'Think about travel websites like Booking.com that show room prices across hundreds of hotel brands like Marriott or Hilton. Marriott would never give their private database passwords to outside websites. That would put their customer data at serious risk.',
    },
    {
      type: 'paragraph',
      text: 'Instead, Marriott gives travel websites an API. A travel website sends a question asking which rooms are free for specific dates. Marriott checks their database and sends back an answer. Neither side sees the other internal code or private passwords.',
    },
    {
      type: 'paragraph',
      text: 'Similarly, when our campus app checks whether a student qualifies for a bus discount, we do not need to build our own mapping satellites. Instead, our app connects to a free location service called BigDataCloud. The phone sends its latitude and longitude, and the API instantly replies with the city, town, and postal code.',
    },
    {
      type: 'heading',
      text: 'Step 3: How Phone Apps and Servers Talk Across the Web',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'DECOUPLED ARCHITECTURE',
      title: 'The API Network Bridge: Keeping Apps and Servers Independent',
      text: 'In modern software, apps and servers are split into separate parts: the screen the user taps, the digital wire where messages travel, and the secure servers that store information. An API connects them all together like a sturdy bridge.',
      src: bridgeImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/frontend-backend-api-bridge.jpg',
      w: 1408,
      h: 768,
      alt: 'Architectural blueprint showing frontend mobile clients and external partner portals communicating with the backend microservices and databases through the API network bridge.',
      caption: 'The API Network Bridge: How phone apps and servers talk safely without sharing passwords.',
      points: [
        'Zone 1 (What the User Sees): Phone apps and website screens where students tap buttons and ask for information.',
        'Zone 2 (The Digital Wire): The pathway where questions and answers travel using simple, standardized messages.',
        'Zone 3 (The Brains and Memory): The backend servers and databases that store information safely behind secure walls.',
        'Independent Upgrades: Developers can update the phone app or rewrite server code anytime without breaking the connection.',
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
      type: 'image',
      layout: 'stacked',
      badge: 'AUTOMATION STRATEGY',
      title: 'The Testing Pyramid: Prioritizing High Leverage API Gates',
      text: 'Why did the campus launch day test fail even though the team wrote automated browser tests? The answer lies in the **Testing Pyramid**, a fundamental software engineering doctrine formulated by Mike Cohn. UI automation scripts click buttons, enter form fields, and render pixels in a simulated browser. These tests are notoriously slow, taking seconds per action, and notoriously brittle because a small visual redesign can break dozens of automated browser tests even when backend logic works perfectly. By focusing our automation strategy on the API layer, we validate actual business contracts at machine speed directly across the wire.',
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
      type: 'heading',
      text: 'Step 7: The Four Major Enterprise API Architectural Styles',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'ENTERPRISE PATTERNS',
      title: 'Architectural Comparison: The Four Major API Styles',
      text: 'While REST represents the most dominant architectural style across modern cloud applications, enterprise ecosystems like our campus utilize multiple specialized API paradigms based on throughput, latency, and contract strictness. Understanding these four architectural styles gives you the tactical versatility to test any endpoint across the enterprise.',
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
      type: 'victory-milestone',
      badge: 'MISSION 1 PHASE 1 CLEARED',
      rank: 'LEAD API QUALITY ARCHITECT',
      title: 'Architectural Triumph: Campus Wire & Decoupling Audit Mastered',
      summary: 'You stepped into the Apex Campus transit crisis, dismantled the frontend and backend disconnect, verified live coordinate lookup with BigDataCloud, and demystified the FastAPI backend engine. You now possess the architectural foundation required to audit any modern distributed system.',
      powers: [
        'Dissecting raw HTTP client server transactions across the wire with zero reliance on opaque frontend UI',
        'Reverse geocoding coordinate resolution testing using open data public endpoints without API key friction',
        'Reading server side Python FastAPI route decorators and JSON serialization mechanics from the inside out',
        'Executing the Testing Pyramid strategy to deliver 100x faster, zero flake automated test suites',
      ],
      disastersPrevented: [
        'Averted catastrophic campus bus dispatch paralysis during high traffic semester launches',
        'Eliminated direct database password exposure from client mobile applications',
        'Prevented expensive multi month frontend refactoring blockers caused by unmonitored API contract drift',
      ],
      warRoomTakeaway: 'You now see through the graphical illusion of web and mobile apps. Every button click is merely an HTTP wire transaction waiting for contract verification.',
    },
    {
      type: 'cliffhanger',
      title: 'Advancing Mission 1: The Language of the Wire',
      text: 'You now understand why APIs are indispensable, how backends construct them, and have inspected raw JSON payloads. But how do clients ask servers to create, update, or remove records? In Chapter 2, we advance Mission 1 by decoding the language of the wire: mastering GET, POST, PUT, and DELETE methods alongside status codes from 200 success to 500 server crashes!',
    },
  ],
}
