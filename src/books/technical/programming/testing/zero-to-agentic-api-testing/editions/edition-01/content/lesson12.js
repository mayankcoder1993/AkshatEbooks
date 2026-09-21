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
      text: 'The documentation offers both SOAP 1.1 and SOAP 1.2 specifications. In modern enterprise testing, SOAP 1.2 is the recommended standard. You can download the ready to use request envelope file: [Download SOAP Number Conversion XML](/materials/zero-to-agentic-api-testing/lesson-12/soap-number-conversion.xml). Here is the exact SOAP 1.2 request envelope we paste into Postman:',
    },
    {
      type: 'code',
      filename: 'soap-number-conversion-request.xml',
      lines: [
        'POST https://www.dataaccess.com/webservicesserver/NumberConversion.wso HTTP/1.1',
        'Content-Type: application/soap+xml; charset=utf-8',
        '',
        '<?xml version="1.0" encoding="utf-8"?>',
        '<soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">',
        '  <soap12:Body>',
        '    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">',
        '      <ubiNum>400</ubiNum>',
        '    </NumberToWords>',
        '  </soap12:Body>',
        '</soap12:Envelope>',
      ],
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
        '      <m:NumberToWordsResult>four hundred</m:NumberToWordsResult>',
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
      responseBody: '<?xml version="1.0" encoding="utf-8"?>\n<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">\n  <soap:Body>\n    <m:NumberToWordsResponse xmlns:m="http://www.dataaccess.com/webservicesserver/">\n      <m:NumberToWordsResult>four hundred</m:NumberToWordsResult>\n    </m:NumberToWordsResponse>\n  </soap:Body>\n</soap:Envelope>',
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
        '    pm.expect(actualValue).to.eql("four hundred");',
        '});',
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
        '    pm.expect(actualWord).to.eql(expectedWord);',
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
