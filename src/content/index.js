import { lesson01 } from './lesson01.js'
import { lesson02 } from './lesson02.js'
import { lesson03 } from './lesson03.js'
import { lesson04 } from './lesson04.js'
export { PREFACE } from './preface.js'

export const BOOK = {
  title: 'Python for Absolute Beginners',
  subtitle: 'See What Your Code Does',
  series: 'Akshat EBooks · Learn by Building',
  author: 'Akshat EBooks',
  edition: 'First edition',
  year: '2026',
  rights: 'All rights reserved. No part of this book may be reproduced for sale without written permission.',
  disclaimer: 'Code examples are for learning. Test code before using it in an important system.',
  dedication: 'For every beginner who has ever thought, “Maybe coding is not for me.” It can be.',
  aboutAuthor: 'Akshat EBooks turns difficult technical ideas into visual, step-by-step journeys for complete beginners.',
  filename: 'Akshat-EBooks-Python-for-Absolute-Beginners.docx',
}

const lessons = [lesson01, lesson02, lesson03, lesson04]
export default lessons
