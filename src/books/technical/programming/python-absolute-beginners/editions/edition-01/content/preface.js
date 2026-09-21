import gapImage from '../assets/why-python-gap.png'
import possibilitiesImage from '../assets/python-possibilities.png'

export const PREFACE = {
  title: 'Preface: Why Was Python Needed?',
  blocks: [
    { type: 'image', src: gapImage, file: 'src/books/technical/programming/python-absolute-beginners/editions/edition-01/assets/why-python-gap.png', w: 1200, h: 600, alt: 'Shell scripts are quick for small system tasks but harder to grow. C programs provide control and speed but can require more code for small tools. An arrow leads to Python, which offers readable code, reusable modules and connections to existing tools.', caption: 'Python offered a practical middle path between quick scripts and larger systems programs.' },
    { type: 'paragraph', text: 'Python was created to solve a real problem. Programmers wanted to build useful tools without writing a large, difficult program for every small job.' },
    { type: 'callout', variant: 'analogy', title: 'The missing middle path', paragraphs: ['One option was a quick shell script. It was handy, but some jobs were too large for it.', 'Another option was a C program. It offered more control, but even a small tool could need much more code.', 'Guido van Rossum began Python as a clearer path between those choices.'] },
    { type: 'heading', text: 'What made the idea useful?' },
    { type: 'paragraph', text: 'Python code was designed to be readable. It could also connect to existing programs and tools. This meant we could write the simple parts clearly without throwing away powerful work already built elsewhere.' },
    { type: 'callout', variant: 'note', title: 'Easy to begin does not mean weak', paragraphs: ['We can use Python for a five-line file sorter. Teams also use it for websites, data tools, science and AI.', 'Python is not best for every job. No language is. It is a strong first language because its code leaves more room to see the programming idea.'] },
    { type: 'image', src: possibilitiesImage, file: 'src/books/technical/programming/python-absolute-beginners/editions/edition-01/assets/python-possibilities.png', w: 1200, h: 440, alt: 'Five large labeled cards show areas Python can support: automation, web backends, data, science and artificial intelligence. A note explains that specialized tools are added after learning the language.', caption: 'Python starts as a language and gains specialized capabilities through libraries and packages.' },
    { type: 'heading', text: 'Why learn when AI can write code?' },
    { type: 'paragraph', text: 'AI can suggest code. It cannot remove our need to judge the result. We still need to ask: What should happen? What actually happened? Is the answer safe and correct?' },
    { type: 'takeaways', items: ['Python was built to make useful programs easier to write and read.', 'It can connect simple Python code to powerful existing tools.', 'Friendly syntax helps us focus on the idea.', 'We will learn by guessing, running and checking.'] },
    { type: 'resources', items: [['Python’s own story: why it was created', 'https://docs.python.org/3/faq/general.html'], ['Python essay: connecting software pieces', 'https://www.python.org/doc/essays/omg-darpa-mcc-position/']] },
  ],
}
