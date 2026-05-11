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