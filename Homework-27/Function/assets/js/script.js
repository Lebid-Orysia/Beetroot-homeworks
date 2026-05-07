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

function countGivenArgs(...args) {
  return args.length;
}

function countArgs() {
  const text = document.getElementById('args').value.trim();
  
  if (text === "") {
    document.getElementById('count').innerHTML = 0;
    return;
  }
  const parts = text.split(/\s+/); 

  const result = countGivenArgs(...parts); 

  document.getElementById('count').innerHTML = result;
}

// ................................................

function takeNambers() {
  let num1 = +document.getElementById('num1').value;
  let num2 = +document.getElementById('num2').value;
  let result;
    if (num1 < num2) {
      result = -1;
    }
    else if (num1 > num2) {
      result = 1;
    }
    else {
      result = 0;
    }
    document.getElementById('result').innerHTML = result;
}
// ..............................................
function countFactorial(n) {
  if (n < 0) return "не можливо визначити";
  if (n === 0 || n === 1) return 1;

  let factResult = 1;
  for (let i = 2; i <= n; i++) {
    factResult *= i;
  }
  return factResult;
}

function showFactorial() {
  const inptEl = document.getElementById('number');
  const factNumb = +inptEl.value;

  const finalResult = countFactorial(factNumb);

  document.getElementById('factorial').innerHTML = `Факторіал ${factNumb} дорівнює: ${finalResult}`
}

// ............................................
function combineNumb(n1, n2, n3) {
  let comb = String(n1) + String(n2) + String(n3);
  return Number(comb);
}

function showCombNum() {
  const n1 = document.getElementById('number1').value;
  const n2 = document.getElementById('number2').value;
  const n3 = document.getElementById('number3').value;

  const combResult = combineNumb(n1, n2, n3);

  document.getElementById('combNum').innerHTML = `Результат: ${combResult}`
}
// ..............................................

function area(length, width) {
    if (!width) {
        return length * length;
    } else {
        return length * width;
    }
}

function calcArea() {
  const length = +document.getElementById('length').value;
  const width = +document.getElementById('width').value;

  const areaResult = area(length, width);
  document.getElementById('area').innerHTML = `Площа дорівнює: ${areaResult}`;
}

// ............................................
function isPerfectNumb(inputNumb) {
  if (inputNumb <= 0) return false;
  let rslt = 0;

  for (let i = 1; i <= inputNumb/2; i++) {
     if (inputNumb % i === 0) {
        rslt += i;
     }
  }
  return rslt === inputNumb;
}

function findPerfectNumber() {
  const inputNumb = +document.getElementById('perfectNum').value;

  const perfectNumbResult = isPerfectNumb(inputNumb);

  document.getElementById('perfect-number').innerHTML = `Число ${inputNumb}: ${perfectNumbResult}`;
}

// ..........................................
function getRange() {
  const min = +document.getElementById('min-value').value;
  const max = +document.getElementById('mix-value').value;
  let rangeList = '';

  for (let i = min; i <= max; i++) {
    if (isPerfectNumb(i)) {
      if (rangeList !== '') {
        rangeList += ', ';
      }
      rangeList += i;
    }
  }
  const rangeNumbResult = document.getElementById('perfect-number2');
  if (rangeList !== '') {
    rangeNumbResult.innerHTML = `Досконалі числа: ${rangeList}`;
  } else {
    rangeNumbResult.innerHTML = `Досконалих чисел немає`;
  }
}

