// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  


function multiple(num1) {
    if (num1 % 3 === 0 || num1 % 7 === 0) {
        return `This number is a multiple of 3 or 7`
    } else {
        return `This number is not a multiple of 3 or 7`
    }
}

console.log(multiple(121));
