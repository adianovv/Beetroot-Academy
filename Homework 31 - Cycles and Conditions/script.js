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


// task normal

//Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

// let userNumber = +prompt('Введіть п’ятирозрядне число:');
// let userNumberReverse = 0;
//
// while (userNumber > userNumberReverse) {
//     console.log(userNumber, userNumberReverse);
//     userNumberReverse *= 10;
//     userNumberReverse += userNumber % 10;
//     userNumber = Math.trunc(userNumber / 10);
// }
//
// console.log(userNumber, userNumberReverse);
//
// if (userNumber === userNumberReverse || userNumber === Math.trunc(userNumberReverse/10)) {
//     console.log('Palindrome');
// } else {
//     console.log('Not a Palindrome');
// }


// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

// let userSum = +prompt('enter purchase amount:');
// let userDiscount = 0;
//
// if (userSum >= 200 && userSum <= 299) {
//     userDiscount = userSum * 3 / 100;
// } else if (userSum >= 300 && userSum <= 499) {
//     userDiscount = userSum * 5 / 100;
// } else if (userSum >= 500) {
//     userDiscount = userSum * 7 / 100;
// }
// console.log(`Your discount is ${userDiscount}$`);


//Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран.

// let userNumbers;
// let positiveNumbers = 0;
// let negativeNumbers = 0;
// let zerosNumbers = 0;
// let evenNumbers = 0;
// let oddNumbers = 0;
//
// for (let i = 0; i <= 9; i++) {
//     userNumbers = +prompt('Введите число:');
//     console.log('userNumbers', userNumbers);
//     if (userNumbers < 0) {
//         negativeNumbers++;
//     }
//     if (userNumbers > 0) {
//         positiveNumbers++;
//     }
//     if (userNumbers % 2 === 0) {
//         evenNumbers++;
//     }
//     if (userNumbers % 2 !== 0) {
//         oddNumbers++;
//     }
//     if (userNumbers === 0) {
//         zerosNumbers++;
//     }
// }
//
// console.log('positiveNumbers', positiveNumbers);
// console.log('negativeNumbers', negativeNumbers);
// console.log('zerosNumbers', zerosNumbers);
// console.log('evenNumbers', evenNumbers);
// console.log('oddNumbers', oddNumbers);


//Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

// let dayOfTheWeek = confirm('Понеділок. Хочеш побачити наступний день?');
//
// if (dayOfTheWeek === true) {
//     dayOfTheWeek = confirm('Вівторок. Хочеш побачити наступний день?');
//
//     if (dayOfTheWeek === true) {
//         dayOfTheWeek = confirm('Середа. Хочеш побачити наступний день?');
//
//         if (dayOfTheWeek === true) {
//             dayOfTheWeek = confirm('Четвер. Хочеш побачити наступний день?');
//
//             if (dayOfTheWeek === true) {
//                 dayOfTheWeek = confirm("П'ятниця. Хочеш побачити наступний день?");
//
//                 if (dayOfTheWeek === true) {
//                     dayOfTheWeek = confirm("Субота. Хочеш побачити наступний день?");
//
//                     if (dayOfTheWeek === true) {
//                         dayOfTheWeek = confirm("Неділя. Хочеш побачити наступний день?");
//                     }
//                 }
//             }
//         }
//     }
// }

