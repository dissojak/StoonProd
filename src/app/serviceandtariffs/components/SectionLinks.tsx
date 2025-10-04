import React from "react";
import Link from "next/link";

const SectionLinks: React.FC = () => (
  <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <Link href="#">Our Projects <span aria-hidden="true">&rarr;</span></Link>
        <Link href="#">Contact Us <span aria-hidden="true">&rarr;</span></Link>
        <Link href="#">Services Offered <span aria-hidden="true">&rarr;</span></Link>
      </div>
    </div>
  </div>
);

export default SectionLinks;
