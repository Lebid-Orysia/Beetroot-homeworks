
const container = document.getElementById('list-container');
const ol = document.createElement('ol');
const h1 = document.createElement('h1');
h1.innerText = 'Playlist'
container.append(h1);

const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK"
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN"
  }
];

playList.forEach((item) => {
  const li = document.createElement('li');
  li.innerHTML = `${item.author} - ${item.song}`;
  ol.appendChild(li);
});

container.appendChild(ol);






const modal = document.getElementById("mainModal");
const btn = document.getElementById("myBtn");
const closeX = document.querySelector(".close-trigger");

btn.onclick = function () {
  modal.style.display = "block";
}

closeX.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}