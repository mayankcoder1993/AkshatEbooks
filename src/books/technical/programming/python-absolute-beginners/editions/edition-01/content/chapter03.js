const collectionCode = [
  'from pathlib import Path',
  '',
  'history = ["help", "add maths", "list"]',
  'latest = history.pop()',
  'remaining = history[1:]',
  'profile = ("Mira", 7)',
  'name, level = profile',
  'notes = {"maths": "Practise fractions"}',
  'notes["science"] = "Review cells"',
  'tags = set(["urgent", "maths", "maths"])',
  '',
  'path = Path("session.txt")',
  'path.write_text("\\n".join(history), encoding="utf-8")',
  'loaded = path.read_text(encoding="utf-8").splitlines()',
  'print(latest, remaining)',
  'print(name, level, notes["maths"], sorted(tags), loaded)'
]

export const chapter03 = {
  id: 'organize-data', icon: '▦', title: 'Organize Data', shortTitle: 'Data',
  subtitle: 'Choose a collection for commands, fixed records, note lookups and unique tags.', tags: ['Packing challenge', 'Collections', '70 min'],
  blocks: [
    { type: 'arc-progress', arcTitle: 'Create an Interactive Terminal Assistant', step: 3, total: 5, currentFocus: 'Organize memory', text: 'Give each kind of assistant data a structure that matches its job.' },
    { type: 'think', prompt: 'Would one variable per note still be easy to use after fifty notes?', answer: 'No. A collection keeps related values together and lets one operation work across them.' },
    { type: 'comparison', title: 'Four collection jobs', columns: ['Structure', 'Best fit', 'Can change?', 'Important rule'], rows: [['List `[]`', 'Ordered command history', 'Yes', 'Positions use indexes.'], ['Tuple `()`', 'Fixed result record', 'No', 'The comma forms a tuple.'], ['Dictionary `{key: value}`', 'Title-to-note lookup', 'Yes', 'Keys must be hashable.'], ['Set `{value}`', 'Unique tags and membership', 'Yes', 'Positions are not available.']] },

    { type: 'heading', text: 'Lists preserve an order' },
    { type: 'paragraph', text: 'A **list** is an ordered, mutable collection. Mutable means it can change. A list may mix value types, but one clear purpose usually makes the list easier to use.' },
    { type: 'worked-example', title: 'Remove one command and keep the evidence', problem: 'What changes after `last = commands.pop()`?', steps: ['`pop()` without an argument selects the final item.', 'It removes that item from the list.', 'It returns the removed item, so `last` can still use it.', 'A slice such as `commands[1:]` creates a new list from index 1 onward.'], result: 'You can report both the returned item and the changed list.' },
    { type: 'worked-example', title: 'Sort without losing the list', problem: 'Why does `saved = items.sort()` make `saved` equal `None`?', steps: ['`sort()` changes the existing list in place.', 'Its job is the change, so it returns `None`.', 'Use `items.sort()` and then read `items`, or use `saved = sorted(items)` to build a new sorted list.'], result: 'Choose an in-place method only when you intend to mutate the original list.' },

    { type: 'heading', text: 'Dictionaries connect keys to values' },
    { type: 'paragraph', text: 'A **dictionary** is a mutable mapping. It connects each unique key to a value. `notes["maths"]` looks up a note by meaning rather than by position. A missing bracket lookup raises `KeyError`.' },
    { type: 'comparison', title: 'List position versus dictionary key', columns: ['Question', 'List route', 'Dictionary route'], rows: [['How do I find it?', 'Know index `1`.', 'Know key `"maths"`.'], ['Can I slice it?', 'Yes.', 'No. It is a mapping.'], ['Does insertion order remain visible?', 'Yes.', 'Yes, but lookup still uses keys.'], ['Can I sort it in place?', '`list.sort()` can.', 'No dictionary `sort()` method. Sort its keys or items into a list.']] },
    { type: 'paragraph', text: 'Assignment with a new key inserts a pair. Assignment with an existing key updates its value without moving that key. Current Python dictionaries preserve insertion order. They are still mappings, not index-based sequences.' },
    { type: 'callout', variant: 'note', title: 'Keys must be hashable, not just strings', paragraphs: ['Strings make clear assistant labels, but numbers and suitable tuples can also be keys. Lists and dictionaries cannot be keys because they are mutable and unhashable.', '`key in notes` checks dictionary keys. Use `notes.keys()`, `notes.values()` and `notes.items()` when you need views of keys, values or pairs. These views reflect later dictionary changes.'] },
    { type: 'worked-example', title: 'Climb a nested-access ladder', problem: 'Find the latest score without guessing one long expression.', steps: ['`learner = profile["learner"]` returns the inner dictionary.', '`scores = learner["scores"]` returns the list.', '`latest = scores[-1]` returns its final value.', 'Only then combine the proven path as `profile["learner"]["scores"][-1]`.'], result: 'Each key or index acts on the value returned by the step before it.' },
    { type: 'code', filename: 'lookup_ladder.py', lines: ['profile = {', '    "learner": {', '        "name": "Mira",', '        "scores": [6, 8, 9],', '    }', '}', 'learner = profile["learner"]', 'scores = learner["scores"]', 'latest = scores[-1]', 'print(latest)'] },
    { type: 'terminal', command: 'python lookup_ladder.py', lines: ['9'] },

    { type: 'heading', text: 'Tuples record a fixed group' },
    { type: 'paragraph', text: 'A **tuple** is an ordered immutable sequence. Its item references cannot be replaced. The comma creates the tuple: `(5,)` is a one-item tuple, while `(5)` is simply the integer 5. Parentheses make tuple boundaries easier to see.' },
    { type: 'paragraph', text: 'Tuples support indexing, slicing, `len()`, `count()` and `index()`. Packing creates a record such as `result = ("maths", 7)`. Unpacking assigns its parts with `topic, score = result`.' },
    { type: 'callout', variant: 'note', title: 'Immutability is shallow', paragraphs: ['A tuple item cannot be reassigned. If a tuple contains a mutable list, that list can still change. Use tuples for a fixed record shape, not as a magic lock for every object inside.'] },

    { type: 'heading', text: 'Sets keep unique values' },
    { type: 'paragraph', text: 'A **set** stores unique hashable elements. It supports fast membership checks and removes duplicate equal values. A set has no indexes and promises no positional order. `{}` is an empty dictionary, so use `set()` for an empty set.' },
    { type: 'comparison', title: 'Set moves for assistant tags', columns: ['Move', 'Example', 'Result'], rows: [['Add one', '`tags.add("urgent")`', 'The tag is present once.'], ['Remove duplicates', '`set(["maths", "maths"])`', 'One `"maths"` remains.'], ['Test membership', '`"maths" in tags`', '`True` or `False`.'], ['Compare groups', '`mine & yours`', 'Tags found in both sets.']] },
    { type: 'think', prompt: 'What letters remain after `set("Mississippi")`?', answer: 'The unique letters are `M`, `i`, `s` and `p`. Their printed order is not guaranteed, so check membership rather than position.' },

    { type: 'code', filename: 'collections_lab.py', lines: collectionCode },
    { type: 'terminal', command: 'python collections_lab.py', lines: ["list ['add maths']", "Mira 7 Practise fractions ['maths', 'urgent'] ['help', 'add maths']"] },

    { type: 'heading', text: 'Save state without risking the wrong file' },
    { type: 'paragraph', text: 'A **path** describes a file location. A relative path such as `notes.txt` starts from the current working directory. Open the project folder in VS Code so that starting location stays predictable.' },
    { type: 'comparison', title: 'Choose a text-file mode safely', columns: ['Mode', 'Purpose', 'If missing', 'Main risk'], rows: [['`r`', 'Read', 'Raises `FileNotFoundError`.', 'Wrong name or path.'], ['`w`', 'Write from the beginning', 'Creates the file.', 'Erases existing contents when opened.'], ['`a`', 'Append at the end', 'Creates the file.', 'Repeated runs may add duplicate lines.']] },
    { type: 'code', filename: 'save_note.py', lines: ['from pathlib import Path', '', 'path = Path("notes.txt")', 'path.write_text("maths\\tPractise fractions\\n", encoding="utf-8")', '', 'with open(path, "a", encoding="utf-8") as file:', '    file.write("science\\tReview cells\\n")', '', 'text = path.read_text(encoding="utf-8")', 'print(text)'] },
    { type: 'callout', variant: 'note', title: 'Why `with` and UTF-8 matter', paragraphs: ['The `with` statement closes the file even if an exception interrupts the block. Explicit UTF-8 makes the text encoding rule clear across computers.', '`write()` returns the number of characters written. It does not return the text. Use `r+` and `w+` only after a real task needs combined reading and writing.'] },

    { type: 'bug', prompt: 'Which line replaces a useful list with `None`?', lines: ['topics = ["science", "maths"]', 'topics = topics.sort()', 'print(topics)'], bugLine: 2, explain: '`list.sort()` mutates the list and returns `None`. Use `topics.sort()` without reassignment.' },
    { type: 'challenge', rank: 'Data Strategist', title: 'Design the assistant memory pack', brief: 'Choose structures because of their behavior. Then prove that the saved information survives one program run.', steps: ['Use a list for command history.', 'Use a dictionary for title-to-note lookup.', 'Use a tuple for one fixed result record.', 'Use a set for unique tags.', 'Save at least two notes with UTF-8 and load them again.'], winCondition: 'A fresh run loads the same note information, and you can explain why every collection was chosen.', stretch: 'Add one safe nested lookup and display its steps before combining them.' },
    { type: 'quiz', items: [['After `items = [0, 1, 2]` and `last = items.pop()`, what are `last` and `items`?', '`last` is 2, and `items` is `[0, 1]`.'], ['Which collection fits note titles mapped to note text?', 'A dictionary, because each title acts as a meaningful lookup key.'], ['What does `profile["scores"][1]` do when the key holds `[6, 8, 9]`?', 'The key returns the list, then index 1 returns 8.'], ['Which mode adds text without erasing an existing file?', '`a` appends. It also creates the file if it is missing.']] },
    { type: 'takeaways', items: ['Choose a collection by behavior, not appearance.', 'Dictionary keys must be hashable, and dictionary insertion order is preserved.', 'A tuple is formed by commas and is shallowly immutable.', 'Sets provide uniqueness and membership, not positions.', 'Use explicit UTF-8 and treat write mode as destructive.'] },
    { type: 'victory', rank: 'Data Strategist', proof: ['Select a collection from the job it must perform.', 'Trace nested lookups without guessing.', 'Persist and reload text without accidental overwrite.'], next: 'Turn organized data into decisions and repeated command routes.' },
    { type: 'resources', items: [['Python data structures', 'https://docs.python.org/3/tutorial/datastructures.html'], ['Python built-in types', 'https://docs.python.org/3/library/stdtypes.html'], ['Python file input and output', 'https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files'], ['pathlib documentation', 'https://docs.python.org/3/library/pathlib.html']] },
    { type: 'cliffhanger', title: 'Stored commands need routes', text: 'Next, decisions and loops let the assistant choose an action and continue the conversation.' }
  ]
}
