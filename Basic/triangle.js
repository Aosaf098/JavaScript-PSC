// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  


const sideA = 6
const sideB = 7
const sideC = 5

const semiParameter = (sideA + sideB + sideC) / 2

// console.log(semiParam)

let heron = (semiParameter * (semiParameter - sideA) *(semiParameter - sideB) * (semiParameter - sideC))

// console.log(heron)

const triangleArea = Math.sqrt(heron)

console.log(triangleArea.toFixed(2))

