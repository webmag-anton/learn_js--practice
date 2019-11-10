'use strict';




// let user = {
//   name: "John",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     alert(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   }
// };






// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };


// function sumSalaries(obj) {
	
// 	let sum = 0;

// 	for (let salary of Object.values(obj)){
// 		sum += salary
// 	}

// 	return sum;
// }


// alert( sumSalaries(salaries) ); // 650



		// Деструктуризация в цикле for of

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function topSalary(salaries) {

// 	let max = 0;
// 	let maxName = null;

// 	for (const [name, salary] of Object.entries(salaries)) {
// 		if (max < salary) {
// 			max = salary;
// 			maxName = name;
// 		}
// 	}

// 	return maxName;
// }





		/* функция стрелок */

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//   	let y = i
//     let shooter = function() { // функция shooter
//       alert( y ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0]();
// army[5](); 






			/* setTimeout */

// var i;
// var timer = setInterval(function() { // планируем setInterval каждые 10 мс
//   i++;
// }, 10);

// setTimeout(function() { // через 50 мс - отмена setInterval
//   clearInterval(timer);
//   alert( i ); // (*)
// }, 50);

// // и запускаем тяжёлую функцию
// function f() {
//   // точное время выполнения не играет роли
//   // здесь оно заведомо больше 100 мс
//   for (i = 0; i < 1e8; i++) f[i % 2] = i;
// }

// f();

// // 1. Интерпретатор видит две отстрочки и идет дальше (во время отстрочки) выполнять ф-ю f
// // 2. После выполнения f, которое занимает > 100мс, очередь выполнеия переходит к первой в 
// // очереди - setInterval, которая давно готова. 
// // 3. После того как выполнилась ф-я setInterval первый раз, происходит отсрочка, во время
// // которой очередь выполнения переходит так же к давно готовая setTimeout, в которой 
// // удаляется setInterval





			/* Декоратор шпион */

// function work(a, b) {
//   alert( a + b ); // произвольная функция или метод
// }

// function spy(func) {

// 	let arr = [];

// 	return function wrapper(...args) {
// 		wrapper.calls = arr;

// 		arr.push(args);

// 		return func(...args);
// 	}
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }




// Function.prototype.defer = function(ms) {

// 	let func = this;

// 	return function(...args) {

// 		return setTimeout(func.bind(null, ...args), ms) 
// 	}

// }

// function f(a, b) {
//   alert( a + b );
// }

// f.defer(1000)(1, 3); // выведет 3 через 1 секунду.







// let dictionary = Object.create(null);

// // ваш код, который добавляет метод dictionary.toString
// Object.defineProperty(dictionary, 'toString', {
// 	'value': function() {
// 		return Object.keys(this).join(',');
// 	},
// 	'writible': true,
// 	'configurable': true
// });

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   alert(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"







			/* 9.1 */

// class Clock{

// 	constructor({ template }){
// 		this.template = template;
// 	}

// 	render() {
// 		let date = new Date();

// 		let hours = date.getHours();
// 		if (hours < 10) hours = '0' + hours;

// 		let mins = date.getMinutes();
// 		if (mins < 10) mins = '0' + mins;

// 		let secs = date.getSeconds();
// 		if (secs < 10) secs = '0' + secs;

// 		let output = this.template
// 		.replace('h', hours)
// 		.replace('m', mins)
// 		.replace('s', secs);

// 		console.log(output);
// 	}

// 	stop() {
// 		clearInterval(this.timer);
// 	}

// 	start() {
// 		this.render();
// 		this.timer = setInterval( () => this.render() , 1000);
// 	}

// }

// let clock = new Clock({template: 'h:m:s'});
// clock.start();






			/* 9.2 */

// class Clock{

// 	constructor({ template }){
// 		this.template = template;
// 	}

// 	render() {
// 		let date = new Date();

// 		let hours = date.getHours();
// 		if (hours < 10) hours = '0' + hours;

// 		let mins = date.getMinutes();
// 		if (mins < 10) mins = '0' + mins;

// 		let secs = date.getSeconds();
// 		if (secs < 10) secs = '0' + secs;

// 		let output = this.template
// 		.replace('h', hours)
// 		.replace('m', mins)
// 		.replace('s', secs);

// 		console.log(output);
// 	}

// 	stop() {
// 		clearInterval(this.timer);
// 	}

// 	start() {
// 		this.render();
// 		this.timer = setInterval( () => this.render() , 1000);
// 	}

// }


// class ExtendedClock extends Clock {
//   constructor(options) {
//     super(options);
//     let { precision=1000 } = options;
//     this.precision = precision;
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// };

// let clock = new ExtendedClock({template: 'h:m:s', precision: 3000});
// clock.start();

