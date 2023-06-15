// Space Adventure control script
// You do not (and should not) need to make any changes here
// You are welcome to explore!

// Note: This script uses Local Storage instead of cookies to persist data through page loads.
//       We choose this because the Chrome browser does not support cookies for local webpages

const payload = {
  0: {
    display: "<b>Welcome to Space Adventure</b>",
    instruction:
      "<p>Progress through Space Adventure by finishing the code stubs in <span class='code'><code>student_answers.js</code></span>.</p> \
      <p>Click 'Check Step' to continue. In the next steps, this button will check your answer and unlock the next step if it is correct.</p> \
      <p>If your answer is not correct, review your code and ask a TA for help if necessary.</p>",
    validation: function () {
      return (
        document.getElementById("game-display").innerHTML ==
        payload[0]["display"]
      );
    },
  },
  1: {
    display:
      "<div class='container' style='align-items:center'><img id='venus' src='assets/1-venus.svg' class='svg filter-red' height=75 width=75><b id='venus-label'>Venus</b></div> \
    <div class='container' style='align-items:center'><img id='earth' src='assets/2-earth.svg' class='svg filter-blue' height=150 width=150><b id='earth-label'>Earth</b></div> \
    <div class='container' style='align-items:center'><img id='neptune' src='assets/3-neptune.svg' class='svg filter-green' height=100 width=100><b id='neptune-label'>Neptune</b></div> \
    ",
    instruction:
      "<p>This step will introduce you to a few JavaScript fundamentals, and show you how they allow you to interact with what is shown on your webpage.</p>\
    <p>Open <span class='code'><code>students_answers.js</code></span> and locate the function called <span class='code'><code>step1()</code></span> - you will see a line with <span class='code'><code>function step1(event)</code></span>. You will add code to this section to complete the steps.</p> \
    <p>We have set up the code so that the element id of the planet clicked will populate the <span class='code'><code>planet</code></span> variable.</p>\
    <p><b>Tasks - Step 1:</b><p><ul> \
    <li>Use <code><span class='code'>console.log()</span></code> to print the id of the planet clicked on</li> \
    <li>Use <code><span class='code'>alert()</span></code> to display the id of the planet clicked on to the website user</li> \
    <li><b>Challenge:</b> Display the planet's label text in the alert (instead of the planet id)</li> \
    <li>Use <code><span class='code'>prompt()</span></code> to ask the user for a new planet name, and store this in the variable <code><span class='code'>new_name</span></code></li> \
    <li>Update the label of the selected planet to what the user input</li>",
    script: function () {
      const planets = ["venus", "earth", "neptune"];
      planets.forEach((p) => {
        document.getElementById(p).addEventListener("click", step1);
      });
    },
    validation: function () {
      return (
        document.getElementById("venus-label").innerText != "Venus" ||
        document.getElementById("earth-label").innerText != "Earth" ||
        document.getElementById("neptune-label").innerText != "Neptune"
      );
    },
  },
  2: {
    display:
      "<div class='container' style='align-items:center'> \
      <b style='font-size:1.5em;padding:0.5em;'>Astronaut ID</b> \
      <div class='border-box' style='width:200px;height:300px;'> \
      <img id='astronaut' src='assets/17-astronaut.svg' class='filter-blue' height=100px width=100px></div> \
      </div>",
    //<b id='name-label' style='font-size:2em'>Name</b></div>",
    instruction:
      "<p>Now that you know the basics, you can use JavaScript to build increasingly complex interactions. We'll use these skills to complete this adventure and send our astronaut to space!</p> \
      <p>Our first task is to fix our astronaut's ID card picture and name. Find <code><span class='code'>function step2()</span></code> in <code><span class='code'>student_answers.js</span></code> and add your own code to complete the requirements.</p>\
      <p><b>Tasks - Step 2:</b><p><ul> \
      <li>Use your browser's inspection tools to find the element ID of the astronaut picture. Take this ID and update function that finds the astronaut picture element.</li> \
      <li>Declare a variable to hold the value of the picture height you enter in the 'Height' input box</li> \
      <li>Declare a variable to hold the value of the picture width you enter in the 'Width' input box, and store the value entered in the 'Width' input box</li> \
      <li>Set the height value of the astronaut picture to the value of the height variable</li> \
      <li>Set the width value of the astronaut picture to the value of the width variable</li> \
      <li>Experiment with height and width inputs to get the perfectly sized astronaut picture!</li> \
      <li><b>Challenge</b>: The ideal picture has a height/width ratio of 3/2 (example: if the height is 300, width will be 200). Instead of inputting both values, use this ratio to calculate and set the photo width based on the inputted height.</li> \
      </ul>\
      <p>Height: <input id='size-height'></input></p> \
      <p>Width: <input id='size-width'></input></p> \
      <p><button name='size-update' onClick='step2();store_astronaut();'>Change Size</button></p>",
    script: function () {
      // Update the image size to what it was when moving between menu buttons
      const img = document.getElementById("astronaut");
      if (localStorage.getItem("a-passing") == "true") {
        img.height = localStorage.getItem("a-height");
        img.width = localStorage.getItem("a-width");
      }
    },
    validation: function () {
      const img = document.getElementById("astronaut");
      const w = document.getElementById("size-width");
      const h = document.getElementById("size-height");
      return (
        (img.width == w.value && img.height == h.value) ||
        (img.width == Math.floor((h.value * 2) / 3) && img.height == h.value)
      );
    },
  },
  3: {
    display:
      "<div class='container' style='align-items:center'> \
      <b style='font-size:1.5em;padding:0.5em;'>Astronaut ID</b> \
      <div id='border' class='border-box' style='width:200px;height:300px;'> \
      <img id='astronaut' src='assets/17-astronaut.svg' class='filter-blue' height=100px width=100px></div> \
      <span id='astronaut-name' style='font-size:1.5em;padding:0.5em;'>Name Goes Here</span> \
      </div>",
    instruction:
      "<p>Now that we have the photo sized right, let's pick a new border color and pick a name for our explorer.</p> \
      <p>Find <code><span class='code'>step3_border_color</span></code> and <code><span class='code'>step3_border_name</span></code> and complete the code snippets provided to finish the tasks.</p> \
      <p><b>Tasks - Step 3:</b><p><ul> \
      <b>Border Color</b> \
      <li>Find the element id of the ID border and store it in a variable</li> \
      <li>Find the element id of the 'Color Picked' label and store it in a variable</li> \
      <li>Prompt the user to enter a color and store their response in a variable</li> \
      <li>Update the ID border color to be the color entered by the user</li> \
      <li>Update the border color label to the color entered by the user</li> \
      <li><b>Challenge: </b> Update the background color of the color label to the entered color</li> \
      <p></p><b>Astronaut Name</b> \
      <li>Find the element id of the Name Label and store it in a variable</li> \
      <li>Find the element id of the name input box and store it in a variable</li> \
      <li>Update the value of the Name Label with the value entered in the input box</li> \
      <li><b>Challenge: </b> Add a stylization (such as 'Ms', 'Mr', 'Capt') to the displayed name</li></ul> \
      <div class='container-row' style='justify-content:flex-start;'> \
      <b>Color Picked:</b><span id='color-label' class='border-box' style='border-style:solid;border-width:2px;min-width:100px;min-height:20px;margin-left:10px;margin-right:10px;padding-right:5px;padding-left:5px;'></span> \
      </div> \
      <div class='container-row' style='justify-content:flex-start;'> \
      <p><b>Astronaut Name:</b><input id='name-input' style='min-width:100px;min-height:20px;margin-left:10px;margin-right:10px;padding-right:5px;padding-left:5px;'></input></p> \
      </div> \
      <p><div> \
      <button onClick='step3_border_color();'>Change Color</button> \
      <button onClick='step3_border_name();store_astronaut();'>Change Name</button> \
      </p></div> \
      ",
    script: function () {
      // Update the image size to what it was when moving between menu buttons
      const img = document.getElementById("astronaut");
      if (localStorage.getItem("a-passing") == "true") {
        img.height = localStorage.getItem("a-height");
        img.width = localStorage.getItem("a-width");
      }
    },
    validation: function () {
      const border = document.getElementById("border");
      const color_picked = document.getElementById("color-label");
      const name = document.getElementById("astronaut-name");
      const name_input = document.getElementById("name-input");
      return (
        border.style.borderColor == color_picked.innerText &&
        name.innerText.includes(name_input.value) &&
        color_picked.innerText.length &&
        name_input.value.length
      );
    },
  },
};

// Verify student function is correct
function verifier(x) {
  const step = parseInt(x);
  if ("validation" in payload[step]) {
    return payload[step]["validation"]();
  }
  return false;
}
// Sets the menu button for 'step' enabled/disabled based on 'state'
// True: Enable
// False: Disable
function set_menu(step, state) {
  // Create next button's id
  const btn_name = "menu" + step;
  // Find next button
  const btn = document.getElementById(btn_name);
  if (btn === null) return false;
  // Set button to enabled
  if (state) btn.removeAttribute("disabled");
  else btn.setAttribute("disabled", "");
  return true;
}

function set_step(step) {
  document.getElementById("game-display").innerHTML = payload[step]["display"];
  document.getElementById("game-text").innerHTML = payload[step]["instruction"];
  if ("script" in payload[step]) {
    payload[step]["script"]();
  }
}

// Submit button controller
// Reads state of webpage and decides on next action
function evaluate_answers() {
  // Retrieve stored step. If no stored step, set to 0 (initial)
  var step = localStorage.getItem("curr-step");
  var max_step = localStorage.getItem("max-step");
  if (step === null || max_step === null) {
    step = 0;
    max_step = 0;
  }

  // Evaluate the answer
  if (verifier(step)) {
    if (step > 0) {
      document.getElementById("game-message").innerHTML =
        "Step " + String(step) + " is correct!";
      document.getElementById("game-message").className = "answer-correct";
    }

    // If the menu option for the next step exists, update the max step obtained
    if (set_menu(parseInt(step) + 1, true)) {
      max_step = parseInt(step) + 1;
    } else {
      alert("Congrats, you've completed the challenge!");
    }
  } else {
    document.getElementById("game-message").innerHTML =
      "Step " + String(step) + " is not correct. Please review your answer.";
    document.getElementById("game-message").className = "answer-incorrect";
  }
  localStorage.setItem("max-step", max_step);
}

// Initialize the page on load
function page_load() {
  console.log("Welcome to Space Adventure!");
  // Add button click listener to menu buttons
  var btns = document.getElementsByClassName("button-menu");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", menu_handler);
  }
  // Get current and farthest step state
  var step = localStorage.getItem("curr-step");
  var max_step = localStorage.getItem("max-step");
  if (step === null || max_step === null) {
    step = 0;
    max_step = 0;
    localStorage.setItem("curr-step", step);
    localStorage.setItem("max-step", max_step);
  } else {
    for (let i = 1; i <= max_step; i++) set_menu(i, true);
  }
  set_step(step);
}

// Set the step based on the menu button clicked
function menu_handler(btn) {
  const step = parseInt(btn.srcElement.id.replace("menu", ""));
  set_step(step);
  document.getElementById("game-message").innerHTML = "&nbsp;";
  document.getElementById("game-message").className = "";
  localStorage.setItem("curr-step", step);
}

function restart() {
  if (
    confirm(
      "Reset the game? Your code in student_answers.js will not be deleted."
    )
  ) {
    localStorage.clear();
    location.reload();
    alert("Game Reset");
  }
}

function get_step() {
  console.log("Current: " + localStorage.getItem("curr-step"));
  console.log("Max: " + localStorage.getItem("max-step"));
}

function store_astronaut() {
  const img = document.getElementById("astronaut");
  if (img != null) {
    localStorage.setItem("a-height", img.height);
    localStorage.setItem("a-width", img.width);
    localStorage.setItem("a-passing", verifier(2));
  }

  const name_lbl = document.getElementById("astronaut-name");
  if (name_lbl != null) {
    localStorage.setItem("a-name", name_lbl.innerText);
    localStorage.setItem("a-name-passing", verifier(3));
  }
}
