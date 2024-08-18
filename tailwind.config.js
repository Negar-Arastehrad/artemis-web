/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "back-pattern": "url('/Images/backgrounds/2.png')",
      },
      colors: {
        blue: "#004080",
        gray: "#d9d9d9",
        black: "#000000",
      },
    },
    plugins: [],
  },
};
