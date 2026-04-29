"use strict";

function calcSum(a, b) {
  var firstNum = document.getElementById('first-num').value;
  var secondNum = document.getElementById('second-num').value;
  var sum = +firstNum + +secondNum;
  document.getElementById("result").textContent = sum.toFixed(1);
} // ............................


function calcSum2(a, b) {
  var firstNum = document.getElementById('num1').value;
  var secondNum = document.getElementById('num2').value;

  if (isNaN(firstNum)) {
    var error = document.getElementById('error').textContent = 'You are trying to add letters ';
  } else {
    var sum = +firstNum + +secondNum;
    document.getElementById("result2").textContent = sum;
  }
} // .....................................


function calcFiles() {
  var usb = document.getElementById('usb').value;
  usb = usb * 1024;
  var files = Math.floor(usb / 820);
  document.getElementById('files').textContent = files + " файли поміститься на флешці";
} // ...................................


function calcChange() {
  var money = document.getElementById('money').value;
  var priceChocolate = document.getElementById('chocolate').value;
  var chocolates = Math.floor(money / priceChocolate);
  var change = money % priceChocolate;
  document.getElementById('changeResult').textContent = "Ви можете купити " + chocolates + " шоколадок. Здача: " + change;
} // ..............................


function changeUserNum() {
  var number = document.getElementById('userNum').value;

  if (number.length < 3 || number.length > 4) {
    document.getElementById('reverse-error').textContent = "Число має бути тризначне";
  } else {
    var reverseNumber = number.toString().split('').reverse().join('');
    document.getElementById('reverseUserNum').textContent = reverseNumber;
  }
} // ..............................


function calcInvestSum() {
  var deposit = +document.getElementById('deposit').value;
  var rate = 0.05;
  var months = 2;

  if (isNaN(deposit)) {
    document.getElementById('interest').textContent = "Введи коректне число";
    return;
  }

  var interest = deposit * rate * months / 12;
  document.getElementById('interest').textContent = "Сума нарахованих відсотків: " + interest.toFixed(2);
}