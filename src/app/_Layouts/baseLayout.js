import Navbar from "../_Components/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Footer from "../_Components/Footer";

export default function BaseLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
