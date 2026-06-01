"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toast = exports.formatDate = exports.loader = void 0;
var loader = {
  show: function show() {
    document.body.classList.add('loading');
  },
  hide: function hide() {
    document.body.classList.remove('loading');
  }
};
exports.loader = loader;

var formatDate = function formatDate(dateStr) {
  var arDate = dateStr.split('-');
  return "".concat(arDate[2], ".").concat(arDate[1], ".").concat(arDate[0]);
};

exports.formatDate = formatDate;
var toast = {
  error: function error(text) {
    this.show(text, 'error');
  },
  success: function success(text) {
    this.show(text, 'success');
  },
  show: function show(text, type) {
    var html = "<div id=\"my-toast\" class = \"my-toast ".concat(type, "\">\n     <p>").concat(text, "</p>\n      </div>");

    if (document.getElementById('my-toast')) {
      document.getElementById('my-toast').remove();
    }

    document.body.insertAdjacentHTML('afterbegin', html);
    setTimeout(function () {
      document.getElementById('my-toast').remove();
    }, 3000);
  }
};
exports.toast = toast;