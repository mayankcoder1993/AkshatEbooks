import CodeBlock from '../components/CodeBlock.jsx'
import FlowDiagram from '../components/FlowDiagram.jsx'
import ProgramCard from '../components/ProgramCard.jsx'
import RunVisualizer from '../components/RunVisualizer.jsx'
import TerminalWindow from '../components/TerminalWindow.jsx'

const CODE = [
  'def main():',
  '    print("Hello, World!")',
  '',
  '',
  'if __name__ == "__main__":',
  '    main()',
]

const RUN_STEPS = [
  {
    line: null,
    title: 'The program is loaded into memory',
    explain:
      'You run the command python3 hello.py. Python opens the file, reads the source code and loads it into RAM. Nothing has executed yet — Python is about to walk through the file, one line at a time, from top to bottom.',
    vars: [],
    console: [],
  },
  {
    line: 1,
    title: 'def main(): — a function is created',
    explain:
      'The def keyword tells Python: “remember this block of code under the name main”. The body (the indented line) is NOT run right now. Python simply stores the function in memory so it can be called later.',
    vars: [{ name: 'main', value: '<function main>' }],
    console: [],
  },
  {
    line: 5,
    title: 'if __name__ == "__main__": — the check',
    explain:
      '__name__ is a special variable Python sets automatically. Because you ran this file directly, __name__ equals "__main__", so the condition is True and the indented line below it will execute. This pattern lets a file work both as a script and as a reusable module.',
    vars: [
      { name: '__name__', value: '"__main__"' },
      { name: 'main', value: '<function main>' },
    ],
    console: [],
  },
  {
    line: 6,
    title: 'main() — the function is called',
    explain:
      'Python jumps into the body of main(). A function call is like pressing the “play” button on the recipe we stored earlier.',
    vars: [
      { name: '__name__', value: '"__main__"' },
      { name: 'main', value: '<function main>' },
    ],
    console: [],
  },
  {
    line: 2,
    title: 'print("Hello, World!") — output is produced',
    explain:
      'print() takes the text between the quotes and writes it to “standard output” (stdout) — which, in a terminal, is your screen. This is the moment the program actually does something visible.',
    vars: [
      { name: '__name__', value: '"__main__"' },
      { name: 'main', value: '<function main>' },
    ],
    console: ['Hello, World!'],
  },
  {
    line: null,
    title: 'The program finishes',
    explain:
      'There are no more lines to execute. Python cleans up and exits with status code 0, which simply means “everything went fine, no errors”.',
    vars: [],
    console: ['Hello, World!', '', '[Process finished with exit code 0]'],
  },
]

function SectionHeading({ id, emoji, children }) {
  return (
    <h2 className="section-heading" id={id}>
      <span className="section-emoji" aria-hidden>
        {emoji}
      </span>
      {children}
    </h2>
  )
}

export default function Lesson01Body({ staticMode = false }) {
  return (
    <div className="lesson-body">
      {/* ---------------- 1. Objectives ---------------- */}
      <SectionHeading emoji="🎯">What we want from this lesson</SectionHeading>
      <div className="objectives">
        {[
          'Understand what a program is and how Python executes it line by line.',
          'Use the print() function to show output on the screen.',
          'Recognise the structure of a proper Python file: def main() and the __name__ check.',
          'Trace the journey of data: Input → Process → Output.',
          'Run a .py file in the terminal and understand what you see.',
        ].map(o => (
          <div key={o} className="objective">
            <span className="check">✓</span>
            <p>{o}</p>
          </div>
        ))}
      </div>

      {/* ---------------- 2. Big idea ---------------- */}
      <SectionHeading emoji="💡">The big idea: a program is a recipe</SectionHeading>
      <div className="callout analogy">
        <p>
          Imagine you are giving a very obedient robot a recipe: <em>“Step 1: take bread. Step 2:
          spread butter. Step 3: serve.”</em> The robot follows the steps <strong>exactly</strong>,
          in <strong>order</strong>, and never guesses anything on its own.
        </p>
        <p>
          A <strong>program</strong> is exactly that — a list of precise instructions, and the
          computer is the obedient robot. In this lesson our recipe has just one instruction:{' '}
          <code>print("Hello, World!")</code> — “show this text on the screen”.
        </p>
      </div>

      {/* ---------------- 3. Flow diagram ---------------- */}
      <SectionHeading emoji="🔄">How the data flows: Input → Process → Output</SectionHeading>
      <FlowDiagram
        inputLabel="None needed"
        inputDetail="This program takes no data from the user — no typing, no clicks."
        processLabel='print("Hello, World!")'
        processDetail="Python passes the text to the built-in print() function."
        outputLabel='"Hello, World!"'
        outputDetail="The text is written to the terminal window."
      />

      {/* ---------------- 4. Program blueprint ---------------- */}
      <SectionHeading emoji="🧩">The program, before we write it</SectionHeading>
      <p className="section-intro">
        Before typing any code, a good programmer answers four questions. This “blueprint” keeps
        your thinking clear — for this lesson and for every future program.
      </p>
      <ProgramCard
        purpose='Display the message "Hello, World!" on the screen — the traditional first program, used to prove that Python is installed and running correctly.'
        input="None. The program does not ask the user for anything."
        processing='The built-in print() function receives the text "Hello, World!" and sends it to standard output (stdout).'
        output='The text Hello, World! appears in the terminal, followed by a new line.'
        files={[]}
      />

      {/* ---------------- 5. The code ---------------- */}
      <SectionHeading emoji="⌨️">The code</SectionHeading>
      <CodeBlock lines={CODE} filename="hello.py" />
      <div className="callout note">
        <p>
          <strong>Line by line:</strong> lines 1–2 <em>define</em> a function called{' '}
          <code>main</code> whose only job is printing the message. Lines 5–6 are the{' '}
          <em>entry point</em>: when the file is run directly, Python calls <code>main()</code>.
          This structure becomes very useful as programs grow.
        </p>
      </div>

      {/* ---------------- 6. Run visualizer ---------------- */}
      <SectionHeading emoji="🎬">
        {staticMode ? 'Watch the program run (step by step)' : 'Watch the program run'}
      </SectionHeading>
      <p className="section-intro">
        {staticMode
          ? 'Here is everything Python does, step by step, when this program runs:'
          : 'Press Auto-play (or use Next) and watch Python walk through the file. The highlighted line is the one Python is looking at; the right panels show memory and console in real time.'}
      </p>
      <RunVisualizer staticMode={staticMode} file="hello.py" codeLines={CODE} steps={RUN_STEPS} />

      {/* ---------------- 7. Result ---------------- */}
      <SectionHeading emoji="✅">The result</SectionHeading>
      <TerminalWindow
        staticMode={staticMode}
        title="Terminal — bash"
        command="python3 hello.py"
        lines={['Hello, World!']}
      />

      {/* ---------------- 8. Try it yourself ---------------- */}
      <SectionHeading emoji="🧪">Try it yourself</SectionHeading>
      <ol className="steps-list">
        <li>
          Create a file named <code>hello.py</code> and paste the code from above into it.
        </li>
        <li>
          Open a terminal <em>in the same folder</em> as the file.
        </li>
        <li>
          Run: <code>python3 hello.py</code> (on Windows: <code>py hello.py</code>).
        </li>
        <li>You should see “Hello, World!” printed on the screen. 🎉</li>
        <li>
          Experiment: change the text inside the quotes and run it again — the output changes
          instantly.
        </li>
      </ol>

      {/* ---------------- 9. Common mistakes ---------------- */}
      <SectionHeading emoji="⚠️">Common mistakes (and why they happen)</SectionHeading>
      <div className="mistakes">
        {[
          ['print(Hello, World!)', 'Forgetting the quotes — text must always be inside quotes, otherwise Python thinks it is a variable.'],
          ['Print("Hello, World!")', 'Wrong capitalisation — Python is case-sensitive; only lowercase print works.'],
          ['print("Hello, World!"', 'Missing closing bracket — every ( must have a matching ).'],
          ['python3 hello', 'Forgetting the .py extension when running the file in the terminal.'],
        ].map(([bad, why]) => (
          <div key={bad} className="mistake">
            <code className="bad">✗ {bad}</code>
            <p>{why}</p>
          </div>
        ))}
      </div>

      {/* ---------------- 10. Quiz ---------------- */}
      <SectionHeading emoji="🧠">Check your understanding</SectionHeading>
      <div className="quiz">
        {[
          [
            'What does print() actually do?',
            'It sends text to standard output (stdout). In a terminal, stdout is your screen — so the text appears there. It does not write to a file or print on paper.',
          ],
          [
            'Why is the body of def main(): not executed when Python first reads line 1?',
            'Because def only defines (stores) the function. The code inside runs only when the function is called — which happens on line 6 with main().',
          ],
          [
            'What does exit code 0 mean?',
            'It is the operating-system way of saying “the program finished successfully”. Non-zero codes usually indicate errors.',
          ],
        ].map(([q, a]) => (
          <details key={q} className="quiz-item" open={staticMode}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>

      {/* ---------------- 11. Takeaways ---------------- */}
      <SectionHeading emoji="🗝️">Key takeaways</SectionHeading>
      <div className="takeaways">
        {[
          'A program = precise instructions the computer follows in order.',
          'print() displays output; text must be inside quotes.',
          'def stores a function; calling it (main()) runs it.',
          'Every program: Input → Process → Output.',
          'Exit code 0 = success. You just ran your first program! 🚀',
        ].map(t => (
          <p key={t} className="takeaway">
            <span aria-hidden>⭐</span> {t}
          </p>
        ))}
      </div>
    </div>
  )
}

export const lesson01 = {
  id: 'lesson-01-hello-world',
  icon: '👋',
  title: 'Your First Python Program — Hello, World!',
  shortTitle: 'Hello, World!',
  subtitle:
    'Write, understand and run your very first program — and see exactly what Python does at every step.',
  tags: ['Python', 'Beginner', '~10 min'],
  Body: Lesson01Body,
}
