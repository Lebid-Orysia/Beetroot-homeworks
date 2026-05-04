function findAge() {
  const input = document.getElementById('userAge').value

  if (input === "") {
    document.getElementById('answ').innerHTML = 'Try again'
    return
  }

  const age = +input

  if (age < 0) {
    document.getElementById('answ').innerHTML = 'Try again'
  }
  else if (age <= 11) {
    document.getElementById('answ').innerHTML = 'You are a child'
  }
  else if (age <= 17) {
    document.getElementById('answ').innerHTML = 'You are a teenager'
  }
  else if (age <= 59) {
    document.getElementById('answ').innerHTML = 'You are an adult'
  }
  else if (age >= 100) {
    document.getElementById('answ').innerHTML = 'You are vampire'
  }
}


// ...............................................
function getCharacter() {
  const number = +document.getElementById('num').value

  switch (number) {
      case 0:
          document.getElementById('character').textContent = `Character is ')'`
          break;
      case 1:
          document.getElementById('character').textContent = `Character is '!'`
          break;
      case 2:
          document.getElementById('character').textContent = `Character is '@'`
          break;
      case 3:
          document.getElementById('character').textContent = `Character is '#'`
          break;
      case 4:
          document.getElementById('character').textContent = `Character is '$'`
          break;
      case 5:
          document.getElementById('character').textContent = `Character is '%'`
          break;
      case 6:
          document.getElementById('character').textContent = `Character is '^'`
          break;
      case 7:
          document.getElementById('character').textContent = `Character is '&'`
          break;
      case 8:
          document.getElementById('character').textContent = `Character is '*'`
          break;
      case 9:
          document.getElementById('character').textContent = `Character is '('`
          break;
      default:
        document.getElementById('character').textContent = `Try again`
  };
}

// ...................................................

function calcRange() {
  const input1 = document.getElementById('num1').value
  const input2 = document.getElementById('num2').value

  if (input1 === "" || input2 === "" || isNaN(input1) || isNaN(input2)) {
    document.getElementById('result').textContent = "Введи числа"
    return
  }

  const num1 = +input1
  const num2 = +input2

  const min = Math.min(num1, num2)
  const max = Math.max(num1, num2)

  let sum = 0

  for (let i = min; i <= max; i++) {
    sum += i
  }

  document.getElementById('result').textContent = `Сума: ${sum}`
}
  
// .....................................................

  function calcDivider() {
    const firstValue = document.getElementById('first-num').value
    const secondValue = document.getElementById('second-num').value

    const firstNum = Number(firstValue);
    const secondNum = Number(secondValue);

    if (
        firstValue.trim() === '' ||
        secondValue.trim() === '' ||
        isNaN(firstNum) ||
        isNaN(secondNum)
    ) {
        document.getElementById('divider').textContent = "Введи числа"
        return;
    }

    let min = Math.min(firstNum, secondNum);

    for (let i = min; i >= 1; i--) {
        if (firstNum % i === 0 && secondNum % i === 0) {
            document.getElementById('divider').textContent =
                `Найбільший спільний дільник ${i}`
            break
        }
    }
}

// ............................................

  function showDividers() {
  const number = document.getElementById('number').value

  if (isNaN(number) || number <= 0) {
    document.getElementById('divider2').innerHTML = "Введіть коректне число"
  }

  let result = "Дільники числа " + number + ": "

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      result += i + " "
  }

  document.getElementById('divider2').innerHTML = result
    }
  }
// .......................................

function changeUserNum() {
  let number = +document.getElementById('userNum').value

  if (number < 10000 || number > 99999) {
    document.getElementById('reverseUserNum').textContent = "Число має бути пʼятизначне"
  } else {
    let firstDigit = Math.floor(number / 10000)
    let secondDigit = Math.floor((number % 10000) / 1000)
    let thirdDigit = Math.floor((number % 1000) / 100)
    let fourthDigit = Math.floor((number % 100) / 10)
    let fifthDigit = number % 10

    let reversed = fifthDigit * 10000 + fourthDigit * 1000 + thirdDigit * 100 + secondDigit * 10 + firstDigit

    document.getElementById('reverseUserNum').textContent = reversed
  }
}

// ............................................

  function calcDiscount() {
    let sumBeforeDiscount = +document.getElementById('sum').value
    let result = document.getElementById('discount')

    if (isNaN(sumBeforeDiscount) || sumBeforeDiscount < 0) {
        result.innerHTML = 'Спробуйте ще раз'
        return
    }

    let discount = 0

    if (sumBeforeDiscount < 200) {
        result.innerHTML = 'Знижки немає'
        return
    } 
    else if (sumBeforeDiscount >= 200 && sumBeforeDiscount < 300) {
        discount = 0.03
    } 
    else if (sumBeforeDiscount >= 300 && sumBeforeDiscount < 500) {
        discount = 0.05
    } 
    else if (sumBeforeDiscount >= 500) {
        discount = 0.07
    }

    let finalSum = sumBeforeDiscount * (1 - discount)

    result.innerHTML = `Сума зі знижкою: ${finalSum.toFixed(2)}`
}

// ...................................................
    function calcQuantity() {
    let positive = 0, 
        negative = 0, 
        zero = 0, 
        even = 0, 
        odd = 0;

    for (let i = 0; i < 10; i++) {
        let number = +prompt("Enter a number:")
        if (isNaN(number)) {
            console.log("Try again")
            i--
            continue
        }
         if (number > 0) {
            positive++
        }
        else if (number < 0) {
            negative++
        }
        else {
            zero++
        }
        if (number % 2 === 0) {
            even++
        }
        else {
            odd++
        }
    }
      document.getElementById('statistics').innerHTML = `Positive numbers: ${positive}, Negative numbers: ${negative}, Zeros: ${zero}, Even numbers: ${even}, Odd numbers: ${odd}`
    }

//................................................
    function showNextDay() {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let index = 0
    
        while (true) {
            let showNext = confirm(`${days[index]}. Do you want to see the next day?`)
            if (!showNext) break
            index = (index + 1) % days.length
        }
        
    }

// .....................................................

    function guessNum() {
        let minimum  = 0
        let maximum = 100

    while (true) {
        let n = Math.floor((minimum + maximum) / 2)

        let answer1 = prompt(`Ваше число > ${n}, < ${n} або == ${n}?`)

        if (answer1 === '==') {
            alert(`Ваше число це ${n}`)
            break
        } 
        else if (answer1 === '>') {
           minimum = n
        } 
        else if (answer1 === '<') {
            maximum  = n
        } 
        else {
            alert('Введи тільки >, < або ==')
        }
    }
}

// ............................................

const size = 10
let html = ''
for (let i = 0; i <= size; i++) {
   for (let j = 0; j <= size; j++) {
    let counter = i === 0 
    ? j 
    : j ===0 
         ? i 
             : i*j
    html += `<div${j===i ? ' class = "accent"': ''} data-index="${i}_${j}">${counter ||'X'}</div>`
   }
}
document.getElementById('wrapper').innerHTML = html

// ...............................................

function getNextDay() {
    let day = +prompt('Напишіть день')
    let month = +prompt('Напишіть місяць')
    let year = +prompt('Напишіть рік у форматі "yyyy"')

    nextDay = day + 1
    nextMonth = month 
    nextYear = year 

    
    alert(`Наступна дата ${nextDay}-${nextMonth}-${nextYear}`)
}

// зробила все що могла