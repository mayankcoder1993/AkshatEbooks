import { useState, useEffect } from 'react'

const SYLLABUS_ITEMS = [
  {
    id: 'api-fundamentals',
    title: 'API Fundamentals & The Interoperability Crisis',
    desc: 'What an API is, one computer communicating with another across networks, software contracts, and resolving the React Native vs Java Spring Boot decoupling crisis.',
    mission: 'm1',
    missionLabel: 'Mission 1',
    chapters: ['Ch 01', 'Ch 03'],
    artifact: 'frontend-backend-bridge.jpg'
  },
  {
    id: 'restaurant-analogy',
    title: 'The Restaurant Waiter Mental Model',
    desc: 'Customer (Client), Waiter (API Messenger & Validator), Kitchen (Backend Microservices & DB). Why clients cannot access the kitchen directly.',
    mission: 'm1',
    missionLabel: 'Mission 1',
    chapters: ['Ch 01'],
    artifact: 'api-concept-restaurant.jpg'
  },
  {
    id: 'partner-integrations',
    title: 'Real-World Integrations & Commercial Public APIs',
    desc: 'How aggregators (Marriott/Booking.com) query private data without database access. Commercial integration with BigDataCloud Free Reverse Geocoding API.',
    mission: 'm1',
    missionLabel: 'Mission 1',
    chapters: ['Ch 01'],
    artifact: 'BigDataCloud Geocoding API'
  },
  {
    id: 'backend-fastapi-blueprint',
    title: 'How Backends Build APIs (FastAPI Blueprint)',
    desc: 'Demystifying the server: Python FastAPI route decorator (@app.get), query parameters mapping, and automatic dictionary-to-JSON serialization.',
    mission: 'm1',
    missionLabel: 'Mission 1',
    chapters: ['Ch 01'],
    artifact: 'campus-location-service.py'
  },
  {
    id: 'browser-wire-inspection',
    title: 'Live Global Wire Inspection (Zero Localhost Flaws)',
    desc: 'Inspecting raw JSON payloads directly in any browser: BigDataCloud Geocoding, GitHub Octocat, and raw Campus Catalog on GitHub.',
    mission: 'm1',
    missionLabel: 'Mission 1',
    chapters: ['Ch 01', 'Ch 02'],
    artifact: 'campus-catalog.json'
  },
  {
    id: 'testing-pyramid',
    title: 'The Testing Pyramid Doctrine',
    desc: 'Why UI automation (Selenium/Cypress) is slow and fragile; why API testing is the high-leverage sweet spot of speed, reliability, and contract validation.',
    mission: 'm1',
    missionLabel: 'Mission 1',
    chapters: ['Ch 01'],
    artifact: 'testing-pyramid-focus.jpg'
  },
  {
    id: 'api-architectural-styles',
    title: 'Four Major API Architectural Styles',
    desc: 'Contrasting REST, GraphQL, SOAP, and gRPC across transport protocols, data formats, and use cases across campus systems.',
    mission: 'm1',
    missionLabel: 'Mission 1',
    chapters: ['Ch 01', 'Ch 10', 'Ch 12'],
    artifact: 'api-architectures-matrix.jpg'
  },
  {
    id: 'rest-principles',
    title: 'REST Architecture & The 4 CRUD Operations',
    desc: 'Representational State Transfer principles, statelessness, and mapping Create, Read, Update, Delete to HTTP methods (POST, GET, PUT/PATCH, DELETE).',
    mission: 'm1',
    missionLabel: 'Mission 1',
    chapters: ['Ch 02', 'Ch 04'],
    artifact: 'restful-crud-status-guide.jpg'
  },
  {
    id: 'restaurant-bill-story',
    title: 'The Restaurant Bill Story for HTTP Methods',
    desc: 'Intuitive mental model distinguishing POST (order created), GET (view bill), PUT (replace order), PATCH (change dressing), and DELETE (cancel order).',
    mission: 'm1',
    missionLabel: 'Mission 1',
    chapters: ['Ch 02'],
    artifact: 'lesson02.js'
  },
  {
    id: 'idempotency',
    title: 'Safe vs Unsafe Operations & Idempotency',
    desc: 'Why GET, PUT, and DELETE are idempotent (executing N times produces the same server state) while POST is non-idempotent.',
    mission: 'm1',
    missionLabel: 'Mission 1',
    chapters: ['Ch 02', 'Ch 04'],
    artifact: 'lesson02.js'
  },
  {
    id: 'http-status-families',
    title: 'The 5 HTTP Status Code Families (1xx to 5xx)',
    desc: 'Deep breakdown of 1xx Informational, 2xx Success (200, 201), 3xx Redirection, 4xx Client Error (400, 401, 404), and 5xx Server Error (500).',
    mission: 'm1',
    missionLabel: 'Mission 1',
    chapters: ['Ch 02', 'Ch 09'],
    artifact: 'http-wire-anatomy.jpg'
  },
  {
    id: 'postman-workbench',
    title: 'The API Testing Workbench & Alternatives',
    desc: 'Why browsers cannot test POST/PUT/DELETE from the address bar; installing Postman desktop agent, comparing modern alternatives (Bruno, Insomnia).',
    mission: 'm1',
    missionLabel: 'Mission 1',
    chapters: ['Ch 03'],
    artifact: 'postman-workbench-overview.jpg'
  },
  {
    id: 'postman-workspaces',
    title: 'Postman Workspace Scopes & Visibility',
    desc: 'Personal workspaces for private exploratory drafts, Private workspaces for enterprise compliance, Team workspaces for CI/CD, and Public workspaces.',
    mission: 'm1',
    missionLabel: 'Mission 1',
    chapters: ['Ch 03'],
    artifact: 'lesson03.js'
  },
  {
    id: 'team-fork-pr',
    title: 'Team Collaboration: Forking & Pull Requests',
    desc: 'Linear/GitHub-style 5-stage collaboration workflow: Master Workspace, Forking an isolated branch, Scripting tests, Opening PR, Side-by-side diff, Merging.',
    mission: 'm1',
    missionLabel: 'Mission 1',
    chapters: ['Ch 03'],
    artifact: 'postman-team-fork-pr.jpg'
  },
  {
    id: 'library-crud-manual',
    title: 'Manual Testing the College Library API Suite',
    desc: 'Executing AddBook POST with composite primary keys (isbn + aisle), GetBook GET with query parameters, and DeleteBook POST idempotent cleanup.',
    mission: 'm2',
    missionLabel: 'Mission 2',
    chapters: ['Ch 04'],
    artifact: 'library-api-crud-lifecycle.jpg'
  },
  {
    id: 'manual-copy-paste-pain',
    title: 'Identifying the Pain of Manual Copy-Paste',
    desc: 'Experiencing manual property transfer between AddBook and GetBook; establishing why automated property transfer and chaining are required.',
    mission: 'm2',
    missionLabel: 'Mission 2',
    chapters: ['Ch 04', 'Ch 07'],
    artifact: 'lesson04.js'
  },
  {
    id: 'nodejs-sandbox-pm',
    title: 'The Embedded Node.js Execution Sandbox & pm Object',
    desc: 'How Postman executes JavaScript before and after requests; the pm object hierarchy (pm.response, pm.request, pm.variables, pm.environment).',
    mission: 'm2',
    missionLabel: 'Mission 2',
    chapters: ['Ch 05'],
    artifact: 'postman-assertion-lifecycle.jpg'
  },
  {
    id: 'chai-assertions',
    title: 'Writing Automated Assertions with pm.test & Chai BDD',
    desc: 'Validating status codes (pm.response.to.have.status), headers, latency budgets (< 1200 ms), and JSON body properties with .to.eql() and .to.include().',
    mission: 'm2',
    missionLabel: 'Mission 2',
    chapters: ['Ch 05'],
    artifact: 'chai-assertions.js'
  },
  {
    id: 'js-tester-fundamentals',
    title: 'JavaScript Automation Fundamentals for Testers',
    desc: 'var vs let vs const, functional block scope, type coercion traps (== vs ===), string/number mismatches, falsy values, and array reference cloning.',
    mission: 'm2',
    missionLabel: 'Mission 2',
    chapters: ['Ch 05'],
    artifact: 'javascript-basics-for-testers.js'
  },
  {
    id: 'ajv-schema-validation',
    title: 'JSON Schema Validation with Built-in Ajv Library',
    desc: 'Defining JSON Schema draft-07 contracts and validating complex response types and required keys using Ajv in the Postman test sandbox.',
    mission: 'm2',
    missionLabel: 'Mission 2',
    chapters: ['Ch 05', 'Ch 10'],
    artifact: 'schema-validation.js'
  },
  {
    id: 'five-variable-scopes',
    title: 'The 5 Variable Scopes & Precedence Ladder',
    desc: 'Global, Collection, Environment, Data, and Local scopes. Scope resolution precedence and variable shadowing debugging in the console.',
    mission: 'm2',
    missionLabel: 'Mission 2',
    chapters: ['Ch 06'],
    artifact: 'postman-variable-scopes.jpg'
  },
  {
    id: 'initial-vs-current-values',
    title: 'Initial Value vs Current Value Security Mechanics',
    desc: 'Cloud team synchronization: why Initial Values sync to cloud workspaces while Current Values stay strictly local on machine to protect secrets.',
    mission: 'm2',
    missionLabel: 'Mission 2',
    chapters: ['Ch 06', 'Ch 09'],
    artifact: 'lesson06.js'
  },
  {
    id: 'pre-request-unique-isbn',
    title: 'Pre-Request Script Dynamic Unique ISBN Generation',
    desc: 'Eliminating manual data editing: using Math.random() and Date.now() in pre-request scripts to dynamically generate collision-free unique book IDs.',
    mission: 'm2',
    missionLabel: 'Mission 2',
    chapters: ['Ch 06'],
    artifact: 'pre-request-unique-isbn.js'
  },
  {
    id: 'request-chaining-property-transfer',
    title: 'Automated Property Transfer & Request Chaining',
    desc: 'Capturing dynamic response IDs from AddBook and setting pm.environment.set("book_id"), automatically feeding downstream GetBook and DeleteBook.',
    mission: 'm2',
    missionLabel: 'Mission 2',
    chapters: ['Ch 07'],
    artifact: 'api-request-chaining.jpg'
  },
  {
    id: 'nested-json-array-methods',
    title: 'Complex Nested JSON & JavaScript Array Pipeline',
    desc: 'Traversing multi-level nested JSON trees. Mastering array methods: .find(), .filter(), .map(), and .reduce() for mathematical invoice validation.',
    mission: 'm2',
    missionLabel: 'Mission 2',
    chapters: ['Ch 07'],
    artifact: 'javascript-array-pipeline.jpg'
  },
  {
    id: 'data-driven-testing',
    title: 'Data-Driven Testing (DDT) with CSV & JSON Files',
    desc: 'Decoupling test logic from external data; executing Collection Runner across hundreds of iterations using pm.iterationData.get().',
    mission: 'm2',
    missionLabel: 'Mission 2',
    chapters: ['Ch 08'],
    artifact: 'data-driven-iteration.jpg'
  },
  {
    id: 'runner-console-debugging',
    title: 'Debugging Collection Runner Variable Traps in Console',
    desc: 'Catching undefined variable lookups, data file header mismatches, and iteration scope shadowing in the Postman Console.',
    mission: 'm2',
    missionLabel: 'Mission 2',
    chapters: ['Ch 08'],
    artifact: 'books_data.csv'
  },
  {
    id: 'ecommerce-multi-step',
    title: 'Multi-Step E-Commerce Workflow & Teardown',
    desc: 'End-to-end chained journey: Login -> Product Creation -> Order Placement -> Order Details -> Automated Teardown Cleanup of orders and products.',
    mission: 'm3',
    missionLabel: 'Mission 3',
    chapters: ['Ch 07', 'Ch 09'],
    artifact: 'lesson09.js'
  },
  {
    id: 'negative-testing-matrix',
    title: 'Production Negative Testing Matrix (400, 401, 404, 500)',
    desc: 'Deliberately breaking API contracts with malformed JSON, invalid auth tokens, missing fields, and verifying resilient server rejection responses.',
    mission: 'm3',
    missionLabel: 'Mission 3',
    chapters: ['Ch 09'],
    artifact: 'api-resilience-error-handling.jpg'
  },
  {
    id: 'defensive-safe-parsing',
    title: 'Defensive Scripting with Try-Catch Blocks',
    desc: 'Guarding test assertions against unhandled exceptions; safe JSON parsing to prevent test suite aborts when servers return HTML 500 error pages.',
    mission: 'm3',
    missionLabel: 'Mission 3',
    chapters: ['Ch 09'],
    artifact: 'defensive-safe-parsing.js'
  },
  {
    id: 'postman-mock-servers',
    title: 'Postman Hosted Mock Servers & Query Matching',
    desc: 'Contract-first development: spinning up cloud mock servers, configuring Examples with specific query parameters, unblocking frontend QA in Agile sprints.',
    mission: 'm3',
    missionLabel: 'Mission 3',
    chapters: ['Ch 10'],
    artifact: 'postman-mock-servers-agile.jpg'
  },
  {
    id: 'graphql-testing',
    title: 'Testing GraphQL Alongside REST (Single-Query)',
    desc: 'Testing GraphQL POST /graphql endpoints, avoiding over/under-fetching, query variables ($characterId), and executing mutations (createLocation).',
    mission: 'm3',
    missionLabel: 'Mission 3',
    chapters: ['Ch 10'],
    artifact: 'graphql-vs-rest-architecture.jpg'
  },
  {
    id: 'oauth2-tokens',
    title: 'OAuth 2.0 Authorization Code Grant Handshake',
    desc: 'The hotel keycard analogy, the 4 roles, the two-step handshake contract (Authorize code -> Token exchange), and automated Bearer token chaining.',
    mission: 'm3',
    missionLabel: 'Mission 3',
    chapters: ['Ch 11'],
    artifact: 'oauth2-handshake-flow.jpg'
  },
  {
    id: 'soap-xml-webservices',
    title: 'SOAP 1.2 WebServices & XML Parsing with xml2Json',
    desc: 'SOAP XML envelopes, namespaces, setting Content-Type: application/soap+xml, converting XML strings into JavaScript objects with xml2Json.',
    mission: 'm3',
    missionLabel: 'Mission 3',
    chapters: ['Ch 12'],
    artifact: 'soap-xml-architecture.jpg'
  },
  {
    id: 'newman-cli-headless',
    title: 'Headless Collection Execution via Newman CLI',
    desc: 'Running Postman collections headlessly from command prompt, environment flags (-e), data iteration flags (-d), and fail-fast bail execution.',
    mission: 'm3',
    missionLabel: 'Mission 3',
    chapters: ['Ch 13'],
    artifact: 'newman-ci-cd-pipeline.jpg'
  },
  {
    id: 'ci-cd-htmlextra-jenkins',
    title: 'HTML Extra Dashboards & Jenkins CI/CD Quality Gates',
    desc: 'Installing newman-reporter-htmlextra, generating rich executive dashboards, building Jenkins Freestyle jobs, and gating releases on code commits.',
    mission: 'm3',
    missionLabel: 'Mission 3',
    chapters: ['Ch 13'],
    artifact: 'install-and-run-htmlextra.sh'
  }
]

const CHAPTERS_DATA = [
  {
    num: 'Chapter 01',
    title: 'Understanding APIs from First Principles',
    desc: 'The campus interoperability crisis, client-server decoupling, the restaurant waiter analogy, commercial public APIs (BigDataCloud Reverse Geocoding), FastAPI backend blueprint, live global payloads, and the Testing Pyramid.',
    topics: [
      'What is an API? The Campus Interoperability Crisis',
      'The Restaurant Waiter Analogy (Client, API, Server & DB)',
      'Real-World Integrations & BigDataCloud Geocoding API',
      'How Backends Build APIs (FastAPI Route Decorators & JSON)',
      'Live Hands-On Inspection (Zero Localhost Flaws)',
      'The Testing Pyramid Doctrine & Four API Styles'
    ]
  },
  {
    num: 'Chapter 02',
    title: 'REST Architecture and HTTP Methods',
    desc: 'Representational State Transfer core rules, the 4 CRUD operations, the Restaurant Bill story for HTTP methods, idempotency, request wire anatomy, and the 5 status code families.',
    topics: [
      'REST Core Principles & Stateless Communication',
      'The 4 CRUD Operations: Create, Read, Update, Delete',
      'The Restaurant Bill Story (POST, GET, PUT, PATCH, DELETE)',
      'Safe vs Unsafe Operations & Idempotency',
      'HTTP Request Wire: Headers, Query Params & Body',
      'The 5 Status Code Families (200, 201, 400, 404, 500)'
    ]
  },
  {
    num: 'Chapter 03',
    title: 'Setting Up Postman and Workspace Collaboration',
    desc: 'Why API test workbenches are necessary, Postman vs modern alternatives (Bruno, Insomnia), workspace types, team forking, pull requests, side-by-side diff review, and running your first collection.',
    topics: [
      'Why We Need an API Testing Workbench',
      'Postman vs Bruno vs Insomnia',
      'Desktop Application Installation & Account Setup',
      'Workspace Scopes: Personal, Team, Private & Public',
      'Team Collaboration: Forking & Pull Request Review',
      'Mission 1 Accomplished: Executing First Collection'
    ]
  },
  {
    num: 'Chapter 04',
    title: 'Manual Testing the College Library API',
    desc: 'Deploying the local companion test workbench, manual testing of AddBook POST, composite primary keys (isbn + aisle), GetBook GET with query parameters, DeleteBook POST, and manual copy-paste pain.',
    topics: [
      'Setting Up the Local Companion API Test Workbench',
      'AddBook POST: JSON Payloads & Composite Primary Keys',
      'Handling Duplicate Records: Book Already Exists',
      'GetBook GET: Query Parameters & Resource Retrieval',
      'DeleteBook POST: Idempotent Database Cleanup',
      'Identifying the Pain of Manual Copy-Paste'
    ]
  },
  {
    num: 'Chapter 05',
    title: 'Writing JavaScript Assertions and the pm Object',
    desc: 'The Node.js execution sandbox, writing status/header/latency assertions with pm.test and Chai BDD matchers, Ajv JSON Schema validation, and JavaScript tester fundamentals (types, scopes, traps).',
    topics: [
      'The Embedded Node.js Execution Sandbox',
      'Writing Assertions with pm.test and Chai Matchers',
      'Validating HTTP Status, Headers & Latency Budgets',
      'JSON Schema Validation with Built-in Ajv Library',
      'JavaScript Tester Fundamentals: var vs let vs const',
      'Type Coercion Traps (== vs ===) & Falsy Gotchas'
    ]
  },
  {
    num: 'Chapter 06',
    title: 'Managing Variables Across the Five Scopes',
    desc: 'The 5 variable scopes (Global, Collection, Environment, Data, Local), scope precedence ladder, dynamic environment switching (QA vs UAT), Initial vs Current values, and pre-request unique ISBN generation.',
    topics: [
      'The 5 Variable Scopes & Hierarchy Ladder',
      'Dynamic Base URL Switching Across Environments',
      'Initial Value vs Current Value Security Mechanics',
      'Pre-Request Scripts: Math.random & Unique ISBN Generation',
      'Debugging Variable Shadowing in the Postman Console'
    ]
  },
  {
    num: 'Chapter 07',
    title: 'Request Chaining and Complex Nested JSON Parsing',
    desc: 'Automated property transfer from AddBook to GetBook and DeleteBook, traversing nested JSON trees, JavaScript array transformation pipeline (.find, .filter, .map, .reduce), and e-commerce teardown.',
    topics: [
      'Automated Property Transfer Across Sequential Requests',
      'Traversing Nested Objects & Multi-Level JSON Trees',
      'JavaScript Array Methods: find(), filter(), and map()',
      'Mathematical Aggregations Across Arrays with reduce()',
      'Multi-Step E-Commerce Workflow & Automated Teardown'
    ]
  },
  {
    num: 'Chapter 08',
    title: 'Data Driven Testing with External Data Files',
    desc: 'Decoupling test logic from external data, driving Collection Runner with external CSV and JSON datasets, parameterizing requests with pm.iterationData, and debugging console traps.',
    topics: [
      'Decoupling Test Logic from External Test Data',
      'Reading CSV & JSON Files with pm.iterationData.get()',
      'Running High-Volume Iterations in Collection Runner',
      'Debugging Variable Resolution Traps in the Console',
      'Mission 2 Accomplished: Autonomous Library Engine'
    ]
  },
  {
    num: 'Chapter 09',
    title: 'Advanced Error Handling and Resilience Testing',
    desc: 'The production negative testing matrix (400, 401, 404, 429, 500), defensive scripting with try-catch blocks, guarding against sensitive stack trace leaks, soft error traps, and self-healing retry loops.',
    topics: [
      'The Production Negative Testing Matrix (4xx & 5xx)',
      'Defensive Scripting: Safe JSON Parsing with try-catch',
      'Guarding Against Database Stack Trace Leaks',
      'Soft Error Traps: HTTP 200 with Hidden Failure Payloads',
      'Self-Healing Retry Workflows with Collection Flags'
    ]
  },
  {
    num: 'Chapter 10',
    title: 'Postman Mock Servers and JSON Schema Contracts',
    desc: 'Contract-first development, JSON Schema draft-07 verification with Ajv, building hosted Postman Mock Servers, matching query parameters in Examples, unblocking agile parallel development, and GraphQL testing.',
    topics: [
      'Contract-First Development & JSON Schema Standards',
      'Creating Postman Hosted Mock Servers & Mock URLs',
      'Configuring Mock Examples with Query Parameters',
      'Unblocking Agile Frontend & QA Teams in Parallel',
      'Testing GraphQL: POST /graphql, Queries & Mutations'
    ]
  },
  {
    num: 'Chapter 11',
    title: 'OAuth 2.0 and Modern Token Authentication',
    desc: 'Why modern APIs use OAuth 2.0, the hotel keycard analogy, the 4 OAuth roles, the two-step Authorization Code handshake, automated token exchange scripts, and Bearer token chaining in global variables.',
    topics: [
      'Why Modern APIs Rely on OAuth 2.0 (Hotel Keycard)',
      'The Four Roles: Resource Owner, Client, Auth & Resource',
      'The Two-Step Authorization Code Handshake Contract',
      'Automated Token Exchange in Pre-Request & Test Scripts',
      'Storing Bearer Tokens in Global Variables for Chaining'
    ]
  },
  {
    num: 'Chapter 12',
    title: 'SOAP WebServices and XML Parsing',
    desc: 'REST vs SOAP architectural differences, WSDL contracts, crafting SOAP 1.2 XML envelopes, setting Content-Type headers, converting XML responses to JavaScript with xml2Json, and bracket notation assertions.',
    topics: [
      'REST vs SOAP Architecture & WSDL Specifications',
      'Anatomy of a SOAP Message: Envelopes, Headers & Bodies',
      'Setting SOAP 1.2 Headers: Content-Type application/soap+xml',
      'Parsing XML Strings into JavaScript Objects using xml2Json',
      'Asserting Namespaced XML Properties with Bracket Notation'
    ]
  },
  {
    num: 'Chapter 13',
    title: 'Headless Test Execution with Newman and CI CD',
    desc: 'Running Postman collections headlessly via Newman CLI, generating interactive HTML Extra dashboards, integrating with Jenkins freestyle CI/CD pipelines, parameterized builds, and quality gates.',
    topics: [
      'Running Collections Headlessly via Newman CLI',
      'Exporting Portable Collection & Environment Artifacts',
      'Generating Rich Visual HTML Extra Dashboards',
      'Jenkins CI/CD Integration: Freestyle Build Steps',
      'Automated Quality Gates & Mission 3 Accomplished'
    ]
  }
]

export default function CurriculumBlueprint({ onBack, onHome, theme, onToggleTheme }) {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [checkedMap, setCheckedMap] = useState(() => {
    const initial = {}
    SYLLABUS_ITEMS.forEach(item => {
      const stored = localStorage.getItem('checklist_' + item.id)
      initial[item.id] = stored !== null ? stored === 'true' : false
    })
    return initial
  })

  const toggleCheck = (id) => {
    setCheckedMap(prev => {
      const nextState = !prev[id]
      localStorage.setItem('checklist_' + id, String(nextState))
      return { ...prev, [id]: nextState }
    })
  }

  const filteredItems = SYLLABUS_ITEMS.filter(item => {
    const matchesFilter = filter === 'all' || item.mission === filter
    const matchesSearch = !search ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase()) ||
      item.chapters.join(' ').toLowerCase().includes(search.toLowerCase()) ||
      item.artifact.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const total = SYLLABUS_ITEMS.length
  const completed = Object.values(checkedMap).filter(Boolean).length
  const percent = Math.round((completed / total) * 100)

  return (
    <div className="blueprint-screen">
      <div className="blueprint-toolbar">
        <div className="blueprint-toolbar-title">
          <span>📋 Curriculum Architecture Plan & Master Syllabus Checklist</span>
        </div>
        <div className="blueprint-toolbar-actions">
          <button className="icon-btn" onClick={onToggleTheme} title="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button className="btn" onClick={onHome}>⌂ Library</button>
          <button className="btn primary" onClick={onBack}>✕ Back to Book</button>
        </div>
      </div>

      <div className="blueprint-container">
        <div className="blueprint-hero">
          <div className="blueprint-eyebrow">Enterprise Curriculum Architecture & Master Plan</div>
          <h1>Zero to Agentic API Testing</h1>
          <p>
            A comprehensive, multi-chapter pedagogical blueprint mapping out all 70 course transcripts and syllabus concepts into an authentic enterprise narrative: the <strong>Apex Campus Enterprise Cloud Platform</strong>.
          </p>

          <div className="bp-mission-grid">
            <div className="bp-mission-card m1">
              <div>
                <div className="bp-mission-header">
                  <span className="bp-badge m1">Mission 1</span>
                  <span className="bp-mission-chapters-count">Chapters 1 to 3</span>
                </div>
                <h3 className="bp-mission-title">The Core Protocol and Campus Cloud Integration</h3>
                <p className="bp-mission-desc">
                  Resolving the campus launch day crisis, auditing the invisible network wire, understanding client server decoupling, examining backend FastAPI code blueprints, mastering the 4 REST CRUD operations, and setting up collaborative Postman workspaces with Git style forks and Pull Requests.
                </p>
              </div>
              <div className="bp-mission-pills">
                <span className="bp-pill">Ch 01: Understanding APIs</span>
                <span className="bp-pill">Ch 02: REST & HTTP</span>
                <span className="bp-pill">Ch 03: Postman Setup</span>
              </div>
            </div>

            <div className="bp-mission-card m2">
              <div>
                <div className="bp-mission-header">
                  <span className="bp-badge m2">Mission 2</span>
                  <span className="bp-mission-chapters-count">Chapters 4 to 8</span>
                </div>
                <h3 className="bp-mission-title">Automating Student & Campus Services at Scale</h3>
                <p className="bp-mission-desc">
                  Automating the College Library API suite, mastering JavaScript assertions with Chai and the pm object, navigating the 5 variable scopes, dynamic ISBN generation, automated property transfer chaining, complex nested JSON array operations (find, filter, map, reduce), and high-volume Data Driven Testing (DDT) with external CSV/JSON files.
                </p>
              </div>
              <div className="bp-mission-pills">
                <span className="bp-pill">Ch 04: Library CRUD</span>
                <span className="bp-pill">Ch 05: JS Assertions</span>
                <span className="bp-pill">Ch 06: Scopes & Variables</span>
                <span className="bp-pill">Ch 07: Chaining & Arrays</span>
                <span className="bp-pill">Ch 08: Data Driven Testing</span>
              </div>
            </div>

            <div className="bp-mission-card m3">
              <div>
                <div className="bp-mission-header">
                  <span className="bp-badge m3">Mission 3</span>
                  <span className="bp-mission-chapters-count">Chapters 9 to 13</span>
                </div>
                <h3 className="bp-mission-title">Enterprise Resilience, Mock Servers & CI CD</h3>
                <p className="bp-mission-desc">
                  Multi-step E-Commerce transactional testing, production negative testing matrices, defensive try-catch scripting, hosted Postman Mock Servers, JSON Schema contract verification with Ajv, GraphQL single-query resolution, OAuth 2.0 authorization code handshakes, SOAP 1.2 XML services with xml2Json, and headless Newman CI/CD regression gates with HTML Extra reports.
                </p>
              </div>
              <div className="bp-mission-pills">
                <span className="bp-pill">Ch 09: Resilience & E-Commerce</span>
                <span className="bp-pill">Ch 10: Mock Servers & GraphQL</span>
                <span className="bp-pill">Ch 11: OAuth 2.0 Tokens</span>
                <span className="bp-pill">Ch 12: SOAP XML WebServices</span>
                <span className="bp-pill">Ch 13: Newman CLI & CI CD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bp-controls">
          <input
            type="text"
            className="bp-search"
            placeholder="🔍 Search syllabus concepts (e.g. OAuth, FastAPI, BigDataCloud, find, reduce, Newman, scopes)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="bp-filters">
            <button
              className={`bp-filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Topics ({SYLLABUS_ITEMS.length})
            </button>
            <button
              className={`bp-filter-btn ${filter === 'm1' ? 'active' : ''}`}
              onClick={() => setFilter('m1')}
            >
              Mission 1
            </button>
            <button
              className={`bp-filter-btn ${filter === 'm2' ? 'active' : ''}`}
              onClick={() => setFilter('m2')}
            >
              Mission 2
            </button>
            <button
              className={`bp-filter-btn ${filter === 'm3' ? 'active' : ''}`}
              onClick={() => setFilter('m3')}
            >
              Mission 3
            </button>
          </div>
        </div>

        <div className="bp-progress-card">
          <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Syllabus Coverage:</span>
          <div className="bp-progress-track">
            <div className="bp-progress-fill" style={{ width: `${percent}%` }} />
          </div>
          <span className="bp-progress-stat">{completed} of {total} Topics Verified ({percent}%)</span>
        </div>

        <div className="bp-table-card">
          <div className="bp-table-head">
            <div>✓</div>
            <div>Syllabus Concept & Curriculum Topic</div>
            <div>Mission</div>
            <div>Chapter Coverage</div>
            <div>Primary Artifact / Endpoint</div>
          </div>
          <div>
            {filteredItems.map(item => (
              <div key={item.id} className="bp-table-row">
                <div className="bp-chk-col">
                  <input
                    type="checkbox"
                    checked={Boolean(checkedMap[item.id])}
                    onChange={() => toggleCheck(item.id)}
                  />
                </div>
                <div className="bp-topic-col">
                  <span className="bp-topic-title">{item.title}</span>
                  <span className="bp-topic-desc">{item.desc}</span>
                </div>
                <div>
                  <span className={`bp-badge ${item.mission}`}>
                    {item.missionLabel}
                  </span>
                </div>
                <div className="bp-chapters-col">
                  {item.chapters.map(ch => (
                    <span key={ch} className="bp-ch-tag">{ch}</span>
                  ))}
                </div>
                <div className="bp-artifact-col" title={item.artifact}>
                  {item.artifact}
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="bp-section-heading">Chapter by Chapter Architectural Breakdown</h2>
        <div className="bp-chapters-grid">
          {CHAPTERS_DATA.map(ch => (
            <div key={ch.num} className="bp-ch-card">
              <div className="bp-ch-num">{ch.num}</div>
              <h4 className="bp-ch-title">{ch.title}</h4>
              <p className="bp-ch-desc">{ch.desc}</p>
              <ul className="bp-ch-topics">
                {ch.topics.map(t => (
                  <li key={t} className="bp-ch-topic-item">
                    <span className="bp-bullet">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
