// const myArray = [];
//     % debugPrint(myArray);

// continious, Holey

// SMI (Small Integer) Array
// Pack elements in 31 bits
// Double (float,string, function) Array

const arrTwo = [1, 2, 3, 4, 5];
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0);
// PACKED_DOUBLE_ELEMENTS

arrTwo.push("8");
// PACKED_ELEMENTS

arrTwo[7] = 9;
// PACKED_ELEMENTS_HOLEY

// console.log(arrTwo)
console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[7]);

// bound check
// hasOwnProperty(arrTwo, 7)
// hasOwnProperty(arrTwo.prototype, 8)
// hasOwnProperty(Object.prototype, 8)

// holes are very expensive in js

const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[3]);

// SMI > Double > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3);
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = "1"; // HOLEY_ELEMENTS
arrFour[1] = "2"; // HOLEY_ELEMENTS
arrFour[2] = "3"; // HOLEY_ELEMENTS

const arrFive = [];
arrFive.push("1"); // PACKED_ELEMENTS
arrFive.push("2"); // PACKED_ELEMENTS
arrFive.push("3"); // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5];
arrSix.push(Infinity); // PACKED_DOUBLE_ELEMENTS
