import image from '../assets/why-python-origin.jpg'

export const PREFACE = {
  title: 'Preface — Why Did Python Need to Exist?',
  blocks: [
    { type: 'image', src: image, file: 'src/assets/why-python-origin.jpg', w: 1536, h: 1024, alt: 'A visual path from the gap between shell scripts and C programs to readable Python and its modern uses.', caption: 'Legend: 1 = shell scripts were convenient but limited, while C gave control but required more work. 2 = Python aimed to be readable and easy to extend. 3 = that bridge now supports automation, web services, data, science and AI.' },
    { type: 'paragraph', text: 'Python did not appear because the world needed another spelling for code. It appeared because programmers faced an awkward gap.' },
    { type: 'callout', variant: 'analogy', title: 'The gap Python was built to cross', paragraphs: ['In the late 1980s, Guido van Rossum worked on the Amoeba operating system. The team needed something easier than writing a full C program for every task. Shell scripts were convenient, but they could not easily reach Amoeba’s special system features.', 'Guido wanted a language that was pleasant to read, useful for everyday scripts and open to extensions written in other languages. Python grew from that practical need.'] },
    { type: 'heading', text: 'Why does that old problem still matter?' },
    { type: 'paragraph', text: 'We still want to turn an idea into a working tool without fighting unnecessary punctuation. We also need a language that can connect to fast libraries and existing systems. Python is often the **glue** between those pieces.' },
    { type: 'callout', variant: 'note', title: 'Friendly does not mean weak', paragraphs: ['Python trades some low-level control for speed of thought. You can automate a folder today, build a web service later and explore data with the same core language.', 'Python is not the best tool for every job. C can offer tighter hardware control. Java can provide a strongly structured runtime ecosystem. Learning Python first gives us clear space to learn programming ideas.'] },
    { type: 'heading', text: 'What about AI?' },
    { type: 'paragraph', text: 'AI can produce code quickly. It can also produce code that is confidently wrong. We still need to predict what a program should do, inspect what it actually did and judge whether the result is safe. That is exactly how this book teaches.' },
    { type: 'takeaways', items: ['Python began as a practical bridge between quick scripts and larger system programs.', 'Readable code helps people review, repair and share ideas.', 'Python can connect to tools written in other languages.', 'Our goal is not to memorise syntax. Our goal is to understand what happens next.'] },
    { type: 'resources', items: [['Python FAQ: why Python was created', 'https://docs.python.org/3/faq/general.html'], ['Python essay: a language for gluing systems together', 'https://www.python.org/doc/essays/omg-darpa-mcc-position/']] },
  ],
}
