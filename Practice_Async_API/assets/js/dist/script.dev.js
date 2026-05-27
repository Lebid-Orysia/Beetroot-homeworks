"use strict";

// function getUsers() {
//   loader.show()
//   fetch('https://jsonplaceholder.typicode.com/users/')
//   .then((response) => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`Code: ${response.status}`)
//     }
//     const data = response.json()
//     return data
//   })
//   .then((data) => {
//     showUsers(data);
//     loader.hide()
//   })
//   .catch((err) => {
//     console.log(err)
//     loader.hide()
//     alert('An error occured. Try again, please')
//   })
// }
var loader = {
  show: function show() {
    document.body.classList.add('loader');
  },
  hide: function hide() {
    document.body.classList.remove('loader');
  }
};
var usersList = [];

function getUsers() {
  var response, data;
  return regeneratorRuntime.async(function getUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          loader.show();
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch('https://jsonplaceholder.typicode.com/users/'));

        case 4:
          response = _context.sent;

          if (response.ok) {
            _context.next = 7;
            break;
          }

          throw new Error("Code: ".concat(response.status));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          data = _context.sent;
          usersList = data;
          showUsers(data);
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
          alert('An error occurred. Try again, please');

        case 18:
          _context.prev = 18;
          loader.hide();
          return _context.finish(18);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 14, 18, 21]]);
}

function showUsers(users) {
  var rows = '';
  users.forEach(function (user) {
    rows += "<tr onclick=\"getSingleUser(".concat(user.id, ")\" style=\"cursor: pointer;\">\n      <td>").concat(user.id, "</td>\n      <td>").concat(user.name, "</td>\n    </tr>");
  });
  document.getElementById('users_tbody').innerHTML = rows;
}

function getSingleUser(id) {
  var response, singleUser, userCard;
  return regeneratorRuntime.async(function getSingleUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          loader.show();
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch("https://jsonplaceholder.typicode.com/users/".concat(id)));

        case 4:
          response = _context2.sent;

          if (response.ok) {
            _context2.next = 7;
            break;
          }

          throw new Error("Code: ".concat(response.status));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          singleUser = _context2.sent;
          userCard = "\n      <div>\n        <h3>\u0414\u0435\u0442\u0430\u043B\u0456 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430</h3>\n        <p><strong>ID:</strong> ".concat(singleUser.id, "</p>\n        <p><strong>\u0406\u043C'\u044F:</strong> ").concat(singleUser.name, "</p>\n        <p><strong>Username:</strong> ").concat(singleUser.username, "</p>\n        <p><strong>Email:</strong> ").concat(singleUser.email, "</p>\n        <p><strong>\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</strong> ").concat(singleUser.phone, "</p>\n        <p><strong>\u0412\u0435\u0431-\u0441\u0430\u0439\u0442:</strong> ").concat(singleUser.website, "</p>\n        <p><strong>\u0410\u0434\u0440\u0435\u0441\u0430:</strong> \u043C. ").concat(singleUser.address.city, ", \u0432\u0443\u043B. ").concat(singleUser.address.street, "</p>\n        <p><strong>\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F:</strong> ").concat(singleUser.company.name, "</p>\n      </div>");
          document.getElementById('single_user').innerHTML = userCard;
          _context2.next = 18;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](1);
          console.error(_context2.t0);
          alert('Не вдалося завантажити дані користувача.');

        case 18:
          _context2.prev = 18;
          loader.hide();
          return _context2.finish(18);

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 14, 18, 21]]);
}