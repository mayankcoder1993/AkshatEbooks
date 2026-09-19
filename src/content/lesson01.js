import image from '../assets/hello-world-infographic.jpg'

const codeLines = ['print("Hello, World!")']

export const lesson01 = {
  id: 'hello-world', icon: '👋', title: 'Hello, World!', shortTitle: 'Hello, World',
  subtitle: 'Give Python one instruction and watch it become visible output.', tags: ['Python', 'Beginner', '10 min'],
  blocks: [
    { type: 'image', src: image, file: 'src/assets/hello-world-infographic.jpg', w: 1536, h: 1024, alt: 'A three-stage path from a Python file to the interpreter and a terminal.', caption: 'Legend: 1 = Python reads our file. 2 = the interpreter follows the instruction. 3 = the terminal shows the result.' },
    { type: 'mission', title: 'Our first mission', text: 'We want the computer to show one friendly message.', weKnow: ['Computers follow instructions.'], weNeed: ['A Python instruction that displays text.', 'A way to run the file.'] },
    { type: 'think', prompt: 'If a computer never guesses, how will it know which words we want to show?', answer: 'We put the exact words inside quotes. Quotes tell Python that the value is text.' },
    { type: 'heading', text: 'One instruction, three parts' },
    { type: 'paragraph', text: '`print` is a built-in function — a ready-made action. The brackets hold what we give to that action. The quotes mark **text**.' },
    { type: 'callout', variant: 'analogy', title: 'A tiny delivery', paragraphs: ['Think of `print()` as a delivery window. We place a message inside the brackets. Python delivers it to stdout — the output stream shown by the terminal.'] },
    { type: 'flow', input: ['Text', '"Hello, World!"'], process: ['Action', 'print()'], output: ['Screen', 'Hello, World!'] },
    { type: 'blueprint', purpose: 'Show a greeting.', input: 'The text inside quotes.', processing: 'print() sends the text to the screen.', output: 'Hello, World!', files: ['hello.py'] },
    { type: 'code', filename: 'hello.py', lines: codeLines },
    { type: 'runviz', filename: 'hello.py', codeLines, steps: [
      { line: null, title: 'Python opens the file', explain: 'Python reads the file from the top.', vars: [], console: [] },
      { line: 1, title: 'Python finds print()', explain: 'The text inside the brackets is passed to print().', vars: [], console: [] },
      { line: 1, title: 'The message appears', explain: 'print() sends the text to the terminal.', vars: [], console: ['Hello, World!'] },
    ] },
    { type: 'terminal', command: 'python hello.py', lines: ['Hello, World!'] },
    { type: 'aha', text: 'Our source code is an instruction. Python turns that instruction into an action we can see.' },
    { type: 'steps', items: ['Create a file named `hello.py`.', 'Type the code exactly as shown.', 'Run `python hello.py`.', 'Change the message and run it again.'] },
    { type: 'mistakes', items: [['print(Hello)', 'Without quotes, Python looks for a variable named Hello.'], ['Print("Hello")', 'Python is case-sensitive. Use lowercase print.'], ['print("Hello"', 'The closing bracket is missing.']] },
    { type: 'guess', prompt: 'What will this show?', code: 'print("Python is listening")', options: ['Nothing', 'Python is listening', 'An error'], answerIndex: 1, explain: 'The quoted text is sent to the screen.' },
    { type: 'bug', prompt: 'Which line has the bug?', lines: ['print("Ready!")', 'Print("Go!")'], bugLine: 2, explain: 'Line 2 uses a capital P. Python only knows the lowercase name print.' },
    { type: 'quiz', items: [['Why do we use quotes?', 'Quotes tell Python that a value is text.'], ['What does print() do?', 'It sends a value to the output shown by the terminal.']] },
    { type: 'takeaways', items: ['A program is a list of exact instructions.', 'print() shows output.', 'Text belongs inside quotes.'] },
    { type: 'resources', items: [['Python tutorial: first steps', 'https://docs.python.org/3/tutorial/introduction.html']] },
    { type: 'cliffhanger', title: 'But who follows the instruction?', text: 'Next, we follow code from our file toward the machine.' },
  ],
}
