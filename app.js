// Ctrl + K + C - закоментувати рядки
// Ctrl + K + U - розкоментувати рядки

// let num = 42 // number
// let numFloat = 4.2 // float через точку
// let firstName = 'Vitalii' // string
// const isProgrammer = true // boolean
// num - змінна - variable
// firstName стиль кемел кейс CamelCase

// firstName = 'Max'

/* Can Do -  разрешено
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 49
let _num = 12
let num_ = 12
let first_name = 'Dilya' // bad погана практика
let myNum = 34 // good
let num42 = 10
*/

/* Restricted - запрещено
let 42num = '11' // початок цифри
let my-num = 1 // через дефіс
let false // зарезервовані слова
*/

// alert(firstName) // показує значення у випадаючому вікні
// console.log('Test:', firstName, num, isProgrammer) // F12 - Console = має бути Test: Max

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)
// console.log(num)

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// console.log(num, num2)

// let num3 =  (num + 10) * 2 / 3 -1
// console.log(num3)

// const fullName = firstName + ' Philipovich' // конкантинація обєднання строк/рядків
// const fullName = firstName + ' ' + 'Philipovich'
// console.log(fullName)

/*--------------------------------------------------------------------------------------------------------*/

const resultElement = document.getElementById('result') // отримати елемент з HTML по id - це функція
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

// console.log(input2.value)
// console.log(resultElement.textContent)
// resultElement.textContent = 42

// приведение типов, поміняти строчки на числа
// const sum = input1.value + input2.value // сума складається не з чисел а з строк string 10 + 5 = 105
const sum = Number(input1.value) + Number(input2.value)
resultElement.textContent = sum 
console.log(typeof sum) // перевірка типу typeof