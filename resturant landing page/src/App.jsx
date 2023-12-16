import React from "react";
import Header from "./components/Header";
import NavIcon from "./components/NavIcon";
import Home from "./components/Home";
import About from "./components/About";
import Receipe from "./components/Receipe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className=" bg-back">
        <Header />
        <NavIcon />
        <Home />
        <About />
        {/* <Receipe/>
    <Contact/>
    <Footer/> */}
      </div>
    </>
  );
};

export default App;
