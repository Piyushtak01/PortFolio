import React, { useState } from "react";
import "./navbar.css";
import "material-symbols";
import MobileNav from "./MobileNav/MobileNav";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav
        id="navWrap"
         className="py-2 px-0 sticky top-0 z-30 backdrop-blur-2xl"
      >
        <div
          id="nav-content"
          className="max-w-[1300px] flex items-center  justify-between py-4 px-0 mx-auto my-0"
        >
          <img
            id="logo"
            className="w-[12rem] h-auto"
            src="./Assests/images/logo.png"
            alt=""
          />
          <ul id="nav-content-ul" className="flex items-center gap-2 list-none">
            <li>
              <a id="menu-item" href="#hero-container" >Home</a>
            </li>
            <li>
              <a id="menu-item" href='#skills-container'>Skills</a>
            </li>
            <li>
              <a id="menu-item" href="#Project-container">Projects</a>
            </li>
            <li>
              <a id="menu-item" href="#contact-container">Contact Me</a>
            </li>
            <button
              className="text-[0.9rem] font-medium flex items-center justify-center py-[0.6rem] px-8 border-none outline-none rounded cursor-pointer transition-all duration-0.3 ease-in bg-gradient-to-r from-purple-500 to-violet-600 hover:text-violet-400 hover:outline-violet-400 hover:from-black hover:to-black"
              id="contact-btn"
              onClick={() => {}}
            >
              Hire Me
            </button>
          </ul>
          <button id="menu-btn" onClick={toggleMenu}> 
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem "}}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
