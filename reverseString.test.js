import reverseString from './reverseString'

test('reverse a basic string', () => {
    expect(reverseString('hello')).toBe('olleh')
})

test('reverse a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh')
})

test('reverse a string with numbers including 0', () => {
    expect(reverseString('58008')).toBe('80085')
})