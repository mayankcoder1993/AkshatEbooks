import { chapter01 } from './chapter01.js'
import { chapter02 } from './chapter02.js'
import { chapter03 } from './chapter03.js'
import { chapter04 } from './chapter04.js'
import { chapter05 } from './chapter05.js'
import { chapter06 } from './chapter06.js'
import { chapter07 } from './chapter07.js'
import { chapter08 } from './chapter08.js'
export { PREFACE } from './preface.js'
export { HOW_TO_READ } from './readingGuide.js'
export { QUICK_START } from './quickStart.js'
export { CURRICULUM_ROADMAP } from './curriculum.js'
export { BRAND } from '../../../../../../../publishing/publisher.js'
import { PUBLISHER } from '../../../../../../../publishing/publisher.js'

export const BOOK = {
  id: 'python-absolute-beginners',
  title: 'Python for Absolute Beginners',
  subtitle: 'Build a Study Assistant from Your First Line of Code',
  series: 'The First Code Series · Book 1',
  author: 'Akshat Sinha',
  edition: 'First Edition',
  editionId: 'edition-01',
  version: '1.0.0',
  year: 2026,
  publisher: PUBLISHER,
  rights: 'No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the publisher, except for brief quotations in reviews.',
  disclaimer: 'Code examples are provided for learning. Test and review code before using it in an important system.',
  unitLabel: 'Chapter',
  aboutAuthor: [
    '**Akshat Sinha** is the founder of The Sinha Family Group and the creator of Sarva Gyana Koshah, the treasury of all knowledge, which teaches through books, videos, and hands-on learning.',
    'This book was written for the reader who has never written a line of code and wants to understand what the computer is doing, not just copy and paste.',
  ],
  dedication: 'To my parents and grandparents, whose love, patience, and unwavering belief made this journey possible. Everything I build carries your blessings. This first book is for you.',
  acknowledgements: [
    'My deepest gratitude to my parents and grandparents, my first teachers, for their endless encouragement.',
    'To every reader of Sarva Gyana Koshah: your curiosity is the reason these pages exist.',
  ],
  outputDir: 'public/books/python-absolute-beginners/edition-01',
  filename: 'Python-for-Absolute-Beginners-The-First-Code-Series-Book-1.docx',
  offlineFilename: 'Python-for-Absolute-Beginners-Interactive.html',
}

export default [chapter01, chapter02, chapter03, chapter04, chapter05, chapter06, chapter07, chapter08]
