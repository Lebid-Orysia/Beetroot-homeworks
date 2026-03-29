document.addEventListener('change', function (e) {
  if (e.target.classList.contains('file-filed')) {
    e.target.nextElementSibling.innerText = e.target.files[0].name;
  }
});

$(document).ready(function () {
  $('select').select2();
});
