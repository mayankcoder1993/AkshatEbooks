import image from '../assets/code-machine-pipeline.jpg'

const PYTHON_CODE = ['message = "Hello from the other side"', 'print(message)']

export const lesson02 = {
  id: 'code-to-machine', icon: '🛤️', title: 'From Code to Machine: The Hidden Journey', shortTitle: 'Code → Machine',
  subtitle: 'Send one tiny greeting through Python, C and Java—and see what each tool creates on the way.', tags: ['Computer science', 'Visual', '18 min'],
  blocks: [
    { type: 'image', src: image, file: 'src/assets/code-machine-pipeline.jpg', w: 1536, h: 1024, alt: 'Three processing tracks connect source files to a processor and visible output.', caption: 'Legend: the top route prepares Python code for the CPython runtime. The middle route builds a native C executable. The bottom route builds Java bytecode for a JVM.' },
    { type: 'mission', title: 'Follow one message all the way down', text: 'We can read `print(message)`. A processor cannot. Our mission is to find the translators between those two worlds.', weKnow: ['Source code is written for people.', 'The processor performs machine instructions.'], weNeed: ['A clear map of the tools in between.', 'A real example of what each stage produces.'] },
    { type: 'think', prompt: 'When we run `python greeting.py`, does the processor understand the word print?', answer: 'No. The Python implementation reads and prepares our source. Its runtime performs the work using machine instructions that the computer can execute.' },
    { type: 'heading', text: 'The big idea: source code takes a route' },
    { type: 'paragraph', text: 'A **toolchain** is the set of tools that changes source code into a running program. Different languages use different toolchains. The destination is the same: work the hardware can perform.' },
    { type: 'callout', variant: 'analogy', title: 'A journey with travel documents', paragraphs: ['Our idea is the traveller. Source code is the document we can read. Each stage checks or transforms that document until the local machine can act on it.', 'Some routes prepare a native executable before the trip. Other routes travel with a runtime that translates and manages work along the way.'] },
    { type: 'heading', text: 'Compare the routes with one visible result' },
    { type: 'paragraph', text: 'Each program below prints the same greeting. Select a route in Web View. Follow the numbered cards. The artifact line shows what exists after that stage.' },
    { type: 'pipeline', tracks: [
      { id: 'python', icon: '🐍', label: 'Python (CPython)', summary: 'Run the source with a runtime. CPython first compiles it to bytecode internally.', color: 'teal', stages: [
        { icon: '📝', name: 'Source', artifact: 'greeting.py', description: 'We write readable Python instructions.', example: 'message = "Hello"\nprint(message)' },
        { icon: '🧩', name: 'Compile internally', artifact: 'code object + bytecode', description: 'CPython checks the syntax and prepares bytecode instructions.', example: 'LOAD_NAME · CALL' },
        { icon: '⚙️', name: 'Python runtime', artifact: 'CPython process', description: 'The evaluation loop performs each bytecode operation and calls lower-level code.', example: 'python greeting.py' },
        { icon: '🖥️', name: 'Visible result', artifact: 'stdout', description: 'The runtime asks the operating system to write the message to the output stream.', example: 'Hello' },
      ] },
      { id: 'c', icon: '🔧', label: 'C with GCC', summary: 'Build a machine-specific executable first, then run that file.', color: 'amber', stages: [
        { icon: '📝', name: 'Source', artifact: 'greeting.c', description: 'We write C source and include the declaration for printf.', example: 'printf("Hello\\n");' },
        { icon: '🧱', name: 'Compile + assemble', artifact: 'greeting.o', description: 'GCC translates the source through assembly into an object file.', example: 'gcc -c greeting.c' },
        { icon: '🔗', name: 'Link', artifact: 'greeting executable', description: 'The linker joins our object file with required library code.', example: 'gcc greeting.o -o greeting' },
        { icon: '🖥️', name: 'Run native code', artifact: 'stdout', description: 'The operating system loads the executable for this machine.', example: './greeting → Hello' },
      ] },
      { id: 'java', icon: '☕', label: 'Java', summary: 'Build portable bytecode first, then let a JVM run it on the current machine.', color: 'indigo', stages: [
        { icon: '📝', name: 'Source', artifact: 'Greeting.java', description: 'We write source inside a class and main method.', example: 'System.out.println("Hello");' },
        { icon: '🏗️', name: 'Compile', artifact: 'Greeting.class', description: 'javac checks the source and produces Java bytecode.', example: 'javac Greeting.java' },
        { icon: '⚙️', name: 'JVM runtime', artifact: 'loaded class', description: 'The Java Virtual Machine loads and verifies the class. It can interpret or JIT-compile hot code.', example: 'java Greeting' },
        { icon: '🖥️', name: 'Visible result', artifact: 'stdout', description: 'The JVM works with the operating system to display the message.', example: 'Hello' },
      ] },
    ] },
    { type: 'callout', variant: 'note', title: 'An honest accuracy note', paragraphs: ['“Compiled” and “interpreted” are not two sealed boxes. CPython compiles source to bytecode. Modern JVMs can compile bytecode to native code while a program runs. C compilers may combine or optimise stages.', 'The routes above are useful maps, not photographs of every internal detail.'] },
    { type: 'aha', text: 'The language is not the processor. A toolchain is the bridge between the code we understand and the operations the machine performs.' },
    { type: 'heading', text: 'Open Python’s hidden instruction list' },
    { type: 'paragraph', text: 'CPython includes `dis`, a **disassembler**—a tool that shows bytecode in a readable form. The exact instructions can change between Python versions. That is fine. We are looking for evidence that a hidden stage exists.' },
    { type: 'code', filename: 'greeting.py', lines: PYTHON_CODE },
    { type: 'terminal', command: 'python -m dis greeting.py', lines: ['... LOAD_CONST ...', '... STORE_NAME ...', '... CALL ...', '... RETURN_VALUE ...'] },
    { type: 'steps', items: ['Create `greeting.py` with the two lines above.', 'Run `python greeting.py` and see the greeting.', 'Run `python -m dis greeting.py`.', 'Find an instruction containing `LOAD` and one containing `CALL`.', 'Change the message. Run both commands again.'] },
    { type: 'guess', prompt: 'Which route creates `Greeting.class` before the program runs?', options: ['Python with CPython', 'C with GCC', 'Java with javac'], answerIndex: 2, explain: 'javac compiles Java source into a class file containing Java bytecode.' },
    { type: 'bug', prompt: 'Which statement hides an important truth?', lines: ['CPython can compile source to bytecode.', 'Python source runs directly inside the processor.', 'A C linker can join object files and libraries.'], bugLine: 2, explain: 'The processor does not read Python words directly. The Python runtime and lower-level system code stand in between.' },
    { type: 'mistakes', items: [['Interpreted means never compiled', 'CPython normally compiles source into bytecode before executing it.'], ['Bytecode is CPU machine code', 'Bytecode targets a virtual machine or runtime, not a specific processor instruction set.'], ['The compiler is the whole toolchain', 'A real route can also include preprocessing, assembly, linking, loading and runtime work.']] },
    { type: 'quiz', items: [['What is an artifact?', 'A file or internal result created by a stage, such as an object file or bytecode.'], ['What does a linker do in the C route?', 'It combines object files and required library code into an executable.'], ['Why can Java bytecode travel between systems?', 'A JVM made for each system can run the shared class-file format.'], ['Is Python simply “not compiled”?', 'No. CPython normally compiles source into bytecode internally.']] },
    { type: 'takeaways', items: ['Source code is written for people; processors perform machine instructions.', 'CPython prepares bytecode and executes it through a runtime.', 'A C toolchain can compile, assemble and link a native executable.', 'javac creates Java bytecode; a JVM runs and may JIT-compile it.', 'Simple diagrams are maps. Real implementations can optimise or combine stages.'] },
    { type: 'resources', items: [['Python `dis`: inspect CPython bytecode', 'https://docs.python.org/3/library/dis.html'], ['GCC: the four build stages', 'https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html'], ['Oracle `javac`: source to bytecode class files', 'https://docs.oracle.com/en/java/javase/11/tools/javac.html']] },
    { type: 'cliffhanger', title: 'The route can run code—but where does data wait?', text: 'Next, we give a value a name and watch Python’s memory change one line at a time.' },
  ],
}
