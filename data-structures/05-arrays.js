// Arrays notes
"use strict";

// 🔎 Arrays
const arr = [1, 2, ["3", "4"]];
const arr2 = new Array(1, 2, ["3", "4"]);

// Access & modify
console.log(arr[0]);
arr[3] = 5;
console.log(arr.length);
console.log(arr.includes("4"));
console.log(arr.indexOf("4"));

// Adding/Removing elements
arr.push(6);
arr.unshift(0);
arr.pop();
arr.shift();

// Copy arrays
const arrCopy = [...arr, 6, 7, 8];
const arrCopy2 = [arr.slice(), 6, 7, 8];

// Destructuring
const [x = 1, , y = 2] = arrCopy;
const { [0]: number1, [2]: number2 } = arrCopy;
const [a, b, [c, d]] = arr;

// Iteration
for (const [index, element] of arr.entries()) {
}

// Array methods
arr.slice(-1); // returns new array
arr.splice(3, 1); // modifies original
arr.toSpliced(2, 2, "Lemon", "Kiwi"); // new array
arr.reverse();
arr.toReversed(); // new array

const letters = arr.concat(arr2);
letters.join("_");
arr.at(-1);

// Loops
arr.forEach((v, i, a) => {});
const arrMap = arr.map((v) => v);
const arrFilter = arr.filter((v) => v);
const arrReduce = arr.reduce((acc, v) => acc + v, 0);

// Search
arr.find((e) => e > 0);
arr.findIndex((e) => e > 0);
arr.some((e) => e > 0);
arr.every((e) => e > 0);

// Flatten
arr.flat(); // depth 1 default
arr.flatMap((e) => e + 1);

// Sort
arr.sort(); // alphabetically
arr.sort((a, b) => a - b); // ascending
arr.sort((a, b) => b - a); // descending
arr.toSorted(); // new sorted array

// String conversion
arr.toString();
arr.with(2, "kebab");

// Create arrays
const emptyArr = new Array(7); // empty array length 7
emptyArr.fill(20, 2, 6);
const xy = Array.from({ length: 7 }, () => 1);
const zw = Array.from({ length: 7 }, (_, i) => ++i);

// NodeList to Array
const movementsUI = Array.from(document.querySelectorAll(".movements__value"));
