// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string. 


function secForth(givenString, givenChar) {
    const gvStr = givenString.slice(2, 5)
    console.log(gvStr)
    if (givenChar.length == 0) {
        return 'Put some characters'
    } else {
        return specChar = gvStr.includes(givenChar.toLowerCase())
    }
}

console.log(secForth("Muqaddimah", 't'));


// USE Prompt


