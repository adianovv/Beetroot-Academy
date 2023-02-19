"use string"
//task minimal

//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

let firstNumber = 0.1;
let secondNumber = 0.2;
let sumOfNumbers = firstNumber + secondNumber;
console.log(sumOfNumbers.toFixed(1));

//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

let firstNumber1 = '1';
let secondNumber2 = 2;
let sumOfNumbers2 = +firstNumber1 + secondNumber2;
console.log(sumOfNumbers2);

//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

let memory = +prompt('Enter the amount of memory of your drive in GB:') * 1000;
const fileSize = 820;
let resultProgram = memory / fileSize;
console.log(Math.floor(resultProgram));


//task normal

//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

let userMoney = +prompt('How much are you willing to spend?');
let chocolateCost = +prompt('How much does chocolate cost?');
let availableChocolates = userMoney / chocolateCost;
let surrenderOfMoney = userMoney % chocolateCost;

console.log(Math.floor(availableChocolates));
console.log(surrenderOfMoney);


//Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

let userNumber = +prompt('Enter your 3 digit number:');
let firstReverseNumber = userNumber % 10;
userNumber = userNumber / 10;
let secondReverseNumber = Math.floor(userNumber % 10);
userNumber = userNumber / 10;
let thirdReverseNumber = Math.floor(userNumber % 10);
console.log(`${firstReverseNumber}${secondReverseNumber}${thirdReverseNumber}`);


//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

let deposit = +prompt('Enter deposit amount:');
const percent = 5;
const monthOfTheYear = 12;
let resultChargeForTwoMonths = deposit / 100 * percent / monthOfTheYear * 2;
console.log(resultChargeForTwoMonths.toFixed(1));





