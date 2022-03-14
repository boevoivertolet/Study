'use strict'
/*#2. Изощренные дразнилки*/







var randomBodyParts = ["жопа ", "рожа ", "бошка "];
var randomAdjectives = ["здоровая ", "тупая ", "вонючая "];
var randomWords = ["куча дерьма ", "клоака ", "бетономешалка ", "хуйня ", "гниль "];
var randomAnimalBodyParts = ['зад ', 'хобот  ', 'шея  ', 'зубы ', 'мозги '];
var animals = ['слона', 'крокодила', 'гориллы', 'жирафа', 'курицы']
// Выбор случайной части тела из массива randomBodyParts:
var animal = animals[Math.floor(Math.random() * animals.length)];
var randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * randomAnimalBodyParts.length)];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// Выбор случайного прилагательного из массива randomAdjectives:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// Выбор случайного слова из массива randomWords:
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// Соединяем случайные строки в предложение:
var randomInsult = "У тебя " + randomBodyPart + "еще более " + randomAdjective + "чем "+ randomAnimalBodyPart + animal + "!!!";

    console.log(randomInsult);

