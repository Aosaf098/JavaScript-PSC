// Write a JavaScript application that transforms a provided numerical value into hours and minutes.  


function hourMin(number) {
    let output = `${Math.floor(number / 60)} hour and ${number % 60} min`
    return output
}

console.log(hourMin(97));
console.log(hourMin(497));
console.log(hourMin(970));
console.log(hourMin(9));