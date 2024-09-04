// Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive. 


function largestRange(num1, num2) {
    if (num1 > num2) {
        return `${num1} is the largest`
    } else {
        return `${num2} is the largest`
    }
} 

let num1 = 60 // Use Prompt
let num2 = 54

if ((num1 >= 40 && num1 <= 60) && (num1 >= 40 && num1 <= 60)) {
    console.log(largestRange(num1, num2));
} else {
    console.log("You can't access the function");
}

