// Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than at least one of the other two. 


function lessGr(num1, num2, num3) {
    if ((num1 >= 20) && (num1 < num2 || num1 < num3) || (num2 >= 20) && (num2 < num1 || num2 < num3) || (num3 >= 20) && (num3 < num1 || num3 < num2)) {
        return true
    } else {
        return false
    }
}


console.log(lessGr(23, 32, 18));
console.log(lessGr(23, 18, 32));
console.log(lessGr(23, 18, 18));
console.log(lessGr(23, 82, 82));

console.log(lessGr(10, 10, 7));


















