import soapImg from '../assets/soap-xml-architecture.jpg'

export const lesson12 = {
  id: 'soap-and-xml',
  icon: '',
  title: 'SOAP WebServices and XML Parsing',
  shortTitle: 'SOAP and XML',
  subtitle: 'Crafting XML envelopes, setting SOAP headers, and converting responses into JavaScript objects with xml2Json.',
  tags: ['SOAP', 'XML', 'WSDL', 'xml2Json', 'Protocols'],
  blocks: [
    {
      type: 'mission-hud',
      mission: 'Mission 3: Hardening for Enterprise Production and CI CD',
      phase: 'Phase 4 of 5: Enterprise SOAP & XML Systems',
      rank: 'Rank: Enterprise Protocols Specialist',
      status: 'ACTIVE'
    },
    {
      type: 'chapter-opener',
      achieve: 'Master legacy enterprise web services by crafting SOAP 1.1 and 1.2 XML envelopes, parsing XML responses with xml2Json, and asserting payload data defensively.',
      how: 'Contrast REST with SOAP, configure strict Content Type headers, convert XML envelopes into traversable JavaScript objects, and defend against legacy whitespace quirks with trim.',
      carry: 'The complete multi protocol toolkit (REST, GraphQL, and SOAP) ready for unattended command line test execution in Jenkins and Newman in Chapter 13.'
    },
    {
      type: 'mission-tracker',
      badge: 'MISSION 3 PROGRESS · STEP 4 OF 5',
      title: 'Continuing Mission 3: Testing Legacy Enterprise Protocols',
      text: 'Having secured modern REST microservices with OAuth 2.0 tokens, our campus engineering team encounters an unexpected enterprise roadblock. The college library just received a university textbook grant of 400 dollars to expand the computer science catalog. To process the check, the campus finance office requires our system to verify grant numbers through the State Central Accounting Network. That state network was built two decades ago on a strict enterprise mainframe that speaks SOAP WebServices and XML envelopes rather than modern REST JSON. In this chapter, we master the XML protocol: understanding SOAP envelopes, executing live requests against real enterprise endpoints, avoiding the hidden Content Type trap in Postman, converting XML responses into JavaScript objects using xml2Json, and asserting payload data.',
    },
    {
      type: 'heading',
      text: 'Step 1: REST vs SOAP: The Postcard vs the Sealed Legal Envelope',
    },
    {
      type: 'paragraph',
      text: 'Think of sending a message through the mail. Sending a REST request is like writing a postcard: it is lightweight, quick to read, and flexible in format. Sending a SOAP request is like sending an official legal document inside a sealed, wax stamped envelope: it is formal, strictly formatted, and governed by rigid international standards.',
    },
    {
      type: 'paragraph',
      text: 'While REST is an architectural style that offers freedom in data formats (JSON, plain text, YAML) and HTTP methods, **SOAP** (Simple Object Access Protocol) is a formal messaging protocol standardized by the W3C consortium. In over 99 percent of enterprise implementations across banking, healthcare, government, and university systems, SOAP relies exclusively on XML.',
    },
    {
      type: 'comparison',
      title: 'Architectural Comparison: REST vs SOAP',
      columns: ['Feature', 'RESTful Web Services', 'SOAP WebServices'],
      rows: [
        ['Underlying Concept', 'Architectural style based on HTTP resources', 'Formal standardized protocol with strict message envelope'],
        ['Data Formats', 'Lightweight JSON, XML, Plain Text, YAML', 'Strict XML format exclusively'],
        ['HTTP Method Usage', 'Multiple verbs: GET, POST, PUT, PATCH, DELETE', 'Exclusively HTTP POST method for all operations'],
        ['Contract Definition', 'OpenAPI or Swagger specifications (optional)', 'Strict WSDL (Web Services Description Language) contract'],
        ['Transport Protocols', 'Runs exclusively over HTTP or HTTPS', 'Can run over HTTP, SMTP, JMS, or TCP'],
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Why Every Single SOAP Request Uses HTTP POST',
      paragraphs: [
        'In REST, GET requests send data parameters in the URL query string: `GET /books?id=101`. This means data is openly visible in browser address bars, proxy logs, and network history.',
        'In SOAP, all operation names, security tokens, and data arguments are packaged securely inside the body payload within the XML envelope.',
        'Because data is never transported in the URL, every single SOAP request is dispatched using the HTTP POST method, regardless of whether you are reading records or creating new entries.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 2: Anatomy of a SOAP XML Message',
    },
    {
      type: 'image',
      layout: 'stacked',
      badge: 'PROTOCOL SPECIFICATION',
      title: 'SOAP 1.2 Architecture: Envelope, Header, and Body Protocol Anatomy',
      text: 'Every SOAP transaction is packaged inside a standardized XML container known as the **SOAP Envelope**. Unlike JSON, which is flexible and loosely structured, SOAP enforces a rigid XML schema defined by an enterprise WSDL contract.',
      src: soapImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/soap-xml-architecture.jpg',
      w: 1408,
      h: 768,
      alt: 'SOAP architecture infographic illustrating SOAP Envelope containing SOAP Header and SOAP Body with WSDL contract and xml2Json conversion in Postman.',
      caption: 'The standardized structure of a SOAP XML request and response envelope.',
      points: [
        'SOAP Envelope: The root XML element defining namespace rules (xmlns:soap) that identifies the packet as a SOAP message.',
        'SOAP Header (Optional): Contains routing information, transaction tokens, and security assertions (such as WS Security).',
        'SOAP Body (Mandatory): Contains the actual RPC call, method parameters, or response payload returned by the server.',
        'SOAP Fault (Error Handling): Standardized sub element returned inside the Body when an exception occurs.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 3: The Live Accounting WebService and Postman Setup',
    },
    {
      type: 'paragraph',
      text: 'To test our grant verification in real time, we query the live DataAccess Number Conversion WebService. You can view the live service documentation directly in your browser: [https://www.dataaccess.com/webservicesserver/NumberConversion.wso](https://www.dataaccess.com/webservicesserver/NumberConversion.wso).',
    },
    {
      type: 'paragraph',
      text: 'The documentation confirms two supported enterprise operations:',
    },
    {
      type: 'steps',
      items: [
        '1. NumberToWords: Accepts an unsigned long integer (such as 400) and returns the written English string ("four hundred"). We use this to verify our grant check amount.',
        '2. NumberToDollars: Accepts a numeric amount (such as 123) and returns the currency description ("one hundred and twenty three dollars").',
      ],
    },
    {
      type: 'paragraph',
      text: 'The documentation offers both SOAP 1.1 and SOAP 1.2 specifications. In modern enterprise testing, SOAP 1.2 is the recommended standard. We deconstruct the SOAP 1.2 request envelope into three distinct structural chunks:',
    },
    {
      type: 'chunked-code',
      badge: 'SOAP XML CHUNKS',
      title: 'Deconstructing the SOAP 1.2 Request Envelope',
      intro: 'The formal XML contract components:',
      chunks: [
        {
          label: 'Chunk 1: Root Envelope & Namespace',
          filename: 'soap-envelope-root.xml',
          code: '<?xml version="1.0" encoding="utf-8"?>\n<soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">',
          title: 'The Outer Sealed Container',
          explanation: 'Declares this message as an official SOAP 1.2 envelope using the W3C namespace.',
          keyTakeaway: 'The XML namespace prevents naming collisions with custom business tags.'
        },
        {
          label: 'Chunk 2: The SOAP Body & Operation',
          filename: 'soap-operation.xml',
          code: '  <soap12:Body>\n    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">',
          title: 'Invoking the Target Method',
          explanation: 'Specifies the RPC operation (NumberToWords) and targets the service contract domain.',
          keyTakeaway: 'SOAP operations are declared in XML body tags rather than HTTP URL paths.'
        },
        {
          label: 'Chunk 3: Method Parameter Tag',
          filename: 'soap-parameter.xml',
          code: '      <ubiNum>400</ubiNum>\n    </NumberToWords>\n  </soap12:Body>\n</soap12:Envelope>',
          title: 'Supplying Argument Value',
          explanation: 'Passes 400 inside the ubiNum tag, then cleanly closes the operation, body, and envelope tags.',
          keyTakeaway: 'Every opening XML tag must possess an exact matching closing tag.'
        }
      ]
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'When we POST this valid SOAP 1.2 XML envelope to the live NumberConversion service, what response structure will return?',
      options: [
        '200 OK with an XML envelope containing <m:NumberToWordsResult>four hundred</m:NumberToWordsResult>',
        'A JSON object { "result": "four hundred" } because all modern APIs return JSON',
        '404 Not Found because XML cannot be sent over HTTP POST',
        '500 Server Error because 400 is not a valid number'
      ],
      answerIndex: 0,
      revealTitle: 'Live SOAP WebService Outcome',
      explanation: 'SOAP XML response confirmed! The remote accounting mainframe evaluates the envelope and replies with an HTTP 200 OK XML document wrapping "four hundred" inside the NumberToWordsResult tag!'
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Fresher Trap to Avoid: The Hidden Content Type Discrepancy',
      paragraphs: [
        'When you open Postman, set the method to POST, select Body > raw, and choose XML from the dropdown, Postman automatically generates a hidden header: `Content-Type: application/xml`.',
        'However, the SOAP 1.2 server specification strictly requires `Content-Type: application/soap+xml; charset=utf-8` (or `text/xml; charset=utf-8` for SOAP 1.1). If you leave Postman default header in place, the server immediately rejects your request with a 415 Unsupported Media Type or protocol fault!',
        'How to fix: Go to the Headers tab in Postman, click the eye icon to show hidden headers, uncheck the default `Content-Type` header, and create your own header with key `Content-Type` and value `application/soap+xml; charset=utf-8`.',
      ],
    },
    {
      type: 'paragraph',
      text: 'When we hit Send in Postman, the remote accounting server processes the envelope and returns a structured XML response:',
    },
    {
      type: 'terminal',
      command: 'SOAP XML Response from DataAccess Server',
      lines: [
        'Status: 200 OK | Time: 215 ms | Size: 412 B',
        'Content-Type: application/soap+xml; charset=utf-8',
        '',
        '<?xml version="1.0" encoding="utf-8"?>',
        '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">',
        '  <soap:Body>',
        '    <m:NumberToWordsResponse xmlns:m="http://www.dataaccess.com/webservicesserver/">',
        '      <m:NumberToWordsResult>four hundred </m:NumberToWordsResult>',
        '    </m:NumberToWordsResponse>',
        '  </soap:Body>',
        '</soap:Envelope>',
      ],
    },
    {
      type: 'api-inspector',
      title: 'Live Interactive Wire Inspector: SOAP 1.2 XML NumberToWords',
      method: 'POST',
      url: 'https://www.dataaccess.com/webservicesserver/NumberConversion.wso',
      headers: {
        'Content-Type': 'application/soap+xml; charset=utf-8'
      },
      requestBody: '<?xml version="1.0" encoding="utf-8"?>\n<soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">\n  <soap12:Body>\n    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">\n      <ubiNum>400</ubiNum>\n    </NumberToWords>\n  </soap12:Body>\n</soap12:Envelope>',
      status: '200 OK',
      time: '215 ms',
      size: '412 B',
      responseBody: '<?xml version="1.0" encoding="utf-8"?>\n<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">\n  <soap:Body>\n    <m:NumberToWordsResponse xmlns:m="http://www.dataaccess.com/webservicesserver/">\n      <m:NumberToWordsResult>four hundred </m:NumberToWordsResult>\n    </m:NumberToWordsResponse>\n  </soap:Body>\n</soap:Envelope>',
      assertions: [
        'Accounting service status code is 200 OK',
        'Header Content Type is application/soap+xml',
        'Converted words attribute matches four hundred'
      ]
    },
    {
      type: 'heading',
      text: 'Step 4: Parsing XML in JavaScript Using xml2Json',
    },
    {
      type: 'paragraph',
      text: 'In JavaScript, navigating XML tags manually requires clumsy string parsing. Fortunately, Postman provides a built in utility called **xml2Json** that transforms raw XML text into a traversable JavaScript object in one step. You can download the completed script: [Download Parse SOAP Response Script](/materials/zero-to-agentic-api-testing/lesson-12/parse-soap-response.js).',
    },
    {
      type: 'code',
      filename: 'parse-soap-xml-response.js',
      lines: [
        '// Step 1: Capture the raw XML text response from the server',
        'const rawXmlResponse = pm.response.text();',
        '',
        '// Step 2: Convert XML text into a traversable JavaScript object',
        'const responseJson = xml2Json(rawXmlResponse);',
        '',
        '// Step 3: Verify HTTP status code is 200 OK',
        'pm.test("Accounting service status code is 200 OK", function () {',
        '    pm.response.to.have.status(200);',
        '});',
        '',
        '// Step 4: Extract the result using bracket notation for XML namespaces',
        'pm.test("Number conversion result returns four hundred", function () {',
        '    const actualValue = responseJson["soap:Envelope"]["soap:Body"]["m:NumberToWordsResponse"]["m:NumberToWordsResult"];',
        '    // Defensive trim handles legacy SOAP trailing whitespace',
        '    pm.expect(actualValue.trim()).to.eql("four hundred");',
        '});',
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Legacy SOAP Reality: The Trailing Whitespace Trap',
      paragraphs: [
        'A real world quirk of the public DataAccess NumberConversion SOAP service is that it appends a trailing space to words: returning "four hundred " rather than "four hundred".',
        'If you write pm.expect(actualValue).to.eql("four hundred") without trimming, your test will fail with an unexpected character difference at index 12!',
        'In automated testing of legacy XML services, always use defensive methods like actualValue.trim() or pm.expect(actualValue).to.include("four hundred") to safeguard tests from invisible whitespace discrepancies.',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Fresher Trap to Avoid: Using Dot Notation for XML Namespaces',
      paragraphs: [
        'Notice that XML tags frequently include namespace prefixes with colons, such as `soap:Body` or `m:NumberToWordsResponse`.',
        'In JavaScript, you cannot write `responseJson.soap:Body` because the colon triggers a fatal SyntaxError in dot notation!',
        'Always access namespace prefixed XML elements using bracket notation with string quotes: `responseJson["soap:Body"]`.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 5: Dynamic Parameterization and Fast Substring Scanning',
    },
    {
      type: 'paragraph',
      text: 'In professional regression suites, we do not hardcode 400 in our XML request body or assertions. Instead, we store the input number and expected result in Postman collection variables and reference them dynamically. You can download the dynamic test script: [Download Dynamic SOAP Assertions Script](/materials/zero-to-agentic-api-testing/lesson-12/dynamic-soap-assertions.js):',
    },
    {
      type: 'code',
      filename: 'dynamic-soap-assertions.js',
      lines: [
        '// Technique 1: Deep tag validation against collection variables',
        'const responseJson = xml2Json(pm.response.text());',
        'const actualWord = responseJson["soap:Envelope"]["soap:Body"]["m:NumberToWordsResponse"]["m:NumberToWordsResult"];',
        '',
        'pm.test("Deep tag validation matches collection expected result", function () {',
        '    const expectedWord = pm.collectionVariables.get("grant_word") || "four hundred";',
        '    pm.expect(actualWord.trim()).to.eql(expectedWord);',
        '});',
        '',
        '// Technique 2: Fast text scanning across the entire response string',
        'pm.test("Quick scan confirms four hundred is present in response", function () {',
        '    pm.expect(pm.response.text()).to.include("four hundred");',
        '});',
      ],
    },
    {
      type: 'heading',
      text: 'Step 6: Practice Challenge: Converting Numbers to Dollars',
    },
    {
      type: 'paragraph',
      text: 'Now it is your turn to apply what you learned! In the same DataAccess service documentation, locate the second operation: **NumberToDollars**. Create a second request in your SOAP collection with the following details:',
    },
    {
      type: 'steps',
      items: [
        'Set the HTTP method to POST and the URL to: https://www.dataaccess.com/webservicesserver/NumberConversion.wso',
        'In the Headers tab, configure Content Type to application/soap+xml; charset=utf 8',
        'In the Body tab, select raw and XML, then wrap `<NumberToDollars><dNum>123</dNum></NumberToDollars>` inside the SOAP 1.2 envelope.',
        'In the Tests tab, convert the response with xml2Json and write an assertion verifying that the returned string equals "one hundred and twenty three dollars". You can download the completed solution file: [Download SOAP Number to Dollars XML](/materials/zero-to-agentic-api-testing/lesson-12/soap-number-dollars.xml).',
      ],
    },
    {
      type: 'battle-scar',
      metric: 'Enterprise Interbank Freeze',
      title: 'The 415 Header Collision: The Cost of a SOAP Version Mismatch',
      context: 'A national banking federation upgraded its interbank clearing gateway from SOAP 1.1 to SOAP 1.2. Automated test pipelines running on older Postman collections continued sending legacy headers: Content Type text/xml; charset=utf 8 with a SOAPAction header. The upgraded gateway strictly required Content Type application/soap+xml; charset=utf 8 per the SOAP 1.2 specification. The legacy header triggered millions of HTTP 415 Unsupported Media Type errors, halting electronic clearing across fifty regional credit unions for four hours.',
      takeaway: 'Always align HTTP Content Type headers with the exact SOAP specification. SOAP 1.1 mandates text/xml with SOAPAction, while SOAP 1.2 strictly requires application/soap+xml without SOAPAction.'
    },
    {
      type: 'triage',
      title: 'War Room Triage: The xml2Json Undefined Traversal Crash',
      scenario: 'You convert an XML response using const responseJson = xml2Json(pm.response.text()). In your test script, you assert: pm.expect(responseJson["soap:Envelope"]["soap:Body"].NumberToWordsResult).to.eql("four hundred"). Postman halts immediately with: "TypeError: Cannot read property NumberToWordsResult of undefined". What caused this traversal failure?',
      options: [
        'Postman does not support parsing XML responses in JavaScript.',
        'The response XML element contained an XML namespace prefix (such as m:NumberToWordsResponse) that was omitted from the bracket lookup chain.',
        'The xml2Json utility only operates inside Node.js scripts outside Postman.',
        'The SOAP server returned an encrypted binary hash instead of XML.'
      ],
      answerIndex: 1,
      debrief: 'Respect XML namespace prefixes! XML responses often qualify elements with namespace prefixes like m:NumberToWordsResponse. When converted by xml2Json, these prefixes become part of the JavaScript object property key. Omitting the prefix means responseJson["soap:Envelope"]["soap:Body"]["NumberToWordsResponse"] evaluates to undefined, throwing a fatal TypeError on subsequent property accesses!',
      traps: [
        'Postman natively provides the xml2Json utility for seamless parsing.',
        '',
        'xml2Json is built directly into Postman sandbox environment.',
        'The server returned valid XML, but navigation failed due to missing namespace prefixes.'
      ]
    },
    {
      type: 'heading',
      text: 'Step 7: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'When testing a SOAP WebService in Postman, why must you select the HTTP POST method even when retrieving data?',
      options: [
        'Because GET is not supported by the HTTP protocol',
        'Because SOAP operations, namespace rules, and data parameters are packaged securely inside the XML envelope body rather than in the URL',
        'Because POST is faster than GET on all networks',
        'Because Postman does not allow GET requests on XML',
      ],
      answerIndex: 1,
      explain: 'SOAP messages are always transported using HTTP POST requests, because the operation name and parameters are packaged inside the XML envelope body.',
    },
    {
      type: 'quiz',
      items: [
        [
          'What is the purpose of xml2Json in Postman test scripts?',
          'xml2Json converts raw XML response strings into standard JavaScript objects so testers can traverse properties using bracket notation in Chai assertions.',
        ],
        [
          'Why must you uncheck Postman default Content Type when sending SOAP 1.2 requests?',
          'Postman defaults to application/xml, but the SOAP 1.2 standard strictly requires application/soap+xml; charset=utf 8. Mismatched headers cause server rejections.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'SOAP is a strict protocol based on XML envelopes, headers, bodies, and WSDL contracts.',
        'All SOAP requests are executed via HTTP POST with the body containing the XML envelope.',
        'Always check Postman hidden headers to ensure Content Type matches the server SOAP 1.2 specification.',
        'The built in xml2Json utility converts complex XML trees into traversable JavaScript objects.',
        'Use bracket notation with string quotes to access namespace prefixed XML elements without syntax errors.',
      ],
    },
    {
      type: 'victory-milestone',
      badge: 'MISSION 3 PHASE 4 CLEARED',
      rank: 'MULTI PROTOCOL ENTERPRISE ARCHITECT',
      title: 'Architectural Triumph: Legacy SOAP WebServices & XML Parsing Conquered',
      summary: 'You shattered the modern myth that QA engineers only test JSON REST APIs. When confronted with legacy enterprise banking, healthcare, and government mainframes, you crafted valid SOAP 1.2 XML envelopes, outmaneuvered hidden header traps, converted complex XML trees with xml2Json, and extracted deeply nested namespaces with bracket notation.',
      powers: [
        'Bridging the architectural divide: commanding both modern REST microservices and legacy enterprise SOAP WebServices',
        'Authoring valid SOAP 1.2 and SOAP 1.1 XML envelopes with headers, bodies, and target namespaces',
        'Defeating hidden header traps by enforcing exact Content Type application/soap+xml wire specifications',
        'Transforming raw XML strings into traversable JavaScript objects using the built in xml2Json utility',
        'Traversing complex XML namespaces using JavaScript string bracket notation without syntax exceptions',
      ],
      disastersPrevented: [
        'Averted multi million dollar enterprise integration outages during legacy banking and accounting migrations',
        'Prevented silent test suite failures caused by Postman overriding XML Content Type headers',
        'Eliminated costly contractor dependencies by proving that Postman can automate legacy XML just as easily as JSON',
      ],
      warRoomTakeaway: 'The vast majority of global enterprise wealth still flows through legacy SOAP web services. When you can seamlessly test both modern GraphQL REST APIs and legacy SOAP mainframes, your market value as a Lead Test Architect is peerless.',
    },
    {
      type: 'cliffhanger',
      title: 'Continuing Mission 3: Headless Execution in CI CD Pipelines',
      text: 'Our campus library test suite is now complete across modern REST, OAuth 2.0 security, mock contracts, and legacy enterprise SOAP. But it still only runs when a human clicks buttons in the Postman desktop app. In our final chapter, we take on the ultimate enterprise challenge: running our entire suite headlessly with Newman CLI and automating continuous delivery in Jenkins and GitHub Actions!',
    },
  ],
}
