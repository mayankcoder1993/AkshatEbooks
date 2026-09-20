import { lesson01 } from './lesson01.js'
import { lesson02 } from './lesson02.js'
import { lesson03 } from './lesson03.js'
import { lesson04 } from './lesson04.js'
export { PREFACE } from './preface.js'

export const BRAND = {
  group: 'The Sinha Family Group',
  imprint: 'Sarva Gyana Koshah Books',
  imprintShort: 'Sarva Gyana Koshah',
  tagline: 'The Treasury of All Knowledge',
  crestVariant: 'ivory',
  crestTemplate: 'brand/sinha-crest-template.svg',
}

export const BOOK = {
  id: 'python-absolute-beginners',
  title: 'Python for Absolute Beginners',
  subtitle: 'Learn Programming the Visual Way',
  series: 'The First Code Series · Book 1',
  author: 'Akshat Sinha',
  edition: 'First Edition',
  year: 2026,
  publisher: 'Sarva Gyana Koshah Books, a division of The Sinha Family Group',
  rights: 'No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the publisher, except for brief quotations in reviews.',
  disclaimer: 'Code examples are provided for learning. Test and review code before using it in an important system.',
  aboutAuthor: [
    '**Akshat Sinha** is the founder of The Sinha Family Group and the creator of Sarva Gyana Koshah — the treasury of all knowledge — which teaches through books, videos, and hands-on learning.',
    'This book was written for the reader who has never written a line of code, and wants to finally understand what the computer is doing — not just copy-paste.',
  ],
  dedication: 'To my parents and grandparents — whose love, patience, and unwavering belief made this journey possible. Everything I build carries your blessings. This first book is for you.',
  acknowledgements: [
    'My deepest gratitude to my parents and grandparents, my first teachers, for their endless encouragement.',
    'To every reader of Sarva Gyana Koshah: your curiosity is the reason these pages exist.',
  ],
  outputDir: 'public/books/python-absolute-beginners',
  filename: 'Python-for-Absolute-Beginners-The-First-Code-Series-Book-1.docx',
  offlineFilename: 'Python-for-Absolute-Beginners-Interactive.html',
}

const lessons = [lesson01, lesson02, lesson03, lesson04]
export default lessons
