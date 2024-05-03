// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Gaurav";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "gaurav@gmail.com",
  fullname: { userfullname: { firstname: "Ashutosh", lastname: "Gaurav" } },
};

// console.log(regularUser.fullname?.userfullname.firstname);
// console.log(regularUser);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3a = { obj1, obj2 };
// console.log(obj3a);
const obj3b = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3b);

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "g@gmail.com",
  },
  {
    id: 1,
    email: "as@gmail.com",
  },
  {
    id: 1,
    email: "ag@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log("Object.keys(tinderUser) :", Object.keys(tinderUser));
// console.log("Object.values(tinderUser) :", Object.values(tinderUser));
// console.log("Object.entries(tinderUser) :", Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// Destructuring

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

// {
//   "name": "hitesh",
//   "coursename": "js in hindi",
//   "price": "free",
// };
// [({}, {}, {})];
