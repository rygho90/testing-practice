import calculator from './calculator'

test('add two digits', () => {
    expect(calculator.add(2, 3)).toBe(5)
})

test('subtract 2nd digit from 1st digit', () => {
    expect(calculator.subtract(5, 3)).toBe(2)
})

test('multiply two digits', () => {
    expect(calculator.multiply(2, 3)).toBe(6)
})

test('divide 1st digit by 2nd digit', () => {
    expect(calculator.divide(6, 3)).toBe(2)
})