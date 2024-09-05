// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet. 

function replace(givenString) {
    let lower = givenString.toLowerCase()
    let repChar = lower[0]
    let output = givenString.slice(1) + repChar
    return output
}

console.log(replace("Inoculum"));




function alphabChange(str) {
    let output
    let arr = []

    for(let i = 0; i < str.length; i++) {
    
    let modStr = str[i].charCodeAt() + 1
    output = String.fromCharCode(modStr)
    // console.log(output);
    arr.push(output)
    }
    return arr.join('')
}

console.log(alphabChange('Mamushi'));




// console.log(output);
