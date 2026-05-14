"use strict";

var CART = [{
  title: 'buckwheat',
  price: 76.00,
  isBuy: false,
  qty: 2
}, {
  title: 'dumplings',
  price: 186.00,
  isBuy: true,
  qty: 1
}, {
  title: 'sour cream',
  price: 56.5,
  isBuy: true,
  qty: 1
}, {
  title: 'butter',
  price: 110.00,
  isBuy: false,
  qty: 1
}, {
  title: 'ice cream',
  price: 35.00,
  isBuy: true,
  qty: 4
}];

var getEl = function getEl(id) {
  return document.getElementById(id);
};

function submitHandler() {
  event.preventDefault();
  var title = getEl('product_title').value;
  var price = getEl('product_price').valueAsNumber;
  var qty = getEl('product_qty').valueAsNumber;

  if (title === '') {
    toast.error('Enter product title');
    return false;
  }

  if (isNaN(price) || price <= 0) {
    toast.error('Enter product price');
    return false;
  }

  if (isNaN(qty) || qty <= 0) {
    toast.error('Enter product quantity');
    return false;
  }

  var addResult = addToCart(title, price, qty);
  showProductList();
  var massage = addResult === 'add' ? 'Product successfully added to cart' : 'Product quantity successfully changed';
  toast.success(massage);
  return false;
}

function addToCart(title, price, qty) {
  var findedEl = CART.find(function (el) {
    return el.title.toLocaleLowerCase() === title.toLocaleLowerCase();
  });

  if (findedEl) {
    findedEl.qty += qty;
    return 'update';
  } else {
    CART.push({
      title: title,
      price: price,
      qty: qty
    });
    return 'add';
  }
}

function showProductList() {
  var html = '';

  if (CART.length) {
    CART.forEach(function (item, index) {
      var status = "<span class = \"tag is-".concat(item.isBuy ? 'success' : 'dark', "\">").concat(item.isBuy ? 'Yes' : 'No', "</span>");
      html += "<tr>\n      <td>".concat(index + 1, "</td>\n      <td>").concat(item.title, "</td>\n      <td>").concat(status, "</td>\n      <td>").concat(item.price.toFixed(2), "</td>\n      <td>").concat(item.qty, "</td>\n      <td>").concat((item.price * item.qty).toFixed(2), "</td>\n      <td>\n        ").concat(!item.isBuy ? '<button class="button is-success is-dark is-rounded is-small">Buy</button>' : '', "\n      </td>\n      </tr>");
    });
  } else {
    html = "<tr>\n    <td colspan='5'>No products in cart</td>\n    </tr>";
  }

  var totalBuy = CART.filter(function (el) {
    return el.isBuy;
  }).reduce(function (acc, item) {
    return acc + item.price * item.qty;
  }, 0);
  var totalNotBuy = CART.filter(function (el) {
    return !el.isBuy;
  }).reduce(function (acc, item) {
    return acc + item.price * item.qty;
  }, 0);
  getEl('products_list').innerHTML = html;
  calcCartTotal();
}

function calcCartTotal() {
  var total = CART.reduce(function (acc, item) {
    return acc + item.price * item.qty;
  }, 0);
  getEl('cart_total').innerText = total.toFixed(2);
}

showProductList();