import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/Home/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stoon Production | Videography, Photography & Web Development Services",
  description: "Stoon Production offers videography, photography, and web development services, specializing in creative content solutions and event coverage.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <header>
          <Navbar />
        </header> */}
        {children}
      </body>
    </html>
  );
}
