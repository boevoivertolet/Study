'use strict'
/* Генератор случайных дразнилок*/







var randomBodyParts = ["глаз", "нос", "череп"];
var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// Выбор случайной части тела из массива randomBodyParts:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// Выбор случайного прилагательного из массива randomAdjectives:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// Выбор случайного слова из массива randomWords:
var randomWord = randomWords[Math.floor(Math.random() * 5)];
// Соединяем случайные строки в предложение:
var randomInsult = "У тебя " + randomBodyPart + " словно " +randomAdjective + " " + randomWord + "!!!";

    console.log(randomInsult);

