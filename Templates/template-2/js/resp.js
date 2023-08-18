burger = document.querySelector('.burger')
navbar = document.querySelector('.nav-bar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.right-nav')
burger.addEventListener('click', () => {
    navlist.classList.toggle('v-class');
    rightNav.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})
