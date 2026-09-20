import fs from 'node:fs/promises'
import path from 'node:path'

const args = Object.fromEntries(process.argv.slice(2).reduce((pairs, item, index, all) => {
  if (item.startsWith('--')) pairs.push([item.slice(2), all[index + 1]])
  return pairs
}, []))
const required = ['id', 'title', 'domain', 'profile']
for (const key of required) if (!args[key] || args[key].startsWith('--')) throw new Error(`Missing --${key}`)
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(args.id)) throw new Error('--id must use lowercase kebab-case')
const profiles = ['TECHNICAL', 'EXAM_PREPARATION', 'SCHOOL_TEXTBOOK', 'WELLBEING']
if (!profiles.includes(args.profile)) throw new Error(`--profile must be one of: ${profiles.join(', ')}`)

const subdomain = args.subdomain || 'general'
const directory = path.join('src/books', args.domain, subdomain, args.id)
try { await fs.access(directory); throw new Error(`Book directory already exists: ${directory}`) } catch (error) { if (error.message.startsWith('Book directory')) throw error }
const editionDir = path.join(directory, 'editions/edition-01')
await Promise.all([
  fs.mkdir(path.join(directory, 'shared/assets'), { recursive: true }),
  fs.mkdir(path.join(directory, 'shared/research'), { recursive: true }),
  fs.mkdir(path.join(editionDir, 'content'), { recursive: true }),
  fs.mkdir(path.join(editionDir, 'assets'), { recursive: true }),
  fs.mkdir(path.join(editionDir, 'theme'), { recursive: true }),
])

const safeName = args.id.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join('-')
const bookPath = directory.split(path.sep).join('/')
const manifest = {
  $schema: '../../../../schemas/book-manifest.schema.json',
  schemaVersion: 1,
  id: args.id,
  domain: args.domain,
  subdomain,
  profile: args.profile,
  title: args.title,
  subtitle: args.subtitle || '',
  series: args.series || 'Standalone',
  author: args.author || 'Akshat Sinha',
  status: 'planned',
  statusLabel: 'Planned',
  progress: 0,
  readable: false,
  currentEdition: 'edition-01',
  route: `/books/${args.id}`,
  nextMilestone: 'Complete and approve the book brief, source plan and first-edition blueprint.',
  instructionFiles: ['AGENTS.md', 'docs/agents/CORE_EDITORIAL.md', 'docs/agents/AI_AUTHORING_WORKFLOW.md', `docs/agents/profiles/${args.profile}.md`, `${bookPath}/AGENTS.md`, `${bookPath}/BOOK_BRIEF.md`],
  chapters: [],
  formats: [
    { id: 'web', label: 'Interactive Web View', state: 'planned' },
    { id: 'book', label: 'Book / PDF View', state: 'planned' },
    { id: 'docx', label: 'Editable Word', state: 'planned' },
    { id: 'offline-html', label: 'Offline HTML', state: 'planned' },
  ],
  branding: [
    { id: 'publisher', label: 'Publisher identity', state: 'ready', stateLabel: 'Ready' },
    { id: 'crest', label: 'Family crest', state: 'blocked', stateLabel: 'Waiting for exact SVG' },
    { id: 'imprint-logo', label: 'Imprint logo', state: 'blocked', stateLabel: 'Waiting for final logo PNG' },
  ],
}
const date = new Date().toISOString().slice(0, 10)
const edition = {
  $schema: '../../../../../../schemas/edition-manifest.schema.json',
  schemaVersion: 1,
  bookId: args.id,
  id: 'edition-01',
  label: 'First Edition',
  contentVersion: '0.1.0',
  publicationYear: Number(args.year || date.slice(0, 4)),
  status: 'planned',
  verifiedThrough: date,
  outputDir: `public/books/${args.id}/edition-01`,
  outputs: { docx: `${safeName}-Edition-01.docx`, offlineHtml: `${safeName}-Edition-01.html` },
}
const brief = `# Book Brief — ${args.title}\n\n## Identity\n\n- Book ID: \`${args.id}\`\n- Primary profile: \`${args.profile}\`\n- Domain: \`${args.domain}\`\n- Subdomain: \`${subdomain}\`\n- Status: planned\n\n## Reader\n\nDefine the exact reader, context, assumed knowledge, language and accessibility needs.\n\n## Promise and limits\n\nDefine the reader promise, measurable outcomes, in-scope topics, exclusions and professional-review needs.\n\n## Source authority\n\nList primary authorities, applicable versions or years, research-ledger location and permissions requirements.\n\n## Structure\n\nAdd the approved part and chapter blueprint before drafting.\n\n## Publication\n\nRequired outputs are Web, Book/PDF, editable DOCX and self-contained offline HTML. Set \`readable\` to true only after a valid content module exists and passes validation.\n`
const agents = `# ${args.title} — Book-Specific AI Instructions\n\nRead the root playbook, core editorial standard, AI authoring workflow, \`${args.profile}\` profile and this book's brief first.\n\nRecord only title-specific rules here. Do not duplicate publisher-wide instructions.\n`

await Promise.all([
  fs.writeFile(path.join(directory, 'book.manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`),
  fs.writeFile(path.join(directory, 'BOOK_BRIEF.md'), brief),
  fs.writeFile(path.join(directory, 'AGENTS.md'), agents),
  fs.writeFile(path.join(editionDir, 'edition.manifest.json'), `${JSON.stringify(edition, null, 2)}\n`),
  fs.writeFile(path.join(editionDir, 'CHANGELOG.md'), `# First Edition Changelog\n\n## 0.1.0 — ${date}\n\n- Created the planned book package.\n`),
])
console.log(`Created planned book package: ${directory}`)
console.log('Next: complete BOOK_BRIEF.md, approve the blueprint, add structured content, then set readable=true and contentModule in the edition manifest.')
