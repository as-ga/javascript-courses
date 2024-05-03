const user = {
  username: "Gaurav",
  price: 999,
  welcomeMessage: function () {
    console.log(`Welcome ${this.username}`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "Ashutosh";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "Gaurav";
//   console.log("username:", this.username);
//   //   console.log("this:", this);
// }
// chai();
// const chai = function () {
//   let username = "Gaurav";
//   console.log("username:", this.username);
//     console.log("this:", this);
// };

// Arrow functions

const chai = () => {
  let username = "Gaurav";
  console.log("username:", this.username);
  console.log("this:", this);
};
// chai();

const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};
// console.log(addTwoNumbers(2, 3));

// implicit return

// const addTwoNumbers = (num1, num2) => num1 + num2;
const addNumbers = (num1, num2) => ({ username: "Gaurav" });
// console.log(addNumbers(2, 3));
