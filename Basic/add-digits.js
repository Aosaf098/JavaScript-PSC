// Write a JavaScript program to add two digits to a given positive integer of length two.  

function addDigit(number) {
    let str = number.toString()
    return `${Number(str[0]) + Number(str[1])}`
}

console.log(addDigit(34));