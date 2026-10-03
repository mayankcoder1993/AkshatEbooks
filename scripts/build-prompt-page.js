const fs = require('fs');
const path = require('path');

const promptPath = path.join(__dirname, 'resources', 'ecosystem', 'MASTER_AUDIT_PROMPT_FOR_AI.txt');
const promptText = fs.readFileSync(promptPath, 'utf8');

const escapedPrompt = promptText.replace(/</g, '&lt;').replace(/>/g, '&gt;');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sarva Gyana Koshah: Master Strategic Curriculum & AI Audit Prompt</title>
  <style>
    :root {
      --bg: #090d16;
      --surface: #111827;
      --surface-border: #1f293d;
      --text: #f1f5f9;
      --text-muted: #94a3b8;
      --brand-primary: #38bdf8;
      --accent-green: #34d399;
      --font-mono: "JetBrains Mono", "Fira Code", Consolas, monospace;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 1.25rem 4rem;
    }
    .container {
      width: 100%;
      max-width: 1100px;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--surface);
      border: 1px solid var(--surface-border);
      border-radius: 12px;
      padding: 1.25rem 1.5rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    }
    .brand-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--brand-primary);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .brand-subtitle {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-top: 0.25rem;
    }
    .copy-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #0284c7;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      padding: 0.75rem 1.5rem;
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 8px rgba(2, 132, 199, 0.4);
    }
    .copy-btn:hover {
      background: #0369a1;
      transform: translateY(-1px);
    }
    .copy-btn.copied {
      background: #059669;
    }
    .prompt-box-wrapper {
      background: var(--surface);
      border: 1px solid var(--surface-border);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 25px rgba(0,0,0,0.3);
    }
    .prompt-box-header {
      background: #0d1322;
      padding: 0.75rem 1.25rem;
      border-bottom: 1px solid var(--surface-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.82rem;
      color: var(--text-muted);
      font-family: var(--font-mono);
    }
    textarea#promptText {
      width: 100%;
      height: 75vh;
      min-height: 580px;
      background: #0a0e17;
      color: #e2e8f0;
      font-family: var(--font-mono);
      font-size: 0.9rem;
      line-height: 1.6;
      border: none;
      padding: 1.5rem;
      resize: vertical;
      outline: none;
      white-space: pre-wrap;
      word-break: break-word;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="top-bar">
      <div>
        <div class="brand-title">⚡ Sarva Gyana Koshah: Comprehensive AI Audit Prompt</div>
        <div class="brand-subtitle">Audience: Working IT Professionals & Systems Architects | Anti "Vibe-Coding" First Principles</div>
      </div>
      <button class="copy-btn" id="copyBtn" onclick="copyPrompt()">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span id="copyBtnText">Copy Master Prompt</span>
      </button>
    </div>
    <div class="prompt-box-wrapper">
      <div class="prompt-box-header">
        <span>MASTER_AUDIT_PROMPT_FOR_AI.txt</span>
        <span>Target: IT Professionals & External AI Auditors</span>
      </div>
      <textarea id="promptText" readonly>${escapedPrompt}</textarea>
    </div>
  </div>
  <script>
    function copyPrompt() {
      const ta = document.getElementById("promptText");
      ta.select();
      navigator.clipboard.writeText(ta.value).then(() => {
        const btn = document.getElementById("copyBtn");
        const txt = document.getElementById("copyBtnText");
        btn.classList.add("copied");
        txt.innerText = "✓ Copied to Clipboard!";
        setTimeout(() => {
          btn.classList.remove("copied");
          txt.innerText = "Copy Master Prompt";
        }, 2500);
      }).catch(err => {
        alert("Copy failed, please select and copy manually: " + err);
      });
    }
  </script>
</body>
</html>`;

const outPath = path.join(__dirname, 'public', 'akshatapitesting.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('Successfully updated public/akshatapitesting.html');
