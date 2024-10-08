"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    blue: "#004080",
    gray: "#d9d9d9",
    black: "#000000",
    hoverBlue: "#0055ab",
    glass: "rgba(255, 255, 255, 0.8)",
    Lightred: "#FF6666"
  },
  typography: {
    fontFamily: 'var(--font-champagne-limousines)', 
  },
});

export default theme;
