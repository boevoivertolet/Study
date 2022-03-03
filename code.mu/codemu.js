"use strict"
/*Перебор массива и if
Задача 8
Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество).
Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.*/



let aritMean = 1;
let	sum = 0;
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++)
{
	sum = sum + arr[i];
	aritMean = sum / arr.length;
}
console.log(aritMean);

