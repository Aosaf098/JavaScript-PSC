// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3


function intArr(arr) {
    if (arr.includes(1) || arr.includes(3)) {
        return true
    } else {
        return false
    }
}

console.log(intArr([1, 4]));
console.log(intArr([1, 3]));
console.log(intArr([6, 3]));
console.log(intArr([5, 4]));