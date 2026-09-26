#!/usr/bin/env node
// SGK Rule 19 Checker
// System: H10
// Usage: node framework/tools/rule19-checker.mjs <file>
// Exit 0: clean. Exit 1: violations found.

import { readFileSync, existsSync } from 'fs'
import { resolve, basename } from 'path'

const filePath = resolve(process.argv[2] || '')

if (!process.argv[2] || !existsSync(filePath)) {
  console.error('Usage: node rule19-checker.mjs <file>')
  process.exit(1)
}

const content = readFileSync(filePath, 'utf8')
const lines = content.split('\n')
const violations = []

function stripWhitelistedContent(text) {
  return text
    // Fenced code blocks
    .replace(/```[\s\S]*?```/g, '[CODE_BLOCK]')
    // Inline code
    .replace(/`[^`\n]+`/g, '[INLINE_CODE]')
    // URLs
    .replace(/https?:\/\/[^\s\)\"]+/g, '[URL]')
    // Markdown links like [1](https://...)
    .replace(/\[\d+\]\([^\)]+\)/g, '[CITATION_LINK]')
    // Regular expression literals in code
    .replace(/\/(?:\\\/|[^\/\n])+\/[gimsuy]*/g, '[REGEX_LITERAL]')
    // Block types (H06 taxonomy tokens and vertical extensions)
    .replace(/\b(scene-panel|workbench-screen|quad-card|action-beat|thought-bubble|challenge-prompt|challenge-reveal|cliffhanger-panel|trap-alert|narration-box|prose-paragraph|reference-anchor|universe-link|dialogue-exchange|api-workbench|ide-screen|terminal-screen|court-bench|bazaar-market|math-graph|mcq-sifter|block-type|battle-scar|triage-box|character-scene|api-inspector|interactive-workbench|pedagogical-quad-card|code-workbench|exposition-narrative|interactive-quiz)\b/gi, '[BLOCK_TOKEN]')
    // Book / Series / Module IDs (e.g., SGK-TECH-API-001, SGK-LAW, v01-programming)
    .replace(/\b(SGK|ISBN|RFC|SEC|OEI|AY|FY|SEC|HHS)-[A-Z0-9-]+/gi, '[ID_TOKEN]')
    // Uppercase status tokens like REVISION-REQUESTED, PRE-CHECK
    .replace(/\b[A-Z]+-[A-Z]+\b/g, '[STATUS_TOKEN]')
    // CLI flags like --world-bible, --book-promise, -y, --watch
    .replace(/--?[a-zA-Z0-9_-]+/g, '[CLI_FLAG]')
    // HTTP headers
    .replace(/Content-Type|Authorization|X-[\w-]+|Cache-Control/g, '[HTTP_HEADER]')
    // Negative numbers: -1, -0.5, -300
    .replace(/(?<![a-zA-Z])-\d+\.?\d*/g, '[NEG_NUMBER]')
    // HTTP version strings
    .replace(/HTTP\/\d\.?\d?/g, '[HTTP_VERSION]')
    // OAuth version
    .replace(/OAuth\s*\d\.?\d?/g, '[OAUTH_VERSION]')
    // Status code ranges in technical context (200-299)
    .replace(/\b\d{3}-\d{3}\b/g, '[STATUS_RANGE]')
    // Port ranges
    .replace(/\b\d{4}-\d{4}\b/g, '[PORT_RANGE]')
    // Technical file paths / filenames
    .replace(/[\w./-]+\.(mjs|js|json|md|jpg|png|svg)\b/gi, '[FILE_PATH]')
    // Technical CLI usage placeholders: <storyboard-file>
    .replace(/<[a-z0-9_-]+>/gi, '[CLI_PARAM]')
    // Technical layout types
    .replace(/\b(chapter-opener|full-page|half-page|quarter-page|character-portrait)\b/gi, '[LAYOUT_TOKEN]')
    // Named technical standards
    .replace(/EPUB3|UTF-8|ASCII|UTF-16/g, '[STANDARD]')
}

const compoundAdjectiveViolations = [
  { pattern: /\breal-time\b/gi, fix: 'real time' },
  { pattern: /\bend-to-end\b/gi, fix: 'end to end' },
  { pattern: /\bin-memory\b/gi, fix: 'in memory' },
  { pattern: /\bsub-second\b/gi, fix: 'sub second' },
  { pattern: /\bpre-request\b/gi, fix: 'pre request' },
  { pattern: /\bpost-request\b/gi, fix: 'post request' },
  { pattern: /\bopen-source\b/gi, fix: 'open source' },
  { pattern: /\bclient-side\b/gi, fix: 'client side' },
  { pattern: /\bserver-side\b/gi, fix: 'server side' },
  { pattern: /\bfull-stack\b/gi, fix: 'full stack' },
  { pattern: /\bhigh-yield\b/gi, fix: 'high yield' },
  { pattern: /\bstep-by-step\b/gi, fix: 'step by step' },
  { pattern: /\bhands-on\b/gi, fix: 'hands on' },
  { pattern: /\bin-depth\b/gi, fix: 'in depth' },
  { pattern: /\bwell-known\b/gi, fix: 'well known' },
  { pattern: /\bwell-defined\b/gi, fix: 'well defined' },
  { pattern: /\bwidely-used\b/gi, fix: 'widely used' },
  { pattern: /\blong-term\b/gi, fix: 'long term' },
  { pattern: /\bshort-term\b/gi, fix: 'short term' },
  { pattern: /\bmedium-term\b/gi, fix: 'medium term' },
  { pattern: /\bup-to-date\b/gi, fix: 'up to date' },
  { pattern: /\bout-of-date\b/gi, fix: 'out of date' },
  { pattern: /\bmulti-agent\b/gi, fix: 'multi agent' },
  { pattern: /\bdomain-specific\b/gi, fix: 'domain specific' },
  { pattern: /\bsubject-agnostic\b/gi, fix: 'subject agnostic' },
  { pattern: /\breal-world\b/gi, fix: 'real world' },
  { pattern: /\bdecision-making\b/gi, fix: 'decision making' },
  { pattern: /\bpolicy-making\b/gi, fix: 'policy making' },
  { pattern: /\bsupply-side\b/gi, fix: 'supply side' },
  { pattern: /\bdemand-side\b/gi, fix: 'demand side' },
  { pattern: /\bcost-benefit\b/gi, fix: 'cost benefit' },
  { pattern: /\brisk-adjusted\b/gi, fix: 'risk adjusted' },
  { pattern: /\bmarket-driven\b/gi, fix: 'market driven' },
  { pattern: /\bfar-reaching\b/gi, fix: 'far reaching' },
  { pattern: /\blong-standing\b/gi, fix: 'long standing' },
  { pattern: /\bwell-established\b/gi, fix: 'well established' },
  { pattern: /\bso-called\b/gi, fix: 'so called' },
  { pattern: /\babove-mentioned\b/gi, fix: 'above mentioned' },
  { pattern: /\binter-state\b/gi, fix: 'inter state' },
  { pattern: /\bintra-state\b/gi, fix: 'intra state' }
]

const dashPatterns = [
  { pattern: /\u2014/g, type: 'Em dash (\\u2014)', fix: 'Use colon or comma instead' },
  { pattern: /\u2013/g, type: 'En dash (\\u2013)', fix: 'Use colon or comma instead' }
]

let lineNumber = 0
for (const line of lines) {
  lineNumber++
  const stripped = stripWhitelistedContent(line)

  for (const { pattern, fix } of compoundAdjectiveViolations) {
    pattern.lastIndex = 0
    if (pattern.test(stripped)) {
      violations.push({
        line: lineNumber,
        type: 'Compound adjective (should be separated)',
        content: line.trim().substring(0, 100),
        fix: `Write as "${fix}"`
      })
    }
  }

  for (const { pattern, type, fix } of dashPatterns) {
    pattern.lastIndex = 0
    if (pattern.test(stripped)) {
      violations.push({
        line: lineNumber,
        type,
        content: line.trim().substring(0, 100),
        fix
      })
    }
  }

  // Check for hyphenated prose words not in whitelist
  const proseHyphenPattern = /\b([a-zA-Z]{2,})-([a-zA-Z]{2,})\b/g
  let match
  while ((match = proseHyphenPattern.exec(stripped)) !== null) {
    const full = match[0]

    const allowedPrefixes = [
      'Content-Type', 'X-Request', 'non-zero', 'e-commerce',
      'co-author', 'ISBN-', 'HTTP-', 'SGK-', 'v0', 'v1', 'v2', 'ap0', 'ch0', 'ch1'
    ]
    if (allowedPrefixes.some(a => full.startsWith(a))) {
      continue
    }

    const alreadyCaught = compoundAdjectiveViolations.some(({ pattern }) => {
      pattern.lastIndex = 0
      return pattern.test(full)
    })
    if (!alreadyCaught) {
      violations.push({
        line: lineNumber,
        type: 'Possible prose hyphen',
        content: line.trim().substring(0, 100),
        fix: `Verify "${full}": merge, separate, or confirm as whitelisted technical token`
      })
    }
  }
}

console.log('\n' + '═'.repeat(60))
console.log('  SGK RULE 19 CHECKER v2.0.0')
console.log('═'.repeat(60))
console.log(`\n  File: ${basename(filePath)}`)

if (violations.length === 0) {
  console.log('\n  ✅ CLEAN: Zero Rule 19 violations found.')
  console.log('  This file is Rule 19 compliant.\n')
  process.exit(0)
} else {
  console.log(`\n  ❌ VIOLATIONS FOUND: ${violations.length}`)
  console.log('\n  Detailed report:')

  for (let i = 0; i < violations.length; i++) {
    const v = violations[i]
    console.log(`\n  ${i + 1}. Line ${v.line} [${v.type}]`)
    console.log(`     Content: ...${v.content}...`)
    console.log(`     Fix: ${v.fix}`)
  }

  console.log('\n  Fix all violations before chapter certification.')
  console.log('  Re-run this tool after fixes to confirm compliance.\n')
  process.exit(1)
}
