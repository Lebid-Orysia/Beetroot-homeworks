"use strict";

//слайдер
var swiper = new Swiper('.mySwiper', {
  direction: 'vertical',
  speed: 1000,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  allowTouchMove: false,
  autoplay: false,
  mousewheel: false,
  breakpoints: {
    576: {
      allowTouchMove: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        stopOnLastSlide: true
      },
      mousewheel: {
        releaseOnEdges: true
      }
    }
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
    var myIcon = L.icon({
      iconUrl: './assets/image/Pin.png',
      iconSize: [106, 106]
    });
    var map = L.map('map').setView([49.839275, 24.029421], 16);
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);
    L.marker([49.841672, 24.026475], {
      icon: myIcon
    }).addTo(map).bindPopup('My popup.');
  };

  document.body.appendChild(leafletJS);
}; //toast, validate form, send form


var BOT_TOKEN = '8939819824:AAFjKgg7kbRNcf-CydQeIFbHEODgq_AHvNM';
var CHAT_ID = '-1003789218824';
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.contacts-form') || document.getElementById('feedback-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var inputs = form.querySelectorAll('.did-floating-input');
      var isFormValid = true;
      inputs.forEach(function (input) {
        var parentBlock = input.closest('.did-floating-label-content');
        var errorMessage = parentBlock ? parentBlock.querySelector('.input-error-message') : null;

        if (input.value.trim() === '') {
          isFormValid = false;
          input.classList.add('input-error');

          if (errorMessage) {
            errorMessage.innerText = 'Field cannot be empty.';
          }
        } else {
          input.classList.remove('input-error');

          if (errorMessage) {
            errorMessage.innerText = '';
          }
        }

        input.addEventListener('input', function () {
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

function sendMessage(form) {
  var usernameEl, emailEl, msgEl, username, email, msg, message, resp, answer;
  return regeneratorRuntime.async(function sendMessage$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          usernameEl = document.getElementById('username');
          emailEl = form.querySelector('[name="email"]');
          msgEl = form.querySelector('textarea');
          username = usernameEl ? usernameEl.value : 'Не вказано';
          email = emailEl ? emailEl.value : 'Не вказано';
          msg = msgEl ? msgEl.value : 'Порожнє повідомлення';
          message = "Name: ".concat(username, "\nEmail: ").concat(email, "\nMessage: ").concat(msg);
          _context2.prev = 7;
          _context2.next = 10;
          return regeneratorRuntime.awrap(fetch("https://api.telegram.org/bot".concat(BOT_TOKEN, "/sendMessage?chat_id=").concat(CHAT_ID, "&text=").concat(encodeURIComponent(message))));

        case 10:
          resp = _context2.sent;

          if (!resp.ok) {
            _context2.next = 18;
            break;
          }

          _context2.next = 14;
          return regeneratorRuntime.awrap(resp.json());

        case 14:
          answer = _context2.sent;

          if (answer.ok) {
            form.reset();
            showToast('Data sent successfully!', 'success', form);
          } else {
            console.error(answer.description);
            showToast('Telegram server error.', 'error', form);
          }

          _context2.next = 20;
          break;

        case 18:
          console.error('Server response error');
          showToast('Could not contact the server.', 'error', form);

        case 20:
          _context2.next = 26;
          break;

        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](7);
          console.error('Fetch error:', _context2.t0);
          showToast('There is no network connection.', 'error', form);

        case 26:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[7, 22]]);
}

function showToast(message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
  var targetContainer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.body;
  var existingToast = targetContainer.querySelector('.my-toast');

  if (existingToast) {
    existingToast.remove();
  }

  var toast = document.createElement('div');
  toast.className = "my-toast ".concat(type);
  toast.innerText = message;
  targetContainer.appendChild(toast);
  setTimeout(function () {
    toast.style.transition = 'opacity 0.4s ease';
    toast.style.opacity = '0';
    setTimeout(function () {
      toast.remove();
    }, 400);
  }, 2500);
}