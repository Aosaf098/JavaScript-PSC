// Write a JavaScript program that checks whether the last digit of three positive integers is the same.

function lastDigit(num1, num2, num3) {
    if (num1 < 0 || num2 < 0 || num3 < 0) {
        return `Positive Number Please`
    } else {
        if ((num1 % 10 === num2 % 10) && (num1 % 10 === num3 % 10)) {
            return `The last digit of ${num1}, ${num2} & ${num3} is same`
        } else {
            return `Not Same`
        }
    }
}

console.log(lastDigit(333, 63, 63));

// USE Prompt





