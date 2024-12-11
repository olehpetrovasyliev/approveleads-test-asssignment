// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";

const partnersSlider = new Swiper(".partners__slider", {
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 5000,
  loop: true,
  allowTouchMove: false,
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
});
