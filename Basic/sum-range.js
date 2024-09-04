// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80. 

function sumCondition(num1, num2) {
    const sum = num1 + num2

    if (sum >= 50 && sum <= 80) {
        return 65
    } else {
        return 80
    }
}

console.log(sumCondition(54, 8));
console.log(sumCondition(54, 83));
console.log(sumCondition(544, 18));
console.log(sumCondition(23, 28));
console.log(sumCondition(54, 96));