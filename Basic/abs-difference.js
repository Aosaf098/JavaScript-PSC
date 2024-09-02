// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

function absDif(num) {
    if(num > 19) {
        return 3 * Math.abs(num - 19)
    } else {
        return Math.abs(num - 19)
    }
}

console.log(absDif(prompt("Specified NUmber")))