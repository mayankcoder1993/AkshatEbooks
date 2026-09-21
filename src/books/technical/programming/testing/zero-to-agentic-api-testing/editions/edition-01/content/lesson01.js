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
      text: 'Step 2: Everyday Examples: How Apps Talk to Outside Services',
    },
    {
      type: 'paragraph',
      text: 'Think about the Weather app on your phone. When you open it, the screen tells you: *It is 24 degrees and sunny outside.* Did your phone launch a weather satellite into space? Did Apple build physical thermometers on every street corner? Of course not.',
    },
    {
      type: 'paragraph',
      text: 'Your phone simply asked a weather computer: *What is the temperature in my town right now?* The weather computer checked its database and replied: *24 degrees and sunny.* Your phone took that simple answer and drew a nice yellow sun on your screen. That quick conversation is an API.',
    },
    {
      type: 'paragraph',
      text: 'Think about booking a flight on Google Flights or MakeMyTrip. When you search for flights, you see ticket prices from multiple airlines on one screen. Did those airlines give Google their secret computer passwords? Did they let outside companies touch their private booking systems? Absolutely not. Instead, Google asks each airline API: *What flights do you have today?* Each airline API checks their private system and sends back the prices. That is the beauty of an API: two different companies can share information safely without sharing passwords.',
    },
    {
      type: 'heading',
      text: 'Step 3: How One API Bridge Connects Any Phone, Laptop, or Server',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'UNIVERSAL BRIDGE',
      title: 'The API Network Bridge: How Different Technologies Talk Together',
      text: 'Imagine three people waiting at an international airport: one speaks only Japanese, one speaks only Spanish, and one speaks only German. They cannot understand each other directly, so they all agree to speak one universal language: English. In software, an iPhone app is built in Apple Swift, an Android app is built in Google Kotlin, a website is built in JavaScript, and a server is built in Python. None of them understand each other directly. So how do they communicate? They all agree to speak one universal language: simple plain text called JSON. The API is the bridge that carries this plain text message between any device and any server.',
      src: bridgeImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/frontend-backend-api-bridge.jpg',
      w: 1408,
      h: 768,
      alt: 'Architectural blueprint showing frontend mobile clients and external partner portals communicating with the backend microservices and databases through the API network bridge.',
      caption: 'The API Network Bridge: Connecting any phone, browser, or server through simple text messages.',
      points: [
        'Device 1 (iPhone): Built with Apple Swift. When a student checks bus times, the phone sends a simple text note asking for data.',
        'Device 2 (Android): Built with Google Kotlin. It sends the exact same text note across the network wire.',
        'Device 3 (Laptop Web Browser): Built with JavaScript. It also sends the exact same text note across the wire.',
        'The Universal Bridge: The API hands the text note to the server. The server replies in simple text, and every device reads it with ease.',
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Why This Universal Bridge Matters So Much',
      paragraphs: [
        'Because APIs speak plain text, the people building the phone app and the people building the server can work completely independently.',
        'The mobile team can redesign the entire iPhone app from scratch, and the server will never notice or break.',
        'The server team can switch from Python to another language, and students will never see an error on their screens.',
        'As long as both sides agree on the plain text question and the plain text answer, everything connects smoothly.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 4: A Quick Look Under the Hood: How a Server Answers Questions',
    },
    {
      type: 'paragraph',
      text: 'To test an API with confidence, it helps to see what happens on the server side. Fresh testers often think backend servers are mysterious black boxes. In reality, writing an API endpoint only takes a few lines of code.',
    },
    {
      type: 'paragraph',
      text: 'Here is a simple look at how a server answers questions using Python. You do not need to write or run any Python code; just look at how simple it is:',
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
      title: 'Three Simple Secrets Behind How Servers Work',
      paragraphs: [
        '1. The Route Address: Notice `@app.get("/v1/location/resolve")`. This tells the server: When someone visits this web address, run this function.',
        '2. Reading the Inputs: The server automatically reads the latitude and longitude numbers sent by the phone.',
        '3. Packing the Plain Text Answer: The server packs the answer into plain text (JSON) and sends it back with a 200 OK stamp.',
        'As software testers, we do not need to build their server code. Our mission is to test from the outside: making sure good questions get good answers, and bad questions get handled safely.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 5: Inspecting Live API Messages Across the Web',
    },
    {
      type: 'paragraph',
      text: 'You do not need to install any complex software to see an API in action. Your everyday web browser is already an API tester! When you type a web link into your browser address bar and press Enter, your browser sends a message to the server and shows you the plain text answer.',
    },
    {
      type: 'paragraph',
      text: 'Click each link below to see real API messages live in your browser right now on your computer or phone:',
    },
    {
      type: 'steps',
      items: [
        '1. Free Geocoding Location API: Click [BigDataCloud Geocoding Endpoint](https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=37.42159&longitude=-122.0837&localityLanguage=en). Look at how the server returns the city, country, and postal code as clean, readable text.',
        '2. Campus Course Catalog: Click [Campus Academic Catalog JSON](https://raw.githubusercontent.com/mayankcoder1993/AkshatEbooks/arena/01a0bfe5-akshatebooks/course-materials/zero-to-agentic-api-testing/lesson-01/campus-catalog.json). See how the server returns a simple list of our four university courses.',
        '3. Public GitHub Profile API: Click [GitHub Octocat Profile](https://api.github.com/users/octocat). The GitHub server returns account details: username, join date, and how many code repositories exist.',
      ],
    },
    {
      type: 'paragraph',
      text: 'To understand what happens behind the scenes during an automated API test, try our interactive wire inspector below. You can click to send the request, inspect the headers and body, and check the automated tests:',
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
      text: 'Step 6: Why Testing the API is Smarter Than Clicking Buttons',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'AUTOMATION STRATEGY',
      title: 'The Testing Pyramid: Why API Testing Delivers the Best Results',
      text: 'Why did the campus app crash on launch day even though the team wrote tests that clicked buttons in a web browser? The answer is explained by the Testing Pyramid, an idea created by software expert Mike Cohn. Tests that click buttons on a phone screen are slow, often taking ten seconds for a single check. Even worse, if a graphic designer simply moves a button or changes a color, those screen tests break immediately, even when the software works fine! In contrast, testing the API directly sends simple digital messages across the network in milliseconds. We test the real brain of the app directly with speed and reliability.',
      src: pyramidImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/testing-pyramid-focus.jpg',
      w: 1408,
      h: 768,
      alt: 'The software testing pyramid showing Unit tests at the bottom, Service and API tests in the high leverage middle tier, and UI tests at the top.',
      caption: 'The Testing Pyramid: API testing delivers maximum speed and reliability.',
      points: [
        'Screen Tests (Top of Pyramid): Slow and easily broken. A simple design change can break dozens of screen tests even when the system works perfectly.',
        'API Tests (Middle of Pyramid): Fast, dependable, and powerful. These tests send raw digital messages in milliseconds, checking the real business rules directly.',
        'Unit Tests (Base of Pyramid): Very fast checks written by developers for tiny pieces of code, but unable to check whether systems can talk to each other across the network.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 7: The Four Major Styles of APIs',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'ENTERPRISE PATTERNS',
      title: 'Comparing the Four Major API Styles',
      text: 'While REST is the most common style used across modern web and mobile apps, large companies and universities also use three other styles for special jobs. Understanding these four styles gives you the confidence to test any endpoint you meet.',
      src: matrixImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-architectures-matrix.jpg',
      w: 1408,
      h: 768,
      alt: 'Architectural comparison matrix contrasting REST, GraphQL, SOAP, and gRPC across data formats, transport protocols, and use cases.',
      caption: 'Comparing the four major enterprise API architectural styles.',
      points: [
        'REST: Uses simple web actions and plain text JSON notes. Powers our campus web and mobile services in Missions 1 and 2.',
        'GraphQL: A flexible style where the phone app asks for only the exact words and numbers it needs, saving battery and data.',
        'SOAP: An older, strict enterprise format wrapped in XML tags, common in banks and government records.',
        'gRPC: A super fast binary format created by Google for lightning fast talk between internal cloud servers.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 8: Mission 1 Roadmap: What Comes Next',
    },
    {
      type: 'paragraph',
      text: 'Now that you understand what APIs are and have inspected raw JSON messages with your own eyes, here is where our journey goes next:',
    },
    {
      type: 'steps',
      items: [
        'Chapter 1 (Complete): You discovered why APIs exist, how phone apps and servers talk through plain text, examined the backend Python blueprint, and inspected real API messages in your browser.',
        'Chapter 2 (Next Step): We learn the language of the wire. You will master the five main actions (GET, POST, PUT, PATCH, DELETE) and learn the five status code families from 200 success to 500 server crashes.',
        'Chapter 3 (Mission Milestone): We install Postman, set up our team workspace, share collections, and run our very first automated test suite to complete Mission 1.',
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
