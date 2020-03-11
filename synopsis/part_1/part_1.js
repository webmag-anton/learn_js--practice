// относительный и абсолютный(url  сайта...) путь; Относительный: относительно корня(/path/...),
// относительно текущего места (./path/... - текущая папка, ../path - родительская)

// в браузере глобальные ф-ии и переменные, объявленные с помощью var (не let/const!), становятся 
// свойствами глобального объекта window (в Nodejs — global, универсальный новый - globalThis) 

setTimeout(), setInterval(), alert(), prompt(), confirm() - методы глобального объекта window
console - объект глобального объекта window ( console.log(window.console) ) 					



					/*** Basic ***/



// null - значение неизвестно;   
// undefined - значение не присвоено

// typeof null возвращает "object" - ошибка языка
// typeof function() {} возвращает "function"



// Приведение типов 


// значения разных типов при сравнении приводятся к числу!

'', 0, null, undefined, NaN, false // - ложные значения при приведении типов (falthy values) 
// "0" и строки с одними пробелами " " при логическом преоб-ии true
// undefined при численном преоб-ии становится NaN, не 0; a пустой массив преобразуется к 0

// Значения null и undefined равны друг другу (и сами себе) и не равны любому другому значению
// alert(null == undefined);  //true

console.log(false == []) // true  - пустой массив преобразуется к 0
console.log(false == {}) // false - любой объект преобразуется к NaN
console.log(0 == null) // false - null равно или undefined или само себе
console.log(0 == undefined) // false - undefined равно или null или само себе

String(value)  // преобразование значения к строке
Number(value)  // преобразование значения к числу 
Boolean(value) // преобразование значения к булеву



// Циклы

- for ;; - общий
- for let key in object - для объектов
// в массивах доступ только к значениям элементов (к индексам нет доступа)
- for let fruit of fruits - общий, используется в итерируемых объектах, то есть в 
объектах с методом [Symbol.iterator](), возвращающим объект-итератор с методом next(); 
В строках, массивах и коллекции map изначально встроен, в объектах - нет  

Итерируемые объекты – это объекты, которые реализуют метод Symbol.iterator

// если переменная var объявлена внутри цикла (встроенное объявление переменной), то она видна 
// снаружи, так как для var не действует блочная область видимости, в отличае от переменной let
for (let i = 0; i < 10; i++) { // для var это не так
  // у каждого цикла своё собственное лексическое окружение со своей переменной i; 
}



// Деструктуризация ( деструктурирующее присваивание )

-  для объекта - let {prop : varName = default, ...rest} = object
-  для массива - let [item1 = default, item2, ...rest] = array




					/*** properties and functions in js ***/



// Взаимодействие: alert(message), 
//                 prompt(title, [default]), 
//                 confirm(question)
// приостанавливают дальнейшее выполнение скриптов до тех пор, 
// пока пользователь не нажмёт кнопку
alert()   - преобразует к строке и выводит 
prompt()  - <string or null>
confirm() - <boolean>



// функции с пустым return или без него возвращает undefined
function doNothing() {};   alert( doNothing() ); // undefined



// Преобразование объектов в примитивы
В зависимости от варианта преобразований - «хинта» - всего 3,
вызываются такие методы объекта
- obj[Symbol.toPrimitive](hint) - метод с символьным ключом, 
универсальный метод, преобразование в зависимости от хинта
- Иначе, если хинт равен string - obj.toString(), а если его нет, 
то obj.valueOf(), если он существует
- Если хинт равен number или default - obj.valueOf(), а если его нет, 
то obj.toString()

В отсутствие Symbol.toPrimitive и valueOf, toString обработает все случаи 
преобразований к примитивам методы должны возвращать примитив, а не объект



		/* Символы: */

Symbol.("name") - создание с именем

// читаем глобальный символ из глобального реестра и записываем его в переменную; 
// если символа не существует, то он будет создан с именем; глобальный реестр
// нужен для обращения к одному и тому же символу 
let sym = Symbol.for("id")

// принимает глобальный символ и возвращает его имя
Symbol.keyFor(sym) // id

// для любых символов доступно свойство description, возвращее имя



		/* Числа: */

alert( NaN === NaN ); // false
Math.floor() - округление в меньшую сторону 3.1 становится 3
Math.ceil()  - округление в большую сторону 3.1 становится 4
Math.round() - округление до ближайшего целого 3.5 становится 4
num.toFixed(n) - <string> - округляет число до n знаков 
после запятой, допускает неточность!
// 6.35 -> 63.5 -> 64(rounded) -> 6.4 - способ устраняющий неточность
Math.round(6.35 * 10) / 10 
isNaN(value) - <boolean> - преобразует в число и проверяет является ли оно NaN
isFinite(value) преобразует в число и возвращает true, 
если оно является обычным числом - не NaN/Infinity/-Infinity
parseInt('str') - возвращает целое число из строки или NaN
parseFloat('str') - возвращает дробное число из строки или NaN



		/* Строки: */

str.indexOf(substr [, pos]) - <number or -1> - поиск подстроки
str.includes(substr [, pos]) - <boolean>
str.slice(start [, end]) - получение подстроки без вырезания
str.codePointAt(pos) - возвращает код символа на позиции pos
str.startsWith(substr [, pos]) - <boolean>
String.fromCodePoint(code) - создаёт символ по его коду code




        /* Методы массивов: */

// псевдомассивы – это объекты, у которых есть индексы и свойство length

самый простой способ очистить массив – это arr.length = 0

позволяет запускать функцию для каждого элемента массива
arr.forEach((item, index, array) => {})

Array.isArray(value) - <boolean>
Array.from() - принимает итерируемый объект или псевдомассив и делает из него «настоящий»


                //  Для добавления/удаления элементов

push(...items) - добавляет items в конец массива
pop() - удаляет элемент в конце массива и возвращает его
shift() - удаляет элемент в начале массива и возвращает его
unshift(...items) - добавляет items в начало массива

arr.slice(start, end) - возвращает подмассив, без вырезания
arr.concat(arg1, arg2...) - создаёт новый массив, в который копирует данные из других

начиная с позиции index, удаляет deleteCount элементов и вставляет elem1, ..., elemN на их место
arr.splice(index[, deleteCount, elem1, ..., elemN]) - возвращает массив из удалённых элементов

                //  Поиск в массиве

arr.indexOf(item, from) - <number or -1> - поиск item
arr.includes(item, from) - <boolean> - поиск item

Метод find ищет первый попавшийся элемент, на котором функция-колбэк вернёт true
arr.find(function(item, index, array) {
  если true - возвращается текущий элемент и перебор прерывается,
  если все итерации оказались ложными возвращается undefined
}) 
arr.findIndex(function(item, index, array) {
  по сути, то же самое, что и arr.find, но возвращает индекс, на котором 
  был найден элемент, а не сам элемент, и -1, если ничего не найдено
}) 

Метод filter возвращает массив из всех подходящих элементов
arr.filter(function(item, index, array) {
  если true - элемент добавляется к результату, и перебор продолжается;
  возвращается пустой массив в случае, если ничего не найдено
})

                //  Преобразование массива

arr.map(function(item, index, array) {
  возвращается новое значение вместо элемента, например return item.length
})

По умолчанию элементы сортируются как строки
arr.sort() - сортирует массив на месте, меняя в нём порядок элементов
Если возвращает положительное число - то большее значение, если отрицательное - меньшее
arr.sort(compareFunc(a, b){}) - собственный порядок сортировки

arr.reverse() - меняет порядок элементов на обратный
str.split(delim) - разбивает строку на массив по заданному разделителю delim
arr.join(glue) - создаёт строку из элементов arr, вставляя glue между ними

используются для вычисления какого-нибудь единого значения на основе всего массива
previousValue – результат предыдущего вызова, равен initial при первом вызове, если передан initial
arr.reduce(function(previousValue, item, index, array) {}, [initial])




		/* Методы объектов: */


// поле объекта (свойство) - комбинация key: value

копирует св-ва {и строковые и символьные} всех объектов srcN в dest
Object.assign(dest, [src1, src2, src3...]) - не для глубокого клон-я {без вложенных объектов}

Object.keys(obj) – возвращает массив из собственных {не унаследованных} ключей
Object.values(obj) – возвращает массив значений
Object.entries(obj) – возвращает массив пар [ключ, значение]
Object.fromEntries(iterable) - преобразует массив пар [ключ, значение] в объект

Object.getOwnPropertySymbols() - возвращает массив только символьных ключей

Object.getOwnPropertyDescriptor(obj, propertyName) - возвращает бъект, так 
называемый «дескриптор свойства»: он содержит значение свойства и все его флаги
Object.defineProperty(obj, propertyName, descriptor) - чтобы изменить флаги, а
если св-ва нет то оно создается с указанными флагами; если какой-либо флаг не 
указан явно, ему присваивается значение false 
пример деск-ра { "value": 1, "writable": false, "enumerable": false, "configurable": false }
writable – если true, свойство можно изменить, иначе оно только для чтения
enumerable – если true, свойство перечисляется в циклах, иначе циклы его игнорируют
configurable – если true, свойство можно удалить, а флаги можно изменять

Object.getOwnPropertyDescriptors(obj) - получить все дескрипторы свойств сразу
Object.defineProperties(obj, { prop1: descriptor1, prop2: descriptor2 })

//клонирование объекта вместе с его флагами (не глубокое)
let clone = Object.defineProperties( {}, Object.getOwnPropertyDescriptors(obj) )

Помимо обычных свойств-данных у объектов есть свойства-аксессоры; 
Они представлены методами «геттер» и «сеттер»
let obj = {
  get propName() {
    // геттер, срабатывает при чтении obj.propName
  },
  set propName(value) {
    // сеттер, срабатывает при записи obj.propName = value
  }
}

свойство __proto__ ссылается на прототип объекта; оно является геттером/сеттером для
внутреннего скрытого св-ва [[Prototype]], значением которого является либо другой 
объект - прототип, либо null;

Цикл for..in проходит не только по собственным, но и по унаследованным свойствам объекта, 
кроме св-в объкта из «вершины иерархии» - Object.prototype, так как эти св-ва с 
флагом "enumerable": false - не перечислимы;
Если унаследованные свойства не нужны, то мы можем отфильтровать их при помощи встроенного 
метода - obj.hasOwnProperty(key), который наследуется от Object.prototype.hasOwnProperty

Операции записи/удаления работают непосредственно с объектом, они не используют 
прототип если это обычное свойство, а не сеттер; Сеттер из прототипа используется для записи;
Если мы вызываем метод obj.method(), взятый из прототипа, то this в нем ссылается на obj

Конструктор только создает новый объект, без наследования; для наследования указывается prototype;
Свойство функции-конструктора F.prototype устанавливает [[Prototype]] для новых экземпляров 
при вызове new F(); По умолчанию все функции имеют F.prototype = { constructor: F };

Прототип это объект, а значит его дефолтное значение св-ва [[Prototype]] 
равно Object.prototype , потому что объекты создаются встроенным конструктором Object;

__proto__ - это самый короткий и интуитивно понятный способ установки и чтения прототипа; 
__proto__ находится в Object.prototype, как и некоторые другие методы; бывают и статические 
методы конструктора; В современном языке метод __proto__ заменяют такие статические методы
Object.create(proto, [descriptors])
Object.getPrototypeOf(obj)
Object.setPrototypeOf(obj, proto)
// Если установить F.prototype = null, то вновь созданный объект наследует от Object.prototype
// Мы можем создать "простейший" объект без прототипов, т.е без наследования встроенных методов
Object.create(null)
// точная копия obj c тем же прототипом - «продвинутое» клонирование объекта 
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))

// Быстрый способ клонировать объект с помощью оператора spread (не для глубокого клонирования):
let obj1 = {
  age: 16,
  school: {
    street: 'Donskogo',
    color: 'yellow'
  }
}
let obj2 = {...obj1}
obj1.school.color = 'red'
console.log(obj2, obj1 == obj2) // { age: 16, school: { street: 'Donskogo', color: 'red' } }, false 


// Единственный способ глубокого клонирования объектов или массивов в нативном js это использовать JSON
// важно что JSON поддерживает только объекты, массивы, строки, числа, true/false и null
// + этот прием нельзя использовать для копирования методов объекта (JSON не поддерживает функции)
let clone = JSON.parse(JSON.stringify(obj/arr))




		/* Классы */

Класс - продвинутый способ создания обектов, вместо обычного конструктора;
Методы класса попадают в его свойство prototype, откуда наследуются; 
После свойств и методов вне constructor запятая не ставится;

class MyClass {
  constructor(name, surname) { // конструктор; свойства и методы присваиваются создаваемому экземпляру
    this._name = name;
    this._surname = surname;
    this.func = function() {}
  }

  // свойство не из constructor() присваивается создаваемому экземпляру; с фиксированным value
  prop = value 

  method(...) {} // методы не из constructor() попадают в MyClass.prototype (в т.ч геттеры/сеттеры)
  get fullName() {
    return `${this._name} ${this._surname}`   // геттер, срабатывает при чтении свойства obj.fullName
  }
  set fullName(value) {
    [this._name, this._surname] = value.split(" ")   // сеттер, срабатывает при записи свойства obj.propName = value
  }

  // не присваивается создаваемому экземпляру, эквивалентен MyClass.propStatic = value
  static propStatic = value
  // не присваивается создаваемому экземпляру, эквивалентен MyClass.methodStatic = function() {}
  static methodStatic() {} 
}

Наследование классов имеет синтаксис class Child extends Parent; 
При этом Child.prototype.__proto__ будет равен Parent.prototype;
Если у Child не указан конструктор, то он унаследуется от Parent; 
Если необходимо переопределить конструктор у Child, то обязателен вызов конструктора 
родителя с помощью ключевого слова super() в конструкторе Child до обращения к this;
Мы можем вызвать super.method() в методе Child для обращения к методу родителя Parent;
Так же можно вызвать метод родителя с помощью super.method() и у обычных объектов, 
наследующих друг от друга

Мы также можем присвоить свойство или метод самой функции-классу, а не её prototype; 
Для этого перед свойством или методом ставится слово static; Такие методы  называются 
статическими; Эти свойства или методы не будут иметь отношения к создаваемым объектам;
Статические свойства и методы наследуются между классами при class Child extends Parent, так как 
Child.prototype.__proto__ == Parent.prototype  и  Child.__proto__ == Parent (двойное наследование)

class Parent{
	constructor(name) {
    this.name = name;
  }
  hello() {
  	alert(`hello ${this.name}`)
  }
  static run() {}
}

class Child extends Parent{
	constructor(name, age) {
		super(name);
    this.age = age;
  }
  say(arg) {
  	super.hello();
  	this.age += arg;
  }
}

У встроенных классов есть собственные статические методы, например Object.keys, Array.isArray;
Обычно, когда один класс наследует другому, то наследуются и статические методы; Но встроенные 
классы – исключение; Они не наследуют статические методы друг друга; Например, и Array, и 
Date наследуют от Object, так что в их экземплярах доступны методы из Object.prototype; 
Но Array.[[Prototype]] не ссылается на Object, поэтому нет методов Array.keys() или Date.keys()



	/* инкапсуляция */

// В терминах ООП отделение внутреннего интерфейса от внешнего называется инкапсуляция;
Для скрытия внутреннего интерфейса мы используем защищённые или приватные свойства и методы:
- Защищённые поля имеют префикс _; это хорошо известное соглашение, не поддерживаемое на уровне  
  языка; программисты должны обращаться к полю, начинающемуся с _, только  из его класса и  
  классов, унаследованных от него;
- Приватные свойства и методы должны начинаться с #; JavaScript гарантирует, что мы можем 
  получить доступ к таким полям только внутри класса
Защищённые или приватные свойства могут быть как в конструкторе, так и просто св-вом;

	

	/* методы для проверки типа / наследственной принадлежности */

Оператор instanceof позволяет проверить, к какому классу/конструктору принадлежит объект, с 
учётом наследования; Синтаксис  obj instanceof Class - <boolean>; Обычно оператор instanceof 
просматривает для проверки цепочку прототипов; Но это поведение может быть изменено при 
помощи статического метода Symbol.hasInstance

							  работает для																												 возвращает

typeof				  примитивов; typeof null возвращается "object"												 строка
{}.toString		  примитивов, встроенных объектов, объектов с Symbol.toStringTag			 строка
instanceof		  объектов; метод Class[Symbol.hasInstance](obj) - ручная настрока		 true/false



	/* Примеси / Mixins */

Примесь – это объект, методы которого предназначены для использования в других классах, причём 
без наследования от примеси; Пример добавления методов Object.assign(User.prototype, sayHiMixin);
Примеси могут наследовать друг от друга




    /* Map и Set */

Map – это коллекция ключ/значение;
Но основное отличие от бъекта в том, что Map позволяет использовать ключи любого типа

// Методы и свойства:
new Map() – создаёт коллекцию
map.set(key, value) – записывает по ключу key значение value
map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует
map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false
map.delete(key) – удаляет элемент по ключу key
map.clear() – очищает коллекцию от всех элементов
map.size – возвращает текущее количество элементов

// При создании Map мы можем указать массив (или другой итерируемый объект) с 
// парами ключ-значение для инициализации, как здесь:
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
])

// мы можем создать Map из обычного объекта следующим образом:
let obj = {
  name: "John",
  age: 30
}
// Object.entries возвращает массив пар ключ-значение: [ ["name","John"], ["age", 30] ]
let map = new Map( Object.entries(obj) )

// Для перебора коллекции Map есть 3 метода:
map.keys() – возвращает итерируемый объект по ключам
map.values() – возвращает итерируемый объект по значениям
map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], 
                этот вариант используется по умолчанию в for..of
// Кроме этого, Map имеет встроенный метод forEach, схожий со встроенным методом массивов Array:
recipeMap.forEach((value, key, map) => {})


Объект Set – это особый вид коллекции - «множество» значений {без ключей}, где 
каждое значение может появляться только один раз

// Его основные методы:
new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый 
                    объект {обычно это массив}, то копирует его значения в новый Set
set.add(value) – добавляет значение {если оно уже есть, то ничего не делает}, возвращает тот же объект set
set.delete(value) – удаляет значение, возвращает true если value было в множестве на момент вызова, иначе false
set.has(value) – возвращает true, если значение присутствует в множестве, иначе false
set.clear() – удаляет все имеющиеся значения
set.size – возвращает количество элементов в множестве

// Мы можем перебрать содержимое объекта set как с помощью  метода for..of, так 
// и используя set.forEach((value, valueAgain, set) => {}   -   value и valueAgain одни и то же значение

// Set имеет те же встроенные методы, что и Map:
set.keys() – возвращает перебираемый объект для значений
set.values() – то же самое, что и set.keys(); присутствует для обратной совместимости с Map
set.entries() – возвращает перебираемый объект для пар вида [значение, значение]; для обратной совместимости с Map




		/* Методы объекта Date: */

// месяцы и дни недели начинаются с 0 (январь/воскресенье - 0)
getFullYear() - получить год (4 цифры)
getMonth() - получить месяц, от 0 до 11
getDate() - получить день месяца, от 1 до 31
getHours(), getMinutes(), getSeconds(), getMilliseconds()
getDay() - получить день недели от 0 (воскресенье) до 6 (суббота)
getTime() - получить таймстамп – количество миллисекунд, прошедших с 1 января 1970 года UTC+0
getTimezoneOffset() - Возвращает разницу в минутах между местным часовым поясом и UTC

// У всех этих методов, кроме setTime(), есть UTC-вариант, например: setUTCHours()
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(ms) - установить таймстамп - количество миллисекунд, прошедших с 1 января 1970 года UTC+0


Date.now() - если нужно просто измерить время - бенчмаркинг

// считывает дату из строки. Формат строки должен быть следующим: YYYY-MM-DDTHH:mm:ss.sssZ
Date.parse(str) - <timestamp or NaN>




		/* Методы	формата JSON (JavaScript Object Notation): */

// JSON поддерживает объекты, массивы, строки, числа, true/false и null
// Если объект имеет метод toJSON(), то он вызывается через JSON.stringify
JSON.stringify() - для преобразования {сериализации} объектов в JSON
JSON.parse() - для преобразования {декодирования} JSON обратно в объект




		/* обработка ошибок */

// Обычно скрипт в случае ошибки «падает» (сразу же останавливается), с выводом ошибки в консоль.
// Но есть синтаксическая конструкция try..catch, которая позволяет «ловить» ошибки и вместо 
// падения делать что-то более осмысленное. 
// То есть если ошибка отловлена, то код за конструкцией продолжает выполняться.

try {
	// Если в коде нет ошибок, то блок catch(err) игнорируется: выполнение доходит 
  // до конца try и потом далее полностью пропуская catch. Если ошибка - то выполнение 
  // try прерывается, и поток управления переходит в начало catch(errObj)

  // Если ошибки нет, но, например, не выполняется какое то наше условие, то можно "кинуть"
  // свою ошибку с помощью оператора throw. Синтаксис: throw <объект ошибки>
  // В JS есть множество встроенных конструкторов(классов) для стандартных ошибок: Error, 
  // SyntaxError, ReferenceError, TypeError и др. Их синтаксис: let error = new Error(message);
  // Для встроенных ошибок свойство name – это в точности имя конструктора. А свойство message 
  // берётся из аргумента.
} catch (errObj) {
  // обработка ошибки
  // errObj - объект ошибки содержащий основные св-ва: name, message и stack (текущий стек вызова)

  // Проброс исключения (ошибки); например если мы хотим обрабатывать только определенные ошибки: 
  if (errObj.name == "SyntaxError") {
    alert( "My Error: " + errObj.message );
  } else {
    throw errObj; // проброс (*)
  }
  // проброшенная ошибка «выпадает наружу» и может быть поймана другой внешней 
  // конструкцией try..catch (если есть), или «убьёт» скрипт.
}
// Конструкция try..catch может содержать ещё одну секцию: finally, она выполняется в 
// любом случае: после try, если не было ошибок, или после catch, если ошибки были.
// Конструкция try..finally без секции catch также полезна. Мы применяем её, когда не хотим здесь 
// обрабатывать ошибки (пусть выпадут наружу), но хотим быть уверены, что начатое завершилось.
finally {
  // выполняем всегда; даже если в try есть return, то сначала выполнится finally
}




		/* Асинхронность,   event loop  ==  <-- Call Stack -- Web Apis -- Callback Queue -->  */

// Допустим, что у нас есть 2 строки кода. Первая идет за второй. Синхронность означает то, 
// что строка 2 не может запуститься до тех пор, пока строка 1 не закончит своё выполнение.
// JS однопоточный, что означает то, что только один блок кода может запускаться за раз.

// Пример асинхронности - функция setTimeout (это web api). Когда поток выполнения доходит до нее,
// то он видит отсрочку и переходит к выполнению следующего кода. Если несколько setTimeout, то
// они после прошедшего времени отсрочки попадают в очередь в порядке отсрочки 
// (чем меньше время отсрочки, тем первей в очереди). Функции из очереди выполняются только после 
// завершения выполнения синхронного кода и в порядке очереди.

// Также асинхронными являются слушатели событий (т.к. это web api, например scroll, click),
// работа с сервером, обработчики промисов (у промисов своя очередь microtask queue)...

// Даже если addEventListener идет после тяжелой ф-ии, которая может выполняться например 8 секунд,
// событие все равно слушается (с помощью web api) хоть и поток интерпритатора пока не дошел до
// addEventListener. Т.е. во время выполнения тяжелой ф-ии мы можем например кликать. Но обработка 
// события произойдет после тяжелой ф-ии (и остального текущего кода) из очереди событий.
// Обработчики событий в очереди (Callback Queue) приорететней чем setTimeout - то есть, даже 
// если позже попали в очередь, все равно выполняться (попадут в стек) раньше!

// Пусть даже JavaScript и однопоточный, мы можем достичь согласованности действий 
// через асинхронное исполнение задач.





		/* Promise */

// У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:
// - state («состояние») — вначале "pending" («ожидание»), потом меняется на 
// 	"fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено
// 	с ошибкой») при вызове reject.
// - result («результат») — вначале undefined, далее изменяется на value при 
// 	вызове resolve(value) или на error при вызове reject(error)

let promise = new Promise( function(resolve, reject) {
  // эта функция-исполнитель (executor) вызывается автоматически; она должна вызвать
  // один из этих колбэков сразу или с задержкой (сработает первый вызванный):
  	// resolve(value) — если работа завершилась успешно, с результатом value.
  	// reject(error) — если произошла ошибка, error – объект ошибки. 

  	// value и error могут быть любым типом данных
});

// Потребители (подписчики) завершенного промиса могут использовать его результат или 
// ошибку с помощью таких методов обработчиков: then, catch, finally. Они находятся в 
// прототипе встроенного класса Promise. Т.к обработчики промисов then, catch, finally  
// асинхронны, то они выполняются после синхронных скриптов и в порядке очереди

promise.then(
  function(result) { /* обработает успешное выполнение */ },
  function(error) { /* обработает ошибку */ }
);

// Если мы хотели бы только обработать ошибку, то можно использовать null в качестве 
// первого аргумента. Или можно воспользоваться методом .catch(errorHandlingFunction),
// который сделает тоже самое. Вызов .catch(f) – это сокращённый вариант .then(null, f)
promise.catch( function(error) { /* обработает ошибку */ } );

promise.finally( () => {
		console.log(`не имеет аргументов, не предназначен для обработки результата промиса.
								 Его задача выполнить какое то действие (например остановки индикатора 
								 загрузки). Обработчик finally «пропускает» результат или ошибку дальше, 
								 к последующим обработчикам`) 
	}
);

// Если обработчик в .then (или в catch) возвращает промис, последующие элементы 
// цепочки ждут, пока этот промис выполнится. Когда это происходит, результат его 
// выполнения (или ошибка) передаётся дальше и обрабатывается (или выпадет наружу);
// Так же если коллбэк в .then (или в catch) возвращает любой тип данных, то он 
// передаётся дальше и обрабатывается следующими обработчиками.

// Если мы бросим ошибку (throw) в промисе или обработчике (.then), то промис будет 
// считаться отклонённым, и управление перейдёт к ближайшему обработчику ошибок.
// Это происходит для всех ошибок, не только для тех, которые вызваны оператором throw.
// Но если мы бросим или допустим ошибку в промисе/then внутри setTimeout, то она не
// обработается следующим обработчиком из-за асинхронности


	// Promise API (5 статических методов):

// после завершения самого долгого промиса возвращает массив результатов переданных 
// промисов в той же последовательности. Если в перданном промисе ошибка, то остальные 
// игнорятся и возвращается ошибка. в массив могут передаваться не обязательно промисы 
Promise.all([...промисы...])

// всегда ждёт завершения всех промисов (даже завершенных с ошибкой);
// В массиве результатов будет:
// {status:"fulfilled", value:результат} для успешных завершений,
// {status:"rejected", reason:ошибка} для ошибок
Promise.allSettled([...промисы...])

// Метод очень похож на Promise.all, но ждёт только первый (самый быстрый) промис, из  
// которого возвращает результат (или ошибку)
Promise.race([...промисы...]);

// возвращает успешно выполненный промис с результатом value (редко используется)
// То же самое, что: let promise = new Promise(resolve => resolve(value));
Promise.resolve(value) 

// возвращает промис, завершённый с ошибкой error (редко используется)
Promise.reject(error)





		/* Async/await */

// Асинхронные функции позволяют писать асинхронный код так, как если бы он был
// синхронным (внутри асинхронной функции) 

// У слова async перед функцией один простой смысл: эта функция всегда возвращает промис. 
// Возвращаемые значения других типов(число) оборачиваются в завершившийся успешно промис.

// Есть другое ключевое слово – await, которое можно использовать только внутри async-функций. 
// await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не 
// выполнится. После чего оно вернёт его результат, и выполнение кода продолжится. Если промис 
// завершается с ошибкой, то будет сгенерировано и выброшено исключение (ошибка). Справа от 
// await может быть только промис (или ф-ии возвращающие промис - fetch()...)

// Для перехвата ошибок внутри async-функций удобно использовать try..catch
// Но на верхнем уровне вложенности (вне async–функций) await использовать нельзя, 
// поэтому .then/catch для обработки финального результата или ошибок – обычная практика.





		/* Генераторы */

// Для объявления генератора используется специальная синтаксическая конструкция: function* funName, 
// которая называется «функция-генератор». Когда такая функция вызвана, она не выполняет свой код. 
// Вместо этого она возвращает специальный объект «генератор». Основным методом генератора является 
// .next(); При вызове он запускает выполнение кода до ближайшей инструкции yield <значение>. По 
// достижении yield выполнение функции приостанавливается, а соответствующее значение – возвращается 
// во внешний код. Результатом метода next() всегда является объект с двумя свойствами:
// - value: значение из yield
// - done: true, если выполнение функции завершено, иначе false.

// Генераторы являются перебираемыми объектами ( встроенный метод [Symbol.iterator]() возвращает 
// объект-итератор с методом next() ). Возвращаемые ими значения можно перебирать в цикле for..of, 
// а так же использовать оператор расширения: let sequence = [0, ...gen()]





		/* Modules */

// Модуль – это файл; чтобы работал import/export, нужно для 
// браузеров указывать атрибут <script type="module">

// можно использовать атрибут src="./path/some.js"
<script type="module">
	// импотируемая переменная/функция/класс внутри {} через запятую
  import {sayHi} from './say.js';
  document.body.innerHTML = sayHi('John');
<script>

// Экспорт:

// Перед объявлением переменной/функции/класса:
//  - export [default] class/function/variable ...
// Отдельный экспорт:
//  - export {x [as y], ...}
// Реэкспорт (импорт и затем экспорт):
//  - export {x [as y], ...} from "module"
//  - export * from "module" (не реэкспортирует export default)
//  - export {default [as y]} from "module" (реэкспортирует только export default)

// Импорт:

// Именованные экспорты из модуля (имя должно быть как у экспорта):
//  - import {x [as y], ...} from "module"
// Экспорт по умолчанию:
//  - import x from "module"
//  - import {default as x} from "module"
// Всё сразу:
//  - import * as obj from "module"
// Только подключить модуль (его код запустится), но не присваивать его переменной:
//  - import "module"

// Экспорт по умолчанию может быть без имени переменной/функции/класса. При импорте 
// в таком случае имя может быть любое


// Основные возможности модулей:

// - в модулях всегда используется режим use strict
// - своя область видимости переменных
// - код в модуле выполняется только один раз при импорте; если один и тот же модуль 
// используется в нескольких местах, то его код выполнится только один раз, после  
// чего экспортируемая функциональность передаётся всем импортёрам. То есть, например,
// импортируемый объект из модуля 1.js в модули 2.js и 3.js при изменении какого-то
// св-ва в 2.js, так же поменяется и в остальных модулях - 1.js и 3.js
// - в модуле «this» не определён; в обычном скрипте «this» является window
// - модули по умолчанию выполняются в отложенном режиме (defer)
// - атрибут async работает во встроенных скриптах (в обычных скриптах работает только с src="")
// - вешние скрипты с одинаковым атрибутом src запускаются только один раз
// - внешний скрипт, который загружается с другого домена, требует указания заголовков CORS.

// В статических инструкциях экспорта и импорта мы не можем делать импорт в зависимости от
// условий ( внутри блока - {} ) или в процессе выполнения


	// Динамические импорты

// Динамический импорт работает и в обычных скриптах, он не требует указания script type="module"

// Выражение import(module) загружает модуль и возвращает промис, результатом которого 
// становится объект модуля, содержащий все его экспорты

// // пример:
// let question = confirm('загрузить скрипт?')
// if (question) {
//   import('./say.js') 
//   .then(obj => obj.hi())
//   .catch(err => console.log(err.name) )
// }





		/* Proxy и Reflect */

// Объект Proxy «оборачивается» вокруг другого объекта (класса/ф-ии...) и может перехватывать (и, при 
// желании, самостоятельно обрабатывать) разные действия с ним: чтение/запись свойств, вызов ф-ии...

let proxy = new Proxy(target, {
  /* ловушки */
});

// - target – это объект, для которого нужно сделать прокси, может быть чем угодно, включая функции.
// - handler(2 параметр) – конфигурация прокси: объект с «ловушками» («traps»): методами, которые  
// перехватывают разные операции, например, ловушка get – для чтения свойства из target, ловушка set –  
// для записи свойства в target, ловушка construct - для перехвата создания объекта классом и т.д.

// Если нет ловушек, то все операции на proxy применяются к оригинальному объекту target.

// Reflect API создано как дополнение к Proxy. Для любой ловушки из Proxy существует метод в Reflect с 
// теми же аргументами. Нам следует использовать его, если нужно перенаправить вызов на оригинальный объект.