"use strict"

//task minimum
//Напиши всі можливі варіанти створення функцій.

//function declaration
// function functionExample(){
//
// }
//
// //function expression
//
// const functionExample1 = function () {
//
// }

//Створи функцію, яка буде виводити кількість переданих їй аргументів.


// Напиши функцію, яка приймає 2 числа і повертає:
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

// let firstNumber = +prompt('enter first number:');
// let secondNumber = +prompt('enter second number:');
//
// alert(getSmallerNumber(firstNumber, secondNumber));
//
// function getSmallerNumber(first, second) {
//     if (first < second) {
//         return -1;
//     } else if (first > second) {
//         return 1;
//     } else {
//         return 0
//     }
// }


//Напиши функцію, яка обчислює факторіал переданого їй числа.


// let userNumber = +prompt('enter your number:');
// let userNumberFactorial = factorial(userNumber);
// console.log('userNumberFactorial', userNumberFactorial);
//
// function factorial(x) {
//     return (x !== 1) ? x * factorial(x - 1) : 1;
// }


//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

// let firstNumber;
// let secondNumber;
// let thirdNumber;
// let comboNumber;
//
// enterNumbers();
// comboNumber = unionOfNumbers(firstNumber, secondNumber, thirdNumber);
// console.log('comboNumber', comboNumber);
// function enterNumbers() {
//     firstNumber = +prompt('enter first number');
//     secondNumber = +prompt('enter second number');
//     thirdNumber = +prompt('enter third number');
// }
// function unionOfNumbers(a, b, c) {
//     if (isNaN(a) || isNaN(b) || isNaN(c)) {
//         alert('Enter numbers');
//         enterNumbers();
//         unionOfNumbers(firstNumber, secondNumber, thirdNumber)
//     } else {
//         return `${a}${b}${c}`;
//     }
// }


//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

// let length;
// let width;
// let figureArea;
//
// getUser();
// areaOfARectangle(length, width);
// figureArea= areaOfARectangle(length, width);
// console.log('figureArea', figureArea);
// function getUser() {
//     length = +prompt('Enter the length of the rectangle:');
//     width = +prompt('Enter the width of the rectangle:');
// }
// function areaOfARectangle(recLength, recWidth) {
//     if (isNaN(recLength) || isNaN(recWidth)) {
//         alert('please, enter the number')
//         getUser();
//         areaOfARectangle(length, width);
//     }
//      if (recWidth === false || recWidth === 0) {
//         return recLength * recLength;
//     } else {
//         return recLength * recWidth;
//     }
// }


//Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

let userNumber = +prompt('Enter the number:');

perfectNumber(userNumber);

function perfectNumber(number) {
    let sum = 0;
    let remainder;
    for (let i = 0; i < number; i++) {
        remainder = number % i;
        if (remainder === 0) {
            sum += i;
        }
    }
    if (number === sum) {
        console.log(number + '- совершенное число');
    } else {
        console.log(number + '- не совершенное число');
    }
}

let userFirstNumber;
let userSecondNumber;
let userPerfectNumbers;

getUserNum();
perfectNumberRange(userFirstNumber, userSecondNumber);
userPerfectNumbers = perfectNumberRange(userFirstNumber, userSecondNumber);


function getUserNum() {
    userFirstNumber = +prompt('Enter first number:');
    userSecondNumber = +prompt('Enter second number:');
}


function perfectNumberRange(firstNum, secondNum) {
    if (firstNum <= secondNum && isNaN(firstNum) && isNaN(secondNum)) {
        alert('invalid range');
        getUserNum();
        perfectNumberRange(userFirstNumber, userSecondNumber);
    } else {
        for (let i = firstNum; i <= secondNum; i++) {
            perfectNumber(i);

        }
    }
}




