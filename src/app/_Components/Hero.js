import React from "react";
import MainForm from "./MainForm";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="h-full w-full">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-0 max-w-[85%] mx-auto mt-16 mb-40">
        <MainForm />
        <HeroText />
      </div>
    </div>
  );
};

export default Hero;
