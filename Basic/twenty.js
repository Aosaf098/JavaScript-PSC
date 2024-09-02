// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  

function twenty(num) {
    if ((Math.abs(num - 100) <= 20) || (Math.abs(num - 400) <= 20)) {
        return true
    } else {
        return false
    }
}

console.log(twenty(81))

// You can use prompt to take user Input