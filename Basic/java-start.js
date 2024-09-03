// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise. 


function javaStart(givenString) {
    let javaStr = 'Java'
    givenString = givenString.toLowerCase()
    // console.log(givenString.slice(0, 4));
    if (givenString.slice(0, 4) === javaStr.toLowerCase()) {
        return true
    } else {
        return false
    }

}


console.log(javaStart('Java'));