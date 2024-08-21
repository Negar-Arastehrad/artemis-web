"use client";
import React, { useState, useEffect } from "react";
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
  RadioButtonUnchecked,
  ArrowBackIosNew,
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
  const slideInterval = 3000; 

  useEffect(() => {
    const intervalId = setInterval(nextSlide, slideInterval);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? SliderData.length - 1 : currentSlide - 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === SliderData.length - 1 ? 0 : currentSlide + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div className="w-full h-full flex justify-center items-center max-w-[95%] group">
      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === currentSlide ? "relative w-full" : "relative hidden"
            }
          >
            {/* Forward Arrow */}
            <span
              className="hidden group-hover:block absolute right-[2.2%] top-[49%] -translate-y-1/2 select-none cursor-pointer text-blue bg-[#0040801e] rounded-full p-[6px]"
              onClick={nextSlide}
            >
              <ArrowForwardIos style={{ fontSize: "20px" }} />
            </span>

            {/* Image */}
            {index === currentSlide && (
              <>
                <div className="rounded-xl overflow-hidden">
                  <Image src={slide.image} alt="/" className="w-full h-full" />
                </div>
              </>
            )}

            {/* Back Arrow */}
            <span
              className="hidden group-hover:block absolute left-[2.2%] top-[50%] -translate-y-1/2 select-none cursor-pointer text-blue bg-[#0040801e] rounded-full p-[6px]"
              onClick={prevSlide}
            >
              <ArrowBackIosNew style={{ fontSize: "20px" }} />
            </span>

            {/* Dots */}
            <div className="flex justify-center items-center gap-2 mt-2">
              {SliderData.map((slide, index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={
                    currentSlide === index
                      ? "cursor-pointer text-blue"
                      : "cursor-pointer text-red-500"
                  }
                >
                  {currentSlide === index ? (
                    <FiberManualRecord style={{ fontSize: "20px" }} />
                  ) : (
                    <RadioButtonUnchecked style={{ fontSize: "15px" }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;