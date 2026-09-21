import catalog from './generated/books.json'

export const BOOK_CATALOG = catalog

export const PUBLISHING_LAYERS = [
  ['Brief and profile', 'Each title defines its reader, promise, scope and category-specific editorial rules before drafting.'],
  ['Book and edition manifests', 'Lightweight validated metadata drives the catalog, active edition, outputs and release readiness.'],
  ['Book packages', 'Domain-grouped chapters, front matter and teaching assets remain isolated by permanent book ID and edition.'],
  ['Publishing engine', 'Lazy-loaded structured content becomes interactive Web View and static Book View.'],
  ['Export and release engine', 'The same approved edition becomes DOCX, offline HTML and immutable release records.'],
]

export const LIVE_FOLDER_TREE = `src/
├── books/
│   └── technical/programming/
│       ├── python-absolute-beginners/
│       │   ├── book.manifest.json
│       │   ├── BOOK_BRIEF.md
│       │   ├── shared/
│       │   └── editions/edition-01/
│       │       ├── edition.manifest.json
│       │       ├── content/
│       │       ├── assets/
│       │       └── CHANGELOG.md
│       └── testing/
│           └── zero-to-agentic-api-testing/
│               ├── book.manifest.json
│               ├── BOOK_BRIEF.md
│               ├── shared/
│               └── editions/edition-01/
│                   ├── edition.manifest.json
│                   ├── content/
│                   └── CHANGELOG.md
├── catalog/
│   ├── generated/books.json     lightweight library index
│   └── generated/registry.js    lazy book loaders
├── components/                  shared renderers
├── export/                      native Word exporter
├── schemas/                     manifest contracts
└── styles/                      core, catalog and profile styles

public/books/<book-id>/<edition-id>/
                                generated reader deliverables

docs/agents/                   layered AI authoring instructions
scripts/                       validation, catalog and build tools`
