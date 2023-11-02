import Navbar from "./Navbar";
import Footer from "./Footer";
import WordArea from "./WordArea";
import SubmitArea from "./SubmitArea";

const Hero = () => {
  return (
    <div className="text-white w-screen h-screen flex flex-col">
      <Navbar logged />
      <div className=" text-black w-full h-full flex flex-col sm:flex-row justify-center items-center">
        <div className="w-full h-[60%] xs:h-full sm:h-full bg-white flex flex-col justify-center items-center ">
          <WordArea />
        </div>
        <div className="w-full xs:h-full sm:h-full h-[40%] bg-white flex flex-col justify-center items-center">
          <SubmitArea />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hero;
