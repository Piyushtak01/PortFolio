import React from "react";
import "./MobileNav.css";


const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div id="mobile-menu-container">
          <img id="logo" src="./Assests/images/logo.png" alt="" />
          <ul>
            <li>
              <a id="menu-item">Home</a>
            </li>

            <li>
              <a id="menu-item">Skills</a>
            </li>

            <li>
              <a id="menu-item">Projects</a>
            </li>

            <li>
              <a id="menu-item">Contact Me</a>
            </li>

            <button className="text-base font-medium flex items-center justify-center py-2 px-8 mx-8 border-none outline-none rounded cursor-pointer transition-all duration-0.3 ease-in bg-gradient-to-r from-purple-500 to-violet-600 hover:text-violet-400 hover:outline-violet-400 hover:from-black hover:to-black"
            id="contact-btn"
             onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
