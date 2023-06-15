// These JavaScript (JS) functions need to be completed to progress through the challenege.
// Each function is almost done, but needs a few things added.
// Look for the comments that say TODO and write in the correct code.
// Save this file, refresh your website, and click "Check Step" to check your answer.

/*
Step 1: Getting started

Arguements:
 event: context information from the element that was clicked

Returns:
 None
*/
function step1(event) {
  // Get the HTML id of the planet that was clicked (given to us in the 'event' arguement)
  var planet = event.srcElement.id;

  // TODO: Print the id of the planet to the console using 'console.log()'
  console.log(planet);

  // TODO: Alert the visitor with a message about which planet was clicked using 'alert()'
  // Challenge TODO: Update this code to display the planet's label text in this alert (instead of the planet id)
  const message = "You have clicked on ";
  alert(message + planet);
  // Challenge
  alert(message + document.getElementById(planet + "-label").innerText);

  // TODO: Prompt the user for a new name for the planet they clicked and update the displayed name using 'prompt()'
  // Info: The planet label id's are 'venus-label', 'earth-label', and 'neptune-label'
  const label = planet + "-label";
  var new_name = prompt("What should this planet be called?");
  document.getElementById(label).innerText = new_name;
}

/*
Step 2: Astronaut ID (Picture Size)

Arguements:
 None

Returns:
 None
*/
function step2() {
  // TODO: Find the element id of the astronaut picture, and update the getElementById() function
  // Hint: Use the 'inspect' feature in your browser
  var img = document.getElementById("astronaut"); //getElementById('');

  // TODO: Declare another variable and store the value of the 'Height' input box in it
  var height = document.getElementById("size-height").value;

  // TODO: Declare a variable (use a descriptive name) and store the value of the 'Width' input box in it
  // /* Declare Variable */ = document.getElementById('size-width').value;
  var width = document.getElementById("size-width").value;

  // TODO: Update the width of the astronaut picture with the inputted width
  img.height = height;

  // TODO: Update the height of the astronaut picture with the inputted width
  img.width = width;

  // Challenge TODO: The desired final picture has a height/width ratio of 2/3
  //                  Instead of manually inputting a value for 'Height', calculate a value based on 'Width' and this ratio
  var calc_width = (height * 2) / 3;
  img.width = calc_width;
}

/*
Step 3: Astronaut ID (Border Style and Name)

Arguements:
 None

Returns:
 None
*/
// Step 3:
function step3_border_color() {
  // TODO: Find the element id of the astronaut picture border, and update the getElementById() function
  // Hint: Use the 'inspect' feature in your browser
  const border = document.getElementById("border");

  // TODO: Find the element id of the color display box and store it in a variable
  const color_picked = document.getElementById("color-label");

  // TODO: Define a variable for your border color, and prompt the user for a color
  // Hint: Find the colors you can use here - https://www.w3schools.com/tags/ref_colornames.asp
  const border_color = prompt("Enter a color");

  // TODO: Set the border color to what the user entered
  border.style.borderColor = border_color;

  // TODO: Update the color label with the name of the color chosen
  color_picked.innerText = border_color;

  // Challenge TODO: Update the background of the color label with the color chosen
  color_picked.style.backgroundColor = border_color;
}

function step3_border_name() {
  // TODO: Find the element id of the astronaut name label and store it in a variable
  const astro_name = document.getElementById("astronaut-name");

  // TODO: Find the element id of the astronaut name input box and store it as a variable
  const astro_input = document.getElementById("name-input");

  // Update the astronaut's name label with the value entered in the input box
  astro_name.innerText = astro_input.value;

  // Challenge TODO: Add a prefix (like 'CAPTAIN') or other stylization to the astronaut's label
  astro_name.innerText = 'CAPT ' + astro_input.value;
}
