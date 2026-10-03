const testCode = [
  'import unittest',
  'from assistant import normalize_score',
  '',
  'class ScoreTests(unittest.TestCase):',
  '    def test_normal_score(self):',
  '        self.assertEqual(normalize_score("7"), 7)',
  '',
  '    def test_boundary_score(self):',
  '        self.assertEqual(normalize_score("0"), 0)',
  '',
  '    def test_invalid_score(self):',
  '        with self.assertRaises(ValueError):',
  '            normalize_score("eleven")',
  '',
  'if __name__ == "__main__":',
  '    unittest.main()'
]

export const chapter08 = {
  id: 'handle-and-prove', icon: '✓', title: 'Handle Problems and Prove Behavior', shortTitle: 'Reliability',
  subtitle: 'Handle expected failures and prove that important assistant behavior still works.', tags: ['Reliability trial', 'Testing', '60 min'],
  blocks: [
    { type: 'arc-progress', arcTitle: 'Rescue and Strengthen an Application', step: 3, total: 3, currentFocus: 'Pass the reliability trial', text: 'Read failures, handle expected exceptions and turn behavior claims into automated tests.' },
    { type: 'comparison', title: 'Two broad failure times', columns: ['Kind', 'When it appears', 'First move'], rows: [['Syntax error', 'Python cannot parse the code before normal execution.', 'Read the location and inspect punctuation or indentation.'], ['Runtime exception', 'Execution reaches an operation that cannot continue.', 'Read the final traceback line for the exception type and message.']] },
    { type: 'steps', title: 'Read a traceback without panic', items: ['Read the final line first. It names the exception and usually gives a message.', 'Move upward to the last frame from your own project.', 'Open that file and line.', 'Inspect the values and the operation.', 'Reproduce the smallest failing case.'] },
    { type: 'heading', text: 'Handle only an expected problem' },
    { type: 'code', filename: 'assistant.py', lines: ['def normalize_score(raw):', '    try:', '        score = int(raw)', '    except ValueError as error:', '        raise ValueError("Score must be a whole number") from error', '    else:', '        if not 0 <= score <= 10:', '            raise ValueError("Score must be from 0 to 10")', '        return score', '    finally:', '        pass  # Cleanup would belong here if a resource needed it.'] },
    { type: 'paragraph', text: 'Catch a specific exception you can meaningfully handle. Avoid bare `except`, which can hide unrelated bugs. An `else` block runs when no exception was raised. A `finally` block runs whether an exception occurred or not, so it suits required cleanup. Use these clauses only when they clarify a real need.' },
    { type: 'heading', text: 'Debug with a testable hypothesis' },
    { type: 'steps', showHeading: false, items: ['Reproduce the problem.', 'Reduce it to the smallest failing input.', 'Inspect state with a debugger or temporary output.', 'State one possible cause.', 'Change or test one thing.', 'Keep the fix only when the evidence supports it.'] },
    { type: 'callout', variant: 'note', title: 'Linters and assertions', paragraphs: ['A **linter** gives automated feedback about code patterns. It is useful evidence, not an authority that replaces judgment.', 'An `assert` states a condition that should be true during development. Do not use assertions as the only validation for user input because optimized runs can disable them.'] },
    { type: 'heading', text: 'Arrange, act and assert' },
    { type: 'paragraph', text: 'A test arranges the starting values, acts by calling behavior and asserts the expected result. Test a normal case, a boundary case and an invalid case. Prefer visible behavior over internal implementation details.' },
    { type: 'code', filename: 'tests/test_assistant.py', lines: testCode },
    { type: 'terminal', command: 'python -m unittest discover -v', lines: ['test_boundary_score ... ok', 'test_invalid_score ... ok', 'test_normal_score ... ok', '', 'Ran 3 tests', '', 'OK'] },
    { type: 'worked-example', title: 'Turn a report into proof', problem: 'A learner reports that score `0` is rejected.', steps: ['Write the smallest test that expects `normalize_score("0")` to equal `0`.', 'Run it and see it fail before editing the function.', 'Correct the boundary condition.', 'Run the full suite to check for regressions.'], result: 'The passing test now preserves the repaired boundary behavior.' },
    { type: 'steps', title: 'Final application checklist', items: ['Run from a clear entry point.', 'Keep domain behavior in at least one object.', 'Split responsibilities across modules.', 'Handle expected invalid input with specific exceptions.', 'Pass normal, boundary and invalid automated tests.', 'Include concise setup and run instructions.'] },
    { type: 'challenge', rank: 'Reliability Engineer', title: 'Break it before a user does', brief: 'Treat every behavior claim as something that must survive evidence, not optimism.', steps: ['Write one normal-case test.', 'Write tests for both allowed boundaries.', 'Write one invalid-case test that expects a specific exception.', 'Trigger a real failure and read the final traceback line first.', 'Repair the behavior and run the complete suite again.'], winCondition: 'All tests pass, the invalid input fails for the intended reason, and setup instructions work from a fresh folder.', stretch: 'Turn one past bug into a regression test that would fail if the bug returned.' },
    { type: 'quiz', items: [['Which traceback line should a beginner read first?', 'The final line, which names the exception and message.'], ['Why avoid a bare `except`?', 'It can hide failures the program does not understand how to handle.'], ['What are the three test stages?', 'Arrange, act and assert.'], ['What is a boundary case?', 'An input at an allowed or disallowed edge, such as score 0 or 10.']] },
    { type: 'takeaways', items: ['Specific handling makes expected failures clear.', 'A test converts a behavior claim into repeatable evidence.', 'Reliable software needs organization, failure handling and proof.'] },
    { type: 'victory', rank: 'Reliability Engineer', proof: ['Read a traceback from the failure outward.', 'Handle only exceptions the program understands.', 'Prove normal, boundary and invalid behavior with automated tests.'], next: 'Carry this tested assistant core into the next book, where a model adapter adds real language-model behavior.' },
    { type: 'resources', items: [['Python errors and exceptions', 'https://docs.python.org/3/tutorial/errors.html'], ['unittest documentation', 'https://docs.python.org/3/library/unittest.html']] },
    { type: 'aha', text: 'The assistant is no longer only a script that seems to work. It has clear parts, expected failure behavior and repeatable proof.' }
  ]
}
