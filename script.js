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
const scrollUp = () => {
  const scrollUp = document.querySelector('#scroll-up');
  // when the scroll is higher than 350 viewport height, add the show-scroll class to the header tag
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

// =============== SCROLL SECTIONS ACTIVE LINK ===============
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector(
      '.nav__menu a[href*=' + sectionId + ']'
    );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

// =============== DARK LIGHT THEME ===============
const themeButton = document.querySelector('#theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selectedIcon');

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// we validate if the user previously chose a topic
if (selectedTheme) {
  // if the validation is fulfiled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  // we save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


// =============== SCROLL REVEAL ANIMATION ===============
