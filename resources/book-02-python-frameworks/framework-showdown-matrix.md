# Book 2: Modern Python Backend Frameworks: FastAPI, Django & Flask Under Production Fire

**Subtitle:** *The Framework Showdown — Competitive Build, Vibe-Code Audit, and Production Hardening*  
**Path:** `src/books/technical/programming/`  
**Core Cast:** Sakshi (Lead), Sameer (Architect), Akshay (New Joiner), Palash (Vibe-Coder Peer), Anurag (DB), Devansh (Sec), Aman (Full-Stack), Varun (SRE).

---

## ⚔️ The Framework Showdown Concept

### 1. The Specification (Same App for 3 Teams)
A production-grade **Student Task & Knowledge API** featuring:
- User registration, password hashing (`pwd_context`), and JWT authentication.
- Task CRUD with due dates, priority tags, and category filtering.
- Real-time WebSocket notifications when assignments are graded or tasks updated.
- File upload for study notes and submission PDFs.
- Search endpoint with query filtering.

### 2. The Three Teams & Vibe-Coding Prompts
- **Team Async (FastAPI + Cursor/Claude):** Prompts AI for blazing speed and async endpoints.
  - *The Trap:* Uses synchronous `requests.get` inside `async def`, blocking the single-threaded Uvicorn event loop and spiking latency to 14 seconds at 50 users. Missing WebSocket heartbeats leave 14,000 dead connections in `CLOSE_WAIT`.
- **Team Battery (Django + Copilot):** Prompts AI for full-stack admin and REST framework.
  - *The Trap:* Deploys with `DEBUG=True`, `ALLOWED_HOSTS=['*']`, SQLite in production (concurrent write locking freezes during exam registration), and loose CSRF exemptions on API views.
- **Team Micro (Flask + ChatGPT):** Prompts AI for a quick, minimal API.
  - *The Trap:* Runs the single-threaded Werkzeug dev server in production, lacks rate limiting on `/login` (brute-forceable in 30 seconds), and has SQL injection vulnerabilities in string-formatted search queries.

---

## 📑 12-Chapter Syllabus Architecture (4 Acts)

### Act 1: The Socket and the Loop (From Bare Sockets to ASGI)
- **Ch 01: From Terminal to TCP:** What happens at the socket level when a browser requests `localhost:8000`. DNS, TCP 3-way handshake, socket buffers, HTTP request framing.
- **Ch 02: The Event Loop Demystified:** Single-threaded asynchronous I/O, `asyncio`, epoll selectors, coroutines, and why one blocking call halts the entire server.
- **Ch 03: WSGI vs ASGI:** Historical sync web gateways vs modern async streaming specifications (Gunicorn vs Uvicorn).

### Act 2: The Framework Showdown & The 7-Layer Audit
- **Ch 04: The Hackathon Build:** Three teams vibe-code the Student Task API using FastAPI, Django, and Flask. Viewing the raw, flawed AI-generated codebases.
- **Ch 05: The 7-Layer Audit: FastAPI:** Uncovering event-loop blocking, unrestricted CORS, and missing schema validation boundaries.
- **Ch 06: The 7-Layer Audit: Django & Flask:** Exposing `DEBUG=True` credential leaks, SQLite write locks, missing rate limits, and raw SQL queries.

### Act 3: Data Persistence, Connection Pools & Schema Integrity
- **Ch 07: Pydantic v2 as a Security Firewall:** Strict validation (`strict=True`, `extra="forbid"`), custom field validators, zero-cost error serialization.
- **Ch 08: Relational Persistence with SQLAlchemy 2.0 Async:** Engine creation, async sessions, avoiding the `FATAL: remaining connection slots reserved` pool exhaustion.
- **Ch 09: Database Migrations with Alembic:** Schema versioning, tracking table alterations, preventing unindexed table lockups.

### Act 4: Production Hardening, Auth, WebSockets & Containers
- **Ch 10: Enterprise Authentication & RBAC:** OAuth2 Password Bearer flow, JWT signature verification, token rotation, preventing `alg:none` vulnerabilities.
- **Ch 11: Real-Time WebSockets & Connection Lifecycles:** Bidirectional communication, heartbeat ping-pong, handling client disconnects, preventing memory leaks.
- **Ch 12: Production Containerization with Docker & Nginx:** Multi-stage non-root Dockerfiles, reverse proxy TLS termination, health probes (`/healthz`), load testing with Locust to prove sub-50ms p99 latency.
