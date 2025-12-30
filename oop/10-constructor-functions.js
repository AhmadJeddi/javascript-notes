// Constructor functions notes
"use strict";

// 🔎 Constructor Functions

// Person constructor
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  return 2025 - this.birthYear;
};

Person.hey = function () {
  console.log("Hey there 👋");
};

// Example usage
const ali = new Person("Ali", 1991);
ali.calcAge();

// Student inherits from Person
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // inherit properties
  this.course = course;
};

Student.prototype = Object.create(Person.prototype); // inherit methods
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// Example usage
const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();
