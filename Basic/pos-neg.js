// Write a JavaScript program to check two given integers whether one is positive and another one is negative. 

function posNeg(num1, num2) {
    if ((num1 > 0) && (num2 > 0)) {
        return false
    } else if ((num1 < 0) && (num2 < 0)){
        return false
    } else {
        return true
    }
}

console.log(posNeg(-3, -9))


// You can use prompt to take user Input