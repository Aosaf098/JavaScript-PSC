// Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.  

function lastThrChar(givenStr) {
    if (givenStr.length >= 3) {
        let modStr = givenStr.slice(givenStr.length - 3)
        return modStr.repeat(4)
    } else {
        return `Write a string with 3 or more than characters`
    }
}

console.log(lastThrChar('Machiato'));