const TOKEN = /\s*(?:(\d+(?:\.\d*)?|\.\d+)|(\/\/|\*\*|[+\-*/%()]))/y

export function evaluateArithmeticExpression(source) {
  if (typeof source !== 'string' || !source.trim()) throw new Error('Enter one arithmetic expression.')
  if (source.length > 120 || /[\r\n]/.test(source)) throw new Error('Use one short line only.')

  const expressionSource = source.trim()
  const tokens = []
  let position = 0
  while (position < expressionSource.length) {
    TOKEN.lastIndex = position
    const match = TOKEN.exec(expressionSource)
    if (!match) throw new Error('Use only numbers, arithmetic operators and parentheses.')
    tokens.push(match[1] === undefined ? match[2] : Number(match[1]))
    position = TOKEN.lastIndex
  }

  let index = 0
  const peek = () => tokens[index]
  const take = value => peek() === value && (index += 1)
  const checked = value => {
    if (!Number.isFinite(value)) throw new Error('That result is too large to test.')
    return value
  }

  function atom() {
    const token = peek()
    if (typeof token === 'number') { index += 1; return token }
    if (take('(')) {
      const value = expression()
      if (!take(')')) throw new Error('A closing parenthesis is missing.')
      return value
    }
    throw new Error('Python expected a number or an opening parenthesis.')
  }

  function power() {
    const left = atom()
    return take('**') ? checked(left ** factor()) : left
  }

  function factor() {
    if (take('+')) return factor()
    if (take('-')) return checked(-factor())
    return power()
  }

  function term() {
    let value = factor()
    while (['*', '/', '//', '%'].includes(peek())) {
      const operator = tokens[index++]
      const right = factor()
      if ((operator === '/' || operator === '//' || operator === '%') && right === 0) throw new Error('Division by zero is not allowed.')
      if (operator === '*') value *= right
      if (operator === '/') value /= right
      if (operator === '//') value = Math.floor(value / right)
      if (operator === '%') value -= Math.floor(value / right) * right
      checked(value)
    }
    return value
  }

  function expression() {
    let value = term()
    while (peek() === '+' || peek() === '-') {
      const operator = tokens[index++]
      const right = term()
      value = operator === '+' ? value + right : value - right
      checked(value)
    }
    return value
  }

  const result = expression()
  if (index !== tokens.length) throw new Error(`Unexpected symbol: ${String(peek())}`)
  return result
}
