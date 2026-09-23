import restaurantImg from '../assets/api-concept-restaurant.jpg'
import bridgeImg from '../assets/frontend-backend-api-bridge.jpg'
import pyramidImg from '../assets/testing-pyramid-focus.jpg'
import matrixImg from '../assets/api-architectures-matrix.jpg'

export const lesson01 = {
  id: 'understanding-apis',
  icon: '',
  title: 'Understanding APIs from First Principles',
  shortTitle: 'Understanding APIs',
  subtitle: 'The restaurant analogy, the five core operations, building your own minimal server, and tasting REST, SOAP, and GraphQL.',
  tags: ['APIs', 'Client Server', 'JSON', 'REST', 'Fundamentals', 'Architecture'],
  blocks: [
    {
      type: 'heading',
      text: 'Step 1: The Core Mental Model: What is an API?',
    },
    {
      type: 'paragraph',
      text: 'Every day you tap buttons on your smartphone: you order food on a delivery app, check the weather forecast, or book a cab. But your phone does not store the global weather database, and it certainly does not store the restaurant kitchen inventory. Your phone is a **client**, and the powerful computer holding the data miles away in a data center is the **server**.',
    },
    {
      type: 'paragraph',
      text: 'How do these two computers talk to each other? They communicate through an **API**, which stands for Application Programming Interface. In simple English, an API is a digital messenger that takes your request to the server, tells the server what you want, and brings back the reply.',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'FIRST PRINCIPLES MENTAL MODEL',
      title: 'The Restaurant Analogy: Customer, Waiter, and Kitchen Backend',
      text: 'Imagine dining in a restaurant. You are the customer sitting at the table. The kitchen is the backend system with all the ingredients and cooking equipment. You cannot walk into the kitchen and cook food yourself. Instead, the waiter takes your order, brings it to the chef, and returns with your meal.',
      src: restaurantImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-concept-restaurant.jpg',
      w: 1408,
      h: 768,
      alt: 'The friendly restaurant dining room illustrating client, API waiter, and kitchen backend database.',
      caption: 'The Digital Dining Room: The customer is the client, the waiter is the API, and the kitchen is the server.',
      points: [
        'The Customer: Represents the client, such as a web browser or mobile phone app.',
        'The Waiter: Represents the API messenger carrying requests and delivering responses.',
        'The Kitchen: Represents backend microservices and databases storing business records securely.',
      ],
    },
    {
      type: 'definition',
      term: 'Application Programming Interface (API)',
      text: 'A structured set of rules and protocols that lets two software applications communicate and exchange data securely without exposing internal database credentials or implementation details.',
      example: 'A weather app on your phone calls a weather service API to retrieve the current temperature in your city.',
    },
    {
      type: 'heading',
      text: 'Step 2: The Five Universal HTTP Operations',
    },
    {
      type: 'paragraph',
      text: 'Just like dining at a restaurant involves different actions: reading the menu, placing an order, changing a dish, or cancelling an item: communicating with a web server relies on standard verbs called **HTTP Methods**.',
    },
    {
      type: 'comparison',
      title: 'The Five Core HTTP Operations and Their Everyday Meanings',
      columns: ['HTTP Verb', 'Everyday Action', 'Restaurant Analogy', 'Database Action', 'Wire Effect'],
      rows: [
        ['GET', 'Read or Retrieve', 'Reading the printed menu or checking table status', 'SELECT', 'Fetches records without modifying server state'],
        ['POST', 'Create New Record', 'Placing a brand new order with the chef', 'INSERT', 'Creates a fresh resource and assigns an ID'],
        ['PUT', 'Completely Replace', 'Replacing your entire meal order with a different set', 'UPDATE (Full)', 'Replaces the entire record with the new payload'],
        ['PATCH', 'Partially Modify', 'Asking the waiter for extra spicy sauce on your second dish', 'UPDATE (Partial)', 'Updates only the specific fields provided in the body'],
        ['DELETE', 'Remove Record', 'Cancelling a dish before preparation starts', 'DELETE', 'Permanently removes the target record from the database'],
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'The Crucial Architectural Distinction: Safe vs Idempotent',
      paragraphs: [
        '• Safe Operations: A request is safe if it does not alter server state. GET is safe because reading a webpage a hundred times changes nothing in the database.',
        '• Idempotent Operations: A request is idempotent if repeating it multiple times produces the identical server state as executing it once. PUT and DELETE are idempotent. Replacing a record with name "Alice" ten times leaves the name as "Alice". Deleting record ID 42 once removes it; repeating the command leaves it removed.',
        '• Neither Safe Nor Idempotent: POST is neither safe nor idempotent. Submitting a payment POST request three times will charge the customer credit card three times!',
      ],
    },
    {
      type: 'heading',
      text: 'Step 3: Anatomy of an HTTP Message: The Wire Structure',
    },
    {
      type: 'paragraph',
      text: 'When your computer talks to a server over the internet, it sends an **HTTP Request** packet and receives an **HTTP Response** packet. Every message consists of four structural elements:',
    },
    {
      type: 'chunked-code',
      badge: 'REQUEST ANATOMY',
      title: 'Deconstructing the HTTP Request Envelope',
      intro: 'Study each part of an HTTP request before we execute live calls:',
      chunks: [
        {
          label: 'The Verb and Endpoint URL',
          filename: 'request_line.http',
          code: 'POST /v1/books HTTP/1.1\nHost: api.library.org',
          title: 'The Action and Address',
          explanation: 'Specifies the HTTP method (POST) telling the server what operation to perform, followed by the resource path and target server host name.',
          keyTakeaway: 'The URL identifies the target resource; the HTTP verb identifies the intended action.'
        },
        {
          label: 'The Headers (The Envelope Metadata)',
          filename: 'headers.http',
          code: 'Content-Type: application/json\nAccept: application/json\nUser-Agent: CampusClient/1.0',
          title: 'Format and Client Details',
          explanation: 'Headers act like the outside of a postal envelope: they declare the data format (JSON), security tokens, and device details.',
          keyTakeaway: 'Content Type informs the server how to parse the incoming body payload.'
        },
        {
          label: 'The Payload Body (The Letter Inside)',
          filename: 'payload.json',
          code: '{\n  "title": "Clean Code",\n  "author": "Robert Martin",\n  "aisle": 42\n}',
          title: 'The Actual Data Content',
          explanation: 'The payload contains the raw data being created or updated, formatted as human readable JSON text.',
          keyTakeaway: 'GET requests generally do not have a body; POST and PUT requests carry payloads.'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 4: Interactive Lab: Build and Test Your Own 5 Line API',
    },
    {
      type: 'paragraph',
      text: 'Many beginners assume an API is a mysterious black box requiring complex server setups. In reality, a modern web API is simply a small script listening on a network port, maintaining records in memory, and responding to HTTP verbs. Try it right now:',
    },
    {
      type: 'mini-api',
      title: 'Live Interactive 5 Line In Memory API Server',
      intro: 'Click the method buttons below to test GET, POST, PUT, and DELETE operations live against an in memory data store:',
    },
    {
      type: 'heading',
      text: 'Step 5: Tasting the Three Architectural Worlds: REST, SOAP, and GraphQL',
    },
    {
      type: 'paragraph',
      text: 'Not all APIs look identical. In enterprise software, you will encounter three major architectural styles. Here is how the same operation: retrieving a book: looks in each world:',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'ARCHITECTURAL STYLES',
      title: 'Architectural Comparison: REST, SOAP, and GraphQL Side by Side',
      text: 'REST treats data as unique URL resources formatted in lightweight JSON. SOAP packages requests in formal XML envelopes with rigid schemas. GraphQL exposes a single endpoint where clients request the exact fields they need.',
      src: matrixImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/api-architectures-matrix.jpg',
      w: 1408,
      h: 768,
      alt: 'Architectural comparison matrix illustrating REST, SOAP, and GraphQL.',
      caption: 'Three Architectural Flavors: REST for clean resources, SOAP for formal legal envelopes, GraphQL for custom client queries.',
      points: [
        'REST (The Postcard): Simple, human readable JSON resources over clean HTTP verbs.',
        'SOAP (The Sealed Legal Document): Formal W3C XML standard used extensively in banking and government.',
        'GraphQL (The Custom Shopping List): Single endpoint where clients specify exactly which fields to return.',
      ],
    },
    {
      type: 'chunked-code',
      badge: 'THREE PROTOCOLS',
      title: 'Comparing the Three Styles in Practice',
      intro: 'Notice how each style requests the title of book ID 101:',
      chunks: [
        {
          label: 'RESTful API Request',
          filename: 'rest_request.http',
          code: 'GET /v1/books/101 HTTP/1.1\nHost: api.library.org\nAccept: application/json',
          title: 'Direct Resource Retrieval',
          explanation: 'In REST, the URL directly identifies the resource. The server replies with clean JSON: { "id": 101, "title": "Clean Code" }.',
          keyTakeaway: 'REST is the dominant standard across 85 percent of modern web and mobile applications.'
        },
        {
          label: 'SOAP WebServices Request',
          filename: 'soap_envelope.xml',
          code: '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n  <soap:Body>\n    <GetBookRequest>\n      <BookId>101</BookId>\n    </GetBookRequest>\n  </soap:Body>\n</soap:Envelope>',
          title: 'Formal XML Envelope',
          explanation: 'In SOAP, every request is wrapped in a strict XML envelope and dispatched via HTTP POST to an enterprise gateway.',
          keyTakeaway: 'SOAP relies on rigid WSDL contracts, widely used in financial banking and legacy systems.'
        },
        {
          label: 'GraphQL Query Request',
          filename: 'query.graphql',
          code: 'query {\n  book(id: 101) {\n    title\n  }\n}',
          title: 'Precise Field Selection',
          explanation: 'In GraphQL, the client asks only for the title field, avoiding unwanted metadata and eliminating extra round trips.',
          keyTakeaway: 'GraphQL prevents over fetching by letting clients dictate the exact JSON response shape.'
        }
      ]
    },
    {
      type: 'heading',
      text: 'Step 6: Live Exploration: Sending Real Global GET Requests',
    },
    {
      type: 'paragraph',
      text: 'Now let us send real HTTP requests over the public internet. First, we will inspect the public GitHub user profile for the famous GitHub mascot, Octocat:',
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'When we send a GET request to https://api.github.com/users/octocat, what status code and data fields do you expect the server to return?',
      options: [
        '200 OK: Returns the public Octocat profile object containing username and public repository statistics',
        '201 Created: Generates a brand new user profile on the server database',
        '404 Not Found: Fails because octocat is a cartoon mascot',
        '500 Server Error: Crashes because GitHub requires paid authentication to read user data'
      ],
      answerIndex: 0,
      revealTitle: 'GitHub Public API Wire Confirmation',
      explanation: 'Because the octocat profile is public and exists, GitHub responds with HTTP 200 OK and returns Octocat profile metadata serialized in JSON!'
    },
    {
      type: 'api-inspector',
      title: 'Live Public Wire: GitHub Octocat User Profile',
      method: 'GET',
      url: 'https://api.github.com/users/octocat',
      status: '200 OK',
      time: '185 ms',
      size: '2.6 kB',
      responseBody: {
        login: 'octocat',
        id: 583231,
        name: 'The Octocat',
        company: '@github',
        blog: 'https://github.blog',
        location: 'San Francisco',
        public_repos: 8,
        followers: 12450
      }
    },
    {
      type: 'paragraph',
      text: 'Next, let us query the BigDataCloud reverse geocoding API. When your mobile device shares its latitude and longitude, the API translates those coordinates into a physical city and postal code:',
    },
    {
      type: 'api-inspector',
      title: 'Live Public Wire: BigDataCloud Reverse Geocoding',
      method: 'GET',
      url: 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=42.3601&longitude=-71.0942&localityLanguage=en',
      status: '200 OK',
      time: '142 ms',
      size: '1.2 kB',
      responseBody: {
        latitude: 42.3601,
        longitude: -71.0942,
        continent: 'North America',
        countryName: 'United States of America',
        principalSubdivision: 'Massachusetts',
        city: 'Cambridge',
        locality: 'MIT Campus',
        postcode: '02139'
      }
    },
    {
      type: 'heading',
      text: 'Step 7: Sourced Historical Outage: When Operations Are Misunderstood',
    },
    {
      type: 'source-note',
      label: 'Verified Historical Case Study · May 2005',
      claim: 'Google Web Accelerator Crawler Inadvertently Triggers Mass Deletions on Web Forums',
      url: 'https://www.w3.org/2001/tag/doc/whenToUseGet.html',
      verifiedThrough: 'W3C Technical Architecture Group (TAG) Finding on Safe HTTP Methods'
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The Real World Cost of Misunderstanding HTTP GET: The Web Accelerator Incident',
      paragraphs: [
        'In May 2005, Google launched a utility called Google Web Accelerator. Its purpose was to speed up browsing by pre fetching web links using background HTTP GET requests before the user clicked them.',
        'However, web forums and enterprise applications had implemented destructive actions: such as deleting a post, modifying account settings, or clearing a cart: using simple hyperlinks like `<a href="/admin/delete_post?id=42">Delete</a>`.',
        'Because the developers bound state modifying operations to HTTP GET instead of HTTP POST or DELETE, Google web pre fetcher visited every link it encountered. It triggered deletions, cleared carts, and modified application state on forums across the web where destructive actions were bound to GET links.',
        'The Architectural Rule: Never use GET for state modifying actions. In HTTP specifications (RFC 7231), GET must strictly remain a safe, read only operation that leaves server databases unaltered.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 8: Why We Test at the API Layer: The Testing Pyramid',
    },
    {
      type: 'paragraph',
      text: 'Why do mature engineering organizations invest heavily in API test automation instead of testing exclusively through mobile screens and web browsers?',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'TESTING PYRAMID',
      title: 'The Automation Testing Pyramid: High Speed and Deep Reliability',
      text: 'Testing exclusively through the user interface is slow, fragile, and prone to false alarms caused by animation lags. Testing at the API layer allows engineers to validate business logic directly over the wire in milliseconds.',
      src: pyramidImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/testing-pyramid-focus.jpg',
      w: 1408,
      h: 768,
      alt: 'The Testing Pyramid contrasting Unit, API Integration, and UI End to End tests.',
      caption: 'The Automation Pyramid: API integration tests provide the sweet spot of speed, reliability, and business coverage.',
      points: [
        'Top Layer (UI Tests): Slow, fragile, and easily broken by minor button redesigns or screen resizing.',
        'Middle Layer (API Tests): Fast, dependable, executing hundreds of validations per second directly on business contracts.',
        'Base Layer (Unit Tests): High volume internal code checks validating individual functions.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 9: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'If you send an HTTP GET request to a public API endpoint ten times in a row, what should happen to the server database records?',
      options: [
        'Ten new records should be created in the database table',
        'Nothing should change in the database records because GET is a safe, read only operation',
        'The server should permanently delete the requested resource',
        'The server should automatically reboot its operating system'
      ],
      answerIndex: 1,
      explain: 'GET operations are defined by the HTTP specification as safe. Safe methods retrieve data without altering server state, regardless of how many times they are executed.'
    },
    {
      type: 'quiz',
      items: [
        [
          'What is the core difference between an idempotent operation and a safe operation?',
          'A safe operation (such as GET) does not alter server state at all. An idempotent operation (such as PUT or DELETE) alters state, but repeating the request produces the exact same final state as executing it once.',
        ],
        [
          'Why did the Google Web Accelerator cause mass data loss on web forums in 2005?',
          'Developers improperly bound destructive actions to HTTP GET links. Because Web Accelerator pre fetched every GET link to speed up browsing, it automatically executed delete operations across thousands of websites.',
        ],
        [
          'What are the four primary structural components of an HTTP request?',
          'The HTTP method (verb), the resource URL endpoint, the metadata headers (such as Content Type), and the payload body.',
        ],
        [
          'How does GraphQL differ from REST when a client only requires one specific property?',
          'REST returns the entire resource payload defined by the endpoint. GraphQL allows the client to request only the specific field needed, eliminating unnecessary network bandwidth and payload processing.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'An API is a software messenger that allows decoupled clients and servers to communicate across networks securely.',
        'The five universal HTTP operations are GET (Read), POST (Create), PUT (Replace), PATCH (Modify), and DELETE (Remove).',
        'GET operations must always remain safe; PUT and DELETE operations are idempotent; POST operations are neither safe nor idempotent.',
        'Every HTTP request carries a verb, an endpoint URL, envelope headers, and an optional data payload body.',
        'An API server is simply a program listening on a port that updates in memory records and returns status codes.',
      ],
    },
    {
      type: 'cliffhanger',
      title: 'Now Enter the Mission: The Apex Campus Transit Crisis',
      text: 'Now that your foundations are crystal clear: you understand clients, servers, HTTP verbs, and wire packets: you are ready for your first real world mission. In Chapter 2, launch day arrives at Apex Campus: the transit shuttle tracker is frozen, students are stranded, and you must investigate and fix the failing request by hand!',
    },
  ],
}
