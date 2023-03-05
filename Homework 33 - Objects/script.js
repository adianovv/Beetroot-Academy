"use strict"

//minimum

// let userDistance;
// let timeDistance = 0;
// let amountOfFuel;
//
// let carInfo = {
//     manufacturer: 'Toyota',
//     model: 'Camry',
//     yearOfIssue: 2018,
//     averageSpeed: 100,
//     tankCapacity: 40,
//     averagePerHundred: 10,
//     driver: null
// }
//
// addDriverName();
// carInfoForDisplay(carInfo);
// driverNameCheck();
// testFunction();
// console.log(`Час у дорозі: ${timeDistance} годин`);
// console.log(`Кількість витраченого палива: ${amountOfFuel} літрів`);
//
//
// function carInfoForDisplay() {
//     console.log(carInfo);
// }
//
// function addDriverName() {
//     carInfo.driver = prompt("Введіть ім'я водія:");
// }
//
// function driverNameCheck() {
//     let driverNameCheck = prompt("Введіть ім'я водія, якого хочете знайти:");
//     if (driverNameCheck === carInfo.driver) {
//         console.log(`Водій ${driverNameCheck} існує у списку`);
//     } else {
//         console.log(`Водій ${driverNameCheck} відсутній`);
//     }
// }
//
// function testFunction() {
//     userDistance = +prompt('Введіть відстань подорожі:');
//     timeDistance = userDistance / carInfo.averageSpeed;
//     let pause = 0;
//     for (let i = 1; i < timeDistance; i++) {
//         if (i % 4 === 0) {
//             pause++;
//         }
//     }
//     timeDistance = pause + timeDistance;
//     amountOfFuel = userDistance / carInfo.averagePerHundred;
// }


// normal

const time = new Date().toLocaleTimeString();

let timeForNewHours;
let timeForNewMinutes;
let timeForNewSeconds;


console.log('timeObject', time);

getTimeWithChangedSeconds();
getTimeWithChangedMinutes();
getTimeWithChangedHours();

console.log('timeForNewSeconds', timeForNewSeconds);
console.log('timeForNewMinutes', timeForNewMinutes);
console.log('timeForNewHours', timeForNewHours);


function getTimeWithChangedSeconds() {
    let userSeconds = +prompt(`Введіть кількість секунд`);
    timeForNewSeconds = new Date(Date.now() + (userSeconds * 1000)).toLocaleTimeString();
}

function getTimeWithChangedMinutes() {
    let userMinutes = +prompt(`Введіть кількість секунд`);
    timeForNewMinutes = new Date(Date.now() + (userMinutes * 1000) * 60)
}

function getTimeWithChangedHours() {
    let userHours = +prompt(`Введіть кількість секунд`);
    timeForNewHours = new Date(Date.now() + (userHours * 1000) * 3600);
}












