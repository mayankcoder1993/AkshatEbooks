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
  subtitle: 'Make the assistant choose a command route and continue until the learner exits.', tags: ['Decision maze', 'Loops', '70 min'],
  blocks: [
    { type: 'arc-progress', arcTitle: 'Create an Interactive Terminal Assistant', step: 4, total: 5, currentFocus: 'Choose and repeat routes', text: 'Add comparisons, Boolean logic, branches and a command loop.' },

    { type: 'comparison', title: 'Comparisons ask precise questions', columns: ['Operator', 'Question', 'Example'], rows: [['`==`', 'Are the values equal?', '`2.0 == 2` is `True`.'], ['`!=`', 'Are they different?', '`"2" != 2` is `True`.'], ['`<` and `<=`', 'Is the left value smaller, with or without equality?', '`3 <= 3` is `True`.'], ['`>` and `>=`', 'Is the left value larger, with or without equality?', '`8 > 5` is `True`.']] },
    { type: 'callout', variant: 'note', title: 'Assignment is not equality', paragraphs: ['`score = 7` assigns a value. `score == 7` compares two values and produces `True` or `False`.', 'String comparison is case-sensitive. `"Help" == "help"` is false. Ordering values that have no meaningful shared order, such as `3 < "4"`, raises `TypeError`.'] },

    { type: 'heading', text: 'A chained comparison guards a range' },
    { type: 'flow', title: 'Read `0 <= score <= 10` as two gates', stages: [{ eyebrow: 'LOWER GATE', title: '`0 <= score`', detail: 'The score cannot fall below zero.' }, { eyebrow: 'MIDDLE VALUE', title: '`score`', detail: 'Python evaluates this middle expression once.' }, { eyebrow: 'UPPER GATE', title: '`score <= 10`', detail: 'The score cannot rise above ten.' }], caption: 'Both comparisons must be true for the whole chain to be true.' },
    { type: 'comparison', title: 'Trace two chained questions', columns: ['Expression', 'Expanded meaning', 'Result'], rows: [['`2 < 3 > 10`', '`2 < 3 and 3 > 10`', '`False`'], ['`2 <= 3 >= 1`', '`2 <= 3 and 3 >= 1`', '`True`']] },

    { type: 'heading', text: 'Combine conditions without wasted work' },
    { type: 'paragraph', text: '`and` requires both conditions to pass. `or` requires at least one condition to pass. `not` reverses the truth test. Python **short-circuits**: it skips the right side when the left side already determines the answer.' },
    { type: 'worked-example', title: 'Guard an index with short-circuiting', problem: 'How can the assistant read the first note only when a note exists?', steps: ['`bool(notes)` is false when the list is empty.', 'In `notes and notes[0]`, a false left side stops evaluation.', 'Python does not attempt the unsafe index when the list is empty.', 'For first-time code, `if notes:` is often clearer than storing the operand result.'], result: 'The guard prevents `IndexError` without doing unnecessary work.' },
    { type: 'callout', variant: 'note', title: 'Truthiness comes after real Boolean values', paragraphs: ['`False`, `None`, numeric zero and empty strings or collections are false in a condition. Most other values are true.', '`and` and `or` actually return one of their operands. In this chapter, use them mainly in conditions so the decision remains easy to read.'] },

    { type: 'heading', text: 'A branch selects one route' },
    { type: 'paragraph', text: '`if` tests the first condition. `elif` tests another only when earlier branches did not run. `else` catches the remaining case. A colon opens the block. Consistent indentation marks the instructions inside it.' },
    { type: 'flow', title: 'The command decision maze', stages: [{ eyebrow: '1', title: 'Is it quit?', detail: 'Stop the loop.' }, { eyebrow: '2', title: 'Is it a known command?', detail: 'Run that command route.' }, { eyebrow: '3', title: 'Otherwise', detail: 'Explain how to get help.' }], caption: 'Only one route runs for each command.' },

    { type: 'heading', text: 'Loops repeat for different reasons' },
    { type: 'comparison', title: 'Choose the loop from the job', columns: ['Loop', 'Use it when', 'Assistant example'], rows: [['`for`', 'You have a sequence to visit.', 'Display every saved note.'], ['`while`', 'You repeat while a condition stays true.', 'Keep accepting commands.']] },
    { type: 'paragraph', text: '`range()` produces a sequence of integers. `enumerate()` pairs each item with a counter, which helps number notes. `break` exits the nearest loop. `continue` skips to its next turn. A list comprehension can build a simple new list, but write the equivalent `for` loop first.' },
    { type: 'code', filename: 'command_loop.py', lines: loopCode },
    { type: 'bug', prompt: 'Why does this loop never finish?', lines: ['running = True', 'while running:', '    print("Working")'], bugLine: 3, explain: 'Nothing changes `running` and there is no `break`. The condition remains true forever.' },
    { type: 'guess', prompt: 'Which branch runs when command is `list`?', code: loopCode.slice(5,11).join('\n'), options: ['quit branch', 'known-command branch', 'else branch'], answerIndex: 1, explain: '`list` belongs to `commands`, so the `elif` condition is true.' },

    { type: 'challenge', rank: 'Route Commander', title: 'Defend the command loop', brief: 'Build a route system that handles valid commands, bad input and clean exit without falling into an infinite loop.', steps: ['Accept and normalize a command.', 'Use one chained comparison to validate a score from 0 through 10.', 'Use `and`, `or` or `not` in a condition you can explain.', 'Route at least four commands with `if`, `elif` and `else`.', 'Number saved notes with a `for` loop and keep commands running with a `while` loop.'], winCondition: 'Every route is reachable, an unknown command receives help, and `quit` always ends cleanly.', stretch: 'Add a short-circuit guard that safely displays the first note only when notes exist.' },
    { type: 'quiz', items: [['What is the difference between `=` and `==`?', '`=` assigns. `==` compares.'], ['Why is `2 < 3 > 10` false?', 'It means `2 < 3 and 3 > 10`. The second comparison is false.'], ['When can `and` skip its right side?', 'When the left operand is false, because the whole condition cannot then be true.'], ['What can stop a `while` loop?', 'Its condition becoming false or a `break` statement.']] },
    { type: 'takeaways', items: ['Comparisons produce Boolean results.', 'A chained comparison can guard both boundaries.', 'Logical operators short-circuit.', 'A branch selects one route.', 'A loop repeats work while state changes.'] },
    { type: 'victory', rank: 'Route Commander', proof: ['Translate requirements into comparisons.', 'Protect operations with readable logic.', 'Build branches and loops that terminate correctly.'], next: 'Package each command route into a focused function and validate live input.' },
    { type: 'resources', items: [['Python comparisons and Boolean operations', 'https://docs.python.org/3/library/stdtypes.html#comparisons'], ['Python control flow', 'https://docs.python.org/3/tutorial/controlflow.html']] },
    { type: 'cliffhanger', title: 'The routes need reusable jobs', text: 'Next, functions organize the command work and validated input completes the first assistant.' }
  ]
}
