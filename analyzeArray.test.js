import analyzeArray from './analyzeArray'

test('analyze TOP example array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test('analyze an array with zeros in it', () => {
    expect(analyzeArray([0,3,3,0,4])).toStrictEqual({
        average: 2,
        min: 0,
        max: 4,
        length: 5
    })
})