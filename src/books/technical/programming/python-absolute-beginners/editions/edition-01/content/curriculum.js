export const CURRICULUM_ROADMAP = [
  {
    phase: 'Learning Arc 1',
    title: 'Create an Interactive Terminal Assistant',
    description: 'Build one deterministic local assistant across five connected chapters.',
    modules: [
      { id: 'run', title: 'Chapter 1: Make Python Run', topics: ['Saved files', 'print()', 'Execution route'], assessment: 'Launch challenge' },
      { id: 'values', title: 'Chapter 2: Work with Values', topics: ['Names and types', 'Numbers', 'Strings'], assessment: 'Score laboratory' },
      { id: 'data', title: 'Chapter 3: Organize Data', topics: ['Collections', 'Mutation', 'Text files'], assessment: 'Packing challenge' },
      { id: 'control', title: 'Chapter 4: Control the Program', topics: ['Comparisons', 'Branches', 'Loops'], assessment: 'Decision maze' },
      { id: 'functions', title: 'Chapter 5: Build with Functions and Input', topics: ['Input', 'Validation', 'Functions'], assessment: 'Assembly workshop' }
    ],
    milestone: { type: 'project', badge: 'Arc 1 result', title: 'Working Local Study Assistant', summary: 'A rule-based assistant that accepts commands, stores useful data, validates input and exits cleanly.' }
  },
  {
    phase: 'Learning Arc 2',
    title: 'Rescue and Strengthen an Application',
    description: 'Improve the same application so its parts are clear and its behavior is proved.',
    modules: [
      { id: 'objects', title: 'Chapter 6: Model Behavior with Objects', topics: ['Classes', 'Instances', 'Composition'], assessment: 'Design studio' },
      { id: 'modules', title: 'Chapter 7: Split and Share Code', topics: ['Modules', 'Entry point', 'Virtual environment'], assessment: 'Codebase map' },
      { id: 'reliability', title: 'Chapter 8: Handle Problems and Prove Behavior', topics: ['Exceptions', 'Debugging', 'unittest'], assessment: 'Reliability trial' }
    ],
    milestone: { type: 'project', badge: 'Arc 2 result', title: 'Modular Tested Assistant Core', summary: 'A reusable local core with objects, modules, expected failure handling and automated tests.' }
  }
]
