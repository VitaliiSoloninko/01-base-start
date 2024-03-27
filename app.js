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
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

// console.log(input2.value)
// console.log(resultElement.textContent)
// resultElement.textContent = 42

// приведение типов, поміняти строчки на числа
// const sum = input1.value + input2.value // сума складається не з чисел а з строк string 10 + 5 = 105
// console.log(typeof sum) // перевірка типу typeof

plusBtn.onclick = function () {
	action = '+'
}

minusBtn.onclick = function () {
	action = '-'
}

function printResult(result) {
	if (result < 0) {
		resultElement.style.color = 'red'
	} else {
		resultElement.style.color = 'green'
	}
	resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
	const num1 = +inp1.value
	const num2 = +inp2.value
	// +inp2.value Number(inp2.value) - перевести строчку в число 2 способа
	// if (actionSymbol == '+') {
	// 	return num1 + num2
	// } else if (actionSymbol == '-') {
	// 	return num1 - num2
	// }

	const result = actionSymbol == '+' ? num1 + num2 : num1 - num2
	return result

	// другий варіант запису, це тернарний оператор ? if : else
	// return actionSymbol == '+' ? num1 + num2 : num1 - num2;
}

submitBtn.onclick = function () {
	// додаємо обработчик собития onclick - event handler
	const result = computeNumbersWithAction(input1, input2, action)
	printResult(result)
	// if (action == '+') {
	// 	const sum = Number(input1.value) + Number(input2.value)
	// 	printResult(sum)
	// } else if (action == '-') {
	// 	const sum = Number(input1.value) - Number(input2.value)
	// 	printResult(sum)
	// }
}
