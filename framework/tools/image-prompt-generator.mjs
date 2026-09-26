#!/usr/bin/env node
// SGK Image Prompt Generator
// Converts storyboard scene-panel beats into Madhubani art prompts
// Usage: node framework/tools/image-prompt-generator.mjs
//          <storyboard-file> <character-cast-file> [--output <output-file>]

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, basename, dirname, join } from 'path'

const args = process.argv.slice(2)
if (args.length < 2) {
  console.error(
    'Usage: node image-prompt-generator.mjs ' +
    '<storyboard-file> <character-cast-file> [--output <file>]'
  )
  process.exit(1)
}

const storyboardFile = resolve(args[0])
const characterCastFile = resolve(args[1])
const outputIndex = args.indexOf('--output')
const outputFile = outputIndex !== -1
  ? resolve(args[outputIndex + 1])
  : join(dirname(storyboardFile), 'image-prompts-generated.md')

if (!existsSync(storyboardFile)) {
  console.error(`Storyboard file not found: ${storyboardFile}`)
  process.exit(1)
}

if (!existsSync(characterCastFile)) {
  console.error(`Character cast file not found: ${characterCastFile}`)
  process.exit(1)
}

const storyboardContent = readFileSync(storyboardFile, 'utf8')
const characterCastContent = readFileSync(characterCastFile, 'utf8')

// ─── MADHUBANI KEYWORD LIBRARY ─────────────────────────────

const MADHUBANI_STYLE_KEYWORDS = [
  'Madhubani Mithila folk art illustration',
  'authentic Indian folk painting tradition',
  'Bihar folk art style',
  'traditional Indian folk illustration',
  'hand drawn folk art style'
]

const TECHNIQUE_KEYWORDS = [
  'sharp almond eyes on all human figures',
  'delicate double line black ink outlines',
  'flat colour fills within outlines',
  'decorative floral and geometric border patterns on panel edges',
  'lotus and peacock motifs as decorative elements',
  'no gradients no shadows no photorealistic shading'
]

const STANDARD_NEGATIVE_PROMPT = [
  'no photorealistic human faces or figures',
  'no 3D rendering or CGI',
  'no Western comic book style',
  'no manga or anime style',
  'no dark or black backgrounds',
  'no modern glass buildings or steel skyscrapers',
  'no neon signs or fluorescent lighting',
  'no photographic textures or realistic shadows',
  'no Devanagari script or regional language text',
  'no copyrighted logos or branded elements',
  'no violent or adult content',
  'no blurry or low resolution output',
  'no gradient fills inside outlined shapes',
  'no Western clothing (no suits jeans shirts sneakers) on main characters',
  'no dark backgrounds whatsoever',
  'light and bright output only'
].join(', ')

const ASPECT_RATIOS = {
  'chapter-opener': '3:4',
  'full-page': '3:4',
  'half-page': '16:9',
  'quarter-page': '4:3',
  'character-portrait': '1:1',
  'cliffhanger': '21:9',
  'reference': '1:1'
}

// ─── EXTRACT SCENE PANELS FROM STORYBOARD ─────────────────

function extractScenePanels(storyboard) {
  const panels = []

  const scenePattern = /(?:##\s+)?SCENE (\d+) OF \d+:\s*([^\r\n]+)[\r\n]+([\s\S]*?)(?=(?:##\s+)?SCENE \d+ OF \d+:|(?:##\s+)?CHAPTER CLOSING|$(?![\s\S]))/g
  let sceneMatch

  while ((sceneMatch = scenePattern.exec(storyboard)) !== null) {
    const sceneNumber = sceneMatch[1]
    const sceneTitle = sceneMatch[2].trim()
    const sceneContent = sceneMatch[3]

    const settingMatch = sceneContent.match(/SETTING:([\s\S]*?)(?=CHARACTERS|SCENE BEATS|$)/i)
    const setting = settingMatch ? settingMatch[1].trim() : ''

    const charactersMatch = sceneContent.match(
      /CHARACTERS PRESENT:([\s\S]*?)(?=SCENE BEATS|$)/i
    )
    const characters = charactersMatch ? charactersMatch[1].trim() : ''

    const beatPattern = /Beat \d+ \((?:scene-panel|scene panel|cliffhanger-panel|cliffhanger panel)\):([\s\S]*?)(?=Beat \d+|TEACHING|EMOTIONAL|$)/gi
    let beatMatch

    while ((beatMatch = beatPattern.exec(sceneContent)) !== null) {
      panels.push({
        sceneNumber,
        sceneTitle,
        setting,
        characters,
        beatContent: beatMatch[1].trim()
      })
    }
  }

  return panels
}

// ─── EXTRACT CHARACTER DESCRIPTIONS ───────────────────────

function extractCharacterDescriptions(characterCast) {
  const descriptions = {}

  const mentorMatch = characterCast.match(
    /MENTOR[\s\S]*?VISUAL DESIGN BRIEF:([\s\S]*?)(?=TONE CONFIGURATION|HERO|$)/i
  )
  if (mentorMatch) {
    descriptions.mentor = mentorMatch[1].trim()
  }

  const heroMatch = characterCast.match(
    /HERO[\s\S]*?VISUAL DESIGN BRIEF:([\s\S]*?)(?=TONE CONFIGURATION|$)/i
  )
  if (heroMatch) {
    descriptions.hero = heroMatch[1].trim()
  }

  return descriptions
}

// ─── GENERATE POSITIVE PROMPT ──────────────────────────────

function generatePositivePrompt(panel, characterDescriptions, aspectRatio) {
  const styleDeclaration = MADHUBANI_STYLE_KEYWORDS[0]

  const composition = aspectRatio === '21:9'
    ? 'Wide cinematic establishing shot'
    : aspectRatio === '1:1'
      ? 'Portrait close up'
      : 'Medium scene composition showing characters and setting'

  const settingLines = panel.setting.split('\n')
    .filter(l => l.trim())
    .map(l => l.replace(/^\s*\w+:\s*/, '').trim())
    .filter(l => l.length > 0)
    .join(', ')

  const characterInfo = panel.characters.split('\n')
    .filter(l => l.trim() && l.includes(':'))
    .map(l => l.trim())
    .join('. ')

  const prompt = [
    `${styleDeclaration}.`,
    `${composition}.`,
    panel.beatContent.substring(0, 200) + '.',
    '',
    characterInfo || '[Character descriptions from CHARACTER_CAST.md]',
    '',
    TECHNIQUE_KEYWORDS.join(', ') + '.',
    '',
    `Heritage Indian setting: ${settingLines || '[Heritage setting from storyboard]'}.`,
    'Carved Dravidian stone pillars visible. Brass oil lamps providing warm lighting.',
    'Stone floor with geometric inlay pattern. Teak wood furniture.',
    '',
    'Warm saturated traditional Indian colour palette.',
    'Pure white background (#FFFFFF). Light bright airy scene.',
    'All text in image in English only.',
    '',
    `High detail. Print quality resolution. Aspect ratio ${aspectRatio}.`
  ].join('\n')

  return prompt
}

// ─── MAIN GENERATION ───────────────────────────────────────

const panels = extractScenePanels(storyboardContent)
const characterDescriptions = extractCharacterDescriptions(characterCastContent)

const chapterNumber = basename(storyboardFile)
  .match(/ch(\d+)/i)?.[1] || 'XX'

let output = `# IMAGE PROMPTS: Chapter ${chapterNumber}\n\n`
output += `Generated from: ${basename(storyboardFile)}\n`
output += `Character Cast: ${basename(characterCastFile)}\n`
output += `Generated: ${new Date().toISOString().split('T')[0]}\n\n`
output += '---\n\n'

output += '## CHARACTER REFERENCE CHECK\n\n'
output += 'Before using these prompts, confirm that reference sheets exist:\n'
output += '- [ ] Mentor character reference sheet generated and approved\n'
output += '- [ ] Hero character reference sheet generated and approved\n'
output += '- Reference sheets stored in: assets/reference/\n\n'
output += '---\n\n'

if (panels.length === 0) {
  output += '⚠️  No scene-panel beats detected in storyboard.\n'
  output += 'Ensure scene-panel beats are marked as: Beat N (scene-panel):\n'
} else {
  for (let i = 0; i < panels.length; i++) {
    const panel = panels[i]
    const isCliffhanger = panel.sceneTitle.toLowerCase().includes('cliffhanger')
    const aspectRatio = isCliffhanger
      ? ASPECT_RATIOS.cliffhanger
      : ASPECT_RATIOS['half-page']

    output += `## Scene ${panel.sceneNumber}: ${panel.sceneTitle}: Panel ${i + 1}\n\n`
    output += `**Block**: scene-panel\n`
    output += `**Aspect Ratio**: ${aspectRatio}\n`
    output += `**Asset destination**: `
    output += `assets/illustrations/ch${chapterNumber}-scene${panel.sceneNumber}`
    output += `-panel${i + 1}.jpg\n\n`

    output += '### POSITIVE PROMPT:\n\n```\n'
    output += generatePositivePrompt(panel, characterDescriptions, aspectRatio)
    output += '\n```\n\n'

    output += '### NEGATIVE PROMPT:\n\n```\n'
    output += STANDARD_NEGATIVE_PROMPT
    output += '\n```\n\n'

    output += '### PARAMETERS:\n'
    output += `- Aspect ratio: ${aspectRatio}\n`
    output += '- Reference image: [Path to character reference sheet]\n'
    output += '- Style: Madhubani Mithila folk art\n'
    output += '- Quality: High detail, print resolution\n\n'

    output += '### CONSISTENCY CHECK (complete after generation):\n'
    output += '- [ ] Mentor appears consistent with reference sheet\n'
    output += '- [ ] Hero appears consistent with reference sheet\n'
    output += '- [ ] Madhubani art style consistent (almond eyes, double outlines)\n'
    output += '- [ ] Heritage setting elements correct\n'
    output += '- [ ] No dark backgrounds\n'
    output += '- [ ] No Western clothing on main characters\n'
    output += '- [ ] No Devanagari or regional script visible\n\n'

    output += '---\n\n'
  }
}

writeFileSync(outputFile, output, 'utf8')

console.log('\n' + '═'.repeat(60))
console.log('  SGK IMAGE PROMPT GENERATOR v2.0.0')
console.log('═'.repeat(60))
console.log(`\n  Input storyboard: ${basename(storyboardFile)}`)
console.log(`  Scene-panel beats found: ${panels.length}`)
console.log(`  Output file: ${outputFile}`)
console.log('\n  Next steps:')
console.log('  1. Review generated prompts and adjust character descriptions')
console.log('     to match CHARACTER_CAST.md visual design briefs exactly.')
console.log('  2. Submit prompts to your AI image generation tool.')
console.log('  3. Run consistency check for each generated image.')
console.log('  4. Place approved images in assets/illustrations/')
console.log('  5. Update World Bible Section 5 with reference sheet paths.\n')
