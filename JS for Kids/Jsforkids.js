'use strict'

/*Попробуйте сами разобраться, как с помощью только что изученных
команд превратить строку "эЙ, кАК деЛа?" в "Эй, как дела?".
Если ничего не выходит, сверьтесь с разделами, где рассказывается
о получении символа строки и использовании slice. Когда закон-
чите, вернитесь к этому месту и сравните свое решение с моим.
 */


var str = "эЙ, кАК деЛа?";
var lower = str.slice(1).toLowerCase();
var upper = str[0].toUpperCase();
var normal = upper + lower;


console.log(normal);


