


let userName = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");


let a = 6;
let b = 3;


let answerPlus = prompt(`${a} + ${b} = ?`);
let answerMinus = prompt(`${a} - ${b} = ?`);
let answerMultiply = prompt(`${a} * ${b} = ?`);
let answerDivide = prompt(`${a} / ${b} = ?`);
let answerMod = prompt(`${a} % ${b} = ?`);


console.log(`${a} + ${b} = ${a + b} (Ваш ответ ${answerPlus})`);
console.log(`${a} - ${b} = ${a - b} (Ваш ответ ${answerMinus})`);
console.log(`${a} * ${b} = ${a * b} (Ваш ответ ${answerMultiply})`);
console.log(`${a} / ${b} = ${a / b} (Ваш ответ ${answerDivide})`);
console.log(`${a} % ${b} = ${a % b} (Ваш ответ ${answerMod})`);


alert(`${userName}, вы решили все примеры. Зайдите в консоль разработчика (F12), чтобы увидеть результаты.`);


let X = Number(prompt("Введите число X"));
let Y = Number(prompt("Введите число Y"));
let Z = Number(prompt("Введите число Z"));


let res = (X + Y + Z) / 3;


alert("Среднее арифметическое: " + res);
