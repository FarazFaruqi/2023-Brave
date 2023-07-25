var portfolio_elements = document.getElementsByClassName("profile_element")
console.log(portfolio_elements)

for (var i = 0; i < portfolio_elements.length; i++) {
	portfolio_elements[i].style.display = 'none'
}

let sliderValue = document.getElementsByClassName('bamboo-slider')[0].value;


let currentSilderValue = 0;

const changeBambooAmount = (sliderValue) => {
   // let newBamboo = bambooBranch.cloneNode(true);
  if (sliderValue > currentSilderValue) {
    portfolio_elements[currentSilderValue].style.display = 'flex'
    currentSilderValue ++;
  }
  
  else {
    portfolio_elements[currentSilderValue].style.display = 'none'
    currentSilderValue --;
  }
}