'use strict';


// Make the navbar be transparent on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);

    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--blue');
    }else{
        navbar.classList.remove('navbar--blue');
    }
});