// ======================== Operators
let a = 10;
let b = 5;
let c = 32;

// c = c + a;
// c = c - a;
// c = c * a;
// c = c / a;

// c += a;
// c -= a;
// c *= a;
// c /= a;

// c = 4 ** 2; // в степінь
// console.log(c);

// ======================== Data Types
const age = 36; // number
const name = 'Vitalii'; // string
const isProgrammer = true; // boolean
let x; // undefined
// null
// console.log(typeof null); // показує не правильне значення object
// console.log(typeof (1 / x)); // NaN Not a Number
// console.log(typeof NaN); // показує Number

// ======================== Priority
const fullAge = 36;
const birthYear = 1987;
const currentYear = 2024;
// > < >= <=
const isFullAge = currentYear - birthYear <= fullAge;
// console.log(isFullAge);

const num1 = 42;
const num2 = '42';
console.log(num1 === num2);
// == порівнюємо тільки значення
// === порівнюємо значення і тип даних, працює тільки в JS
