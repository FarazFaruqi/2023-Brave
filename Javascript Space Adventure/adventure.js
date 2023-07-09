// Space Adventure control script
// You do not need to (and should not) make any changes here
// You are welcome to explore!

// Note: This script uses Local Storage instead of cookies to persist data through page loads.
//       We choose this because the Chrome browser does not support cookies for local webpages

const payload = {
  0: {
    display: "",
    instruction:
      "<p>Progress through Space Adventure by finishing the code stubs in <code>student_answers.js</code>.</p> \
      <p>Click 'Check Step' to continue. In the next steps, this button will check your answer and unlock the next step if it is correct.</p> \
      <p>If your answer is not correct, review your code and ask a TA for help if necessary.</p> \
      <p>You can reset the game by clicking the 'Restart' button. This will only reset the game state and will not delete or modify your code.</p>",
    validation: function () {
      return (
        document.getElementById("game-display").innerHTML ==
        payload[0]["display"]
      );
    },
  },
  1: {
    display:
      " \
      <div class='container' style='align-items:center'><img id='venus' src='assets/1-venus.svg' class='svg filter-red' height=75 width=75><b id='venus-label'>Venus</b></div> \
    <div class='container' style='align-items:center'><img id='earth' src='assets/2-earth.svg' class='svg filter-blue' height=150 width=150><b id='earth-label'>Earth</b></div> \
    <div class='container' style='align-items:center'><img id='neptune' src='assets/3-neptune.svg' class='svg filter-green' height=100 width=100><b id='neptune-label'>Neptune</b></div> \
    ",
    instruction:
      "<p>This step will introduce you to a few JavaScript fundamentals, and show you how they allow you to interact with what is shown on your website.</p>\
    <p>Open <code>students_answers.js</code> and locate the function called <code>step1()</code> - you will see a line with <code>function step1(event)</code>. You will add code to this section to complete the task.</p> \
    <p>We have set up the code so that the element id of the planet clicked will populate the <code>planet</code> variable.</p>\
    <div class='todo-box'><p><b>Tasks - Step 1:</b><p><ul> \
    <li>Use <code>console.log()</code> to print the id of the planet clicked on</li> \
    <li>Use <code>alert()</code> to display the id of the planet clicked on to the website user</li> \
    <li><b>Challenge:</b> Display the planet's label text in the alert (instead of the planet id)</li> \
    <ul><li>Example: Display 'Neptune' (the label text) instead of 'neptune' (the planet element id)</li></ul> \
    <li>Use <code>prompt()</code> to ask the user for a new planet name, and store this in the variable <code>new_name</code></li> \
    <li>Update the label of the selected planet to what the user input</li></ul></p></div>",
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
      " \
      <div class='container' style='align-items:center'> \
      <b style='font-size:1.5em;padding:0.5em;'>Astronaut ID</b> \
      <div class='border-box' style='width:200px;height:300px;'> \
      <img id='astronaut' src='assets/17-astronaut.svg' class='filter-blue' height=100px width=100px></div> \
      </div>",
    //<b id='name-label' style='font-size:2em'>Name</b></div>",
    instruction:
      "<p>Now that you know the basics, you can use JavaScript to build increasingly complex interactions. We'll use these skills to complete this adventure and send our astronaut to space!</p> \
      <p>Our first task is to fix our astronaut's ID card picture and name. Find <code>function step2()</code> in <code>student_answers.js</code> and add your own code to complete the task.</p>\
      <div class='todo-box'><p><b>Tasks - Step 2:</b><p><ul> \
      <li>Use your browser's inspection tools to find the element ID of the astronaut picture. Take this ID and update function that finds the astronaut picture element.</li> \
      <li>Declare a variable to hold the value of the picture height you enter in the 'Height' input box</li> \
      <li>Declare a variable to hold the value of the picture width you enter in the 'Width' input box, and store the value entered in the 'Width' input box</li> \
      <li>Set the height value of the astronaut picture to the value of the height variable</li> \
      <li>Set the width value of the astronaut picture to the value of the width variable</li> \
      <li>Experiment with height and width inputs to get the perfectly sized astronaut picture!</li> \
      <li><b>Challenge</b>: The ideal picture has a height/width ratio of 3/2 (example: if the height is 300, width will be 200). Instead of inputting both values, use this ratio to calculate and set the photo width based on the inputted height.</li> \
      </ul></p>\
      <p>Height: <input id='size-height'></input></p> \
      <p>Width: <input id='size-width'></input></p> \
      <p><button name='size-update' class='button button-submit' onClick='step2();store_astronaut();'>Change Size</button></p></div>",
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
      " \
      <div class='container' style='align-items:center'> \
      <b style='font-size:1.5em;padding:0.5em;'>Astronaut ID</b> \
      <div id='border' class='border-box' style='width:200px;height:300px;'> \
      <img id='astronaut' src='assets/17-astronaut.svg' class='filter-blue' height=100px width=100px></div> \
      <span id='astronaut-name' style='font-size:1.5em;padding:0.5em;'>Name Goes Here</span> \
      </div>",
    instruction:
      "<p>Now that we have the photo sized right, let's pick a new border color and pick a name for our explorer.</p> \
      <p>Find <code>step3_border_color</code> and <code>step3_border_name</code> and complete the code snippets provided to finish the tasks.</p> \
      <p>Code in <code>step3_border_color()</code> will execute when you click the 'Change Color' button.</p> \
      <p>Code in <code>step3_border_name()</code> will execute when you click the 'Change Name' button.</p> \
      <div class='todo-box'><p><b>Tasks - Step 3:</b><p><ul> \
      <li><b>Border Color</b></li> \
      <ul> \
      <li>Find the element id of the ID border and store it in a variable</li> \
      <li>Find the element id of the 'Color Picked' label and store it in a variable</li> \
      <li>Prompt the user to enter a color and store their response in a variable</li> \
      <li>Update the ID border color to be the color entered by the user</li> \
      <li>Update the border color label to the color entered by the user</li> \
      <li><b>Challenge: </b> Update the background color of the color label to the entered color</li> \
      </ul> \
      <li><b>Astronaut Name</b></li> \
      <ul> \
      <li>Find the element id of the Name Label and store it in a variable</li> \
      <li>Find the element id of the name input box and store it in a variable</li> \
      <li>Update the value of the Name Label with the value entered in the input box</li> \
      <li><b>Challenge: </b> Add a stylization (such as 'Ms', 'Mr', 'Capt') to the displayed name</li></ul> \
      </ul> \
      <div class='container-row' style='justify-content:flex-start;'> \
      <p><b>Color Picked:</b></p><span id='color-label' class='border-box' style='border-style:solid;border-width:2px;min-width:100px;min-height:20px;margin-left:10px;margin-right:10px;padding-right:5px;padding-left:5px;'></span> \
      </div> \
      <div class='container-row' style='justify-content:flex-start;'> \
      <p><b>Astronaut Name:</b><input id='name-input' style='min-width:100px;min-height:20px;margin-left:10px;margin-right:10px;padding-right:5px;padding-left:5px;'></input></p> \
      </div> \
      <p><div> \
      <button class='button button-submit' onClick='step3_border_color();'>Change Color</button> \
      <button class='button button-submit' onClick='step3_border_name();store_astronaut();'>Change Name</button> \
      </p></div></div> \
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
  4: {
    display:
      " \
      <div class='border-box' style='min-width:180px;min-height:180px'><b style='margin:5px;'>Launch Pad</b><div id='launch-pad' class='container-row' style='flex-wrap:wrap;align-items:end'> \
        <div id='_drone'><div class='container-item'><img src='assets/32-ufo.svg' id='drone' height=75 width=75 class='filter-blue'><p>Drone</p></div></div> \
        <div id='_rover'><div class='container-item'><img src='assets/27-mars rover.svg' id='rover' height=75 width=75 class='filter-blue'><p>Rover</p></div></div> \
        <div id='_scout'><div class='container-item'><img src='assets/29-moonwalker.svg' id='scout' height=75 width=75 class='filter-blue'><p>Scout</p></div></div> \
        <div id='_telescope'><div class='container-item'><img src='assets/39-telescope.svg' id='telescope' height=75 width=75 class='filter-blue'><p>Telescope</p></div></div> \
      </div></div> \
      <div class='border-box' style='min-width:180px;min-height:180px'><b style='margin:5px;'>Cargo Bay</b><div id='cargo-bay' class='container-row' style='flex-wrap:wrap;align-items:end'> \
        \
      </div></div> \
    ",
    instruction:
      "<p>Now we're ready to pack up the ship.</p><p>On the Launch Pad is a collection of items we need to take with us, and code that contains a list of them. Your objective is to move the items (using Javascript) from the Launch Pad to the Cargo Bay. \
      <p>We've provided some code to help you along the way in <code>step4()</code>. Remember that a <code>for</code> loop has three main arguements: the inital condition (initializer), the continuing condition (condition), and the increment. We almost always set the initial condition to 0 (starting at the beginning of the list) and the increment to add one each time (so that we iterate over every item). The continuing condition can be a bit more tricky.</p> \
      <div class='todo-box'><p><b>Tasks - Step 4:</b><p><ul> \
      <li>Create a variable and set its value to the number of items in the manifest list</li> \
      <li>Create a <code>for</code> loop, using the variable you created above in the continuing condition</li> \
      <li>In the body of the <code>for</code> loop, use the <code>moveItem()</code> function provided to move each item from the Launch Pad to the Cargo Bay</li> \
      </ul></p> \
      <button class='button button-submit' onClick='step4();'>Move Items</button></div>",
    script: function () {},
    validation: function () {
      return (
        document.getElementById("launch-pad").children.length == 0 &&
        document.getElementById("cargo-bay").children.length > 0
      );
    },
  },
  5: {
    display:
      " \
      <div class='border-box' style='min-width:180px;min-height:180px'><b style='margin:5px;'>Launch Pad</b><div id='launch-pad' class='container-row' style='flex-wrap:wrap;align-items:end'> \
        <div id='_capsule'><div class='container-item'><img src='assets/34-capsule.svg' id='capsule' height=75 width=75 class='filter-blue'><p>Capsule</p></div></div> \
        <div id='_lander'><div class='container-item'><img src='assets/36-lander.svg' id='lander' height=75 width=75 class='filter-green'><p>Lander</p></div></div> \
        <div id='_parachute'><div class='container-item'><img src='assets/37-capsule parachute.svg' id='parachute' height=75 width=75 class='filter-green'><p>Parachute</p></div></div> \
        <div id='_radar'><div class='container-item'><img src='assets/41-radar.svg' id='radar' height=75 width=75 class='filter-blue'><p>Radar</p></div></div> \
        <div id='_astronaut'><div class='container-item'><img src='assets/45-astronaut.svg' id='astronaut' height=75 width=75 class='filter-green'><p>Astronaut</p></div></div> \
        <div id='_rocket'><div class='container-item'><img src='assets/47-rocket.svg' id='rocket' height=75 width=75 class='filter-blue'><p>Rocket</p></div></div> \
      </div></div> \
      <div class='border-box' style='min-width:180px;min-height:180px'><b style='margin:5px;'>Cargo Bay</b><div id='cargo-bay' class='container-row' style='flex-wrap:wrap;align-items:end'> \
        \
      </div></div> \
    ",
    instruction:
      "<p>We have a few more things to bring on to the ship. However, this time there are a few things that will be left behind.</p> \
      <p>We've colored the ones to take green, and added a function called <code>shouldTake()</code> to tell you if an item should be included. Modify the code in <code>step5()</code> to move all the green items from the Launch Pad to the Cargo Bay. You can re-use some of the code you developed in <code>step4()</code>.</p> \
      <div class='todo-box'><p><b>Tasks - Step 5:</b><p><ul> \
      <li>Create a variable and set its value to the number of items in the manifest list</li> \
      <li>Create a <code>for</code> loop, using the variable you created above in the continuing condition</li> \
      <li>In the body of the <code>for</code> loop, use the <code>moveItem()</code> function provided to move each item we wish to take (check each with <code>shouldTake()</code>) from the Launch Pad to the Cargo Bay</li> \
      </ul></p> \
      <button class='button button-submit' onClick='step5();'>Move Items</button></div>",
    script: function () {},
    validation: function () {
      // check that there are no green items in launch pad and only green items in cargo bay
      function shouldTake(id) {
        return document.getElementById(id).classList.contains("filter-green");
      }
      let cargo = Array.from(document.getElementById("cargo-bay").children).map(
        (x) => x.id.replace("_", "")
      );
      let pad = Array.from(document.getElementById("launch-pad").children).map(
        (x) => x.id.replace("_", "")
      );

      // All items in cargo bay should be taken, and none of the pad items should be
      return cargo.every(shouldTake) && !pad.some(shouldTake);
    },
  },
  6: {
    display:
      " \
      <div class='container-item' id='_sun'><img src='assets/7-sun.svg' class='filter-orange' width=150 height=150><div><p><b>Sun</b></p></div></div> \
      <div class='container-item' id='_mercury'><div class='container-row'><img src='assets/19-extraterrestrial head.svg' class='filter-platinum alien' width=20 height=20 style='visibility:hidden'><img src='assets/15-footprints on the moon.svg' class='filter-platinum mineral' width=20 height=20></div><img src='assets/43-astronaut and flag.svg' class='filter-platinum astro' width=50 height=50 style='display:none'><img src='assets/6-moon.svg' class='filter-blue' width=40 height=40><div><p><b>Mercury</b></p></div></div> \
      <div class='container-item' id='_venus'><div class='container-row'><img src='assets/19-extraterrestrial head.svg' class='filter-platinum alien' width=20 height=20><img src='assets/15-footprints on the moon.svg' class='filter-platinum mineral' width=20 height=20 style='visibility:hidden'></div><img src='assets/43-astronaut and flag.svg' class='filter-platinum astro' width=50 height=50 style='display:none'><img src='assets/1-venus.svg' class='filter-blue' width=65 height=65><div><p><b>Venus</b></p></div></div> \
      <div class='container-item' id='_earth'><div class='container-row'><img src='assets/43-astronaut and flag.svg' class='filter-platinum astro' width=50 height=50></div><img src='assets/2-earth.svg' class='filter-blue' width=80 height=80><div><p><b>Earth</b></p></div></div> \
      <div class='container-item' id='_mars'><div class='container-row'><img src='assets/19-extraterrestrial head.svg' class='filter-platinum alien' width=20 height=20 style='visibility:hidden'><img src='assets/15-footprints on the moon.svg' class='filter-platinum mineral' width=20 height=20></div><img src='assets/43-astronaut and flag.svg' class='filter-platinum astro' width=50 height=50 style='display:none'><img src='assets/4-mars.svg' class='filter-blue' width=40 height=40><div><p><b>Mars</b></p></div></div> \
      <div class='container-item' id='_jupiter'><div class='container-row'><img src='assets/19-extraterrestrial head.svg' class='filter-platinum alien' width=20 height=20 style='visibility:hidden'><img src='assets/15-footprints on the moon.svg' class='filter-platinum mineral' width=20 height=20></div><img src='assets/43-astronaut and flag.svg' class='filter-platinum astro' width=50 height=50 style='display:none'><img src='assets/5-jupiter.svg' class='filter-blue' width=150 height=150><div><p><b>Jupiter</b></p></div></div> \
      <div class='container-item' id='_saturn'><div class='container-row'><img src='assets/19-extraterrestrial head.svg' class='filter-platinum alien' width=20 height=20><img src='assets/15-footprints on the moon.svg' class='filter-platinum mineral' width=20 height=20></div><img src='assets/43-astronaut and flag.svg' class='filter-platinum astro' width=50 height=50 style='display:none'><img src='assets/8-saturn.svg' class='filter-blue' width=120 height=120><div><p><b>Saturn</b></p></div></div> \
      <div class='container-item' id='_uranus'><div class='container-row'><img src='assets/19-extraterrestrial head.svg' class='filter-platinum alien' width=20 height=20 style='visibility:hidden'><img src='assets/15-footprints on the moon.svg' class='filter-platinum mineral' width=20 height=20></div><img src='assets/43-astronaut and flag.svg' class='filter-platinum astro' width=50 height=50 style='display:none'><img src='assets/9-uranus.svg' class='filter-blue' width=70 height=70><div><p><b>Uranus</b></p></div></div> \
      <div class='container-item' id='_neptune'><div class='container-row'><img src='assets/19-extraterrestrial head.svg' class='filter-platinum alien' width=20 height=20><img src='assets/15-footprints on the moon.svg' class='filter-platinum mineral' width=20 height=20 style='visibility:hidden'></div><img src='assets/43-astronaut and flag.svg' class='filter-platinum astro' width=50 height=50 style='display:none'><img src='assets/3-neptune.svg' class='filter-blue' width=60 height=60><div><p><b>Neptune</b></p></div></div> \
      ",
    instruction:
      " \
      <p>Now that we're packed and ready to go, it's time to start exploring! Your mission is through the solar system, and is as follows:</p> \
      <ul> \
      <li> Start at Earth with enough fuel to travel <b>15 AU</b></li> \
      <li> Choose planets to visit where you can collect <b>3</b> minerals. Planets with minerals have the icon:</li> \
      <ul><li><img src='assets/15-footprints on the moon.svg' class='filter-platinum' width=30 height=30></li></ul> \
      <li> Collect <b>1</b> alien lifeform. Planets with an alien lifeform have the icon:</li> \
      <ul><li><img src='assets/19-extraterrestrial head.svg' class='filter-platinum' width=30 height=30></li></ul> \
      <li> Alien lifeforms are fragile, so you must collect one from the last planet you visit </li> \
      <li> Return home to Earth with the fuel remaining </li> \
      </ul> \
      <p> \
      <b>Planetary Distances from the Sun in Astronomical Units (AU)</b> \
      <table> \
      <tr> \
      <th>Planet</th><th>Mercury</th><th>Venus</th><th>Earth</th><th>Mars</th><th>Jupiter</th><th>Saturn</th><th>Uranus</th><th>Neptune</th>\
      </tr>\
      <tr> \
      <th>Distance (AU)</th><th class='number'>0.4</th><th class='number'>0.7</th><th class='number'>1.0</th><th class='number'>1.5</th><th class='number'>5.2</th><th class='number'>9.5</th><th class='number'>19.2</th><th class='number'>30.1</th>\
      </tr> \
      </table>  \
      </p> \
      <div class='todo-box'><p><b>Tasks - Step 6:</b><p><ul> \
      <li><b>Part A:</b> \
      <ul><li>Complete the function <code>planet_number(planet)</code> to turn planet names (given as a string) to the planet's position in the solar system </li> \
      <li>This function:</li>\
      <ul><li>Takes a string arguement of <code>planet</code></li> \
      <li>Returns the number of the planet given in <code>planet</code></li> \
      <li>Example: <code>planet_number('mercury')</code> returns 1</li>\
      <li>Example: <code>planet_number('jupiter')</code> returns 5</li>\
      </ul></ul> \
      <li><b>Part B:</b>\
      <ul><li>To assist you in your prepartions, create a fuction called <code>distance_calculator()</code> in <code>student_answers.js</code>.</li> \
      <li>This function:</li> \
      <ul><li>Takes a string arguement of <code>origin</code> and string arguement of <code>destination</code></li> \
      <li>Returns the distance between <code>origin</code> and <code>destination</code> in Astronomical Units (AU)</li> \
      <li>Example: <code>distance_calculator('jupiter', 'earth')</code> returns 5.2</li>\
      <li>Example: <code>distance_calculator('earth', 'jupiter')</code> returns 5.2</li>\
      </ul> \
      <li><b>Hint</b>: Think about how you could use an array of AU distances and <code>planet_number()</code> to look up distances \
      </ul> \
      <li><b>Part C:</b> \
      <ul><li>It's time to plan the mission! Determine the planets to visit, using the Planet Distance Calculator to check your fuel consumption.</li> \
      <li>Complete the function in <code>step6()</code> so that it returns an array of the planets to visit (in order)</li> \
      <ul><li>Example: A trip of Mars, Jupiter, Mercury, Earth returns <code>[4, 5, 1, 3]</code>\
      <li>Example: A trip of Mars, Saturn, Earth returns <code>[4, 6, 3]</code>\
      </ul> \
      <li>Set your choices in the Voyage Itinerary form and click Start Voyage</li> \
      <ul><li>You do not need to program in all nine steps</li><li>Leave unused steps as '---'</li> \
      </ul></ul></p></div> \
      <div class='todo-box'> \
      <p><b>Planet Distance Calculator</b></p> \
      <p>Origin: <input id='origin-input' style='min-width:100px;min-height:20px;margin-left:10px;margin-right:10px;padding-right:5px;padding-left:5px;'></input></p>\
      <p>Destination: <input id='destination-input' style='min-width:100px;min-height:20px;margin-left:10px;margin-right:10px;padding-right:5px;padding-left:5px;'></input></p>\
      <p>Distance: <input id='distance-output' disabled style='min-width:100px;min-height:20px;margin-left:10px;margin-right:10px;padding-right:5px;padding-left:5px;'></input></p>\
      <p><button class='button button-submit' onClick='calculateDistance();'>Calculate Distance</button></p> \
      </div> \
      <div class='todo-box'> \
      <p><b>Voyage Itinerary</b></p> \
      <div class='container-row' style='flex-wrap:wrap'> \
      <div><p>1st Stop</p><select id='_stop1'></select></div>\
      <div><p>2nd Stop</p><select id='_stop2'></select></div>\
      <div><p>3rd Stop</p><select id='_stop3'></select></div>\
      <div><p>4th Stop</p><select id='_stop4'></select></div>\
      <div><p>5th Stop</p><select id='_stop5'></select></div>\
      <div><p>6th Stop</p><select id='_stop6'></select></div>\
      <div><p>7th Stop</p><select id='_stop7'></select></div>\
      <div><p>8th Stop</p><select id='_stop8'></select></div>\
      <div><p>9th Stop</p><select id='_stop9'></select></div>\
      </div> \
      <p><button class='button button-submit' onClick='voyage();'>Start Mission</button></p> \
      </div>",
    script: function () {
      document.getElementById("game-display").style.alignItems = "end";
      document.getElementById("game-display").style.flexWrap = "wrap";
      const options = [
        "---",
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
      ];
      for (let i = 1; i < 10; i++) {
        const x = document.getElementById("_stop" + i);
        options.forEach((z) => {
          const o = new Option(z, z.toLowerCase());
          x.add(o, undefined);
        });
      }
    },
    validation: function () {
      const p_planet_num = [
        "mercury",
        "venus",
        "earth",
        "mars",
        "jupiter",
        "saturn",
        "uranus",
        "neptune",
      ];
      for (let i = 0; i < p_planet_num.length; i++) {
        if (planet_number(p_planet_num[i]) != i + 1) {
          alert("planet_number() not implemented correctly.");
          return false;
        }
      }

      if (typeof distance_calculator === "function") {
        if (
          distance_calculator("neptune", "earth") != _distance_calculator(3, 8)
        ) {
          alert("distance_calculator() not implemented correctly.");
          return false;
        }
      } else {
        alert("distance_calculator() not implemented correctly.");
        return false;
      }

      return voyage();
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

// Update webpage to step content and run setup script for the provided step
function set_step(step) {
  if (step in payload) {
    document.getElementById("game-display").innerHTML =
      payload[step]["display"];
    document.getElementById("game-text").innerHTML =
      payload[step]["instruction"];
    if ("script" in payload[step]) {
      payload[step]["script"]();
    }
  } else {
    console.log("Step " + step + " not implemented");
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
    } else {
      document.getElementById("game-message").innerHTML =
        "Let's start! Click the Step 1 button to begin.";
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
  //  If there is no stored current or max step, initialize them to 0 (intro step)
  //  Otherwise, activate the menu buttons up to the max step
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
  // Load in the content for the current step
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

function calculateDistance() {
  const origin = document.getElementById("origin-input").value;
  const destination = document.getElementById("destination-input").value;
  if (typeof distance_calculator === "function") {
    document.getElementById("distance-output").value =
      distance_calculator(origin, destination) + " AU";
  } else {
    document.getElementById("distance-output").value = "Function not defined";
  }
}

function _distance_calculator(origin, destination) {
  const distances = [0.4, 0.7, 1.0, 1.5, 5.2, 9.5, 19.2, 30.1];

  return Math.abs(distances[origin - 1] - distances[destination - 1]);
}

function voyage() {
  /*
  Mission Params
  */
  const max_fuel = 15;
  const min_minerals = 3;
  const min_aliens = 1;
  var fuel = max_fuel;
  var minerals = 0;
  var aliens = 0;
  var flag = false;

  const planets = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  // Helper functions
  // attr: 'mineral' or 'alien'
  function has_attribute(planet, attr) {
    const p = document.getElementById("_" + planet).children[0].children;
    for (let i = 0; i < p.length; i++) {
      if (p[i].classList.contains(attr)) {
        return p[i].style.visibility != "hidden";
      }
    }
    return false;
  }
  function set_astronaut_visibility(planet, visible) {
    if (planet == "earth") {
      var p = document.getElementById("_" + planet).children[0].children;
    } else {
      var p = document.getElementById("_" + planet).children;
    }
    for (let i = 0; i < p.length; i++) {
      if (p[i].classList.contains("astro")) {
        if (visible) {
          p[i].style.display = "";
        } else {
          p[i].style.display = "none";
        }
      }
    }
  }

  // Reset the astronaut
  planets.forEach((p) => {set_astronaut_visibility(p,false);});
  set_astronaut_visibility('earth', true);

  var trip = step6();
  // Exit if no array is returned by step6
  try {
    if (trip.length == 0) return false;
  } catch {
    return false;
  }

  // Process trip
  for (let i = 0; i < trip.length; i++) {
    // Base case: beginning at Earth
    if (i == 0) {
      fuel -= _distance_calculator(3, trip[i]);
    } else {
      fuel -= _distance_calculator(trip[i - 1], trip[i]);
    }
    if (fuel < 0) {
      set_astronaut_visibility("earth", false);
      set_astronaut_visibility(planets[trip[i - 1] - 1], true);
      break;
    }
    minerals += 1 * has_attribute(planets[trip[i] - 1], "mineral");
    aliens += 1 * has_attribute(planets[trip[i] - 1], "alien");
  }

  // Check final stats
  var result = "";
  if (fuel < 0) result += "- Ran out of gas\n";
  if (minerals < min_minerals)
    result +=
      "- Did not collect enough minerals (" +
      minerals +
      " of " +
      min_minerals +
      ") \n";
  if (aliens < min_aliens) result += "- Did not collect enough aliens (" + aliens + " of " + min_aliens + ") \n";
  if (trip[trip.length - 1] != 3) {
    result += "- Did not return to Earth\n";
  } else {
    if (
      !has_attribute(planets[trip[trip.length - 2] - 1], "alien") &&
      trip.length > 1 && aliens > 0
    )
      result += "- Did not collect the alien last\n";
  }
  if (result.length > 0) {
    result = "Mission Failed\n" + result;
  } else {
    result = "Mission Success!";
    flag = true;
  }

  set_astronaut_visibility("earth", false);
  set_astronaut_visibility(planets[trip[trip.length - 1] - 1], true);

  alert(result);
  return flag;
}
