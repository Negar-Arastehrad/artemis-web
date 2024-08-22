import React from "react";
import logoImage1 from "../../../public/Images/logo1.png";
import Image from "next/image";
import Link from "next/link";
import { Place, PhoneEnabled, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      {/* Desktop Footer */}
      <div className="relative w-full lg:bg-glass bg-blue mt-28">
        {/* Curved SVG above the footer */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute xl:bottom-[63%] lg:bottom-[75%] md:bottom-[90%] bottom-[100%] w-full z-50"
        >
          <path
            fill="#004080"
            fillOpacity="1"
            d="M0,200 C400,70 980,327 1440,160 V320 H0 Z"
          ></path>
        </svg>

        {/* Top Content */}
        <div className="relative max-w-[75%] xl:max-w-[75%] md:max-w-[80%] m-auto grid grid-cols-1 gap-12 md:gap-0 md:grid-cols-3 w-full py-5 z-50">
          <ul>
            <h6 className="text-white font-semibold text-lg mb-4 text-center pb-4 m-auto max-w-[40%] border-b-2 border-gray">
              تماس با ما
            </h6>
            <li className="flex justify-center items-center gap-3 mb-4 mt-4">
              <PhoneEnabled className="lg:text-blue text-white xl:text-white" />
              <p className="text-gray lg:text-blue xl:text xl:text-gray">
                02191008802
              </p>
            </li>
            <li className="flex justify-center items-center gap-3 mb-4">
              <Email className="lg:text-blue text-white" />
              <p className="lg:text-blue text-gray">info@artemist.com</p>
            </li>
            <li className="flex justify-center items-center mt-4 mx-5">
              <Place className="lg:text-blue text-white" />
              <p className="lg:text-blue text-gray text-center">
                کرج, چهارراه هفت تیر, ابتدای بلوار بلال, بن بست نادری, ساختمان
                کریستال, واحد 2, طبقه دوم
              </p>
            </li>
          </ul>

          <ul className="text-center md:mr-20">
            <h6 className="text-white font-semibold text-lg mb-4 pb-4 text-center m-auto max-w-[60%] border-b-2 border-gray">
              لینک های مهم
            </h6>
            <li className="mb-4 lg:text-blue text-gray xl:text-gray mt-4">
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li className="mb-4 lg:text-blue text-gray">
              <Link href="/about">درباره ما</Link>
            </li>
            <li className="mb-4 lg:text-blue text-gray">
              <Link href="/automation">اتوماسیون اداری</Link>
            </li>
            <li className="mt-4 lg:text-blue text-gray">
              <Link href="/guidance">سامانه راهنمایان آرتمیس</Link>
            </li>
          </ul>

          <div className="flex flex-col items-center justify-center lg:mb-40 xl:mb-8">
            <Image
              src={logoImage1}
              alt="logoImage1"
              className="w-24 xl:mr-20"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 w-full bg-white">
          <p className="text-blue text-center py-3">
            کلیه حقوق این وب‌سایت متعلق به شرکت آرتمیس است. © 2024
          </p>
        </div>
      </div>

      {/* Mobile Footer */}
    </>
  );
};

export default Footer;
