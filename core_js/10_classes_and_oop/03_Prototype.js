let myName = "gaurav     ";
let myChai = "chai     ";
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.gaurav = function () {
  console.log(`gaurav is present in all objects`);
};

Array.prototype.heyGaurav = function () {
  console.log(`Gaurav says hello`);
};

// heroPower.gaurav();
// myHeros.gaurav();
// myHeros.heyGaurav();
// heroPower.heyGaurav()

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"gaurav".trueLength();
"iceTea".trueLength();
