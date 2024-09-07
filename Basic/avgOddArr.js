// Write a Javascript program to find the average of the odd numbers in an array

function oddAvg(numbers) {
    let sum = oddSum(numbers)
    let size = oddLen(numbers)
    return `Average: ${sum / size}`
}

console.log(oddAvg([12, 33, 3, 9, 6, 66, 77]));


function oddSum(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            // console.log(arr[i]);
            sum = sum + arr[i]
        }
    }
    return sum
}

function oddLen(arr2) {
    let count = 1
    let size
    for(let i = 0; i < arr2.length; i++) {
        if (arr2[i] % 2 === 1) {
            // console.log(arr2[i]);
            size = count++
        }
    }
    return size
}




// let sum = 0
// let count = 1
// let size
// for(let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 1) {
//         console.log(numbers[i]);
//         sum = sum + numbers[i]
//         size = count++
//     }
// }
// return `Average: ${sum / size}`
    