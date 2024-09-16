// Write a JavaScript program to find the types of a given angle.  
// Types of angles:

// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function angle(degree) {
    if(degree >= 0 && degree < 90) {
        return `Acute Angle`
    } else if (degree === 90) {
        return `Right Angle`
    } else if (degree > 90 && degree < 180) {
        return `Obtuse Angle`
    } else if (degree === 180){
        return `Straight Angle`
    }
}

console.log(angle(45));
console.log(angle(90));
console.log(angle(120));
console.log(angle(180));
console.log(angle(0));