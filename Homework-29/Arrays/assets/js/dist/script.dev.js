"use strict";

var getEl = function getEl(id) {
  return document.getElementById(id);
};

function shopCartWrapper() {
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
  }]; // 1. Додавання товару в кошик

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
        qty: qty,
        isBuy: false
      });
      return 'add';
    }
  }

  function showProductList() {
    var html = '';

    if (CART.length) {
      [].concat(CART).sort(function (a, b) {
        return a.isBuy - b.isBuy;
      }).forEach(function (item, index) {
        var status = "<span class=\"tag is-".concat(item.isBuy ? 'success' : 'danger', "\">").concat(item.isBuy ? '✔️' : '✖️', "</span>");
        html += "<tr>\n          <td>".concat(index + 1, "</td>\n          <td>").concat(item.title, "</td>\n          <td>").concat(status, "</td>\n          <td>").concat(item.price.toFixed(2), "</td>\n          <td>\n              <button class=\"button is-success is-dark is-rounded is-small\" onclick=\"shopCart.actionProduct('").concat(item.title, "', 'decQty')\"> - </button>\n              <input class=\"input qty-input\" type=\"number\" min=\"1\" value=\"").concat(item.qty, "\" style=\"width: 60px; text-align: center; display: inline-block;\" readonly />\n              <button class=\"button is-success is-dark is-rounded is-small\" onclick=\"shopCart.actionProduct('").concat(item.title, "', 'incQty')\"> + </button>\n          </td>\n          <td>").concat((item.price * item.qty).toFixed(2), "</td>\n          <td>\n            ").concat(!item.isBuy ? "<button class=\"button is-success is-dark is-rounded is-small\" onclick=\"shopCart.actionProduct('".concat(item.title, "', 'buy')\">Buy</button>") : '', "\n            <button class=\"button is-danger is-dark is-rounded is-small\" onclick=\"shopCart.actionProduct('").concat(item.title, "', 'delete')\">Remove</button>\n          </td>\n          </tr>");
      });
    } else {
      html = "<tr><td colspan=\"7\" class=\"has-text-centered\">No products in cart</td></tr>";
    }

    getEl('products_list').innerHTML = html;
    calcCartTotal();
  }

  function removeProduct(title) {
    var ind = CART.findIndex(function (el) {
      return el.title === title;
    });

    if (ind !== -1 && confirm("Do you want to delete \"".concat(CART[ind].title, "\" from list?"))) {
      CART.splice(ind, 1);
    }
  }

  function actionProduct(title) {
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    if (!action) return;
    var ind = CART.findIndex(function (el) {
      return el.title === title;
    });
    if (ind === -1) return;

    switch (action) {
      case 'delete':
        removeProduct(title);
        break;

      case 'buy':
        CART[ind].isBuy = true;
        break;

      case 'incQty':
        CART[ind].qty += 1;
        break;

      case 'decQty':
        if (CART[ind].qty > 1) {
          CART[ind].qty -= 1;
        } else if (CART[ind].qty === 1) {
          removeProduct(title);
        }

        break;
    }

    showProductList();
  }

  function calcCartTotal() {
    var total = CART.reduce(function (acc, item) {
      return acc + item.price * item.qty;
    }, 0);
    getEl('cart_total').innerText = total.toFixed(2);
  }

  return {
    addToCart: addToCart,
    showProductList: showProductList,
    actionProduct: actionProduct,
    calcCartTotal: calcCartTotal
  };
}

var shopCart = shopCartWrapper();

function submitHandler(event) {
  if (event) event.preventDefault();
  var title = getEl('product_title').value.trim();
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

  var addResult = shopCart.addToCart(title, price, qty);
  shopCart.showProductList();
  var massage = addResult === 'add' ? 'Product successfully added to cart' : 'Product quantity successfully changed';
  toast.success(massage);
  getEl('product_title').value = '';
  getEl('product_price').value = '';
  getEl('product_qty').value = '1';
  return false;
}

shopCart.showProductList();