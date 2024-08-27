
import React from "react";
import logoImage1 from "../../../public/Images/logo1.png";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { Place, PhoneEnabled, Email, ExpandMore } from "@mui/icons-material";

const Footer = () => {
  return (
    <div
      className="w-full h-full md:rounded-tr-full rounded-tr-[15rem] tracking-widest"
      style={{
        background: `radial-gradient(circle at 67% 83%, hsla(317,0%,96%,0.05) 0%, hsla(317,0%,96%,0.05) 1%,transparent 1%, transparent 5%,transparent 5%, transparent 100%),radial-gradient(circle at 24% 80%, hsla(317,0%,96%,0.05) 0%, hsla(317,0%,96%,0.05) 27%,transparent 27%, transparent 63%,transparent 63%, transparent 100%),radial-gradient(circle at 23% 5%, hsla(317,0%,96%,0.05) 0%, hsla(317,0%,96%,0.05) 26%,transparent 26%, transparent 82%,transparent 82%, transparent 100%),radial-gradient(circle at 21% 11%, hsla(317,0%,96%,0.05) 0%, hsla(317,0%,96%,0.05) 35%,transparent 35%, transparent 45%,transparent 45%, transparent 100%),radial-gradient(circle at 10% 11%, hsla(317,0%,96%,0.05) 0%, hsla(317,0%,96%,0.05) 21%,transparent 21%, transparent 81%,transparent 81%, transparent 100%),radial-gradient(circle at 19% 61%, hsla(317,0%,96%,0.05) 0%, hsla(317,0%,96%,0.05) 20%,transparent 20%, transparent 61%,transparent 61%, transparent 100%),radial-gradient(circle at 13% 77%, hsla(317,0%,96%,0.05) 0%, hsla(317,0%,96%,0.05) 63%,transparent 63%, transparent 72%,transparent 72%, transparent 100%),radial-gradient(circle at 30% 93%, hsla(317,0%,96%,0.05) 0%, hsla(317,0%,96%,0.05) 33%,transparent 33%, transparent 82%,transparent 82%, transparent 100%),linear-gradient(90deg, rgb(160,182,209),rgb(0,64,128))`,

        "@media (max-width: 768px)": {
          background:
            "radial-gradient(circle at center top, hsla(210, 16%, 93%, 1) 40%, hsla(210, 100%, 25%, 1) 100%)",
        },
      }}
    >
      {/* Top Desktop Content */}
      <div className="w-full h-full hidden md:flex flex-col md:flex-row justify-between max-w-[80%] mx-auto items-stretch pt-8 pb-7">
        <div className="flex flex-col justify-center items-center basis-1/3">
          <Image
            src={logoImage1}
            alt="logoImage1"
            className="w-20 animation-pulse"
          />
          <p className="text-blue py-3 font-bold text-lg text-center">
            Artemis Company <br /> Official Representative of International
            Tours
          </p>
        </div>

        <ul className="basis-1/3">
          <h6 className="text-white font-bold mb-4 text-center pb-4 m-auto max-w-[40%] relative">
            Contact Us{" "}
            <div className="w-full h-1 bg-blue rounded-sm absolute top-9 left-0 overflow-hidden">
              <span className="w-6 h-full bg-white rounded-sm absolute top-0 left-2 animation-border"></span>
            </div>
          </h6>
          <li className="flex justify-center items-center gap-3 mb-4 mt-4 text-sm font-semibold">
            <PhoneEnabled className="text-blue" />
            <p className="text-white">021-91008802</p>
          </li>
          <li className="flex justify-center items-center gap-3 mb-4 text-sm font-semibold">
            <Email className="text-blue" />
            <p className="text-white">info@artemist.com</p>
          </li>
          <li className="flex justify-center items-center mt-4 mx-5 text-sm font-semibold">
            <Place className="text-blue" />
            <p className="text-white text-center max-w-[80%]">
              Karaj, Haft-e-Tir Square, Beginning of Belal Blvd, Naderi Alley,
              Kristal Building, Unit 2, 2nd Floor
            </p>
          </li>
        </ul>

        <ul className="text-center basis-1/3 mr-8">
          <h6 className="text-white font-bold mb-4 pb-4 text-center m-auto max-w-[40%] relative">
            Important Links{" "}
            <div className="w-full h-1 bg-blue rounded-sm absolute top-9 left-0 overflow-hidden">
              <span className="w-6 h-full bg-white rounded-sm absolute top-0 left-2 animation-border"></span>
            </div>
          </h6>
          <li className="mb-4 text-white mt-4 text-sm font-semibold">
            <Link href="/">Home</Link>
          </li>
          <li className="mb-4 text-white text-sm font-semibold">
            <Link href="/about">About Us</Link>
          </li>
          <li className="mb-4 text-white text-sm font-semibold">
            <Link href="/automation">Office Automation</Link>
          </li>
          <li className="mt-4 text-white text-sm font-semibold">
            <Link href="/guidance">Artemis Guidance System</Link>
          </li>
        </ul>
      </div>

      {/* Top Mobile Content */}
      <div className="w-full h-full flex md:hidden flex-col md:flex-row justify-between max-w-[80%] mx-auto items-stretch pt-8 pb-7">
        <div className="flex flex-col justify-center items-center basis-1/3">
          <Image
            src={logoImage1}
            alt="logoImage1"
            className="w-20 animation-pulse"
          />
          <p className="text-white py-3 font-bold text-center">
            Artemis Company <br /> Official Representative of International
            Tours
          </p>
        </div>

        <Accordion
          disableGutters
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            "&:before": { display: "none" },
            width: "80%",
            marginX: "auto",
            marginTop: "2rem",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore className="text-white" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ borderBottom: "2px solid white", padding: "0", margin: "0" }}
          >
            <Typography
              className="text-center text-white"
              sx={{ fontWeight: "600" }}
            >
              Contact Us
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="text-blue">
              <li className="flex gap-3 mb-4 mt-4">
                <PhoneEnabled className="text-white" />
                <Typography sx={{ fontWeight: "600", fontSize: ".9rem" }}>
                  021-91008802
                </Typography>
              </li>
              <li className="flex gap-3 mb-4">
                <Email className="text-white" />
                <Typography sx={{ fontWeight: "600", fontSize: ".9rem" }}>
                  info@artemist.com
                </Typography>
              </li>
              <li className="flex mt-4">
                <Place className="text-white mr-3" />
                <Typography sx={{ fontWeight: "600", fontSize: ".9rem" }}>
                  Karaj, Haft-e-Tir Square, Beginning of Belal Blvd, Naderi
                  Alley, Kristal Building, Unit 2, 2nd Floor
                </Typography>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion
          disableGutters
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            "&:before": { display: "none" },
            width: "80%",
            marginX: "auto",
            marginY: "2rem",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore className="text-white" />}
            aria-controls="panel3a-content"
            id="panel3a-header"
            sx={{ borderBottom: "2px solid white", padding: "0", margin: "0" }}
          >
            <Typography
              className="text-center text-white"
              sx={{ fontWeight: "600" }}
            >
              Important Links
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="text-blue">
              <li className="mb-4 mt-4 font-bold text-sm">
                <Link href="/" underline="none">
                  Home
                </Link>
              </li>
              <li className="mb-4 font-bold text-sm">
                <Link href="/about" underline="none">
                  About Us
                </Link>
              </li>
              <li className="mb-4 font-bold text-sm">
                <Link href="/automation" underline="none">
                  Office Automation
                </Link>
              </li>
              <li className="mt-4 font-bold text-sm">
                <Link href="/guidance" underline="none">
                  Artemis Guidance System
                </Link>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Bottom Content */}
      <hr className="w-[80%] mx-auto  border-b-1 border-white" />
      <div>
        <p className="text-white text-center py-3 font-bold">
          All rights reserved. © 2024 Artemis Company
        </p>
      </div>
    </div>
  );
};

export default Footer;
