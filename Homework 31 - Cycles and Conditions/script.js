"use strict"
// task minimal

//Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

// let userAge = +prompt('How old are you?');
//
// while (isNaN(userAge)) {
//     alert('Enter the number');
//     userAge = +prompt('How old are you?');
// }
//
// if (userAge <= 11) {
//     console.log('You are a child');
// }
// else if (userAge >= 12 && userAge <= 17) {
//     console.log('You are a teenager');
// }
// else if (userAge >= 18 && userAge <= 59) {
//     console.log('You are an adult');
// }
// else if (userAge >= 60) {
//     console.log('You are a pensioner');
// }


//Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

// let userNumber = +prompt('Enter a number from 0-9:');
//
// switch (userNumber) {
//     case 0:
//         console.log('your character ")"');
//         break;
//     case 1:
//         console.log('your character "!"');
//         break;
//     case 2:
//         console.log('your character "@"');
//         break;
//     case 3:
//         console.log('your character "#"');
//         break;
//     case 4:
//         console.log('your character "$"');
//         break;
//     case 5:
//         console.log('your character "%"');
//         break;
//     case 6:
//         console.log('your character "^"');
//         break;
//     case 7:
//         console.log('your character "&"');
//         break;
//     case 8:
//         console.log('your character "*"');
//         break;
//     case 9:
//         console.log('your character "("');
//         break;
//     default:
//         console.log('Wrong number');
// }


//Підрахуй суму всіх чисел в заданому користувачем діапазоні.

// let userFirstNumber = +prompt('Enter the first number:');
// let userSecondNumber = +prompt('Enter the second number:');
// let sumUserNumbers = userFirstNumber + userSecondNumber;
//
// while (userFirstNumber < userSecondNumber) {
//     ++userFirstNumber;
//
//     if (userFirstNumber < userSecondNumber) {
//         sumUserNumbers += userFirstNumber;
//     }
// }
//
// console.log(`The sum of the numbers in your range = ${sumUserNumbers}`);


//Запитай у користувача 2 числа і знайди найбільший спільний дільник.

// let firstUserNumber = +prompt('Enter the first number:');
// let secondUserNumber = +prompt('Enter the second number:');
// let divisor;
//
// for (let i = 1; i < firstUserNumber && i < secondUserNumber; ++i) {
//     if (firstUserNumber % i === 0 && secondUserNumber % i === 0) {
//         divisor = i;
//     }
// }
//
// console.log(divisor);


//Запитай у користувача число і виведи всі дільники цього числа.

// let numberUser = +prompt('Enter the number:');
//
// for (let i = 1; i <= numberUser; ++i) {
//     if (numberUser % i === 0) {
//         console.log(i)
//     }
// }