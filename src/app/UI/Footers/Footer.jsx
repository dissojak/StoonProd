import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-myGreen dark:bg-[#112C30] text-white">
      <section className="footer-top">
        <div className="lg:relative lg:mb-24 xs:mb-10">
          <Image
            src="/assets/images/stoonprod_logo_white_version.png"
            alt="Logo"
            layout="intrinsic"
            width={120}
            height={100}
            className="lg:absolute lg:left-8 xs:max-w-xs xs:mx-auto lg:-top-10"
          />
        </div>
        <div className="footer-links">
          <div className="footer-links-column">
            <h2>Portfolio</h2>
            <Link href="/about">About</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/attributes">Attributes</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/testimonials">Testimonials</Link>
          </div>

          <div className="footer-links-column">
            <h2>Resources</h2>
            <Link href="https://github.com" target="_blank">
              GitHub
            </Link>
            <Link href="https://www.npmjs.com" target="_blank">
              npm
            </Link>
            <Link href="https://codepen.io" target="_blank">
              Codepen
            </Link>
            <Link href="https://codesandbox.io" target="_blank">
              Codesandbox
            </Link>
            <Link href="https://dribbble.com" target="_blank">
              Dribbble
            </Link>
          </div>

          <div className="footer-links-column footer-socials-column">
            <h2>Social Media</h2>
            <p>
              Follow me on social media to get the latest awesome reels and
              posts.
            </p>
            <div className="footer-socials xs:mb-20">
              <a href="https://instagram.com" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://tiktok.com" target="_blank">
                <FaTiktok />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-bottom">
        <p className="footer-copyright lg:ml-8">
          © 2024 All rights reserved by Stoon Production.
        </p>
        <div className="footer-legal">
          <Link href="/contact">Contact</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
