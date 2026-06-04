//слайдер
const swiper = new Swiper('.mySwiper', {
  direction: 'vertical',
  speed: 1000,
  loop: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  allowTouchMove: true, 
  autoplay: false, 
  mousewheel: false,     

  breakpoints: {
    576: {
      allowTouchMove: true, 
      
      autoplay: {          
        delay: 3000,
        disableOnInteraction: false,
        stopOnLastSlide: true,
      },
      
      mousewheel: {        
        releaseOnEdges: true,
      },
    },
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
    licenseKey: '0000-0000-000-0000' 
  });
}


//map
const link = document.getElementById('map-link')
link.onclick = (e) => {
  e.preventDefault()

link.remove()
const leafletCSS = document.createElement('link')
leafletCSS.setAttribute('rel', 'stylesheet')
leafletCSS.setAttribute('href', './assets/plugins/leaflet/leaflet.css')
document.head.appendChild(leafletCSS)

const leafletJS = document.createElement('script')
leafletJS.setAttribute('src', './assets/plugins/leaflet/leaflet.js')
leafletJS.onload = () => {

const myIcon = L.icon({
    iconUrl: './assets/image/Pin.png',
    iconSize: [106, 106],
});


const map = L.map('map').setView([49.839275, 24.029421], 16);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
}).addTo(map);


L.marker([49.841672, 24.026475], {
  icon: myIcon
}).addTo(map)
  .bindPopup('My popup.')
}
document.body.appendChild(leafletJS)

}

//toast, validate form, send form

const BOT_TOKEN = '8939819824:AAFjKgg7kbRNcf-CydQeIFbHEODgq_AHvNM';
const CHAT_ID = '-1003789218824';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contacts-form') || document.getElementById('feedback-form');

if (form) {
  form.addEventListener('submit', function (e) {
  e.preventDefault(); 

const inputs = form.querySelectorAll('.did-floating-input');
let isFormValid = true;

inputs.forEach(input => {
const parentBlock = input.closest('.did-floating-label-content');
const errorMessage = parentBlock ? parentBlock.querySelector('.input-error-message') : null;

if (input.value.trim() === '') {
  isFormValid = false;
  input.classList.add('input-error');
          
if (errorMessage) {
  errorMessage.innerText = 'Field cannot be empty.';
}
}else {
  input.classList.remove('input-error');
if (errorMessage) {
  errorMessage.innerText = ''; 
  }
}

input.addEventListener('input', () => {
  if (input.value.trim() !== '') {
    input.classList.remove('input-error');
  if (errorMessage) {
    errorMessage.innerText = '';
    }
  }
 });
});

if (!isFormValid) {
showToast('Fill in the required fields!', 'error', form);
return; 
}
 sendMessage(form);
    });
  }
});


async function sendMessage(form) {
const usernameEl = document.getElementById('username')
const emailEl = form.querySelector('[name="email"]')
const msgEl = form.querySelector('textarea')

const username = usernameEl ? usernameEl.value : 'Не вказано';
const email = emailEl ? emailEl.value : 'Не вказано';
const msg = msgEl ? msgEl.value : 'Порожнє повідомлення';

const message = `Name: ${username}\nEmail: ${email}\nMessage: ${msg}`

  try {
    const resp = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`);
    
  if (resp.ok) {
  const answer = await resp.json();
    if (answer.ok) {
        form.reset(); 
        showToast('Data sent successfully!', 'success', form);
    } else {
        console.error(answer.description);
        showToast('Telegram server error.', 'error', form);
      }
    } else {
      console.error('Server response error');
      showToast('Could not contact the server.', 'error', form);
    }
  } catch (error) {
    console.error('Fetch error:', error);
    showToast('There is no network connection.', 'error', form);
  }
}

function showToast(message, type = 'success', targetContainer = document.body) {
  const existingToast = targetContainer.querySelector('.my-toast');
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement('div');
  toast.className = `my-toast ${type}`;
  toast.innerText = message;

  targetContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease';
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 2500);
}