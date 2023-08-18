let ham = document.getElementsByClassName('slider')[0]
let menu = document.getElementsByClassName('menu')[0]
let navbar = document.getElementsByClassName('nav-bar')[0]
let sliderImg = document.getElementById('slider-img')


ham.addEventListener('click', event => {

    menu.classList.toggle('show')
    navbar.classList.toggle('nav-height')

})
 let images = ['./img/students-5.jpg','./img/students-3.jpg','./img/students-4.jpg', './img/students-2.jpg']
 let i = 0;
function slide(){
    sliderImg.src = images[i]

    i++;
    if(i===4){
        i=0;
    }
}
setInterval(slide,1000)