import Navbar from "./Navbar";
import Footer from "./Footer";
import WordArea from "./WordArea";
import SubmitArea from "./SubmitArea";
import { useState } from "react";

const Hero = () => {
  const [shouldReload, setShouldReload] = useState(false);

  const handleReloadWordArea = () => {
    setShouldReload(!shouldReload);
  };
  return (
    <div className="text-white w-screen h-screen flex flex-col">
      <Navbar logged />
      <div className=" text-black w-full h-full flex flex-col xs:flex-row justify-center items-center">
        <div className="w-full  xs:h-full h-[60%] bg-white flex flex-col justify-center items-center ">
          <WordArea shouldReload={shouldReload} />
        </div>
        <div className="w-full xs:h-full h-[40%] bg-red-300 flex flex-col justify-center items-center">
          <SubmitArea onReloadWordArea={handleReloadWordArea} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hero;
