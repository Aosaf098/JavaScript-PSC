// Write a JavaScript program to concatenate two strings except for their first character. 

function conTwo(givenStr1, givenStr2) {
    let modStr1 = givenStr1.slice(1)
    let modStr2 = givenStr2.slice(1)
    return modStr1 + modStr2

}

console.log(conTwo("machiato", "latte"));
console.log(conTwo("linkin", "park"));
console.log(conTwo("avenged", "sevenfold"));
console.log(conTwo("pink", "floyd"));