// Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

function replace(givenStr) {
    let arr = []
    let uni
    for(let i = 0; i < givenStr.length; i++) {
        if (givenStr[i] === 'z') {
            uni = 'a'
            arr.push(uni)
        } else {
            uni = givenStr[i].charCodeAt() // Get the Unicode value for every alphabet
            uni = uni + 1 // Adding 1 means getting the next alphabet
            arr.push(String.fromCharCode(uni)) // Retrieve the new alphabet from the unicode and pushing it to the empty array
        }
    }
    return arr.join('') // Converting the array into a string
}

console.log(replace('frustration'));
console.log(replace('jholmole'));
console.log(replace('kashif'));
console.log(replace('warfaze'));
console.log(replace('zozzz'));



