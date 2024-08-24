"use client";
import React, { useState } from "react";
import logoImg1 from "../../../public/Images/blue-Logo.png";
import logoImg2 from "../../../public/Images/logo1.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname(); // for active link style

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const closeNav = () => {
    setNav(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      {/* Overlay */}
      {nav ? (
        <div
          className={`fixed inset-0 bg-black opacity-40 ${
            nav ? "block" : "hidden"
          } z-[900]`}
          onClick={closeNav}
        ></div>
      ) : (
        ""
      )}

      {/* Main Nav */}
      <div className="scroll-m-10 sticky top-0 left-0 right-0 bg-white shadow-custom-blue rounded-full max-w-[80%] sm:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] mx-auto mt-7 z-[1000]">
        <div className="relative flex items-center justify-between tracking-wider z-50">
          {/* Desktop Name logo */}
          <div className="w-28 mr-5 mb-2 hidden md:block">
            <Link href="/">
              <Image src={logoImg1} alt="Artemist Logo" quality={100} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center justify-center w-full text-blue font-semibold text-sm text-center rounded-full mr-4">
            <li className="border-l-2 border-gray px-8">
              <Link
                href="/"
                className={`nav-li ${
                  pathname === "/" ? "border-b-2 border-red" : ""
                }`}
              >
                صفحه اصلی
              </Link>
            </li>
            <li className="border-l-2 border-gray px-8">
              <Link
                href="/about"
                className={`nav-li ${
                  pathname === "/about" ? "border-b-2 border-red" : ""
                }`}
              >
                درباره ما
              </Link>
            </li>
            <li className="border-l-2 border-gray px-8">
              <Link
                href="/automation"
                className={`nav-li ${
                  pathname === "/automation" ? "border-b-2 border-red" : ""
                }`}
              >
                اتوماسیون اداری
              </Link>
            </li>
            <li className="px-8">
              <Link
                href="/guidance"
                className={`nav-li ${
                  pathname === "/guidance" ? "border-b-2 border-red" : ""
                }`}
              >
                سامانه راهنمایان آرتمیس
              </Link>
            </li>
          </ul>

          {/* Desktop Round logo */}
          <div className="w-16 m-2 hidden md:block">
            <Link href="/">
              <Image src={logoImg2} alt="Artemist Logo" quality={100} />
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center">
          {/* Mobile Round logo */}
          <div className="w-16 m-2 block md:hidden z-50">
            <Link href="/">
              <Image src={logoImg2} alt="Artemist Logo" quality={100} />
            </Link>
          </div>

          {/* Mobile Name logo */}
          <div className="w-28 mb-2 block md:hidden z-50">
            <Link href="/">
              <Image src={logoImg1} alt="Artemist Logo" quality={100} />
            </Link>
          </div>

          {/* Hamburger */}
          <div
            onClick={handleNav}
            className="md:hidden text-blue hover:text-white border-2 border-blue hover:bg-blue ml-2 rounded-full w-14 h-14 flex justify-center items-center cursor-pointer z-50 transition duration-300"
          >
            {nav ? <IoClose size={30} /> : <HiOutlineMenuAlt1 size={30} />}
          </div>
        </div>

        {/* Mobile Navigation */}
        <ul
          className={`${
            nav ? "block" : "hidden"
          } absolute top-[50%] left-0 w-full bg-white rounded-b-3xl text-blue font-semibold text-sm py-4 z-10 md:hidden`}
        >
          <li
            onClick={closeNav}
            className="border-b-2 border-gray pb-4 pt-8 w-[90%] m-auto"
          >
            <Link
              href="/"
              className={`nav-li ${
                pathname === "/" ? "border-b-2 border-blue" : ""
              }`}
            >
              صفحه اصلی
            </Link>
          </li>
          <li
            onClick={closeNav}
            className="border-b-2 border-gray py-4 w-[90%] m-auto"
          >
            <Link
              href="/about"
              className={`nav-li ${
                pathname === "/about" ? "border-b-2 border-blue" : ""
              }`}
            >
              درباره ما
            </Link>
          </li>
          <li
            onClick={closeNav}
            className="border-b-2 border-gray py-4 w-[90%] m-auto"
          >
            <Link
              href="/automation"
              className={`nav-li ${
                pathname === "/automation" ? "border-b-2 border-blue" : ""
              }`}
            >
              اتوماسیون اداری
            </Link>
          </li>
          <li onClick={closeNav} className="py-4 w-[90%] m-auto">
            <Link
              href="/guidance"
              className={`nav-li ${
                pathname === "/guidance" ? "border-b-2 border-blue" : ""
              }`}
            >
              سامانه راهنمایان آرتمیس
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
