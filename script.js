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
const contactForm = document.querySelector('.contact__form');
const contactMessage = document.querySelector('.contact__message');

const sendEmail = e => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      'service_l8un03b',
      'template_gipc3yr',
      '#contact-form',
      'TGtTVq-K1HQy_4PCz'
    )
    .then(
      () => {
        // show sent message
        contactMessage.textContent = 'Message sent successfully ✅';

        // remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);

        // clear input fields
        contactForm.reset();
      },
      () => {
        // show error message
        contactMessage.textContent = 'Message not sent (service error) ❌';
      }
    );
};

contactForm.addEventListener('submit', sendEmail);

// =============== SHOW SCROLL UP ===============

// =============== SCROLL SECTIONS ACTIVE LINK ===============

// =============== DARK LIGHT THEME ===============

// =============== SCROLL REVEAL ANIMATION ===============
