import ddtImg from '../assets/data-driven-testing-iteration.jpg'

export const lesson08 = {
  id: 'data-driven-testing',
  icon: '',
  title: 'Data Driven Testing with External Data Files',
  shortTitle: 'Data Driven Testing',
  subtitle: 'Powering automated iterations with CSV and JSON files, pm.iterationData, and debugging console traps.',
  tags: ['DDT', 'CSV', 'JSON', 'Iteration', 'Collection Runner'],
  blocks: [
    {
      type: 'mission-tracker',
      badge: 'MISSION 2 PROGRESS · STEP 5 OF 5',
      title: 'Completing Mission 2: Ingesting Bulk Inventory with External Data Files',
      text: 'Our chained pipeline in Chapter 7 tests a single book with complete autonomy. But this morning, the college bookstore received a shipment of 100 new textbooks in a CSV spreadsheet. Our final step in Mission 2 is implementing Data Driven Testing: loading books_data.csv into the Postman Collection Runner, iterating through every record row by row, and validating bulk ingestion at scale.',
    },
    {
      type: 'heading',
      text: 'Step 1: The Data Driven Iteration Loop',
    },
    {
      type: 'paragraph',
      text: 'In Data Driven Testing, your request sequence acts as a reusable engine. When you feed an external data file into the Collection Runner, Postman executes the entire collection once for every single row in the file.',
    },
    {
      type: 'image',
      layout: 'stacked',
      src: ddtImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/data-driven-testing-iteration.jpg',
      w: 1408,
      h: 768,
      alt: 'Diagram showing CSV file with multiple rows feeding into Postman Collection Runner, executing iterations 1, 2, and 3 in a loop.',
      caption: 'The Data Driven Testing loop executing multiple test iterations from one external file.',
      points: [
        'The External Dataset: A CSV or JSON document where column headers act as variable keys and each row contains distinct test values.',
        'The Collection Runner Loop: Postman loads row 1, executes Pre request scripts, fires the request, and runs assertions. It then immediately repeats the cycle for row 2, row 3, and beyond.',
        'The Iteration Scorecard: Results are tallied across all runs, reporting total passed assertions and pinpointing any failing records.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 2: Preparing the CSV Dataset and Ingesting Row Values',
    },
    {
      type: 'paragraph',
      text: 'You can download the ready to use dataset directly: [Download books_data.csv](/materials/zero-to-agentic-api-testing/lesson-08/books_data.csv) or view the single file on GitHub: [Raw books_data.csv](https://raw.githubusercontent.com/mayankcoder1993/AkshatEbooks/arena/01a0bfe5-akshatebooks/course-materials/zero-to-agentic-api-testing/lesson-08/books_data.csv). Clicking the link opens only that individual file.',
    },
    {
      type: 'paragraph',
      text: 'During a collection run with a data file, Postman exposes **Data Scope**. In Pre request scripts, access row values with `pm.iterationData.get()`.',
    },
    {
      type: 'code',
      filename: 'ddt-pre-request.js',
      lines: [
        '// Step 1: Read values from the active CSV row header',
        'const currentBook = pm.iterationData.get("book_name");',
        'const currentAuthor = pm.iterationData.get("author");',
        '',
        '// Step 2: Push to Collection Scope for request payload interpolation',
        'pm.collectionVariables.set("book_name", currentBook);',
        'pm.collectionVariables.set("author_name", currentAuthor);',
        '',
        '// Step 3: Generate dynamic ISBN to guarantee uniqueness per row',
        'const randomDigits = pm.variables.replaceIn("{{$randomInt}}");',
        'pm.collectionVariables.set("ISBN", "LIB" + randomDigits);',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Fresher Trap to Avoid: Using pm.environment for File Data',
      paragraphs: [
        'A frequent confusion among freshers is trying to read CSV rows using `pm.environment.get("book_name")`.',
        'Uploaded CSV rows live strictly inside **Data Scope**, not Environment Scope. Calling `pm.environment.get()` will return undefined!',
        'Always use `pm.iterationData.get("column_header")` to read fields from your uploaded CSV or JSON files.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 3: Debugging Console Traps: The Undefined Variable Bug',
    },
    {
      type: 'bug',
      prompt: 'You run the collection with your CSV file. The tests execute, but in the server database, author is saved as empty string! What caused this bug?',
      lines: [
        '// Pre request Script',
        'const currentAuthor = pm.iterationData.get("author");',
        'pm.collectionVariables.set("author_name", currentAuthor);',
        '',
        '// Request Payload Body',
        '{ "name": "{{book_name}}", "isbn": "{{ISBN}}", "author": "{{author}}" }',
      ],
      bugLine: 6,
      explain: 'The script saved the author into "author_name", but the payload looked for "{{author}}". Because no variable named "author" existed, Postman resolved undefined. Always match script keys with payload placeholders.',
    },
    {
      type: 'heading',
      text: 'Step 4: Executing Bulk Runs in Collection Runner',
    },
    {
      type: 'terminal',
      command: 'Postman Collection Runner Bulk Results',
      lines: [
        'Iteration 1: Ingested "Learn Postman Testing" : 6 of 6 passed (180 ms)',
        'Iteration 2: Ingested "Mastering Git and GitHub" : 6 of 6 passed (172 ms)',
        'Iteration 3: Ingested "Modern Angular Architecture" : 6 of 6 passed (165 ms)',
        'Bulk Execution Completed: 3 iterations, 9 requests, 18 assertions, 0 failures (517 ms)',
      ],
    },
    {
      type: 'mission-accomplished',
      title: 'Mission 2 Accomplished: Library Automation at Full Scale!',
      text: 'The entire college library catalog is now automated, parameterized across environments, chained end to end with dynamic property transfer, and capable of ingesting hundreds of records in seconds with zero manual effort!',
    },
    {
      type: 'heading',
      text: 'Step 5: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'Which Postman object is specifically designed to read values from an uploaded CSV or JSON file during a Collection run?',
      options: [
        'pm.environment',
        'pm.globals',
        'pm.iterationData',
        'pm.dataFile',
      ],
      answerIndex: 2,
      explain: 'The pm.iterationData object is dedicated to the Data Scope. It provides access to column values for the current iteration row using the get() method.',
    },
    {
      type: 'quiz',
      items: [
        [
          'What is the core architectural advantage of Data Driven Testing?',
          'It separates test logic from test data. Testers can add, remove, or modify hundreds of test cases in a simple spreadsheet without altering a single line of automation code.',
        ],
        [
          'Why is automated cleanup essential when running data driven tests?',
          'Without cleanup, inserting hundreds of records would pollute test databases and cause subsequent runs to fail on unique constraints. Chaining DeleteBook at the end of each iteration guarantees clean database state.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'Data Driven Testing runs the same test workflow against multiple datasets from CSV or JSON files.',
        'Use pm.iterationData.get("column_name") in Pre request scripts to read values for the active row.',
        'Collection Runner automatically sets iteration counts to match the row count of the uploaded file.',
      ],
    },
    {
      type: 'victory-milestone',
      badge: 'MISSION 2 CONQUERED · BULK ENGINE ONLINE',
      rank: 'DATA DRIVEN AUTOMATION ARCHITECT',
      title: 'Major Milestone Cleared: Autonomous High Throughput Ingestion Engine Deployed',
      summary: 'You have conquered Mission 2! You transformed a slow manual copy paste test into an autonomous data driven engine. By feeding external CSV and JSON datasets into the Collection Runner and accessing Data Scope with pm.iterationData, you tested hundreds of records across complete CRUD lifecycles in seconds with zero manual friction.',
      powers: [
        'Decoupling business test logic completely from external test data parameters',
        'Ingesting external CSV and JSON rows dynamically via pm.iterationData.get() without hardcoding',
        'Executing high throughput collection runs with hundreds of iterations in under a minute',
        'Pinpoint console debugging: catching silent undefined variable interpolation traps before CI execution',
      ],
      disastersPrevented: [
        'Eliminated hundreds of hours of manual, mind numbing test data entry across release cycles',
        'Caught obscure boundary and special character defects that only manifest across large external datasets',
        'Prevented massive test database bloat by executing automated teardown deletions at the end of every iteration',
      ],
      warRoomTakeaway: 'When leadership asks whether the new release can handle bulk real world catalog migrations, you do not guess. You point to a 500 row Data Driven run that passed with 100% green assertions in seconds.',
    },
    {
      type: 'cliffhanger',
      title: 'A new challenge begins: Enterprise Production Hardening',
      text: 'Happy paths pass at scale. But what happens in production when networks drop, tokens expire, or malformed inputs arrive? In Chapter 9, we launch Mission 3: Advanced Error Handling, negative test matrices, and self healing recovery loops!',
    },
  ],
}
