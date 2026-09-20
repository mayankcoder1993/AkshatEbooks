import image from '../assets/variables-memory.jpg'
import assignmentImage from '../assets/assignment-right-to-left.jpg'

const codeLines = ['score = 10', 'score = score + 5', 'print(score)']
export const lesson03 = {
  id: 'variables', icon: '📦', title: 'Variables: Names for Values', shortTitle: 'Variables',
  subtitle: 'Store a value, change it and inspect memory one line at a time.', tags: ['Memory', 'Variables', '15 min'],
  blocks: [
    { type: 'mission', title: 'Keep track of a score', text: 'Our program needs to remember a score and then add five.', weKnow: ['Python can display a value.'], weNeed: ['A name for the value.', 'A way to replace the stored value.'] },
    { type: 'image', src: image, file: 'src/books/technical/programming/python-absolute-beginners/editions/edition-01/assets/variables-memory.jpg', w: 1536, h: 1024, alt: 'A name tag points to memory boxes as a value changes.', caption: 'A variable name can refer to a new value.', points: ['Choose a useful name such as `score`.', 'Assign the first value to that name.', 'Assign again when the value changes.'] },
    { type: 'think', prompt: 'If the score changes, should we edit every old number by hand?', answer: 'No. We use one variable name. Later code reads the current value through that name.' },
    { type: 'heading', text: 'Assignment connects a name and a value' },
    { type: 'paragraph', text: 'A **variable** is a name that refers to a value. In `score = 10`, the equals sign means **assign**. It does not ask a maths question.' },
    { type: 'callout', variant: 'analogy', title: 'A label, not a locked box', paragraphs: ['Imagine a reusable label named score. First it refers to 10. A later assignment can make the same name refer to 15.', 'This picture is more accurate than imagining that Python permanently locks one value inside one box. Names and values are separate parts of the story.'] },
    { type: 'heading', text: 'Read assignment from right to left' },
    { type: 'paragraph', text: 'For `score = score + 5`, Python finishes the right side first. It reads the current value 10. It calculates 10 + 5. Only then does it assign the result 15 back to the name score.' },
    { type: 'image', src: assignmentImage, file: 'src/books/technical/programming/python-absolute-beginners/editions/edition-01/assets/assignment-right-to-left.jpg', w: 1536, h: 1024, alt: 'Three numbered stages show score being read as 10, increased by 5 and assigned the result 15.', caption: 'Python finishes the right side before changing the left side.', points: ['Read the current value of `score`: 10.', 'Calculate `10 + 5`: the result is 15.', 'Assign 15 back to the name `score`.'] },
    { type: 'callout', variant: 'note', title: 'Names that help the next reader', paragraphs: ['A name may use letters, digits and underscores. It cannot begin with a digit. Python treats score and Score as different names.', 'Choose names that reveal meaning. `score` helps us more than `s`, even though both are legal.'] },
    { type: 'blueprint', purpose: 'Add five to a score.', input: 'Starting score: 10.', processing: 'Read score, add 5, assign the result back.', output: '15', files: ['score.py'] },
    { type: 'code', filename: 'score.py', lines: codeLines },
    { type: 'runviz', filename: 'score.py', codeLines, steps: [
      { line: null, title: 'Memory starts empty', explain: 'No variable names exist yet.', vars: [], console: [] },
      { line: 1, title: 'Store the first value', explain: 'The name score now refers to the integer 10.', vars: [{ name: 'score', value: '10' }], console: [] },
      { line: 2, title: 'Calculate the new value', explain: 'Python reads 10, adds 5 and assigns 15 to score.', vars: [{ name: 'score', value: '15' }], console: [] },
      { line: 3, title: 'Read and display score', explain: 'print() receives the current value, which is 15.', vars: [{ name: 'score', value: '15' }], console: ['15'] },
    ] },
    { type: 'terminal', command: 'python score.py', lines: ['15'] },
    { type: 'aha', text: 'The same variable name can refer to a new value after another assignment.' },
    { type: 'steps', items: ['Create `score.py`.', 'Run the example.', 'Change the starting score.', 'Add another line that subtracts 2.'] },
    { type: 'mistakes', items: [['10 = score', 'The name belongs on the left side of assignment.'], ['print("score")', 'Quotes print the word score, not the value stored under that name.']] },
    { type: 'guess', prompt: 'What is printed?', code: 'coins = 3\ncoins = coins + 2\nprint(coins)', options: ['2', '3', '5'], answerIndex: 2, explain: 'Python reads 3, adds 2 and stores 5.' },
    { type: 'bug', prompt: 'Which line uses the wrong variable name?', lines: ['points = 8', 'point = points + 1', 'print(points)'], bugLine: 2, explain: 'Line 2 creates a different name, point. The original points remains 8.' },
    { type: 'quiz', items: [['What does = mean in Python?', 'It assigns the value on the right to the name on the left.'], ['Why does print(score) have no quotes?', 'We want Python to read the value named score.']] },
    { type: 'takeaways', items: ['A variable is a name for a value.', '= performs assignment.', 'A later assignment can change what a name refers to.'] },
    { type: 'resources', items: [['Python assignment statements', 'https://docs.python.org/3/reference/simple_stmts.html#assignment-statements'], ['Python identifiers and naming rules', 'https://docs.python.org/3/reference/lexical_analysis.html#identifiers']] },
    { type: 'cliffhanger', title: 'Values are not all alike', text: 'Next, we discover why 5 and "5" behave differently.' },
  ],
}
