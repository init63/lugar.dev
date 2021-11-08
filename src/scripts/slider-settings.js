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
  spaceBetween: 120,
  navigation: {
    nextEl: '.comments__slider-button-next',
    prevEl: '.comments__slider-button-prev',
  },
});
