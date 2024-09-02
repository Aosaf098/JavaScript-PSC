// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  

function pairFifty(num1, num2) {
    if ((num1 === 50) || (num1 + num2 === 50) || (num2 === 50)) {
        return true
    } else {
        return false
    }
}

console.log(pairFifty(32, 18))



// You can use Prompt to take user Input