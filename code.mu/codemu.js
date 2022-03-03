"use strict"
/*Перебор массива и if
Задача 5
Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите сумму квадратов элементов этого массива.*/



let mult = 0;
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++)
{
	mult = mult + arr[i] ** 2;
}

console.log(mult);
