// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.


class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    calculateArea() {
        const area = this.width * this.height
        return area
    }
    calculatePerimeter() {
        const perimeter = 2 * (this.width + this.height)
        return perimeter
    }
}

const inst1 = new Rectangle(10, 10)
const inst1Area = inst1.calculateArea()
const inst1Perimeter = inst1.calculatePerimeter()

console.log(inst1);
console.log(`Area: ${inst1Area}`);
console.log(`Perimeter: ${inst1Perimeter}`);


const inst2 = new Rectangle(8, 5)
const inst2Area = inst2.calculateArea()
const inst2Perimeter = inst2.calculatePerimeter()

console.log(inst2);
console.log(`Area: ${inst2Area}`);
console.log(`Perimeter: ${inst2Perimeter}`);
