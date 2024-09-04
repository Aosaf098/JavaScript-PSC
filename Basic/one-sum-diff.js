// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8. 

function checkSumDiff(num1, num2) {
    const sum = num1 + num2
    const diff = Math.abs(num1 - num2)

    if (num1 === 8 || num2 === 8) {
        return `One of them is 8`
    } else if (sum === 8 || diff === 8) {
        return `Sum or Difference is 8`
    } else {
        return `Nooooooo 8`
    }
}

console.log(checkSumDiff(9, 32));
console.log(checkSumDiff(8, 0));
console.log(checkSumDiff(6, 2));
console.log(checkSumDiff(18, 10));
console.log(checkSumDiff(4, 4));