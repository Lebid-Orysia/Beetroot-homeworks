"use strict";

function findAge() {
  var input = document.getElementById('userAge').value;

  if (input === "") {
    document.getElementById('answ').innerHTML = 'Try again';
    return;
  }

  var age = +input;

  if (age < 0) {
    document.getElementById('answ').innerHTML = 'Try again';
  } else if (age <= 11) {
    document.getElementById('answ').innerHTML = 'You are a child';
  } else if (age <= 17) {
    document.getElementById('answ').innerHTML = 'You are a teenager';
  } else if (age <= 59) {
    document.getElementById('answ').innerHTML = 'You are an adult';
  } else if (age >= 100) {
    document.getElementById('answ').innerHTML = 'You are vampire';
  }
} // ...............................................


function getCharacter() {
  var number = +document.getElementById('num').value;

  switch (number) {
    case 0:
      document.getElementById('character').textContent = "Character is ')'";
      break;

    case 1:
      document.getElementById('character').textContent = "Character is '!'";
      break;

    case 2:
      document.getElementById('character').textContent = "Character is '@'";
      break;

    case 3:
      document.getElementById('character').textContent = "Character is '#'";
      break;

    case 4:
      document.getElementById('character').textContent = "Character is '$'";
      break;

    case 5:
      document.getElementById('character').textContent = "Character is '%'";
      break;

    case 6:
      document.getElementById('character').textContent = "Character is '^'";
      break;

    case 7:
      document.getElementById('character').textContent = "Character is '&'";
      break;

    case 8:
      document.getElementById('character').textContent = "Character is '*'";
      break;

    case 9:
      document.getElementById('character').textContent = "Character is '('";
      break;

    default:
      document.getElementById('character').textContent = "Try again";
  }

  ;
} // ...................................................


function calcRange() {
  var input1 = document.getElementById('num1').value;
  var input2 = document.getElementById('num2').value;

  if (input1 === "" || input2 === "" || isNaN(input1) || isNaN(input2)) {
    document.getElementById('result').textContent = "Введи числа";
    return;
  }

  var num1 = +input1;
  var num2 = +input2;
  var min = Math.min(num1, num2);
  var max = Math.max(num1, num2);
  var sum = 0;

  for (var i = min; i <= max; i++) {
    sum += i;
  }

  document.getElementById('result').textContent = "\u0421\u0443\u043C\u0430: ".concat(sum);
} // .....................................................


function calcDivider() {
  var firstValue = document.getElementById('first-num').value;
  var secondValue = document.getElementById('second-num').value;
  var firstNum = Number(firstValue);
  var secondNum = Number(secondValue);

  if (firstValue.trim() === '' || secondValue.trim() === '' || isNaN(firstNum) || isNaN(secondNum)) {
    document.getElementById('divider').textContent = "Введи числа";
    return;
  }

  var min = Math.min(firstNum, secondNum);

  for (var i = min; i >= 1; i--) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      document.getElementById('divider').textContent = "\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0441\u043F\u0456\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A ".concat(i);
      break;
    }
  }
} // ............................................


function showDividers() {
  var number = document.getElementById('number').value;

  if (isNaN(number) || number <= 0) {
    document.getElementById('divider2').innerHTML = "Введіть коректне число";
  }

  var result = "Дільники числа " + number + ": ";

  for (var i = 1; i <= number; i++) {
    if (number % i === 0) {
      result += i + " ";
    }

    document.getElementById('divider2').innerHTML = result;
  }
} // .......................................


function changeUserNum() {
  var number = +document.getElementById('userNum').value;

  if (number < 10000 || number > 99999) {
    document.getElementById('reverseUserNum').textContent = "Число має бути пʼятизначне";
  } else {
    var firstDigit = Math.floor(number / 10000);
    var secondDigit = Math.floor(number % 10000 / 1000);
    var thirdDigit = Math.floor(number % 1000 / 100);
    var fourthDigit = Math.floor(number % 100 / 10);
    var fifthDigit = number % 10;
    var reversed = fifthDigit * 10000 + fourthDigit * 1000 + thirdDigit * 100 + secondDigit * 10 + firstDigit;
    document.getElementById('reverseUserNum').textContent = reversed;
  }
} // ............................................


function calcDiscount() {
  var sumBeforeDiscount = +document.getElementById('sum').value;
  var result = document.getElementById('discount');

  if (isNaN(sumBeforeDiscount) || sumBeforeDiscount < 0) {
    result.innerHTML = 'Спробуйте ще раз';
    return;
  }

  var discount = 0;

  if (sumBeforeDiscount < 200) {
    result.innerHTML = 'Знижки немає';
    return;
  } else if (sumBeforeDiscount >= 200 && sumBeforeDiscount < 300) {
    discount = 0.03;
  } else if (sumBeforeDiscount >= 300 && sumBeforeDiscount < 500) {
    discount = 0.05;
  } else if (sumBeforeDiscount >= 500) {
    discount = 0.07;
  }

  var finalSum = sumBeforeDiscount * (1 - discount);
  result.innerHTML = "\u0421\u0443\u043C\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E: ".concat(finalSum.toFixed(2));
} // ...................................................


function calcQuantity() {
  var positive = 0,
      negative = 0,
      zero = 0,
      even = 0,
      odd = 0;

  for (var i = 0; i < 10; i++) {
    var number = +prompt("Enter a number:");

    if (isNaN(number)) {
      console.log("Try again");
      i--;
      continue;
    }

    if (number > 0) {
      positive++;
    } else if (number < 0) {
      negative++;
    } else {
      zero++;
    }

    if (number % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  document.getElementById('statistics').innerHTML = "Positive numbers: ".concat(positive, ", Negative numbers: ").concat(negative, ", Zeros: ").concat(zero, ", Even numbers: ").concat(even, ", Odd numbers: ").concat(odd);
} //................................................


function showNextDay(params) {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var index = 0;

  while (true) {
    var showNext = confirm("".concat(days[index], ". Do you want to see the next day?"));
    if (!showNext) break;
    index = (index + 1) % days.length;
  }
} // .....................................................


function guessNum() {
  var minimum = 0;
  var maximum = 100;

  while (true) {
    var n = Math.floor((minimum + maximum) / 2);
    var answer1 = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E > ".concat(n, ", < ").concat(n, " \u0430\u0431\u043E == ").concat(n, "?"));

    if (answer1 === '==') {
      alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0446\u0435 ".concat(n));
      break;
    } else if (answer1 === '>') {
      minimum = n;
    } else if (answer1 === '<') {
      maximum = n;
    } else {
      alert('Введи тільки >, < або ==');
    }
  }
} // ............................................


var size = 10;
var html = '';

for (var i = 0; i <= size; i++) {
  for (var j = 0; j <= size; j++) {
    var counter = i === 0 ? j : j === 0 ? i : i * j;
    html += "<div".concat(j === i ? ' class = "accent"' : '', " data-index=\"").concat(i, "_").concat(j, "\">").concat(counter || 'X', "</div>");
  }
}

document.getElementById('wrapper').innerHTML = html; // ...............................................

function getNextDay() {
  var day = +prompt('Напишіть день');
  var month = +prompt('Напишіть місяць');
  var year = +prompt('Напишіть рік у форматі "yyyy"');
  nextDay = day + 1;
  nextMonth = month;
  nextYear = year;
  alert("\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u0430\u0442\u0430 ".concat(nextDay, "-").concat(nextMonth, "-").concat(nextYear));
} // зробила все що могла