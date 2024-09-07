// Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three. 

function moveChar(givenStr) {
    if (givenStr.length <= 3){
        return `The string length must be greater than or equal to three`
    } else {
        let last = givenStr.slice(givenStr.length - 3)
        let rem = givenStr.slice(0, givenStr.length - 3)
        return last + rem
    }

}

console.log(moveChar('machiato'));
console.log(moveChar('something'));
console.log(moveChar('naive'));
console.log(moveChar('exactly'));
console.log(moveChar('ink'));