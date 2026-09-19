import image from '../assets/code-machine-pipeline.jpg'

export const lesson02 = {
  id: 'code-to-machine', icon: '⚙️', title: 'From Code to Machine', shortTitle: 'Code → Machine',
  subtitle: 'See how Python, C and Java take different roads to the processor.', tags: ['Interpreter', 'Compiler', '15 min'],
  blocks: [
    { type: 'image', src: image, file: 'src/assets/code-machine-pipeline.jpg', w: 1536, h: 1024, alt: 'Three processing tracks connect source files to a computer chip.', caption: 'Legend: each row begins with source code. Python uses an interpreter. C builds a machine-code program first. Java builds bytecode for a virtual machine.' },
    { type: 'mission', title: 'Follow the journey', text: 'We write words such as print, but a processor works with tiny machine instructions.', weKnow: ['Our file contains source code for people.'], weNeed: ['A translator between our source code and the machine.'] },
    { type: 'think', prompt: 'Does the processor read the word print directly?', answer: 'No. A language tool translates or interprets our source before the processor performs machine instructions.' },
    { type: 'heading', text: 'Source code needs a language tool' },
    { type: 'paragraph', text: '**Source code** is the file we write. A **compiler** translates a program before it runs. An **interpreter** helps execute it while we run it.' },
    { type: 'callout', variant: 'analogy', title: 'Recipe translations', paragraphs: ['An interpreter is like a helper translating instructions as a cook works. A compiler is like translating the whole recipe first and handing over a new copy.'] },
    { type: 'pipeline', tracks: [
      { id: 'python', icon: '🐍', label: 'Python', stages: [
        { icon: '📄', name: 'Source', artifact: 'hello.py', description: 'We write readable Python code.' },
        { icon: '🧩', name: 'Bytecode', artifact: 'instructions', description: 'Python prepares compact instructions.' },
        { icon: '⚙️', name: 'Python VM', artifact: 'runtime', description: 'The Python virtual machine executes them.' },
        { icon: '🖥️', name: 'Result', artifact: 'output', description: 'The operating system displays the output.' },
      ] },
      { id: 'c', icon: '🔧', label: 'C', stages: [
        { icon: '📄', name: 'Source', artifact: 'hello.c', description: 'We write C source code.' },
        { icon: '🏗️', name: 'Compiler', artifact: 'build step', description: 'A compiler translates the whole program.' },
        { icon: '💾', name: 'Executable', artifact: 'machine code', description: 'The build creates a machine-code file.' },
        { icon: '🖥️', name: 'Run', artifact: 'output', description: 'The processor runs the executable.' },
      ] },
      { id: 'java', icon: '☕', label: 'Java', stages: [
        { icon: '📄', name: 'Source', artifact: 'Hello.java', description: 'We write Java source code.' },
        { icon: '🏗️', name: 'Compiler', artifact: '.class', description: 'Java compiles to portable bytecode.' },
        { icon: '⚙️', name: 'JVM', artifact: 'runtime', description: 'The Java virtual machine runs the bytecode.' },
        { icon: '🖥️', name: 'Result', artifact: 'output', description: 'The result appears on the screen.' },
      ] },
    ] },
    { type: 'code', filename: 'hello.py', lines: ['print("Translation complete")'] },
    { type: 'terminal', command: 'python hello.py', lines: ['Translation complete'] },
    { type: 'aha', text: 'Languages take different routes, but every route ends with work the machine can perform.' },
    { type: 'steps', items: ['Run `python hello.py`.', 'Notice that you did not create a separate executable.', 'Change the message and run the file again.'] },
    { type: 'mistakes', items: [['Python reads English', 'Python understands Python syntax, not ordinary sentences.'], ['Interpreted means uncompiled', 'Python may create bytecode internally. The simple labels hide useful details.']] },
    { type: 'guess', prompt: 'Which tool usually creates a machine-code executable before a C program runs?', options: ['A compiler', 'A text editor', 'print()'], answerIndex: 0, explain: 'The compiler translates the C source during a build step.' },
    { type: 'bug', prompt: 'Which claim is misleading?', lines: ['Python source is written for people.', 'The processor directly understands Python words.'], bugLine: 2, explain: 'Language tools stand between Python source and processor instructions.' },
    { type: 'quiz', items: [['What is source code?', 'The readable instructions a programmer writes.'], ['What is bytecode?', 'Compact instructions for a virtual machine, not raw source text.']] },
    { type: 'takeaways', items: ['Processors do not directly read Python source.', 'A compiler translates before a program runs.', 'Python uses a runtime and virtual machine.'] },
    { type: 'resources', items: [['Python execution model', 'https://docs.python.org/3/reference/executionmodel.html']] },
    { type: 'cliffhanger', title: 'Where does our data wait?', text: 'Next, we give values names and watch them live in memory.' },
  ],
}
