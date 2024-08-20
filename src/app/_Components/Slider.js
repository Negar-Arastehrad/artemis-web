"use client";
import React, { useState } from "react";
import hero1 from "/public/Images/sliders/antalya-egh.png";
import hero2 from "/public/Images/sliders/antalya-lux.png";
import hero3 from "/public/Images/sliders/antalya-pish.png";
import hero4 from "/public/Images/sliders/istanbul.png";
import hero5 from "/public/Images/sliders/mashhad.png";
import hero6 from "/public/Images/sliders/russia.png";
import hero7 from "/public/Images/sliders/shahr.png";
import hero8 from "/public/Images/sliders/sochi.png";
import hero9 from "/public/Images/sliders/tabriz.png";
import hero10 from "/public/Images/sliders/van-qatar.png";
import hero11 from "/public/Images/sliders/van.png";
import hero12 from "/public/Images/sliders/van2.png";
import Image from "next/image";
import {
  FiberManualRecord,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import "../../../public/Images/logo1.png";

const SliderData = [
  {
    image: hero1,
  },
  {
    image: hero2,
  },
  {
    image: hero3,
  },
  {
    image: hero4,
  },
  {
    image: hero5,
  },
  {
    image: hero6,
  },
  {
    image: hero7,
  },
  {
    image: hero8,
  },
  {
    image: hero9,
  },
  {
    image: hero10,
  },
  {
    image: hero11,
  },
  {
    image: hero12,
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === SliderData.length - 1 ? 0 : currentSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? SliderData.length - 1 : currentSlide - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === currentSlide ? "relative" : "relative hidden"
              }
            >
              <span
                className="absolute top-[45%] select-none cursor-pointer text-primary left-[40px]"
                onClick={prevSlide}
              >
                <ArrowBackIos />
              </span>

              {index === currentSlide && (
                <>
                  <div>
                    <Image src={SliderData.image} alt="/" className="w-[95%]" />
                  </div>
                </>
              )}

              <span
                className="absolute top-[45%] select-none cursor-pointer text-primary right-[80px]"
                onClick={nextSlide}
              >
                <ArrowForwardIos />
              </span>

              <div className="flex justify-center py-2 absolute bottom-0 left-[24%]">
                {SliderData.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={
                      currentSlide === slideIndex
                        ? "text-2xl cursor-pointer text-primary"
                        : "text-2xl cursor-pointer"
                    }
                  >
                    <FiberManualRecord />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
