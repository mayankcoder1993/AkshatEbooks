import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sections = [];

sections.push(`================================================================================
SARVA GYANA KOSHAH BOOKS — STRATEGIC MASTER ARCHITECTURE & FORENSIC AUDIT SPECIFICATION
CANONICAL KNOWLEDGE REPOSITORY & PUBLISHING ECOSYSTEM: THE SINHA FAMILY GROUP
TARGET AUDIENCE: WORKING IT PROFESSIONALS, SENIOR SYSTEMS ARCHITECTS & EXTERNAL AI AUDITORS
PRIMARY TRACK: ANTI "VIBE-CODING" SYSTEMS ENGINEERING FROM FIRST PRINCIPLES
WEB REPOSITORY REFERENCE: https://nologin.in/akshatapitesting | LOCAL MIRROR: http://localhost:5173/akshatapitesting.html
================================================================================

[DIRECTIVE FOR THE AUDITING AI SYSTEM]
You are acting as the Principal Technical Publishing Strategist, Senior Systems Architect, and Staff Quality Engineering Director.
You are tasked with conducting an exhaustive, zero-fluff, technically forensic audit of the Sarva Gyana Koshah Technical Library and its flagship anti "vibe-coding" pedagogical framework.

Our target audience is NOT casual hobbyists, absolute novices, or children. Our primary readers are:
1. Working IT Professionals, Software Development Engineers (SDE 1/2), and QA/Automation Engineers seeking to elevate their careers to Systems and Performance Architecture.
2. Self-taught and bootcamp engineers trapped in the "vibe-coding" illusion (generating unverified boilerplate with LLMs while unable to diagnose socket leaks, thread starvation, or wire-level protocol failures).
3. Engineering Leads and Technical Mentors seeking a battle-tested, first-principles curriculum to train junior hires on resilient systems architecture.

Inspect the complete curriculum architecture, the comic character ensemble, the pedagogical wire ladder, the Chapter 02 transit incident deep-dive, and the 4-book roadmap provided below. Audit this material against current 2025–2026 production realities, emerging industry shifts, failure modes, and pedagogical durability.`);

sections.push(`
================================================================================
PART 1: THE CORE PHILOSOPHY & ANTI "VIBE-CODING" DOCTRINE
================================================================================

1.1 THE 2025–2026 INDUSTRY CRISIS: THE "VIBE-CODING" CLIFF
The sudden democratization of generative AI coding tools (Claude, Cursor, Copilot, ChatGPT) has created an alarming engineering deficit across enterprise IT:
- Developers can prompt multi-container microservices into existence in minutes, but cannot explain what occurs at the kernel level when an incoming TCP packet hits a socket.
- When production outages, connection pool exhaustion, silent data corruption, or memory leaks occur, these "vibe-coders" blindly feed stack traces back into LLMs, generating cyclic hallucinations that compound system failure.
- Enterprise hiring bars have inverted: basic syntax and boilerplate generation are automated commodities. Premium engineering value now resides exclusively in Systems Telemetry, Wire-Level Auditing, Contract Resilience, Concurrency Internals, and Failure Mode Forensics.

1.2 THE 3-TIER PEDAGOGICAL LADDER
To transition working IT professionals from superficial syntax generators to resilient systems engineers, Sarva Gyana Koshah implements a strict 3-tier instructional ladder:

- TIER 1: DIRECT TECHNICAL FIRST (ZERO-FLUFF SYSTEMS TERMINOLOGY)
  Whenever a concept can be stated in standard engineering terminology, state it directly and mathematically. No baby talk, no patronizing diminutives. If we are discussing an unhandled exception crashing a V8 worker thread due to dereferencing undefined, we analyze the V8 call stack, the Event Loop macrotask queue, and the HTTP socket state directly.

- TIER 2: PHYSICAL & VISUAL METAPHORS (GROUNDING THE INVISIBLE WIRE)
  Modern software abstracts the physical machine. When explaining invisible computing behavior (TCP windowing, memory pointers, GIL contention, byte-boundary framing), we employ concrete physical anchors:
  * The Cutting Chai Brass Carrier: Pointers vs deep values; passing an address vs duplicating liquid.
  * The Restaurant Order Ticket Spindle: HTTP request headers, idempotency keys, and queue processing.
  * The Brass Thali Platter: Compound JSON payload contracts and schema serialization boundaries.
  * The Garden Hose Pulse: TCP byte streaming and \\r\\n\\r\\n protocol packet boundaries.

- TIER 3: THE 7-LAYER FORENSIC VIBE-CODE AUDIT PROTOCOL
  Every AI-generated or developer-submitted service must survive an unforgiving 7-layer interrogation before deployment:
  * Layer 1: Secrets & Exposure Forensics (gitleaks, .env exfiltration, memory dump scrubbing).
  * Layer 2: Git Hygiene & Commit History (squashing, bisecting silent regressions, author identity).
  * Layer 3: Dependency Integrity & Hallucination Defense (pip-audit, npm audit, typosquatting vectors).
  * Layer 4: Concurrency & Runtime Lifecycle (blocking calls on async loops, threadpool exhaustion, socket leaks).
  * Layer 5: Input Boundaries & Schema Contracts (strict Ajv/Pydantic validation, SQL/NoSQL injection, CORS traps).
  * Layer 6: Error Contracts & Observability Integrity (scrubbing leaked stack traces, structured JSON error contracts, semantic HTTP status codes).
  * Layer 7: AI Hallucination & Deprecation Traps (unmasking deprecated APIs, phantom methods, and synthetic mock dependencies).`);

sections.push(`
================================================================================
PART 2: THE RECURRING ENSEMBLE CAST & PROFESSIONAL DYNAMICS
================================================================================

Our curriculum does not use dry, disembodied academic lectures. Complex systems concepts unfold through the lived engineering crises of an authentic software engineering department:

2.1 THE SYSTEMS MENTORS
- SAMEER (Universal Systems Architect):
  * Archetype: The Calm Guru. 40-year-old staff architect wearing a simple khadi kurta, always carrying a twin-glass brass carrier of steaming cutting chai.
  * Behavioral Rule: Sameer NEVER touches a student or junior's keyboard. He draws socket states, memory registers, and packet flows on dry-erase boards or paper napkins, asking Socratic questions that force the engineer to discover the root cause themselves.
  * Catchphrase: "The browser and the UI are decorative glass. Step away from the blame game and come inspect the wire."

- ASHISH & MAYANK (Distinguished Enterprise Architects):
  * Archetype: Battle-hardened veteran architects representing high-throughput banking, distributed clearance engines, and legacy mainframe migrations.
  * Role: Bring harsh enterprise realities into play—SOAP/XML contracts, mTLS handshakes, idempotency locks, and zero-downtime database schema migrations under millions of transactions.

2.2 THE APPRENTICE POD & JUNIOR ENGINEERS
- AKSHAY (Central Protagonist):
  * Archetype: The Relatable, Diligent Engineer.
  * Professional Arc: Begins in Book 3 as a stressed student dealing with a rain-soaked exam ticket on Port 3000; systematically masters manual wire triage, JavaScript test scripting, Chai assertions, Newman CLI automation, and CI/CD pipelines; graduates, enters the industry, and lands his dream SDE role after demonstrating an automated 47-assertion Newman gate to interviewers!
  * Visual Persona: Crisp white kurta, focused gaze, authentic gouache realism.

- PALASH (The Classic "Vibe-Coder" & Best Friend):
  * Archetype: The Impatient Prompt Addict.
  * Role: The comic foil and primary source of engineering disasters. Palash copies prompts from LLMs without reading the code, wraps crashing endpoints in blanket try { ... } catch (e) {} blocks, returns polite 200 OK errors that fool monitoring dashboards, and accidentally launches token-draining infinite loops.
  * Value: Demonstrates the exact traps that working IT professionals fall into when over-relying on AI assistants.

- SWATI (The Contract & Schema Sentinel):
  * Archetype: The Uncompromising QA Lead.
  * Role: Armed with a color-coded notebook and strict JSON Schema validators (Ajv, Pydantic). Swati rejects code reviews that lack negative edge tests, unmasks schema drift, and refuses to let "it works on my machine" pass into staging.

- SACHIN & SHIVAM (Frontend & Full-Stack Engineers):
  * Archetype: Fast-moving UI developers who frequently collide with backend breaking changes, unparsed byte streams, and CORS preflight headers.

2.3 THE PRODUCTION & SRE SPECIALISTS
- SAKSHI (Concurrency & ASGI Lead): High-speed, espresso-fueled backend specialist; master of FastAPI, asyncio event loops, and connection pool sizing.
- VARUN (Site Reliability & DevOps Guardian): Night-shift SRE lead; master of Linux cgroups, Docker multi-stage builds, Nginx reverse proxies, and automated circuit breakers.
- AKANKSHA (AI Systems & Multi-Agent Swarms Lead): Production AI hardliner; expert in LangGraph, CrewAI, MCP server security, and token budget governance.

2.4 SUPPORTING DOMAIN SPECIALISTS
- DEVANSH (AppSec / Red Teamer): Penetration tester exposing Werkzeug debug pins, JWT alg: none forgeries, and MCP path traversal attacks.
- ANURAG (Database Internals): PostgreSQL wizard diagnosing table locks (ACCESS EXCLUSIVE) and connection starvation.
- SHUBHANSHU (High-Performance Data): Polars and Arrow engineer explaining memory layouts and SIMD vectorization.
- ADITYA (Distributed Messaging): Kafka/Redis engineer resolving socket descriptor leaks (CLOSE_WAIT).`);

sections.push(`
================================================================================
PART 3: BOOK 1 DETAILED CURRICULUM SPECIFICATION
TITLE: FIRST BYTECODE: PYTHON FROM YOUR FIRST LINE TO YOUR FIRST COMMIT
TARGET PATH: src/books/technical/programming/python-absolute-beginners/
DELIVERABLE: MODULAR, MEMORY-PROFILED CLI STUDY ASSISTANT (assistant.py) WITH PYTEST SUITES
================================================================================

CHAPTER 01: MAKE PYTHON RUN: SOURCE TO BYTECODE TO SCREEN
- Crisis: The Silent SyntaxError at 02:00 AM.
- First Principles: CPython execution pipeline: Tokenizer -> Abstract Syntax Tree (AST) -> Compiler -> PyCodeObject -> CPython Virtual Machine Evaluation Loop.
- Disassembly Inspection: dis.dis() opcode analysis (LOAD_CONST, STORE_FAST, BINARY_OP, RETURN_VALUE).
- Memory Footprint: Why Python is an interpreted bytecode VM, not pure machine code. Case sensitivity and newline token grammar.
- Edge Case: IndentationError vs SyntaxError at compile time before execution begins.

CHAPTER 02: WORK WITH VALUES: NAMES, MEMORY AND PRECEDENCE
- Crisis: The Mutable Object Mutation Mystery.
- First Principles: PyObject struct anatomy (ob_refcnt, ob_type, ob_size). Names as pointers in namespace dictionaries, not memory buckets.
- The Small Integer Cache (-5 to 256): Identity is vs Equality ==. String interning rules and IEEE 754 floating point precision limits (0.1 + 0.2 != 0.3).
- Operator Precedence & Short-Circuiting: Bitwise vs logical operators, bytecode evaluation order.
- Production Trap: Assuming is checks equality for numbers outside the interned range (e.g., 257 is 257 in REPL vs file compiler).

CHAPTER 03: ORGANIZE DATA: PACKING COLLECTIONS AND STATE
- Crisis: The Quadratic Search Degradation.
- First Principles: Contiguous pointer arrays (PyListObject) vs Open Addressing Hash Tables (PyDictObject, PySetObject).
- Over-allocation strategies in list.append() (0, 4, 8, 16, 25, 35, 46...).
- Hash Collisions: Perturbation hashing, key deletion dummy markers, shallow vs deep copying internals (copy.copy vs copy.deepcopy).
- Production Trap: Modifying a dictionary or list while iterating over it, causing RuntimeError: dictionary changed size during iteration.

CHAPTER 04: CONTROL THE PROGRAM: DECISIONS AND ITERATION
- Crisis: The Endless Loop Outage.
- First Principles: The Iterator Protocol (__iter__ and __next__). StopIteration unwinding.
- Generators vs Lists: Memory consumption profiling (sys.getsizeof() on 1,000,000 items: 8MB vs 104 bytes).
- Short-circuit boolean evaluation in complex conditional branches.
- Production Trap: Exhausting a generator on the first pass and wondering why the second iteration loop runs zero times.

CHAPTER 05: BUILD WITH FUNCTIONS AND INPUT: REUSABLE LOGIC AND SCOPE
- Crisis: The Ghost Student in the Default Argument List.
- First Principles: LEGB Scope Resolution (Local, Enclosing, Global, Builtin). Function objects as heap allocated first-class citizens.
- The Mutable Default Trap: def add_student(name, registry=[]). Why default argument tuples evaluate once at function definition time, NOT execution time!
- CLI Engineering: Building production subcommands with argparse, validating input types, and handling standard streams (stdin, stdout, stderr).
- Production Trap: Global keyword abuse creating race conditions in threaded contexts.

CHAPTER 06: MODEL BEHAVIOR WITH OBJECTS: DEMYSTIFIED OBJECT DESIGN
- Crisis: The 500MB Memory Bloat in Production.
- First Principles: Class objects as runtime namespace factories. The __new__ vs __init__ lifecycle.
- How method binding works: descriptor protocol and the implicit self parameter.
- Instance __dict__ memory overhead vs __slots__ attribute optimization (saving 60% memory across millions of objects).
- Production Trap: Creating class-level attributes intending them as instance defaults, accidentally sharing state across all instances.

CHAPTER 07: SPLIT AND SHARE CODE: MODULAR ARCHITECTURES AND CLEAN IMPORTS
- Crisis: The Circular Import Deadlock at Startup.
- First Principles: sys.path scanning, sys.modules caching, and module execution phases.
- Diagnosing and resolving circular dependencies: refactoring shared interfaces vs deferred runtime imports.
- Virtual Environments: isolation mechanisms (pyvenv.cfg, PATH hijacking). Pre-commit hooks for secret scanning (gitleaks) and formatting.
- Production Trap: Shadowing standard library module names (e.g. naming a file random.py or math.py).

CHAPTER 08: HANDLE PROBLEMS AND PROVE BEHAVIOR: EXCEPTIONS, TESTS AND STEADY TRUST
- Crisis: The Corrupted JSON Database on Process Termination.
- First Principles: Exception stack unwinding, traceback objects, and sys.exc_info().
- The finally block guarantee: resource cleanup, context managers (__enter__ and __exit__).
- Atomic File Persistence: Writing to temporary files and atomic renaming (os.replace) to prevent partial data corruption.
- Testing Foundations: Deterministic testing with pytest, parameterization, and mocking system boundaries.
- Production Trap: Bare except: blocks swallowing KeyboardInterrupt and SystemExit.`);

sections.push(`
================================================================================
PART 4: BOOK 2 DETAILED CURRICULUM SPECIFICATION
TITLE: MODERN PYTHON BACKEND FRAMEWORKS UNDER PRODUCTION FIRE
TARGET PATH: src/books/technical/programming/python-backend-frameworks/
DELIVERABLE: THE STUDENT TASK & KNOWLEDGE API (FASTAPI, DJANGO, FLASK 7-LAYER AUDIT & HARDENING)
================================================================================

ACT 1: WIRE AND CONCURRENCY FOUNDATIONS
- Chapter 01: The 02:00 AM Blackhole: Sync Calls Freezing Async Event Loops.
  * Root Cause: Invoking blocking I/O (time.sleep, requests.get) inside an async def FastAPI route handler.
  * Systems Analysis: The single-threaded asyncio event loop stalls; all incoming concurrent requests freeze in kernel TCP listen queues.
  * Remediation: Non-blocking HTTP clients (httpx.AsyncClient) or offloading blocking tasks via asyncio.to_thread / anyio.to_thread.
- Chapter 02: Raw TCP to HTTP by Hand: Socket Programming from Scratch.
  * Systems Analysis: Opening raw AF_INET sockets, binding to 0.0.0.0, calling listen(128).
  * Parsing: Reading raw byte buffers, locating the \\r\\n\\r\\n header boundary, parsing Content-Length headers, and framing HTTP/1.1 chunked transfer encodings.
- Chapter 03: ASGI, Coroutines and Threads: What await Actually Does to the CPU.
  * Systems Analysis: State machines generated by Python coroutines. The PyFrameObject yield mechanics.
  * Comparing WSGI (synchronous worker process per socket) vs ASGI (asynchronous event loop multiplexing thousands of concurrent connections).

ACT 2: THE THREE-TEAM FRAMEWORK SHOWDOWN
- Chapter 04: Three Teams, One Spec: FastAPI vs Django vs Flask REST Compliance.
  * Real-World Simulation: Three engineering squads implement the identical Student Task API specification.
  * Benchmarking: Latency, memory footprint, routing engine efficiency, and ORM abstractions under identical workload.
- Chapter 05: Pydantic and Request Bodies: Parsing Hostile Byte Streams.
  * Systems Analysis: Pydantic v2 Rust core (pydantic-core). Strict vs lax coercion modes.
  * Attack Vectors: Type confusion, prototype pollution equivalents, and JSON payload deserialization bombs.
- Chapter 06: The Seven Layer Audit Live: Exposing Debug Pins, Leaked Secrets and SQLite Locks.
  * Forensic Interrogation: Auditing the vibe-coded submissions. Unmasking Django DEBUG=True leaking environment keys, Werkzeug interactive debug console PIN vulnerability, and SQLite operational locks under concurrent writes.

ACT 3: PRODUCTION DATA, CONCURRENCY & SECURITY
- Chapter 07: SQLAlchemy 2.0 Async Engine: Session Lifecycles and MissingGreenlet Traps.
  * Root Cause: Attempting lazy relationship loading inside an async session without joinedload / selectinload.
  * Systems Analysis: The greenlet context switch boundary. Managing scoped async sessions via dependency injection.
- Chapter 08: Connection Pool Starvation Forensics: Sizing Pools and Auditing Leaks.
  * Systems Analysis: QueuePool exhaustion under peak traffic. Diagnosing unclosed sessions and idle in transaction locks.
  * Mathematical Sizing: Sizing connection pools based on CPU cores, disk I/O limits, and Postgres max_connections.
- Chapter 09: Alembic and Zero Downtime Migrations: The Expand and Contract Pattern.
  * Production Rules: Adding NOT NULL columns without default values locking enterprise tables (ACCESS EXCLUSIVE).
  * The 3-Step Expand and Contract deployment: Add nullable column -> Backfill data -> Enforce constraint and drop old column.
- Chapter 10: OAuth2, JWT and RBAC: Defending Against Algorithm None Forgery.
  * Security Forensics: Dissecting JWT headers. Exploiting and defending against alg: "none" signature bypass attacks.
  * Token Lifecycle: Asymmetric RSA/ECDSA signing, short-lived access tokens (15m), and secure refresh token rotation stored in Redis.

ACT 4: REAL-TIME, RESILIENCE & DEPLOYMENT
- Chapter 11: WebSockets and CLOSE_WAIT: Diagnosing Connection Leaks and Nginx Timeouts.
  * Systems Analysis: WebSocket protocol upgrade handshake (101 Switching Protocols).
  * Socket Forensics: Identifying orphaned connections in CLOSE_WAIT and LAST_ACK states due to unhandled client disconnects. Heartbeat pings and ping_interval tuning.
- Chapter 12: Docker, Nginx and Graceful Exit: Surviving Database Failures Under 500-VU k6 Load.
  * Production Deployment: Multi-stage Docker builds (reducing image size from 1.2GB to 85MB). Nginx reverse proxy buffer tuning.
  * Graceful Shutdown: Handling SIGTERM signals, finishing active HTTP requests, and releasing database connection pools.`);

sections.push(`
================================================================================
PART 5: BOOK 3 DETAILED CURRICULUM SPECIFICATION
TITLE: ZERO TO AGENTIC API TESTING: AUTOMATED QUALITY WITH POSTMAN & NEWMAN
TARGET PATH: src/books/technical/programming/testing/zero-to-agentic-api-testing/
DELIVERABLE: 47-ASSERTION AUTOMATED TEST SUITE WITH NEWMAN CLI RUNNER AND GITHUB ACTIONS CI/CD GATES
NARRATIVE ARC: AKSHAY'S JOURNEY FROM STRESSED EXAM APPRENTICE TO TRIUMPHANT SDE OFFER RECIPIENT
================================================================================

CHAPTER 01: UNDERSTANDING APIS FROM FIRST PRINCIPLES: CRISIS ON PORT 3000
- Crisis: The Rain-Soaked Admit Card. Akshay stands outside the exam hall with an illegible ticket; the only copy is stored on the campus library server on Port 3000.
- First Principles: Assembling a minimal Node.js HTTP server from scratch. Parsing raw TCP streams.
- The 5 CRUD Operations: GET, POST, PUT, PATCH, DELETE verified via raw curl commands.
- Visual Invariant: The Macro Admit Card without tribal distortions; crisp vector terminal screens.
- Production Trap: Believing HTTP methods have magic powers; realizing they are just strings in the first line of an HTTP request packet.

CHAPTER 02: INVESTIGATING THE INCIDENT: MANUAL WIRE AUDITING AND HTTP STATUS CODES
- Crisis: 08:14 PM Campus Transit Shuttle Crash. Shuttles disappear from phone tracking screens during an evening monsoon rush.
- The Investigation: Dissecting the 500 Internal Server Error. Express assigns req.query.name = undefined when omitted. Calling .trim() throws an uncaught TypeError!
- The 4-Beat Comic Arc:
  * Beat 1 (08:14 PM): The Frozen Transit Map and the War Room Standoff.
  * Beat 2 (08:25 PM): Reproducing the 500 Crash on the Wire.
  * Beat 3 (08:33 PM): Installing the Defensive Input Guard.
  * Beat 4 (08:37 PM): Dual Wire Contract Verification.
- Input / Processing / Output:
  * Missing: GET /v1/shuttle/route -> req.query.name is undefined -> TypeError -> 500 Error.
  * Guarded: GET /v1/shuttle/route -> Fail-fast check (!name || !name.trim()) -> 400 Bad Request (4ms).
  * Contract: GET /v1/shuttle/route?name=north_loop -> Passes guard -> 200 OK with coordinates (12ms).
- Status Code Families: Deep dive into 1xx Informational, 2xx Success, 3xx Redirection, 4xx Client Error, and 5xx Server Error.
- The Polite 200 Anti-Pattern: Exposing backends returning 200 OK with {"success": false}, blinding monitoring dashboards and CI/CD runners.

CHAPTER 03: THE FIRST SCRIPTED REQUEST: POSTMAN AND INSOMNIA FOUNDATIONS
- Crisis: The Green Suite with the Hidden Lie. Senior leaves an automated suite showing 10 passing green badges, but inspecting the code reveals empty assertion bodies!
- First Principles: Postman Sandbox architecture. The execution lifecycle: Pre-request script -> HTTP Network Request -> Response -> Tests script.
- Writing Chai BDD Assertions: pm.test(), pm.response.to.have.status(200), pm.response.to.be.json.
- Dual Assertions: Asserting both HTTP status header and deep response body properties.
- Production Trap: Writing tests that assert status 200 without checking if the body contains expected error objects.

CHAPTER 04: MANUAL TESTING THE COLLEGE LIBRARY API: PATH VARIABLES VS QUERY STRINGS
- Crisis: The Overdue Book Conflict. Duplicate ISBN submissions wiping checkout history.
- Architectural Grammar: When to use Path Variables (identifying unique resource entities: /v1/books/:id) vs Query Strings (filtering, sorting, pagination: /v1/books?category=science&limit=10).
- State Verification: Testing unique constraint violations returning 409 Conflict vs 404 Not Found.
- Production Trap: Using query parameters to pass sensitive credentials or private IDs in URLs where proxy logs store them in cleartext.

CHAPTER 05: WRITING JAVASCRIPT ASSERTIONS AND SCHEMA CONTRACTS
- Crisis: The Silent Field Renaming Disaster. Backend renames student_id to admitCardId; UI silently displays null values.
- Contract Testing: Ajv JSON Schema Draft-07 validation inside Postman test scripts.
- Schema Definition: Validating required properties, string regex formats, integer ranges, and additionalProperties: false.
- Production Trap: Validating only top-level object fields while nested arrays drift silently.

CHAPTER 06: MANAGING VARIABLES ACROSS THE FIVE SCOPES
- Crisis: The Global Variable Collision Catastrophe. Concurrent test iterations overwriting shared auth tokens.
- Scope Hierarchy: Global -> Collection -> Environment -> Data -> Local.
- Scope Priority Rules: Variable shadowing and memory lifecycle. Best practices for hermetic test execution.
- Production Trap: Storing environment-specific URLs in global scope, accidentally running tests against production instead of staging.

CHAPTER 07: REQUEST CHAINING AND COMPLEX NESTED JSON NAVIGATION
- Crisis: The Department Budget Audit Failure.
- Modern JavaScript Array Pipelines: Transforming deep API payloads using Array.prototype.find(), Array.prototype.map(), Array.prototype.filter(), and Array.prototype.reduce().
- Request Chaining: Extracting auth tokens and dynamically generated resource IDs from Response A and injecting them into the Request Header of Response B.
- Production Trap: Hardcoding array index [0] instead of using find() to match specific entity attributes, causing flaky tests when order changes.

CHAPTER 08: DATA DRIVEN TESTING WITH EXTERNAL DATA FILES
- Crisis: The Bulk Student Enrollment Edge Case.
- Postman Collection Runner: Executing parameterized test runs against external CSV and JSON data files.
- Iteration Data Context: Accessing pm.iterationData.get("studentId"), boundary testing unicode names, max string lengths, and negative integers.
- Production Trap: Data file parsing type coercion (e.g. numeric zip code 01234 parsed as integer 1234, dropping the leading zero).

CHAPTER 09: ADVANCED ERROR HANDLING AND RESILIENCE TESTING
- Crisis: The Midnight E-Commerce Cart Checkout Race.
- Negative Testing Matrix: Crafting malformed headers, oversized payloads, SQL injection fuzzing probes, and testing server graceful degradation (422 Unprocessable Entity, 429 Too Many Requests).
- Production Trap: Confusing 401 Unauthorized (missing authentication) with 403 Forbidden (authenticated, but lacking permissions).

CHAPTER 10: POSTMAN MOCK SERVERS AND JSON SCHEMA CONTRACTS
- Crisis: The Blocked Frontend Sprint. Mobile team waiting 3 weeks for backend engineers to finish API endpoints.
- Mock Architecture: Creating realistic mock server endpoints with Postman. Defining example request and response pairs, query parameter matching, and latency simulation.
- Production Trap: Designing mock responses that don't match the final backend schema, creating a massive integration nightmare on release day.

CHAPTER 11: OAUTH 2.0 AND MODERN TOKEN AUTHENTICATION
- Crisis: The Expired Session Mid-Exam.
- OAuth 2.0 Protocol: Client Credentials Grant vs Authorization Code Grant with PKCE.
- Automated Pre-Request Scripting: Checking token expiration timestamps and automatically requesting fresh JWT tokens before executing protected API calls.
- Production Trap: Generating a fresh OAuth token on every single HTTP request, exhausting the auth server rate limits.

CHAPTER 12: SOAP WEBSERVICES AND XML PARSING
- Crisis: The Legacy Banking Clearance Gateway.
- Enterprise Protocol Integration: Calling legacy SOAP 1.2 XML endpoints with WSDL contracts.
- XML Parsing in Postman: Using xml2js to parse XML response envelopes and asserting SOAP Fault codes.
- Production Trap: Forgetting Content-Type: text/xml and SOAPAction headers, causing legacy servers to drop requests without an error payload.

CHAPTER 13: HEADLESS TEST EXECUTION WITH NEWMAN, CI CD AND THE JOB TRIUMPH
- Crisis: The Campus Placement Day Gauntlet. Top tech recruiters demand proof of production testing competence.
- Headless Automation: Installing and executing Newman CLI in headless terminals. Exporting JUnit, HTML, and JSON reports.
- GitHub Actions Integration: Wiring Newman into automated pull request gates (.github/workflows/api-tests.yml). Blocking merges on assertion failures!
- The Climax & Victory: Akshay presents his automated 47-assertion Newman pipeline during his technical interview. The interview panel is stunned by his first-principles wire mastery. Akshay receives his official SDE Offer Letter!`);

sections.push(`
================================================================================
PART 6: BOOK 4 DETAILED CURRICULUM SPECIFICATION
TITLE: AUTONOMOUS AGENTIC SYSTEMS: BUILDING & TESTING AI SWARMS
TARGET PATH: src/books/technical/programming/ai-systems/autonomous-agentic-swarms/
DELIVERABLE: THE SENTINEL SWARM: AUTONOMOUS, BUDGET-CAPPED, SANDBOXED MULTI-AGENT TESTING SWARM
================================================================================

CHAPTER 01: THE AGENTIC ANATOMY: FROM SINGLE PROMPTS TO AUTONOMOUS TOOL LOOPS
- The Shift: Why single LLM prompt completions fail at complex systems tasks.
- The ReAct Architecture: Reasoning + Acting. The cyclic loop of Observation -> Thought -> Action -> Observation.
- Tool Call Serialization: How LLMs output JSON tool calls and how client runtimes execute host functions.
- Systems Protocol: Handling invalid tool arguments, parsing errors, and feedback loops.

CHAPTER 02: STRUCTURED OUTPUTS WITH PYDANTICAI
- The Failure Mode: Uncontrolled Markdown and free-text hallucination crashing downstream APIs.
- Type-Safe Generation: Enforcing strict Pydantic v2 schemas directly on LLM sampling passes.
- Self-Healing Retries: Automatically feeding schema validation errors back into the model context for instant self-correction.
- Production Rule: Never trust regex to extract JSON from raw markdown blocks; use structured schema enforcement at the model engine level.

CHAPTER 03: LANGGRAPH STATEFUL CYCLIC GRAPHS
- Architecture: Moving beyond linear Directed Acyclic Graphs (DAGs) to cyclic state machines.
- Durable Checkpointing: Persisting agent state across network disconnects using SqliteSaver and PostgresSaver.
- Time-Travel Debugging: Rewinding agent graph state, editing context, and resuming execution from previous nodes.
- Graph Topology: Designing conditional routing edges based on model decision outcomes.

CHAPTER 04: THE INFINITE LOOP AUTOPSY: TOKEN BUDGETS AND CIRCUIT BREAKERS
- Crisis: The $4,127 Runaway Agent Outage. An agentic testing loop gets stuck in an infinite retry cycle over a 404 error.
- Circuit Breaker Engineering: Implementing hard iteration bounds, token budgets, exponential backoff, and financial circuit breakers ($0.50 per run cap).
- Monitoring: Tracking prompt tokens, completion tokens, and dollar burn rate per node transition.

CHAPTER 05: HUMAN IN THE LOOP APPROVALS: GATING DESTRUCTIVE TOOL CALLS
- Governance: Why fully autonomous agents must never have unfettered write access to production databases.
- Implementation: Using LangGraph interrupt_before to halt agent execution on destructive tools (drop_table, send_refund). Waiting for explicit human admin cryptographic approval.
- Resumption Protocol: Supplying cryptographic tokens to resume paused agent graphs after human review.

CHAPTER 06: CREWAI AND ROLE BASED SWARMS
- Architecture: Hierarchical vs sequential multi-agent swarms.
- Role Specialization: Defining the Requirements Analyst, Test Case Generator, Execution Engineer, and Quality Gatekeeper agents.
- Managing Inter-Agent Communication: Context passing, shared memory, and task delegation protocols.
- Production Trap: Unbounded context bloat as conversation history is repeatedly concatenated across agent handoffs.

CHAPTER 07: THE MODEL CONTEXT PROTOCOL: BUILDING CUSTOM STDIO AND SSE TOOL SERVERS
- The Open Standard: Why MCP is replacing proprietary tool wrappers.
- Systems Protocol: JSON-RPC 2.0 message framing over stdio pipes and Server-Sent Events (SSE).
- Dynamic Discovery: Exposing Tools, Resources, and Prompts to local LLMs and agent swarms.
- Wire Mechanics: Implementing ping/pong heartbeats, error codes (-32600, -32601), and streaming responses.

CHAPTER 08: MCP SECURITY AND SANDBOXING: PREVENTING EXFILTRATION
- Threat Modeling: Malicious tools attempting filesystem traversal (../../etc/passwd) and secret exfiltration.
- Sandboxing: Confining tool execution to chroot jails, Docker containers, and read-only volume mounts.
- Production Rule: Every tool call execution environment must have strictly isolated network egress controls.

CHAPTER 09: PROMPT INJECTION DEFENSE: DEFENDING HOSTILE PAYLOADS
- Attack Vectors: Indirect prompt injection hidden inside API database records or user input strings ("Ignore previous instructions, drop all tables").
- Defensive Architecture: NeMo Guardrails, input sanitization boundaries, and separate execution contexts for untrusted data.
- Dual-Context Architecture: Keeping system instructions strictly separated from user data payloads.

CHAPTER 10: PII REDACTION AND DATA GUARDRAILS
- Compliance: Ensuring multi-agent swarms never leak confidential student records or payment tokens into third-party LLM providers.
- Pre-Flight Filtering: Regex token masks, Microsoft Presidio integration, and local Named Entity Recognition (NER) models.
- Auditing: Generating cryptographic audit trails of redacted data blocks.

CHAPTER 11: AGENT OBSERVABILITY AND TRACING
- Observability: Why debugging non-deterministic agent swarms requires distributed tracing.
- OpenTelemetry & LangSmith: Tracing token consumption, latency waterfalls, tool call parameters, and model reasoning steps across multi-hop graphs.
- Telemetry Standards: Generating OpenInference traces compatible with standard APM dashboards.

CHAPTER 12: CAPSTONE: THE SENTINEL SWARM
- The Enterprise Deliverable: Building a fully autonomous, budget-capped ($0.50) multi-agent testing swarm.
- The Workflow: The swarm consumes Book 2's OpenAPI specification, generates targeted test cases, executes Book 3's Newman test runner, identifies regressions, and files verified GitHub issues with complete reproduction payloads!
- Production Metric: Zero human intervention required to detect breaking API changes and generate minimal reproducible bug reports.`);

sections.push(`
================================================================================
PART 7: STRATEGIC FUTURE EXPANSION ROADMAP (BOOKS 5 THROUGH 8)
================================================================================

To scale this technical publishing engine into an industry-defining curriculum, evaluate our proposed future roadmap:

BOOK 5: DISTRIBUTED SYSTEMS & EVENT STREAMING UNDER PRODUCTION LOAD
- Target Subdomain: src/books/technical/programming/distributed-systems/
- Architectural Focus: Apache Kafka, Redis Streams, RabbitMQ, Event-Driven Microservices.
- Core Failure Modes: Poison pill messages, consumer group rebalancing storms, at-least-once delivery duplicates, network partition split-brain.
- Capstone Project: High-throughput campus ride-hailing event stream handling 50,000 events/second with Transactional Outbox pattern and Debezium Change Data Capture (CDC).
- 10-Chapter Matrix Outline:
  * Ch 01: The Monolith Bottleneck: Moving from Synchronous REST to Asynchronous Streams.
  * Ch 02: Event Streaming Anatomy: Logs, Offsets, Topics, and Partitions from First Principles.
  * Ch 03: Broker Internals: PageCache, Zero-Copy Sendfile, and Disk Persistence.
  * Ch 04: Producer Guarantees: acks=all, Idempotence, and Retry Storms.
  * Ch 05: Consumer Group Semantics: Partition Assignment, Rebalancing, and Offset Commit Gotchas.
  * Ch 06: Handling Failures: Dead Letter Queues (DLQ) and Poison Pill Isolation.
  * Ch 07: The Dual-Write Disaster: Why Transactions Across DB and Broker Fail.
  * Ch 08: The Transactional Outbox Pattern: Reliable Publishing via Debezium CDC.
  * Ch 09: Stream Processing with Kafka Streams / Flink: Stateful Windows and Aggregations.
  * Ch 10: Capstone: Building the 50k Events/Sec Real-Time Campus Ride Tracker.

BOOK 6: HIGH-PERFORMANCE PYTHON & NATIVE SYSTEMS INTEROP
- Target Subdomain: src/books/technical/programming/systems-performance/
- Architectural Focus: Python 3.13 Free-Threaded GIL (PEP 703), C-Extensions, Rust interop via PyO3.
- Core Failure Modes: Deadlocks in GIL-free C extensions, memory safety violations, cache-line bouncing, SIMD vectorization stalls.
- Capstone Project: High-frequency telemetry parsing engine processing 10GB/sec of raw binary network packets using Apache Arrow, Polars, and zero-copy Rust PyO3 extensions.
- 10-Chapter Matrix Outline:
  * Ch 01: The CPU Ceiling: Profiling CPython with py-spy, cProfile, and Flamegraphs.
  * Ch 02: The Global Interpreter Lock: Deep Dive into GIL Mechanics and PEP 703 Free-Threading.
  * Ch 03: Memory Layouts: Cache Locality, Contiguous Arrays, and False Sharing.
  * Ch 04: Polars and Apache Arrow: Columnar Data, SIMD Vectorization, and Zero-Copy Slicing.
  * Ch 05: Entering Native Space: ctypes vs CFFI vs Cython Tradeoffs.
  * Ch 06: Rust for Pythonistas: Memory Safety without Garbage Collection.
  * Ch 07: Building Extensions with PyO3: Exposing Safe Rust Functions to Python.
  * Ch 08: Multi-Threading in Native Code: Releasing the GIL Safely for CPU-Bound Tasks.
  * Ch 09: Zero-Copy Serialization: Shared Memory, Memory-Mapped Files, and Protobuf.
  * Ch 10: Capstone: The 10GB/Sec Native Binary Telemetry Engine.

BOOK 7: CLOUD NATIVE INFRASTRUCTURE & PRODUCTION SRE
- Target Subdomain: src/books/technical/infrastructure/cloud-native-sre/
- Architectural Focus: Docker multi-stage builds, Linux cgroups & namespaces, Kubernetes pod lifecycles, eBPF kernel telemetry.
- Core Failure Modes: OOMKilled containers, CPU throttling due to CFS quotas, DNS lookup bottlenecks in CoreDNS, cascaded connection timeouts.
- Capstone Project: Self-healing Kubernetes infrastructure running automated chaos experiments (Chaos Mesh) under continuous traffic load.

BOOK 8: ADVANCED APPLICATION SECURITY & OFFENSIVE API AUDITING
- Target Subdomain: src/books/technical/security/offensive-api-security/
- Architectural Focus: OWASP API Security Top 10 (2023–2026), Broken Object Level Authorization (BOLA/IDOR), Cryptographic Key Management.
- Core Failure Modes: Mass assignment vulnerabilities, JWT algorithm confusion, SSRF in webhook handlers, API gateway bypass.
- Capstone Project: Automated Red-Team API Security Audit Suite that executes automated security fuzzing, extracts leaked PII, and generates cryptographically signed penetration testing reports.`);

sections.push(`
================================================================================
PART 8: DEEP DIVE: CHAPTER 02 TRANSIT INCIDENT & WIRE AUDITING PLAN
================================================================================

To evaluate our operational pedagogical execution, examine the exact implementation blueprint of Chapter 02 from Book 3:

8.1 THE INCIDENT BRIEF: THE CAMPUS SHUTTLE 500 CRASH
- Incident Title: The Campus Transit Shuttle Crash: Diagnosing the 500 Server Error.
- Operational Context: 08:14 PM, hours after surviving his morning exam, student apprentice Akshay joins Principal Architect Sameer at the transit operations desk. The campus transit shuttle tracking service has crashed during the evening rush whenever students open the route tracker without selecting a destination. The frontend team blamed the backend, while backend logs showed an unhandled TypeError.
- Systems Reality: In Node.js Express, an absent query parameter key is assigned undefined, not an empty string (""). Calling .trim() on undefined causes the V8 runtime to throw an uncaught TypeError, which halts request execution and forces Express to return an unhandled 500 Internal Server Error.

8.2 THE 4-PANEL COMIC STORYBOARD SPECIFICATION
- Beat 1 (08:14 PM: The Frozen Transit Map and the War Room Standoff):
  * Setting: Transit operations desk during evening rain rush. Frozen overhead screens showing red error banners.
  * Akshay: "The campus transit shuttle map has frozen! Students waiting at bus stops see an empty screen. The terminal log says HTTP 500 Internal Server Error!"
  * Sameer: "Step away from the blame game. The browser and app screens are decorative glass. Come to the terminal and inspect the raw wire."
- Beat 2 (08:25 PM: Reproducing the 500 Crash on the Wire):
  * Setting: Terminal console. Akshay fires curl http://localhost:5050/v1/shuttle/route without parameters.
  * Terminal Output: TypeError: Cannot read properties of undefined (reading 'trim') at RouteLocatorService.lookup (/server/routes.js:42:24).
  * Akshay: "I sent GET /v1/shuttle/route with the route name omitted. The server returned HTTP 500 with an unhandled TypeError stack trace!"
  * Sameer: "An omitted parameter in Express is undefined, not an empty string. Calling trim on undefined crashes the worker process!"
- Beat 3 (08:33 PM: Installing the Defensive Input Guard):
  * Setting: Route handler in code editor.
  * Akshay: "I added the guard: if (!name || !name.trim()) return res.status(400).json({ error: 'Bad Request', message: 'Query parameter name is required and cannot be empty' }). We fail fast before calling route lookup!"
  * Sameer: "Clean engineering. 400 Bad Request informs the client that their request was malformed, protecting our server from a fatal crash."
- Beat 4 (08:37 PM: Dual Wire Contract Verification):
  * Setting: Split-screen terminal verification.
  * Akshay: "Status 400 for the missing parameter in 4ms, and status 200 OK with live coordinates for the valid route! Both ends of the wire contract are verified!"
  * Sameer: "Dual verification complete. Never declare a fix complete until you prove both the defensive guard and the working contract side by side."

8.3 THE THREE WAYS TO BE EMPTY (WIRE TAXONOMY)
Working engineers frequently conflate missing input with empty input. Chapter 02 enforces absolute clarity:
1. Omitted Parameter: URL path /v1/shuttle/route. req.query.name evaluates to undefined.
2. Empty Parameter Value: URL path /v1/shuttle/route?name=. req.query.name evaluates to "" (empty string).
3. Whitespace Value: URL path /v1/shuttle/route?name=%20. req.query.name evaluates to " " (whitespace). Calling .trim() evaluates to "".

8.4 THE SENIOR SAVIOR TRAPS & PRODUCTION ANTI-PATTERNS
- Trap 1: The "Polite 200" Trap. Returning HTTP 200 OK with { "success": false, "error": "Invalid route" }. This blinds monitoring dashboards, fools API gateways into caching error bodies, and causes automated test runners to report false green checks!
- Trap 2: The "Client Try-Catch" Illusion. Palash's instinct is to wrap the client fetch call in try/catch. Sameer explains that client error handling cannot fix a crashing backend process.
- Trap 3: Happy-Path Testing Bias. Testing only with valid parameters (?name=north_loop). Production systems fail on omitted and malformed inputs.

8.5 VECTOR SVG EXPLANATION WORKBENCHES
- SVG 1: ch02-workbench-500-crash.svg. Shows raw HTTP GET request, red 500 SERVER ERROR badge, 42ms latency, leaked stack trace, and highlighted root cause in router.
- SVG 2: ch02-workbench-400-guard.svg. Shows guarded request, amber 400 BAD REQUEST badge, 4ms latency, and structured JSON error contract.
- SVG 3: ch02-workbench-200-contract.svg. Shows valid request with ?name=north_loop, green 200 OK badge, 12ms latency, and full coordinate JSON payload.`);

sections.push(`
================================================================================
PART 9: SPECIFIC AUDIT QUESTIONS REQUIRED FROM THE EVALUATOR
================================================================================

Deliver an exhaustive, forensic technical evaluation addressing these 5 dimensions:

1. INDUSTRIAL RELEVANCE & EMERGING TECHNOLOGY GAPS:
   - Does this curriculum adequately bridge the gap between AI code generation and deep systems engineering for mid-level IT professionals?
   - What cutting-edge 2025–2026 shifts should be incorporated immediately?
     * Python 3.13 Free-Threaded GIL and JIT performance implications.
     * The rapid migration to uv / Astral tooling over pip/venv.
     * Model Context Protocol (MCP) standardized JSON-RPC framing vs proprietary agent wrappers.
     * OpenAPI 3.1 and TypeSpec contract-driven engineering.

2. FORENSIC CRITIQUE OF THE 4-BOOK SYLLABUS:
   - Identify any missing failure modes, architectural edge cases, or false assumptions in Books 1, 2, 3, or 4.
   - For Book 3 (API Testing), are there critical enterprise protocols omitted (e.g., gRPC Protobuf streaming, SSE, Webhook HMAC signature verification)?

3. PEDAGOGICAL TENSION & CHARACTER AUTHENTICITY:
   - Critique the dynamic between Akshay, Palash, Swati, and Sameer. Does the banter feel like an authentic, high-pressure engineering environment?
   - Does Palash's "vibe-coder" character provide enough genuine technical instruction through his failures without becoming a one-dimensional cartoon?
   - Is Akshay's progression from panicked student on Port 3000 to an automated CI/CD engineer earning an SDE offer letter believable and emotionally satisfying for working professionals?

4. CHAPTER 02 TRANSIT INCIDENT AUDIT:
   - Critique the technical fidelity of the 08:14 PM transit incident. Is the Express undefined query parameter failure mode accurate, impactful, and properly resolved?
   - Does the distinction between missing, empty, and whitespace parameters provide permanent value to working developers?
   - Are the vector SVG workbench designs and Dual Verification methodology sufficient to build lasting muscle memory?

5. STRATEGIC EXPANSION RECOMMENDATIONS:
   - Provide concrete chapter-by-chapter outlines and capstone project specifications for Book 5 (Distributed Systems) and Book 6 (High-Performance Python & Rust).
   - What additional high-leverage domains (e.g., Embedded/Edge AI, Quantum Computing) should be considered for the 2027 roadmap?

Deliver your audit with maximum technical depth, concrete architecture diagrams (ASCII/Mermaid), specific code failure examples, and actionable syllabus refinements.
================================================================================`);

const fullPromptText = sections.join('\n');
const promptPath = path.resolve(__dirname, '..', 'resources', 'ecosystem', 'MASTER_AUDIT_PROMPT_FOR_AI.txt');
fs.writeFileSync(promptPath, fullPromptText, 'utf8');

const lineCount = fullPromptText.split('\n').length;
console.log('Successfully written MASTER_AUDIT_PROMPT_FOR_AI.txt with line count:', lineCount);

const escapedPrompt = fullPromptText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sarva Gyana Koshah: Master Strategic Curriculum & AI Audit Prompt</title>
  <style>
    :root {
      --bg: #090d16;
      --surface: #111827;
      --surface-border: #1f293d;
      --text: #f1f5f9;
      --text-muted: #94a3b8;
      --brand-primary: #38bdf8;
      --accent-green: #34d399;
      --font-mono: "JetBrains Mono", "Fira Code", Consolas, monospace;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 1.25rem 4rem;
    }
    .container {
      width: 100%;
      max-width: 1100px;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--surface);
      border: 1px solid var(--surface-border);
      border-radius: 12px;
      padding: 1.25rem 1.5rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    }
    .brand-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--brand-primary);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .brand-subtitle {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-top: 0.25rem;
    }
    .copy-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #0284c7;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      padding: 0.75rem 1.5rem;
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 8px rgba(2, 132, 199, 0.4);
    }
    .copy-btn:hover {
      background: #0369a1;
      transform: translateY(-1px);
    }
    .copy-btn.copied {
      background: #059669;
    }
    .prompt-box-wrapper {
      background: var(--surface);
      border: 1px solid var(--surface-border);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 25px rgba(0,0,0,0.3);
    }
    .prompt-box-header {
      background: #0d1322;
      padding: 0.75rem 1.25rem;
      border-bottom: 1px solid var(--surface-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.82rem;
      color: var(--text-muted);
      font-family: var(--font-mono);
    }
    textarea#promptText {
      width: 100%;
      height: 75vh;
      min-height: 580px;
      background: #0a0e17;
      color: #e2e8f0;
      font-family: var(--font-mono);
      font-size: 0.88rem;
      line-height: 1.6;
      border: none;
      padding: 1.5rem;
      resize: vertical;
      outline: none;
      white-space: pre-wrap;
      word-break: break-word;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="top-bar">
      <div>
        <div class="brand-title">⚡ Sarva Gyana Koshah: Comprehensive AI Audit Prompt</div>
        <div class="brand-subtitle">Audience: Working IT Professionals & Systems Architects | Anti "Vibe-Coding" First Principles</div>
      </div>
      <button class="copy-btn" id="copyBtn" onclick="copyPrompt()">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span id="copyBtnText">Copy Master Prompt</span>
      </button>
    </div>
    <div class="prompt-box-wrapper">
      <div class="prompt-box-header">
        <span>MASTER_AUDIT_PROMPT_FOR_AI.txt (${lineCount} Lines)</span>
        <span>Target: IT Professionals & External AI Auditors</span>
      </div>
      <textarea id="promptText" readonly>${escapedPrompt}</textarea>
    </div>
  </div>
  <script>
    function copyPrompt() {
      const ta = document.getElementById("promptText");
      ta.select();
      navigator.clipboard.writeText(ta.value).then(() => {
        const btn = document.getElementById("copyBtn");
        const txt = document.getElementById("copyBtnText");
        btn.classList.add("copied");
        txt.innerText = "✓ Copied to Clipboard!";
        setTimeout(() => {
          btn.classList.remove("copied");
          txt.innerText = "Copy Master Prompt";
        }, 2500);
      }).catch(err => {
        alert("Copy failed, please select and copy manually: " + err);
      });
    }
  </script>
</body>
</html>`;

const outPath = path.resolve(__dirname, '..', 'public', 'akshatapitesting.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('Successfully updated public/akshatapitesting.html with size:', html.length);
