"use strict";

var checkbox = document.getElementById('videoToggle');
var video = document.getElementById('bgVideo');
var placeholder = document.querySelector('.image');
var playIcon = document.querySelector('.play-icon');
checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    video.style.visibility = 'visible';
    placeholder.style.display = 'none';
    playIcon.style.display = 'none';
  } else {
    video.style.visibility = 'hidden';
    placeholder.style.display = 'block';
    playIcon.style.display = 'block';
  }
}); // animation

wow = new WOW({
  animateClass: 'animate__animated'
});
wow.init(); // mobile menu

document.getElementById('hamb-btn').onclick = function () {
  this.classList.add('is-active');
  document.body.classList.add('mob-show');
};

document.querySelector('.overlay').onclick = function () {
  document.getElementById('hamb-btn').classList.remove('is-active');
  document.body.classList.remove('mob-show');
}; // lazy loading


var lazyLoadInstance = new LazyLoad({// Your custom settings go here
});