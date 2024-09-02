// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.


function frontBack(givenString, newString) {
    let firstChar = givenString.substring(0, 1)
    // console.log(firstChar)
    let modString = firstChar + newString + firstChar
    return modString
}


console.log(frontBack("Python", "django"))