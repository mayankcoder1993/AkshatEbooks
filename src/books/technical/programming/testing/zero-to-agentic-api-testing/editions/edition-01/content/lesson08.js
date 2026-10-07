import ddtIterationImg from '../assets/data-driven-testing-iteration.jpg'
import warRoomWideImg from '../assets/apex-campus-crisis-war-room.jpg'
import warRoomPanel1Img from '../assets/war-room-panel-1-the-crisis.jpg'
import warRoomPanel2Img from '../assets/war-room-panel-2-the-standoff.jpg'
import warRoomPanel3Img from '../assets/war-room-panel-3-invisible-wire.jpg'
import warRoomPanel4Img from '../assets/war-room-panel-4-first-principles.jpg'

export const lesson08 = {
  id: 'data-driven-testing',
  icon: '',
  title: 'Data Driven Testing with External Data Files',
  shortTitle: 'Data Driven Testing',
  subtitle: 'Powering automated iterations with CSV and JSON files, pm.iterationData, and debugging console traps.',
  tags: ['Data Driven Testing', 'CSV', 'JSON', 'iterationData', 'BOM Trap', 'RFC 4180'],
  blocks: [
    {
      type: 'mission-hud',
      mission: 'Mission 2: Automating Student and Campus Services at Scale',
      phase: 'Phase 5 of 5: Data Driven Mass Ingestion & Iteration Isolation',
      rank: 'Rank: Mass Ingestion Automation Architect',
      status: 'ACTIVE'
    },
    {
      type: 'chapter-opener',
      missionBadge: 'MISSION 2 · PHASE 5 OF 6',
      missionTitle: 'Automating Student and Campus Services at Scale',
      missionCrisis: 'The 10,000 Row Registrar Acquisition Ingestion Emergency',
      missionContext: 'At 02:15 AM in the Apex Institute Logistics Data Center, matrix printers clatter beside high resolution monitors. Mrs. Iyer arrives with an urgent registrar notification: 10,000 textbook records dumped into a single CSV file. All records must be cataloged and verified before dawn. Manual execution is impossible. Akshay and Sameer must power automated collection iterations from external data files.',
      missionObjective: 'Drive collection iterations with external CSV and JSON data files, access row variables with pm.iterationData, overcome the Excel BOM bug, prevent comma shifts, and isolate dynamic state.',
      targetSystems: 'API Testing Workbench Collection Runner · CSV RFC 4180 Parser · V8 Iteration Data Scope · Newman CLI Engine',
      difficulty: 'INTERMEDIATE',
      estimatedTime: '30 MINUTES',
      prerequisites: 'Chapter 07: Request Chaining and Complex Nested JSON Parsing'
    },
    {
      type: 'mission-tracker',
      currentPhase: 'Phase 5: Data Driven Testing with External Files',
      totalPhases: 5,
      completedSteps: [
        'Manual CRUD Lifecycle & Unique Constraints (Chapter 04)',
        'Writing JavaScript Assertions and pm Object (Chapter 05)',
        'Managing Variables Across the Five Scopes (Chapter 06)',
        'Request Chaining and Complex Nested JSON Parsing (Chapter 07)'
      ],
      currentStep: 'Data Driven Testing with External Data Files',
      upcomingSteps: [
        'Advanced Error Handling and Resilience Testing (Chapter 09)'
      ]
    },

    // =========================================================================
    // GRAPHIC COMIC ARC : SIX SCENES FROM MASTER STORY LEDGER
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC : SIX SCENES',
      title: 'The Ten Thousand Row Dump and The Invisible Byte Order Mark',
      intro: 'Follow apprentice Akshay, Principal Systems Architect Sameer, and Chief Librarian Mrs. Iyer in the Logistics Data Center as 10,000 registrar rows arrive, invisible Excel bytes break iteration keys, unquoted commas shift columns, and Newman streams 500 rows to victory.',
      panels: [
        {
          title: 'Scene 1: 02:15 AM: Logistics Data Center and the 10,000 Row Registrar Dump',
          time: '02:15 AM',
          layout: 'duo',
          image: {
            src: warRoomWideImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay and Sameer under cold amber lights in the Logistics Data Center as Mrs. Iyer presents her teak clipboard.',
            caption: 'Logistics Data Center: Matrix printers clatter as 10,000 textbook acquisition records arrive in a single CSV.'
          },
          replyImage: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Mrs. Iyer showing the registrar notice requiring 10,000 acquisitions cataloged before dawn.',
            caption: 'The Registrar Ultimatum: Ten thousand rows across twenty campus departments dumped into one spreadsheet.'
          },
          dialogue: {
            speaker: 'Mrs. Iyer',
            speech: 'Ten thousand textbook records across twenty departments. One CSV file. All cataloged before dawn.',
            replySpeaker: 'Sameer',
            replySpeech: 'In data driven testing, the collection is the engine. The CSV row is the fuel. One iteration per row.'
          },
          scene: 'At 02:15 AM, high speed matrix printers clatter in the Logistics Data Center. Mrs. Iyer presents an emergency registrar order: 10,000 course acquisitions dumped into a single spreadsheet file. Akshay attempts a loop inside a single request, but Sameer directs him to data driven testing.',
          realization: 'Manual request looping cannot parameterize dynamic payloads from external files; collections must iterate row by row.'
        },
        {
          title: 'Scene 2: 02:25 AM: Iteration 1 Red Crash: Expected Undefined to Equal 201',
          time: '02:25 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay staring at terminal screen flashing red failure on iteration 1.',
            caption: 'Immediate Red Crash: The very first iteration fails with undefined status code.'
          },
          replyImage: {
            src: warRoomPanel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-2-the-standoff.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay pointing at console output showing undefined key lookup.',
            caption: 'Console Diagnostic: pm.iterationData.get("isbn") returns undefined despite column header existing.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Iteration one, red! AssertionError: expected undefined to equal 201! The console says key is undefined!',
            replySpeaker: 'Sameer',
            replySpeech: 'Column one is named isbn on the screen. But what did Excel write into the raw byte stream?'
          },
          scene: 'Akshay launches a pilot tranche of 500 rows. Iteration 1 fails instantly. In the console, pm.iterationData.get("isbn") evaluates to undefined, even though the first column header clearly displays isbn in the spreadsheet.',
          realization: 'Spreadsheet visual rendering can disguise hidden binary characters in the underlying text file.'
        },
        {
          title: 'Scene 3: 02:29 AM: The Hex Forensic: The Invisible Byte Order Mark',
          time: '02:29 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Hexadecimal editor display revealing bytes EF BB BF prepended before the i s b n characters.',
            caption: 'Hex Forensics: The first three bytes are EF BB BF, the UTF-8 Byte Order Mark.'
          },
          replyImage: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer explaining Unicode character U+FEFF prepended by Microsoft Excel export.',
            caption: 'The Phantom Header: The actual property key is backslash uFEFF isbn, not plain isbn.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'The first three bytes are EF BB BF. The invisible UTF 8 Byte Order Mark prepended by Excel.',
            replySpeaker: 'Akshay',
            replySpeech: 'The key is not isbn! It is Unicode backslash uFEFF isbn! Stripping BOM bytes now!'
          },
          scene: 'Sameer opens the CSV in a hexadecimal editor. The first three bytes are EF BB BF. Excel silently prepended the Unicode zero width byte order mark U+FEFF, mutating the key lookup. Akshay strips the BOM, re-saving clean UTF-8 plain text.',
          realization: 'The UTF-8 BOM corrupts the first column header into an unrecognized key; always strip the BOM before test execution.'
        },
        {
          title: 'Scene 4: 02:35 AM: The Comma Shift Trap: Eats, Shoots & Leaves Shifts Columns',
          time: '02:35 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Screen display showing row 15 failing with AssertionError: expected NaN to equal 200.',
            caption: 'The Comma Shift Bug: Title containing comma causes subsequent numeric fields to evaluate to NaN.'
          },
          replyImage: {
            src: warRoomPanel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-2-the-standoff.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer citing the UK payroll disaster caused by unquoted commas in CSV feeds.',
            caption: 'RFC 4180 Rule: Every string containing commas must be wrapped in double quotes.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Iteration 15 failed! AssertionError: expected NaN to equal 200! The aisle parameter received Leaves!',
            replySpeaker: 'Sameer',
            replySpeech: 'Title was Eats, Shoots & Leaves. An unquoted comma split the field and shifted every column rightward.'
          },
          scene: 'Iteration 15 crashes because the title Eats, Shoots & Leaves contained an unquoted comma. The naive CSV parser split the title into two columns, pushing text into the numeric aisle and expectedStatus slots. Akshay enforces strict RFC 4180 quoting.',
          realization: 'Values containing commas must be enclosed in double quotes per RFC 4180 to prevent catastrophic column shifting.'
        },
        {
          title: 'Scene 5: 02:45 AM: The State Leakage Bug: Iteration 41 Leaks into Iteration 42',
          time: '02:45 AM',
          layout: 'duo',
          image: {
            src: ddtIterationImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/data-driven-testing-iteration.jpg',
            w: 1408,
            h: 768,
            alt: 'Architecture visual of iteration lifecycle showing data scope vs persistent environment scope.',
            caption: 'Scope Precedence: Iteration data dies per row; environment scope persists across the entire run.'
          },
          replyImage: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay writing pm.environment.unset in pre-request hook to isolate state.',
            caption: 'The Pre-Request Sweep: Purging stale mutable state before each iteration fires.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Iteration 42 threw 409 Conflict! It reused the bookId created in Iteration 41!',
            replySpeaker: 'Sameer',
            replySpeech: 'Iteration data dies per row. Environment lives forever. Sweep mutable keys in pre request script.'
          },
          scene: 'At iteration 42, the runner throws a 409 Conflict. Akshay discovers that dynamic variables saved to Environment scope in iteration 41 persisted into iteration 42. Sameer demonstrates adding a pre request cleanup hook to sweep stale keys before each row.',
          realization: 'Iteration data is ephemeral per row, but environment variables persist; sweep mutable keys in pre request scripts.'
        },
        {
          title: 'Scene 6: 02:55 AM: Streaming Green: 500 Iterations in 11.4 Seconds',
          time: '02:55 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Terminal streaming 500 passing iterations in Newman CLI runner.',
            caption: 'Streaming Green: 500 iterations stream across Newman CLI with 1500 passing assertions.'
          },
          replyImage: {
            src: warRoomPanel4Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-4-first-principles.jpg',
            w: 1376,
            h: 768,
            alt: 'Mrs. Iyer signing off on the cataloging intake sheet as Akshay and Sameer review the metrics.',
            caption: 'Mission 2 Cleared: Zero failures, zero collisions, complete data driven ingestion.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'Five hundred iterations streamed! Fifteen hundred assertions passed! Eleven point four seconds flat!',
            replySpeaker: 'Mrs. Iyer',
            replySpeech: 'The registrar catalog is verified and intake complete. Mission Two is officially cleared.'
          },
          scene: 'Akshay executes Newman headlessly with the sanitized CSV file. 500 rows stream past in 11.4 seconds. 1500 assertions verify book creation, retrieval, and teardown with zero collisions. Mrs. Iyer officially signs off the registrar catalog.',
          realization: 'Headless data driven execution scales regression verification across thousands of records in seconds.'
        }
      ]
    },

    // =========================================================================
    // TECHNICAL ARCHITECTURE & DEEP DIVE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      text: 'The Mechanics of Data Driven Testing'
    },
    {
      type: 'image',
      src: ddtIterationImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/data-driven-testing-iteration.jpg',
      w: 1408,
      h: 768,
      title: 'Data Driven Testing Iteration Engine: Row Parameterization & Scope Precedence',
      text: 'Data driven testing decouples test logic from test data. The runner executes the entire collection once per row in the CSV or JSON data file, binding row columns to iterationData.',
      alt: 'Architecture diagram showing data file injection into the collection iteration runner.',
      caption: 'The Data Driven Testing Engine: The collection is the engine, the external row is the fuel.'
    },

    // =========================================================================
    // WORKBENCH SCREEN 1 : DATA FILE RUNNER CONFIGURATION
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 1 : DATA FILE ITERATION RUNNER',
      title: 'Collection Runner Data File Configuration & Preview',
      scenario: 'Bind campus_acquisitions.csv to the Collection Runner. The runner inspects the file, detects 500 rows, and exposes column headers as iterationData keys.',
      config: {
        method: 'POST',
        path: '/v1/books',
        activeTab: 'Body'
      },
      tabs: {
        params: [],
        headers: [
          { key: 'Content-Type', value: 'application/json' }
        ],
        body: JSON.stringify({
          name: "{{bookName}}",
          isbn: "{{isbn}}",
          aisle: "{{aisle}}",
          author: "{{author}}"
        }, null, 2),
        tests: '// Access row values programmatically\nconst expectedStatus = parseInt(pm.iterationData.get("expectedStatus"), 10);\nconst expectedMsg = pm.iterationData.get("expectedMsg");\n\npm.test(`Iteration status is ${expectedStatus}`, function() {\n  pm.response.to.have.status(expectedStatus);\n});\n\npm.test("Verify dynamic message", function() {\n  const res = pm.response.json();\n  pm.expect(res.Msg).to.eql(expectedMsg);\n});'
      },
      response: {
        status: '200 OK',
        time: '9ms',
        size: '394B',
        body: JSON.stringify({
          Msg: "successfully added",
          ID: "ISBN77102"
        }, null, 2)
      },
      notes: [
        'Placeholders like {{isbn}} in the request body resolve directly to column values for the current iteration.',
        'pm.iterationData.get("key") provides programmatic access to row columns inside Pre-request and Tests scripts.'
      ]
    },

    // =========================================================================
    // WORKBENCH SCREEN 2 : PRE-REQUEST HOOK & STATE ISOLATION
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 2 : PRE-REQUEST SWEEP & ISOLATION',
      title: 'Collection Level Pre-Request Hook: Purging Mutable Leaks',
      scenario: 'Configure the Collection Pre-request script to sweep stale environment variables before each iteration fires, preventing cross iteration state leakage.',
      config: {
        method: 'POST',
        path: '/v1/books',
        activeTab: 'Pre-request'
      },
      tabs: {
        params: [],
        headers: [
          { key: 'Content-Type', value: 'application/json' }
        ],
        body: JSON.stringify({
          name: "{{bookName}}",
          isbn: "{{isbn}}",
          aisle: "{{aisle}}",
          author: "{{author}}"
        }, null, 2),
        tests: '// Pre-request hook sweeps mutable environment state\npm.environment.unset("createdBookId");\n\n// Generate dynamic run timestamp if not provided in CSV\nif (!pm.iterationData.get("timestamp")) {\n  pm.variables.set("dynamicTimestamp", Date.now());\n}'
      },
      response: {
        status: '200 OK',
        time: '8ms',
        size: '412B',
        body: JSON.stringify({
          Msg: "successfully added",
          ID: "ISBN77103"
        }, null, 2)
      },
      notes: [
        'Pre-request scripts execute before the HTTP request is dispatched across the wire.',
        'Unsetting mutable keys ensures each iteration starts from a clean, isolated baseline.'
      ]
    },

    // =========================================================================
    // FOUR PART PEDAGOGICAL CARDS (SENIOR SAVIOR CONTRACTS)
    // =========================================================================
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 1 : BINDING THE DDT ENGINE',
      title: 'Binding the Data File and DDT Engine',
      subtitle: 'Driving automated collection iterations from external data files',
      input: {
        method: 'CLI',
        url: 'newman run collection.json -d campus_acquisitions.csv --delay-request 5',
        desc: 'Newman execution with data file argument driving 500 automated iterations.',
        code: 'newman run collection.json -d campus_acquisitions.csv --delay-request 5'
      },
      underTheHood: {
        desc: 'Engine reads data file into memory and maps row columns to iterationData scope.',
        steps: [
          'Newman loads campus_acquisitions.csv and parses records per RFC 4180.',
          'Determines iteration count from total valid row count (500 rows).',
          'For each iteration, binds row keys to iterationData dictionary.',
          'Interpolates {{column}} placeholders in URLs, headers, and bodies.',
          'Advances cursor to next row upon completing collection iteration.'
        ]
      },
      output: {
        status: 'SUCCESS',
        time: '11.4s',
        desc: '500 automated iterations executed with 1500 passing assertions.',
        body: JSON.stringify({
          iterations: 500,
          assertions: 1500,
          failures: 0,
          duration: "11.4s"
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'The row is the test case; the request template is only its delivery vehicle.',
        rule: 'Parameterize data in external files; keep testing logic immutable.',
        trap: 'Writing separate hardcoded requests for each test case results in unmaintainable collection bloat.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 2 : THE BYTE ORDER MARK TRAP',
      title: 'The Invisible Byte Order Mark Trap',
      subtitle: 'Surviving spreadsheet binary artifacts prepended to text data files',
      input: {
        method: 'DATA FILE',
        url: 'campus_acquisitions.csv saved from Microsoft Excel',
        desc: 'CSV file exported from Excel containing hidden UTF-8 BOM bytes EF BB BF.',
        code: '// In hex editor: EF BB BF 69 73 62 6e\n// In JavaScript: pm.iterationData.get("isbn") -> undefined'
      },
      underTheHood: {
        desc: 'Parser prepends zero width byte U+FEFF to the first column header key.',
        steps: [
          'Excel prepends 3-byte signature EF BB BF to designate UTF-8 encoding.',
          'Text editors render the header as "isbn" without showing hidden characters.',
          'V8 parser creates object key "\uFEFFisbn" instead of "isbn".',
          'Exact string lookup pm.iterationData.get("isbn") fails and returns undefined.',
          'Stripping BOM in plain text editor restores clean header key.'
        ]
      },
      output: {
        status: 'CORRECTED',
        time: '0ms',
        desc: 'BOM stripped; iterationData key lookups evaluate successfully.',
        body: JSON.stringify({
          rawHeader: "\uFEFFisbn",
          cleanedHeader: "isbn",
          lookupStatus: "SUCCESS"
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'The Byte Order Mark is invisible in editors and fatal to key lookups.',
        rule: 'Always lint raw bytes in preflight before batch execution. Export plain UTF-8 without BOM.',
        trap: 'Assuming what you see in Excel is what the parser reads across the wire.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 3 : COMMA SHIFT AND RFC 4180',
      title: 'Comma Shift and Number Conversion (RFC 4180)',
      subtitle: 'Preserving column integrity when string values contain delimiter characters',
      input: {
        method: 'CSV ROW',
        url: 'Row 15: Eats, Shoots & Leaves, ISBN991, 40, 200',
        desc: 'Unquoted comma in book title causes subsequent fields to shift rightward.',
        code: '// Raw unquoted line:\n// Eats, Shoots & Leaves,ISBN991,40,200\n// RFC 4180 quoted line:\n// "Eats, Shoots & Leaves",ISBN991,40,200'
      },
      underTheHood: {
        desc: 'Naive delimiter splitting treats unquoted commas as column separators.',
        steps: [
          'Parser encounters comma after "Eats" and splits into column 1 and column 2.',
          '"Shoots & Leaves" is placed into the ISBN column slot.',
          'Subsequent columns shift rightward by one position.',
          'Numeric status code slot receives text, causing parseInt() to yield NaN.',
          'Enclosing strings with commas in double quotes satisfies RFC 4180 parsing.'
        ]
      },
      output: {
        status: 'PARSED OK',
        time: '1ms',
        desc: 'Row 15 parsed into correct columns; status asserts 200 OK.',
        body: JSON.stringify({
          title: "Eats, Shoots & Leaves",
          isbn: "ISBN991",
          aisle: 40,
          expectedStatus: 200
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Quote fields that contain commas; preserve column alignment.',
        rule: 'Always wrap strings containing commas in double quotes per RFC 4180.',
        trap: 'Letting unquoted commas shift columns, producing bizarre NaN errors in downstream assertions.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 4 : DYNAMIC STATE ISOLATION',
      title: 'Dynamic State Isolation Across Iterations',
      subtitle: 'Preventing cross iteration pollution through pre-request sweeps',
      input: {
        method: 'PRE-REQUEST HOOK',
        url: 'Collection Pre-request Script',
        desc: 'Pre-request hook sweeping mutable state before each iteration fires.',
        code: '// Sweep mutable keys to isolate iterations\npm.environment.unset("createdBookId");\npm.environment.unset("authSessionToken");'
      },
      underTheHood: {
        desc: 'Iteration data dies per row; environment scope persists across the entire run.',
        steps: [
          'Iteration 41 writes temporary ID into Environment scope.',
          'Iteration 41 completes teardown; dynamic ID should be abandoned.',
          'Iteration 42 begins; if key remains in Environment, request references stale ID.',
          'Collection level Pre-request script executes before each iteration starts.',
          'pm.environment.unset() clears stale state, guaranteeing iteration isolation.'
        ]
      },
      output: {
        status: 'CLEAN BASELINE',
        time: '0ms',
        desc: 'Iteration 42 starts with clean environment baseline, preventing 409 collisions.',
        body: JSON.stringify({
          activeIteration: 42,
          leakedVariables: 0,
          isolationVerified: true
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Iteration data is fuel; environment is memory. Sweep mutable keys before every row.',
        rule: 'Use pre request scripts to unset mutable environment variables between iterations.',
        trap: 'Leaving dynamic IDs in environment scope where subsequent iterations accidentally reuse them.'
      }
    },

    // =========================================================================
    // POST DRILLS & QUIZ
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      text: 'Variable Scope Precedence in Data Driven Runs'
    },
    {
      type: 'chunked-code',
      title: 'Iteration Data Scope Resolution Order',
      code: `// When resolving a placeholder {{isbn}}, the engine searches bottom-up:
// 1. Data (Iteration Data from CSV/JSON) <-- HIGHEST FOR PLACEHOLDERS
// 2. Local (Scripts)
// 3. Environment
// 4. Collection
// 5. Global <-- LOWEST

// In Pre-request and Tests scripts, access explicitly:
const csvIsbn = pm.iterationData.get("isbn");
const envIsbn = pm.environment.get("isbn");

console.log("CSV row value:", csvIsbn);
console.log("Environment value:", envIsbn);`,
      chunks: [
        {
          lines: '1-6',
          label: 'Precedence Order',
          explanation: 'Iteration data overrides Environment and Collection variables during collection runs.'
        },
        {
          lines: '8-10',
          label: 'Explicit Access',
          explanation: 'Always use pm.iterationData.get() in scripts to guarantee reading from the active data row.'
        }
      ]
    },

    {
      type: 'battle-scar',
      incident: 'The UK 2019 Payroll Comma Shift Catastrophe',
      context: 'In 2019, an automated payroll system processed a monthly CSV batch. A company name contained an unquoted comma ("Smith, Jones & Co."). The naive parser split the name into two columns, shifting employee bank account numbers into salary fields and salaries into tax codes. 68,000 employees had salaries misrouted before the batch was frozen.',
      takeaway: 'Strict RFC 4180 quoting and input linting are critical safety measures for any automated batch processing engine.'
    },
    {
      type: 'triage',
      title: 'Triage Drill: The Phantom Column Header',
      scenario: 'You load a CSV data file into the Collection Runner. Your first column is named "userId". But in your Pre-request script, pm.iterationData.get("userId") returns undefined. However, pm.iterationData.toObject() shows: { "\uFEFFuserId": "1001" }.',
      options: [
        {
          label: 'The server rejected the request because the variable name is invalid.',
          correct: false,
          explanation: 'The server has not been called yet; this is an internal runner data parsing issue.'
        },
        {
          label: 'The CSV file has an invisible UTF-8 Byte Order Mark (BOM) prepended to the first header.',
          correct: true,
          explanation: 'Microsoft Excel prepends the UTF-8 BOM (\uFEFF) to CSV exports. Re-saving the file as plain UTF-8 without BOM resolves the header name.'
        },
        {
          label: 'The runner only accepts JSON data files, not CSV.',
          correct: false,
          explanation: 'The runner supports both CSV and JSON data files natively.'
        }
      ],
      debrief: 'Spreadsheet programs like Excel prepend invisible BOM bytes to CSV files. Always verify raw file headers with a hex editor or linter.'
    },

    {
      type: 'guess',
      prompt: 'What happens to values stored in pm.iterationData when the collection moves to the next row in the data file?',
      options: [
        'They are merged into the Collection scope permanently.',
        'They are overwritten by the values from the next row in the data file.',
        'They persist in memory and can be accessed with pm.previousIterationData.',
        'They are exported automatically to an audit log file.',
      ],
      answerIndex: 1,
      explain: 'Iteration data is scoped strictly to the current row. When the iteration concludes, the data dictionary is replaced with the next row values.',
    },
    {
      type: 'quiz',
      items: [
        [
          'What happens to values stored in pm.iterationData when the collection moves to the next row in the data file?',
          'They are overwritten by the values from the next row in the data file.. Iteration data is scoped strictly to the current row. When the iteration concludes, the data dictionary is replaced with the next row values.',
        ],
      ],
    },
    {
      type: 'takeaways',
      title: 'Senior Savior Takeaways',
      items: [
        'Data Driven Testing parameterizes request templates with external CSV or JSON rows.',
        'Beware the invisible UTF-8 BOM (EF BB BF) prepended by Excel; strip it to prevent undefined key lookups.',
        'Quote strings containing commas per RFC 4180 to prevent catastrophic column shifting.',
        'Isolate iterations: sweep mutable environment variables in pre request scripts to prevent state leakage.'
      ]
    },
    {
      type: 'victory-milestone',
      badge: 'Milestone 2.5 Cleared',
      title: 'Data Driven Mass Ingestion Mastered',
      summary: 'You have automated massive batch runs with external data files, diagnosed the Byte Order Mark trap, enforced RFC 4180 compliance, and isolated iteration state.',
      powers: [
        'Decoupling test logic from test datasets using external CSV and JSON data files',
        'Reading iteration data dynamically via pm.iterationData.get() and placeholders',
        'Neutralizing the Excel UTF-8 Byte Order Mark (BOM) in preflight file lints',
        'Enforcing RFC 4180 quotes on comma-containing fields to prevent column shifts'
      ],
      disastersPrevented: [
        'Prevented silent batch ingestion crashes caused by invisible Excel BOM bytes',
        'Stopped catastrophic column-shift errors that convert status codes into NaN',
        'Eliminated state leakage across iterations via automated pre-request sweeps'
      ],
      nextStep: 'Proceed to Chapter 09 to harden test suites against negative responses, rate limits, and network flakiness.'
    },
    {
      type: 'cliffhanger',
      time: '03:15 AM',
      location: 'Apex Cultural Festival Ticketing War Room',
      alert: 'TICKETING FLASH-SALE CRISIS',
      speaker: 'Akshay Sharma',
      speech: 'Twelve thousand students clicked buy! The database inventory dropped to minus forty two!',
      context: 'Akshay and Sameer race to the Ticketing War Room. Happy-path testing failed to catch negative inventory overselling and upstream payment gateway 502 HTML crashes. Chapter 09 resilience testing begins!',
      nextLessonId: 'advanced-error-handling'
    }
  ]
}
