import { AlignmentType, BorderStyle, Document, ExternalHyperlink, Footer, Header, HeadingLevel, ImageRun, PageBreak, PageNumber, Paragraph, Packer, ShadingType, Table, TableCell, TableOfContents, TableRow, TextRun, WidthType } from 'docx'
import { DOCX_COLORS } from '../publishing/design-tokens.js'

let imageLoader = async source => new Uint8Array(await (await fetch(source)).arrayBuffer())
export function setImageLoader(loader) { imageLoader = loader }
const colors = DOCX_COLORS
const borders = { top:{style:BorderStyle.SINGLE,size:2,color:colors.line}, bottom:{style:BorderStyle.SINGLE,size:2,color:colors.line}, left:{style:BorderStyle.SINGLE,size:2,color:colors.line}, right:{style:BorderStyle.SINGLE,size:2,color:colors.line} }
function rich(text='', opts={}) { return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean).map(part => part.startsWith('**') ? new TextRun({...opts,text:part.slice(2,-2),bold:true}) : part.startsWith('`') ? new TextRun({...opts,text:part.slice(1,-1),font:'Consolas',color:colors.indigo,shading:{type:ShadingType.CLEAR,fill:'EEF1FA'}}) : new TextRun({...opts,text:part})) }
const p = (text='', options={}) => new Paragraph({ spacing:{after:120,line:300}, ...options, children:Array.isArray(text)?text:rich(text) })
const h = (text, level=HeadingLevel.HEADING_2) => new Paragraph({ heading:level, keepNext:true, spacing:{before:240,after:100}, children:[new TextRun({text,bold:true,color:colors.indigo})] })
const tableBox = (title, children, fill='F7F9FC') => new Table({ width:{size:100,type:WidthType.PERCENTAGE}, rows:[new TableRow({children:[new TableCell({borders,shading:{type:ShadingType.CLEAR,fill},margins:{top:130,bottom:130,left:160,right:160},children:[p([new TextRun({text:title,bold:true,color:colors.navy})]),...children]})]})] })
function code(lines, filename) { return [p([new TextRun({text:filename,bold:true,font:'Consolas',color:colors.indigo})]), ...lines.map((line,i)=>p([new TextRun({text:`${String(i+1).padStart(2,' ')}  ${line || ' '}`,font:'Consolas',size:19})],{shading:{type:ShadingType.CLEAR,fill:'F4F6F9'},spacing:{after:0,line:260},keepLines:true}))] }
function list(items, numbering='bullet') { return items.map(item=>p(rich(item),{numbering:{reference:numbering,level:0}})) }
async function blockToDocx(b) {
  switch(b.type) {
    case 'heading': return [h(b.text)]
    case 'paragraph': return [p(b.text)]
    case 'image': {
      const data = await imageLoader(b.src, b);
      const width = 560;
      const items = [];
      if (b.badge || b.title) {
        items.push(p([new TextRun({ text: (b.badge ? `${b.badge} · ` : '') + (b.title || ''), bold: true, color: colors.indigo, size: 22 })]));
      }
      if (b.text) {
        items.push(p(rich(b.text)));
      }
      if (b.paragraphs?.length) {
        b.paragraphs.forEach(pr => items.push(p(rich(pr))));
      }
      items.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new ImageRun({
          data,
          type: b.file?.toLowerCase().endsWith('.png') ? 'png' : 'jpg',
          transformation: { width, height: Math.round(width * b.h / b.w) },
          altText: { title: b.alt, description: b.alt, name: b.alt }
        })]
      }));
      if (b.caption) {
        items.push(p([new TextRun({ text: b.caption, italics: true, color: '5B6575', size: 19 })], { alignment: AlignmentType.CENTER }));
      }
      if (b.points?.length) {
        b.points.forEach((point, index) => {
          items.push(p([new TextRun({ text: `${index + 1}  `, bold: true, color: colors.indigo }), ...rich(point)]));
        });
      }
      return [tableBox(b.title ? `ARCHITECTURE · ${b.title}` : 'ARCHITECTURAL BLUEPRINT', items, 'F8FAFC')];
    }
    case 'mission': {
      const items = [p(b.text)];
      if (b.image) {
        const data = await imageLoader(b.image.src, b.image);
        const width = 520;
        items.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new ImageRun({
            data,
            type: b.image.file?.toLowerCase().endsWith('.png') ? 'png' : 'jpg',
            transformation: { width, height: Math.round(width * (b.image.h || 768) / (b.image.w || 1408)) },
            altText: { title: b.image.alt, description: b.image.alt, name: b.image.alt }
          })]
        }));
        if (b.image.caption) {
          items.push(p([new TextRun({ text: b.image.caption, italics: true, color: '5B6575', size: 19 })], { alignment: AlignmentType.CENTER }));
        }
        if (b.image.points?.length) {
          b.image.points.forEach((point, index) => {
            items.push(p([new TextRun({ text: `${index + 1}  `, bold: true, color: colors.indigo }), ...rich(point)]));
          });
        }
      }
      if (b.weKnow?.length) {
        items.push(p([new TextRun({ text: 'What we know: ', bold: true }), ...rich(b.weKnow.join(' • '))]));
      }
      if (b.weNeed?.length) {
        items.push(p([new TextRun({ text: 'What we need: ', bold: true }), ...rich(b.weNeed.join(' • '))]));
      }
      return [tableBox(`OUR MISSION · ${b.title}`, items, 'EEF5FA')];
    }
    case 'api-inspector': {
      const respStr = typeof b.responseBody === 'string' ? b.responseBody : JSON.stringify(b.responseBody, null, 2);
      const items = [
        p([new TextRun({text: `${b.method || 'GET'} `, bold: true, color: colors.teal}), new TextRun({text: b.url, font: 'Consolas'})]),
        p([new TextRun({text: `Status: ${b.status || '200 OK'} · Time: ${b.time || '42 ms'} · Size: ${b.size || '1.2 kB'}`, italics: true, color: '596579'})]),
        p([new TextRun({text: 'Response Body:', bold: true})]),
        ...code(respStr.split('\n'), 'response.json'),
        ...(b.assertions?.length ? [p([new TextRun({text: 'Assertions Verified:', bold: true, color: colors.teal})]), ...b.assertions.map(a => p(`✓ ${a}`))] : [])
      ];
      return [tableBox(b.title || 'LIVE API WIRE INSPECTION', items, 'EEF5FA')];
    }
    case 'mission-hud': {
      const items = [
        p([new TextRun({text: `PHASE: ${b.phase} · RANK: ${b.rank}`, bold: true, color: colors.teal})]),
        p([new TextRun({text: `ACTIVE MISSION: ${b.mission}`, bold: true, color: colors.navy})])
      ];
      return [tableBox('MISSION COMMAND HUD', items, 'EEF5FA')];
    }
    case 'triage': {
      const items = [
        p([new TextRun({text: b.title, bold: true, color: colors.navy})]),
        p(b.scenario),
        ...b.options.map((opt, i) => p([new TextRun({text: `${String.fromCharCode(65 + i)}. `, bold: true}), ...rich(opt)])),
        p([new TextRun({text: 'TACTICAL TRIUMPH: ', bold: true, color: colors.teal}), ...rich(b.debrief)])
      ];
      return [tableBox('WAR ROOM INCIDENT TRIAGE', items, 'FFF0F0')];
    }
    case 'battle-scar': {
      const items = [
        p([new TextRun({text: b.title, bold: true, color: colors.navy})]),
        p(b.context),
        p([new TextRun({text: 'Key Architectural Lesson: ', bold: true, color: '9A5B00'}), ...rich(b.takeaway)])
      ];
      return [tableBox(`WAR ROOM BATTLE SCAR · ${b.metric || 'PRODUCTION LESSON'}`, items, 'FFF8E8')];
    }
    case 'battle-plan': {
      const items = [
        ...(b.intro ? [p(b.intro)] : []),
        ...b.phases.flatMap(ph => [
          p([
            new TextRun({ text: `${ph.phase} (${ph.timing}): ${ph.title} `, bold: true, color: ph.status === 'active' ? colors.teal : colors.navy }),
            ...(ph.status === 'active' ? [new TextRun({ text: '[CURRENT FOCUS]', bold: true, color: colors.teal })] : [])
          ]),
          p(ph.desc),
          p([new TextRun({ text: 'Outcome: ', bold: true, color: colors.teal }), ...rich(ph.outcome)])
        ])
      ];
      return [tableBox(b.title || 'THE 3 PHASE BATTLE PLAN', items, 'EEF8F6')];
    }
    case 'scenario-grid': {
      const items = [
        ...(b.intro ? [p(b.intro)] : []),
        ...b.scenarios.flatMap(sc => [
          p([new TextRun({ text: `${sc.icon || '•'} ${sc.kicker}: ${sc.title}`, bold: true, color: colors.navy })]),
          p([new TextRun({ text: 'The Natural Question: ', bold: true }), new TextRun({ text: sc.question, italics: true })]),
          p([new TextRun({ text: 'The Tech Reality Check: ', bold: true }), ...rich(sc.reality)]),
          p([new TextRun({ text: `${sc.clientName}: `, bold: true, color: colors.indigo }), new TextRun({ text: `"${sc.clientSays}"`, italics: true })]),
          p([new TextRun({ text: `${sc.serverName}: `, bold: true, color: colors.teal }), new TextRun({ text: `"${sc.serverReplies}"`, italics: true })]),
          p([new TextRun({ text: 'Why This Matters: ', bold: true, color: colors.teal }), ...rich(sc.takeaway)])
        ])
      ];
      return [tableBox(b.title || 'EVERYDAY REAL WORLD SCENARIOS', items, 'EEF1FA')];
    }
    case 'structured-breakdown': {
      const items = [
        ...(b.intro ? [p(b.intro)] : []),
        ...b.categories.flatMap((cat, idx) => [
          p([new TextRun({ text: `PILLAR ${idx + 1}: ${cat.category} · ${cat.title}`, bold: true, color: colors.navy })]),
          p(cat.explanation),
          ...(cat.points?.length ? cat.points.map(pt => p(`• ${pt}`)) : []),
          ...(cat.code ? code(Array.isArray(cat.code) ? cat.code : [cat.code], cat.filename || 'snippet.py') : [])
        ])
      ];
      return [tableBox(b.title || 'ARCHITECTURAL DECONSTRUCTION', items, 'F3F6FA')];
    }
    case 'chapter-opener': {
      const items = [
        ...(b.missionBadge || b.missionTitle ? [
          p([new TextRun({ text: `${b.missionBadge || 'MISSION BRIEFING'}: ${b.missionTitle || ''}`, bold: true, color: colors.teal })])
        ] : []),
        ...(b.missionCrisis ? [p([new TextRun({ text: `CRISIS SCENARIO: ${b.missionCrisis}`, bold: true, color: colors.navy })])] : []),
        ...(b.missionContext ? [p([new TextRun({ text: 'Context: ', bold: true }), ...rich(b.missionContext)])] : []),
        ...(b.missionObjective ? [p([new TextRun({ text: 'Operational Target: ', bold: true, color: colors.teal }), ...rich(b.missionObjective)])] : []),
        ...(b.targetSystems ? [p([new TextRun({ text: 'Target Systems: ', bold: true }), b.targetSystems])] : []),
        p([new TextRun({ text: 'WE WILL ACHIEVE: ', bold: true, color: colors.teal }), ...rich(b.achieve)]),
        p([new TextRun({ text: 'HOW WE WILL DO IT: ', bold: true, color: colors.indigo }), ...rich(b.how)]),
        p([new TextRun({ text: 'WHAT YOU WILL CARRY FORWARD: ', bold: true, color: colors.navy }), ...rich(b.carry)])
      ];
      return [tableBox('MISSION BRIEFING & CHAPTER ROADMAP', items, 'F8FAFC')];
    }
    case 'storyboard': {
      const items = [
        ...(b.badge ? [p([new TextRun({ text: b.badge, bold: true, color: colors.teal })])] : []),
        ...(b.title ? [p([new TextRun({ text: b.title, bold: true, size: 28, color: colors.navy })])] : []),
        ...(b.intro ? [p(b.intro)] : []),
        ...b.panels.flatMap((panel, idx) => [
          p([new TextRun({ text: `PANEL ${idx + 1}: ${panel.title}${panel.time ? ` (${panel.time})` : ''}`, bold: true, color: colors.navy })]),
          p([new TextRun({ text: 'Scene: ', bold: true }), panel.scene]),
          ...(panel.dialogue ? [
            p([new TextRun({ text: `${panel.dialogue.speaker}: `, bold: true, color: colors.teal }), `"${panel.dialogue.speech}"`]),
            ...(panel.dialogue.replySpeaker ? [p([new TextRun({ text: `${panel.dialogue.replySpeaker}: `, bold: true, color: colors.indigo }), `"${panel.dialogue.replySpeech}"`])] : [])
          ] : []),
          p([new TextRun({ text: 'The Core Wire Lesson: ', bold: true, color: colors.teal }), panel.realization])
        ])
      ];
      return [tableBox(b.title || 'COMIC STORYBOARD', items, 'F8FAFC')];
    }
    case 'chunked-code': {
      const items = [
        ...(b.intro ? [p(b.intro)] : []),
        ...b.chunks.flatMap((chunk, idx) => [
          p([new TextRun({ text: `CHUNK ${idx + 1}: ${chunk.label} · ${chunk.title || ''}`, bold: true, color: colors.navy })]),
          p(chunk.explanation),
          ...(chunk.code ? code(Array.isArray(chunk.code) ? chunk.code : [chunk.code], chunk.filename || 'wire_segment') : []),
          ...(chunk.keyTakeaway ? [p([new TextRun({ text: 'Rule: ', bold: true, color: colors.teal }), ...rich(chunk.keyTakeaway)])] : [])
        ])
      ];
      return [tableBox(b.title || 'CODE IN CHUNKS', items, 'F3F6FA')];
    }
    case 'predict-output': {
      const items = [
        p([new TextRun({ text: b.prompt, bold: true, color: colors.navy })]),
        ...(b.code ? code(Array.isArray(b.code) ? b.code : [b.code], 'prediction_target') : []),
        ...b.options.map((opt, idx) => p(`${String.fromCharCode(65 + idx)}. ${opt}`)),
        p([new TextRun({ text: `Actual Output (${b.revealTitle || 'Confirmed'}): `, bold: true, color: colors.teal }), ...rich(b.explanation)])
      ];
      return [tableBox('IMAGINE & PREDICT BEFORE SENDING', items, 'EEF8F6')];
    }
    case 'mini-api': {
      const items = [
        p(b.intro || 'An in-memory API demonstrates core HTTP operations: GET returns records, POST appends records, PUT replaces a record, and DELETE removes records.'),
        p([new TextRun({ text: 'Core Mechanics: ', bold: true }), new TextRun({ text: 'Memory array serves as the transient database; each HTTP verb triggers a deterministic state transition.' })])
      ];
      return [tableBox(b.title || 'INTERACTIVE 5-LINE API SERVER', items, 'EEF1FA')];
    }
    case 'library-workbench': {
      const items = [
        p('Interactive manual workbench demonstrating the 3-step College Library CRUD lifecycle: AddBook (POST), GetBook (GET with query parameter ?id=), and DeleteBook (POST teardown).'),
        p([new TextRun({ text: 'The Friction of Manual Testing: ', bold: true }), new TextRun({ text: 'Requires manually copying the generated ID from Step 1 and pasting it into Step 2 and Step 3, demonstrating why automated request chaining is essential.' })])
      ];
      return [tableBox('MANUAL COLLEGE LIBRARY CRUD SIMULATOR', items, 'EEF5FA')];
    }
    case 'mission-tracker': {
      const items = [p(b.text)];
      if (b.image) {
        const data = await imageLoader(b.image.src, b.image);
        const width = 520;
        items.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new ImageRun({
            data,
            type: b.image.file?.toLowerCase().endsWith('.png') ? 'png' : 'jpg',
            transformation: { width, height: Math.round(width * (b.image.h || 768) / (b.image.w || 1408)) },
            altText: { title: b.image.alt, description: b.image.alt, name: b.image.alt }
          })]
        }));
        if (b.image.caption) {
          items.push(p([new TextRun({ text: b.image.caption, italics: true, color: '5B6575', size: 19 })], { alignment: AlignmentType.CENTER }));
        }
        if (b.image.points?.length) {
          b.image.points.forEach((point, index) => {
            items.push(p([new TextRun({ text: `${index + 1}  `, bold: true, color: colors.indigo }), ...rich(point)]));
          });
        }
      }
      return [tableBox(`MISSION PROGRESS · ${b.title}`, items, 'EBF5FB')];
    }
    case 'mission-accomplished': return [tableBox(`★ MISSION ACCOMPLISHED · ${b.title}`,[p(b.text)],'EAFAF1')]
    case 'victory-milestone':
      return [tableBox(`⚡ ${b.badge || 'ARCHITECTURAL TRIUMPH'} · ${b.title}`,[
        p(b.summary),
        p([new TextRun({text:'Tactical Superpowers Mastered: ',bold:true,color:colors.indigo})]),
        ...list(b.powers || [],'steps'),
        p([new TextRun({text:'Enterprise Disasters Prevented: ',bold:true,color:'9A1B1B'})]),
        ...list(b.disastersPrevented || [],'steps'),
        ...(b.warRoomTakeaway ? [p([new TextRun({text:'War Room Takeaway: ',bold:true}),...rich(b.warRoomTakeaway)])] : [])
      ],'F0F4FA')]
    case 'think': return [tableBox('PAUSE & THINK',[p(b.prompt),p([new TextRun({text:'Answer: ',bold:true}),...rich(b.answer)])],'FFF8E8')]
    case 'guess': return [tableBox('MAKE A GUESS',[p(b.prompt),...(b.code?code(b.code.split('\n'),'prediction.py'):[]),...list(b.options.map((x,i)=>`${String.fromCharCode(65+i)}. ${x}`)),p([new TextRun({text:`Answer: ${b.options[b.answerIndex]}. `,bold:true}),...rich(b.explain)])],'F3F0FA')]
    case 'bug': return [tableBox('BUG HUNT',[p(b.prompt),...code(b.lines,'bug_hunt.py'),p([new TextRun({text:`Answer: line ${b.bugLine}. `,bold:true}),...rich(b.explain)])],'FFF4E8')]
    case 'callout': return [tableBox(b.title || 'Note',b.paragraphs.map(x=>p(x)),b.variant==='analogy'?'EEF8F6':'F2F4FA')]
    case 'flow': return [h('Input → Process → Output'),new Table({width:{size:100,type:WidthType.PERCENTAGE},rows:[new TableRow({children:[b.input,b.process,b.output].map(([a,c])=>new TableCell({borders,shading:{type:ShadingType.CLEAR,fill:'F5F7FB'},children:[p([new TextRun({text:a,bold:true,color:colors.indigo})]),p(c)]}))})]})]
    case 'blueprint': return [h('Plan before we type'),tableBox('PROGRAM BLUEPRINT',[p(`Purpose: ${b.purpose}`),p(`Input: ${b.input}`),p(`Processing: ${b.processing}`),p(`Output: ${b.output}`),p(`Files: ${b.files.join(', ') || 'None'}`)])]
    case 'code': return [h('The code'),...code(b.lines,b.filename)]
    case 'runviz': return [h('Program run: every step'),...code(b.codeLines,b.filename),...b.steps.flatMap((s,i)=>[p([new TextRun({text:`${i+1}. ${s.title}`,bold:true,color:colors.indigo}),...(s.line?[new TextRun({text:` (line ${s.line})`,italics:true})]:[])]),p(s.explain),...(s.vars?.length?[p(`Memory: ${s.vars.map(v=>`${v.name} = ${v.value}`).join(', ')}`)]:[]),...(s.console?.length?[p(`Console: ${s.console.join(' | ')}`)]:[])])]
    case 'terminal': return [h('Expected output'),...code([`$ ${b.command}`,...b.lines],'Terminal')]
    case 'pipeline': return [h('Compare the routes'),...b.tracks.flatMap(t=>[h(`${t.icon} ${t.label}`,HeadingLevel.HEADING_3),...(t.summary?[p([new TextRun({text:t.summary,italics:true,color:'596579'})])]:[]),new Table({width:{size:100,type:WidthType.PERCENTAGE},rows:t.stages.map((s,i)=>new TableRow({children:[new TableCell({borders,width:{size:12,type:WidthType.PERCENTAGE},shading:{type:ShadingType.CLEAR,fill:'EEF1FA'},children:[p([new TextRun({text:`${i+1}`,bold:true,color:colors.indigo})]),p(s.icon)]}),new TableCell({borders,children:[p([new TextRun({text:s.name,bold:true,color:colors.navy})]),p([new TextRun({text:'What we have now: ',bold:true}),new TextRun({text:s.artifact,font:'Consolas',color:colors.indigo})]),p(s.description),...(s.example?[p([new TextRun({text:s.example,font:'Consolas',size:18,color:colors.text})],{shading:{type:ShadingType.CLEAR,fill:'F4F6F9'}})]:[])]})]}))})])]
    case 'steps': return [h('Try it yourself'),...list(b.items,'steps')]
    case 'mistakes': return [h('Common mistakes and fixes'),...b.items.map(([bad,why])=>tableBox(`✗ ${bad}`,[p(why)],'FFF7E8'))]
    case 'quiz': return [h('Check your understanding'),...b.items.flatMap(([q,a],i)=>[p([new TextRun({text:`${i+1}. ${q}`,bold:true})]),p([new TextRun({text:'Answer: ',bold:true,color:colors.teal}),...rich(a)])])]
    case 'takeaways': return [h('Key takeaways'),tableBox('REMEMBER',list(b.items),'EEF7F4')]
    case 'aha': return [tableBox('THE AHA MOMENT',[p([new TextRun({text:b.text,bold:true,color:colors.teal})])],'EAF8F4')]
    case 'cliffhanger': return [tableBox(`NEXT DISCOVERY · ${b.title}`,[p(b.text)],'EEF1FA')]
    case 'resources': return [h('Keep exploring'),...b.items.map(([label,url])=>new Paragraph({children:[new ExternalHyperlink({link:url,children:[new TextRun({text:label,style:'Hyperlink'})]}),new TextRun({text:` — ${url}`,color:'657084',size:18})]}))]
    case 'definition': return [tableBox(`DEFINITION · ${b.term}`,[p(b.text),...(b.example?[p([new TextRun({text:'Example: ',bold:true}),...rich(b.example)])]:[])],'EEF1FA')]
    case 'worked-example': return [tableBox(`WORKED EXAMPLE · ${b.title}`,[p([new TextRun({text:'Problem: ',bold:true}),...rich(b.problem)]),...list(b.steps,'steps'),p([new TextRun({text:'Result: ',bold:true,color:colors.teal}),...rich(b.result)])],'F3F6FA')]
    case 'case-study': return [tableBox(`${(b.kind||'REAL CASE').toUpperCase()} · ${b.title}`,[p(b.context),...list(b.points||[]),...(b.source?[p(`Source: ${b.source.label}${b.source.url?` — ${b.source.url}`:''}`)]:[])],'FFF8E8')]
    case 'timeline': return [h(b.title),new Table({width:{size:100,type:WidthType.PERCENTAGE},rows:b.items.map(item=>new TableRow({children:[new TableCell({borders,width:{size:22,type:WidthType.PERCENTAGE},shading:{type:ShadingType.CLEAR,fill:'EEF1FA'},children:[p([new TextRun({text:item.date,bold:true,color:colors.indigo})])]}),new TableCell({borders,children:[p([new TextRun({text:item.title,bold:true})]),p(item.text)]})]}))})]
    case 'comparison': return [h(b.title),new Table({width:{size:100,type:WidthType.PERCENTAGE},rows:[new TableRow({children:b.columns.map(column=>new TableCell({borders,shading:{type:ShadingType.CLEAR,fill:'EEF1FA'},children:[p([new TextRun({text:column,bold:true})])]}))}),...b.rows.map(row=>new TableRow({children:row.map(cell=>new TableCell({borders,children:[p(cell)]}))}))]})]
    case 'source-note': return [tableBox(b.label||'SOURCE NOTE',[p(b.claim),...(b.url?[p(b.url)]:[]),...(b.verifiedThrough?[p(`Verified through ${b.verifiedThrough}`)]:[])],'EEF8F6')]
    case 'question': return [tableBox(b.kind==='verified-pyq'?'VERIFIED PAST-YEAR QUESTION':'PRACTICE QUESTION',[p([new TextRun({text:[b.exam,b.year,b.paper,b.marks&&`${b.marks} marks`].filter(Boolean).join(' · '),italics:true,color:'596579'})]),p([new TextRun({text:b.prompt,bold:true})]),p([new TextRun({text:'Model answer: ',bold:true,color:colors.teal}),...rich(b.answer)]),...list(b.marking||[]),...(b.sourceUrl?[p(`Official source: ${b.sourceUrl}`)]:[])],b.kind==='verified-pyq'?'EEF8F6':'FFF8E8')]
    case 'activity': return [tableBox(`ACTIVITY · ${b.title}`,[...(b.materials?.length?[p(`Materials: ${b.materials.join(', ')}`)]:[]),...list(b.steps,'steps'),...(b.safety?[p([new TextRun({text:'Safety: ',bold:true,color:'9A5B00'}),...rich(b.safety)])]:[])],'EEF8F6')]
    case 'reflection': return [tableBox('OPTIONAL REFLECTION',[p(b.prompt),p(b.permission||'You may pause, skip this exercise or return later.'),...list(b.guidance||[])],'F3F0FA')]
    case 'safety-notice': return [tableBox(b.title||'IMPORTANT SUPPORT NOTE',[p(b.text),...(b.resources||[]).map(([label,url])=>p(`${label} — ${url}`))],'FFF0F0')]
    default:return []
  }
}
async function blocksToDocx(blocks){ const out=[]; for(const block of blocks) out.push(...await blockToDocx(block)); return out }
export async function buildBookDocument(publication){
  const { lessons, BOOK, BRAND, PREFACE } = publication
  const imprintMark = await imageLoader(BRAND.imprintMark)
  const front=[new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:900,after:260},children:[new ImageRun({data:imprintMark,type:'png',transformation:{width:96,height:96},altText:{title:`${BRAND.imprint} publisher mark`,description:'Circular publisher mark showing a young scholar writing in an open book.',name:'Publisher mark'}})]}),p(BRAND.imprint.toUpperCase(),{alignment:AlignmentType.CENTER,spacing:{after:160}}),p(BRAND.tagline,{alignment:AlignmentType.CENTER,spacing:{after:400}}),p([new TextRun({text:BOOK.title,bold:true,size:52,color:colors.navy})],{alignment:AlignmentType.CENTER}),p([new TextRun({text:BOOK.subtitle,size:30,color:colors.indigo})],{alignment:AlignmentType.CENTER}),p(`${BOOK.series}\n${BOOK.author}\n${BOOK.edition} · ${BOOK.year}`,{alignment:AlignmentType.CENTER,spacing:{before:500}}),new Paragraph({children:[new PageBreak()]}),h(BOOK.title,HeadingLevel.HEADING_1),p([new TextRun({text:`© ${BOOK.year} by ${BOOK.author}. All rights reserved.`,bold:true})]),p(`Published by ${BOOK.publisher}.`),p(BOOK.rights),p(BOOK.disclaimer),p([new TextRun({text:BOOK.dedication,italics:true,color:colors.indigo})]),new Paragraph({children:[new PageBreak()]}),h('Acknowledgements',HeadingLevel.HEADING_1),...BOOK.acknowledgements.map(text=>p(text)),new Paragraph({children:[new PageBreak()]}),h('Contents',HeadingLevel.HEADING_1),new TableOfContents('Table of Contents',{hyperlink:true,headingStyleRange:'1-1'}),p('In Microsoft Word, right-click this list and choose Update Field if page numbers are not visible.'),new Paragraph({children:[new PageBreak()]}),h(PREFACE.title,HeadingLevel.HEADING_1),...(await blocksToDocx(PREFACE.blocks)),new Paragraph({children:[new PageBreak()]}),h('How to use this book',HeadingLevel.HEADING_1),...BOOK.howToUse.map(text=>p(text))]
  const body=[]; for(let i=0;i<lessons.length;i++){const l=lessons[i];body.push(new Paragraph({pageBreakBefore:true,heading:HeadingLevel.HEADING_1,children:[new TextRun({text:`Chapter ${i+1}: ${l.title}`,bold:true,color:colors.navy})]}),p([new TextRun({text:l.subtitle,italics:true,color:'596579'})]),...(await blocksToDocx(l.blocks)))}
  body.push(new Paragraph({pageBreakBefore:true,heading:HeadingLevel.HEADING_1,children:[new TextRun({text:'About the author',bold:true,color:colors.navy})]}),...BOOK.aboutAuthor.map(text=>p(text)),h('Keep learning'),p('Keep guessing, running and checking.'),p([new TextRun({text:`${BRAND.imprint} · ${BRAND.tagline}`,bold:true,color:colors.indigo})]))
  return new Document({features:{updateFields:true},styles:{default:{document:{run:{font:'Calibri',size:22,color:colors.text},paragraph:{spacing:{line:300,after:120}}}},paragraphStyles:[{id:'Heading1',name:'Heading 1',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:'Calibri',size:34,bold:true,color:colors.navy},paragraph:{spacing:{before:300,after:160},keepNext:true,outlineLevel:0}},{id:'Heading2',name:'Heading 2',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:'Calibri',size:27,bold:true,color:colors.indigo},paragraph:{spacing:{before:260,after:120},keepNext:true,outlineLevel:1}},{id:'Heading3',name:'Heading 3',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:'Calibri',size:23,bold:true,color:colors.teal},paragraph:{keepNext:true,outlineLevel:2}}]},numbering:{config:[{reference:'bullet',levels:[{level:0,format:'bullet',text:'•',alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:500,hanging:240}}}}]},{reference:'steps',levels:[{level:0,format:'decimal',text:'%1.',alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:500,hanging:240}}}}]}]},sections:[{properties:{page:{margin:{top:900,right:900,bottom:900,left:900}}},headers:{default:new Header({children:[p(`${BOOK.title}  ·  ${BOOK.author}`,{alignment:AlignmentType.RIGHT})]})},footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun('Page '),new TextRun({children:[PageNumber.CURRENT]}),new TextRun(' of '),new TextRun({children:[PageNumber.TOTAL_PAGES]})]})]})},children:[...front,...body]}]})
}
export async function exportBookToWord(publication){const doc=await buildBookDocument(publication);const blob=await Packer.toBlob(doc);const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=publication.BOOK.filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),3000)}
