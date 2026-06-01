import { AUTH_TOKEN, DEV_MODE, BASE_URL } from "./env.js";
import { loader, formatDate } from "./helpers.js";

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const form = document.getElementById('search_movies_form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  search()
})

async function authFetch(url) {
  loader.show()
  try {
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+AUTH_TOKEN
      }
    })
    if (!resp.ok){
      throw new Error(resp.status)
    }
    const data = await resp.json()
    return {
      isOK: true,
      data
    }
  } catch(error){
    console.error(error)
    return {
      isOK: false,
      data: null
    }
  } finally {
    loader.hide()
  }
}

async function search() {
  const formData = new FormData(form);
  const serializedString = new URLSearchParams(formData).toString();
  const url = DEV_MODE
    ? '/mocks/movies.json'
    : BASE_URL + 'search/movie?' + serializedString
  const response = await authFetch(url)
  if (response.isOK) {
    showResult(response.data)
  } else {
    //TODO: replace with error toast
    alert("Some error occured. Try again, please")
  }
  
}

function showResult(data){
  const tmpl = document.getElementById('movie_list_item')
  const result = document.getElementById('result-wrap')
  data.results.forEach(item => {
    const clone = document.importNode(tmpl.content, true)
   
    const img = clone.querySelector('.movie-poster img')
    img.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + item.poster_path)
    img.setAttribute('alt', item.title)
    clone.querySelector('.movie-title').innerText = item.title
    clone.querySelector('.movie-year').innerText = formatDate(item.release_date)
    clone.querySelector('.poster-badge span').innerText = item.vote_average.toFixed(1)
    clone.querySelector('.movie-info button').dataset.id = item.id

    result.appendChild(clone)
  })
}

async function getMovieDetail(id){
  if (localStorage.getItem('movie_'+id)){
    return JSON.parse(localStorage.getItem('movie_'+id))
  }
  const url = DEV_MODE
    ? '/mocks/detail.json'
    : 'https://api.themoviedb.org/3/movie/' + id
  const response = await authFetch(url)
  if (response.isOK) {
     return response.data
  } else {
    //TODO: replace with error toast
    alert("Some error occured. Try again, please")
  }
}

async function showDetail(id) {
  const item = await getMovieDetail(id)
  const detail = document.getElementById('page-detail')

  detail.querySelector('.hero-bg').style.backgroundImage = `url('https://image.tmdb.org/t/p/w1280${item.backdrop_path}')`
  const img = detail.querySelector('.detail-poster-img')
  img.setAttribute('src', 'https://image.tmdb.org/t/p/w500' + item.poster_path)
  img.setAttribute('alt', item.title)
  detail.querySelector('.detail-title').innerText = item.title
  detail.querySelector('.rating-score').innerText = item.vote_average.toFixed(1)
  detail.querySelector('.rating-count').innerText = item.vote_count
  detail.querySelector('.detail-overview').innerText = item.overview

  

  showPage('detail')
}

document.addEventListener('click', (e)=>{
  if(e.target.classList.contains('get-detail-movie-btn')){
    showDetail(e.target.dataset.id)
  }
})




