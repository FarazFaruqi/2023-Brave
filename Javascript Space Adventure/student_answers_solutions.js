// These JavaScript (JS) functions need to be completed to progress through the challenege.
// Each function is almost done, but needs a few things added.
// Look for the comments that say TODO and write in the correct code.
// Save this file, refresh your website, and click "Check Step" to check your answer.

/*
Step 1: Getting started

Arguments:
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

Arguments:
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

  // TODO: Update the height of the astronaut picture with the inputted height
  img.height = height;

  // TODO: Update the width of the astronaut picture with the inputted width
  img.width = width;

  // Challenge TODO: The desired final picture has a height/width ratio of 2/3
  //                  Instead of manually inputting a value for 'Height', calculate a value based on 'Width' and this ratio
  var calc_height = (width * 2) / 3;
  img.height = calc_height;
}

/*
Step 3: Astronaut ID (Border Style and Name)

Arguments:
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
  // Hint: Try the .innerText attribue
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

/*
Step 4: Cargo Bay Items

Arguments:
 None

Returns:
 None
*/
// Step 4:
function step4() {

  // This function moves a cargo item from the Launch Pad to the Cargo Bay
  function moveItem(id) {
    const cargo_bay = document.getElementById('cargo-bay');
    cargo_bay.appendChild(document.getElementById('_'+id));
  }

  const cargo_items = ['drone','rover','scout','telescope'];

  // Use a 'for' loop to go through each item in the manifest and move it to the cargo bay
  // TODO: Setup the maximum number of items
  var item_count = cargo_items.length;

  // TODO: Use the 'moveItem' function to move each item.
  //  Note: The item name itself is the arguement to the function, not the index
  for(let i = 0; i < item_count; i++)
  {
    moveItem(cargo_items[i]);
  }
}

/*
Step 5: Green Cargo Bay Items

Arguments:
 None

Returns:
 None
*/
// Step 5:
function step5() {

  // This function moves a cargo item from the Launch Pad to the Cargo Bay
  function moveItem(id) {
    const cargo_bay = document.getElementById("cargo-bay");
    cargo_bay.appendChild(document.getElementById("_" + id));
  }

  // This function checks if an item should be taken by checking its color (green items should be taken)
  //  Returns true if item should be taken, returns false if item should be left behind
  function shouldTake(id) {
    return document.getElementById(id).classList.contains("filter-green");
  }

  cargo_items = [
    "capsule",
    "lander",
    "parachute",
    "radar",
    "astronaut",
    "rocket",
  ];

  // Use a 'for' loop to go through each item in the manifest and move it to the cargo bay
  // TODO: Setup the maximum number of items
  var item_count = cargo_items.length;

  // TODO: Check each item using 'shouldTake()' and move the ones that return 'true' using 'moveItem()'
  //  Note: The item name itself is the arguement to the function, not the index
  for (let i = 0; i < item_count; i++) {
    if (shouldTake(cargo_items[i])) moveItem(cargo_items[i]);
  }
}

/*
Step 6: Voyage

Arguments:
 None

Returns:
 Array of planets to visit as planet numbers

Example:
 [4, 6, 3] represents [Mars -> Saturn -> Earth]
*/
function step6(){
  // Declare an array to hold the stops
  var trip = [];
  // Iterate through each stop selector
  for(let i = 1; i < 10; i++){
    const stop_selector = document.getElementById('_stop'+i);
    // Skip the stop if it hasn't been changed from the default value
    if(stop_selector.value != '---'){
      // TODO: Add the stop to the array
      trip.push(planet_number(stop_selector.value));
    }
  }
  // TODO: Return the array
  return trip;
}

/*
Step 6: Planet Number

Arguments:
 planet - text name of planet

Returns:
 planet number (Mercury: 1, Venus: 2, Earth: 3, etc)
*/
function planet_number(planet)
{
  switch (planet.toLowerCase()) {
    case "mercury":
      return 1;
    case "venus":
      return 2;
    case "earth":
      return 3;
    case "mars":
      return 4;
    case "jupiter":
      return 5;
    case "saturn":
      return 6;
    case "uranus":
      return 7;
    case "neptune":
      return 8;
  }
}

/*
Step 6: Distance Calculator

Arguments:
 origin - text name of origin planet
 destination - text name of destination planet

Returns:
 Distance between origin and destination (in AU)
*/
// distance_calculator(origin, destination)
function distance_calculator(origin, destination)
{
  const distances = [0.4, 0.7, 1.0, 1.5, 5.2, 9.5, 19.2, 30.1];

  return Math.abs(
    distances[planet_number(origin) - 1] - distances[planet_number(destination) - 1]
  );

}
