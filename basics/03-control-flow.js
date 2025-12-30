// Control flow notes
"use strict";

// 🔎 Control Flow: if, switch, loops, ternary

// if-else
if (false) {
  // continue or break
} else if (false) {
  // another condition
} else {
  // default block
}

// Ternary operator
true ? console.log("true") : console.log("false");

// switch
switch (false) {
  case false:
    break;
  default:
    console.log("default case");
}

// Loops
while (false) {} // while loop
do {} while (false); // do-while loop
for (const i of arr) {
  // iterate over array
}

// 🔎 Logical operators

// OR: returns first truthy or last value
0 || "" || null || undefined || NaN || false || "return lastElement";

// Nullish coalescing: returns first defined value
null ?? undefined ?? 0 ?? "" ?? NaN ?? false ?? "return lastElement";

// AND: returns first falsy or last value
1 && "hello" && false && "return lastElement";

// Assignment operators with logical operators
let newValue = 1;
newValue = newValue && 2; // AND assignment
newValue &&= 3; // shorthand

// Nullish assignment with objects
obj.lastName = obj.lastName ?? "Harrison";
obj.lastName2 ??= "Montgomery";
