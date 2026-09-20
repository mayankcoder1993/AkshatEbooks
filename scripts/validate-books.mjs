import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { discoverBooks, projectRelative } from './lib/book-system.mjs'

const allowedBlocks = new Set(['heading','paragraph','image','mission','think','guess','bug','callout','flow','bytecode-map','blueprint','code','runviz','terminal','pipeline','steps','mistakes','quiz','takeaways','aha','cliffhanger','resources','definition','worked-example','case-study','timeline','comparison','source-note','question','activity','arithmetic-exercise','reflection','safety-notice'])
const books = await discoverBooks()
let editionCount = 0
let chapterCount = 0
let blockCount = 0

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

function containsEmDash(value) {
  if (typeof value === 'string') return value.includes('\u2014')
  if (Array.isArray(value)) return value.some(containsEmDash)
  if (value && typeof value === 'object') return Object.values(value).some(containsEmDash)
  return false
}

async function validateBlocks(blocks, context, bookDirectory) {
  assert(Array.isArray(blocks) && blocks.length, `${context}: blocks must be a non-empty array`)
  for (const [index, block] of blocks.entries()) {
    const label = `${context} block ${index + 1}`
    assert(block && allowedBlocks.has(block.type), `${label}: unknown block type ${block?.type}`)
    assert(!containsEmDash(block), `${label}: Unicode em dash (U+2014) is not allowed`)
    blockCount += 1
    if (block.type === 'image') {
      assert(block.alt && block.w > 0 && block.h > 0 && block.file, `${label}: image requires file, dimensions and alt text`)
      const absolute = path.resolve(block.file)
      await fs.access(absolute)
      assert(absolute.startsWith(bookDirectory + path.sep), `${label}: image must stay inside its book package`)
    }
    if (block.type === 'quiz') assert(Array.isArray(block.items) && block.items.every(item => Array.isArray(item) && item.length === 2), `${label}: quiz items require question and answer`)
    if (block.type === 'runviz') assert(Array.isArray(block.steps) && block.steps.length, `${label}: run visualizer requires steps`)
    if (block.type === 'bytecode-map') assert(block.version && block.groups?.length && block.groups.every(group => group.source && group.actions?.length && group.actions.every(action => action.opcode && action.action)), `${label}: bytecode map requires a version and source groups with named actions`)
    if (block.type === 'definition') assert(block.term && block.text, `${label}: definition requires term and text`)
    if (block.type === 'worked-example') assert(block.title && block.problem && block.result && block.steps?.length, `${label}: worked example requires title, problem, steps and result`)
    if (block.type === 'case-study') assert(block.title && block.context, `${label}: case study requires title and context`)
    if (block.type === 'timeline') assert(block.title && block.items?.every(item => item.date && item.title && item.text), `${label}: timeline requires dated items`)
    if (block.type === 'comparison') assert(block.title && block.columns?.length && block.rows?.every(row => row.length === block.columns.length), `${label}: comparison rows must match columns`)
    if (block.type === 'source-note') assert(block.claim, `${label}: source note requires a claim`)
    if (block.type === 'question') {
      assert(block.prompt && block.answer, `${label}: question requires prompt and answer`)
      if (block.kind === 'verified-pyq') assert(block.exam && block.year && block.sourceUrl, `${label}: verified PYQ requires exam, year and official source URL`)
    }
    if (block.type === 'activity') assert(block.title && block.steps?.length, `${label}: activity requires title and steps`)
    if (block.type === 'reflection') assert(block.prompt, `${label}: reflection requires prompt`)
    if (block.type === 'safety-notice') assert(block.text, `${label}: safety notice requires text`)
  }
}

for (const entry of books) {
  assert(!containsEmDash(entry.manifest), `${entry.manifest.id}: Unicode em dash (U+2014) is not allowed in the book manifest`)
  for (const editionEntry of entry.editions) {
    const { edition, contentFile } = editionEntry
    const prefix = `${entry.manifest.id}/${edition.id}`
    assert(!containsEmDash(edition), `${prefix}: Unicode em dash (U+2014) is not allowed in the edition manifest`)
    editionCount += 1
    if (!contentFile) {
      console.log(`○ ${prefix}: ${edition.status} edition (no reader content yet)`)
      continue
    }

    const module = await import(pathToFileURL(contentFile))
    const chapters = module.default
    assert(Array.isArray(chapters), `${prefix}: default export must be a chapter array`)
    assert(!containsEmDash(module.BOOK), `${prefix}: Unicode em dash (U+2014) is not allowed in book content metadata`)
    assert(!containsEmDash(module.PREFACE?.title), `${prefix}: Unicode em dash (U+2014) is not allowed in the Preface title`)
    assert(!containsEmDash(module.HOW_TO_READ?.title), `${prefix}: Unicode em dash (U+2014) is not allowed in the reading-guide title`)
    assert(module.BOOK?.id === entry.manifest.id, `${prefix}: content BOOK.id does not match manifest`)
    assert(module.BOOK?.editionId === edition.id, `${prefix}: content edition does not match manifest`)
    assert(module.BOOK?.version === edition.contentVersion, `${prefix}: content version does not match edition manifest`)
    assert(module.BOOK?.outputDir === edition.outputDir, `${prefix}: output directory does not match edition manifest`)
    assert(module.BOOK?.filename === edition.outputs.docx, `${prefix}: DOCX filename does not match edition manifest`)
    assert(module.BOOK?.offlineFilename === edition.outputs.offlineHtml, `${prefix}: HTML filename does not match edition manifest`)
    assert(chapters.length === edition.chapters.length, `${prefix}: edition manifest and content chapter counts differ`)

    for (let index = 0; index < chapters.length; index += 1) {
      const chapterData = chapters[index]
      const chapterManifest = edition.chapters[index]
      const context = `${prefix}/${chapterData.id || `chapter-${index + 1}`}`
      assert(!containsEmDash({ title: chapterData.title, subtitle: chapterData.subtitle, shortTitle: chapterData.shortTitle }), `${context}: Unicode em dash (U+2014) is not allowed in chapter metadata`)
      assert(chapterData.id === chapterManifest.id, `${context}: chapter id/order does not match edition manifest`)
      assert(chapterData.title === chapterManifest.title && chapterData.subtitle === chapterManifest.subtitle, `${context}: title or subtitle does not match edition manifest`)
      assert(chapterData.shortTitle, `${context}: short title is required`)
      assert(chapterData.blocks?.[0]?.type === 'mission', `${context}: the mission must be the first teaching block`)
      await validateBlocks(chapterData.blocks, context, entry.directory)
      chapterCount += 1
    }
    await validateBlocks(module.PREFACE?.blocks, `${prefix}/preface`, entry.directory)
    if (module.HOW_TO_READ) await validateBlocks(module.HOW_TO_READ.blocks, `${prefix}/how-to-read`, entry.directory)
    console.log(`✓ ${prefix}: ${chapters.length} chapters, ${edition.label} v${edition.contentVersion}`)
  }
}

console.log(`Validated ${books.length} book(s), ${editionCount} edition(s), ${chapterCount} chapter(s) and ${blockCount} content block(s).`)
console.log(`Catalog source: ${projectRelative(books[0].manifestFile).split('/').slice(0, -1).join('/')} and peers`)
