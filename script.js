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
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// we validate if the user previously chose a topic
if (selectedTheme) {
  // if the validation is fulfiled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
    iconTheme
  );
}

// activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // we save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

// =============== SCROLL REVEAL ANIMATION ===============
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__profile, .contact__mail`, { origin: 'right' });
sr.reveal(`.home__name, .home__info, .contact__data, .contact__social`, {
  origin: 'left',
});
sr.reveal(`.projects__card`, { interval: 100 });

// =============== CHANGE COLOR IF USER CLICK ON BACKGROUND ===============
const body = document.querySelector('body');
const stylesheets = document.styleSheets;
const root = document.querySelector(':root');
let initFirstColor = getComputedStyle(root).getPropertyValue('--first-color');

const changeColor = (
  firstColor,
  secondColor,
  darkFirstColor,
  darkSecondColor
) => {
  root.style.setProperty('--first-color', firstColor);
  root.style.setProperty('--second-color', secondColor);
  localStorage.setItem('first-color', firstColor);
  localStorage.setItem('second-color', secondColor);

  for (const stylesheet of stylesheets) {
    // Loop through the rules in each stylesheet
    for (const rule of stylesheet.cssRules) {
      if (rule.selectorText === 'body.dark-theme') {
        // Found the rule for body.dark-theme, update its properties
        rule.style.setProperty('--first-color', darkFirstColor);
        rule.style.setProperty('--second-color', darkSecondColor);
        localStorage.setItem('dark-first-color', darkFirstColor);
        localStorage.setItem('dark-second-color', darkSecondColor);
      }
    }
  }
};

body.addEventListener('click', function (e) {
  // color changes happen only if user click on background (elements that have section and container classes)
  initFirstColor === 'hsl(20, 98%, 50%)'
    ? (e.target.classList.contains('section') ||
        e.target.classList.contains('container')) &&
      changeColor(
        'hsl(230, 98%, 50%)',
        'hsl(300, 100%, 50%)',
        'hsl(230, 80%, 50%)',
        'hsl(300, 80%, 50%)'
      )
    : (e.target.classList.contains('section') ||
        e.target.classList.contains('container')) &&
      changeColor(
        'hsl(20, 98%, 50%)',
        'hsl(50, 100%, 50%)',
        'hsl(14, 80%, 50%)',
        'hsl(38, 80%, 50%)'
      );

  initFirstColor = getComputedStyle(root).getPropertyValue('--first-color');

  // change font color of bold element in home description only if dark-theme deactivated
  !body.classList.contains('dark-theme') &&
    (initFirstColor === 'hsl(230, 98%, 50%)'
      ? (document.querySelector('.home__description b').style.color =
          'hsl(0, 0%, 95%)')
      : (document.querySelector('.home__description b').style.color =
          'hsl(0, 0%, 0%)'));
});
