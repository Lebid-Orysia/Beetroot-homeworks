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
}); // news

function loadNews() {
  var response, newsData;
  return regeneratorRuntime.async(function loadNews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('./mocks/news.json'));

        case 3:
          response = _context.sent;

          if (response.ok) {
            _context.next = 6;
            break;
          }

          throw new Error('Не вдалося завантажити файл новин');

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          newsData = _context.sent;
          renderNews(newsData);
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error('Помилка:', _context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

function renderNews(news) {
  var newsSlider = document.getElementById('lightSlider');
  newsSlider.innerHTML = '';
  news.forEach(function (item) {
    var newsCard = "\n      <li>\n        <article class=\"news-card\">\n          <div class=\"news-card__image-wrapper\">\n            <img src=\"".concat(item.image, "\" alt=\"").concat(item.title, "\" class=\"news-card__image\">\n          </div>\n          \n          <div class=\"news-card__content\">\n            <a href=\"#\"><h3 class=\"news-card__title\">").concat(item.title, "</h3></a>\n            <p class=\"news-card__text\">").concat(item.summary, "</p>\n            \n            <div class=\"news-card__meta\">\n              <div class=\"news-card__author\">\n                <div class=\"news-card__avatar\">\n                  <img src=\"").concat(item.author.avatar, "\" alt=\"").concat(item.author.name, "\">\n                </div>\n                <h3 class=\"news-card__author-name\">").concat(item.author.name, "</h3>\n              </div>\n              <time class=\"news-card__date\" datetime=\"").concat(item.date, "\">").concat(item.date, "</time>\n            </div>\n          </div>\n        </article>\n      </li>\n    ");
    newsSlider.insertAdjacentHTML('beforeend', newsCard);
  });
  initLightSlider();
}

function initLightSlider() {
  var newsSlider = $("#lightSlider").lightSlider({
    item: 3,
    autoWidth: false,
    slideMove: 1,
    slideMargin: 20,
    loop: true,
    keyPress: true,
    controls: false,
    pager: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        item: 2,
        slideMove: 1
      }
    }, {
      breakpoint: 576,
      settings: {
        item: 1,
        slideMove: 1
      }
    }]
  });
  $('#goToPrevSlide').click(function () {
    newsSlider.goToPrevSlide();
  });
  $('#goToNextSlide').click(function () {
    newsSlider.goToNextSlide();
  });
}

document.addEventListener('DOMContentLoaded', loadNews); // light gallery

var galleryElement = document.getElementById('lightgallery');

if (galleryElement) {
  lightGallery(galleryElement, {
    speed: 500,
    licenseKey: '0000-0000-000-0000'
  });
} //map


var link = document.getElementById('map-link');

link.onclick = function (e) {
  e.preventDefault();
  link.remove();
  var leafletCSS = document.createElement('link');
  leafletCSS.setAttribute('rel', 'stylesheet');
  leafletCSS.setAttribute('href', './assets/plugins/leaflet/leaflet.css');
  document.head.appendChild(leafletCSS);
  var leafletJS = document.createElement('script');
  leafletJS.setAttribute('src', './assets/plugins/leaflet/leaflet.js');

  leafletJS.onload = function () {
    var map = L.map('map').setView([49.839275, 24.029421], 16);
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);
    L.marker([49.841672, 24.026475], {}).addTo(map).bindPopup('A pretty CSS popup.<br> Easily customizable.');
    L.marker([49.841672, 24.026475]).addTo(map).bindPopup('A pretty CSS popup.<br> Easily customizable.');
  };

  document.body.appendChild(leafletJS);
};