// Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array. 

function largest(arr) {
    let newArr = []
    if(arr[0] > arr[arr.length - 1]){
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[0]
            newArr.push(arr[i])
            // return newArr.push(arr[i])
        }
    } else if (arr[0] < arr[arr.length - 1]) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[arr.length - 1]
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(largest([2, 6, 5]));
console.log(largest([8, 6, 5]));
console.log(largest([2, 7, 5, 8, 6, 4, 3, 2, 9]));