// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.
const btn = document.querySelector("button");

// 1st solution, create a function and add a click event to a <button> element
btn.addEventListener("click", myFunction);

function myFunction() {
  document.body.classList.toggle("dark");
}

/*
//2st solution using addEventListener method

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
*/

/* 3rd solution - Get the <body> element and toggle between the .dark-mode class:

function myFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}
*/
