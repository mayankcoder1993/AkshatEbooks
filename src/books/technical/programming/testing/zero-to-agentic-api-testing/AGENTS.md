# Zero to Agentic API Testing: Book Specific AI Instructions

Read the root playbook (`AGENTS.md`), core editorial standard (`docs/agents/CORE_EDITORIAL.md`), AI authoring workflow (`docs/agents/AI_AUTHORING_WORKFLOW.md`), `TECHNICAL` profile (`docs/agents/profiles/TECHNICAL.md`), and this book's brief (`BOOK_BRIEF.md`) before authoring or modifying chapters.

## Book specific editorial rules

1. **Strict Punctuation Rule: Zero Hyphens or Dashes in Titles or Content**: Do not use hyphens (`-`), em-dashes (`—`), or en-dashes (`–`) anywhere in chapter titles, section headings, or reader-facing instructional text. Use colons (`:`), commas, bullet points (`•`), parentheses, or natural connecting words (such as 'and', 'to', 'through') instead. Do not put the word 'Chapter' or icons in the chapter title itself (for example, use `Understanding APIs from First Principles`, not `Chapter 01: Understanding APIs from First Principles`).
2. **Accessible Real World Storylines**: Do not write overly complex, dramatic, or convoluted sci-fi narratives. Frame engineering missions around relatable real-world broken systems (e.g. an online bookstore or food ordering app where customers see an error at checkout and the backend must be investigated across the wire).
3. **Side-by-Side Visualizations**: Keep diagrams clean, focused, and uncropped. Avoid crowded wide legends. Always pair diagrams with clear, side-by-side descriptive notes or steps so the reader can inspect the visual and read the explanation concurrently.
4. **Zero Assumption Foundation**: Never assume the reader already knows what an API is, what HTTP means, or how network protocols work. Explain concepts from first principles with clear real-world architectural analogies (the restaurant customer, waiter, and kitchen) before introducing tools or code.
5. **Authoritative Tone and Independent Self Containment**: Do not mention video courses, YouTube links, or platform logistics. The book must be a self-contained, definitive handbook on modern API and agent testing.
6. **Multi Protocol Competence**: Clearly teach and contrast REST (HTTP and JSON), SOAP (XML, Envelope, and WSDL), GraphQL, and gRPC.
7. **Concrete HTTP Wire Transactions**: Every concept must show the full wire representation: method, path, HTTP version, essential headers, and JSON/XML body, alongside the response status line, headers, and body.
8. **Tool versus Code Parity**: Contrast visual tools (Postman) with programmatic frameworks (Python Requests or pytest). Show why developers use Postman for exploratory prototyping and collection runners for automated pipelines.
9. **Strict Credential Safety**: Never hardcode realistic-looking API keys, tokens, or passwords in teaching snippets. Use dummy placeholders like `sk-test-sample-key-12345` or reference environment variables (`pm.environment.get(...)`, `os.getenv(...)`).
