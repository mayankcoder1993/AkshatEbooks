import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { Packer } from 'docx'
import { buildBookDocument, setImageLoader } from '../src/export/docx.js'
import { loadBookPackage } from '../src/catalog/generated/registry.js'
import { evaluateArithmeticExpression } from '../src/utils/arithmeticExpression.js'

if (evaluateArithmeticExpression('25 * 3 + 25') !== 100) throw new Error('Arithmetic exercise did not evaluate a valid route to 100')
if (evaluateArithmeticExpression('7 // 4') !== 1 || evaluateArithmeticExpression('7 % 4') !== 3) throw new Error('Arithmetic exercise does not match Python division semantics')
if (evaluateArithmeticExpression('-2 ** 2') !== -4 || evaluateArithmeticExpression('2 ** 3 ** 2') !== 512) throw new Error('Arithmetic exercise does not match Python exponent precedence')
try { evaluateArithmeticExpression('alert(100)'); throw new Error('Arithmetic exercise accepted non-arithmetic code') } catch (error) { if (error.message === 'Arithmetic exercise accepted non-arithmetic code') throw error }

const publication = await loadBookPackage('python-absolute-beginners', 'edition-01')
if (publication.BOOK.editionId !== 'edition-01' || publication.lessons.length !== 5) throw new Error('Edition registry did not load the expected current book')
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
      { type: 'bytecode-map', version: 'Test runtime', groups: [{ source: 'value = 1', actions: [{ opcode: 'LOAD_CONST', action: 'Load one.', state: 'Stack: [1]' }] }], command: 'python -m dis test.py', caption: 'Test map.' },
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
