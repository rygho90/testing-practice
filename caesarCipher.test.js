import caesarCipher from './caesarCipher'

test('encrypt an all upper case string', () => {
    expect(caesarCipher('HELLO')).toBe('IFMMP')
})