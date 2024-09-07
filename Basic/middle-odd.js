// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three. 


function middleOdd(givenStr) {
    if (givenStr.length <= 3) {
        return `The string length must be greater than or equal to three`
    } else {
        if (givenStr.length % 2 === 0) {
            return `The String length is even`
        } else{
            let len = givenStr.length / 2
            let mid = givenStr.slice(Math.floor(len) - 1, Math.ceil(len) + 1)
            return mid
        }
    }

}

console.log(middleOdd('undergo'));
console.log(middleOdd('under'));
console.log(middleOdd('machiato'));
console.log(middleOdd('ink'));
console.log(middleOdd('favourite'));


// Input:  M A C H I N E
// Output: C H I
// givenStr.length = 7

// let len = givenStr.length / 2
// let len = 7 / 2 = 3.5 

// let mid = givenStr.slice(Math.floor(len) - 1, Math.ceil(len) + 1)
// Math.floor(len) = 3 
// Math.ceil(len) = 4
// givenStr.slice(2, 5) chi