// Write a JavaScript program to add two positive integers without carrying. 

function add(num1, num2) {
    let str1 = num1.toString()
    let str2 = num2.toString()
    let first = Number(str1[0]) + Number(str2[0])
    // console.log(first);
    if (first > 9) {
        first = first.toString()
        first = Number(first[1])
        console.log(first);
    } else {
        console.log(first);
    }
    let mid = Number(str1[1]) + Number(str2[1])
    // console.log(first);
    if (mid > 9) {
        mid = mid.toString()
        mid = Number(mid[1])
        console.log(mid);
    } else{
        console.log(mid);
    }
    let last = Number(str1[2]) + Number(str2[2])
    // console.log(first);
    if (last > 9) {
        last = last.toString()
        last = Number(last[1])
        console.log(last);
    } else {
        console.log(last);
    }
    let total =  first.toString() + mid.toString() + last.toString()
    return total
    
}

console.log(add(222, 911));
console.log(add(634, 178));