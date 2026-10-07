import soapArchImg from '../assets/soap-xml-architecture.jpg'
import warRoomWideImg from '../assets/apex-campus-crisis-war-room.jpg'
import warRoomPanel1Img from '../assets/war-room-panel-1-the-crisis.jpg'
import warRoomPanel2Img from '../assets/war-room-panel-2-the-standoff.jpg'
import warRoomPanel3Img from '../assets/war-room-panel-3-invisible-wire.jpg'
import warRoomPanel4Img from '../assets/war-room-panel-4-first-principles.jpg'

export const lesson12 = {
  id: 'soap-and-xml',
  icon: '',
  title: 'SOAP WebServices and XML Parsing',
  shortTitle: 'SOAP & XML Parsing',
  subtitle: 'Crafting XML envelopes, setting SOAP headers, and converting responses into JavaScript objects with xml2Json.',
  tags: ['SOAP', 'XML', 'WSDL', 'xml2Json', 'SOAPAction', 'Enterprise', 'Mainframe'],
  blocks: [
    {
      type: 'mission-hud',
      mission: 'Mission 3: Enterprise Quality Engineering & Resilience Testing',
      phase: 'Phase 4 of 5: Legacy Protocol Interoperability & XML Parsing',
      rank: 'Rank: Enterprise Integration Architect',
      status: 'ACTIVE'
    },
    {
      type: 'chapter-opener',
      missionBadge: 'MISSION 3 · PHASE 4 OF 5',
      missionTitle: 'Enterprise Quality Engineering & Resilience Testing',
      missionCrisis: 'The Thirty Million Rupee State Treasury Scholarship Freeze',
      missionContext: 'At 06:15 AM in the Apex Treasury Archive, brass lamps glow across vaulted Dravidian stone cloisters where legacy mainframe terminals hum beside modern workstations. Mrs. Iyer presents a formal audit order: thirty million rupees in student scholarship disbursements are frozen. The State Treasury mainframe rejects modern JSON REST APIs, demanding strict SOAP 1.2 XML envelopes governed by an immutable WSDL schema.',
      missionObjective: 'Understand SOAP envelope anatomy, configure SOAPAction routing headers, deserialize XML responses with xml2Json, navigate namespaced objects with bracket notation, and handle SOAP Fault structures.',
      targetSystems: 'API Testing Workbench XML Engine · State Treasury SOAP 1.2 Gateway · WSDL Definition Parser · xml2js Sandbox Traversal',
      difficulty: 'INTERMEDIATE',
      estimatedTime: '30 MINUTES',
      prerequisites: 'Chapter 11: OAuth 2.0 and Modern Token Authentication'
    },
    {
      type: 'mission-tracker',
      currentPhase: 'Phase 4: SOAP WebServices & XML Parsing',
      totalPhases: 5,
      completedSteps: [
        'OAuth 2.0 and Modern Token Authentication (Chapter 11)'
      ],
      currentStep: 'SOAP WebServices and XML Parsing',
      upcomingSteps: [
        'Headless Test Execution with Newman and Continuous Integration (Chapter 13)'
      ]
    },

    // =========================================================================
    // GRAPHIC COMIC ARC : SIX SCENES FROM MASTER STORY LEDGER
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC : SIX SCENES',
      title: 'The Dravidian Mainframe and the Thirty Million XML Envelope',
      intro: 'Follow apprentice Akshay, Principal Systems Architect Sameer, and Chief Librarian Mrs. Iyer in the Treasury Archive as 30 million rupees in student funds hang on legacy SOAP protocols, missing headers cause 500 faults, and xml2Json bridges modern test scripts to banking history.',
      panels: [
        {
          title: 'Scene 1: 06:15 AM: Treasury Cloisters and the Thirty Million Freeze',
          time: '06:15 AM',
          layout: 'duo',
          image: {
            src: warRoomWideImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay and Mrs. Iyer in vaulted stone cloisters as green screen mainframe terminals hum.',
            caption: 'Treasury Cloisters: Dawn light cuts across stone arches as 30 million rupees in disbursements freeze.'
          },
          replyImage: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Mrs. Iyer showing the official state government treasury disbursement mandate.',
            caption: 'The Treasury Ultimatum: Thirty million rupees in scholarship funds locked behind a SOAP mainframe.'
          },
          dialogue: {
            speaker: 'Mrs. Iyer',
            speech: 'Thirty million in student scholarships locked. The State Treasury mainframe refuses JSON. It demands SOAP 1.2.',
            replySpeaker: 'Akshay',
            replySpeech: 'SOAP? XML? I thought the whole world moved to JSON REST ten years ago!'
          },
          scene: 'At 06:15 AM, Mrs. Iyer presents an audit crisis in the stone cloisters: 30 million rupees in state scholarships cannot be disbursed. The government banking clearinghouse runs on a 2004 SOAP mainframe that rejects JSON payloads.',
          realization: 'Critical banking, government, and healthcare backends still run on legacy SOAP web services governed by immutable WSDL contracts.'
        },
        {
          title: 'Scene 2: 06:19 AM: The WSDL Contract and Strict Schema Rules',
          time: '06:19 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay staring at a massive XML WSDL file with hundreds of schema definitions.',
            caption: 'The WSDL Contract: Hundreds of lines of XML schema defining operations, types, and envelope bounds.'
          },
          replyImage: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer explaining the historical origins of SOAP and banking infrastructure.',
            caption: 'Respect the Giants: Before JSON existed, global finance ran reliably on SOAP specifications.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'NumberConversion.wso?WSDL. Hundreds of schema tags! Every tag, namespace, and order is strictly ruled!',
            replySpeaker: 'Sameer',
            replySpeech: 'Before JSON existed, global banking and government ran on SOAP. Respect the protocol and learn its anatomy.'
          },
          scene: 'Akshay inspects the WSDL (Web Services Description Language) file. Sameer explains that SOAP was the original strict enterprise contract standard. While verbose, it provided bulletproof type definitions and deterministic message routing.',
          realization: 'WSDL is the XML ancestor of OpenAPI; it strictly enforces message structure, operations, and types.'
        },
        {
          title: 'Scene 3: 06:23 AM: The Four Part SOAP Envelope Anatomy',
          time: '06:23 AM',
          layout: 'duo',
          image: {
            src: soapArchImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/soap-xml-architecture.jpg',
            w: 1408,
            h: 768,
            alt: 'Architecture visual of SOAP envelope anatomy: Envelope root, Header, Body, and Fault.',
            caption: 'Envelope Anatomy: Envelope wraps all, optional Header routes metadata, Body carries data, Fault handles errors.'
          },
          replyImage: {
            src: warRoomPanel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-2-the-standoff.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay drafting the XML envelope with soap:Envelope and soap:Body tags.',
            caption: 'Crafting the Envelope: Nesting operations inside soap:Body with correct XML namespace prefixes.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'Four parts: Envelope wraps all, Header carries routing, Body carries payload, Fault reports failures.',
            replySpeaker: 'Akshay',
            replySpeech: 'Envelope root, Body container, and NumberToWords payload with ubiNum tag! Packaging the request now!'
          },
          scene: 'Sameer breaks down SOAP envelope architecture on the whiteboard: the outer Envelope element, the optional Header for security tokens, the mandatory Body containing the operation payload, and the Fault element for error contracts.',
          realization: 'Every SOAP transaction travels inside an XML envelope containing defined namespaces and body operations.'
        },
        {
          title: 'Scene 4: 06:29 AM: The Missing SOAPAction Header: The 500 Fault Ambush',
          time: '06:29 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Screen showing HTTP 500 Internal Server Error returned from legacy treasury gateway.',
            caption: 'The 500 Fault: Treasury server rejects request because the SOAPAction routing header was absent.'
          },
          replyImage: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay adding SOAPAction: NumberToWords header and receiving green 200 OK.',
            caption: 'Routing Header Fixed: Adding the exact quoted action header yields 200 OK in 68ms.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: '500 Server Error! The server says Unable to handle request without SOAPAction header!',
            replySpeaker: 'Sameer',
            replySpeech: 'Address label before the letter. In SOAP 1.1, the HTTP header routes the operation before parsing XML.'
          },
          scene: 'Akshay dispatches the XML envelope via POST. The server returns an HTTP 500 Fault: SOAPAction header missing. Sameer explains that legacy gateways route requests using HTTP headers before reading the XML body. Adding SOAPAction restores 200 OK.',
          realization: 'SOAP 1.1 requires an explicit SOAPAction HTTP header to direct requests to the correct operation handler.'
        },
        {
          title: 'Scene 5: 06:37 AM: Deserializing XML with xml2Json and Bracket Notation',
          time: '06:37 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay writing xml2Json(pm.response.text()) in the Tests editor tab.',
            caption: 'XML Deserialization: Converting raw XML strings into traversable JavaScript objects.'
          },
          replyImage: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Console displaying parsed JavaScript object with bracket notation accessing namespaced keys.',
            caption: 'Namespace Colons: Keys like soap:Body must be accessed using bracket notation in JavaScript.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'pm.response.json() crashed with SyntaxError! But xml2Json converted the whole tree into an object!',
            replySpeaker: 'Sameer',
            replySpeech: 'XML keys contain namespace colons. Use bracket notation: obj["soap:Body"]["m:NumberToWordsResult"].'
          },
          scene: 'Calling pm.response.json() crashes on XML payloads. Sameer introduces xml2Json, workbench built in XML parser. Because XML tags contain colons for namespaces (soap:Body), dot notation fails, requiring bracket notation for object traversal.',
          realization: 'xml2Json deserializes XML into JavaScript objects; bracket notation is required to navigate keys containing namespace colons.'
        },
        {
          title: 'Scene 6: 06:49 AM: Ghost Whitespace Trimming and The Thirty Million Release',
          time: '06:49 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Mrs. Iyer witnessing the scholarship disbursement green confirmation on the treasury monitor.',
            caption: 'Disbursement Unlocked: Thirty million rupees in student funds released to state accounts.'
          },
          replyImage: {
            src: warRoomWideImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay, Sameer, and Mrs. Iyer celebrating the legacy integration victory at sunrise.',
            caption: 'Legacy Mastered: SOAP envelopes validated, fault contracts asserted, funds disbursed.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'The text had trailing ghost spaces! .trim() solved it! Thirty million allocation matches words perfectly!',
            replySpeaker: 'Mrs. Iyer',
            replySpeech: 'Disbursement confirmed. Thirty million rupees in student scholarships unlocked. Splendid engineering.'
          },
          scene: 'An exact string assertion fails because legacy XML responses carry trailing whitespace. Akshay sanitizes the string with .trim(), passing the thirty million allocation test. Mrs. Iyer signs the release, unlocking student scholarships.',
          realization: 'Always trim machine generated XML strings to avoid false assertion failures caused by ghost whitespace.'
        }
      ]
    },

    // =========================================================================
    // TECHNICAL ARCHITECTURE & DEEP DIVE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      text: 'The Architecture of SOAP and XML WebServices'
    },
    {
      type: 'image',
      src: soapArchImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/soap-xml-architecture.jpg',
      w: 1408,
      h: 768,
      title: 'SOAP 1.2 XML Envelope Architecture & Deserialization Pipeline',
      text: 'SOAP relies on structured XML envelopes and WSDL schemas. Deserializing XML with xml2Json translates namespaced elements into native JavaScript objects, enabling automated Chai assertions.',
      alt: 'Architecture diagram showing SOAP envelope structure and xml2Json conversion pipeline.',
      caption: 'The SOAP Architecture: Structured XML contracts bridging legacy mainframes and modern test runners.'
    },

    // =========================================================================
    // WORKBENCH SCREEN 1 : SOAP ENVELOPE DISPATCH
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 1 : SOAP ENVELOPE DISPATCH',
      title: 'Dispatched SOAP 1.1 Request with SOAPAction Header',
      scenario: 'Execute a NumberToWords SOAP request to the State Treasury clearinghouse. Configure headers and XML body with ubiNum 400.',
      config: {
        method: 'POST',
        path: '/webservicesserver/NumberConversion.wso',
        activeTab: 'Body'
      },
      tabs: {
        params: [],
        headers: [
          { key: 'Content-Type', value: 'text/xml; charset=utf-8' },
          { key: 'SOAPAction', value: '"NumberToWords"' }
        ],
        body: '<?xml version="1.0" encoding="utf-8"?>\n<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n  <soap:Body>\n    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">\n      <ubiNum>400</ubiNum>\n    </NumberToWords>\n  </soap:Body>\n</soap:Envelope>',
        tests: '// Validate SOAP response with xml2Json\nconst jsonRes = xml2Json(pm.response.text());\n\npm.test("Status is 200 OK from SOAP gateway", function() {\n  pm.response.to.have.status(200);\n});\n\npm.test("Verify converted word string", function() {\n  const result = jsonRes["soap:Envelope"]["soap:Body"]["m:NumberToWordsResponse"]["m:NumberToWordsResult"];\n  pm.expect(result.trim()).to.eql("four hundred");\n});'
      },
      response: {
        status: '200 OK',
        time: '68ms',
        size: '640B',
        body: '<?xml version="1.0" encoding="utf-8"?>\n<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n  <soap:Body>\n    <m:NumberToWordsResponse xmlns:m="http://www.dataaccess.com/webservicesserver/">\n      <m:NumberToWordsResult>four hundred </m:NumberToWordsResult>\n    </m:NumberToWordsResponse>\n  </soap:Body>\n</soap:Envelope>'
      },
      notes: [
        'SOAP 1.1 requires the SOAPAction HTTP header to route requests to the appropriate service operation.',
        'The body must be formatted as raw text/xml with standard XML declaration.'
      ]
    },

    // =========================================================================
    // WORKBENCH SCREEN 2 : XML PARSING & FAULT HANDLING
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 2 : XML2JSON & FAULT ASSERTION',
      title: 'Asserting SOAP Fault Contracts with xml2Json Traversal',
      scenario: 'Send invalid alphabetic characters into the number converter. Assert that the mainframe returns a structured SOAP Fault contract.',
      config: {
        method: 'POST',
        path: '/webservicesserver/NumberConversion.wso',
        activeTab: 'Tests'
      },
      tabs: {
        params: [],
        headers: [
          { key: 'Content-Type', value: 'text/xml; charset=utf-8' },
          { key: 'SOAPAction', value: '"NumberToWords"' }
        ],
        body: '<?xml version="1.0" encoding="utf-8"?>\n<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n  <soap:Body>\n    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">\n      <ubiNum>INVALID_TEXT</ubiNum>\n    </NumberToWords>\n  </soap:Body>\n</soap:Envelope>',
        tests: '// Deserializing Fault with xml2Json\nconst jsonRes = xml2Json(pm.response.text());\n\npm.test("Status is 500 Fault from SOAP service", function() {\n  pm.response.to.have.status(500);\n});\n\npm.test("Verify structured faultcode and faultstring", function() {\n  const fault = jsonRes["soap:Envelope"]["soap:Body"]["soap:Fault"];\n  pm.expect(fault).to.exist;\n  pm.expect(fault.faultcode).to.include("Client");\n  pm.expect(fault.faultstring).to.include("Number was not valid");\n});'
      },
      response: {
        status: '500 Internal Server Error',
        time: '42ms',
        size: '512B',
        body: '<?xml version="1.0" encoding="utf-8"?>\n<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n  <soap:Body>\n    <soap:Fault>\n      <faultcode>soap:Client</faultcode>\n      <faultstring>Number was not valid: String was not recognized as a valid Int.</faultstring>\n    </soap:Fault>\n  </soap:Body>\n</soap:Envelope>'
      },
      notes: [
        'SOAP errors are returned as structured Fault elements inside the Body container.',
        'Distinguishing soap:Client from soap:Server faults proves whether the client or server caused the error.'
      ]
    },

    // =========================================================================
    // FOUR PART PEDAGOGICAL CARDS (SENIOR SAVIOR CONTRACTS)
    // =========================================================================
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 1 : SOAP ENVELOPE & ROUTING HEADERS',
      title: 'SOAP Envelope Anatomy and Routing Headers',
      subtitle: 'Packaging XML payloads with namespaces and explicit HTTP routing headers',
      input: {
        method: 'POST',
        url: 'https://treasury.gov/NumberConversion.wso',
        desc: 'POST request carrying XML envelope and mandatory SOAPAction routing header.',
        code: 'SOAPAction: "NumberToWords"\nContent-Type: text/xml; charset=utf-8'
      },
      underTheHood: {
        desc: 'SOAP 1.1 routes via SOAPAction header before parsing XML payload bytes.',
        steps: [
          'Client sends POST request with XML envelope in the HTTP body.',
          'Gateway inspects SOAPAction HTTP header to identify the target service operation.',
          'Missing or unquoted SOAPAction header triggers immediate HTTP 500 Fault.',
          'Gateway forwards body to operation handler matching the action header.',
          'Operation executes and returns response XML wrapped in an envelope.'
        ]
      },
      output: {
        status: '200 OK',
        time: '68ms',
        desc: 'Treasury mainframe returns valid XML response with converted number string.',
        body: JSON.stringify({
          status: "200 OK",
          protocol: "SOAP 1.1",
          routedSuccessfully: true
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Address label before letter: headers route, bodies speak.',
        rule: 'Always verify whether the WSDL mandates SOAP 1.1 SOAPAction or SOAP 1.2 Content-Type parameters.',
        trap: 'Omitting the SOAPAction header on SOAP 1.1 endpoints, receiving mysterious 500 Fault errors.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 2 : XML DESERIALIZATION WITH XML2JSON',
      title: 'XML Deserialization with xml2Json',
      subtitle: 'Converting XML response trees into navigable JavaScript objects',
      input: {
        method: 'TEST SCRIPT',
        url: 'xml2Json(pm.response.text())',
        desc: 'Deserializing raw XML text into JavaScript object in the V8 sandbox.',
        code: 'const jsonRes = xml2Json(pm.response.text());\nconst val = jsonRes["soap:Envelope"]["soap:Body"]["m:Result"];'
      },
      underTheHood: {
        desc: 'workbench sandbox embeds xml2js to parse XML strings into JavaScript trees.',
        steps: [
          'pm.response.json() throws SyntaxError on XML payloads.',
          'xml2Json() reads raw XML text and builds a nested JavaScript object tree.',
          'XML tags with namespace colons (e.g. soap:Body) become object property keys.',
          'Dot notation fails on colons (obj.soap:Body is invalid JavaScript syntax).',
          'Bracket notation obj["soap:Body"] allows clean, deterministic property traversal.'
        ]
      },
      output: {
        status: 'DESERIALIZED',
        time: '4ms',
        desc: 'XML payload converted into navigable JavaScript object for Chai assertions.',
        body: JSON.stringify({
          parsedObject: {
            "soap:Envelope": {
              "soap:Body": { "m:Result": "four hundred" }
            }
          }
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Translate before you interrogate.',
        rule: 'Use bracket notation to navigate XML namespace keys containing colons.',
        trap: 'Using dot notation on namespaced keys like obj.soap:Envelope, triggering JavaScript syntax errors.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 3 : THE GHOST WHITESPACE TRAP',
      title: 'The Ghost Character Whitespace Trap',
      subtitle: 'Surviving unexpected whitespace in machine generated legacy text responses',
      input: {
        method: 'ASSERTION',
        url: 'Validating machine generated XML text values with strict equality',
        desc: 'Response string contains trailing newline or space: "four hundred "',
        code: '// Strict assertion fails:\n// pm.expect(text).to.eql("four hundred");\n// Sanitized assertion passes:\npm.expect(text.trim()).to.eql("four hundred");'
      },
      underTheHood: {
        desc: 'Legacy mainframes often append spaces or CRLF endings to fill fixed width fields.',
        steps: [
          'Mainframe serialization outputs text formatted with padding spaces.',
          'Visual inspection in UI looks identical to "four hundred".',
          'Strict Chai assertion compares exact string bytes including trailing spaces.',
          'Assertion fails with "expected four hundred to equal four hundred".',
          'Applying .trim() strips leading and trailing whitespace, restoring passing tests.'
        ]
      },
      output: {
        status: 'SANITIZED MATCH',
        time: '0ms',
        desc: 'Trailing whitespace sanitized; assertion evaluates deterministically.',
        body: JSON.stringify({
          rawText: "four hundred ",
          trimmedText: "four hundred",
          assertionPassed: true
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Normalize machine generated text before comparison.',
        rule: 'Trim whitespace on string values extracted from legacy XML responses.',
        trap: 'Assuming text has no trailing whitespace, causing mysterious test failures on visually identical strings.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 4 : SOAP FAULT ASSERTION CONTRACTS',
      title: 'SOAP Fault Assertion and Error Contracts',
      subtitle: 'Validating structured failure messages in legacy banking protocols',
      input: {
        method: 'POST',
        url: 'Negative request triggering a SOAP Fault envelope',
        desc: 'Deliberate invalid parameter causing the mainframe to return <soap:Fault>.',
        code: 'pm.test("Assert SOAP Fault code", function() {\n  const fault = jsonRes["soap:Envelope"]["soap:Body"]["soap:Fault"];\n  pm.expect(fault.faultcode).to.eql("soap:Client");\n});'
      },
      underTheHood: {
        desc: 'SOAP protocol formalizes errors inside standard Fault elements.',
        steps: [
          'Mainframe encounters invalid data and constructs a Fault XML envelope.',
          'faultcode indicates fault responsibility (soap:Client vs soap:Server).',
          'faultstring provides human readable error explanation.',
          'detail element provides application specific technical traces.',
          'Test suite asserts faultcode to prove the system rejected bad input cleanly.'
        ]
      },
      output: {
        status: 'FAULT ASSERTED',
        time: '42ms',
        desc: 'SOAP Fault verified: client error confirmed without server crash.',
        body: JSON.stringify({
          faultcode: "soap:Client",
          faultstring: "Number was not valid",
          gracefullyRejected: true
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'A fault is a structured failure contract, not a crash.',
        rule: 'Assert why the legacy service failed rather than asserting status codes alone.',
        trap: 'Treating all SOAP faults as generic 500 crashes without inspecting the structured faultcode.'
      }
    },

    // =========================================================================
    // POST DRILLS & QUIZ
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      text: 'Navigating Namespaces with JavaScript'
    },
    {
      type: 'chunked-code',
      title: 'Syntax: Dot Notation vs Bracket Notation in XML Objects',
      code: `const json = xml2Json(xmlString);

// WRONG: SyntaxError: Unexpected token ':'
// const body = json.soap:Envelope.soap:Body;

// CORRECT: Bracket notation for strings with colons
const envelope = json["soap:Envelope"];
const body     = envelope["soap:Body"];
const result   = body["m:NumberToWordsResponse"]["m:NumberToWordsResult"];

console.log("Extracted Value:", result.trim());`,
      chunks: [
        {
          lines: '3-4',
          label: 'The Dot Notation Trap',
          explanation: 'JavaScript interprets the colon as a label or syntax error in dot notation expressions.'
        },
        {
          lines: '6-9',
          label: 'The Bracket Notation Fix',
          explanation: 'Square brackets with quotes allow accessing object keys containing colons and special characters.'
        }
      ]
    },

    {
      type: 'battle-scar',
      incident: 'The Missing SOAPAction Header That Halted A National Clearinghouse',
      context: 'In 2017, a payment processing bridge was migrated from an on-premise proxy to an AWS API Gateway. The migration team inadvertently omitted the SOAPAction header from HTTP request forwarders. The central bank mainframe rejected 400,000 ACH batch transfers with 500 Faults, delaying billions in commercial payments for 18 hours.',
      takeaway: 'SOAP 1.1 gateways require the SOAPAction header for routing. Always audit header fidelity during migrations.'
    },
    {
      type: 'triage',
      title: 'Triage Drill: Dot Notation on XML Namespaces',
      scenario: 'You deserialize a SOAP response with xml2Json. When you write: const res = json.soap:Envelope.soap:Body, the test runner fails with: SyntaxError: Unexpected token : before executing any assertions.',
      options: [
        {
          label: 'The XML string was malformed and could not be deserialized.',
          correct: false,
          explanation: 'The XML was parsed; the syntax error is in the JavaScript test code.'
        },
        {
          label: 'JavaScript dot notation cannot evaluate keys containing colons; use bracket notation instead.',
          correct: true,
          explanation: 'In JavaScript, colons are invalid in property identifiers with dot notation. You must use bracket notation: json["soap:Envelope"]["soap:Body"].'
        },
        {
          label: 'You must convert the object to JSON.stringify() before accessing properties.',
          correct: false,
          explanation: 'Stringifying would convert it to text, not solve object property access.'
        }
      ],
      debrief: 'XML tags with namespace prefixes (prefix:tag) produce JavaScript keys with colons. Always access them with bracket notation: obj["prefix:tag"].'
    },

    {
      type: 'guess',
      prompt: 'In a SOAP Fault element, which faultcode value indicates that the client submitted invalid or malformed data?',
      options: [
        'soap:Server',
        'soap:Client',
        'soap:VersionMismatch',
        'soap:MustUnderstand',
      ],
      answerIndex: 1,
      explain: 'soap:Client indicates that the request was malformed or contained invalid parameters, equivalent to an HTTP 4xx client error.',
    },
    {
      type: 'quiz',
      items: [
        [
          'In a SOAP Fault element, which faultcode value indicates that the client submitted invalid or malformed data?',
          'soap:Client. soap:Client indicates that the request was malformed or contained invalid parameters, equivalent to an HTTP 4xx client error.',
        ],
      ],
    },
    {
      type: 'takeaways',
      title: 'Senior Savior Takeaways',
      items: [
        'SOAP requests travel inside structured XML envelopes consisting of Envelope, Header, and Body elements.',
        'SOAP 1.1 requires the SOAPAction HTTP header for routing before XML parsing occurs.',
        'Use xml2Json to deserialize XML in test scripts, and use bracket notation to traverse namespaced keys.',
        'Always trim whitespace from machine-generated XML strings before evaluating strict equality assertions.'
      ]
    },
    {
      type: 'victory-milestone',
      badge: 'Milestone 3.4 Cleared',
      title: 'SOAP WebServices & XML Parsing Mastered',
      summary: 'You have conquered legacy enterprise protocols, configured SOAPAction headers, deserialized XML with xml2Json, navigated namespaced objects, and unlocked thirty million rupees in student funds.',
      powers: [
        'Constructing valid SOAP 1.2 XML request envelopes with headers and bodies',
        'Configuring Content-Type and SOAPAction routing headers per WSDL rules',
        'Converting rigid XML responses into navigable JavaScript objects with xml2Json',
        'Asserting SOAP Fault elements including faultcode and faultstring branches'
      ],
      disastersPrevented: [
        'Prevented government scholarship batch freezes by bridging legacy enterprise systems',
        'Stopped false test failures caused by unescaped ghost whitespace using trim',
        'Eliminated JSON parser crashes on XML bodies through pre-assertion conversion'
      ],
      nextStep: 'Proceed to Chapter 13 to automate continuous integration gates and headless execution with Newman.'
    },
    {
      type: 'cliffhanger',
      time: '07:15 AM',
      location: 'Apex Continuous Delivery War Room',
      alert: 'PULL REQUEST REJECTION ALERT',
      speaker: 'Akshay Sharma',
      speech: 'Pull Request 342 failed in CI! A fee rounding bug was caught by the headless pipeline!',
      context: 'Dawn turns to morning at Apex Institute. Admissions is deploying a critical release via Pull Request #342. Newman runs headlessly in the Ubuntu CI runner, catching a silent fee rounding error. The final chapter begins!',
      nextLessonId: 'headless-ci-newman'
    }
  ]
}
