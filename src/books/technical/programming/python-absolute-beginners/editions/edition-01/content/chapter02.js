import { lesson03 } from './lesson03.js'
import { lesson04 } from './lesson04.js'
import { lesson05 } from './lesson05.js'

const teachingBlocks = lesson => lesson.blocks.filter(block => !['arc-start','arc-progress','cliffhanger','quiz','takeaways'].includes(block.type))

export const chapter02 = {
  id: 'work-with-values', icon: '123', title: 'Work with Values', shortTitle: 'Values',
  subtitle: 'Represent assistant state, calculate useful values and shape the text a learner sees.', tags: ['Score laboratory', 'Values', '60 min'],
  blocks: [
    { type: 'arc-progress', arcTitle: 'Create an Interactive Terminal Assistant', step: 2, total: 5, currentFocus: 'Represent learner state', text: 'Add names, number operations, text tools and a formatted status display.' },
    ...teachingBlocks(lesson03),
    ...teachingBlocks(lesson04),
    ...teachingBlocks(lesson05),
    { type: 'heading', text: 'Strings shape the conversation' },
    { type: 'paragraph', text: 'A **string** is an ordered sequence of text characters. Matching single or double quotes mark its boundaries. Choose double quotes when the text contains an apostrophe, as in `"Akshat’s note"`.' },
    { type: 'comparison', title: 'Read parts of `study`', columns: ['Expression', 'Result', 'Reason'], rows: [['`word[0]`', '`s`', 'Indexing starts at zero.'], ['`word[-1]`', '`y`', 'A negative index counts from the end.'], ['`word[1:4]`', '`tud`', 'Start is included. Stop is excluded.'], ['`word[::-1]`', '`yduts`', 'A step of -1 moves backward.']] },
    { type: 'paragraph', text: 'Strings are **immutable**. Their characters cannot be replaced in place. Build a new string instead. Useful methods include `upper()`, `lower()`, `strip()` and `split()`. A method is a function reached through a value.' },
    { type: 'code', filename: 'status.py', lines: ['learner = "Mira"', 'topic = "  fractions  "', 'score = 7', 'goal = 10', 'clean_topic = topic.strip().title()', 'print(f"{learner}: {clean_topic} {score}/{goal}")', 'print(f"Progress: {score / goal:.0%}")'] },
    { type: 'terminal', command: 'python status.py', lines: ['Mira: Fractions 7/10', 'Progress: 70%'] },
    { type: 'callout', variant: 'note', title: 'A small float warning', paragraphs: ['Most decimal fractions do not have an exact finite binary representation. A result such as `0.1 + 0.2` may display as `0.30000000000000004`. This is normal floating-point approximation, not random behavior.'] },
    { type: 'heading', text: 'Truth values and no-value state' },
    { type: 'paragraph', text: '`True` and `False` are Boolean values. Their type is `bool`, and their capital letters matter. Comparisons produce Boolean results. `None` is a separate value that means no value is available here. It is not the number zero, an empty string or `False`.' },
    { type: 'code', filename: 'state.py', lines: ['has_notes = False', 'last_topic = None', 'score = 7', 'goal = 10', 'goal_reached = score == goal', 'print(type(has_notes))', 'print(last_topic)', 'print(goal_reached)'] },
    { type: 'terminal', command: 'python state.py', lines: ["<class 'bool'>", 'None', 'False'] },
    { type: 'challenge', rank: 'State Operator', title: 'Build a status line from raw values', brief: 'Start with untidy learner data. Produce one exact, readable status without copying the finished example.', steps: ['Create names for the learner, topic, score and goal.', 'Clean the topic with string methods.', 'Calculate whether the goal is reached.', 'Print one f-string containing the cleaned topic, score and Boolean result.'], winCondition: 'Your output is correct after changing both the learner name and score.', stretch: 'Add a percentage with no digits after the decimal point.' },
    { type: 'quiz', items: [['Why can `score` later refer to a different value?', 'Assignment can connect the name to a new object.'], ['What does `"python"[1:4]` produce?', '`yth`, because index 1 is included and index 4 is excluded.'], ['Why use an f-string?', 'It places expressions inside readable text.'], ['What should you avoid naming `list`?', 'A variable, because it would shadow Python’s built-in name.']] },
    { type: 'takeaways', items: ['Names refer to values.', 'Types affect the operations a value supports.', 'Strings support indexing and slicing but cannot be changed in place.', '`True`, `False` and `None` represent distinct program states.', 'F-strings create clear status text.'] },
    { type: 'victory', rank: 'State Operator', proof: ['Choose names that reveal meaning.', 'Transform numbers and strings into useful status information.', 'Represent yes-or-no and no-value states accurately.'], next: 'Organize many related values without losing their purpose.' },
    { type: 'cliffhanger', title: 'One value is not enough', text: 'Next, collections organize notes, settings, commands and unique tags.' }
  ]
}
