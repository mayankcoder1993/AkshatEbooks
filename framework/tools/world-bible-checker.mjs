#!/usr/bin/env node
// SGK World Bible Checker
// Usage: node framework/tools/world-bible-checker.mjs
//          <chapter-file> <world-bible-file>
// Exit 0: consistent. Exit 1: violations found.

import { readFileSync, existsSync } from 'fs'
import { resolve, basename } from 'path'

const args = process.argv.slice(2)
if (args.length < 2) {
  console.error(
    'Usage: node world-bible-checker.mjs <chapter-file> <world-bible-file>'
  )
  process.exit(1)
}

const chapterFile = resolve(args[0])
const worldBibleFile = resolve(args[1])

if (!existsSync(chapterFile)) {
  console.error(`Chapter file not found: ${chapterFile}`)
  process.exit(1)
}
if (!existsSync(worldBibleFile)) {
  console.error(`World Bible file not found: ${worldBibleFile}`)
  process.exit(1)
}

const chapterContent = readFileSync(chapterFile, 'utf8')
const worldBibleContent = readFileSync(worldBibleFile, 'utf8')

const violations = []
const warnings = []

// ─── EXTRACT LOCKED VOCABULARY ─────────────────────────────

function extractLockedVocabulary(worldBible) {
  const vocabSection = worldBible.match(
    /TECHNICAL NAMING CONVENTIONS:([\s\S]*?)(?=ANALOGY REGISTRY:|## SECTION|$)/i
  )
  const namingConventions = []

  if (vocabSection) {
    const lines = vocabSection[1].split('\n')
    for (const line of lines) {
      const match = line.match(/Always refer to\s+(.+?)\s+as\s+"(.+?)"/i)
      if (match) {
        namingConventions.push({
          prohibited: match[1].trim(),
          required: match[2].trim()
        })
      }
      const neverMatch = line.match(/Never\s+(?:say|use|write|call it)\s+"(.+?)"/i)
      if (neverMatch) {
        namingConventions.push({
          prohibited: neverMatch[1].trim(),
          required: 'See locked vocabulary for correct term'
        })
      }
    }
  }

  return namingConventions
}

// ─── EXTRACT USED ANALOGIES ────────────────────────────────

function extractUsedAnalogies(worldBible) {
  const analogySection = worldBible.match(
    /ANALOGY REGISTRY:([\s\S]*?)(?=PLANNED ANALOGIES:|## SECTION|TECHNICAL|$)/i
  )
  const usedAnalogies = []

  if (analogySection) {
    const lines = analogySection[1].split('\n')
    for (const line of lines) {
      const usedMatch = line.match(/(.+?):\s*Chapter \d+.*Status:\s*USED/i)
      if (usedMatch) {
        usedAnalogies.push(usedMatch[1].trim().toLowerCase())
      }
    }
  }

  return usedAnalogies
}

// ─── EXTRACT RESERVED ANALOGIES ───────────────────────────

function extractReservedAnalogies(worldBible) {
  const plannedSection = worldBible.match(
    /PLANNED ANALOGIES:([\s\S]*?)(?=## SECTION|TECHNICAL|$)/i
  )
  const reservedAnalogies = []

  if (plannedSection) {
    const lines = plannedSection[1].split('\n')
    for (const line of lines) {
      const reservedMatch = line.match(
        /(.+?):\s*Planned chapter (\d+).*Status:\s*RESERVED/i
      )
      if (reservedMatch) {
        reservedAnalogies.push({
          analogy: reservedMatch[1].trim().toLowerCase(),
          plannedChapter: parseInt(reservedMatch[2])
        })
      }
    }
  }

  return reservedAnalogies
}

// ─── RUN CHECKS ────────────────────────────────────────────

const namingConventions = extractLockedVocabulary(worldBibleContent)
const usedAnalogies = extractUsedAnalogies(worldBibleContent)
const reservedAnalogies = extractReservedAnalogies(worldBibleContent)

for (const { prohibited, required } of namingConventions) {
  const pattern = new RegExp(`\\b${prohibited.replace(/[.*+?^${}()|[\]\\]/g,
    '\\$&')}\\b`, 'gi')
  const matches = chapterContent.match(pattern)
  if (matches) {
    violations.push({
      type: 'NAMING CONVENTION VIOLATION',
      detail: `"${prohibited}" found ${matches.length} time(s). ` +
        `Use "${required}" instead.`
    })
  }
}

for (const analogy of usedAnalogies) {
  if (chapterContent.toLowerCase().includes(analogy)) {
    warnings.push({
      type: 'POSSIBLE ANALOGY REUSE',
      detail: `Analogy "${analogy}" is marked USED in a previous chapter. ` +
        'If introduced as new here, this is a violation. ' +
        'If referenced as a callback, this is acceptable.'
    })
  }
}

for (const { analogy, plannedChapter } of reservedAnalogies) {
  if (chapterContent.toLowerCase().includes(analogy)) {
    violations.push({
      type: 'RESERVED ANALOGY USED TOO EARLY',
      detail: `Analogy "${analogy}" is RESERVED for Chapter ${plannedChapter}. ` +
        'Do not use it before its planned chapter.'
    })
  }
}

const prohibitedToolNames = [
  { name: 'Postman', allowed: false,
    reason: 'Use "API Testing Workbench" or "API Client"' },
  { name: 'VS Code', allowed: false,
    reason: 'Use "IDE" or "Code Editor"' },
  { name: 'Visual Studio Code', allowed: false,
    reason: 'Use "IDE" or "Code Editor"' }
]

for (const { name, reason } of prohibitedToolNames) {
  const pattern = new RegExp(`\\b${name}\\b`, 'gi')
  const matches = chapterContent.match(pattern)
  if (matches) {
    violations.push({
      type: 'PROHIBITED BRAND NAME',
      detail: `"${name}" found ${matches.length} time(s). ${reason}`
    })
  }
}

console.log('\n' + '═'.repeat(60))
console.log('  SGK WORLD BIBLE CHECKER v2.0.0')
console.log('═'.repeat(60))
console.log(`\n  Chapter: ${basename(chapterFile)}`)
console.log(`  World Bible: ${basename(worldBibleFile)}`)

if (violations.length === 0 && warnings.length === 0) {
  console.log('\n  ✅ CLEAN: No World Bible violations detected.')
  console.log('  Note: Full compliance requires human review of')
  console.log('  Established Facts, Emotional Arc, and Tone Envelope.\n')
  process.exit(0)
} else {
  if (violations.length > 0) {
    console.log(`\n  ❌ VIOLATIONS: ${violations.length}`)
    for (let i = 0; i < violations.length; i++) {
      console.log(`\n  ${i + 1}. [${violations[i].type}]`)
      console.log(`     ${violations[i].detail}`)
    }
  }

  if (warnings.length > 0) {
    console.log(`\n  ⚠️  WARNINGS (require human review): ${warnings.length}`)
    for (let i = 0; i < warnings.length; i++) {
      console.log(`\n  ${i + 1}. [${warnings[i].type}]`)
      console.log(`     ${warnings[i].detail}`)
    }
  }

  console.log('\n  Resolve all violations before Stage 7 certification.\n')
  process.exit(violations.length > 0 ? 1 : 0)
}
