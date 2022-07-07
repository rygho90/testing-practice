import caesarCipher from './caesarCipher'

test('encrypt an all upper case string', () => {
    expect(caesarCipher('HELLO')).toBe('IFMMP')
})

test('encrypt an all lower case string', () => {
    expect(caesarCipher('hello')).toBe('ifmmp')
})

test('encrypt a mixed case string', () => {
    expect(caesarCipher('hElLo')).toBe('iFmMp')
})

test('encrypt a string with a space', () => {
    expect(caesarCipher('hello world')).toBe('ifmmp xpsme')
})

test('encrypt a string which includes a z', () => {
    expect(caesarCipher('Zzzzzz')).toBe('Aaaaaa')
})