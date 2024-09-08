// Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2. 


function twice(arr) {
    if (arr.length > 3) {
        return `The array length should be 0, 1, or 2`
    } else {
        let newArr = []
        let newArr2 = []
        for(let i = 0; i < arr.length; i++) {
            // console.log(arr[i])
            if (arr[i] === 30) {
                newArr.push(arr[i])
            } else if (arr[i] === 40) {
                newArr2.push(arr[i])
            }
        }
        if (newArr.length === 2 || newArr2.length === 2) {
            return true
        } else {
            return false
        }

    }
}

console.log(twice([30, 40, 30]));
console.log(twice([30, 40, 40]));
console.log(twice([20, 10, 30]));
console.log(twice([40, 20, 60]));
console.log(twice([40]));
console.log(twice([40, 40]));
console.log(twice([30, 30]));
console.log(twice([]));
console.log(twice([40, 40, 60, 30, 30, 100]));