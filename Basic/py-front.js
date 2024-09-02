// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  

// let givenString = 'Mamoushi'

function pyFront(givenString) {
    if (givenString.substring(0, 2) === "Py"){
        return givenString
    } else {
        return `Py${givenString}`
    }
}

console.log(pyFront('Python'))


