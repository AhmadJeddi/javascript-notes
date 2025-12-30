// Maps notes
"use strict";

// 🔎 Map
const map = new Map();
map.size;
map.set(1, "2");
map.set("1", true);
map.set("name", "melody").set("age", 24).set({ 1: 2 }, [1, 2]);
map.delete("1");
map.get("name");
map.has("age");
map.clear();

// Example with question
const question = new Map([
  ["question", "What"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);

const arr1 = [...question]; // Convert map to array
const obj1 = new Map(Object.entries(obj)); // Convert object to map

// Iteration
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
currencies.forEach(function (value, key, map) {
  console.log(key, value);
});
