

																		/*** Методы объектов и контекст вызова ***/


									
// var arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2]();






// var name = "";

// var user = {
//   name: "Василий",

//   export: function() {
//     return this;
//   }

// };

// alert( user.export().name ); // Василий






// var name = "";

// var user = {
//   name: "Василий",

//   export: function() {
//     return {
//       value: this
//     };
//   }

// };

// alert( user.export().value.name ); // Василий






// var calculator	= {
// 	read: function() {
// 		var firstVal = prompt('Введите первое значение', '7');
// 		var secondVal = prompt('Введите второе значение', '5');
// 		this.first = firstVal;
// 		this.second = secondVal;
// 	},
// 	sum: function() {
// 		return 'сумма введенных значений: ' + (+this.first + +this.second);
// 	},
// 	mul: function() {
// 		return 'произведение введенных значений: ' + (+this.first * +this.second);
// 	}
// }

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );






// var ladder = {
//   step: 0,
//   up: function() { // вверх по лестнице
//     this.step++;
//     return this;
//   },
//   down: function() { // вниз по лестнице
//     this.step--;
//     return this;
//   },
//   showStep: function() { // вывести текущую ступеньку
//     alert( this.step );
//     return this;
//   }
// };

// ladder.up().up().down().up().down().up().up().showStep();






// // Строковое преобразование объекта
// var user = {

//   firstName: 'Василий',

//   toString: function() {
//     return 'Пользователь ' + this.firstName;
//   }
// };

// alert( user );  // Пользователь Василий






// var room = {
// 	name: 'Dima',
//   number: 777,

//   valueOf: function() { return this.number; },
//   toString: function() { return this.name; }
// };

// alert( room );  // 'Dima', вызвался toString
// alert( +room );  // 777, вызвался valueOf






// alert( [] == [] ); // false Два объекта равны только тогда, когда это один и тот же объект
// alert( [] == ![] ); // true ( '' == false -> 0 == 0 )






// new Date(0) - 0 // 0
// new Array(1)[0] + "" // "undefined"
// ({})[0] // undefined
// [1] + 1 // "11"
// [1,2] + [3,4] // "1,23,4"
// [] + null + 1 // "null1"
// [[0]][0][0] // 0
// ({} + {}) // "[object Object][object Object]"






// function sum(a) {

//   var currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f; // функция не вызывает сама себя (нет рекурсивного вызова), а возвращает ссылку на себя
//   }

//   f.toString = function() {
//     return currentSum; // происходит при строковом преобразовании - например alert(obj)  
//   };

//   return f;
// }

// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1)(2) ); // 6
// alert( sum(6)(-1)(-2)(-3) ); // 0
// alert( sum(0)(1)(2)(3)(4)(5) ); // 15






																// Конструкторы

// function Calculator() {
// 	this.read = function() {
// 		var question1 = prompt('Введите первое значение', 3);
// 		var question2 = prompt('Введите второе значение', 6);
// 		this.value1 = question1;
// 		this.value2 = question2;
// 	};

// 	this.sum = function() {
// 		return this.value1 + this.value2;
// 	};

// 	this.mul = function() {
// 		return this.value1 * this.value2;
// 	};
// }

// var calculator = new Calculator();
// calculator.read();

// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );






// function Accumulator(val) {

// 	this.currentValue = val;

// 	this.read = function() {
// 		this.currentValue += +prompt('Введите значение для суммы', 2);
// 	};

// 	this.toString = function() {
// 		return 'Текущее значение: ' + this.currentValue;
// 	};

// };


// var accumulator = new Accumulator(3); // начальное значение 3
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator ); // выведет текущее значение





																	// Дескрипторы

// var user = {
//   firstName: "Вася",
//   surname: "Петров"
// }

// Object.defineProperty(user, "fullName", {
//   get: function() {
//     return this.firstName + ' ' + this.surname;
//   }
// });

// alert(user.fullName); // Вася Петров






// var user = {
//   firstName: "Вася",
//   surname: "Петров"
// }

// Object.defineProperty(user, "fullName", {

// 	// Возвращает значение prop (fullName)
//   get: function() {
//     return this.firstName + ' ' + this.surname;
//   },

//   // Устанавливаем значение свойств объекта, при получении prop (fullName)
//   // Ничего не возвращает
//   set: function(value) {
//     var split = value.split(' ');
//     this.firstName = split[0];
//     this.surname = 'SET';
//   }

// });

// alert( user.fullName ); // Вася Петров

// user.fullName = "Маша Бро";
// alert( user.firstName ); // Маша
// alert( user.surname ); // SET
// alert( user.fullName ); // Маша SET






// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;

//   // age будет высчитывать возраст по birthday
//   Object.defineProperty(this, "age", {
//     get: function() {
//       var today = new Date();
//       var yearDelta = today.getFullYear() - this.birthday.getFullYear();

//       if ( today.getMonth() > this.birthday.getMonth() ||
//            (today.getMonth() === this.birthday.getMonth() && today.getDate() >= this.birthday.getDate()) ) {
//         return yearDelta;
//       }

//       return yearDelta - 1;
//     }
//   });
// }

// var pete = new User("Петя", new Date(1987, 6, 1));

// alert( pete.birthday ); // и дата рождения доступна
// alert( pete.age );      // и возраст







// function User(fullName) {
//   this.fullName = fullName;

//   Object.defineProperty(this, 'firstName', {
//   	get: function() {
//   		var split = this.fullName.split(' ');
//   		return split[0];
//   	},
//   	set: function(val) {
//   		this.fullName = val + ' ' + this.lastName;
//   	}
//   });

//   Object.defineProperty(this, 'lastName', {
//   	get: function() {
//   		var split = this.fullName.split(' ');
//   		return split[1];
//   	},
//   	set: function(val) {
//   		this.fullName = this.firstName + ' ' + val;
//   	}
//   });
// }

// var vasya = new User("Василий Попкин");



// // чтение firstName/lastName
// alert( vasya.firstName ); // Василий
// alert( vasya.lastName ); // Попкин

// // запись в lastName
// vasya.lastName = 'Макаров';

// alert( vasya.fullName ); // Василий Сидоров








// function Article() {
//   this.created = new Date();
//   Article.count++;
//   Article.lastDate = this.created;
// }

// Article.count = 0;
// Article.showStats = function() {
// 	alert( 'Создано ф-й: ' + this.count + '\n Последняя: ' + this.lastDate ); 
// }

// new Article();
// new Article();

// Article.showStats(); // Всего: 2, Последняя: (дата)

// new Article();

// Article.showStats(); // Всего: 3, Последняя: (дата)