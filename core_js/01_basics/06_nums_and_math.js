const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log("Math:", Math);
console.log("Math.abs(-4):", Math.abs(-4));
console.log("Math.round(4.6):", Math.round(4.6));
console.log("Math.ceil(4.2):", Math.ceil(4.2));
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.min(4, 3, 6, 8):", Math.min(4, 3, 6, 8));
console.log("Math.max(4, 3, 6, 8):", Math.max(4, 3, 6, 8));

// console.log("Math.random():", Math.random()); // 0 to 1 with decimal
// console.log("Math.random()*10:", Math.random() * 10); // 0 to 9 with decimal
// console.log("Math.floor(Math.random()*10):", Math.floor(Math.random() * 10)); // 0 to 9
// console.log(  "Math.floor(Math.random()*10) + 1 :",  Math.floor(Math.random() * 10) + 1); // 1 to 10 wtihout decimal

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10 to 20

// console.log("Math.PI:", Math.PI);
// console.log("Math.E:", Math.E);
// console.log("Math.sqrt(64):", Math.sqrt(64));
// console.log("Math.cbrt(64):", Math.cbrt(64));
// console.log("Math.pow(2, 3):", Math.pow(2, 3));
// console.log("Math.log(64):", Math.log(64));
// console.log("Math.log10(64):", Math.log10(64));
// console.log("Math.log2(64):", Math.log2(64));
// console.log("Math.sin(90):", Math.sin(90));
// console.log("Math.cos(90):", Math.cos(90));
// console.log("Math.tan(90):", Math.tan(90));
// console.log("Math.asin(1):", Math.asin(1));
// console.log("Math.acos(1):", Math.acos(1));
// console.log("Math.atan(1):", Math.atan(1));
// console.log("Math.atan2(1, 2):", Math.atan2(1, 2));
// console.log("Math.sinh(90):", Math.sinh(90));
// console.log("Math.cosh(90):", Math.cosh(90));
// console.log("Math.tanh(90):", Math.tanh(90));
// console.log("Math.asinh(90):", Math.asinh(90));
// console.log("Math.acosh(90):", Math.acosh(90));
// console.log("Math.atanh(0.5):", Math.atanh(0.5));
