import React from "react";
import Link from "next/link";

const BottomBar: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className="py-4 bg-teal-100">
      <div className="flex items-center justify-center">
        <span className="block text-center text-sm text-gray-800">
          © {year} All Rights Reserved by
          <Link className="hover:underline" href="https://stoonproduction.com/"> Stoon Production</Link>
        </span>
      </div>
    </div>
  );
};

export default BottomBar;
