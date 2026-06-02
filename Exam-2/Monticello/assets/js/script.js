//слайдер
const swiper = new Swiper('.mySwiper', {
  direction: 'vertical',
  speed: 1000,
  loop: false, 
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
    stopOnLastSlide: true, 
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
  },
  
  mousewheel: {
    releaseOnEdges: true, 
  },
});



//зміна стилів хедера при скролі сторінки
const header = document.querySelector('header.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 740) {
    header.classList.add('header--scrolled'); 
  } else {
    header.classList.remove('header--scrolled'); 
  }
});


// скрол до main при кліку на стрілочку
const arrowBtn = document.getElementById('arrow-down');
const mainContent = document.getElementById('main-content');

arrowBtn.addEventListener('click', (event) => {
  event.preventDefault(); 

  mainContent.scrollIntoView({ 
    behavior: 'smooth', 
    block: 'start'      
  });
});