export const loader = {
  show(){document.body.classList.add('loading')},
  hide(){document.body.classList.remove('loading')}
}

export const formatDate = (dateStr) => {
  const arDate = dateStr.split('-')
  return `${arDate[2]}.${arDate[1]}.${arDate[0]}`
}


export const toast = {
  error(text){
    this.show(text, 'error')
  },
  success(text){
    this.show(text, 'success')
  },
  show(text, type){
     const html = `<div id="my-toast" class = "my-toast ${type}">
     <p>${text}</p>
      </div>`

      if(document.getElementById('my-toast')){
        document.getElementById('my-toast').remove()
      }

      document.body.insertAdjacentHTML('afterbegin', html)
      setTimeout(() =>{
        document.getElementById('my-toast').remove()
      }, 3000)
  }
}