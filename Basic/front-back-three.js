// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.


function lastThreeChar(givenString, newString) {
    if (givenString.length >= 3) {
        const modString = givenString.slice(givenString.length - 3)
        newString = modString + newString + modString
        return newString
    } else {
        return `The string length must be 3 or more`
    }
}


console.log(lastThreeChar("Mamoushi", "Jambo"));

