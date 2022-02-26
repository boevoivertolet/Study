"use strict"
let human={'1name': 'Ulya', surname: 'Pisya', age: 42, height: 1.73, weight: 97};
let indexmt = human.weight/human.height**2;
let fullAge = 'age';
let str = human['1name']+' '+human.surname;

console.log (str+' '+human[fullAge]+' '+indexmt);
