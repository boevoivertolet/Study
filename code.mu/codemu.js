"use strict"


let age = 15;
let result =true;

if (age >= 18) {
	if (age <= 23) {
		result = 'от 18 до 23';
	} else {
		 result = 'больше 23';
	}
} else {
	result = 'меньше 18';
}

console.log(result);
