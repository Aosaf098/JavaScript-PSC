// Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1. 

function firstLastArr(arr) {
    if (arr.length < 1) {
        return `The length must be larger than or equal to 1`
    } else {
        let newArr = []
        newArr.push(arr[0], arr[arr.length - 1])
        return newArr
    }
}

console.log(firstLastArr([9, 6, 4, 3, 8, 2]));
console.log(firstLastArr([]));