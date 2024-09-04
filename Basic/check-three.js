// Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40. 


function checkThree(num1, num2, num3) {
    if (num1 === num2 && num1 === num3) {
        return 30
    } else if(num1 === num2 || num1 === num3) {
        return 40
    } else {
        return 20
    }
}


console.log(checkThree(21, 21, 21));
console.log(checkThree(21, 20, 21));
console.log(checkThree(10, 10, 11));
console.log(checkThree(30, 31, 31));
console.log(checkThree(21, 31, 11));