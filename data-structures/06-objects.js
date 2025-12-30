// Objects notes
"use strict";

// 🔎 Objects
const weekdays = ["sun", "mon", "tus"];

const obj = {
  name: "melody",
  age: 24,
  ["address"]: "iran", // dynamic property
  [weekdays[1]]: "open", // computed property
  weekdays,
  ageCal() {
    return this.age; // method
  },
};

// Access & modify
obj.food = "kebab";
console.log(obj.name);
console.log(obj["name"]);

// Delete properties
delete obj.food;
delete obj["food"];

// Copying objects
const objCopy = { ...obj };
const { name: firstName = "anyone" } = obj;

// Object keys/values
const objKeys = Object.keys(obj);
const objValues = Object.values(obj);
const objEntries = Object.entries(obj);

// Convert array to object
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500],
];
const myObj = Object.fromEntries(fruits);

// Object.assign
const simpleObjectCopy = Object.assign({}, obj);

// Optional chaining & nullish coalescing
obj.ageCal?.() ?? console.log("ageCal not found");
obj.firstName ??= "ahmad";

// Iteration
for (const [key, value] of Object.entries(obj)) {
}

// Convert object to Map
const obj2map = new Map(Object.entries(obj));
