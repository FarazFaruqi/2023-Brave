
my_image = document.getElementById('profile_image')
console.log(my_image)
my_image.addEventListener("click", function() {
  current_name = document.getElementById("header_text_name")
  alert("Hello World, my name is " + current_name.innerText + "!")
  var new_name = prompt("What should I change the name to?")
  console.log(new_name)
  current_name.innerText = new_name
})