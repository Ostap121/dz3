// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let dog = {breed: 'boxer', name:'Aston', age: 3, sex:'male', color: 'brown'};
// let person = {name: 'Petro', age: 30, sex:"male", wife:"false", smoking:'true' };
// let car = {marka:'opel', model:'corca', type:'hech', color:'silver', paluvo:'benzun', };
// let flat = {floor:2, room:5, bathroom : 1, balcon:2, bedroom:3 };
// let book = {name:'Alhimik', author:'Paulo Kuelo', pages: 250, interesting: true, fantasy: false};

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// let dogs = [
//     {breed: 'boxer', name:'Aston', age: 3, sex:'male', color: 'brown'},
//     {breed: 'koker', name:'Laki', age: 1, sex:'female', color: 'yellow'},
//     {breed: 'buldog', name:'Lord', age: 4, sex:'male', color: 'black'},
//     {breed: 'balonka', name:'Asol', age: 7, sex:'female', color: 'white'},
//     {breed: 'vivchar', name:'Lata', age: 10, sex:'female', color: 'brown'}
// ];
// console.log(dogs);
// - 3 5 людей
// let person = [
//     {name: 'Petro', age: 30, sex:"male", wife:"false", smoking:'true' },
//     {name: 'Nazar', age: 3, sex:"male", wife:"false", smoking:'false' },
//     {name: 'Ira', age: 25, sex:"female", wife:"true", smoking:'false' },
//     {name: 'Viktor', age: 39, sex:"male", wife:"true", smoking:'true' },
//     {name: 'Oksana', age: 30, sex:"female", wife:"false", smoking:'false' }
// ];
// console.log(person);
// - з 5 автомобілів
// let car = [
//     {marka:'opel', model:'corca', type:'hech', color:'silver', paluvo:'benzun', },
//     {marka:'peugeot', model:'3008', type:'crosover', color:'black', paluvo:'disel', },
//     {marka:'seat', model:'cordoba', type:'sedan', color:'brown', paluvo:'benzun', },
//     {marka:'bmw', model:'535', type:'coupe', color:'white', paluvo:'benzun', },
//     {marka:'opel', model:'vectra', type:'sw', color:'blue', paluvo:'gaz/benzun', }
// ];
// console.log(car);

// -- створити об'єкт (не меньше 5ти властивостей) який описує,
// одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// // - будинок
// let house = {
//     street:'Gagarina',
//     number:8,
//     floor:2,
//     balcon:2,
//     bedroom: [
//         {color:'white', square:40},
//         {color:'silver', square:12},
//         {color:'brown', square:21}
//     ]
// };
// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// console.log(users[7].status);
// // - статус Максима
// console.log(users[4].status);
// // - ім'я передостаннього об'єкту
// console.log(users[9].name);
// // - ім'я третього об'єкта
// console.log(users[3].name);
// // - вік Олега
// console.log(users[6].age);
// // - вік Олі
// console.log(users[3].age);
// // - вік + ім'я 5го об'єкта
// console.log(users[5].age + ' ' +  users[5].name );
// // - вік + сатус Анни
// console.log(users[5].age + ' ' +  users[5].status );
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або
// document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// let content = document.getElementById('content');
// console.log(content.innerText);
// // - отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules');
// console.log(rules.innerText);
// // - замініть текст параграфа з id 'content' на будь-який інший
// console.log(content.innerText = "hello i'm paragraf");
// // - замініть текст параграфа з id 'rules' на будь-який інший
// console.log(rules.innerText = "hello i'm divka");
// // - змініть кожному елементу колір фону на червоний
// content.style.background = 'red';
// rules.style.background = 'red';
// let uelka = document.getElementsByTagName("ul");
// for (let uelkaElement of uelka) {
//     uelkaElement.style.background = 'red'
// }
//
// // - змініть кожному елементу колір тексту на синій
// content.style.color = "blue";
// rules.style.color = "blue";
// for (let uelkaElement of uelka) {
//     uelkaElement.style.color = "blue";
// }
// // - отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(rules.classList);
// // - отримати всі елементи з класом fc_rules
// let fc_rules = document.getElementsByClassName('fc_rules');
// console.log(fc_rules);
// // - поміняти колір тексту у всіх елементів fc_rules на червоний
// for (let fcRule of fc_rules) {
//     fcRule.style.color = 'yellow';
// }

// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// let main_headerH1 = document.getElementById('main_header');
// main_headerH1.style.color = "blue";
//
// // -- робить шириниу елементу ul 400 пікселів
// let uelka = document.getElementsByTagName('ul');
// for (let uelkaElement of uelka) {
//     uelkaElement.style.width = "400px";
// }
// // -- робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.getElementsByClassName('linkList');
// for (const linkListElement of linkList) {
//     linkListElement.style.width = "50%";
// }
// // -- отримує текст який зберігається в елементі з класом listElement2
// let  listElement2 = document.getElementsByClassName('listElement2');
// for (const listElement2Element of listElement2) {
//     console.log(listElement2Element.innerText);
// }
// // -- отримує всі елементи li та змінює ім колір фону на сірий
// let lishka = document.getElementsByTagName('li');
// for (const lishkaElement of lishka) {
//     lishkaElement.style.background = "gray";
// }
// // -- отримує всі елементи 'a' та додає їм клас anchor
// let ashku = document.getElementsByTagName('a');
// for (const ashkuElement of ashku) {
//     ashkuElement.classList.add('anchor');
// }
// // -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// // змінює йому розмір тексту на 40 пікселів
// for (const ashkuElement of ashku) {
//     if (ashkuElement.innerText === 'link3' ){
//         ashkuElement.style.fontSize = '40px'
//     }
// }
//
// // -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// for (const ashkuElement of ashku) {
//     let innerText = ashkuElement.innerText;
//     ashkuElement.classList.add(`element_${innerText}`)
//     console.log(ashkuElement);
// }
// // -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sub_header = document.getElementsByClassName('sub-header');
// //
// // for (const subHeaderElement of sub_header) {
// //     subHeaderElement.style.background = prompt();
// // }


// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()

// for (const subHeaderElement of sub_header) {
//     if (subHeaderElement.innerText === 'content 2 segment'){
//         subHeaderElement.style.background = prompt();
//     }
// }
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content_1 = document.getElementsByClassName('content_1');
// for (const content1Element of content_1) {
//     content1Element.innerText = prompt('enter text: ');
// }
// -- отримати елементи p та змінити їм padding на довільне значення
// let peshku = document.getElementsByTagName('p');
// for (const peshkuElement of peshku) {
//     peshkuElement.style.padding = '35px'
// }
// // -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let text2 = document.getElementsByClassName('text2');
// for (const text2Element of text2) {
//     text2Element.innerText = 'blalbalblbalba';
// }


// ====================TASK_2==========================

// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
//      (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let person = {
//     name: 'Viktor',
//     age: 30,
//     car: true
// };
//
// let car = {
//     marka: 'Opel',
//     model: 'Corsa',
//     color: "silver"
// };
// let book = {
//     name:'Alhimik',
//     author:'Paulo Kuelo',
//     pages: 250
// };
// let house =  {
//     floor: 3,
//     rooms: 12,
//     balcon: 2
// };
// let dog = {
//     breed: 'boxer',
//     nik:'Aston',
//     sex:'male'
// };


// - создать 5 объектов с полностью разным набором полей.
//       В каждом объекте должен присутсвовать массив и внутренний объект.
//          Опишите что угодно, машину, картину, болт...
//          Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let person = {
//     name: 'Viktor',
//     age: 30,
//     car: true,
//     girl:{
//         name: 'Inna',
//         age:18
//     },
//     skills : ['java','js']
// };
//
// let car = {
//     marka: 'Opel',
//     model: 'Corsa',
//     color: "silver",
//     paluvo: ['benzun','gaz'],
//     disks : {
//         marka:'Borbet',
//         size: 'R18'
//     }
// };
// let book = {
//     name:'Alhimik',
//     author:'Paulo Kuelo',
//     pages: 250,
//     janr: ['roman','drama'],
//     hero:{
//         name: "Santiago",
//         age: 12
//     }
// };
// let house =  {
//     floor: 3,
//     street:"Gagarina 3a",
//     rooms:{
//         badroom: 5,
//         bathroom : [{color:'white', square:40}, {color:'silver', square:12}],
//         kitchen: 2
//     },
//     balcon: 2
//
// };
// let dog = {
//     breed: 'boxer',
//     nik:'Aston',
//     sex:'male',
//     child: {
//         nik:'laki',
//         age: 1
//     }
// };
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// console.log(car);
// for (const key in car) {
//     console.log(key)
// }
// console.log(dog);
// for (const key in dog) {
//     console.log(key)
// }
// console.log(house);
// for (const key in house) {
//     console.log(key)
// }
// console.log(person);
// for (const key in person) {
//     console.log(key)
// }
// console.log(book);
// for (const key in book) {
//     console.log(key)
// }
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(person);
// let key = Object.keys(person);
// console.log(key);
//
// console.log(book);
// let key1 = Object.keys(book);
// console.log(key1);
//
// console.log(dog);
// let key2 = Object.keys(dog);
// console.log(key2);
//
// console.log(house);
// let key3 = Object.keys(house);
// console.log(key3);
//
// console.log(car);
// let key4 = Object.keys(car);
// console.log(key4);
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
//      (Значаения полей могу быть выдуманными)
// let car = [
//     {model:"Opel", year:2003, power:1.0, color:'silver'},
//     {model:"Peugeot", year:2013, power:2.0, color:'black'},
//     {model:"Seat", year:2004, power:1.2, color:'brown'},
//     {model:"WV", year:2012, power:1.8, color:'gray'},
//     {model:"BMW", year:2017, power:3.2, color:'white'},
//     {model:"Suzuki", year:2001, power:1.4, color:'silver'},
//     {model:"Nissan", year:2012, power:1.6, color:'blue'},
//     {model:"Mazda", year:2007, power:2.2, color:'black'},
//     {model:"Audi", year:2015, power:2.5, color:'white'},
//     {model:"Opel", year:2009, power:1.6, color:'blue'},
// ];
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
//      (Значаения полей могу быть выдуманными)
// let cities = [
//     {name:'Vynnyky',population:30000 , country: 'Ukraine', region:'Lvivska obl'},
//     {name:'Zolochiv',population:10000 , country: 'Ukraine', region:'Lvivska obl'},
//     {name:'Zbarazh',population: 15000, country: 'Ukraine', region:'Ternopilska obl'},
//     {name:'Dodruvodu',population:2000 , country: 'Ukraine', region:'Ternopilska obl'},
//     {name:'Skadovsk',population:10000 , country: 'Ukraine', region:'Kharkivska obl'},
//     {name:'Bila Cerkva',population:20000 , country: 'Ukraine', region:'Kyivska obl'},
//     {name:'Pustomyty',population:7000 , country: 'Ukraine', region:'Lvivska obl'},
//     {name:'Kovel',population: 10000, country: 'Ukraine', region:'Volynska obl'},
//     {name:'Kolomuya',population:15000 , country: 'Ukraine', region:'Ivano-Frankivska obl'},
//     {name:'Kobleve',population:5000 , country: 'Ukraine', region:'Mykolaivska obl'},
// ];
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
//      Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let car = [
//     {model:"Opel", year:2003, power:1.0, color:'silver', driver:{name:'Petro',age:26 , stag:7}},
//     {model:"Peugeot", year:2013, power:2.0, color:'black', driver:{name:'Ostap',age: 21, stag:3}},
//     {model:"Seat", year:2004, power:1.2, color:'brown', driver:{name:'Oksana',age:28 , stag:4}},
//     {model:"WV", year:2012, power:1.8, color:'gray', driver:{name:'Nazar',age:27 , stag:10}},
//     {model:"BMW", year:2017, power:3.2, color:'white', driver:{name:'Ira',age:22 , stag:4}},
//     {model:"Suzuki", year:2001, power:1.4, color:'silver', driver:{name:'Ivan',age:40 , stag:22}},
//     {model:"Nissan", year:2012, power:1.6, color:'blue', driver:{name:'Inna',age:19 , stag:1}},
//     {model:"Mazda", year:2007, power:2.2, color:'black', driver:{name:'Orest',age: 50, stag:35}},
//     {model:"Audi", year:2015, power:2.5, color:'white', driver:{name:'Vika',age:22 , stag:2}},
//     {model:"Opel", year:2009, power:1.6, color:'blue', driver:{name:'Roksa',age:30 , stag:1}},
// ];
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i =0;
// while (i<car.length){
//     console.log(car[i]);
//     i++
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const carElement of car) {
//     console.log(carElement);
// }
// - взять объекты из задания 1 и превратить каждый в json.
// let personJson = JSON.stringify(person);
// console.log(personJson);

// - взять json из задания 11 и превратить их обратно в объекты.
// let personParse = JSON.parse(personJson);
// console.log(personParse);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (const carElement of car) {
//     console.log(JSON.stringify(carElement))
// }
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (const citiesElement of cities) {
//     console.log(JSON.stringify(citiesElement))
// }
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let newArr =[];
// for (const carElement of car) {
//     newArr.push(JSON.stringify(carElement));
// }
// console.log(newArr);
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//         {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//         {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//         {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//         {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];
// for (const usersElement of users) {
//     console.log(usersElement.name);
//     for (const usersElement1 of usersElement.skills) {
//         console.log(usersElement1)
//     }
//
// }
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
//   Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
//   Скопировать все skills всех пользователей в отедльный массив
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//         {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//         {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//         {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//         {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];
// let skillsArr =[];
// for (const usersName of users) {
//     console.log(usersName.name);
//     for (const usersSkill of usersName.skills) {
//         console.log(usersSkill);
//         skillsArr.push(usersSkill);
//     }
// }
// console.log(skillsArr);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//         {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//         {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//         {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//         {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];
// for (const user of users) {
//     for (const skills of user.skills) {
//         console.log(skills)
//     }
// }


// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let newArr = [];
// for (const userAddress of users) {
//     newArr.push(userAddress.address);
// }
// console.log(newArr);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
// let divka = document.createElement('div');
//   for (const user of users) {
//     let divku = document.createElement('div');
//     divku.innerText = `${user.name}, ${user.age},  ${user.address.city}`;
//      divka.appendChild(divku);
// }
//   document.body.appendChild(divka);
// console.log(divka);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// let divka = document.createElement('div');
// for (const user of users) {
//     let divku = document.createElement('div');
//     let name = document.createElement('div');
//     let age = document.createElement('div');
//     let status = document.createElement('div');
//     let addres = document.createElement('div');
//     name.innerText = user.name;
//     age.innerText = user.age;
//     status.innerText = user.status;
//     addres.innerText = user.address.city;
//     divku.appendChild(name);
//     divku.appendChild(age);
//     divku.appendChild(status);
//     divku.appendChild(addres);
//     divka.appendChild(divku);
// }
// document.body.appendChild(divka);
// console.log(divka);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// let divka = document.createElement('div');
//   for (const user of users) {
//     let divku = document.createElement('div');
//     let name = document.createElement('div');
//     let age = document.createElement('div');
//     let status = document.createElement('div');
//     let address = document.createElement('div');
//     let addressCity = document.createElement('div');
//     let addressCountry = document.createElement('div');
//     let addressStreet = document.createElement('div');
//     let addressHouseNumber = document.createElement('div');
//       name.innerText = user.name;
//       age.innerText = user.age;
//       status.innerText = user.status;
//       address.innerText = user.address.city;
//       addressCity.innerText = user.address.city;
//       addressCountry.innerText = user.address.country;
//       addressStreet.innerText = user.address.street;
//       addressHouseNumber.innerText = user.address.houseNumber;
//     divku.appendChild(name);
//     divku.appendChild(age);
//     divku.appendChild(status);
//     divku.appendChild(address);
//     divka.appendChild(divku);
//     address.appendChild(addressCity);
//     address.appendChild(addressCountry);
//     address.appendChild(addressStreet);
//     address.appendChild(addressHouseNumber);
// }
//   document.body.appendChild(divka);
// console.log(divka);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//  let usersWithId = [
//      {id: 1, name: 'vasya', age: 31, status: false},
//      {id: 2, name: 'petya', age: 30, status: true},
//      {id: 3, name: 'kolya', age: 29, status: true},
//      {id: 4, name: 'olya', age: 28, status: false},
//  ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

// let newArr =[];
// for (const users of usersWithId) {
//     for (const cities of citiesWithId) {
//         if (users.id === cities.user_id){
//             users.address = cities;
//             newArr.push(users);
//         }
//     }
// }
// console.log(newArr);
//


// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let divka = document.createElement('div');
// divka.innerText ='hello I new divka';
// divka.id = 'divkaId';
// divka.className = 'divkaClass';
// document.body.appendChild(divka);
// console.log(divka);
// console.log(divka.innerText );
// console.log(divka.id);
// console.log(divka.className);
// console.log(divka.tagName);


// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let divkaID = document.getElementById('divkaId');
// divkaID.style.width = '450px';
// divkaID.style.height = '100px';
// let divkaCLASS = document.getElementsByClassName('divkaClass');
// for (const divkaCLASS1 of divkaCLASS) {
//     divkaCLASS1.style.width = '250px';
//     divkaCLASS1.style.height = '100px';
// }
// let divkaTAG = document.getElementsByTagName('div');
// for (const divkaTAGElement of divkaTAG) {
//     divkaTAGElement.style.width = '250px';
//     divkaTAGElement.style.height = '100px';
// }
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table = document.createElement('table');
// let tr = document.createElement('tr');
// let td1 = document.createElement('td');
// let td2 = document.createElement('td');
// let td3 = document.createElement('td');
// document.body.appendChild(table);
// table.appendChild(tr);
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);
// console.log(table);
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let table = document.createElement('table');
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//     let td1 = document.createElement('td');
//     let td2 = document.createElement('td');
//     let td3 = document.createElement('td');
//     document.body.appendChild(table);
//     table.appendChild(tr);
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
// }
// console.log(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let table = document.createElement('table');
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     document.body.appendChild(table);
//     table.appendChild(tr);
// }
// console.log(table);
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
// n та m отримати з prompt
// let table = document.createElement('table');
// let n = +prompt('Enter number radkiv: ');
// let m = +prompt('Enter number komirok: ');
// for (let i = 0; i < n; i++) {
//     let tr = document.createElement('tr');
//     for (let j = 0; j < m; j++) {
//          let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     document.body.appendChild(table);
//     table.appendChild(tr);
// }
// console.log(table);

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.
// У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають id
// let id = document.querySelectorAll('[id]');
// // console.log(id);
// // // - знайти всі параграфи ,та змінити текст на hello oktenweb!
// // let peshka = document.getElementsByTagName('p');
// // for (const peshkaElement of peshka) {
// //     peshkaElement.innerText = 'hello oktenweb';
// // }
// // //     - знайти всі div та змінити ім колір на червоний
// //
// // let divka = document.getElementsByTagName('div');
// // for (const divkaElement of divka) {
// //     divkaElement.style.background = 'red';
// // }

