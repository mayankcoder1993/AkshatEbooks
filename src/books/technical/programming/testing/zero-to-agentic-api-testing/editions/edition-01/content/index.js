import { lesson01 } from './lesson01.js'
import { lesson02 } from './lesson02.js'
import { lesson03 } from './lesson03.js'
import { lesson04 } from './lesson04.js'
import { lesson05 } from './lesson05.js'
import { lesson06 } from './lesson06.js'
import { lesson07 } from './lesson07.js'
import { lesson08 } from './lesson08.js'
import { lesson09 } from './lesson09.js'
import { lesson10 } from './lesson10.js'
import { lesson11 } from './lesson11.js'
import { lesson12 } from './lesson12.js'
import { lesson13 } from './lesson13.js'
export { PREFACE } from './preface.js'
export { CURRICULUM_ROADMAP } from './curriculum.js'
export { BRAND } from '../../../../../../../../publishing/publisher.js'
import { PUBLISHER } from '../../../../../../../../publishing/publisher.js'

export const BOOK = {
  id: 'zero-to-agentic-api-testing',
  title: 'Zero to Agentic API Testing',
  subtitle: 'The Modern Guide to Testing APIs with Postman, JavaScript and Newman',
  series: 'Standalone',
  author: 'Akshat Sinha',
  edition: 'First Edition',
  editionId: 'edition-01',
  version: '1.0.0',
  year: 2026,
  publisher: PUBLISHER,
  rights: 'No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the publisher, except for brief quotations in reviews.',
  disclaimer: 'Code and API examples are provided for educational and testing purposes. Ensure you have authorized permission before running automated test suites against any third party or production systems.',
  unitLabel: '',
  howToUse: [
    'Read the opening mission to understand the real world software problem we are diagnosing.',
    'Test every endpoint live by clicking the provided URLs in your web browser or copying them into your API testing workbench.',
    'Inspect the complete network wire: study the HTTP method, resource path, headers, request payload, and server response codes.',
    'Engage with the interactive checkpoints: answer the Think and Guess questions before revealing the explanations to solidify your understanding.',
    'Build your executable test collection step by step as you progress through each chapter.',
  ],
  aboutAuthor: [
    '**Akshat Sinha** is the founder of The Sinha Family Group and the creator of Sarva Gyana Koshah: the treasury of all knowledge, which teaches through books, interactive learning platforms, and authoritative engineering references.',
    'This book bridges the gap between manual exploratory testing, automated pipeline engineering, and continuous integration with Postman, JavaScript, and Newman.',
  ],
  dedication: 'To every engineer and tester dedicated to making software reliable, transparent, and resilient in an increasingly automated world.',
  acknowledgements: [
    'Gratitude to the open source creators of the HTTP, JSON, Postman, and Node.js testing communities whose tools empower modern developers.',
    'To the readers of Sarva Gyana Koshah: your relentless curiosity drives this work forward.',
  ],
  outputDir: 'public/books/zero-to-agentic-api-testing/edition-01',
  filename: 'Zero-To-Agentic-Api-Testing-Edition-01.docx',
  offlineFilename: 'Zero-To-Agentic-Api-Testing-Edition-01.html',
}

const lessons = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
  lesson07,
  lesson08,
  lesson09,
  lesson10,
  lesson11,
  lesson12,
  lesson13,
]
export default lessons
