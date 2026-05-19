"use strict";

var container = document.getElementById('list-container');
var ol = document.createElement('ol');
var h1 = document.createElement('h1');
h1.innerText = 'Playlist';
container.append(h1);
var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];
playList.forEach(function (item) {
  var li = document.createElement('li');
  li.innerHTML = "".concat(item.author, " - ").concat(item.song);
  ol.appendChild(li);
});
container.appendChild(ol);
var modal = document.getElementById("mainModal");
var btn = document.getElementById("myBtn");
var closeX = document.querySelector(".close-trigger");

btn.onclick = function () {
  modal.style.display = "block";
};

closeX.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};