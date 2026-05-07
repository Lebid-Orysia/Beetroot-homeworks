"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// // Function Declaration
// function sayHi() {
//   alert( "Привіт" );
// }
// // // Function Expression
// let sayHello = function() {
//   alert( "Привіт" );
// };
// // // Стрілкова функція
// () => {}
// // // Чиста функція
// function add(a, b) {
//   return a + b;
// }
// // // Анонімна функція 
// const sum = function(a, b) { return a + b; };
// // Callback функція 
// // функція, яка передається як аргумент в іншу функцію і викликається («викликається назад») після завершення певної операції
// // Асинхронна функція
//   async function fetchData() {
//   const response = await fetch('https://api.example.com/data'); 
//   const data = await response.json(); 
//   return data;
// }
// // Рекурсивна функція
// function recursiveFunction(data) {
//   if (умова_зупинки) {
//     return кінцевий_результат;
//   }
//   return recursiveFunction(modifiedData);
// }
// // Функція замикання
// function createCrate() {
//   let secretValue = "змінна всередині"; 
//   return function() {
//     console.log(secretValue);
//   };
// }
// const myClosure = createCrate(); 
// myClosure();
// ............................................
function countGivenArgs() {
  return arguments.length;
}

function countArgs() {
  var text = document.getElementById('args').value.trim();

  if (text === "") {
    document.getElementById('count').innerHTML = 0;
    return;
  }

  var parts = text.split(/\s+/);
  var result = countGivenArgs.apply(void 0, _toConsumableArray(parts));
  document.getElementById('count').innerHTML = result;
} // ................................................


function takeNambers() {
  var num1 = +document.getElementById('num1').value;
  var num2 = +document.getElementById('num2').value;
  var result;

  if (num1 < num2) {
    result = -1;
  } else if (num1 > num2) {
    result = 1;
  } else {
    result = 0;
  }

  document.getElementById('result').innerHTML = result;
} // ..............................................


function countFactorial(n) {
  if (n < 0) return "не можливо визначити";
  if (n === 0 || n === 1) return 1;
  var factResult = 1;

  for (var i = 2; i <= n; i++) {
    factResult *= i;
  }

  return factResult;
}

function showFactorial() {
  var inptEl = document.getElementById('number');
  var factNumb = +inptEl.value;
  var finalResult = countFactorial(factNumb);
  document.getElementById('factorial').innerHTML = "\u0424\u0430\u043A\u0442\u043E\u0440\u0456\u0430\u043B ".concat(factNumb, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454: ").concat(finalResult);
} // ............................................


function combineNumb(n1, n2, n3) {
  var comb = String(n1) + String(n2) + String(n3);
  return Number(comb);
}

function showCombNum() {
  var n1 = document.getElementById('number1').value;
  var n2 = document.getElementById('number2').value;
  var n3 = document.getElementById('number3').value;
  var combResult = combineNumb(n1, n2, n3);
  document.getElementById('combNum').innerHTML = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(combResult);
} // ..............................................


function area(length, width) {
  if (!width) {
    return length * length;
  } else {
    return length * width;
  }
}

function calcArea() {
  var length = +document.getElementById('length').value;
  var width = +document.getElementById('width').value;
  var areaResult = area(length, width);
  document.getElementById('area').innerHTML = "\u041F\u043B\u043E\u0449\u0430 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454: ".concat(areaResult);
} // ............................................


function isPerfectNumb(inputNumb) {
  if (inputNumb <= 0) return false;
  var rslt = 0;

  for (var i = 1; i <= inputNumb / 2; i++) {
    if (inputNumb % i === 0) {
      rslt += i;
    }
  }

  return rslt === inputNumb;
}

function findPerfectNumber() {
  var inputNumb = +document.getElementById('perfectNum').value;
  var perfectNumbResult = isPerfectNumb(inputNumb);
  document.getElementById('perfect-number').innerHTML = "\u0427\u0438\u0441\u043B\u043E ".concat(inputNumb, ": ").concat(perfectNumbResult);
} // ..........................................


function getRange() {
  var min = +document.getElementById('min-value').value;
  var max = +document.getElementById('mix-value').value;
  var rangeList = '';

  for (var i = min; i <= max; i++) {
    if (isPerfectNumb(i)) {
      if (rangeList !== '') {
        rangeList += ', ';
      }

      rangeList += i;
    }
  }

  var rangeNumbResult = document.getElementById('perfect-number2');

  if (rangeList !== '') {
    rangeNumbResult.innerHTML = "\u0414\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0456 \u0447\u0438\u0441\u043B\u0430: ".concat(rangeList);
  } else {
    rangeNumbResult.innerHTML = "\u0414\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0438\u0445 \u0447\u0438\u0441\u0435\u043B \u043D\u0435\u043C\u0430\u0454";
  }
}