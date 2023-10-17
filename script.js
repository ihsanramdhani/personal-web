'use strict';

// default color config
let numColor = 1;

const changeNumColor = function (num) {
  if (num === 1 || num === 2) numColor++;
  if (num === 3) numColor = 1;
};

const containerSection = document.querySelector('.container__section');
const header = document.querySelector('.header');
const navHome = document.querySelector('.nav__home');
const navProjects = document.querySelector('.nav__projects');
const navAbout = document.querySelector('.nav__about');
const secProjects = document.querySelector('#section__projects');
const secAbout = document.querySelector('#section__about');
const styleHighlight = document.head.appendChild(
  document.createElement('style')
);

containerSection.addEventListener('click', function (e) {
  changeNumColor(numColor);
  styleHighlight.innerHTML = `
  .highlight::after {background-color: var(--color-${numColor})}
  .header__img::before {content: var(--svg-${numColor})}
  `;
});

navHome.addEventListener('click', function (e) {
  e.preventDefault();
  header.scrollIntoView({ behavior: 'smooth' });
});

navProjects.addEventListener('click', function (e) {
  e.preventDefault();
  secProjects.scrollIntoView({ behavior: 'smooth' });
});

navAbout.addEventListener('click', function (e) {
  e.preventDefault();
  secAbout.scrollIntoView({ behavior: 'smooth' });
});
