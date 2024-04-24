// Stack (Primitive), Heep (Non primitive)

let name = "Gaurav";
let anotherName = name;
anotherName = "Ashutsosh";

console.log("name :", name);
console.log("anotherName :", anotherName);

let userOne = {
  email: "gaurav@mail.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "ashu@mail.com";

console.log("userOne :", userOne);
console.log("userTwo :", userTwo);
