// DOM notes
"use strict";

// 🔎 DOM Basics

// Select elements
document.querySelector("button"); // first button
document.querySelectorAll("#test"); // NodeList of all #test
document.getElementById("test").textContent;
document.getElementsByClassName("test"); // HTMLCollection
document.getElementsByTagName("div"); // HTMLCollection

// Manipulate class
const btn = document.querySelector(".test");
btn.classList.add("active");
btn.classList.remove("active");
btn.classList.toggle("active");
btn.classList.contains("active");

// Manipulate attributes & styles
btn.src;
btn.getAttribute("src"); // relative
btn.style.fontFamily = "Arial";

// Event listeners
btn.addEventListener("click", function () {
  console.log("Clicked!");
});
btn.addEventListener("mouseenter", function () {
  console.log("Hover!");
});

// Document events
document.addEventListener("keypress", function (event) {
  event.preventDefault();
});
document.addEventListener("keydown", function (key) {
  if (key.key === "Escape") hide();
});

// Document structure
document.documentElement;
document.body;
document.head;

// Insert HTML
btn.innerHTML = "";
btn.insertAdjacentHTML("afterbegin", `<span>Insert HTML</span>`);

// Create elements
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'We use cookies for analytics. <button class="btn">Got it!</button>';

// Add/remove elements
btn.prepend(message); // first child
btn.append(message); // last child
btn.append(message.cloneNode(true)); // clone
btn.before(message);
btn.after(message);
message.remove();

// Styles & CSS variables
getComputedStyle(message).color;
document.documentElement.style.setProperty("--color-primary", "orangered");

// Scroll & navigation
btn.scrollIntoView({ behavior: "smooth" });

// Traversing DOM
btn.children; // direct children
btn.firstElementChild;
btn.lastElementChild;
btn.parentElement;
btn.closest(".header"); // nearest parent with class
btn.previousElementSibling;
btn.nextElementSibling;
btn.parentElement.children; // all siblings

// Convert NodeList to Array
Array.from(document.querySelectorAll(".test")); // NodeList to array

// ⚠️ Note: <a href="#"> links prevent default popup behavior
