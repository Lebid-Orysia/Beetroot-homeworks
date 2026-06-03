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

// news

async function loadNews() {
  try {
    const response = await fetch('./mocks/news.json'); 
    
    if (!response.ok) {
      throw new Error('Не вдалося завантажити файл новин');
    }
    
    const newsData = await response.json(); 
    renderNews(newsData);                   
    
  } catch (error) {
    console.error('Помилка:', error);
  }
}

function renderNews(news) {
  const newsSlider = document.getElementById('lightSlider');
  newsSlider.innerHTML = '';
  
  news.forEach(item => {
    const newsCard = `
      <li>
        <article class="news-card">
          <div class="news-card__image-wrapper">
            <img src="${item.image}" alt="${item.title}" class="news-card__image">
          </div>
          
          <div class="news-card__content">
            <a href="#"><h3 class="news-card__title">${item.title}</h3></a>
            <p class="news-card__text">${item.summary}</p>
            
            <div class="news-card__meta">
              <div class="news-card__author">
                <div class="news-card__avatar">
                  <img src="${item.author.avatar}" alt="${item.author.name}">
                </div>
                <h3 class="news-card__author-name">${item.author.name}</h3>
              </div>
              <time class="news-card__date" datetime="${item.date}">${item.date}</time>
            </div>
          </div>
        </article>
      </li>
    `;
    
    newsSlider.insertAdjacentHTML('beforeend', newsCard);
  });

  initLightSlider();
}

function initLightSlider() {
 const newsSlider = $("#lightSlider").lightSlider({
    item: 3,                  
    autoWidth: false,
    slideMove: 1,             
    slideMargin: 20,          
    loop: true,               
    keyPress: true,
    controls: false,           
    pager: true,              
    responsive: [             
      {
        breakpoint: 992,
        settings: {
          item: 2,
          slideMove: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          item: 1,
          slideMove: 1
        }
      }
    ]
  });
  $('#goToPrevSlide').click(function(){
        newsSlider.goToPrevSlide(); 
    });
    $('#goToNextSlide').click(function(){
       newsSlider.goToNextSlide(); 
    });
}

document.addEventListener('DOMContentLoaded', loadNews);

// light gallery

const galleryElement = document.getElementById('lightgallery');
if (galleryElement) {
  lightGallery(galleryElement, {
    speed: 500,
    licenseKey: '0000-0000-000-0000' // Додайте цей рядок
  });
}