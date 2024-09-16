// Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.  
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z


function dollar(x, y, z) {
    if (x + y === z || x - y === z || x * y === z || x / y ===z) {
        return true
    } else {
        return false
    }
}

console.log(dollar(10, 25, 35));
console.log(dollar(60, 25, 35));
console.log(dollar(5, 7, 35));
console.log(dollar(70, 2, 35));
console.log(dollar(10, 25, 350));