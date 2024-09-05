// Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.  



function multiple(num1, num2) {
    if ((num1 % 7 === 0 || num1 % 11 === 0) && (!(num2 % 7 === 0 || num2 % 11 === 0)) || (!(num1 % 7 === 0 || num1 % 11 === 0)) && (num2 % 7 === 0 || num2 % 11 === 0)) {
        return true
    } else {
        return false
    }
}


console.log(multiple(70, 100));
console.log(multiple(88, 100));
console.log(multiple(70, 77));
console.log(multiple(55, 66));




console.log(multiple(0, 88));


console.log(multiple(16, 20));
console.log(multiple(54, 88));







