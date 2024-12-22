import { Fragment } from "react";
import Navbar from "./components/Navbar";
import SliderSection from "./components/SliderSection";

export default function Home() {
  return (
    <Fragment>
      <div
        className="hero_area 
        lg:rounded-br-[350px] rounded-tl-none rounded-tr-none rounded-bl-none 
        xs:rounded-br-[175px]
        dark:bg-[#112C30]"
        >
        {/* lg:min-h-[88vh] xs:min-h-[83vh]
        rounded-br-[350px] rounded-tl-none rounded-tr-none rounded-bl-none 
        xs:rounded-br-[200px] xs:rounded-tl-none xs:rounded-tr-none xs:rounded-bl-none" */}
        <div className=" bg-[#112C30] h-16 w-auto -mb-4 xs:hidden ">
          <div className="text-white p-4">instagram</div>
        </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Navbar />
        <SliderSection />
      </div>
    </Fragment>
  );
}
