
// Functionality: 
// When the user clicks on the profile image
// - The website will alert with the current name
// - next, the website will prompt for a new name
// - Finally, it will set the name to the new name given by the user

// Concepts:
// - JS Functions: alert(), prompt(), console.log()
// JS Variables
// - Accessing HTML elements from JS (document.getElementById())
// - Dynamic HTML editing with JS

// Step 1: Get access to the profile image HTML Element, and store the reference in a variable
// We use the ID for the the element from HTML. Exercise: verify this in the HTML code.
my_image = document.getElementById('profile_image') 

// Step 2: Print the contents of the variable to the console with console.log()

console.log(my_image)

// Step 3: Create function that asks the user for a new name, and changes the current name to that.
function changeName() {
  // Input: No input to function 
  // Output: Nothing gets returned to the main function (Programmers call it a Void function) 
  // Operation: Change current name to new name by taking value from the user. 
  // Exercise: Ask your TA why is this a void function? 
  
  // Step 3.1: Get access to the name element from HTML
  // Exercise: Find and verify this element in index.html
  current_name = document.getElementById("header_text_name")

  // Step 3.2: Alert the user with the current name 
  // Important Concept: String concatenation: when we use + sign with strings, 
  // the two words get combined. JS is smart enough to differentiate between 3 + 3 = 6, and "3" + "3" = "33"


  alert("Hello World, my name is " + current_name.innerText + "!")

  

  // Step 3.3: Ask the user for a new name. We use a pre-built from JS prompt(), that would generate a pop-up  on the screen. 
  // Whatever the user enters in the text box will be stored in the variable `new_name`




  var new_name = prompt("What is the new name?")

  


  // Step 3.4: Use console.log() to print the name to the console. 
  // Exercise: verify this prints
  // Exercise: Change this code to make it print 'The new name is ___'. Hint: Use string concatenation; look at line number 32. 
  console.log(new_name)

  // Step 3.5: Set the current_name variable variable's value to the new name entered by the user. 
  // Exercise: Remove the `.innerText` part from this code, and check the website + console.
  // Exercise: What's going wrong? why is this code breaking? Why do we need `.innerText` and not just `current_name`? 
  current_name.innerText = new_name
}

// Step 4: Link the changeName function to an eventListener for my_image variable.
// Exercise: We created the function, why bother adding this eventListener?  
my_image.addEventListener("click", changeName)
// Syntax Reference: https://www.w3schools.com/js/js_htmldom_eventlistener.asp




// Advanced: Instead of creating changeName() function separately, we can create an anonymous function within the eventListener() call.
// Anonymous function: A function that does not have any name associated with it.
// Exercise: Ask your TA where  to write an anonymous function, and where to write a named function. 
// notice that the below code does the same thing as the code above, with a little simplified logic. 

// my_image.addEventListener("click", function() {
//   current_name = document.getElementById("header_text_name")
//   alert("Hello World, my name is " + current_name.innerText + "!")
//   var new_name = prompt("What should I change the name to?")
//   console.log(new_name)
//   current_name.innerText = new_name
// })