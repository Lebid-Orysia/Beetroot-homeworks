"use strict";

// ================= VIDEO TOGGLE =================
var checkbox = document.getElementById('videoToggle');
var video = document.getElementById('bgVideo');
var placeholder = document.querySelector('.image');
var playIcon = document.querySelector('.play-icon');

if (checkbox && video && placeholder && playIcon) {
  checkbox.addEventListener('change', function () {
    var isActive = checkbox.checked;
    video.style.visibility = isActive ? 'visible' : 'hidden';
    placeholder.style.display = isActive ? 'none' : 'block';
    playIcon.style.display = isActive ? 'none' : 'block';
  });
} // ================= WOW ANIMATION =================


if (typeof WOW !== 'undefined') {
  var wow = new WOW({
    animateClass: 'animate__animated'
  });
  wow.init();
} // ================= MOBILE MENU =================


var hambBtn = document.getElementById('hamb-btn');
var overlay = document.querySelector('.overlay');

if (hambBtn) {
  hambBtn.addEventListener('click', function () {
    hambBtn.classList.add('is-active');
    document.body.classList.add('mob-show');
  });
}

if (overlay && hambBtn) {
  overlay.addEventListener('click', function () {
    hambBtn.classList.remove('is-active');
    document.body.classList.remove('mob-show');
  });
} // ================= LAZY LOAD =================


if (typeof LazyLoad !== 'undefined') {
  new LazyLoad({});
}