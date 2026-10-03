# Agentic AI Bootcamp Syllabus Audit

Status: source map for the shared agent project and later books

Verified: 2026-09-21

Course: Complete Agentic AI Bootcamp With LangGraph and LangChain, Krish Naik and KRISHAI Technologies

Public course page: https://www.udemy.com/course/complete-agentic-ai-bootcamp-with-langgraph-and-langchain/

## Access note

The supplied TCS Global Udemy link redirects to the private Ultimatix employee login. The private lecture page cannot be inspected without the user’s corporate session. No credentials are needed or requested.

The public Udemy page exposes the current syllabus. It reports 27 sections, 183 lectures and about 45 hours and 40 minutes of content, last updated June 2026.

## Course scope

The public syllabus includes:

1. Course introduction
2. Anaconda, VS Code, conda and uv setup
3. Extensive Python prerequisites
4. Pydantic
5. LangChain foundations
6. OpenAI and Ollama
7. LCEL applications
8. Agents with conversation history
9. Agents versus agentic AI
10. Updated LangChain v1 content
11. LangGraph foundations
12. LangGraph components
13. LangSmith debugging
14. LangGraph workflows
15. Human in the loop
16. RAG with LangGraph
17. Vectorless RAG
18. Guardrails
19. LLM gateways
20. End-to-end LangGraph projects
21. Chatbot with web search
22. AI news summarizer
23. Blog-generation agent
24. Model Context Protocol
25. Claude Code
26. Deep agents with LangChain
27. Role-play material

## Python prerequisites inside the course

The course’s Python prerequisite section is itself about 11 hours and 40 minutes. It includes:

- Syntax, variables and built-in data types
- Arithmetic, comparison and logical operators
- Conditions and loops
- Lists and comprehensions
- Sets, dictionaries and tuples
- Functions, lambda, `map()` and `filter()`
- Modules and packages
- Standard-library tools
- Files and paths
- Exceptions and custom exceptions
- Classes and objects
- Inheritance, polymorphism, encapsulation and abstraction
- Magic methods and operator overloading
- Iterators and generators
- Closures and decorators
- NumPy and pandas
- JSON, CSV, dates, regular expressions and logging

This confirms that decorator and generator literacy are practical prerequisites for the agent course. It also confirms that the first Python book should prepare readers for these concepts without copying an 11-hour prerequisite section lecture by lecture.

## Agent and data topics

The public syllabus includes:

- Pydantic models, optional fields, lists and nested validation
- Prompt templates and message types
- Output parsers and structured output
- Document loaders
- Character, recursive, HTML and JSON splitting
- OpenAI, Ollama and Hugging Face embeddings
- FAISS and Chroma vector stores
- Retrievers and retrieval chains
- Conversation and session history
- Tools and tool calling
- Streaming and batching
- Middleware and summarization
- LangGraph state, nodes, edges and workflows
- Checkpointing and memory
- Human approval points
- LangSmith tracing and debugging
- Retrieval-augmented generation
- Vectorless retrieval approaches
- Guardrails and LLM gateways
- Single-agent and multi-agent projects
- MCP
- Deep agents

## Deployment and API evidence

The syllabus includes deploying LangChain runnables and chains as REST APIs through LangServe and FastAPI. This supports using FastAPI as the dedicated agent-service API in the shared project.

Django is not a major part of the public agent-course syllabus. It is an additional product-development learning goal chosen for this series.

Desktop GUI development is also not a major part of the public agent-course syllabus. A desktop GUI should therefore be an intentional interface exercise, not a claimed course requirement.

## Source-quality cautions

- The course recommends several environment paths, including Anaconda, conda and uv. The publishing project must select one primary supported path instead of making learners install all of them.
- Framework APIs change quickly. Every LangChain, LangGraph, Pydantic, FastAPI and provider example needs a pinned version and verification date.
- Provider-specific API keys must remain server-side or in environment configuration. They must never enter browser code, offline HTML, book files or repository content.
- Course projects and examples are source material, not permission to reproduce proprietary wording or code.
- “Agentic” claims require observable behavior, tools, state and control flow. A single model call should not be mislabeled as an autonomous agent.
- LLM output is nondeterministic. Tests need fakes, recorded fixtures or controlled boundaries rather than depending on a paid live model for every run.
- LangSmith and hosted gateways are optional external services. The educational architecture must still be understandable without them.

## Routing decision

The syllabus is too large and too volatile to merge into the Python beginner book. It will be integrated through one continuing project across a series:

- Book 1: Python Foundations and a deterministic assistant core
- Book 2: LLM Application Foundations with Pydantic and LangChain
- Book 3: Agentic Workflows with LangGraph, RAG, tools, memory and safety
- Book 4: Interfaces, REST API, Django product layer and deployment

Every course topic will be routed to one of those books, an optional lab or a preserved advanced-topic ledger. “Integrate all topics” means no topic is silently lost. It does not mean every topic receives equal space or must appear in Book 1.
