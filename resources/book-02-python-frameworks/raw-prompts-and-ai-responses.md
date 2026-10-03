# Book 2: Complete Raw AI Response Log (Full Uncut Text)

This file stores the complete, 100% unabridged output received from external AI deliberation for **Book 2: Modern Python Backend Frameworks**.

---

## Complete External AI Deliberation 1

```markdown
# MASTER PUBLISHING BLUEPRINT: BOOK 2 SYLLABUS MATRIX AND NARRATIVE ARCHITECTURE

## TRACK: PYTHON FRAMEWORKS

**Book Title:** *Modern Python Backend Frameworks: FastAPI, Django and Flask Under Production Fire*
**Book Subtitle:** *From Bare TCP Sockets to Hardened Web Services: The Framework Showdown and the Seven Layer Vibe Code Audit*
**Target Repository Path:** `src/books/technical/programming/python-backend-frameworks/`
**Deliverable Project:** The Student Task and Knowledge API, built three times (FastAPI, Django, Flask) by vibe coding teams, audited through the Seven Layer Protocol, then hardened into one production grade FastAPI service with async SQLAlchemy 2.0, Alembic migrations, JWT RBAC, WebSocket notifications, k6 load profiles, and a Docker plus Nginx deployment that survives a database kill.

---

## 1. THE SEVEN LAYER VIBE CODE AUDIT PROTOCOL (The Spine of the Book)

Every AI generated codebase in this book passes through the same seven interrogations. Readers memorize this ladder, not framework trivia.

┌──────────────────────────────────────────────────────────────────────────┐
│          THE SEVEN LAYER VIBE CODE AUDIT PROTOCOL                        │
├──────────────────────────────────────────────────────────────────────────┤
│  L1  WIRE:         What bytes leave the socket? Headers, status, body    │
│  L2  LOOP:         Does any call block the event loop or a worker thread?│
│  L3  SCHEMA:       Is every inbound byte validated before it touches RAM?│
│  L4  POOL:         Who owns each DB connection and when is it returned?  │
│  L5  STATE:        Where does mutable state live? Process, thread, task? │
│  L6  SECRETS:      What leaks under DEBUG, in logs, in git, in tokens?   │
│  L7  LIFECYCLE:    What happens on SIGTERM, client disconnect, DB death? │
└──────────────────────────────────────────────────────────────────────────┘

---

## 2. THE 12 CHAPTER ARCHITECTURAL PROGRESSION MAP

┌──────────────────────────────────────────────────────────────────────────┐
│  ACT 1: THE SOCKET AND THE LOOP                                          │
│   Ch 01  The 2:00 AM Blackhole        --> async def + requests.get       │
│   Ch 02  Raw TCP to HTTP by Hand      --> socket(), listen(), CRLF, parse│
│   Ch 03  ASGI, Coroutines and Threads --> await suspension, threadpool   │
├──────────────────────────────────────────────────────────────────────────┤
│  ACT 2: THE FRAMEWORK SHOWDOWN                                           │
│   Ch 04  Three Teams, One Spec        --> routing, verbs, status codes   │
│   Ch 05  Pydantic and Request Bodies  --> coercion, extra=forbid, 422    │
│   Ch 06  The Seven Layer Audit Live   --> DEBUG=True, Werkzeug, sqlite   │
├──────────────────────────────────────────────────────────────────────────┤
│  ACT 3: PERSISTENCE, POOLS AND SCHEMA INTEGRITY                          │
│   Ch 07  SQLAlchemy 2.0 Async Engine  --> session per request, asyncpg   │
│   Ch 08  Pool Starvation Forensics    --> pool_size, overflow, leaks     │
│   Ch 09  Alembic and Zero Downtime    --> autogenerate traps, locks      │
├──────────────────────────────────────────────────────────────────────────┤
│  ACT 4: PRODUCTION HARDENING                                             │
│   Ch 10  OAuth2, JWT and RBAC         --> alg none, secret rotation      │
│   Ch 11  WebSockets and CLOSE_WAIT    --> ping/pong, idle timeouts       │
│   Ch 12  Docker, Nginx, Graceful Exit --> PID 1, SIGTERM, k6 sign off    │
└──────────────────────────────────────────────────────────────────────────┘

---

## ACT 1: THE SOCKET AND THE LOOP (From Bare TCP Sockets to ASGI and Event Loops)

### Chapter 01: The 2:00 AM Blackhole: When One Blocking Call Freezes Twelve Thousand Users

- Subtitle: Synchronous I/O Inside async def, Single Threaded Event Loops, and the p99 Cliff
- Core Mechanical Gotcha:
  requests.get() inside async def never yields. The ASGI event loop is one OS thread running a selector (epoll on Linux). While the thread sits inside a blocking C level recv() waiting for a slow upstream, no other coroutine can be resumed. The server still accepts TCP connections (the kernel backlog does that for free), so health checks look alive while every real request queues. A sync def endpoint in FastAPI, by contrast, is pushed to the AnyIO worker threadpool (default capacity 40), which is why Palash's "fix" of removing async appears to work until 41 slow calls arrive.
- The Narrative Crisis:
  Akshay's first day. Sakshi hands him a laptop and a pager. At 02:00 AM the Student Portal's /import-contact endpoint, vibe coded by Palash the previous week, calls a third party CRM API with requests.get() and no timeout. The CRM slows to 9 second responses. Login, dashboard, and the exam timetable endpoints all stop responding. Grafana shows p99 at 14,200ms with 0% error rate: the deadliest dashboard shape, a server that is "up" and useless. Varun's pager, Sakshi's pager, and now Akshay's pager all fire within forty seconds.
- Dopamine Milestone:
  Sakshi replaces one line with await client.get(...) using httpx.AsyncClient(timeout=5.0). Akshay reruns the k6 script with 500 virtual users: p99 falls from 14,200ms to 45ms on the same hardware, no extra workers, no extra pods. He sees for the first time that concurrency is about not holding the thread, not about adding threads.
- Hands-On Skill Challenge and Win Condition:
  Skill Trial: Build loop_probe.py: a minimal FastAPI app with three endpoints, one using time.sleep(3) in async def, one using await asyncio.sleep(3), one using time.sleep(3) in plain def. Hit each with 50 concurrent curl processes via a shell loop and record wall clock totals.
  Win Condition: The reader produces a table showing roughly 150 seconds for the first endpoint, roughly 3 seconds for the second, and roughly 6 seconds for the third (two threadpool rounds of 40 plus 10), and writes one paragraph explaining each number from the loop and threadpool model.

---

### Chapter 02: Raw TCP to HTTP by Hand: Building a Web Server with Nothing but socket

- Subtitle: listen Backlogs, CRLF Framing, Content Length, and Why Keep Alive Exists
- Core Mechanical Gotcha:
  HTTP/1.1 is plain text over a TCP byte stream with no message boundaries. A single recv(4096) may return half a request or two requests glued together. The request line, headers, and body are separated by \r\n and one blank line; the body length comes only from Content-Length or chunked encoding. A server that ignores this works for tiny curl requests and corrupts silently under a 9KB JSON POST. The kernel listen(backlog) queue is why Chapter 01's server "accepted" connections it never served.
- The Narrative Crisis:
  Post incident review. Sameer refuses to discuss FastAPI until the pod understands what FastAPI sits on. He unplugs the framework and asks Akshay and Palash to serve GET /health using only import socket. Palash's AI generated version calls recv(1024) once and parses with split("\n"). Aman's React client sends a 2,300 byte POST with a JSON body; Palash's parser reads the first 1024 bytes, finds no blank line, and returns a 400 for a perfectly valid request. Sameer draws the TCP send buffer, the receive buffer, and the two way handshake states on the whiteboard with chai in hand.
- Dopamine Milestone:
  Akshay runs curl -v against his hand written server and reads every line of the wire conversation: > GET /health HTTP/1.1, < HTTP/1.1 200 OK, < Content-Length: 15. Then he opens Wireshark and watches the exact same bytes in a TCP segment. The abstraction collapses into something physical.
- Hands-On Skill Challenge and Win Condition:
  Skill Trial: Write tinyhttp.py: a socket server that loops on recv() until it has seen \r\n\r\n, parses Content-Length, continues reading until the body is complete, and replies with a correct Content-Length header and a Connection: close or keep alive decision.
  Win Condition: The server correctly echoes a 50KB JSON POST sent by curl --data-binary @big.json and passes ss -tan | grep 8000 showing zero sockets stuck in CLOSE_WAIT after 100 requests.

---

### Chapter 03: ASGI, Coroutines and Threads: What await Actually Does to the CPU

- Subtitle: The ASGI Scope and Receive and Send Contract, Coroutine Suspension, Uvicorn, and the AnyIO Threadpool
- Core Mechanical Gotcha:
  await is a suspension point, not a parallelism primitive. A coroutine is a frame object the loop can park and resume; await some_future registers a callback with the selector and hands the thread back. CPU bound work (hashlib.pbkdf2_hmac with 600,000 iterations, large JSON serialization, Pandas aggregation) inside async def blocks the loop exactly like requests.get() did. The remedy is run_in_executor or a process pool, not more await keywords. ASGI itself is three callables: scope, receive, send. Writing a raw ASGI app with no framework exposes the whole contract in 30 lines.
- The Narrative Crisis:
  Devansh ships password hashing. Palash wraps bcrypt.hashpw in async def because "async is faster." A 300 user signup burst during orientation week freezes the loop again, this time with no external API to blame. Sakshi profiles with py-spy dump on the live PID and finds the loop thread parked inside the bcrypt C call. Sameer sketches the stack of one OS thread: selector, loop, frame, C extension, and shows exactly which layer is frozen.
- Dopamine Milestone:
  Akshay writes a raw ASGI application in one file, runs it under Uvicorn with no framework imported, and prints the scope dictionary: type, method, path, headers as byte tuples. He then moves bcrypt into await loop.run_in_executor(None, hashpw, ...) and watches py-spy top show the loop thread idle while worker threads spin.
- Hands-On Skill Challenge and Win Condition:
  Skill Trial: Build bare_asgi.py (no FastAPI), serving GET /scope as JSON and POST /hash that offloads a CPU bound hash to an executor.
  Win Condition: Under k6 with 200 virtual users posting to /hash, a concurrent GET /scope keeps p99 under 20ms, proving the loop is never blocked by the CPU work.

---

## ACT 2: THE FRAMEWORK SHOWDOWN (Vibe Coding FastAPI vs Django vs Flask and the Seven Layer Audit)

### Chapter 04: Three Teams, One Spec: Routing, HTTP Verbs and Status Codes in FastAPI, Django and Flask

- Subtitle: The Student Task and Knowledge API Contract, Path Parameters, Idempotency, 401 versus 403, and 204 Bodies
- Core Mechanical Gotcha:
  HTTP semantics are not framework opinions. PUT must be idempotent, PATCH is partial, 204 No Content must carry no body (Flask will happily send one), 201 Created should return a Location header, 401 means "authenticate," 403 means "authenticated and denied," and 405 is what a correct router returns for a verb it does not support (Palash's catch all @app.route returns 404). Trailing slash behavior differs across all three frameworks (APPEND_SLASH, strict_slashes, redirect_slashes) and silently produces 307 redirects that strip POST bodies on some clients.
- The Narrative Crisis:
  Siddharth from Product announces the internal Framework Showdown: three pods, same OpenAPI spec, 48 hours. Palash leads the Flask pod with Cursor. Akshay leads FastAPI. Anurag leads Django. Aman's React client integrates against all three on Friday and files 31 defects: POST /tasks returning 200 instead of 201, DELETE returning 200 with a JSON body on one team and 204 with a body on another, and a 307 redirect that eats the request body on Safari. Anisha from QA runs Akshay's old Postman suite from Book 3 and it turns red on two of the three implementations.
- Dopamine Milestone:
  Akshay reads curl -v output side by side for all three teams and identifies every defect from the response line and headers alone, before opening any source file. Sakshi's remark: "You just audited three codebases from the wire. That is Layer One."
- Hands-On Skill Challenge and Win Condition:
  Skill Trial: Implement the same five endpoints (/tasks CRUD plus /tasks/{id}/complete) in all three frameworks from openapi.yaml.
  Win Condition: The shared Postman and Newman contract suite from Book 3 passes 100% against all three servers, including the 405, 204 with empty body, 201 with Location, and trailing slash cases.

---

### Chapter 05: Pydantic and Request Bodies: Every Inbound Byte Is Hostile

- Subtitle: Pydantic v2 Coercion Rules, strict Mode, extra equals forbid, Field Validators, and the 422 Contract
- Core Mechanical Gotcha:
  Pydantic v2 lax mode coerces "42" to 42 and 1 to True, which hides client bugs until an analytics query breaks. extra="ignore" (the default) silently drops unknown keys, so a client typo of priorty becomes a task with default priority and no error. Optional[int] = None and int | None with no default are different contracts (nullable versus optional). Django's request.POST versus request.body with json.loads, and Flask's request.get_json(silent=True) returning None, produce the 'NoneType' object has no attribute 'get' traceback that appears in every vibe coded Flask app on earth. Response models also leak: returning the ORM row with hashed_password because no response_model was declared.
- The Narrative Crisis:
  Aman's client ships a build where a developer renamed due_date to dueDate. All three servers accept the request. FastAPI silently ignores the field; Django stores None; Flask crashes with the NoneType traceback. 4,000 tasks are created with no due date before anyone notices. Devansh then points out that GET /users/me on the Flask pod returns the bcrypt hash in the JSON body. Palash's defense: "The AI said Pydantic handles validation." Sakshi: "Pydantic handles what you told it to handle."
- Dopamine Milestone:
  Akshay sets model_config = ConfigDict(extra="forbid", strict=True), adds @field_validator("due_date") to reject past dates, and watches the dueDate typo bounce with a precise 422 body listing loc, msg, and type. He pipes the 422 into the React client and Aman's form highlights the exact field in red with zero extra code.
- Hands-On Skill Challenge and Win Condition:
  Skill Trial: Write schemas.py with TaskCreate, TaskUpdate, TaskRead, and UserRead models, plus a Django form or DRF serializer and a Flask marshmallow equivalent for comparison.
  Win Condition: A pytest suite of 40 adversarial payloads yields exactly 40 clean 422 responses from FastAPI with zero 500s, and GET /users/me never emits any key containing password or hash.

---

### Chapter 06: The Seven Layer Audit Live: DEBUG Equals True, Unhardened Werkzeug and SQLite Locks

- Subtitle: Debug Page Secret Disclosure, the Werkzeug Debugger PIN, Database Is Locked Errors, and the Audit Scorecard
- Core Mechanical Gotcha:
  Django DEBUG=True renders every setting (including secrets) in the 500 page and appends every executed SQL string to connection.queries forever, leaking memory. Flask's development server (Werkzeug) is single threaded by default, and its interactive debugger console is vulnerable. SQLite allows exactly one writer; two concurrent INSERTs from two worker processes produce sqlite3.OperationalError: database is locked. All three vibe coded pods shipped with at least two of these.
- The Narrative Crisis:
  Devansh runs an internal red team exercise on the three showdown deployments. Within 20 minutes he has the Django pod's SECRET_KEY prefix, a Python shell on the Flask pod via the debugger console, and the FastAPI pod locked with 10 parallel writers against SQLite. Palash watches his team's code get read aloud in the war room. Sakshi puts the Seven Layer scorecard on the wall and walks through it line by line.
- Dopamine Milestone:
  Akshay fills the scorecard for all three codebases on a single whiteboard: 21 cells, each marked pass or fail with a one line reason. The hardened FastAPI codebase becomes the single surviving service for Act 3.
- Hands-On Skill Challenge and Win Condition:
  Skill Trial: Run the full Seven Layer Audit against the three provided vibe coded repositories, producing AUDIT.md with reproducible commands.
  Win Condition: All 21 cells documented, and reader submits patches turning FastAPI pod's seven cells green, verified by audit_check.sh exiting with status 0.

---

## ACT 3: DATA PERSISTENCE, CONNECTION POOLS AND SCHEMA INTEGRITY (SQLAlchemy 2.0 Async, Alembic, Migrations)

### Chapter 07: SQLAlchemy 2.0 Async Engine: Sessions, Transactions and the Session per Request Rule

- Subtitle: create_async_engine, asyncpg, AsyncSession Lifecycle, Lazy Loading Traps, and Commit Boundaries
- Core Mechanical Gotcha:
  A module level global session = Session() shared across requests means uncommitted changes are visible to others and a failed transaction poisons subsequent queries with PendingRollbackError. In async SQLAlchemy, lazy loading outside the session context raises MissingGreenlet. selectinload and explicit await session.refresh() are the deterministic answers. Postgres replaces SQLite, and asyncpg prepared statement caching requires proper configuration with connection poolers.
- The Narrative Crisis:
  Anurag migrates the service to Postgres. Palash keeps the AI suggested global session. During parallel tests, Swati's tasks appear in Sachin's response payload. A single integrity error leaves the session failed, returning 500 for eleven minutes. Anurag draws transaction boundaries; Sakshi adds Depends(get_session) with async with and try/except/rollback/finally.
- Dopamine Milestone:
  Akshay enables echo=True and reads the exact SQL emitted per request, sees BEGIN, INSERT, and COMMIT wrapped cleanly inside one request, then runs parallel tests and watches cross user leakage drop to zero.
- Hands-On Skill Challenge and Win Condition:
  Skill Trial: Build db.py and repositories.py with an async engine, session dependency, 2.0 style select(), and eager loading for Task.owner.
  Win Condition: Running 20 parallel pytest workers (pytest -n 20) against Postgres produces zero PendingRollbackError, zero MissingGreenlet, and zero cross user data leaks.

---

### Chapter 08: Pool Starvation Forensics: Why the Fifty First Request Waits Forever

- Subtitle: pool_size, max_overflow, pool_timeout, pool_pre_ping, Postgres max_connections, and Leaked Checkouts on the Exception Path
- Core Mechanical Gotcha:
  SQLAlchemy defaults to pool_size=5, max_overflow=10 (15 checkouts per process). Postgres defaults to max_connections=100. A session checked out and never returned permanently leaks one connection. After 15 leaks, subsequent requests block for pool_timeout (30s) and raise TimeoutError: QueuePool limit reached.
- The Narrative Crisis:
  Friday evening. The service degrades every 40 minutes and recovers after restart. Palash added a restart cron. Sakshi refuses. She inspects pg_stat_activity and sees 58 connections in idle in transaction. Akshay traces them to an endpoint where session.execute() precedes raise HTTPException with no finally block.
- Dopamine Milestone:
  Akshay adds pool event listeners to /metrics, fixes the exception path, runs k6 at 300 virtual users for 30 minutes, and watches the checked out gauge rise and fall smoothly, returning to zero. Grafana stays flat and green.
- Hands-On Skill Challenge and Win Condition:
  Skill Trial: Reproduce the leak in leaky.py, instrument the pool with Prometheus gauges (checked_out, overflow, wait_seconds).
  Win Condition: A 30 minute soak test at 300 VUs ends with checked_out == 0, zero idle in transaction rows, and p99 under 120ms throughout.

---

### Chapter 09: Alembic and Zero Downtime Migrations: Changing a Schema While Traffic Flows

- Subtitle: Autogenerate Blind Spots, Expand and Contract, Table Locks on ALTER, Backfills, and Rollback Discipline
- Core Mechanical Gotcha:
  alembic revision --autogenerate does not detect renamed columns (it emits a drop and an add, destroying data). Adding a NOT NULL column without a default takes an ACCESS EXCLUSIVE lock, blocking reads. The deterministic pattern is expand (add nullable), backfill in batches, contract (add constraint, drop old column) across three deploys with CREATE INDEX CONCURRENTLY outside a transaction.
- The Narrative Crisis:
  Siddharth needs priority renamed to urgency. Palash autogenerates and runs upgrade head against staging during a load test. Staging freezes for 90 seconds under the table lock, and every task's priority becomes NULL. Anurag restores from snapshot. Sakshi institutes the expand and contract rule.
- Dopamine Milestone:
  Akshay writes the 3-step expand and contract migration by hand, runs it against a 10M row table under 200 VUs, and watches p99 show zero spike. alembic downgrade -1 proves the rollback is lossless.
- Hands-On Skill Challenge and Win Condition:
  Skill Trial: Produce a hand written Alembic migration chain renaming priority to urgency with batched backfill of 10,000 rows per transaction.
  Win Condition: Applying under 200 VUs produces zero 5xx responses, no request exceeding 500ms, and verified row count equality.

---

## ACT 4: PRODUCTION HARDENING, AUTH, WEBSOCKETS AND CONTAINER DEPLOYMENT (JWT RBAC, Real Time WebSockets, Docker, Nginx)

### Chapter 10: OAuth2, JWT and RBAC: Signatures, Expiry and the Algorithm None Attack

- Subtitle: The Password Bearer Flow, HS256 versus RS256, Refresh Token Rotation, Dependency Based Role Checks, and Secret Hygiene
- Core Mechanical Gotcha:
  A JWT is base64 encoded JSON plus a signature (not encrypted). Decoding without verifying the algorithm allows the alg: none forgery. Hardcoded SECRET_KEY in git history is compromised forever. Access tokens must be short lived; refresh tokens require rotation; passwords must be hashed in an executor, never on the loop.
- The Narrative Crisis:
  Devansh finds a committed SECRET_KEY in git history, pastes a forged token with role: admin after changing alg to none, and deletes a task owned by Siddharth. Palash's AI code used verify_signature: False. Sakshi rotates keys, Varun scrubs git history.
- Dopamine Milestone:
  Akshay builds get_current_user and require_role("admin") dependencies, replays the forged token, and watches it bounce with 401. Refresh token reuse invalidates the entire session family.
- Hands-On Skill Challenge and Win Condition:
  Skill Trial: Implement /auth/token, /auth/refresh, role guarded DELETE /tasks/{id}, and refresh token rotation with reuse detection.
  Win Condition: Security pytest suite of 25 cases passes, and git secrets --scan-history returns clean.

---

### Chapter 11: WebSockets and CLOSE_WAIT: Real Time Notifications That Do Not Leak File Descriptors

- Subtitle: The Upgrade Handshake, Ping and Pong Heartbeats, Nginx proxy_read_timeout, Connection Registries, and Half Closed Sockets
- Core Mechanical Gotcha:
  When a client disconnects without a close frame, the socket sits in ESTABLISHED until kernel keepalive gives up (2 hours). When client sends FIN but server coroutine never calls close(), the socket sits in CLOSE_WAIT forever, leaking file descriptors. Nginx proxy_read_timeout (60s) drops idle WebSockets without heartbeats.
- The Narrative Crisis:
  Aditya builds task notifications. On launch day the pod hits OSError: Too many open files (1,024 descriptors). Varun finds 980 sockets in CLOSE_WAIT. Palash's handler had no exception handling, skipping registry cleanup.
- Dopamine Milestone:
  Akshay wraps the handler in try/except WebSocketDisconnect/finally: registry.remove(), adds 20s server pings, raises ulimit. Kills 500 client processes with kill -9; CLOSE_WAIT returns to 0 in 25 seconds.
- Hands-On Skill Challenge and Win Condition:
  Skill Trial: Build ws.py with connection registry, heartbeat task, per-user fan out, and Nginx config.
  Win Condition: After 1,000 clients connect and 500 killed with SIGKILL, CLOSE_WAIT shows zero within 30 seconds, and 10 minute idle connection remains open.

---

### Chapter 12: Docker, Nginx and Graceful Exit: Shipping the Service and Surviving a Database Kill

- Subtitle: Multi Stage Images, Non Root Users, Exec Form and PID 1, SIGTERM Draining, Health versus Readiness, Uvicorn Workers, and the k6 Sign Off
- Core Mechanical Gotcha:
  CMD in shell form runs under /bin/sh as PID 1, ignoring SIGTERM; after 10s Docker sends SIGKILL and kills in-flight writes. Exec form (CMD ["uvicorn", ...]) fixes signal delivery; lifespan handler drains connections. Health endpoint returning 200 while DB is dead keeps broken pods in load balancer; readiness must ping the pool.
- The Narrative Crisis:
  Launch rehearsal. Varun kills Postgres during a 300 VU k6 run. Palash's container keeps answering GET /health with 200; Nginx routes traffic into 4,000 500 errors. docker stop api hangs and kills 37 in-flight writes. Sakshi, Varun, and Akshay pair on the final hardening.
- Dopamine Milestone:
  k6 runs 500 VUs for 20 minutes. At minute 8 Varun kills Postgres; readiness flips to 503 in 2 seconds, Nginx halts routing, pool reconnects when Postgres returns. k6 summary: 0 failed checks, p95 at 38ms, p99 at 45ms.
- Hands-On Skill Challenge and Win Condition:
  Skill Trial: Produce multi-stage Dockerfile, compose.yaml with health conditions, nginx.conf, and lifespan drain handler.
  Win Condition: chaos.sh (k6 at 500 VUs, Postgres kill at minute 8, docker stop at minute 15) ends with 0 failed checks, image size under 150MB, docker stop under 3 seconds, non-root user.

---

## 3. CHAPTER 01 OPENING SCENE: FIRST DAY, FIRST PAGER, FIRST BLACKHOLE

### Setting: Technocore Floor 7, Web Services Pod
- 09:30 AM: Akshay receives laptop, badge, and pager from Sakshi to shadow on-call rotation. Palash brags about his 40-line AI-generated CRM import endpoint.
- 02:00 AM: Pager fires. Latency threshold breached, p99 at 14,200ms, error rate 0%. Akshay inspects `routers/contacts.py` bottom-up: finds `requests.get()` inside `async def` with no timeout while CRM status is degraded (9-second responses).
- 02:14 AM: Palash arrives proposing adding more Uvicorn workers and Redis. Sakshi tells him that gives 4 frozen loops and cached missing responses. Akshay draws the single-threaded event loop on the glass wall showing the thread parked in C-level socket `recv()`, starving all other coroutines while TCP connections queue in the kernel backlog. Sameer appears with chai, emphasizing that the server is doing one thing with complete devotion because nobody gave it a deadline.
- Technical Fix: Replacing `requests.get` with `await client.get(...)` using `httpx.AsyncClient(timeout=5.0)` and adding 504 handling.
- Loop Probe Proof: Running 50 concurrent requests against `time.sleep(3)` in `async def` (150s total), `await asyncio.sleep(3)` (3s total), and `time.sleep(3)` in `def` (6s total across 40-thread AnyIO pool).
- 02:31 AM Green Bar: Varun deploys patch. k6 load test at 500 VUs shows p99 dropping from 14,200ms to 45ms on identical hardware.
- Transition: Palash asks where the thread goes while awaiting; Sakshi sets up Chapter 02: building a web server from a bare socket.
```
