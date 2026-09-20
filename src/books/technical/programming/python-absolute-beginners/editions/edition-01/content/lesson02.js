import image from '../assets/code-machine-pipeline.jpg'
import pythonRoute from '../assets/python-hidden-route.jpg'

const PYTHON_CODE = ['message = "Hello"', 'print(message)']

export const lesson02 = {
  id: 'code-to-machine', icon: '🛤️', title: 'How Does Our Code Reach the Computer?', shortTitle: 'Code → Machine',
  subtitle: 'Follow one tiny message from our file to the screen. No hidden knowledge required.', tags: ['Python', 'Visual journey', '15 min'],
  blocks: [
    { type: 'mission', title: 'Find the helper between us and the machine', text: 'We can read `print("Hello")`. The processor cannot read Python words. Something must help in the middle.', weKnow: ['We write instructions in a file.', 'Running the file produces a result.'], weNeed: ['The missing middle step.', 'A simple reason why languages take different routes.'] },
    { type: 'image', src: image, file: 'src/books/technical/programming/python-absolute-beginners/editions/edition-01/assets/code-machine-pipeline.jpg', w: 1536, h: 1024, alt: 'Three simple routes lead from a code file to a computer chip.', caption: 'Different routes solve the same translation problem.', points: ['A person writes a source file.', 'A language tool prepares the instructions.', 'The processor performs machine work.', 'The program produces a result we can see.'] },
    { type: 'think', prompt: 'Does the processor understand the word print?', answer: 'No. Python is written for people. A language program helps turn our instruction into work the computer can perform.' },
    { type: 'heading', text: 'First, keep one simple picture in your head' },
    { type: 'flow', input: ['Our file', 'instructions we can read'], process: ['Language helper', 'prepares and runs them'], output: ['Computer result', 'Hello appears'] },
    { type: 'paragraph', text: 'That middle helper is not identical for every language. The details change, but the reason stays the same: **human-friendly code must become machine work**.' },
    { type: 'image', src: pythonRoute, file: 'src/books/technical/programming/python-absolute-beginners/editions/edition-01/assets/python-hidden-route.jpg', w: 1536, h: 1024, alt: 'Four numbered stages show a Python file being checked, changed into smaller instructions and run to display Hello.', caption: 'Python handles the hidden middle steps for us.', points: ['Start with the source file we wrote.', 'Python checks whether the code follows its rules.', 'Python prepares smaller instructions called **bytecode**.', 'The Python runtime follows them and `Hello` reaches the terminal.'] },
    { type: 'callout', variant: 'analogy', title: 'The note and the musician', paragraphs: ['Sheet music is useful to a musician, but a piano does not read the paper by itself. The musician reads the notes and presses the keys.', 'Our source file is like the sheet music. A language tool reads it. The processor performs the final operations.'] },
    { type: 'heading', text: 'Now compare three routes, one at a time' },
    { type: 'paragraph', text: 'Every route below prints `Hello`. Select a tab. Read only the four numbered cards from left to right. The small box answers one question: **what do we have at this step?**' },
    { type: 'pipeline', tracks: [
      { id: 'python', icon: '🐍', label: 'Python', summary: 'Python stays with us while the program runs.', color: 'teal', stages: [
        { icon: '📝', name: 'We write', artifact: 'message.py', description: 'The file contains two Python instructions.', example: 'message = "Hello"\nprint(message)' },
        { icon: '🔍', name: 'Python reads', artifact: 'checked instructions', description: 'Python checks the words, quotes and brackets.', example: 'Does the code follow Python rules?' },
        { icon: '⚙️', name: 'Python runs', artifact: 'a running Python program', description: 'Python performs the instructions in order.', example: 'python message.py' },
        { icon: '🖥️', name: 'We see', artifact: 'Hello', description: 'The message reaches the terminal.', example: 'Hello' },
      ] },
      { id: 'c', icon: '🔧', label: 'C', summary: 'C usually builds a runnable app before we open it.', color: 'amber', stages: [
        { icon: '📝', name: 'We write', artifact: 'message.c', description: 'The file contains C instructions.', example: 'printf("Hello\\n");' },
        { icon: '🏗️', name: 'A compiler builds', artifact: 'prepared machine pieces', description: 'A compiler translates the C code.', example: 'compiler = translator' },
        { icon: '🔗', name: 'A linker joins', artifact: 'a runnable app', description: 'A linker joins the pieces the program needs.', example: 'linker = piece joiner' },
        { icon: '🖥️', name: 'We run', artifact: 'Hello', description: 'The computer opens the built app.', example: 'Hello' },
      ] },
      { id: 'java', icon: '☕', label: 'Java', summary: 'Java builds a travel-friendly file, then a Java helper runs it.', color: 'indigo', stages: [
        { icon: '📝', name: 'We write', artifact: 'Message.java', description: 'The file contains Java instructions.', example: 'println("Hello");' },
        { icon: '📦', name: 'Java builds', artifact: 'Message.class', description: 'The Java compiler creates a class file.', example: 'javac Message.java' },
        { icon: '⚙️', name: 'The JVM runs', artifact: 'a running Java program', description: 'The Java Virtual Machine, or JVM, reads the class file.', example: 'java Message' },
        { icon: '🖥️', name: 'We see', artifact: 'Hello', description: 'The message reaches the screen.', example: 'Hello' },
      ] },
    ] },
    { type: 'aha', text: 'Our code does not jump straight into the processor. A language tool helps it cross the gap.' },
    { type: 'heading', text: 'The new words, in plain English' },
    { type: 'callout', variant: 'note', title: 'Four labels worth recognising', paragraphs: ['A **compiler** is a translator that prepares code. A **linker** is a joiner that connects prepared pieces.', '**Bytecode** is a simpler instruction format for a language helper. A **virtual machine** is a program that runs those instructions. JVM means Java Virtual Machine.', 'You do not need to memorise these words today. Return to the route pictures whenever you meet them again.'] },
    { type: 'heading', text: 'Show me: how does source code become bytecode actions?' },
    { type: 'paragraph', text: 'Read each source line, then travel downward through the smaller CPython actions it creates. The state note shows what changed after that action.' },
    { type: 'bytecode-map', version: 'CPython 3.14 learning map', groups: [
      { source: 'message = "Hello"', actions: [
        { opcode: 'LOAD_CONST', action: 'Pick up the fixed value "Hello".', state: 'Value stack: ["Hello"]' },
        { opcode: 'STORE_NAME', action: 'Connect that value to the name message.', state: 'Names: message → "Hello"' },
      ] },
      { source: 'print(message)', actions: [
        { opcode: 'LOAD_NAME print', action: 'Find the built-in print function.', state: 'Ready action: print' },
        { opcode: 'LOAD_NAME message', action: 'Find the value connected to message.', state: 'Argument: "Hello"' },
        { opcode: 'CALL 1', action: 'Call print with one argument.', state: 'Visible output: Hello' },
        { opcode: 'POP_TOP', action: 'Discard the None value returned by print.', state: 'The temporary result is no longer needed.' },
      ] },
      { source: 'end of message.py', actions: [
        { opcode: 'RETURN_CONST None', action: 'Finish running this code object.', state: 'The script has ended.' },
      ] },
    ], command: 'python -m dis message.py', caption: 'This is bytecode for the Python runtime, not machine code for the processor.' },
    { type: 'callout', variant: 'note', title: 'Why might your list look different?', paragraphs: ['Bytecode is a **CPython implementation detail**. Instructions can be added, removed or renamed between Python versions.', 'Your output may include helper actions such as `RESUME` or `PUSH_NULL`. Follow the source line and action words instead of memorising every opcode.'] },
    { type: 'heading', text: 'Show me: what is inside a Java .class file?' },
    { type: 'paragraph', text: 'A `.class` file contains Java bytecode. It is binary, so opening it in a text editor looks like noise. The `javap` tool can show a readable view:' },
    { type: 'terminal', command: 'javap -c Message', lines: ['getstatic     System.out', 'ldc           "Hello"', 'invokevirtual println', 'return'] },
    { type: 'callout', variant: 'analogy', title: 'The same idea in a different travel case', paragraphs: ['`ldc` loads the text "Hello". `invokevirtual println` asks Java to print it. The JVM reads these class-file instructions.', 'Python bytecode and Java bytecode are not the same language. They share one useful idea: a runtime can follow smaller instructions prepared from source code.'] },
    { type: 'terminal', command: 'python message.py', lines: ['Hello'] },
    { type: 'steps', items: ['Create `message.py`.', 'Type the two lines above.', 'Before running it, point to the Python route and say what each card means.', 'Run `python message.py`.', 'Change Hello to your name and run it again.'] },
    { type: 'guess', prompt: 'Which helper joins prepared C pieces into one runnable program?', options: ['The print function', 'The linker', 'The terminal'], answerIndex: 1, explain: 'A linker joins the pieces needed by the final program.' },
    { type: 'bug', prompt: 'Which sentence is incorrect?', lines: ['People can read Python source code.', 'A processor directly understands Python words.', 'Python helps perform our instructions.'], bugLine: 2, explain: 'A processor works with machine instructions. Python and lower-level tools bridge the gap.' },
    { type: 'mistakes', items: [['Python is the processor', 'Python is a program running on the computer. It is not the hardware.'], ['Compiler means error checker only', 'A compiler can check code and translate it into another form.'], ['Different route means different result', 'These three routes can still produce the same visible Hello.']] },
    { type: 'quiz', items: [['Why do we need a language helper?', 'The processor does not directly understand our human-friendly source code.'], ['What does a compiler do in our simple picture?', 'It translates source code into another form.'], ['What does a linker do?', 'It joins prepared pieces into a runnable program.'], ['What does JVM mean?', 'Java Virtual Machine, the program that runs Java class files.']] },
    { type: 'takeaways', items: ['We write source code for people.', 'A language tool bridges our code and the processor.', 'Python stays involved while a Python program runs.', 'C usually builds a runnable program first.', 'Java builds a class file for a Java Virtual Machine.', 'Understanding the job matters more than memorising the label.'] },
    { type: 'resources', items: [['Python FAQ: a short description of Python', 'https://docs.python.org/3/faq/general.html#what-is-python'], ['Python bytecode tool, save this for later', 'https://docs.python.org/3/library/dis.html'], ['GCC build stages, reference for later', 'https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html']] },
    { type: 'cliffhanger', title: 'The program can run, but where does it keep a score?', text: 'Next, we give a value a name and watch Python remember it.' },
  ],
}
