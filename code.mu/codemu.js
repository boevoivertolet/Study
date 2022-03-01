"use strict"
let day = 15;

if (day >= 1 && day <10) {
	alert('1 dekada');
} else if (day >= 10 && day <20) {
	alert('2 dekada');
} else if (day >= 20 && day<=31){
	alert('3 dekada');
} else if (day>1 && day>31){
	alert('error');
}
