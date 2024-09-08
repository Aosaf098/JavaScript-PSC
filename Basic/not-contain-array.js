// Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.

function notContain(arr) {
    if (!(arr.includes(1) || arr.includes(3))) {
        return true
    } else {
        return false
    }
}

console.log(notContain([1, 3]));
console.log(notContain([1, 4]));
console.log(notContain([4, 3]));
console.log(notContain([4, 5]));
console.log(notContain([4, 9]));
console.log(notContain([2, 5]));