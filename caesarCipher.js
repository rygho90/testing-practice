function caesarCipher(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            newStr += str[i]
        } else {
            if (str.charCodeAt(i) === 122 || str.charCodeAt(i) === 90) {
                let newCode = str.charCodeAt(i) - 25
                newStr += String.fromCharCode(newCode)
            } else {
                let newCode = str.charCodeAt(i) + 1;
                newStr += String.fromCharCode(newCode)
            }
        }
    }
    return newStr
}

export default caesarCipher