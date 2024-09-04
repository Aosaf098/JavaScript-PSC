// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit. 


function rightmost(num1, num2, num3) {
    if ((num1 % 10 === num2 % 10 && num1 % 10 === num3 % 10) || (num1 % 10 === num2 % 10) || (num1 % 10 === num3 % 10) || (num2 % 10 === num3 % 10)) {
        return true
    } else {
        return false
    }
}



console.log(rightmost(12, 12, 12));

console.log(rightmost(12, 33, 12));
console.log(rightmost(12, 12, 13));
console.log(rightmost(12, 13, 13));

console.log(rightmost(12, 33, 11));










