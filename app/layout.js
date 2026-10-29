import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manish Suriyal",
  description: "Full Stack Developer Portfolio",
  icons : {
    icon:"/favicon.svg"
  }
 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider>       {/* ← handles dark + Navbar */}
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}