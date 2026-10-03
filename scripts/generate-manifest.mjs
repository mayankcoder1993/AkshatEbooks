import fs from 'fs';
import path from 'path';

const summaryPath = 'src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/organized/audit_summary.json';
const masterPath = 'src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/00-CHARACTER_AND_SCENE_MASTER_PROMPT.md';

const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
const masterContent = fs.readFileSync(masterPath, 'utf8');

const quarantined = summary.filter(s => s.status.includes('QUARANTINED'));

let md = '# Image Audit Quality Control & Regeneration Manifest\n\n';
md += 'Generated for: **Zero to Agentic API Testing** (Chapter 01: Understanding APIs from First Principles)\n';
md += 'Master Pipeline Location: `src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/`\n';
md += 'Download Folder: `C:\\Users\\AkshatSinha\\Downloads\\the first flow for api agent\\`\n\n';

md += '## 1. Audit Summary Overview\n\n';
md += '- **Total Images Audited:** 65\n';
md += '- **Approved (Useful):** 49 images (segregated into `useful/act1` to `useful/act5` and `useful/model_sheets`)\n';
md += '- **Quarantined (Not Useful):** 16 images (segregated into `not_useful/`)\n\n';

md += '## 2. Quarantined Images & Defect Analysis\n\n';
md += '| Quarantined File | Act / Scene | Root Cause Defect | Action Required |\n';
md += '| :--- | :--- | :--- | :--- |\n';

for (const item of quarantined) {
  md += `| \`${item.targetName}\` | Act ${item.act} (${item.scene}) | ${item.reason} | Regenerate using Section 3 below |\n`;
}

md += '\n## 3. One-Click Clean Regeneration Prompts for Quarantined Scenes\n\n';
md += 'Copy and paste these exact prompts into Google Flow / Nano Banana Pro. Each prompt contains strict negative instructions preventing tattoos, bridal mehndi, fish wallpaper, decorative borders, and character facial distortions.\n\n';

for (const item of quarantined) {
  const sceneNum = item.scene.replace('scene', '');
  const sceneHeadingRegex = new RegExp(`#### Scene ${sceneNum} · ([^\\n]+)\\n([\\s\\S]*?)(?=(#### Scene|### ACT|$))`, 'i');
  const match = masterContent.match(sceneHeadingRegex);
  
  md += `### ${item.targetName} (Act ${item.act}, ${item.scene.toUpperCase()})\n\n`;
  md += `- **Defect Identified:** ${item.reason}\n`;
  if (match) {
    const block = match[2];
    const promptMatch = block.match(/\*\*Prompt:\*\*\s*\n```[a-z]*\n([\s\S]*?)```/);
    if (promptMatch) {
      md += `- **Clean Prompt to Copy:**\n\n\`\`\`text\n${promptMatch[1].trim()}\n\`\`\`\n\n`;
    }
  } else {
    md += `- *(See master prompt for Scene ${sceneNum} detailed prompt)*\n\n`;
  }
}

fs.writeFileSync('src/books/technical/programming/testing/zero-to-agentic-api-testing/pipeline/ch01/REGENERATION_MANIFEST.md', md);
fs.writeFileSync('C:/Users/AkshatSinha/Downloads/the first flow for api agent/REGENERATION_MANIFEST.md', md);
console.log('Successfully generated REGENERATION_MANIFEST.md in both locations!');
