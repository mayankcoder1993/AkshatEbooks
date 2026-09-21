import { spawnSync } from 'node:child_process'
import { discoverBooks } from './lib/book-system.mjs'

function run(command, args, env = process.env) {
  const result = spawnSync(command, args, { stdio: 'inherit', env })
  if (result.status !== 0) process.exit(result.status || 1)
}

run('npm', ['run', 'prepare:books'])
run(process.execPath, ['node_modules/vite/bin/vite.js', 'build'])
const books = await discoverBooks()
const editions = books.flatMap(book => book.editions
  .filter(item => item.contentFile && !['archived'].includes(item.edition.status))
  .map(item => ({ bookId: book.manifest.id, editionId: item.edition.id })))

for (const { bookId, editionId } of editions) {
  const env = { ...process.env, BOOK_ID: bookId, EDITION_ID: editionId }
  console.log(`\n=== Building ${bookId}/${editionId} ===`)
  run(process.execPath, ['--import', './scripts/register-jpg.mjs', 'scripts/generate-docx.mjs'], env)
  run(process.execPath, ['node_modules/vite/bin/vite.js', 'build', '--config', 'vite.singlefile.config.mjs'], env)
  run(process.execPath, ['--import', './scripts/register-jpg.mjs', 'scripts/copy-single.mjs'], env)
}
console.log(`\nBuilt the library and ${editions.length} readable edition(s).`)
