// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3. 


function sumArr(integers) {
    let sum = 0
    for(let int of integers) {
        sum = sum + int
    }
    return sum
}

console.log(sumArr([3, 6, 2]));
console.log(sumArr([3, 6, 22]));
console.log(sumArr([3, 62, 2]));