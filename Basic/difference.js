// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference. 

function difference(num) {
    if(num <= 13) {
        return 13 - num
    } else {
        return 2 * (Math.abs(13 - num))
    }
}


console.log(difference(prompt("Number")))


