"use strict";

var textView = document.getElementById('text-view');
var textEdit = document.getElementById('text-edit');
document.addEventListener('keydown', function (event) {
  if ((event.ctrlKey || event.metaKey) && event.code === 'KeyE') {
    event.preventDefault();

    if (!textView.classList.contains('hidden')) {
      textEdit.value = textView.textContent;
      textView.classList.add('hidden');
      textEdit.classList.remove('hidden');
      textEdit.focus();
    }
  }

  if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
    event.preventDefault();

    if (!textEdit.classList.contains('hidden')) {
      textView.textContent = textEdit.value;
      textEdit.classList.add('hidden');
      textView.classList.remove('hidden');
    }
  }
}); // ......................................................

var table = document.getElementById('sortable-table');
var headers = table.querySelectorAll('th');
var tbody = table.querySelector('tbody');
var rows = tbody.querySelectorAll('tr');
headers.forEach(function (header, index) {
  header.addEventListener('click', function () {
    var type = header.getAttribute('data-type');
    var isAscending = !header.classList.contains('sort-asc');
    headers.forEach(function (h) {
      return h.classList.remove('sort-asc', 'sort-desc');
    });
    header.classList.add(isAscending ? 'sort-asc' : 'sort-desc');
    var sortedRows = Array.from(rows).sort(function (rowA, rowB) {
      var cellA = rowA.children[index].textContent.trim();
      var cellB = rowB.children[index].textContent.trim();

      if (type === 'number') {
        return isAscending ? parseFloat(cellA) - parseFloat(cellB) : parseFloat(cellB) - parseFloat(cellA);
      } else {
        return isAscending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
      }
    });
    sortedRows.forEach(function (row) {
      return tbody.appendChild(row);
    });
  });
}); // ......................................................

var box = document.getElementById('box');
var resizer = document.getElementById('resizer');
var startX, startY, startWidth, startHeight;
resizer.addEventListener('mousedown', function (event) {
  event.preventDefault();
  startX = event.clientX;
  startY = event.clientY;
  var rect = box.getBoundingClientRect();
  startWidth = rect.width;
  startHeight = rect.height;
  document.addEventListener('mousemove', resizeMove);
  document.addEventListener('mouseup', resizeUp);
});

function resizeMove(event) {
  var deltaX = event.clientX - startX;
  var deltaY = event.clientY - startY;
  var newWidth = startWidth + deltaX;
  var newHeight = startHeight + deltaY;
  box.style.width = newWidth + 'px';
  box.style.height = newHeight + 'px';
}

function resizeUp() {
  document.removeEventListener('mousemove', resizeMove);
  document.removeEventListener('mouseup', resizeUp);
}