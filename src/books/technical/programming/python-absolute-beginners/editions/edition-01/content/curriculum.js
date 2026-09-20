export const CURRICULUM_ROADMAP = [
  {
    phase: 'Phase 1',
    title: 'Foundations & The Core Data Engine',
    description: 'From installing Python and mastering modern environments to commanding core data structures and programmatic logic.',
    modules: [
      {
        id: 'setup',
        title: 'Environment & Tooling Setup',
        topics: ['Python 2 vs Python 3', 'Interpreter Setup', 'Jupyter Notebooks', 'Git & GitHub Fundamentals'],
        assessment: 'Setup Verification & First Script',
      },
      {
        id: 'data-structures',
        title: 'Objects & Data Structure Basics',
        topics: ['Numbers & Arithmetic', 'Strings & Slicing', 'Lists & Mutation', 'Dictionaries & Key-Value Stores', 'Tuples & Immutability', 'Sets & Logic', 'Booleans & Truthiness', 'File I/O'],
        assessment: 'End-of-Section Comprehensive Assessment Test',
      },
      {
        id: 'control-flow',
        title: 'Operators & Program Statements',
        topics: ['Comparison & Chained Operators', 'Conditional Logic (if / elif / else)', 'For Loops & Iteration', 'While Loops & Break/Continue', 'range() Utility', 'List Comprehensions'],
        assessment: 'Statements & Logic Mastery Assessment',
      },
    ],
    milestone: {
      type: 'project',
      badge: 'Milestone Project 1',
      title: 'Interactive Terminal Game',
      summary: 'Build a full-featured playable game using data structures, loop state, and conditional logic.',
    },
  },
  {
    phase: 'Phase 2',
    title: 'Functions & Object-Oriented Architecture',
    description: 'Writing reusable, modular logic and architecting real-world systems with OOP.',
    modules: [
      {
        id: 'functions',
        title: 'Methods, Functions & Scope',
        topics: ['Function Syntax & Returns', 'Arguments & *args / **kwargs', 'Lambda Expressions', 'Variable Scope & the LEGB Rule'],
        assessment: 'Methods & Functions Homework Challenge',
      },
      {
        id: 'oop',
        title: 'Object-Oriented Programming (OOP)',
        topics: ['Objects & Classes', 'Attributes & Methods', 'Inheritance & Polymorphism', 'Dunder / Special Methods'],
        assessment: 'Object-Oriented Architecture Assignment',
      },
    ],
    milestone: {
      type: 'project',
      badge: 'Milestone Project 2',
      title: 'Complex Multi-Class Game System',
      summary: 'Architect a rich, object-oriented interactive game featuring custom class hierarchies, turn logic, and state management.',
    },
  },
  {
    phase: 'Phase 3',
    title: 'Robust Systems, Error Handling & Ecosystem',
    description: 'Defensive engineering, handling edge cases, and leveraging the global Python package ecosystem.',
    modules: [
      {
        id: 'exceptions',
        title: 'Errors & Exception Handling',
        topics: ['Syntax vs Runtime Errors', 'try, except & finally', 'Raising Custom Exceptions', 'Defensive Guardrails'],
        assessment: 'Error Handling & System Resilience Test',
      },
      {
        id: 'ecosystem',
        title: 'Modules, Packages & Ecosystem',
        topics: ['Creating Custom Modules', 'Package Distribution (pip & PyPI)', 'Standard Library vs Third-Party Ecosystem'],
        assessment: 'Modular Package Assembly Challenge',
      },
      {
        id: 'builtins',
        title: 'Built-in Functional Power Tools',
        topics: ['map() & filter()', 'reduce() & zip()', 'enumerate() & Sequence Unpacking', 'all() & any()', 'Complex Numbers'],
        assessment: 'Built-in Functional Tools Final Assessment',
      },
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Advanced Mastery & Capstone Integration',
    description: 'Metaprogramming, memory-efficient streams, and the final production-ready capstone.',
    modules: [
      {
        id: 'decorators',
        title: 'Python Decorators Series',
        topics: ['Functions as First-Class Citizens', 'Higher-Order Decorators', 'Decorator Arguments & Wrappers'],
        assessment: '3-Part Decorator Series & Homework',
      },
      {
        id: 'generators',
        title: 'Generators & Custom Iterators',
        topics: ['Iteration vs Generation', 'yield Keyword', 'Memory-Efficient Data Pipelines', 'Generator Expressions'],
        assessment: 'Generators & Stream Processing Assignment',
      },
    ],
    milestone: {
      type: 'capstone',
      badge: 'Final Capstone Project',
      title: 'Production Capstone & Advanced Modules',
      summary: 'Synthesize every concept into an end-to-end production software system, backed by ongoing advanced module expansions.',
    },
  },
]
