// practice task 1
const money = 1000;
const orangePrice = 500;
const applePrice = 200;
const totalPrice = orangePrice + applePrice;
// console.log("Total Cost", totalPrice);
const moneyReturn = money - totalPrice;
// console.log("money you will get", moneyReturn);

// practice task 2

const math = 75.25;
const biology = 65;
const chemistry = 80;
const physics = 35.45;
const bang = 99.5;

const totalMark = math + biology + chemistry + physics + bang;
// console.log("Total mark", totalMark);
const avgMark = totalMark / 5;
// console.log("Average Mark of 5 subject", avgMark);

console.log("print the result in 2 decimal places :", avgMark.toFixed(2));

// practice task 3
const reminder = 119 % 5;
// console.log(reminder);

const a = isNaN("11"); // not a number
const b = isNaN(2 - 10); // not a number

console.log(a, b);
