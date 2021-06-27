// //Удалить пользователя
// function removeUser() {
   
// }
// removeUser()

// // создать сообщение
// function createPost() {

// }
// createPost()

// // Добавить элемент
// function addItem(){

// }
// addItem()

// //читать файл
// function readFile(){

// }
// readFile()

// //получить элементы
// function getElements(){

// }
// getElements()

// //создать родительский элемент
// function createParentElement(){

// }
// createParentElement()

// //начать игру
// function startGame(){

// }
// startGame()

// //отправить сообщение
// function sendMessage(){

// }
// sendMessage()


// /* ======Задание 2 ========== */
// //1 вывести имя 
// function nameOutput(name)

// //2 вывести возраст 
// function deduceAge(age) 

// //3 спросить фамилию
// function askLastName(surname)

// //4 спросить что учишь
// function sendRequest(inquiry)

// //5 вывести данные
// function sendData(send)

// //6 местожительство 
// function residence(city)

// //7 спросить про семью
// function  askAboutFamily(family)


// //8 место учебы
// function placeStudy(courses)


// //9 год рождения
// function yearOfBirth(birth)

// //10 марка машины
// function carBrand(car)


// /* ========= Задание 3 =========   */

// //1 угадать сколько комнат в доме
// function howManyRoomsHouse(rooms){

// }
// howManyRoomsHouse(rooms)


// //2 закончить игру
// function finishGame(game) {

// }
// finishGame(game)

// //3 посоветовать фильм
// function recommendMovie(movie) {

// }
// recommendMovie(movie)


// //4 вывести сумму двух чисел
// function  sumTwoNumbers (sum) {

// }
// sumTwoNumbers(sum)

// //5 спросить мое имя
// function askMyName(myName) {

// }
// askMyName(myName)

// //6 запросить цену 
// function  requestPrice (price) {

// }
// requestPrice (price)

// //7 перевести первый символ строки в верхний регистр
// function convertToUppercase(uppercase) {

// }
// convertToUppercase(uppercase)

// //8 вывести каждый второй символ
// function printEverySecondCharacter(second) {

// }
// printEverySecondCharacter(second)

// //9 войти в вк 
// function enterVk (enter){

// }
// enterVk (enter)

// //10 загрузить страницу 
// function loadPage(load) {

// }
// loadPage(load)

// /* ========== Задание 4 ==========   */

function courseСost (price) {
   return price * 2
}
console.log(courseСost(50))

function gasolinePrice (gasoline) {
   return gasoline * 2
}
console.log(gasolinePrice(42))

function  priceForBread (Bread) {
   return Bread * 2
}
console.log(priceForBread(20))


function priceMeat (meat) {
   return meat * 2
}
console.log(priceMeat(350))

function dollarRate (rate) {
   return rate * 2
}
console.log(dollarRate(76))


/* ==========  Задание 5 ==========  */
// вывести первый элемент массива в функцию
function firstElement (arr = [1,2,3,4,5]){
  return arr[0]
}
console.log(firstElement())

/* ============Задание 6 =========  */
// вывести последний элемент массива в функцию 
function lastElement (arr2 = [1,2,3,4,5]){
   return arr2[arr2.length -1]
}
console.log(lastElement())



/*============= задание 7 ===========  */

function printMyFullName(firstname, secondname) {     // Объявляю функцию с двумя параметрами
   const fullname = `${firstname} ${secondname}`;    // объявляю константу делаю итерполяцию
                                                     // возвращает результат 
                                                    // выводим в консоле функцию с двумя параметрами
   return fullname;
 }
 
 console.log(printMyFullName('into', 'code'));
 

 
 function getSumOfFirstAndLastElement(arr) {                 // Объявляю функцию с одним параметром
   if(arr.length < 2) {                                      // пишем условие если длинна параметра функции меньше 2 
     return 'леее, минимум два элемента нужно жи есть';       // то возвращаем леее, минимум два элемента нужно жи есть.                        
   } else {                                                   // иначе объявляем константу и присваиваем
                                                              //   последний элемент массива и возвращаем параметр функц
     const lastIndex = arr.length - 1;                          // плюс константу
     
     return arr[0] + arr[lastIndex];
   }
 }
 
 console.log(getSumOfFirstAndLastElement([]);
 
 console.log(getSumOfFirstAndLastElement([3, 7, 12, 8]);


/*======== Задание 8  ===========*/
let text = "css";

function testVariableScope() {
  let text = "html";
  
  return text;
}

console.log(testVariableScope());    //  вначале проходит поиск в своей области видимости если не найдет и только потом ищет дальше.


/*======== Задача 9 ============*/
console.log(addToNumbers(4, 8))    // тут происходит поднятие 'hoisting'

function addToNumbers(x, y) {
   return x + y;
 }