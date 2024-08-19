import React from "react";
import MainForm from "./mainForm";

const Hero = () => {
  return (
    <div className= "h-screen w-full">
      <div className="bg-purple-200 w-full h-full grid grid-cols-1 md:grid-cols-2  max-w-[90%] mx-auto">
        <MainForm />
        <div className="bg-blue">this is slider</div>
      </div>
    </div>
  );
};

export default Hero;
