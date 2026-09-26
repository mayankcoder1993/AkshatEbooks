#!/usr/bin/env node
// SGK Handoff Memo Validator
// Usage: node framework/tools/handoff-memo-validator.mjs <memo-file>
// Exit 0: valid. Exit 1: incomplete memo.

import { readFileSync, existsSync } from 'fs'
import { resolve, basename } from 'path'

const filePath = resolve(process.argv[2] || '')

if (!process.argv[2] || !existsSync(filePath)) {
  console.error('Usage: node handoff-memo-validator.mjs <memo-file>')
  process.exit(1)
}

const content = readFileSync(filePath, 'utf8')
const issues = []

// Required sections in every handoff memo
const requiredSections = [
  { heading: 'From Stage:', description: 'Originating stage' },
  { heading: 'To Stage:', description: 'Receiving stage' },
  { heading: 'Book ID:', description: 'Book identifier' },
  { heading: 'OUTPUTS PRODUCED', description: 'List of produced files' },
  { heading: 'KEY DECISIONS MADE', description: 'Decision log' },
  { heading: 'OPEN QUESTIONS FOR NEXT STAGE',
    description: 'Questions for next agent' },
  { heading: 'NEXT STAGE INSTRUCTIONS', description: 'Instructions' },
  { heading: 'GUARDRAIL STATUS', description: 'Guardrail outcome' }
]

for (const { heading, description } of requiredSections) {
  if (!content.includes(heading)) {
    issues.push(`Missing section: "${heading}" (${description})`)
  }
}

// Check that KEY DECISIONS MADE has at least one decision
const decisionsSection = content.match(
  /KEY DECISIONS MADE([\s\S]*?)(?=DISCOVERIES|BUYER LANGUAGE|CONSTRAINTS|OPEN QUESTIONS|$)/i
)
if (decisionsSection && !decisionsSection[1].match(/DECISION \d+:/)) {
  issues.push(
    'KEY DECISIONS MADE section appears empty. ' +
    'Document at least one decision made during this stage.'
  )
}

// Check that OPEN QUESTIONS lists any questions or explicitly says NONE
const questionsSection = content.match(
  /OPEN QUESTIONS FOR NEXT STAGE([\s\S]*?)(?=WORLD BIBLE|NEXT STAGE|$)/i
)
if (questionsSection) {
  const qContent = questionsSection[1].trim()
  if (!qContent.match(/QUESTION \d+:|None\.|none\.|NONE/)) {
    issues.push(
      'OPEN QUESTIONS section must either list questions or explicitly state "None."'
    )
  }
}

// Output
console.log('\n' + '═'.repeat(60))
console.log('  SGK HANDOFF MEMO VALIDATOR v2.0.0')
console.log('═'.repeat(60))
console.log(`\n  Memo: ${basename(filePath)}`)

if (issues.length === 0) {
  console.log('\n  ✅ VALID: Handoff memo is complete.')
  console.log('  All required sections present.\n')
  process.exit(0)
} else {
  console.log(`\n  ❌ INCOMPLETE: ${issues.length} issue(s) found.`)
  for (let i = 0; i < issues.length; i++) {
    console.log(`\n  ${i + 1}. ${issues[i]}`)
  }
  console.log('\n  Complete all sections before handoff.\n')
  process.exit(1)
}
