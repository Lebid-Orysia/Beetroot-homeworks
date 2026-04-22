
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


    
