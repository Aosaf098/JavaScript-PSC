// Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.  


function division(num1, num2) {
    let divide = num1 / num2
    let res = divide.toLocaleString()
    return res
    
}


console.log(division(99000, 78));
