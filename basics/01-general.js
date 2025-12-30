// General JS notes
"use strict";

// 🔎 General Concepts
console.log(typeof null); // object
console.log(window);

// Variable scopes
// let: block scope
// const: block scope, can't reassign but can change object properties
// var: function scope, creates global property if used outside function

// Operators
console.log(
  "+ - / % * ** == === > < >= <= ! || && ?? ||= &&= ??= ?. ++ -- += -="
);

// Type coercion examples
console.log("12" - "2"); // 10
console.log("12" + 2); // "122"
const age = 25;
console.log(`${age}`); // template literal

// Falsy values
console.log(false, 0, "", undefined, null, NaN);
console.log(
  typeof 42,
  typeof "text",
  typeof true,
  typeof undefined,
  typeof null,
  typeof 10n,
  typeof {}
);

// Variables behavior
// var creates global property on window
// using var before definition returns undefined
// in 'use strict', functions are block scoped
// JS objects: objects, arrays, dates, maps, sets, typed arrays, promises
console.log("Comparing two JS objects always returns false");

// Numeric literal example
const diameter = 287_460_000_000;
