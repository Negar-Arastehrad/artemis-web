"use client";
import React, { useState } from "react";
import logoImg from "../../../public/Images/logo1.png";
import telImg from "../../../public/Images/Tel.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Phone } from "@mui/icons-material";
import Popover from "@mui/material/Popover";

const Navbar = () => {
  const pathname = usePathname(); // for active link style

  const [nav, setNav] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // PopUp

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

  const handlePhoneOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePhoneClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      {/* Overlay */}
      {nav ? (
        <div
          className={`fixed inset-0 bg-black opacity-40 ${
            nav ? "block" : "hidden"
          } z-40`}
          onClick={closeNav}
        ></div>
      ) : (
        ""
      )}

      {/* Main Nav */}
      <div className="scroll-m-10 sticky top-0 left-0 right-0 bg-white shadow-custom-blue rounded-full max-w-[80%] sm:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] mx-auto mt-7 z-50">
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
          <ul className="hidden md:flex items-center justify-center w-full text-blue font-semibold text-sm text-center rounded-full">
            <li className="border-l-2 border-gray px-8">
              <Link
                href="/"
                className={`nav-li ${
                  pathname === "/" ? "border-b-2 border-blue" : ""
                }`}
              >
                صفحه اصلی
              </Link>
            </li>
            <li className="border-l-2 border-gray px-8">
              <Link
                href="/about"
                className={`nav-li ${
                  pathname === "/about" ? "border-b-2 border-blue" : ""
                }`}
              >
                درباره ما
              </Link>
            </li>
            <li className="border-l-2 border-gray px-8">
              <Link
                href="/automation"
                className={`nav-li ${
                  pathname === "/automation" ? "border-b-2 border-blue" : ""
                }`}
              >
                اتوماسیون اداری
              </Link>
            </li>
            <li className=" px-8">
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
          <div
            className="text-white bg-blue hover:text-blue hover:bg-white transition duration-300 hover:scale-110 hover:-rotate-[30deg] rounded-full w-14 h-12 hidden md:flex justify-center items-center cursor-pointer m-2"
            onClick={handlePhoneOpen}
          >
            <Phone />
          </div>
        </div>

        {/* Popover for both desktop and mobile */}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handlePhoneClose}
          anchorOrigin={{
            vertical: "bottom", // Opens below the icon
            horizontal: "center", // Centered relative to the icon
          }}
          transformOrigin={{
            vertical: "top", // Aligns the top of the popover with the bottom of the icon
            horizontal: "center", // Horizontally centered
          }}
          sx={{
            "& .MuiPaper-root": {
              borderRadius: ".5rem",
              marginTop:"-.6rem"
            }
          }}
        >
          <Link href="tel:02191008802">
            <Image src={telImg} alt="tel" className="w-40" />
          </Link>
        </Popover>

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
          <li
            className="text-white bg-blue hover:text-blue hover:bg-white rounded-full w-14 h-14 md:hidden flex justify-center items-center cursor-pointer mr-[1.5rem] mt-2 transition duration-300 hover:scale-110 hover:-rotate-[30deg]"
            onClick={handlePhoneOpen}
          >
            <Phone />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
