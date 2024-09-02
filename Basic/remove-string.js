// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  


function removeString(givenString, pos) {
    let firstPart = givenString.substring(0, pos-1)
    let secPart = givenString.substring(pos)
    return firstPart + secPart
}

console.log(removeString('Mumtahina' , 3))



