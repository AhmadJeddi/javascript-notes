// Account class - Public & Private fields & methods (OOP ES6)
"use strict";

// 🔎 Account class - Public & Private fields and methods
class Account {
  // 1️⃣ Public fields (instance properties)
  locale = navigator.language;

  // 2️⃣ Private fields (instance properties) ⚠️private to class
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // 3️⃣ Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // allow method chaining
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
      return this;
    }
  }

  // 4️⃣ Private methods ⚠️not accessible outside class
  #approveLoan(val) {
    return true;
  }
}

// Example usage
const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

// Method chaining example
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
