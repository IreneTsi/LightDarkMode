## JAVASCRIPT

1. How to define a variable in JS?

const
const variables must be assigned a value when they are declared
const a = 5; // a = 5

<--------------------------------------------->

2. document.querySelector()

The querySelector() method allows you to select the first element that matches one or more CSS selectors.

//select button elements from css file
const btn = document.querySelector("button");

<--------------------------------------------->

3. addEventListener() method

The addEventListener() method attaches an event handler to a document.

Syntax: document.addEventListener(event, function)

Example:
addEventListener("click", myFunction);

// add a click event to btn element
btn.addEventListener("click", myFunction);

// add a mouseover event to btn element
btn.addEventListener("mouseover", myFunction);

<--------------------------------------------->

4. Javascript Functions

a) Javascript function is defined with the function keyword, followed by a name, followed by ()

b) Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

c) The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

d) The code to be executed, by the function, is placed inside curly brackets: {}

Syntax: function name(parameter1, parameter2) {}

Example:
// Function with parameters

function myFunction(p1, p2) {
const p = p1 + p2;
}

// Function without parameters
function myFunction() {

}

<--------------------------------------------->

5.document.body.classList.toggle("dark-mode")

//Get the <body> element:
document.body

//Toggle between adding and removing a class name from an element with JavaScript:

classList.toggle("dark-mode")

// Get the <body> element and toggle between the .dark-mode class:

document.body.classList.toggle("dark-mode");

Finally:

const btn = document.querySelector("button");

btn.addEventListener("click", myFunction);

function myFunction() {
document.body.classList.toggle("dark");
}

<--------------------------------------------->

Also, you can create Dark - Light mode using jQuery and toggle() method

Example

<script> 
        $(document).ready(function(){
            $('button').click(function(){
                var element = document.body;
                element.classList.toggle("dark"); 
            });
        });        
    </script>

<--------------------------------------------->

Also,you can create Dark - Light mode in a checkbox:

https://www.codeinwp.com/snippets/dark-mode-toggle-button-javascript/

<--------------------------------------------->
