// ES6 classes notes
"use strict";

// 🔎 ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2037 - this.birthYear;
  }

  // getter & setter
  set fullName(name) {
    this._fullName = name;
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log("Hey there 👋");
  }
}

// Example
const jessica = new PersonCl("Jessica Davis", 1996);
jessica.calcAge();

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // call parent constructor
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

// Example usage
const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
martha.introduce();
martha.calcAge();
