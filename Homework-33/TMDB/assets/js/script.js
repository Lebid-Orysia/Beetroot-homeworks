const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDVkNDhkZjIxN2NiZDQ2NTIwNzEwNmYwYzkxYWEyZCIsIm5iZiI6MTc3OTk2MjgyNC4yMTIsInN1YiI6IjZhMTgxM2M4OTdmY2NmNTBjMmU3MTZmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._I3gjRKqEizSSdmfdrgV42a1Sfk5PzAreqadoNh51m4'

const DEV_MODE = true

const loader = {
  show(){
    document.body.classList.add('loader')
  },
  hide(){
    document.body.classList.remove('loader')
  }
}

const form = document.getElementById('search_movies_form')

const formatDate = (dateStr) => {
  const arDate = dateStr.split('-')
  return `${arDate[2]}.${arDate[1]}.${arDate[0]}`
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  search()
})

async function search() {
  loader.show()
  const formData = new FormData(form)

  const serializedString = new URLSearchParams(formData).toString()
  const url = DEV_MODE
  ? './mocks/movies.json'
  : 'https://api.themoviedb.org/3/search/movie?' + serializedString

  try {
     const resp = await fetch(url, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer '+AUTH_TOKEN
    }
  })
    if(!resp.ok){
      throw new Error('resp.status')
    }
    const data = await resp.json()

    showResult(data)
  } catch(error) {
    console.error(error)
  } finally{
    loader.hide()
  } 

  const imageWait = document.getElementById('wait')
  imageWait.style.display = 'none'
}

function showResult(data){
  const tmpl = document.getElementById('movie_list_item')
  const result = document.getElementById('result-wrapp')
  data.results.forEach(item => {
    const clone = document.importNode(tmpl.content, true)  
    const img = clone.querySelector('.card img')
    img.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + item.poster_path)
    img.setAttribute('alt', item.title) 
    clone.querySelector('.title').innerText = item.title
    clone.querySelector('.subtitle').innerText = formatDate(item.release_date)
    clone.querySelector('.content').innerText = item.overview
    clone.querySelector('.more_info').dataset.id = item.id
    result.appendChild(clone)
  });
}

async function getMovieDetali(id) {
  loader.show()
  const url = DEV_MODE
  ? './mocks/movies.json'
  : 'https://api.themoviedb.org/3/search/movie/' + id

  try {
     const resp = await fetch('https://api.themoviedb.org/3/movie/' + id, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer '+AUTH_TOKEN
    }
  })
    if(!resp.ok){
      throw new Error('resp.status')
    }
    const data = await resp.json()
    console.log(data);
    
    // showResult(data)
  } catch(error) {
    console.error(error)
  } finally{
    loader.hide()
  } 

}

document.addEventListener('click', (e) =>{
  if (e.target.classList.contains('more_info')) {
    getMovieDetali(e.target.dataset.id)
  }
})



