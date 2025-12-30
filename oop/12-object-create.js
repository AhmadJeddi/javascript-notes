// Object.create notes
"use strict";

// 🔎 Object.create

const PersonProto = {
  calcAge() {
    return 2037 - this.birthYear;
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// create instance
const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();

// Student prototype
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// Example usage
const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");
jay.introduce();
jay.calcAge();
