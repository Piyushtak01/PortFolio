import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import { Skills } from "./Component/Skills/Skills";
import { Work } from "./Component/Works/Work";
import ContactMe from "./Component/ContactMe/Contactme";
import Footer from "./Component/Footer/Footer";



function App() {
  return (
    <>
      <Navbar />
      <div id="container">
        <Hero />
      <Skills/>
      <Work/>
      <ContactMe />
      </div>
      <Footer/>
    </>
  );
}

export default App;
