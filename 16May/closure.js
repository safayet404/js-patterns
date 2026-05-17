

function createBankAccount(initialBalance) {
    let balance = initialBalance

    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount
                return `জমা হয়েছে ঃ ৳ ${amount} । ব্যালেন্স  ${balance}`
            }
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount
                return `উত্তোলন: ${amount}। ব্যালেন্স: ${balance}`;


            }
            return "Insufficeint Balance"
        },
        getBalance() {
            return balance
        }
    }
}

const account = createBankAccount(1000)
console.log(account.deposit(500))
console.log(account.withdraw(700))
console.log(account.withdraw(2200))
console.log(account.getBalance())