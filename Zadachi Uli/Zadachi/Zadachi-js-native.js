/*
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];
*/

const arrayStringNumber = [-1, 'asda1', 4, '3', 'bsd', 26, 'csdj2', -21, 'dsd', 211, 'esdasdasdasd', -8, 'fsfd', 233, 'gsdg3', -1121, 0, -0, '',]
const filteredNumbers = arrayStringNumber.filter(el => typeof el === 'number')
const filteredString = arrayStringNumber.filter(el => typeof el === 'string')

const arr = [false, null, undefined, 0, NaN, "", 1, '2']

let str = "sasha";
console.log(str.split(''))

//filter

//1. Написать функцию, которая принимает массив, в котором строки и числа, фильтрует и возвращает массив строк
//Вызвать функцию несколько раз с разными массивами.
const filterToString = (arrayStringNumber) => {
    const filteredArray = arrayStringNumber.filter(el => typeof el === 'string')
    console.log(filteredArray)
}
filterToString(arrayStringNumber);


//2. Написать функцию, которая принимает массив строк, фильтрует и возвращает массив, в котором строки только длиной 5.
//Вызвать функцию несколько раз с разными массивами.
const filterStringsToFive = (arrayStringNumber) => {
    const fiveString = arrayStringNumber.filter(el => el.length === 5)
    console.log(fiveString)
}
filterStringsToFive(arrayStringNumber);


//3. Написать функцию, которая принимает массив чисел, фильтрует и возвращает массив, в котором только четные числа.
//Вызвать функцию несколько раз с разными массивами.
const returnEven = (arrayStringNumber) => {
    const filteredNumberArray = arrayStringNumber.filter(el => typeof el === 'number')
    const evenNumberArray = filteredNumberArray.filter(el => el % 2 !== 1 && el % 2 !== -1 && el !== 0)
    console.log(evenNumberArray)
}
returnEven(arrayStringNumber);


//4. Написать функцию, которая принимает массив чисел, фильтрует и возвращает массив, в котором только отрицательные числа.
//Вызвать функцию несколько раз с разными массивами.
const returnNegative = (arrayStringNumber) => {
    const filteredToNegativeNumber = arrayStringNumber.filter(el => typeof el === 'number').filter(el => el < 0)
    console.log(filteredToNegativeNumber)
}
returnNegative(arrayStringNumber);


//5. Написать функцию, которая принимает массив чисел, фильтрует и возвращает массив, в котором первые 4 элемента.
//Вызвать функцию несколько раз с разными массивами.
const returnFirstFour = (arrayStringNumber) => {
    const filteredFirstFour = arrayStringNumber.filter(el => typeof el === 'number').slice(0, 4)
    console.log(filteredFirstFour)
}
returnFirstFour(arrayStringNumber);


//6. Написать функцию, которая принимает массив, фильтрует и возвращает массив, в котором нет ложных (false) значений:
//false, null, undefined, 0, –0, NaN и "" (пустя строка)
//Вызвать функцию несколько раз с разными массивами.
const returnTrueFn = (arrayStringNumber) => {
    const filteredNotFalse = arrayStringNumber.filter(el => el !== false && el !== '' && el !== 0 && el !== undefined && el !== null)
    console.log(filteredNotFalse)
}
returnTrueFn(arrayStringNumber);

const returnTrueFn2 = (arrayStringNumber) => {
    const filteredNotFalse = arrayStringNumber.filter(el => Boolean(el))
    console.log(filteredNotFalse)
}
console.log(returnTrueFn2(arr));
console.log(returnTrueFn2(arrayStringNumber));
//map


//1. Написать функцию, которая принимает массив чисел и возвращает массив удвоенных чисел
//Вызвать функцию несколько раз с разными массивами.
const multiplyTwoFn = (filteredNumbers) => {
    const multiArray = filteredNumbers.map(el => el * 2)
    console.log(multiArray)
}
multiplyTwoFn(filteredNumbers);


//2. Написать функцию, которая принимает массив чисел и возвращает массив квадратов
//Вызвать функцию несколько раз с разными массивами.
const multiplyQudroFn = (filteredNumbers) => {
    const quadroArray = filteredNumbers.map(el => el * el)
    console.log(quadroArray)
}
multiplyQudroFn(filteredNumbers);


//3. Написать функцию, которая принимает массив чисел и возвращает массив чисел с обратным знаком (четные стали нечетными и наоборот)
//Вызвать функцию несколько раз с разными массивами.
const reversEvenFn = (filteredNumbers) => {
    const revers = filteredNumbers.map(el => (el + 1) * -1)
    console.log(revers)
}
reversEvenFn(filteredNumbers);


//4. Написать функцию, которая принимает массив строк и возвращает массив строк в верхнем регистре
//Вызвать функцию несколько раз с разными массивами.
const toUpperCaseFn = (filteredString) => {
    const upper = filteredString.map(el => el.toUpperCase())
    console.log(upper)
}
toUpperCaseFn(filteredString);


//5. Написать функцию, которая принимает массив строк и возвращает массив первых букв строк
//Вызвать функцию несколько раз с разными массивами.
const firstLet = (filteredString) => {
    const firstLet = filteredString.map(el => el.slice(0, 1))
    console.log(firstLet)
}
firstLet(filteredString);


//6. Написать функцию, которая принимает массив чисел и возвращает массив чисел, где четные числа делятся на 2, а нечетные - умножаются на 2
//Вызвать функцию несколько раз с разными массивами.

const evenMultoddDegreeFn = (filteredNumbers) => {
    const even = filteredNumbers.filter(el => el % 2 === 0).map(el => el * 2)
    const odd = filteredNumbers.filter(el => el % 2 !== 0).map(el => el / 2)
    const evenOdd = even.concat(odd)
    console.log(evenOdd)
}
evenMultoddDegreeFn(filteredNumbers);


const evenMultoddDegreeFn2 = (filteredNumbers) => {
    filteredNumbers.map(el => {
            if (el % 2 === 0) {
                return el * 2;
            } else {
                return el / 2
            }
        }
    )
}
evenMultoddDegreeFn2(filteredNumbers);

const evenMultoddDegreeFn3 = (filteredNumbers) => {
    filteredNumbers.map(el => el % 2 === 0 ? el * 2 : el / 2)
}
evenMultoddDegreeFn3(filteredNumbers);

let studentRecords = [
    {name: 'John', id: 123, marks: 98},
    {name: 'Baba', id: 101, marks: 23},
    {name: 'yaga', id: 200, marks: 45},
    {name: 'Wick', id: 115, marks: 75}
];


//1. Сделать поверхностную копию массива studentRecords
let copyStudentRecords = [...studentRecords]
console.log(copyStudentRecords)


//2. Сделать глубокую копию массива studentRecords
let deepCopyStudentRecords = studentRecords.map(el => ({...el}))
console.log(deepCopyStudentRecords)

//Далее все задания делаем как на самостоятельной, не изменяя исходный массив - записываем в новую переменную и консолим!!!!

//3. Получить имена студентов и записать их в массив полностью заглавными буквами (map)
const upperLetFn = (studentRecords) => {
    const upperCase = studentRecords.map(el => el.name.toUpperCase())
    console.log(upperCase)
}
upperLetFn(studentRecords);

const upperLetFn2 = (studentRecords) => {
    const upperCase = studentRecords.map(el => {
        let arr = el.name.split('');
        arr[0] = arr[0].toUpperCase()
        return arr.join('')
    })
    console.log(upperCase)
}
upperLetFn2(studentRecords);

//4. Получить массив объектов со студентами, набравшими более 50 баллов (filter)
const moreFiftyDetector = (studentRecords) => {
    const top = studentRecords.filter(el => el.marks > 50)
    console.log(top)
}
moreFiftyDetector(studentRecords);

//5. Отсортировать массив из задания 2 в алфавитном порядке по имени (sort)
deepCopyStudentRecords.sort((a, b) => a.name > b.name ? 1 : -1)
console.log(deepCopyStudentRecords)

//6. Получить массив объектов с самым лучшим и самым худшим студентами (filter)
const topLowStudentsFn = (studentRecords) => {
    studentRecords.sort((a, b) => a.marks > b.marks ? 1 : -1)
    const topSt = studentRecords.filter(el => (studentRecords.indexOf(el) === 0 || studentRecords.indexOf(el) === studentRecords.length - 1))
    console.log(topSt)
}
topLowStudentsFn(studentRecords);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//7. Получить массив объектов студентов, набравших более 50 баллов и имеющих id больше 120 (filter)
const arrayStudentsMarksMore50IdMore120 = (studentRecords) => {
    let smid = studentRecords.filter(student => student.marks > 50).filter(student => student.id > 120)
    console.log(smid);
}
arrayStudentsMarksMore50IdMore120(studentRecords);


//8. Получить общую сумму баллов студентов (reduce)
const studentsMarksSum = (studentRecords) => {
    let marksSum = studentRecords.reduce((sum, stu) => {
        return sum + stu.marks
    }, 0)
    console.log(marksSum)
}
studentsMarksSum(studentRecords);

//9. Добавить всем студентам свойство isStupid со значением false (map)

let stupidFalse = studentRecords.map(student => ({...student, isStupid: false}))
console.log(stupidFalse)


//10. Изменить в предыдущем массиве у студента 'yaga' свойство isStupid на true (map)
const stupidYaga = stupidFalse.map(student => student.name ==='yaga' ? {...student, isStupid: true} : student)
console.log(stupidYaga)

//11. Отфильтровать массив студентов оставив только тех у кого isStupid = false (filter)
let studentsIsStupedFalse =stupidYaga.filter(student => student.isStupid === false)
console.log(studentsIsStupedFalse);
//12. Получить массив объектов студентов, в котором каждому студенту прибавили 20 баллов (map)

let studentIncr20Marks = stupidYaga.map(s => ({...s, marks: s.marks+20}))

console.log(studentIncr20Marks);


//13. Получить массив объектов студентов с id < 150 (filter)
let studentsIdLow150 = stupidYaga.filter(s => s.id < 150)
console.log(studentsIdLow150);
//Теперь будем применять несколько методов сразу


//14. Получить массив с именами студентов, набравших больше 50 баллов (filter и map)
let students50MarksMore = stupidYaga.filter(s=> s.marks >=50).map(s=>s.name)
console.log(students50MarksMore);


//15. Получить массив объектов со студентами, у которых будет 70+ баллов после того как каждому докинут 10 балоов (map и filter)
let students70MarksLowBeforInc10Marks = stupidYaga.map(student => ({...student, marks: student.marks +10})).filter(student => student.marks > 70)

console.log(students70MarksLowBeforInc10Marks);




