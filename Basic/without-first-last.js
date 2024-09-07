// Write a JavaScript program to create a new string without the first and last characters of a given string. 

function without(givenStr) {
    let modStr = givenStr.slice(1, givenStr.length - 1)
    return modStr
}

console.log(without('machiato'));
console.log(without('mamoushi'));
console.log(without('something'));
console.log(without('joker'));