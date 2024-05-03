function sayMyName() {
  console.log("G");
  console.log("A");
  console.log("U");
  console.log("R");
  console.log("A");
  console.log("V");
}
// sayMyName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
// console.log(addTwoNumbers(5, 5));
const result = addTwoNumbers(5, 5);

// console.log("Result is:", result);

function loginUserMessage(username = "ashu") {
  if (username === undefined) {
    console.log("Please provide a username");
    return;
  }
  return `Welcome ${username}`;
}

const message = loginUserMessage("Gaurav");
// console.log(message);

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "ashutosh",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
// handleObject({ username: "gaurav", price: 399 });

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));
