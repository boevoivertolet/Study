"use strict"
/*Практика на условия if-else в JavaScript
 Задача 5
 Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
 Если это так - выведите 'да', в противном случае выведите 'нет'.*/

let num = 111111;
let str = String(num);
let sum1 = +str[0] + +str[1] + +str[2];
let sum2 = +str[3] + +str[4] + +str[5];
	if (sum1 === sum2){
		console.log('да');
	}else{
		console.log('нет');
	}

