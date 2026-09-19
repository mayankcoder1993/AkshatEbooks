import image from '../assets/hello-world-infographic.jpg'
import printAnatomy from '../assets/print-anatomy.jpg'

const codeLines = ['print("Hello, World!")']

export const lesson01 = {
  id: 'hello-world', icon: '👋', title: 'Your First Program — Hello, World!', shortTitle: 'Hello, World',
  subtitle: 'We begin with an empty file and end with a real result—understanding every character we typed.', tags: ['Python', 'Lesson 01', 'Beginner'],
  blocks: [
    { type: 'image', src: image, file: 'src/assets/hello-world-infographic.jpg', w: 1536, h: 1024, alt: 'A three-stage path from a Python file to the interpreter and a terminal.', caption: 'Legend: 1 = we save an instruction in hello.py. 2 = Python reads and performs it. 3 = the terminal shows the result.' },
    { type: 'mission', title: 'Make the silent machine answer us', text: 'We start with no code and no hidden knowledge. Our first win is simple: ask the computer to show one exact message.', weKnow: ['A computer follows precise instructions.', 'It will not guess what we meant.'], weNeed: ['A way to mark text.', 'An action that sends text to the screen.', 'A command that starts our program.'] },
    { type: 'think', prompt: 'If the word Hello appears in our code, how will Python know it is text and not the name of something?', answer: 'We wrap the characters in quotes. Quotes turn Hello into a string—a piece of text.' },
    { type: 'heading', text: 'Step 1 — What is a program?' },
    { type: 'paragraph', text: 'A **program** is a saved set of instructions. **Source code** is the text we write to express those instructions. Python is the language whose rules both we and the Python runtime agree to follow.' },
    { type: 'callout', variant: 'analogy', title: 'Precise like a recipe, active like a remote control', paragraphs: ['A recipe describes actions. It does nothing until someone follows it. Source code is similar: the file stores instructions, and the Python runtime performs them.', 'Unlike a person, Python does not quietly repair a missing quote or guess a misspelled action. That strictness helps every reader get the same result.'] },
    { type: 'heading', text: 'Step 2 — Meet every character' },
    { type: 'paragraph', text: '`print` is a **built-in function**—a ready-made action supplied by Python. The round brackets call that action. The quotes mark text. The exclamation mark and comma inside the quotes are ordinary characters, so Python displays them too.' },
    { type: 'image', src: printAnatomy, file: 'src/assets/print-anatomy.jpg', w: 1536, h: 1024, alt: 'Numbered callouts identify the function name, brackets, quotes and text value in print("Hello").', caption: 'Legend: 1 = print is the ready-made action. 2 = the brackets call it. 3 = quotes mark the text boundary. 4 = Hello is the value passed into the action.' },
    { type: 'flow', input: ['Value', '"Hello, World!"'], process: ['Function call', 'print(...)'], output: ['stdout', 'Hello, World!'] },
    { type: 'callout', variant: 'note', title: 'What is stdout?', paragraphs: ['stdout means **standard output**. It is the normal stream a program uses to send results outward. In our terminal, that stream appears as text on the screen.'] },
    { type: 'heading', text: 'Step 3 — Plan before we type' },
    { type: 'blueprint', purpose: 'Prove that Python can run our instruction and show a greeting.', input: 'The string "Hello, World!" written inside the program.', processing: 'Call print() with that string.', output: 'The exact characters Hello, World!', files: ['hello.py'] },
    { type: 'heading', text: 'Step 4 — Write the code' },
    { type: 'code', filename: 'hello.py', lines: codeLines },
    { type: 'guess', prompt: 'Before we run it: what will appear?', code: 'print("Hello, World!")', options: ['The quote marks and the message', 'Hello, World! without quote marks', 'The word print'], answerIndex: 1, explain: 'Quotes describe the string. They are not part of the string, so print() does not display them.' },
    { type: 'heading', text: 'Step 5 — Watch the instruction become output' },
    { type: 'runviz', filename: 'hello.py', codeLines, steps: [
      { line: null, title: 'The command starts Python', explain: 'The operating system launches the Python runtime and gives it the path to hello.py.', vars: [], console: [] },
      { line: null, title: 'Python opens our source file', explain: 'Python reads the saved characters. Nothing is visible in the console yet.', vars: [], console: [] },
      { line: 1, title: 'Python checks the instruction', explain: 'The name print, both brackets and both quotes follow Python’s syntax rules.', vars: [], console: [] },
      { line: 1, title: 'Python creates the string value', explain: 'The characters inside the quotes become one text value.', vars: [{ name: 'value', value: '"Hello, World!"' }], console: [] },
      { line: 1, title: 'Python calls print()', explain: 'The string is passed to the built-in print function.', vars: [{ name: 'value', value: '"Hello, World!"' }], console: [] },
      { line: 1, title: 'The console receives the result', explain: 'print() writes the characters to stdout and then starts a new line.', vars: [], console: ['Hello, World!'] },
    ] },
    { type: 'terminal', command: 'python hello.py', lines: ['Hello, World!'] },
    { type: 'aha', text: 'We did not ask the computer to understand a greeting. We gave Python one exact value and one exact action—and a visible result came back.' },
    { type: 'heading', text: 'Step 6 — Make it yours' },
    { type: 'steps', items: ['Create a file named `hello.py`.', 'Type the instruction instead of pasting it.', 'Save the file, then run `python hello.py`.', 'Change only the text inside the quotes.', 'Add a second print() line and predict the order of the output before running it.'] },
    { type: 'heading', text: 'Step 7 — Learn from the mistakes' },
    { type: 'bug', prompt: 'Which line asks for an action Python does not know?', lines: ['print("Ready!")', 'Print("Go!")'], bugLine: 2, explain: 'Python names are case-sensitive. Print and print are different names.' },
    { type: 'mistakes', items: [['print(Hello)', 'Without quotes, Python searches for a name called Hello.'], ['Print("Hello")', 'The built-in function uses a lowercase p.'], ['print("Hello"', 'The function call is missing its closing bracket.'], ['python hello', 'The command should include the file name hello.py.']] },
    { type: 'quiz', items: [['What makes Hello, World! a string?', 'The opening and closing quotes mark it as text.'], ['What do the brackets do in print(...)?', 'They call the function and hold the value we pass to it.'], ['What is stdout?', 'The standard output stream. A terminal normally shows it on screen.']] },
    { type: 'takeaways', items: ['Source code stores instructions in a form people can read.', 'A string is text marked by quotes.', 'print() sends a value to standard output.', 'Python follows spelling, case, quotes and brackets exactly.', 'Predicting before running turns every example into an experiment.'] },
    { type: 'resources', items: [['Python tutorial: using Python as a calculator', 'https://docs.python.org/3/tutorial/introduction.html'], ['Python print() reference', 'https://docs.python.org/3/library/functions.html#print']] },
    { type: 'cliffhanger', title: 'Who carries our instruction to the processor?', text: 'We can see the result. Next, we uncover the hidden route between hello.py and the machine.' },
  ],
}
