
// Functionality: 
// By default, all the portfolio answers should be invisible on the screen. This should be done via JS
// When the user clicks the button, all the portfolio answers should become visible.
// This should be a toggle button. 

// Step 1: Get access to all the portfolio elements using the class name
var portfolio_elements = document.getElementsByClassName("profile_element")

// Log all the portfolio elements using console.log(). This is an array containg all the portfolio elements.
console.log(portfolio_elements)

// Step 3: Create a toggle variable. This will track whether the portfolio elements are visible or invisible. 

var displayToggle = ''

// Step 4: Loop over all the portfolio elements, and set the CSS display property to `none`
for (var i = 0; i < portfolio_elements.length; i++) {
  // Step 4.1: Iterating over each portfolio element, set the CSS display property to `none`. This sets that portfolio element invisible. 
  // To convince yourself of this functionality, you can do this manually via Inspect element
	portfolio_elements[i].style.display = 'none'
}
// Step 5: Set the toggle variable to off since all the portfolio elements are invisible now. 
displayToggle = 'off'

// Check the button element in HTML. Notice that the onclick property has a function name `toggleInformation()`.
// This is to let the browser know, that whenever this button is clicked, it has to run this particular function. 

// Step 6: Define the toggleInformation() function
function toggleInformation() {
  // Input: None
  // Output: None
  // Operation: This function is run when the button is clicked. Check if the displayToggle variable is off or on. 
  // If it is set to `off`, that means currently, all the portfolio elements are invisible. We need to set them to be visible. 
  // If it is set to `on`, that means currently, all the portfolio elements are visible. We need to set all of them to be invisible. 

  //  Use a conditional to check displayToggle value. 
  if(displayToggle == 'off') {
    // Step 6.1.If set to `off`, toggle it to be visible by setting the CSS display property to be `block`
    for (var i = 0; i < portfolio_elements.length; i++) {
      portfolio_elements[i].style.display = 'block'
    } 
    // Since all the portfolio elements are currently visible, set the toggle variable to `on`.
    displayToggle = 'on'  
  }
  
  // Conditional continued:
  else if(displayToggle == 'on') {
    // Step 6.2: Else if it is set to `on`, toggle the value by setting the CSS display property to be `none`.
    for (var i = 0; i < portfolio_elements.length; i++) {
      portfolio_elements[i].style.display = 'none'    
    }
    // Since all the portfolio elements are currently invisible, set the toggle variable to `off`.
    displayToggle = 'off'
  }
}