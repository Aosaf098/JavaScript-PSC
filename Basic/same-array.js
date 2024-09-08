// Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3

function sameArr(arr) {
    if (arr[0] === arr[arr.length - 1]) {
        return true
    } else {
        return false
    }
}

console.log(sameArr([2, 5, 6]));
console.log(sameArr([2, 5, 2]));
