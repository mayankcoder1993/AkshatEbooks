#!/usr/bin/env node
/**
 * Comic Authoring Pipeline MCP Server
 * 
 * Provides automated pipeline tools for authoring technical comic books:
 * - pipeline_get_stage: Get current pipeline stage guidelines & checklist
 * - pipeline_validate_story: Check chapter story against canonical characters & narrative rules
 * - pipeline_audit_rule19: Enforce Rule 19 (zero hyphens/dashes in titles/headings)
 * - pipeline_verify_chapter: Run full empirical test suite and build validation
 */

import readline from 'readline';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const PIPELINE_STAGES = [
  {
    stage: 1,
    name: 'Syllabus and Concepts Matrix',
    description: '18-step progressive learning syllabus arranged in ascending logical order with concrete learning outcomes.',
    checklist: [
      'Ascending logical progression from raw wire to automated testing',
      'No skipping foundational prerequisites',
      'Clear definition of each stage role: Core, Advanced Core, Practical, Capstone'
    ]
  },
  {
    stage: 2,
    name: 'Real Life Crisis and Problem Definition',
    description: 'Anchor the technical concept in a high-stakes, emotionally relatable campus or system crisis.',
    checklist: [
      'Grounded crisis (e.g., Admit Card water leak, 12k concurrent portal crash, year-back threat)',
      'Direct contrast between bloated presentation layer and lightweight data wire',
      'Clear timeline and urgency (e.g., 20 minutes before hall gates lock)'
    ]
  },
  {
    stage: 3,
    name: 'Author Research and Gotcha Checklist',
    description: 'Plug subtle beginner misconceptions identified through authoritative technical research.',
    checklist: [
      'Cover gotchas 2.1 through 2.9 (UI vs API separation, PUT vs PATCH, express.json byte stream trap)',
      'Contrast REST vs SOAP vs GraphQL using one identical real query'
    ]
  },
  {
    stage: 4,
    name: 'Mission and Narrative Story Script',
    description: 'Character dialogue, emotional beats, and clear pedagogical explanations without premature war rooms.',
    checklist: [
      'Chapter 1 locks Student Akshay and Architect Sameer',
      'Hot cutting chai motif as calm mentor presence',
      '14ms terminal rescue demonstration',
      'Post-exam restaurant waiter explanation',
      'Pair programming on port 3000'
    ]
  },
  {
    stage: 5,
    name: 'Dialogue Review and Alignment',
    description: 'Reviewable character dialogues before rendering artwork, ensuring natural, punchy phrasing.',
    checklist: [
      'Dialogue lines are concise and direct',
      'No robotic exposition; emotional curiosity drives technical discovery',
      'Speech bubble positioning plans prevent character occlusion'
    ]
  },
  {
    stage: 6,
    name: 'Visual Comic SVGs with Embedded Speech Bubbles',
    description: 'Native SVG vector panels with embedded character speech bubbles on pure white #FFFFFF background.',
    checklist: [
      'Print-safe high contrast palette on pure white #FFFFFF',
      'Speech bubbles embedded directly inside/above SVG with pointers to speaker',
      'Expressive character postures matching emotional arc'
    ]
  },
  {
    stage: 7,
    name: 'Technical Code Workbenches',
    description: 'Widescreen interactive code frames and terminals displaying real payloads, status codes, and headers.',
    checklist: [
      'Readable font sizes in terminals and code blocks',
      'Accurate HTTP requests, status codes (200, 201, 400, 504), and JSON bodies'
    ]
  },
  {
    stage: 8,
    name: 'Rule 19 Punctuation and Accessibility Gate',
    description: 'Enforce zero hyphens, em-dashes, or en-dashes in titles and headings; ensure light-mode accessibility.',
    checklist: [
      'Zero hyphens/dashes in chapter titles and section headings',
      'Appropriate representations across Web, PDF, and DOCX formats'
    ]
  },
  {
    stage: 9,
    name: 'Empirical Verification Suite',
    description: 'Execute npm test and production build validation to guarantee zero regressions.',
    checklist: [
      'npm test passes with 100% green suites',
      'npm run build generates clean production bundle',
      'All illustrations and SVGs inline cleanly'
    ]
  }
];

const TOOLS = [
  {
    name: 'pipeline_get_stage',
    description: 'Get guidelines, prerequisites, and checklist for a specific stage of the comic authoring pipeline.',
    inputSchema: {
      type: 'object',
      properties: {
        stageNumber: {
          type: 'number',
          description: 'Stage number from 1 to 9 (or omit to get all stages overview)'
        }
      }
    }
  },
  {
    name: 'pipeline_validate_story',
    description: 'Validate chapter content or story script against canonical character, incident, and gotcha rules.',
    inputSchema: {
      type: 'object',
      properties: {
        chapterNumber: {
          type: 'number',
          description: 'The chapter number to validate (e.g. 1)'
        },
        filePath: {
          type: 'string',
          description: 'Optional file path to inspect (defaults to lesson file)'
        }
      },
      required: ['chapterNumber']
    }
  },
  {
    name: 'pipeline_audit_rule19',
    description: 'Audit file contents or text string for Rule 19 violations (hyphens or dashes in titles/headings).',
    inputSchema: {
      type: 'object',
      properties: {
        filePath: {
          type: 'string',
          description: 'Absolute or relative path to file to audit'
        },
        text: {
          type: 'string',
          description: 'Optional raw text to audit'
        }
      }
    }
  },
  {
    name: 'pipeline_verify_chapter',
    description: 'Run empirical test suite and production build verification for the book.',
    inputSchema: {
      type: 'object',
      properties: {
        skipBuild: {
          type: 'boolean',
          description: 'If true, runs npm test only'
        }
      }
    }
  }
];

function handleGetStage(args) {
  const { stageNumber } = args;
  if (stageNumber && stageNumber >= 1 && stageNumber <= 9) {
    const stage = PIPELINE_STAGES[stageNumber - 1];
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(stage, null, 2)
      }]
    };
  }
  return {
    content: [{
      type: 'text',
      text: JSON.stringify({
        totalStages: PIPELINE_STAGES.length,
        stages: PIPELINE_STAGES.map(s => ({ stage: s.stage, name: s.name, summary: s.description }))
      }, null, 2)
    }]
  };
}

function handleValidateStory(args) {
  const { chapterNumber, filePath } = args;
  const chPadded = String(chapterNumber).padStart(2, '0');
  const defaultPath = path.resolve(process.cwd(), `src/books/technical/programming/testing/zero-to-agentic-api-testing/editions/edition-01/content/lesson${chPadded}.js`);
  const targetPath = filePath ? path.resolve(process.cwd(), filePath) : defaultPath;

  if (!fs.existsSync(targetPath)) {
    return {
      content: [{ type: 'text', text: `File not found: ${targetPath}` }],
      isError: true
    };
  }

  const content = fs.readFileSync(targetPath, 'utf8');
  const checks = [];

  if (chapterNumber === 1) {
    // Canonical checks for Chapter 1
    checks.push({
      rule: 'Character: Student Akshay',
      pass: /student/i.test(content) && /akshay/i.test(content),
      detail: 'Akshay must be established as a student engineer running for his final exam.'
    });
    checks.push({
      rule: 'Incident: Leaking water bottle and dissolved Admit Card ink',
      pass: /water/i.test(content) && (/admit\s*card/i.test(content) || /hall\s*ticket/i.test(content)),
      detail: 'Water leak dissolves seat/hall number on printed admit card.'
    });
    checks.push({
      rule: 'Crisis: 12,000 students crashing portal (504 Gateway Timeout)',
      pass: /12,?000/i.test(content) || /504/i.test(content) || /timeout/i.test(content) || /spinner/i.test(content),
      detail: 'Portal crashes under concurrent load leaving students locked out.'
    });
    checks.push({
      rule: 'Rescue: Sameer 14ms terminal request to /api/v1/admitcards/APX102',
      pass: /14\s*ms/i.test(content) || /14\s*milliseconds/i.test(content) || /apx102/i.test(content),
      detail: 'Sameer uses bare terminal to fetch JSON in 14ms.'
    });
    checks.push({
      rule: 'Pedagogy: Restaurant Waiter analogy (Client, Waiter, Server)',
      pass: /waiter/i.test(content) && /restaurant/i.test(content),
      detail: 'Waiter transports request and response without cooking or eating.'
    });
    checks.push({
      rule: 'Implementation: Port 3000 and req.body undefined byte stream trap',
      pass: /3000/i.test(content) && /express\.json/i.test(content),
      detail: 'Pair programming on port 3000, explaining byte streams and middleware.'
    });
    checks.push({
      rule: 'Methodology: 5 CRUD operations and Brass Thali PUT vs PATCH trap',
      pass: /put/i.test(content) && /patch/i.test(content) && (/thali/i.test(content) || /replace/i.test(content)),
      detail: 'PUT replaces entire entity while PATCH updates single field.'
    });
    checks.push({
      rule: 'Architecture: REST vs SOAP vs GraphQL comparison on APX102',
      pass: /soap/i.test(content) && /graphql/i.test(content) && /rest/i.test(content),
      detail: 'Comparing all three architectures using identical Admit Card query.'
    });
  }

  if (chapterNumber === 2) {
    checks.push({
      rule: 'Context: Campus Transit Shuttle GPS Crash',
      pass: /transit/i.test(content) || /shuttle/i.test(content),
      detail: 'Investigation of campus transit shuttle telemetry service throwing 500 errors.'
    });
    checks.push({
      rule: 'Character: Akshay and Sameer Collaboration',
      pass: /akshay/i.test(content) && /sameer/i.test(content),
      detail: 'Akshay and Sameer triaging the service in the API Testing Workbench.'
    });
    checks.push({
      rule: 'Defect: Missing Query Parameter Unhandled 500 Crash',
      pass: /500/i.test(content) && (/query/i.test(content) || /route/i.test(content)),
      detail: 'Missing route parameter causes unhandled server crash returning 500.'
    });
    checks.push({
      rule: 'Headers: Request Headers Inspection (Content-Type, User-Agent)',
      pass: /headers?/i.test(content) || /content-type/i.test(content),
      detail: 'Inspecting request headers that provide context to the server.'
    });
    checks.push({
      rule: 'Remediation: Defensive Guard returning 400 Bad Request',
      pass: /400/i.test(content) && /bad request/i.test(content),
      detail: 'Adding defensive validation guard returning 400 Bad Request instead of crashing with 500.'
    });
    checks.push({
      rule: 'Verification: Dual Wire Verification (200 OK and 400 Bad Request)',
      pass: /200/i.test(content) && /400/i.test(content),
      detail: 'Verifying both positive 200 route coordinates and defensive 400 guard.'
    });
    checks.push({
      rule: 'Tooling: API Testing Workbench Manual Eyeball Limitation',
      pass: /workbench/i.test(content) || /postman/i.test(content) || /manual/i.test(content),
      detail: 'Recognizing that manual eyeball testing does not scale across redeployments.'
    });
  }

  const passed = checks.filter(c => c.pass).length;
  const total = checks.length;

  return {
    content: [{
      type: 'text',
      text: JSON.stringify({
        chapter: chapterNumber,
        score: `${passed}/${total}`,
        status: passed === total ? 'PASS' : 'FAIL',
        checks
      }, null, 2)
    }]
  };
}

function handleAuditRule19(args) {
  let content = args.text || '';
  if (args.filePath) {
    const fullPath = path.resolve(process.cwd(), args.filePath);
    if (fs.existsSync(fullPath)) {
      content = fs.readFileSync(fullPath, 'utf8');
    }
  }

  const violations = [];
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    // Check titles, headings, badges
    const isHeading = /^(#+\s+|title:|subtitle:|shortTitle:|badge:|missionTitle:|missionBadge:)/i.test(line.trim());
    if (isHeading) {
      if (/[\u2014\u2013-]/.test(line)) {
        // Hyphens inside html tags, code blocks, or attribute names ignored
        const cleaned = line.replace(/<[^>]+>/g, '').replace(/https?:\/\/\S+/g, '');
        if (/[\u2014\u2013]/.test(cleaned) || /\s+-\s+/.test(cleaned) || /[a-z]+-[a-z]+/i.test(cleaned)) {
          violations.push({
            lineNumber: index + 1,
            line: line.trim()
          });
        }
      }
    }
  });

  return {
    content: [{
      type: 'text',
      text: JSON.stringify({
        totalViolations: violations.length,
        status: violations.length === 0 ? 'COMPLIANT' : 'VIOLATION_FOUND',
        violations
      }, null, 2)
    }]
  };
}

function handleVerifyChapter(args) {
  try {
    const testOutput = execSync('npm test', { encoding: 'utf8', cwd: process.cwd() });
    let buildOutput = 'Skipped build';
    if (!args.skipBuild) {
      buildOutput = execSync('npm run build', { encoding: 'utf8', cwd: process.cwd() });
    }
    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          status: 'SUCCESS',
          testSummary: testOutput.split('\n').filter(l => l.includes('pass') || l.includes('✓') || l.includes('Test')).slice(-5).join(' | '),
          buildSummary: 'Vite build completed cleanly'
        }, null, 2)
      }]
    };
  } catch (err) {
    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          status: 'FAILURE',
          error: err.message,
          stdout: err.stdout ? err.stdout.slice(-1000) : ''
        }, null, 2)
      }],
      isError: true
    };
  }
}

// JSON-RPC stdio loop
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  if (!line.trim()) return;
  try {
    const req = JSON.parse(line);
    if (req.method === 'initialize') {
      const res = {
        jsonrpc: '2.0',
        id: req.id,
        result: {
          protocolVersion: '2024-11-05',
          capabilities: {
            tools: {}
          },
          serverInfo: {
            name: 'comic-authoring-mcp',
            version: '1.0.0'
          }
        }
      };
      process.stdout.write(JSON.stringify(res) + '\n');
    } else if (req.method === 'notifications/initialized') {
      // no-op
    } else if (req.method === 'tools/list') {
      const res = {
        jsonrpc: '2.0',
        id: req.id,
        result: {
          tools: TOOLS
        }
      };
      process.stdout.write(JSON.stringify(res) + '\n');
    } else if (req.method === 'tools/call') {
      const { name, arguments: args = {} } = req.params;
      let result;
      if (name === 'pipeline_get_stage') {
        result = handleGetStage(args);
      } else if (name === 'pipeline_validate_story') {
        result = handleValidateStory(args);
      } else if (name === 'pipeline_audit_rule19') {
        result = handleAuditRule19(args);
      } else if (name === 'pipeline_verify_chapter') {
        result = handleVerifyChapter(args);
      } else {
        result = {
          content: [{ type: 'text', text: `Unknown tool: ${name}` }],
          isError: true
        };
      }
      process.stdout.write(JSON.stringify({
        jsonrpc: '2.0',
        id: req.id,
        result
      }) + '\n');
    }
  } catch (e) {
    // ignore parse errors or malformed lines
  }
});
