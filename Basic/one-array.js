// Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.  

function oneArr(arr) {
    if (arr.length < 1) {
        return `The array length must be larger than or equal to 1.`
    } else {
        if(arr[0] === 1 || arr[arr.length - 1] === 1){
            return true
        } else {
            return false
        }
    }
}


console.log(oneArr([1, 3, 5, 2, 7]));
console.log(oneArr([9, 3, 5, 2, 1]));
console.log(oneArr([1, 3, 5, 2, 1]));
console.log(oneArr([6, 3, 5, 2, 7]));
console.log(oneArr([6]));
console.log(oneArr([]));