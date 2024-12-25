import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/Home/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
