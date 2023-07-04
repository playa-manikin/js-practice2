/* let firstName, lastName, patronymic, age

firstName = getUserData('Какое у тебя имя?')
lastName = getUserData('Какая у тебя фамилия?')
patronymic = getUserData('Какое у тебя отчество?')
age = getUserData('Сколько тебе лет?')

function getUserData(title = 'Введите ваши данные', defaultValue = '') {
  let data
  do {
    data = prompt(title, defaultValue)
  } while (!data)
  return data
}

alert(`Ты ${firstName} ${lastName} ${patronymic} и тебе ${age}`)
 */


add = (number1, number2) => number1 + number2
minus = (number1, number2) => number1 - number2
multiply = (number1, number2) => number1 * number2
divide = (number1, number2) => number1 / number2
power = (number1, number2) => number1 ** number2
remainder = (number1, number2) => number1 % number2

let number1 = document.querySelector('.num1')
let number2 = document.querySelector('.num2')
let result = ''

let addButton = document.querySelector('.add')
addButton.addEventListener('click', () => {
  result = add(Number(number1.value), Number(number2.value));
  document.querySelector('.result').value = result;
})
let minusButton = document.querySelector('.minus')
minusButton.addEventListener('click', () => {
  result = minus(Number(number1.value), Number(number2.value));
  document.querySelector('.result').value = result;
})
let multiplyButton = document.querySelector('.multiply')
multiplyButton.addEventListener('click', () => {
  result = multiply(Number(number1.value), Number(number2.value));
  document.querySelector('.result').value = result;
})
let divideButton = document.querySelector('.divide')
divideButton.addEventListener('click', () => {
  result = divide(Number(number1.value), Number(number2.value));
  if (result != undefined) {
      document.querySelector('.result').value = result;
  }
})
let powerButton = document.querySelector('.power')
powerButton.addEventListener('click', () => {
  result = power(Number(number1.value), Number(number2.value));
  document.querySelector('.result').value = result;
})
let remainderButton = document.querySelector('.remainder')
remainderButton.addEventListener('click', () => {
  result = remainder(Number(number1.value), Number(number2.value));
  if (result != undefined) {
      document.querySelector('.result').value = result;
  }
})
  
document.querySelector('.result').value = result