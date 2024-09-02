// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  

function tripleSum (num1, num2) {
    if (num1 == num2) {
        return 3 * (num1 + num2)
    } else {
        return num1 + num2
    }
}

let num1 = Number(prompt("Number 1"))
let num2 = Number(prompt("Number 2"))

console.log(tripleSum(num1, num2))

