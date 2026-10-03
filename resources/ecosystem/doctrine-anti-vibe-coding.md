# The Anti "Vibe-Coding" Doctrine & The 7-Layer Audit Protocol

---

## 🎯 1. The Core Philosophy
In recent years, generative AI has created a wave of "vibe coders"—developers who prompt AI to write code, copy-paste snippets that miraculously run once, but have **zero understanding of the physical memory, socket states, byte streams, and failure mechanisms** underneath.

**Our Mission:** Demolish that gap. We do not reject AI tools; we reject ignorance. The future developer must **vibe-code at 10x speed, then audit at 10x depth**.

---

## 🪜 2. The 3-Tier Pedagogical Ladder
Every concept in our library must follow this exact progression:
1. **Tier 1: Direct Technical First**  
   If a concept is clear, clean, and intuitive (variables as labeled pointers, loops, HTTP status codes), define it directly in precise, mature technical English. Avoid childish or forced analogies that slow the reader down.
2. **Tier 2: Physical Analogies for Invisible Machine Mechanics**  
   Use concrete, physical visuals (whiteboards, cutting chai glasses, memory boxes with post-it notes, restaurant waiters carrying trays) strictly when explaining invisible machine behavior: object reference counts, mutable defaults in `__defaults__`, small integer cache arrays, `dis.dis()` opcode stacks, epoll event loops, or TCP socket states.
3. **Tier 3: Failure-First Engineering & Live Verification**  
   Show the insidious bug or silent failure first, prove it with live output/tracebacks, inspect the physical root cause, and then guide the learner to a deterministic, tested fix.

---

## 🛡️ 3. The 7-Layer Vibe-Code Audit Protocol
Woven across all technical titles as an uncompromising pre-commit quality gate:

1. **Layer 1: Secrets & Exposure**  
   - Are API keys, credentials, or tokens hardcoded in code or committed in `.env`?  
   - Are agent config files (`AGENTS.md`, `.cursorrules`, `CLAUDE.md`) leaking internal prompts or system paths?  
   - *Tooling:* `gitleaks detect --source .`, `detect-secrets`.
2. **Layer 2: Git Hygiene**  
   - Is `.gitignore` comprehensive (ignoring `.env`, `__pycache__`, `.venv`, SQLite DBs)?  
   - Are secrets lingering in commit history? (`git log -p | grep "key"`).  
   - *Forensics:* `git bisect` for finding regressions, `git filter-repo` for purging committed keys.
3. **Layer 3: Dependency Integrity**  
   - Are versions pinned strictly (`==` not `>=`)?  
   - Run vulnerability audits (`pip-audit`, `safety check`).  
   - Detect hallucinated or typosquatted packages invented by AI.
4. **Layer 4: Runtime & Concurrency**  
   - Is synchronous I/O (`requests.get`, `time.sleep`) called inside an `async def` route, blocking the single-threaded event loop?  
   - Worker configurations (Uvicorn workers vs Gunicorn) and dev vs production server boundaries.
5. **Layer 5: Security & Input Boundaries**  
   - Restrictive CORS (never `*` in production).  
   - Rate limiting on authentication routes.  
   - Strict schema validation with Pydantic v2 (`strict=True`, `extra="forbid"`).  
   - SQLi, XSS, and CSRF mitigations.
6. **Layer 6: Error Handling & Observability**  
   - Are production stack traces hidden from end users (`DEBUG=False`)?  
   - Structured JSON logging (never raw `print()` statements).  
   - Health check probes (`/healthz`) and graceful teardown hooks.
7. **Layer 7: AI Hallucination Traps**  
   - Dead code generated "just in case".  
   - Deprecated syntax hallucinated from outdated training data (e.g. Pydantic v1 methods in v2, old Django encoding utils).  
   - Phantom library methods that do not exist.
