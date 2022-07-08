function analyzeArray(arr) {
    const obj = {}

    // Calculate average
    obj.average = (arr.reduce((prev, curr) => prev + curr, 0)) / arr.length

    // Calculate min
    obj.min = Math.min(...arr)

    // Calculate max
    obj.max = Math.max(...arr)

    // Calculate length
    obj['length'] = arr.length

    return obj
}

export default analyzeArray