"use strict";

//слайдер
var swiper = new Swiper('.mySwiper', {
  direction: 'vertical',
  speed: 1000,
  loop: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    stopOnLastSlide: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: {
    releaseOnEdges: true
  }
}); //зміна стилів хедера при скролі сторінки

var header = document.querySelector('header.header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 740) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
}); // скрол до main при кліку на стрілочку

var arrowBtn = document.getElementById('arrow-down');
var mainContent = document.getElementById('main-content');
arrowBtn.addEventListener('click', function (event) {
  event.preventDefault();
  mainContent.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});