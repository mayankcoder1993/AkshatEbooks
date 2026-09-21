import { lesson01 } from './lesson01.js'
import { lesson02 } from './lesson02.js'

const teachingBlocks = lesson => lesson.blocks.filter(block => !['arc-start','arc-progress','cliffhanger'].includes(block.type))

export const chapter01 = {
  id: 'make-python-run', icon: '▶', title: 'Make Python Run', shortTitle: 'Run Python',
  subtitle: 'Start with a saved file, display an exact response and follow the route from source code to screen.', tags: ['Launch challenge', 'Execution', '35 min'],
  blocks: [
    { type: 'arc-start', arcTitle: 'Create an Interactive Terminal Assistant', step: 1, total: 5, currentFocus: 'Launch the assistant', title: 'Build one assistant across five connected chapters', text: 'Our local assistant will greet a learner, understand simple commands, remember useful information and keep running until the learner exits. It follows rules we write. It does not use AI yet.', weKnow: ['The Quick Start proved that a saved Python file can run.', 'The terminal can show program output.'], weNeed: ['Display the assistant title.', 'Represent and organize information.', 'Choose command routes.', 'Collect and validate input.', 'Save useful local data.'] },
    ...teachingBlocks(lesson01),
    { type: 'heading', text: 'Look behind the Run button' },
    { type: 'paragraph', text: 'The program already works. Now follow the same `print("Hello, World!")` instruction from the saved file to visible output. This is one deeper look, not a second explanation of `print()`.' },
    ...teachingBlocks(lesson02),
    { type: 'heading', text: 'Assistant build step' },
    { type: 'code', filename: 'assistant.py', lines: ['print("STUDY ASSISTANT")', 'print("Type help to see a command.")'] },
    { type: 'terminal', command: 'python assistant.py', lines: ['STUDY ASSISTANT', 'Type help to see a command.'] },
    { type: 'quiz', items: [['What is stored in a `.py` file?', 'Python source code written as text.'], ['Which quoted text becomes output in `print("Ready")`?', '`Ready`'], ['Why does `Print("Hi")` fail?', 'Python is case-sensitive. The built-in name is `print`.'], ['Put these in order: screen, Python, saved file.', 'Saved file, Python, screen.']] },
    { type: 'takeaways', items: ['A program is a sequence of instructions.', 'Python is case-sensitive.', 'CPython can compile source to bytecode before its interpreter runs the actions.'] },
    { type: 'cliffhanger', title: 'The assistant needs state', text: 'Next, names and values let the assistant remember who is studying and shape a useful status message.' }
  ]
}
