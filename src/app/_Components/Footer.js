import React from "react";
import logoImage1 from "../../../public/Images/logo1.png";
import logoImage2 from "../../../public/Images/Logo2.png";
import Image from "next/image";
import Link from "next/link";
import { LocationOn, PhoneEnabled, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <div>
      <div>
        {/* Top */}
        <div>
          <div>
            <Image src={logoImage1} alt="logoImage1" />
            <Image src={logoImage2} alt="logoImage2" />
          </div>

          <ul>
            <h6>تماس با ما</h6>
            <li>
              <PhoneEnabled />
              <p>02191008802</p>
            </li>
            <li>
              <Email />
              <p>info@artemist.com</p>
            </li>
            <li>
              <LocationOn />
              <p>
                کرج, چهارراه هفت تیر, ابتدای بلوار بلال, بن بست نادری, ساختمان
                کریستال, واحد 2, طبقه دوم
              </p>
            </li>
          </ul>

          <ul>
            <h6>لینک های مهم</h6>
            <li>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link href="/about">درباره ما</Link>
            </li>
            <li>
              <Link href="/automation">اتوماسیون اداری</Link>
            </li>
            <li>
              <Link href="/guidance">سامانه راهنمایان آرتمیس</Link>
            </li>
          </ul>
        </div>

        {/* Bottom */}
        <div>
          <p>کلیه حقوق این وب‌سایت متعلق به شرکت آرتمیس است. © 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
