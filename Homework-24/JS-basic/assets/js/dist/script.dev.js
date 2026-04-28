"use strict";

// // Назви змінних
// let firstName = "Орися";
// let lastName = "Лебідь";
// let userFullName = "Орися Лебідь";
// let person_name = "Орися";
// let 1name = "Орися";        //  не можна починати з цифри
// let user-name = "Орися";   // дефіс заборонений
// let let = "Орися";         //  зарезервоване слово
// let user name = "Орися";  //  пробіли не дозволені
// let @name = "Орися";       //  спецсимволи
// // // Cпособи коментування коду
// // // Це однорядковий коментар
// // /*
// //   Це
// //   багаторядковий
// //   коментар
// // */
// // // <!-- Це коментар в HTML -->
// // // Cтилі написання імен змінних
// 1. camelCase
// let currentUser = "Орися";
// // 2. snake_case
// let current_user = "Орися";
// // 3. PascalCase
// let CurrentUser = "Орися";
// // 4.UPPER_CASE
// const CURRENT_USER = "Орися";
// неправильно записана назва змінної
// // 4. kebab-case
// let current-user = "Орися";
function getUserName() {
  var userName = prompt("What is your name?");

  if (userName === null) {
    alert('Opps... Try again');
    getUserName();
    return;
  }

  if (userName === '') {
    alert('Please tell me your name');
    getUserName();
    return;
  }

  if (!isNaN(userName)) {
    alert('This is not name...');
    getUserName();
    return;
  }

  if (userName.length < 2) {
    alert('Name too short');
    getUserName();
    return;
  }

  alert('Hello, ' + userName);
} // ...........................


function getUserAge() {
  var CURRENT_YEAR = new Date().getFullYear();
  var birthYear = prompt("What is your birth year?");

  if (birthYear === null) {
    alert('Opppss...');
    getUserAge();
    return;
  }

  if (birthYear.length < 4) {
    alert('Enter the correct year');
    getUserAge();
    return;
  }

  if (isNaN(birthYear)) {
    alert('It is not a number');
    getUserAge();
    return;
  }

  var age = CURRENT_YEAR - birthYear;
  var currentAge = alert('Your age is ' + age);
} // ......................................


function calcSquare() {
  var sideSquare = prompt("Enter the length of the side");

  if (sideSquare === null) {
    alert('It is not a valid value');
    calcSquare();
    return;
  }

  if (sideSquare === '') {
    alert('You can not skip this');
    calcSquare();
    return;
  }

  if (isNaN(parseInt(sideSquare))) {
    alert('It is not a number');
    calcSquare();
    return;
  }

  var sqr = +sideSquare * 4;
  alert('The perimeter of the square is ' + sqr);
} // ........................................


function calcRadius() {
  var radius = prompt("Type the radius of the circle?");

  if (radius === null) {
    alert('It is not a valid value');
    calcSquare();
    return;
  }

  if (radius === '') {
    alert('You can not skip this');
    calcSquare();
    return;
  }

  if (isNaN(parseInt(radius))) {
    alert('It is not a number');
    calcSquare();
    return;
  }

  var circleArea = Math.PI * Math.pow(radius, 2);
  alert('The area of the circle is ' + circleArea);
} // ....................................


function calcDistance() {
  var distance = Number(prompt("Enter distance (km):"));
  var timeMinutes = Number(prompt("Enter time (minutes):"));
  var timeHours = timeMinutes / 60;
  var speed = distance / timeHours;
  var time = timeMinutes / 60;

  if (time === 0) {
    alert("You can't divide by zero!");
    prompt('Type time again');
  }

  alert("Required speed: ".concat(speed, " km/h"));
} // ....................................


function converter() {
  var dollar = +prompt("Type the amount of dollars?");
  var euro = dollar * 0.85;
  alert("You get " + euro + " euros");
}