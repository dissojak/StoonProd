import { Fragment } from "react";
import Navbar from "./components/Navbar";
import SliderSection from "./components/SliderSection";

export default function Home() {
  return (
    <Fragment>
      <div className="hero_area">
        <div className="topBare">
          <div className="text-white p-4">instagram</div>
        </div>
        <Navbar />
        <SliderSection />
      </div>
    </Fragment>
  );
}
