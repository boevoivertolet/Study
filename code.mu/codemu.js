"use strict"
/*Проверка логина
Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено»,
в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».*/



let pass;
let log = prompt('Login?');
	if (log == ''|| log === null)
	{
		alert('cancel');
	}
		else if (log === 'Admin')
		{
			pass = prompt('Password?');
			if (pass === 'Ya glavniy')
			{
				alert('Zdravstvuite');
			}
				else if (pass === null)
				{
					alert('cancel');
				}
			else
			{
				alert('invalid pass');
			}

		}
		else if (log !== 'Admin'){
			alert('Ya vas ne znau!');

		}

