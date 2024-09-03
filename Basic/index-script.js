// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.  


function scripting (givenString) {
    modStr = givenString.slice(4)
    if(modStr === 'Script') {
        return `${givenString.replace(modStr, '')}`
    } else {
        return givenString
    }
}


console.log(scripting('JavaScript'));
console.log(scripting('Python'));
console.log(scripting('TypeScript'));