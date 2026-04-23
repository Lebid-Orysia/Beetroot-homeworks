
const checkbox = document.getElementById('videoToggle');
const video = document.getElementById('bgVideo');
const placeholder = document.querySelector('.image');
const playIcon = document.querySelector('.play-icon');  

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    video.style.visibility = 'visible';
    placeholder.style.display = 'none';
    playIcon.style.display = 'none'; 
  } else {
    video.style.visibility = 'hidden';
    placeholder.style.display = 'block'; 
    playIcon.style.display = 'block';
  }
});

// animation
    
    wow = new WOW({

      animateClass: 'animate__animated',

    })
    wow.init();


// mobile menu
    document.getElementById('hamb-btn').onclick = function () {
      this.classList.add('is-active')
      document.body.classList.add('mob-show')
    }

    document.querySelector('.overlay').onclick = function () {
      document.getElementById('hamb-btn').classList.remove('is-active')
      document.body.classList.remove('mob-show')
    }


// lazy loading