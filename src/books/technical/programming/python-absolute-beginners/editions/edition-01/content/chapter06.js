const objectCode = [
  'class Note:',
  '    category = "study"',
  '',
  '    def __init__(self, title, text):',
  '        self.title = title.strip()',
  '        self.text = text.strip()',
  '',
  '    def preview(self):',
  '        return f"{self.title}: {self.text[:20]}"',
  '',
  '    def __str__(self):',
  '        return self.preview()',
  '',
  'first = Note("Maths", "Practise fractions")',
  'second = Note("Science", "Review plant cells")',
  'print(first)',
  'print(second)'
]

export const chapter06 = {
  id: 'model-with-objects', icon: '○', title: 'Model Behavior with Objects', shortTitle: 'Objects',
  subtitle: 'Group related data and actions so the assistant becomes easier to understand and extend.', tags: ['Design studio', 'OOP', '55 min'],
  blocks: [
    { type: 'arc-start', arcTitle: 'Rescue and Strengthen an Application', step: 1, total: 3, currentFocus: 'Model clear responsibilities', title: 'Turn working but tangled code into reliable software', text: 'The assistant works, but note data and behavior are scattered. A new feature causes repeated code, and invalid data can still stop the program. Over three chapters, we will organize, split and test the same application.', weKnow: ['Functions can organize jobs.', 'Collections can hold application state.', 'Expected input can be validated.'], weNeed: ['Objects with clear responsibilities.', 'Modules and a clear entry point.', 'Specific exception handling.', 'Automated behavior tests.'] },
    { type: 'definition', term: 'class and instance', text: 'A **class** describes a kind of object. An **instance** is one object created from that class. Each note instance can hold its own title and text.' },
    { type: 'paragraph', text: '`__init__` initializes a new instance. `self` refers to the instance receiving a method call. Attributes store its data. Instance methods describe actions that use that data.' },
    { type: 'code', filename: 'models.py', lines: objectCode },
    { type: 'terminal', command: 'python models.py', lines: ['Maths: Practise fractions', 'Science: Review plant cells'] },
    { type: 'worked-example', title: 'Two instances stay independent', problem: 'Does changing `first.text` also change `second.text`?', steps: ['Each call to `Note(...)` creates a different instance.', 'Each instance receives its own `text` attribute.', 'Changing one attribute affects that instance only.'], result: 'The second note keeps its original text.' },
    { type: 'heading', text: 'Shared, contained or specialized?' },
    { type: 'comparison', title: 'Choose the relationship', columns: ['Tool', 'Meaning', 'Use here'], rows: [['Class attribute', 'One value found through the class and shared unless overridden.', 'A common category label.'], ['Composition', 'One object contains or uses another object.', 'A notebook contains note objects.'], ['Inheritance', 'A specialized class extends a broader class.', 'A reminder note may specialize a note.']] },
    { type: 'paragraph', text: 'Prefer **composition** when one thing has another thing. Use inheritance for a genuine is-a relationship. **Method overriding** lets a child class replace inherited behavior. **Polymorphism** means code can call the same method on different object types and each object can respond appropriately.' },
    { type: 'callout', variant: 'note', title: 'Selected special method', paragraphs: ['`__str__` defines useful human-readable text for an object. Special names with double underscores support Python protocols. You do not need to memorize a catalog of them.'] },
    { type: 'bug', prompt: 'Which line forgot the instance parameter?', lines: ['class Note:', '    def preview():', '        return self.title'], bugLine: 2, explain: 'An instance method needs `self` as its first parameter.' },
    { type: 'quiz', items: [['What is an instance?', 'One object created from a class.'], ['What does `self` refer to?', 'The instance receiving the method call.'], ['When is composition usually clearer?', 'When one object contains or uses another.'], ['What does overriding do?', 'A child class supplies a replacement for inherited behavior.']] },
    { type: 'takeaways', items: ['A class groups related state and behavior.', 'Instances keep independent state.', 'Composition is often simpler than inheritance.'] },
    { type: 'resources', items: [['Python classes', 'https://docs.python.org/3/tutorial/classes.html']] },
    { type: 'cliffhanger', title: 'One file now has too many jobs', text: 'Next, modules give each responsibility a clear home and an entry point.' }
  ]
}
