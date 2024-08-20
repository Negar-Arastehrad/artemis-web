"use client";
import React, { useState } from "react";
import logoImg from "../../../public/Images/logo1.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname(); // for active link style

  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  return (
    <div className="relative bg-white shadow-custom-blue rounded-full max-w-[80%] sm:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] mx-auto mt-7 z-50">
      <div className="relative flex items-center justify-between tracking-wider z-50">
        {/* logo */}
        <div className="w-16 m-2">
          <Link href="/">
            <Image src={logoImg} alt="Artemist Logo" quality={100} />
          </Link>
        </div>

        {/* Hamburger */}
        <div
          onClick={handleNav}
          className="md:hidden text-blue hover:text-white border-2 border-blue hover:bg-blue ml-2 rounded-full w-14 h-14 flex justify-center items-center cursor-pointer z-50 transition duration-300"
        >
          {nav ? <IoClose size={30} /> : <HiOutlineMenuAlt1 size={30} />}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center w-full text-blue font-semibold text-sm text-center">
          <li className="border-l-2 border-gray px-4 md:px-6 lg:px-10">
            <Link
              href="/"
              className={`nav-li ${
                pathname === "/" ? "border-b-2 border-blue" : ""
              }`}
            >
              صفحه اصلی
            </Link>
          </li>
          <li className="border-l-2 border-gray px-4 md:px-6 lg:px-10">
            <Link
              href="/about"
              className={`nav-li ${
                pathname === "/about" ? "border-b-2 border-blue" : ""
              }`}
            >
              درباره ما
            </Link>
          </li>
          <li className="border-l-2 border-gray px-4 md:px-6 lg:px-10">
            <Link
              href="/automation"
              className={`nav-li ${
                pathname === "/automation" ? "border-b-2 border-blue" : ""
              }`}
            >
              اتوماسیون اداری
            </Link>
          </li>
          <li className="ml-1 px-4 md:px-6 lg:px-10">
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
  );
};

export default Navbar;
