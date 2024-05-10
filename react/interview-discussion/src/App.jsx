import { useState } from "react";

function App() {
  // Questoin 1
  /*
  const [value, setValue] = useState(1);
  //const [multipliedValue, setMultipliedValue] = useState(1)
  let multipliedValue = value * 5;

  const multiplybyfive = () => {
    //setMultipliedValue(value * 5)
    setValue(value + 1);
  };
  */

  // Questoin 2

  console.log("App rendered", Math.random());
  const [value, setValue] = useState({
    value: 0,
  });

  const clickMe = () => {
    console.log("logged");
    setValue({ value: 1 });
  };

  return (
    <main>
      {/* Questoin 1 */}
      {/* 
      <h1>Main value: {value} </h1>
      <button onClick={multiplybyfive}>Click to multiply by 5</button>
      <h2>Multiplied value: {multipliedValue} </h2> 
      */}

      {/*Question 2*/}
      <h1>Main value: {value.value} </h1>
      <button onClick={clickMe}>Click Me</button>
    </main>
  );
}

export default App;
