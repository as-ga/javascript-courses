let myDate = new Date();
// console.log("Date:", myDate);
// console.log("Date.toString :", myDate.toString());
// console.log("Date.toDateString :", myDate.toDateString());
// console.log("Date.toLocaleString :", myDate.toLocaleString());
// console.log("Date.toTimeString :", myDate.toTimeString());
// console.log("Date.toUTCString :", myDate.toUTCString());
// console.log("Date.toJSON :", myDate.toJSON());
// console.log("typeof Date :", typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log("myTimeStamp:", myTimeStamp);
// console.log("myCreatedDate.getTime():", myCreatedDate.getTime());
// console.log("Math.floor(Date.now()/1000):", Math.floor(Date.now() / 1000));

let newDate = new Date();

// console.log("newDate.getFullYear():", newDate.getFullYear());
// console.log("newDate.getMonth():", newDate.getMonth());
// console.log("newDate.getDate():", newDate.getDate());

// console.log(
//   `Today is ${newDate.getDate()}/${
//     newDate.getMonth() + 1
//   }/${newDate.getFullYear()}`
// );

const days = newDate.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "Asia/Kolkata",
});
console.log("days:", days);
