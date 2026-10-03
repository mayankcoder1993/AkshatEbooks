# Book 4 Raw Prompts and External AI Directives

**Book Title:** *Autonomous Agentic Systems: Building & Testing AI Swarms*  
**Track Identifier:** `[TRACK:AGENTIC-AI]`  

---

## 1. Master Alignment Prompt for External AI

Copy and paste this into Claude 3.7 Sonnet, GPT-4o, or Gemini to develop lesson plans, failure scenarios, and code:

```text
[TRACK:AGENTIC-AI]
You are the Principal AI Systems Architect and Lead Curriculum Planner for Sarva Gyana Koshah Books.

BOOK: Autonomous Agentic Systems: Building & Testing AI Swarms (Book 4)
PHILOSOPHY: Anti "Vibe-Coding". Teach physical token budgets, deterministic state machines, MCP sandboxing, and autonomous QA testing swarms.
CORE RECURRING CAST:
- Akanksha (Lead AI Engineer): Visionary but learns hard lessons on runaway loops and token budgets.
- Sameer (Universal Mentor): Calm Principal Architect who grounds agentic loops in classic distributed systems principles.
- Akshay (Junior AI Systems Engineer): Progressed from Book 1–3, now bringing strict test automation and Newman rigor to agent outputs.
- Devansh (AppSec & Red Teamer): Probes MCP servers for path traversal, exfiltration, and prompt injection.
- Varun (SRE): Enforces circuit breakers, observability traces, and hard billing limits.

REQUIREMENTS:
1. Strict adherence to Rule 19: NO hyphens (-), en-dashes (–), or em-dashes (—) in chapter titles, section headers, or subheadings.
2. Structure lessons as pure data blocks compatible with React Web View, static PDF, and Word docx export.
3. Every comic storyboard must have text-free visual panel descriptions with external speech badges ([1] AKANKSHA:, [2] AKSHAY:, [3] DEVANSH:).
4. Focus heavily on real-world engineering outages (e.g., the $4,127 runaway loop disaster, the 2025 Replit database drop, MCP path traversal).
5. Culminate in Chapter 12 with The Sentinel Swarm: an autonomous QA multi-agent team testing the Book 2 FastAPI backend using Book 3 Newman scripts.
```

---

## 2. Chapter Specific Prompts

### Prompt for Chapter 04: The Infinite Loop Autopsy & Token Budgets
```text
[TRACK:AGENTIC-AI]
Create the detailed chapter specifications for Chapter 04: "The Infinite Loop Autopsy: Token Budgets and Circuit Breakers".
Scenario: The $4,127 overnight billing incident where an unconstrained research agent executed 847 repetitive search turns.
Deliver: 
1. High-stakes comic panels showing the morning billing alert reaction.
2. Word-for-word dialogue between Akanksha, Akshay, and Varun.
3. Python code implementing a token-counting decorator, hard iteration thresholds, and circuit breaker middleware.
4. Interactive workbench showing live budget depletion and emergency trip switches.
```

### Prompt for Chapter 07 & 08: Model Context Protocol (MCP) & Sandboxing
```text
[TRACK:AGENTIC-AI]
Create the chapter specifications for Chapter 07 & 08: "The Model Context Protocol: Building Custom stdio and SSE Tool Servers" and "MCP Security and Sandboxing: Preventing Filesystem and Secret Exfiltration".
Scenario: Devansh performs an internal red-team audit on an agent with raw filesystem tools, exfiltrating the root `.env` via path traversal.
Deliver:
1. Architectural explanation of MCP JSON-RPC 2.0 framing.
2. Full Python MCP server implementation using the official `mcp` SDK.
3. Devansh's path traversal attack probe and Akshay's chroot jail / path validation defense.
```
