export const HOW_TO_READ = {
  title: 'How to read this book',
  blocks: [
    { type: 'paragraph', text: 'You will build one useful assistant, one clear step at a time. You will not abandon one tiny project and start another in every chapter. Several chapters work together toward one larger goal.' },
    { type: 'heading', text: 'Follow the learning arc' },
    { type: 'steps', showHeading: false, items: [
      '**See the shared goal.** A full opening card appears only when a new learning arc begins. It shows what you are building, what you already know and what the next chapters will add.',
      '**Learn one tool.** Each chapter teaches a focused Python idea. Short examples and visuals show what the computer does before you use that idea in the continuing project.',
      '**Move the project forward.** A compact strip marks your place in the arc. The chapter may use a build, trace, bug hunt, comparison or test rather than repeating the same mission.',
      '**Prove what works.** Run the code, inspect the evidence and complete the compact checkpoint. At the end of the arc, combine the chapter tools into a larger working result.'
    ] },
    { type: 'callout', variant: 'note', title: 'Your first journey through the book', paragraphs: ['Read the chapters in order. Every new chapter begins on a fresh page in Book View and print.', 'If code behaves differently from the page, trust the program output. Compare it with the example and investigate the difference. That investigation is part of programming.'] }
  ]
}
