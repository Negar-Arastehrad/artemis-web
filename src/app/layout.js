import localFont from "next/font/local";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "./_Components/Navbar";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

export const kalameh = localFont({
  src: [
    // Regular Kalameh fonts
    {
      path: "../../public/fonts/woff2/KalamehWeb-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWeb-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWeb-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWeb-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWeb-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWeb-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWeb-Black.woff2",
      weight: "900",
      style: "normal",
    },

    // Kalameh with Farsi Numerals (FaNum)
    {
      path: "../../public/fonts/woff2/KalamehWebFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebFaNum-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },

    // Kalameh No English (NoEn)
    {
      path: "../../public/fonts/woff2/KalamehWebNoEn-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebNoEn-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebNoEn-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebNoEn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebNoEn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebNoEn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebNoEn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebNoEn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/woff2/KalamehWebNoEn-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-kalameh",
});

export const metadata = {
  title: "Artemist",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" className={`dark ${figtree.variable} ${kalameh.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
