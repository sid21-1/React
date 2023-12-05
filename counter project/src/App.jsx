import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  // let counter = 5;
  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    } else {
      console.log("you cannot add more values to it");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("you cannot have numbers in negative");
    }
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Coutner Value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Decrease value {counter}</button>
    </>
  );
}

export default App;
