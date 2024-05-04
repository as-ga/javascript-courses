const myNums = [1, 2, 3, 4];

// accumulator, current value

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc}, currval: ${currval}`);
//   return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

// console.log(myTotal);

const soppingCart = [
  { product: "Laptop", price: 100000 },
  { product: "Keyboard", price: 2500 },
  { product: "Mouse", price: 1000 },
  { product: "Monitor", price: 2500 },
  { product: "Headphones", price: 500 },
];

const priceToPay = soppingCart.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);

console.log(`Total price to pay: Rs. ${priceToPay.toLocaleString("en-IN")}`);
