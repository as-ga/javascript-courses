// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (i == 5) {
//     console.log("5 is the best number!");
//   }
//   console.log(element);
// }

// for (let i = 0; i <= 5; i++) {
//   console.log(`outer loop value : ${i}`);
//   for (let j = 0; j <= 5; j++) {
//     console.log(`outer loop value : ${i} and inner loop value : ${j}`);
//   }
// }

// brack and continue

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log("Detected 5, breaking the loop");
    break; // break the loop
  }
  console.log(`value of i is : ${i}`);
}

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log("Detected 5, skipping the loop");
    continue; // skip the loop
  }
  console.log(`value of i is : ${i}`);
}
