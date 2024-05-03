const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[1]);

// Array methods

// myArr.push(6); // add at end
// myArr.pop(); // remove from end
// myArr.unshift(9); // add at start
// myArr.shift(); // remove from start
// myArr.includes(9); // check if element is present
// myArr.indexOf(3); // get index of element

// console.log("myArr.join() :", myArr.join()); // convert to string

// console.log("myArr :", myArr);
// console.log("myHeors :", myHeors);
// console.log("myArr2 :", myArr2);

// slice, splice

console.log("myArr A:", myArr);
const myn1 = myArr.slice(1, 3);
console.log("myn1 slice :", myn1);

console.log("myArr B:", myArr);
const myn2 = myArr.splice(1, 3);

console.log("myArr C:", myArr);
console.log("myn2 splice :", myn2);
