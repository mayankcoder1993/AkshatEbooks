const collectionCode = [
  'from pathlib import Path',
  '',
  'history = ["help", "add maths"]',
  'latest = history.pop()',
  'history.append(latest)',
  'profile = ("Mira", 7)',
  'name, level = profile',
  'notes = {"maths": "Practise fractions"}',
  'notes["science"] = "Review cells"',
  'tags = {"urgent", "maths", "maths"}',
  '',
  'path = Path("session.txt")',
  'path.write_text("\\n".join(history), encoding="utf-8")',
  'loaded = path.read_text(encoding="utf-8").splitlines()',
  'print(name, level, notes["maths"], sorted(tags), loaded)'
]

export const chapter03 = {
  id: 'organize-data', icon: '▦', title: 'Organize Data', shortTitle: 'Data',
  subtitle: 'Choose a collection for commands, fixed records, note lookups and unique tags.', tags: ['Packing challenge', 'Collections', '55 min'],
  blocks: [
    { type: 'arc-progress', arcTitle: 'Create an Interactive Terminal Assistant', step: 3, total: 5, currentFocus: 'Organize memory', text: 'Give each kind of assistant data a structure that matches its job.' },
    { type: 'think', prompt: 'Would one variable per note still be easy to use after fifty notes?', answer: 'No. A collection keeps related values together and lets one operation work across them.' },
    { type: 'comparison', title: 'Four collection jobs', columns: ['Structure', 'Best fit', 'Can change?', 'Important rule'], rows: [['List `[]`', 'Ordered command history', 'Yes', 'Positions use indexes.'], ['Tuple `()`', 'Fixed result record', 'No', 'The comma forms a tuple.'], ['Dictionary `{key: value}`', 'Title-to-note lookup', 'Yes', 'Keys must be hashable.'], ['Set `{value}`', 'Unique tags and fast membership', 'Yes', 'Order is not a position contract.']] },
    { type: 'heading', text: 'Lists preserve an order' },
    { type: 'paragraph', text: 'A **list** is an ordered, mutable collection. Mutable means it can change. Use `append()` to add an item and `pop()` to remove and return one. Indexing and slicing follow the same boundary rules as strings.' },
    { type: 'worked-example', title: 'Sort without losing the list', problem: 'Why does `saved = items.sort()` make `saved` equal `None`?', steps: ['`sort()` changes the existing list in place.', 'Its job is the change, so it returns `None`.', 'Use `items.sort()` and then read `items`, or use `saved = sorted(items)` to build a new sorted list.'], result: 'Choose an in-place method only when you intend to mutate the original list.' },
    { type: 'heading', text: 'Tuples record a fixed group' },
    { type: 'paragraph', text: 'A **tuple** is an ordered collection that cannot be changed in place. The comma is essential: `pair = "Mira", 7`. Packing creates the tuple. Unpacking assigns its parts with `name, level = pair`.' },
    { type: 'heading', text: 'Dictionaries connect keys to values' },
    { type: 'paragraph', text: 'A **dictionary** maps each unique key to a value. `notes["maths"]` looks up a note. Assignment with a new key inserts a pair. Assignment with an existing key updates its value. Dictionaries preserve insertion order, but lookup is by key rather than position.' },
    { type: 'heading', text: 'Sets keep unique values' },
    { type: 'paragraph', text: 'A **set** stores unique hashable values. It is useful for membership and duplicate removal. `{}` is an empty dictionary, so use `set()` for an empty set.' },
    { type: 'code', filename: 'collections_lab.py', lines: collectionCode },
    { type: 'terminal', command: 'python collections_lab.py', lines: ["Mira 7 Practise fractions ['maths', 'urgent'] ['help', 'add maths']"] },
    { type: 'callout', variant: 'note', title: 'Files outlive one run', paragraphs: ['Variables disappear when the process ends. A file can preserve useful data. `Path.write_text()` writes text. `Path.read_text()` reads it later.', 'The explicit UTF-8 encoding makes the text rule clear. Detailed formats such as JSON come later.'] },
    { type: 'bug', prompt: 'Which line replaces a useful list with `None`?', lines: ['topics = ["science", "maths"]', 'topics = topics.sort()', 'print(topics)'], bugLine: 2, explain: '`list.sort()` mutates the list and returns `None`. Use `topics.sort()` without reassignment.' },
    { type: 'quiz', items: [['Which collection fits note titles mapped to note text?', 'A dictionary.'], ['Which collection fits unique tags?', 'A set.'], ['How is `sorted(items)` different from `items.sort()`?', '`sorted()` returns a new list. `sort()` changes the existing list and returns `None`.'], ['Why use `with open(...)` or a `Path` helper?', 'It gives file access a clear lifetime and ensures resources are closed.']] },
    { type: 'takeaways', items: ['Choose a collection by behavior, not appearance.', 'Mutation changes an existing object.', 'A text file can preserve state after a program stops.'] },
    { type: 'resources', items: [['Python data structures', 'https://docs.python.org/3/tutorial/datastructures.html'], ['pathlib documentation', 'https://docs.python.org/3/library/pathlib.html']] },
    { type: 'cliffhanger', title: 'Stored commands need routes', text: 'Next, decisions and loops let the assistant choose an action and continue the conversation.' }
  ]
}
