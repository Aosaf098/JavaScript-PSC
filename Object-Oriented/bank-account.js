// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.


class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber
        this.balance = balance
    }
    deposit(amount) {
        console.log(`Deposit Money`);
        console.log(this.balance += amount);
        
    }
    withdraw(amount) {
        console.log(`Withdraw Money`);
        if (amount > this.balance) {
            console.log(`Insufficient Balance`);
        } else {
            console.log(this.balance -= amount);
        }
    }
}

const instance = new BankAccount(20130983210, 5000)

instance.deposit(1000)
instance.withdraw(5000)