// Immediately Invoked Function Expressions (IIFE)

(function one() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("gaurav");
