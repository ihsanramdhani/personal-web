// =============== SHOW MENU ===============
const navMenu = document.querySelector('#nav__menu');
const navToggle = document.querySelector('#nav__toggle');
const navClose = document.querySelector('#nav__close');

// MENU SHOW
navToggle &&
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));

// MENU HIDDEN
navClose &&
  navClose.addEventListener('click', () =>
    navMenu.classList.remove('show-menu')
  );

// =============== REMOVE MENU MOBILE ===============
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(navLink =>
  navLink.addEventListener('click', () => navMenu.classList.remove('show-menu'))
);

// =============== SHADOW HEADER ===============
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  this.scrollY >= 50
    ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header');
});

// =============== EMAIL JS ===============

// =============== SHOW SCROLL UP ===============

// =============== SCROLL SECTIONS ACTIVE LINK ===============

// =============== DARK LIGHT THEME ===============

// =============== SCROLL REVEAL ANIMATION ===============
