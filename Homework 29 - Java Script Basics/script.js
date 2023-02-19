"use strict"
//task minimum

let userName;
let userSurname;
let currentUserName;
let currentUserSurname;

// let 1userName;
// let user-name;

/* camelCase,
   uppercase;
*/


//task normal

userName = prompt('What is your name?');
alert(`Hi, ${userName}`);

const currentYear = 2023;
let userYearOfBirth = +prompt('What is your date of birth?');
let userAge = currentYear - userYearOfBirth;
alert(`You are ${userAge} years old`);

let lengthOfSquare = +prompt('Enter the length of the side of the square');
let perimeter = lengthOfSquare *4;
alert(`The perimeter of the square is ${perimeter}`);


//task maximum

//task first - radius

const PI = 3.14;
let circleRadius = +prompt('Enter the radius of the circle:');
let circleArea = PI * (circleRadius)**2;
alert(circleArea);


//task second - speed

let distanceBetweenCities = +prompt('Enter in kilometers the distance between your cities:');
let roadTime = +prompt('How many hours do you want to get there?');
let recommendedSpeed = distanceBetweenCities / roadTime;
alert(`You need to move with speed ${recommendedSpeed} km/h`);


//task third - converter

const exchangeRates = 0.93;
let dollar = +prompt('How many dollars do you have in your pocket?');
let euro = dollar * exchangeRates;
alert(`Your ${dollar} dollars will turn into ${euro} euros. Do not do that!!`);




