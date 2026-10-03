import fs from 'fs';

const content = fs.readFileSync('src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/content/lesson01.js', 'utf8');

// Match all acts by looking for comic-strip objects
const acts = [
  { name: 'Act 1: The Paper Incident', marker: 'type: \'comic-strip\'' },
];

// Let's do an AST or regex analysis of panels in lesson01
const panelRegex = /title:\s*['"]([^'"]+)['"],\s*time:\s*['"]([^'"]+)['"][\s\S]*?(?:image:\s*\{[\s\S]*?file:\s*['"]([^'"]+)['"])?[\s\S]*?(?:dialogues:\s*\[([\s\S]*?)\]|dialogue:\s*\{([\s\S]*?)\})/g;

let match;
let count = 0;
console.log('=== LESSON 01 COMIC PANELS AUDIT ===');
while ((match = panelRegex.exec(content)) !== null) {
  count++;
  const title = match[1];
  const time = match[2];
  const file = match[3] || 'Inline/SVG/None';
  const dialoguesRaw = match[4] || match[5] || '';
  const dialogueLines = dialoguesRaw.split('speech:').length - 1;
  console.log(`Panel ${count}: [${time}] "${title}"`);
  console.log(`  File: ${file}`);
  console.log(`  Dialogue count: ${dialogueLines}`);
}
console.log(`\nTotal Storyboard Panels: ${count}`);
