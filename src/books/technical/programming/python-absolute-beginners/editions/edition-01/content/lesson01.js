import image from '../assets/hello-world-infographic.jpg'
import printAnatomy from '../assets/print-anatomy.jpg'

const codeLines = ['print("Hello, World!")']

export const lesson01 = {
  id: 'make-python-run',
  icon: '⚡',
  title: 'Make Python Run: Source to Bytecode to Screen',
  shortTitle: 'Make Python Run',
  badge: 'CHAPTER 01 : FOUNDATIONS',
  subtitle: 'Understand the Python execution pipeline from disk characters to bytecode and stdout without guessing.',
  tags: ['Python', 'Bytecode', 'Interpreter', 'CPython', 'First Principles'],

  blocks: [
    {
      type: 'chapter-opener',
      missionBadge: 'CHAPTER 01 : FOUNDATIONS : THE RUNTIME AWAKENING',
      missionTitle: 'The Silent Terminal and the Disassembly Trap',
      missionCrisis: 'The 08:45 AM Lab 304 Placement Countdown and the Syntax Trap',
      missionContext: 'At 08:45 AM in computer lab 304, forty third-year engineering students stare at locked placement exam terminals. The screening portal requires candidates to submit a verified script that greets the system runtime. Palash vibe-codes ten lines of prompt generated Python, presses enter, and watches his terminal freeze with a silent exit code 1. Beside him, Akshay stares at a NameError: Print is not defined. Gates lock in fifteen minutes. Systems Architect Sameer walks down the lab aisle with hot cutting chai, sits between them, and asks one decisive question: Do you know what happens between your keystroke on disk and the electrons lighting up your monitor pixels? Akshay and Palash look down at their keyboards in dead silence.',
      missionObjective: 'Trace Python execution from source characters on disk to tokenizer tokens, compiler bytecode, virtual machine evaluation loop, and operating system standard output.',
      targetSystems: 'Lab 304 Linux Workstations : CPython 3.12 Runtime : POSIX Stdout Stream',
      phaseRoadmap: [
        {
          phase: 'Phase 1 of 3',
          title: 'The Silent Terminal and Source File Mechanics',
          status: 'current',
          desc: 'Chapter 1: Dissecting source code on disk, understanding CPython bytecode compilation, and capturing raw stdout.'
        },
        {
          phase: 'Phase 2 of 3',
          title: 'Memory Addresses and Name Binding',
          status: 'upcoming',
          desc: 'Chapter 2: Investigating variable binding, PyObject headers, reference counting, and the integer cache trap.'
        },
        {
          phase: 'Phase 3 of 3',
          title: 'Building the CLI Study Assistant',
          status: 'upcoming',
          desc: 'Chapter 3: Assembling persistent collections and command loops into an automated student study companion.'
        }
      ],
      achieve: 'Understand what a Python program actually does inside the operating system. Distinguish human readable source characters from compiled bytecode instructions. Disassemble a running instruction using dis.dis. Avoid case sensitivity and missing quote traps. Master standard output file descriptors.',
      how: 'Through sequential lab storyboards, word for word dialogue confrontations between vibe coding and first principles engineering, interactive disassembly workbenches, and verified terminal probes.',
      carry: 'The mental model of the CPython compiler and evaluation loop, an intuitive grasp of syntax versus runtime failures, and the confidence to inspect bytecode rather than guessing.'
    },

    // =========================================================================
    // ACT 1: LAB 304 CRISIS & THE VIBE-CODING WALL
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC ACT 1 : THE LAB 304 SCREENING COUNTDOWN',
      title: 'The Silent Screen Panic in Computer Lab 304',
      intro: 'Follow engineering students Akshay and Palash fifteen minutes before the campus placement portal deadline as careless assumptions crash against strict runtime mechanics.',
      columns: 2,
      panels: [
        {
          title: 'The Blinking Terminal Cursor',
          time: '08:45 AM',
          image: {
            src: image,
            file: 'src/books/technical/programming/python-absolute-beginners/editions/edition-01/assets/hello-world-infographic.jpg',
            w: 1536,
            h: 1024,
            alt: 'Akshay and Palash sitting before glowing lab monitors in room 304 with panicked expressions as clock shows fifteen minutes to deadline.',
            caption: 'Computer Lab 304: Fluorescent lights buzz as the placement screening countdown ticks down to fifteen minutes.'
          },
          dialogues: [
            {
              speaker: 'Palash',
              speech: 'Akshay, stop overthinking! Just paste the AI snippet into app.py! The chatbot promised me it outputs the greeting and system metrics!'
            },
            {
              speaker: 'Akshay',
              reply: true,
              speech: 'Palash, wait! Look at line 1. You typed Print with a capital P, and your file has three different styles of curly quotes from your browser copy paste!'
            },
            {
              speaker: 'Palash',
              speech: 'It is just Python! Python is supposed to be friendly and understand what I mean! Why does my screen stay black?!'
            }
          ],
          scene: 'Palash frantically hammers his keyboard in lab 304, pasting unverified code into a terminal, only to get an immediate crash.',
          realization: 'The computer is a deterministic machine. It does not feel empathy, it does not guess intention, and it does not forgive a single misplaced character.'
        },
        {
          title: 'Sameer Intervenes with Cutting Chai',
          time: '08:48 AM',
          image: {
            src: printAnatomy,
            file: 'src/books/technical/programming/python-absolute-beginners/editions/edition-01/assets/print-anatomy.jpg',
            w: 1536,
            h: 1024,
            alt: 'Senior Architect Sameer setting down hot cutting chai between Akshay and Palash while pointing calmly at the glowing terminal error.',
            caption: 'Lab 304 Aisle: Sameer breaks down the anatomy of a print statement on the whiteboard.'
          },
          dialogues: [
            {
              speaker: 'Sameer',
              speech: 'Good morning, engineers. I hear keyboards rattling like machine guns from across the hallway. Let me guess: the AI told you it works on its machine.'
            },
            {
              speaker: 'Palash',
              reply: true,
              speech: 'Sameer sir! The placement portal locks in twelve minutes! I ran python app.py and it gave me NameError: name Print is not defined! Python has a print function, so why is it lying to me?!'
            },
            {
              speaker: 'Sameer',
              speech: 'Python never lies. Python told you the exact, mathematical truth: Print with an uppercase P does not exist in builtins. To a microprocessor, capital P is byte 80, while lowercase p is byte 112. They are as completely different as a mango and a motorcycle.'
            },
            {
              speaker: 'Akshay',
              reply: true,
              speech: 'Byte 80 versus byte 112... The computer does not read English words. It matches exact numeric byte values!'
            },
            {
              speaker: 'Sameer',
              speech: 'Exactly, Akshay. Wipe that bloated ten line snippet. Open an empty file named hello.py. Today, we make the machine speak from first principles.'
            }
          ],
          scene: 'Sameer pulls up a stool between the two students, pointing at the glowing error trace and challenging them to understand the runtime instead of guessing.',
          realization: 'Every character in your source code corresponds to an exact byte on disk. The interpreter checks exact bytes, not semantic hopes.'
        }
      ]
    },

    // =========================================================================
    // FIRST PRINCIPLES LECTURE: WHAT IS A PROGRAM?
    // =========================================================================
    { type: 'heading', text: 'Step 1: What is a Program in Physical Reality?' },
    {
      type: 'paragraph',
      text: 'A **program** is not magic and it is not an abstract thought. A program is a saved sequence of encoded characters stored on physical magnetic or solid state disk storage. When you instruct your operating system to execute `python hello.py`, you initiate a deterministic mechanical process that transforms bytes on disk into electrical signals on your display.'
    },
    {
      type: 'callout',
      variant: 'analogy',
      title: 'The Recipe, the Cook, and the Kitchen Stove',
      paragraphs: [
        'Think of your Python source code as a handwritten recipe card. A recipe card sitting on a wooden kitchen counter does not prepare food on its own. It is passive text.',
        'The **Python interpreter** is the master chef who reads the recipe line by line, confirms every ingredient exists in the pantry, and converts each step into physical movements.',
        'The **processor** is the kitchen stove. It supplies the raw computational heat and electrical power to execute the instructions.'
      ]
    },

    // =========================================================================
    // ACT 2: SOURCE CODE TO BYTECODE TO SCREEN
    // =========================================================================
    {
      type: 'storyboard',
      badge: 'GRAPHIC COMIC ACT 2 : THE THREE STAGE ENGINE',
      title: 'The Hidden Journey from Text to Machine Execution',
      intro: 'Sameer sketches the three stage internal pipeline of CPython on the lab whiteboard, showing how disk characters are parsed, compiled, and dispatched.',
      columns: 2,
      panels: [
        {
          title: 'The Whiteboard Blueprint',
          time: '08:52 AM',
          image: {
            src: image,
            file: 'src/books/technical/programming/python-absolute-beginners/editions/edition-01/assets/hello-world-infographic.jpg',
            w: 1536,
            h: 1024,
            alt: 'Sameer sketching three clean boxes on whiteboard labeled Source Code on Disk, Bytecode in RAM, and Evaluation Loop to Screen.',
            caption: 'Whiteboard Diagram: The three stages of CPython execution.'
          },
          dialogues: [
            {
              speaker: 'Akshay',
              speech: 'So when I run python hello.py, does the computer CPU directly read my letters p, r, i, n, t?'
            },
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'Never. Your central processing unit understands only binary machine instructions like 01001000. It has no idea what print means. Python is an interpreter. First, it tokenizes your characters. Next, it compiles those tokens into intermediate instructions called bytecode. Finally, the CPython virtual machine executes those bytecode instructions one by one.'
            },
            {
              speaker: 'Palash',
              speech: 'Wait, Python compiles?! I thought Python was an interpreted language and only C or C++ compile!'
            },
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'That is the single most widespread myth in modern computer science education! Python compiles every single line you write into bytecode first. Have you ever seen a folder called __pycache__ with .pyc files? That is compiled Python bytecode sitting on your drive!'
            }
          ],
          scene: 'Sameer shatters Palash assumption that Python does not compile, detailing the transition from tokens to abstract syntax trees and bytecode.',
          realization: 'Python always compiles source code into intermediate bytecode instructions before executing them inside its virtual machine.'
        },
        {
          title: 'Disassembling the First Instruction',
          time: '08:55 AM',
          image: {
            src: printAnatomy,
            file: 'src/books/technical/programming/python-absolute-beginners/editions/edition-01/assets/print-anatomy.jpg',
            w: 1536,
            h: 1024,
            alt: 'Terminal screen showing dis.dis disassembly output with LOAD_NAME, LOAD_CONST, and CALL instructions in cyan and amber text.',
            caption: 'Terminal Disassembly: Revealing the raw bytecode instructions behind print("Hello, World!").'
          },
          dialogues: [
            {
              speaker: 'Akshay',
              speech: 'Look at the terminal! We imported dis and ran dis.dis("print(\'Hello, World!\')"). Look at what appeared!'
            },
            {
              speaker: 'Sameer',
              reply: true,
              speech: 'Read those three operations aloud, Akshay. That is what the Python Virtual Machine actually executes.'
            },
            {
              speaker: 'Akshay',
              speech: 'Operation 1: LOAD_NAME print. Operation 2: LOAD_CONST Hello, World!. Operation 3: CALL 1. Operation 4: RETURN_VALUE!'
            },
            {
              speaker: 'Palash',
              reply: true,
              speech: 'It pushes the function onto a stack, pushes the argument text, calls the function, and returns! That is why capital Print threw NameError: LOAD_NAME failed to find Print in the symbol table!'
            },
            {
              speaker: 'Sameer',
              speech: 'Now you are not guessing like a vibe-coder. Now you are thinking like a systems engineer.'
            }
          ],
          scene: 'Akshay and Palash run the dis module in their terminal and witness the precise stack machine bytecode generated by CPython.',
          realization: 'When you understand bytecode, error messages are no longer mysterious curses: they are exact reports from specific virtual machine operations.'
        }
      ]
    },

    // =========================================================================
    // INTERACTIVE WORKBENCH: THE BYTECODE DISASSEMBLY BENCH
    // =========================================================================
    {
      type: 'comic-workbench',
      badge: 'EQUIPMENT BENCH 1 : SOURCE CODE VS BYTECODE DISASSEMBLY',
      title: 'Inspecting CPython Instructions with the dis Module',
      appType: 'ide',
      dialogue: [
        {
          speaker: 'Akshay',
          role: 'Apprentice Engineer',
          avatarSrc: image,
          text: 'We wrote one line of Python. Let us see the exact four virtual machine operations CPython creates.'
        },
        {
          speaker: 'Sameer',
          role: 'Principal Systems Architect',
          avatarSrc: printAnatomy,
          text: 'Every Python statement compiles into bytecode instructions executed by the CPython ceval.c loop.'
        }
      ],
      tabs: [
        {
          label: '1. hello.py (Source Code)',
          ide: {
            filename: 'hello.py',
            status: 'Clean Source File',
            code: `# Program 01: The Verified Greeting
# Author: Akshay Mehra and Palash Sen
# Target: CPython 3.12 POSIX Standard Output

message = "Hello, World!"
print(message)`
          },
          breakdown: {
            input: 'python hello.py executed from the lab terminal.',
            explanation: 'The CPython lexer breaks characters into tokens (NAME, EQUAL, STRING, NEWLINE), builds an Abstract Syntax Tree, and emits bytecode instructions.',
            output: 'Hello, World! printed directly to standard output.',
            trapAndFix: 'Common Trap: Leaving unescaped curly quotes from web pages causes an instant SyntaxError: invalid character.'
          }
        },
        {
          label: '2. Disassembly Probe (Bytecode View)',
          ide: {
            filename: 'disassemble_probe.py',
            status: 'Disassembly Analysis',
            code: `import dis

code_to_inspect = 'print("Hello, World!")'

print("=== CPYTHON BYTECODE INSTRUCTION STREAM ===")
dis.dis(code_to_inspect)`
          },
          breakdown: {
            input: 'python disassemble_probe.py',
            explanation: 'The dis module exposes the internal CPython bytecode instructions passed to the evaluation loop in Python/ceval.c.',
            output: `  0: RESUME                   0
  2: LOAD_NAME                0 (print)
  4: LOAD_CONST               0 ('Hello, World!')
  6: CALL                     1
 14: RETURN_VALUE`,
            trapAndFix: 'Systems Insight: Notice instruction 2 (LOAD_NAME). If the symbol is misspelled as Print, LOAD_NAME raises NameError before CALL can ever execute.'
          }
        }
      ]
    },

    // =========================================================================
    // CORE ANATOMY BREAKDOWN
    // =========================================================================
    { type: 'heading', text: 'Step 2: Meet Every Character on the Line' },
    {
      type: 'paragraph',
      text: 'In professional software development, you never type a character whose purpose you cannot defend. Let us examine the four distinct structural components of `print("Hello, World!")`.'
    },
    {
      type: 'steps',
      showHeading: false,
      items: [
        'The name print: A built in identifier bound in Python builtins namespace that references the compiled C routine PyFile_WriteObject.',
        'The round parentheses ( ): The call operator in Python syntax that instructs the runtime to evaluate arguments and invoke the function.',
        'The quote characters " ": Delimiters that inform the lexer that the characters inside represent string literal data rather than variable names.',
        'The payload Hello, World!: The literal text characters loaded into memory and written to file descriptor 1 (standard output).'
      ]
    },

    // =========================================================================
    // RUNTIME VISUALIZER
    // =========================================================================
    { type: 'heading', text: 'Step 3: Watch One Complete Run in Memory' },
    {
      type: 'paragraph',
      text: 'The visualizer below steps through the entire lifecycle of our program, tracking variable scope, memory reference allocation, and standard output streaming.'
    },
    {
      type: 'runviz',
      showHeading: false,
      filename: 'hello.py',
      codeLines,
      steps: [
        {
          line: null,
          title: 'Operating System Process Fork',
          explain: 'The shell forks a new process and loads the python binary into system RAM.',
          vars: [],
          console: []
        },
        {
          line: null,
          title: 'CPython Lexer and Parser Boot',
          explain: 'Python reads hello.py from disk, validates syntax tokens, and builds the Abstract Syntax Tree.',
          vars: [],
          console: []
        },
        {
          line: 1,
          title: 'Symbol Resolution in Builtins',
          explain: 'LOAD_NAME resolves print inside the builtins namespace dictionary.',
          vars: [{ name: 'builtins.print', value: '<built-in function print>' }],
          console: []
        },
        {
          line: 1,
          title: 'String Literal Allocation',
          explain: 'LOAD_CONST creates a PyUnicodeObject in memory holding "Hello, World!".',
          vars: [
            { name: 'builtins.print', value: '<built-in function print>' },
            { name: 'const[0]', value: '"Hello, World!"' }
          ],
          console: []
        },
        {
          line: 1,
          title: 'Function Dispatch and Stdout Write',
          explain: 'CALL invokes print(), serializing characters into the stdout buffer (File Descriptor 1).',
          vars: [],
          console: ['Hello, World!']
        }
      ]
    },

    { type: 'terminal', command: 'python hello.py', lines: ['Hello, World!'] },

    {
      type: 'aha',
      text: 'We did not ask the computer to understand English greeting etiquette. We instructed CPython to resolve a symbol, allocate an immutable string in memory, and dispatch it to POSIX standard output. The machine performed exactly what we commanded.'
    },

    // =========================================================================
    // DIAGNOSTIC TRIAGE: BUGS AND MISTAKES
    // =========================================================================
    { type: 'heading', text: 'Step 4: Common Failure Modes and Triage' },
    {
      type: 'bug',
      prompt: 'Which line causes an immediate NameError at runtime?',
      lines: ['print("System Online")', 'Print("System Online")'],
      bugLine: 2,
      explain: 'Python identifiers are strictly case sensitive. Print with an uppercase P does not exist in builtins.'
    },
    {
      type: 'mistakes',
      items: [
        ['print(Hello, World!)', 'Without quote delimiters, Python interprets Hello as a variable name and comma as an argument separator, raising SyntaxError or NameError.'],
        ['Print("Hello, World!")', 'Case sensitivity trap: CPython looks for Print in local, global, and builtin scopes, failing with NameError.'],
        ['print("Hello, World!)', 'Unterminated string literal: The closing quote is missing, causing the lexer to crash with SyntaxError: unterminated string literal.'],
        ['python hello', 'Missing file extension: The operating system terminal needs the complete filename hello.py to locate the file on disk.']
      ]
    },

    // =========================================================================
    // REVIEW QUIZ & CLIFFHANGER
    // =========================================================================
    {
      type: 'quiz',
      items: [
        ['What is bytecode in CPython?', 'An intermediate set of virtual machine instructions produced by compiling Python source code before execution.'],
        ['Why does Print raise NameError while print succeeds?', 'Python identifiers are case sensitive. The lowercase symbol print is registered in builtins, whereas Print is undefined.'],
        ['What stream does print() write to by default?', 'Standard output (stdout), which maps to file descriptor 1 in the operating system.']
      ]
    },
    {
      type: 'takeaways',
      items: [
        'Source code is human readable text saved as physical bytes on disk storage.',
        'CPython compiles source code into intermediate bytecode instructions before evaluating them.',
        'The dis module allows you to inspect raw virtual machine bytecode operations.',
        'Every character, quote, bracket, and letter casing is mathematically checked by the lexer and parser.',
        'Mastering first principles turns runtime crashes from panic into systematic debugging.'
      ]
    },
    {
      type: 'resources',
      items: [
        ['Python Official Documentation: Built in Functions (print)', 'https://docs.python.org/3/library/functions.html#print'],
        ['Python dis module: Disassembler for Python Bytecode', 'https://docs.python.org/3/library/dis.html'],
        ['CPython Source Code: The Evaluation Loop (ceval.c)', 'https://github.com/python/cpython/blob/main/Python/ceval.c']
      ]
    },
    {
      type: 'cliffhanger',
      title: 'The Mystery of the Integer Memory Cache',
      text: 'Akshay and Palash saved their placement screening submission with seconds to spare. But as they celebrate, Palash writes a = 300 and b = 300, checks a is b, and the terminal prints False. Akshay writes a = 5 and b = 5, checks a is b, and it prints True! Next, we dive deep into RAM addresses, PyObject headers, and the hidden Python memory arena.'
    }
  ]
}
