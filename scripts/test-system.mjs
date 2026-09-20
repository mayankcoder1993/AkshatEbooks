import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { Packer } from 'docx'
import { buildBookDocument, setImageLoader } from '../src/export/docx.js'
import { loadBookPackage } from '../src/catalog/generated/registry.js'

const publication = await loadBookPackage('python-absolute-beginners', 'edition-01')
if (publication.BOOK.editionId !== 'edition-01' || publication.lessons.length !== 4) throw new Error('Edition registry did not load the expected current book')
if (publication.HOW_TO_READ?.title !== 'How to read this book') throw new Error('Edition registry did not load the reading guide')

const synthetic = {
  BRAND: publication.BRAND,
  BOOK: {
    ...publication.BOOK,
    id: 'renderer-test', title: 'Renderer Test', subtitle: 'Profile blocks', series: 'Test', author: 'Test',
    unitLabel: 'Chapter', acknowledgements: [], aboutAuthor: [],
  },
  PREFACE: { title: 'Preface', blocks: [{ type: 'paragraph', text: 'Synthetic validation only.' }] },
  lessons: [{
    id: 'profile-blocks', title: 'Profile Blocks', subtitle: 'Cross-domain rendering', shortTitle: 'Blocks',
    blocks: [
      { type: 'flow', title: 'A real route', stages: [{ eyebrow: 'START', title: 'Begin', detail: 'The first step.' }, { eyebrow: 'RESULT', title: 'Finish', detail: 'The visible result.' }], caption: 'A tested route.' },
      { type: 'definition', term: 'Inflation', text: 'A broad rise in prices.', example: 'The same basket costs more.' },
      { type: 'worked-example', title: 'Percentage', problem: 'Find ten percent of 50.', steps: ['Multiply 50 by 0.10.'], result: '5' },
      { type: 'case-study', kind: 'REAL CASE', title: 'A sourced event', context: 'Context.', points: ['Verified point.'], source: { label: 'Official source', url: 'https://example.com' } },
      { type: 'timeline', title: 'Sequence', items: [{ date: '2026', title: 'Event', text: 'Something happened.' }] },
      { type: 'comparison', title: 'Compare', columns: ['A','B'], rows: [['One','Two']] },
      { type: 'source-note', claim: 'A claim.', url: 'https://example.com', verifiedThrough: '2026-09-20' },
      { type: 'question', kind: 'verified-pyq', exam: 'Example Exam', year: 2025, sourceUrl: 'https://example.com', prompt: 'Explain.', answer: 'Model answer.', marking: ['One mark.'] },
      { type: 'activity', title: 'Observe', materials: ['Paper'], steps: ['Write one observation.'], safety: 'Use safe materials.' },
      { type: 'reflection', prompt: 'What did you notice?', guidance: ['Name one small detail.'] },
      { type: 'safety-notice', title: 'Support', text: 'Seek qualified help when needed.', resources: [['Resource','https://example.com']] },
    ],
  }],
}
setImageLoader(async source => new Uint8Array(await fs.readFile(source.startsWith('file:') ? fileURLToPath(source) : source)))
const buffer = await Packer.toBuffer(await buildBookDocument(synthetic))
if (buffer.length < 5000) throw new Error('Profile-block DOCX renderer produced an unexpectedly small document')
console.log(`System tests passed: edition registry and profile-block DOCX (${buffer.length} bytes).`)
