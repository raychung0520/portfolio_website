'use strict';


// Make the navbar be transparent on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--blue');
    }else{
        navbar.classList.remove('navbar--blue');
    }
});


// Scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', ()=> {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null)
        return;
    
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});


// Make home fade to transparent as the window scrolls down

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    console.log(1 - window.scrollY/homeHeight);
    home.style.opacity = 1 - window.scrollY/homeHeight;
});