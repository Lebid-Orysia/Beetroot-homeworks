
// ================= VIDEO TOGGLE =================
const checkbox = document.getElementById('videoToggle');
const video = document.getElementById('bgVideo');
const placeholder = document.querySelector('.image');
const playIcon = document.querySelector('.play-icon');

if (checkbox && video && placeholder && playIcon) {
  checkbox.addEventListener('change', () => {
    const isActive = checkbox.checked;

    video.style.visibility = isActive ? 'visible' : 'hidden';
    placeholder.style.display = isActive ? 'none' : 'block';
    playIcon.style.display = isActive ? 'none' : 'block';
  });
}


// ================= WOW ANIMATION =================
if (typeof WOW !== 'undefined') {
  const wow = new WOW({
    animateClass: 'animate__animated',
  });
  wow.init();
}


// ================= MOBILE MENU =================
const hambBtn = document.getElementById('hamb-btn');
const overlay = document.querySelector('.overlay');

if (hambBtn) {
  hambBtn.addEventListener('click', () => {
    hambBtn.classList.add('is-active');
    document.body.classList.add('mob-show');
  });
}

if (overlay && hambBtn) {
  overlay.addEventListener('click', () => {
    hambBtn.classList.remove('is-active');
    document.body.classList.remove('mob-show');
  });
}


// ================= LAZY LOAD =================
if (typeof LazyLoad !== 'undefined') {
  new LazyLoad({});
}