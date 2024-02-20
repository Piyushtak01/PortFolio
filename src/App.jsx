import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <div id="container">
        <Hero />
      </div>
    </>
  );
}

export default App;
