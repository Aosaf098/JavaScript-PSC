// Write a JavaScript program to remove duplicate items from an Array


function dupArr(numbers) {
    let arr = []
    for (let number of numbers) {
        // console.log(number)
        if(arr.includes(number)){
            console.log(number);
        } else{
            arr.push(number)
        }
    }
    return arr
}

console.log(dupArr([5, 6, 7, 5, 2, 7, 7]));