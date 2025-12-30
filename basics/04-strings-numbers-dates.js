// Strings, Numbers, Dates notes
"use strict";

// 🔎 Strings

const text = "Hello WORLD";

// Access characters
text[0];
[...text]; // spread into array
text.length;

// Case methods
text.toUpperCase();
text.toLowerCase();

// Extract parts
text.slice(0);
text.slice(-2);

// Replace
text.replace("WORLD", "GOD");          // replace first occurrence
text.replace(/WORLD/gi, "gate");       // regex replace
text.replaceAll("WORLD", "GOD");       // replace all occurrences

// Repeat
text.repeat(3);

// Search
text.indexOf("l");
text.lastIndexOf("L");
text.includes("A");

// Check start/end
text.startsWith("H");
text.endsWith("H");

// Padding
text.padStart(15, "+"); // pad start
text.padEnd(15, "+");   // pad end

// Trim whitespace
text.trim();

// Convert string ↔ array
const str = text.split(" "); // string to array
str.join(" ");               // array to string

// 🔎 Numbers

Number.parseInt("  2.5rem  ");        // parse integer
Number.parseFloat("  2.5rem  ");      // parse float
Number.isFinite(20);                  // check if number
+(2.345).toFixed(2);                  // round decimal, convert to number

const num = 3884764.23;
const options = {
  style: "currency",
  currency: "EUR",
  // unit: "celsius", // optional for units
  // useGrouping: false,
};

// Format numbers
new Intl.NumberFormat("en-US", options).format(num);
new Intl.NumberFormat(navigator.language, options).format(num);

// Scientific notation
let yy = 123e5;   // 12300000
let zz = 123e-5;  // 0.00123

// 🔎 Dates

new Date();                          // current date
new Date("Aug 02 2020 18:05:41");    // date from string
new Date("December 24, 2015");
new Date(0);                         // unix epoch
new Date(2142256980000);             // timestamp
Date.now();                           // current timestamp

const future = new Date(2037, 10, 19, 15, 23);
future.getFullYear();  // get year
future.getMonth();     // month is zero-based
future.getDate();
future.getDay();
future.getHours();
future.getMinutes();
future.getSeconds();
future.toISOString();
future.getTime();      // timestamp

future.setFullYear(2040);
future.setMonth(8);    // set month (0-based)

const now = new Date();
const options2 = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric",
  year: "numeric",
  weekday: "long",
};
const locale = navigator.language;   // user's locale
new Intl.DateTimeFormat(locale, options2).format(now); // format date/time