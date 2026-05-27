
// function getUsers() {
//   loader.show()
//   fetch('https://jsonplaceholder.typicode.com/users/')
//   .then((response) => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`Code: ${response.status}`)
//     }
//     const data = response.json()
//     return data
//   })
//   .then((data) => {
//     showUsers(data);
//     loader.hide()
//   })
//   .catch((err) => {
//     console.log(err)
//     loader.hide()
//     alert('An error occured. Try again, please')
//   })
// }

const loader = {
  show(){
    document.body.classList.add('loader')
  },
  hide(){
    document.body.classList.remove('loader')
  }
}


let usersList = []

async function getUsers(){
  loader.show()
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/')
    if(!response.ok) {
      throw new Error(`Code: ${response.status}`)
    }
    const data = await response.json()
    
    usersList = data 
    showUsers(data)
    
  } catch (err){ 
    console.error(err)
    alert('An error occurred. Try again, please')
  } finally {
    loader.hide()
  }
}

function showUsers(users){
  let rows = ''
  users.forEach(user => {
    rows += `<tr onclick="getSingleUser(${user.id})" style="cursor: pointer;">
      <td>${user.id}</td>
      <td>${user.name}</td>
    </tr>`
  })

  document.getElementById('users_tbody').innerHTML = rows
}


async function getSingleUser(id) {
  loader.show()
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    
    if (!response.ok) {
      throw new Error(`Code: ${response.status}`)
    }
    
    const singleUser = await response.json()
  
    const userCard = `
      <div>
        <h3>Деталі користувача</h3>
        <p><strong>ID:</strong> ${singleUser.id}</p>
        <p><strong>Ім'я:</strong> ${singleUser.name}</p>
        <p><strong>Username:</strong> ${singleUser.username}</p>
        <p><strong>Email:</strong> ${singleUser.email}</p>
        <p><strong>Телефон:</strong> ${singleUser.phone}</p>
        <p><strong>Веб-сайт:</strong> ${singleUser.website}</p>
        <p><strong>Адреса:</strong> м. ${singleUser.address.city}, вул. ${singleUser.address.street}</p>
        <p><strong>Компанія:</strong> ${singleUser.company.name}</p>
      </div>`
    
    document.getElementById('single_user').innerHTML = userCard
    
  } catch (err) {
    console.error(err)
    alert('Не вдалося завантажити дані користувача.')
  } finally {
    loader.hide()
  }
}