//  Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.


function divideTwo(arr) {
    let sum1 = 0
    let sum2 = 0
    let newArr = []

    for(let i = 0; i < arr.length; i++) {
        // console.log(arr[i])

        if(i === 0 || i % 2 === 0) {
            sum1 = sum1 + arr[i] 
        } else {
            sum2 = sum2 + arr[i] 
        }
    }
    newArr.push(sum1, sum2)
    return newArr

}


console.log(divideTwo([2, 5, 3, 7, 1, 8]));
console.log(divideTwo([2, 5, 3, 7, 1, 8, 0, 2, 5, 8]));
console.log(divideTwo([2, 5, 3, 7, 1, 8, 9]));
console.log(divideTwo([2, 5]));
console.log(divideTwo([1]));
console.log(divideTwo([]));


// sum1 = 2 + 3 + 1 = 6
// sum2 = 5 + 7 + 8 = 20
// newArr = [6, 20]