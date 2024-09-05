// Write a JavaScript program to capitalize the first letter of each word in a given string.

function capital(givenString) {
    let modStr = givenString.split(' ')
    // console.log(modStr); 
    let arr = []
    for(let i = 0; i < modStr.length; i++) {
        let newStr = modStr[i].slice(0, 1).toUpperCase() + modStr[i].slice(1)
        // console.log(newStr);
        arr.push(newStr);
    }
    return arr.join(' ')
}

console.log(capital("yamete kudasai aah"));
console.log(capital("long live the resistance"));
console.log(capital("you want some, come get some"));
console.log(capital("rock you like a hurricane"));
console.log(capital("polaisere polaise"));

