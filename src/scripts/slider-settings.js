const projectsSlider = new Swiper('.projects__slider', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.projects__slider-button-next',
    prevEl: '.projects__slider-button-prev',
  },
});

const commentsSlider = new Swiper('.comments__slider', {
  loop: true,
  breakpointsBase: 'window',
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    478: {
      slidesPerView: 2,
      spaceBetween: 32
    },
    768: {
      spaceBetween: 120,
    }
  },
  navigation: {
    nextEl: '.comments__slider-button-next',
    prevEl: '.comments__slider-button-prev',
  },
});
