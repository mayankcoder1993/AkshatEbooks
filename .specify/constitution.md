# SpecKit Constitution: Sarva Gyana Koshah Publishing

## 1. Project Identity & Purpose
- **Repository**: AkshatEbooks (mayankcoder1993/AkshatEbooks)
- **Mission**: Deliver enterprise-grade technical graphic novels teaching complex computer science concepts (API Testing, Distributed Systems, Microservices) through engaging visual stories, relatable campus events, and rigorous engineering principles.
- **Audience**: College graduates, junior engineers, and aspiring SDETs from any background. Concepts must be taught from first principles with zero hand-waving.

## 2. Graphic Novel Storytelling Constitution
- **Artistic Style**: Authentic Indian Madhubani / Mithila folk art with double-line black ink contours, sharp almond eyes, intricate cross-hatching, flat vibrant color fills, and pure white (#FFFFFF) backgrounds.
- **Narrative Over Analogy**: Avoid generic or childish analogies (e.g., flat copper wires). Ground all discussions in real-world campus engineering events (university results crashes, transit dispatch GPS failures, campus meal cards).
- **Layout Rule**: Comic speech bubbles and dialogue clouds must float above and around illustrations. Never use mechanical labels like PANEL 1 or PANEL 2.
- **Zero Trademark Violation**: Never mention trademarked names (Postman, Insomnia, Swagger). Use generic, descriptive enterprise terms: API Testing Workbench, Wire Inspector, Contract Specification.
- **Code Pedagogical Standard**:
  - Never dump monolithic code blocks without explanation.
  - Present code line-by-line with:
    1. Line snippet
    2. Deep operational explanation (e.g., TCP chunks, buffer unboxing)
    3. Failure prediction prompt (What happens if this line is missing?)
    4. Exact error stack trace (e.g., TypeError: Cannot read properties of undefined)

## 3. Secret Management & Security Constitution
- **Kerckhoffs Principle**: Security must never rely on hiding keys in public code or Git repositories.
- **No Git Leaks**: Zero API keys or secrets in .env, source code, or committed files.
- **Admin Dynamic Key Storage**:
  - First-time deployment prompts the administrator to configure the API key via a secure Admin UI.
  - Keys are encrypted with AES-256-GCM and stored only in server-side persistent memory/storage.
  - AI services can be dynamically toggled ON/OFF by the admin at any time.
  - Client browsers only receive operational status (aiEnabled: true), never raw credentials.

## 4. GSD (Get Stuff Done) Delivery Lifecycle
- **Phased Decomposition**: All work follows ROADMAP.md -> PLAN.md -> EXECUTE -> VERIFY.
- **Empirical Validation**: Every phase must pass automated checks (npm run prepare:books, npm run test:api) before completion.
