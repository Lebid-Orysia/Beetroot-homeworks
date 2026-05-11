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
  },
  calculateTrip(distance) {
    const pureTime = distance / this.info.avgSpeed
    const restHours = Math.floor((pureTime - 0.01) / 4)
    const totalTimeDecimal = pureTime + restHours
    const hours = Math.floor(totalTimeDecimal) 
    const minutes = Math.round((totalTimeDecimal - hours) * 60)
 
    const fuelNeeded = (distance / 100) * this.info.fuelConsume

    return {
      hours: hours,
      minutes: minutes,
      fuel: fuelNeeded.toFixed(1)
    }
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

function calculateTripHandler() {
  const distance = document.getElementById('distance').value
  
 if (distance && !isNaN(distance) && distance > 0) {
    const result = myCar.calculateTrip(Number(distance))
    
    toast.success(
      `Для подолання ${distance} км потрібно:\n` +
      `Час: ${result.hours} год ${result.minutes} хв\n` + 
      `Паливо: ${result.fuel} л`
    );
  } else {
    toast.error("Будь ласка, введіть коректне число");
  }
}
// ................................................

const time = {
  hours: 20,
  minutes: 59,
  seconds: 45,

  showTime(elId) {
    const addZero = n => n < 10 ? '0' + n : '' + n;
    const timeString = `${addZero(this.hours)}:${addZero(this.minutes)}:${addZero(this.seconds)}`
    
    if (elId) {
      const container = document.getElementById(elId)
      if (container) {
        container.innerHTML = `<p>${timeString}</p>`
      }
    }
    return timeString
  },
  normalizeTime(totalSeconds) {
    if (totalSeconds < 0) totalSeconds = 0

    this.seconds = totalSeconds % 60
    let totalMinutes = Math.floor(totalSeconds / 60)
    this.minutes = totalMinutes % 60
    this.hours = Math.floor(totalMinutes / 60) % 24
  },

  addSeconds(s) {
    let currentTotalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds
    this.normalizeTime(currentTotalSeconds + s)
  },
  addMinutes(m) {
    this.addSeconds(m * 60)
  },
  addHours(h) {
    this.addSeconds(h * 3600)
  }
}

window.onload = () => {
  time.showTime('clock-display');
};