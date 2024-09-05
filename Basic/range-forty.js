// Write a JavaScript program to check whether a given number exists in the range 40..10000.  
// For example 40 presents in 40 and 4000


function range(num) {
    if (num >= 40 && num <= 10000) {
        return true
    } else {
        return false
    }
}

console.log(range(67));
console.log(range(67000));
console.log(range(6700));
console.log(range(0));
console.log(range(39));
console.log(range(40));
console.log(range(10000));