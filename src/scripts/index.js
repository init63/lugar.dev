const menuButton = document.querySelector('.header__button');
const menuList = document.querySelector('.header__list');
const body = document.querySelector('.page__body');

menuButton.addEventListener('click', () => {
  let expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', !expanded);
  menuButton.classList.toggle('header__button--open');
  menuList.classList.toggle('header__list--open');
  body.classList.toggle('page__body--lock');
});

const getId = (link) => link.getAttribute('href').replace('#', '');

const scrollToSection = (target) => {
  window.scrollTo({
    top: document.getElementById(getId(target)).offsetTop,
    behavior: 'smooth',
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.navigation__link').forEach((link) => {
          link.classList.toggle(
            'navigation__link--active',
            getId(link) === entry.target.id
          );
        });
      }
    });
  },
  {
    threshold: 0.7,
  }
);

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('header--change-bg', window.scrollY > 0);
});

document.querySelectorAll('.js-section').forEach((section) => {
  observer.observe(section);
});

document
  .querySelector('.navigation__list')
  .addEventListener('click', (event) => {
    if (event.target.classList.contains('navigation__link')) {
      event.preventDefault();
      scrollToSection(event.target);
    }
  });

document.querySelectorAll('.js-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    const id = event.target.id.replace('btn-', '');

    window.scrollTo({
      top: document.getElementById(id).offsetTop,
      behavior: 'smooth',
    });
  });
});

document.querySelector('.js-footer-list').addEventListener('click', (event) => {
  if (event.target.classList.contains('footer__link')) {
    event.preventDefault();
    scrollToSection(event.target);
  }
});
