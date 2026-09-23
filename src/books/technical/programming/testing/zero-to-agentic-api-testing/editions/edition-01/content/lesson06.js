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
      type: 'mission-hud',
      mission: 'Mission 2: Automating Student and Campus Services at Scale',
      phase: 'Phase 3 of 5: Variable Scopes & Environments',
      rank: 'Rank: Senior Automation Engineer',
      status: 'ACTIVE'
    },
    {
      type: 'chapter-opener',
      achieve: 'Eliminate hardcoded URLs and duplicate key collisions by mastering the five variable tiers, dynamic environment switching, and collision safe dynamic generation.',
      how: 'Map variable precedence from Local to Global, safeguard secrets using Initial versus Current values, generate unique runtime ISBNs in Pre request scripts, and analyze collision mathematics.',
      carry: 'A parameterized environment and dynamically generated variable keys that seamlessly feed the downstream request chaining pipeline in Chapter 7.'
    },
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
      type: 'image',
      layout: 'stacked',
      badge: 'SCOPE ARCHITECTURE',
      title: 'Postman Variable Scopes Hierarchy: Precedence and Scope Boundaries',
      text: 'Imagine your college campus. You have your personal student ID card in your pocket (Local Scope), your class attendance register (Data Scope), your college campus WiFi settings (Environment Scope), your department syllabus (Collection Scope), and universal constants (Global Scope). Postman organizes variables across these five tiers with strict precedence rules: narrower scopes override broader scopes whenever variable names match.',
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
      type: 'structured-breakdown',
      badge: 'VARIABLE PRECEDENCE ARCHITECTURE',
      title: 'The Five Postman Variable Tiers Explained',
      intro: 'When multiple variables share the exact same key name, Postman resolves conflicts by choosing the narrowest scope. Here is the operational role of each tier:',
      categories: [
        {
          category: 'Scope 1: Local',
          subCategory: 'Sandbox Execution Scope',
          title: 'Temporary In Script Variables',
          explanation: 'Exists exclusively while the active script is executing. Overrides every other scope in Postman.',
          points: [
            'pm.variables.set("tempId", 101): Scoped strictly to the immediate request run.',
            'Disappears from memory as soon as the request completes.',
          ]
        },
        {
          category: 'Scope 2: Data',
          subCategory: 'Data Driven Testing',
          title: 'External Dataset Row Variables',
          explanation: 'Supplied by external CSV or JSON test data files during automated Collection Runner runs.',
          points: [
            'pm.iterationData.get("isbn"): Reads the specific value from the current dataset row.',
            'Each iteration pulls fresh data automatically.',
          ]
        },
        {
          category: 'Scope 3: Environment',
          subCategory: 'Deployment Target Scope',
          title: 'Infrastructure Stage Configuration',
          explanation: 'Configures target hostnames and ports for specific deployment stages like Local, QA, and UAT.',
          points: [
            'pm.environment.set("base_url", "..."): Switched instantly with the environment dropdown.',
            'Initial values sync to team cloud; current values stay local to your machine.',
          ]
        },
        {
          category: 'Scope 4: Collection',
          subCategory: 'Shared Suite Scope',
          title: 'Test Suite Level Variables',
          explanation: 'Variables shared across every folder and request inside one specific Postman collection.',
          points: [
            'pm.collectionVariables.set("suiteToken", "..."): Accessible by all requests in the collection.',
            'Ideal for generated IDs passed between consecutive steps.',
          ]
        },
        {
          category: 'Scope 5: Global',
          subCategory: 'Universal Workspace Scope',
          title: 'Workspace Wide Constants',
          explanation: 'Universal settings accessible across all collections and environments within the workspace.',
          points: [
            'pm.globals.set("companyDomain", "..."): Lowest precedence in the hierarchy.',
            'Easily overridden by environment or collection variables with the same name.',
          ]
        }
      ]
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
      text: 'To avoid the duplicate book already exists bug we uncovered in Chapter 4, we write a Pre request script to generate a unique random ISBN on every single run:',
    },
    {
      type: 'chunked-code',
      badge: 'PRE REQUEST SCRIPT CHUNKS',
      title: 'Dynamic ISBN Generation Script',
      intro: 'Executed before the HTTP request leaves the computer:',
      chunks: [
        {
          label: 'Chunk 1: Fetching Base Prefix',
          filename: 'prefix-lookup.js',
          code: 'const companyCode = pm.globals.get("company_code") || "LIB";',
          title: 'Reading Global Scope',
          explanation: 'Reads the shared company code prefix from Global Scope, defaulting to LIB if unset.',
          keyTakeaway: 'Global variables provide universal defaults across collections.'
        },
        {
          label: 'Chunk 2: Random Number Generation',
          filename: 'random-generator.js',
          code: 'const randomDigits = Math.floor(1000 + Math.random() * 9000);\nconst uniqueISBN = companyCode + randomDigits;',
          title: 'Generating Non Colliding Key',
          explanation: 'Produces a random four digit number (e.g. 4821) and appends it to form LIB4821.',
          keyTakeaway: 'Combining random values with timestamps reduces collisions, but teardown remains essential.'
        },
        {
          label: 'Chunk 3: Saving to Collection Variable',
          filename: 'save-variable.js',
          code: 'pm.collectionVariables.set("ISBN", uniqueISBN);',
          title: 'Binding to Collection Tier',
          explanation: 'Saves the fresh key so the request body placeholder {{ISBN}} can interpolate it at runtime.',
          keyTakeaway: 'Collection tier keeps generated data accessible to all downstream requests.'
        }
      ]
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'The Birthday Paradox: Why Naive Random Numbers Collide in CI CD',
      paragraphs: [
        'Why not simply generate a random 4 digit integer between 1000 and 9999? Consider the mathematics of the Birthday Paradox.',
        'With only 9,000 possible 4 digit values, probability theory dictates that after just 112 test executions, there is a 50 percent chance that two runs generate the exact same number! In an automated continuous integration pipeline running 20 builds daily, collisions will inevitably cause false negative test failures within days.',
        'To achieve collision resistance, combine multiple entropy sources: a timestamp like Date.now(), or Postman built in dynamic variables like {{$randomISBN}} and {{$randomInt}}.',
        'Crucial Automation Law: Even with collision resistant generation, automated teardown via DeleteBook is mandatory. Relying on randomness alone leaves orphaned records that bloat database indexes and corrupt catalog counts over time.',
      ],
    },
    {
      type: 'predict-output',
      badge: 'IMAGINE & PREDICT',
      prompt: 'If uniqueISBN generates "LIB7824" and the request payload is { "isbn": "{{ISBN}}" }, what raw text does Postman transmit over the wire?',
      options: [
        'The literal string { "isbn": "{{ISBN}}" } with curly braces',
        'The interpolated value { "isbn": "LIB7824" } with curly braces replaced by the variable value',
        'An empty string { "isbn": "" } because variables require quotes',
        'A syntax error because Postman does not support curly braces in JSON'
      ],
      answerIndex: 1,
      revealTitle: 'Wire Interpolation Confirmation',
      explanation: 'Postman resolves the variable! Before sending the network packet, Postman replaces {{ISBN}} with the current runtime value "LIB7824", transmitting clean JSON to the server.'
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
      type: 'battle-scar',
      metric: 'Environment Misconfiguration Outage',
      title: 'The Production Database Overwrite Outage: The Danger of Ambiguous Variable Scopes',
      context: 'An engineering team ran an automated load test suite intended for the staging cluster. However, the collection contained a global variable baseUrl set to the production cluster, while the staging environment variable had a subtle spelling mismatch (base_url vs baseUrl). Because of the variable precedence hierarchy and naming discrepancy, Postman defaulted to the global production URL. Within minutes, the automated test inserted fifty thousand fictitious student test accounts directly into the live production database!',
      takeaway: 'Never define production server hostnames in global variables. Always isolate target server environments strictly and verify variable resolution in the Postman Console before triggering automated test runs.'
    },
    {
      type: 'triage',
      title: 'War Room Triage: The Mystery of the Overridden Variable',
      scenario: 'You select the "QA Environment" in Postman where timeout is set to 5000 milliseconds. But when you click Send, your test script fails after only 100 milliseconds with a timeout exception. When inspecting your collection, you discover a script with: pm.variables.set("timeout", 100). Why did Postman ignore your 5000 millisecond environment setting?',
      options: [
        'Postman environments do not work when running single requests manually.',
        'Local script scope variables created via pm.variables.set have higher precedence than environment variables and override them during execution.',
        'The QA server database rejected the timeout header because it was too large.',
        'Environment variables only apply to request URLs, not to script logic.'
      ],
      answerIndex: 1,
      debrief: 'Local scope overrides environment scope! The Postman variable hierarchy prioritizes Local variables above Data, Environment, Collection, and Global tiers. The in script variable took precedence, causing the early timeout.',
      traps: [
        'Environments apply to both manual single requests and automated collection runs.',
        '',
        'Backend servers have no control over Postman internal client side timeout variables.',
        'Environment variables are accessible across URLs, headers, bodies, and test scripts.'
      ]
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
