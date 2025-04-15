const menuBurger = document.querySelector('.menu-burger');
const menuBurgerNav = document.querySelector('#menu-burger-nav');

menuBurger.onclick = function () {
    menuBurger.classList.toggle('menu-burger--open');
    menuBurgerNav.classList.toggle('menu-nav--open');

}

const allBurgerNavLinks = menuBurgerNav.querySelectorAll(".menu-nav__link");

allBurgerNavLinks.forEach((link) => {

    link.addEventListener('click', () => {
        menuBurger.classList.remove('menu-burger--open');
        menuBurgerNav.classList.remove('menu-nav--open');
    });

});