'use strict';

// default color config
let numColor = 1;

const changeNumColor = function (num) {
  if (num === 1) {
    numColor++;
    return numColor;
  }
  if (num === 2) {
    numColor++;
    return numColor;
  }
  if (num === 3) {
    numColor = 1;
    return numColor;
  }
};

const header = document.querySelector('.header');
const styleHighlight = document.head.appendChild(
  document.createElement('style')
);
const img = document.querySelector('img');

header.addEventListener('click', function (e) {
  changeNumColor(numColor);
  styleHighlight.innerHTML = `.highlight::after {background-color: var(--color-${numColor})}`;
  img.src = `assets/thinking_${numColor}.svg`;
});
