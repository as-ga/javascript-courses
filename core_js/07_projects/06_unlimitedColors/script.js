const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  //   console.log(color);
  return color;
};
let interval;
const startChangingColor = function () {
  //   document.body.style.backgroundColor = randomColor();
  //   interval = setInterval(() => {
  //     document.body.style.backgroundColor = randomColor();
  //   }, 1000);

  if (!interval) {
    interval = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(interval);
  interval = null;
  //   document.body.style.backgroundColor = "";
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
