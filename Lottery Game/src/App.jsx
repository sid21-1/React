import { useState } from "react";
import "./App.css";
import Lottery from "./Lottery";
import { TicketNum } from "./TicketNum";
import { Ticket } from "./Ticket";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Lottery n={3} winningSum={15}/>
      {/* <TicketNum num={5}/> */}
      {/* <Ticket ticket={[0, 1, 2]} /> */}
    </>
  );
}

export default App;
