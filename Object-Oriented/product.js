// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
    constructor (id, name, price) {
        this.id = id
        this.name = name
        this.price = price
    }
    totalPrice(quantity) {
        return this.price * quantity
    }
}

class Shampoo extends Product {
    constructor(id, name, price, warrantyPeriod) {
        super(id, name, price) 
        this.warrantyPeriod = warrantyPeriod
    }
    totalPrice(quantity) {
        return (this.price * quantity) + this.warrantyPeriod
    } 
}

const sunsilk = new Shampoo(19101492, 'Sunsilk', 40, 6)

const sunsilkPrice = sunsilk.totalPrice(3)

console.log(sunsilkPrice);