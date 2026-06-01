"use strict";

var _env = require("./env.js");

var _helpers = require("./helpers.js");

function showPage(name) {
  document.querySelectorAll('.page').forEach(function (p) {
    return p.classList.remove('active');
  });
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

var form = document.getElementById('search_movies_form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  search();
});

function authFetch(url) {
  var resp, data;
  return regeneratorRuntime.async(function authFetch$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _helpers.loader.show();

          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(url, {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer ' + _env.AUTH_TOKEN
            }
          }));

        case 4:
          resp = _context.sent;

          if (resp.ok) {
            _context.next = 7;
            break;
          }

          throw new Error(resp.status);

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(resp.json());

        case 9:
          data = _context.sent;
          return _context.abrupt("return", {
            isOK: true,
            data: data
          });

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
          return _context.abrupt("return", {
            isOK: false,
            data: null
          });

        case 17:
          _context.prev = 17;

          _helpers.loader.hide();

          return _context.finish(17);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 13, 17, 20]]);
}

function search() {
  var formData, serializedString, url, response;
  return regeneratorRuntime.async(function search$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          formData = new FormData(form);
          serializedString = new URLSearchParams(formData).toString();
          url = _env.DEV_MODE ? './mocks/movies.json?' + serializedString : _env.BASE_URL + 'search/movie?' + serializedString;
          _context2.next = 5;
          return regeneratorRuntime.awrap(authFetch(url));

        case 5:
          response = _context2.sent;

          if (response.isOK) {
            showResult(response.data);
          } else {
            _helpers.toast.error('Some error occured. Try again, please');
          }

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function showResult(data) {
  var tmpl = document.getElementById('movie_list_item');
  var result = document.getElementById('result-wrap');
  result.innerHTML = '';
  data.results.forEach(function (item) {
    var clone = document.importNode(tmpl.content, true);
    var img = clone.querySelector('.movie-poster img');
    img.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + item.poster_path);
    img.setAttribute('alt', item.title);
    clone.querySelector('.movie-title').innerText = item.title;
    clone.querySelector('.movie-year').innerText = (0, _helpers.formatDate)(item.release_date);
    clone.querySelector('.poster-badge span').innerText = item.vote_average.toFixed(1);
    clone.querySelector('.movie-info button').dataset.id = item.id;
    result.appendChild(clone);
  });
  buildPagination(data.page, data.total_pages);
}

function getMovieDetail(id) {
  var url, response;
  return regeneratorRuntime.async(function getMovieDetail$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!localStorage.getItem('movie_' + id)) {
            _context3.next = 2;
            break;
          }

          return _context3.abrupt("return", JSON.parse(localStorage.getItem('movie_' + id)));

        case 2:
          url = _env.DEV_MODE ? './mocks/detail.json' : 'https://api.themoviedb.org/3/movie/' + id;
          _context3.next = 5;
          return regeneratorRuntime.awrap(authFetch(url));

        case 5:
          response = _context3.sent;

          if (response.isOK) {
            _context3.next = 9;
            break;
          }

          _helpers.toast.error('Some error occured. Try again, please');

          return _context3.abrupt("return", null);

        case 9:
          localStorage.setItem('movie_' + id, JSON.stringify(response.data));
          return _context3.abrupt("return", response.data);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function showDetail(id) {
  var item, detail, img;
  return regeneratorRuntime.async(function showDetail$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(getMovieDetail(id));

        case 2:
          item = _context4.sent;

          if (item) {
            _context4.next = 5;
            break;
          }

          return _context4.abrupt("return");

        case 5:
          detail = document.getElementById('page-detail');
          detail.querySelector('.hero-bg').style.backgroundImage = "url('https://image.tmdb.org/t/p/w1280".concat(item.backdrop_path, "')");
          img = detail.querySelector('.detail-poster-img');
          img.setAttribute('src', 'https://image.tmdb.org/t/p/w500' + item.poster_path);
          img.setAttribute('alt', item.title);
          detail.querySelector('.detail-title').innerText = item.title;
          detail.querySelector('.rating-score').innerText = item.vote_average.toFixed(1);
          detail.querySelector('.rating-count').innerText = item.vote_count;
          detail.querySelector('.detail-overview').innerText = item.overview;
          showPage('detail');

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  });
}

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('get-detail-movie-btn')) {
    showDetail(e.target.dataset.id);
  }
});

function goToPage(newPage) {
  document.getElementById('page_val').value = newPage;
  search();
  console.log('goTOPage: ', newPage);
}

window.goToPage = goToPage;

function buildPagination(page, totalPages) {
  var from = 1;
  var to = totalPages;
  var showFirst = true;
  var showLast = true;

  if (totalPages <= 6) {
    showFirst = showLast = false;
  } else {
    if (page >= 1 && page <= 4) {
      to = 5;
      showFirst = false;
    } else if (page >= 5 && page <= totalPages - 4) {
      from = page - 2;
      to = page + 2;
    } else if (page >= totalPages - 4) {
      from = totalPages - 4;
      showLast = false;
    }
  }

  var items = '';
  items += "<li>\n      <button class=\"page-btn\" ".concat(page == 1 ? 'disabled' : '', " onclick=\"goToPage(").concat(page - 1, ")\">\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n            <polyline points=\"15 18 9 12 15 6\" />\n         </svg>\n      </button>\n    </li>");

  if (showFirst) {
    items += "<li>\n      <button class=\"page-btn\" onclick=\"goToPage(1)\">1</button>\n      </li>\n      <li>\n      <button class=\"page-sep\">\u2026</button>\n      </li>";
  }

  for (var i = from; i <= to; i++) {
    items += '<li>';

    if (page === i) {
      items += "<span class=\"page-active\">".concat(i, "</span>");
    } else {
      items += "<button class=\"page-btn\" onclick=\"goToPage(".concat(i, ")\">").concat(i, "</button>");
    }

    items += '</li>';
  }

  if (showLast) {
    items += "<li>\n      <button class=\"page-sep\">\u2026</button>\n      </li>\n      <li>\n      <button class=\"page-btn\" onclick=\"goToPage(".concat(totalPages, ")\">").concat(totalPages, "</button>\n      </li>");
  }

  items += "<li>\n      <button class=\"page-btn\" ".concat(page == totalPages ? 'disabled' : '', " onclick=\"goToPage(").concat(page + 1, ")\">\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n            <polyline points=\"9 18 15 12 9 6\" />\n        </svg>\n      </button>\n        </li>\n    ");
  document.querySelector('.pagination').innerHTML = items;
}