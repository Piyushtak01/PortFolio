import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero-container" className=" flex items-center relative ">
      <div id="hero-content" className="flex-1 ">
        <h2 className="text-[3.8rem] font-semibold leading-[5rem] mb-4 font-Gilroy">
          Hi I'm Piyush
        </h2>
        <p className="w-[80%] text-[1rem] font-normal leading-8  font-Gilroy ">
          Passionate Mobile Developer | Transforms Ideas into reality through
          Cross-Platform Tachnology
        </p>
      </div>
      <div
        id="hero-img"
        className="flex-1 flex flex-col items-center gap-8 mt-20 "
      >
        <div>
          <div id="tech-icon" >
            <img src="./src/images/react.png" alt="" />
          </div>
          <img  src="./src/images/image.png" alt="" />
        </div>
        <div>
          <div id="tech-icon">
            <img src="./src/images/html.png" alt="" />
          </div>
          <div id="tech-icon">
            <img src="./src/images/css.png" alt="" />
          </div>
          <div id="tech-icon">
            <img src="./src/images/js.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
