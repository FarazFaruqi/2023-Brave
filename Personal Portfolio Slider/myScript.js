
// Functionality: 
// By default, all the portfolio answers should be invisible on the screen. This should be done via JS
// When the user slides the slider, the portfolio answers should become visible iteratively, and also become invisible.

// Step 1: Get access to all the portfolio elements using the class name
var portfolio_elements = document.getElementsByClassName("profile_element")

// Print all the portfolio elements using console.log(). This is an array containing all the portfolio elements. 
console.log(portfolio_elements)

// Step 4: Loop over all the portfolio elements, and set the CSS display property to `none`
for (var i = 0; i < portfolio_elements.length; i++) {
  // Step 4.1: Iterating over each portfolio element, set the CSS display property to `none`. This sets that portfolio element invisible. 
  // To convince yourself of this functionality, you can do this manually via Inspect element
	portfolio_elements[i].style.display = 'none'
}

// Step 5: Get the slider value with document.getElementId(), and take the value of that HTML element. 
// Exercise: Why do we do .value after getElementById()? 
let sliderValue = document.getElementById('portfolio-slider').value;

// Step 6: Create a variable to contain the value of the currentSliderValue. 
// This will track the value as the user slides on the interface.  
var currentSilderValue = 0;

// Step 7: Create a function to toggle elements' visibility. 
function slideInformation(sliderValue) {
  // Input: A variable containing the slider value. 
  // Output: None
  // Operation: As the slider value changes, toggle the profile elements' visibility. 
  console.log("Current Slider Value: " + currentSilderValue)
  console.log("New slider value: " + sliderValue)
  
  // Conditional to check the slider value as it being tracked. 
  // sliderValue: the new changed slider value after interaction with the user
  // currentSliderValue: the slider value that was tracked 
  if (sliderValue > currentSilderValue) {
    // Step 7.1: If the new slider (sliderValue) is more than the sliderValue that was in the state, 
    // make the correct profile element visible from the profile element array. 
    portfolio_elements[currentSilderValue].style.display = 'block'
    currentSilderValue  = sliderValue;
  }
  
  else {
    // Step 7.2: If the new slider (sliderValue) is less than the sliderValue that was in the state, 
    // make the correct profile element invisible from the profile element array. 
    portfolio_elements[currentSilderValue ].style.display = 'none'
    currentSilderValue = sliderValue;
  }
}