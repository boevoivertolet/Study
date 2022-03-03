"use strict"
/*Накопление результата в цикле JavaScript
Задача 3
Найдите сумму нечетных чисел от 1 до 99.*/




let sum = 0;
	for (let i = 1; i <= 100; i += 2)
	{
		sum = sum + i;
	}
		console.log(sum);
