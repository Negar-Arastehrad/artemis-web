import React from "react";
import MainForm from "./MainForm";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="h-full w-full">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-0 max-w-[85%] mx-auto mt-16 mb-20">
        <MainForm />
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
