const codeing = ["JavaScript", "Python", "Java", "C++", "Ruby", "PHP", "Swift"];

// codeing.forEach((language, index) => {
//   console.log(`Index is ${index} and language is ${language}`);
// });

function printme(item) {
  console.log(item);
}

// codeing.forEach(printme);

// codeing.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCodeing = [
  { language: "JavaScript", type: "interpreted", year: 1995 },
  { language: "Python", type: "interpreted", year: 1991 },
  { language: "Java", type: "compiled", year: 1995 },
  { language: "C++", type: "compiled", year: 1985 },
  { language: "Ruby", type: "interpreted", year: 1995 },
  { language: "PHP", type: "interpreted", year: 1995 },
  { language: "Swift", type: "compiled", year: 2014 },
];

myCodeing.forEach((item) => {
  console.log(item.language, item.type, item.year);
});
