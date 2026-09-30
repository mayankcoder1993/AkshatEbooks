# RESEARCH PROMPTS & BENCHMARKS: Zero to Agentic API Testing

This file coordinates autonomous research tasks across external literature, real-world post-mortems, RFC specifications, and competitive API testing curricula.

---

## TASK-01: Cross-Tech-Stack Communication & The Fallacy of Direct DB Access
- **Target Output File**: rtifacts/research/01-cross-tech-stack-communication.md
- **Assigned Persona**: Systems Architect & Research Agent
- **Core Research Questions**:
  1. Why is direct database connection from client devices (browsers, mobile apps) an anti-pattern? (Connection pool exhaustion, secret leakage, SQL injection, binary protocol mismatch).
  2. How do heterogeneous stacks (Swift/Kotlin/React) communicate with backends (Java/Go/Python/Node.js) via HTTP + JSON?
  3. Compile top 5 most common developer misconceptions regarding " What is an API?\ from StackOverflow and Reddit r/webdev.
- **Expected Deliverables**:
 - Comparative latency benchmarks (TCP socket vs HTTP/2 vs In-memory).
 - Concrete case study: A real production security leak where a frontend bundle exposed PostgreSQL credentials.

---

## TASK-02: Express Middleware Internals & TCP Stream Mechanics
- **Target Output File**: rtifacts/research/02-express-stream-mechanics.md
- **Assigned Persona**: Node.js Core Researcher
- **Core Research Questions**:
 1. What happens at the OS kernel level when an HTTP POST packet arrives at port 3000?
 2. Exactly how does express.json() accumulate TCP chunks (eq.on(\data\) and eq.on(\end\))?
 3. What are the memory and denial-of-service risks of parsing unbounded JSON bodies? (PayloadTooLargeError / 413).

---

## TASK-03: Competitive Analysis of Top API Testing Literature
- **Target Output File**: rtifacts/research/03-competitive-api-literature.md
- **Assigned Persona**: Pedagogical Lead
- **Sources to Analyze**:
 - *Testing Web APIs* (Mark Winteringham)
 - *API Testing and Development with Postman* (Dave Westerveld)
 - *RESTful Web APIs* (Leonard Richardson & Mike Amundsen)
- **Objective**: Identify what existing books explain poorly (most jump into GUI tools without first explaining the wire packet, status code contracts, or the \Red before Green\ principle) and ensure our comic graphic novel covers these gaps completely.
