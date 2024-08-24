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
      className="w-full h-full md:rounded-tr-full rounded-tr-[15rem]"
      style={{
        background:
          "linear-gradient(90deg, hsla(210, 100%, 25%, 1) 8%, hsla(210, 16%, 93%, 1) 100%)",
      }}
    >
      {/* Top Desktop Content */}
      <div className="w-full h-full hidden md:flex flex-col md:flex-row justify-between max-w-[80%] mx-auto items-stretch pt-8 pb-7">
        <div className="flex flex-col justify-center items-center basis-1/3">
          <Image src={logoImage1} alt="logoImage1" className="w-20 animation-pulse" />
          <p className="text-blue py-3 font-semibold text-center">
            شرکت آرتمیس <br /> کارگزار رسمی تور های خارجی
          </p>
        </div>

        <ul className="basis-1/3">
          <h6 className="text-white font-semibold mb-4 text-center pb-4 m-auto max-w-[40%] relative">
            تماس با ما <div className="w-full h-1 bg-blue rounded-sm absolute top-9 left-0 overflow-hidden"><span className="w-6 h-full bg-white rounded-sm absolute top-0 left-2 animation-border"></span></div>
          </h6>
          <li className="flex justify-center items-center gap-3 mb-4 mt-4 text-sm">
            <PhoneEnabled className="text-blue" />
            <p className="text-white">021-91008802</p>
          </li>
          <li className="flex justify-center items-center gap-3 mb-4 text-sm">
            <Email className="text-blue" />
            <p className="text-white">info@artemist.com</p>
          </li>
          <li className="flex justify-center items-center mt-4 mx-5 text-sm">
            <Place className="text-blue" />
            <p className="text-white text-center">
              کرج, چهارراه هفت تیر, ابتدای بلوار بلال, بن بست نادری, ساختمان
              کریستال, واحد 2, طبقه دوم
            </p>
          </li>
        </ul>

        <ul className="text-center basis-1/3">
          <h6 className="text-white font-semibold mb-4 pb-4 text-center m-auto max-w-[40%] relative">
            لینک های مهم <div className="w-full h-1 bg-blue rounded-sm absolute top-9 left-0 overflow-hidden"><span className="w-6 h-full bg-white rounded-sm absolute top-0 left-2 animation-border"></span></div>
          </h6>
          <li className="mb-4 text-white mt-4 text-sm">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className="mb-4 text-white text-sm">
            <Link href="/about">درباره ما</Link>
          </li>
          <li className="mb-4 text-white text-sm">
            <Link href="/automation">اتوماسیون اداری</Link>
          </li>
          <li className="mt-4 text-white text-sm">
            <Link href="/guidance">سامانه راهنمایان آرتمیس</Link>
          </li>
        </ul>
      </div>

      {/* Top Mobile Content */}
      <div className="w-full h-full flex md:hidden flex-col md:flex-row justify-between max-w-[80%] mx-auto items-stretch pt-8 pb-7">
        <div className="flex flex-col justify-center items-center basis-1/3">
          <Image src={logoImage1} alt="logoImage1" className="w-20" />
          <p className="text-blue py-3 font-semibold text-center">
            شرکت آرتمیس <br /> کارگزار رسمی تور های خارجی
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
            <Typography className="text-center text-blue" sx={{fontWeight:"600"}}>
              تماس با ما
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="text-white">
              <li className="flex gap-3 mb-4 mt-4">
                <PhoneEnabled className="text-blue" />
                <Typography>021-91008802</Typography>
              </li>
              <li className="flex gap-3 mb-4">
                <Email className="text-blue" />
                <Typography>info@artemist.com</Typography>
              </li>
              <li className="flex mt-4">
                <Place className="text-blue" />
                <Typography>
                  کرج, چهارراه هفت تیر, ابتدای بلوار بلال, بن بست نادری, ساختمان
                  کریستال, واحد 2, طبقه دوم
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
            <Typography className="text-center text-blue" sx={{fontWeight: '600'}}>
              لینک های مهم
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="text-white">
              <li className="mb-4 mt-4">
                <Link href="/" underline="none">
                  صفحه اصلی
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/about" underline="none">
                  درباره ما
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/automation" underline="none">
                  اتوماسیون اداری
                </Link>
              </li>
              <li className="mt-4">
                <Link href="/guidance" underline="none">
                  سامانه راهنمایان آرتمیس
                </Link>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Bottom Content */}
      <hr className="w-[80%] mx-auto  border-b-1 border-blue" />
      <div>
        <p className="text-white text-center py-3 text-sm">
          کلیه حقوق این وب‌سایت متعلق به شرکت آرتمیس است. © ۱۴۰۳
        </p>
      </div>
    </div>
  );
};

export default Footer;
