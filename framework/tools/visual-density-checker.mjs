#!/usr/bin/env node
// SGK Visual Density Checker
// Usage: node framework/tools/visual-density-checker.mjs <chapter-file>
// Exit 0: passes visual density law. Exit 1: fails.

import { readFileSync, existsSync } from 'fs'
import { resolve, basename } from 'path'

const filePath = resolve(process.argv[2] || '')

if (!process.argv[2] || !existsSync(filePath)) {
  console.error('Usage: node visual-density-checker.mjs <chapter-file>')
  process.exit(1)
}

const content = readFileSync(filePath, 'utf8')

// Block type detection patterns
const blockPatterns = {
  'scene-panel': [
    /\[BLOCK:scene-panel\]/g,
    /type:\s*['"]scene-panel['"]/g,
    /type:\s*['"]character-scene['"]/g,
    /type:\s*['"]storyboard['"]/g,
    /Beat \d+ \((?:scene-panel|character-scene|storyboard)\)/gi,
    /## SCENE \d+ OF \d+/g
  ],
  'dialogue-exchange': [
    /\[BLOCK:dialogue-exchange\]/g,
    /type:\s*['"]dialogue-exchange['"]/g,
    /Beat \d+ \(dialogue-exchange\)/gi,
    /^(SAMEER|AKSHAY|MENTOR|HERO|[A-Z]{3,}):\s*\[/gm
  ],
  'workbench-screen': [
    /\[BLOCK:workbench-screen\]/g,
    /type:\s*['"]workbench-screen['"]/g,
    /type:\s*['"]api-inspector['"]/g,
    /type:\s*['"]interactive-workbench['"]/g,
    /type:\s*['"]code-workbench['"]/g,
    /type:\s*['"]comic-workbench['"]/g,
    /type:\s*['"]terminal['"]/g,
    /type:\s*['"]code['"]/g,
    /type:\s*['"]runviz['"]/g,
    /type:\s*['"]flow['"]/g,
    /type:\s*['"]blueprint['"]/g,
    /Beat \d+ \((?:workbench-screen|api-inspector|interactive-workbench|code-workbench|comic-workbench|terminal|code|runviz|flow|blueprint)\)/gi,
    /workbench_type:/g,
    /```(javascript|json|bash|http|xml|yaml)/g
  ],
  'quad-card': [
    /\[BLOCK:quad-card\]/g,
    /type:\s*['"]quad-card['"]/g,
    /type:\s*['"]pedagogical-quad-card['"]/g,
    /Beat \d+ \((?:quad-card|pedagogical-quad-card)\)/gi,
    /INPUT:|UNDER THE HOOD:|Output:|SENIOR SAVIOR:/g,
    /breakdown:\s*\{/g
  ],
  'action-beat': [
    /\[BLOCK:action-beat\]/g,
    /type:\s*['"]action-beat['"]/g,
    /Beat \d+ \(action-beat\)/gi
  ],
  'thought-bubble': [
    /\[BLOCK:thought-bubble\]/g,
    /type:\s*['"]thought-bubble['"]/g,
    /Beat \d+ \(thought-bubble\)/gi,
    /\[(AKSHAY|HERO|[A-Z]+)\s+thinks?:/gi
  ],
  'challenge-prompt': [
    /\[BLOCK:challenge-prompt\]/g,
    /type:\s*['"]challenge-prompt['"]/g,
    /type:\s*['"]interactive-quiz['"]/g,
    /type:\s*['"]triage['"]/g,
    /type:\s*['"]predict-output['"]/g,
    /Beat \d+ \(challenge-prompt\)/gi,
    /^CHALLENGE:/gm
  ],
  'challenge-reveal': [
    /\[BLOCK:challenge-reveal\]/g,
    /type:\s*['"]challenge-reveal['"]/g,
    /Beat \d+ \(challenge-reveal\)/gi,
    /^ANSWER:/gm
  ],
  'cliffhanger-panel': [
    /\[BLOCK:cliffhanger-panel\]/g,
    /type:\s*['"]cliffhanger-panel['"]/g,
    /type:\s*['"]cliffhanger['"]/g,
    /Beat \d+ \(cliffhanger-panel\)/gi,
    /cliffhanger:\s*true/g
  ],
  'trap-alert': [
    /\[BLOCK:trap-alert\]/g,
    /type:\s*['"]trap-alert['"]/g,
    /Beat \d+ \(trap-alert\)/gi,
    /^TRAP ALERT:/gm
  ],
  'reference-anchor': [
    /\[BLOCK:reference-anchor\]/g,
    /type:\s*['"]reference-anchor['"]/g,
    /Beat \d+ \(reference-anchor\)/gi
  ],
  'narration-box': [
    /\[BLOCK:narration-box\]/g,
    /type:\s*['"]narration-box['"]/g,
    /Beat \d+ \(narration-box\)/gi
  ],
  'prose-paragraph': [
    /\[BLOCK:prose-paragraph\]/g,
    /type:\s*['"]prose-paragraph['"]/g,
    /type:\s*['"]exposition-narrative['"]/g,
    /Beat \d+ \((?:prose-paragraph|exposition-narrative)\)/gi
  ],
  'universe-link': [
    /\[BLOCK:universe-link\]/g,
    /type:\s*['"]universe-link['"]/g,
    /Beat \d+ \(universe-link\)/gi
  ]
}

// Count blocks
const counts = {}
for (const [blockType, patterns] of Object.entries(blockPatterns)) {
  let count = 0
  for (const pattern of patterns) {
    const matches = content.match(pattern) || []
    count += matches.length
    pattern.lastIndex = 0
  }
  counts[blockType] = count
}

// Categorise
const visualBlocks = [
  'scene-panel', 'action-beat', 'cliffhanger-panel'
]
const dialogueBlocks = [
  'dialogue-exchange', 'thought-bubble'
]
const interactiveBlocks = [
  'workbench-screen', 'challenge-prompt', 'challenge-reveal', 'quad-card'
]
const proseBlocks = [
  'prose-paragraph', 'narration-box'
]
const structureBlocks = [
  'trap-alert', 'reference-anchor', 'universe-link'
]

const visualCount = visualBlocks.reduce((s, t) => s + (counts[t] || 0), 0)
const dialogueCount = dialogueBlocks.reduce((s, t) => s + (counts[t] || 0), 0)
const interactiveCount = interactiveBlocks.reduce((s, t) =>
  s + (counts[t] || 0), 0)
const proseCount = proseBlocks.reduce((s, t) => s + (counts[t] || 0), 0)
const structureCount = structureBlocks.reduce((s, t) =>
  s + (counts[t] || 0), 0)

const totalContentBlocks = visualCount + dialogueCount +
  interactiveCount + proseCount
const total = totalContentBlocks + structureCount

const vdiRatio = totalContentBlocks > 0
  ? (visualCount + dialogueCount + interactiveCount) / totalContentBlocks
  : 0
const proseRatio = totalContentBlocks > 0 ? proseCount / totalContentBlocks : 0

const meetsScenePanelMin = (counts['scene-panel'] || 0) >= 3
const meetsCliffhanger = (counts['cliffhanger-panel'] || 0) >= 1
const meetsWorkbench = (counts['workbench-screen'] || 0) >= 1
const meetsQuadCard = (counts['quad-card'] || 0) >= 1
const meetsChallenge = (counts['challenge-prompt'] || 0) >= 1
const meetsThoughtBubble = (counts['thought-bubble'] || 0) >= 1
const meetsProseParagraphLimit = (counts['prose-paragraph'] || 0) <= 6
const meetsNarrationBoxLimit = (counts['narration-box'] || 0) <= 4

const passesVDLaw = vdiRatio >= 0.60 && proseRatio <= 0.25
const passesAllMinimums = meetsScenePanelMin && meetsCliffhanger &&
  meetsWorkbench && meetsQuadCard

const overallPass = passesVDLaw && passesAllMinimums

console.log('\n' + '═'.repeat(60))
console.log('  SGK VISUAL DENSITY CHECKER v2.0.0')
console.log('═'.repeat(60))
console.log(`\n  File: ${basename(filePath)}`)
console.log('\n  BLOCK COUNT BREAKDOWN:')
console.log('\n  VISUAL BLOCKS:')
for (const t of visualBlocks) {
  console.log(`    ${t.padEnd(25)} ${counts[t] || 0}`)
}
console.log('\n  DIALOGUE BLOCKS:')
for (const t of dialogueBlocks) {
  console.log(`    ${t.padEnd(25)} ${counts[t] || 0}`)
}
console.log('\n  INTERACTIVE BLOCKS:')
for (const t of interactiveBlocks) {
  console.log(`    ${t.padEnd(25)} ${counts[t] || 0}`)
}
console.log('\n  PROSE BLOCKS (restricted):')
for (const t of proseBlocks) {
  console.log(`    ${t.padEnd(25)} ${counts[t] || 0}`)
}
console.log('\n  STRUCTURE BLOCKS (neutral):')
for (const t of structureBlocks) {
  console.log(`    ${t.padEnd(25)} ${counts[t] || 0}`)
}

console.log('\n' + '─'.repeat(60))
console.log('  VISUAL DENSITY LAW:')
console.log(`    Visual+Dialogue+Interactive: ${
  Math.round(vdiRatio * 100)}% ${
  vdiRatio >= 0.60 ? '✅ (required >= 60%)' : '❌ (required >= 60%)'}`)
console.log(`    Prose ratio:                 ${
  Math.round(proseRatio * 100)}% ${
  proseRatio <= 0.25 ? '✅ (required <= 25%)' : '❌ (required <= 25%)'}`)

console.log('\n  REQUIRED BLOCK CHECKS:')
console.log(`    scene-panel:                 ${
  meetsScenePanelMin ? '✅' : '❌'} (found: ${counts['scene-panel'] || 0})`)
console.log(`    cliffhanger-panel:           ${
  meetsCliffhanger ? '✅' : '❌'} (found: ${counts['cliffhanger-panel'] || 0})`)
console.log(`    workbench-screen:            ${
  meetsWorkbench ? '✅' : '❌'} (found: ${counts['workbench-screen'] || 0})`)
console.log(`    quad-card:                   ${
  meetsQuadCard ? '✅' : '❌'} (found: ${counts['quad-card'] || 0})`)

console.log('\n' + '─'.repeat(60))
if (overallPass) {
  console.log('  ✅ RESULT: PASSES Visual Density Law')
  console.log('  Chapter block composition meets requirements.\n')
  process.exit(0)
} else {
  console.log('  ❌ RESULT: FAILS Visual Density Law')
  console.log()
  process.exit(1)
}
