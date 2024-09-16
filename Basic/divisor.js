// Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.  


function simiilarInt(num1, num2, divisor) {
    if ((num1 % divisor === 0 && num2 % divisor === 0) || (num1 % divisor !== 0 && num2 % divisor !== 0)) {
        return `Similar Integer`
    } else {
        return `Not Similar`
    }
}

console.log(simiilarInt(10, 25, 5));