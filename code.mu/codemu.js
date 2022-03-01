"use strict"
/*Практика на условия if-else в JavaScript
 Задача 1
 В переменной month лежит какое-то число из интервала от 1 до 12.
  Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).*/

let month = 12;
	if (month >= 3 && month < 6){
		console.log('Весна');
	}
	else if (month > 5 && month < 9){
		console.log('Лето');
	}
	else if (month > 8 && month <12 ){
		console.log('Осень');
	}else{
		console.log('Зима');
	}
