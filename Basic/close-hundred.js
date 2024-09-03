// Write a JavaScript program to find the closest value to 100 from two numerical values. 


function closest(num1, num2) {
    if (Math.abs(100 - num1) > Math.abs(100 - num2)) {
        return `${num2} is the closest`
    } else if ((Math.abs(100 - num1) && Math.abs(100 - num2)) === 1) {
        return `Both`
    } else {
        return `${num1} is the closest`
    }
}

console.log(closest(110, 99));