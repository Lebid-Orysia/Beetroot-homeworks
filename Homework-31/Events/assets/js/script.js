const textView = document.getElementById('text-view');
const textEdit = document.getElementById('text-edit');

document.addEventListener('keydown', function(event) {
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
});
// ......................................................

const table = document.getElementById('sortable-table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
  const type = header.getAttribute('data-type');

  const isAscending = !header.classList.contains('sort-asc');
  headers.forEach(h => h.classList.remove('sort-asc','sort-desc'));

  header.classList.add(isAscending ? 'sort-asc' : 'sort-desc');
  const sortedRows = Array.from(rows).sort((rowA, rowB) => {
  const cellA = rowA.children[index].textContent.trim();
  const cellB = rowB.children[index].textContent.trim();
  if (type === 'number') {
    return isAscending 
    ? parseFloat(cellA) - parseFloat(cellB) 
    : parseFloat(cellB) - parseFloat(cellA);
  } else {
  return isAscending 
  ? cellA.localeCompare(cellB) 
  : cellB.localeCompare(cellA);
  }
});
sortedRows.forEach(row => tbody.appendChild(row));
  });
});


// ......................................................

const box = document.getElementById('box');
const resizer = document.getElementById('resizer');

let startX, startY, startWidth, startHeight;

resizer.addEventListener('mousedown', function(event) {
   event.preventDefault();

startX = event.clientX;
startY = event.clientY;

const rect = box.getBoundingClientRect();

startWidth = rect.width;
startHeight = rect.height;

document.addEventListener('mousemove', resizeMove);
document.addEventListener('mouseup', resizeUp);
});

function resizeMove(event) {

const deltaX = event.clientX - startX;
const deltaY = event.clientY - startY;
const newWidth = startWidth + deltaX;
const newHeight = startHeight + deltaY;

box.style.width = newWidth + 'px';
box.style.height = newHeight + 'px';
}

function resizeUp() {
  document.removeEventListener('mousemove', resizeMove);
  document.removeEventListener('mouseup', resizeUp);
}