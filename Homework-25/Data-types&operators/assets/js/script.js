
function calcSum(a, b) {
  const firstNum = document.getElementById('first-num').value
  const secondNum = document.getElementById('second-num').value
  const sum = +(firstNum) + +(secondNum)
  document.getElementById("result").textContent = sum.toFixed(1);
}

// ............................

function calcSum2(a, b) {
  const firstNum = document.getElementById('num1').value
  const secondNum = document.getElementById('num2').value

  if (isNaN(firstNum)) {
    const error = document.getElementById('error').textContent = 'You are trying to add letters '
  }
  else {
    const sum = +(firstNum) + +(secondNum)
    document.getElementById("result2").textContent = sum;
  }
}


// .....................................
function calcFiles() {
  let usb = document.getElementById('usb').value
  usb = usb * 1024
  const files = Math.floor(usb / 820)
  document.getElementById('files').textContent = files + " файли поміститься на флешці"
}


// ...................................

function calcChange() {
  let money = document.getElementById('money').value
  let priceChocolate = document.getElementById('chocolate').value
  let chocolates = Math.floor(money / priceChocolate)
  let change = money % priceChocolate
  document.getElementById('changeResult').textContent = "Ви можете купити " + chocolates + " шоколадок. Здача: " + change
}

// ..............................

function changeUserNum() {
  let number = document.getElementById('userNum').value
  if (number.length < 3 || number.length > 4) {
    document.getElementById('reverse-error').textContent = "Число має бути тризначне"
  }
  else {
    let reverseNumber = number.toString().split('').reverse().join('');
    document.getElementById('reverseUserNum').textContent = reverseNumber
  }
}

// ..............................
function calcInvestSum() {
  let deposit = +(document.getElementById('deposit').value)
  const rate = 0.05
  const months = 2
  if (isNaN(deposit)) {
    document.getElementById('interest').textContent = "Введи коректне число";
    return;
  }
  let interest = deposit * rate * months / 12;
  document.getElementById('interest').textContent = "Сума нарахованих відсотків: " + interest.toFixed(2)
}
