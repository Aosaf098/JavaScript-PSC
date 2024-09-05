// Write a JavaScript program to convert letters of a given string alphabetically.  


function convert(givenString) {
    let newArr = givenString.split('')
    let sortedArr = newArr.sort()
    let result = sortedArr.join('')
    return result
}


console.log(convert("mamoushi"));
console.log(convert("AyubBacchu"));
console.log(convert("FearInoculum"));

