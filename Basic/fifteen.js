// Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15. 


function fifteen (num1, num2) {
    const sum = num1 + num2
    const diff = Math.abs(num1 - num2)
    if ((num1 === 15 || num2 === 15) || ((sum === 15) || (diff === 15))){
        return true
    } else {
        return false
    }
}

console.log(fifteen(3, 18));
console.log(fifteen(13, 2));
console.log(fifteen(3, 12));
console.log(fifteen(15, 18));
console.log(fifteen(3, 15));
console.log(fifteen(0, 15));
console.log(fifteen(25, 10));
console.log(fifteen(12, 27));
