import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <React.Fragment>
      <h1>Todo with Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </React.Fragment>
  );
}

export default App;
