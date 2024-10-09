// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount2 {
    constructor(accNumber, accHolder, balance) {
        this.accNumber = accNumber
        this.accHolder = accHolder
        this.balance = balance
    }
    deposit(addedMoney) {
        return this.balance + addedMoney
    }
    withdraw(takenMoney) {
        return takenMoney > this.balance ? 'Insufficent Balance' : this.balance - takenMoney
    }
    transfer(amount, recepient) {
        if (amount > this.balance) {
            return `Insuffisient Balance`
        } else {
            const newBalance = this.balance - amount
            console.log(recepient.deposit(amount));
        }
    }
}

const abrar = new BankAccount2(123, 'Abrar', 5000)
const shaktiman = new BankAccount2(456, 'Shaktiman', 8000)

const abrarDep = abrar.deposit(1000)
console.log(abrarDep);

const abrarWithdraw = abrar.withdraw(2000)
console.log(abrarWithdraw);

const adanProdan = abrar.transfer(2000, shaktiman)
console.log(adanProdan);