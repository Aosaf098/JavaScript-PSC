// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string. 

function matchRemove(givenStr1, givenStr2) {
    if(givenStr1.length === givenStr2.length){
        return givenStr1 + givenStr2
    } else {
        if(givenStr1.length > givenStr2.length){
            let diff = givenStr1.length - givenStr2.length
            let modStr = givenStr1.slice(0, givenStr1.length - diff)
            return modStr
        } else {
            let diff2 = givenStr2.length - givenStr1.length
            let modStr2 = givenStr2.slice(0, givenStr2.length - diff2)
            return modStr2
        }
    }

}

console.log(matchRemove('machiato', 'machine'));