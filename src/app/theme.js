"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    blue: "#004080",
    gray: "#d9d9d9",
    black: "#000000",
    hoverBlue: "#0055ab"
  },
  typography: {
    fontFamily: 'var(--font-kalameh)',  
  },
});

export default theme;
