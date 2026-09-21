import scopesImg from '../assets/postman-variable-scopes-hierarchy.jpg'

export const lesson06 = {
  id: 'variables-and-scopes',
  icon: '',
  title: 'Managing Variables Across the Five Scopes',
  shortTitle: 'Variables and Scopes',
  subtitle: 'The five variable tiers, precedence rules, dynamic environment switching, and unique ISBN generation.',
  tags: ['Variables', 'Environments', 'Pre Request', 'Scopes', 'Dynamic Data'],
  blocks: [
    {
      type: 'mission-tracker',
      badge: 'MISSION 2 PROGRESS · STEP 3 OF 5',
      title: 'Continuing Mission 2: Eliminating Hardcoded URLs and Collision Errors',
      text: 'Our assertions in Chapter 5 run fast, but our collection still has hardcoded server URLs and hardcoded ISBN values that cause duplicate collision errors on every second run. Our next step in Mission 2 is parameterizing our test suite: learning the five variable scopes, switching environments with one click, and generating dynamic unique ISBNs in Pre request scripts.',
    },
    {
      type: 'heading',
      text: 'Step 1: The Five Variable Scopes Hierarchy',
    },
    {
      type: 'paragraph',
      text: 'Imagine your college campus. You have your personal student ID card in your pocket (Local Scope), your class attendance register (Data Scope), your college campus WiFi settings (Environment Scope), your department syllabus (Collection Scope), and the universal laws of mathematics (Global Scope).',
    },
    {
      type: 'paragraph',
      text: 'Postman provides five distinct variable tiers, organized from the broadest workspace level down to individual requests.',
    },
    {
      type: 'image',
      layout: 'stacked',
      src: scopesImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/postman-variable-scopes-hierarchy.jpg',
      w: 1408,
      h: 768,
      alt: 'Infographic showing the 5 Postman variable scopes ladder with precedence arrows from Local down to Global.',
      caption: 'The five variable scopes in Postman and their order of precedence.',
      points: [
        'Local Scope (Highest Priority): Temporary variables declared inside a single request script.',
        'Data Scope: Values supplied by external data files (such as CSV or JSON) during iterations.',
        'Environment Scope: Key value pairs tied to a specific deployment stage (QA, UAT, Production).',
        'Collection Scope: Variables shared across all requests inside one specific collection folder.',
        'Global Scope (Lowest Priority): Universal constants accessible across all collections and environments.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 2: Switching Environments with Double Curly Braces',
    },
    {
      type: 'paragraph',
      text: 'Referencing any variable inside a URL, query parameter, header, or JSON body requires wrapping the variable name in **double curly braces**: `{{variable_name}}`. You can import the pre configured QA environment directly: [Download Campus Library QA Environment](/materials/zero-to-agentic-api-testing/Campus-Library-QA.postman_environment.json) or [Raw GitHub File](https://raw.githubusercontent.com/mayankcoder1993/AkshatEbooks/arena/01a0bfe5-akshatebooks/course-materials/zero-to-agentic-api-testing/Campus-Library-QA.postman_environment.json).',
    },
    {
      type: 'comparison',
      title: 'Environment Configuration for Library API Targets',
      columns: ['Environment Name', 'Variable Key', 'Resolved Base URL Value', 'Purpose'],
      rows: [
        ['QA Environment', '`base_url`', '`https://qa-api.campuslibrary.org`', 'Fast internal server cluster used for testing new features.'],
        ['UAT Environment', '`base_url`', '`https://uat-api.campuslibrary.org`', 'User Acceptance Testing mirror simulating live traffic.'],
      ],
    },
    {
      type: 'callout',
      variant: 'note',
      title: 'Initial Value vs Current Value Security Mechanics',
      paragraphs: [
        '• Initial Value: Synced to Postman cloud servers and included in team exports. Use this for templates, never real passwords.',
        '• Current Value: Kept strictly in local session memory. Scripts update it dynamically at runtime without leaking secrets.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 3: Generating Unique ISBNs in Pre request Scripts',
    },
    {
      type: 'paragraph',
      text: 'To avoid the duplicate book already exists bug we uncovered in Chapter 4, we write a 4 line Pre request script to generate a unique random ISBN on every single run:',
    },
    {
      type: 'code',
      filename: 'pre-request-unique-isbn.js',
      lines: [
        '// Step 1: Retrieve universal company prefix from Global Scope',
        'const companyCode = pm.globals.get("company_code") || "LIB";',
        '',
        '// Step 2: Generate dynamic random integer using Postman dynamic utility',
        'const randomDigits = pm.variables.replaceIn("{{$randomInt}}");',
        '',
        '// Step 3: Concatenate prefix and random digits to form unique ISBN',
        'const uniqueISBN = companyCode + randomDigits;',
        '',
        '// Step 4: Store in Collection Scope so request payload can read {{ISBN}}',
        'pm.collectionVariables.set("ISBN", uniqueISBN);',
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Fresher Trap to Avoid: Mismatched Variable Casing and Typo Bugs',
      paragraphs: [
        'JavaScript variable keys in Postman are strictly case sensitive.',
        'If your Pre request script writes `pm.collectionVariables.set("ISBN", ...)` in capital letters, but your JSON payload body looks for `{{isbn}}` in lowercase, Postman will NOT find the variable and will send an empty string or the literal text "{{isbn}}" to the server!',
        'Always ensure exact matching casing between the variable key saved in your script and the placeholder wrapped in double curly braces.',
      ],
    },
    {
      type: 'heading',
      text: 'Step 4: Review and Practice',
    },
    {
      type: 'guess',
      prompt: 'If a variable with the exact same name is defined in both Collection scope and Local script scope, which value takes precedence?',
      options: [
        'Collection scope value',
        'Local script scope value',
        'Postman throws a duplicate variable error',
        'Global scope value',
      ],
      answerIndex: 1,
      explain: 'Local scope has the highest priority of all five scopes. A local variable defined inside a script will always override collection, environment, and global variables with the same name.',
    },
    {
      type: 'quiz',
      items: [
        [
          'What are the five variable scopes in order from highest precedence to lowest precedence?',
          'Local (highest) > Data > Environment > Collection > Global (lowest).',
        ],
        [
          'Why must dynamic ISBN generation logic be placed in the Pre request Script tab instead of the Tests tab?',
          'The Pre request Script tab executes before the request payload is constructed. The Tests tab executes only after the response has already returned from the server.',
        ],
      ],
    },
    {
      type: 'takeaways',
      items: [
        'Variables eliminate hardcoded server URLs and prevent duplicate data collisions.',
        'Postman supports five scopes: Local, Data, Environment, Collection, and Global.',
        'Use double curly braces {{variable_name}} to reference variables anywhere in requests.',
        'Initial values sync to the cloud; Current values stay local for secure runtime execution.',
      ],
    },
    {
      type: 'victory-milestone',
      badge: 'MISSION 2 PHASE 3 CLEARED',
      rank: 'ENTERPRISE TEST DATA ARCHITECT',
      title: 'Architectural Triumph: Multi Scope Hierarchy & Dynamic Data Engine Deployed',
      summary: 'You shattered hardcoded server URLs and eliminated duplicate database constraint collisions forever. By mastering the 5 variable scopes, scope precedence rules, and runtime Pre request scripting, your test suites now adapt seamlessly across QA, UAT, and Staging without a single manual edit.',
      powers: [
        'Navigating the 5 variable scopes hierarchy: Local, Data, Environment, Collection, and Global with zero conflict ambiguity',
        'Parameterizing network calls using double curly brace syntax {{base_url}} across URLs, headers, and payloads',
        'Generating dynamic unique primary keys at runtime using Pre request scripts and Postman dynamic tokens',
        'Guarding enterprise credentials using Initial Value vs Current Value memory isolation',
      ],
      disastersPrevented: [
        'Averted catastrophic accidental execution of destructive test scripts against live Production databases',
        'Blocked confidential API keys and client secrets from leaking to public GitHub repositories via team exports',
        'Eliminated duplicate ISBN collision failures that halt automated regression test runs in CI pipelines',
      ],
      warRoomTakeaway: 'Hardcoded test data is a ticking time bomb. The moment your tests generate their own unique identities and dynamically resolve their target environment, they become truly portable and unstoppable.',
    },
    {
      type: 'cliffhanger',
      title: 'Continuing Mission 2: Assembling the autonomous pipeline',
      text: 'We now generate dynamic ISBNs and switch between QA and UAT seamlessly. But when AddBook creates a book ID, we still need to pass it to GetBook and DeleteBook. In Chapter 7, we advance Mission 2: automatically piping response data downstream with Request Chaining!',
    },
  ],
}
