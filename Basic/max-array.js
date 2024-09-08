// Write a javascript program to find the max number of an array

function maxArr(numbers) {
    let max = numbers[0]
    for(let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i])
        if (numbers[i] > max){
            max = numbers[i]
        }
    }
    return max
}


console.log(maxArr([2, 5, 3, 7, 9, 4]));


// Write a javascript program to find the min number of an array


function minArr(numbers) {
    let min = numbers[0]
    for(let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i])
        if (numbers[i] < min){
            min = numbers[i]
        }
    }
    return min
}


console.log(minArr([2, 5, 3, 7, 9, 4, 1, 6]));
