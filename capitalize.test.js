import capitalize from './capitalize'
// const capitalize = require('./sum')

test('capitalizes first character in an all lower case string', () => {
    expect(capitalize('john')).toBe('John')
})

test('capitalizes first character only in an all upper case string', () => {
    expect(capitalize('JOHN')).toBe('John')
})

test('capitalizes first character only in mixed case string', () => {
    expect(capitalize('jOhN')).toBe('John')
})