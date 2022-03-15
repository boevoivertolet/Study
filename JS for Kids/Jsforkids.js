'use strict'
/*УПРАЖНЕНИЯ
#2. Генератор случайных строк
Напишите генератор случайных строк. Для этого вам понадо-
бится строка со всеми буквами алфавита:*/


var i = 0;
var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var indexRandomLet;
var randomString = '';

while(i < 6){
    randomString += alphabet[Math.floor(Math.random(alphabet) * alphabet.length)];
    i++;
}



console.log(randomString);







