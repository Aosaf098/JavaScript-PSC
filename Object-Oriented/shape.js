// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.


class Shape {
    calcArea() {
        throw new Error(`Method not implemented`)
    }
}

// console.log(Shape);

class Triangle extends Shape {
    constructor(base, height) {
        super()
        this.base = base
        this.height = height
    }
    calcArea() {
        return 0.5 * this.base * this.height
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }
    calcArea() {
        return 3.14 * this.radius * this.radius
    }
}

const trivuj = new Triangle(12, 6)
const golla = new Circle(10)

const trivujArea = trivuj.calcArea()
const gollaArea = golla.calcArea()

console.log(trivujArea);
console.log(gollaArea);