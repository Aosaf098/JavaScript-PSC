// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1. 

function swap(arr) {
    if(arr.length < 1) {
        return `The array length should be at least 1`
    } else {
        let lastIndex = arr.pop()
        let firstIndex= arr.shift()
        arr.push(firstIndex)
        arr.unshift(lastIndex)
        return arr
    }
}

console.log(swap([4, 5, 6, 8, 9, 7]));