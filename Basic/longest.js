// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming


function longest(givenStr) {
    let arr = givenStr.split(' ')
    let long = arr[0]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > long.length) {
            long = arr[i]
        }
    }
    return long
}


console.log(longest('I am learning Programming to become a programmer'))