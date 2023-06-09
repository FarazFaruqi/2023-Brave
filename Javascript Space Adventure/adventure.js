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
      <p>Click 'Check Step' to continue. In the next steps, this will check your answer and unlock the next step if it is correct</p> \
      <p>If your answer is not correct, review your code and ask a TA for help if necessary.</p>",
  },
  1: {
    display:
      "<img id='astronaut' src='assets/astronaut.png' style='background-color:white;' height=200 width=200></src>",
    instruction:
      "<p>You can use Javascript to change and manipulate things ('elements') on your webpage.</p> \
      <p>Complete <code>Step1()<code> so that the astronaut <code>(id='astronaut')</code> is updated by the values in the boxes below <code>('size-width' and 'size-height')</code></p> \
      <p>Width: <input id='size-width'></input></p> \
      <p>Height: <input id='size-height'></input></p> \
      <p><button name='size-update' onClick='step1()'>Change Size</button></p>",
  },
  2: {
    display:
      "<img id='astronaut' src='assets/astronaut.png' style='background-color:white;' height=200 width=200></src>",
    instruction:
      "<p></p> \
      <p><input name='size-button' value='1' type='radio'><input name='size-button' value='2' type='radio'></p> \
      <p><input name='size-button' value='3' type='radio'><input name='size-button' value='4' type='radio'></p> \
      <p><button name='size-update' onClick='step2()'>Change Size</button></p>",
  },
};

// Verify student function is correct
function verifier(step) {
  switch (parseInt(step)) {
    case 0:
      return (
        document.getElementById("game-display").innerHTML ==
        payload[0]["display"]
      );
    case 1:
      return (
        document.getElementById("astronaut").width ==
          document.getElementById("size-width").value &&
        (document.getElementById("astronaut").height =
          document.getElementById("size-height").value)
      );
    default:
      return false;
  }
}
// Sets the menu button for 'step' enabled/disabled based on 'state'
// True: Enable
// False: Disable
function set_menu(step, state) {
  // Create next button's id
  const btn = "menu" + step;
  console.log(btn);
  // Set button to enabled
  if (state) document.getElementById(btn).removeAttribute("disabled");
  else document.getElementById(btn).setAttribute("disabled", "");
}

function set_step(step) {
  document.getElementById("game-display").innerHTML = payload[step]["display"];
  document.getElementById("game-text").innerHTML = payload[step]["instruction"];
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
    document.getElementById("game-message").innerHTML =
      "Step " + String(step) + " is correct!";
    document.getElementById("game-message").className = "answer-correct";
    max_step = parseInt(step) + 1;
    set_menu(max_step, true);
  } else {
    document.getElementById("game-message").innerHTML =
      "Step " + String(step) + " is not correct. Please review your answer.";
    document.getElementById("game-message").className = "answer-incorrect";
  }
  localStorage.setItem("max-step", max_step);
}

// Initialize the page on load
function page_load() {
  console.log(localStorage.length + " item(s) in Local Storage");
  // Add button click listener to menu buttons
  var btns = document.getElementsByClassName('button-menu');
  for (var i = 0; i < btns.length; i++)
  {
    btns[i].addEventListener('click',menu_handler);
  }
  // Get current and farthest step state
  var step = localStorage.getItem("curr-step");
  var max_step = localStorage.getItem("max-step");
  if (step === null || max_step === null) {
    step = 0;
    max_step = 0
    localStorage.setItem("curr-step", step);
    localStorage.setItem("max-step", max_step);
  }
  else
  {
    for (let i = 1; i <= max_step; i++)
      set_menu(i, true);
  }
  set_step(step);
  console.log("page loaded at step " + step);
}

// Set the step based on the menu button clicked
function menu_handler(btn){
  const step = parseInt(btn.srcElement.id.replace('menu',''));
  set_step(step);
  document.getElementById("game-message").innerHTML = ".";
  document.getElementById("game-message").className = "";
  localStorage.setItem('curr-step',step);
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

function get_step()
{
  console.log('Current: ' + localStorage.getItem('curr-step'));
  console.log('Max: ' + localStorage.getItem("max-step"));
}