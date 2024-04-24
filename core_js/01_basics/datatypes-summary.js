//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100; // Number
const scoreValue = 100.3; // Number
const isLoggedIn = false; // Boolean
const outsideTemp = null; // null
let userEmail; // undefined
const id = Symbol("123"); // Symbol
const anotherId = Symbol("123"); // Symbol

// console.log("id === anotherId :", id === anotherId);

const bigNumber = 3456543576654356754n; // BigInt

/* Reference (Non primitive) */

// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"];

let myObj = { name: "Gaurav", age: 22 };

const myFunction = function () {
  console.log("Hello world");
};

console.log("typeof score :", typeof score);
console.log("typeof scoreValue :", typeof scoreValue);
console.log("typeof isLoggedIn :", typeof isLoggedIn);
console.log("typeof outsideTemp :", typeof outsideTemp);
console.log("typeof userEmail :", typeof userEmail);
console.log("typeof id :", typeof id);
console.log("typeof anotherId :", typeof anotherId);
console.log("typeof bigNumber :", typeof bigNumber);
console.log("typeof heros :", typeof heros);
console.log("typeof myObj :", typeof myObj);
console.log("typeof myFunction :", typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3
