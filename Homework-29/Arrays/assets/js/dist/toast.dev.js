"use strict";

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