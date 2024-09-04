// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 22, 22, 31


function strictSoft(num1, num2, num3) {
    if (num2 > num1 && num3 > num2) {
        return `Strict`
    } else {
        if (num1 === num2 && num2 === num3) {
            return `Equal`
        } else if (num2 >= num1 && num3 >= num2){
            return `Soft`
        } else {
            return `Invalid`
        }
    }
}

console.log(strictSoft(22, 23, 31));


console.log(strictSoft(22, 22, 31));
console.log(strictSoft(22, 30, 30));
console.log(strictSoft(22, 22, 22));
console.log(strictSoft(22, 2, 31));