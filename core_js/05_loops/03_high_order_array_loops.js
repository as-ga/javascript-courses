// for of

// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//   console.log(num);
// }

// const greeting = "Hello World!";
// for (const char of greeting) {
//   console.log(`Character is ${char}`);
// }

// Maps

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("IN", "Indian"); // Overwrites the value

// console.log(map);

// for (const [key, value] of map) {
//   //   console.log(key);
//   console.log(key, "-", value);
// }

// for (const key in map) {
//   console.log(key); // don't run because map is not iterable
// }

const myObj = {
  game1: "Cricket",
  game2: "Football",
  game3: "Tennis",
};

// for (const [key, value] of myObj) {
//   console.log(key, "-", value); // Error because myObj is not iterable
// }

const myObject = {
  js: "JavaScript",
  py: "Python",
  rb: "Ruby",
  swift: "Swift by Apple",
};

// for (const key in myObject) {
//   console.log(`${key} shortcut is ${myObject[key]}`);
// }

const programming = ["JavaScript", "Python", "Ruby", "Swift"];

// for (const index in programming) {
//   console.log(`Index is ${index} and value is ${programming[index]}`);
// }
