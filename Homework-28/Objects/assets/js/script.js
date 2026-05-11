const uaTranslations = {
  producer: 'Виробник',
  model: 'Модель',
  year: 'Рік випуску',
  avgSpeed: 'Середня швидкість',
  fuelCapacity: 'Обсяг паливного баку',
  fuelConsume: 'Середня витрата палива',
  drivers: 'Водії'
}

const myCar = {
    info: {
    producer: 'Україна',
    model: 'Daewoo Lanos',
    year: 2008,
    avgSpeed: 80,
    fuelCapacity: 48,
    fuelConsume: 7
  },
  drivers: ['Василь', 'Ігор', 'Андрій'],
  showInfo(elId) {
    let list = '<dl>'
    for(let prop in myCar.info){
      list += 
        `<dt>${uaTranslations[prop] || prop}</dt>
         <dd>${myCar.info[prop]}</dd>`
    }
    list += 
      `<dt>${uaTranslations.drivers}</dt>
       <dd>${myCar.drivers}</dd>`
    list += '</dl>'
    document.getElementById(elId).innerHTML = list
  },
  addDriver(driverName){
    if (!this.checkDriver(driverName)) {
    this.drivers.push(driverName)
    return true
  }else {
    return false
    }
  },
  checkDriver(driverName) {
    return this.drivers.includes(driverName)
  }
}

function addDriverHandler(){
  const name = document.getElementById('driverName').value
  if (name === '') return toast.error('Enter driver name')
  
 if(myCar.addDriver(name)) {
  toast.success('Driver successfully added')
  if(document.getElementById('info-list')) myCar.showInfo('info-list')
 } else {
  toast.error(`Driver ${name} already in list`)
 }
}

function checkDriverHendler(){
  const name = document.getElementById('driverName').value
  if (name === '') return toast.error('Enter driver name')

  if(myCar.checkDriver(name)) {
    toast.success('Driver in list')
  } else{
     toast.error('Driver not in list')
  }
}