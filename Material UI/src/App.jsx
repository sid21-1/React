import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const handleClick = () => {
    console.log("button was clicked");
  };
  return (
    <>
      <h3>Material UI</h3>
      <Button
        variant="contained"
        onClick={handleClick}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button variant="contained" color="error" size="small">
        Click Me2!
      </Button>
    </>
  );
}

export default App;
