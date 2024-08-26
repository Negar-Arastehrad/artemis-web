"use client";
import React, { useState } from "react";
import logoImg1 from "../../../public/Images/logo1.png";
import logoImg2 from "../../../public/Images/blue-Logo.png";
import curvedLogo from "../../../public/Images/curvedLogo.png";
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
          <div className="w-28 mb-2 hidden md:block ml-[2.4rem] z-50">
            <Link href="/">
              <Image src={logoImg2} alt="Artemist Logo" quality={100} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center justify-center w-full text-blue text-center rounded-full font-bold text-lg">
            <li className="border-r-2 border-gray pr-2 lg:pr-8">
              <Link
                href="/"
                className={`nav-li ${
                  pathname === "/" ? "border-b-2 border-blue" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="border-r-2 border-gray px-2 lg:px-8">
              <Link
                href="/about"
                className={`nav-li ${
                  pathname === "/about" ? "border-b-2 border-blue" : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li className="border-r-2 border-gray px-2 lg:px-8">
              <Link
                href="/automation"
                className={`nav-li ${
                  pathname === "/automation" ? "border-b-2 border-blue" : ""
                }`}
              >
                Office Automation
              </Link>
            </li>
            <li className="pl-2 lg:pl-8">
              <Link
                href="/guidance"
                className={`nav-li ${
                  pathname === "/guidance" ? "border-b-2 border-blue" : ""
                }`}
              >
                Artemis Guides System
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Features */}
        <div className="flex justify-between items-center">
          {/* Hamburger */}
          <div
            onClick={handleNav}
            className="md:hidden text-blue hover:text-white border-2 border-blue hover:bg-blue ml-1 rounded-full w-[3.1rem] h-[3.1rem] flex justify-center items-center cursor-pointer z-50 transition duration-300"
          >
            {nav ? <IoClose size={30} /> : <HiOutlineMenuAlt1 size={30} />}
          </div>

          {/* Mobile Name logo */}
          <div className="w-24 mb-2 block md:hidden z-50">
            <Link href="/">
              <Image src={logoImg2} alt="Artemist Logo" quality={100} />
            </Link>
          </div>

          {/* Mobile Round logo */}
          <div className="w-14 m-1 block md:hidden z-50">
            <Link href="/">
              <Image src={logoImg1} alt="Artemist Logo" quality={100} />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <ul
          className={`${
            nav ? "block" : "hidden"
          } absolute top-[50%] left-0 w-full bg-white rounded-b-3xl text-blue font-bold py-4 z-10 text-lg lg:hidden`}
        >
          <li
            onClick={closeNav}
            className="border-b-2 border-gray pb-5 pt-8 w-[90%] m-auto"
          >
            <Link
              href="/"
              className={`nav-li ${
                pathname === "/" ? "border-b-2 border-blue" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li
            onClick={closeNav}
            className="border-b-2 border-gray py-5 w-[90%] m-auto"
          >
            <Link
              href="/about"
              className={`nav-li ${
                pathname === "/about" ? "border-b-2 border-blue" : ""
              }`}
            >
              About Us
            </Link>
          </li>
          <li
            onClick={closeNav}
            className="border-b-2 border-gray py-5 w-[90%] m-auto"
          >
            <Link
              href="/automation"
              className={`nav-li ${
                pathname === "/automation" ? "border-b-2 border-blue" : ""
              }`}
            >
              Office Automation
            </Link>
          </li>
          <li onClick={closeNav} className="py-5 w-[90%] m-auto">
            <Link
              href="/guidance"
              className={`nav-li ${
                pathname === "/guidance" ? "border-b-2 border-blue" : ""
              }`}
            >
              Artemis Guides System
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
