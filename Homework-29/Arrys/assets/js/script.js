const CART = [
  {
    title: 'buckwheat',
    price: 76.00,
    isBuy: false,
    qty: 2
  },
  {
    title: 'dumplings',
    price: 186.00,
    isBuy: true,
    qty: 1
  },
  {
    title: 'sour cream',
    price: 56.5,
    isBuy: true,
    qty: 1
  },
  {
    title: 'butter',
    price: 110.00,
    isBuy: false,
    qty: 1
  },
  {
    title: 'ice cream',
    price: 35.00,
    isBuy: true,
    qty: 4
  },
]

const getEl = (id) => document.getElementById(id)

function submitHandler() {
  event.preventDefault()
  const title = getEl('product_title').value
  const price = getEl('product_price').valueAsNumber
  const qty = getEl('product_qty').valueAsNumber

  if (title === '') {
    toast.error('Enter product title')
    return false
  }
  if (isNaN(price) || price <= 0) {
    toast.error('Enter product price')
    return false
  }
  if (isNaN(qty) || qty <= 0) {
    toast.error('Enter product quantity')
    return false
  }

  const addResult = addToCart(title, price, qty)

  showProductList() 

  const massage = addResult === 'add'
  ? 'Product successfully added to cart'
  : 'Product quantity successfully changed'

  toast.success(massage)
  return false
}

function addToCart(title, price, qty){
const findedEl = CART.find((el) => el.title.toLocaleLowerCase() === title.toLocaleLowerCase())

if(findedEl){
  findedEl.qty += qty
  return 'update'
} else {
  CART.push({
    title,
    price,
    qty
  })
  return 'add'
 }
}

function showProductList() {
  let html = ''
  if(CART.length) {
    CART.toSorted((a,b) => a.isBuy - b.isBuy)
        .forEach((item, index) => {
      const status = `<span class = "tag is-${item.isBuy ? 'success' : 'danger'}">${item.isBuy ? '✔️' : '✖️'}</span>`
      html += `<tr>
      <td>${index + 1}</td>
      <td>${item.title}</td>
      <td>${status}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>
          <button class="button is-success is-dark is-rounded is-small" onclick="actionProduct('${item.title}', 'decQty')"> - </button>
          <input class="input qty-input" type="number" min="1" value="${item.qty}" />
          <button class="button is-success is-dark is-rounded is-small" onclick="actionProduct('${item.title}', 'incQty')"> + </button>
      </td>
      <td>${(item.price * item.qty).toFixed(2)}</td>
      <td>
        ${!item.isBuy ? '<button class="button is-success is-dark is-rounded is-small" onclick="actionProduct(\''+item.title+'\', \'buy\')">Buy</button>' : ''}
        ${!item.isBuy ? '<button class="button is-danger is-dark is-rounded is-small" onclick="actionProduct(\''+item.title+'\', \'delete\')">Remove</button>' : ''}
      </td>
      </tr>`
    })
  }else{
    html = `<tr>
    <td colspan='5'>No products in cart</td>
    </tr>`
  }

  const totalBuy = CART
    .filter(el => el.isBuy)
    .reduce((acc, item) => acc + item.price * item.qty, 0)
  const totalNotBuy = CART
    .filter(el => !el.isBuy)
    .reduce((acc, item) => acc + item.price * item.qty, 0)

  getEl('products_list').innerHTML = html
  calcCartTotal()
}

function removeProduct(ind) {
  if (confirm(`Do you want delete "${CART[ind].title}" from list?`)) {
    CART.splice(ind, 1)
  }
}

function actionProduct(title, action = '') {
  if(!action) return

  const ind = CART.findIndex(el => el.title === title)
  switch(action){
    case 'delete':
      removeProduct(ind)
      break
    case 'buy':
      CART[ind].isBuy = true
      break
    case 'incQty':
      CART[ind].qty += 1
      break
    case 'decQty':
      if(CART[ind].qty > 1) {
        CART[ind].qty -= 1
      }else if(CART[ind].qty == 1) {
        actionProduct(title, 'delete')
      }
      break
  }

  showProductList()
}

function calcCartTotal() {
  const total = CART.reduce((acc, item) => acc + item.price * item.qty, 0)
  getEl('cart_total').innerText = total.toFixed(2)
}

showProductList() 