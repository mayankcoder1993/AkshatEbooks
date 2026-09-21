const functionCode = [
  'def add_note(notes, title, text):',
  '    """Store text under a cleaned title and return the title."""',
  '    clean_title = title.strip().lower()',
  '    notes[clean_title] = text.strip()',
  '    return clean_title',
  '',
  'def read_score():',
  '    while True:',
  '        raw = input("Practice score from 0 to 10: ")',
  '        try:',
  '            score = int(raw)',
  '        except ValueError:',
  '            print("Enter a whole number.")',
  '            continue',
  '        if 0 <= score <= 10:',
  '            return score',
  '        print("Use a number from 0 to 10.")'
]

export const chapter05 = {
  id: 'functions-and-input', icon: 'ƒ', title: 'Build with Functions and Input', shortTitle: 'Functions',
  subtitle: 'Turn the separate assistant pieces into one reusable local program.', tags: ['Assembly workshop', 'Input', '65 min'],
  blocks: [
    { type: 'arc-progress', arcTitle: 'Create an Interactive Terminal Assistant', step: 5, total: 5, currentFocus: 'Assemble the working assistant', text: 'Collect learner input, validate it and give each command a focused function.' },
    { type: 'heading', text: 'Input returns text' },
    { type: 'paragraph', text: '`input()` displays a prompt, waits for the user and returns a string. Pressing Enter ends the response. Convert with `int()` or `float()` only when a number is required. Invalid numeric text raises `ValueError`, so a validation loop can explain the problem and ask again.' },
    { type: 'heading', text: 'A function names one job' },
    { type: 'definition', term: 'function', text: 'A reusable group of instructions with a name. A **parameter** is a name in the definition. An **argument** is a value supplied by a call.', example: '`add_note(notes, "maths", "Practise fractions")` supplies three arguments.' },
    { type: 'paragraph', text: '`return` sends a value back to the caller. A function that reaches its end without an explicit `return` returns `None`. Names created inside a function are normally local to that call. This **local scope** keeps one function’s temporary work from leaking everywhere.' },
    { type: 'code', filename: 'assistant_functions.py', lines: functionCode },
    { type: 'worked-example', title: 'Trace one call', problem: 'What happens in `add_note(notes, " Maths ", " Fractions ")`?', steps: ['The arguments connect to the three parameters.', 'Local name `clean_title` becomes `maths`.', 'The dictionary receives `notes["maths"] = "Fractions"`.', 'The function returns `maths` to the caller.'], result: 'The function changes the supplied dictionary and returns the cleaned key.' },
    { type: 'callout', variant: 'note', title: 'Useful extensions', paragraphs: ['A default argument supplies a value when the caller omits it. A keyword argument names the parameter at the call site.', '`*args` collects extra positional arguments. `**kwargs` collects extra keyword arguments. Lambdas, `map()` and `filter()` are optional tools, not requirements for this assistant.'] },
    { type: 'heading', text: 'Assemble the local assistant' },
    { type: 'blueprint', purpose: 'Run a deterministic study assistant.', input: 'Commands and note text from the learner.', processing: 'Normalize the command, select a function, validate values and update collections.', output: 'Clear responses plus saved local notes.', files: ['assistant.py', 'notes.txt'] },
    { type: 'steps', title: 'Project completion check', items: ['Greet the learner.', 'Recognize `help`, `add`, `list` and `quit`.', 'Store notes in a dictionary and command history in a list.', 'Keep asking until `quit`.', 'Use functions for focused jobs.', 'Validate at least one input.', 'Save and load useful data with UTF-8 text.', 'End with a clear goodbye message.'] },
    { type: 'bug', prompt: 'Why does this print `None`?', lines: ['def greeting(name):', '    message = f"Hello, {name}"', 'print(greeting("Mira"))'], bugLine: 2, explain: 'The function builds `message` but never returns it. Add `return message`.' },
    { type: 'quiz', items: [['What type does `input()` return?', 'A string.'], ['How is an argument different from a parameter?', 'A parameter is a definition name. An argument is a supplied value.'], ['What happens without an explicit return value?', 'The function returns `None`.'], ['Why keep a function focused?', 'A clear responsibility makes code easier to understand, reuse and test.']] },
    { type: 'takeaways', items: ['Validate text before treating it as a number.', 'Functions organize responsibilities.', 'The first assistant is deterministic: its rules determine every response.'] },
    { type: 'resources', items: [['Python functions', 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions'], ['Python input', 'https://docs.python.org/3/library/functions.html#input']] },
    { type: 'cliffhanger', title: 'Working code can still be tangled', text: 'A new repair arc begins next. Objects, modules and tests will make the application easier to extend and trust.' }
  ]
}
