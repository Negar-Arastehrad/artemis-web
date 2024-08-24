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
        glass: "rgba(255, 255, 255, 0.4)",
        darkGlass: "rgba(255, 255, 255, 0.8)",
        Lightred: "#FF6666"
      },
      boxShadow: {
        'custom-blue': '0px -2px 10px rgba(0, 64, 128, 0.1), 0px 6px 20px rgba(0, 64, 128, 0.4)',
      },
    },
  },
  plugins: [],
};
