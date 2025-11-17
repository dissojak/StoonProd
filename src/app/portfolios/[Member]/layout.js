import { Poppins } from "next/font/google";
import "./css/globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "@/components/shared/Footers/Footer";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function MemberLayout({ children }) {
  return (
    <>
      <div className={`member-portfolio-layout ${poppins.className}`}>
        {/* Main Content */}
        <main className="mt-28">
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <article className="about active" data-page="about">
              {children}
            </article>
          </div>
        </main>
        {/* Footer Section */}
      </div>
      <Footer />
    </>
  );
}
