import image from '../assets/data-types.jpg'
import plusByType from '../assets/type-changes-plus.jpg'

const codeLines = ['name = "Asha"', 'age = 12', 'height = 1.52', 'is_learning = True', 'print(type(name))', 'print(age + 1)']
export const lesson04 = {
  id: 'data-types', icon: '🧬', title: 'Data Types: What Kind of Value?', shortTitle: 'Data Types',
  subtitle: 'Meet strings, integers, floats and booleans, and see why type changes what Python can do.', tags: ['Types', 'Memory', '18 min'],
  blocks: [
    { type: 'image', src: image, file: 'src/books/technical/programming/python-absolute-beginners/editions/edition-01/assets/data-types.jpg', w: 1536, h: 1024, alt: 'A memory hub connects to cards for text, whole numbers, decimals and true-or-false values.', caption: 'A type tells Python what kind of value it is handling.', points: ['`str` stores text.', '`int` stores whole numbers.', '`float` stores decimal numbers.', '`bool` stores `True` or `False`.'] },
    { type: 'mission', title: 'Sort our values', text: 'A profile needs a name, age, height and learning status. These values are different kinds of data.', weKnow: ['Variables give values names.'], weNeed: ['A way to identify each kind of value.', 'Rules for what each kind can do.'] },
    { type: 'think', prompt: 'Are `12` and `"12"` the same value?', answer: 'No. 12 is a number we can add. "12" is text made of two characters.' },
    { type: 'heading', text: 'A type is a value’s category' },
    { type: 'paragraph', text: 'A **data type** tells Python what kind of value it has. The type also tells Python which operations make sense.' },
    { type: 'callout', variant: 'note', title: 'Four types to begin with', paragraphs: ['`str` means string, which is text. `int` means integer, which is a whole number. `float` is a number with a decimal point. `bool` is either `True` or `False`.', 'The type belongs to the value. A variable name can later refer to a value of another type. This is called **dynamic typing**. Python tracks the type while the program runs.'] },
    { type: 'heading', text: 'The same symbol can mean a different operation' },
    { type: 'paragraph', text: 'For integers, `3 + 4` means number addition and produces 7. For strings, `"3" + "4"` means joining text and produces `"34"`. Type gives the `+` symbol enough context to choose the operation.' },
    { type: 'image', src: plusByType, file: 'src/books/technical/programming/python-absolute-beginners/editions/edition-01/assets/type-changes-plus.jpg', w: 1264, h: 843, alt: 'Two lanes compare integer addition with string joining using the plus symbol.', caption: 'The type changes what the plus sign does.', points: ['Numbers use `+` for addition: `3 + 4` becomes `7`.', 'Strings use `+` for joining: `"3" + "4"` becomes `"34"`.'] },
    { type: 'callout', variant: 'analogy', title: 'Type is a safety clue', paragraphs: ['A label saying “paint” changes how we handle a tin. A type gives Python a similar clue. It prevents unclear requests such as adding the number 1 directly to the text "two".', 'When types do not match our intention, Python stops with an error instead of silently inventing an answer.'] },
    { type: 'flow', input: ['Values', '"Asha", 12, 1.52, True'], process: ['Python', 'keeps each type'], output: ['Safe operations', 'join text, add numbers, test truth'] },
    { type: 'blueprint', purpose: 'Store a small learner profile.', input: 'Text, a whole number, a decimal and a truth value.', processing: 'Python stores each value with its type.', output: 'The type of name and next year’s age.', files: ['types.py'] },
    { type: 'code', filename: 'types.py', lines: codeLines },
    { type: 'runviz', filename: 'types.py', codeLines, steps: [
      { line: 1, title: 'Store text', explain: 'Quotes make Asha a string, or str.', vars: [{ name: 'name', value: '"Asha" (str)' }], console: [] },
      { line: 2, title: 'Store a whole number', explain: '12 has no quotes and no decimal point, so it is an int.', vars: [{ name: 'name', value: '"Asha" (str)' }, { name: 'age', value: '12 (int)' }], console: [] },
      { line: 3, title: 'Store a decimal', explain: '1.52 has a decimal point, so it is a float.', vars: [{ name: 'age', value: '12 (int)' }, { name: 'height', value: '1.52 (float)' }], console: [] },
      { line: 4, title: 'Store truth', explain: 'True is a bool. Its capital T matters.', vars: [{ name: 'height', value: '1.52 (float)' }, { name: 'is_learning', value: 'True (bool)' }], console: [] },
      { line: 5, title: 'Inspect a type', explain: 'type(name) reports that name holds a string.', vars: [{ name: 'name', value: '"Asha" (str)' }], console: ["<class 'str'>"] },
      { line: 6, title: 'Add integers', explain: 'age is an int, so Python can add 1 and print 13.', vars: [{ name: 'age', value: '12 (int)' }], console: ["<class 'str'>", '13'] },
    ] },
    { type: 'terminal', command: 'python types.py', lines: ["<class 'str'>", '13'] },
    { type: 'aha', text: 'A value is more than the characters we see. Its type tells Python what the value means and which operations are allowed.' },
    { type: 'heading', text: 'Convert only when your intention is clear' },
    { type: 'paragraph', text: '`int("12")` creates the integer 12 from numeric text. `str(12)` creates the string "12" from a number. Conversion is explicit: we tell Python exactly which meaning we want.' },
    { type: 'steps', items: ['Create `types.py` and run it.', 'Use `type()` on age, height and is_learning.', 'Try `print("12" + "1")`.', 'Then try `print(12 + 1)` and compare the results.', 'Try `print(int("12") + 1)` and explain why the answer changes.'] },
    { type: 'mistakes', items: [['true', 'Python booleans begin with a capital letter: True and False.'], ['"12" + 1', 'Python will not mix text and a number automatically. Convert one value first.'], ['height = 1,52', 'Python decimal numbers use a dot, not a comma.']] },
    { type: 'guess', prompt: 'What does this print?', code: 'print("3" + "4")', options: ['7', '34', 'An error'], answerIndex: 1, explain: 'Both values are strings. + joins strings, so the result is 34.' },
    { type: 'bug', prompt: 'Which line causes a TypeError?', lines: ['tickets = "2"', 'total = tickets + 1', 'print(total)'], bugLine: 2, explain: 'Line 2 tries to add a string and an integer. Python needs an explicit conversion.' },
    { type: 'quiz', items: [['Which type stores a whole number?', 'int stores whole numbers such as 0, 12 and -5.'], ['What is a bool?', 'A truth value: True or False.'], ['Why is "5" not an int?', 'Quotes make it a string.'], ['What does dynamic typing mean here?', 'Python tracks types while the program runs, and one name can later refer to a value of another type.']] },
    { type: 'takeaways', items: ['str stores text; int stores whole numbers.', 'float stores decimal numbers; bool stores True or False.', 'The type belongs to the value and controls valid operations.', 'type(value) reports a value’s type.', 'int() and str() perform explicit conversions.'] },
    { type: 'resources', items: [['Python built-in types', 'https://docs.python.org/3/library/stdtypes.html']] },
    { type: 'cliffhanger', title: 'How does a reader give us a value?', text: 'Next, we use input() and learn why typed input begins as a string.' },
  ],
}
