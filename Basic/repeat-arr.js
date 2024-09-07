// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0


function repeat(numbers, num1){
    let count = 1
    let res
    for(let number of numbers) {
        if (number === num1) {
            res = count++
        }
    }
    return res
}

console.log(repeat([5, 6, 11, 12, 98, 5, 5, 6, 5], 5));