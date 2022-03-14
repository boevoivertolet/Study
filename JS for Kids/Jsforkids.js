'use strict'
/* Генератор случайных дразнилок*/







var randomBodyParts = ["жопа", "рожа", "мозги"];
var randomAdjectives = ["здоровая", "тупая", "вонючая"];
var randomWords = ["куча дерьма", "клоака", "бетономешалка", "хуйня", "гниль"];
// Выбор случайной части тела из массива randomBodyParts:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// Выбор случайного прилагательного из массива randomAdjectives:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// Выбор случайного слова из массива randomWords:
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// Соединяем случайные строки в предложение:
var randomInsult = "У тебя " + randomBodyPart + " словно " +randomAdjective + " " + randomWord + "!!!";

    console.log(randomInsult);

