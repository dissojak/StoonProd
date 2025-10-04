import React from "react";
import { INSTAGRAM_PLACEHOLDER } from "../utils/constants";

const InstagramBar: React.FC = () => {
  return (
    <div className=" bg-[#112C30] h-16 w-auto -mb-4 xs:hidden ">
      <div className="text-white p-4">{INSTAGRAM_PLACEHOLDER}</div>
    </div>
  );
};

export default InstagramBar;
