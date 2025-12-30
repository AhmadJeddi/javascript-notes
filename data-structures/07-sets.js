// Sets notes
"use strict";

// 🔎 Set
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(new Set("melody")); // unique characters

// Convert set to array
const ordersArray = [...ordersSet];
const ordersArray2 = Array.from(ordersSet);

// Add, delete, check
ordersSet.add("Bread");
ordersSet.delete("Pizza");
console.log(ordersSet.has("Pasta"));
console.log(ordersSet.size);
// ordersSet.clear();

// Iteration
ordersSet.forEach(function (value, _value, set) {
  console.log(value);
});
