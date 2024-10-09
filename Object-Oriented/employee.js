// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.


class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
    calcAnnualSalary() {
        return this.salary * 12
    }
}

class Manager extends Employee {
    constructor(name, salary, bonus) {
        super(name, salary)
        this.bonus = bonus
    }
    calcAnnualSalary() {
        return (this.salary * 12) + this.bonus
    }
}

const Jamal = new Manager('Jamal', 20000, 4000)
const Kamal = new Manager('Kamal', 23000, 9000)

const jamalAnnualSalary = Jamal.calcAnnualSalary()
const kamalAnnualSalary = Kamal.calcAnnualSalary()

console.log(jamalAnnualSalary);
console.log(kamalAnnualSalary);