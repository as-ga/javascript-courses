import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  // let counter = 10;
  function addValue() {
    if (counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  }
  function removeValue() {
    // counter -= 1;
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
      setCounter((prevCounter) => prevCounter - 1);
      setCounter((prevCounter) => prevCounter - 1);
      setCounter((prevCounter) => prevCounter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur Gaurav</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
      <br />
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
