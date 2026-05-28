"use strict";

var AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDVkNDhkZjIxN2NiZDQ2NTIwNzEwNmYwYzkxYWEyZCIsIm5iZiI6MTc3OTk2MjgyNC4yMTIsInN1YiI6IjZhMTgxM2M4OTdmY2NmNTBjMmU3MTZmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._I3gjRKqEizSSdmfdrgV42a1Sfk5PzAreqadoNh51m4';
var DEV_MODE = true;
var loader = {
  show: function show() {
    document.body.classList.add('loader');
  },
  hide: function hide() {
    document.body.classList.remove('loader');
  }
};
var form = document.getElementById('search_movies_form');

var formatDate = function formatDate(dateStr) {
  var arDate = dateStr.split('-');
  return "".concat(arDate[2], ".").concat(arDate[1], ".").concat(arDate[0]);
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  search();
});

function search() {
  var formData, serializedString, url, resp, data, imageWait;
  return regeneratorRuntime.async(function search$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          loader.show();
          formData = new FormData(form);
          serializedString = new URLSearchParams(formData).toString();
          url = DEV_MODE ? './mocks/movies.json' : 'https://api.themoviedb.org/3/search/movie?' + serializedString;
          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(fetch(url, {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer ' + AUTH_TOKEN
            }
          }));

        case 7:
          resp = _context.sent;

          if (resp.ok) {
            _context.next = 10;
            break;
          }

          throw new Error('resp.status');

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(resp.json());

        case 12:
          data = _context.sent;
          showResult(data);
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](4);
          console.error(_context.t0);

        case 19:
          _context.prev = 19;
          loader.hide();
          return _context.finish(19);

        case 22:
          imageWait = document.getElementById('wait');
          imageWait.style.display = 'none';

        case 24:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 16, 19, 22]]);
}

function showResult(data) {
  var tmpl = document.getElementById('movie_list_item');
  var result = document.getElementById('result-wrapp');
  data.results.forEach(function (item) {
    var clone = document.importNode(tmpl.content, true);
    var img = clone.querySelector('.card img');
    img.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + item.poster_path);
    img.setAttribute('alt', item.title);
    clone.querySelector('.title').innerText = item.title;
    clone.querySelector('.subtitle').innerText = formatDate(item.release_date);
    clone.querySelector('.content').innerText = item.overview;
    clone.querySelector('.more_info').dataset.id = item.id;
    result.appendChild(clone);
  });
}

function getMovieDetali(id) {
  var url, resp, data;
  return regeneratorRuntime.async(function getMovieDetali$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          loader.show();
          url = DEV_MODE ? './mocks/movies.json' : 'https://api.themoviedb.org/3/search/movie/' + id;
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(fetch('https://api.themoviedb.org/3/movie/' + id, {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer ' + AUTH_TOKEN
            }
          }));

        case 5:
          resp = _context2.sent;

          if (resp.ok) {
            _context2.next = 8;
            break;
          }

          throw new Error('resp.status');

        case 8:
          _context2.next = 10;
          return regeneratorRuntime.awrap(resp.json());

        case 10:
          data = _context2.sent;
          console.log(data); // showResult(data)

          _context2.next = 17;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](2);
          console.error(_context2.t0);

        case 17:
          _context2.prev = 17;
          loader.hide();
          return _context2.finish(17);

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 14, 17, 20]]);
}

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('more_info')) {
    getMovieDetali(e.target.dataset.id);
  }
});