'use strict';

// // default color config
// let numColor = 1;

// const changeNumColor = function (num) {
//   if (num === 1 || num === 2) numColor++;
//   if (num === 3) numColor = 1;
// };

// const containerSection = document.querySelector('.container__section');
// const header = document.querySelector('.header');
// const navHome = document.querySelector('.nav__home');
// const navProjects = document.querySelector('.nav__projects');
// const navAbout = document.querySelector('.nav__about');
// const secProjects = document.querySelector('.section__projects');
// const secAbout = document.querySelector('.section__about');
// const styleHighlight = document.head.appendChild(
//   document.createElement('style')
// );

// containerSection.addEventListener('click', function (e) {
//   changeNumColor(numColor);
//   styleHighlight.innerHTML = `
//   .header__img::before {content: var(--svg-${numColor})}
//   .highlight::after {background-color: var(--color-${numColor})}
//   `;
// });

// navHome.addEventListener('click', function (e) {
//   e.preventDefault();
//   header.scrollIntoView({ behavior: 'smooth' });
// });

// navProjects.addEventListener('click', function (e) {
//   e.preventDefault();
//   secProjects.scrollIntoView({ behavior: 'smooth' });
// });

// navAbout.addEventListener('click', function (e) {
//   e.preventDefault();
//   secAbout.scrollIntoView({ behavior: 'smooth' });
// });

const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('.nav__link');

const displayPage = function (section) {
  sections.forEach(section => {
    section.style.display = 'none';
  });
  document.querySelector(`.${section}`).style.display = 'grid';
};

document.addEventListener('DOMContentLoaded', function () {
  // initial load
  if (window.location.hash) displayPage(window.location.hash.substring(1));
  else displayPage('home');
});

// handle navigation clicks
links.forEach(link => {
  const page = link.getAttribute('href').substring(1);
  link.addEventListener('click', function (e) {
    e.preventDefault();
    displayPage(page);
    history.pushState(null, null, `#${page}`);
  });
});

// handle back and forward navigation
window.addEventListener('popstate', function () {
  displayPage(window.location.hash.substring(1) || 'home');
});
