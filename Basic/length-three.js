// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case. 


function lowerConvert(givenString) {
    if (givenString.length < 3) {
        console.log(`${givenString.toUpperCase()}`)
    } else {
        const newStr = givenString.slice(0, 3)
        const remStr = givenString.slice(3, givenString.length)
        return `${newStr.toLowerCase() + remStr}`
    }
}

console.log(lowerConvert("PRIyotOma"));

// USE Prompt

