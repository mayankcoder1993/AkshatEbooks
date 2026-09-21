# Shared Agent Project: End-to-End Series Plan

Status: approved architecture and series direction

Verified: 2026-09-21

## Product vision

Build one assistant product progressively across several books.

The first version is a deterministic local assistant written with ordinary Python. Later versions add an LLM, retrieval, tools, LangGraph workflows, a REST API, a Django product portal and deployment.

Each layer depends on the earlier layer. The reader does not throw away the Python project when a GUI or website is introduced.

## Corrected architecture

Django does not directly “host the agent” by itself. A deployment platform runs application processes. In the recommended architecture:

```text
Desktop GUI ───────────────┐
                           ├── Agent application service ── Agent core
Command-line interface ───┘

Browser ── Django portal ── private HTTP call ── FastAPI agent service
                                                   │
                                                   ├── LangGraph workflow
                                                   ├── model provider
                                                   ├── tools
                                                   ├── retrieval store
                                                   └── checkpoint state
```

Django owns the product-facing web responsibilities:

- Accounts and authentication
- Forms and HTML pages
- Database-backed product records
- Administrative interface
- Conversation listing and user-facing history

FastAPI owns the agent-service responsibilities:

- Validated request and response schemas
- Agent invocation
- Session or thread identifiers
- Streaming responses
- Tool and workflow errors
- Health endpoints
- Agent-specific observability boundaries

The browser should normally send requests to Django. Django can call FastAPI over a private service route. This avoids exposing model credentials and reduces browser-facing cross-origin complexity.

## Important interface decision

The desktop GUI will not be “converted” into HTML.

Instead, both interfaces call the same application service:

```text
Tkinter button -> AgentService.respond(...)
Django view -> FastAPI endpoint -> AgentService.respond(...)
```

The reusable part is the agent and application logic. Tkinter widgets and HTML elements are different adapters.

## Why the command line comes first

Before the GUI, the project should have a command-line interface.

Reasons:

- It is the fastest way to prove the core behavior.
- It keeps model, tool and state bugs separate from interface bugs.
- It is easy to automate in tests.
- It works in development and deployment environments.
- The GUI and API can reuse the same service after the command line works.

The interface progression is therefore:

1. Automated tests and fake model
2. Command-line interface
3. Optional desktop GUI
4. REST API
5. Django and HTML interface
6. Production deployment

## Book 1: Python Foundations

### Product milestone

Build a deterministic study assistant that runs locally without an LLM or API key.

It can:

- Read a user command.
- Normalize and classify simple text.
- Store notes or tasks.
- Look up predefined help topics.
- Track a session in memory.
- Save and load local data.
- Report clear errors.
- Run through a command-line interface.
- Pass automated tests.

This is an assistant architecture seed, not a fake claim of artificial intelligence.

### Python topics covered

- Syntax and execution
- Values, variables and operators
- Strings and collections
- Decisions and loops
- Functions and scope
- Files and JSON where useful
- Classes and objects
- Modules and packages
- Exceptions
- Logging at an introductory level
- Tests
- Iterators and generator fundamentals
- Decorator literacy
- Type-hint fundamentals
- Virtual environments and dependencies

### Decorator depth

Readers should:

- Recognize `@decorator` syntax.
- Understand that a decorator receives and returns a callable.
- Write one transparent timing or logging decorator.
- Understand why later tools register routes and tools with decorators.

Readers do not need advanced decorator factories, descriptors or metaprogramming in Book 1.

### Generator depth

Readers should:

- Understand iterable, iterator and generator at practical depth.
- Use `yield` to produce values gradually.
- Compare a generated sequence with a fully built list.
- Process a file or stream one item at a time.

Readers do not need `send()`, `throw()`, asynchronous generators or coroutine internals in Book 1.

### Book 1 completion gate

- No external AI key is required.
- Core behavior is separated from input and output adapters.
- Fake or deterministic responses make tests repeatable.
- The CLI works.
- Local persistence works.
- Error paths are tested.
- The code is ready for an LLM adapter in Book 2.

## Book 2: LLM Application Foundations

### Product milestone

Replace the deterministic response adapter with configurable model adapters and add grounded document question answering.

### Part 1: safe model integration

- What an LLM call is and is not
- Provider abstraction
- OpenAI-compatible providers
- Local Ollama option
- Environment variables
- Secret handling
- Timeouts, retries and rate limits
- Token and cost awareness
- Deterministic test doubles
- Basic prompt injection awareness

### Part 2: Pydantic and structured data

- Type hints as executable metadata in frameworks
- Pydantic models
- Validation
- Optional and nested fields
- Serialization
- Structured model output
- Validation failures

### Part 3: LangChain foundations

- Messages and roles
- Prompt templates
- Chat models
- Output parsers
- Runnables and LCEL
- Invoke, batch and stream
- Conversation history
- Middleware at introductory depth
- Logging and tracing boundaries

### Part 4: document and retrieval foundations

- Documents and metadata
- Loading text, HTML, PDF and JSON sources
- Chunking goals
- Character and recursive splitters
- Embeddings
- Similarity search
- FAISS and Chroma as compared examples
- Retriever interface
- Grounded answers with source citations
- Retrieval failure and “I do not know” behavior

### Data-tool routing

- NumPy receives only the array concepts required by embeddings or numerical examples.
- pandas receives only the table and CSV concepts required by ingestion or evaluation.
- They do not become unrelated data-science surveys.

### Book 2 project

A local research assistant that:

- Accepts a question.
- Retrieves from a small approved document set.
- Produces a structured answer.
- Includes source references.
- Stores conversation history.
- Supports a fake model for tests.
- Supports at least one real provider through environment configuration.

## Book 3: Agentic Workflows with LangGraph

### Product milestone

Turn the LLM application into a controlled agent workflow with tools, state, memory, retrieval and human approval.

### Foundations

- AI agent versus agentic workflow
- Deterministic workflow versus model-directed choice
- Tools and tool schemas
- Tool decorators
- Tool errors
- Idempotency and side effects
- State design

### LangGraph

- State schema
- Nodes
- Edges
- Conditional routing
- Entry and finish behavior
- Checkpointing
- Thread identifiers
- Memory
- Subgraphs
- Streaming events
- Retry and fallback paths

### Human control and safety

- Human in the loop
- Approval before side effects
- Interrupt and resume
- Guardrails
- Input and output validation
- Prompt injection boundaries
- Tool allowlists
- Least privilege
- Budget and iteration limits
- Refusal and escalation

### Retrieval

- RAG inside a graph
- Retrieval grading
- Query rewriting
- Corrective retrieval
- Vectorless retrieval as a compared approach
- Citation preservation

### Observability and evaluation

- Structured logs
- Trace concepts
- LangSmith as an optional hosted implementation
- Offline test traces
- Evaluation datasets
- Success criteria
- Regression checks
- Latency and cost tracking

### Advanced workflows

- Parallel branches
- Supervisor and worker patterns
- Multi-agent collaboration
- Deep-agent concepts
- When not to use multiple agents
- MCP concepts and trust boundaries
- LLM gateways and provider routing

### Projects routed from the course

- Chatbot with web search
- News summarizer
- Blog-generation workflow
- Role-play workflow

These can be labs around one shared architecture rather than four unrelated codebases.

### Book 3 project

A research-and-action assistant that:

- Uses approved tools.
- Retrieves evidence.
- Maintains state.
- Pauses for human approval before a side effect.
- Produces cited structured output.
- Records a trace.
- Passes workflow and safety tests.

## Book 4: Interfaces, REST API, Django and Deployment

### Product milestone

Turn the local agent into a deployed multi-user product.

## Part 1: application boundary

- Ports and adapters at beginner-friendly depth
- `AgentService` interface
- Provider adapter
- Retrieval adapter
- Persistence adapter
- Fake adapters for tests
- Configuration and dependency wiring

## Part 2: desktop GUI

Use Tkinter as an optional interface lab.

Teach:

- Window and widgets
- Text input and output
- Button events
- Event-loop behavior
- Keeping slow agent work off the UI thread
- Progress and cancellation
- Displaying errors safely
- Calling the application service without placing agent logic in widget callbacks

The GUI is useful for desktop-interface experience. It is not a prerequisite for the web product.

## Part 3: FastAPI REST service

Teach:

- HTTP and REST basics
- Request and response
- Status codes
- JSON
- Pydantic schemas
- Route decorators
- Dependency injection
- Error responses
- OpenAPI documentation
- Versioned endpoints
- Health and readiness endpoints
- Conversation and message resources
- Server-sent event or streaming-response concepts
- Authentication boundary
- Rate limiting and quotas
- API tests

Suggested initial contract:

```text
POST /v1/conversations
POST /v1/conversations/{conversation_id}/messages
GET  /v1/conversations/{conversation_id}
GET  /health
GET  /ready
```

The API must never accept or return provider secrets.

## Part 4: Django product portal

Teach:

- Django project and apps
- URLs and views
- Templates and forms
- ORM and migrations
- User authentication
- Sessions
- Admin interface
- CSRF protection
- Server-side call from Django to the private FastAPI service
- Conversation list and detail pages
- User ownership checks
- Friendly validation and error pages

Django stores product records such as users, permissions and conversation metadata. Agent workflow state ownership must be defined once to avoid conflicting sources of truth.

## Part 5: HTML, CSS and browser behavior

Teach enough web fundamentals to build the input page:

- Semantic form markup
- Accessible labels
- Responsive layout
- Progressive enhancement
- Small JavaScript enhancement for asynchronous submission or streaming
- Loading, error and empty states
- Safe text rendering

Do not put model-provider API keys in HTML, JavaScript, local storage or generated offline files.

## Part 6: deployment

Teach:

- Development versus production servers
- Environment configuration
- Secret manager or protected environment variables
- Containers at practical depth
- Database and migrations
- Separate Django and FastAPI processes
- Private service networking
- Reverse proxy or managed routing
- HTTPS
- Static assets
- CORS only where necessary
- CSRF for Django forms
- Logging and monitoring
- Backups
- Health checks
- Timeouts and graceful failure
- Cost and abuse controls
- Deployment rollback

### Book 4 completion gate

- CLI still works.
- Desktop GUI still works if the optional lab was completed.
- REST API is documented and tested.
- Django portal uses accounts and ownership checks.
- Browser code contains no provider secret.
- Agent service is not publicly exposed unless intended and protected.
- Deployment has health checks and logs.
- Safety and evaluation tests run before release.

## Topic routing from the agentic AI course

| Course topic | Series placement |
| --- | --- |
| Python prerequisites | Book 1 |
| Decorators and generators | Book 1 practical bridge |
| NumPy and pandas | Book 2 targeted ingestion and evaluation labs |
| Logging | Books 1 through 4 with increasing depth |
| Pydantic | Book 2, reused in Book 4 |
| OpenAI and Ollama | Book 2 |
| LangChain and LCEL | Book 2 |
| Document loaders and splitters | Book 2 |
| Embeddings and vector stores | Book 2 |
| Conversation history | Book 2 |
| Agent versus agentic AI | Book 3 |
| LangGraph foundations and components | Book 3 |
| LangSmith | Book 3 as optional hosted observability |
| Workflows and human approval | Book 3 |
| RAG and vectorless RAG | Book 3 |
| Guardrails and gateways | Book 3 |
| Web search, news and blog projects | Book 3 labs |
| MCP | Book 3 |
| Claude Code | Optional versioned tooling lab, not a core language dependency |
| Deep agents and role play | Book 3 advanced labs |
| REST deployment with FastAPI | Book 4 |
| Desktop GUI | Book 4 optional lab |
| Django and HTML product | Book 4 project |
| Production deployment | Book 4 |

## Testing strategy across the series

### Unit tests

- Pure transformations
- State updates
- Validators
- Tool input and output

### Integration tests

- Model adapter with fake transport
- Retrieval against a fixed small corpus
- API routes
- Django-to-FastAPI calls
- Persistence adapters

### Agent evaluations

- Fixed evaluation dataset
- Expected tool selection
- Citation presence
- Refusal and safety cases
- Maximum steps
- Cost and latency limits

### End-to-end tests

- Browser or Django form to final response
- Authentication and ownership
- Streaming interruption
- Provider failure
- Retrieval failure
- Human approval flow

Live paid-provider tests remain optional and separate from the default test suite.

## Security rules

- No API keys in source code.
- No API keys in client-side code.
- No API keys in generated HTML or DOCX.
- No authoritative project data in browser local storage.
- Validate all external input.
- Escape or safely render model output.
- Apply time, step and cost limits.
- Require approval for consequential tools.
- Log identifiers and outcomes without logging unnecessary private content.
- Separate users and enforce resource ownership.
- Treat retrieved documents and tool output as untrusted input.

## Scope rule

Integrating every course topic means each topic receives an explicit destination and appropriate depth. It does not mean forcing all 45 hours of agentic AI material into the Python beginner book.

The shared product supplies continuity. Separate books protect prerequisite order, reader workload, version maintenance and publication quality.
