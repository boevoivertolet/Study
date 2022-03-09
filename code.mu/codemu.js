"use strict"
/*Перебор массива циклом for-of в JavaScript
Задача 2
Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for-of найдите сумму элементов этого массива.*/




let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let elem of arr) {
	sum = sum + elem

}
console.log(sum);







