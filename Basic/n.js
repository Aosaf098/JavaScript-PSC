// Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n. 


function nChar(givenStr, n) {
    if(givenStr.length <= n) {
        return `The string length must be larger than or equal to n`
    } else{
        let first = givenStr.slice(0, n)
        let last = givenStr.slice(givenStr.length - n)
        return first + last
    }

}


console.log(nChar('Mamoushi', 2));
console.log(nChar('Javascript', 2));
console.log(nChar('Ja', 2));