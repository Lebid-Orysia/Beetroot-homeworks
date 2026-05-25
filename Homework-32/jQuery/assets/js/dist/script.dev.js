"use strict";

$(document).ready(function () {
  $("#lightSlider").lightSlider({
    item: 1,
    // Показувати по 1 слайду на екрані
    mode: 'slide',
    // Саме гортання вбік
    speed: 1200,
    // Швидкість перегортання (1.2 секунди — рух буде м'яким і плавним)
    pause: 3500,
    // Слайд нерухомо стоїть на екрані 3.5 секунди
    auto: true,
    // Автоматичне перемикання
    loop: true,
    // Безкінечне коло (після 3-го слайда знову піде 1-й)
    slideMove: 1,
    // Гортати по одному елементу
    slideMargin: 0,
    // Без відступів між слайдами
    pager: true,
    // Крапочки знизу (можна змінити на false, якщо не потрібні)
    controls: false // Стрілки вліво/вправо (можна змінити на false)

  });
});
$(document).ready(function () {
  var catalogSlider = $("#catalogSlider").lightSlider({
    item: 5,
    // Показувати 5 елементів одночасно на великих екранах
    loop: true,
    // Безкінечне коло (циклічне гортання)
    auto: false,
    // Вимкнено автоматичне гортання (тільки за бажанням користувача)
    slideMove: 1,
    // Гортати рівно по 1 елементу за один клік
    speed: 600,
    // Швидкість руху (для ручного гортання 600мс — оптимально, щоб не було затримок)
    slideMargin: 30,
    // Краще додати невеликий відступ (в пікселях) між картками товарів
    pager: false,
    // Крапочки знизу зазвичай вимикають, коли елементів багато (можна повернути true)
    controls: false,
    // Стрілки вліво/вправо увімкнені
    // Адаптивність під мобільні телефони та планшети
    responsive: [{
      breakpoint: 1024,
      // Для екранів менше 1024px (планшети)
      settings: {
        item: 3,
        // Показувати 3 елементи
        slideMove: 1
      }
    }, {
      breakpoint: 768,
      // Для екранів менше 768px (смартфони)
      settings: {
        item: 1,
        // Показувати по 1 елементу
        slideMove: 1
      }
    }]
  });
  $('#goToPrevSlide').click(function () {
    catalogSlider.goToPrevSlide();
  });
  $('#goToNextSlide').click(function () {
    catalogSlider.goToNextSlide();
  });
});
$(document).ready(function () {
  // 1. Спочатку просто ініціалізуємо слайдер
  var partnerSlider = $("#partnerSlider").lightSlider({
    item: 9,
    loop: true,
    auto: false,
    slideMove: 1,
    speed: 600,
    slideMargin: 30,
    pager: false,
    controls: false,
    // Власні стрілки, тому стандартні вимкнені
    responsive: [{
      breakpoint: 1024,
      settings: {
        item: 6,
        slideMove: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        item: 2,
        slideMove: 1
      }
    }]
  }); // <-- Тут закрили налаштування слайдера
  // 3. Вішаємо події на ваші кастомні кнопки

  $('#goToPrevSlide2').click(function () {
    partnerSlider.goToPrevSlide();
  });
  $('#goToNextSlide2').click(function () {
    partnerSlider.goToNextSlide();
  });
});