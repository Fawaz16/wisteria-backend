//I created an observer to observe for intersection
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
//Make Opacity as a transition when it intersects with it's viewport
hiddenElements.forEach((el) => {
    observer.observe(el)
});

//Checking if the user scrolls the page and perform a function
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar')
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//Navigate through pages
function goto(page){
    window.location.href = page;
}

//Keep the theme changer in check
function toggleThemeChanger(){
    document.getElementById("theme-changer-container").classList.toggle("d-none");
}

//Preparing the btns for theme changing
const lightBtn = document.getElementById("light-theme-btn");
const darkBtn = document.getElementById("dark-theme-btn");
const successBtn = document.getElementById("success-theme-btn");
const primaryBtn = document.getElementById("primary-theme-btn");
const dangerBtn = document.getElementById("danger-theme-btn");

//Nav, Body and Footer element ready for theme changing
const navbar = document.getElementById('navbar');
const themeChangerBtn = document.getElementById("theme-changer-btn");
const body = document.getElementsByTagName("body")[0];
const navbarTogglerBtn = document.getElementsByClassName('navbar-toggler')[0];
const footer = document.getElementById("footer-holder");
const emailSubmitBtn = document.getElementById("emailSubmitBtn");
const footDesc = document.getElementById("foot-desc");
const footDescText = document.getElementsByClassName("foot-desc-text");
const footerIcon = document.getElementsByClassName("footer-icon");
