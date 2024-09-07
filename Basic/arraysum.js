// Write a function to print the sum of all numbers in an array


function sumArr (numbers) {
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        // console.log(numbers[i]);
        sum = sum + numbers[i]
    }
    return `Total: ${sum}`
}

console.log(sumArr([3, 6, 1, 8, 3, 6, 7]));
