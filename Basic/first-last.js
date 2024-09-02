// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1. 

function firstLast(givenString) {
    if (givenString.length === 1) {
        return givenString
    } else if (givenString.length === 0) {
        return "Write"
    } else {
        let first = givenString.substring(0, 1)
        let last = givenString.substring(givenString.length-1)
        let remain = givenString.substring(1, givenString.length-1)
        const modStr = last + remain + first
        return modStr
    }
}

const gvStr = firstLast("Python")

console.log(gvStr)

