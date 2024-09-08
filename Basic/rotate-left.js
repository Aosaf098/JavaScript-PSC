// Write a JavaScript program to rotate the elements left in a given array of integers of length 3.  

function rotateLeft(integers) {
    return [integers[1], integers[2], integers[0]]
}


console.log(rotateLeft([3, 4, 5]));


// Spread Operator

const num1 = [2, 4, 5, 6]
const num2 = [3, 7, 2, 6]

const nj = [...num1, ...num2]
console.log(nj);