import React from "react";
import MainForm from "./MainForm";
import Slider from "./Slider"

const Hero = () => {
  return (
    <div className= "h-screen w-full">
      <div className="w-full h-[80%] grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-0 max-w-[80%] mx-auto mt-6">
        <MainForm />
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
