const heroSlider = new Swiper(".hero__slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  //   effect: "fade",

  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },

  navigation: {
    nextEl: ".hero__button-next",
    prevEl: ".hero__button-prev",
  },
});
