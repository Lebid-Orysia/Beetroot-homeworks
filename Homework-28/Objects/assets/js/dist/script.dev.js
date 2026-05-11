"use strict";

var uaTranslations = {
  producer: 'Виробник',
  model: 'Модель',
  year: 'Рік випуску',
  avgSpeed: 'Середня швидкість',
  fuelCapacity: 'Обсяг паливного баку',
  fuelConsume: 'Середня витрата палива',
  drivers: 'Водії'
};
var myCar = {
  info: {
    producer: 'Україна',
    model: 'Daewoo Lanos',
    year: 2008,
    avgSpeed: 80,
    fuelCapacity: 48,
    fuelConsume: 7
  },
  drivers: ['Василь', 'Ігор', 'Андрій'],
  showInfo: function showInfo(elId) {
    var list = '<dl>';

    for (var prop in myCar.info) {
      list += "<dt>".concat(uaTranslations[prop] || prop, "</dt>\n         <dd>").concat(myCar.info[prop], "</dd>");
    }

    list += "<dt>".concat(uaTranslations.drivers, "</dt>\n       <dd>").concat(myCar.drivers, "</dd>");
    list += '</dl>';
    document.getElementById(elId).innerHTML = list;
  },
  addDriver: function addDriver(driverName) {
    if (!this.checkDriver(driverName)) {
      this.drivers.push(driverName);
      return true;
    } else {
      return false;
    }
  },
  checkDriver: function checkDriver(driverName) {
    return this.drivers.includes(driverName);
  },
  calculateTrip: function calculateTrip(distance) {
    var pureTime = distance / this.info.avgSpeed;
    var restHours = Math.floor((pureTime - 0.01) / 4);
    var totalTimeDecimal = pureTime + restHours;
    var hours = Math.floor(totalTimeDecimal);
    var minutes = Math.round((totalTimeDecimal - hours) * 60);
    var fuelNeeded = distance / 100 * this.info.fuelConsume;
    return {
      hours: hours,
      minutes: minutes,
      fuel: fuelNeeded.toFixed(1)
    };
  }
};

function addDriverHandler() {
  var name = document.getElementById('driverName').value;
  if (name === '') return toast.error('Enter driver name');

  if (myCar.addDriver(name)) {
    toast.success('Driver successfully added');
    if (document.getElementById('info-list')) myCar.showInfo('info-list');
  } else {
    toast.error("Driver ".concat(name, " already in list"));
  }
}

function checkDriverHendler() {
  var name = document.getElementById('driverName').value;
  if (name === '') return toast.error('Enter driver name');

  if (myCar.checkDriver(name)) {
    toast.success('Driver in list');
  } else {
    toast.error('Driver not in list');
  }
}

function calculateTripHandler() {
  var distance = document.getElementById('distance').value;

  if (distance && !isNaN(distance) && distance > 0) {
    var result = myCar.calculateTrip(Number(distance));
    toast.success("\u0414\u043B\u044F \u043F\u043E\u0434\u043E\u043B\u0430\u043D\u043D\u044F ".concat(distance, " \u043A\u043C \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E:\n") + "\u0427\u0430\u0441: ".concat(result.hours, " \u0433\u043E\u0434 ").concat(result.minutes, " \u0445\u0432\n") + "\u041F\u0430\u043B\u0438\u0432\u043E: ".concat(result.fuel, " \u043B"));
  } else {
    toast.error("Будь ласка, введіть коректне число");
  }
}