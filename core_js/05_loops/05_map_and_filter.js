const codeing = ["JavaScript", "Python", "Java", "C++"];

// const values = codeing.forEach((item) => {
//   console.log(item);
//   return item; // This will not work because forEach() always returns undefined
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNums = myNums.filter((num) => num > 5);
// console.log(newNums);

// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 5) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let values = books.filter((item) => item.genre == "History");
values = books.filter(
  (item) => item.genre == "History" && item.edition >= 2000
);
// console.log(values);

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNumers.map((num) => {
  return num * 2;
});
// console.log(newNums);

// chaining
const newValues = myNumers
  .map((num) => num * 2)
  .map((num) => num + 1)
  .filter((num) => num > 10);

console.log(newValues);
