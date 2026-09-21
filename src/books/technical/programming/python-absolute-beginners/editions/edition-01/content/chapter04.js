const loopCode = [
  'commands = ["help", "add", "list", "quit"]',
  'running = True',
  '',
  'while running:',
  '    command = input("Command: ").strip().lower()',
  '    if command == "quit":',
  '        running = False',
  '    elif command in commands:',
  '        print(f"Route: {command}")',
  '    else:',
  '        print("Unknown command. Type help.")',
  '',
  'print("Goodbye!")'
]

export const chapter04 = {
  id: 'control-the-program', icon: '◇', title: 'Control the Program', shortTitle: 'Control',
  subtitle: 'Make the assistant choose a command route and continue until the learner exits.', tags: ['Decision maze', 'Loops', '55 min'],
  blocks: [
    { type: 'arc-progress', arcTitle: 'Create an Interactive Terminal Assistant', step: 4, total: 5, currentFocus: 'Choose and repeat routes', text: 'Add comparisons, Boolean logic, branches and a command loop.' },
    { type: 'comparison', title: 'Comparisons ask questions', columns: ['Operator', 'Question'], rows: [['`==`', 'Are the values equal?'], ['`!=`', 'Are they different?'], ['`<` and `<=`', 'Is the left value smaller, with or without equality?'], ['`>` and `>=`', 'Is the left value larger, with or without equality?']] },
    { type: 'callout', variant: 'note', title: 'Assignment is not equality', paragraphs: ['`score = 7` assigns a value. `score == 7` compares two values and produces `True` or `False`.'] },
    { type: 'heading', text: 'Combine true-or-false values' },
    { type: 'paragraph', text: '`and` requires both sides to be true. `or` requires at least one true side. `not` reverses a truth value. Python short-circuits: it stops as soon as the final result is known. Write explicit comparisons first. Learn **truthiness**, Python’s rule for treating values such as empty collections as false, after the explicit form is clear.' },
    { type: 'heading', text: 'A branch selects one route' },
    { type: 'paragraph', text: '`if` tests the first condition. `elif` tests another only when earlier branches did not run. `else` catches the remaining case. A colon opens the block. Consistent indentation marks the instructions inside it.' },
    { type: 'flow', title: 'The command decision maze', stages: [{ eyebrow: '1', title: 'Is it quit?', detail: 'Stop the loop.' }, { eyebrow: '2', title: 'Is it a known command?', detail: 'Run that command route.' }, { eyebrow: '3', title: 'Otherwise', detail: 'Explain how to get help.' }], caption: 'Only one route runs for each command.' },
    { type: 'heading', text: 'Loops repeat for different reasons' },
    { type: 'comparison', title: 'Choose the loop from the job', columns: ['Loop', 'Use it when', 'Assistant example'], rows: [['`for`', 'You have a sequence to visit.', 'Display every saved note.'], ['`while`', 'You repeat while a condition stays true.', 'Keep accepting commands.']] },
    { type: 'paragraph', text: '`range()` produces a sequence of integers. `enumerate()` pairs each item with a counter, which helps number notes. `break` exits the nearest loop. `continue` skips to its next turn. A list comprehension can build a simple new list, but write the equivalent `for` loop first.' },
    { type: 'code', filename: 'command_loop.py', lines: loopCode },
    { type: 'bug', prompt: 'Why does this loop never finish?', lines: ['running = True', 'while running:', '    print("Working")'], bugLine: 3, explain: 'Nothing changes `running` and there is no `break`. The condition remains true forever.' },
    { type: 'guess', prompt: 'Which branch runs when command is `list`?', code: loopCode.slice(5,11).join('\n'), options: ['quit branch', 'known-command branch', 'else branch'], answerIndex: 1, explain: '`list` belongs to `commands`, so the `elif` condition is true.' },
    { type: 'quiz', items: [['What is the difference between `=` and `==`?', '`=` assigns. `==` compares.'], ['When is a `for` loop a good fit?', 'When visiting items in a sequence.'], ['What can stop a `while` loop?', 'Its condition becoming false or a `break` statement.'], ['Why does indentation matter?', 'It tells Python which statements belong to a block.']] },
    { type: 'takeaways', items: ['Comparisons produce Boolean values.', 'A branch selects a route.', 'A loop repeats work while state changes.'] },
    { type: 'resources', items: [['Python control flow', 'https://docs.python.org/3/tutorial/controlflow.html']] },
    { type: 'cliffhanger', title: 'The routes need reusable jobs', text: 'Next, functions organize the command work and validated input completes the first assistant.' }
  ]
}
