if (true) {
  let a = 40;
  const b = 60;
  var c = 50;

  //   console.log("inner:", a);
  //   console.log("inner:", b);
  //   console.log("inner:", c);
}

// console.log("outer:", a);
// console.log("outer:", b);
// console.log("outer:", c);

function one() {
  const username = "gaurav";

  function two() {
    const website = "gaurav.com";
    console.log(username);
  }
  //   console.log(website);
  two();
}

// one();

// interseting

console.log(addOne(8));
function addOne(num) {
  return num + 1;
}

// console.log(addTwo(6));
const addTwo = function (num) {
  return num + 2;
};
