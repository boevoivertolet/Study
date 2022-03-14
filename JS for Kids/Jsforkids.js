'use strict'
/*#4. Соединение чисел

Как с помощью метода join превратить массив [3, 2, 1] в строку
"3 больше, чем 2 больше, чем 1"?*/







var arr = [3, 2, 1];
arr.shift();
arr.shift();
arr.shift();
arr.unshift('чем 1');
arr.unshift('чем 2 больше,');
arr.unshift('3 больше,');
var arrj = arr.join(' ');

console.log(arrj);


