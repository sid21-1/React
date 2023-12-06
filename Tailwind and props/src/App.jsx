import "./App.css";
import { Card } from "./components/Card";

function App() {
  let obj = {
    username: "siddhanth gupta",
    age: 21,
  };
  let arr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4  rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="happy birthday" btnText ="click me" />
      <Card username="bye bye"  />
    </>
  );
}

export default App;
