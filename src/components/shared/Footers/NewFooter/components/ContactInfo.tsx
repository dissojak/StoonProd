import React from "react";
import Link from "next/link";

const ContactInfo: React.FC = () => (
  <div className="block text-center xl:text-left xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3 xl:pl-5">
    <h4 className="text-lg text-emerald-950 dark:text-white font-bold mb-9">Get In Touch</h4>
    <ul className="text-emerald-950 dark:text-white transition-all duration-500 grid gap-6">
      <li>
        <Link href="mailto:StoonProduction@gmail.com" className="hover:underline cursor-pointer">
          StoonProduction@gmail.com
        </Link>
      </li>
      <li>
        <Link
          href="https://wa.me/21623039320"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          +216 23 039 320
        </Link>
      </li>
    </ul>
  </div>
);

export default ContactInfo;
