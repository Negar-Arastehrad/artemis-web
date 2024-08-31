import Navbar from "../_Components/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Footer from "../_Components/Footer";

export default function MainLayout({ children }) {
  return (
    <html>
      <body className="bg-back-photo bg-cover lg:bg-bottom">
        <ThemeProvider theme={theme}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
