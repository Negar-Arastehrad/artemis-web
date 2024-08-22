import React from "react";
import logoImage1 from "../../../public/Images/logo1.png";
import logoImage2 from "../../../public/Images/Logo2.png";
import Image from "next/image";
import Link from "next/link";
import { Place, PhoneEnabled, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="relative w-full bg-glass mt-28">

      {/* Curved SVG above the footer */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-[60%] w-full z-50"
      >
        <path
          fill="#004080" 
          fillOpacity="1"
          d="M0,200 C400,70 980,327 1440,160 V320 H0 Z"  
        ></path>
      </svg>

      {/* Top Content */}
      <div className="relative max-w-[75%] m-auto grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-3 w-full py-5 z-50">
        <ul>
          <h6 className="text-white font-semibold text-lg mb-4 text-center pb-4 m-auto max-w-[40%] border-b-2 border-gray">
            تماس با ما
          </h6>
          <li className="flex justify-center items-center gap-3 mb-4 mt-6">
            <PhoneEnabled sx={{ color: "white" }} />
            <p className="text-gray">02191008802</p>
          </li>
          <li className="flex justify-center items-center gap-3 mb-4">
            <Email sx={{ color: "blue" }} />
            <p className="text-blue ">info@artemist.com</p>
          </li>
          <li className="flex justify-center items-center mt-4 mx-5">
            <Place sx={{ color: "blue" }} />
            <p className="text-blue text-center">
              کرج, چهارراه هفت تیر, ابتدای بلوار بلال, بن بست نادری, ساختمان
              کریستال, واحد 2, طبقه دوم
            </p>
          </li>
        </ul>

        <ul className="text-center">
          <h6 className="text-white font-semibold text-lg mb-4 pb-4 text-center m-auto max-w-[40%] border-b-2 border-gray">
            لینک های مهم
          </h6>
          <li className="mb-4 text-gray mt-6">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className="mb-4 text-blue">
            <Link href="/about">درباره ما</Link>
          </li>
          <li className="mb-4 text-blue">
            <Link href="/automation">اتوماسیون اداری</Link>
          </li>
          <li className="mt-4 text-blue">
            <Link href="/guidance">سامانه راهنمایان آرتمیس</Link>
          </li>
        </ul>

        <div className="flex flex-col items-center justify-center mb-8">
          <Image src={logoImage1} alt="logoImage1" className="w-24" />
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 w-full bg-white">
        <p className="text-blue text-center py-2">
          کلیه حقوق این وب‌سایت متعلق به شرکت آرتمیس است. © 2024
        </p>
      </div>

    </div>
  );
};

export default Footer;
