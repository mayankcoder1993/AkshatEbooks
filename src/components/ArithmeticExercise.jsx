import { useState } from 'react'
import { evaluateArithmeticExpression } from '../utils/arithmeticExpression.js'

export default function ArithmeticExercise({ staticMode = false }) {
  const [expression, setExpression] = useState('')
  const [feedback, setFeedback] = useState(null)

  function testExpression(event) {
    event.preventDefault()
    try {
      const result = evaluateArithmeticExpression(expression)
      const success = Math.abs(result - 100) < 1e-9
      setFeedback(success
        ? { success: true, text: 'Success! Your expression equals 100 :)' }
        : { success: false, text: `Your expression equals ${result}, not 100 yet. Try another route.` })
    } catch (error) {
      setFeedback({ success: false, text: error.message })
    }
  }

  return <section className="arithmetic-exercise pedagogy-card">
    <span className="pedagogy-label">SIMPLE EXERCISE</span>
    <h3>Numbers: Simple Arithmetic</h3>
    <p>Write an expression that equals 100.</p>
    <p>For example, <code>50 + 50</code> or <code>110 - 10</code>.</p>
    <p>See if you can use more than one arithmetic operator. Write only one expression and submit only one line of code.</p>
    {staticMode ? <div className="exercise-print-note"><strong>Success check:</strong> If your expression results in 100, your solution is correct.</div> : <form onSubmit={testExpression}>
      <label htmlFor="arithmetic-expression">Your one-line expression</label>
      <div className="exercise-entry">
        <input id="arithmetic-expression" value={expression} onChange={event => { setExpression(event.target.value); setFeedback(null) }} placeholder="25 * 3 + 25" autoComplete="off" spellCheck="false" />
        <button type="submit">Test my solution</button>
      </div>
      {feedback && <p className={`exercise-feedback ${feedback.success ? 'success' : 'retry'}`} role="status">{feedback.text}</p>}
    </form>}
  </section>
}
