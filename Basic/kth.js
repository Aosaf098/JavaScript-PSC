// Write a JavaScript program to find the kth greatest element in a given array of integers.

function kthElement(arr, k) {
    arr.sort(function(a, b) {
        return b - a
    })
}

console.log(kthElement([3, 1, 5, 2, 4], 2));


