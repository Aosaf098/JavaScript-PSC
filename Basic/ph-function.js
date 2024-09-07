// Task - 1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(num1, num2, num3, num4) {
    return num1 * num2 * num3 * num4
}
console.log(multiply(2, 4, 5, 2));

// Task - 2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function mulDiv(number) {
    if (number % 2 === 0) {
        return number / 2
    } else {
        return number * 2
    }
}
console.log(mulDiv(630));

// Task - 3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(integers, size) {
    let sum = 0
    for(let integer of integers){
        // console.log(integer);
        sum = sum + integer
    }
    console.log(sum);
    return sum / size
}

const arr = [5, 4, 2, 9, 10]
const arrLen = arr.length
console.log(make_avg(arr, arrLen))

// Task - 4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(bnrStr) {
    let count = 1
    let output
    for (let i = 0; i < bnrStr.length; i++) {
        if (bnrStr[i] === '0') {
            output = count++
        }
    }
    return output
}

console.log(count_zero('000'));

// Task - 5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(num) {
    if (num % 2 === 0) {
        return `Even`
    } else{
        return `Odd`
    }
}

console.log(odd_even(25));
