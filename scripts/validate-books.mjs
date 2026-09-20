import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { discoverBooks, projectRelative } from './lib/book-system.mjs'

const allowedBlocks = new Set(['heading','paragraph','image','mission','think','guess','bug','callout','flow','blueprint','code','runviz','terminal','pipeline','steps','mistakes','quiz','takeaways','aha','cliffhanger','resources'])
const books = await discoverBooks()
let lessonCount = 0
let blockCount = 0

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

async function validateBlocks(blocks, context, bookDirectory) {
  assert(Array.isArray(blocks) && blocks.length, `${context}: blocks must be a non-empty array`)
  for (const [index, block] of blocks.entries()) {
    const label = `${context} block ${index + 1}`
    assert(block && allowedBlocks.has(block.type), `${label}: unknown block type ${block?.type}`)
    blockCount += 1
    if (block.type === 'image') {
      assert(block.alt && block.w > 0 && block.h > 0 && block.file, `${label}: image requires file, dimensions and alt text`)
      const absolute = path.resolve(block.file)
      await fs.access(absolute)
      assert(absolute.startsWith(bookDirectory + path.sep), `${label}: image must stay inside its book package`)
    }
    if (block.type === 'quiz') assert(Array.isArray(block.items) && block.items.every(item => Array.isArray(item) && item.length === 2), `${label}: quiz items require question and answer`)
    if (block.type === 'runviz') assert(Array.isArray(block.steps) && block.steps.length, `${label}: run visualizer requires steps`)
  }
}

for (const entry of books) {
  if (!entry.manifest.readable) {
    console.log(`○ ${entry.manifest.id}: planned package (not yet reader-accessible)`)
    continue
  }
  const module = await import(pathToFileURL(entry.contentFile))
  const lessons = module.default
  assert(Array.isArray(lessons), `${entry.manifest.id}: default export must be a lesson array`)
  assert(module.BOOK?.id === entry.manifest.id, `${entry.manifest.id}: content BOOK.id does not match manifest`)
  assert(module.BOOK?.editionId === entry.edition.id, `${entry.manifest.id}: content edition does not match manifest`)
  assert(module.BOOK?.version === entry.edition.contentVersion, `${entry.manifest.id}: content version does not match edition manifest`)
  assert(module.BOOK?.outputDir === entry.edition.outputDir, `${entry.manifest.id}: output directory does not match edition manifest`)
  assert(module.BOOK?.filename === entry.edition.outputs.docx, `${entry.manifest.id}: DOCX filename does not match edition manifest`)
  assert(module.BOOK?.offlineFilename === entry.edition.outputs.offlineHtml, `${entry.manifest.id}: HTML filename does not match edition manifest`)
  assert(lessons.length === entry.manifest.chapters.length, `${entry.manifest.id}: manifest and content chapter counts differ`)

  for (let index = 0; index < lessons.length; index += 1) {
    const lesson = lessons[index]
    const chapter = entry.manifest.chapters[index]
    const context = `${entry.manifest.id}/${lesson.id || `chapter-${index + 1}`}`
    assert(lesson.id === chapter.id, `${context}: chapter id/order does not match manifest`)
    assert(lesson.title === chapter.title && lesson.subtitle === chapter.subtitle, `${context}: title or subtitle does not match manifest`)
    assert(lesson.shortTitle, `${context}: short title is required`)
    await validateBlocks(lesson.blocks, context, entry.directory)
    lessonCount += 1
  }
  await validateBlocks(module.PREFACE?.blocks, `${entry.manifest.id}/preface`, entry.directory)
  console.log(`✓ ${entry.manifest.id}: ${lessons.length} chapters, ${entry.edition.label} v${entry.edition.contentVersion}`)
}

console.log(`Validated ${books.length} book(s), ${lessonCount} chapter(s) and ${blockCount} content block(s).`)
console.log(`Catalog source: ${projectRelative(books[0].manifestFile).split('/').slice(0, -1).join('/')} and peers`)
