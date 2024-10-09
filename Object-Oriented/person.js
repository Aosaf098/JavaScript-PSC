// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.


class Person {
    constructor(name, age, country){
        this.name = name
        this.age = age
        this.country = country
    }  
    showDetails() {
        console.log(`Name: ${this.name} Age: ${this.age} Country: ${this.country}`);
    } 
}


const person1 = new Person('Aosaf', 26, 'Bangladesh')
const person2 = new Person('Max', 43, 'Iran')
const person3 = new Person('Abrar', 25, 'Finland')

console.log(person1);
console.log(person2);
console.log(person3);

person1.showDetails()
person2.showDetails()
person3.showDetails()