// Functions notes
"use strict";

// 🔎 Function Basics
console.log;
console.error;
console.warn;
console.table;
console.dir;
typeof "";
prompt;
alert;

// Timers
const int = ["value1", "value2"];
setTimeout(function (a, b) {}, 1000, ...int);
setInterval(function () {}, 1000);

// Math
Math.PI;
Math.random();
Math.trunc();
Math.abs();
Math.sqrt();
Math.pow(2, 3); // same as 2 ** 3
Math.min();
Math.max();
Math.round();
Math.ceil();
Math.floor();

// Type constructors
Number("23");
String();
Boolean();
BigInt(23n);

// Function types
function age() {} // declaration can be used before definition
(function () {})(); // IIFE
const age2 = function () {
  arguments;
  return; // code after return won't run
};
const age3 = (value) => {
  this; // refers to parent scope
  // single line arrow doesn't need return
};

// `this` behavior
// in method: returns object
// in regular function: undefined
// in DOM event: element

// Example function
function average(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum / numbers.length;
}
average(1, 2, 3, 4);

// Function returning function
const telMe = {
  tell: 99999999,
  tel(age = "24") {
    const name = "ahmad";
    return function () {
      console.log(name, age, this.tell);
    };
  },
};
const returnFunction = telMe.tel(undefined);
returnFunction.call(telMe);
returnFunction.apply(telMe, ["enter array"]);
returnFunction.bind(telMe)();

// Bind example
const addTax = (rate, value) => value + value * rate;
const addVAT = addTax.bind(null, 0.23);

// Higher order functions
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
