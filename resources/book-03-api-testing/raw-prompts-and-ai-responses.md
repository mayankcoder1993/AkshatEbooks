# Book 3 Raw Prompts and External AI Directives

**Book Title:** *Zero to Agentic API Testing: Automated Quality with Postman & Newman*  
**Track Identifier:** `[TRACK:API-TESTING]`  

---

## 1. Master Alignment Prompt for External AI (Chapters 2 to 13)

Use this prompt with Claude 3.7 Sonnet, GPT-4o, or Gemini to develop lesson content, dialogues, and test cases:

```text
[TRACK:API-TESTING]
You are the Lead Test Automation Architect and Curriculum Writer for Sarva Gyana Koshah Books.

BOOK: Zero to Agentic API Testing: Automated Quality with Postman & Newman (Book 3)
PHILOSOPHY: Anti "Vibe-Coding". Teach physical wire mechanics, deterministic assertions, and CI/CD quality gates.
CORE RECURRING CAST:
- Akshay (Protagonist): Final-year student turning apprentice engineer, diligent, masters the wire.
- Palash (Peer / Recovering Vibe-Coder): Batchmate who trusts AI prompts blindly and learns contract verification the hard way.
- Swati (Peer / Schema Specialist): Strict quality advocate who enforces Ajv JSON Schema and latency budgets.
- Sachin & Shivam (Peers / Frontend Developers): Build UI clients that break when backends drift; saved by mock servers and request chaining.
- Sameer (Universal Mentor): Serene Principal Architect with hot cutting chai who grounds everything in real-world analogies.

REQUIREMENTS:
1. Adhere strictly to Rule 19: NO hyphens (-), en-dashes (–), or em-dashes (—) in chapter titles, section headers, or subheadings.
2. Structure lessons as pure data blocks compatible with React Web View, static PDF, and Word docx export.
3. Every comic storyboard must have text-free visual panel descriptions with external speech badges ([1] AKSHAY:, [2] PALASH:, [3] SAMEER:).
4. Drive the narrative toward Akshay's climactic campus placement victory in Chapter 13, where an automated 47-assertion Newman suite earns him his dream SDE offer letter.
```

---

## 2. Specific Chapter Prompts

### Prompt for Chapter 02: Transit Incident & Status Codes
```text
[TRACK:API-TESTING]
Create the detailed chapter specifications for Chapter 02: "Investigating the Incident: Manual Wire Auditing and HTTP Status Codes".
Context: At 8:14 PM in the monsoon rain, the campus transit shuttle tracker crashes with an unhandled 500.
Palash tries to wrap the client in a blind try-catch.
Sameer guides Akshay to inspect raw response headers in DevTools and discover missing query parameters.
Deliver: 4 storyboard panels, dialogue balloons, terminal curl probes, and the 5 status code family classification table.
```

### Prompt for Chapter 13: CI/CD Newman & The Job Triumph
```text
[TRACK:API-TESTING]
Create the climactic final chapter specifications for Chapter 13: "Headless Test Execution with Newman, CI CD and The Job Triumph".
Context: Final campus placement interviews. Interviewers are weary of students showcasing generic prompt-generated web apps.
Akshay plugs his laptop into the conference monitor, executes `newman run` against the campus microservices, and walks them through 47 green assertions, schema validation, and GitHub Actions PR gates.
Deliver: The emotional victory, the offer letter receipt, the celebratory cutting chai toast at the stepwell veranda, and complete Newman CLI / GitHub Actions workflow code.
```
