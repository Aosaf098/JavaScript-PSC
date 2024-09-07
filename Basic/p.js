// Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.

function remAddP(givenStr) {
    givenStr = givenStr.toLowerCase()
    if (givenStr.slice(0, 1) === 'p' && givenStr.slice(givenStr.length - 1) === 'p'){
        let rem = givenStr.slice(1, givenStr.length - 1)
        return rem
    } else {
        return `booooooo`
    }

}


console.log(remAddP('papaprazzi'));
console.log(remAddP('prenup'));
console.log(remAddP('prolap'));