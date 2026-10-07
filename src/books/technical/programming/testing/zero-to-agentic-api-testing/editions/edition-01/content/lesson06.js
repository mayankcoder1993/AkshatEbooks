import scopesImg from '../assets/postman-variable-scopes-hierarchy.jpg'
import ch06Scene1Img from '../assets/ch06-scene-1-scopes-hierarchy.jpg'
import ch06Scene2Img from '../assets/ch06-scene-2-prerequest-dynamic-isbn.jpg'
import warRoomWideImg from '../assets/apex-campus-crisis-war-room.jpg'
import warRoomPanel1Img from '../assets/war-room-panel-1-the-crisis.jpg'
import warRoomPanel2Img from '../assets/war-room-panel-2-the-standoff.jpg'
import warRoomPanel3Img from '../assets/war-room-panel-3-invisible-wire.jpg'

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
      phase: 'Phase 3 of 5: Variable Scopes and Environments',
      rank: 'Rank: Senior Automation Engineer',
      status: 'ACTIVE'
    },
    {
      type: 'chapter-opener',
      missionBadge: 'MISSION 2 · PHASE 3 OF 6',
      missionTitle: 'Automating Student and Campus Services at Scale',
      missionCrisis: 'Dynamic Environment Isolation and Unique State Generation',
      missionContext: 'Hardcoded test data causes severe test flakiness. If your test suite uses a hardcoded ISBN, running the suite a second time triggers a duplicate book collision error and fails the test. Furthermore, running tests against production instead of staging by mistake can corrupt live data. We must master the five variable scopes, switch environments dynamically, and generate collision free unique IDs.',
      missionObjective: 'Implement the 5 variable scopes, configure QA vs UAT environments, and generate dynamic unique ISBNs in Pre request scripts.',
      targetSystems: 'API Testing Workbench Variable Scopes Hierarchy · Dynamic Environment Switching · Pre request Script Engine',
      difficulty: 'INTERMEDIATE',
      estimatedTime: '25 MINUTES',
      prerequisites: 'Chapter 05: Writing JavaScript Assertions and the pm Object'
    },
    {
      type: 'mission-tracker',
      currentPhase: 'Phase 3: Scopes & Environments',
      totalPhases: 5,
      completedSteps: [
        'Manual CRUD Lifecycle & Unique Constraints (Chapter 04)',
        'Writing JavaScript Assertions and pm Object (Chapter 05)'
      ],
      currentStep: 'Managing Variables Across the Five Scopes',
      upcomingSteps: [
        'Request Chaining and Complex Nested JSON Parsing (Chapter 07)',
        'Data Driven Testing with External Data Files (Chapter 08)'
      ]
    },

    // =========================================================================
    // GRAPHIC COMIC ARC : SIX SCENES FROM MASTER STORY LEDGER
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC : SIX SCENES',
      title: 'The Hardcoded URL Ambush and Variable Scope Hierarchy',
      intro: 'Follow apprentice Akshay, Principal Systems Architect Sameer, and Frontend Lead Ananya in the midnight Architecture Lab as hardcoded localhost URLs trigger ECONNREFUSED errors, duplicate static ISBNs crash staging, and the five variable scopes save the pipeline.',
      panels: [
        {
          title: 'Scene 1: 12:15 AM: Midnight Architecture War Room and the ECONNREFUSED Ambush',
          time: '12:15 AM',
          layout: 'duo',
          image: {
            src: warRoomWideImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay and Sameer at the dark teak desk in the ancient red sandstone systems architecture laboratory.',
            caption: 'Architecture War Room: Rain streaks high arched windows as seventy test tabs crash red.'
          },
          replyImage: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay leaning over his silver laptop in frustration as connection refused errors flood the screen.',
            caption: 'Connection Refused: Hardcoding localhost 5050 across seventy requests prevents switching to QA staging.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'ECONNREFUSED on every call! I hardcoded localhost 5050 in seventy different tabs!',
            replySpeaker: 'Sameer',
            replySpeech: 'Hardcoding URLs is tattooing an address on your arm. Store it in a scope.'
          },
          scene: 'At 12:15 AM, rain patters against the ancient red sandstone arches of the Systems Architecture Lab. Akshay attempts pointing his collection to QA staging, but every request fails with connect ECONNREFUSED 127.0.0.1:5050 because the local address was copy pasted across seventy tabs.',
          realization: 'Hardcoding hostnames, ports, and environment paths inside individual request tabs creates fragile, immovable test suites.'
        },
        {
          title: 'Scene 2: 12:21 AM: Sameer Points to the Noticeboard Analogy and the Five Scopes',
          time: '12:21 AM',
          layout: 'duo',
          image: {
            src: ch06Scene1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch06-scene-1-scopes-hierarchy.jpg',
            w: 1408,
            h: 768,
            alt: 'Sameer gesturing toward the tiered wooden noticeboard on the sandstone pillar explaining the five scopes.',
            caption: 'The Noticeboard Analogy: Five tiers of variable scope from narrowest Local to broadest Global.'
          },
          replyImage: {
            src: warRoomPanel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-2-the-standoff.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay studying the precedence ladder diagram on the glass whiteboard.',
            caption: 'The Precedence Ladder: Narrowest active scope overrides broader scopes whenever names collide.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'Five scopes: Global, Collection, Environment, Data, Local. Narrowest wins.',
            replySpeaker: 'Akshay',
            replySpeech: 'So if a variable exists in both Environment and Global, Environment overrides?'
          },
          scene: 'Sameer walks to the tiered noticeboard on the pillar. He explains that hardcoding addresses is like tattooing a phone number on your skin instead of keeping an address book. He diagrams the five variable tiers from Local out to Global.',
          realization: 'The runtime resolves variables by climbing from narrowest scope outward. Closer scopes always take precedence.'
        },
        {
          title: 'Scene 3: 12:29 AM: Initial Value vs Current Value: The Cloud Leak Danger',
          time: '12:29 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Close up of the environment modal showing Initial Value and Current Value columns.',
            caption: 'The Vault Boundary: Initial Value syncs to cloud backups, Current Value stays strictly in local memory.'
          },
          replyImage: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer cautioning Akshay with cutting chai in brass holder.',
            caption: 'Secret Hygiene: Never paste production tokens or passwords into Initial Values.'
          },
          dialogue: {
            speaker: 'Sameer',
            speech: 'Notice two columns: Initial and Current. Initial syncs to cloud; Current stays local.',
            replySpeaker: 'Akshay',
            replySpeech: 'So keeping Initial blank ensures our shared exports ship with zero secrets?'
          },
          scene: 'Akshay creates QA, UAT, and Prod environments. Sameer points to the subtle column headers in the workbench modal. He reveals that shared collection exports and team cloud syncs serialize only Initial Values. Current Values never leave local memory.',
          realization: 'Keeping secrets in Current Value only prevents catastrophic token and credential leaks during team exports.'
        },
        {
          title: 'Scene 4: 12:31 AM: Ananya Rushes In: Staging Collision Alert and the Static ISBN Trap',
          time: '12:31 AM',
          layout: 'duo',
          image: {
            src: warRoomPanel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-2-the-standoff.jpg',
            w: 1376,
            h: 768,
            alt: 'Ananya entering the doorway with her diagnostic tablet displaying staging error spikes.',
            caption: 'Staging Collision: A duplicate book ID triggers 409 Conflict across shared test pipelines.'
          },
          replyImage: {
            src: warRoomPanel1Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-1-the-crisis.jpg',
            w: 1376,
            h: 768,
            alt: 'Akshay looking at the duplicate key collision stack trace on the terminal.',
            caption: 'Static Data Death: Static test data works exactly once, then fails on every subsequent run.'
          },
          dialogue: {
            speaker: 'Ananya',
            speech: 'Staging catalog just crashed! Someone re-ran a test with a hardcoded static ISBN!',
            replySpeaker: 'Akshay',
            replySpeech: 'Duplicate book collision error! Static test data works once, then fails forever!'
          },
          scene: 'Ananya rushes into the architecture lab with her tablet. A colleague re-ran an automated suite using a static book ISBN. The database rejected the second write with 409 Conflict, halting the staging verification pipeline.',
          realization: 'Automated test suites must generate fresh, collision free unique state at runtime rather than relying on static fixtures.'
        },
        {
          title: 'Scene 5: 12:37 AM: Pre-Request Scripts and Dynamic Timestamped State',
          time: '12:37 AM',
          layout: 'duo',
          image: {
            src: ch06Scene2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/ch06-scene-2-prerequest-dynamic-isbn.jpg',
            w: 1408,
            h: 768,
            alt: 'Akshay coding a dynamic timestamp key generator in the Pre request Script tab.',
            caption: 'Dynamic Generation: Using Date.now() and Math.random() in Pre request scripts.'
          },
          replyImage: {
            src: warRoomPanel3Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-3-invisible-wire.jpg',
            w: 1376,
            h: 768,
            alt: 'Terminal output showing dynamic ISBNs resolving cleanly before HTTP dispatch.',
            caption: 'Zero Collisions: Each request receives a fresh, timestamped primary key.'
          },
          dialogue: {
            speaker: 'Akshay',
            speech: 'const dynamicIsbn = "ISBN" + Date.now(); Generating timestamped keys!',
            replySpeaker: 'Sameer',
            replySpeech: 'Set it in Environment scope, not Global. Teardown sweeps it when finished.'
          },
          scene: 'Sameer directs Akshay to the Pre-request Script tab: the execution sandbox that fires before the HTTP packet leaves the network adapter. Akshay computes a dynamic timestamp key and assigns it to environment scope.',
          realization: 'Pre request scripts prepare dynamic runtime context, ensuring each test iteration generates collision free identifiers.'
        },
        {
          title: 'Scene 6: 12:55 AM: Zero Collision Proof and The Chained Pipeline Horizon',
          time: '12:55 AM',
          layout: 'duo',
          image: {
            src: warRoomWideImg,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/apex-campus-crisis-war-room.jpg',
            w: 1408,
            h: 768,
            alt: 'Ananya, Akshay, and Sameer reviewing passing test dashboards in the midnight lab.',
            caption: 'Staging Restored: Ten concurrent test runs complete with zero collision failures.'
          },
          replyImage: {
            src: warRoomPanel2Img,
            file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/war-room-panel-2-the-standoff.jpg',
            w: 1376,
            h: 768,
            alt: 'Sameer pointing toward the next architectural milestone on the whiteboard.',
            caption: 'The Next Gate: Request chaining and nested JSON parsing await in Chapter 07.'
          },
          dialogue: {
            speaker: 'Ananya',
            speech: 'Ten concurrent test runs and zero collision errors! Dynamic state holds!',
            replySpeaker: 'Akshay',
            replySpeech: 'Variables are solved. But I am still manually copying created IDs into GetBook!'
          },
          scene: 'Ananya triggers ten parallel pipeline runs against staging. All ten complete green without a single duplicate key collision. Akshay celebrates, but notes that he is still manually copying response IDs between requests.',
          realization: 'Scoping isolates environments and eliminates collisions, setting the stage for dynamic request chaining.'
        }
      ]
    },

    // =========================================================================
    // TECHNICAL ARCHITECTURE & DEEP DIVE
    // =========================================================================
    {
      type: 'heading',
      level: 2,
      text: 'The Variable Scopes Ladder and Resolution Precedence'
    },
    {
      type: 'image',
      src: scopesImg,
      file: 'src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/assets/postman-variable-scopes-hierarchy.jpg',
      w: 1408,
      h: 768,
      title: 'API Testing Workbench Variable Scopes Hierarchy: Precedence and Scope Boundaries',
      text: 'Variables provide reusable values across requests and scripts. The workbench provides five distinct scope layers, each with a different lifespan and visibility boundary.',
      alt: 'Infographic showing the 5 variable scopes ladder with precedence and lifecycle boundaries.',
      caption: 'The five variable scopes in the API Testing Workbench and their order of precedence.'
    },
    {
      type: 'structured-breakdown',
      title: 'The Five Variable Tiers Explained',
      intro: 'When multiple variables share the exact same key name, the workbench resolves the collision using strict precedence, starting from the narrowest scope and falling back to broader scopes.',
      items: [
        {
          label: '1. Local Scope (Narrowest)',
          badge: 'NARROWEST / TEMPORARY',
          explanation: 'Exists exclusively while the active script is executing. Overrides all other scopes. Created in code with standard let and const declarations or pm.variables.set(). Destroyed the instant the script finishes.'
        },
        {
          label: '2. Data Scope (Batch Driven)',
          badge: 'ITERATION ONLY',
          explanation: 'Values loaded from external CSV or JSON data files during collection runs. Active only for the single execution row. Overrides Environment, Collection, and Global variables.'
        },
        {
          label: '3. Environment Scope (Context Driven)',
          badge: 'HIGHLY RECOMMENDED',
          explanation: 'Tied to a specific server context (Local Mock, QA Staging, UAT, Production). Allows switching the entire collection from localhost:5050 to staging with a single dropdown selection.'
        },
        {
          label: '4. Collection Scope (Suite Portable)',
          badge: 'PORTABLE DEFAULTS',
          explanation: 'Variables shared across every folder and request inside one specific collection. Stored directly inside the collection JSON definition. Exports with the collection across teams.'
        },
        {
          label: '5. Global Scope (Broadest)',
          badge: 'WORKSPACE WIDE',
          explanation: 'Available across all collections and requests in the active workspace. Useful for universal helper functions or global API keys, but prone to naming collisions and unintended side effects.'
        }
      ]
    },

    // =========================================================================
    // WORKBENCH SCREEN 1 : ENVIRONMENT SWITCHER
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 1 : ENVIRONMENT SWITCHER',
      title: 'Dynamic Base URL Resolution via Active Environment',
      scenario: 'Akshay replaces seventy hardcoded localhost addresses with {{baseUrl}}. Switch environments to see the target host update instantaneously.',
      config: {
        method: 'POST',
        path: '/v1/books',
        activeTab: 'Params'
      },
      tabs: {
        params: [
          { key: 'category', value: 'engineering', desc: 'Book genre filter' },
          { key: 'limit', value: '25', desc: 'Page size limit' }
        ],
        headers: [
          { key: 'Content-Type', value: 'application/json' },
          { key: 'X-Environment-Target', value: '{{envName}}' }
        ],
        body: JSON.stringify({
          name: "Distributed Systems Reliability",
          isbn: "{{uniqueIsbn}}",
          aisle: 42,
          author: "Dr. Aris Thorne"
        }, null, 2),
        tests: '// Assert baseUrl resolved to valid target\npm.test("Environment baseUrl resolved", function() {\n  pm.expect(pm.environment.get("baseUrl")).to.be.a("string");\n  pm.expect(pm.response.code).to.be.oneOf([200, 201]);\n});'
      },
      response: {
        status: '200 OK',
        time: '14ms',
        size: '412B',
        body: JSON.stringify({
          Msg: "successfully added",
          ID: "ISBN1728293847291",
          targetHost: "http://localhost:5050"
        }, null, 2)
      },
      notes: [
        'Notice how double curly braces {{baseUrl}} decouple the request from hardcoded machine hostnames.',
        'Initial Value vs Current Value: Keep secrets in Current Value only to prevent accidental cloud leaks.'
      ]
    },

    // =========================================================================
    // WORKBENCH SCREEN 2 : PRE REQUEST SCRIPT EXECUTION
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'INTERACTIVE WORKBENCH 2 : PRE REQUEST RUNNER',
      title: 'Dynamic Timestamp Key Generation in Pre-request Script',
      scenario: 'Akshay writes a Pre-request script to generate collision free ISBNs before the HTTP request serializes.',
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
          name: "Cloud Native API Architecture",
          isbn: "{{uniqueIsbn}}",
          aisle: 12,
          author: "Maya Lin"
        }, null, 2),
        prerequest: '// Generate dynamic timestamped primary key\nconst timestamp = Date.now();\nconst randomSuffix = Math.floor(Math.random() * 10000);\nconst generatedIsbn = "ISBN" + timestamp + randomSuffix;\n\n// Store in active Environment scope\npm.environment.set("uniqueIsbn", generatedIsbn);\nconsole.log("Pre-request generated ISBN:", generatedIsbn);',
        tests: 'pm.test("Status is 200 OK", function() {\n  pm.response.to.have.status(200);\n});\n\npm.test("Generated ID matches payload", function() {\n  const res = pm.response.json();\n  pm.expect(res.ID).to.eql(pm.environment.get("uniqueIsbn"));\n});'
      },
      response: {
        status: '200 OK',
        time: '18ms',
        size: '398B',
        body: JSON.stringify({
          Msg: "successfully added",
          ID: "ISBN1728293859102"
        }, null, 2)
      },
      notes: [
        'Pre request scripts execute inside the V8 sandbox before the HTTP request leaves the adapter.',
        'Dynamic state ensures that re running test suites thousands of times never causes duplicate key collisions.'
      ]
    },

    // =========================================================================
    // FOUR PART PEDAGOGICAL CARDS (SENIOR SAVIOR CONTRACTS)
    // =========================================================================
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 1 : PRECEDENCE RESOLUTION',
      title: 'The Precedence Stack and Double Curly Braces',
      subtitle: 'Eliminating hardcoded machine dependencies using dynamic scope interpolation',
      input: {
        method: 'GET',
        url: '{{baseUrl}}/v1/books',
        desc: 'Request URL parameterized with double curly brace variable notation.',
        code: 'baseUrl in Global: http://localhost:5050\nbaseUrl in Environment: https://qa.apex.edu\nRequest evaluates: {{baseUrl}}/v1/books'
      },
      underTheHood: {
        desc: 'Runtime resolves variable names by climbing the scope ladder from narrowest to broadest.',
        steps: [
          'Request builder encounters {{baseUrl}} placeholder in URL.',
          'Engine checks Local scope (not present), then Data scope (not present).',
          'Engine checks active Environment scope (finds https://qa.apex.edu).',
          'Engine halts search: Environment value overrides broader Collection and Global values.',
          'Final URL serialized to https://qa.apex.edu/v1/books and dispatched.'
        ]
      },
      output: {
        status: '200 OK',
        time: '22ms',
        desc: 'Request routes cleanly to target server without modifying request templates.',
        body: JSON.stringify({
          environment: "qa-staging",
          activeNodes: 4,
          status: "HEALTHY"
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Hardcoding hosts is tattooing an address on your skin.',
        rule: 'Never hardcode server hostnames or port numbers in request tabs. Use double curly braces everywhere.',
        trap: 'Hardcoding localhost in request tabs prevents collections from executing in QA, staging, or CI pipelines.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 2 : VAULT STORAGE DISCIPLINE',
      title: 'Initial versus Current Value Security Vault',
      subtitle: 'Guarding sensitive tokens against cloud synchronization leaks',
      input: {
        method: 'CONFIG',
        url: 'Environment Settings Modal',
        desc: 'Environment variable declaration with sensitive JWT bearer token.',
        code: 'Variable: apiSecretToken\nInitial Value: [LEAVE COMPLETELY BLANK]\nCurrent Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
      },
      underTheHood: {
        desc: 'Cloud synchronization and team exports serialize only Initial Values.',
        steps: [
          'User configures environment variable for API secret or token.',
          'Initial Value is stored in the workspace database and synced to team cloud repositories.',
          'Current Value is restricted strictly to local machine memory and active session storage.',
          'Exporting the environment exports only the blank Initial Value.',
          'Team members receive clean templates requiring their own local credentials.'
        ]
      },
      output: {
        status: 'VAULT SECURE',
        time: '0ms',
        desc: 'Zero secrets leaked in Git commits or exported collection files.',
        body: JSON.stringify({
          exportedVariables: [
            { key: "apiSecretToken", value: "" }
          ]
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Initial syncs to the cloud; Current stays in the vault.',
        rule: 'Always leave Initial Value blank for secrets, passwords, and private tokens. Populate Current Value only.',
        trap: 'Pasting production API keys into Initial Values leaks private credentials across shared team repositories.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 3 : DYNAMIC RUNTIME STATE',
      title: 'Collision Free State with Pre-Request Scripts',
      subtitle: 'Generating dynamic primary keys to guarantee repeatable regression runs',
      input: {
        method: 'SCRIPT',
        url: 'Pre-request Script Tab',
        desc: 'Script executed in V8 sandbox before request packet serialization.',
        code: 'const uniqueIsbn = "ISBN" + Date.now() + Math.floor(Math.random() * 1000);\npm.environment.set("uniqueIsbn", uniqueIsbn);'
      },
      underTheHood: {
        desc: 'Pre-request script computes fresh timestamped entropy and stores it in active scope.',
        steps: [
          'Pre-request script triggers prior to HTTP payload assembly.',
          'V8 executes Date.now(), capturing millisecond precision epoch time.',
          'Random suffix is appended to eliminate concurrent sub millisecond collisions.',
          'pm.environment.set() binds the key into Environment scope.',
          'Request payload {{uniqueIsbn}} placeholder resolves to fresh dynamic string.'
        ]
      },
      output: {
        status: '200 OK / 201 Created',
        time: '16ms',
        desc: 'Server accepts unique book record without database unique constraint violations.',
        body: JSON.stringify({
          Msg: "successfully added",
          ID: "ISBN1728293864019"
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'Static fixtures work once; dynamic state works forever.',
        rule: 'Always generate transient primary keys dynamically in Pre-request scripts using timestamps.',
        trap: 'Hardcoding static primary keys causes automated pipelines to fail with 409 Conflict on every subsequent run.'
      }
    },
    {
      type: 'quad-card',
      badge: 'PEDAGOGICAL CONTRACT 4 : SCOPE TEARDOWN HYGIENE',
      title: 'Scope Hygiene and Teardown Unsetting',
      subtitle: 'Preventing cross test state pollution by cleaning mutable variables',
      input: {
        method: 'SCRIPT',
        url: 'Tests Script Tab',
        desc: 'Post execution cleanup script executed after test assertions complete.',
        code: 'pm.test("Cleanup temporary state", function() {\n  pm.environment.unset("uniqueIsbn");\n  pm.environment.unset("lastCreatedId");\n});'
      },
      underTheHood: {
        desc: 'Explicit teardown removes transient state from persistent environment storage.',
        steps: [
          'Request completes and assertion tests evaluate.',
          'Tests script executes pm.environment.unset() for all transient keys.',
          'Active Environment dictionary removes keys, leaving only permanent base configuration.',
          'Subsequent requests in other collections encounter clean, unpolluted scope.',
          'Environment export remains pristine without stale execution debris.'
        ]
      },
      output: {
        status: 'CLEAN SANDBOX',
        time: '0ms',
        desc: 'Environment scope holds zero orphaned keys following suite execution.',
        body: JSON.stringify({
          activeEnvironmentKeys: ["baseUrl", "envName"]
        }, null, 2)
      },
      seniorSavior: {
        aphorism: 'The environment is an address book, not a junkyard.',
        rule: 'Unset transient execution variables upon test completion to avoid cross suite pollution.',
        trap: 'Leaving dynamic IDs in environment scope causes downstream collections to inherit stale state unintentionally.'
      }
    },

    // =========================================================================
    // POST PRECEDENCE & RESOLUTION DRILLS
    // =========================================================================
    {
      type: 'comparison',
      title: 'Initial Value vs Current Value: The Safety Matrix',
      columns: ['Feature', 'Initial Value', 'Current Value'],
      rows: [
        ['Persistence', 'Saved to active collection / environment file', 'Stored exclusively in local memory'],
        ['Cloud Sync', 'Synced to team cloud workspaces automatically', 'Never leaves the local client machine'],
        ['Team Sharing', 'Visible to all teammates with workspace access', 'Strictly private to the individual user'],
        ['Recommended Use', 'Generic templates (e.g. localhost:5050)', 'Live credentials, passwords, session tokens'],
        ['Security Risk', 'High (accidental leaks in Git or cloud)', 'Zero (never synced, never exported)']
      ]
    },
    {
      type: 'callout',
      title: 'The Golden Rule of Environment Security',
      kind: 'warning',
      text: 'Whenever you add a secret token, API key, or database password to an Environment, immediately clear the Initial Value column. Only populate the Current Value column. When you export the environment to share with colleagues or commit to Git, the exported file will contain an empty string, keeping your infrastructure safe.'
    },

    {
      type: 'heading',
      level: 2,
      text: 'Programmatic Scope Manipulation with the pm Object'
    },
    {
      type: 'paragraph',
      text: 'While the graphical interface lets you inspect variables, automated pipelines require programmatic manipulation. The API Testing Workbench provides a clean, unified API under the pm object to read, write, and unset variables across any scope.'
    },
    {
      type: 'chunked-code',
      title: 'Programmatic Scope API Cheat Sheet',
      code: `// 1. Reading variables across scopes
const localVal = pm.variables.get("key");       // Resolves using precedence ladder
const envVal   = pm.environment.get("key");     // Explicitly from active Environment
const collVal  = pm.collectionVariables.get("key"); // Explicitly from Collection
const globVal  = pm.globals.get("key");         // Explicitly from Global scope

// 2. Writing variables to specific scopes
pm.environment.set("bookId", "LIB9938");        // Bound to active Environment
pm.collectionVariables.set("retryLimit", 3);    // Bound to active Collection
pm.globals.set("apiVersion", "v1");             // Workspace wide (use sparingly)

// 3. Cleaning up variables (Scope Hygiene)
pm.environment.unset("bookId");                 // Removes key from active Environment
pm.globals.unset("tempToken");                  // Removes key from Global scope
pm.environment.clear();                         // Wipes all keys from Environment (Careful!)`,
      chunks: [
        {
          lines: '1-6',
          label: 'Reading Values',
          explanation: 'pm.variables.get() respects the full precedence ladder. Explicit calls like pm.environment.get() read only from that specific tier.'
        },
        {
          lines: '8-12',
          label: 'Setting Values',
          explanation: 'Write variables to the narrowest possible scope. Avoid pm.globals.set() for request specific data.'
        },
        {
          lines: '14-17',
          label: 'Teardown Unsetting',
          explanation: 'Always unset temporary identifiers in Tests scripts to leave the environment clean for subsequent runs.'
        }
      ]
    },

    {
      type: 'battle-scar',
      incident: 'The Global Token Collision That Wiped Staging Data',
      context: 'An engineering team ran an automated load test suite intended for the local mock server. However, an engineer used pm.globals.set("baseUrl", "http://localhost:5050") inside a Pre-request script. Meanwhile, a CI pipeline running against staging read the contaminated global variable, switching its target mid run and corrupting staging database records.',
      takeaway: 'Never define hostnames in global variables. Always use Environment scopes with strict workspace isolation.'
    },
    {
      type: 'triage',
      title: 'Triage Drill: Scope Shadowing Incident',
      scenario: 'You select the "QA Environment" in the workbench where timeout is set to 5000. However, in your Collection Settings, timeout is set to 10000. When you execute requests, they time out after exactly 5000ms. A junior developer claims the workbench is broken.',
      options: [
        {
          label: 'The workbench has a bug and ignores collection variables.',
          correct: false,
          explanation: 'The workbench is functioning exactly as designed.'
        },
        {
          label: 'Environment scope outranks Collection scope in the precedence ladder.',
          correct: true,
          explanation: 'Environment scope has higher precedence than Collection scope. The Environment value of 5000ms overrides the Collection value of 10000ms.'
        },
        {
          label: 'Timeout variables only work when defined in Global scope.',
          correct: false,
          explanation: 'Variables can be defined in any scope, and precedence determines which value wins.'
        }
      ],
      debrief: 'The precedence hierarchy is: Local > Data > Environment > Collection > Global. Because Environment outranks Collection, the QA Environment value wins.'
    },

    {
      type: 'quiz',
      title: 'Knowledge Check: Variable Scopes & Security',
      question: 'Which variable scope is best suited for an authentication token that should be shared across all folders in a single collection, but must never leak into other collections?',
      options: [
        'Global Scope',
        'Collection Scope',
        'Data Scope',
        'Local Scope'
      ],
      correctAnswer: 1,
      explanation: 'Collection Scope provides self contained variables that are shared across all requests in that collection, but are completely isolated from other collections in the workspace.'
    },
    {
      type: 'takeaways',
      title: 'Senior Savior Takeaways',
      points: [
        'Precedence hierarchy: Local outranks Data, Data outranks Environment, Environment outranks Collection, Collection outranks Global.',
        'Always leave Initial Value blank for sensitive credentials. Use Current Value for session memory.',
        'Use Pre request scripts to generate dynamic timestamps (Date.now()) to guarantee collision free regression runs.',
        'Practice scope hygiene: explicitly unset transient environment variables in Tests scripts after verification.'
      ]
    },
    {
      type: 'victory-milestone',
      badge: 'Milestone 2.3 Cleared',
      title: 'Variable Scopes & Dynamic Environments Mastered',
      summary: 'You have eliminated hardcoded URLs with double curly braces, mastered the five scope tiers, safeguarded secrets with Current Values, and implemented collision free dynamic key generation.',
      nextStep: 'Proceed to Chapter 07 to chain AddBook, GetBook, and DeleteBook requests dynamically and parse complex nested JSON arrays.'
    },
    {
      type: 'cliffhanger',
      time: '01:05 AM',
      location: 'Apex Financial Systems Annex',
      alert: 'BUDGET DISCREPANCY DETECTED',
      speaker: 'Ananya Sen',
      speech: 'Finance auditor just flagged a ₹50,000 discrepancy in nested bookstore purchase orders!',
      context: 'Akshay and Sameer head to the Financial Systems Annex where complex nested JSON responses require multi level property traversal and functional array calculations.',
      nextLessonId: 'request-chaining'
    }
  ]
}
