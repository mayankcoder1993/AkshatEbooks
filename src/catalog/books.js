import lessons, { BOOK } from '../books/python-absolute-beginners/content/index.js'

export const BOOK_CATALOG = [
  {
    ...BOOK,
    status: 'In progress',
    statusTone: 'progress',
    progress: 80,
    completedLessons: lessons.length,
    nextMilestone: 'Add the input() lesson and integrate the owner-supplied crest and imprint logo.',
    route: `/books/${BOOK.id}`,
    lessons: lessons.map(({ id, title, subtitle }) => ({ id, title, subtitle })),
    formats: [
      { label: 'Interactive Web View', state: 'Ready' },
      { label: 'Book / PDF View', state: 'Ready' },
      { label: 'Editable Word', state: 'Ready' },
      { label: 'Offline HTML', state: 'Ready' },
    ],
    branding: [
      { label: 'Publisher identity', state: 'Ready' },
      { label: 'Family crest', state: 'Waiting for exact SVG' },
      { label: 'Imprint logo', state: 'Waiting for final logo PNG' },
    ],
  },
]

export const PUBLISHING_LAYERS = [
  ['Brief and profile', 'Each title defines its reader, promise, scope and category-specific editorial rules before drafting.'],
  ['Book packages', 'Metadata, chapters, front matter and teaching assets remain isolated by book ID.'],
  ['Publishing engine', 'Shared React renderers turn structured blocks into Web View and static Book View.'],
  ['Export engine', 'The same structured source becomes a native editable DOCX and self-contained offline HTML.'],
  ['Public catalog', 'The library shows truthful status, milestones, formats and links for every registered book.'],
]

export const LIVE_FOLDER_TREE = `src/
├── books/
│   └── python-absolute-beginners/
│       ├── BOOK_BRIEF.md  reader, scope and selected profile
│       ├── content/       metadata, Preface and lessons
│       └── assets/        book-specific teaching images
├── catalog/
│   └── books.js           library registry and status
├── components/            shared Web and Book renderers
├── export/                native Word exporter
└── styles/                shared design and print rules

public/
└── books/
    └── python-absolute-beginners/
        ├── Python-for-Absolute-Beginners-Interactive.html
        └── Python-for-Absolute-Beginners-The-First-Code-Series-Book-1.docx

brand/                     protected owner masters when supplied
docs/
├── agents/                core rules and category profiles
├── BOOK_BRIEF_TEMPLATE.md new-title contract
└── NEW_BOOK_WORKFLOW.md   branch and production workflow
scripts/                   build, export and brand generation tools`
