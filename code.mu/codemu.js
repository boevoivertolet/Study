"use strict"
let num = 98;
let sum = ((num-num % 10)/10)+(num % 10);
	if (num > 10 && num <99)
	{
		if (sum <= 9)
		{
			console.log('Сумма цифр однозначна');
		}
		else
		{
			console.log('сумма цифр двузначна');
		}
	}
	else
	{
		console.log('вне диапозона');
	}
